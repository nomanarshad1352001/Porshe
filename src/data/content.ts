export const services = [
  {
    id: 'maintenance',
    title: 'Factory Certified Maintenance',
    summary: 'Scheduled servicing carried out by Porsche-trained technicians using Genuine Parts only.',
    detail:
      'Every service is logged to your digital vehicle passport, preserving provenance and residual value. Book online, track progress in real time, and approve additional work from your phone.',
    points: ['Genuine Porsche Parts', 'Digital service passport', 'Courtesy vehicle programme', 'Two-year parts warranty'],
    icon: 'Wrench',
  },
  {
    id: 'tequipment',
    title: 'Tequipment & Personalisation',
    summary: 'Factory-engineered accessories and Porsche Exclusive Manufaktur bespoke commissions.',
    detail:
      'From aerodynamic kits and forged wheels to hand-stitched leather in a colour matched to your favourite jacket — if it can be engineered to Porsche standards, it can be built.',
    points: ['Exclusive Manufaktur commissions', 'Forged wheel programme', 'Interior leather bespoke', 'Aerokit installation'],
    icon: 'Sparkles',
  },
  {
    id: 'finance',
    title: 'Porsche Financial Services',
    summary: 'Flexible ownership structures: lease, balloon finance, subscription or outright purchase.',
    detail:
      'Model your monthly outlay in the configurator before you commit. Guaranteed future value options protect you from depreciation, and the Porsche Drive subscription lets you switch models seasonally.',
    points: ['Guaranteed future value', 'Porsche Drive subscription', 'Balloon & PCP finance', 'Insurance & GAP cover'],
    icon: 'Landmark',
  },
  {
    id: 'classic',
    title: 'Porsche Classic',
    summary: 'Restoration, genuine classic parts and authenticity certification for historic models.',
    detail:
      'Over 60,000 classic part numbers remain in production. Our Zuffenhausen-trained restorers return air-cooled legends to factory specification, documented photograph by photograph.',
    points: ['Full nut-and-bolt restoration', 'Certificate of Authenticity', '60,000+ classic parts', 'Heritage valuation service'],
    icon: 'History',
  },
  {
    id: 'connect',
    title: 'Porsche Connect',
    summary: 'Remote vehicle control, live navigation, charge planning and over-the-air updates.',
    detail:
      'Precondition the cabin, locate charging points along your route, monitor tyre pressures and receive theft alerts — all from the My Porsche app, synchronised with this platform.',
    points: ['Remote climate control', 'Live traffic & charge routing', 'Over-the-air software updates', 'Vehicle tracking & alerts'],
    icon: 'Radio',
  },
  {
    id: 'warranty',
    title: 'Approved Pre-Owned',
    summary: '111-point inspection, minimum 24-month warranty and full Porsche history verification.',
    detail:
      'Every Approved vehicle is stripped, inspected and recommissioned before sale. Mileage verified, provenance documented, warranty transferable across all official centres worldwide.',
    points: ['111-point inspection', '24-month warranty minimum', 'Worldwide roadside assistance', 'Mileage & history verified'],
    icon: 'ShieldCheck',
  },
];

export const experiences = [
  {
    id: 'track',
    title: 'Porsche Track Experience',
    location: 'Silverstone · Nürburgring · Barber Motorsports Park',
    duration: '1–3 Days',
    price: 'From $1,450',
    summary:
      'Six progressive levels from Precision to Master, taught by professional racing instructors in factory-prepared cars.',
    image: '/images/experience/track.jpg',
  },
  {
    id: 'centre',
    title: 'Porsche Experience Centre',
    location: 'Atlanta · Los Angeles · Leipzig · Hockenheim',
    duration: '90 Minutes',
    price: 'From $495',
    summary:
      'Handling circuits, low-friction kick plates, off-road modules and a simulator lab — supervised, insured, and open to all licence holders.',
    image: 'https://images.pexels.com/photos/37680945/pexels-photo-37680945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  },
  {
    id: 'travel',
    title: 'Porsche Travel Experience',
    location: 'Dolomites · Scottish Highlands · Cape Town',
    duration: '3–7 Days',
    price: 'From $4,200',
    summary:
      'Curated multi-day driving tours on the world\'s greatest roads, with five-star accommodation, support vehicles and rotating model access.',
    image: 'https://images.pexels.com/photos/35849576/pexels-photo-35849576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  },
  {
    id: 'museum',
    title: 'Porsche Museum, Zuffenhausen',
    location: 'Stuttgart, Germany',
    duration: '2–4 Hours',
    price: 'From $12',
    summary:
      'Eighty rotating exhibits spanning 1948 to today, including Le Mans winners, Rothmans 956s and the 917 that started it all.',
    image: 'https://images.pexels.com/photos/9513533/pexels-photo-9513533.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  },
];

export const techStack = [
  { name: 'React 19', role: 'Component-driven UI runtime with concurrent rendering' },
  { name: 'TypeScript', role: 'End-to-end static typing across data models and routes' },
  { name: 'Vite 7', role: 'Instant HMR in development, tree-shaken production bundles' },
  { name: 'Tailwind CSS 4', role: 'Token-based design system compiled to atomic CSS' },
  { name: 'React Router 7', role: 'Declarative client-side routing with nested layouts' },
  { name: 'Framer Motion', role: 'Physics-based scroll, page and gesture animation' },
  { name: 'Lucide Icons', role: 'Consistent 1.5 px stroke iconography, tree-shakeable' },
  { name: 'Vite Singlefile', role: 'Zero-dependency deployment as one portable artifact' },
];

export const platformFeatures = [
  {
    title: 'Model Discovery Engine',
    body: 'Filterable catalogue across six model lines with full technical datasets, specification comparison and colour selection — all typed and centrally managed.',
  },
  {
    title: 'Dynamic Detail Routing',
    body: 'Every vehicle resolves to its own URL with deep-linkable specs, highlight reels and finance figures, rendered from a single typed source of truth.',
  },
  {
    title: 'Service Journey',
    body: 'Six service verticals from factory maintenance to Classic restoration, each with an expandable detail layer designed to reduce dealer phone volume.',
  },
  {
    title: 'Experience Booking Funnel',
    body: 'Track days, driving tours, experience centres and museum visits surfaced with pricing, duration and location to drive high-margin lifestyle revenue.',
  },
  {
    title: 'Cinematic Motion Layer',
    body: 'Scroll-triggered reveals, parallax hero treatments and hover choreography that mirror the brand\'s premium showroom environment.',
  },
  {
    title: 'Responsive Flagship Design',
    body: 'A single codebase that renders as a showroom wall display, a desktop configurator and a mobile lead-capture tool without compromise.',
  },
];

export const audiences = [
  {
    who: 'Automotive OEMs & Marques',
    need: 'A flagship digital showroom that communicates engineering credibility before a single dealer conversation happens.',
    value: 'Reduces cost-per-lead and standardises brand presentation across every market and language.',
  },
  {
    who: 'Franchise Dealer Groups',
    need: 'Local sites that look as premium as the manufacturer\'s, with inventory, service booking and finance calculators.',
    value: 'Higher qualified walk-in rate and measurable service-bay utilisation from online bookings.',
  },
  {
    who: 'Luxury & Exotic Rental Fleets',
    need: 'Conversion-focused presentation of a rotating high-value fleet with experience packages.',
    value: 'Positions rental as an experience purchase, lifting average order value substantially.',
  },
  {
    who: 'Classic Restoration Specialists',
    need: 'Portfolio storytelling that justifies six-figure restoration invoices to discerning collectors.',
    value: 'Builds provenance narrative and trust, shortening a famously long sales cycle.',
  },
  {
    who: 'Motorsport & Track Day Operators',
    need: 'Event catalogues with tiered pricing, locations and progression pathways.',
    value: 'Direct bookings without third-party marketplace commission.',
  },
  {
    who: 'Automotive Investment Platforms',
    need: 'Asset-grade presentation of vehicles treated as appreciating collectibles.',
    value: 'Communicates rarity, specification and condition to an investor audience.',
  },
];
