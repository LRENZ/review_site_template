import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from "@next/third-parties/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://branddragon.com"),
  title: "BrandDragon – Lifestyle Reviews for the Modern Professional",
  description: "Real reviews for real life. We test the gear and tools that power the modern professional.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="fo-verify" content="1a20ad7e-0d69-448a-9654-13bed6c4e811" />
        <meta name="impact-site-verification" {...({ value: "c70750fd-c17e-4f55-bd22-674175c82b30" } as any)} />
        <meta name="impact-site-verification" {...({ value: "d2709593-c1da-427b-ac98-79d7e0df170e" } as any)} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
              <Navbar />
              <main className="flex-1 w-full">
                {children}
              </main>
              <Footer />
              <NewsletterPopup />
              <Toaster />
              <GoogleTagManager gtmId="GTM-MVC3ZSFP" />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
