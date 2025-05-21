
import { Herb } from "../../types/herbs";

// Middle Eastern skin herbs
export const mideastSkinHerbs: Herb[] = [
  {
    id: 306,
    name: "Balm of Gilead",
    scientific_name: "Populus gileadensis",
    description: "Fragrant resinous buds from poplar trees with potent antiseptic, anti-inflammatory, and wound-healing properties for skin ailments.",
    benefits: [
      "Contains salicin with analgesic properties",
      "Has natural antiseptic qualities",
      "Promotes wound healing",
      "Reduces skin inflammation",
      "Acts as a natural preservative in preparations"
    ],
    uses: ["Minor wounds", "Burns", "Chapped skin", "Hemorrhoids", "Muscle pain"],
    preparations: ["Salve", "Oil infusion", "Tincture", "Balm", "Poultice"],
    dosage: "Apply topical preparations to affected areas 2-3 times daily",
    cautions: [
      "May cause allergic reactions in those sensitive to aspirin",
      "Avoid using on deep or infected wounds",
      "Not for internal use except under professional guidance",
      "May stain clothing and skin temporarily",
      "Harvesting should be sustainable to protect trees"
    ],
    categories: ["Skin", "Middle Eastern", "Wound Healing"]
  },
  {
    id: 309,
    name: "Boswellia",
    scientific_name: "Boswellia serrata",
    description: "Also known as frankincense, this ancient resin contains boswellic acids with remarkable anti-inflammatory and skin-rejuvenating properties.",
    benefits: [
      "Contains boswellic acids that inhibit inflammatory enzymes",
      "Promotes skin cell regeneration",
      "Helps reduce appearance of scars",
      "May improve skin elasticity",
      "Has natural astringent properties"
    ],
    uses: ["Anti-aging", "Scar reduction", "Inflammation", "Wound healing", "Acne"],
    preparations: ["Essential oil", "Extract", "Cream", "Serum", "Mask"],
    dosage: "Apply products containing 2-5% boswellia extract twice daily",
    cautions: [
      "Essential oil must be properly diluted before application",
      "May cause skin sensitivity in some individuals",
      "Avoid use during pregnancy without professional guidance",
      "Store products properly to maintain potency",
      "May interact with certain skin medications"
    ],
    categories: ["Skin", "Middle Eastern", "Anti-inflammatory"]
  }
];
