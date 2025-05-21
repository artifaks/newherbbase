import { Herb } from "../types/herbs";

// More herbs that support immune function
export const immuneHerbs2: Herb[] = [
  {
    id: 52,
    name: "Usnea",
    scientific_name: "Usnea spp.",
    description: "A lichen (fungus-algae symbiote) that grows on trees and has powerful antimicrobial properties, particularly effective against gram-positive bacteria.",
    benefits: [
      "Has strong antimicrobial properties",
      "Supports respiratory immune function",
      "Contains usnic acid with antibacterial effects",
      "Traditionally used for urinary tract health",
      "May help with strep and staph infections"
    ],
    uses: ["Immune support", "Respiratory health", "Urinary tract health", "First aid"],
    preparations: ["Tincture (double extraction)", "Spray", "Gargle", "Salve", "Dried herb"],
    dosage: "20-30 drops of dual-extracted tincture 3-4 times daily during acute conditions",
    cautions: [
      "Internal use should be short-term - not for extended periods",
      "May cause liver stress in high doses or prolonged use",
      "Harvest sustainably - lichen grows very slowly",
      "Ensure correct identification - some similar lichens can be toxic"
    ],
    categories: ["Immune", "Antimicrobial", "Respiratory", "Native American"]
  },
  {
    id: 53,
    name: "Oregon Grape",
    scientific_name: "Mahonia aquifolium",
    description: "A shrub with holly-like leaves and bright yellow flowers followed by dark blue berries, whose root contains berberine and has antimicrobial properties.",
    benefits: [
      "Contains berberine with powerful antimicrobial effects",
      "Stimulates bile production to support digestion",
      "May help with skin conditions like psoriasis",
      "Supports liver function",
      "Acts as an alterative to support cleansing functions"
    ],
    uses: ["Immune support", "Skin health", "Digestive aid", "Liver support"],
    preparations: ["Tincture", "Decoction", "Capsules", "Salve (for skin)"],
    dosage: "1/2-1 teaspoon dried root for decoction or 2-4ml tincture 3 times daily",
    cautions: [
      "Not recommended during pregnancy",
      "May lower blood sugar",
      "Berberine can interact with certain medications",
      "May increase sensitivity to sunlight"
    ],
    categories: ["Immune", "Antimicrobial", "Alterative", "Native American"]
  }
];
