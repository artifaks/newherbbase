
import { Herb } from "../../types/herbs";

// Oceanic skin herbs
export const oceanicSkinHerbs: Herb[] = [
  {
    id: 325,
    name: "Kawakawa",
    scientific_name: "Piper excelsum",
    description: "A sacred Māori medicinal plant from New Zealand with extraordinary skin healing properties and anti-inflammatory compounds.",
    benefits: [
      "Contains myristicin and other compounds that reduce inflammation",
      "Has natural analgesic properties that soothe irritated skin",
      "Promotes wound healing",
      "Provides antimicrobial protection",
      "Stimulates circulation to enhance healing"
    ],
    uses: ["Eczema", "Cuts and wounds", "Bruises", "Insect bites", "Inflammatory skin conditions"],
    preparations: ["Infused oil", "Poultice", "Cream", "Balm", "Compress"],
    dosage: "Apply preparations containing kawakawa extract to affected areas 2-3 times daily",
    cautions: [
      "May cause contact dermatitis in sensitive individuals",
      "Avoid during pregnancy without professional guidance",
      "Do not apply to deep or infected wounds",
      "Not for internal use without traditional knowledge or guidance",
      "May increase photosensitivity in some individuals"
    ],
    categories: ["Skin", "Oceanic", "Māori Medicine"]
  },
  {
    id: 326,
    name: "Kanuka",
    scientific_name: "Kunzea ericoides",
    description: "A New Zealand native tree whose essential oil contains powerful anti-inflammatory and antimicrobial compounds for skin conditions.",
    benefits: [
      "Has strong anti-inflammatory properties",
      "Contains triketones with natural antimicrobial activity",
      "Promotes skin cell regeneration",
      "Reduces redness and irritation",
      "Helps balance skin microbiome"
    ],
    uses: ["Acne", "Rosacea", "Minor wounds", "Insect bites", "Fungal skin infections"],
    preparations: ["Essential oil", "Cream", "Gel", "Balm", "Wash"],
    dosage: "Apply diluted essential oil (1-2%) or kanuka-containing products to affected areas 2 times daily",
    cautions: [
      "Essential oil must be properly diluted before application",
      "May cause skin sensitivity in some individuals",
      "Perform patch test before widespread use",
      "Keep away from eyes and mucous membranes",
      "Not for internal use"
    ],
    categories: ["Skin", "Oceanic", "Antimicrobial"]
  },
  {
    id: 327,
    name: "Tea Tree",
    scientific_name: "Melaleuca alternifolia",
    description: "An Australian native plant with powerful antimicrobial essential oil that has become a staple in skin care for infections and blemishes.",
    benefits: [
      "Contains terpinen-4-ol with strong antibacterial properties",
      "Effective against fungi including Candida and dermatophytes",
      "Reduces inflammation in skin conditions",
      "Penetrates skin effectively to treat infections",
      "Helps control oil production"
    ],
    uses: ["Acne", "Fungal infections", "Minor wounds", "Insect bites", "Dandruff"],
    preparations: ["Essential oil", "Cream", "Cleanser", "Spot treatment", "Shampoo"],
    dosage: "Apply diluted essential oil (1-5%) or tea tree products to affected areas 2-3 times daily",
    cautions: [
      "Never use undiluted on skin",
      "Can cause contact dermatitis in sensitive individuals",
      "Not for internal use - toxic if ingested",
      "May cause sensitization with prolonged use",
      "Keep away from eyes, ears, and mucous membranes"
    ],
    categories: ["Skin", "Oceanic", "Antimicrobial"]
  },
  {
    id: 328,
    name: "Totara",
    scientific_name: "Podocarpus totara",
    description: "A sacred New Zealand timber tree whose bark and leaves contain totarol, a powerful antimicrobial compound effective for skin infections.",
    benefits: [
      "Contains totarol with powerful antibacterial properties",
      "Effective against acne-causing bacteria",
      "Has natural antioxidant properties",
      "Helps reduce inflammation",
      "Shows anti-aging potential"
    ],
    uses: ["Acne", "Eczema", "Minor skin infections", "Aging skin", "Wound healing"],
    preparations: ["Extract", "Cream", "Balm", "Cleanser", "Mask"],
    dosage: "Apply products containing totara extract to affected areas 1-2 times daily",
    cautions: [
      "May cause sensitivity in some individuals",
      "Traditional use requires cultural respect and knowledge",
      "Perform patch test before widespread use",
      "Not studied extensively during pregnancy",
      "Not for internal use"
    ],
    categories: ["Skin", "Oceanic", "Antimicrobial"]
  }
];
