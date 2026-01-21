import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-serif text-lg font-bold">BrandDragon</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated lifestyle reviews for the modern professional. We bridge the gap between physical craftsmanship and digital efficiency.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/category/market" className="hover:text-foreground">Market</Link></li>
              <li><Link href="/category/digital" className="hover:text-foreground">Digital</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Use</Link></li>
              <li><Link href="/disclosure" className="hover:text-foreground">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} BrandDragon. All rights reserved.</p>
          <p className="max-w-md text-center md:text-right">
            BrandDragon participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
