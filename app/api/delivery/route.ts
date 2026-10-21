import { DELIVERY_ITEMS, isDeliveryDate, todayISO, type DeliveryRequest } from "@/lib/delivery";
import { isEmail, isText } from "@/lib/validation";

/**
 * Delivery / gift box requests. Validates the order and logs it; connect a
 * real order system or notification email when one is chosen.
 */
export async function POST(request: Request) {
  let body: Partial<DeliveryRequest>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const error = validate(body);
  if (error) return Response.json({ error }, { status: 400 });

  console.log("[delivery]", JSON.stringify({ ...body, email: body.email!.toLowerCase() }));
  return Response.json({ ok: true });
}

function validate(b: Partial<DeliveryRequest>): string | null {
  if (!isText(b.name, 100)) return "Please enter your name.";
  if (!isEmail(b.email)) return "Please enter a valid email address.";
  if (!isText(b.address, 300)) return "Please enter a delivery address.";
  // One day of slack: the visitor's "today" may be behind the server's timezone.
  const earliest = todayISO(new Date(Date.now() - 24 * 60 * 60 * 1000));
  if (!isDeliveryDate(b.date, earliest)) return "Please choose a delivery date from today onwards.";
  if (!DELIVERY_ITEMS.some((i) => i.id === b.item)) return "Please choose what you’d like delivered.";
  if (typeof b.gift !== "boolean") return "Invalid request.";
  if (b.gift && !isText(b.recipient, 100)) return "Please tell us who the gift is for.";
  if (b.note !== undefined && (typeof b.note !== "string" || b.note.length > 200)) {
    return "Gift notes can be up to 200 characters.";
  }
  return null;
}
