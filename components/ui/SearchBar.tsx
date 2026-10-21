import type { ComponentProps } from "react";
import { Icon } from "./Icon";

type SearchBarProps = Omit<ComponentProps<"input">, "type"> & {
  /** Classes for the pill wrapper (sizing / layout). */
  className?: string;
};

/** Figma "Search bar": white pill with a search icon and Aldrich placeholder. */
export function SearchBar({
  className = "",
  placeholder = "Search your cup of coffee here...",
  "aria-label": ariaLabel = "Search the menu",
  ...inputProps
}: SearchBarProps) {
  return (
    <label
      className={`flex items-center gap-3.5 rounded-[57px] bg-white p-2.5 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-olive ${className}`}
    >
      <Icon name="search" className="text-ink" />
      <input
        type="search"
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="w-full min-w-0 bg-transparent text-sm leading-6 text-ink outline-none placeholder:text-black/60 [&::-webkit-search-cancel-button]:hidden"
        {...inputProps}
      />
    </label>
  );
}
