import GalleryItem from "@/components/cards/GalleryItem";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURES } from "@/data/constants";
import { galleryItems } from "@/data/gallery";
import { getCopy, getTranslatedGalleryItem, Locale } from "@/lib/i18n";

export default function GallerySection({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const localizedGalleryItems = galleryItems.map((item) => getTranslatedGalleryItem(item, locale));

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

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {localizedGalleryItems.map((item) => (
            <GalleryItem item={item} key={item.id} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}