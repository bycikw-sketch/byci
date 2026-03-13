import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { programs, getCategoryLabel, getLevelLabel } from '@/data/programs';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, BarChart3, Tag, Monitor } from 'lucide-react';

const ProgramDetail = () => {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Program not found</h1>
          <Button variant="accent" asChild><Link to="/programs">Back to Programs</Link></Button>
        </div>
      </Layout>
    );
  }

  const title = lang === 'en' ? program.titleEn : program.titleAr;
  const overview = lang === 'en' ? program.overviewEn : program.overviewAr;
  const outcomes = lang === 'en' ? program.outcomesEn : program.outcomesAr;
  const modules = lang === 'en' ? program.modulesEn : program.modulesAr;
  const instructor = lang === 'en' ? program.instructorEn : program.instructorAr;
  const certification = lang === 'en' ? program.certificationEn : program.certificationAr;
  const faq = lang === 'en' ? program.faqEn : program.faqAr;
  const duration = lang === 'en' ? program.duration : program.durationAr;
  const format = lang === 'en' ? program.format : program.formatAr;

  return (
    <Layout>
      <SEO 
        title={title}
        description={overview.substring(0, 150) + '...'}
        canonicalUrl={`https://byci.com/programs/${id}`}
        type="course"
      />
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">{title}</h1>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm mb-6">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{duration}</span>
            <span className="flex items-center gap-1"><BarChart3 className="h-4 w-4" />{getLevelLabel(program.level, lang)}</span>
            <span className="flex items-center gap-1"><Tag className="h-4 w-4" />{getCategoryLabel(program.category, lang)}</span>
            <span className="flex items-center gap-1"><Monitor className="h-4 w-4" />{format}</span>
          </div>
          <div className="flex gap-3">
            <Button variant="accent" size="lg" asChild><Link to="/enrollment">{t.programs.applyNow}</Link></Button>
            <Button variant="accent-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">{t.programs.downloadBrochure}</Button>
          </div>
        </div>
      </section>

      <div className="container py-12 space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t.programs.overview}</h2>
          <p className="text-muted-foreground leading-relaxed">{overview}</p>
        </section>

        {/* Outcomes */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t.programs.outcomes}</h2>
          <ul className="space-y-2">
            {outcomes.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </section>

        {/* Curriculum */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t.programs.curriculum}</h2>
          <Accordion type="single" collapsible className="w-full">
            {modules.map((mod, i) => (
              <AccordionItem key={i} value={`mod-${i}`}>
                <AccordionTrigger className="text-foreground font-semibold">{mod.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1">
                    {mod.topics.map((topic, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />{topic}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Instructor */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t.programs.instructor}</h2>
          <div className="bg-section-bg rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-2">{instructor.name}</h3>
            <p className="text-sm text-muted-foreground">{instructor.bio}</p>
          </div>
        </section>

        {/* Certification */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t.programs.certification}</h2>
          <p className="text-muted-foreground">{certification}</p>
        </section>

        {/* FAQ */}
        {faq.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{t.programs.faq}</h2>
            <Accordion type="single" collapsible>
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-foreground">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="text-center py-8">
          <Button variant="accent" size="lg" asChild><Link to="/enrollment">{t.programs.applyNow}</Link></Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProgramDetail;
