import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { getModel, models } from '../data/models';
import { Reveal, Eyebrow, SectionTitle, SpecCell } from '../components/ui';

export default function ModelDetail() {
  const { slug } = useParams();
  const model = getModel(slug);
  const [colorIdx, setColorIdx] = useState(0);

  if (!model) return <Navigate to="/models" replace />;

  const others = models.filter((m) => m.slug !== model.slug).slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex h-[85vh] min-h-[560px] items-end overflow-hidden">
        <motion.img
          key={model.slug}
          initial={{ scale: 1.14, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src={model.image}
          alt={model.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20">
          <Link
            to="/models"
            className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Models
          </Link>
          <Eyebrow>{model.series} Series · {model.bodyType}</Eyebrow>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight text-white">
            {model.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light text-white/60">{model.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="porsche-btn group flex items-center gap-2">
              Configure <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="porsche-btn-outline">Book a Test Drive</button>
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-white/50">{model.price}</span>
          </div>
        </div>
      </section>

      {/* SPEC BAR */}
      <section className="border-b border-black/5 bg-white py-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-10">
          <SpecCell light label="Power" value={model.specs.power} />
          <SpecCell light label="0–60 mph" value={model.specs.acceleration} />
          <SpecCell light label="Top Speed" value={model.specs.topSpeed} />
          <SpecCell light label="Torque" value={model.specs.torque} />
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Eyebrow>Concept</Eyebrow>
            <SectionTitle light>The idea<br />behind it.</SectionTitle>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lg font-light leading-relaxed text-neutral-600">{model.longDescription}</p>
            <ul className="mt-10 space-y-4">
              {model.highlights.map((h) => (
                <li key={h} className="flex items-start gap-4 border-t border-black/10 pt-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d5001c]" />
                  <span className="text-sm font-semibold uppercase tracking-[1px] text-black">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* COLOURS */}
      <section className="bg-[#0b0b0b] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-12">
            <Eyebrow>Exterior</Eyebrow>
            <SectionTitle>Choose your finish.</SectionTitle>
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={model.image} alt={model.name} className="h-full w-full object-cover" />
                <motion.div
                  key={colorIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.35 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 mix-blend-color"
                  style={{ backgroundColor: model.colors[colorIdx].hex }}
                />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="space-y-3">
                {model.colors.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setColorIdx(i)}
                    className={`flex w-full items-center gap-5 border px-5 py-4 text-left transition-all ${
                      colorIdx === i ? 'border-[#d5001c] bg-white/5' : 'border-white/10 hover:border-white/40'
                    }`}
                  >
                    <span
                      className="h-9 w-9 shrink-0 rounded-full ring-1 ring-white/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-[2px] text-white">{c.name}</span>
                    {colorIdx === i && <Check className="ml-auto h-4 w-4 text-[#d5001c]" />}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FULL SPECS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-12">
            <Eyebrow>Technical Data</Eyebrow>
            <SectionTitle light>The numbers.</SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid gap-x-16 md:grid-cols-2">
              {Object.entries({
                'Engine / Drive': model.specs.engine,
                'Maximum Power': model.specs.power,
                'Maximum Torque': model.specs.torque,
                'Acceleration 0–60 mph': model.specs.acceleration,
                'Top Track Speed': model.specs.topSpeed,
                'Consumption (combined)': model.specs.consumption,
                'Body Type': model.bodyType,
                'Base Price': model.price,
              }).map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-b border-black/10 py-5">
                  <dt className="text-[10px] font-bold uppercase tracking-[2px] text-black/40">{k}</dt>
                  <dd className="text-right text-sm font-bold uppercase tracking-[1px] text-black">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-white/10 bg-[#0b0b0b] py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-12">
            <Eyebrow>Continue</Eyebrow>
            <SectionTitle>You may also like.</SectionTitle>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {others.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.1}>
                <Link to={`/models/${m.slug}`} className="group block">
                  <div className="mb-5 aspect-[4/3] overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-[#d5001c] transition-colors">
                    {m.name}
                  </h4>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[2px] text-white/35">{m.price}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
