const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const rootDir = path.join(__dirname, '..');
const manifestPath = path.join(__dirname, '.deploy-manifest.json');

if (!fs.existsSync(outDir)) {
  console.error('Error: out directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Clean up old build files using manifest
if (fs.existsSync(manifestPath)) {
  console.log('Cleaning up previous build files...');
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    manifest.files.forEach(item => {
      const itemPath = path.join(rootDir, item);
      if (fs.existsSync(itemPath)) {
        if (fs.statSync(itemPath).isDirectory()) {
          fs.rmSync(itemPath, { recursive: true });
          console.log(`  Removed: ${item}/`);
        } else {
          fs.unlinkSync(itemPath);
          console.log(`  Removed: ${item}`);
        }
      }
    });
  } catch (error) {
    console.warn('Warning: Could not clean up previous build files:', error.message);
  }
}

console.log('Copying build output to parent directory...');

// Get all files and directories from out folder
const items = fs.readdirSync(outDir);

items.forEach(item => {
  const srcPath = path.join(outDir, item);
  const destPath = path.join(rootDir, item);
  
  // Copy to destination
  fs.cpSync(srcPath, destPath, { recursive: true });
  console.log(`  Copied: ${item}`);
});

// Save manifest of copied files for next cleanup
fs.writeFileSync(manifestPath, JSON.stringify({ files: items }, null, 2));

console.log('\n✓ Build output successfully copied to repo root');
