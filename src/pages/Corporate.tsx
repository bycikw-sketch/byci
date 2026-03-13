import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Building2, Cpu, Lightbulb, BarChart3 } from 'lucide-react';

const stepIcons = [Lightbulb, Cpu, Building2, BarChart3];

const Corporate = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: t.corporate.formSuccess });
  };

  return (
    <Layout>
      <SEO 
        title={t.corporate.title}
        description={t.corporate.subtitle}
        canonicalUrl="https://byci.com/corporate"
      />
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">{t.corporate.title}</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">{t.corporate.heroText}</p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">{t.corporate.industriesTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.corporate.industries.map((ind, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 text-center text-sm font-medium text-foreground">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t.corporate.approachTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.corporate.approachSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={i} className="text-center p-6">
                  <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 bg-section-bg">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-2">{t.corporate.consultTitle}</h2>
          <p className="text-muted-foreground text-center mb-8">{t.corporate.consultText}</p>
          {submitted ? (
            <div className="bg-card rounded-lg p-8 text-center border border-border">
              <p className="text-foreground font-semibold">{t.corporate.formSuccess}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-lg p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-medium text-foreground">{t.corporate.formName}</label><Input required maxLength={100} /></div>
                <div><label className="text-sm font-medium text-foreground">{t.corporate.formCompany}</label><Input required maxLength={100} /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-medium text-foreground">{t.corporate.formRole}</label><Input maxLength={100} /></div>
                <div><label className="text-sm font-medium text-foreground">{t.corporate.formEmail}</label><Input type="email" required maxLength={255} /></div>
              </div>
              <div><label className="text-sm font-medium text-foreground">{t.corporate.formPhone}</label><Input type="tel" maxLength={20} /></div>
              <div><label className="text-sm font-medium text-foreground">{t.corporate.formMessage}</label><Textarea maxLength={1000} rows={4} /></div>
              <Button type="submit" variant="accent" size="lg" className="w-full">{t.corporate.formSubmit}</Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Corporate;
