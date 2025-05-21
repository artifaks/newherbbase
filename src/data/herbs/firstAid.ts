import { Herb } from "../types/herbs";

// Herbs commonly used for first aid and acute conditions
export const firstAidHerbs: Herb[] = [
  {
    id: 22,
    name: "Yarrow",
    scientific_name: "Achillea millefolium",
    description: "A feathery-leaved plant with clusters of small white flowers, traditionally used to stop bleeding and treat wounds, also valued for fever and digestive support.",
    benefits: [
      "Helps stop bleeding when applied topically",
      "Promotes sweating to reduce fevers",
      "Has anti-inflammatory properties",
      "Supports digestive function",
      "May help regulate menstrual cycles"
    ],
    uses: ["First aid for cuts", "Fever reducer", "Digestive support", "Women's health"],
    preparations: ["Tea", "Tincture", "Poultice", "Bath", "Powder"],
    dosage: "1-2 teaspoons dried herb for tea, 3 times daily during acute conditions",
    cautions: [
      "May increase photosensitivity in sensitive individuals",
      "Can interact with blood pressure and blood-thinning medications",
      "Use with caution during pregnancy (may affect menstrual flow)",
      "May cause allergic reactions in people sensitive to plants in the daisy family"
    ],
    categories: ["First Aid", "Fever", "Digestive", "Women's Health", "Native American"]
  },
  {
    id: 37,
    name: "Calendula",
    scientific_name: "Calendula officinalis",
    description: "A bright orange or yellow flowering herb with remarkable healing properties for skin, often used in salves and oils for wounds, burns, and irritation.",
    benefits: [
      "Promotes wound healing",
      "Has antimicrobial properties",
      "Reduces inflammation",
      "Soothes irritated skin",
      "May help with diaper rash, minor burns, and scrapes"
    ],
    uses: ["Skin healing", "Wound care", "Inflammation reduction", "First aid"],
    preparations: ["Salve", "Oil infusion", "Tincture", "Tea (topical wash)", "Compress"],
    dosage: "Apply calendula-infused oil or salve to affected areas 2-3 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Not recommended for use on deep or puncture wounds",
      "Internal use during pregnancy is not recommended",
      "Seek medical care for serious burns or wounds"
    ],
    categories: ["First Aid", "Skin", "Anti-inflammatory", "European"]
  },
  {
    id: 38,
    name: "Plantain",
    scientific_name: "Plantago major",
    description: "A common backyard 'weed' with broad leaves that has been used for centuries as a first aid plant for bites, stings, cuts, and skin irritations.",
    benefits: [
      "Draws out splinters, venom, and foreign objects",
      "Stops bleeding in minor cuts",
      "Soothes insect bites and stings",
      "Has mild antimicrobial properties",
      "Reduces inflammation"
    ],
    uses: ["First aid", "Sting relief", "Wound healing", "Drawing agent"],
    preparations: ["Fresh leaf poultice", "Salve", "Tincture", "Oil infusion", "Tea wash"],
    dosage: "Apply fresh crushed leaves directly to affected area as needed or plantain salve 2-3 times daily",
    cautions: [
      "Ensure correct plant identification - don't confuse with toxic look-alikes",
      "Don't harvest from areas sprayed with chemicals",
      "Not for use on deep wounds",
      "If symptoms worsen or infection develops, seek medical care"
    ],
    categories: ["First Aid", "Astringent", "European", "Native American"]
  }
];
