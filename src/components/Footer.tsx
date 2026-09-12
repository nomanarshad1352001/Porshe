import { Link } from 'react-router-dom';
import { Globe, Mail, Play, Share2, ArrowRight } from 'lucide-react';

const columns = [
  {
    title: 'Build & Buy',
    items: [
      { label: 'Model Range', to: '/models' },
      { label: 'Configure Yours', to: '/models' },
      { label: 'Approved Pre-Owned', to: '/services' },
      { label: 'Financial Services', to: '/services' },
    ],
  },
  {
    title: 'Ownership',
    items: [
      { label: 'Servicing', to: '/services' },
      { label: 'Tequipment', to: '/services' },
      { label: 'Porsche Classic', to: '/services' },
      { label: 'Porsche Connect', to: '/services' },
    ],
  },
  {
    title: 'Experience',
    items: [
      { label: 'Track Experience', to: '/experience' },
      { label: 'Experience Centres', to: '/experience' },
      { label: 'Travel Experience', to: '/experience' },
      { label: 'Museum', to: '/experience' },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 bg-black pt-20 pb-10">
    <div className="mx-auto max-w-[1440px] px-5 md:px-10">
      <div className="mb-16 flex flex-col gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Never stop <span className="text-[#d5001c]">driving.</span>
          </h3>
          <p className="mt-4 max-w-md text-sm font-light text-white/50">
            Join the newsletter for model launches, motorsport results and Experience Centre dates.
          </p>
        </div>
        <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-white/20 bg-transparent px-4 py-3 text-xs uppercase tracking-[2px] text-white placeholder:text-white/30 focus:border-[#d5001c] focus:outline-none"
          />
          <button className="flex shrink-0 items-center gap-2 bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-[2px] text-black hover:bg-[#d5001c] hover:text-white transition-colors">
            Join <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-7 text-[10px] font-bold uppercase tracking-[2.5px] text-white">{col.title}</h4>
            <ul className="space-y-4">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[11px] font-semibold uppercase tracking-[1px] text-white/40 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="mb-7 text-[10px] font-bold uppercase tracking-[2.5px] text-white">Connect</h4>
          <div className="mb-6 flex gap-5">
            {[Globe, Mail, Play, Share2].map((Icon, i) => (
              <Icon key={i} className="h-[18px] w-[18px] cursor-pointer text-white/40 hover:text-[#d5001c] transition-colors" />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="/platform"
              className="text-[11px] font-semibold uppercase tracking-[1px] text-white/40 hover:text-white transition-colors"
            >
              About this platform →
            </Link>
            <Link
              to="/specification"
              className="text-[11px] font-semibold uppercase tracking-[1px] text-white/40 hover:text-white transition-colors"
            >
              Full specification →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
        <span className="text-xl font-black uppercase tracking-[6px] text-white/15">Porsche</span>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[1px] text-white/30">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
          <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[1px] text-white/20">
          © 2026 Dr. Ing. h.c. F. Porsche AG — Concept
        </span>
      </div>
    </div>
  </footer>
);
