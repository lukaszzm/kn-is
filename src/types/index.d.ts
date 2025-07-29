export type IconName = `lucide:${string}` | `simple-icons:${string}`;

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
