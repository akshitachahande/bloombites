"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Modal } from "@/components/ui/Modal";
import { SubscribeForm } from "./SubscribeForm";

export type FormName = "subscribe";

type FormsState = {
  open: (form: FormName) => void;
};

const FormsContext = createContext<FormsState | null>(null);

/**
 * Hosts the site's modal forms once, at the layout level, so any button
 * (header, mobile drawer, page sections) can open them.
 */
export function FormsProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<FormName | null>(null);
  // Bumped on every open so each visit starts with a fresh form.
  const [session, setSession] = useState(0);

  const open = (form: FormName) => {
    setSession((s) => s + 1);
    setActive(form);
  };
  const close = () => setActive(null);

  return (
    <FormsContext.Provider value={{ open }}>
      {children}
      <Modal
        open={active === "subscribe"}
        onClose={close}
        title="Join Our Community"
        description="Be first to hear about seasonal bakes, new branches and members-only treats."
      >
        <SubscribeForm key={session} />
      </Modal>
    </FormsContext.Provider>
  );
}

export function useForms() {
  const ctx = useContext(FormsContext);
  if (!ctx) throw new Error("useForms must be used inside <FormsProvider>");
  return ctx;
}
