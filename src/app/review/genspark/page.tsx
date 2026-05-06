import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  FileText,
  Layers3,
  MessageSquareText,
  PhoneCall,
  Presentation,
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

const affiliateLink = "https://mainfuncpteltd.sjv.io/7XmrDV";

const ctaLabel = "Try Genspark Today";

const gensparkPopupConfig: ProductConversionPopupConfig = {
  productId: "genspark",
  productName: "Genspark",
  rating: "4.7/5",
  headline: "Before you leave, test Genspark on one real deliverable.",
  description:
    "Use it for the kind of work that normally eats an hour or more: a pitch deck, research brief, campaign plan, proposal, or client-ready draft.",
  bullets: [
    "Best fit when your AI workflow needs finished assets, not another blank chat thread.",
    "Try one high-value task first so the tool proves its value against your actual workload.",
    "Strong match for creators, marketers, founders, agencies, and operators shipping weekly output.",
  ],
  ctaLabel,
  ctaHref: affiliateLink,
  disclosure:
    "Affiliate disclosure: BrandDragon may earn a commission if you sign up through this link.",
  storageKey: "product-popup:genspark",
  banner: {
    eyebrow: "Genspark deal",
    headline: "AI workspace for finished deliverables",
    description: "Try the tool behind the 4.7/5 BrandDragon verdict.",
  },
};

export const metadata: Metadata = {
  title: "Genspark Review 2026: Is This AI Workspace Worth It? | BrandDragon",
  description:
    "A conversion-focused Genspark review for creators, marketers, founders, and operators who want an AI workspace that can create slides, docs, research, calls, and more from one prompt.",
  alternates: {
    canonical: "/review/genspark",
  },
  openGraph: {
    title: "Genspark Review: All-in-One AI Workspace for Real Output",
    description:
      "See where Genspark shines, who should use it, and when it is worth trying.",
    images: ["/genspark-review.svg"],
  },
};

const proofPoints = [
  "AI workspace for research, slides, docs, images, videos, calls, and workflow output",
  "Super Agent approach built for outcomes instead of plain chat responses",
  "Useful for marketers, creators, agencies, founders, and busy operators",
];

const useCases = [
  {
    icon: Presentation,
    title: "Pitch decks and presentations",
    body: "Turn rough ideas, research notes, or prompts into polished slide drafts faster than building from a blank deck.",
  },
  {
    icon: FileText,
    title: "Reports, docs, and summaries",
    body: "Use it for research synthesis, PDF digestion, proposals, market scans, and longer format business writing.",
  },
  {
    icon: PhoneCall,
    title: "AI phone and task agents",
    body: "Genspark's agent positioning is strongest when the task needs action, not just another text answer.",
  },
  {
    icon: Layers3,
    title: "One workspace, many tools",
    body: "It brings chat, creation, automation, media, and document workflows closer together so you switch tabs less.",
  },
];

const workflow = [
  {
    title: "Start with a concrete business task",
    body: "Use prompts like: create a sales deck for this offer, summarize these competitor pages, draft a client proposal, or turn this research into a campaign plan.",
  },
  {
    title: "Ask for an asset, not an answer",
    body: "The strongest Genspark use case is a finished deliverable: a slide outline, document, call script, spreadsheet-style analysis, image direction, or workflow plan.",
  },
  {
    title: "Review the draft like a senior editor",
    body: "Check facts, numbers, positioning, citations, brand tone, and compliance-sensitive claims before publishing or sending to a client.",
  },
  {
    title: "Reuse the best outputs as templates",
    body: "Once a prompt produces a useful deliverable, turn it into a repeatable workflow for proposals, reports, ads, outreach, or internal operations.",
  },
];

const decisionRows = [
  ["Best for", "Creators, marketers, sales teams, founders, researchers, and solo operators"],
  ["Main value", "Getting usable business assets from one prompt instead of managing five separate apps"],
  ["Biggest strength", "Agent-style execution across slides, docs, calls, research, images, and videos"],
  ["Watch out for", "Credit usage, plan limits, and whether you need every included tool"],
];

const wins = [
  "Strong first-choice tool when you create client deliverables, pitches, reports, and campaign assets every week.",
  "Better than a basic chatbot when the real goal is a finished file, workflow, call, or structured deliverable.",
  "Easy to justify if replacing several subscriptions or reducing outsourced production time.",
];

const cautions = [
  "Check current plan details before buying because AI tools can change credits, limits, and included features quickly.",
  "If you only need occasional chat, a lighter free or single-purpose tool may be enough.",
  "Treat generated work as a strong draft, then review facts, numbers, legal claims, and brand voice before publishing.",
];

const comparisons = [
  ["Genspark", "Multi-format deliverables and agent-style task execution", "Best when the goal is finished work"],
  ["ChatGPT / Claude", "Deep reasoning, coding, writing, and conversation", "Best when you want a flexible thinking partner"],
  ["Perplexity", "Fast research with source-aware answers", "Best when you mainly need answer-engine style research"],
  ["Canva / deck tools", "Design polish and brand templates", "Best when visuals are more important than agent workflows"],
];

const faqs = [
  {
    question: "Is Genspark good for marketers?",
    answer:
      "Yes, especially if the marketing work ends in tangible assets: campaign angles, competitive research, landing page drafts, pitch decks, ad scripts, customer research summaries, and follow-up documents.",
  },
  {
    question: "Is Genspark better than ChatGPT?",
    answer:
      "It depends on the job. ChatGPT is excellent as a general reasoning and writing assistant. Genspark is more compelling when you want the AI workspace to produce a finished deliverable or run a multi-step workflow from one starting point.",
  },
  {
    question: "Should I use it for client work?",
    answer:
      "It can be a strong accelerator for client drafts, but it should not replace editorial review. Check accuracy, tone, compliance claims, source quality, and final formatting before delivery.",
  },
  {
    question: "What should I test first?",
    answer:
      "Pick one task that normally takes at least an hour: a pitch deck, research brief, proposal, campaign plan, or sales call workflow. If Genspark turns that into a useful draft quickly, it is worth deeper evaluation.",
  },
];

function CtaButton({ className }: { className?: string }) {
  return (
    <Button size="lg" className={className} asChild>
      <a href={affiliateLink} rel="sponsored">
        {ctaLabel}
        <ExternalLink data-icon="inline-end" />
      </a>
    </Button>
  );
}

export default function GensparkReviewPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#070a18] text-white">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.02fr_.98fr] md:py-16">
          <div className="flex flex-col gap-6">
            <Link
              href="/category/digital"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/64 transition-colors hover:text-white"
            >
              <ChevronRight data-icon="inline-start" />
              Digital AI Tools
            </Link>

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="border-white/15 bg-white/10 text-white hover:bg-white/10">
                  2026 Review
                </Badge>
                <Badge className="border-lime-300/30 bg-lime-300/15 text-lime-100 hover:bg-lime-300/15">
                  Best for shipping finished work
                </Badge>
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[.98] tracking-tight text-white md:text-6xl">
                Genspark Review: AI workspace for finished work.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Genspark combines AI chat, research, slides, docs, media tools, and agent-style task execution into one workspace. If you need business assets faster, this is the version worth testing first.
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

            <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-3">
              {proofPoints.map((point) => (
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
                src="/genspark-review.svg"
                alt="Genspark AI workspace interface concept"
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] w-full rounded-[24px] object-cover"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Slides", "Docs", "Calls"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm font-bold text-white/84">
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
                <span className="text-sm font-bold uppercase tracking-[.18em]">BrandDragon Verdict</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Genspark is worth trying if your AI workflow ends in deliverables.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Most AI subscriptions are great at answers. Genspark's pitch is different: give it a goal and let the workspace assemble assets, research, documents, slides, calls, or media from that goal. That makes the value clearest for people who turn AI output into revenue, client work, sales material, or operating leverage.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {useCases.map(({ icon: Icon, title, body }) => (
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
                  Why it converts
                </h3>
                <div className="flex flex-col gap-4">
                  {wins.map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-6 text-emerald-950">
                      <Check className="mt-1 shrink-0" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-7">
                <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-amber-950">
                  <ShieldCheck />
                  What to check first
                </h3>
                <div className="flex flex-col gap-4">
                  {cautions.map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-6 text-amber-950">
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
                  <div className="text-sm font-bold uppercase tracking-[.18em] text-lime-200">Quick score</div>
                  <div className="flex items-center gap-1 text-lime-200">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-5xl font-bold">
                  4.7<span className="text-lg font-medium text-white/52">/5</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  Strong fit for output-heavy AI users who want one workspace for creation and execution.
                </p>
              </div>
              <CardContent className="flex flex-col gap-5 p-6">
                <div className="flex flex-col gap-3">
                  {decisionRows.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[96px_1fr] gap-3 text-sm">
                      <span className="font-bold text-muted-foreground">{label}</span>
                      <span className="font-medium leading-6">{value}</span>
                    </div>
                  ))}
                </div>
                <Separator />
                <CtaButton className="h-12 rounded-full text-base font-bold" />
                <p className="text-center text-xs leading-5 text-muted-foreground">
                  Affiliate disclosure: BrandDragon may earn a commission if you sign up through this link.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[360px_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Repeat2 />
              <span className="text-sm font-bold uppercase tracking-[.18em]">How to evaluate it</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Use this 4-step test before you decide.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              A high-value AI tool should reduce a real workflow, not just feel impressive for ten minutes.
            </p>
          </div>

          <div className="grid gap-4">
            {workflow.map((step, index) => (
              <Card key={step.title} className="border-border/70">
                <CardContent className="grid gap-4 p-6 md:grid-cols-[72px_1fr] md:items-start">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{step.body}</p>
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
              <h2 className="text-3xl font-bold md:text-5xl">Who should click through?</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                The best buyer is not someone curious about AI. It is someone with recurring output pressure.
              </p>
            </div>
            <CtaButton className="h-12 rounded-full px-6 font-bold md:mb-1" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Creators", "Batch scripts, thumbnails, research briefs, landing page drafts, and repurposed content."],
              ["Marketers", "Campaign angles, competitor scans, pitch decks, ad concepts, proposals, and reports."],
              ["Operators", "Meeting notes, follow-up messages, documents, scheduling work, and practical task automation."],
            ].map(([title, body]) => (
              <Card key={title} className="border-border/70 bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessageSquareText className="text-primary" />
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
            <h2 className="text-3xl font-bold md:text-5xl">Genspark vs. common alternatives</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              The buying question is not whether Genspark can chat. It is whether its broader workspace saves enough production time to replace or reduce other tools.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border bg-card">
            <div className="grid grid-cols-[1fr_1.4fr_1.3fr] border-b bg-secondary/40 px-5 py-4 text-sm font-bold uppercase tracking-[.12em] text-muted-foreground">
              <div>Tool</div>
              <div>Strength</div>
              <div>When to choose it</div>
            </div>
            {comparisons.map(([tool, strength, fit]) => (
              <div key={tool} className="grid grid-cols-1 gap-2 border-b px-5 py-5 last:border-b-0 md:grid-cols-[1fr_1.4fr_1.3fr] md:gap-6">
                <div className="font-bold">{tool}</div>
                <div className="leading-7 text-muted-foreground">{strength}</div>
                <div className="leading-7 text-muted-foreground">{fit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/25 py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[360px_1fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">FAQ before you click</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Short answers for buyers comparing AI subscriptions and deciding whether Genspark deserves a trial.
            </p>
          </div>
          <Accordion type="single" collapsible className="rounded-xl border bg-background px-6">
            {faqs.map((item) => (
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
              <span className="text-sm font-bold uppercase tracking-[.18em]">Final recommendation</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              If AI saves you billable hours, Genspark deserves a serious test.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              Start with one high-value task: a pitch deck, research report, client proposal, or outbound workflow. If it shortens that cycle, the tool has paid for attention.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <CtaButton className="h-14 rounded-full bg-lime-300 px-8 text-base font-bold text-[#07111f] hover:bg-lime-200" />
            <p className="text-center text-xs text-white/48">Directs to Genspark</p>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/90 p-3 shadow-2xl backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-bold">Genspark AI Workspace</div>
            <div className="text-xs text-muted-foreground">4.7/5 - Best for finished deliverables</div>
          </div>
          <CtaButton className="h-11 shrink-0 rounded-full px-4 text-sm font-bold" />
        </div>
      </div>
      <ProductConversionPopup config={gensparkPopupConfig} />
    </>
  );
}
