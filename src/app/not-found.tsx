import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-serif font-bold text-primary/20">404</h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The review you are looking for might have been retired, moved, or never existed in the first place.
      </p>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/category/market">Browse Market</Link>
        </Button>
      </div>
    </div>
  );
}
