"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Badge from "@/components/ui/Badge";
import { ExternalLinkIcon } from "@/components/ui/Icons";
import { getCopy, Locale } from "@/lib/i18n";
import { isConfiguredValue, isExternalUrl } from "@/lib/utils";
import { GalleryItem as GalleryEntry } from "@/types/galleryItem";

interface GalleryItemProps {
	item: GalleryEntry;
	locale: Locale;
	aspectRatio?: string | number;
}

export default function GalleryItem({ item, locale, aspectRatio = "4 / 3" }: GalleryItemProps) {
	const text = getCopy(locale);
	const hasExternalLink = isConfiguredValue(item.externalLink) && isExternalUrl(item.externalLink);
	const hasTags = Boolean(item.tags && item.tags.length > 0);

	return (
		<motion.article
			className="group h-full w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg"
			whileHover={{
				y: -8,
				scale: 1.015,
				transition: {
					duration: 0.3,
					ease: [0.25, 0.1, 0.25, 1],
				},
			}}
		>
			<div className="relative w-full overflow-hidden bg-neutral-100" style={{ aspectRatio }}>
				<motion.div className="relative h-full w-full" transition={{ duration: 0.4 }} whileHover={{ scale: 1.05 }}>
					<Image
						src={item.image}
						alt={item.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover"
						quality={85}
					/>
				</motion.div>

				<div className="absolute inset-0 bg-gradient-to-t from-dark-900/85 via-dark-900/30 to-transparent" />

				<div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
					<div
						className="
							space-y-3 text-white
							opacity-0 translate-y-4 transition-all duration-300 ease-out
							group-hover:translate-y-0 group-hover:opacity-100
						"
					>
						<div className="space-y-1.5">
							<h3 className="text-outline-soft text-lg font-semibold leading-tight">{item.title}</h3>
							<p className="text-outline-soft line-clamp-3 text-sm leading-5 text-white/90">{item.description}</p>
						</div>

						{hasTags ? (
							<div className="flex flex-wrap gap-2">
								{item.tags?.map((tag) => (
									<Badge key={tag} className="text-outline-soft border-white/35 bg-white/15 text-white backdrop-blur-sm">
										{tag}
									</Badge>
								))}
							</div>
						) : null}

						{hasExternalLink ? (
							<a
								href={item.externalLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-outline-soft inline-flex items-center gap-1.5 text-sm font-semibold text-white underline decoration-white/60 underline-offset-4 transition-colors hover:text-primary-100"
							>
								{text.sections.gallery.openReference}
								<ExternalLinkIcon className="h-4 w-4" />
							</a>
						) : null}
					</div>
				</div>
			</div>
		</motion.article>
	);
}
