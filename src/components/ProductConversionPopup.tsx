"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, ExternalLink, Sparkles, Star, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ProductPopupBannerConfig = {
  eyebrow: string;
  headline: string;
  description: string;
};

export type ProductConversionPopupConfig = {
  productId: string;
  productName: string;
  rating: string;
  headline: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  disclosure?: string;
  storageKey: string;
  banner: ProductPopupBannerConfig;
};

type ProductConversionPopupProps = {
  config: ProductConversionPopupConfig;
};

function getSessionFlag(key: string) {
  try {
    return window.sessionStorage.getItem(key) === "true";
  } catch {
    return false;
  }
}

function setSessionFlag(key: string) {
  try {
    window.sessionStorage.setItem(key, "true");
  } catch {
    // sessionStorage may be unavailable in private or restricted browsing modes.
  }
}

export default function ProductConversionPopup({
  config,
}: ProductConversionPopupProps) {
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const keys = useMemo(
    () => ({
      exit: `${config.storageKey}:exit`,
      banner: `${config.storageKey}:banner-dismissed`,
    }),
    [config.storageKey]
  );

  useEffect(() => {
    if (!getSessionFlag(keys.banner)) {
      setIsBannerVisible(true);
    }
  }, [keys.banner]);

  useEffect(() => {
    let hasTriggered = getSessionFlag(keys.exit);

    const openExitPopup = () => {
      if (hasTriggered) {
        return;
      }

      hasTriggered = true;
      setSessionFlag(keys.exit);
      setIsExitOpen(true);
    };

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    const handleMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !event.relatedTarget) {
        openExitPopup();
      }
    };

    const handleMobileScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return;
      }

      const scrollDepth = window.scrollY / scrollableHeight;

      if (scrollDepth >= 0.6) {
        openExitPopup();
      }
    };

    const timer = window.setTimeout(openExitPopup, 45000);

    if (isDesktop) {
      document.addEventListener("mouseout", handleMouseOut);
    } else {
      window.addEventListener("scroll", handleMobileScroll, { passive: true });
    }

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleMobileScroll);
    };
  }, [keys.exit]);

  const handleExitOpenChange = (open: boolean) => {
    setIsExitOpen(open);

    if (!open) {
      setSessionFlag(keys.exit);
    }
  };

  const dismissBanner = () => {
    setIsBannerVisible(false);
    setSessionFlag(keys.banner);
  };

  return (
    <>
      <Dialog open={isExitOpen} onOpenChange={handleExitOpenChange}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-xl">
          <div className="bg-[#070a18] px-6 py-7 text-white sm:px-8">
            <DialogHeader className="gap-4 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="border-lime-300/30 bg-lime-300/15 text-lime-100 hover:bg-lime-300/15">
                  {config.productName}
                </Badge>
                <div className="flex items-center gap-1 text-sm font-bold text-lime-200">
                  <Star className="fill-current" />
                  {config.rating}
                </div>
              </div>
              <DialogTitle className="max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                {config.headline}
              </DialogTitle>
              <DialogDescription className="text-base leading-7 text-white/72">
                {config.description}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col gap-3">
              {config.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check />
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            <DialogFooter className="gap-3 sm:flex-col sm:items-stretch">
              <Button size="lg" className="h-12 rounded-full font-bold" asChild>
                <a href={config.ctaHref} rel="sponsored">
                  {config.ctaLabel}
                  <ExternalLink data-icon="inline-end" />
                </a>
              </Button>
              {config.disclosure && (
                <p className="text-center text-xs leading-5 text-muted-foreground">
                  {config.disclosure}
                </p>
              )}
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      {isBannerVisible && (
        <div className="fixed inset-x-0 bottom-6 z-40 hidden px-6 lg:block">
          <div className="mx-auto flex max-w-5xl items-center gap-5 rounded-full border bg-background/95 px-5 py-4 shadow-2xl backdrop-blur">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sparkles />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[.18em] text-primary">
                  {config.banner.eyebrow}
                </span>
                <span className="text-xs font-bold text-muted-foreground">
                  {config.rating}
                </span>
              </div>
              <div className="truncate text-sm font-bold">
                {config.banner.headline}
              </div>
              <div className="truncate text-xs text-muted-foreground">
                {config.banner.description}
              </div>
            </div>
            <Button className="h-11 rounded-full px-5 font-bold" asChild>
              <a href={config.ctaHref} rel="sponsored">
                {config.ctaLabel}
                <ExternalLink data-icon="inline-end" />
              </a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label={`Dismiss ${config.productName} offer`}
              onClick={dismissBanner}
            >
              <X />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
