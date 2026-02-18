export const DEPARTMENT_COLORS: Record<string, string> = {
  "01": "#6366F1", // Executive Leadership — Indigo
  "02": "#8B5CF6", // Engineering — Violet
  "03": "#22D3EE", // Platform & Infrastructure — Cyan
  "04": "#F59E0B", // Product Management — Amber
  "05": "#F97316", // Design — Tangerine
  "06": "#06B6D4", // Data Science & AI/ML — Sky Cyan
  "07": "#10B981", // Quality Assurance — Emerald
  "08": "#EF4444", // Security — Crimson
  "09": "#3B82F6", // Sales & Revenue — Blue
  "10": "#EC4899", // Marketing — Pink
  "11": "#14B8A6", // Customer Success — Teal
  "12": "#A855F7", // People / HR — Purple
  "13": "#84CC16", // Finance & Accounting — Lime
  "14": "#F43F5E", // Legal & Compliance — Rose
  "15": "#94A3B8", // IT & Operations — Slate
  "16": "#D946EF", // Developer Relations — Fuchsia
  "17": "#0EA5E9", // Program Management — Sky
  "18": "#78716C", // Governance — Stone
  "19": "#FBBF24", // Special Agents — Yellow
  "20": "#2DD4BF", // Documentation — Teal Light
};

export const DEPARTMENT_NAMES: Record<string, string> = {
  "01": "Executive Leadership",
  "02": "Engineering",
  "03": "Platform & Infrastructure",
  "04": "Product Management",
  "05": "Design",
  "06": "Data Science & AI/ML",
  "07": "Quality Assurance",
  "08": "Security",
  "09": "Sales & Revenue",
  "10": "Marketing",
  "11": "Customer Success & Support",
  "12": "People / HR",
  "13": "Finance & Accounting",
  "14": "Legal & Compliance",
  "15": "IT & Operations",
  "16": "Developer Relations",
  "17": "Program Management",
  "18": "Governance",
  "19": "Special Agents",
  "20": "Documentation",
};

export function getDepartmentColor(deptNumber: string): string {
  return DEPARTMENT_COLORS[deptNumber] || "#94A3B8";
}

export function getDepartmentName(deptNumber: string): string {
  return DEPARTMENT_NAMES[deptNumber] || "Unknown";
}
