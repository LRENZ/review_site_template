import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProductConversionPopup, {
  type ProductConversionPopupConfig,
} from "@/components/ProductConversionPopup";
import { withBasePath } from "@/lib/site";

type IconCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

type ComparisonRow = {
  name: string;
  strength: string;
  fit: string;
  highlight?: boolean;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type ConversionReviewConfig = {
  categoryHref: string;
  categoryLabel: string;
  affiliateLink: string;
  ctaLabel: string;
  ctaMicrocopy: string;
  heroImage: string;
  heroImageAlt: string;
  heroTags: string[];
  heroTitle: string;
  heroDescription: string;
  heroTiles: string[];
  proofPoints: string[];
  ctaHighlights: string[];
  verdictEyebrow: string;
  verdictTitle: string;
  verdictBody: string;
  rating: string;
  ratingSummary: string;
  decisionRows: [string, string][];
  useCases: IconCard[];
  winsTitle: string;
  wins: string[];
  cautionsTitle: string;
  cautions: string[];
  ctaBandEyebrow: string;
  ctaBandTitle: string;
  ctaBandBody: string;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowBody: string;
  workflow: { title: string; body: string }[];
  audienceTitle: string;
  audienceBody: string;
  audienceCards: IconCard[];
  comparisonTitle: string;
  comparisonBody: string;
  comparisons: ComparisonRow[];
  faqTitle: string;
  faqBody: string;
  faqs: FaqItem[];
  finalEyebrow: string;
  finalTitle: string;
  finalBody: string;
  mobileTitle: string;
  mobileSubtitle: string;
  popup: ProductConversionPopupConfig;
};

type ConversionReviewPageProps = {
  config: ConversionReviewConfig;
};

export default function ConversionReviewPage({
  config,
}: ConversionReviewPageProps) {
  function CtaButton({ className }: { className?: string }) {
    return (
      <Button size="lg" className={className} asChild>
        <a href={config.affiliateLink} rel="sponsored">
          {config.ctaLabel}
          <ExternalLink data-icon="inline-end" />
        </a>
      </Button>
    );
  }

  function CtaProofStrip() {
    return (
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">
        {config.ctaHighlights.map((item) => (
          <span key={item} className="rounded-full border bg-background px-3 py-1">
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#070a18] text-white">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.02fr_.98fr] md:py-16">
          <div className="flex flex-col gap-6">
            <Link
              href={config.categoryHref}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/64 transition-colors hover:text-white"
            >
              <ChevronRight data-icon="inline-start" />
              {config.categoryLabel}
            </Link>

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="border-white/15 bg-white/10 text-white hover:bg-white/10">
                  2026 Review
                </Badge>
                {config.heroTags.map((tag) => (
                  <Badge
                    key={tag}
                    className="border-lime-300/30 bg-lime-300/15 text-lime-100 hover:bg-lime-300/15"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[.98] tracking-tight text-white md:text-6xl">
                {config.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                {config.heroDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaButton className="h-14 rounded-full bg-lime-300 px-7 text-base font-bold text-[#07111f] shadow-2xl shadow-lime-300/20 hover:bg-lime-200" />
              <a
                href="#verdict"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/16 px-7 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Read the verdict
                <ArrowRight data-icon="inline-end" />
              </a>
            </div>
            <p className="text-sm font-medium text-lime-100/82">
              {config.ctaMicrocopy}
            </p>

            <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-3">
              {config.proofPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <BadgeCheck className="mt-0.5 shrink-0 text-lime-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[48px] bg-[radial-gradient(circle_at_35%_25%,rgba(132,204,22,.32),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,.22),transparent_34%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/8 p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <Image
                src={withBasePath(config.heroImage)}
                alt={config.heroImageAlt}
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] w-full rounded-[24px] object-cover"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {config.heroTiles.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm font-bold text-white/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="verdict" className="bg-background py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-primary">
                <Sparkles className="shrink-0" />
                <span className="text-sm font-bold uppercase tracking-[.18em]">
                  {config.verdictEyebrow}
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                {config.verdictTitle}
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                {config.verdictBody}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {config.useCases.map(({ icon: Icon, title, body }) => (
                <Card key={title} className="border-border/70 bg-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-muted-foreground">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-7">
                <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-emerald-900">
                  <Check />
                  {config.winsTitle}
                </h3>
                <div className="flex flex-col gap-4">
                  {config.wins.map((item) => (
                    <p
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-emerald-950"
                    >
                      <Check className="mt-1 shrink-0" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-7">
                <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-amber-950">
                  <ShieldCheck />
                  {config.cautionsTitle}
                </h3>
                <div className="flex flex-col gap-4">
                  {config.cautions.map((item) => (
                    <p
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-amber-950"
                    >
                      <Zap className="mt-1 shrink-0" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="overflow-hidden border-border/70 shadow-2xl">
              <div className="bg-[#070a18] p-6 text-white">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-bold uppercase tracking-[.18em] text-lime-200">
                    Quick score
                  </div>
                  <div className="flex items-center gap-1 text-lime-200">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-5xl font-bold">
                  {config.rating}
                  <span className="text-lg font-medium text-white/52">/5</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  {config.ratingSummary}
                </p>
              </div>
              <CardContent className="flex flex-col gap-5 p-6">
                <div className="flex flex-col gap-3">
                  {config.decisionRows.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[96px_1fr] gap-3 text-sm"
                    >
                      <span className="font-bold text-muted-foreground">
                        {label}
                      </span>
                      <span className="font-medium leading-6">{value}</span>
                    </div>
                  ))}
                </div>
                <Separator />
                <CtaButton className="h-12 rounded-full text-base font-bold" />
                <CtaProofStrip />
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-background pb-16 md:pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-6 overflow-hidden rounded-2xl border bg-[#07111f] p-6 text-white shadow-2xl md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="mb-3 flex items-center gap-2 text-lime-200">
                <CircleDollarSign />
                <span className="text-sm font-bold uppercase tracking-[.18em]">
                  {config.ctaBandEyebrow}
                </span>
              </div>
              <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                {config.ctaBandTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/68 md:text-base">
                {config.ctaBandBody}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:min-w-[260px]">
              <CtaButton className="h-14 rounded-full bg-lime-300 px-7 text-base font-bold text-[#07111f] hover:bg-lime-200" />
              <p className="text-center text-xs text-white/50">
                {config.ctaMicrocopy}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[360px_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Repeat2 />
              <span className="text-sm font-bold uppercase tracking-[.18em]">
                {config.workflowEyebrow}
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              {config.workflowTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {config.workflowBody}
            </p>
          </div>

          <div className="grid gap-4">
            {config.workflow.map((step, index) => (
              <Card key={step.title} className="border-border/70">
                <CardContent className="grid gap-4 p-6 md:grid-cols-[72px_1fr] md:items-start">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/25 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold md:text-5xl">
                {config.audienceTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {config.audienceBody}
              </p>
            </div>
            <CtaButton className="h-12 rounded-full px-6 font-bold md:mb-1" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {config.audienceCards.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-border/70 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="text-primary" />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold md:text-5xl">
              {config.comparisonTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {config.comparisonBody}
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border bg-card">
            <div className="grid grid-cols-[1fr_1.4fr_1.3fr] border-b bg-secondary/40 px-5 py-4 text-sm font-bold uppercase tracking-[.12em] text-muted-foreground">
              <div>Option</div>
              <div>Strength</div>
              <div>When to choose it</div>
            </div>
            {config.comparisons.map((row) => (
              <div
                key={row.name}
                className={`grid grid-cols-1 gap-2 border-b px-5 py-5 last:border-b-0 md:grid-cols-[1fr_1.4fr_1.3fr] md:gap-6 ${
                  row.highlight ? "bg-lime-50" : ""
                }`}
              >
                <div className="flex flex-col gap-3 font-bold">
                  <span>{row.name}</span>
                  {row.highlight && (
                    <CtaButton className="h-10 w-fit rounded-full bg-lime-300 px-4 text-sm font-bold text-[#07111f] hover:bg-lime-200" />
                  )}
                </div>
                <div className="leading-7 text-muted-foreground">
                  {row.strength}
                </div>
                <div className="leading-7 text-muted-foreground">{row.fit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/25 py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[360px_1fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">
              {config.faqTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {config.faqBody}
            </p>
          </div>
          <Accordion type="single" collapsible className="rounded-xl border bg-background px-6">
            {config.faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left text-lg font-bold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-[#070a18] py-16 text-white md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-lime-200">
              <CircleDollarSign />
              <span className="text-sm font-bold uppercase tracking-[.18em]">
                {config.finalEyebrow}
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              {config.finalTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              {config.finalBody}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <CtaButton className="h-14 rounded-full bg-lime-300 px-8 text-base font-bold text-[#07111f] hover:bg-lime-200" />
            <p className="text-center text-xs text-white/48">
              Directs to {config.popup.productName}
            </p>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/90 p-3 shadow-2xl backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-bold">{config.mobileTitle}</div>
            <div className="text-xs text-muted-foreground">
              {config.mobileSubtitle}
            </div>
          </div>
          <CtaButton className="h-11 shrink-0 rounded-full px-4 text-sm font-bold" />
        </div>
      </div>
      <ProductConversionPopup config={config.popup} />
    </>
  );
}
