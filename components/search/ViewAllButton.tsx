"use client";

import { Button } from "@/components/ui/Button";
import { useSearch } from "./SearchContext";

/** "View All Pastries": clears any active search and jumps to the bakes. */
export function ViewAllButton({ className }: { className?: string }) {
  const { setQuery } = useSearch();
  return (
    <Button
      href="/#featured-results"
      icon="arrow-right"
      className={className}
      onClick={() => setQuery("")}
    >
      View All Pastries
    </Button>
  );
}
