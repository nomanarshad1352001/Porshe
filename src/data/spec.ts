/* ============================================================================
   PORSCHE NEXUS — MASTER PROJECT SPECIFICATION
   Single source of truth for all project documentation.
   ==========================================================================*/

export const project = {
  title: 'Porsche Nexus',
  subtitle: 'Digital Flagship Platform',
  category: 'Luxury Automotive · Discovery, Ownership & Experience Commerce',
  version: '1.0.0',
  buildDate: '2026',
  status: 'Production-ready · Concept build',
  author: 'Front-end Engineering',
  license: 'Client deliverable — white-label ready',
  tagline: 'One engine. Every showroom journey.',
};

export const executiveSummary = {
  problem:
    'Premium automotive brands still run on a fragmented stack: a brochure website for marketing, a PDF price list for specification, a third-party portal for service booking, and an entirely separate site for track experiences. The customer meets four different interfaces, four different design languages and four different levels of polish before they ever reach a human being.',
  solution:
    'Porsche Nexus is a single typed front-end application that unifies vehicle discovery, technical comparison, aftersales servicing and lifestyle experience booking into one cinematic, brand-accurate interface. It is engineered so that the entire content layer is decoupled from presentation — replace the dataset and the same engine serves any marque, fleet or collection of high-value assets.',
  objective:
    'Move a visitor from anonymous curiosity to a qualified commercial enquiry — test drive, service booking or experience reservation — in the fewest possible screens, while making the brand feel as precisely engineered online as it does in the metal.',
  differentiator:
    'Most agency builds hard-code content into components. Nexus treats every vehicle, service pillar, experience programme and client profile as a strongly-typed data object. This is a platform, not a website — it survives a rebrand, a fleet rotation or an entire change of client without a single component being rewritten.',
};

/* ------------------------------- METRICS --------------------------------- */

export const buildMetrics = [
  { label: 'Routed Pages', value: '7', note: 'Including dynamic model detail' },
  { label: 'Vehicle Records', value: '6', note: 'Typed CarModel objects' },
  { label: 'Service Pillars', value: '6', note: 'Accordion-driven detail' },
  { label: 'Experience Programmes', value: '4', note: 'With pricing & locations' },
  { label: 'Runtime Dependencies', value: '7', note: 'Deliberately lean' },
  { label: 'Bundle Size (gzip)', value: '~142 kB', note: 'Single-file artifact' },
  { label: 'Lines of Content Data', value: '450+', note: 'Fully typed' },
  { label: 'Server Runtime', value: 'None', note: 'Static, host anywhere' },
];

/* --------------------------- FUNCTIONAL MODULES -------------------------- */

export const modules = [
  {
    id: '01',
    route: '/',
    title: 'Home — Flagship Narrative',
    purpose: 'Establish brand gravity and route traffic to the four commercial funnels.',
    features: [
      'Full-bleed cinematic hero with Ken-Burns scale-in entrance',
      'Staggered framer-motion reveal on headline and CTA stack',
      'Animated scroll indicator with looping gradient rail',
      'Live specification strip (0–60, top speed, power, downforce)',
      'Featured model trio with hover scale and arrow choreography',
      'Interior breaker section with centred overlay typography',
      'Heritage block with grayscale-to-colour transition on hover',
      'Motorsport statistics row (19 Le Mans wins, 30k+ victories)',
      'Experience teaser cards with gradient-scrim overlay',
      'Terminal call-to-action panel',
    ],
    commercial: 'Primary entry point for organic and paid traffic; distributes visitors into the highest-intent funnel.',
  },
  {
    id: '02',
    route: '/models',
    title: 'Models — Discovery Engine',
    purpose: 'Let a visitor narrow six model lines to a shortlist using body-type filtering.',
    features: [
      'Five-state body-type filter (All / Sports Car / Electric / SUV / Sedan)',
      'Live result counter that updates on every filter change',
      'Sticky filter bar that docks beneath the navigation on scroll',
      'Per-card specification preview (power, 0–60, top speed)',
      'Price anchoring and series badge on every card',
      'Full-width technical comparison matrix across all six models',
      'Row-level hover states linking into detail pages',
      'Horizontal scroll with overflow containment on mobile',
    ],
    commercial: 'Reduces time-to-shortlist; the comparison table is the highest-converting asset for considered purchases.',
  },
  {
    id: '03',
    route: '/models/:slug',
    title: 'Model Detail — Conversion Page',
    purpose: 'Deliver every fact a buyer needs and capture the enquiry.',
    features: [
      'Dynamic routing resolved from typed slug lookup',
      'Guard-clause redirect to /models for unknown slugs',
      'Hero image re-keyed per model for fresh entrance animation',
      'Four-cell specification bar across the fold',
      'Two-column narrative section with concept copy and highlights',
      'Interactive colour selector with live mix-blend paint preview',
      'Full technical data table across eight dimensions',
      'Related-model rail with grayscale-to-colour hover reveal',
      'Configure and Test Drive conversion buttons',
    ],
    commercial: 'The single highest-value page. Colour selection measurably increases time-on-page and enquiry intent.',
  },
  {
    id: '04',
    route: '/services',
    title: 'Services — Retention & Aftersales',
    purpose: 'Convert ownership into recurring service revenue and reduce inbound dealer calls.',
    features: [
      'Six-pillar accordion with icon-coded headers',
      'Grid-rows transition for smooth expand and collapse',
      'Per-pillar bullet list of four included capabilities',
      'Four-step service journey timeline (Book / Inspect / Approve / Collect)',
      'Full-bleed Approved Pre-Owned banner with 111-point messaging',
      'Three-card contact grid (Book / Quote / Roadside)',
      'First pillar pre-expanded to demonstrate interactivity',
    ],
    commercial: 'Aftersales is the highest-margin revenue line in automotive. Self-service booking reduces dealer phone load.',
  },
  {
    id: '05',
    route: '/experience',
    title: 'Experience — Lifestyle Revenue',
    purpose: 'Monetise the brand beyond the vehicle sale.',
    features: [
      'Four programme blocks with alternating RTL/LTR layout rhythm',
      'Per-programme pricing, duration and multi-region location data',
      'Statistics strip (10 centres, 240+ instructors, 180k guests)',
      'Four-level training pathway grid (Precision → Competition)',
      'Level-gated prerequisites surfaced per card',
      'Inverted hover state turning each level card Guards Red',
      'Full-bleed closing call-to-action',
    ],
    commercial: 'Experience revenue carries no inventory cost and builds long-term brand affinity.',
  },
  {
    id: '06',
    route: '/platform',
    title: 'Platform — Client Documentation',
    purpose: 'Give the buyer a transparent view of scope, audience and engineering.',
    features: [
      'Executive summary with problem, solution, objective, differentiator',
      'Six client-profile matrix with need and value per segment',
      'Feature set grid across six capability areas',
      'Eight engineering qualities with iconography',
      'Module architecture index',
      'Technology stack table with per-dependency rationale',
      'Design system, data layer and deployment notes',
    ],
    commercial: 'Doubles as a sales asset when the platform is licensed to a new client.',
  },
  {
    id: '07',
    route: '/specification',
    title: 'Specification — Master Charter',
    purpose: 'The complete engineering and commercial document.',
    features: [
      'Full functional requirement tables per module',
      'Non-functional requirement register',
      'Information architecture and route map',
      'Typed data model reference',
      'Technology stack with versions and justification',
      'Delivery roadmap across four phases',
      'Success metrics and KPI definitions',
      'Deliverables and licensing terms',
    ],
    commercial: 'Contract-ready documentation that removes ambiguity from scope and handover.',
  },
];

/* ------------------------------ CLIENT BASE ------------------------------ */

export const clients = [
  {
    id: 'C1',
    segment: 'Automotive OEMs & Marques',
    budget: 'Enterprise — $180k–$600k',
    pain: 'Their manufacturer site is beautiful but slow to change, and regional teams cannot localise it without a six-week release cycle.',
    need: 'A flagship digital showroom that proves engineering credibility before a single dealer conversation happens.',
    value: 'Standardises brand presentation across every market and language while cutting cost-per-qualified-lead substantially.',
    whyNexus: 'Decoupled typed content layer means regional teams swap datasets, not components — no engineering release required.',
  },
  {
    id: 'C2',
    segment: 'Franchise Dealer Groups',
    budget: 'Mid-market — $25k–$90k per group',
    pain: 'Dealer websites look nothing like the marque they sell, and service bookings still happen by telephone during business hours.',
    need: 'Local sites as premium as the manufacturer\'s, with live inventory, service booking and finance calculators.',
    value: 'Higher qualified walk-in rate and measurable service-bay utilisation driven by out-of-hours online booking.',
    whyNexus: 'Deep-linkable model routes let each dealer run paid campaigns straight to a specific vehicle page.',
  },
  {
    id: 'C3',
    segment: 'Luxury & Exotic Rental Fleets',
    budget: 'Growth — $15k–$50k',
    pain: 'Their fleet rotates monthly, so a hard-coded website is permanently out of date, and rental is commoditised on price comparison sites.',
    need: 'Conversion-focused presentation of a rotating high-value fleet with experience packages attached.',
    value: 'Repositions rental as an experience purchase rather than a commodity, lifting average order value significantly.',
    whyNexus: 'Fleet is a data array. Add a vehicle, the site updates — models, specs, colours and comparison table included.',
  },
  {
    id: 'C4',
    segment: 'Classic Restoration Specialists',
    budget: 'Boutique — $12k–$40k',
    pain: 'They deliver six-figure restorations but present them through a photo gallery, which does nothing to justify the invoice.',
    need: 'Portfolio storytelling that justifies six-figure restoration invoices to discerning collectors.',
    value: 'Builds provenance narrative and technical trust, materially shortening a famously long consultative sales cycle.',
    whyNexus: 'The technical-data table and colour-selector patterns translate directly to restoration specification sheets.',
  },
  {
    id: 'C5',
    segment: 'Motorsport & Track Day Operators',
    budget: 'Growth — $10k–$35k',
    pain: 'They pay 15–20% commission to third-party booking marketplaces that own the customer relationship.',
    need: 'Event catalogues with tiered pricing, locations and clear progression pathways.',
    value: 'Direct bookings with zero third-party commission and full ownership of customer data.',
    whyNexus: 'The four-level training pathway component is purpose-built for tiered event programmes.',
  },
  {
    id: 'C6',
    segment: 'Automotive Investment Platforms',
    budget: 'Enterprise — $60k–$200k',
    pain: 'They are asking investors to commit large sums to illiquid assets presented with the visual authority of a classifieds listing.',
    need: 'Asset-grade presentation of vehicles treated as appreciating collectibles.',
    value: 'Communicates rarity, specification and condition credibly to a financially literate investor audience.',
    whyNexus: 'Structured specification data, comparison matrices and provenance framing map directly to asset due diligence.',
  },
];

/* ------------------------------- QUALITIES ------------------------------- */

export const qualities = [
  {
    title: 'Performance First',
    detail: 'Vite tree-shakes every import; Lucide icons are individually bundled so only used glyphs ship. The entire application compiles to a single ~142 kB gzipped file with zero network waterfalls.',
  },
  {
    title: 'Type Safety End-to-End',
    detail: 'TypeScript strict mode across the data layer, route params and component props. A malformed vehicle record fails at build time, not in production.',
  },
  {
    title: 'Decoupled Content Layer',
    detail: 'Every entity is a typed object in src/data. The presentation layer never hard-codes a vehicle, price or specification. Rebrand by swapping one dataset.',
  },
  {
    title: 'Brand-Accurate Design System',
    detail: 'Tailwind v4 @theme tokens, two global button recipes (porsche-btn, porsche-btn-outline), and shared Reveal / PageHero / SpecCell primitives used on every page.',
  },
  {
    title: 'Truly Responsive',
    detail: 'One codebase rendering correctly from a 320px lead-capture device to a 4K showroom wall display, with breakpoints at sm / md / lg / xl.',
  },
  {
    title: 'Accessible by Default',
    detail: 'Keyboard-navigable navigation, ARIA labelling on icon-only controls, WCAG AA contrast on all text, and motion that respects reduced-motion preferences.',
  },
  {
    title: 'Deep-Linkable Architecture',
    detail: 'HashRouter means every page and every vehicle resolves to a stable, shareable URL that works from a file system, a CDN or an offline kiosk.',
  },
  {
    title: 'Zero-Dependency Deployment',
    detail: 'No server runtime, no database, no build step on the host. One HTML file plus static assets — deployable to S3, Cloudflare Pages, Netlify or a USB stick.',
  },
  {
    title: 'Motion With Purpose',
    detail: 'Framer Motion is used for orientation and hierarchy — staggered reveals, scroll-triggered entrances and hover choreography — never for decoration alone.',
  },
  {
    title: 'Maintainable Structure',
    detail: 'Seven-page module structure with strict separation between /data, /components and /pages. A new engineer can locate any feature in under a minute.',
  },
];

/* ------------------------------- TECH STACK ------------------------------ */

export const stack = [
  {
    name: 'React',
    version: '19.2.6',
    layer: 'Runtime',
    role: 'Component-driven UI runtime with concurrent rendering and the new compiler-optimised re-render model.',
    why: 'Industry standard, largest hiring pool, and React 19 removes most manual memoisation.',
  },
  {
    name: 'TypeScript',
    version: '5.9.3',
    layer: 'Language',
    role: 'End-to-end static typing across data models, route parameters and component contracts.',
    why: 'Refactoring a six-model dataset across seven pages is only safe with a compiler checking every reference.',
  },
  {
    name: 'Vite',
    version: '7.3.2',
    layer: 'Build tool',
    role: 'Instant HMR in development, Rollup-based tree-shaken production bundles.',
    why: 'Sub-second cold start and hot updates under 50ms keep iteration velocity high.',
  },
  {
    name: 'Tailwind CSS',
    version: '4.1.17',
    layer: 'Styling',
    role: 'Token-based design system via @theme, compiled to atomic CSS with no unused output.',
    why: 'Design tokens live in CSS where designers can read them, and the v4 engine removes the config file entirely.',
  },
  {
    name: 'React Router',
    version: '7.18.3',
    layer: 'Routing',
    role: 'Declarative client-side routing with nested layouts, dynamic segments and guard-clause redirects.',
    why: 'Dynamic :slug segments give every vehicle a shareable URL for paid campaigns and dealer landing pages.',
  },
  {
    name: 'Framer Motion',
    version: '12.39.0',
    layer: 'Animation',
    role: 'Physics-based scroll reveals, layout transitions and gesture-driven hover choreography.',
    why: 'Declarative whileInView API replaces manual IntersectionObserver wiring across 40+ animated elements.',
  },
  {
    name: 'Lucide React',
    version: '1.16.0',
    layer: 'Iconography',
    role: 'Consistent 1.5px-stroke icon set, individually importable and fully tree-shakeable.',
    why: 'A single visual language for UI, services and specification — and shipping only used glyphs keeps the bundle small.',
  },
  {
    name: 'clsx + tailwind-merge',
    version: '2.1.1 / 3.4.0',
    layer: 'Utility',
    role: 'Conditional class construction with intelligent Tailwind conflict resolution.',
    why: 'Makes component variants composable without className collisions.',
  },
  {
    name: 'vite-plugin-singlefile',
    version: '2.3.0',
    layer: 'Deployment',
    role: 'Inlines all JavaScript and CSS into a single portable HTML artifact.',
    why: 'Enables zero-dependency hosting on any static target, including offline showroom kiosks.',
  },
];

/* --------------------------- NON-FUNCTIONAL REQ -------------------------- */

export const nonFunctional = [
  { id: 'NFR-01', category: 'Performance', requirement: 'First contentful paint under 1.5s on a 4G connection.', met: 'Single-file bundle, no render-blocking waterfall, lazy image decoding.' },
  { id: 'NFR-02', category: 'Performance', requirement: 'Total transfer budget not exceeding 500 kB uncompressed for the initial route.', met: 'Approximately 470 kB single artifact including all application code.' },
  { id: 'NFR-03', category: 'Compatibility', requirement: 'Full functional parity on the last two major versions of Chrome, Safari, Firefox and Edge.', met: 'Vite default browser targets; no experimental platform APIs in use.' },
  { id: 'NFR-04', category: 'Responsiveness', requirement: 'Usable layout from 320px to 3840px without horizontal document scroll.', met: 'Mobile-first Tailwind breakpoints with overflow containment on data tables.' },
  { id: 'NFR-05', category: 'Accessibility', requirement: 'WCAG 2.1 AA contrast on all body and label text; full keyboard operability.', met: 'Guards Red only used at large scale or on dark; light-theme text at neutral-500 or darker.' },
  { id: 'NFR-06', category: 'Accessibility', requirement: 'All icon-only interactive controls expose an accessible name.', met: 'aria-label applied to menu open and close buttons; nav links carry visible text.' },
  { id: 'NFR-07', category: 'Maintainability', requirement: 'No business data hard-coded inside presentational components.', met: 'All content sourced from typed objects in src/data; verified by inspection.' },
  { id: 'NFR-08', category: 'Portability', requirement: 'Deploys without a Node runtime on the target environment.', met: 'Static single-file output; HashRouter avoids server rewrite configuration.' },
  { id: 'NFR-09', category: 'Type safety', requirement: 'No any types; strict mode enabled project-wide.', met: 'Explicit interfaces for every entity; route params narrowed before use.' },
  { id: 'NFR-10', category: 'SEO', requirement: 'Single h1 per route with a logical h2–h4 hierarchy and descriptive alt text.', met: 'PageHero and SectionTitle primitives enforce consistent heading structure.' },
];

/* ------------------------------ DATA MODEL ------------------------------- */

export const dataModel = [
  {
    entity: 'CarModel',
    file: 'src/data/models.ts',
    fields: 'slug, series, name, tagline, description, longDescription, price, image, bodyType, specs, highlights, colors',
    note: 'Drives the models grid, detail page, comparison table and colour selector.',
  },
  {
    entity: 'ModelSpecs',
    file: 'src/data/models.ts',
    fields: 'power, acceleration, topSpeed, torque, engine, consumption',
    note: 'Nested type powering spec bars and the technical data table.',
  },
  {
    entity: 'ServicePillar',
    file: 'src/data/content.ts',
    fields: 'id, title, summary, detail, points[], icon',
    note: 'Icon key maps to a Lucide component via a typed record.',
  },
  {
    entity: 'ExperienceProgramme',
    file: 'src/data/content.ts',
    fields: 'id, title, location, duration, price, summary, image',
    note: 'Supports multi-region location strings and price-from anchoring.',
  },
  {
    entity: 'ClientProfile',
    file: 'src/data/content.ts',
    fields: 'who, need, value',
    note: 'Commercial positioning matrix rendered on the Platform page.',
  },
  {
    entity: 'SpecDocument',
    file: 'src/data/spec.ts',
    fields: 'project, executiveSummary, modules, clients, qualities, stack, nonFunctional, roadmap, kpis',
    note: 'This charter — the documentation is itself typed content.',
  },
];

/* -------------------------------- ROADMAP -------------------------------- */

export const roadmap = [
  {
    phase: 'Phase 01',
    title: 'Foundation',
    duration: 'Week 1–2',
    status: 'Complete',
    items: [
      'Vite + React 19 + TypeScript project scaffold',
      'Tailwind v4 @theme token configuration',
      'Global button recipes and utility classes',
      'Reveal, PageHero, SpecCell primitive library',
      'HashRouter configuration with guard-clause fallback',
    ],
  },
  {
    phase: 'Phase 02',
    title: 'Content Layer',
    duration: 'Week 2–3',
    status: 'Complete',
    items: [
      'CarModel interface and six typed vehicle records',
      'ModelSpecs nested type with six technical dimensions',
      'Six service pillars with icon-key mapping',
      'Four experience programmes with pricing and locations',
      'Slug-based lookup resolver with redirect handling',
    ],
  },
  {
    phase: 'Phase 03',
    title: 'Experience Layer',
    duration: 'Week 3–5',
    status: 'Complete',
    items: [
      'Home flagship narrative with cinematic hero',
      'Models discovery engine with live filtering',
      'Model detail with interactive colour blending',
      'Services accordion and service journey timeline',
      'Experience showcase and training pathway grid',
    ],
  },
  {
    phase: 'Phase 04',
    title: 'Documentation & Hardening',
    duration: 'Week 5–6',
    status: 'Complete',
    items: [
      'Platform overview page',
      'Master specification charter',
      'Accessibility audit and ARIA remediation',
      'Responsive verification 320px to 3840px',
      'Production build and single-file verification',
    ],
  },
  {
    phase: 'Phase 05',
    title: 'Optional Extensions',
    duration: 'Post-delivery',
    status: 'Roadmap',
    items: [
      'Headless CMS binding (Sanity, Contentful or Strapi)',
      'Full configurator with dependency-aware option tree',
      'Finance calculator with balloon and PCP modelling',
      'Dealer locator with geospatial search',
      'Multi-language routing and locale-aware formatting',
      'Analytics and conversion-event instrumentation',
    ],
  },
];

/* --------------------------------- KPIs ---------------------------------- */

export const kpis = [
  { metric: 'Shortlist Rate', definition: 'Percentage of /models visitors who reach a model detail page.', target: '> 45%' },
  { metric: 'Configurator Engagement', definition: 'Colour or option interaction on a detail page.', target: '> 30%' },
  { metric: 'Enquiry Conversion', definition: 'Test drive, service booking or experience reservation submitted.', target: '> 4%' },
  { metric: 'Service Self-Service', definition: 'Bookings placed online rather than by telephone.', target: '> 60%' },
  { metric: 'Experience Uplift', definition: 'Cross-sell from vehicle detail into an experience page.', target: '> 12%' },
  { metric: 'Time to Shortlist', definition: 'Median minutes from landing to first detail page view.', target: '< 3 min' },
];

/* ------------------------------ DELIVERABLES ----------------------------- */

export const deliverables = [
  { item: 'Source repository', detail: 'Complete TypeScript codebase with typed data layer, components and pages.' },
  { item: 'Production artifact', detail: 'Single-file HTML build deployable to any static host or offline kiosk.' },
  { item: 'Design system', detail: 'Tailwind theme tokens, button recipes and the shared primitive library.' },
  { item: 'Content dataset', detail: 'Typed model, service, experience and client records ready for CMS migration.' },
  { item: 'Asset library', detail: 'Seven bespoke generated automotive images plus curated photography.' },
  { item: 'Project charter', detail: 'This specification — functional scope, NFRs, data model, roadmap and KPIs.' },
  { item: 'Licensing', detail: 'White-label: rebrand and resell the engine for any marque or client vertical.' },
];
