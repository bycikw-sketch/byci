import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroTraining from '@/assets/hero-training.jpg';
import heroAi from '@/assets/hero-ai.jpg';

const images = [heroAi, heroTraining, heroTraining, heroAi];

const HeroCarousel = () => {
  const { t, isRTL } = useLanguage();
  const [current, setCurrent] = useState(0);
  const slides = t.hero.slides;

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch handling
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
      className="relative overflow-hidden bg-section-bg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero carousel"
    >
      <div className="container py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[400px] md:min-h-[450px]">
          {/* Text */}
          <div key={current} className="animate-slide-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
              {slides[current].headline}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {slides[current].subheadline}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/programs">{slides[current].cta}</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/programs">{slides[current].secondaryCta}</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img
              src={images[current]}
              alt="Professional training"
              className="rounded-lg object-cover w-full h-[380px] shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={prev}
          className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 text-foreground" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-accent' : 'w-2 bg-primary/20'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
