import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { quickLinks } from '../data/siteData';

// ── Active section tracker ───────────────────────────────────────
function useActiveSection(ids) {
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id.replace('#', ''));
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3, rootMargin: '-64px 0px -40% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}

// ── Language toggle button ───────────────────────────────────────
function LangToggle({ scrolled }) {
  const { lang, toggle } = useLang();

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-heading
                  border transition-all duration-200
                  ${scrolled
                    ? 'border-primary/30 text-primary bg-primary/8 hover:bg-primary hover:text-white hover:border-primary'
                    : 'border-white/30 text-white/90 bg-white/10 hover:bg-white/20'
                  }`}
    >
      <Globe size={13} aria-hidden="true" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={lang}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.18 }}
          className="w-5 text-center"
        >
          {lang === 'id' ? 'EN' : 'ID'}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

// ── Navbar ───────────────────────────────────────────────────────
export default function Navbar() {
  const { lang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = quickLinks[lang];
  const active = useActiveSection(links.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = useCallback((event, href) => {
    event.preventDefault();
    setMobileOpen(false);
    if (window.location.hash !== href) {
      window.history.pushState(null, '', href);
    }
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }, []);

  // Nav link style helper
  const linkCls = (href) => {
    const isActive = active === href;
    return [
      'relative px-3.5 py-2 rounded-full text-sm font-medium font-body transition-colors duration-200',
      isActive
        ? scrolled
          ? 'text-primary font-semibold'
          : 'text-white font-semibold'
        : scrolled
        ? 'text-gray-600 hover:text-primary'
        : 'text-white/75 hover:text-white',
    ].join(' ');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,padding] duration-300 ease-out ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm shadow-primary/8 py-2.5'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* ── Brand (text only, no logo image) ── */}
        <a
          href="#hero"
          onClick={(event) => handleNav(event, '#hero')}
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="PT Malik Mahabah Manunggal — Beranda"
        >
          

          {/* Name */}
          <div className="leading-none">
            <span className={`block font-heading font-bold text-[25 px] tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-primary-dark' : 'text-white'
            }`}>
              Malik Mahabah
            </span>
            <span className={`block font-heading text-[14px] font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-primary/80' : 'text-primary-light'
            }`}>
              Manunggal
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <nav aria-label={lang === 'id' ? 'Menu utama' : 'Main menu'} className="hidden md:flex items-center gap-0.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNav(event, link.href)}
              className={linkCls(link.href)}
              aria-current={active === link.href ? 'page' : undefined}
            >
              {link.label}
              {/* Animated underline indicator */}
              {active === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full ${
                    scrolled ? 'bg-primary' : 'bg-white'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* ── Right: lang + CTA + hamburger ── */}
        <div className="flex items-center gap-2.5">
          {/* Language toggle */}
          <LangToggle scrolled={scrolled} />

          {/* CTA */}
          <motion.a
            href="#contact"
            onClick={(event) => handleNav(event, '#contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`hidden md:flex items-center gap-1.5 btn-ripple text-sm font-semibold font-heading
                        px-5 py-2.5 rounded-full transition-all duration-200
                        ${scrolled
                          ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark'
                          : 'bg-white text-primary shadow-lg shadow-black/15 hover:shadow-xl hover:shadow-black/20'
                        }`}
          >
            {t.nav.cta} <ChevronRight size={14} />
          </motion.a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden p-2 rounded-xl transition-all duration-200 ${
              scrolled
                ? 'text-primary-dark hover:bg-primary/10'
                : 'text-white hover:bg-white/15'
            }`}
            aria-label={mobileOpen
              ? (lang === 'id' ? 'Tutup menu' : 'Close menu')
              : (lang === 'id' ? 'Buka menu' : 'Open menu')
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: mobileOpen ? -90 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              borderColor: 'rgba(10,91,211,0.1)',
            }}
          >
            <nav
              aria-label={lang === 'id' ? 'Menu mobile' : 'Mobile menu'}
              className="px-4 pt-3 pb-5 flex flex-col gap-1"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNav(event, link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.22 }}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium font-body transition-all duration-150 ${
                    active === link.href
                      ? 'bg-primary text-white font-semibold'
                      : 'text-gray-700 hover:bg-primary/8 hover:text-primary'
                  }`}
                  aria-current={active === link.href ? 'page' : undefined}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(event) => handleNav(event, '#contact')}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.04 + 0.05 }}
                className="mt-2 btn-ripple bg-primary text-white text-sm font-semibold font-heading
                           px-5 py-3.5 rounded-xl shadow-lg shadow-primary/25 text-center"
              >
                {t.nav.cta}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
