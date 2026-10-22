import Link from "next/link";
import { OpenFormButton } from "@/components/forms/OpenFormButton";
import { SiteSearch } from "@/components/search/SiteSearch";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { MobileHeader } from "./MobileHeader";
import { NAV_ITEMS } from "./nav-items";

/** Figma "Nav/Nav Header Desktop" (14:188); below lg, the mobile header. */
export function Header() {
  return (
    <header className="bg-cream pt-8">
      <div className="mx-auto hidden h-[89px] animate-drop max-w-[1440px] items-center justify-between gap-4 px-8 lg:flex xl:px-[130px]">
        <Link href="/" aria-label="Bloom Bites home" className="shrink-0">
          <Logo size="large" preload />
        </Link>

        <SiteSearch className="w-full max-w-[428px] min-w-[220px]" />

        <nav aria-label="Main" className="flex shrink-0 items-center gap-4 py-5">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <OpenFormButton form="subscribe" size="md" icon="arrow-right">
            Join Our Community
          </OpenFormButton>
        </nav>
      </div>

      <MobileHeader />
    </header>
  );
}
