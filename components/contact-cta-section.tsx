"use client"

import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/zuiderair-data"

export function ContactCTASection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - CTA */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Klaar Voor een Comfortabel Klimaat?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Ontvang vandaag nog een gratis offerte! Geen verborgen kosten,
                geen verplichtingen. Wij denken graag met u mee voor de beste oplossing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <a href={companyInfo.contact.phoneLink} className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Bel Nu: {companyInfo.contact.phone}
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Ons
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-bold mb-4">Contact Informatie</h3>

                {/* Phone */}
                <a
                  href={companyInfo.contact.phoneLink}
                  className="flex items-start gap-3 hover:text-white/80 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Telefoon</p>
                    <p className="text-white/90">{companyInfo.contact.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-start gap-3 hover:text-white/80 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/90">{companyInfo.contact.email}</p>
                  </div>
                </a>

                {/* Service Area */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Werkgebied</p>
                    <p className="text-white/90">{companyInfo.location.serviceArea}</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Openingstijden</p>
                    <p className="text-white/90 text-sm">{companyInfo.hours.weekdays}</p>
                    <p className="text-white/90 text-sm">{companyInfo.hours.saturday}</p>
                    <p className="text-white/90 text-sm">{companyInfo.hours.sunday}</p>
                    <p className="text-white/80 text-sm mt-2 italic">
                      {companyInfo.hours.emergency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
