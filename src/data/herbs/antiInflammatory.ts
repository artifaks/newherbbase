import { Herb } from "../types/herbs";

// Herbs with significant anti-inflammatory properties
export const antiInflammatoryHerbs: Herb[] = [
  {
    id: 2,
    name: "Turmeric",
    scientific_name: "Curcuma longa",
    description: "A bright yellow spice commonly used in cooking that contains curcumin, a compound with powerful anti-inflammatory and antioxidant properties.",
    benefits: [
      "Powerful anti-inflammatory",
      "Strong antioxidant properties",
      "May improve brain function",
      "Potential to lower risk of heart disease",
      "May help prevent and treat cancer",
      "Useful for arthritis symptoms"
    ],
    uses: ["Anti-inflammatory", "Joint health", "Digestive support"],
    preparations: ["Powder", "Capsules", "Extract", "Golden milk"],
    dosage: "500-2000mg of turmeric daily, with black pepper to enhance absorption",
    cautions: [
      "May interact with blood thinners",
      "Can cause digestive discomfort in high doses",
      "Not recommended during pregnancy in medicinal amounts"
    ],
    categories: ["Anti-inflammatory", "Antioxidant", "Ayurvedic"]
  },
  {
    id: 12,
    name: "Nettle",
    scientific_name: "Urtica dioica",
    description: "A nutrient-rich herb with stinging hairs on the leaves when fresh, used for its anti-inflammatory, diuretic, and nutritive properties.",
    benefits: [
      "Rich in vitamins and minerals",
      "Supports kidney and urinary tract health",
      "May reduce allergic reactions",
      "Helps reduce inflammation",
      "Supports healthy blood pressure"
    ],
    uses: ["Nutritive tonic", "Allergy relief", "Joint health", "Urinary support"],
    preparations: ["Tea", "Tincture", "Capsules", "Food (cooked leaves)", "Hair rinse"],
    dosage: "3-4 teaspoons dried herb for tea, up to 3 times daily",
    cautions: [
      "Fresh plants can cause skin irritation",
      "May interact with blood pressure, diabetes, and blood-thinning medications",
      "Not recommended during pregnancy in medicinal amounts"
    ],
    categories: ["Nutritive", "Anti-inflammatory", "Diuretic", "European"]
  },
  {
    id: 110,
    name: "Boswellia",
    scientific_name: "Boswellia serrata",
    description: "A resin from the Boswellia tree, traditionally used in Ayurvedic medicine for its powerful anti-inflammatory effects, particularly for joint health.",
    benefits: [
      "Reduces inflammation through multiple pathways",
      "Supports joint mobility and comfort",
      "May help with inflammatory bowel conditions",
      "Has analgesic properties",
      "Contains boswellic acids with therapeutic effects"
    ],
    uses: ["Joint support", "Inflammatory conditions", "Pain management", "Gut health"],
    preparations: ["Extract", "Capsules", "Tablets", "Topical preparations"],
    dosage: "300-500mg standardized extract (containing 60% boswellic acids) 3 times daily",
    cautions: [
      "May interact with anti-inflammatory medications",
      "Can cause digestive upset in some individuals",
      "May affect blood clotting - discontinue before surgery",
      "Use with caution during pregnancy"
    ],
    categories: ["Anti-inflammatory", "Ayurvedic", "Resin"]
  },
  {
    id: 111,
    name: "Devil's Claw",
    scientific_name: "Harpagophytum procumbens",
    description: "An African herb with powerful anti-inflammatory and analgesic properties, traditionally used for joint pain and digestive issues.",
    benefits: [
      "Reduces inflammation in joints and tissues",
      "Has analgesic effects",
      "May help with arthritis symptoms",
      "Supports digestive health",
      "Contains harpagosides with therapeutic properties"
    ],
    uses: ["Joint pain", "Arthritis", "Back pain", "Digestive support"],
    preparations: ["Capsules", "Tablets", "Tincture", "Decoction"],
    dosage: "600-1200mg dried herb or 4.5g daily of extract containing 2% harpagosides",
    cautions: [
      "May increase stomach acid - avoid with peptic ulcers",
      "Can interact with blood thinners and heart medications",
      "May affect blood sugar levels",
      "Not recommended during pregnancy"
    ],
    categories: ["Anti-inflammatory", "Analgesic", "African"]
  }
];
