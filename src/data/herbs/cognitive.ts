
import { Herb } from "../types/herbs";

// Herbs that primarily support memory, focus, and cognitive function
export const cognitiveHerbs: Herb[] = [
  {
    id: 210,
    name: "Ginkgo",
    scientific_name: "Ginkgo biloba",
    description: "An ancient tree species whose leaves contain compounds that support circulation to the brain and may enhance cognitive function and memory.",
    benefits: [
      "Improves blood flow to the brain",
      "May enhance memory and cognitive function",
      "Has antioxidant properties",
      "Supports healthy aging",
      "May help with tinnitus and vertigo"
    ],
    uses: ["Memory support", "Cognitive enhancement", "Circulation", "Tinnitus", "Eye health"],
    preparations: ["Standardized extract", "Tablets", "Capsules", "Tea", "Tincture"],
    dosage: "120-240mg standardized extract (24% flavonoid glycosides) daily",
    cautions: [
      "May increase bleeding risk - discontinue before surgery",
      "Can interact with anticoagulants and antiplatelet drugs",
      "May interfere with seizure medications",
      "Use with caution if you have bleeding disorders",
      "Effects develop gradually over 4-6 weeks"
    ],
    categories: ["Cognitive", "Circulatory", "Chinese", "Antioxidant"]
  },
  {
    id: 211,
    name: "Bacopa",
    scientific_name: "Bacopa monnieri",
    description: "An Ayurvedic herb traditionally used to enhance memory, learning, and concentration, with adaptogenic properties that help manage stress.",
    benefits: [
      "Supports memory formation and retention",
      "May enhance learning ability",
      "Has adaptogenic properties",
      "Contains bacosides that protect neurons",
      "Traditionally used for longevity and cognitive support"
    ],
    uses: ["Memory enhancement", "Cognitive support", "Stress management", "Focus improvement", "Mental stamina"],
    preparations: ["Capsules", "Powder", "Tincture", "Tablets", "Traditional ghee preparation"],
    dosage: "300-450mg of standardized extract (50% bacosides) daily",
    cautions: [
      "May cause digestive upset - take with food",
      "Can have mild sedative effects in some people",
      "May interact with certain medications including thyroid and calcium channel blockers",
      "Effects develop gradually over 4-12 weeks",
      "Not well-studied during pregnancy"
    ],
    categories: ["Cognitive", "Adaptogenic", "Ayurvedic", "Nervine"]
  },
  {
    id: 212,
    name: "Lion's Mane",
    scientific_name: "Hericium erinaceus",
    description: "An edible and medicinal mushroom with unique cascading spines that contains compounds which may support nerve growth factor production and brain health.",
    benefits: [
      "May stimulate nerve growth factor production",
      "Supports cognitive function",
      "Has neuroprotective properties",
      "May help with nerve regeneration",
      "Supports overall brain health"
    ],
    uses: ["Cognitive enhancement", "Neuroprotection", "Memory support", "Mental clarity", "Nervous system support"],
    preparations: ["Capsules", "Powder", "Tincture", "Cooked mushroom", "Tea"],
    dosage: "500-3000mg dried mushroom or 3-5ml tincture daily",
    cautions: [
      "May cause digestive upset in sensitive individuals",
      "Potential allergic reactions in those with mushroom allergies",
      "Limited research on long-term effects",
      "Not well-studied during pregnancy",
      "Effects develop gradually over several weeks"
    ],
    categories: ["Cognitive", "Mushroom", "Nervine", "Asian"]
  },
  {
    id: 213,
    name: "Rosemary",
    scientific_name: "Rosmarinus officinalis",
    description: "An aromatic herb in the mint family traditionally used to enhance memory and concentration, with modern research supporting its cognitive benefits.",
    benefits: [
      "May improve memory and concentration",
      "Contains rosmarinic acid with antioxidant properties",
      "Supports healthy circulation",
      "Has anti-inflammatory effects",
      "Traditional herb for mental clarity"
    ],
    uses: ["Cognitive support", "Memory enhancement", "Concentration aid", "Culinary herb", "Aromatherapy"],
    preparations: ["Essential oil (inhalation)", "Tea", "Tincture", "Culinary herb", "Infused oil"],
    dosage: "1-2 teaspoons dried herb for tea, 1-3 times daily or aromatherapy as needed",
    cautions: [
      "Generally recognized as safe in culinary amounts",
      "Concentrated forms may affect seizure threshold",
      "May increase sun sensitivity in high doses",
      "Can interact with anticoagulant medications",
      "Essential oil should not be used internally"
    ],
    categories: ["Cognitive", "Aromatic", "Culinary", "European"]
  },
  {
    id: 214,
    name: "Gotu Kola",
    scientific_name: "Centella asiatica",
    description: "A small herbaceous plant used in both Ayurvedic and Traditional Chinese Medicine to support brain health, enhance memory, and promote longevity.",
    benefits: [
      "Supports healthy cognitive function",
      "May enhance memory and learning",
      "Traditionally used for longevity",
      "Supports healthy circulation",
      "Has calming properties"
    ],
    uses: ["Brain health", "Memory enhancement", "Stress management", "Circulation support", "Wound healing (topical)"],
    preparations: ["Capsules", "Tea", "Tincture", "Juice", "Powder"],
    dosage: "500-1000mg dried herb daily or 2-4ml tincture 3 times daily",
    cautions: [
      "May cause skin reactions in sensitive individuals",
      "Not recommended during pregnancy",
      "May interfere with blood sugar medications",
      "Large doses may cause headache or digestive upset",
      "Can have mild sedative effects"
    ],
    categories: ["Cognitive", "Adaptogenic", "Ayurvedic", "Chinese"]
  }
];
