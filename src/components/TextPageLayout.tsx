import { cn } from "@/lib/utils";

interface TextPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TextPageLayout({ 
  title, 
  subtitle, 
  lastUpdated, 
  children, 
  className 
}: TextPageLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {lastUpdated && (
          <p className="text-sm text-muted-foreground italic">
            Last Updated: {lastUpdated}
          </p>
        )}
      </div>
      
      <div className={cn("prose prose-lg prose-gray mx-auto max-w-prose text-pretty", className)}>
        {children}
      </div>
    </div>
  );
}
