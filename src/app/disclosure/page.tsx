import TextPageLayout from "@/components/TextPageLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | BrandDragon",
};

export default function Disclosure() {
  return (
    <TextPageLayout title="Affiliate Disclosure" subtitle="How we support our independent journalism">
      
      <Alert className="mb-8 border-primary/20 bg-primary/5">
        <Info className="h-4 w-4" />
        <AlertTitle>Transparency First</AlertTitle>
        <AlertDescription>
          We believe in full transparency. Our relationship with you, our reader, is our most valuable asset.
        </AlertDescription>
      </Alert>

      <h2>How We Make Money</h2>
      <p>
        BrandDragon is an independent publication supported by our readers. When you purchase through links on our site, we may earn an affiliate commission.
      </p>
      <p>
        This happens when you click a link to a retailer (like Amazon, Nike, or a software provider) and make a purchase. The retailer pays us a small percentage of the sale amount.
      </p>

      <h2>Does This Cost You Extra?</h2>
      <p>
        <strong>No.</strong> The price you pay is the same whether you use our link or go directly to the retailer's site. In some cases, we may even have negotiated special discounts for our readers.
      </p>

      <h2>Does This Influence Our Reviews?</h2>
      <p>
        <strong>Absolutely not.</strong> Our editorial team operates independently from our business team. We do not accept payment for positive reviews. 
      </p>
      <p>
        Here is our promise:
      </p>
      <ul>
        <li>We only recommend products we truly believe in.</li>
        <li>If a product is bad, we will tell you, regardless of the commission.</li>
        <li>We return or donate most products after testing to avoid conflicts of interest.</li>
      </ul>

      <h2>Amazon Associates Disclosure</h2>
      <p>
        BrandDragon is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
      </p>

      <p className="mt-8 text-sm text-muted-foreground italic">
        If you have any questions about our affiliate relationships, please don't hesitate to <Link href="/contact" className="underline">contact us</Link>.
      </p>
    </TextPageLayout>
  );
}
