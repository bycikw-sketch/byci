import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const SplashScreen = () => {
  const { t, dismissSplash } = useLanguage();

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden">
      <div className="relative text-center px-6 max-w-lg">
        <img
          src="/logo.png"
          alt="BYCI Logo"
          className="h-32 md:h-48 w-auto object-contain mx-auto mb-8"
        />
        <p className="text-xl md:text-2xl font-bold text-primary mb-2">
          {t.splash.title}
        </p>
        <p className="text-muted-foreground mb-10 text-sm md:text-base">
          {t.splash.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="accent"
            size="lg"
            onClick={() => dismissSplash('en')}
            className="shadow-xl"
          >
            {t.splash.continueEn}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => dismissSplash('ar')}
            className="border-primary/30 text-primary bg-transparent hover:bg-primary/5 hover:text-primary"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t.splash.continueAr}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
