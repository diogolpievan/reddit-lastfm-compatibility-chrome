import { CompatibilityScore } from "./compatibility";

export default interface ScrappedData {
  compatibility: {
    score: CompatibilityScore;
    body: string | null;
  };
}
