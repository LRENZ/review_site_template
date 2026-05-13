import { reviews } from "@/data/reviews";
import { collections } from "@/data/collections";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Presentation, Shirt, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

// Feature Selection
const mainFeature = reviews.find(r => r.slug === 'genspark') || reviews[0];
const subFeatures = [
  reviews.find(r => r.slug === 'nike-pegasus-40'),
  reviews.find(r => r.slug === 'ag1-athletic-greens'),
  reviews.find(r => r.slug === 'dyson-v15-detect')
].filter(Boolean);

const presentationToolComparisons = [
  {
    name: "Genspark",
    label: "AI workspace",
    rating: "4.7/5",
    strength: "Creates slides, docs, research, calls, and workflow outputs from one workspace.",
    fit: "Best when your PPT is part of a broader finished deliverable.",
    href: "/review/genspark",
    cta: "Read Review",
    featured: true,
  },
  {
    name: "Gamma",
    label: "PPT generator",
    rating: "Deck-first",
    strength: "Turns prompts into polished, page-style presentations quickly.",
    fit: "Best when you mainly need a fast visual deck draft.",
    cta: "Fast Decks",
  },
  {
    name: "Tome",
    label: "Story deck tool",
    rating: "Narrative-first",
    strength: "Builds story-led decks for pitches, sales narratives, and explainers.",
    fit: "Best when structure and storytelling matter most.",
    cta: "Story Decks",
  },
  {
    name: "Beautiful.ai",
    label: "Smart slides",
    rating: "Design-first",
    strength: "Uses smart templates and layout rules to keep slides polished.",
    fit: "Best when brand-safe slide design is the priority.",
    cta: "Polished Slides",
  },
];

const recentReviews = reviews.slice(8, 16); 

type PresentationToolComparison = (typeof presentationToolComparisons)[number];

function PresentationToolCard({ tool }: { tool: PresentationToolComparison }) {
  const cardClassName = `group flex min-h-[280px] flex-col rounded-xl border p-5 transition-all ${
    tool.featured
      ? "border-lime-300/45 bg-lime-300/10 shadow-2xl shadow-lime-950/20 hover:-translate-y-1 hover:bg-lime-300/15"
      : "border-white/10 bg-white/5 hover:bg-white/10"
  }`;

  const content = (
    <>
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-blue-200">
          {tool.label}
        </span>
        <span className="text-xs font-bold text-white/58">{tool.rating}</span>
      </div>
      <h4 className="text-2xl font-serif font-bold leading-tight text-white">
        {tool.name}
      </h4>
      <p className="mt-4 text-sm leading-6 text-white/72">{tool.strength}</p>
      <p className="mt-3 text-sm leading-6 text-white/50">{tool.fit}</p>
      <div className="mt-auto pt-6">
        <div
          className={`flex h-10 items-center justify-center gap-2 rounded-full px-4 text-sm font-bold ${
            tool.featured
              ? "bg-lime-300 text-[#07111f] group-hover:bg-lime-200"
              : "border border-white/15 text-white/70"
          }`}
        >
          {tool.cta}
          {tool.featured && <ArrowRight className="w-4 h-4" />}
        </div>
      </div>
    </>
  );

  if (tool.href) {
    return (
      <Link href={tool.href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}

export default function Home() {
  return (
    <>
      {/* Editorial Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-foreground leading-[0.9]">
              The Brand<span className="text-primary italic">Dragon.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-serif max-w-2xl mx-auto">
              Real reviews for real life. We test the gear and tools that power the modern professional.
            </p>
          </div>

          {/* Main Feature Card */}
          <div className="group relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl cursor-pointer">
            <Link href={`/review/${mainFeature.slug}`} className="block w-full h-full">
                <Image
                  src={mainFeature.thumbnailUrl} 
                  alt={mainFeature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl text-white">
                  <Badge className="mb-4 bg-black/50 text-white backdrop-blur border-none hover:bg-white/30">
                    Featured AI Review
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                    {mainFeature.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 line-clamp-2 mb-6 font-medium">
                    {mainFeature.editorialVerdict}
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 border-none">
                    Read Full Review
                  </Button>
                </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 2025 Collections Section (Magazine Covers) */}
      <section className="py-20 border-b border-border/50 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold uppercase tracking-wider">2025 Curated Collections</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map(col => (
              <Link key={col.id} href={`/collection/${col.slug}`} className="group relative overflow-hidden rounded-lg aspect-[3/4] block shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <Image 
                    src={col.heroImage} 
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="mb-4 h-px w-12 bg-white/50 group-hover:w-full transition-all duration-500" />
                    <h4 className="font-serif font-bold text-3xl text-white mb-3 leading-none group-hover:text-primary-foreground transition-colors">
                      {col.title.split(":")[0]}
                    </h4>
                    <p className="text-sm text-white/70 line-clamp-2 font-medium tracking-wide uppercase">
                      {col.title.split(":")[1] || "Essential Guide"}
                    </p>
                    <div className="mt-6 flex items-center text-white/50 text-xs font-bold uppercase tracking-widest gap-2 group-hover:text-white transition-colors">
                      View Collection <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Market Sub-Features */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-2 mb-8">
            <Shirt className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold uppercase tracking-wider">Gear & Style</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {subFeatures.map((review: any) => (
              <Link key={review.id} href={`/review/${review.slug}`} className="group block space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm border border-border/50 relative">
                    <Image 
                      src={review.thumbnailUrl} 
                      alt={review.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                      ★ {review.rating.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary uppercase mb-1">{review.subCategory}</div>
                    <h4 className="text-xl font-serif font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                      {review.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                      {review.editorialVerdict}
                    </p>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation Tool Comparison */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2 text-blue-400">
                <Presentation className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider">AI Presentation Tools</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Genspark vs. PPT Generators</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
                Compare Genspark with Gamma-style tools built for AI-generated decks, polished slides, and faster presentation drafts.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex bg-lime-300 text-[#07111f] border-lime-300 hover:bg-lime-200 hover:text-[#07111f]" asChild>
              <Link href="/review/genspark">
                Compare Genspark
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {presentationToolComparisons.map((tool) => (
              <PresentationToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* "Quick Hits" List */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
           <h3 className="text-2xl font-serif font-bold mb-8 border-b pb-4">More Reviews</h3>
           <div className="space-y-8">
             {recentReviews.map((review: any) => (
               <div key={review.id} className="flex gap-4 group items-start">
                  <div className="w-24 h-24 md:w-32 md:h-24 shrink-0 rounded-lg overflow-hidden bg-secondary relative">
                    <Image src={review.thumbnailUrl} alt={review.title} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span className="font-bold text-primary uppercase">{review.mainCategory}</span>
                      <span>•</span>
                      <span>{review.subCategory}</span>
                    </div>
                    <Link href={`/review/${review.slug}`} className="text-lg font-bold font-serif hover:underline decoration-2 underline-offset-2 decoration-primary block mb-1">
                        {review.title}
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {review.editorialVerdict || "A comprehensive look at one of the most popular options in the category. See why we rated it highly."}
                    </p>
                  </div>
               </div>
             ))}
           </div>
           
           <div className="mt-12 text-center">
             <Button variant="outline" size="lg" asChild>
               <Link href="/category/market">Browse Full Archive</Link>
             </Button>
           </div>
        </div>
      </section>
    </>
  );
}
