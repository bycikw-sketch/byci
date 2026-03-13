import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
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
        canonicalUrl="https://byci.com/contact"
      />
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">{t.contact.title}</h1>
          <p className="text-primary-foreground/80">{t.contact.subtitle}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-section-bg rounded-lg p-8 text-center">
                <p className="text-foreground font-semibold">{t.contact.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="text-sm font-medium text-foreground">{t.contact.formName}</label><Input required maxLength={100} /></div>
                <div><label className="text-sm font-medium text-foreground">{t.contact.formEmail}</label><Input type="email" required maxLength={255} /></div>
                <div><label className="text-sm font-medium text-foreground">{t.contact.formPhone}</label><Input type="tel" maxLength={20} /></div>
                <div><label className="text-sm font-medium text-foreground">{t.contact.formMessage}</label><Textarea required maxLength={1000} rows={5} /></div>
                <Button type="submit" variant="accent" size="lg" className="w-full">{t.contact.formSubmit}</Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">{t.contact.officeTitle}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent shrink-0" />{t.contact.officeAddress}</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent shrink-0" />{t.contact.officeEmail}</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent shrink-0" />{t.contact.officePhone}</p>
            </div>
            <Button variant="accent" className="mt-4" asChild>
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
