import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={cn("flex flex-col gap-4", isCentered && "items-center text-center", className)}>
      {eyebrow ? (
        <span className="inline-flex w-fit rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
          {eyebrow}
        </span>
      ) : null}

      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-dark-900 sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className={cn("max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg", isCentered && "mx-auto")}>
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  );
}