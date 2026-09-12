import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { models } from '../data/models';
import { PageHero, Reveal, Eyebrow, SectionTitle } from '../components/ui';

const filters = ['All', 'Sports Car', 'Electric', 'SUV', 'Sedan'] as const;

export default function Models() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const shown = active === 'All' ? models : models.filter((m) => m.bodyType === active);

  return (
    <div>
      <PageHero
        image="/images/models/911.jpg"
        eyebrow="The Model Range"
        title={<>Choose your machine.</>}
        subtitle="Six model lines. From the mid-engine purity of the 718 to the 800-volt future of the Taycan — every one of them unmistakably a Porsche."
      />

      {/* FILTERS */}
      <section className="sticky top-[60px] z-30 border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-5 py-5 md:px-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 border px-6 py-2.5 text-[10px] font-bold uppercase tracking-[2px] transition-all ${
                active === f
                  ? 'border-black bg-black text-white'
                  : 'border-black/15 text-black/60 hover:border-black hover:text-black'
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto hidden shrink-0 items-center text-[10px] font-bold uppercase tracking-[2px] text-black/30 md:flex">
            {shown.length} {shown.length === 1 ? 'Model' : 'Models'}
          </span>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white pb-28 pt-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
            {shown.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 0.1}>
                <Link to={`/models/${m.slug}`} className="group block">
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <span className="absolute left-0 top-0 bg-black px-3 py-1.5 text-[9px] font-bold uppercase tracking-[2px] text-white">
                      {m.series}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black">{m.name}</h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[2px] text-[#d5001c]">{m.tagline}</p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">{m.description}</p>

                  <div className="mt-6 grid grid-cols-3 gap-4 border-y border-black/10 py-4">
                    <div>
                      <div className="text-base font-black text-black">{m.specs.power}</div>
                      <div className="text-[9px] font-bold uppercase tracking-[1px] text-black/35">Power</div>
                    </div>
                    <div>
                      <div className="text-base font-black text-black">{m.specs.acceleration}</div>
                      <div className="text-[9px] font-bold uppercase tracking-[1px] text-black/35">0–60 mph</div>
                    </div>
                    <div>
                      <div className="text-base font-black text-black">{m.specs.topSpeed}</div>
                      <div className="text-[9px] font-bold uppercase tracking-[1px] text-black/35">Top Speed</div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-black">{m.price}</span>
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-black group-hover:text-[#d5001c] transition-colors">
                      Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE STRIP */}
      <section className="bg-[#0b0b0b] py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal>
            <Eyebrow>Side by side</Eyebrow>
            <SectionTitle>Compare the range.</SectionTitle>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15">
                  {['Model', 'Engine', 'Power', '0–60', 'Top Speed', 'From'].map((h) => (
                    <th key={h} className="py-4 text-[10px] font-bold uppercase tracking-[2px] text-white/35">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {models.map((m) => (
                  <tr key={m.slug} className="border-b border-white/5 transition-colors hover:bg-white/5">
                    <td className="py-5 pr-6">
                      <Link to={`/models/${m.slug}`} className="text-sm font-black uppercase tracking-tight text-white hover:text-[#d5001c]">
                        {m.name}
                      </Link>
                    </td>
                    <td className="py-5 pr-6 text-xs font-light text-white/50">{m.specs.engine}</td>
                    <td className="py-5 pr-6 text-xs font-bold text-white">{m.specs.power}</td>
                    <td className="py-5 pr-6 text-xs font-bold text-white">{m.specs.acceleration}</td>
                    <td className="py-5 pr-6 text-xs font-bold text-white">{m.specs.topSpeed}</td>
                    <td className="py-5 text-xs font-bold uppercase tracking-[1px] text-[#d5001c]">{m.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
