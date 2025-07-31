import type { HeaderConfig, IconName } from "@/types";

export const headerConfig = {
  home: {
    ariaLabel: "SKIS UJ - Strona główna",
    href: "/",
  },
  navigationLinks: [
    {
      label: "Aktualności",
      href: "#",
    },
    {
      label: "Projekty",
      href: "#",
    },
    {
      label: "Kontakt",
      href: "#",
    },
  ],
  cta: {
    label: "Dołącz",
    href: "#",
  },
} as const satisfies HeaderConfig;
