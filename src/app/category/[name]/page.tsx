import Link from "next/link";
import { reviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{ name: string }>;
};

export default async function Category({ params }: Props) {
  const { name } = await params;
  const categoryName = name ? name.charAt(0).toUpperCase() + name.slice(1) : "";

  // Filter items based on category (case-insensitive comparison)
  const allCategoryReviews = reviews.filter(r =>
    r.mainCategory.toLowerCase() === name?.toLowerCase()
  );

  return (
    <>
      <div className="bg-secondary/30 border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{categoryName}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of top-rated {categoryName} products and tools.
            We've tested {allCategoryReviews.length} items in this category.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {allCategoryReviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCategoryReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-serif text-muted-foreground">No reviews found in this category.</p>
            <Button className="mt-8" asChild><Link href="/">Back Home</Link></Button>
          </div>
        )}
      </div>
    </>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <Link href={`/review/${review.slug}`} className="block h-full group">
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/60 hover:border-primary/50 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden bg-white relative">
          <Image
            src={review.thumbnailUrl}
            alt={review.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold shadow-sm flex items-center">
            <Star className="w-3 h-3 fill-primary text-primary mr-1" />
            {review.rating.toFixed(1)}
          </div>
        </div>
        <CardHeader className="p-6 pb-2">
          <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">{review.subCategory}</div>
          <h3 className="font-serif font-bold text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {review.title}
          </h3>
        </CardHeader>
        <CardFooter className="p-6 pt-2 mt-auto">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {review.editorialVerdict}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
