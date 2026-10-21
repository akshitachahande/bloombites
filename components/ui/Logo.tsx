import Image from "next/image";

const LOGOS = {
  /** Olive circular badge — Figma "Type=Default" (header). */
  default: "/images/logo/badge-olive.png",
  /** Cream circular badge — Figma "Type=blossom-white" (footer on olive). */
  "blossom-white": "/images/logo/badge-cream.png",
  /** Pink "BLOOM BITES" wordmark — Figma "Type=Bloom". */
  bloom: "/images/logo/wordmark-pink.png",
  /** Cream flower mark — Figma "Type=blossom". */
  blossom: "/images/logo/flower-cream.png",
} as const;

/** Figma sizes: small 60, medium 80, large 100 (footer uses 120). */
const SIZES = { small: 60, medium: 80, large: 100, xl: 120 } as const;

type LogoProps = {
  type?: keyof typeof LOGOS;
  size?: keyof typeof SIZES;
  className?: string;
  preload?: boolean;
};

export function Logo({
  type = "default",
  size = "medium",
  className = "",
  preload,
}: LogoProps) {
  const px = SIZES[size];
  return (
    <Image
      src={LOGOS[type]}
      alt="Bloom Bites Café"
      width={px}
      height={px}
      preload={preload}
      className={className}
    />
  );
}
