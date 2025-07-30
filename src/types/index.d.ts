export type IconName = `lucide:${string}` | `simple-icons:${string}`;

export type TWColor = "blue" | "green" | "red" | "yellow" | "purple" | "orange";

export interface FooterConfig {
  copyright: {
    year: number;
    holder: string;
    description: string;
  };
  info: {
    label: string;
    address: {
      department: string;
      street: string;
      city: string;
      postalCode: string;
      state: string;
      country: string;
    };
  };
  contact: {
    subtitle: string;
    links: {
      label: string;
      href: string;
      icon: IconName;
    }[];
  };
  status: {
    subtitle: string;
    rows: {
      label: string;
      value: string;
    }[];
  };
}

export interface HeaderConfig {
  home: {
    ariaLabel: string;
    href: string;
  };
  navigationLinks: {
    label: string;
    href: string;
  }[];
  cta: {
    label: string;
    href: string;
    icon?: IconName;
  };
}

export interface HomePageConfig {
  hero: {
    code: string;
    title: {
      main: string;
      sub: string;
    };
    description: string;
    stats: string[];
    cta: {
      primary: {
        label: string;
        href: string;
      };
      secondary: {
        label: string;
        href: string;
      };
    };
    terminal: {
      title: string;
      command: string;
      loadingText: string;
      sections: {
        name: string;
        status: string;
      }[];
      footerText: string;
    };
  };
  sections: {
    code: string;
    title: string;
    description: string;
    cards: {
      title: string;
      code: string;
      description: string;
      labels: string[];
      color: TWColor;
      icon: IconName;
    }[];
  };
}
