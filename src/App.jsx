import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Specialities from './components/Specialities';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// ── Wave Section Divider ────────────────────────────────────────
function WaveDivider({ flip = false, topColor = '#F4F8FF', bottomColor = '#FFFFFF' }) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ transform: flip ? 'scaleY(-1)' : 'none', background: topColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
      >
        <path
          d="M0,40 C200,80 400,0 600,40 C800,80 1000,10 1200,40 L1200,80 L0,80 Z"
          fill={bottomColor}
          className="wave-svg"
        />
      </svg>
    </div>
  );
}

// ── Scroll Progress Bar ─────────────────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(Math.min(pct, 100));
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      id="scroll-progress"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progres scroll halaman"
      style={{ width: `${progress}%` }}
    />
  );
}

// ── App ─────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        <WaveDivider topColor="#0B2A5B" bottomColor="#F4F8FF" />

        <About />

        <WaveDivider topColor="#F4F8FF" bottomColor="#FFFFFF" />

        <Products />

        <WaveDivider topColor="#FFFFFF" bottomColor="#F4F8FF" />

        <Services />

        <WaveDivider topColor="#F4F8FF" bottomColor="#0A5BD3" flip={false} />

        <Advantages />

        <WaveDivider topColor="#0A5BD3" bottomColor="#F4F8FF" />

        <Specialities />

        <WaveDivider topColor="#F4F8FF" bottomColor="#FFFFFF" />

        <Clients />

        <FAQ />

        <WaveDivider topColor="#F4F8FF" bottomColor="#FFFFFF" />

        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
