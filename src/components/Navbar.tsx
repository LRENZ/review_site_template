'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, Menu, X, Diamond, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-sm group-hover:bg-primary/90 transition-colors">
            <Diamond className="w-5 h-5 fill-current" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">BrandDragon</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link 
            href="/category/market"
            className={cn("hover:text-primary transition-colors", pathname === "/category/market" && "text-primary")}
          >
            Market
          </Link>
          <Link 
            href="/category/digital"
            className={cn("hover:text-primary transition-colors", pathname === "/category/digital" && "text-primary")}
          >
            Digital
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors outline-none">
              2025 Picks <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/collection/fashion-2025" className="w-full cursor-pointer">
                  Trend Report
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collection/ai-tools-2025" className="w-full cursor-pointer">
                  The AI Stack
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collection/ai-chatbots-2025" className="w-full cursor-pointer">
                  Battle of the Bots
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collection/tech-2025" className="w-full cursor-pointer">
                  Gadget Hall of Fame
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href="/about"
            className={cn("hover:text-primary transition-colors", pathname === "/about" && "text-primary")}
          >
            About
          </Link>
          
          <Button variant="ghost" size="icon" className="hover:bg-muted">
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background px-4 py-4 space-y-4 animate-in slide-in-from-top-2">
          <Link href="/category/market" className="block py-2 text-lg font-medium border-b border-border/50">
            Market
          </Link>
          <Link href="/category/digital" className="block py-2 text-lg font-medium border-b border-border/50">
            Digital
          </Link>
          <div className="py-2 border-b border-border/50">
            <div className="text-lg font-medium text-muted-foreground mb-2">2025 Collections</div>
            <div className="pl-4 space-y-2">
              <Link href="/collection/fashion-2025" className="block text-base">
                Trend Report
              </Link>
              <Link href="/collection/ai-tools-2025" className="block text-base">
                The AI Stack
              </Link>
              <Link href="/collection/ai-chatbots-2025" className="block text-base">
                Battle of the Bots
              </Link>
              <Link href="/collection/tech-2025" className="block text-base">
                Gadget Hall of Fame
              </Link>
            </div>
          </div>
          <Link href="/about" className="block py-2 text-lg font-medium border-b border-border/50">
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
