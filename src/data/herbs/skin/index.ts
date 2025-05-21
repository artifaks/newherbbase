
import { Herb } from "../../types/herbs";
import { europeanSkinHerbs } from "./european";
import { asianSkinHerbs } from "./asian";
import { tropicalSkinHerbs } from "./tropical";
import { africanSkinHerbs } from "./african";
import { americasSkinHerbs } from "./americas";
import { mideastSkinHerbs } from "./mideast";
import { functionalSkinHerbs } from "./functional";
import { mediterraneanSkinHerbs } from "./mediterranean";
import { oceanicSkinHerbs } from "./oceanic";

// Combine all skin herb categories
export const skinHerbs: Herb[] = [
  ...europeanSkinHerbs,
  ...asianSkinHerbs,
  ...tropicalSkinHerbs,
  ...africanSkinHerbs,
  ...americasSkinHerbs,
  ...mideastSkinHerbs,
  ...functionalSkinHerbs,
  ...mediterraneanSkinHerbs,
  ...oceanicSkinHerbs
];

// Export individual categories for easier access
export {
  europeanSkinHerbs,
  asianSkinHerbs,
  tropicalSkinHerbs,
  africanSkinHerbs,
  americasSkinHerbs,
  mideastSkinHerbs,
  functionalSkinHerbs,
  mediterraneanSkinHerbs,
  oceanicSkinHerbs
};
