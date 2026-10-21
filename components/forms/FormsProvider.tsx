"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Modal } from "@/components/ui/Modal";
import { DeliveryForm } from "./DeliveryForm";
import { SubscribeForm } from "./SubscribeForm";

export type FormName = "subscribe" | "delivery" | "gift";

type FormsState = {
  open: (form: FormName) => void;
};

const FormsContext = createContext<FormsState | null>(null);

const MODALS: Record<FormName, { title: string; description: string }> = {
  subscribe: {
    title: "Join Our Community",
    description: "Be first to hear about seasonal bakes, new branches and members-only treats.",
  },
  delivery: {
    title: "Schedule a Delivery",
    description: "Fresh matcha bakes, delivered across NYC on the day you choose.",
  },
  gift: {
    title: "Send a Gift Box",
    description: "A box of matcha bakes with your note, delivered to someone you love.",
  },
};

/**
 * Hosts the site's modal forms once, at the layout level, so any button
 * (header, mobile drawer, page sections) can open them. Forms mount only
 * while open, so each visit starts fresh.
 */
export function FormsProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<FormName | null>(null);
  // Only clear if this modal is still active: a dialog's close event fires
  // asynchronously and must not close a different modal opened meanwhile.
  const close = (name: FormName) => setActive((a) => (a === name ? null : a));

  return (
    <FormsContext.Provider value={{ open: setActive }}>
      {children}
      {(Object.keys(MODALS) as FormName[]).map((name) => (
        <Modal
          key={name}
          open={active === name}
          onClose={() => close(name)}
          title={MODALS[name].title}
          description={MODALS[name].description}
        >
          {active === name &&
            (name === "subscribe" ? <SubscribeForm /> : <DeliveryForm initialGift={name === "gift"} />)}
        </Modal>
      ))}
    </FormsContext.Provider>
  );
}

export function useForms() {
  const ctx = useContext(FormsContext);
  if (!ctx) throw new Error("useForms must be used inside <FormsProvider>");
  return ctx;
}
