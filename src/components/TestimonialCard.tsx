import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
}

const TestimonialCard = ({ name, role, text }: TestimonialCardProps) => {
  return (
    <article className="relative bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 flex flex-col gap-4 overflow-hidden">
      {/* Decorative quote mark */}
      <span className="absolute top-3 end-4 text-8xl font-serif leading-none text-accent/8 select-none pointer-events-none">"</span>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Quote body */}
      <p className="text-sm text-foreground/80 leading-relaxed flex-1 relative z-10">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-border/60">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent/25 to-primary/15 flex items-center justify-center shrink-0 font-bold text-primary text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
