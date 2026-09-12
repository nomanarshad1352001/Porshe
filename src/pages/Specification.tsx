import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Circle, LayoutGrid, Code2, Users, Gauge,
  FolderTree, Database, Target, Package, FileText,
} from 'lucide-react';
import {
  project, executiveSummary, buildMetrics, modules, clients,
  qualities, stack, nonFunctional, dataModel, roadmap, kpis, deliverables,
} from '../data/spec';
import { PageHero, Reveal, Eyebrow, SectionTitle, SpecCell } from '../components/ui';

const Section = ({
  icon: Icon, eyebrow, title, children, dark = false,
}: {
  icon: typeof Gauge; eyebrow: string; title: React.ReactNode; children: React.ReactNode; dark?: boolean;
}) => (
  <section className={dark ? 'bg-[#0b0b0b] py-24 md:py-32' : 'bg-white py-24 md:py-32'}>
    <div className="mx-auto max-w-[1440px] px-5 md:px-10">
      <Reveal className="mb-14 max-w-3xl">
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center bg-[#d5001c] text-white">
          <Icon className="h-5 w-5" />
        </span>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle light={!dark}>{title}</SectionTitle>
      </Reveal>
      {children}
    </div>
  </section>
);

export default function Specification() {
  return (
    <div>
      <PageHero
        image="/images/models/cayenne.jpg"
        eyebrow="Master Project Charter"
        title={<>The complete<br />specification.</>}
        subtitle="Functional scope, non-functional requirements, data model, technology stack, delivery roadmap and commercial positioning — in one document."
      />

      {/* ================= TITLE BLOCK ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <Reveal>
              <Eyebrow>Project Title</Eyebrow>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight text-black">
                {project.title}
                <br />
                <span className="text-[#d5001c]">{project.subtitle}</span>
              </h2>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[2px] text-black/40">{project.category}</p>
              <p className="mt-8 border-l-2 border-[#d5001c] pl-5 text-lg font-light italic leading-relaxed text-neutral-600">
                "{project.tagline}"
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <dl className="divide-y divide-black/10 border-y border-black/10">
                {[
                  ['Version', project.version],
                  ['Build Year', project.buildDate],
                  ['Status', project.status],
                  ['Category', project.category],
                  ['Prepared By', project.author],
                  ['Licence', project.license],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-[10px] font-bold uppercase tracking-[2px] text-black/40">{k}</dt>
                    <dd className="text-right text-xs font-bold uppercase tracking-[1px] text-black">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-20">
            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-10 md:grid-cols-4">
              {buildMetrics.slice(0, 4).map((m) => (
                <div key={m.label}>
                  <SpecCell light label={m.label} value={m.value} />
                  <p className="mt-2 text-[10px] font-light text-black/35">{m.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= EXECUTIVE SUMMARY ================= */}
      <Section icon={FileText} eyebrow="Executive Summary" title={<>The problem, and<br />the answer.</>} dark>
        <div className="grid gap-px bg-white/10 lg:grid-cols-2">
          {[
            { k: 'The Problem', v: executiveSummary.problem },
            { k: 'The Solution', v: executiveSummary.solution },
            { k: 'The Objective', v: executiveSummary.objective },
            { k: 'The Differentiator', v: executiveSummary.differentiator },
          ].map((b, i) => (
            <Reveal key={b.k} delay={(i % 2) * 0.1}>
              <div className="h-full bg-[#0b0b0b] p-8 md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#d5001c]">
                  {String(i + 1).padStart(2, '0')} · {b.k}
                </span>
                <p className="mt-5 text-base font-light leading-relaxed text-white/60">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= CLIENTS ================= */}
      <Section icon={Users} eyebrow="Target Market" title={<>Who buys this —<br />and why.</>}>
        <div className="mb-10 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-black">
                {['#', 'Client Segment', 'Budget Band', 'The Pain', 'What They Need'].map((h) => (
                  <th key={h} className="py-4 pr-6 text-[10px] font-bold uppercase tracking-[2px] text-black/40">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id} className="border-b border-black/10 align-top transition-colors hover:bg-neutral-50">
                  <td className="py-6 pr-6 text-sm font-black text-[#d5001c]">{c.id}</td>
                  <td className="py-6 pr-6">
                    <div className="text-sm font-black uppercase tracking-tight text-black">{c.segment}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[1.5px] text-black/35">{c.budget}</div>
                  </td>
                  <td className="py-6 pr-6 text-xs font-light leading-relaxed text-neutral-500">{c.pain}</td>
                  <td className="py-6 pr-6 text-xs font-semibold leading-relaxed text-black">{c.need}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal key={`${c.id}-value`} delay={(i % 3) * 0.07}>
              <div className="h-full border-t-2 border-black pt-6">
                <span className="text-[9px] font-bold uppercase tracking-[2px] text-black/30">{c.id} · Value</span>
                <p className="mt-3 text-sm font-light leading-relaxed text-neutral-600">{c.value}</p>
                <p className="mt-4 border-t border-black/10 pt-4 text-xs font-semibold leading-relaxed text-black">
                  <span className="font-black uppercase tracking-[1px] text-[#d5001c]">Why Nexus — </span>
                  {c.whyNexus}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= FUNCTIONAL MODULES ================= */}
      <Section icon={LayoutGrid} eyebrow="Functional Requirements" title={<>Every module,<br />every feature.</>} dark>
        <div className="space-y-px bg-white/10">
          {modules.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.03}>
              <div className="bg-[#0b0b0b] p-8 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                  <div className="md:w-56 md:shrink-0">
                    <span className="text-4xl font-black tracking-tight text-[#d5001c]">{m.id}</span>
                    <h3 className="mt-3 text-lg font-black uppercase leading-tight tracking-tight text-white">{m.title}</h3>
                    <code className="mt-3 inline-block bg-white/5 px-2 py-1 font-mono text-[10px] text-white/50">{m.route}</code>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-light leading-relaxed text-white/50">
                      <span className="font-bold uppercase tracking-[1px] text-white/80">Purpose — </span>{m.purpose}
                    </p>
                    <div className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {m.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d5001c]" />
                          <span className="text-[11px] font-medium leading-relaxed text-white/60">{f}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 border-t border-white/10 pt-4 text-xs font-light leading-relaxed text-white/40">
                      <span className="font-bold uppercase tracking-[1px] text-[#d5001c]">Commercial value — </span>{m.commercial}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= QUALITIES ================= */}
      <Section icon={Gauge} eyebrow="Qualities" title={<>Ten engineering<br />qualities.</>}>
        <div className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
          {qualities.map((q, i) => (
            <Reveal key={q.title} delay={(i % 5) * 0.05}>
              <div className="h-full bg-white p-7">
                <span className="text-[10px] font-black tracking-[2px] text-[#d5001c]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-3 text-sm font-black uppercase leading-tight tracking-tight text-black">{q.title}</h4>
                <p className="mt-3 text-xs font-light leading-relaxed text-neutral-500">{q.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-10 md:grid-cols-4">
            {buildMetrics.slice(4).map((m) => (
              <div key={m.label}>
                <SpecCell light label={m.label} value={m.value} />
                <p className="mt-2 text-[10px] font-light text-black/35">{m.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ================= TECH STACK ================= */}
      <Section icon={Code2} eyebrow="Technology" title={<>The stack, with<br />justification.</>} dark>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/20">
                {['Technology', 'Version', 'Layer', 'Role', 'Why it was chosen'].map((h) => (
                  <th key={h} className="py-4 pr-8 text-[10px] font-bold uppercase tracking-[2px] text-white/35">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stack.map((t) => (
                <tr key={t.name} className="border-b border-white/5 align-top transition-colors hover:bg-white/[0.03]">
                  <td className="py-5 pr-8">
                    <div className="text-sm font-black uppercase tracking-tight text-white">{t.name}</div>
                    <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[1px] text-[#d5001c]">{t.layer}</div>
                  </td>
                  <td className="py-5 pr-8 font-mono text-xs text-white/70">{t.version}</td>
                  <td className="max-w-xs py-5 pr-8 text-xs font-light leading-relaxed text-white/45">{t.role}</td>
                  <td className="max-w-sm py-5 pr-8 text-xs font-light leading-relaxed text-white/60">{t.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Reveal delay={0.15} className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          {[
            { h: 'Design System', p: 'Tailwind v4 @theme tokens, two global button recipes, and a shared primitive set — Reveal, PageHero, SectionTitle, Eyebrow, SpecCell — consumed by every page.' },
            { h: 'Data Layer', p: 'Seven typed interfaces across three files. Slug-based resolvers. Zero content hard-coded in components. Drop-in ready for a headless CMS or REST/GraphQL API.' },
            { h: 'Deployment', p: 'vite-plugin-singlefile inlines all JS and CSS into one HTML artifact. Serve from S3, Cloudflare Pages, Netlify, or an offline showroom kiosk with no server.' },
          ].map((b) => (
            <div key={b.h}>
              <h5 className="text-[10px] font-bold uppercase tracking-[2px] text-[#d5001c]">{b.h}</h5>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/50">{b.p}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* ================= NFRs ================= */}
      <Section icon={Target} eyebrow="Non-Functional Requirements" title={<>The constraints<br />we hold.</>}>
        <div className="border-t border-black/10">
          {nonFunctional.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.02}>
              <div className="grid gap-3 border-b border-black/10 py-6 md:grid-cols-[90px_120px_1fr_1fr] md:gap-8">
                <span className="font-mono text-xs font-bold text-[#d5001c]">{n.id}</span>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-black/50">{n.category}</span>
                <span className="text-sm font-semibold leading-relaxed text-black">{n.requirement}</span>
                <span className="flex items-start gap-3 text-xs font-light leading-relaxed text-neutral-500">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d5001c]" />
                  {n.met}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= DATA MODEL ================= */}
      <Section icon={Database} eyebrow="Architecture" title={<>Typed data model.</>} dark>
        <div className="grid gap-px bg-white/10 lg:grid-cols-2">
          {dataModel.map((d, i) => (
            <Reveal key={d.entity} delay={(i % 2) * 0.07}>
              <div className="h-full bg-[#0b0b0b] p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-mono text-lg font-bold text-white">{d.entity}</h4>
                  <code className="font-mono text-[10px] text-white/30">{d.file}</code>
                </div>
                <p className="mt-4 break-words font-mono text-[11px] leading-relaxed text-[#d5001c]">{d.fields}</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs font-light leading-relaxed text-white/45">{d.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <div className="border border-white/10 p-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[2px] text-[#d5001c]">Project Tree</h5>
            <pre className="mt-5 overflow-x-auto font-mono text-[11px] leading-loose text-white/50">
{`src/
├── data/
│   ├── models.ts      CarModel, ModelSpecs — 6 vehicles
│   ├── content.ts     services, experiences, clients, stack
│   └── spec.ts        project charter, NFRs, roadmap, KPIs
├── components/
│   ├── Navbar.tsx     Sticky nav, mobile drawer, scroll state
│   ├── Footer.tsx     Newsletter capture, 4 link columns
│   └── ui.tsx         Reveal, PageHero, SectionTitle, SpecCell
├── pages/
│   ├── Home.tsx           /
│   ├── Models.tsx         /models
│   ├── ModelDetail.tsx    /models/:slug
│   ├── Services.tsx       /services
│   ├── Experience.tsx     /experience
│   ├── Platform.tsx       /platform
│   └── Specification.tsx  /specification
└── App.tsx            HashRouter + route table`}
            </pre>
          </div>
        </Reveal>
      </Section>

      {/* ================= ROADMAP ================= */}
      <Section icon={FolderTree} eyebrow="Delivery" title={<>The roadmap.</>}>
        <div className="grid gap-px bg-black/10 lg:grid-cols-5">
          {roadmap.map((r, i) => (
            <Reveal key={r.phase} delay={i * 0.06}>
              <div className="flex h-full flex-col bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[2px] text-[#d5001c]">{r.phase}</span>
                  {r.status === 'Complete' ? (
                    <CheckCircle2 className="h-4 w-4 text-[#d5001c]" />
                  ) : (
                    <Circle className="h-4 w-4 text-neutral-300" />
                  )}
                </div>
                <h4 className="mt-3 text-base font-black uppercase leading-tight tracking-tight text-black">{r.title}</h4>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[1.5px] text-black/35">{r.duration}</p>
                <div className="mt-5 flex-1 space-y-2.5 border-t border-black/10 pt-5">
                  {r.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#d5001c]" />
                      <span className="text-[11px] font-medium leading-relaxed text-neutral-600">{item}</span>
                    </div>
                  ))}
                </div>
                <span className={`mt-6 inline-block self-start px-3 py-1 text-[9px] font-bold uppercase tracking-[1.5px] ${
                  r.status === 'Complete' ? 'bg-[#d5001c] text-white' : 'bg-neutral-100 text-black/50'
                }`}>
                  {r.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= KPIs ================= */}
      <Section icon={Gauge} eyebrow="Success Metrics" title={<>How we measure<br />whether it worked.</>} dark>
        <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {kpis.map((k, i) => (
            <Reveal key={k.metric} delay={(i % 3) * 0.07}>
              <div className="h-full bg-[#0b0b0b] p-8">
                <div className="text-3xl font-black tracking-tight text-[#d5001c]">{k.target}</div>
                <h4 className="mt-4 text-sm font-black uppercase tracking-tight text-white">{k.metric}</h4>
                <p className="mt-3 text-xs font-light leading-relaxed text-white/45">{k.definition}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= DELIVERABLES ================= */}
      <Section icon={Package} eyebrow="Handover" title={<>What the client<br />receives.</>}>
        <div className="grid gap-8 md:grid-cols-2">
          {deliverables.map((d, i) => (
            <Reveal key={d.item} delay={(i % 2) * 0.07}>
              <div className="flex gap-6 border-t border-black/10 pt-6">
                <span className="text-2xl font-black tracking-tight text-black/15">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-base font-black uppercase tracking-tight text-black">{d.item}</h4>
                  <p className="mt-2 text-sm font-light leading-relaxed text-neutral-500">{d.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= CTA ================= */}
      <section className="border-t border-white/10 bg-[#0b0b0b] py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <SectionTitle>Specification<br />demonstrated.</SectionTitle>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-white/50">
            Every requirement on this page is implemented in the pages around it. Start with the range.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/models" className="porsche-btn group inline-flex items-center gap-2">
              View the Models <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/platform" className="porsche-btn-outline">Platform Overview</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
