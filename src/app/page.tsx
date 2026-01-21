import { reviews } from "@/data/reviews";
import { collections } from "@/data/collections";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Cpu, Shirt, Sparkles, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

// Feature Selection
const mainFeature = reviews.find(r => r.slug === 'patagonia-better-sweater') || reviews[0];
const subFeatures = [
  reviews.find(r => r.slug === 'nike-pegasus-40'),
  reviews.find(r => r.slug === 'ag1-athletic-greens'),
  reviews.find(r => r.slug === 'dyson-v15-detect')
].filter(Boolean);

const digitalFeatures = [
  reviews.find(r => r.slug === 'chatgpt-plus'),
  reviews.find(r => r.slug === 'notion-workspace'),
  reviews.find(r => r.slug === 'nordvpn'),
  reviews.find(r => r.slug === '1password')
].filter(Boolean);

const recentReviews = reviews.slice(8, 16); 

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
                    Review of the Week
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

      {/* Digital Section (Dark Theme Vibe) */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2 text-blue-400">
                <Cpu className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider">Digital Toolkit</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Software for Doers</h2>
            </div>
            <Button variant="outline" className="hidden md:flex bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/category/digital">View All Digital</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalFeatures.map((review: any) => (
              <Link key={review.id} href={`/review/${review.slug}`} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                  <div className="aspect-video relative">
                    <Image 
                      src={review.thumbnailUrl} 
                      alt={review.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-blue-300 font-medium mb-2">{review.subCategory}</div>
                    <h4 className="text-lg font-bold leading-tight mb-2 group-hover:text-blue-200 transition-colors">
                      {review.title}
                    </h4>
                    <div className="flex items-center text-xs text-white/50 gap-2">
                       <span>{review.rating}/5 Rating</span>
                       <span>•</span>
                       <span>{review.price}</span>
                    </div>
                  </div>
              </Link>
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
