import Button from "@/components/ui/Button";
import HeroLineBackground from "@/components/ui/HeroLineBackground";
import { PERSONAL_INFO } from "@/data/constants";
import { getCopy, Locale } from "@/lib/i18n";

interface HeroSectionProps {
	locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
	const text = getCopy(locale);

	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-white to-neutral-50 py-20 sm:py-24">
			<HeroLineBackground />

			<div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl space-y-8 text-center">
					<span className="mx-auto inline-flex rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
						{text.personal.availability}
					</span>

					<div className="space-y-6">
						<p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
							{text.personal.title}
						</p>
						<h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-dark-900 sm:text-6xl">
							{PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
						</h1>
						<p className="mx-auto max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">
							{text.personal.tagline}. {text.hero.introSuffix}
						</p>
					</div>

					<div className="flex flex-wrap items-center justify-center gap-3">
						<Button href="#projects">{text.hero.seeProjects}</Button>
						<Button href="#experience" variant="ghost">
							{text.hero.viewExperience}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
