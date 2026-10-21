import { PRODUCTS } from "@/data/products";

/** Orderable items: the featured bakes plus a mixed box. */
export const DELIVERY_ITEMS = [
  { id: "assorted", name: "Assorted Matcha Box" },
  ...PRODUCTS.map(({ id, name }) => ({ id, name })),
] as const;

export type DeliveryRequest = {
  name: string;
  email: string;
  address: string;
  date: string; // YYYY-MM-DD
  item: string;
  gift: boolean;
  recipient?: string;
  note?: string;
};

/** Local YYYY-MM-DD for today. */
export function todayISO(now = new Date()) {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** True for a real calendar date in YYYY-MM-DD form on or after `earliest`. */
export function isDeliveryDate(value: unknown, earliest = todayISO()): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00`);
  return !Number.isNaN(parsed.getTime()) && todayISO(parsed) === value && value >= earliest;
}
