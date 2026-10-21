"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import { Icon } from "./Icon";

type CarouselProps = {
  /** Accessible name for the carousel region. */
  label: string;
  children: ReactNode;
  /** Width classes for the viewport — one item is shown at a time. */
  viewportClassName?: string;
  className?: string;
};

const ARROW =
  "inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-olive text-black transition-opacity " +
  "disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/**
 * One-at-a-time carousel from the mobile Figma frames: olive circle arrows
 * either side of a scroll-snap track, so swiping works as well as the arrows.
 */
export function Carousel({ label, children, viewportClassName = "w-[250px]", className = "" }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);
  const last = items.length - 1;

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: i * track.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (track) setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={`flex items-center justify-center gap-5 ${className}`}
    >
      <button
        type="button"
        className={ARROW}
        aria-label="Previous"
        disabled={index <= 0}
        onClick={() => goTo(index - 1)}
      >
        <Icon name="arrow-left" size={40} />
      </button>

      <ul
        ref={trackRef}
        onScroll={onScroll}
        className={`flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${viewportClassName}`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="w-full shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            aria-hidden={i !== index}
            inert={i !== index}
          >
            {item}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={ARROW}
        aria-label="Next"
        disabled={index >= last}
        onClick={() => goTo(index + 1)}
      >
        <Icon name="arrow-right" size={40} />
      </button>
    </div>
  );
}
