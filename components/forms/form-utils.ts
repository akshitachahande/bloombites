export const LABEL = "flex flex-col gap-1.5 text-sm";

export const INPUT =
  "w-full rounded-[57px] border border-olive/40 bg-white px-4 py-2.5 text-base text-ink outline-none " +
  "placeholder:text-black/40 focus-visible:border-olive focus-visible:ring-2 focus-visible:ring-olive/40 " +
  "aria-invalid:border-error";

type PostResult = { ok: true } | { ok: false; error: string };

/** POST JSON and normalise the result into ok / error-message. */
export async function postJson(url: string, data: unknown): Promise<PostResult> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) return { ok: true };
    const body = (await res.json().catch(() => null)) as { error?: string } | null;
    return { ok: false, error: body?.error ?? "Something went wrong. Please try again." };
  } catch {
    return { ok: false, error: "Couldn’t reach the server. Check your connection and try again." };
  }
}
