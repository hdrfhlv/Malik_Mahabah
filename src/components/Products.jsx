import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { products } from '../data/productCatalog';
import { useLang } from '../context/LanguageContext';

function ProductCard({ product, index }) {
  const { lang, t } = useLang();
  const pt = t.products;
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative w-full h-80 transition-all duration-500 cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={() => setFlipped((value) => !value)}
        onKeyDown={(event) => event.key === 'Enter' && setFlipped((value) => !value)}
        role="button"
        tabIndex={0}
        aria-label={`${product.name[lang]} — ${lang === 'id' ? 'klik untuk info kegunaan' : 'click for use cases'}`}
        aria-pressed={flipped}
      >
        <div className="absolute inset-0 rounded-3xl overflow-hidden group" style={{ backfaceVisibility: 'hidden' }}>
          <div className="relative h-full bg-white border border-gray-100 rounded-3xl p-5 flex flex-col shadow-md shadow-gray-200/80 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
            <div className="h-32 rounded-2xl bg-surface-soft mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name[lang]}
                className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="text-xs font-bold font-heading px-2.5 py-1 rounded-full w-fit mb-2 bg-primary/10 text-primary">
              {product.category[lang]}
            </div>
            <h3 className="font-heading font-bold text-base text-primary-dark mb-1 line-clamp-2">{product.name[lang]}</h3>
            <p className="text-gray-500 font-body text-xs leading-relaxed line-clamp-2">{product.description[lang]}</p>
            <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-semibold font-heading text-primary">
              <span>{pt.hint.replace('✦ ', '')}</span>
              <ChevronRight size={13} />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="h-full rounded-3xl p-6 flex flex-col text-white bg-gradient-to-br from-primary-dark to-primary">
            <div className="flex items-center gap-3 mb-4">
              <img src={product.image} alt="" className="w-14 h-14 rounded-xl bg-white object-contain p-1.5 shrink-0" />
              <h3 className="font-heading font-bold text-sm">{product.name[lang]}</h3>
            </div>
            <p className="text-white/80 text-sm font-body mb-4">{product.description[lang]}</p>
            <h4 className="font-heading font-semibold text-sm mb-3">{pt.usesLabel}</h4>
            <ul className="space-y-2 flex-1">
              {product.uses[lang].map((use) => (
                <li key={use} className="flex items-center gap-2 text-sm font-body text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" aria-hidden="true" />
                  {use}
                </li>
              ))}
            </ul>
            <p className="text-white/45 text-xs mt-4 font-body">{pt.backHint}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const { t } = useLang();
  const pt = t.products;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="products" ref={ref} className="py-24 bg-white" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">{pt.badge}</span>
          <h2 id="products-heading" className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-4">
            {pt.heading1} <span className="text-gradient">{pt.headingAccent}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-base">{pt.sub}</p>
          <p className="text-gray-400 text-xs font-body mt-3">{pt.hint}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
        </div>
      </div>
    </section>
  );
}
