import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import { blogArticles, getBlogCategoryLabel } from '@/data/blog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Clock, Brain, Award, Users, Cloud, BarChart3, Shield } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Brain, Award, Users, Cloud, BarChart3, Shield };

const Blog = () => {
  const { t, lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', 'ai', 'leadership', 'certifications', 'career', 'corporate'];

  const filtered = blogArticles.filter((a) => {
    const title = lang === 'en' ? a.titleEn : a.titleAr;
    const excerpt = lang === 'en' ? a.excerptEn : a.excerptAr;
    const matchesSearch = !search || title.toLowerCase().includes(search.toLowerCase()) || excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'all' || a.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <Layout>
      <SEO 
        title={t.blog.title}
        description={t.blog.subtitle}
        canonicalUrl="https://byci.com/blog"
      />
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">{t.blog.title}</h1>
          <p className="text-primary-foreground/80">{t.blog.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute top-3 left-3 rtl:left-auto rtl:right-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.blog.searchPlaceholder}
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
              <option value="all">{t.blog.allCategories}</option>
              {categories.slice(1).map((c) => (
                <option key={c} value={c}>{getBlogCategoryLabel(c, lang)}</option>
              ))}
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => {
                const Icon = iconMap[article.icon] || Brain;
                const title = lang === 'en' ? article.titleEn : article.titleAr;
                const excerpt = lang === 'en' ? article.excerptEn : article.excerptAr;
                const readTime = lang === 'en' ? article.readTimeEn : article.readTimeAr;

                return (
                  <article key={article.id} className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
                    {/* Colored header */}
                    <div className="h-40 bg-primary/5 flex items-center justify-center relative">
                      <Icon className="h-12 w-12 text-accent/40" />
                      <span className="absolute top-3 left-3 rtl:left-auto rtl:right-3 text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded">
                        {getBlogCategoryLabel(article.category, lang)}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(article.date).toLocaleDateString(lang === 'ar' ? 'ar-KW' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        <Link to={`/blog/${article.id}`}>{title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{article.author}</span>
                        <Button variant="accent" size="sm" asChild>
                          <Link to={`/blog/${article.id}`}>{t.blog.readMore}</Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12">{t.blog.noResults}</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
