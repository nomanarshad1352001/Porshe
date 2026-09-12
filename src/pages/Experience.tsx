import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { experiences } from '../data/content';
import { PageHero, Reveal, Eyebrow, SectionTitle, SpecCell } from '../components/ui';

const levels = [
  { name: 'Precision', desc: 'Seating position, vision, braking thresholds and the racing line.', req: 'No experience required' },
  { name: 'Performance', desc: 'Weight transfer, trail braking and controlled oversteer on low grip.', req: 'Precision completed' },
  { name: 'Master', desc: 'Full circuit sessions in GT models with data overlay and lap analysis.', req: 'Performance completed' },
  { name: 'Competition', desc: 'Race licence preparation, endurance stints and pit-stop procedure.', req: 'Master completed' },
];

export default function Experience() {
  return (
    <div>
      <PageHero
        image="/images/experience/track.jpg"
        eyebrow="Porsche Experience"
        title={<>Drive it properly.</>}
        subtitle="A Porsche reveals itself at the limit — and the limit belongs on a circuit. Our instructors, facilities and fleet exist to take you there safely."
      />

      {/* STATS */}
      <section className="border-b border-black/5 bg-white py-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-10">
          <SpecCell light label="Experience Centres" value="10" />
          <SpecCell light label="Instructors Worldwide" value="240+" />
          <SpecCell light label="Guests Per Year" value="180k" />
          <SpecCell light label="Countries" value="34" />
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Programmes</Eyebrow>
            <SectionTitle light>Four ways in.</SectionTitle>
          </Reveal>

          <div className="space-y-20">
            {experiences.map((e, i) => (
              <Reveal key={e.id} delay={0.05}>
                <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="group overflow-hidden lg:[direction:ltr]">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="lg:[direction:ltr]">
                    <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#d5001c]">
                      0{i + 1} — {e.price}
                    </span>
                    <h3 className="mt-4 text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-black">
                      {e.title}
                    </h3>
                    <p className="mt-5 text-base font-light leading-relaxed text-neutral-600">{e.summary}</p>
                    <div className="mt-8 flex flex-wrap gap-8">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d5001c]" />
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-black/35">Locations</div>
                          <div className="mt-1 text-[11px] font-bold uppercase tracking-[1px] text-black">{e.location}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#d5001c]" />
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-black/35">Duration</div>
                          <div className="mt-1 text-[11px] font-bold uppercase tracking-[1px] text-black">{e.duration}</div>
                        </div>
                      </div>
                    </div>
                    <button className="mt-10 bg-black px-8 py-3.5 text-[10px] font-bold uppercase tracking-[2px] text-white hover:bg-[#d5001c] transition-colors">
                      Reserve a Place
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING LEVELS */}
      <section className="bg-[#0b0b0b] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Track Experience Pathway</Eyebrow>
            <SectionTitle>Four levels of mastery.</SectionTitle>
          </Reveal>
          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {levels.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <div className="group h-full bg-[#0b0b0b] p-8 transition-colors hover:bg-[#d5001c]">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/30 group-hover:text-white/70">
                    Level {i + 1}
                  </span>
                  <h4 className="mt-3 text-2xl font-black uppercase tracking-tight text-white">{l.name}</h4>
                  <p className="mt-4 text-sm font-light leading-relaxed text-white/45 group-hover:text-white/80">
                    {l.desc}
                  </p>
                  <p className="mt-8 border-t border-white/10 pt-4 text-[9px] font-bold uppercase tracking-[1.5px] text-white/30 group-hover:text-white/70">
                    {l.req}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src="/images/experience/track.jpg" alt="" className="h-[55vh] min-h-[340px] w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/65">
          <Reveal className="max-w-2xl px-5 text-center">
            <SectionTitle>There is no substitute.</SectionTitle>
            <p className="mx-auto mt-6 max-w-md text-base font-light text-white/60">
              Book a session, bring your licence, and leave a faster driver than you arrived.
            </p>
            <Link to="/models" className="porsche-btn mt-10 inline-flex items-center gap-2 group">
              Explore the Fleet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
