import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { company } from '../data/siteData';
import { useLang } from '../context/LanguageContext';

function InputField({ label, name, type = 'text', value, onChange, onBlur, error, placeholder, required }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block font-heading font-semibold text-sm text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur}
        placeholder={placeholder} required={required}
        aria-describedby={error ? `${id}-error` : undefined} aria-invalid={!!error}
        className={`w-full px-4 py-3 rounded-xl border font-body text-sm transition-all duration-200 outline-none
          bg-white placeholder-gray-400 focus:ring-2 focus:ring-primary/30
          ${error ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-primary hover:border-primary/50'}`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1 mt-1.5 text-red-500 text-xs font-body">
          <AlertCircle size={12} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const { lang, t } = useLang();
  const ct = t.contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const VALIDATORS = {
    name:        (v) => v.trim().length >= 3 ? '' : ct.errName,
    institution: (v) => v.trim().length >= 2 ? '' : ct.errInstitution,
    email:       (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : ct.errEmail,
    phone:       (v) => /^[\d\s+\-()]{8,}$/.test(v.trim()) ? '' : ct.errPhone,
    message:     (v) => v.trim().length >= 10 ? '' : ct.errMessage,
  };

  const INITIAL = { name: '', institution: '', email: '', phone: '', message: '' };
  const [form, setForm] = useState(INITIAL);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');

  const errors = Object.fromEntries(Object.keys(VALIDATORS).map((k) => [k, touched[k] ? VALIDATORS[k](form[k]) : '']));
  const isValid = Object.keys(VALIDATORS).every((k) => !VALIDATORS[k](form[k]));

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleBlur  = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(Object.fromEntries(Object.keys(VALIDATORS).map((k) => [k, true])));
    if (!isValid) return;
    setStatus('loading');
    // ── Wire up here: EmailJS / WhatsApp / API ──────────────────
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setForm(INITIAL);
    setTouched({});
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold font-heading px-4 py-1.5 rounded-full mb-4">{ct.badge}</span>
          <h2 id="contact-heading" className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mb-4">
            {ct.heading1} <span className="text-gradient">{ct.headingAccent}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-base">{ct.sub}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-2 space-y-5">
            {[
              { icon: Phone, label: ct.phone, value: company.phone, href: `tel:${company.phone}` },
              { icon: Mail,  label: ct.email, value: company.email, href: `mailto:${company.email}` },
              { icon: MapPin, label: ct.address, value: `${company.address}\n${company.city}`, href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href === '#' ? undefined : href}
                className={`flex items-start gap-4 p-5 bg-surface-soft rounded-2xl border border-gray-100 transition-all duration-200 group
                           ${href !== '#' ? 'hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 cursor-pointer' : 'cursor-default'}`}
                aria-label={`${label}: ${value}`}>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0
                               group-hover:bg-primary group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-200" aria-hidden="true">
                  <Icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-xs text-gray-400 mb-0.5">{label}</p>
                  <p className="font-body text-gray-700 text-sm whitespace-pre-line">{value}</p>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-400 px-4">
                <MapPin size={32} className="mx-auto mb-2 opacity-40" aria-hidden="true" />
                <p className="font-body text-xs">{ct.mapPlaceholder}</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100 border border-gray-100">
              {status === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle2 size={40} className="text-green-500" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary-dark mb-2">{ct.successTitle}</h3>
                  <p className="text-gray-500 font-body text-sm max-w-xs leading-relaxed">{ct.successMsg}</p>
                  <button onClick={() => setStatus('idle')}
                    className="mt-6 btn-ripple bg-primary text-white font-heading font-semibold px-6 py-3 rounded-xl shadow-md shadow-primary/30 hover:bg-primary-dark transition-all">
                    {ct.btnAgain}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label={lang === 'id' ? 'Formulir kontak' : 'Contact form'}>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <InputField label={ct.labelName} name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} error={errors.name} placeholder={ct.phName} required />
                    <InputField label={ct.labelInstitution} name="institution" value={form.institution} onChange={handleChange} onBlur={handleBlur} error={errors.institution} placeholder={ct.phInstitution} required />
                    <InputField label={ct.labelEmail} name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} placeholder={ct.phEmail} required />
                    <InputField label={ct.labelPhone} name="phone" type="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} placeholder={ct.phPhone} required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block font-heading font-semibold text-sm text-gray-700 mb-1.5">
                      {ct.labelMessage} <span className="text-red-400">*</span>
                    </label>
                    <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange} onBlur={handleBlur}
                      placeholder={ct.phMessage} required aria-describedby={errors.message ? 'contact-message-error' : undefined} aria-invalid={!!errors.message}
                      className={`w-full px-4 py-3 rounded-xl border font-body text-sm transition-all duration-200 outline-none resize-none bg-white placeholder-gray-400 focus:ring-2 focus:ring-primary/30
                        ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-primary hover:border-primary/50'}`} />
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="flex items-center gap-1 mt-1.5 text-red-500 text-xs font-body">
                        <AlertCircle size={12} aria-hidden="true" /> {errors.message}
                      </p>
                    )}
                  </div>
                  <button type="submit" disabled={status === 'loading'}
                    className="btn-ripple w-full flex items-center justify-center gap-2 bg-primary text-white
                               font-heading font-bold px-6 py-4 rounded-2xl shadow-lg shadow-primary/30
                               hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40
                               disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200">
                    {status === 'loading' ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />{ct.btnSending}</>
                    ) : (
                      <><Send size={18} aria-hidden="true" />{ct.btnSend}</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
