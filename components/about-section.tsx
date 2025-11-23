"use client"

import { CheckCircle2 } from "lucide-react"
import { companyInfo } from "@/lib/zuiderair-data"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="over-ons" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/about-airco.png"
              alt="Professionele airco monteur aan het werk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">
                  {companyInfo.businessInfo.yearsExperience}
                </p>
                <p className="text-sm text-muted-foreground">Jaar Ervaring</p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">
                  {companyInfo.businessInfo.completedProjects}
                </p>
                <p className="text-sm text-muted-foreground">Projecten</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Over ZuiderAir
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Al meer dan <strong className="text-foreground">{companyInfo.businessInfo.yearsExperience} jaar</strong> is ZuiderAir
                dé specialist op het gebied van airconditioningsystemen in {companyInfo.location.serviceArea}.
                Wij zijn gespecialiseerd in het leveren en installeren van hoogwaardige airco systemen
                voor zowel particulieren als bedrijven.
              </p>

              <p>
                Ons team bestaat uit ervaren en gecertificeerde monteurs die deskundig advies
                en uitstekende service bieden. Van de eerste offerte tot de nazorg - wij staan
                voor u klaar met professionele ondersteuning en transparante communicatie.
              </p>

              <p>
                Of u nu op zoek bent naar een nieuwe airco installatie, onderhoud van uw
                bestaande systeem, of een spoedige reparatie - bij ZuiderAir bent u aan
                het juiste adres.
              </p>
            </div>

            {/* Certifications & USPs */}
            <div className="space-y-3 mb-8">
              {[
                "Erkend installateur met F-gassen certificering",
                "Volledige garantie op werkzaamheden en installaties",
                "24/7 storing dienst voor spoedgevallen",
                "Transparante prijzen zonder verborgen kosten",
                "Persoonlijk advies op maat",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
