import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { models } from '../data/models';
import { experiences } from '../data/content';
import { Reveal, Eyebrow, SectionTitle, SpecCell } from '../components/ui';

export default function Home() {
  const featured = models.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex h-screen min-h-[620px] items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          src="/images/porsche-hero.jpg"
          alt="Porsche 911 GT3 RS"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <Eyebrow>The new 911 GT3 RS</Eyebrow>
            <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.88] tracking-tight text-white">
              Athleticism.
              <br />
              <span className="text-[#d5001c]">Perfected.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-white/65">
              Born on the circuit, homologated for the road. Every gram, every degree of camber, every cubic metre
              of airflow — accounted for.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/models/911-gt3-rs" className="porsche-btn group flex items-center gap-2">
                Discover the GT3 RS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/models" className="porsche-btn-outline">
                All Models
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="relative h-14 w-px overflow-hidden bg-white/20">
            <motion.div
              animate={{ y: [-56, 56] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute h-1/2 w-full bg-[#d5001c]"
            />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[4px] text-white/50">Scroll</span>
        </div>
      </section>

      {/* SPEC STRIP */}
      <section className="border-b border-black/5 bg-white py-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4">
            <SpecCell light label="0–60 mph" value="3.2 s" />
            <SpecCell light label="Top Speed" value="184 mph" />
            <SpecCell light label="Power" value="518 hp" />
            <SpecCell light label="Downforce" value="860 kg" />
          </div>
          <Link
            to="/models/911-gt3-rs"
            className="shrink-0 bg-black px-8 py-4 text-[10px] font-bold uppercase tracking-[2px] text-white hover:bg-[#d5001c] transition-colors"
          >
            Technical Data
          </Link>
        </div>
      </section>

      {/* FEATURED MODELS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>The Range</Eyebrow>
              <SectionTitle light>
                Six lines.
                <br />
                One philosophy.
              </SectionTitle>
            </div>
            <Link
              to="/models"
              className="group flex items-center gap-2 border-b-2 border-black pb-1 text-[11px] font-bold uppercase tracking-[2px] text-black hover:border-[#d5001c] hover:text-[#d5001c] transition-colors"
            >
              Explore all models
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>

          <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
            {featured.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.12}>
                <Link to={`/models/${m.slug}`} className="group block">
                  <div className="mb-6 aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#d5001c]">{m.bodyType}</span>
                  <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-black">{m.name}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-neutral-500">{m.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-black">{m.price}</span>
                    <ArrowRight className="h-4 w-4 text-black transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERIOR BREAKER */}
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/9513533/pexels-photo-9513533.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800"
          alt="Porsche interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/55">
          <Reveal className="max-w-2xl px-6 text-center">
            <Eyebrow>Interior</Eyebrow>
            <SectionTitle>Master the curve.</SectionTitle>
            <p className="mx-auto mt-6 max-w-lg text-base md:text-lg font-light text-white/65">
              Every control falls where your hand expects it. The driver's axis is the design axis — everything else
              is arranged around it.
            </p>
            <Link to="/services" className="porsche-btn mt-10 inline-block">
              Personalise Yours
            </Link>
          </Reveal>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="bg-[#0b0b0b] py-24 md:py-32">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-5 md:px-10 lg:flex-row lg:gap-24">
          <Reveal className="flex-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/35849576/pexels-photo-35849576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400"
                alt="Classic Porsche"
                className="w-full grayscale transition-all duration-1000 hover:grayscale-0"
              />
              <div className="absolute -bottom-10 -right-10 -z-10 h-64 w-64 bg-[#d5001c]/20 blur-[100px]" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex-1">
            <Eyebrow>Heritage · Since 1948</Eyebrow>
            <SectionTitle>
              Built on
              <br />
              dreams.
            </SectionTitle>
            <p className="mt-8 text-lg font-light leading-relaxed text-white/55">
              "In the beginning, I looked around and could not find quite the car I dreamed of. So I decided to
              build it myself."
            </p>
            <p className="mt-6 text-xs font-bold uppercase italic tracking-[2px] text-white/35">— Ferry Porsche</p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <SpecCell label="Le Mans Wins" value="19" />
              <SpecCell label="Race Victories" value="30k+" />
              <SpecCell label="Years of 911" value="61" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE TEASER */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Experience</Eyebrow>
            <SectionTitle light>More than ownership.</SectionTitle>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.slice(0, 2).map((e, i) => (
              <Reveal key={e.id} delay={i * 0.12}>
                <Link to="/experience" className="group relative block h-[420px] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 p-8">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#d5001c]">{e.duration}</span>
                    <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">{e.title}</h3>
                    <p className="mt-2 max-w-sm text-sm font-light text-white/60">{e.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0b0b0b] py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <SectionTitle>Your Porsche awaits.</SectionTitle>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-white/55">
            Build your specification, arrange a test drive, or speak with an official Porsche Centre.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/models" className="porsche-btn">Build Your Porsche</Link>
            <Link to="/platform" className="porsche-btn-outline">About This Platform</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
