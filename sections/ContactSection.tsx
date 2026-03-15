import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/constants";
import { getCopy, Locale } from "@/lib/i18n";
import { isConfiguredValue } from "@/lib/utils";

export default function ContactSection({ locale }: { locale: Locale }) {
	const text = getCopy(locale);
	const email = isConfiguredValue(PERSONAL_INFO.email) ? PERSONAL_INFO.email : undefined;
	const github = isConfiguredValue(SOCIAL_LINKS.github) ? SOCIAL_LINKS.github : undefined;
	const linkedin = isConfiguredValue(SOCIAL_LINKS.linkedin) ? SOCIAL_LINKS.linkedin : undefined;

	return (
		<section id="contact" className="bg-neutral-50 py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
					<SectionHeading
						eyebrow={text.sections.contact.eyebrow}
						title={text.sections.contact.title}
						description={text.sections.contact.description}
					/>

					<div className="mt-10 flex flex-wrap items-center gap-3">
						{email ? <Button href={`mailto:${email}`}>{text.sections.contact.emailMe}</Button> : null}
						{github ? (
							<Button href={github} rel="noopener noreferrer" target="_blank" variant="ghost">
								{text.sections.contact.github}
							</Button>
						) : null}
						{linkedin ? (
							<Button href={linkedin} rel="noopener noreferrer" target="_blank" variant="ghost">
								{text.sections.contact.linkedin}
							</Button>
						) : null}
					</div>

					{!email && !github && !linkedin ? (
						<p className="mt-6 text-sm font-medium text-neutral-500">
							{text.sections.contact.configHint}
						</p>
					) : null}
				</div>
			</div>
		</section>
	);
}
