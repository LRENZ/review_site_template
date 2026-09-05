import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChefHat,
  Check,
  ChevronRight,
  CircleHelp,
  CookingPot,
  Flame,
  Gauge,
  HandPlatter,
  Layers3,
  MoveRight,
  Palette,
  ShieldCheck,
  Sparkles,
  Utensils,
  Weight,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductConversionPopup, {
  type ProductConversionPopupConfig,
} from "@/components/ProductConversionPopup";
import { withBasePath } from "@/lib/site";

const affiliateLink =
  "https://www.linkhaitao.com/index.php?mod=lhdeal&track=0ff1BxKKZRQd_aBBd1sinqcY5oUlDSj56nRPFKyp0I_aTXU8LQAy5EWutW4EiJdGJdlkbGGUQN5ZMn7WzpqqIxRjx4z335ArdnfWjcpA_c_c&new=http%3A%2F%2Fwww.lecreuset.com";

const popupConfig: ProductConversionPopupConfig = {
  productId: "le-creuset",
  productName: "Le Creuset",
  rating: "4.7/5 cookware verdict",
  headline: "Before you go: choose the material before you choose the color.",
  description:
    "Le Creuset spans enameled cast iron, stoneware, stainless steel, non-stick, and enamel-on-steel. The best first piece depends on how you actually cook.",
  bullets: [
    "Start with a Dutch oven or braiser for slow cooking and one-pot meals",
    "Choose stoneware for baking and serving, not stovetop use",
    "Compare size, weight, care, warranty, and current colors before ordering",
  ],
  ctaLabel: "Explore Le Creuset",
  ctaHref: affiliateLink,
  storageKey: "product-popup:le-creuset",
  banner: {
    eyebrow: "Le Creuset buying guide",
    headline: "Pick the right material, shape, and size first",
    description: "Then compare current colors, availability, and offers.",
  },
};

export const metadata: Metadata = {
  title: "Le Creuset Review 2026: Is the Cookware Worth It? | BrandDragon",
  description:
    "A practical Le Creuset review comparing enameled cast iron, Dutch ovens, braisers, stoneware, stainless steel, non-stick cookware, sizes, care, and value.",
  alternates: { canonical: withBasePath("/review/le-creuset") },
  openGraph: {
    title: "Le Creuset Review: Buy the Right Piece, Not Just the Prettiest Color",
    description:
      "See which Le Creuset material and shape fits your cooking, plus the trade-offs to check before buying.",
    images: [withBasePath("/le-creuset-hero.jpg")],
  },
};

const proofPoints = [
  { icon: Flame, value: "Since 1925", label: "colorful cookware heritage" },
  { icon: CookingPot, value: "5+ materials", label: "different cooking jobs" },
  { icon: Palette, value: "Many colors", label: "built to cook and serve" },
];

const materialRows = [
  {
    material: "Enameled cast iron",
    best: "Dutch ovens, braising, stews, bread, roasting, and table service",
    strength: "Excellent heat retention, colorful enamel, and no seasoning routine",
    watch: "Heavy, slower to respond, and premium-priced",
  },
  {
    material: "Stoneware",
    best: "Casseroles, gratins, pies, baking, reheating, and serving",
    strength: "Freezer-to-oven versatility with easy-clean glazed surfaces",
    watch: "Not for stovetop burners; avoid sudden thermal shocks",
  },
  {
    material: "Tri-ply stainless steel",
    best: "Searing, sauces, boiling, sautéing, and everyday stovetop control",
    strength: "Faster response and an aluminum core that distributes heat",
    watch: "Needs heat and oil technique; food can stick",
  },
  {
    material: "Non-stick cookware",
    best: "Eggs, fish, pancakes, and other delicate foods",
    strength: "Low-friction cooking and simpler cleanup",
    watch: "Coatings require gentler utensils and will not age like cast iron",
  },
  {
    material: "Enamel on steel",
    best: "Kettles, stockpots, and fast-heating tasks",
    strength: "Lighter than cast iron and quick to heat",
    watch: "Less heat retention and a different durability profile",
  },
];

const comparisons = [
  {
    label: "Everyday role",
    lecreuset: "Premium, colorful cookware designed to move from stove or oven to table",
    raw: "Durable, affordable workhorse cooking with a seasoning routine",
    stainless: "Responsive all-purpose stovetop cooking and high-heat searing",
    ceramic: "Lighter, easy-release cooking with a simpler learning curve",
  },
  {
    label: "Heat behavior",
    lecreuset: "Slow, steady heat retention in enameled cast iron",
    raw: "Strong retention; benefits from gradual preheating",
    stainless: "Faster response and easier temperature changes",
    ceramic: "Varies by core; generally faster and lighter",
  },
  {
    label: "Maintenance",
    lecreuset: "No seasoning, but enamel needs considerate handling",
    raw: "Seasoning and drying matter",
    stainless: "Tolerant surface, with scrubbing for browned residue",
    ceramic: "Gentle utensils and moderate heat protect the coating",
  },
  {
    label: "Best reason to choose",
    lecreuset: "Long-term function plus color and table presentation",
    raw: "Maximum utility per dollar",
    stainless: "Control, versatility, and lighter handling",
    ceramic: "Convenient release for lower-stress everyday cooking",
  },
  {
    label: "Main trade-off",
    lecreuset: "Price and weight",
    raw: "Reactive surface and ongoing care",
    stainless: "Technique-sensitive sticking",
    ceramic: "Coating longevity",
  },
];

const faqs = [
  {
    question: "Is Le Creuset worth the price?",
    answer:
      "It can be when you choose a piece you will use often, value enamel and table presentation, and are comfortable with the weight. It is harder to justify as a decorative collection or when a lower-cost cast-iron or stainless option already fits your cooking.",
  },
  {
    question: "What is the best first Le Creuset piece?",
    answer:
      "For many households, a round Dutch oven is the most versatile first piece for soups, stews, braises, bread, roasting, and one-pot meals. A braiser may be better if you cook wider, shallower meals and want easier stirring and browning.",
  },
  {
    question: "Does enameled cast iron need seasoning?",
    answer:
      "The enameled surface does not need the seasoning routine used for bare cast iron. Use gradual heat, avoid unnecessary overheating, and follow the current care instructions for the exact product.",
  },
  {
    question: "Can Le Creuset stoneware go on the stovetop?",
    answer:
      "No. Stoneware is intended for appropriate oven, microwave, refrigerator, freezer, and serving uses, depending on the item. It should not be placed on a direct stovetop burner.",
  },
  {
    question: "What should I check before ordering?",
    answer:
      "Check material, capacity, dimensions, empty weight, cooktop compatibility, oven limits, knob limits, care instructions, current warranty terms, color availability, returns, and final price.",
  },
];

function ShopButton({ label = "Shop Le Creuset", className }: { label?: string; className?: string }) {
  return (
    <Button size="lg" className={className} asChild>
      <a href={affiliateLink} rel="sponsored">
        {label}
        <ArrowRight data-icon="inline-end" />
      </a>
    </Button>
  );
}

export default function LeCreusetReviewPage() {
  return (
    <>
      <main className="bg-[#f5f0e7] pb-20 text-[#1e2926] lg:pb-0">
        <section className="relative overflow-hidden bg-[#1b2b27] text-white">
          <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
            <Image src={withBasePath("/le-creuset-hero.jpg")} alt="Flame Le Creuset Dutch oven in a bright home kitchen" fill priority sizes="58vw" className="object-cover" />
          </div>
          <div className="container relative mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Link href="/category/market" className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white">
              <ChevronRight />
              BrandDragon Kitchen Review
            </Link>
            <div className="flex max-w-xl flex-col justify-center gap-5 py-6 sm:min-h-[640px] sm:gap-6 sm:py-10 lg:min-h-[670px] lg:max-w-[470px] lg:py-16 xl:max-w-[490px]">
              <div className="flex flex-wrap gap-2">
                <Badge className="border-[#ff7952]/45 bg-[#ff5a2d]/20 text-[#ffd9cd] hover:bg-[#ff5a2d]/20">Le Creuset review</Badge>
                <Badge className="border-[#efd660]/45 bg-[#efd660]/15 text-[#fff0a4] hover:bg-[#efd660]/15">Best for buy-it-once cookware</Badge>
              </div>
              <h1 className="text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-[60px]">Le Creuset: buy the right piece, not just the prettiest color.</h1>
              <p className="max-w-lg text-base leading-7 text-white/75 sm:text-lg sm:leading-8">The famous Dutch oven earns attention for heat retention, durable enamel, and table-ready color. The smarter decision is choosing the material, shape, and size that match your real cooking.</p>
              <div className="relative aspect-[5/3] overflow-hidden rounded-lg lg:hidden">
                <Image src={withBasePath("/le-creuset-hero.jpg")} alt="Orange Le Creuset Dutch oven ready for meal preparation" fill priority sizes="100vw" className="object-cover" />
              </div>
              <div className="hidden flex-col gap-3 sm:flex sm:flex-row">
                <ShopButton className="h-14 bg-[#ff6537] px-7 font-bold text-white hover:bg-[#e74f24]" />
                <Button size="lg" variant="outline" className="h-14 border-white/25 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href="#materials">Compare materials <MoveRight data-icon="inline-end" /></a>
                </Button>
              </div>
              <p className="hidden text-xs leading-5 text-white/55 sm:block">Check current sizes, colors, availability, shipping, returns, and warranty terms before ordering.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d8cfc2] bg-white">
          <div className="container mx-auto grid max-w-6xl sm:grid-cols-3">
            {proofPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4 border-b border-[#d8cfc2] px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <Icon className="size-7 shrink-0 text-[#e44f28]" /><div><p className="text-2xl font-bold">{value}</p><p className="text-sm text-[#69736f]">{label}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[.88fr_1.12fr] lg:gap-16">
            <div>
              <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-[#c9401c]"><Sparkles /> BrandDragon verdict</p>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">Excellent at slow, steady cooking. Expensive when bought without a plan.</h2>
              <p className="mt-5 text-lg leading-8 text-[#626d68]">Le Creuset makes the most sense as a carefully chosen workhorse. Enameled cast iron can braise, simmer, roast, bake, and serve beautifully, but the premium is easier to defend when one useful piece replaces several impulse purchases.</p>
              <div className="mt-8 grid gap-5">
                {[
                  [Flame, "Steady heat", "Cast iron holds heat well for braises, stews, bread, and slow cooking."],
                  [Palette, "Cook-to-table color", "The enamel finish turns a heavy kitchen tool into presentable serveware."],
                  [ShieldCheck, "Simpler than bare iron", "The enamel needs no seasoning, though it still rewards careful heating and handling."],
                ].map(([Icon, title, body]) => {
                  const FeatureIcon = Icon as typeof Flame;
                  return <div key={title as string} className="flex gap-4"><FeatureIcon className="mt-1 shrink-0 text-[#0d7a70]" /><div><h3 className="font-bold">{title as string}</h3><p className="mt-1 leading-7 text-[#69736f]">{body as string}</p></div></div>;
                })}
              </div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-[#ede2d3]">
              <Image src={withBasePath("/le-creuset-colors.jpg")} alt="Colorful Le Creuset enameled cast iron cookware collection" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[#b92f24] py-16 text-white md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-[#f0d3bf] sm:min-h-[480px]">
              <Image src={withBasePath("/le-creuset-dutch-oven.png")} alt="Flame Le Creuset Signature Round Dutch Oven" fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-contain p-4" />
            </div>
            <div className="flex flex-col justify-center">
              <Badge className="mb-5 w-fit border-white/30 bg-white/12 text-white hover:bg-white/12">Best first piece for many kitchens</Badge>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">Start with the meal, then choose the shape.</h2>
              <p className="mt-5 text-lg leading-8 text-white/78">A round Dutch oven is the broadest all-rounder. Choose a braiser for shallow browning and one-pan dinners, a skillet for searing, or a rectangular stoneware dish when baking is the real priority.</p>
              <div className="mt-7 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                {["Dutch oven: soups and braises", "Braiser: wide one-pan meals", "Skillet: searing and roasting", "Stoneware: baking and serving"].map((item) => <div key={item} className="flex items-center gap-2"><Check className="text-[#ffe16b]" />{item}</div>)}
              </div>
              <ShopButton label="Compare current cookware" className="mt-8 h-14 w-fit bg-[#ffe16b] px-7 font-bold text-[#352600] hover:bg-[#ffea92]" />
            </div>
          </div>
        </section>

        <section id="materials" className="scroll-mt-24 bg-white py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 max-w-3xl"><p className="text-sm font-bold uppercase text-[#c9401c]">Material guide</p><h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">The logo stays the same. The cooking behavior does not.</h2><p className="mt-5 text-lg leading-8 text-[#69736f]">Le Creuset sells several cookware systems. Match the material to the job before comparing colors or sets.</p></div>
            <div className="overflow-x-auto rounded-lg border border-[#d8cfc2]">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                <thead className="bg-[#1b2b27] text-white"><tr><th className="p-5">Material</th><th className="p-5">Best for</th><th className="p-5">Why choose it</th><th className="p-5">Watch for</th></tr></thead>
                <tbody>{materialRows.map((row, index) => <tr key={row.material} className="border-t border-[#e5ddd2] align-top"><th className="p-5 font-bold text-[#9f321b]">{row.material}</th><td className="p-5">{row.best}</td><td className={index === 0 ? "bg-[#fff2e7] p-5 font-semibold" : "p-5 text-[#69736f]"}>{row.strength}</td><td className="p-5 text-[#69736f]">{row.watch}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center"><p className="text-sm font-bold uppercase text-[#c9401c]">Beyond cast iron</p><h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Two useful collections with very different jobs.</h2></div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-lg border border-[#d8cfc2] bg-white"><div className="relative aspect-[8/5]"><Image src={withBasePath("/le-creuset-stoneware.jpg")} alt="Red Le Creuset stoneware baking dishes" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="p-6"><HandPlatter className="text-[#c9401c]" /><h3 className="mt-4 text-2xl font-bold">Stoneware for oven-to-table baking</h3><p className="mt-3 leading-7 text-[#69736f]">Choose it for casseroles, gratins, pies, roasting, and serving. It is colorful and easy to clean, but it is not a stovetop substitute for enameled cast iron.</p></div></div>
              <div className="overflow-hidden rounded-lg border border-[#d8cfc2] bg-white"><div className="relative aspect-[8/5]"><Image src={withBasePath("/le-creuset-stainless.jpg")} alt="Le Creuset tri-ply stainless steel cookware set" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="p-6"><Gauge className="text-[#0d7a70]" /><h3 className="mt-4 text-2xl font-bold">Stainless steel for faster control</h3><p className="mt-3 leading-7 text-[#69736f]">Choose it when you value quicker temperature response, lighter handling, browning, sauces, and an everyday stovetop set more than colorful heat retention.</p></div></div>
            </div>
          </div>
        </section>

        <section id="comparison" className="bg-[#1b2b27] py-16 text-white md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 max-w-3xl"><p className="text-sm font-bold uppercase text-[#ff8c68]">Category comparison</p><h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Le Creuset is a choice, not the default answer.</h2><p className="mt-5 text-lg leading-8 text-white/68">Compare it with the cookware you would realistically buy instead. The strongest alternative depends on whether you value price, response, easy release, or table presentation.</p></div>
            <div className="overflow-x-auto rounded-lg border border-white/15 bg-white text-[#1e2926]">
              <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                <thead className="bg-[#efe5d6]"><tr><th className="p-5">Compare</th><th className="bg-[#ffd9c8] p-5 text-[#9f321b]">Le Creuset cast iron</th><th className="p-5">Bare cast iron</th><th className="p-5">Stainless steel</th><th className="p-5">Ceramic non-stick</th></tr></thead>
                <tbody>{comparisons.map((row) => <tr key={row.label} className="border-t border-[#e5ddd2] align-top"><th className="p-5 font-bold">{row.label}</th><td className="bg-[#fff2e7] p-5 font-semibold">{row.lecreuset}</td><td className="p-5 text-[#69736f]">{row.raw}</td><td className="p-5 text-[#69736f]">{row.stainless}</td><td className="p-5 text-[#69736f]">{row.ceramic}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="border-t-4 border-[#0d7a70] bg-white p-7"><BadgeCheck className="text-[#0d7a70]" /><h3 className="mt-5 text-2xl font-bold">Choose it when</h3><p className="mt-3 leading-7 text-[#69736f]">You cook braises, stews, bread, roasts, or one-pot meals often and want cookware that also looks right on the table.</p></div>
              <div className="border-t-4 border-[#e44f28] bg-white p-7"><Weight className="text-[#e44f28]" /><h3 className="mt-5 text-2xl font-bold">Check first</h3><p className="mt-3 leading-7 text-[#69736f]">Lift a similar piece, measure storage, choose capacity by household, and read the exact care and warranty terms.</p></div>
              <div className="border-t-4 border-[#1b2b27] bg-white p-7"><X className="text-[#1b2b27]" /><h3 className="mt-5 text-2xl font-bold">Skip it when</h3><p className="mt-3 leading-7 text-[#69736f]">You need lightweight cookware, rapid temperature changes, the lowest cost, or an entire matching set more than one specialized piece.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[.7fr_1.3fr]">
            <div><CircleHelp className="size-9 text-[#c9401c]" /><h2 className="mt-5 text-4xl font-bold">Le Creuset FAQ</h2><p className="mt-4 leading-7 text-[#69736f]">The practical questions to answer before choosing a color.</p></div>
            <Accordion type="single" collapsible className="border-t border-[#d8cfc2]">
              {faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left text-lg font-bold">{faq.question}</AccordionTrigger><AccordionContent className="text-base leading-7 text-[#69736f]">{faq.answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </section>

        <section className="bg-[#ffd54f] py-16 text-[#282719] md:py-20">
          <div className="container mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center">
            <div className="max-w-2xl"><p className="flex items-center gap-2 text-sm font-bold uppercase"><ChefHat /> Final recommendation</p><h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Start with one piece you can name five meals for.</h2><p className="mt-4 max-w-xl leading-7 text-[#554f33]">Then choose the size, weight, material, and color. That is the shortest path from beautiful cookware to cookware you actually use.</p></div>
            <ShopButton label="View current Le Creuset" className="h-14 shrink-0 bg-[#1b2b27] px-7 font-bold text-white hover:bg-[#30443e]" />
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-white/95 p-3 shadow-2xl backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3"><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">Le Creuset cookware</p><p className="truncate text-xs text-muted-foreground">4.7/5 - Material-first buying guide</p></div><ShopButton label="Shop now" className="h-11 shrink-0 bg-[#e44f28] px-5 font-bold text-white hover:bg-[#c9401c]" /></div>
      </div>

      <ProductConversionPopup config={popupConfig} />
    </>
  );
}
