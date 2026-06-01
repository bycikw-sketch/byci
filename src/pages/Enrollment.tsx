import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { programs } from '@/data/programs';
import { CheckCircle, MessageCircle } from 'lucide-react';

const whatsappNumber = '96541103254';

type EnrollmentValues = {
  name: string;
  email: string;
  phone: string;
  programId: string;
  message: string;
};

type EnrollmentErrors = Partial<Record<keyof EnrollmentValues, string>>;

const initialValues: EnrollmentValues = {
  name: '',
  email: '',
  phone: '',
  programId: '',
  message: '',
};

const buildWhatsAppUrl = (values: EnrollmentValues, programTitle: string) => {
  const message = `Name: ${values.name}
Phone: ${values.phone}
Email: ${values.email || 'Not provided'}
Selected Program: ${programTitle}
Additional Information: ${values.message || 'Not provided'}

I would like to submit an enrollment application.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const validateForm = (values: EnrollmentValues) => {
  const errors: EnrollmentErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = values.phone.replace(/\D/g, '');

  if (!values.name.trim()) errors.name = 'Full name is required.';
  if (values.email.trim() && !emailPattern.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.phone.trim()) errors.phone = 'Phone number is required.';
  else if (phoneDigits.length < 7) errors.phone = 'Enter a valid phone number.';
  if (!values.programId.trim()) errors.programId = 'Please select a program.';

  return errors;
};

const FieldError = ({ message }: { message?: string }) => (
  <p className="min-h-5 text-sm font-medium text-destructive" role="alert">
    {message ?? ''}
  </p>
);

const Enrollment = () => {
  const { t, lang } = useLanguage();
  const [values, setValues] = useState<EnrollmentValues>(initialValues);
  const [errors, setErrors] = useState<EnrollmentErrors>({});
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  const selectedProgram = programs.find((program) => program.id === values.programId);
  const selectedProgramTitle = selectedProgram ? (lang === 'en' ? selectedProgram.titleEn : selectedProgram.titleAr) : '';

  const updateField = (field: keyof EnrollmentValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      programId: values.programId.trim(),
      message: values.message.trim(),
    };
    const nextErrors = validateForm(trimmedValues);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const program = programs.find((item) => item.id === trimmedValues.programId);
    const programTitle = program ? (lang === 'en' ? program.titleEn : program.titleAr) : trimmedValues.programId;

    setValues(trimmedValues);
    setWhatsAppUrl(buildWhatsAppUrl(trimmedValues, programTitle));
  };

  if (whatsAppUrl) {
    return (
      <Layout>
        <SEO
          title={t.enrollment.title}
          description={t.enrollment.subtitle}
          canonicalUrl="https://byciedu.com/enrollment"
        />
        <section className="py-20">
          <div className="container max-w-lg text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <CheckCircle className="h-9 w-9" />
            </div>
            <h1 className="mb-4 text-3xl font-black tracking-normal text-foreground">{t.enrollment.successTitle}</h1>
            <p className="mb-8 text-lg font-medium text-muted-foreground">
              Application received. Click below to complete your application via WhatsApp.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button variant="accent" size="lg" asChild>
                <a href={whatsAppUrl}>
                  <MessageCircle className="h-4 w-4" />
                  Continue to WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">{t.enrollment.backHome}</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={t.enrollment.title}
        description={t.enrollment.subtitle}
        canonicalUrl="https://byciedu.com/enrollment"
      />
      <section className="bg-primary py-16">
        <div className="container text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-accent">BYCI Enrollment</p>
          <h1 className="mb-2 text-4xl font-black tracking-normal text-primary-foreground">{t.enrollment.title}</h1>
          <p className="mx-auto max-w-xl text-lg font-semibold text-primary-foreground/80">{t.enrollment.subtitle}</p>
        </div>
      </section>
      <section className="bg-section-bg py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-accent">Apply through WhatsApp</p>
            <h2 className="text-3xl font-black tracking-normal text-foreground">Submit your program interest</h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground">
              Fill the application form and your details will open in WhatsApp for final submission to BYCI.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                  This helps the admissions team respond faster with schedule, fees, and next steps.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-lg md:p-8">
            <div>
              <label htmlFor="name" className="text-base font-extrabold text-foreground md:text-sm">
                {t.enrollment.formName} *
              </label>
              <Input
                id="name"
                value={values.name}
                onChange={(event) => updateField('name', event.target.value)}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby="name-error"
                maxLength={100}
                className="mt-2 h-14 text-base font-semibold"
              />
              <div id="name-error">
                <FieldError message={errors.name} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-base font-extrabold text-foreground md:text-sm">
                {t.enrollment.formEmail} <span className="text-muted-foreground">(Optional)</span>
              </label>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby="email-error"
                maxLength={255}
                className="mt-2 h-14 text-base font-semibold"
              />
              <div id="email-error">
                <FieldError message={errors.email} />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="text-base font-extrabold text-foreground md:text-sm">
                {t.enrollment.formPhone} *
              </label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby="phone-error"
                maxLength={20}
                className="mt-2 h-14 text-base font-semibold"
              />
              <div id="phone-error">
                <FieldError message={errors.phone} />
              </div>
            </div>

            <div>
              <label htmlFor="programId" className="text-base font-extrabold text-foreground md:text-sm">
                {t.enrollment.formProgram} *
              </label>
              <select
                id="programId"
                value={values.programId}
                onChange={(event) => updateField('programId', event.target.value)}
                aria-invalid={Boolean(errors.programId)}
                aria-describedby="programId-error"
                className="mt-2 h-14 w-full rounded-md border border-input bg-background px-3 text-base font-semibold"
              >
                <option value="">Select a program</option>
                {programs.map((program) => (
                  <option key={program.id} value={program.id}>
                    {lang === 'en' ? program.titleEn : program.titleAr}
                  </option>
                ))}
              </select>
              <div id="programId-error">
                <FieldError message={errors.programId} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-base font-extrabold text-foreground md:text-sm">
                {t.enrollment.formMessage} <span className="text-muted-foreground">(Optional)</span>
              </label>
              <Textarea
                id="message"
                value={values.message}
                onChange={(event) => updateField('message', event.target.value)}
                maxLength={500}
                rows={4}
                className="mt-2 text-base font-semibold"
              />
            </div>

            {selectedProgramTitle && (
              <div className="rounded-md bg-accent/10 px-4 py-3 text-sm font-bold text-foreground">
                Selected: {selectedProgramTitle}
              </div>
            )}

            <Button type="submit" variant="accent" size="xl" className="w-full text-lg font-black shadow-md">
              {t.enrollment.formSubmit}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Enrollment;
