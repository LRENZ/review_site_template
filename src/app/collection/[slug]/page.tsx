import Link from "next/link";
import { getCollection } from "@/data/collections";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Star, ArrowLeft, Quote, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const collection = getCollection(params.slug);
  
  if (!collection) {
    return { title: 'Collection Not Found' };
  }

  return {
    title: `${collection.title} | BrandDragon Collections`,
    description: collection.description,
    openGraph: {
      title: collection.title,
      description: collection.description,
      images: [typeof collection.heroImage === 'string' ? collection.heroImage : (collection.heroImage as any).src],
    },
  };
}

export default function Collection({ params }: Props) {
  const collection = getCollection(params.slug);

  if (!collection) return notFound();

  return (
    <>
      {/* Editorial Hero */}
      <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image 
          src={collection.heroImage} 
          alt={collection.title}
          fill
          className="object-cover animate-in fade-in zoom-in duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24">
          <div className="container mx-auto max-w-6xl">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-8 transition-colors uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm bg-black/10">
                <ArrowLeft className="w-4 h-4 mr-2" /> BrandDragon Collections
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[0.9] tracking-tighter">
              {collection.title}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-serif leading-relaxed border-l-4 border-primary pl-6">
              {collection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Magazine Layout Content */}
      <div className="container mx-auto px-4 py-24 max-w-6xl space-y-32">
        {collection.items.map((item, index) => {
          const review = reviews.find(r => r.slug === item.reviewSlug);
          if (!review) return null;
          
          const isEven = index % 2 === 0;

          return (
            <div key={item.reviewSlug} className={cn(
              "flex flex-col gap-12 lg:gap-24 items-center group",
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            )}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <Link href={`/review/${review.slug}`} className="block overflow-hidden rounded-sm relative aspect-[4/5] shadow-2xl cursor-pointer">
                    <Image 
                      src={review.thumbnailUrl} 
                      alt={review.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute bottom-6 right-6 bg-white text-black px-4 py-2 font-bold font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      Read Full Review
                    </div>
                </Link>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-serif font-bold text-primary/20 select-none">
                      0{index + 1}
                    </span>
                    <div className="h-px bg-border flex-1" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                    <Link href={`/review/${review.slug}`} className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4">
                        {review.title}
                    </Link>
                  </h2>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest font-bold">
                    <span>{review.price}</span>
                    <span>•</span>
                    <span>{review.subCategory}</span>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-6 -left-6 w-12 h-12 text-primary/10 -z-10" />
                  <p className="text-xl md:text-2xl leading-relaxed font-serif text-muted-foreground italic">
                    "{item.editorialComment}"
                  </p>
                </div>

                <Button size="lg" variant="outline" className="group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-wide text-xs h-12 px-8" asChild>
                  <Link href={`/review/${review.slug}`}>
                    Full Review <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Link>
                </Button>
              </div>

            </div>
          );
        })}
      </div>
    </>
  );
}
