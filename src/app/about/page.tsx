import Link from "next/link";
import TextPageLayout from "@/components/TextPageLayout";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import aboutTeam from "@/assets/about_team.jpg"; 
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BrandDragon",
  description: "BrandDragon is a team of obsessively curious editors dedicated to finding the tools and gear that actually improve your life.",
};

export default function About() {
  return (
    <>
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image 
          src={aboutTeam} 
          alt="BrandDragon Team Office" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
            About BrandDragon
          </h1>
        </div>
      </div>

      <TextPageLayout title="Our Mission" className="mt-[-80px] relative z-10 bg-background p-8 rounded-t-3xl shadow-xl">
        <p className="lead">
          In a world overflowing with options, making the right choice can be paralyzing. 
          BrandDragon exists to cut through the noise. We are a team of obsessively curious editors, 
          testers, and tech enthusiasts dedicated to finding the tools and gear that actually improve your life.
        </p>
        
        <Separator className="my-12" />
        
        <h2>Our Story</h2>
        <p>
          Founded in 2024, BrandDragon started with a simple spreadsheet comparing coffee makers. 
          What began as a personal quest for the perfect brew turned into a comprehensive database of 
          lifestyle and digital product reviews. Today, we bridge the gap between physical craftsmanship 
          and digital efficiency, helping modern professionals optimize every aspect of their day.
        </p>

        <h2>How We Test Products</h2>
        <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
          <Card className="p-6 bg-secondary/20 border-none">
            <h3 className="font-serif font-bold text-lg mb-2 text-primary">1. Real Usage</h3>
            <p className="text-sm text-muted-foreground">We buy products at retail and live with them for weeks, not just minutes.</p>
          </Card>
          <Card className="p-6 bg-secondary/20 border-none">
            <h3 className="font-serif font-bold text-lg mb-2 text-primary">2. Benchmarking</h3>
            <p className="text-sm text-muted-foreground">We measure performance against top competitors in standardized tests.</p>
          </Card>
          <Card className="p-6 bg-secondary/20 border-none">
            <h3 className="font-serif font-bold text-lg mb-2 text-primary">3. Long-term Value</h3>
            <p className="text-sm text-muted-foreground">We assess durability, support, and resale value over time.</p>
          </Card>
        </div>

        <h2>Editorial Standards</h2>
        <p>
          Our reviews are independent. While we may earn commissions from affiliate links, 
          our editorial team's decisions are never influenced by our business team or advertisers. 
          If a product fails our expectations, we tell you—plain and simple.
        </p>

        <div className="mt-16 text-center">
          <div className="relative w-32 h-32 mx-auto mb-4 opacity-80">
             {/* Using standard img for trust seal if it's png/transparent to avoid complexity, or Image if imported */}
             <img src="/assets/trust_seal.jpg" alt="Verified" className="w-full h-full object-contain" />
          </div>
          <p className="font-serif italic text-lg text-muted-foreground">
            — The BrandDragon Editorial Team
          </p>
        </div>
      </TextPageLayout>
    </>
  );
}
