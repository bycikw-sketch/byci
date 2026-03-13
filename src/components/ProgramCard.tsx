import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Program, getCategoryLabel, getLevelLabel } from '@/data/programs';
import { Brain, Award, Users, BarChart3, Shield, Cloud } from 'lucide-react';

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

  return (
    <article className="group bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow relative overflow-hidden">
      {/* Accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-md bg-accent/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">{level}</span>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{category}</span>
        <Button variant="accent" size="sm" asChild>
          <Link to={`/programs/${program.id}`}>{t.featured.viewDetails}</Link>
        </Button>
      </div>
    </article>
  );
};

export default ProgramCard;
