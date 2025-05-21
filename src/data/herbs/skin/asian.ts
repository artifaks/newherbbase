
import { Herb } from "../../types/herbs";

// Asian skin herbs
export const asianSkinHerbs: Herb[] = [
  {
    id: 261,
    name: "Gotu Kola",
    scientific_name: "Centella asiatica",
    description: "A creeping herb native to Asia that has remarkable skin rejuvenating and wound-healing properties, traditionally used for scar prevention.",
    benefits: [
      "Stimulates collagen production",
      "Improves skin elasticity and firmness",
      "Reduces appearance of scars and stretch marks",
      "Strengthens skin's connective tissues",
      "Supports healthy circulation in skin tissues"
    ],
    uses: ["Scar prevention", "Stretch mark reduction", "Wound healing", "Anti-aging", "Skin firmness"],
    preparations: ["Cream", "Extract", "Oil", "Capsules", "Fresh leaves"],
    dosage: "Apply cream or oil with standardized extract 1-2 times daily to affected areas",
    cautions: [
      "May cause skin irritation in sensitive individuals",
      "Can potentially increase sensitivity to sun exposure",
      "Internal use may cause nausea or headache in some people",
      "Not recommended during pregnancy without professional guidance",
      "May interact with medications that affect liver function"
    ],
    categories: ["Skin", "Ayurvedic", "Wound Healing", "Anti-aging"]
  },
  {
    id: 304,
    name: "Licorice Root",
    scientific_name: "Glycyrrhiza glabra",
    description: "A rhizome containing glycyrrhizin and glabridin that offers remarkable skin-brightening, anti-inflammatory, and soothing properties.",
    benefits: [
      "Inhibits tyrosinase to reduce hyperpigmentation",
      "Has anti-inflammatory properties comparable to hydrocortisone",
      "Soothes irritated and sensitive skin",
      "Contains antioxidants that protect skin",
      "May help balance oil production"
    ],
    uses: ["Hyperpigmentation", "Melasma", "Rosacea", "Eczema", "Acne"],
    preparations: ["Extract", "Serum", "Cream", "Mask", "Toner"],
    dosage: "Use products containing 1-2% licorice extract once or twice daily",
    cautions: [
      "May cause skin irritation in some individuals",
      "Can increase sensitivity to sun - use sunscreen",
      "May interact with certain medications when used internally",
      "Not recommended for internal use during pregnancy",
      "Pure extract should be diluted before application"
    ],
    categories: ["Skin", "Asian", "Brightening"]
  },
  {
    id: 308,
    name: "Moringa",
    scientific_name: "Moringa oleifera",
    description: "Known as the 'miracle tree', moringa's seed oil and leaf extracts provide exceptional nutrition and healing compounds for skin regeneration.",
    benefits: [
      "Rich in vitamins A, C, and E that nourish skin",
      "Contains unique moisturizing compounds",
      "Has potent antioxidants that fight free radical damage",
      "Shows antimicrobial properties against skin pathogens",
      "Promotes cellular regeneration"
    ],
    uses: ["Anti-aging", "Acne treatment", "Wound healing", "Dry skin", "Skin infections"],
    preparations: ["Oil", "Extract", "Cream", "Powder", "Mask"],
    dosage: "Apply oil directly or products containing 1-5% moringa extract 1-2 times daily",
    cautions: [
      "May cause allergic reactions in sensitive individuals",
      "Seed oil should be cold-pressed and unrefined for best results",
      "Avoid using on inflamed skin without dilution",
      "Quality varies greatly between sources - purchase carefully",
      "Keep away from eyes"
    ],
    categories: ["Skin", "Indian", "Regenerative"]
  },
  {
    id: 313,
    name: "Peony Root",
    scientific_name: "Paeonia lactiflora",
    description: "A traditional Chinese medicinal plant whose root extract contains paeoniflorin and paeonol with remarkable skin-brightening and anti-inflammatory properties.",
    benefits: [
      "Contains paeoniflorin that inhibits melanin production",
      "Has anti-inflammatory properties that calm irritated skin",
      "May help regulate excessive sebum production",
      "Shows antioxidant activity",
      "Promotes microcirculation in skin tissues"
    ],
    uses: ["Hyperpigmentation", "Melasma", "Rosacea", "Acne", "Dull complexion"],
    preparations: ["Extract", "Serum", "Cream", "Mask", "Toner"],
    dosage: "Apply products containing 1-5% peony extract twice daily",
    cautions: [
      "May cause skin sensitivity in some individuals",
      "Can increase sensitivity to sun - use sunscreen",
      "Quality varies greatly - look for standardized extracts",
      "Not recommended during pregnancy without professional guidance",
      "May interact with certain medications if used internally"
    ],
    categories: ["Skin", "Chinese Medicine", "Brightening"]
  }
];
