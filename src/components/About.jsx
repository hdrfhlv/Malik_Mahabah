import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { about } from '../data/siteData';
import { useLang } from '../context/LanguageContext';

export default function About() {
  const { lang, t } = useLang();
  const at = t.about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [tab, setTab] = useState('visi');

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 36 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="about" ref={ref} className="py-24 bg-surface-soft bg-dot-grid" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">
            {at.badge}
          </span>
          <h2 id="about-heading" className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-5">
            {at.heading1}{' '}
            <span className="text-gradient">{at.headingAccent}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-body text-base leading-relaxed text-justify">
            {about.description[lang]}
          </p>
        </motion.div>

        {/* Vision / Mission tabs — full width, centered */}
        <motion.div {...fadeUp(0.15)}>
          {/* Tab switcher */}
          <div
            className="inline-flex bg-white rounded-2xl p-1.5 shadow-md border border-gray-100 mb-8 mx-auto"
            role="tablist"
            aria-label={lang === 'id' ? 'Visi dan Misi' : 'Vision and Mission'}
            style={{ display: 'flex', width: 'fit-content', margin: '0 auto 2rem' }}
          >
            {[
              { key: 'visi', label: at.tab1, icon: Eye },
              { key: 'misi', label: at.tab2, icon: Target },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                role="tab"
                id={`tab-${key}`}
                aria-selected={tab === key}
                aria-controls={`panel-${key}`}
                onClick={() => setTab(key)}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold font-heading transition-all duration-200 ${
                  tab === key
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>

          {/* Vision panel */}
          <div
            role="tabpanel"
            id="panel-visi"
            aria-labelledby="tab-visi"
            hidden={tab !== 'visi'}
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-white shadow-xl shadow-primary/25">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Eye size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4">{at.visionLabel}</h3>
                  <p className="font-body text-white/85 leading-relaxed text-base text-justify">
                    {about.vision[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission panel */}
          <div
            role="tabpanel"
            id="panel-misi"
            aria-labelledby="tab-misi"
            hidden={tab !== 'misi'}
          >
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Target size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-dark self-center">{at.missionLabel}</h3>
              </div>
              <ul className="space-y-4">
                {about.missionPoints[lang].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold font-heading flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 font-body text-sm leading-relaxed text-justify">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
