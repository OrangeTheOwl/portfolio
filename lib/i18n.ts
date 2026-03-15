import { Experience } from "@/types/experience";
import { GalleryCategory, GalleryItem } from "@/types/galleryItem";
import { Project, ProjectType } from "@/types/project";
import { ProficiencyLevel, SkillCategory } from "@/types/skill";

export type Locale = "en" | "sl";

export const DEFAULT_LOCALE: Locale = "en";

export function resolveLocale(value?: string | null): Locale {
  return value === "sl" ? "sl" : "en";
}

export function getDateLocale(locale: Locale): string {
  return locale === "sl" ? "sl-SI" : "en-US";
}

type NavKey = "projects" | "experience" | "skills" | "gallery" | "about" | "contact";

interface CopyDictionary {
  nav: {
    labels: Record<NavKey, string>;
    talkButton: string;
    language: string;
    theme: {
      light: string;
      dark: string;
    };
    mobileMenu: {
      open: string;
      close: string;
    };
  };
  personal: {
    title: string;
    tagline: string;
    availability: string;
  };
  hero: {
    stats: {
      projects: string;
      roles: string;
      skills: string;
    };
    introSuffix: string;
    seeProjects: string;
    viewExperience: string;
  };
  sections: {
    projects: {
      eyebrow: string;
      title: string;
      description: string;
    };
    experience: {
      eyebrow: string;
      title: string;
      description: string;
    };
    skills: {
      eyebrow: string;
      title: string;
      description: string;
      itemsLabel: string;
      strengthArea: string;
    };
    gallery: {
      eyebrow: string;
      title: string;
      description: string;
      openReference: string;
    };
    about: {
      eyebrow: string;
      title: string;
      description: string;
      paragraphOne: string;
      paragraphTwo: string;
      focusLabel: string;
      focusValue: string;
      approachLabel: string;
      approachValue: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      emailMe: string;
      configHint: string;
      github: string;
      linkedin: string;
    };
  };
  cards: {
    project: {
      caseStudy: string;
      previewUnavailable: string;
      techStackFallback: string;
      noLinksFallback: string;
      code: string;
      liveDemo: string;
      openDetailsAria: string;
    };
    experience: {
      label: string;
      openDetailsAria: string;
      present: string;
    };
    details: {
      close: string;
      present: string;
      aboutProject: string;
      responsibilities: string;
      techStack: string;
      skillsAndTech: string;
      stackNotPublished: string;
      software: string;
      hardware: string;
      viewSource: string;
      viewDemo: string;
      gallery: string;
    };
  };
  footer: {
    builtWith: string;
  };
  units: {
    yearShort: string;
    monthShort: string;
  };
}

const copy: Record<Locale, CopyDictionary> = {
  en: {
    nav: {
      labels: {
        projects: "Projects",
        experience: "Experience",
        skills: "Skills",
        gallery: "Gallery",
        about: "About",
        contact: "Contact",
      },
      talkButton: "Let's Talk",
      language: "Language",
      theme: {
        light: "Switch to light mode",
        dark: "Switch to dark mode",
      },
      mobileMenu: {
        open: "Open navigation menu",
        close: "Close navigation menu",
      },
    },
    personal: {
      title: "Full-Stack Developer & Infrastructure Engineer",
      tagline: "Building scalable applications and reliable systems",
      availability: "Open to opportunities",
    },
    hero: {
      stats: {
        projects: "Projects",
        roles: "Roles",
        skills: "Core skills",
      },
      introSuffix:
        "I build across product interfaces, cross-platform applications, and the infrastructure work that keeps them reliable once they leave the prototype phase.",
      seeProjects: "See projects",
      viewExperience: "View experience",
    },
    sections: {
      projects: {
        eyebrow: "Selected work",
        title: "Projects that move from concept to usable product",
        description:
          "A mix of hackathon builds, client work, and production product engineering. Each card opens a fuller case study with context, stack, and supporting screenshots where available.",
      },
      experience: {
        eyebrow: "Experience",
        title: "Production work, infrastructure support, and hands-on shipping",
        description:
          "The timeline below covers both product engineering and the operational foundation behind it, from server rooms and internal tooling to cross-platform application delivery.",
      },
      skills: {
        eyebrow: "Skills",
        title: "Tools and technologies I reach for most",
        description:
          "This stack is built from recent delivery work: modern frontend frameworks, cross-platform mobile development, cloud services, and the practical tooling around them.",
        itemsLabel: "items",
        strengthArea: "Strength area",
      },
      gallery: {
        eyebrow: "Gallery",
        title: "Snapshots from prototypes, interfaces, and delivery work",
        description:
          "A lightweight visual layer for the portfolio that highlights shipped screens, supporting assets, and selected product explorations.",
        openReference: "Open reference",
      },
      about: {
        eyebrow: "About",
        title: "A builder mindset shaped by both product and infrastructure work",
        description:
          "My path started with hands-on IT support and systems work, then grew into full-stack product delivery and cross-platform application development.",
        paragraphOne:
          "{name} works across frontend delivery, mobile application development, and the operational work needed to keep products dependable. That combination shows up in both the project work and the experience timeline: product features on one side, infrastructure and support fundamentals on the other.",
        paragraphTwo:
          "Recent work spans {roles} roles with a consistent through-line: turning rough ideas into usable systems, then tightening the implementation so it performs well in real conditions instead of only looking good in a demo.",
        focusLabel: "Focus",
        focusValue: "Full-stack product delivery",
        approachLabel: "Approach",
        approachValue: "Practical, systems-aware engineering",
      },
      contact: {
        eyebrow: "Contact",
        title: "Open to thoughtful product work and technical collaboration",
        description:
          "If you want to discuss a role, a build, or a system that needs tightening up, use any configured channel below.",
        emailMe: "Email me",
        github: "GitHub",
        linkedin: "LinkedIn",
        configHint:
          "Contact links are not configured yet. Update the personal and social constants to enable direct reach-out actions here.",
      },
    },
    cards: {
      project: {
        caseStudy: "Case study",
        previewUnavailable: "Preview unavailable",
        techStackFallback: "Tech stack available inside the full case study.",
        noLinksFallback: "Open the card for the full breakdown.",
        code: "Code",
        liveDemo: "Live Demo",
        openDetailsAria: "Open project details for {title}",
      },
      experience: {
        label: "Experience",
        openDetailsAria: "Open experience details for {position} at {company}",
        present: "Present",
      },
      details: {
        close: "Close details",
        present: "Present",
        aboutProject: "About This Project",
        responsibilities: "Responsibilities",
        techStack: "Tech Stack",
        skillsAndTech: "Skills & Technologies",
        stackNotPublished: "Project stack details are not published for this entry yet.",
        software: "Software",
        hardware: "Hardware",
        viewSource: "View Source Code",
        viewDemo: "View Live Demo",
        gallery: "Gallery",
      },
    },
    footer: {
      builtWith: "Built with Next.js and Tailwind CSS.",
    },
    units: {
      yearShort: "yr",
      monthShort: "mo",
    },
  },
  sl: {
    nav: {
      labels: {
        projects: "Projekti",
        experience: "Izkušnje",
        skills: "Veščine",
        gallery: "Galerija",
        about: "O meni",
        contact: "Kontakt",
      },
      talkButton: "Pogovoriva se",
      language: "Jezik",
      theme: {
        light: "Preklopi na svetli način",
        dark: "Preklopi na temni način",
      },
      mobileMenu: {
        open: "Odpri navigacijski meni",
        close: "Zapri navigacijski meni",
      },
    },
    personal: {
      title: "Full-stack razvijalec in infrastrukturni inženir",
      tagline: "Gradim razširljive aplikacije in zanesljive sisteme",
      availability: "Odprt za priložnosti",
    },
    hero: {
      stats: {
        projects: "Projekti",
        roles: "Vloge",
        skills: "Ključne veščine",
      },
      introSuffix:
        "Razvijam uporabniške vmesnike, večplatformske aplikacije in infrastrukturne rešitve, ki poskrbijo, da sistemi ostanejo zanesljivi tudi po fazi prototipa.",
      seeProjects: "Poglej projekte",
      viewExperience: "Poglej izkušnje",
    },
    sections: {
      projects: {
        eyebrow: "Izbrano delo",
        title: "Projekti od ideje do uporabnega produkta",
        description:
          "Mešanica hackathon projektov, dela za naročnike in produkcijskega razvoja. Vsaka kartica odpre podrobnejši prikaz s kontekstom, tehnologijami in posnetki zaslona.",
      },
      experience: {
        eyebrow: "Izkušnje",
        title: "Produkcijsko delo, infrastruktura in praktična izvedba",
        description:
          "Spodnja časovnica združuje razvoj produktov in operativno osnovo, od strežniških sob in internih orodij do večplatformske dostave aplikacij.",
      },
      skills: {
        eyebrow: "Veščine",
        title: "Orodja in tehnologije, ki jih najpogosteje uporabljam",
        description:
          "Nabor temelji na zadnjih izvedbah: sodobni frontend okvirji, večplatformski mobilni razvoj, oblačne storitve in praktična podporna orodja.",
        itemsLabel: "elementov",
        strengthArea: "Področje moči",
      },
      gallery: {
        eyebrow: "Galerija",
        title: "Utrinki prototipov, vmesnikov in izvedbe",
        description:
          "Vizualni sloj portfelja, ki izpostavi pripravljene zaslone, podporne materiale in izbrane produktne raziskave.",
        openReference: "Odpri povezavo",
      },
      about: {
        eyebrow: "O meni",
        title: "Način razmišljanja, oblikovan z razvojem in infrastrukturo",
        description:
          "Moja pot se je začela s praktično IT podporo in sistemskim delom, nato pa se je razvila v full-stack razvoj produktov in večplatformskih aplikacij.",
        paragraphOne:
          "{name} deluje na področju razvoja frontend rešitev, mobilnih aplikacij in operativnega dela, ki ohranja produkte zanesljive. Ta kombinacija je vidna tako v projektih kot v časovnici izkušenj: funkcionalnosti produktov na eni strani, infrastruktura in podpora na drugi.",
        paragraphTwo:
          "Nedavno delo obsega {roles} vlog z enotno nitjo: od surove ideje do uporabnega sistema, nato pa optimizacija izvedbe, da rešitev deluje dobro tudi v realnih pogojih.",
        focusLabel: "Fokus",
        focusValue: "Full-stack razvoj produktov",
        approachLabel: "Pristop",
        approachValue: "Praktičen in sistemsko usmerjen inženiring",
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Odprt za smiselno produktno delo in tehnično sodelovanje",
        description:
          "Če želiš govoriti o vlogi, projektu ali sistemu, ki potrebuje izboljšave, uporabi spodnje kanale.",
        emailMe: "Pošlji e-pošto",
        github: "GitHub",
        linkedin: "LinkedIn",
        configHint:
          "Kontaktne povezave še niso nastavljene. Posodobi osebne in socialne nastavitve, da omogočiš neposreden stik.",
      },
    },
    cards: {
      project: {
        caseStudy: "Študija primera",
        previewUnavailable: "Predogled ni na voljo",
        techStackFallback: "Tehnologije so na voljo v podrobnem prikazu projekta.",
        noLinksFallback: "Odpri kartico za celoten pregled.",
        code: "Koda",
        liveDemo: "Demo",
        openDetailsAria: "Odpri podrobnosti projekta {title}",
      },
      experience: {
        label: "Izkušnje",
        openDetailsAria: "Odpri podrobnosti izkušnje: {position} pri {company}",
        present: "Trenutno",
      },
      details: {
        close: "Zapri podrobnosti",
        present: "Trenutno",
        aboutProject: "O projektu",
        responsibilities: "Odgovornosti",
        techStack: "Tehnološki nabor",
        skillsAndTech: "Veščine in tehnologije",
        stackNotPublished: "Podrobnosti tehnološkega nabora še niso objavljene.",
        software: "Programska oprema",
        hardware: "Strojna oprema",
        viewSource: "Poglej izvorno kodo",
        viewDemo: "Poglej demo",
        gallery: "Galerija",
      },
    },
    footer: {
      builtWith: "Izdelano z Next.js in Tailwind CSS.",
    },
    units: {
      yearShort: "let",
      monthShort: "mes",
    },
  },
};

const slProjectTranslations: Record<string, { title?: string; description?: string }> = {
  "project-1": {
    title: "Agentic Era Hackathon",
    description:
      "Hackathon Agentic Era v Helsinkih, ki ga organizira ekipa Aalto AI skupaj z Wave Ventures, združuje ustvarjalce pri raziskovanju naslednje generacije AI sistemov z avtonomnimi agenti.\n\nNa dogodku je naša ekipa razvila spletno aplikacijo, ki z AI agenti upravlja fitnes studie prek enotnega vmesnika. Platforma lastnikom omogoča avtomatizacijo ključnih procesov, kot so urniki vadb, upravljanje trenerjev in virov, finančni izračuni ter operativno planiranje. Z agentnimi delovnimi tokovi sistem usklajuje naloge, optimizira vire in podpira odločanje, kar pokaže, kako lahko AI poenostavi kompleksne poslovne procese v fitnes industriji.",
  },
  "project-2": {
    title: "Junction 2025",
    description:
      "Na Junction 2025 v Helsinkih je naša ekipa v Wolt izzivu zgradila AI prototip naslednje generacije platforme za dostavo hrane. Razvili smo spletno aplikacijo po navdihu Wolta in jo nadgradili z AI funkcijami. Uporabniki lahko naložijo fotografijo hrane za prepoznavo jedi, samodejno ustvarijo nakupovalni seznam sestavin ter odkrivajo jedi prek TikTok-stilskega feeda. Platforma vključuje tudi naročanje obrokov glede na koledar, AI planiranje cateringa za dogodke in miniigro za napoved časa dostave.",
  },
  "project-3": {
    title: "Undercover igra",
    description:
      "Klon igre Undercover je preprost mobilni projekt v Flutterju. Namen projekta je bil praktično spoznati razvoj v Flutterju, njegov delovni proces in pridobiti praktične izkušnje pri večplatformskem mobilnem razvoju.\nAplikacija poustvari osnovne mehanike družabne igre Undercover, s poudarkom na osnovni igralni logiki in uporabniškem vmesniku.",
  },
  "project-4": {
    title: "Fisofi",
    description:
      "Sodeloval sem pri mobilni in spletni aplikaciji Fisofi, B2B SaaS platformi, ki se uporablja v produkciji. Prispeval sem k razvoju in vzdrževanju funkcionalnosti ter izboljšanju uporabnosti in zanesljivosti za poslovne uporabnike.\nDelo je vključevalo sodelovanje na produkcijski kodi in izkušnje z realnimi izzivi razvoja, postavitve in skaliranja SaaS produktov.",
  },
  "project-5": {
    title: "Valji d.o.o.",
    description: "Kmalu na voljo",
  },
  "project-6": {
    title: "BODIFIT",
    description: "Kmalu na voljo",
  },
};

const slExperienceTranslations: Record<string, { position?: string; responsibilities?: string[] }> = {
  "company-1": {
    position: "Študentski praktikant",
    responsibilities: [
      "IT podpora in vzdrževanje sistemov podjetja",
      "Pomoč pri razvoju internih orodij in aplikacij",
      "Tehnična podpora zaposlenim in reševanje IT težav",
      "Osnovna diagnostika programskih in strojnih težav",
      "Osnovna administracija strežnikov in omrežij",
      "Načrtovanje in izdelava strežniških sob ter omar",
    ],
  },
  "company-2": {
    position: "Full-stack razvijalec",
    responsibilities: [
      "Vodenje razvijalske ekipe pri izdelavi uporabniku prijazne aplikacije",
      "Razvoj večplatformske mobilne aplikacije z Flutterjem in Dartom",
      "Razvoj ključnih funkcionalnosti aplikacije",
      "Integracija s storitvami Firebase",
      "Uvedba novih funkcionalnosti glede na povratne informacije uporabnikov",
      "Vzdrževanje in optimizacija aplikacije za zmogljivost in razširljivost",
      "Objava aplikacije v trgovinah in spletnih platformah",
      "Pregledi kode in usmerjanje članov ekipe",
      "Odpravljanje napak, prijavljenih s strani uporabnikov",
      "Priprava in vzdrževanje tehnične dokumentacije",
      "Izvedba uporabniškega testiranja in zbiranje povratnih informacij",
    ],
  },
};

const slGalleryTranslations: Record<string, { title?: string; description?: string }> = {
  "gallery-1": {
    title: "SweatAI uvodni potek",
    description: "Zgodnji produktni pogledi iz hackathona Agentic Era za koncept upravljanja fitnes studia.",
  },
  "gallery-2": {
    title: "Koncept nadzorne plošče studia",
    description: "Raziskave operativne nadzorne plošče za urnike in planiranje virov.",
  },
  "gallery-3": {
    title: "Pogled na agentni potek",
    description: "Bližji pogled na avtomatiziran vmesnik delovnega toka, uporabljen med hackathonom.",
  },
  "gallery-4": {
    title: "Vizualna identiteta Valji",
    description: "Preprost brand material ob časovnici infrastrukturnih in podpornih izkušenj.",
  },
};

export function getCopy(locale: Locale): CopyDictionary {
  return copy[locale];
}

export function getTranslatedProject(project: Project, locale: Locale): Project {
  if (locale !== "sl") return project;

  const translation = slProjectTranslations[project.id];
  if (!translation) return project;

  return {
    ...project,
    title: translation.title ?? project.title,
    description: translation.description ?? project.description,
  };
}

export function getTranslatedExperience(experience: Experience, locale: Locale): Experience {
  if (locale !== "sl") return experience;

  const translation = slExperienceTranslations[experience.id];
  if (!translation) return experience;

  return {
    ...experience,
    position: translation.position ?? experience.position,
    responsibilities: translation.responsibilities ?? experience.responsibilities,
  };
}

export function getTranslatedGalleryItem(item: GalleryItem, locale: Locale): GalleryItem {
  if (locale !== "sl") return item;

  const translation = slGalleryTranslations[item.id];
  if (!translation) return item;

  return {
    ...item,
    title: translation.title ?? item.title,
    description: translation.description ?? item.description,
  };
}

export function translateProjectType(value: ProjectType, locale: Locale): string {
  if (locale === "en") return value;

  const labels: Record<ProjectType, string> = {
    [ProjectType.Personal]: "Osebni",
    [ProjectType.Professional]: "Profesionalni",
    [ProjectType.OpenSource]: "Odprta koda",
    [ProjectType.Client]: "Za naročnika",
    [ProjectType.Hackathon]: "Hackathon",
  };

  return labels[value];
}

export function translateGalleryCategory(value: GalleryCategory, locale: Locale): string {
  if (locale === "en") return value;

  const labels: Record<GalleryCategory, string> = {
    [GalleryCategory.Creative]: "Kreativno",
    [GalleryCategory.Article]: "Članek",
    [GalleryCategory.Award]: "Nagrada",
    [GalleryCategory.Fitness]: "Fitnes",
    [GalleryCategory.Professional]: "Profesionalno",
    [GalleryCategory.Other]: "Drugo",
  };

  return labels[value];
}

export function translateSkillCategory(value: SkillCategory, locale: Locale): string {
  if (locale === "en") return value;

  const labels: Record<SkillCategory, string> = {
    [SkillCategory.ProgrammingLanguage]: "Programski jezik",
    [SkillCategory.Framework]: "Ogrodje",
    [SkillCategory.Tool]: "Orodje",
    [SkillCategory.Other]: "Ostalo",
  };

  return labels[value];
}

export function translateProficiency(value: ProficiencyLevel, locale: Locale): string {
  if (locale === "en") return value;

  const labels: Record<ProficiencyLevel, string> = {
    [ProficiencyLevel.Beginner]: "Začetnik",
    [ProficiencyLevel.Intermediate]: "Srednje",
    [ProficiencyLevel.Advanced]: "Napredno",
    [ProficiencyLevel.Expert]: "Strokovno",
  };

  return labels[value];
}

export function template(message: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce((result, [key, value]) => {
    return result.replaceAll(`{${key}}`, String(value));
  }, message);
}
