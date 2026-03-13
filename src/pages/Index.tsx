import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { programs } from '@/data/programs';
import { Brain, BookOpen, Award, Building2, Target, GraduationCap, Users, Globe } from 'lucide-react';

const focusIcons = [Brain, BookOpen, Award, Building2];
const pillarIcons = [Target, GraduationCap, Users, Globe];

const Index = () => {
  const { t, lang } = useLanguage();

  return (
    <Layout>
      <SEO 
        title="Home"
        description="BYCI provides professional development programs, globally recognized certifications, and corporate training solutions across Kuwait, the GCC, and India."
        canonicalUrl="https://byci.com"
      />
      {/* Hero */}
      <HeroCarousel />

      {/* Trust Strip */}
      <section className="bg-primary py-4">
        <div className="container text-center">
          <p className="text-primary-foreground font-semibold text-sm md:text-base tracking-wide">
            {t.trust.text}
          </p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">{t.featured.title}</h2>
            <p className="text-muted-foreground">{t.featured.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 6).map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">{t.focusAreas.title}</h2>
            <p className="text-muted-foreground">{t.focusAreas.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.focusAreas.areas.map((area, i) => {
              const Icon = focusIcons[i];
              return (
                <div key={i} className="bg-card rounded-lg border border-border p-6 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why BYCI */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">{t.whyByci.title}</h2>
            <p className="text-muted-foreground">{t.whyByci.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyByci.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <div key={i} className="text-center p-6">
                  <div className="mx-auto h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-4">{t.corporateCta.headline}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{t.corporateCta.description}</p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/corporate">{t.corporateCta.cta}</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, i) => (
              <TestimonialCard key={i} name={item.name} role={item.role} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">{t.finalCta.headline}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t.finalCta.description}</p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/programs">{t.finalCta.cta}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
