export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Base path for GitHub Pages deployment
const BASE = "/195_shades_of_agents-";

export const MAIN_NAV: NavItem[] = [
  {
    label: "Product",
    href: `${BASE}/product/`,
  },
  {
    label: "About",
    href: `${BASE}/about/`,
    children: [
      { label: "Our Story", href: `${BASE}/about/` },
      { label: "Leadership", href: `${BASE}/about/leadership/` },
      { label: "Culture", href: `${BASE}/about/culture/` },
      { label: "Org Chart", href: `${BASE}/about/org-chart/` },
    ],
  },
  {
    label: "Industries",
    href: `${BASE}/industries/`,
  },
  {
    label: "Capabilities",
    href: `${BASE}/capabilities/`,
    children: [
      { label: "Services", href: `${BASE}/capabilities/` },
      { label: "Tech Stack", href: `${BASE}/capabilities/tech-stack/` },
      { label: "Project Lifecycle", href: `${BASE}/capabilities/lifecycle/` },
      { label: "AI/ML", href: `${BASE}/capabilities/ai-ml/` },
    ],
  },
  {
    label: "Network",
    href: `${BASE}/network/`,
  },
  {
    label: "Blog",
    href: `${BASE}/blog/`,
  },
  {
    label: "Contact",
    href: `${BASE}/contact/`,
  },
];

export const FOOTER_NAV = {
  company: [
    { label: "About", href: `${BASE}/about/` },
    { label: "Leadership", href: `${BASE}/about/leadership/` },
    { label: "Culture", href: `${BASE}/about/culture/` },
    { label: "Press", href: `${BASE}/press/` },
  ],
  product: [
    { label: "Product", href: `${BASE}/product/` },
    { label: "Capabilities", href: `${BASE}/capabilities/` },
    { label: "Tech Stack", href: `${BASE}/capabilities/tech-stack/` },
    { label: "Project Lifecycle", href: `${BASE}/capabilities/lifecycle/` },
    { label: "Industries", href: `${BASE}/industries/` },
  ],
  resources: [
    { label: "Blog", href: `${BASE}/blog/` },
    { label: "Case Studies", href: `${BASE}/case-studies/` },
    { label: "Developers", href: `${BASE}/developers/` },
  ],
  legal: [
    { label: "Privacy Policy", href: `${BASE}/privacy/` },
    { label: "Terms of Service", href: `${BASE}/terms/` },
  ],
};
