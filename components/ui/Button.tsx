import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/** Figma "Primary Buttton" sizes: padding and label size per variant. */
const SIZES = {
  xs: "px-3 py-1.5 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

/**
 * olive   = Figma State=Default (olive fill, white label)
 * blossom = Figma State=Focus   (pink fill, thin white border, cream label)
 * Both share the Figma Hover look: cream fill, 2px olive border, olive label.
 */
const VARIANTS = {
  olive: "bg-olive text-white",
  blossom: "bg-blossom text-cream shadow-[inset_0_0_0_1px_white]",
} as const;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-pill leading-6 whitespace-nowrap transition-colors duration-200 " +
  "hover:bg-cream hover:text-olive hover:shadow-[inset_0_0_0_2px_var(--color-olive)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink " +
  "disabled:pointer-events-none disabled:bg-disabled disabled:text-muted disabled:shadow-none " +
  "aria-disabled:pointer-events-none aria-disabled:bg-disabled aria-disabled:text-muted aria-disabled:shadow-none";

type Size = keyof typeof SIZES;
type Variant = keyof typeof VARIANTS;

type CommonProps = {
  size?: Size;
  variant?: Variant;
  /** Trailing icon, as in the Figma buttons (e.g. arrow-right, gift). */
  icon?: IconName;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };
type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function buttonClasses({
  size = "lg",
  variant = "olive",
  className = "",
}: Pick<CommonProps, "size" | "variant" | "className"> = {}) {
  return `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;
}

export function Button(props: ButtonProps) {
  const { size = "lg", variant = "olive", icon, className, children } = props;
  const classes = buttonClasses({ size, variant, className });
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={size === "lg" ? 24 : 20} />}
    </>
  );

  if (props.href !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { size: _s, variant: _v, icon: _i, className: _c, children: _ch, ...rest } = props;
    return (
      <Link {...rest} className={classes}>
        {content}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size: _s, variant: _v, icon: _i, className: _c, children: _ch, ...rest } = props;
  return (
    <button type="button" {...rest} className={classes}>
      {content}
    </button>
  );
}
