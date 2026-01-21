'use client';

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Mail } from "lucide-react";
import { toast } from "sonner";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show after 5 seconds
    const timer = setTimeout(() => {
      // Simple check to avoid showing it every time in this demo (in prod use localStorage)
      const hasSeen = sessionStorage.getItem("hasSeenNewsletter");
      if (!hasSeen) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenNewsletter", "true");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    toast.success("Welcome to the inner circle!", {
      description: "You've successfully subscribed to BrandDragon Monthly."
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
            <Bell className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl font-serif">Don't Miss the Monthly Drop</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Get our unfiltered reviews, "Toxic" buying advice, and exclusive deals delivered to your inbox. No fluff, just the good stuff.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="you@example.com" 
              required 
              className="h-11"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full h-11 text-base font-semibold">
              <Mail className="w-4 h-4 mr-2" /> Subscribe Free
            </Button>
          </DialogFooter>
        </form>
        <p className="text-xs text-center text-muted-foreground">
          We respect your inbox. Unsubscribe at any time.
        </p>
      </DialogContent>
    </Dialog>
  );
}
