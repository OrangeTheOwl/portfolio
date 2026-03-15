export interface ContactPayload {
	name: string;
	email: string;
	message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: unknown): { data?: ContactPayload; error?: string } {
	if (!payload || typeof payload !== "object") {
		return { error: "Invalid request payload." };
	}

	const { email, message, name } = payload as Record<string, unknown>;

	if (typeof name !== "string" || name.trim().length < 2) {
		return { error: "Please provide your name." };
	}

	if (typeof email !== "string" || !emailPattern.test(email.trim())) {
		return { error: "Please provide a valid email address." };
	}

	if (typeof message !== "string" || message.trim().length < 10) {
		return { error: "Please provide a longer message." };
	}

	return {
		data: {
			name: name.trim(),
			email: email.trim(),
			message: message.trim(),
		},
	};
}
