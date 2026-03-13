import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
}

const TestimonialCard = ({ name, role, text }: TestimonialCardProps) => {
  return (
    <article className="bg-card rounded-lg border border-border p-6">
      <Quote className="h-6 w-6 text-accent mb-3" />
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{text}</p>
      <div>
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
