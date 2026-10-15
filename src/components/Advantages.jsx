import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Clock, Users, Headphones, Award, MapPin } from 'lucide-react';
import { advantages } from '../data/siteData';
import { useLang } from '../context/LanguageContext';

const ICON_MAP = { ShieldCheck, Clock, Users, HeadphonesIcon: Headphones, Award, MapPin };

export default function Advantages() {
  const { lang, t } = useLang();
  const at = t.advantages;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="advantages" ref={ref} className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B2A5B 0%, #0A5BD3 100%)' }}
      aria-labelledby="advantages-heading">
      <div className="absolute inset-0 bg-dot-grid opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blob-2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #38BDF8, transparent)' }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-white/15 text-primary-light text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">{at.badge}</span>
          <h2 id="advantages-heading" className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
            {at.heading1} <span className="text-primary-light">{at.headingAccent}</span>
          </h2>
          <p className="text-white/65 max-w-xl mx-auto font-body text-base">{at.sub}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => {
            const Icon = ICON_MAP[adv.icon] || ShieldCheck;
            return (
              <motion.div key={adv.title.id} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-3xl p-7 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl hover:border-white/30 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5
                               group-hover:bg-primary-light group-hover:shadow-lg group-hover:shadow-primary-light/40 transition-all duration-300" aria-hidden="true">
                  <Icon size={22} className="text-primary-light group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-3">{adv.title[lang]}</h3>
                <p className="text-white/65 font-body text-sm leading-relaxed">{adv.description[lang]}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
