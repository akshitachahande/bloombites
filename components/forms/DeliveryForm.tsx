"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { DELIVERY_ITEMS, todayISO } from "@/lib/delivery";
import { INPUT, LABEL, postJson } from "./form-utils";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; message: string };

/** Schedule a Delivery / Send a Gift Box, posted to /api/delivery. */
export function DeliveryForm({ initialGift = false }: { initialGift?: boolean }) {
  const [gift, setGift] = useState(initialGift);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  // Mounted only while the modal is open, so "today" is always current.
  const [minDate] = useState(todayISO);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    setStatus({ kind: "sending" });
    const result = await postJson("/api/delivery", {
      name: get("name"),
      email: get("email"),
      address: get("address"),
      date: get("date"),
      item: get("item"),
      gift,
      ...(gift && { recipient: get("recipient"), note: get("note") }),
    });
    setStatus(result.ok ? { kind: "done" } : { kind: "error", message: result.error });
  }

  if (status.kind === "done") {
    return (
      <p role="status" className="text-base leading-7">
        {gift
          ? "Your gift box is booked! We’ll email you to confirm the delivery details."
          : "Your delivery is booked! We’ll email you to confirm the details."}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={LABEL}>
          Your name
          <input name="name" required maxLength={100} autoComplete="name" className={INPUT} />
        </label>
        <label className={LABEL}>
          Email
          <input name="email" type="email" required autoComplete="email" className={INPUT} />
        </label>
      </div>

      <label className={LABEL}>
        Delivery address
        <input
          name="address"
          required
          maxLength={300}
          autoComplete="street-address"
          placeholder="Street, apartment, borough"
          className={INPUT}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={LABEL}>
          Delivery date
          <input name="date" type="date" required min={minDate} className={INPUT} />
        </label>
        <label className={LABEL}>
          What to send
          <select name="item" required defaultValue="assorted" className={INPUT}>
            {DELIVERY_ITEMS.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={gift}
          onChange={(e) => setGift(e.target.checked)}
          className="size-5 accent-olive"
        />
        This is a gift
      </label>

      {gift && (
        <div className="flex flex-col gap-4 rounded-3xl bg-white/60 p-4">
          <label className={LABEL}>
            Recipient’s name
            <input name="recipient" required maxLength={100} className={INPUT} />
          </label>
          <label className={LABEL}>
            Gift note <span className="text-muted">(optional, up to 200 characters)</span>
            <textarea
              name="note"
              maxLength={200}
              rows={3}
              className={`${INPUT} resize-none rounded-3xl`}
            />
          </label>
        </div>
      )}

      {status.kind === "error" && (
        <p role="alert" className="text-sm text-error">
          {status.message}
        </p>
      )}

      <Button
        type="submit"
        size="md"
        variant={gift ? "olive" : "blossom"}
        icon={gift ? "gift" : "calendar"}
        disabled={status.kind === "sending"}
        className="self-start"
      >
        {status.kind === "sending" ? "Booking…" : gift ? "Send Gift Box" : "Schedule Delivery"}
      </Button>
    </form>
  );
}
