import { Herb } from "../types/herbs";

// Herbs that primarily support liver health and detoxification
export const liverHerbs: Herb[] = [
  {
    id: 10,
    name: "Milk Thistle",
    scientific_name: "Silybum marianum",
    description: "A plant known for its liver-protective and detoxifying properties, containing the active compound silymarin.",
    benefits: [
      "Protects liver cells from damage",
      "Supports detoxification processes",
      "Has antioxidant properties",
      "May help with digestive disorders",
      "Potential to lower cholesterol"
    ],
    uses: ["Liver support", "Detoxification", "Digestive aid"],
    preparations: ["Capsules", "Tincture", "Tea", "Extract"],
    dosage: "140-800mg silymarin daily, divided into 2-3 doses",
    cautions: [
      "May interact with certain medications processed by the liver",
      "Can cause allergic reactions in people sensitive to plants in the daisy family",
      "May have a mild laxative effect"
    ],
    categories: ["Liver", "Detoxifying", "European"]
  },
  {
    id: 14,
    name: "Dandelion",
    scientific_name: "Taraxacum officinale",
    description: "A common 'weed' that's actually a potent medicinal herb, particularly beneficial for liver health, digestion, and as a gentle diuretic.",
    benefits: [
      "Supports liver detoxification",
      "Acts as a gentle diuretic",
      "Rich in vitamins and minerals",
      "Aids digestion and reduces bloating",
      "May help regulate blood sugar"
    ],
    uses: ["Liver support", "Detoxification", "Digestive aid", "Nutritive tonic"],
    preparations: ["Tea (root or leaf)", "Tincture", "Capsules", "Food (greens or roots)", "Coffee substitute (roasted root)"],
    dosage: "1-2 teaspoons dried root or 2-3 teaspoons dried leaf for tea, 2-3 times daily",
    cautions: [
      "May increase bile production - use with caution if you have gallstones",
      "Can interact with some medications due to diuretic effect",
      "May cause allergic reactions in people sensitive to plants in the daisy family"
    ],
    categories: ["Liver", "Detoxifying", "Digestive", "Nutritive", "European"]
  },
  {
    id: 27,
    name: "Oregon Grape Root",
    scientific_name: "Mahonia aquifolium",
    description: "An evergreen shrub with holly-like leaves and yellow flowers followed by blue berries, whose root is used as an antimicrobial and liver support herb.",
    benefits: [
      "Has antimicrobial properties",
      "Stimulates bile production",
      "Supports liver function",
      "May help with skin conditions like psoriasis",
      "Has anti-inflammatory properties"
    ],
    uses: ["Skin health", "Digestive support", "Liver support", "Antimicrobial"],
    preparations: ["Tincture", "Decoction", "Capsules", "Topical preparations"],
    dosage: "1-3ml tincture 3 times daily or 1 teaspoon dried root for decoction",
    cautions: [
      "Not recommended during pregnancy",
      "May lower blood sugar",
      "Can increase sun sensitivity",
      "May interact with medications processed by the liver"
    ],
    categories: ["Antimicrobial", "Liver", "Skin", "Native American"]
  },
  {
    id: 108,
    name: "Schisandra",
    scientific_name: "Schisandra chinensis",
    description: "A five-flavored berry used in Traditional Chinese Medicine to support liver function, enhance detoxification, and provide adaptogenic benefits.",
    benefits: [
      "Supports liver detoxification pathways",
      "Has hepatoprotective properties",
      "Contains lignans with antioxidant effects",
      "May help with stress resilience",
      "Traditionally used for longevity"
    ],
    uses: ["Liver support", "Detoxification", "Stress management", "Adaptogenic support"],
    preparations: ["Dried berries", "Tincture", "Powder", "Decoction", "Extract"],
    dosage: "2-4g dried berries daily or 2-4ml tincture 3 times daily",
    cautions: [
      "May increase eye pressure - use with caution if you have glaucoma",
      "Can interact with medications processed by the liver",
      "May cause digestive upset in sensitive individuals",
      "Not recommended during pregnancy"
    ],
    categories: ["Liver", "Adaptogenic", "Chinese", "Berry"]
  },
  {
    id: 109,
    name: "Globe Artichoke",
    scientific_name: "Cynara scolymus",
    description: "A Mediterranean herb whose leaves have powerful liver-supporting properties and aid in bile production and flow.",
    benefits: [
      "Stimulates bile production",
      "Supports liver cell regeneration",
      "Has antioxidant effects",
      "May help lower cholesterol",
      "Supports digestion of fats"
    ],
    uses: ["Liver support", "Digestive aid", "Gallbladder function", "Cholesterol management"],
    preparations: ["Extract", "Capsules", "Tea", "Tincture"],
    dosage: "300-600mg standardized extract daily or 2-3ml tincture 3 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Contraindicated in bile duct obstruction",
      "May interact with medications that affect the liver",
      "Can increase bile production - use with caution if you have gallstones"
    ],
    categories: ["Liver", "Digestive", "Mediterranean", "Bitter"]
  }
];
