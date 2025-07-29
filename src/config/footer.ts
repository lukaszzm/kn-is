import type { FooterConfig } from "@/types";

export const footerConfig = {
  copyright: {
    year: 2025,
    holder: "SKIS UJ",
    description: "git commit -m 'Rozwijamy informatykę'",
  },
  info: {
    label: "Studenckie Koło Informatyki Stosowanej UJ",
    address: {
      department: "Wydział Fizyki, Astronomii i Informatyki Stosowanej UJ",
      street: "ul. prof. Stanisława Łojasiewicza 11",
      city: "Kraków",
      postalCode: "30-348",
      state: "Małopolskie",
      country: "Polska",
    },
  },
  contact: {
    subtitle: "Kontakt",
    links: [
      {
        label: "SKIS UJ Discord",
        href: "https://discord.gg/bts8RcWF",
        icon: "simple-icons:discord",
      },
      {
        label: "kn.is@uj.edu.pl",
        href: "mailto:kn.is@uj.edu.pl",
        icon: "simple-icons:gmail",
      },
    ],
  },
  status: {
    subtitle: "Status Systemu",
    rows: [
      {
        label: "Sieć:",
        value: "ONLINE",
      },
      {
        label: "Badania:",
        value: "AKTYWNE",
      },
      {
        label: "Czas pracy:",
        value: "99.9%",
      },
    ],
  },
} as const satisfies FooterConfig;
