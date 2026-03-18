import { NextResponse } from "next/server";
import { CONTACT_CONFIG } from "@/data/constants";
import { validateContactPayload, sendContactEmail } from "@/lib/email";
import { isConfiguredValue } from "@/lib/utils";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const result = validateContactPayload(payload);

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  if (!isConfiguredValue(CONTACT_CONFIG.recipientEmail)) {
    return NextResponse.json(
      { error: "Contact handling is not configured yet." },
      { status: 501 },
    );
  }

  const { error } = await sendContactEmail(result.data!);

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}