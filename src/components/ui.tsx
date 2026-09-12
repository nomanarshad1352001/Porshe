import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const Reveal = ({
  children,
  delay = 0,
  className = '',
  y = 30,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[4px] text-[#d5001c]">{children}</span>
);

export const SectionTitle = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <h2
    className={`text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight ${
      light ? 'text-black' : 'text-white'
    }`}
  >
    {children}
  </h2>
);

export const PageHero = ({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) => (
  <section className="relative flex h-[65vh] min-h-[460px] items-end overflow-hidden">
    <motion.img
      initial={{ scale: 1.12 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      src={image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
    <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-4xl md:text-7xl font-black uppercase leading-[0.92] tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg font-light leading-relaxed text-white/60">{subtitle}</p>
      </motion.div>
    </div>
  </section>
);

export const SpecCell = ({ label, value, light = false }: { label: string; value: string; light?: boolean }) => (
  <div className={`border-t pt-4 ${light ? 'border-black/10' : 'border-white/15'}`}>
    <div className={`text-2xl md:text-3xl font-black tracking-tight ${light ? 'text-black' : 'text-white'}`}>{value}</div>
    <div className={`mt-1 text-[10px] font-bold uppercase tracking-[1.5px] ${light ? 'text-black/40' : 'text-white/40'}`}>
      {label}
    </div>
  </div>
);
