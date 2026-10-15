  import { motion, AnimatePresence } from 'framer-motion';
  import { ChevronRight, PhoneCall } from 'lucide-react';
  import { company } from '../data/siteData';
  import { useLang } from '../context/LanguageContext';
  import  bgHero  from '../assets/heroBG.jpg';
  import bgHero2 from '../assets/heroBG2.jpg';
  

  function MedicalGasVisual() {
    return (
      <div className="relative mx-auto h-[min(360px,88vw)] w-[min(360px,88vw)] select-none" aria-hidden="true">
        <motion.div
          className="absolute inset-0 rounded-full border border-sky-300/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[9%] rounded-full border border-white/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[23%] flex items-center justify-center rounded-full border border-white/20 bg-sky-300/15 shadow-[0_0_55px_rgba(56,189,248,0.18)] backdrop-blur-sm"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 64 64" className="h-1/2 w-1/2 drop-shadow-[0_2px_12px_rgba(56,189,248,0.5)]">
            <rect x="20" y="16" width="24" height="38" rx="8" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8" />
            <rect x="26" y="10" width="12" height="8" rx="4" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
            <rect x="28" y="6" width="8" height="5" rx="2" fill="#38BDF8" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
            <line x1="32" y1="6" x2="32" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <text x="32" y="37" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="9" fill="white">O₂</text>
            <rect x="20" y="42" width="24" height="4" fill="rgba(56,189,248,0.55)" />
            <circle cx="26" cy="28" r="2" fill="rgba(255,255,255,0.35)" />
            <circle cx="38" cy="32" r="1.5" fill="rgba(255,255,255,0.3)" />
          </svg>
        </motion.div>
        {[
          { label: 'O₂', angle: 30 },
          { label: 'N₂O', angle: 145 },
          { label: 'CO₂', angle: 250 },
        ].map(({ label, angle }) => (
          <motion.div
            key={label}
            className="absolute left-1/2 top-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 font-heading text-xs font-bold text-white shadow-lg backdrop-blur-sm"
            style={{ transform: `rotate(${angle}deg) translateX(145px) rotate(-${angle}deg) translate(-50%, -50%)` }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: angle / 200 }}
          >
            {label}
          </motion.div>
        ))}
        <svg className="absolute bottom-[16%] left-[18%] w-[64%]" viewBox="0 0 220 32" fill="none">
          <path d="M0 17h34l8-10 10 20 12-16 9 6h32l8-10 10 20 12-16 9 6h76" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute left-[18%] top-[25%] text-xs font-semibold text-white/60">MEDICAL GAS</span>
        <span className="absolute bottom-[23%] right-[12%] text-xs font-semibold text-white/60">PIPELINE SYSTEM</span>
      </div>
    );
  }

  export default function Hero() {
    const { lang, t } = useLang();
    const heroT = t.hero;
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${bgHero2})` }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="blob-1 absolute -right-1/4 -top-1/4 h-[60vw] w-[60vw] max-w-2xl opacity-20" style={{ background: 'radial-gradient(circle, #38BDF8, transparent 70%)' }} />
          <div className="blob-2 absolute -bottom-1/4 -left-1/4 h-[55vw] w-[55vw] max-w-xl opacity-15" style={{ background: 'radial-gradient(circle, #0A5BD3, transparent 70%)' }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto flex max-w-xl flex-col items-start lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2"
              >
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary-light" aria-hidden="true" />
                <span className="whitespace-nowrap font-heading text-sm font-semibold text-primary-light">
                  <AnimatePresence mode="wait">
                    <motion.span key={heroT.badge} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                      {heroT.badge}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="mb-6 font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.12] text-white"
              >
                <AnimatePresence mode="wait">
                  <motion.span key={`h1-${lang}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
                    {heroT.headline1}{' '}
                    <span className="relative inline-block text-primary-light">
                      {heroT.headlineAccent}
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary-light"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.85, duration: 0.55 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </span>
                    <br />
                    {heroT.headline2}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="mb-10 font-body text-base leading-relaxed text-white/75 sm:text-lg"
              >
                <AnimatePresence mode="wait">
                  <motion.span key={`sub-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                    {company.subTagline[lang]}
                  </motion.span>
                </AnimatePresence>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.34 }}
                className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              >
                <motion.button
                  onClick={() => scrollTo('contact')}
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-ripple flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-heading font-bold text-primary shadow-xl shadow-black/20 transition-shadow duration-200"
                >
                  <PhoneCall size={17} aria-hidden="true" />
                  {heroT.cta1}
                </motion.button>
                <motion.button
                  onClick={() => scrollTo('products')}
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.22)' }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-ripple glass flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-7 py-4 font-heading font-semibold text-white transition-colors duration-200"
                >
                  {heroT.cta2} <ChevronRight size={17} aria-hidden="true" />
                </motion.button>
              </motion.div>

            </div>

            
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <span className="font-body text-[10px] uppercase tracking-widest text-white/45">{heroT.scrollHint}</span>
          <div className="h-9 w-5 rounded-full border border-white/30 p-1">
            <motion.div className="mx-auto h-1.5 w-1.5 rounded-full bg-white/70" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>
    );
  }
