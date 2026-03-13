import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { blogArticles, getBlogCategoryLabel } from '@/data/blog';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const { t, lang, isRTL } = useLanguage();
  const article = blogArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
          <Button variant="accent" asChild><Link to="/blog">{t.blog.backToBlog}</Link></Button>
        </div>
      </Layout>
    );
  }

  const title = lang === 'en' ? article.titleEn : article.titleAr;
  const content = lang === 'en' ? article.contentEn : article.contentAr;
  const readTime = lang === 'en' ? article.readTimeEn : article.readTimeAr;
  const authorRole = lang === 'en' ? article.authorRoleEn : article.authorRoleAr;
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <BackArrow className="h-4 w-4" />{t.blog.backToBlog}
          </Link>
          <span className="inline-block text-xs font-medium bg-accent/20 text-accent-foreground px-2 py-1 rounded mb-4">
            {getBlogCategoryLabel(article.category, lang)}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6 leading-tight">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-1"><User className="h-4 w-4" />{article.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(article.date).toLocaleDateString(lang === 'ar' ? 'ar-KW' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {content.map((paragraph, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed text-base">{paragraph}</p>
            ))}
          </div>

          {/* Author bio */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <User className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{article.author}</p>
                <p className="text-sm text-muted-foreground">{authorRole}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-section-bg rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              {lang === 'en' ? 'Ready to advance your skills?' : 'مستعد لتطوير مهاراتك؟'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {lang === 'en' ? 'Explore our programs and take the next step in your professional development.' : 'استكشف برامجنا واتخذ الخطوة التالية في تطويرك المهني.'}
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="accent" asChild><Link to="/programs">{lang === 'en' ? 'Explore Programs' : 'استكشف البرامج'}</Link></Button>
              <Button variant="outline" asChild><Link to="/blog">{t.blog.backToBlog}</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
