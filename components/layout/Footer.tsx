import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { NAV_ITEMS } from "./nav-items";

// Placeholder contact links — swap for the café's real accounts.
const SOCIAL: { icon: IconName; label: string; href: string }[] = [
  { icon: "call", label: "Call us", href: "tel:+12125550123" },
  { icon: "telegram", label: "Telegram", href: "https://t.me/bloombitesnyc" },
  { icon: "map", label: "Find us on the map", href: "/#branches" },
  { icon: "instagram", label: "Instagram", href: "https://instagram.com/bloombitesnyc" },
];

/** Figma "Footer/ Desktop" (23:1362) and "Footer/Mobile" (24:4215). */
export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-olive px-6 pt-5 pb-6 text-cream lg:px-[130px] lg:py-[50px]"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-8">
        <Logo type="blossom-white" size="medium" className="lg:size-[120px]" />

        <div className="flex flex-col items-center gap-3 lg:gap-[17px]">
          <nav aria-label="Footer" className="flex flex-wrap justify-center lg:flex-nowrap">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                color="cream"
                className="lg:w-[139.5px]"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <ul className="flex items-center gap-6 lg:hidden">
            <SocialLinks size={24} />
          </ul>

          <p className="text-sm leading-6">© 2025 Bloom Bites NYC. All rights reserved.</p>
        </div>

        <ul className="hidden items-center gap-4 lg:flex">
          <SocialLinks size={20} />
        </ul>
      </div>
    </footer>
  );
}

function SocialLinks({ size }: { size: number }) {
  return SOCIAL.map((s) => (
    <li key={s.icon}>
      <a
        href={s.href}
        aria-label={s.label}
        className="flex rounded-full transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <Icon name={s.icon} size={size} />
      </a>
    </li>
  ));
}
