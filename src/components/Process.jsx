import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, FileText, Settings, Truck, RefreshCw } from 'lucide-react';
import { processSteps } from '../data/siteData';
import { useLang } from '../context/LanguageContext';

const ICON_MAP = { Phone, FileText, Settings, Truck, RefreshCw };

export default function Process() {
  const { lang, t } = useLang();
  const pt = t.process;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" ref={ref} className="py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">{pt.badge}</span>
          <h2 id="process-heading" className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-4">
            {pt.heading1} <span className="text-gradient">{pt.headingAccent}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-base">{pt.sub}</p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:block relative">
          <motion.div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200"
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }} style={{ transformOrigin: 'left' }} aria-hidden="true">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }} style={{ transformOrigin: 'left' }} />
          </motion.div>
          <div className="grid grid-cols-5 gap-4">
            {processSteps.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Phone;
              return (
                <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark
                                 flex items-center justify-center mb-5 shadow-lg shadow-primary/30 ring-4 ring-white" aria-hidden="true">
                    <Icon size={28} className="text-white" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-light text-white text-xs font-bold font-heading flex items-center justify-center shadow">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-primary-dark mb-2">{step.title[lang]}</h3>
                  <p className="text-gray-500 font-body text-xs leading-relaxed">{step.description[lang]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true">
            <motion.div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-light"
              initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }} style={{ transformOrigin: 'top' }} />
          </div>
          <div className="space-y-8">
            {processSteps.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Phone;
              return (
                <motion.div key={step.step} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }} className="flex items-start gap-5">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark
                                 flex items-center justify-center shadow-md shadow-primary/30 ring-2 ring-white" aria-hidden="true">
                    <span className="text-white text-xs font-bold font-heading">{step.step}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex-1 ml-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={18} className="text-primary shrink-0" aria-hidden="true" />
                      <h3 className="font-heading font-bold text-sm text-primary-dark">{step.title[lang]}</h3>
                    </div>
                    <p className="text-gray-500 font-body text-xs leading-relaxed">{step.description[lang]}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
