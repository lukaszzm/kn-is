import type { HomePageConfig } from "@/types";

export const homePageConfig = {
  hero: {
    code: "$ ./start -skis-uj",
    title: {
      main: "Studenckie Koło",
      sub: "Informatyki Stosowanej",
    },
    description:
      "Studenckie koło naukowe zajmujące się poszerzaniem wiedzy w dziedzinie informatyki stosowanej.",
    stats: ["12 członków", "4 koła naukowe", "3 projekty"],
    cta: {
      primary: {
        label: "Dołącz do nas",
        href: "#",
      },
      secondary: {
        label: "Projekty",
        href: "#",
      },
    },
    terminal: {
      title: "status_koła.sh",
      command: "$ ./status_koła --sekcje",
      loadingText: "Skanowanie katalogów koła...",
      sections: [
        {
          name: "sekcja_robotyki/",
          status: "[AKTYWNY]",
        },
        {
          name: "sekcja_algorytmiczna/",
          status: "[AKTYWNY]",
        },
        {
          name: "sekcja_ml-ai/",
          status: "[AKTYWNY]",
        },
        {
          name: "sekcja_hardware/",
          status: "[AKTYWNY]",
        },
      ],
      footerText: "Połączeni użytkownicy: 12/150",
    },
  },
  sections: {
    code: "$ ls koła_naukowe/",
    title: "Koła Naukowe",
    description:
      "Nasze koło naukowe składa się z kilku sekcji, które zajmują się różnymi aspektami informatyki stosowanej.",
    cards: [
      {
        title: "Robotyka",
        code: "./robotics --simulate --env urban --sensors lidar,cam",
        description:
          "Badania i rozwój w dziedzinie robotyki, automatyzacji i sztucznej inteligencji.",
        icon: "lucide:bot",
        color: "green",
        labels: ["Robotyka", "Automatyzacja", "AI"],
      },
      {
        title: "Algorytmy",
        code: "./algorithms --optimize --data structures",
        description:
          "Zastosowanie algorytmów w różnych dziedzinach informatyki.",
        icon: "lucide:code",
        color: "blue",
        labels: ["Algorytmy", "Struktury danych", "Optymalizacja"],
      },
      {
        title: "Uczenie Maszynowe i Sztuczna Inteligencja",
        code: "./ml-ai --train --model neural_network",
        description:
          "Badania nad uczeniem maszynowym i sztuczną inteligencją, w tym analiza danych i rozwój modeli.",
        icon: "lucide:brain",
        color: "purple",
        labels: ["ML", "AI", "Sieci Neuronowe", "Analiza Danych"],
      },
      {
        title: "Hardware i Elektronika",
        code: "./hardware --design --prototype",
        description:
          "Projektowanie i budowa układów elektronicznych oraz integracja z systemami komputerowymi.",
        icon: "lucide:circuit-board",
        color: "orange",
        labels: ["Elektronika", "Układy Elektroniczne", "Mikrokontrolery"],
      },
    ],
  },
} as const satisfies HomePageConfig;
