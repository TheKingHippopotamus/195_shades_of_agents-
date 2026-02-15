export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Culture", href: "/about/culture" },
    ],
  },
  {
    label: "Agents",
    href: "/agents",
  },
  {
    label: "Departments",
    href: "/departments",
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    children: [
      { label: "Services", href: "/capabilities" },
      { label: "Tech Stack", href: "/capabilities/tech-stack" },
      { label: "Project Lifecycle", href: "/capabilities/lifecycle" },
      { label: "AI/ML", href: "/capabilities/ai-ml" },
    ],
  },
  {
    label: "How We Work",
    href: "/how-we-work",
  },
  {
    label: "Network",
    href: "/network",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const FOOTER_NAV = {
  company: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Culture", href: "/about/culture" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  product: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Tech Stack", href: "/capabilities/tech-stack" },
    { label: "Project Lifecycle", href: "/capabilities/lifecycle" },
    { label: "Industries", href: "/industries" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Developers", href: "/developers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
