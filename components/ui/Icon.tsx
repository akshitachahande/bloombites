import type { CSSProperties } from "react";

/**
 * Glyph placement inside the 20×20 Figma icon frame:
 * [file, width, height, x, y]. Icons with several layers list each one.
 */
type Layer = readonly [file: string, w: number, h: number, x: number, y: number];

const ICONS = {
  "arrow-right": [["arrow-right", 20, 20, 0, 0]],
  "arrow-left": [["arrow-left", 20, 20, 0, 0]],
  search: [["search", 14.65, 14.65, 2.5, 2.5]],
  menu: [["menu", 15, 10, 2.5, 5]],
  map: [
    ["map-pin", 13.33, 16.67, 3.33, 1.67],
    ["map-dot", 6.67, 6.67, 6.67, 5],
  ],
  calendar: [["calendar", 15, 16.67, 2.5, 1.67]],
  gift: [["gift", 18.33, 16.67, 0.83, 1.67]],
  call: [["call", 15, 15, 2.5, 2.5]],
  telegram: [["telegram", 16.67, 16.67, 1.67, 1.67]],
  instagram: [["instagram", 15, 15, 2.5, 2.5]],
} satisfies Record<string, readonly Layer[]>;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  /** Rendered size in px (the Figma frame is 20). */
  size?: number;
  className?: string;
  /** Accessible label; omit for decorative icons. */
  label?: string;
};

/**
 * Renders a Figma icon glyph as a CSS mask so it takes the current text
 * color (e.g. white on a button, olive on hover).
 */
export function Icon({ name, size = 20, className = "", label }: IconProps) {
  const layers: readonly Layer[] = ICONS[name];
  const u = size / 20;
  const mask = layers.map(([file]) => `url(/icons/${file}.svg)`).join(", ");
  const style: CSSProperties = {
    width: size,
    height: size,
    maskImage: mask,
    WebkitMaskImage: mask,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: layers.map(([, w, h]) => `${w * u}px ${h * u}px`).join(", "),
    WebkitMaskSize: layers.map(([, w, h]) => `${w * u}px ${h * u}px`).join(", "),
    maskPosition: layers.map(([, , , x, y]) => `${x * u}px ${y * u}px`).join(", "),
    WebkitMaskPosition: layers.map(([, , , x, y]) => `${x * u}px ${y * u}px`).join(", "),
  };

  return (
    <span
      className={`inline-block shrink-0 bg-current ${className}`}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
