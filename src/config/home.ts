import type { HomePageConfig } from "@/types";

export const homePageConfig = {
  hero: {
    code: "./start -skis-uj",
    title: "Studenckie Koło Informatyki Stosowanej UJ",
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
      command: "./status_koła --sekcje",
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
    code: "ls koła_naukowe/",
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
  recentNews: {
    code: "cat aktualnosci.log | tail -3",
    title: "Aktualności",
    description: "Najnowsze wydarzenia i publikacje naszego koła naukowego.",
    noData:
      "Brak aktualności do wyświetlenia. Bądź na bieżąco z naszymi działaniami!",
  },
  about: {
    code: "whoami",
    title: "O Kole",
    description:
      "Jesteśmy grupą pasjonatów informatyki, którzy chcą rozwijać swoje umiejętności i dzielić się wiedzą z innymi.",
    bullets: [
      "Współpraca badawcza w wielu dziedzinach informatyki",
      "Cotygodniowe seminaria z ekspertami z przemysłu i akademii",
      "Programy mentorskie dla studentów licencjackich",
      "Możliwości publikacji w najlepszych czasopismach",
    ],
    terminal: {
      title: "statystyki.py",
      file: "#!/usr/bin/env python3",
      commands: [
        "import kolo_naukowe as kn",
        "stats = kn.pobierz_statystyki_czlonkow()",
        'print(f"Łączna liczba członków: {stats.total}")',
        'print(f"Aktywne projekty: {stats.projects}")',
        'print(f"Publikacje: {stats.papers}")',
      ],
      outputLabel: "# Wynik:",
      outputs: [
        "Łączna liczba członków: 150",
        "Aktywne projekty: 25",
        "Publikacje: 89",
      ],
    },
  },
  join: {
    code: "./dołącz --koło_naukowe skis-uj",
    title: "Dołącz do Nas",
    description:
      "Zainteresowany dołączeniem do naszego koła naukowego? Sprawdź, czy spełniasz wymagania i aplikuj!",
    terminal: {
      title: "aplikacja.sh",
      command: "./aplikuj --wymagania",
      loadingText: "Sprawdzanie kwalifikacji...",
      requirements: [
        "Status studenta lub absolwenta kierunku informatycznego na UJ",
        "Zainteresowanie badaniami informatycznymi",
        "Nastawienie na współpracę",
        "Podstawowa znajomość programowania",
        "Chęć nauki i rozwoju",
      ],
      confirmation: "Gotowy do kontynuacji? [T/n]",
    },
    cta: "Aplikuj teraz",
  },
} as const satisfies HomePageConfig;
