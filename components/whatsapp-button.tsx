"use client"

import { MessageCircle } from "lucide-react"
import { companyInfo } from "@/lib/zuiderair-data"

export function WhatsAppButton() {
  // Format phone for WhatsApp: +31627972804
  const whatsappNumber = companyInfo.contact.phone
    .replace(/\s/g, "")
    .replace(/^0/, "+31")

  const defaultMessage = encodeURIComponent(
    `Hallo ZuiderAir, ik heb een vraag over uw airconditioningdiensten.`
  )

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA59] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat via WhatsApp
      </span>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
    </a>
  )
}
