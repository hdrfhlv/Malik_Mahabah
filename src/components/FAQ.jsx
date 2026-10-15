import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/siteData';
import { useLang } from '../context/LanguageContext';

function FAQItem({ item, index, isOpen, onToggle }) {
  const { lang } = useLang();
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/30 shadow-md shadow-primary/10 bg-white' : 'border-gray-100 bg-white hover:border-primary/20 hover:shadow-sm'}`}
    >
      <button id={id} aria-controls={panelId} aria-expanded={isOpen} onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left">
        <span className="font-heading font-semibold text-sm md:text-base text-primary-dark">{item.q[lang]}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`} aria-hidden="true">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div id={panelId} role="region" aria-labelledby={id} key="content"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="px-6 pb-6 border-t border-gray-100">
              <p className="font-body text-gray-500 text-sm leading-relaxed pt-4">{item.a[lang]}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const ft = t.faq;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" ref={ref} className="py-24 bg-surface-soft bg-dot-grid" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">{ft.badge}</span>
          <h2 id="faq-heading" className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-4">
            {ft.heading1} <span className="text-gradient">{ft.headingAccent}</span>
          </h2>
          <p className="text-gray-500 font-body text-base">{ft.sub}</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
