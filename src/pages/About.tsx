import { useLanguage } from '@/contexts/LanguageContext';
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
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">{t.about.title}</h1>
          <p className="text-primary-foreground/80">{t.about.subtitle}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-8">
          {sections.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
