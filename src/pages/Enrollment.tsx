import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { programs } from '@/data/programs';
import { CheckCircle } from 'lucide-react';

const Enrollment = () => {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container max-w-lg text-center">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">{t.enrollment.successTitle}</h1>
            <p className="text-muted-foreground mb-8">{t.enrollment.successText}</p>
            <Button variant="accent" asChild><Link to="/">{t.enrollment.backHome}</Link></Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={t.enrollment.title}
        description={t.enrollment.subtitle}
        canonicalUrl="https://byci.com/enrollment"
      />
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="text-3xl font-extrabold text-primary-foreground mb-2">{t.enrollment.title}</h1>
          <p className="text-primary-foreground/80">{t.enrollment.subtitle}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-lg p-8">
            <div><label className="text-sm font-medium text-foreground">{t.enrollment.formName}</label><Input required maxLength={100} /></div>
            <div><label className="text-sm font-medium text-foreground">{t.enrollment.formEmail}</label><Input type="email" required maxLength={255} /></div>
            <div><label className="text-sm font-medium text-foreground">{t.enrollment.formPhone}</label><Input type="tel" required maxLength={20} /></div>
            <div>
              <label className="text-sm font-medium text-foreground">{t.enrollment.formProgram}</label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" required>
                <option value="">—</option>
                {programs.map((p) => (
                  <option key={p.id} value={p.id}>{lang === 'en' ? p.titleEn : p.titleAr}</option>
                ))}
              </select>
            </div>
            <div><label className="text-sm font-medium text-foreground">{t.enrollment.formMessage}</label><Textarea maxLength={500} rows={3} /></div>
            <Button type="submit" variant="accent" size="lg" className="w-full">{t.enrollment.formSubmit}</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Enrollment;
