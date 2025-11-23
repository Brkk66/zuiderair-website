"use client"

import { services } from "@/lib/zuiderair-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AirVent,
  Wrench,
  Thermometer,
  Flame,
  Fan,
  Wind,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const iconMap = {
  airVent: AirVent,
  wrench: Wrench,
  thermometer: Thermometer,
  flame: Flame,
  fan: Fan,
  wind: Wind,
}

export function ServicesSection() {
  return (
    <section id="diensten" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Onze Diensten
          </h2>
          <p className="text-lg text-muted-foreground">
            Van installatie tot onderhoud - wij verzorgen al uw airconditioningbehoeften
            met professionele service en vakmanschap.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]

            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-base sm:text-xl leading-tight">{service.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-base hidden sm:block">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs sm:text-sm font-semibold">
                      {service.price}
                    </Badge>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {service.duration}
                    </span>
                  </div>

                  {/* Features - Hidden on mobile */}
                  <ul className="space-y-2 hidden sm:block">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group/btn hover:bg-primary hover:text-white text-xs sm:text-sm"
                    asChild
                  >
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      <span className="hidden sm:inline">Vraag Offerte Aan</span>
                      <span className="sm:hidden">Offerte</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Niet gevonden wat u zoekt? Neem contact met ons op voor maatwerk oplossingen.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Opnemen</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
