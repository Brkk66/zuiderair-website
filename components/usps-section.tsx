"use client"

import { usps } from "@/lib/zuiderair-data"
import { Award, Users, BadgeCheck, Clock, Euro, Shield } from "lucide-react"

const iconMap = {
  award: Award,
  users: Users,
  badgeCheck: BadgeCheck,
  clock: Clock,
  euroSign: Euro,
  shield: Shield,
}

export function USPsSection() {
  return (
    <section id="waarom-zuiderair" className="py-20 sm:py-28 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Waarom Kiezen voor ZuiderAir?
          </h2>
          <p className="text-lg text-muted-foreground">
            Jarenlange ervaring, professionele service en tevreden klanten
            maken ons de betrouwbare keuze voor al uw airconditioningbehoeften.
          </p>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {usps.map((usp, index) => {
            const Icon = iconMap[usp.icon as keyof typeof iconMap]

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                  {usp.title}
                </h3>
                <p className="text-xs sm:text-base text-muted-foreground">{usp.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
