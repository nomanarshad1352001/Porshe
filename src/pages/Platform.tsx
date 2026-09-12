import { Link } from 'react-router-dom';
import {
  Layers, Gauge, Smartphone, Palette, Route, Search, ShieldCheck, Accessibility, ArrowRight,
} from 'lucide-react';
import { techStack, platformFeatures, audiences } from '../data/content';
import { PageHero, Reveal, Eyebrow, SectionTitle, SpecCell } from '../components/ui';

const qualities = [
  { icon: Gauge, t: 'Performance First', d: 'Single-file production bundle, tree-shaken icons and lazy image decoding. Sub-second first paint on 4G.' },
  { icon: Palette, t: 'Brand-Accurate Design', d: 'Black / white / Guards Red palette, ultra-wide letter tracking and editorial whitespace matched to marque guidelines.' },
  { icon: Smartphone, t: 'Truly Responsive', d: 'One codebase serving a 4K showroom wall, a sales tablet and a mobile lead-capture funnel.' },
  { icon: Layers, t: 'Typed Content Layer', d: 'Every vehicle, service and experience is a typed object — swap the dataset and rebrand the entire platform.' },
  { icon: Route, t: 'Deep-Linkable Routes', d: 'Each model owns a shareable URL, ready for paid campaigns and dealer-specific landing pages.' },
  { icon: Search, t: 'SEO & Metadata Ready', d: 'Semantic heading hierarchy, descriptive alt text and crawlable static markup out of the box.' },
  { icon: Accessibility, t: 'Accessible by Default', d: 'Keyboard-navigable menus, ARIA labelling, AA contrast ratios and reduced-motion friendly transitions.' },
  { icon: ShieldCheck, t: 'Zero-Dependency Deploy', d: 'Builds to a single portable artifact — host it on any CDN, bucket or kiosk with no server runtime.' },
];

const modules = [
  { n: '01', t: 'Home — Flagship Narrative', d: 'Cinematic hero, live spec strip, featured range, heritage storytelling and experience teasers.' },
  { n: '02', t: 'Models — Discovery', d: 'Body-type filtering, live result counts, spec-preview cards and a full comparison matrix.' },
  { n: '03', t: 'Model Detail — Conversion', d: 'Dynamic routing, colour selector with live paint blending, highlight list and full technical table.' },
  { n: '04', t: 'Services — Retention', d: 'Six-pillar accordion, four-step service journey and Approved pre-owned positioning.' },
  { n: '05', t: 'Experience — Lifestyle Revenue', d: 'Alternating programme showcase with pricing, locations and a four-level training pathway.' },
  { n: '06', t: 'Platform — Documentation', d: 'This page: scope, audience, feature set and engineering stack in one shareable link.' },
];

export default function Platform() {
  return (
    <div>
      <PageHero
        image="/images/models/taycan.jpg"
        eyebrow="Project Documentation"
        title={
          <>
            Porsche <span className="text-[#d5001c]">Nexus</span>
          </>
        }
        subtitle="A digital flagship platform for premium automotive brands — the complete showroom, ownership and experience journey in one high-performance front end."
      />

      {/* OVERVIEW */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
            <Reveal>
              <Eyebrow>Project Title</Eyebrow>
              <SectionTitle light>
                Porsche Nexus
                <br />
                <span className="text-[#d5001c]">Digital Flagship</span>
              </SectionTitle>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[2px] text-black/35">
                Category: Luxury Automotive · Marketing & Commerce Front End
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="text-xl font-black uppercase tracking-tight text-black">What this platform does</h3>
              <p className="mt-5 text-base font-light leading-relaxed text-neutral-600">
                Porsche Nexus replaces the fragmented mix of brochure sites, PDF price lists and third-party booking
                tools that most premium dealerships still rely on. It unifies <strong className="font-bold text-black">vehicle
                discovery</strong>, <strong className="font-bold text-black">technical comparison</strong>,{' '}
                <strong className="font-bold text-black">aftersales servicing</strong> and{' '}
                <strong className="font-bold text-black">lifestyle experience booking</strong> into a single, typed,
                cinematic interface.
              </p>
              <p className="mt-5 text-base font-light leading-relaxed text-neutral-600">
                The content layer is fully decoupled: every model, service pillar and experience programme lives in a
                strongly-typed dataset. Replace that dataset and the same engine becomes a showroom for any marque,
                any fleet, or any collection of high-value assets — without touching a single component.
              </p>
              <p className="mt-5 text-base font-light leading-relaxed text-neutral-600">
                The commercial objective is simple: move a visitor from anonymous curiosity to a qualified enquiry —
                test drive, service booking or experience reservation — in as few screens as possible, while making
                the brand feel as engineered online as it does in the metal.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-20">
            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-10 md:grid-cols-4">
              <SpecCell light label="Routed Pages" value="6" />
              <SpecCell light label="Vehicle Records" value="6" />
              <SpecCell light label="Service Pillars" value="6" />
              <SpecCell light label="Runtime Dependencies" value="4" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-[#0b0b0b] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Target Market</Eyebrow>
            <SectionTitle>Who buys this.</SectionTitle>
            <p className="mt-6 text-base font-light leading-relaxed text-white/50">
              Nexus is built for organisations whose product is expensive, emotional and considered — where the
              website is not a catalogue but the first showroom the customer ever walks into.
            </p>
          </Reveal>

          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.who} delay={(i % 3) * 0.08}>
                <div className="group h-full bg-[#0b0b0b] p-8 transition-colors hover:bg-white/[0.04]">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#d5001c]">
                    Client {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-3 text-lg font-black uppercase leading-tight tracking-tight text-white">{a.who}</h4>
                  <p className="mt-5 text-sm font-light leading-relaxed text-white/45">
                    <span className="font-bold uppercase tracking-[1px] text-white/70">Need — </span>
                    {a.need}
                  </p>
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm font-light leading-relaxed text-white/45">
                    <span className="font-bold uppercase tracking-[1px] text-[#d5001c]">Value — </span>
                    {a.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Feature Set</Eyebrow>
            <SectionTitle light>What is inside.</SectionTitle>
          </Reveal>
          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="border-t-2 border-black pt-6">
                  <h4 className="text-lg font-black uppercase tracking-tight text-black">{f.title}</h4>
                  <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITIES */}
      <section className="bg-neutral-100 py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Engineering Qualities</Eyebrow>
            <SectionTitle light>Why it performs.</SectionTitle>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {qualities.map((q, i) => (
              <Reveal key={q.t} delay={(i % 4) * 0.07}>
                <div className="h-full bg-white p-8 transition-shadow hover:shadow-xl">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center bg-black text-white">
                    <q.icon className="h-5 w-5" />
                  </span>
                  <h4 className="text-base font-black uppercase tracking-tight text-black">{q.t}</h4>
                  <p className="mt-3 text-sm font-light leading-relaxed text-neutral-500">{q.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="bg-[#0b0b0b] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Architecture</Eyebrow>
            <SectionTitle>Six modules.</SectionTitle>
          </Reveal>
          <div className="border-t border-white/10">
            {modules.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.05}>
                <div className="group flex flex-col gap-4 border-b border-white/10 py-8 md:flex-row md:items-center md:gap-12">
                  <span className="text-3xl font-black tracking-tight text-white/15 transition-colors group-hover:text-[#d5001c]">
                    {m.n}
                  </span>
                  <h4 className="w-full text-lg font-black uppercase tracking-tight text-white md:w-80">{m.t}</h4>
                  <p className="flex-1 text-sm font-light leading-relaxed text-white/45">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Technology</Eyebrow>
            <SectionTitle light>The stack.</SectionTitle>
            <p className="mt-6 text-base font-light leading-relaxed text-neutral-600">
              Deliberately lean. No server runtime, no CMS lock-in, no heavyweight UI framework — just a typed React
              application compiled into a single deployable artifact.
            </p>
          </Reveal>
          <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 0.06}>
                <div className="h-full bg-white p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#d5001c]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-3 text-lg font-black uppercase tracking-tight text-black">{t.name}</h4>
                  <p className="mt-3 text-sm font-light leading-relaxed text-neutral-500">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <div className="grid gap-8 border-t border-black/10 pt-10 md:grid-cols-3">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[2px] text-black/35">Design System</h5>
                <p className="mt-3 text-sm font-light text-neutral-600">
                  Tailwind v4 theme tokens, a shared <code className="font-mono text-xs text-black">Reveal</code> /{' '}
                  <code className="font-mono text-xs text-black">PageHero</code> primitive set, and two global button
                  recipes.
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[2px] text-black/35">Data Layer</h5>
                <p className="mt-3 text-sm font-light text-neutral-600">
                  Typed TypeScript interfaces (<code className="font-mono text-xs text-black">CarModel</code>) with
                  slug-based lookups — drop-in ready for a headless CMS or REST/GraphQL API.
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[2px] text-black/35">Deployment</h5>
                <p className="mt-3 text-sm font-light text-neutral-600">
                  Vite production build inlined to one HTML file. Serve from S3, Cloudflare Pages, Netlify, or an
                  offline showroom kiosk.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0b0b0b] py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <SectionTitle>See it in motion.</SectionTitle>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-white/50">
            Every claim on this page is demonstrated by the pages around it. Start with the range.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/specification" className="porsche-btn group inline-flex items-center gap-2">
              Full Specification <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/models" className="porsche-btn-outline">View the Models</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
