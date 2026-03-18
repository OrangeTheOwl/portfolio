"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { getCopy, Locale } from "@/lib/i18n";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactSection({ locale }: { locale: Locale }) {
	const text = getCopy(locale);

	return (
		<section id="contact" className="bg-neutral-50 py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
					<SectionHeading
						eyebrow={text.sections.contact.eyebrow}
						title={text.sections.contact.title}
						description={text.sections.contact.description}
					/>

          <ContactForm locale={locale} />
				</div>
			</div>
		</section>
	);
}

export function ContactForm({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
      setErrorMsg(json.error ?? "Something went wrong.");
      setStatus("error");
    } else {
      setStatus("success");
    }
  }

  if (status === "success") {
    return <p className="mt-6 text-sm font-medium text-green-600">Message sent! I'll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 max-w-lg mx-auto">
      <input required name="name" placeholder="Your name" className="rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900" />
      <input required name="email" type="email" placeholder="your@email.com" className="rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900" />
      <textarea required name="message" rows={5} placeholder="Your message..." className="rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 resize-none" />
      {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}
      <Button type="submit" disabled={status === "loading"} className="w-fit mx-auto">
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}