"use client";

import { PERSONAL_INFO } from "@/data/constants";
import { getCopy, resolveLocale } from "@/lib/i18n";
import { useSearchParams } from "next/navigation";

export default function Footer() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang"));
  const text = getCopy(locale);

  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-8 text-center text-sm text-neutral-600 sm:px-6 lg:px-8">
      <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}. {text.footer.builtWith}</p>
    </footer>
  );
}