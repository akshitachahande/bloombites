"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type SearchState = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchContext = createContext<SearchState | null>(null);

/** Shares the header search query with the featured bakes list. */
export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  return <SearchContext.Provider value={{ query, setQuery }}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used inside <SearchProvider>");
  return ctx;
}
