import { useEffect, useRef } from 'react';

/**
 * Canvas-based animated gas molecule / bubble particles.
 * Lightweight, no external dependency, respects prefers-reduced-motion.
 */
export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let mouse = { x: -9999, y: -9999 };

    // Determine particle count based on screen size (mobile = fewer)
    const isMobile = window.innerWidth < 768;
    const COUNT = prefersReduced ? 0 : isMobile ? 20 : 50;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    class Particle {
      constructor() { this.reset(true); }

      reset(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init
          ? Math.random() * canvas.height
          : canvas.height + 20;
        this.baseR = 3 + Math.random() * 6;
        this.r = this.baseR;
        this.speedY = 0.3 + Math.random() * 0.6;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = 0.08 + Math.random() * 0.25;
        // Alternate between blue shades
        const hue = Math.random() < 0.5 ? 210 : 196;
        this.color = `hsla(${hue}, 85%, 65%, ${this.opacity})`;
        this.glowColor = `hsla(${hue}, 85%, 65%, ${this.opacity * 0.5})`;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          this.x += dx * force * 0.08;
          this.y += dy * force * 0.08;
          this.r = this.baseR + force * 4;
        } else {
          this.r += (this.baseR - this.r) * 0.05;
        }

        if (this.y < -20) this.reset();
      }

      draw() {
        // Glow
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.glowColor;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Highlight
        ctx.beginPath();
        ctx.arc(this.x - this.r * 0.25, this.y - this.r * 0.25, this.r * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,0.35)`;
        ctx.fill();
        ctx.restore();
      }
    }

    function init() {
      resize();
      particles = Array.from({ length: COUNT }, () => new Particle());
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(loop);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    init();
    if (!prefersReduced) loop();

    window.addEventListener('resize', () => { resize(); init(); });
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none md:pointer-events-auto"
      aria-hidden="true"
    />
  );
}
