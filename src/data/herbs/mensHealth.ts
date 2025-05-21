
import { Herb } from "../types/herbs";

// Herbs specifically beneficial for men's health
export const mensHealthHerbs: Herb[] = [
  {
    id: 120,
    name: "Saw Palmetto",
    scientific_name: "Serenoa repens",
    description: "A small palm native to the southeastern United States, widely used to support prostate health and urinary function in men.",
    benefits: [
      "Supports prostate health",
      "May help with urinary symptoms of benign prostatic hyperplasia (BPH)",
      "May reduce inflammation in the prostate",
      "May help maintain healthy testosterone levels",
      "Traditionally used for reproductive health"
    ],
    uses: ["Prostate health", "Urinary support", "Hormonal balance", "Hair loss prevention"],
    preparations: ["Capsules", "Tincture", "Tablets", "Softgels"],
    dosage: "160-320mg standardized extract daily, or as directed by healthcare provider",
    cautions: [
      "May interact with hormone medications including testosterone",
      "May affect blood clotting - discontinue before surgery",
      "May cause digestive upset in some individuals",
      "Not recommended during pregnancy (relevant for household members)"
    ],
    categories: ["Men's Health", "Native American", "Urinary"]
  },
  {
    id: 121,
    name: "Tribulus",
    scientific_name: "Tribulus terrestris",
    description: "A small flowering plant used in traditional medicine systems to support male vitality, hormonal balance, and athletic performance.",
    benefits: [
      "May support healthy testosterone levels",
      "Traditionally used for male vitality and libido",
      "May help with athletic performance",
      "Supports reproductive health",
      "Has antioxidant properties"
    ],
    uses: ["Hormonal support", "Athletic performance", "Reproductive health", "General vitality"],
    preparations: ["Capsules", "Tablets", "Tincture", "Tea"],
    dosage: "250-750mg standardized extract (containing 40-45% saponins) daily",
    cautions: [
      "May interact with diabetes medications and blood pressure medications",
      "Not recommended during pregnancy",
      "May affect hormone-sensitive conditions",
      "Should be cycled (typically 4-6 weeks on, 1-2 weeks off)"
    ],
    categories: ["Men's Health", "Adaptogenic", "Ayurvedic"]
  },
  {
    id: 122,
    name: "Tongkat Ali",
    scientific_name: "Eurycoma longifolia",
    description: "A shrubby tree native to Southeast Asia, traditionally used to enhance male vitality, energy levels, and stress resilience.",
    benefits: [
      "May support healthy testosterone levels",
      "May improve stress adaptation",
      "Traditionally used for male vitality and energy",
      "May support athletic performance and recovery",
      "Has antioxidant properties"
    ],
    uses: ["Hormonal balance", "Stress management", "Energy support", "Athletic performance"],
    preparations: ["Extract", "Capsules", "Powder", "Tea"],
    dosage: "200-400mg standardized extract daily (containing 2-3% eurycomanone)",
    cautions: [
      "May interact with medications for diabetes, high blood pressure, and immune disorders",
      "Not recommended for people with hormone-sensitive conditions",
      "May cause insomnia if taken late in the day",
      "Not recommended during pregnancy or breastfeeding"
    ],
    categories: ["Men's Health", "Adaptogenic", "Tropical"]
  }
];
