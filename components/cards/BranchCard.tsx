import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Branch } from "@/data/branches";

/** Figma "Best Seller Branch" priorities: 1st (featured), 2nd, 3rd (mobile). */
const SIZES = {
  "1st": { card: "w-[390px] rounded-t-[210px]", image: "rounded-t-[200px]", w: 350, h: 450 },
  "2nd": { card: "w-[340px] rounded-t-[170px]", image: "rounded-t-[150px]", w: 300, h: 400 },
  "3rd": { card: "w-[308px] rounded-t-[170px]", image: "rounded-t-[150px]", w: 250, h: 350 },
} as const;

type BranchCardProps = {
  branch: Branch;
  priority?: keyof typeof SIZES;
  className?: string;
};

/**
 * Arch-framed branch photo with name and a "Find us" map link.
 * Figma draws the 4px border as an inside stroke, so padding is 20 - 4 = 16px.
 */
export function BranchCard({ branch, priority = "2nd", className = "" }: BranchCardProps) {
  const s = SIZES[priority];
  return (
    <article
      className={`group flex flex-col items-center gap-[13px] border-4 border-olive p-4 transition-[translate,box-shadow] duration-300 ease-out hover:shadow-[0_18px_40px_-20px_rgb(31_31_31/0.45)] motion-safe:hover:-translate-y-2 ${s.card} ${className}`}
    >
      <div className={`overflow-hidden ${s.image}`}>
        <Image
          src={branch.image}
          alt={branch.alt}
          width={s.w}
          height={s.h}
          sizes={`${s.w}px`}
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
          style={{ width: s.w, height: s.h }}
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        <h3 className="text-xl leading-6 text-black">{branch.name}</h3>
        <Button
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="xs"
          icon="map"
          aria-label={`Find ${branch.name} on Google Maps`}
        >
          Find us
        </Button>
      </div>
    </article>
  );
}
