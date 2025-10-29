"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Cloud, Code, Server, Briefcase, GraduationCap, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">Chase Billing</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#certifications" className="text-sm hover:text-primary transition-colors">Certifications</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Image
                src="/large.jpg"
                alt="Chase Billing"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Chase Billing
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-6">
            Lead Infrastructure Developer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Platform Engineer with 8+ years of experience designing and automating cloud-native infrastructure. 
            Specialized in Kubernetes, Terraform, and GitOps to drive scalable deployments, reduce costs, 
            and accelerate developer productivity.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/chase-billing-158b9b149" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I&apos;m a passionate Platform Engineer with over 8 years of experience specializing in cloud-native 
                infrastructure and automation. Currently serving as Lead Infrastructure Developer at Prudential Financial, 
                I focus on building scalable, reliable, and cost-effective infrastructure solutions using cutting-edge 
                technologies like Kubernetes, Terraform, and GitOps methodologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            {/* Prudential Financial */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="text-primary" size={24} />
                      Prudential Financial
                    </CardTitle>
                    <CardDescription>Newark, New Jersey, United States</CardDescription>
                  </div>
                  <Badge>Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Lead Infrastructure Developer</h4>
                    <p className="text-sm text-muted-foreground">November 2023 - Present (2 years)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Senior Infrastructure Developer</h4>
                    <p className="text-sm text-muted-foreground">November 2022 - November 2023 (1 year)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Specialist, Development Operations</h4>
                    <p className="text-sm text-muted-foreground">June 2021 - December 2022 (1 year 7 months)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HighPoint */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="text-primary" size={24} />
                      HighPoint
                    </CardTitle>
                    <CardDescription>Sparta, New Jersey, United States</CardDescription>
                  </div>
                  <Badge variant="secondary">8 years 2 months</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Network Operations Supervisor</h4>
                    <p className="text-sm text-muted-foreground">March 2021 - June 2021 (4 months)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Network Operations Engineer L2</h4>
                    <p className="text-sm text-muted-foreground">May 2018 - March 2021 (2 years 11 months)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Network Operations Engineer L1</h4>
                    <p className="text-sm text-muted-foreground">May 2015 - May 2018 (3 years 1 month)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Staging Specialist</h4>
                    <p className="text-sm text-muted-foreground">May 2013 - May 2015 (2 years 1 month)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Top Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="text-primary" size={24} />
                  Cloud & Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Kubernetes</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Azure Container Apps</Badge>
                  <Badge>AWS</Badge>
                  <Badge>ArgoCD</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-primary" size={24} />
                  Infrastructure as Code & Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Terraform</Badge>
                  <Badge>Helm</Badge>
                  <Badge>Operator SDK</Badge>
                  <Badge>AWS Step Functions</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-primary" size={24} />
                  Programming & APIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>Go</Badge>
                  <Badge>FastAPI</Badge>
                  <Badge>REST APIs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="text-primary" size={24} />
                  CI/CD & Source Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>GitHub</Badge>
                  <Badge>GitHub Actions</Badge>
                  <Badge>Jenkins</Badge>
                  <Badge>Bitbucket</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="text-primary" size={24} />
                  Observability & Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Splunk</Badge>
                  <Badge>Dynatrace</Badge>
                  <Badge>PowerBI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="text-primary" size={24} />
                  AI & Emerging Tech
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>AWS Bedrock</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto text-primary mb-2" size={48} />
                <CardTitle className="text-lg">AWS Certified Cloud Practitioner</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto text-primary mb-2" size={48} />
                <CardTitle className="text-lg">AWS Certified Developer – Associate</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto text-primary mb-2" size={48} />
                <CardTitle className="text-lg">HashiCorp Certified: Terraform Associate (003)</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                Geneva College
              </CardTitle>
              <CardDescription>Bachelor&apos;s degree, Computer Engineering</CardDescription>
              <CardDescription>2009 - 2013</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                I&apos;m always interested in hearing about new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/chase-billing-158b9b149" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                  <Linkedin size={20} />
                  LinkedIn Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Chase Billing. Built with Next.js, TypeScript, and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
