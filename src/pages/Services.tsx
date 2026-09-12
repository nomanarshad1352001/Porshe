import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Sparkles, Landmark, History, Radio, ShieldCheck, Plus, Minus, Check, ArrowRight,
} from 'lucide-react';
import { services } from '../data/content';
import { PageHero, Reveal, Eyebrow, SectionTitle } from '../components/ui';

const icons: Record<string, typeof Wrench> = { Wrench, Sparkles, Landmark, History, Radio, ShieldCheck };

const steps = [
  { n: '01', t: 'Book Online', d: 'Select your centre, service type and preferred date in under two minutes.' },
  { n: '02', t: 'Digital Health Check', d: 'Receive a video walkaround from your technician before any work begins.' },
  { n: '03', t: 'Approve Remotely', d: 'Authorise additional work line by line from your phone. No surprises.' },
  { n: '04', t: 'Collect & Track', d: 'Every job is written to your digital service passport, permanently.' },
];

export default function Services() {
  const [open, setOpen] = useState<string | null>('maintenance');

  return (
    <div>
      <PageHero
        image="/images/services/service-center.jpg"
        eyebrow="Ownership & Services"
        title={<>Engineered care.</>}
        subtitle="A Porsche is designed to be driven for decades. Our service network exists to make sure it is — with factory-trained technicians, genuine parts and complete transparency."
      />

      {/* ACCORDION SERVICES */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>What we offer</Eyebrow>
            <SectionTitle light>Six pillars of ownership.</SectionTitle>
          </Reveal>

          <div className="border-t border-black/10">
            {services.map((s, i) => {
              const Icon = icons[s.icon] ?? Wrench;
              const isOpen = open === s.id;
              return (
                <Reveal key={s.id} delay={i * 0.05}>
                  <div className="border-b border-black/10">
                    <button
                      onClick={() => setOpen(isOpen ? null : s.id)}
                      className="group flex w-full items-center gap-6 py-8 text-left"
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center transition-colors ${
                          isOpen ? 'bg-[#d5001c] text-white' : 'bg-neutral-100 text-black group-hover:bg-black group-hover:text-white'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-xl md:text-2xl font-black uppercase tracking-tight text-black">
                          {s.title}
                        </span>
                        <span className="mt-1 block text-sm font-light text-neutral-500">{s.summary}</span>
                      </span>
                      {isOpen ? (
                        <Minus className="h-5 w-5 shrink-0 text-[#d5001c]" />
                      ) : (
                        <Plus className="h-5 w-5 shrink-0 text-black/30 group-hover:text-black" />
                      )}
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid gap-10 pb-10 pl-0 md:grid-cols-2 md:pl-18">
                          <p className="text-base font-light leading-relaxed text-neutral-600">{s.detail}</p>
                          <ul className="space-y-3">
                            {s.points.map((p) => (
                              <li key={p} className="flex items-center gap-3">
                                <Check className="h-4 w-4 shrink-0 text-[#d5001c]" />
                                <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-black">{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0b0b0b] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>The Process</Eyebrow>
            <SectionTitle>Four steps. Zero friction.</SectionTitle>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="border-t border-white/15 pt-6">
                  <span className="block text-5xl font-black tracking-tight text-[#d5001c]">{s.n}</span>
                  <h4 className="mt-5 text-lg font-black uppercase tracking-tight text-white">{s.t}</h4>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/45">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WARRANTY BANNER */}
      <section className="relative overflow-hidden">
        <img
          src="/images/services/service-center.jpg"
          alt="Service centre"
          className="h-[60vh] min-h-[380px] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center bg-black/65">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <Reveal className="max-w-xl">
              <Eyebrow>Porsche Approved</Eyebrow>
              <SectionTitle>111 checks.<br />No shortcuts.</SectionTitle>
              <p className="mt-6 text-base font-light text-white/60">
                Every Approved pre-owned Porsche is recommissioned to factory tolerances and backed by a minimum
                24-month warranty, valid at every official centre worldwide.
              </p>
              <Link to="/models" className="porsche-btn mt-10 inline-flex items-center gap-2 group">
                Browse Approved Stock
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-3 md:px-10">
          {[
            { t: 'Book a Service', d: 'Choose your centre and slot online.', c: 'Book Now' },
            { t: 'Request a Quote', d: 'Fixed-price servicing for vehicles over 3 years.', c: 'Get Quote' },
            { t: 'Roadside Assistance', d: '24/7 support across 30+ countries.', c: 'Call Support' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="flex h-full flex-col border border-black/10 p-8 transition-colors hover:border-black">
                <h4 className="text-xl font-black uppercase tracking-tight text-black">{c.t}</h4>
                <p className="mt-3 flex-1 text-sm font-light text-neutral-500">{c.d}</p>
                <button className="mt-8 self-start border-b-2 border-black pb-1 text-[10px] font-bold uppercase tracking-[2px] text-black hover:border-[#d5001c] hover:text-[#d5001c] transition-colors">
                  {c.c}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
