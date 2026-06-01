import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import ProgramCard from '@/components/ProgramCard';
import { ProgramCardSkeleton } from '@/components/SkeletonCard';
import { getCategoryLabel, getLevelLabel } from '@/data/programs';
import { usePrograms } from '@/lib/sanity/hooks';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Programs = () => {
  const { t, lang } = useLanguage();
  const { data: programs = [], isLoading } = usePrograms();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [level, setLevel] = useState('all');

  const categories = ['all', 'ai', 'business', 'certification', 'corporate'];
  const levels = ['all', 'beginner', 'intermediate', 'advanced'];

  const filtered = programs.filter((p) => {
    const title = lang === 'en' ? p.titleEn : p.titleAr;
    const desc = lang === 'en' ? p.descriptionEn : p.descriptionAr;
    const matchesSearch = !search || title.toLowerCase().includes(search.toLowerCase()) || desc.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'all' || p.category === category;
    const matchesLevel = level === 'all' || p.level === level;
    return matchesSearch && matchesCat && matchesLevel;
  });

  return (
    <Layout>
      <SEO
        title={t.programs.title}
        description={t.programs.subtitle}
        canonicalUrl="https://byciedu.com/programs"
      />
      <section className="page-hero py-20">
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">{t.programs.title}</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">{t.programs.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-section-bg">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute top-3 left-3 rtl:left-auto rtl:right-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.programs.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 rtl:pr-9 rtl:pl-3"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">{t.programs.allCategories}</option>
              {categories.slice(1).map((c) => (
                <option key={c} value={c}>{getCategoryLabel(c, lang)}</option>
              ))}
            </select>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">{t.programs.allLevels}</option>
              {levels.slice(1).map((l) => (
                <option key={l} value={l}>{getLevelLabel(l, lang)}</option>
              ))}
            </select>
          </div>

          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => <ProgramCardSkeleton key={i} />)}
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => <ProgramCard key={p.id} program={p} />)}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12">{t.programs.noResults}</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
