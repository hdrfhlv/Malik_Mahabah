import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import bgHero from '../assets/m3.png';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 90],
  );
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1, 0.65],
  );

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const context = gsap.context(() => {
      gsap.to('.hero-flow-line', {
        strokeDashoffset: -1,
        duration: 7,
        ease: 'none',
        repeat: -1,
        stagger: 1.2,
      });

      gsap.to('.hero-node-halo', {
        scale: 1.8,
        opacity: 0,
        transformOrigin: 'center',
        duration: 2.4,
        ease: 'power1.out',
        repeat: -1,
        stagger: 0.8,
      });

      gsap.to('.hero-ambient', {
        x: (index) => (index % 2 === 0 ? 30 : -25),
        y: (index) => (index % 2 === 0 ? -22 : 28),
        scale: 1.12,
        duration: 9,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 1.5,
      });

      gsap.to('.hero-orbit', {
        rotation: 360,
        transformOrigin: 'center',
        duration: 36,
        ease: 'none',
        repeat: -1,
      });
    }, sectionRef);

    return () => context.revert();
  }, [shouldReduceMotion]);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen overflow-hidden" aria-label="Hero">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})`, y: backgroundY, opacity: backgroundOpacity }}
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: 'easeOut' }}
        aria-hidden="true"
      />
      <div ref={sectionRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-ambient absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-sky-400/20 blur-[100px]" />
        <div className="hero-ambient absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="hero-ambient absolute bottom-[-12rem] left-1/3 h-96 w-96 rounded-full bg-cyan-300/15 blur-[100px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="hero-pipe-gradient" x1="160" y1="150" x2="1280" y2="760" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7DD3FC" stopOpacity=".08" />
              <stop offset=".5" stopColor="#BAE6FD" stopOpacity=".85" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity=".12" />
            </linearGradient>
            <radialGradient id="hero-node-gradient">
              <stop stopColor="#E0F2FE" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity=".15" />
            </radialGradient>
          </defs>

          <g stroke="url(#hero-pipe-gradient)" strokeWidth="1.5">
            <path d="M-80 250H240Q290 250 290 300V410Q290 460 340 460H560Q610 460 610 410V210Q610 160 660 160H930Q980 160 980 210V310Q980 360 1030 360H1510" />
            <path d="M-60 680H180Q230 680 230 630V560Q230 510 280 510H470Q520 510 520 560V710Q520 760 570 760H850Q900 760 900 710V580Q900 530 950 530H1500" />
            <path d="M120 900V810Q120 760 170 760H350Q400 760 400 710V650M1110 0V90Q1110 140 1160 140H1270Q1320 140 1320 190V270" />
          </g>
          <g stroke="#BAE6FD" strokeWidth="2" strokeDasharray=".055 .945" pathLength="1" opacity=".9">
            <path className="hero-flow-line" d="M-80 250H240Q290 250 290 300V410Q290 460 340 460H560Q610 460 610 410V210Q610 160 660 160H930Q980 160 980 210V310Q980 360 1030 360H1510" />
            <path className="hero-flow-line" d="M-60 680H180Q230 680 230 630V560Q230 510 280 510H470Q520 510 520 560V710Q520 760 570 760H850Q900 760 900 710V580Q900 530 950 530H1500" />
            <path className="hero-flow-line" d="M120 900V810Q120 760 170 760H350Q400 760 400 710V650M1110 0V90Q1110 140 1160 140H1270Q1320 140 1320 190V270" />
          </g>

          {[
            [290, 250],
            [610, 460],
            [980, 360],
            [230, 680],
            [520, 510],
            [900, 530],
            [1110, 140],
            [400, 760],
          ].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle className="hero-node-halo" cx={cx} cy={cy} r="10" fill="url(#hero-node-gradient)" />
              <circle cx={cx} cy={cy} r="3" fill="#E0F2FE" />
            </g>
          ))}

          <g className="hero-orbit" transform="translate(1110 445)">
            <ellipse rx="190" ry="76" stroke="#BAE6FD" strokeOpacity=".22" strokeWidth="1" transform="rotate(-28)" />
            <ellipse rx="190" ry="76" stroke="#BAE6FD" strokeOpacity=".13" strokeWidth="1" transform="rotate(42)" />
            <circle cx="0" cy="0" r="4" fill="#E0F2FE" />
          </g>
        </svg>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/65"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/75"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ArrowDown size={28} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
