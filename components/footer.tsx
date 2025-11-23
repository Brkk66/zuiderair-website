import { Phone, Mail } from "lucide-react"
import { companyInfo, brands } from "@/lib/zuiderair-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="text-white/80 mb-4">
              {companyInfo.tagline}
            </p>
            <div className="space-y-2">
              <a
                href={companyInfo.contact.phoneLink}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.contact.phone}
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {companyInfo.contact.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <a href="#diensten" className="text-white/80 hover:text-white transition-colors">
                  Airco Installatie
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-white/80 hover:text-white transition-colors">
                  Airco Reparatie
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-white/80 hover:text-white transition-colors">
                  Warmtepomp Service
                </a>
              </li>
              <li>
                <a href="#diensten" className="text-white/80 hover:text-white transition-colors">
                  Onderhoud
                </a>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-xl font-bold mb-4">Merken</h3>
            <p className="text-white/80 mb-3">
              Wij werken met betrouwbare merken:
            </p>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-md text-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} {companyInfo.name}. Alle rechten voorbehouden.
          </p>
          <p className="text-white/60 text-sm">
            {companyInfo.businessInfo.certifications.join(" | ")}
          </p>
        </div>
      </div>
    </footer>
  )
}
