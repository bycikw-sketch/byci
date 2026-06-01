import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Building2 } from 'lucide-react';

const tracks = [
  { icon: 'PMP', titleEn: 'PMP – Project Management Professional', titleAr: 'PMP – محترف إدارة المشاريع' },
  { icon: 'AWS', titleEn: 'AWS Solutions Architect', titleAr: 'مهندس حلول AWS' },
  { icon: 'SHRM', titleEn: 'SHRM – HR Certification', titleAr: 'SHRM – شهادة الموارد البشرية' },
  { icon: 'SEC+', titleEn: 'CompTIA Security+', titleAr: 'CompTIA Security+' },
  { icon: 'ITIL', titleEn: 'ITIL Foundation', titleAr: 'ITIL Foundation' },
  { icon: 'CSM', titleEn: 'Scrum Master Certified', titleAr: 'سكرم ماستر معتمد' },
];

const Certifications = () => {
  const { t, lang } = useLanguage();

  return (
    <Layout>
      <SEO
        title={t.certifications.title}
        description={t.certifications.subtitle}
        canonicalUrl="https://byciedu.com/certifications"
      />

      {/* Hero */}
      <section className="page-hero py-20">
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">{t.certifications.title}</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">{t.certifications.subtitle}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl text-center">
          <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 items-center justify-center mb-5 mx-auto">
            <Award className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t.certifications.overviewTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.certifications.overviewText}</p>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t.certifications.tracksTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:shadow-md hover:border-accent/30 transition-all duration-200 group">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center shrink-0 group-hover:from-accent group-hover:to-accent/80 transition-all duration-300">
                  <span className="text-xs font-bold text-white leading-none tracking-tight">{track.icon}</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-snug">
                  {lang === 'en' ? track.titleEn : track.titleAr}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prep & Corporate */}
      <section className="py-16 bg-background">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow">
            <div className="inline-flex h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 items-center justify-center mb-5">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-3">{t.certifications.prepTitle}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.certifications.prepText}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow">
            <div className="inline-flex h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 items-center justify-center mb-5">
              <Building2 className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-3">{t.certifications.corporateTitle}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.certifications.corporateText}</p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center bg-section-bg">
        <Button variant="accent" size="lg" asChild className="shadow-md">
          <Link to="/programs">{t.certifications.cta}</Link>
        </Button>
      </section>
    </Layout>
  );
};

export default Certifications;
