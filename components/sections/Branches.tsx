import type { CSSProperties } from "react";
import { BranchCard } from "@/components/cards/BranchCard";
import { Carousel } from "@/components/ui/Carousel";
import { BRANCHES } from "@/data/branches";

/** The middle (featured) branch is shown larger and raised on desktop. */
const FEATURED_ID = "bk-lounge";

/** Figma "Our Branches" (desktop 19:983, mobile 24:3909 + 24:4064). */
export function Branches() {
  // Mobile carousel opens on the featured branch, as in the Figma frame.
  const mobileOrder = [
    ...BRANCHES.filter((b) => b.id === FEATURED_ID),
    ...BRANCHES.filter((b) => b.id !== FEATURED_ID),
  ];

  return (
    <section id="branches" aria-labelledby="branches-heading" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 pt-[82px] pb-[82px] lg:px-[130px] lg:pt-[81px] lg:pb-[87px]">
        <p data-reveal className="text-center text-xl leading-[35px]">
          Our Branches
        </p>
        <h2
          id="branches-heading"
          data-reveal
          className="[--reveal-delay:100ms] text-center font-display text-[40px] leading-[85px] font-bold text-olive lg:text-[50px]"
        >
          TOP BloomBites in NYC
        </h2>

        <div data-reveal className="mt-10 [--reveal-delay:200ms] lg:hidden">
          <Carousel label="Our branches" viewportClassName="w-[308px]" gapClassName="gap-[5px]">
            {mobileOrder.map((branch) => (
              <BranchCard key={branch.id} branch={branch} priority="3rd" />
            ))}
          </Carousel>
        </div>

        <ul className="mt-[43px] hidden items-start justify-between lg:flex">
          {BRANCHES.map((branch, i) => {
            const featured = branch.id === FEATURED_ID;
            return (
              <li
                key={branch.id}
                data-reveal
                className={featured ? "" : "mt-[84px]"}
                style={{ "--reveal-delay": `${i * 150}ms` } as CSSProperties}
              >
                <BranchCard branch={branch} priority={featured ? "1st" : "2nd"} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
