import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { clients } from '../data/clients';
import { useLang } from '../context/LanguageContext';

const clientGroups = ['hospital', 'laboratory'];

export default function Clients() {
  const { lang, t } = useLang();
  const ct = t.clients;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="clients" ref={ref} className="py-24 bg-surface-soft bg-dot-grid" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">
            {ct.badge}
          </span>
          <h2 id="clients-heading" className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-4">
            {ct.heading1} <span className="text-gradient">{ct.headingAccent}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-body text-base">{ct.sub}</p>
          <p className="text-primary font-heading font-bold text-sm mt-5">
            {clients.length} {ct.total}
          </p>
        </motion.div>

        <div className="space-y-12">
          {clientGroups.map((category) => {
            const group = clients.filter((client) => client.category === category);

            return (
              <div key={category}>
                <h3 className="font-heading font-bold text-lg text-primary-dark mb-5">
                  {ct.groups[category]}
                  <span className="ml-2 text-sm font-medium text-gray-400">({group.length})</span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.map((client, index) => (
                    <motion.article
                      key={client.name}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.2) }}
                      className="min-h-32 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 flex flex-col"
                    >
                      <h4 className="font-heading font-semibold text-sm text-primary-dark leading-snug">
                        {client.name}
                      </h4>
                      <div className="mt-auto pt-4 flex items-center justify-between gap-3 text-xs text-gray-500 font-body">
                        <span className="flex items-center gap-1.5 min-w-0">
                          <MapPin size={13} className="text-primary shrink-0" aria-hidden="true" />
                          <span>{client.location}</span>
                        </span>
                        <span className="shrink-0 rounded-full bg-primary/10 text-primary px-2.5 py-1 font-semibold">
                          {client.year}
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
