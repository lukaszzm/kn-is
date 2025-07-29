import type { HeaderConfig, IconName } from "@/types";

export const headerConfig = {
  home: {
    ariaLabel: "SKIS UJ - Strona główna",
    href: "/",
  },
  navigationLinks: [
    {
      label: "O nas",
      href: "#",
    },
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
    icon: "lucide:code",
  },
} as const satisfies HeaderConfig;
