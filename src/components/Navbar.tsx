import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ChevronRight } from 'lucide-react';

const links = [
  { to: '/models', label: 'Models' },
  { to: '/services', label: 'Services' },
  { to: '/experience', label: 'Experience' },
  { to: '/platform', label: 'Platform' },
  { to: '/specification', label: 'Specification' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/10' : 'bg-gradient-to-b from-black/70 to-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
          <div className="flex flex-1 items-center gap-8">
            <button className="lg:hidden text-white" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
            <nav className="hidden lg:flex gap-8">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `text-[10px] font-bold uppercase tracking-[2.5px] transition-colors ${
                      isActive ? 'text-[#d5001c]' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <Link to="/" className="shrink-0">
            <span className="text-lg md:text-2xl font-black uppercase tracking-[6px] md:tracking-[10px] text-white">
              Porsche
            </span>
          </Link>

          <div className="flex flex-1 items-center justify-end gap-6">
            <Search className="hidden md:block h-[18px] w-[18px] cursor-pointer text-white/80 hover:text-[#d5001c] transition-colors" />
            <User className="hidden md:block h-[18px] w-[18px] cursor-pointer text-white/80 hover:text-[#d5001c] transition-colors" />
            <Link
              to="/models"
              className="hidden sm:inline-block border border-white/30 px-5 py-2 text-[10px] font-bold uppercase tracking-[2px] text-white hover:bg-white hover:text-black transition-all"
            >
              Configure
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black transition-all duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b border-white/10">
          <span className="text-lg font-black uppercase tracking-[6px] text-white">Porsche</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="h-7 w-7 text-white" />
          </button>
        </div>
        <nav className="flex flex-col">
          {[{ to: '/', label: 'Home' }, ...links].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex items-center justify-between border-b border-white/5 px-5 py-6 text-xl font-black uppercase tracking-[2px] text-white hover:text-[#d5001c] transition-colors"
            >
              {l.label}
              <ChevronRight className="h-5 w-5 opacity-40" />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
