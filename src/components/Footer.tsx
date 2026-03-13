import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold mb-3">BYCI</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Build Your Career Institute – Professional development for the modern workforce.'
                : 'معهد بناء مسيرتك المهنية – التطوير المهني للقوى العاملة الحديثة.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs" className="text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.programs}</Link></li>
              <li><Link to="/certifications" className="text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.certifications}</Link></li>
              <li><Link to="/corporate" className="text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.corporate}</Link></li>
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.about}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">{t.footer.contactInfo}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" />{t.contact.officeAddress}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" />{t.contact.officeEmail}</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" />{t.contact.officePhone}</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">{t.footer.followUs}</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Twitter">X</a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">Instagram</a>
            </div>
            <ul className="space-y-1 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">{t.footer.privacyPolicy}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t.footer.terms}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/60">
          <p>{t.footer.rights.replace('{year}', currentYear.toString())}</p>
          <p>{t.footer.region}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
