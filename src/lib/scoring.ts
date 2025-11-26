import { Store } from "../types/store";

export function calculateImpactScore(store: Store): number {
  let score = 0;
  if (store.type === "charity") score += 50;
  if (store.type === "nonprofit") score += 40;
  if (store.type === "independent") score += 25;
  if (store.cause?.length) score += 10;
  if (store.acceptsDonations) score += 5;
  return score;
}
