import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Specialities() {
  return (
    <section className="py-24 bg-surface-soft" aria-labelledby="specialities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">
            Our Specialities
          </span>
          <h2
            id="specialities-heading"
            className="font-heading font-extrabold text-3xl md:text-5xl text-primary-dark mb-4"
          >
            IGVM
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-base mb-8">
            Instalasi Gas &amp; Vakum Medik
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Our Product
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
