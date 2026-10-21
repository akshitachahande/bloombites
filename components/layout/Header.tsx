import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { SearchBar } from "@/components/ui/SearchBar";
import { NAV_ITEMS } from "./nav-items";

/** Figma "Nav/Nav Header Desktop" (14:188). */
export function Header() {
  return (
    <header className="bg-cream pt-8">
      <div className="mx-auto hidden h-[89px] max-w-[1440px] items-center justify-between gap-4 px-8 lg:flex xl:px-[130px]">
        <Link href="/" aria-label="Bloom Bites home" className="shrink-0">
          <Logo size="large" preload />
        </Link>

        <SearchBar className="w-full max-w-[428px] min-w-[220px]" />

        <nav aria-label="Main" className="flex shrink-0 items-center gap-4 py-5">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <Button size="md" icon="arrow-right">
            Join Our Community
          </Button>
        </nav>
      </div>
    </header>
  );
}
