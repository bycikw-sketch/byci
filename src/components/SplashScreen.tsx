import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const SplashScreen = () => {
  const { t, dismissSplash } = useLanguage();

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center px-6 max-w-lg">
        <img src="/logo.png" alt="BYCI Logo" className="h-32 md:h-48 w-auto object-contain mx-auto mb-6" />
        <p className="text-xl md:text-2xl font-bold text-foreground mb-2 font-en">
          Build Your Career Institute
        </p>
        <p className="text-muted-foreground mb-10">
          Professional Development for the Modern Workforce
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="accent" size="lg" onClick={() => dismissSplash('en')}>
            Continue in English
          </Button>
          <Button variant="outline" size="lg" onClick={() => dismissSplash('ar')} className="font-ar" style={{ fontFamily: "'Cairo', sans-serif" }}>
            المتابعة باللغة العربية
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
