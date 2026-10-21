"use client";

import { SearchBar } from "@/components/ui/SearchBar";
import { useSearch } from "./SearchContext";

type SiteSearchProps = {
  className?: string;
  autoFocus?: boolean;
};

/** Header search: filters the featured bakes as you type; Enter jumps to them. */
export function SiteSearch({ className, autoFocus }: SiteSearchProps) {
  const { query, setQuery } = useSearch();

  return (
    <form
      role="search"
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document
          .getElementById("featured")
          ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }}
    >
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus={autoFocus}
        aria-controls="featured-results"
      />
    </form>
  );
}
