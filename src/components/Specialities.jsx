import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import manifoldPhoto from '../assets/gallery/kila.jpg';
import technicianPhoto from '../assets/gallery/oki.jpg';
import bedheadPhoto from '../assets/gallery/walled bed.jpg';

const projectShowcase = [
  {
    id: 'oxygen-manifold',
    title: 'Oxygen Manifold Installation',
    description: 'Oxygen cylinder manifold installation for a healthcare facility.',
    image: manifoldPhoto,
  },
  {
    id: 'medical-gas-outlets',
    title: 'Medical Gas Outlet Installation',
    description: 'Technical installation of medical gas outlets at the patient bedside.',
    image: technicianPhoto,
  },
  {
    id: 'bedhead-panel',
    title: 'Bedhead Panel Installation',
    description: 'Medical gas outlets and bedside utility panels for a healthcare facility.',
    image: bedheadPhoto,
  },
];

export default function Specialities() {
  return (
    <section id="projects" className="py-24 bg-surface-soft" aria-labelledby="specialities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">
            Our Projects
          </span>
          <h2
            id="specialities-heading"
            className="font-heading font-extrabold text-3xl md:text-5xl text-primary-dark mb-4"
          >
            Project Experience
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-base mb-8">
            Completed installation work and healthcare support projects across Indonesia.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projectShowcase.map((project, index) => (
            <motion.a
              key={project.id}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group block overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Project {index + 1}</p>
                <h3 className="font-heading text-xl font-bold text-primary-dark">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 font-body">{project.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Discuss a similar project
                  <ArrowRight size={16} aria-hidden="true" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Discuss your project
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
