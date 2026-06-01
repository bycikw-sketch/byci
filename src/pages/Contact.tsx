import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: t.contact.formSuccess });
  };

  return (
    <Layout>
      <SEO
        title={t.contact.title}
        description={t.contact.subtitle}
        canonicalUrl="https://byciedu.com/contact"
      />

      {/* Hero */}
      <section className="page-hero py-20">
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">{t.contact.title}</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-section-bg">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <p className="text-foreground font-semibold text-lg">{t.contact.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">{t.contact.formName}</label>
                  <Input required maxLength={100} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">{t.contact.formEmail}</label>
                  <Input type="email" required maxLength={255} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">{t.contact.formPhone}</label>
                  <Input type="tel" maxLength={20} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">{t.contact.formMessage}</label>
                  <Textarea required maxLength={1000} rows={5} />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full shadow-sm">{t.contact.formSubmit}</Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">{t.contact.officeTitle}</h2>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: t.contact.officeAddress },
                { icon: Mail, text: t.contact.officeEmail },
                { icon: Phone, text: t.contact.officePhone },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4">
                  <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm text-foreground/80">{text}</span>
                </div>
              ))}
            </div>
            <Button variant="accent" className="shadow-sm" asChild>
              <a href="https://wa.me/96541103254" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />{t.contact.whatsapp}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
