
import { Herb } from "../types/herbs";

// Herbs that primarily support the nervous system and mental health
export const nervineHerbs: Herb[] = [
  {
    id: 200,
    name: "Lemon Balm",
    scientific_name: "Melissa officinalis",
    description: "A lemony-scented herb in the mint family with calming properties that help reduce anxiety, improve sleep, and support cognitive function.",
    benefits: [
      "Reduces anxiety and stress",
      "Supports healthy sleep",
      "May improve cognitive performance",
      "Has gentle sedative properties",
      "Supports digestive comfort"
    ],
    uses: ["Anxiety relief", "Sleep support", "Stress management", "Digestive comfort", "Focus enhancement"],
    preparations: ["Tea", "Tincture", "Capsules", "Essential oil", "Fresh leaves"],
    dosage: "1-2 teaspoons dried herb for tea, 2-3 times daily or 2-4ml tincture",
    cautions: [
      "May interact with sedative medications",
      "Can affect thyroid function in high doses",
      "May interfere with concentration when taken in large amounts",
      "Avoid before driving if you're sensitive to its effects",
      "May interfere with some lab tests"
    ],
    categories: ["Nervine", "Aromatic", "European", "Relaxant"]
  },
  {
    id: 201,
    name: "Kava",
    scientific_name: "Piper methysticum",
    description: "A South Pacific herb whose roots have been traditionally used to promote relaxation and ease anxiety without affecting mental clarity.",
    benefits: [
      "Reduces anxiety and stress",
      "Promotes relaxation without sedation",
      "May help with sleep onset",
      "Has muscle relaxant properties",
      "Traditionally used for ceremonial purposes"
    ],
    uses: ["Anxiety relief", "Stress management", "Sleep support", "Social relaxant", "Muscle tension"],
    preparations: ["Root extract", "Capsules", "Tincture", "Traditional preparation"],
    dosage: "100-250mg of kavalactones daily, divided into 2-3 doses",
    cautions: [
      "Potential liver concerns - use quality extracts and follow dosage guidelines",
      "Avoid with alcohol and other sedatives",
      "Not for use with Parkinson's medications or antipsychotics",
      "Don't use before driving",
      "Not recommended during pregnancy or breastfeeding"
    ],
    categories: ["Nervine", "Relaxant", "Oceanic"]
  },
  {
    id: 202,
    name: "St. John's Wort",
    scientific_name: "Hypericum perforatum",
    description: "A flowering herb with bright yellow petals that has traditional use for supporting mood and nervous system health.",
    benefits: [
      "May support positive mood",
      "Has nervine properties",
      "Traditionally used for nerve pain",
      "Supports the nervous system during stress",
      "Has antiviral properties"
    ],
    uses: ["Mood support", "Nerve pain", "Stress management", "Topical wound healing"],
    preparations: ["Capsules", "Tea", "Tincture", "Topical oil", "Extract"],
    dosage: "300-900mg standardized extract (0.3% hypericin) daily",
    cautions: [
      "Interacts with MANY medications - consult healthcare provider before use",
      "Can cause photosensitivity - avoid excessive sun exposure",
      "May affect hormone-based contraceptives",
      "Not recommended during pregnancy or breastfeeding",
      "Should not be combined with prescription antidepressants"
    ],
    categories: ["Nervine", "Adaptogenic", "European"]
  },
  {
    id: 203,
    name: "Blue Vervain",
    scientific_name: "Verbena hastata",
    description: "A native North American herb traditionally used to calm an overactive nervous system, especially when tension is held in the neck and shoulders.",
    benefits: [
      "Helps release nervous tension",
      "May support healthy stress response",
      "Traditionally used for headaches from tension",
      "Has mild sedative properties",
      "Supports the parasympathetic nervous system"
    ],
    uses: ["Tension relief", "Stress management", "Headache support", "Sleep support", "Nervous system tonic"],
    preparations: ["Tincture", "Tea", "Capsules", "Glycerite"],
    dosage: "1-2ml tincture up to 3 times daily or 1 teaspoon dried herb as tea",
    cautions: [
      "Very bitter taste - often combined with sweetener or other herbs",
      "May stimulate uterus - avoid during pregnancy",
      "Can increase effects of sedative medications",
      "May lower blood pressure in higher doses",
      "Traditionally used in small amounts as part of formulas"
    ],
    categories: ["Nervine", "Bitter", "Native American"]
  },
  {
    id: 204,
    name: "Oat Straw",
    scientific_name: "Avena sativa",
    description: "The green tops and stems of the common oat plant, harvested before the grain matures, used as a gentle nervous system restorative.",
    benefits: [
      "Nourishes the nervous system",
      "Supports mental clarity and focus",
      "Traditionally used for anxiety and stress",
      "May help with cognitive function",
      "Supports healthy stress response"
    ],
    uses: ["Nervous system support", "Cognitive function", "Stress resilience", "Mental fatigue", "Long-term nervous system recovery"],
    preparations: ["Tea", "Tincture", "Capsules", "Infusion", "Bath"],
    dosage: "3-5 teaspoons dried herb for infusion daily or 2-4ml tincture 3 times daily",
    cautions: [
      "Generally very safe with few side effects",
      "May cause digestive upset in sensitive individuals",
      "Possible allergic reaction in those with celiac disease or gluten sensitivity",
      "Effects are gentle and build over time with consistent use",
      "Not for acute anxiety relief - works best as a tonic"
    ],
    categories: ["Nervine", "Nutritive", "European", "Tonic"]
  }
];
