"use client"

import { useState } from "react"
import {
  Menu,
  X,
  BarChart3,
  Shield,
  Zap,
  Star,
  Lock,
  CheckCircle,
  FileCheck,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Feedback from "./feedback"

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ]

  const services = [
    {
      icon: BarChart3,
      title: "Smart Automation",
      description:
        "Automatically categorize transactions, reconcile accounts, and generate reports without manual data entry.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, multi-factor authentication, and compliance with SOC 2, ISO 27001, and GDPR standards.",
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      description:
        "Get instant visibility into cash flow, expenses, and financial health with live dashboards and alerts.",
    },
  ]

  const steps = [
    {
      number: "1",
      title: "Connect Your Accounts",
      description:
        "Link your bank accounts, credit cards, and financial platforms in seconds with secure API integration.",
    },
    {
      number: "2",
      title: "Automatic Categorization",
      description: "AI-powered system learns your patterns and automatically tags and categorizes every transaction.",
    },
    {
      number: "3",
      title: "Real-Time Reconciliation",
      description: "Accounts reconcile automatically, detecting discrepancies and flagging unusual activity instantly.",
    },
    {
      number: "4",
      title: "Generate Reports",
      description: "Create custom financial reports, tax documents, and compliance reports with a single click.",
    },
    {
      number: "5",
      title: "Monitor & Optimize",
      description: "Track KPIs, identify cost-saving opportunities, and make data-driven financial decisions.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Properly reduced our monthly property management workload by 60%. The automation features alone have saved us thousands of dollars.",
      author: "Sarah Mitchell",
      title: "Property Manager at Urban Estates",
      rating: 5,
    },
    {
      quote:
        "The best property management tool we've used. Implementation took 2 days, and we were managing all properties efficiently by day 3.",
      author: "James Chen",
      title: "Real Estate Investor",
      rating: 5,
    },
    {
      quote:
        "Security and compliance features are top-notch. Our auditors were impressed with the level of documentation and controls.",
      author: "Emma Rodriguez",
      title: "Head of Operations at RentHub",
      rating: 5,
    },
  ]

  const badges = [
    {
      icon: Lock,
      title: "ISO 27001 Certified",
      description: "Enterprise-grade information security management",
    },
    {
      icon: CheckCircle,
      title: "SOC 2 Compliant",
      description: "Security, availability, and confidentiality verified",
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with data protection regulations",
    },
    {
      icon: FileCheck,
      title: "HIPAA Ready",
      description: "Healthcare data security standards met",
    },
  ]

  const footerLinks = {
    "About Us": ["Our Story", "Team", "Careers", "Blog"],
    Contact: ["Support", "Sales", "Partnerships", "Press"],
    Resources: ["Documentation", "API Docs", "Status", "Security"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  }

  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/House.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
      </div>

      <div className="relative z-10">
        {/* HEADER SECTION */}
        <header className="fixed top-0 inset-x-0 z-50 bg-transparent backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2D3E50] to-[#FF6B35] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl text-white hidden sm:inline">Properly</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex">
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 rounded-full bg-transparent">
                <Link href="/auth/login">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-md">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm font-medium text-white/80 hover:text-white py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/10 rounded-full mt-4 bg-transparent">
                  <Link href="/auth/login">Get Started</Link>
                </Button>
              </div>
            </div>
          )}
        </header>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-transparent pt-20 pb-32">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2D3E50]/5 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              
            

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Simplify Your Property Management
              </h1>

              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Modern property management solutions designed for landlords and property managers. Save time and streamline your rental operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild className="bg-white hover:bg-white/90 text-[#2D3E50] px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow font-semibold">
                  <Link href="/auth/signup">Book a Demo</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full bg-white/10 backdrop-blur-sm"
                >
                  <Link href="/auth/signup">Start Free Trial</Link>
                </Button>
              </div>

              <div className="pt-12">
                <div className="bg-gradient-to-br from-[#2D3E50]/5 to-[#FF6B35]/5 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                  <img
                    src="/Hero.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2D3E50] mb-4">Powerful Features Built for Scale</h2>
              <p className="text-lg text-foreground/60">Everything you need to manage finances efficiently</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <Card
                    key={idx}
                    className="p-8 border-0 bg-gradient-to-br from-white to-[#F9FAFB] shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2D3E50] mb-2">{service.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2D3E50] mb-4">Your 5-Step Path to Financial Clarity</h2>
              <p className="text-lg text-foreground/60">Simple, intuitive, and designed for rapid implementation</p>
            </div>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold text-xl shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-[#2D3E50] mb-2">{step.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                  </div>

                  <div className="hidden lg:flex flex-shrink-0 w-48 h-32">
                    <div className="w-full h-full bg-gradient-to-br from-[#2D3E50]/5 to-[#FF6B35]/5 rounded-lg flex items-center justify-center">
                      <img
                        src={`/step-.jpg?height=128&width=192&query=step-${step.number}-illustration`}
                        alt={step.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2D3E50] mb-4">Trusted by Finance Leaders</h2>
              <p className="text-lg text-foreground/60">
                See how companies are transforming their financial operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className="p-8 border-0 bg-gradient-to-br from-white to-[#F9FAFB] shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FF6B35] text-[#FF6B35]" />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

                  <div>
                    <p className="font-bold text-[#2D3E50]">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BADGES SECTION */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2D3E50] mb-4">Security & Compliance You Can Trust</h2>
              <p className="text-lg text-foreground/60">Industry-leading certifications and security standards</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {badges.map((badge, idx) => {
                const Icon = badge.icon
                return (
                  <Card
                    key={idx}
                    className="p-8 border-0 bg-white text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <h3 className="font-bold text-[#2D3E50] mb-2">{badge.title}</h3>
                    <p className="text-sm text-foreground/60">{badge.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-[#2D3E50] to-[#1a2432] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-5xl font-bold leading-tight">Ready to Transform Your Property Management?</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Join hundreds of property managers saving time, reducing errors, and gaining clarity with Properly.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 inline-block">
              <p className="text-white font-medium">3 months free trial • No credit card required • Cancel anytime</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild className="bg-[#FF6B35] hover:bg-[#e55a23] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 justify-center">
                <Link href="/auth/signup">Book Your Demo <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                <Link href="/auth/signup">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <Feedback />

        {/* FOOTER SECTION */}
        <footer className="bg-[#2D3E50] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 mb-12">
              <div className="col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-white to-[#FF6B35] rounded-lg flex items-center justify-center">
                    <span className="text-[#2D3E50] font-bold text-sm">P</span>
                  </div>
                  <span className="font-bold text-lg">Properly</span>
                </div>
                <p className="text-white/60 text-sm">Property management for modern landlords.</p>
              </div>

              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-bold text-white mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/60 text-sm">© {currentYear} Properly. All rights reserved.</p>

                <div className="flex gap-6">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
