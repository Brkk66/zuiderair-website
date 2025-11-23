"use client"

import { Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { companyInfo } from "@/lib/zuiderair-data"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-airco.png"
          alt="Modern airconditioning systeem"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-primary/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="secondary" className="text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1 text-accent" />
              {companyInfo.businessInfo.yearsExperience} Jaar Ervaring
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {companyInfo.businessInfo.completedProjects} Tevreden Klanten
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {companyInfo.tagline}
          </h1>

          {/* Slogan */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-4">
            {companyInfo.slogan}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Professionele installatie, onderhoud en reparatie van airconditioningsystemen
            in {companyInfo.location.serviceArea}. Erkend installateur met certificering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8"
            >
              <a href="#contact" className="flex items-center gap-2">
                Gratis Offerte Aanvragen
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8"
            >
              <a href={companyInfo.contact.phoneLink} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Bel Direct
              </a>
            </Button>
          </div>

          {/* USPs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "24/7 Storing Dienst",
              "Erkend Installateur",
              "Garantie op Werk",
            ].map((usp, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/80"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
