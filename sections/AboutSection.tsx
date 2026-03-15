import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/constants";
import { experiences } from "@/data/experience";
import { getCopy, Locale, template } from "@/lib/i18n";

export default function AboutSection({ locale }: { locale: Locale }) {
	const text = getCopy(locale);
	const paragraphOne = template(text.sections.about.paragraphOne, {
		name: PERSONAL_INFO.firstName,
	});
	const paragraphTwo = template(text.sections.about.paragraphTwo, {
		roles: experiences.length,
	});

	return (
		<section id="about" className="bg-white py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
					<SectionHeading
						eyebrow={text.sections.about.eyebrow}
						title={text.sections.about.title}
						description={text.sections.about.description}
					/>

					<div className="space-y-6 text-base leading-8 text-neutral-600">
						<p>
							{paragraphOne}
						</p>
						<p>
							{paragraphTwo}
						</p>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
								<p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">{text.sections.about.focusLabel}</p>
								<p className="mt-3 text-lg font-semibold text-dark-900">{text.sections.about.focusValue}</p>
							</div>
							<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
								<p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">{text.sections.about.approachLabel}</p>
								<p className="mt-3 text-lg font-semibold text-dark-900">{text.sections.about.approachValue}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
