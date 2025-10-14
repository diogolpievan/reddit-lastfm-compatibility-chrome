import { CompatibilityScore } from "./compatibility";

export default interface ScrappedData { 
  score: CompatibilityScore,
  body: string | null
}
