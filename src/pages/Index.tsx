import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { usePrograms, useHomepageSettings } from '@/lib/sanity/hooks';
import { Brain, BookOpen, Award, Building2, Target, GraduationCap, Users, Globe } from 'lucide-react';

const focusIcons = [Brain, BookOpen, Award, Building2];
const pillarIcons = [Target, GraduationCap, Users, Globe];

const fallbackStatsEn = [
  { value: '500+', label: 'Graduates' },
  { value: '20+', label: 'Programs' },
  { value: '95%', label: 'Pass Rate' },
  { value: '3', label: 'Regions' },
];
const fallbackStatsAr = [
  { value: '500+', label: 'خريج' },
  { value: '20+', label: 'برنامج' },
  { value: '95%', label: 'معدل النجاح' },
  { value: '3', label: 'مناطق' },
];

const SectionHeader = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    {eyebrow && (
      <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3">{eyebrow}</span>
    )}
    <h2 className="text-3xl font-extrabold text-foreground mb-3">{title}</h2>
    <div className="w-12 h-1 bg-accent mx-auto mb-4 rounded-full" />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Index = () => {
  const { t, lang } = useLanguage();
  const { data: programs = [] } = usePrograms();
  const { data: hp } = useHomepageSettings();

  const slides = hp?.heroSlides?.map((s) => ({
    headline: lang === 'en' ? s.headlineEn : s.headlineAr,
    subheadline: lang === 'en' ? s.subheadlineEn : s.subheadlineAr,
    cta: lang === 'en' ? s.ctaEn : s.ctaAr,
    secondaryCta: lang === 'en' ? s.secondaryCtaEn : s.secondaryCtaAr,
  })) ?? undefined;

  const fallbackStats = lang === 'en' ? fallbackStatsEn : fallbackStatsAr;
  const stats = hp?.stats?.map((s) => ({
    value: s.value,
    label: lang === 'en' ? s.labelEn : s.labelAr,
  })) ?? fallbackStats;

  const focusAreas = hp?.focusAreas?.map((a) => ({
    title: lang === 'en' ? a.titleEn : a.titleAr,
    description: lang === 'en' ? a.descriptionEn : a.descriptionAr,
  })) ?? t.focusAreas.areas;

  const pillars = hp?.whyPillars?.map((p) => ({
    title: lang === 'en' ? p.titleEn : p.titleAr,
    description: lang === 'en' ? p.descriptionEn : p.descriptionAr,
  })) ?? t.whyByci.pillars;

  const testimonials = hp?.testimonials?.map((item) => ({
    name: lang === 'en' ? item.nameEn : item.nameAr,
    role: lang === 'en' ? item.roleEn : item.roleAr,
    text: lang === 'en' ? item.textEn : item.textAr,
  })) ?? t.testimonials.items;

  return (
    <Layout>
      <SEO
        title="Home"
        description="BYCI provides professional development programs, globally recognized certifications, and corporate training solutions across Kuwait, the GCC, and India."
        canonicalUrl="https://byciedu.com"
      />

      {/* Hero */}
      <HeroCarousel slides={slides} />

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-accent to-accent/90 py-7 shadow-md">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/20 rtl:divide-x-reverse">
            {stats.map((stat, i) => (
              <div key={i} className="px-4">
                <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-white/80 text-xs font-medium mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeader
            eyebrow={lang === 'en' ? 'Our Programs' : 'برامجنا'}
            title={t.featured.title}
            subtitle={lang === 'en' ? 'Choose a practical learning path built for career growth, certification readiness, and workplace impact.' : t.featured.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 6).map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="accent-outline" size="lg" asChild>
              <Link to="/programs">{lang === 'en' ? 'View All Programs' : 'عرض جميع البرامج'}</Link>
            </Button>
            <Button variant="accent" size="lg" asChild>
              <Link to="/free-ai-webinar">{lang === 'en' ? 'Join Free AI Webinar' : 'انضم إلى ندوة الذكاء الاصطناعي المجانية'}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-section-bg">
        <div className="container">
          <SectionHeader
            eyebrow={lang === 'en' ? 'What We Cover' : 'ما نقدمه'}
            title={t.focusAreas.title}
            subtitle={t.focusAreas.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i % focusIcons.length];
              return (
                <div
                  key={i}
                  className="group bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:from-accent/30 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why BYCI */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeader
            eyebrow={lang === 'en' ? 'Why Choose Us' : 'لماذا نحن'}
            title={t.whyByci.title}
            subtitle={t.whyByci.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              return (
                <div
                  key={i}
                  className="relative bg-card rounded-xl border border-border p-6 text-center hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <span className="absolute top-3 end-3 text-5xl font-black text-primary/6 leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-accent/80 transition-all duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 end-0 h-full w-1/2 bg-accent/8 blur-3xl" />
          <div className="absolute bottom-0 start-0 h-64 w-64 bg-white/3 blur-3xl rounded-full" />
        </div>
        <div className="container text-center relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-4">{lang === 'en' ? 'For Organizations' : 'للمؤسسات'}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">{t.corporateCta.headline}</h2>
          <p className="text-white/70 mb-8 leading-relaxed">{t.corporateCta.description}</p>
          <Button variant="accent" size="lg" className="shadow-xl" asChild>
            <Link to="/corporate">{t.corporateCta.cta}</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-section-bg">
        <div className="container">
          <SectionHeader
            eyebrow={lang === 'en' ? 'Success Stories' : 'قصص النجاح'}
            title={t.testimonials.title}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} name={item.name} role={item.role} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-4">{lang === 'en' ? 'Get Started' : 'ابدأ الآن'}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{t.finalCta.headline}</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t.finalCta.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="accent" size="lg" className="shadow-md" asChild>
              <Link to="/programs">{t.finalCta.cta}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">{lang === 'en' ? 'Contact Us' : 'تواصل معنا'}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
