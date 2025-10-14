export const CompatibilityScore = {
  VERY_LOW: "Very Low",
  LOW: "Low", 
  MEDIUM: "Medium",
  HIGH: "High",
  VERY_HIGH: "Very High",
  SUPER: "Super",
  NOT_FOUND: "Not Found"
} as const;

export type CompatibilityScore = typeof CompatibilityScore[keyof typeof CompatibilityScore];

export const CompatibilityColors = {
  [CompatibilityScore.VERY_LOW]:  "#999999",
  [CompatibilityScore.LOW]:       "#9900ff",
  [CompatibilityScore.MEDIUM]:    "#009966",
  [CompatibilityScore.HIGH]:      "#ffbb00",
  [CompatibilityScore.VERY_HIGH]: "#ff6600",
  [CompatibilityScore.SUPER]:     "#d92323",
  [CompatibilityScore.NOT_FOUND]: "#000000" 
} as const;

export type CompatibilityColor = typeof CompatibilityColors[CompatibilityScore];
