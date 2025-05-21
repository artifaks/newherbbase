
import { Herb } from "../../types/herbs";

// Tropical skin herbs
export const tropicalSkinHerbs: Herb[] = [
  {
    id: 62,
    name: "Aloe Vera",
    scientific_name: "Aloe barbadensis",
    description: "A succulent plant with gel-filled leaves that provide remarkable healing and soothing properties for skin conditions, especially burns.",
    benefits: [
      "Accelerates burn healing",
      "Provides cooling relief for skin irritations",
      "Has antimicrobial properties",
      "Contains beneficial polysaccharides",
      "Moisturizes without being greasy"
    ],
    uses: ["Burns", "Sunburn", "Dry skin", "Minor cuts", "Skin irritations"],
    preparations: ["Fresh gel", "Commercial gel", "Juice", "Cream", "Lotion"],
    dosage: "Apply fresh gel or prepared products to affected areas as needed",
    cautions: [
      "Some people may experience allergic reactions",
      "Avoid using on deep wounds",
      "Topical use may rarely cause burning sensation",
      "Internal use can cause digestive upset and is not recommended without guidance",
      "Aloe latex (yellow part) should not be used internally"
    ],
    categories: ["Skin", "First Aid", "Tropical", "Succulent"]
  },
  {
    id: 203,
    name: "Tamanu",
    scientific_name: "Calophyllum inophyllum",
    description: "A tropical tree that produces nuts with oil prized for skin healing and regeneration properties.",
    benefits: [
      "Promotes formation of new tissue",
      "Has antimicrobial properties",
      "Reduces inflammation",
      "Contains unique fatty acids beneficial for skin",
      "Supports skin barrier function"
    ],
    uses: ["Scar reduction", "Wound healing", "Acne treatment", "Eczema relief", "Anti-aging"],
    preparations: ["Oil", "Cream", "Salve", "Facial serum"],
    dosage: "Apply small amount to affected areas 1-2 times daily",
    cautions: [
      "Not for internal use",
      "May cause allergic reactions in sensitive individuals",
      "Perform patch test before widespread use",
      "Keep away from eyes",
      "Not studied for use during pregnancy"
    ],
    categories: ["Skin", "Tropical", "Wound Healing"]
  },
  {
    id: 206,
    name: "Manuka",
    scientific_name: "Leptospermum scoparium",
    description: "A shrub native to New Zealand whose honey and essential oil have powerful antimicrobial properties, especially beneficial for skin.",
    benefits: [
      "Has strong antibacterial properties",
      "Promotes wound healing",
      "Reduces inflammation",
      "Fights fungal infections",
      "Supports skin's natural barrier"
    ],
    uses: ["Wound healing", "Acne treatment", "Eczema relief", "Minor burns", "Fungal infections"],
    preparations: ["Honey", "Essential oil", "Cream", "Ointment", "Soap"],
    dosage: "Apply medical-grade honey or diluted essential oil (1%) to affected areas as needed",
    cautions: [
      "Essential oil must be properly diluted",
      "May cause allergic reactions in some individuals",
      "Use medical-grade honey for wounds",
      "Perform patch test before widespread use",
      "Avoid eye contact"
    ],
    categories: ["Skin", "Antimicrobial", "New Zealand"]
  },
  {
    id: 312,
    name: "Kukui Nut",
    scientific_name: "Aleurites moluccanus",
    description: "An oil from the Hawaiian state tree that contains unique fatty acids perfect for healing sun-damaged and environmentally stressed skin.",
    benefits: [
      "Exceptionally high in linoleic and linolenic acids",
      "Penetrates easily without greasy residue",
      "Accelerates healing of sun-damaged skin",
      "Forms protective barrier without clogging pores",
      "Soothes inflammation and irritation"
    ],
    uses: ["Sunburn relief", "Dry skin", "Eczema", "Environmental damage", "Scar treatment"],
    preparations: ["Pure oil", "Cream", "Balm", "Lotion", "Cleanser"],
    dosage: "Apply pure oil or products containing 5-15% kukui oil as needed",
    cautions: [
      "May cause allergic reactions in those with nut allergies",
      "Goes rancid quickly - look for products with proper preservatives",
      "Avoid ingestion as seeds contain toxins",
      "Keep away from eyes",
      "Quality varies widely between sources"
    ],
    categories: ["Skin", "Polynesian", "Healing"]
  }
];
