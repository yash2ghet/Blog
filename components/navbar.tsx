"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ArrowRight } from "lucide-react"
import {
  Cpu,
  Cloud,
  LayoutGrid,
  Database,
  ShieldCheck,
  Grid2x2,
  CreditCard,
  HeartPulse,
  ShoppingCart,
  Truck,
  Settings,
  FileText,
  BookOpen,
  Users,
  Mail,
  Workflow,
  Server,
} from "lucide-react"
import { SiGooglecloud } from "react-icons/si"
import { FaMicrosoft, FaAws } from "react-icons/fa6"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string
  icon: React.ReactNode
  iconBg: string
}

type NavSection = {
  title: string
  items: NavItem[]
}

const iconBoxColors = [
  "bg-blue-50 text-blue-600",
  "bg-sky-50 text-sky-600",
  "bg-rose-50 text-rose-600",
  "bg-amber-50 text-amber-600",
  "bg-indigo-50 text-indigo-600",
  "bg-emerald-50 text-emerald-600",
]

const sections: NavSection[] = [
  {
    title: "Engineering",
    items: [
      { label: "AI/ML Engineering", href: "/services/ai-ml-development", icon: <Cpu className="h-5 w-5" />, iconBg: iconBoxColors[0] },
      { label: "Cloud & DevOps Engineering", href: "/services/cloud-devops", icon: <Cloud className="h-5 w-5" />, iconBg: iconBoxColors[1] },
      { label: "Digital & Experience Engineering", href: "/services/digital-experience", icon: <LayoutGrid className="h-5 w-5" />, iconBg: iconBoxColors[2] },
      { label: "Data Engineering", href: "/services/data-engineering", icon: <Database className="h-5 w-5" />, iconBg: iconBoxColors[3] },
      { label: "Enterprise Solutions", href: "/services/enterprise-solutions", icon: <ShieldCheck className="h-5 w-5" />, iconBg: iconBoxColors[4] },
      { label: "Microsoft Technologies", href: "/services/microsoft-technologies", icon: <Grid2x2 className="h-5 w-5" />, iconBg: iconBoxColors[5] },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Financial Services", href: "/industries/finance", icon: <CreditCard className="h-5 w-5" />, iconBg: iconBoxColors[0] },
      { label: "Supply Chain and Logistics", href: "/industries/supply-chain", icon: <Truck className="h-5 w-5" />, iconBg: iconBoxColors[1] },
      { label: "Healthcare and Life Sciences", href: "/industries/healthcare", icon: <HeartPulse className="h-5 w-5" />, iconBg: iconBoxColors[2] },
      { label: "Hi-Tech and Digital Natives", href: "/industries/hitech", icon: <Settings className="h-5 w-5" />, iconBg: iconBoxColors[5] },
      { label: "Retail and E-commerce", href: "/industries/retail", icon: <ShoppingCart className="h-5 w-5" />, iconBg: iconBoxColors[3] },
    ],
  },
  {
    title: "Partners",
    items: [
      { label: "Microsoft", href: "/partners/microsoft", icon: <FaMicrosoft className="h-5 w-5" />, iconBg: "bg-slate-50 text-slate-700" },
      { label: "AWS", href: "/partners/aws", icon: <FaAws className="h-5 w-5" />, iconBg: "bg-orange-50 text-orange-600" },
      { label: "Google Cloud", href: "/partners/google", icon: <SiGooglecloud className="h-5 w-5" />, iconBg: "bg-blue-50 text-blue-600" },
    ],
  },
  {
    title: "Insights",
    items: [
      { label: "Case Studies", href: "/insights/cases", icon: <FileText className="h-5 w-5" />, iconBg: iconBoxColors[0] },
      { label: "Blogs", href: "/insights/blogs", icon: <BookOpen className="h-5 w-5" />, iconBg: iconBoxColors[1] },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about", icon: <Users className="h-5 w-5" />, iconBg: iconBoxColors[0] },
      { label: "Contact Us", href: "/contact", icon: <Mail className="h-5 w-5" />, iconBg: iconBoxColors[1] },
      { label: "How We Work", href: "/work", icon: <Workflow className="h-5 w-5" />, iconBg: iconBoxColors[4] },
    ],
  },
]

function NavDropdown({ title, items }: NavSection) {
  const columns = items.length > 3 ? 2 : 1

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-lg font-medium px-5">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="p-8 bg-white rounded-2xl flex gap-10">
          <div className={columns === 2 ? "w-[520px]" : "w-[280px]"}>
            <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-6">
              {title}
            </p>
            <div
              className={cn(
                "grid gap-x-8 gap-y-1",
                columns === 2 ? "grid-cols-2" : "grid-cols-1"
              )}
            >
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-[14px] font-medium text-slate-700"
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                      item.iconBg
                    )}
                  >
                    {item.icon}
                  </span>
                  <span className="flex-1 leading-tight">{item.label}</span>
                  <ArrowRight className="h-4 w-4 text-blue-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="w-[300px] p-6 rounded-2xl flex flex-col justify-center bg-slate-50/80">
            <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 mb-3 uppercase">
              Get Started
            </p>
            <h4 className="text-[17px] font-bold leading-snug mb-2 text-slate-900">
              Let&apos;s build your next project together
            </h4>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
              Schedule a free 30-minute consultation with our experts.
            </p>
            <Button className="w-fit rounded-full bg-blue-700 hover:bg-blue-800 h-11 px-6 text-sm font-semibold shadow-none gap-2">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export function NavigationMenuDemo() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <Link href="/" className="font-bold text-2xl tracking-tighter">
          Cogtix
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {sections.map((section) => (
              <NavDropdown key={section.title} {...section} />
            ))}
            <NavigationMenuItem>
              <Link
                href="/careers"
                className="px-5 py-2 text-lg font-medium hover:text-primary transition-colors"
              >
                Careers
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button className="rounded-full bg-blue-700 hover:bg-blue-600 h-10 px-8 text-lg font-semibold shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] transition-all">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </nav>
  )
}