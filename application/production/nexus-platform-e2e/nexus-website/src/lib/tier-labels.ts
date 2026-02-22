export const TIER_LABELS: Record<number, string> = {
  0: "C-Suite",
  1: "VP",
  2: "Director",
  3: "Manager",
  4: "Staff+ IC",
  5: "Senior IC",
  6: "Mid-Level",
  7: "Junior",
  8: "Governance",
  9: "Special Agent",
};

export function getTierLabel(tier: number): string {
  return TIER_LABELS[tier] || "Unknown";
}

export function getTierColor(tier: number): string {
  const colors: Record<number, string> = {
    0: "#FFD700", // Gold
    1: "#C0C0C0", // Silver
    2: "#CD7F32", // Bronze
    3: "#6366F1", // Indigo
    4: "#8B5CF6", // Violet
    5: "#3B82F6", // Blue
    6: "#10B981", // Emerald
    7: "#F59E0B", // Amber
    8: "#EF4444", // Red
    9: "#00D9FF", // Quantum Blue
  };
  return colors[tier] || "#94A3B8";
}
