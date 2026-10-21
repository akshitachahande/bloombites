"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { INPUT, LABEL, postJson } from "./form-utils";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; message: string };

/** "Join Our Community" email signup, posted to /api/subscribe. */
export function SubscribeForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    setStatus({ kind: "sending" });
    const result = await postJson("/api/subscribe", { email });
    setStatus(result.ok ? { kind: "done" } : { kind: "error", message: result.error });
  }

  if (status.kind === "done") {
    return (
      <p role="status" className="text-base leading-7">
        Thank you — you’re on the list. Watch your inbox for new bakes and blossom-season
        specials.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <label className={LABEL}>
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={INPUT}
          aria-invalid={status.kind === "error" || undefined}
        />
      </label>

      {status.kind === "error" && (
        <p role="alert" className="text-sm text-error">
          {status.message}
        </p>
      )}

      <Button type="submit" size="md" icon="arrow-right" disabled={status.kind === "sending"} className="self-start">
        {status.kind === "sending" ? "Joining…" : "Join"}
      </Button>
    </form>
  );
}
