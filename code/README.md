# Chase Billing - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and TailwindCSS.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **TailwindCSS** for styling
- 📱 **Fully Responsive** design
- 🎯 **TypeScript** for type safety
- 🎭 **Modern UI** with shadcn/ui components
- 🎨 **Lucide Icons** for beautiful iconography
- 🌓 **Dark mode** support
- 📊 **Sections**: About, Experience, Skills, Certifications, Education, Contact

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and Tailwind setup
├── components/
│   └── ui/                 # Reusable UI components
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Customization

All personal information is currently in the `app/page.tsx` file. To customize:

1. Edit the content directly in `app/page.tsx`
2. Update the metadata in `app/layout.tsx`
3. Modify colors in `tailwind.config.ts`

## License

MIT License - feel free to use this template for your own portfolio!
