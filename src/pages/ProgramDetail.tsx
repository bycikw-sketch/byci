import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { getCategoryLabel, getLevelLabel } from '@/data/programs';
import { useProgram } from '@/lib/sanity/hooks';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ProgramCardSkeleton } from '@/components/SkeletonCard';
import {
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Download,
  GraduationCap,
  MessageCircle,
  Monitor,
  Sparkles,
  Tag,
  UserRoundCheck,
} from 'lucide-react';

const whatsappBaseUrl = 'https://wa.me/96541103254';

const ProgramDetail = () => {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const { data: program, isLoading } = useProgram(id);

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-20">
          <div className="grid max-w-lg gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProgramCardSkeleton />
          </div>
        </div>
      </Layout>
    );
  }

  if (!program) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground">Program not found</h1>
          <Button variant="accent" asChild>
            <Link to="/programs">Back to Programs</Link>
          </Button>
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
  const level = getLevelLabel(program.level, lang);
  const category = getCategoryLabel(program.category, lang);
  const whatsappMessage = encodeURIComponent(`Hello BYCI, I would like to know more about the ${title} program.`);

  const quickFacts = [
    { label: lang === 'en' ? 'Duration' : 'Duration', value: duration, icon: Clock },
    { label: lang === 'en' ? 'Level' : 'Level', value: level, icon: BarChart3 },
    { label: lang === 'en' ? 'Category' : 'Category', value: category, icon: Tag },
    { label: lang === 'en' ? 'Format' : 'Format', value: format, icon: Monitor },
  ];

  const programSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `https://byciedu.com/programs/${id}#course`,
    name: title,
    description: overview,
    url: `https://byciedu.com/programs/${id}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Build Your Career Institute',
      sameAs: 'https://byciedu.com',
    },
    educationalCredentialAwarded: certification,
    courseMode: format,
    timeRequired: duration,
    teaches: outcomes,
  };

  return (
    <Layout>
      <SEO
        title={title}
        description={overview.substring(0, 150) + '...'}
        canonicalUrl={`https://byciedu.com/programs/${id}`}
        type="course"
        jsonLd={programSchema}
      />

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_46px]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-accent/10 blur-3xl" />
        <div className="container relative z-10 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                <Sparkles className="h-4 w-4 text-accent" />
                {category}
              </div>
              <h1 className="max-w-4xl text-[2.5rem] font-black leading-tight tracking-normal text-white md:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-white/80 md:text-xl">
                {overview}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="accent" size="xl" className="shadow-xl" asChild>
                  <Link to="/enrollment">{t.programs.applyNow}</Link>
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href={`${whatsappBaseUrl}?text=${whatsappMessage}`}>
                    <MessageCircle className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
              <div className="rounded-md bg-white p-5 text-foreground">
                <p className="text-xs font-extrabold uppercase tracking-widest text-accent">Program snapshot</p>
                <div className="mt-5 grid gap-3">
                  {quickFacts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <div key={fact.label} className="flex items-center gap-3 rounded-md bg-section-bg p-4">
                        <Icon className="h-5 w-5 shrink-0 text-accent" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{fact.label}</p>
                          <p className="font-extrabold text-foreground">{fact.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button variant="accent" size="lg" className="mt-5 w-full" asChild>
                  <Link to="/enrollment">{t.programs.applyNow}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container grid gap-10 py-12 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="space-y-12">
          <section className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-normal text-foreground">{t.programs.overview}</h2>
                <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{overview}</p>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black tracking-normal text-foreground">{t.programs.outcomes}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div key={outcome} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-widest text-accent">Outcome {index + 1}</span>
                  <div className="mt-3 flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="font-bold leading-relaxed text-foreground">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black tracking-normal text-foreground">{t.programs.curriculum}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {modules.map((mod, i) => (
                <AccordionItem key={mod.title} value={`mod-${i}`} className="border-border/70">
                  <AccordionTrigger className="text-base font-extrabold text-foreground hover:no-underline">
                    <span className="flex items-center gap-3 text-left">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-sm font-black text-accent">
                        {i + 1}
                      </span>
                      {mod.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2 rounded-md bg-section-bg px-3 py-2 text-sm font-semibold text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent">
                <UserRoundCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black tracking-normal text-foreground">{t.programs.instructor}</h2>
              <h3 className="mt-4 font-extrabold text-foreground">{instructor.name}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{instructor.bio}</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black tracking-normal text-foreground">{t.programs.certification}</h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">{certification}</p>
            </div>
          </section>

          {faq.length > 0 && (
            <section className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
              <h2 className="mb-5 text-2xl font-black tracking-normal text-foreground">{t.programs.faq}</h2>
              <Accordion type="single" collapsible>
                {faq.map((item, i) => (
                  <AccordionItem key={item.q} value={`faq-${i}`}>
                    <AccordionTrigger className="font-bold text-foreground hover:no-underline">{item.q}</AccordionTrigger>
                    <AccordionContent className="font-medium leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-lg border border-border bg-card p-5 shadow-xl">
            <p className="text-xs font-black uppercase tracking-widest text-accent">Ready to start?</p>
            <h2 className="mt-2 text-2xl font-black leading-tight tracking-normal text-foreground">Apply for this program</h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
              Submit your interest and BYCI will guide you through schedule, fees, and enrollment details.
            </p>
            <div className="mt-5 grid gap-3">
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/enrollment">{t.programs.applyNow}</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href={`${whatsappBaseUrl}?text=${whatsappMessage}`}>
                  <MessageCircle className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </Button>
              <Button variant="accent-outline" size="lg" className="w-full" asChild>
                <Link to="/free-ai-webinar">Join Free AI Webinar</Link>
              </Button>
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <h3 className="font-black text-foreground">Quick facts</h3>
              <div className="mt-4 space-y-3">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{fact.label}</p>
                        <p className="text-sm font-extrabold text-foreground">{fact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-section-bg">
              <Download className="h-4 w-4 text-accent" />
              {t.programs.downloadBrochure}
            </button>
          </div>
        </aside>
      </div>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-accent">BYCI programs</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal text-white">Build practical career skills with BYCI</h2>
          </div>
          <Button variant="accent" size="xl" asChild>
            <Link to="/enrollment">{t.programs.applyNow}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
