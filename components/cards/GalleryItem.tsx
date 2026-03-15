import Image from "next/image";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ExternalLinkIcon } from "@/components/ui/Icons";
import { getCopy, Locale, translateGalleryCategory } from "@/lib/i18n";
import { formatMonthYear, isConfiguredValue, isExternalUrl } from "@/lib/utils";
import { GalleryItem as GalleryEntry } from "@/types/galleryItem";

interface GalleryItemProps {
	item: GalleryEntry;
	locale: Locale;
}

export default function GalleryItem({ item, locale }: GalleryItemProps) {
	const text = getCopy(locale);
	const hasExternalLink = isConfiguredValue(item.externalLink) && isExternalUrl(item.externalLink);

	return (
		<article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg">
			<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
				<Image
					src={item.image}
					alt={item.title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
					quality={85}
				/>
			</div>

			<div className="space-y-4 p-5">
				<div className="flex flex-wrap items-center gap-2">
					<Badge className="border-primary-200 bg-primary-50 text-primary-700">{translateGalleryCategory(item.category, locale)}</Badge>
					{item.date ? (
						<Badge className="border-neutral-200 bg-neutral-100 text-neutral-700">{formatMonthYear(item.date, locale)}</Badge>
					) : null}
				</div>

				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-dark-900">{item.title}</h3>
					<p className="text-sm leading-6 text-neutral-600">{item.description}</p>
				</div>

				{item.tags && item.tags.length > 0 ? (
					<div className="flex flex-wrap gap-2">
						{item.tags.map((tag) => (
							<Badge key={tag} className="border-secondary-200 bg-secondary-50 text-secondary-700">
								{tag}
							</Badge>
						))}
					</div>
				) : null}

				{hasExternalLink ? (
					<Button className="gap-2" href={item.externalLink} rel="noopener noreferrer" size="sm" target="_blank" variant="ghost">
						<ExternalLinkIcon className="h-4 w-4" />
						{text.sections.gallery.openReference}
					</Button>
				) : null}
			</div>
		</article>
	);
}
