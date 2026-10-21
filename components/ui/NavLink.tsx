import Link from "next/link";
import type { ComponentProps } from "react";

/** Figma "Nav" colors: green on cream backgrounds, cream on the olive footer. */
const COLORS = {
  green: "text-olive decoration-olive",
  cream: "text-cream decoration-cream",
} as const;

type NavLinkProps = ComponentProps<typeof Link> & {
  color?: keyof typeof COLORS;
};

export function NavLink({ color = "green", className = "", ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center p-2.5 text-base leading-6 whitespace-nowrap underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none ${COLORS[color]} ${className}`}
    />
  );
}
