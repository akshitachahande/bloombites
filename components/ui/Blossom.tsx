import Image from "next/image";
import type { CSSProperties } from "react";

type BlossomProps = {
  /** Rendered size of the blossom image, per Figma. */
  width: number;
  height: number;
  /** Rotation in degrees. */
  rotate?: number;
  /** Absolute offsets from the positioned parent (px). */
  top?: number;
  left?: number;
  right?: number;
  /** Animation phase offset in seconds so blossoms don't move in unison. */
  delay?: number;
  className?: string;
};

/** Decorative cherry blossom from the Figma "blossom-img" layers. */
export function Blossom({
  width,
  height,
  rotate = 0,
  top,
  left,
  right,
  delay = 0,
  className = "",
}: BlossomProps) {
  const style: CSSProperties = {
    width,
    height,
    top,
    left,
    right,
    rotate: `${rotate}deg`,
    // Quick staggered pop-in, then the slower float phase offset.
    animationDelay: `${delay * 0.12}s, ${delay}s`,
  };
  return (
    <Image
      src="/images/blossom.png"
      alt=""
      aria-hidden
      width={Math.round(width)}
      height={Math.round(height)}
      className={`pointer-events-none absolute max-w-none animate-float select-none ${className}`}
      style={style}
    />
  );
}
