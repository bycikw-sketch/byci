import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Program, getCategoryLabel, getLevelLabel } from '@/data/programs';
import { Brain, Award, Users, BarChart3, Shield, Cloud, CheckCircle2, Clock, MonitorPlay } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Brain, Award, Users, BarChart3, Shield, Cloud,
};

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const { lang, t } = useLanguage();
  const Icon = iconMap[program.icon] || Brain;
  const title = lang === 'en' ? program.titleEn : program.titleAr;
  const description = lang === 'en' ? program.descriptionEn : program.descriptionAr;
  const level = getLevelLabel(program.level, lang);
  const category = getCategoryLabel(program.category, lang);
  const duration = lang === 'en' ? program.duration : program.durationAr;
  const format = lang === 'en' ? program.format : program.formatAr;
  const outcomes = (lang === 'en' ? program.outcomesEn : program.outcomesAr).slice(0, 2);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-navy-light p-5 text-primary-foreground">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(90deg,rgba(255,255,255,.24)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.24)_1px,transparent_1px)] [background-size:52px_34px]" />
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white/12 text-accent shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-7 w-7" />
          </div>
          <span className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
            {level}
          </span>
        </div>
        <p className="relative mt-5 text-xs font-bold uppercase tracking-widest text-accent">{category}</p>
        <h3 className="relative mt-2 min-h-[3.75rem] text-xl font-black leading-tight tracking-normal text-white">{title}</h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-md bg-section-bg px-3 py-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-accent" />
              Duration
            </div>
            <p className="mt-1 text-sm font-extrabold text-foreground">{duration}</p>
          </div>
          <div className="rounded-md bg-section-bg px-3 py-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              <MonitorPlay className="h-3.5 w-3.5 text-accent" />
              Format
            </div>
            <p className="mt-1 text-sm font-extrabold text-foreground line-clamp-1">{format}</p>
          </div>
        </div>

        <p className="mb-4 line-clamp-3 flex-1 text-sm font-medium leading-relaxed text-muted-foreground">{description}</p>

        <div className="space-y-2 border-t border-border/70 pt-4">
          {outcomes.map((outcome) => (
            <div key={outcome} className="flex gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="line-clamp-1">{outcome}</span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <Button variant="accent" size="lg" className="w-full shadow-md" asChild>
            <Link to={`/programs/${program.id}`}>{t.featured.viewDetails}</Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProgramCard;
