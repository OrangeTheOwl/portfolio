import ContactEmail from "@/components/templates/ContactEmail";
import { CONTACT_CONFIG } from "@/data/constants";
import { createElement } from "react";
import { Resend } from "resend";

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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactPayload): Promise<{ error?: string }> {
  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>", // must match your verified Resend domain
    to: process.env.RESEND_RECIPIENT_EMAIL!,
    replyTo: data.email,        // so you can just hit Reply in your inbox
    subject: `New message from ${data.name}`,
    react: createElement(ContactEmail, data),
  });

  if (error) {
    console.error("Resend error:", error);
    return { error: "Failed to send message. Please try again." };
  }

  return {};
}