"use client"

import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { companyInfo } from "@/lib/zuiderair-data"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#over-ons", label: "Over Ons" },
    { href: "#diensten", label: "Diensten" },
    { href: "#waarom-zuiderair", label: "Waarom ZuiderAir" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">ZA</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg leading-none">{companyInfo.name}</p>
              <p className="text-xs text-muted-foreground">
                Airco Specialist
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone Button - Always visible */}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={companyInfo.contact.phoneLink} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{companyInfo.contact.phone}</span>
                <span className="sm:hidden">Bel</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="mt-4 pt-4 border-t">
                    <Button
                      asChild
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      <a href="#contact">Gratis Offerte</a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
