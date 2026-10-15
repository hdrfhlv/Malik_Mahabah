import { Instagram, Linkedin, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { company, quickLinks } from '../data/siteData';
import { useLang } from '../context/LanguageContext';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { lang, t } = useLang();
  const ft = t.footer;
  const links = quickLinks[lang];

  const scrollTo = (href) =>
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B2A5B 0%, #0A3B8F 100%)' }} role="contentinfo">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #38BDF8, transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-8 pointer-events-none" style={{ background: 'radial-gradient(circle, #0A5BD3, transparent)' }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand — text only */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="font-heading font-extrabold text-white text-lg leading-tight">PT Malik Mahabah</p>
              <p className="font-heading font-medium text-primary-light text-sm">Manunggal</p>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed max-w-xs mb-6">{ft.description}</p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: company.socialMedia.instagram, label: 'Instagram' },
                { icon: Linkedin,  href: company.socialMedia.linkedin,  label: 'LinkedIn'  },
                { icon: Facebook,  href: company.socialMedia.facebook,  label: 'Facebook'  },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70
                             hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/40 transition-all duration-200">
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-5">{ft.quickLinks}</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-white/60 font-body text-sm hover:text-primary-light transition-colors duration-200 text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-5">{ft.contactTitle}</h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, value: company.phone, href: `tel:${company.phone}` },
                { icon: Mail,  value: company.email, href: `mailto:${company.email}` },
                { icon: MapPin, value: `${company.address}, ${company.city}`, href: '#' },
              ].map(({ icon: Icon, value, href }) => (
                <li key={value}>
                  <a href={href === '#' ? undefined : href}
                    className={`flex items-start gap-3 text-white/60 text-sm font-body ${href !== '#' ? 'hover:text-primary-light transition-colors duration-200' : ''}`}
                    aria-label={value}>
                    <Icon size={16} className="shrink-0 mt-0.5 text-primary-light" aria-hidden="true" />
                    <span className="leading-snug">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 font-body text-xs text-center">
            &copy; {currentYear} {company.name}. {ft.copyright}
          </p>
          <p className="text-white/30 font-body text-xs text-center">{ft.certified}</p>
        </div>
      </div>
    </footer>
  );
}
