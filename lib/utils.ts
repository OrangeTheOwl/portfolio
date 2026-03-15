const PLACEHOLDER_PATTERNS = [
	"your.",
	"yourusername",
	"yourprofile",
	"example.com",
	"demo.example.com",
];

type Locale = "en" | "sl";

const DATE_LOCALE_BY_LANGUAGE: Record<Locale, string> = {
	en: "en-US",
	sl: "sl-SI",
};

export function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export function formatMonthYear(dateValue?: string | Date, locale: Locale = "en") {
	if (!dateValue) return "";

	const date = new Date(dateValue);
	if (Number.isNaN(date.getTime())) return "";

	return new Intl.DateTimeFormat(DATE_LOCALE_BY_LANGUAGE[locale], {
		month: "short",
		year: "numeric",
	}).format(date);
}

export function formatProjectDate(dateValue: string, locale: Locale = "en") {
	return formatMonthYear(dateValue, locale) || dateValue;
}

export function calculateDuration(startDate: string | Date, endDate?: string | Date, locale: Locale = "en") {
	const start = new Date(startDate);
	const end = endDate ? new Date(endDate) : new Date();

	if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
		return "";
	}

	let months = (end.getFullYear() - start.getFullYear()) * 12;
	months += end.getMonth() - start.getMonth();

	if (end.getDate() < start.getDate()) {
		months -= 1;
	}

	const safeMonths = Math.max(months, 0);
	const years = Math.floor(safeMonths / 12);
	const remainingMonths = safeMonths % 12;

	if (locale === "sl") {
		if (years === 0) return `${remainingMonths} mes`;
		if (remainingMonths === 0) return `${years} let`;

		return `${years} let ${remainingMonths} mes`;
	}

	if (years === 0) return `${remainingMonths} mo`;
	if (remainingMonths === 0) return `${years} yr`;

	return `${years} yr ${remainingMonths} mo`;
}

export function isConfiguredValue(value?: string | null) {
	if (!value) return false;

	const normalized = value.trim().toLowerCase();
	if (!normalized) return false;

	return !PLACEHOLDER_PATTERNS.some((pattern) => normalized.includes(pattern));
}

export function isExternalUrl(value?: string) {
	if (!value) return false;

	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch {
		return false;
	}
}

export function compactList(items: Array<string | null | undefined>) {
	return items
		.map((item) => item?.trim())
		.filter((item): item is string => Boolean(item));
}
