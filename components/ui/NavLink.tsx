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
      className={`inline-flex items-center justify-center bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-clip-content bg-origin-content bg-bottom bg-no-repeat p-2.5 text-base leading-6 whitespace-nowrap transition-[background-size] duration-300 ease-out hover:bg-[length:100%_1px] focus-visible:bg-[length:100%_1px] focus-visible:outline-none ${COLORS[color]} ${className}`}
    />
  );
}
