import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroTraining from '@/assets/hero-training.jpg';
import heroAi from '@/assets/hero-ai.jpg';

const images = [heroAi, heroTraining, heroTraining, heroAi];

export interface SlideType {
  headline: string;
  subheadline: string;
  cta: string;
  secondaryCta: string;
}

interface HeroCarouselProps {
  slides?: SlideType[];
}

const HeroCarousel = ({ slides: slidesProp }: HeroCarouselProps) => {
  const { t, isRTL } = useLanguage();
  const [current, setCurrent] = useState(0);
  const slides = slidesProp ?? t.hero.slides;

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (isRTL ? diff < 0 : diff > 0) next();
      else prev();
    }
  };

  return (
    <section
      className="relative overflow-hidden min-h-[610px] md:min-h-[640px] flex items-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero carousel"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.92] saturate-[0.95] transition-all duration-700"
        style={{ backgroundImage: `url(${images[current]})` }}
      />
      {/* Directional scrim keeps copy readable over detailed hero imagery. */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/20" />
      <div className="absolute inset-y-0 left-0 w-full md:w-[70%] bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/55 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div key={current} className="animate-slide-in max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            Career-focused training for GCC & India
          </div>
          <h1 className="max-w-2xl text-[2.85rem] md:text-5xl lg:text-6xl font-black text-white leading-[1.04] mb-5 drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]">
            {slides[current].headline}
          </h1>
          <p className="max-w-2xl text-xl font-semibold md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            {slides[current].subheadline}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Button variant="accent" size="xl" className="w-full sm:w-auto shadow-xl" asChild>
              <Link to="/programs">{slides[current].cta}</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border-white/30 text-white bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/60"
              asChild
            >
              <Link to="/programs">{slides[current].secondaryCta}</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border-accent/60 bg-accent/15 text-white hover:bg-accent hover:text-white hover:border-accent"
              asChild
            >
              <Link to="/free-ai-webinar">
                <CalendarDays className="h-4 w-4" />
                Free AI Webinar
              </Link>
            </Button>
          </div>

          <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
            {['500+ graduates', '95% pass rate', 'Free weekly AI webinar'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-white/90 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={prev}
          className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-accent' : 'w-2 bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
