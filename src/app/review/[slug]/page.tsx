import { reviews } from "@/data/reviews";
// import SEO from "@/components/SEO"; // Removed in favor of Next.js Metadata
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Check, X, ExternalLink, ArrowLeft, Scale, Info, AlertTriangle, ThumbsUp, ThumbsDown, Users, Search, Microscope } from "lucide-react";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const review = reviews.find((r) => r.slug === params.slug);
  
  if (!review) {
    return { title: 'Review Not Found' };
  }

  return {
    title: `${review.title} Review | BrandDragon`,
    description: review.editorialVerdict,
    openGraph: {
      title: `${review.title} Review`,
      description: review.editorialVerdict,
      images: [typeof review.thumbnailUrl === 'string' ? review.thumbnailUrl : (review.thumbnailUrl as any).src],
    },
  };
}

// Generate Static Params for SSG
export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export default function ReviewDetail({ params }: Props) {
  const review = reviews.find((r) => r.slug === params.slug);

  if (!review) return notFound();

  return (
    <>
      {/* Breadcrumb / Back Link */}
      <div className="bg-secondary/30 border-b">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
           <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Reviews
           </Link>

          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
            
            {/* Main Header Info */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1">
                  {review.mainCategory}
                </Badge>
                <Badge variant="outline" className="text-muted-foreground px-3 py-1">
                  {review.subCategory}
                </Badge>
                {review.rating >= 4.8 && (
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200 px-3 py-1">
                    Editor's Choice
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
                {review.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-bold">
                  <Star className="w-4 h-4 fill-current mr-1.5" />
                  {review.rating.toFixed(1)}
                </div>
                <span>Updated {new Date(review.updatedAt).toLocaleDateString()}</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">By BrandDragon Editorial Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 relative">
          
          {/* Main Content Column */}
          <div className="space-y-12">
            
            {/* Editorial Verdict Block */}
            {review.editorialVerdict && (
              <section className="bg-card border rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" /> The Verdict
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic font-serif">
                  "{review.editorialVerdict}"
                </p>
              </section>
            )}

            {/* Buying Advice (Toxic/Sharp) */}
            {review.buyingAdvice && (
              <section className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <AlertTriangle className="w-5 h-5 text-amber-500" /> Should You Buy It?
                </h3>
                <div className="prose prose-sm max-w-none text-foreground/80 font-medium">
                  {review.buyingAdvice.split('Skip if').map((part, i) => {
                    if (i === 0) return <p key={i} className="mb-2"><span className="text-emerald-600 font-bold uppercase mr-2"><ThumbsUp className="w-4 h-4 inline mb-1"/> {part.replace('Buy if', 'Buy if')}</span></p>;
                    return <p key={i} className="mt-4"><span className="text-rose-600 font-bold uppercase mr-2"><ThumbsDown className="w-4 h-4 inline mb-1"/> Skip if</span>{part}</p>;
                  })}
                </div>
              </section>
            )}

            {/* Critical Deep Dive */}
            {review.toxicDeepDive && (
              <section>
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2 border-b pb-4">
                  <Microscope className="w-6 h-6 text-primary" /> Critical Analysis
                </h3>
                <div className="prose prose-lg prose-gray max-w-none">
                  <p className="lead">{review.toxicDeepDive}</p>
                </div>
              </section>
            )}

            {/* Target Audience */}
            {review.targetAudience && review.targetAudience.length > 0 && (
              <section className="bg-secondary/20 rounded-xl p-8 border border-secondary">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" /> Who is this for?
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {review.targetAudience.map((persona, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-background p-4 rounded-lg border shadow-sm">
                      <Search className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                      <span className="text-sm font-medium">{persona.replace(/^- /, '')}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Specs Table */}
            {review.specs && Object.keys(review.specs).length > 0 && (
              <section>
                 <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-muted-foreground text-sm">Tech Specs</h3>
                 <div className="grid sm:grid-cols-2 gap-4">
                   {Object.entries(review.specs).map(([key, value]) => (
                     <div key={key} className="flex justify-between items-center p-4 bg-secondary/20 rounded-lg border">
                       <span className="font-medium text-muted-foreground">{key}</span>
                       <span className="font-bold text-foreground text-right">{value}</span>
                     </div>
                   ))}
                 </div>
              </section>
            )}

            {/* Pros & Cons */}
            {(review.pros?.length > 0 || review.cons?.length > 0) && (
              <section className="grid md:grid-cols-2 gap-6">
                {review.pros?.length > 0 && (
                  <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 rounded-xl p-6">
                    <h3 className="text-emerald-700 dark:text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5" /> What We Like
                    </h3>
                    <ul className="space-y-3">
                      {review.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {review.cons?.length > 0 && (
                  <div className="bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900 rounded-xl p-6">
                    <h3 className="text-rose-700 dark:text-rose-400 font-bold mb-4 flex items-center gap-2">
                      <X className="w-5 h-5" /> Room for Improvement
                    </h3>
                    <ul className="space-y-3">
                      {review.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                          <X className="w-4 h-4 text-rose-600 mt-1 shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            <Separator />

            {/* Deep Dive Content */}
            <article className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-headings:font-bold prose-img:rounded-xl prose-img:shadow-md">
              {review.contentSections.map((section, idx) => (
                <div key={idx}>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                  {section.image && (
                    <figure>
                      {/* Using regular img tag for content images as they might be dynamic/external or not optimized yet */}
                      <img src={section.image} alt={section.heading} />
                    </figure>
                  )}
                </div>
              ))}
            </article>

            {/* Disclaimer */}
            <div className="bg-muted/50 p-6 rounded-lg text-sm text-muted-foreground flex gap-4 items-start">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <p>
                <strong>Independent Advice:</strong> We purchase our own products for testing. 
                We never accept payment for positive reviews. 
                <Link href="/disclosure" className="underline hover:text-foreground">Read our full ethics statement.</Link>
              </p>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <Card className="p-6 shadow-xl border-border overflow-hidden">
                <div className="aspect-square bg-white rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-secondary relative group">
                   <Image 
                     src={review.thumbnailUrl} 
                     alt={review.title}
                     fill
                     className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-1">
                      {review.rating.toFixed(1)}<span className="text-lg text-muted-foreground font-normal">/5</span>
                    </div>
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={cn("w-4 h-4", star <= Math.round(review.rating) ? "fill-primary text-primary" : "text-muted-foreground/30")} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-foreground">{review.price}</div>
                    <Button size="lg" className="w-full text-lg font-semibold h-12 shadow-primary/20 shadow-lg" asChild>
                      <a href={review.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Check Price <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Secure transaction via Official Retailer
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick Summary Card */}
              {review.specs && (
                <Card className="p-6 bg-secondary/30 border-none">
                   <h4 className="font-bold mb-3 text-sm uppercase">At a Glance</h4>
                   <ul className="space-y-2 text-sm">
                     {Object.entries(review.specs).slice(0, 3).map(([k, v]) => (
                       <li key={k} className="flex justify-between">
                         <span className="text-muted-foreground">{k}:</span>
                         <span className="font-medium">{v}</span>
                       </li>
                     ))}
                   </ul>
                </Card>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t p-4 z-40 shadow-2xl safe-area-bottom">
        <div className="container mx-auto max-w-lg flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="font-bold truncate text-sm">{review.title}</div>
            <div className="text-xs text-muted-foreground font-medium">{review.price} • {review.rating}/5</div>
          </div>
          <Button size="lg" className="shadow-lg" asChild>
            <a href={review.affiliateLink} target="_blank" rel="noopener noreferrer">
              Check Price
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
