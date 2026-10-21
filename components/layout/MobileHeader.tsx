"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { OpenFormButton } from "@/components/forms/OpenFormButton";
import { SiteSearch } from "@/components/search/SiteSearch";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { NAV_ITEMS } from "./nav-items";

const ICON_BUTTON =
  "inline-flex size-11 items-center justify-center rounded-full text-olive focus-visible:outline-2 focus-visible:outline-olive";

/** Figma "Nav/Nav Header Mobile" (14:162) plus a slide-in menu drawer. */
export function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const drawerId = useId();
  const searchId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll, focus the close button and close on Escape while open.
  useEffect(() => {
    if (!menuOpen) return;
    const menuButton = menuButtonRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      menuButton?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="lg:hidden">
      <div className="flex h-[95px] items-center justify-between px-2.5">
        <button
          ref={menuButtonRef}
          type="button"
          className={ICON_BUTTON}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls={drawerId}
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="menu" size={32} />
        </button>

        <Link href="/" aria-label="Bloom Bites home">
          <Logo size="medium" preload />
        </Link>

        <button
          type="button"
          className={ICON_BUTTON}
          aria-label={searchOpen ? "Close search" : "Open search"}
          aria-expanded={searchOpen}
          aria-controls={searchId}
          onClick={() => setSearchOpen((o) => !o)}
        >
          <Icon name="search" size={32} />
        </button>
      </div>

      <div id={searchId} hidden={!searchOpen} className="px-4 pb-4">
        <SiteSearch autoFocus={searchOpen} />
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-[visibility] ${menuOpen ? "visible" : "invisible delay-300"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMenu}
        />
        <nav
          id={drawerId}
          aria-label="Main"
          className={`absolute inset-y-0 left-0 flex w-[min(320px,85vw)] flex-col gap-6 bg-cream p-6 shadow-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <Logo size="small" />
            <button
              ref={closeRef}
              type="button"
              className={`${ICON_BUTTON} text-2xl leading-none`}
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ×
            </button>
          </div>

          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  className="w-full justify-start! px-0! text-xl"
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <OpenFormButton
            form="subscribe"
            size="md"
            icon="arrow-right"
            className="self-start"
            onClick={closeMenu}
          >
            Join Our Community
          </OpenFormButton>
        </nav>
      </div>
    </div>
  );
}
