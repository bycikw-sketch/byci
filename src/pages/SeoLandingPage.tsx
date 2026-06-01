import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { seoLandingPages } from '@/data/seoLandingPages';
import { BookOpen, CheckCircle2, MapPin, MessageCircle, Sparkles } from 'lucide-react';

const whatsappBaseUrl = 'https://wa.me/96541103254';

const SeoLandingPage = () => {
  const { slug } = useParams();
  const page = seoLandingPages.find((item) => item.slug === slug);

  if (!page) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground">Page not found</h1>
          <Button variant="accent" asChild>
            <Link to="/programs">View Programs</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = page.icon;
  const pageUrl = `https://byciedu.com/training/${page.slug}`;
  const whatsappMessage = encodeURIComponent(`Hello BYCI, I would like to know more about ${page.title}.`);
  const faq = [
    {
      q: `Who is ${page.title} suitable for?`,
      a: page.audience,
    },
    {
      q: `What will I learn in ${page.title}?`,
      a: page.outcomes.join(' '),
    },
    {
      q: 'How can I register?',
      a: 'You can register or request details through BYCI using the program page or WhatsApp.',
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `${pageUrl}#course`,
      name: page.title,
      description: page.description,
      url: pageUrl,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Build Your Career Institute',
        url: 'https://byciedu.com',
      },
      areaServed: ['KW', 'SA', 'AE', 'QA', 'BH', 'OM', 'IN'],
      teaches: page.outcomes,
      keywords: page.keywords.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ];

  return (
    <Layout>
      <SEO
        title={page.title}
        description={page.description}
        canonicalUrl={pageUrl}
        type="course"
        jsonLd={schema}
      />

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_46px]" />
        <div className="container relative z-10 grid gap-10 py-16 lg:grid-cols-[1fr_360px] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white">
              <MapPin className="h-4 w-4 text-accent" />
              Kuwait, GCC & India training
            </div>
            <h1 className="max-w-4xl text-[2.5rem] font-black leading-tight tracking-normal text-white md:text-5xl">
              {page.headline}
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-white/82 md:text-xl">
              {page.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="xl" asChild>
                <Link to={page.relatedProgram}>{page.primaryCta}</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <a href={`${whatsappBaseUrl}?text=${whatsappMessage}`}>
                  <MessageCircle className="h-4 w-4" />
                  Ask BYCI on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-md bg-white p-5 text-foreground">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs font-black uppercase tracking-widest text-accent">High-intent training page</p>
              <h2 className="mt-2 text-2xl font-black tracking-normal text-primary">{page.title}</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{page.audience}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="space-y-10">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-accent">What you will learn</p>
              <h2 className="text-3xl font-black tracking-normal text-foreground">Practical outcomes for career growth</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {page.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="font-bold leading-relaxed text-foreground">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-border bg-section-bg p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h2 className="text-2xl font-black tracking-normal text-foreground">Why choose BYCI?</h2>
                  <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground">
                    BYCI focuses on practical training, professional development, and career-ready skills for learners
                    across Kuwait, GCC countries, and India. Programs are built for real workplace application.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-black tracking-normal text-foreground">Common questions</h2>
              <div className="grid gap-4">
                {faq.map((item) => (
                  <div key={item.q} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                    <h3 className="font-black text-foreground">{item.q}</h3>
                    <p className="mt-2 font-medium leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-border bg-card p-5 shadow-xl lg:sticky lg:top-24">
            <Sparkles className="h-8 w-8 text-accent" />
            <h2 className="mt-4 text-2xl font-black tracking-normal text-foreground">Get program details</h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
              Speak with BYCI about schedule, eligibility, training format, and enrollment.
            </p>
            <div className="mt-5 grid gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link to={page.relatedProgram}>{page.primaryCta}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`${whatsappBaseUrl}?text=${whatsappMessage}`}>Ask on WhatsApp</a>
              </Button>
              <Button variant="accent-outline" size="lg" asChild>
                <Link to="/free-ai-webinar">Join Free AI Webinar</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default SeoLandingPage;
