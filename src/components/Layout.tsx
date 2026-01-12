import Navbar from "@/components/Navbar";
import NewsletterPopup from "@/components/NewsletterPopup";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <NewsletterPopup />
      <Toaster />
    </div>
  );
}
