
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]",
        className
      )}
    >
      <div className="flex items-start space-x-4">
        <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
