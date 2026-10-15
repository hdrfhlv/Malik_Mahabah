import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn, Images } from 'lucide-react';
import { galleryPhotos } from '../data/siteData';
import { useLang } from '../context/LanguageContext';

// ── Lightbox (fullscreen) ────────────────────────────────────────
function Lightbox({ index, onClose, onPrev, onNext, total }) {
  const { lang, t } = useLang();
  const gt = t.gallery;
  const photo = galleryPhotos[index];

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft')  onPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNext, onPrev]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'rgba(5, 15, 35, 0.95)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} ${gt.of} ${total}`}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label={gt.close}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-body">
        {index + 1} / {total}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label={gt.prev}
        className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.22 }}
          className="relative max-w-[88vw] max-h-[82vh] flex flex-col items-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photo.src}
            alt={lang === 'id' ? photo.captionId : photo.captionEn}
            className="rounded-2xl object-contain shadow-2xl"
            style={{ maxWidth: '88vw', maxHeight: '75vh' }}
            draggable={false}
          />
          <p className="text-white/70 text-sm font-body text-center px-4">
            {lang === 'id' ? photo.captionId : photo.captionEn}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label={gt.next}
        className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 overflow-x-auto max-w-[90vw] pb-1" style={{ scrollbarWidth: 'none' }}>
        {galleryPhotos.map((p, i) => (
          <button
            key={p.id}
            onClick={(e) => { e.stopPropagation(); /* set index */ onClose(); }}
            aria-label={`Foto ${i + 1}`}
            className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              i === index ? 'border-primary-light scale-110' : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img src={p.src} alt="" className="w-full h-full object-cover" draggable={false} />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// ── Main Gallery ────────────────────────────────────────────────
export default function Gallery() {
  const { lang, t } = useLang();
  const gt = t.gallery;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const sliderRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const total = galleryPhotos.length;

  // Visible cards per view (3 on desktop, 1.5 on mobile via CSS)
  const CARDS_PER_PAGE = 3;

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  // Touch swipe on slider
  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStartX(null);
  };

  // Build visible window: show 5 around activeIndex for desktop
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -1; i <= CARDS_PER_PAGE; i++) {
      indices.push((activeIndex + i + total) % total);
    }
    return indices;
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const lbPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + total) % total), [total]);
  const lbNext = useCallback(() => setLightboxIndex((i) => (i + 1) % total), [total]);

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="py-24 bg-white"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">
              {gt.badge}
            </span>
            <h2
              id="gallery-heading"
              className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-4"
            >
              {gt.heading1}{' '}
              <span className="text-gradient">{gt.headingAccent}</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-body text-base">{gt.sub}</p>
          </motion.div>

          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Main slider track */}
            <div
              ref={sliderRef}
              className="relative overflow-hidden rounded-3xl"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* Cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {getVisibleIndices().slice(0, CARDS_PER_PAGE).map((photoIndex, slot) => {
                  const photo = galleryPhotos[photoIndex];
                  const isActive = photoIndex === activeIndex;
                  return (
                    <motion.div
                      key={`${photo.id}-${slot}`}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-md
                                  ${isActive
                                    ? 'ring-2 ring-primary shadow-xl shadow-primary/15'
                                    : 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
                                  }`}
                      style={{ aspectRatio: '4/3' }}
                      onClick={() => openLightbox(photoIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && openLightbox(photoIndex)}
                      aria-label={`${gt.openFull}: ${lang === 'id' ? photo.captionId : photo.captionEn}`}
                    >
                      <img
                        src={photo.src}
                        alt={lang === 'id' ? photo.captionId : photo.captionEn}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div className="flex items-center gap-2 text-white">
                          <ZoomIn size={16} aria-hidden="true" />
                          <p className="font-body text-sm leading-snug">
                            {lang === 'id' ? photo.captionId : photo.captionEn}
                          </p>
                        </div>
                      </div>

                      {/* Active badge */}
                      {isActive && (
                        <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-heading font-bold px-2.5 py-1 rounded-full shadow">
                          {lang === 'id' ? 'Aktif' : 'Active'}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between mt-8">
              {/* Dot indicators */}
              <div
                className="flex gap-1.5 flex-wrap max-w-xs"
                role="tablist"
                aria-label={lang === 'id' ? 'Navigasi foto' : 'Photo navigation'}
              >
                {galleryPhotos.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Foto ${i + 1}`}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-5 h-2 bg-primary'
                        : 'w-2 h-2 bg-gray-300 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex gap-2 items-center">
                <span className="text-gray-400 text-sm font-body mr-2 hidden sm:block">
                  {activeIndex + 1} / {total}
                </span>
                <button
                  onClick={prev}
                  aria-label={gt.prev}
                  className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center
                             hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label={gt.next}
                  className="w-11 h-11 rounded-full bg-primary text-white shadow-md shadow-primary/30 flex items-center justify-center
                             hover:bg-primary-dark transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* All photos grid (collapsed) — thumbnail peek */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 flex gap-2 overflow-x-auto pb-2"
              style={{ scrollbarWidth: 'none' }}
              aria-label={lang === 'id' ? 'Semua foto' : 'All photos'}
            >
              {galleryPhotos.map((photo, i) => (
                <button
                  key={photo.id}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Pilih foto ${i + 1}`}
                  className={`shrink-0 rounded-xl overflow-hidden transition-all duration-200 ${
                    i === activeIndex
                      ? 'ring-2 ring-primary ring-offset-1 scale-105 opacity-100'
                      : 'opacity-55 hover:opacity-90 hover:scale-105'
                  }`}
                  style={{ width: 60, height: 48 }}
                >
                  <img
                    src={photo.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                </button>
              ))}
            </motion.div>

            {/* CTA buka semua */}
            <div className="text-center mt-8">
              <button
                onClick={() => openLightbox(activeIndex)}
                className="btn-ripple inline-flex items-center gap-2 bg-primary/10 text-primary font-heading font-semibold
                           text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200 shadow-sm"
              >
                <Images size={16} aria-hidden="true" />
                {lang === 'id' ? `Lihat Semua ${total} Foto` : `View All ${total} Photos`}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            total={total}
            onClose={closeLightbox}
            onPrev={lbPrev}
            onNext={lbNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
