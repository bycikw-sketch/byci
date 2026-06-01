import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { lang, setLang, t, isRTL } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.programs, path: '/programs' },
    { label: t.nav.certifications, path: '/certifications' },
    { label: t.nav.corporate, path: '/corporate' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="BYCI Logo" className="h-10 sm:h-12 w-auto object-contain transform scale-[1.75] origin-left ml-6" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'text-accent'
                  : 'text-foreground/65 hover:text-foreground'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center bg-muted rounded-full p-0.5">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'en' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'ar' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="التبديل إلى العربية"
            >
              AR
            </button>
          </div>

          <Button variant="accent" size="sm" className="hidden sm:inline-flex shadow-sm" asChild>
            <Link to="/enrollment">{t.nav.login}</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? 'right' : 'left'} className="w-72">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="mb-4 inline-block ml-6">
                  <img src="/logo.png" alt="BYCI Logo" className="h-12 w-auto object-contain transform scale-[1.75] origin-left" />
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button variant="accent" className="mt-4" asChild>
                  <Link to="/enrollment" onClick={() => setOpen(false)}>{t.nav.login}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
