import { isEmail } from "@/lib/validation";

/**
 * Newsletter signup. Validates the email and logs it; swap the log for a
 * real provider (e.g. Resend, Mailchimp) when one is chosen.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = (body as { email?: unknown })?.email;
  if (!isEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  console.log(`[subscribe] ${email.toLowerCase()}`);
  return Response.json({ ok: true });
}
