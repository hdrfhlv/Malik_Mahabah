import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Settings, ClipboardCheck, MessageSquare } from 'lucide-react';
import { services } from '../data/siteData';
import { useLang } from '../context/LanguageContext';

const ICON_MAP = { Wrench, Settings, ClipboardCheck, MessageSquare };

export default function Services() {
  const { lang, t } = useLang();
  const st = t.services;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-24 bg-surface-soft bg-dot-grid" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">{st.badge}</span>
          <h2 id="services-heading" className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-4">
            {st.heading1} <span className="text-gradient">{st.headingAccent}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-base">{st.sub}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] || Truck;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl p-7 shadow-md shadow-gray-200/80 border border-gray-100
                           hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/20 transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6
                               group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300" aria-hidden="true">
                  <Icon size={26} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-base text-primary-dark mb-3 leading-snug">{svc.title[lang]}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{svc.description[lang]}</p>
                <div className="mt-5 w-0 group-hover:w-8 h-0.5 bg-primary rounded-full transition-all duration-300" aria-hidden="true" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
