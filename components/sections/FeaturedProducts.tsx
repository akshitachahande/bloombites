"use client";

import { ProductCard } from "@/components/cards/ProductCard";
import { useSearch } from "@/components/search/SearchContext";
import { Carousel } from "@/components/ui/Carousel";
import { PRODUCTS } from "@/data/products";

/** Featured bakes filtered by the header search: carousel below sm, 2×2 grid above. */
export function FeaturedProducts() {
  const { query, setQuery } = useSearch();
  const q = query.trim().toLowerCase();
  const products = q ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q)) : PRODUCTS;

  return (
    <div id="featured-results" className="relative">
      <p aria-live="polite" className="sr-only">
        {q ? `${products.length} bake${products.length === 1 ? "" : "s"} match “${query.trim()}”` : ""}
      </p>

      {products.length === 0 ? (
        <div className="flex w-[250px] flex-col items-start gap-4 sm:w-[580px]">
          <p className="text-xl leading-8">No bakes match “{query.trim()}” yet.</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-olive underline underline-offset-4 hover:no-underline"
          >
            Show all bakes
          </button>
        </div>
      ) : (
        <>
          {/* Remount on a new query so the carousel resets to the first slide. */}
          <Carousel key={q} label="Featured bakes" className="sm:hidden">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Carousel>

          <ul className="hidden justify-center gap-x-20 gap-y-[25px] sm:grid sm:grid-cols-[repeat(2,250px)]">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
