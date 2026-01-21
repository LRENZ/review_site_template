'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent! We'll get back to you shortly.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Info Side */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a question about a review? Want to partner with us? 
              Drop us a line and we'll get back to you.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-secondary/30 p-4 rounded-xl border border-primary/10">
            <div className="bg-primary/10 p-3 rounded-full">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Fast Response</p>
              <p className="text-sm text-muted-foreground">We reply to all inquiries within 24 hours.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1 text-muted-foreground" />
              <div>
                <h3 className="font-bold">Email Us</h3>
                <p className="text-muted-foreground">hello@dailychoice.com</p>
                <p className="text-muted-foreground">partners@dailychoice.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 text-muted-foreground" />
              <div>
                <h3 className="font-bold">Headquarters</h3>
                <p className="text-muted-foreground">
                  123 Lifestyle Blvd, Suite 400<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <Card className="shadow-2xl border-muted">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we will contact you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="General Inquiry" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you today?" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>

              <Button type="submit" className="w-full text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
