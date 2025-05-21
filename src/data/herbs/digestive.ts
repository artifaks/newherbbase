import { Herb } from "../types/herbs";

// Herbs that primarily support digestive health
export const digestiveHerbs: Herb[] = [
  {
    id: 4,
    name: "Ginger",
    scientific_name: "Zingiber officinale",
    description: "A pungent root used as both a culinary spice and medicinal herb, known for its digestive and anti-nausea properties.",
    benefits: [
      "Relieves nausea and digestive issues",
      "Has anti-inflammatory effects",
      "May reduce muscle pain and soreness",
      "Can help lower blood sugar levels",
      "Supports cardiovascular health"
    ],
    uses: ["Digestive aid", "Nausea relief", "Pain management"],
    preparations: ["Fresh root", "Powder", "Tea", "Capsules", "Tincture"],
    dosage: "1-4g of dried ginger daily, or 1 inch of fresh ginger for tea",
    cautions: [
      "May interact with blood-thinning medications",
      "Can cause heartburn in high doses",
      "Use caution if you have gallstones"
    ],
    categories: ["Digestive", "Anti-inflammatory", "Circulatory", "Ayurvedic"]
  },
  {
    id: 5,
    name: "Chamomile",
    scientific_name: "Matricaria chamomilla",
    description: "A gentle herb with daisy-like flowers, known for its calming and digestive properties.",
    benefits: [
      "Promotes relaxation and sleep",
      "Soothes digestive discomfort",
      "Has anti-inflammatory properties",
      "Mild antispasmodic effect",
      "May help manage anxiety"
    ],
    uses: ["Sleep aid", "Digestive comfort", "Stress relief"],
    preparations: ["Tea", "Tincture", "Essential oil", "Capsules"],
    dosage: "1-2 teaspoons dried flowers for tea, 3-4 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Can increase the effects of sedative medications",
      "Use caution during pregnancy"
    ],
    categories: ["Nervine", "Digestive", "Sleep", "European"]
  },
  {
    id: 6,
    name: "Peppermint",
    scientific_name: "Mentha × piperita",
    description: "A refreshing herb with a cooling sensation, widely used for digestive issues and respiratory support.",
    benefits: [
      "Relieves digestive discomfort and IBS symptoms",
      "Opens respiratory passages",
      "Has antimicrobial properties",
      "May reduce headache pain",
      "Provides mental alertness"
    ],
    uses: ["Digestive aid", "Headache relief", "Respiratory support"],
    preparations: ["Tea", "Essential oil", "Capsules", "Tincture"],
    dosage: "1-2 teaspoons dried leaves for tea, 2-3 times daily",
    cautions: [
      "May worsen acid reflux in some people",
      "Essential oil should not be applied undiluted to skin",
      "Can interact with certain medications"
    ],
    categories: ["Digestive", "Aromatic", "Respiratory", "European"]
  },
  {
    id: 16,
    name: "Marshmallow Root",
    scientific_name: "Althaea officinalis",
    description: "A demulcent herb rich in mucilage that soothes and protects irritated tissues, particularly effective for digestive and respiratory systems.",
    benefits: [
      "Soothes irritated mucous membranes",
      "Reduces inflammation in digestive tract",
      "Relieves dry cough and sore throat",
      "May help with urinary tract inflammation",
      "Supports skin health when applied topically"
    ],
    uses: ["Digestive comfort", "Respiratory support", "Urinary tract health", "Skin care"],
    preparations: ["Cold infusion", "Tincture", "Capsules", "Syrup", "Topical preparations"],
    dosage: "1-2 teaspoons of root in cold water for 4-8 hours, strained and drunk throughout the day",
    cautions: [
      "May slow absorption of other medications - take separately",
      "Large amounts may lower blood sugar",
      "Can cause low blood pressure in some individuals"
    ],
    categories: ["Demulcent", "Digestive", "Respiratory", "European"]
  },
  {
    id: 35,
    name: "Fennel",
    scientific_name: "Foeniculum vulgare",
    description: "A licorice-flavored herb with feathery leaves and yellow flowers, traditionally used to soothe digestive discomfort and reduce bloating.",
    benefits: [
      "Reduces gas and bloating",
      "Soothes digestive spasms",
      "May increase milk production in nursing mothers",
      "Freshens breath naturally",
      "Supports healthy digestion"
    ],
    uses: ["Digestive aid", "Gas relief", "Colic relief", "Breastfeeding support"],
    preparations: ["Tea", "Seeds (whole or crushed)", "Tincture", "Essential oil", "Culinary use"],
    dosage: "1-2 teaspoons seeds for tea, up to 3 times daily or 1-4ml tincture 3 times daily",
    cautions: [
      "May interact with certain medications including ciprofloxacin",
      "Use with caution if you have estrogen-sensitive conditions",
      "Can cause allergic reactions in people sensitive to plants in the carrot family",
      "Essential oil should not be used internally without professional guidance"
    ],
    categories: ["Digestive", "Carminative", "Mediterranean"]
  },
  {
    id: 36,
    name: "Slippery Elm",
    scientific_name: "Ulmus rubra",
    description: "The inner bark of this tree is high in mucilage, providing a soothing coating for irritated tissues, especially in the digestive tract.",
    benefits: [
      "Forms a protective coating on mucous membranes",
      "Soothes irritated digestive tissues",
      "May help with inflammatory bowel conditions",
      "Relieves heartburn and GERD symptoms",
      "Can ease sore throats"
    ],
    uses: ["Digestive soothing", "Throat care", "IBS support", "Ulcer management"],
    preparations: ["Powder", "Lozenges", "Capsules", "Gruel", "Tea"],
    dosage: "1-2 tablespoons of powder in water or applesauce, 1-3 times daily",
    cautions: [
      "May slow absorption of other medications - take separately",
      "Sustainable sourcing is important as some species are threatened",
      "Powder can be very mucilaginous and thick - mix well",
      "May cause digestive upset in some individuals"
    ],
    categories: ["Demulcent", "Digestive", "Native American"]
  },
  {
    id: 43,
    name: "Gentian",
    scientific_name: "Gentiana lutea",
    description: "A bitter herb with bright yellow flowers, used for centuries to stimulate digestion and appetite through its intensely bitter taste.",
    benefits: [
      "Stimulates digestive secretions",
      "Improves appetite",
      "Supports liver function",
      "Helps with absorption of nutrients",
      "May help with bloating and gas"
    ],
    uses: ["Digestive stimulant", "Appetite enhancer", "Liver support", "Before-meal tonic"],
    preparations: ["Tincture", "Tea", "Bitters formula", "Capsules"],
    dosage: "10-20 drops of tincture in water before meals or 1/4 teaspoon dried root for tea",
    cautions: [
      "Not recommended for people with gastric or duodenal ulcers",
      "May increase stomach acid - avoid with acid reflux",
      "Can lower blood pressure",
      "May cause headache in sensitive individuals"
    ],
    categories: ["Digestive", "Bitter", "European", "Alpine"]
  },
  {
    id: 44,
    name: "Meadowsweet",
    scientific_name: "Filipendula ulmaria",
    description: "A flowering herb with a sweet almond-like scent that contains natural salicylates (similar compounds to aspirin) and soothes the digestive tract.",
    benefits: [
      "Reduces excess acidity in the stomach",
      "Soothes digestive inflammation",
      "Has mild pain-relieving properties",
      "May help with diarrhea",
      "Supports healthy gut flora"
    ],
    uses: ["Digestive comfort", "Acid reflux relief", "Mild pain relief", "Diarrhea support"],
    preparations: ["Tea", "Tincture", "Capsules", "Cold infusion"],
    dosage: "1-2 teaspoons dried herb for tea, 2-3 times daily or 2-4ml tincture 3 times daily",
    cautions: [
      "Contains natural salicylates - avoid if allergic to aspirin",
      "May interact with blood-thinning medications and NSAIDs",
      "Not recommended during pregnancy",
      "Use with caution if you have asthma"
    ],
    categories: ["Digestive", "Anti-inflammatory", "European"]
  },
  {
    id: 104,
    name: "Artichoke Leaf",
    scientific_name: "Cynara scolymus",
    description: "A potent digestive herb with a long history of use for liver support, bile production, and digestive discomfort.",
    benefits: [
      "Stimulates bile production",
      "Supports liver function",
      "May help with dyspepsia and bloating",
      "Has choleretic and hepatoprotective effects",
      "May help lower cholesterol"
    ],
    uses: ["Digestive discomfort", "Liver support", "Cholesterol management", "Dyspepsia"],
    preparations: ["Extract", "Capsules", "Tea", "Tincture"],
    dosage: "300-600mg standardized extract or 2-3ml tincture, 3 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Avoid with bile duct obstruction or gallstones",
      "May interact with some medications processed by the liver",
      "Can increase gastric acid - use with caution if you have ulcers"
    ],
    categories: ["Digestive", "Liver", "Mediterranean", "Bitter"]
  },
  {
    id: 105,
    name: "Caraway",
    scientific_name: "Carum carvi",
    description: "An aromatic herb with seeds that have been used for centuries to soothe digestive issues and relieve gas and bloating.",
    benefits: [
      "Reduces gas and bloating",
      "Has antispasmodic effects on digestive tract",
      "May help with colic in infants",
      "Supports healthy digestion",
      "Has mild antimicrobial properties"
    ],
    uses: ["Gas relief", "Digestive comfort", "Colic relief", "Aromatic culinary herb"],
    preparations: ["Seeds (whole or crushed)", "Tea", "Essential oil", "Tincture"],
    dosage: "1-2 teaspoons crushed seeds for tea, after meals",
    cautions: [
      "Generally recognized as safe in food amounts",
      "May interact with medications for diabetes",
      "Essential oil should be diluted appropriately",
      "Not for therapeutic use during pregnancy without professional guidance"
    ],
    categories: ["Digestive", "Carminative", "European", "Culinary"]
  }
];
