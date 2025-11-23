// ZuiderAir - Centralized Data Structure
// Based on ULTIMATE_WEB_PLAYBOOK v3.0

export const companyInfo = {
  name: "ZuiderAir",
  tagline: "Gespecialiseerd in airconditioningsystemen voor thuis en op kantoor",
  slogan: "Koel in de zomer, Warm in de winter",

  contact: {
    phone: "06 27972804",
    phoneLink: "tel:0627972804",
    email: "contact@zuiderair.com",
    website: "zuiderair.com",
  },

  location: {
    serviceArea: "Rotterdam en omgeving",
    region: "Zuid-Holland",
  },

  social: {
    // Add if available
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  businessInfo: {
    yearsExperience: "15+",
    completedProjects: "100+",
    certifications: ["Erkend installateur", "F-gassen gecertificeerd"],
    warranty: "Garantie op alle werkzaamheden",
  },

  hours: {
    weekdays: "Ma-Vr: 08:00 - 18:00",
    saturday: "Za: 09:00 - 17:00",
    sunday: "Zo: Op afspraak",
    emergency: "24/7 storing dienst beschikbaar",
  },
}

export const services = [
  {
    id: "airco-installatie",
    name: "Airco Installatie",
    shortDescription:
      "Professionele installatie van energiezuinige airconditioningsystemen",
    description:
      "Wij zijn gespecialiseerd in het installeren van hoogwaardige, energiezuinige airconditioningsystemen die zorgen voor een aangename en comfortabele omgeving in uw huis of kantoor. Onze experts adviseren u over de beste oplossing voor uw situatie en zorgen voor een vakkundige installatie.",
    icon: "airVent", // lucide-react icon name
    price: "Vanaf €200",
    duration: "1-2 dagen",
    features: [
      "Gratis advies en offerte",
      "Energiezuinige systemen",
      "Professionele installatie",
      "Garantie op werkzaamheden",
      "Nazorg en onderhoud",
    ],
  },
  {
    id: "airco-reparatie",
    name: "Airco Reparatie",
    shortDescription: "Snelle en betrouwbare reparatie van uw aircosysteem",
    description:
      "Is uw airconditioningsysteem defect? Onze gecertificeerde technici kunnen het probleem snel diagnosticeren en professioneel repareren, waardoor uw comfort wordt hersteld. Wij werken met alle merken en modellen.",
    icon: "wrench",
    price: "Vanaf €100",
    duration: "1-3 uur",
    features: [
      "Snelle diagnose",
      "Reparatie alle merken",
      "Originele onderdelen",
      "Garantie op reparaties",
      "Spoeddienst mogelijk",
    ],
  },
  {
    id: "warmtepomp-reparatie",
    name: "Warmtepomp Reparatie",
    shortDescription: "Specialist in reparatie van warmtepompen",
    description:
      "Onze ervaren monteurs bieden snelle en betrouwbare reparatiediensten voor warmtepompen, waardoor uw systeem weer efficiënt kan werken en u kunt genieten van een aangename temperatuur in uw woning of bedrijfspand.",
    icon: "thermometer",
    price: "Vanaf €150",
    duration: "2-4 uur",
    features: [
      "Ervaren specialisten",
      "Alle merken warmtepompen",
      "Preventief onderhoud",
      "Energie-efficiëntie check",
      "24/7 storing dienst",
    ],
  },
  {
    id: "verwarmingssysteem-reparatie",
    name: "Verwarming Reparatie",
    shortDescription: "Professionele reparatie van verwarmingssystemen",
    description:
      "Onze deskundige technici kunnen u helpen bij het repareren van verwarmingssystemen, zodat u tijdens de koude maanden kunt genieten van een warme en comfortabele leefomgeving. Van kleine reparaties tot complete revisies.",
    icon: "flame",
    price: "Vanaf €125",
    duration: "2-4 uur",
    features: [
      "Alle type systemen",
      "Snelle service",
      "Ervaren technici",
      "Transparante prijzen",
      "Preventief advies",
    ],
  },
  {
    id: "ventilatormotor-vervanging",
    name: "Vervanging Ventilatormotoren",
    shortDescription: "Efficiënte vervanging van ventilatormotoren",
    description:
      "Als uw airconditioningsysteem ventilatormotoren nodig heeft, staan wij klaar om deze efficiënt en professioneel te vervangen, zodat uw systeem weer optimaal kan functioneren en energie-efficiënt werkt.",
    icon: "fan",
    price: "Vanaf €175",
    duration: "1-2 uur",
    features: [
      "Hoogwaardige motoren",
      "Energie-efficiënt",
      "Snelle vervanging",
      "Geluidsarm",
      "Garantie included",
    ],
  },
  {
    id: "luchtkanaal-reiniging",
    name: "Luchtkanaal Reiniging & Reparatie",
    shortDescription: "Professionele reiniging voor gezonde lucht",
    description:
      "Wij bieden uitgebreide reinigings- en reparatiediensten voor luchtkanalen, waardoor de luchtkwaliteit in uw woning of bedrijfspand verbetert en u kunt genieten van een gezonde en frisse omgeving. Regelmatige reiniging voorkomt gezondheidsproblemen.",
    icon: "wind",
    price: "Vanaf €150",
    duration: "2-3 uur",
    features: [
      "Dieptereiniging",
      "Verwijdering bacteriën",
      "Betere luchtkwaliteit",
      "Preventief onderhoud",
      "Energie-besparing",
    ],
  },
]

export const usps = [
  {
    title: "15+ Jaar Ervaring",
    description: "Ruime ervaring in installatie en onderhoud van aircosystemen",
    icon: "award",
  },
  {
    title: "100+ Tevreden Klanten",
    description: "Honderden succesvolle projecten in Rotterdam en omgeving",
    icon: "users",
  },
  {
    title: "Erkend & Gecertificeerd",
    description: "F-gassen gecertificeerd en erkend installateur",
    icon: "badgeCheck",
  },
  {
    title: "24/7 Storing Dienst",
    description: "Ook buiten kantooruren bereikbaar voor spoedgevallen",
    icon: "clock",
  },
  {
    title: "Scherpe Prijzen",
    description: "Transparante prijzen zonder verborgen kosten",
    icon: "euroSign",
  },
  {
    title: "Garantie op Werk",
    description: "Volledige garantie op alle werkzaamheden en installaties",
    icon: "shield",
  },
]

export const brands = [
  "Daikin",
  "Mitsubishi",
  "Samsung",
  "LG",
  "Panasonic",
  "Toshiba",
]

export const faqs = [
  {
    question: "Wat kost een airco installatie?",
    answer:
      "De kosten voor een airco installatie variëren afhankelijk van het type systeem, de grootte van de ruimte en de installatiecomplexiteit. Een standaard split-unit airco inclusief installatie kost gemiddeld tussen de €1500 en €2500. Wij maken graag een vrijblijvende offerte op maat voor uw situatie.",
  },
  {
    question: "Hoe lang duurt een airco installatie?",
    answer:
      "Een standaard airco installatie duurt gemiddeld 1 tot 2 dagen, afhankelijk van het type systeem en de complexiteit. Tijdens het intakegesprek geven wij een nauwkeurige inschatting van de installatieduur.",
  },
  {
    question: "Moet een airco jaarlijks onderhouden worden?",
    answer:
      "Ja, wij adviseren om uw airco minimaal één keer per jaar te laten onderhouden. Dit verhoogt de levensduur, voorkomt storingen, verbetert de energie-efficiëntie en zorgt voor optimale luchtkwaliteit. Wij bieden onderhoudscontracten aan voor zorgeloos gebruik.",
  },
  {
    question: "Werkt een airco ook als verwarming?",
    answer:
      "Ja, moderne airco's zijn vaak warmtepompen die zowel kunnen koelen als verwarmen. In de winter kan uw airco efficiënt uw woning verwarmen met een hoog rendement, waardoor u bespaart op stookkosten.",
  },
  {
    question: "Hoe energiezuinig is een airco?",
    answer:
      "Moderne airconditioningsystemen zijn zeer energiezuinig met hoge SEER (koeling) en SCOP (verwarming) waardes. Ze gebruiken veel minder energie dan traditionele elektrische verwarmingen. Wij adviseren altijd A+++ systemen voor maximale besparing.",
  },
  {
    question: "Leveren jullie ook voor bedrijven?",
    answer:
      "Ja, wij leveren en installeren airco systemen voor zowel particulieren als bedrijven. Van kleine kantoorruimtes tot grote bedrijfspanden, wij hebben ervaring met projecten van elke omvang.",
  },
  {
    question: "Wat is de levensduur van een airco?",
    answer:
      "Bij goed onderhoud gaat een airco gemiddeld 15 tot 20 jaar mee. Regelmatig onderhoud is essentieel om de levensduur te maximaliseren en storingen te voorkomen.",
  },
  {
    question: "Is een vergunning nodig voor airco installatie?",
    answer:
      "In de meeste gevallen is geen vergunning nodig voor het plaatsen van een airco. Bij monumentale panden of in sommige gemeentes kunnen wel regels gelden. Wij informeren u hierover tijdens de offerte.",
  },
]

export const testimonials = [
  {
    name: "Familie de Jong",
    location: "Rotterdam Zuid",
    rating: 5,
    text: "Uitstekende service! Snel, netjes en professioneel geïnstalleerd. De monteurs namen de tijd om alles goed uit te leggen. Zeer tevreden met ons nieuwe aircosysteem.",
    date: "2 weken geleden",
  },
  {
    name: "Marcel V.",
    location: "Capelle aan den IJssel",
    rating: 5,
    text: "ZuiderAir heeft onze airco gerepareerd binnen 2 uur na melding. Super snelle service en vriendelijke monteur. Aanrader!",
    date: "1 maand geleden",
  },
  {
    name: "Bedrijf XYZ",
    location: "Rotterdam Centrum",
    rating: 5,
    text: "Voor ons kantoorpand een volledig aircosysteem geïnstalleerd. Keurig werk, op tijd afgerond en binnen budget. Professioneel advies en goede nazorg.",
    date: "3 maanden geleden",
  },
]

export const processSteps = [
  {
    step: 1,
    title: "Gratis Adviesgesprek",
    description:
      "Bel of mail ons voor een vrijblijvend adviesgesprek. Wij bespreken uw wensen en situatie.",
  },
  {
    step: 2,
    title: "Locatie Bezoek",
    description:
      "Wij komen langs voor een inspectie en nemen alle relevante metingen.",
  },
  {
    step: 3,
    title: "Offerte Op Maat",
    description:
      "U ontvangt een duidelijke offerte met alle kosten en specificaties.",
  },
  {
    step: 4,
    title: "Installatie",
    description:
      "Op de afgesproken datum installeren onze monteurs uw aircosysteem professioneel.",
  },
  {
    step: 5,
    title: "Uitleg & Nazorg",
    description:
      "Wij leggen alles uit over het gebruik en onderhoud. Service en garantie included.",
  },
]
