import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import heroAi from '@/assets/hero-ai.jpg';
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HelpCircle,
  Languages,
  Laptop,
  MessageCircle,
  Presentation,
  Sparkles,
  Target,
  Timer,
  UserRoundSearch,
  Users,
  WandSparkles,
  Zap,
} from 'lucide-react';

const whatsappNumber = '96541103254';
const registrationPromptStorageKey = 'byci-free-ai-webinar-registration-prompt-dismissed';

const webinarDetails = [
  { label: 'Date', value: 'Every Friday & Saturday', icon: CalendarDays },
  { label: 'Time', value: '7:00 PM', icon: Clock3 },
  { label: 'Duration', value: '1 hour', icon: Timer },
  { label: 'Mode', value: 'Online Live Webinar', icon: Laptop },
  { label: 'Language', value: 'English + Arabic Support', icon: Languages },
];

const heroBenefits = [
  'Understand AI fundamentals',
  'Learn practical AI tools',
  'Improve productivity',
  'Real-world demonstrations',
  'Live Q&A session',
];

const heroTrustPoints = ['No coding required', 'Beginner friendly', 'Live demonstrations'];

const impactStats = [
  { value: '1 hr', label: 'Live practical session', icon: Timer },
  { value: '2', label: 'Weekly slots: Friday & Saturday', icon: CalendarDays },
  { value: 'Free', label: 'Registration through WhatsApp', icon: MessageCircle },
];

const outcomeCards = [
  {
    title: 'AI skills you can use this week',
    description: 'See practical workflows for emails, reports, research, presentations, and everyday productivity.',
    pills: ['Work tasks', 'Study support', 'Presentations', 'Research', 'Productivity'],
    icon: Zap,
  },
  {
    title: 'Made for non-technical learners',
    description: 'A guided BYCI session with demonstrations, plain-language explanations, and live Q&A.',
    pills: ['No coding', 'Live demos', 'Beginner friendly', 'Q&A', 'English + Arabic support'],
    icon: Users,
  },
];

const attendeeCards = [
  {
    title: 'Working Professionals',
    description: 'Learn practical ways to improve efficiency and streamline everyday tasks.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'University Students',
    description: 'Explore modern AI tools for research, learning, and presentations.',
    icon: GraduationCap,
  },
  {
    title: 'Job Seekers',
    description: 'Understand how AI can support professional development and career readiness.',
    icon: UserRoundSearch,
  },
  {
    title: 'Business Owners',
    description: 'Discover practical AI applications for operations and productivity.',
    icon: Building2,
  },
];

const learningItems = [
  { title: 'AI Fundamentals', icon: Sparkles },
  { title: 'Prompt Engineering Basics', icon: WandSparkles },
  { title: 'Popular AI Tools', icon: Laptop },
  { title: 'AI for Productivity', icon: Zap },
  { title: 'AI for Business Applications', icon: Presentation },
  { title: 'Future of AI in the Workplace', icon: Target },
];

const faqs = [
  { question: 'Is technical knowledge required?', answer: 'No.' },
  { question: 'Is coding required?', answer: 'No.' },
  { question: 'Will there be a recording?', answer: 'Information will be shared during the webinar.' },
  { question: 'Can students attend?', answer: 'Yes.' },
];

const webinarPageUrl = 'https://byciedu.com/free-ai-webinar';

const webinarStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    '@id': `${webinarPageUrl}#event`,
    name: 'Free AI Webinar for Modern Professionals',
    description:
      'A free BYCI live webinar teaching practical ways to use AI in daily work, studies, and professional development. No coding or technical background required.',
    url: webinarPageUrl,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'VirtualLocation',
      url: webinarPageUrl,
    },
    organizer: {
      '@type': 'EducationalOrganization',
      name: 'Build Your Career Institute',
      url: 'https://byciedu.com',
      telephone: '+965 41103254',
      email: 'info@byciedu.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KWD',
      availability: 'https://schema.org/InStock',
      url: webinarPageUrl,
    },
    eventSchedule: {
      '@type': 'Schedule',
      repeatFrequency: 'P1W',
      byDay: ['https://schema.org/Friday', 'https://schema.org/Saturday'],
      startTime: '19:00',
      duration: 'PT1H',
      scheduleTimezone: 'Asia/Kuwait',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Professionals, students, job seekers, and business owners in GCC and India',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${webinarPageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
];

type FormValues = {
  fullName: string;
  profession: string;
  mobile: string;
  email: string;
  preferredDay: string;
  preferredTime: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: '',
  profession: '',
  mobile: '',
  email: '',
  preferredDay: '',
  preferredTime: '',
};

const SectionHeader = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    {eyebrow && <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-accent md:text-xs">{eyebrow}</p>}
    <h2 className="text-[2.15rem] font-black leading-tight tracking-normal text-foreground md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-lg font-medium leading-relaxed text-muted-foreground md:text-base">{subtitle}</p>}
  </div>
);

const IconCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children?: ReactNode;
}) => {
  const Icon = icon;

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-extrabold tracking-normal text-foreground md:text-lg">{title}</h3>
      {children && <div className="mt-3 text-base font-medium leading-relaxed text-muted-foreground md:text-sm">{children}</div>}
    </div>
  );
};

const FieldError = ({ message }: { message?: string }) => (
  <p className="min-h-5 text-sm font-medium text-destructive" role="alert">
    {message ?? ''}
  </p>
);

const buildWhatsAppUrl = (values: FormValues) => {
  const message = `Name: ${values.fullName}
Profession: ${values.profession}
Phone: ${values.mobile}
Email: ${values.email || 'Not provided'}
Preferred Day: ${values.preferredDay}
Preferred Time: ${values.preferredTime}

I would like to register for the FREE AI Webinar.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const validateForm = (values: FormValues) => {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileDigits = values.mobile.replace(/\D/g, '');

  if (!values.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!values.profession.trim()) errors.profession = 'Profession is required.';
  if (!values.mobile.trim()) errors.mobile = 'Mobile number is required.';
  else if (mobileDigits.length < 7) errors.mobile = 'Enter a valid mobile number.';
  if (values.email.trim() && !emailPattern.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.preferredDay.trim()) errors.preferredDay = 'Preferred day is required.';
  if (!values.preferredTime.trim()) errors.preferredTime = 'Preferred time is required.';

  return errors;
};

const FreeAIWebinar = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [registrationPromptOpen, setRegistrationPromptOpen] = useState(false);
  const formSectionRef = useRef<HTMLElement | null>(null);
  const promptTriggeredRef = useRef(false);

  const hasSubmitted = Boolean(whatsAppUrl);

  const primaryCta = useMemo(
    () => (
      <a href="#registration" className="w-full sm:w-auto">
        <Button variant="accent" size="xl" className="w-full shadow-xl">
          Reserve Your Free Seat
        </Button>
      </a>
    ),
    [],
  );

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const scrollToRegistration = () => {
    setRegistrationPromptOpen(false);
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const dismissRegistrationPrompt = () => {
    sessionStorage.setItem(registrationPromptStorageKey, 'true');
    setRegistrationPromptOpen(false);
  };

  useEffect(() => {
    if (hasSubmitted || sessionStorage.getItem(registrationPromptStorageKey) === 'true') return;

    const openPrompt = () => {
      if (promptTriggeredRef.current || hasSubmitted) return;
      promptTriggeredRef.current = true;
      setRegistrationPromptOpen(true);
    };

    const timer = window.setTimeout(openPrompt, 14000);

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const scrollProgress = window.scrollY / scrollableHeight;

      if (scrollProgress > 0.28) {
        openPrompt();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasSubmitted]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValues = {
      fullName: values.fullName.trim(),
      profession: values.profession.trim(),
      mobile: values.mobile.trim(),
      email: values.email.trim(),
      preferredDay: values.preferredDay.trim(),
      preferredTime: values.preferredTime.trim(),
    };
    const nextErrors = validateForm(trimmedValues);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setValues(trimmedValues);
    setWhatsAppUrl(buildWhatsAppUrl(trimmedValues));
    sessionStorage.setItem(registrationPromptStorageKey, 'true');
    setRegistrationPromptOpen(false);
    window.requestAnimationFrame(() => {
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <Layout hideWhatsApp>
      <SEO
        title="Free AI Webinar"
        description="Reserve your free seat for BYCI's practical AI webinar for professionals, students, job seekers, and business owners. No coding required."
        canonicalUrl={webinarPageUrl}
        jsonLd={webinarStructuredData}
      />

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroAi}
            alt="BYCI AI webinar for professionals"
            className="h-full w-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 grid min-h-[700px] items-center gap-10 py-10 pb-14 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex animate-slide-in items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2.5 text-base font-bold text-white shadow-lg backdrop-blur md:text-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              Free live BYCI webinar - Fridays & Saturdays at 7 PM
            </div>
            <h1 className="max-w-4xl text-[2.85rem] font-black leading-[1.02] tracking-normal text-white sm:text-5xl md:text-5xl lg:text-[4.25rem]">
              Free AI Webinar
              <span className="block text-white/95">for Modern Professionals</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-white/95 md:text-xl">
              Discover practical ways to use AI in your daily work, studies, and professional development. No coding or
              technical background required.
            </p>

            <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {heroBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/10 px-4 py-3 text-base font-bold text-white/95 backdrop-blur-sm md:text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              {primaryCta}
              <div className="text-base font-semibold text-white/80 md:text-sm">
                <p>1 hour live session</p>
                <p>Complete confirmation through WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 md:p-5">
            <div className="rounded-md bg-white p-5 text-foreground md:p-5">
              <p className="text-sm font-extrabold uppercase tracking-widest text-accent md:text-xs">Reserve your weekly slot</p>
              <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-primary md:text-2xl">Practical AI skills in one live session</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {heroTrustPoints.map((point) => (
                  <span key={point} className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-extrabold text-primary md:text-xs">
                    {point}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {webinarDetails.slice(0, 3).map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3 rounded-md bg-section-bg p-4">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                        <p className="text-base font-extrabold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-md border border-accent/20 bg-accent/10 p-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-base font-bold leading-relaxed text-primary md:text-sm">
                    Register now and your details open directly in WhatsApp for final confirmation.
                  </p>
                </div>
              </div>
              <Button variant="accent" size="xl" className="mt-6 w-full" asChild>
                <a href="#registration">Register Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-14">
        <div className="container">
          <div className="rounded-[2rem] bg-primary p-6 text-primary-foreground shadow-xl md:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:divide-x md:divide-white/25">
              {impactStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-4 md:px-5 first:md:pl-0 last:md:pr-0">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-white/15 text-accent">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-4xl font-black leading-none tracking-normal text-white md:text-4xl">{stat.value}</p>
                      <p className="mt-2 text-base font-bold text-white/80 md:text-sm">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {outcomeCards.map((card, index) => {
              const Icon = card.icon;
              const isPrimary = index === 1;

              return (
                <div
                  key={card.title}
                  className={`relative overflow-hidden rounded-[1.75rem] p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 md:p-9 ${
                    isPrimary ? 'bg-primary' : 'bg-gradient-to-br from-teal-600 to-teal-500'
                  }`}
                >
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:64px_40px]" />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-white/20">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="max-w-xl text-[2rem] font-black leading-tight tracking-normal md:text-4xl">{card.title}</h2>
                    <p className="mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-white/90 md:text-base">{card.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {card.pills.map((pill) => (
                        <span key={pill} className="rounded-full bg-white px-4 py-2 text-base font-extrabold text-primary shadow-sm md:text-sm">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <SectionHeader
            eyebrow="Who should attend"
            title="Built for people who want practical AI advantage"
            subtitle="A focused session for learners and professionals across the GCC and India who want usable AI skills without technical barriers."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {attendeeCards.map((card) => (
              <IconCard key={card.title} icon={card.icon} title={card.title}>
                <p>{card.description}</p>
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-bg py-16 md:py-20">
        <div className="container">
          <SectionHeader
            eyebrow="What you will learn"
            title="Clear, practical topics you can apply immediately"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningItems.map((item) => (
              <div key={item.title} className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold tracking-normal text-foreground md:text-base">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <SectionHeader eyebrow="Webinar details" title="Everything you need to know before joining" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {webinarDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-lg border border-border bg-card p-5 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-base font-extrabold leading-snug text-foreground">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="registration" ref={formSectionRef} className="scroll-mt-24 bg-section-bg py-16 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-accent md:text-xs">Registration</p>
            <h2 className="text-[2.25rem] font-black leading-tight tracking-normal text-foreground md:text-4xl">Reserve Your Free Seat</h2>
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-muted-foreground md:text-base">
              Submit your details and complete the final confirmation through WhatsApp. BYCI will use your information
              only for this webinar registration.
            </p>
            <div className="mt-8 rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-sm">
                  Your registration message will open in WhatsApp with your contact details and preferred webinar slot
                  already filled in.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 shadow-lg md:p-7">
            {hasSubmitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black tracking-normal text-foreground md:text-2xl">Registration Received</h3>
                <p className="mx-auto mt-3 max-w-md text-lg font-medium text-muted-foreground md:text-base">
                  Thank you for registering. Click below to complete your registration via WhatsApp.
                </p>
                <Button variant="accent" size="lg" className="mt-7 w-full sm:w-auto" asChild>
                  <a href={whatsAppUrl}>Continue to WhatsApp</a>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-base font-extrabold md:text-sm">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={values.fullName}
                    onChange={(event) => updateField('fullName', event.target.value)}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby="fullName-error"
                    className="mt-2 h-14 text-base font-semibold"
                  />
                  <div id="fullName-error">
                    <FieldError message={errors.fullName} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="profession" className="text-base font-extrabold md:text-sm">Profession *</Label>
                  <Input
                    id="profession"
                    name="profession"
                    value={values.profession}
                    onChange={(event) => updateField('profession', event.target.value)}
                    autoComplete="organization-title"
                    aria-invalid={Boolean(errors.profession)}
                    aria-describedby="profession-error"
                    className="mt-2 h-14 text-base font-semibold"
                  />
                  <div id="profession-error">
                    <FieldError message={errors.profession} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-base font-extrabold md:text-sm">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="tel"
                    value={values.mobile}
                    onChange={(event) => updateField('mobile', event.target.value)}
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.mobile)}
                    aria-describedby="mobile-error"
                    className="mt-2 h-14 text-base font-semibold"
                  />
                  <div id="mobile-error">
                    <FieldError message={errors.mobile} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-extrabold md:text-sm">Email Address <span className="text-muted-foreground">(Optional)</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby="email-error"
                    className="mt-2 h-14 text-base font-semibold"
                  />
                  <div id="email-error">
                    <FieldError message={errors.email} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="preferredDay" className="text-base font-extrabold md:text-sm">Preferred Day *</Label>
                    <select
                      id="preferredDay"
                      name="preferredDay"
                      value={values.preferredDay}
                      onChange={(event) => updateField('preferredDay', event.target.value)}
                      aria-invalid={Boolean(errors.preferredDay)}
                      aria-describedby="preferredDay-error"
                      className="mt-2 flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select day</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </select>
                    <div id="preferredDay-error">
                      <FieldError message={errors.preferredDay} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime" className="text-base font-extrabold md:text-sm">Preferred Time *</Label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={values.preferredTime}
                      onChange={(event) => updateField('preferredTime', event.target.value)}
                      aria-invalid={Boolean(errors.preferredTime)}
                      aria-describedby="preferredTime-error"
                      className="mt-2 flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select time</option>
                      <option value="7:00 PM">7:00 PM</option>
                    </select>
                    <div id="preferredTime-error">
                      <FieldError message={errors.preferredTime} />
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="accent" size="xl" className="mt-2 w-full shadow-md">
                  Register Now
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-lg font-extrabold tracking-normal text-foreground md:text-base">{faq.question}</h3>
                    <p className="mt-2 text-base font-medium leading-relaxed text-muted-foreground md:text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container text-center">
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-accent md:text-xs">BYCI Free Webinar</p>
            <h2 className="text-[2.25rem] font-black leading-tight tracking-normal text-white md:text-4xl">Join the Free AI Webinar</h2>
            <p className="mt-4 text-xl font-semibold text-white/80 md:text-lg">Explore practical AI skills with BYCI.</p>
            <div className="mt-8 flex justify-center">{primaryCta}</div>
          </div>
        </div>
      </section>

      <Dialog
        open={registrationPromptOpen}
        onOpenChange={(open) => {
          if (!open) dismissRegistrationPrompt();
          else setRegistrationPromptOpen(true);
        }}
      >
        <DialogContent className="fixed bottom-0 left-0 top-auto grid max-h-[92dvh] w-full translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl border-0 p-0 shadow-2xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom sm:bottom-auto sm:left-[50%] sm:top-[50%] sm:max-w-md sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-lg sm:data-[state=closed]:slide-out-to-left-1/2 sm:data-[state=closed]:slide-out-to-top-[48%] sm:data-[state=open]:slide-in-from-left-1/2 sm:data-[state=open]:slide-in-from-top-[48%]">
          <div className="overflow-hidden rounded-t-2xl sm:rounded-lg">
            <div className="bg-primary px-5 py-5 text-primary-foreground sm:px-6">
              <p className="text-xs font-extrabold uppercase tracking-widest text-accent">Free BYCI Webinar</p>
              <DialogHeader className="mt-2 text-left">
                <DialogTitle className="pr-8 text-[1.75rem] font-black leading-tight tracking-normal text-white sm:text-2xl">
                  Ready to reserve your free seat?
                </DialogTitle>
                <DialogDescription className="pt-2 text-base font-semibold leading-relaxed text-white/85 sm:text-base">
                  Join the 1 hour live AI webinar. Fridays and Saturdays at 7:00 PM.
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="bg-background px-5 pb-6 pt-5 sm:px-6">
              <div className="grid gap-3">
                {['No coding required', 'Practical AI tools', 'Live Q&A session'].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-base font-extrabold text-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                <Button variant="accent" size="xl" className="min-h-14 w-full text-lg font-black sm:text-base" onClick={scrollToRegistration}>
                  Reserve Your Free Seat
                </Button>
                <button
                  type="button"
                  onClick={dismissRegistrationPrompt}
                  className="min-h-12 rounded-md px-4 py-3 text-base font-extrabold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <a href="#registration" className="block">
          <Button variant="accent" size="xl" className="w-full text-lg font-black">
            Reserve Your Free Seat
          </Button>
        </a>
      </div>
    </Layout>
  );
};

export default FreeAIWebinar;
