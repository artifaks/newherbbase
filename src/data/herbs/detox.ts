
import { Herb } from "../types/herbs";

// Herbs that primarily support detoxification
export const detoxHerbs: Herb[] = [
  {
    id: 80,
    name: "Milk Thistle",
    scientific_name: "Silybum marianum",
    description: "A thistle with distinctive white-veined leaves, containing silymarin which supports liver function and helps protect and regenerate liver cells.",
    benefits: [
      "Supports liver cell regeneration",
      "May protect against liver toxins",
      "Has antioxidant properties",
      "Supports healthy bile flow",
      "May help with fatty liver conditions"
    ],
    uses: ["Liver support", "Detoxification", "Hangover prevention", "Liver protection"],
    preparations: ["Capsules", "Tincture", "Tea (seeds)", "Extract"],
    dosage: "150-300mg standardized extract (70-80% silymarin) 2-3 times daily",
    cautions: [
      "May interact with certain medications",
      "Can cause mild digestive upset in some individuals",
      "May have mild laxative effects",
      "Avoid if allergic to plants in the daisy family"
    ],
    categories: ["Detox", "Liver", "European"]
  },
  {
    id: 81,
    name: "Burdock Root",
    scientific_name: "Arctium lappa",
    description: "A biennial plant with large leaves and burr-like flowers, whose root is valued for its blood-purifying and skin-clearing properties.",
    benefits: [
      "Supports liver and kidney function",
      "Has blood-purifying properties",
      "May help with skin conditions like acne and eczema",
      "Contains inulin which supports gut health",
      "Has mild diuretic effects"
    ],
    uses: ["Detoxification", "Skin health", "Digestive support", "Blood purification"],
    preparations: ["Decoction", "Tincture", "Capsules", "Food (gobo)"],
    dosage: "1-2 teaspoons dried root for decoction, 2-3 times daily",
    cautions: [
      "May interact with diuretic medications",
      "Can cause allergic reactions in people sensitive to plants in the daisy family",
      "Not recommended during pregnancy without professional guidance",
      "May lower blood sugar"
    ],
    categories: ["Detox", "Alterative", "Skin", "Japanese"]
  },
  {
    id: 82,
    name: "Red Clover",
    scientific_name: "Trifolium pratense",
    description: "A flowering plant with distinctive trifoliate leaves and purple-red flower heads, traditionally used for detoxification and hormonal balance.",
    benefits: [
      "Supports gentle detoxification",
      "Contains isoflavones that may help with menopausal symptoms",
      "Has blood-purifying properties",
      "May support cardiovascular health",
      "Traditionally used for skin conditions"
    ],
    uses: ["Detoxification", "Women's health", "Skin conditions", "Circulatory support"],
    preparations: ["Tea", "Tincture", "Capsules", "Infusion"],
    dosage: "1-2 teaspoons dried flowers for tea, 2-3 times daily",
    cautions: [
      "Contains phytoestrogens - use with caution if you have hormone-sensitive conditions",
      "May interact with blood-thinning medications",
      "Avoid during pregnancy and breastfeeding",
      "May increase effects of hormonal medications"
    ],
    categories: ["Detox", "Women's Health", "Alterative", "European"]
  }
];
