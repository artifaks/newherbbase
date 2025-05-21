
import { Herb } from "../../types/herbs";

// African skin herbs
export const africanSkinHerbs: Herb[] = [
  {
    id: 301,
    name: "African Wild Potato",
    scientific_name: "Hypoxis hemerocallidea",
    description: "A traditional South African medicinal plant with a tuberous rhizome that has remarkable anti-inflammatory and wound-healing properties.",
    benefits: [
      "Reduces inflammation in skin conditions",
      "Promotes wound healing",
      "Has natural antimicrobial properties",
      "Soothes irritated skin",
      "Contains beneficial sterols and sterolins"
    ],
    uses: ["Eczema", "Psoriasis", "Minor wounds", "Burns", "Skin infections"],
    preparations: ["Ointment", "Cream", "Oil infusion", "Poultice", "Wash"],
    dosage: "Apply topical preparations to affected areas 2-3 times daily",
    cautions: [
      "May cause contact dermatitis in sensitive individuals",
      "Not recommended for internal use without professional guidance",
      "May interact with certain medications including antiretrovirals",
      "Not recommended during pregnancy or breastfeeding",
      "Store preparations properly to prevent spoilage"
    ],
    categories: ["Skin", "African", "Anti-inflammatory"]
  },
  {
    id: 302,
    name: "Baobab",
    scientific_name: "Adansonia digitata",
    description: "The fruit pulp and seed oil from Africa's iconic tree, rich in vitamins, antioxidants, and fatty acids essential for skin health.",
    benefits: [
      "Rich in vitamins A, C, and E for skin health",
      "Deeply moisturizes without clogging pores",
      "Contains omega fatty acids that support skin barrier",
      "Has natural anti-inflammatory properties",
      "Promotes skin elasticity and firmness"
    ],
    uses: ["Dry skin treatment", "Anti-aging", "Eczema relief", "After-sun care", "Skin toning"],
    preparations: ["Oil", "Powder", "Cream", "Serum", "Mask"],
    dosage: "Apply preparations containing 1-5% baobab oil or extract as needed",
    cautions: [
      "May rarely cause allergic reactions in sensitive individuals",
      "Perform patch test before widespread use",
      "Keep away from eyes",
      "Quality varies between products - source carefully",
      "May interact with certain topical medications"
    ],
    categories: ["Skin", "African", "Moisturizing"]
  }
];
