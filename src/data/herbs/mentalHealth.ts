
import { Herb } from "../types/herbs";

// Mental health herbs that primarily support psychological wellbeing
export const mentalHealthHerbs: Herb[] = [
  {
    id: 55,
    name: "St. John's Wort",
    scientific_name: "Hypericum perforatum",
    description: "A yellow-flowered plant historically used for mood support and emotional balance.",
    benefits: [
      "May help with mild to moderate depression",
      "Can support mood regulation",
      "Has antiviral properties",
      "May help with seasonal affective disorder",
      "Supports nervous system health"
    ],
    uses: ["Mood support", "Nerve pain", "Wound healing", "Antiviral"],
    preparations: ["Tincture", "Tea", "Capsules", "Topical oil"],
    dosage: "300mg standardized extract, 3 times daily",
    cautions: [
      "Interacts with many medications including birth control, antidepressants, and blood thinners",
      "Can cause photosensitivity",
      "Not recommended during pregnancy or breastfeeding",
      "Should not be combined with antidepressants"
    ],
    categories: ["Mental Health", "Nervine", "European"]
  },
  {
    id: 56,
    name: "Rhodiola",
    scientific_name: "Rhodiola rosea",
    description: "An adaptogenic herb from cold mountain regions that helps the body adapt to stress and supports mental clarity.",
    benefits: [
      "Supports stress resilience",
      "May help with fatigue and exhaustion",
      "Can improve mental performance under stress",
      "Supports mood stabilization",
      "May help with anxiety"
    ],
    uses: ["Stress management", "Mental clarity", "Endurance", "Altitude sickness"],
    preparations: ["Capsules", "Tincture", "Tea"],
    dosage: "200-600mg daily of standardized extract",
    cautions: [
      "May interact with medications for depression or anxiety",
      "Can cause stimulating effects - avoid taking in the evening",
      "May affect blood sugar levels",
      "Not recommended during pregnancy or breastfeeding"
    ],
    categories: ["Mental Health", "Adaptogenic", "European"]
  },
  {
    id: 57,
    name: "Bacopa",
    scientific_name: "Bacopa monnieri",
    description: "An Ayurvedic herb known for its cognitive-enhancing properties and support for memory and learning.",
    benefits: [
      "May enhance memory and cognition",
      "Supports learning ability",
      "Has antioxidant properties for brain health",
      "May reduce anxiety and stress",
      "Supports overall brain function"
    ],
    uses: ["Cognitive enhancement", "Memory support", "Stress management", "Focus and concentration"],
    preparations: ["Capsules", "Tincture", "Powder"],
    dosage: "300-450mg daily of extract containing 50% bacosides",
    cautions: [
      "May cause digestive upset in some people",
      "May interact with certain medications including thyroid and calcium channel blockers",
      "Should be taken with meals to reduce potential digestive side effects",
      "Effects may take 4-6 weeks to become noticeable"
    ],
    categories: ["Mental Health", "Cognitive", "Ayurvedic"]
  }
];
