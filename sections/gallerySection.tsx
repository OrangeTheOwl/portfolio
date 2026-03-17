"use client";

import GalleryItem from "@/components/cards/GalleryItem";
import MasonryGallery from "@/components/ui/MasonryGallery";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURES } from "@/data/constants";
import { galleryItems } from "@/data/gallery";
import { getCopy, getTranslatedGalleryItem, Locale } from "@/lib/i18n";

export default function GallerySection({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const localizedGalleryItems = galleryItems.map((item) => getTranslatedGalleryItem(item, locale));
  const imageSources = localizedGalleryItems.map((item) => item.image);

  if (!FEATURES.showGallery || galleryItems.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={text.sections.gallery.eyebrow}
          title={text.sections.gallery.title}
          description={text.sections.gallery.description}
        />

        <div className="mt-16">
          <MasonryGallery
            images={imageSources}
            altTextPrefix={text.sections.gallery.title}
            columns={{ mobile: 1, tablet: 2, desktop: 3 }}
            gap={6}
            rounded={false}
            renderItem={({ index, aspectRatio }) => {
              const item = localizedGalleryItems[index];
              if (!item) return null;

              return <GalleryItem item={item} locale={locale} aspectRatio={aspectRatio} />;
            }}
          />
        </div>
      </div>
    </section>
  );
}