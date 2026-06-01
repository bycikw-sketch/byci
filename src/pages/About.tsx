import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Target, Eye, Compass, MapPin } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const sections = [
    { icon: Target, title: t.about.missionTitle, text: t.about.missionText },
    { icon: Eye, title: t.about.visionTitle, text: t.about.visionText },
    { icon: Compass, title: t.about.approachTitle, text: t.about.approachText },
    { icon: MapPin, title: t.about.presenceTitle, text: t.about.presenceText },
  ];

  return (
    <Layout>
      <SEO
        title={t.about.title}
        description={t.about.subtitle}
        canonicalUrl="https://byciedu.com/about"
      />

      {/* Hero */}
      <section className="page-hero py-20">
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">{t.about.title}</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-section-bg">
        <div className="container grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-all duration-300 group relative overflow-hidden">
              <span className="absolute top-4 end-5 text-6xl font-black text-primary/5 leading-none select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 items-center justify-center mb-5 group-hover:from-accent/30 transition-colors duration-300">
                <s.icon className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
