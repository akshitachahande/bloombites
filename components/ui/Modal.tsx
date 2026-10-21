"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
};

/**
 * Accessible dialog on top of the native <dialog> element: showModal() gives
 * focus trapping, an inert page and Escape-to-close; clicking the backdrop
 * also closes it.
 */
export function Modal({ open, onClose, title, description, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Keep the page behind from scrolling while open.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = prev;
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={description ? descId : undefined}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[min(480px,calc(100vw-32px))] rounded-[32px] bg-cream p-0 text-ink shadow-2xl backdrop:bg-ink/50"
    >
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-full text-2xl leading-none text-olive hover:bg-olive/15 focus-visible:outline-2 focus-visible:outline-olive"
        >
          ×
        </button>
        <h2 id={titleId} className="pr-10 font-display text-[40px] leading-[1.2] font-bold text-olive">
          {title}
        </h2>
        {description && (
          <p id={descId} className="mt-2 text-sm leading-6">
            {description}
          </p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </dialog>
  );
}
