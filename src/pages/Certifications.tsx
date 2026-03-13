import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Building2, CheckCircle } from 'lucide-react';

const tracks = [
  { icon: 'PMP', titleEn: 'PMP – Project Management Professional', titleAr: 'PMP – محترف إدارة المشاريع' },
  { icon: 'AWS', titleEn: 'AWS Solutions Architect', titleAr: 'مهندس حلول AWS' },
  { icon: 'SHRM', titleEn: 'SHRM – HR Certification', titleAr: 'SHRM – شهادة الموارد البشرية' },
  { icon: 'SEC', titleEn: 'CompTIA Security+', titleAr: 'CompTIA Security+' },
  { icon: 'ITIL', titleEn: 'ITIL Foundation', titleAr: 'ITIL Foundation' },
  { icon: 'SFC', titleEn: 'Scrum Master Certified', titleAr: 'سكرم ماستر معتمد' },
];

const Certifications = () => {
  const { t, lang } = useLanguage();

  return (
    <Layout>
      <SEO 
        title={t.certifications.title}
        description={t.certifications.subtitle}
        canonicalUrl="https://byci.com/certifications"
      />
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">{t.certifications.title}</h1>
          <p className="text-primary-foreground/80">{t.certifications.subtitle}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <Award className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">{t.certifications.overviewTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.certifications.overviewText}</p>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t.certifications.tracksTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 flex items-center gap-4">
                <div className="h-10 w-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{lang === 'en' ? track.titleEn : track.titleAr}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prep & Corporate */}
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <BookOpen className="h-8 w-8 text-accent mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-3">{t.certifications.prepTitle}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.certifications.prepText}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <Building2 className="h-8 w-8 text-accent mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-3">{t.certifications.corporateTitle}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.certifications.corporateText}</p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <Button variant="accent" size="lg" asChild>
          <Link to="/programs">{t.certifications.cta}</Link>
        </Button>
      </section>
    </Layout>
  );
};

export default Certifications;
