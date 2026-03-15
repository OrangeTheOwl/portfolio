import { NextResponse } from "next/server";

import { CONTACT_CONFIG } from "@/data/constants";
import { validateContactPayload } from "@/lib/email";
import { isConfiguredValue } from "@/lib/utils";

export async function POST(request: Request) {
	const payload = await request.json().catch(() => null);
	const result = validateContactPayload(payload);

	if (result.error) {
		return NextResponse.json({ error: result.error }, { status: 400 });
	}

	if (!isConfiguredValue(CONTACT_CONFIG.recipientEmail)) {
		return NextResponse.json(
			{
				error: "Contact handling is not configured yet. Add a recipient email and mail transport before enabling the form.",
			},
			{ status: 501 },
		);
	}

	return NextResponse.json(
		{
			error: "Message validation passed, but email delivery is not implemented yet.",
			submission: result.data,
		},
		{ status: 501 },
	);
}
