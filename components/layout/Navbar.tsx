"use client";

import { PERSONAL_INFO, UI_CONFIG } from "@/data/constants";
import { getCopy, Locale, resolveLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { CloseIcon, GlobeIcon, MenuIcon, MoonIcon, SunIcon } from "@/components/ui/Icons";

const NAV_IDS = ["projects", "experience", "gallery", "about", "contact"] as const;
type Theme = "light" | "dark";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang"));
  const text = getCopy(locale);

  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const didInitLanguagePreference = useRef(false);

  const navItems = useMemo(
    () => NAV_IDS.map((id) => ({ id, label: text.nav.labels[id] })),
    [text],
  );

  const primaryNavItems = useMemo(
    () => navItems.filter((item) => item.id !== "contact"),
    [navItems],
  );

  const updateLanguage = useCallback(
    (nextLocale: Locale) => {
      const params = new URLSearchParams(searchParams.toString());

      if (nextLocale === "en") {
        params.delete("lang");
      } else {
        params.set("lang", nextLocale);
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (didInitLanguagePreference.current) {
      return;
    }

    didInitLanguagePreference.current = true;

    if (searchParams.get("lang")) {
      return;
    }

    const storedLanguage = window.localStorage.getItem("portfolio:language");

    if (storedLanguage === "sl") {
      updateLanguage("sl");
    }
  }, [searchParams, updateLanguage]);

  useEffect(() => {
    window.localStorage.setItem("portfolio:language", locale);
  }, [locale]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio:theme");
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme: Theme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : prefersDarkMode
          ? "dark"
          : "light";

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio:theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const anchorY = window.scrollY + Math.abs(UI_CONFIG.scrollOffset) + 120;
      let nextActiveSection = "";

      for (const id of NAV_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (anchorY >= top) {
          nextActiveSection = id;
        }

        if (anchorY >= top && anchorY < bottom) {
          nextActiveSection = id;
          break;
        }
      }

      setActiveSection((currentSection) =>
        currentSection === nextActiveSection ? currentSection : nextActiveSection,
      );
    };

    const handleViewportChange = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, [locale]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY + UI_CONFIG.scrollOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const themeLabel = theme === "dark" ? text.nav.theme.light : text.nav.theme.dark;
  const modeLabel =
    theme === "dark"
      ? locale === "sl"
        ? "Svetli"
        : "Light"
      : locale === "sl"
        ? "Temni"
        : "Dark";

  const renderLanguageToggle = (size: "compact" | "regular" = "regular") => (
    <div
      className={cn(
        "inline-flex items-center rounded-xl border border-neutral-200 bg-white p-1 shadow-sm",
        size === "compact" ? "gap-1" : "gap-2",
      )}
      aria-label={text.nav.language}
      role="group"
    >
      <span className="flex h-8 w-8 items-center justify-center text-neutral-500" aria-hidden="true">
        <GlobeIcon className="h-4 w-4" />
      </span>
      <button
        onClick={() => {
          setIsMenuOpen(false);
          updateLanguage("en");
        }}
        className={cn(
          "rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
          locale === "en"
            ? "bg-primary-500 text-white"
            : "text-neutral-600 hover:bg-neutral-100",
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => {
          setIsMenuOpen(false);
          updateLanguage("sl");
        }}
        className={cn(
          "rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
          locale === "sl"
            ? "bg-primary-500 text-white"
            : "text-neutral-600 hover:bg-neutral-100",
        )}
        aria-pressed={locale === "sl"}
      >
        SL
      </button>
    </div>
  );

  return (
    <>
      <nav
        className={`
          hidden lg:block
          sticky top-5 z-50 mx-5
          transition-all duration-300
          ${isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg" 
            : "bg-white/90 backdrop-blur-sm shadow-md"
          }
          rounded-2xl border border-neutral-200
        `}
      >
        <div className="flex items-center justify-between px-6 py-3">
          
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }}
            className="text-xl font-bold flex items-center gap-2 group"
          >
            <span className="text-primary-500 group-hover:text-primary-600 transition-colors duration-200">
              {PERSONAL_INFO.firstName}
            </span>
            <span className="text-dark-900 group-hover:text-primary-500 transition-colors duration-200">
              {PERSONAL_INFO.lastName}
            </span>
          </button>

          <div className="flex items-center gap-1">
            {primaryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-5 py-2.5 rounded-xl
                  text-sm font-medium
                  transition-all duration-300
                  ${activeSection === item.id
                    ? "text-white"
                    : "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                  }
                `}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {activeSection === item.id && (
                  <span
                    className="absolute inset-0 bg-primary-500 rounded-xl -z-10"
                    style={{
                      boxShadow: "0 4px 12px rgba(241, 93, 14, 0.3)",
                    }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {renderLanguageToggle("compact")}

            <button
              onClick={toggleTheme}
              className="
                inline-flex h-10 w-10 items-center justify-center rounded-xl
                border border-neutral-200 bg-white text-neutral-700
                shadow-sm transition-all duration-200 hover:border-primary-200 hover:text-primary-600
              "
              aria-label={themeLabel}
              title={themeLabel}
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="
                px-6 py-2.5
                bg-primary-500 hover:bg-primary-600 
                text-white font-semibold rounded-xl
                shadow-md hover:shadow-lg
                transition-all duration-200
                hover:scale-105
              "
            >
              {text.nav.talkButton}
            </button>
          </div>
        </div>
      </nav>

      <nav className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-200">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
              setIsMenuOpen(false);
            }}
            className="text-lg font-bold flex items-center gap-2"
          >
            <span className="text-primary-500">{PERSONAL_INFO.firstName}</span>
            <span className="text-dark-900">{PERSONAL_INFO.lastName}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-700"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? text.nav.mobileMenu.close : text.nav.mobileMenu.open}
          >
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-neutral-200 bg-white shadow-lg" id="mobile-navigation">
            <div className="flex items-center justify-between gap-3 border-b border-neutral-200 px-4 py-3">
              {renderLanguageToggle("regular")}

              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700"
                aria-label={themeLabel}
              >
                {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
                <span>{modeLabel}</span>
              </button>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full px-6 py-4 text-left font-medium transition-colors duration-200",
                  activeSection === item.id
                    ? "border-l-4 border-primary-500 bg-primary-50 text-primary-600"
                    : "text-neutral-700 hover:bg-neutral-50",
                  item.id === "contact" && "border-t-2 border-neutral-100",
                )}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}