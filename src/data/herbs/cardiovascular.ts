import { Herb } from "../types/herbs";

// Herbs that primarily support cardiovascular health
export const cardiovascularHerbs: Herb[] = [
  {
    id: 20,
    name: "Licorice Root",
    scientific_name: "Glycyrrhiza glabra",
    description: "A sweet-tasting root used in both Western and Eastern herbal traditions for its anti-inflammatory, soothing, and adrenal-supporting properties.",
    benefits: [
      "Soothes irritated throats and digestive tissues",
      "Supports adrenal function",
      "Has anti-inflammatory effects",
      "May help with respiratory conditions",
      "Has mild antimicrobial properties"
    ],
    uses: ["Digestive support", "Adrenal support", "Respiratory health", "Throat soother"],
    preparations: ["Decoction", "Tincture", "Capsules", "Chew sticks", "Lozenges"],
    dosage: "1-2 teaspoons dried root for decoction, 1-3 times daily",
    cautions: [
      "Can cause hypertension and water retention in large doses",
      "Not recommended for people with high blood pressure, kidney or liver disease, or during pregnancy",
      "Interacts with many medications",
      "Should not be used continuously for more than 4-6 weeks"
    ],
    categories: ["Adaptogenic", "Anti-inflammatory", "Digestive", "Respiratory", "Mediterranean"]
  },
  {
    id: 24,
    name: "Hawthorn",
    scientific_name: "Crataegus species",
    description: "A thorny tree or shrub with white flowers and red berries, long valued as a cardiovascular tonic that supports heart function and circulation.",
    benefits: [
      "Supports overall cardiovascular function",
      "May help regulate blood pressure",
      "Strengthens heart muscle",
      "Has antioxidant properties",
      "May help reduce cholesterol"
    ],
    uses: ["Heart health", "Cardiovascular support", "Blood pressure regulation"],
    preparations: ["Tincture", "Tea", "Capsules", "Berry syrup"],
    dosage: "300-900mg extract daily or 1-2 teaspoons dried berries/flowers for tea, 3 times daily",
    cautions: [
      "May interact with heart medications and blood pressure drugs",
      "Effects may take weeks or months to develop",
      "Best used under professional guidance for heart conditions",
      "Not for acute heart conditions - seek medical care"
    ],
    categories: ["Cardiovascular", "Circulatory", "Antioxidant", "European"]
  },
  {
    id: 112,
    name: "Motherwort",
    scientific_name: "Leonurus cardiaca",
    description: "A herb traditionally used to support heart health, particularly for nervous heart conditions and heart palpitations with anxiety.",
    benefits: [
      "Supports healthy heart rhythm",
      "May help reduce anxiety-related heart palpitations",
      "Has mild sedative effects",
      "Traditionally used for menstrual health",
      "Contains compounds that support cardiovascular function"
    ],
    uses: ["Heart palpitations", "Anxiety with heart symptoms", "Menstrual support", "Mild sedative"],
    preparations: ["Tincture", "Tea", "Capsules", "Glycerite"],
    dosage: "2-4ml tincture 3 times daily or 1-2 teaspoons dried herb as tea",
    cautions: [
      "Very bitter taste makes tea challenging",
      "May stimulate uterine contractions - avoid during pregnancy",
      "Can interact with heart medications and sedatives",
      "May affect thyroid function in high doses"
    ],
    categories: ["Cardiovascular", "Nervine", "European", "Women's Health"]
  },
  {
    id: 113,
    name: "Arjuna",
    scientific_name: "Terminalia arjuna",
    description: "A traditional Ayurvedic herb used for centuries to support heart function, strengthen cardiac muscle, and maintain healthy cholesterol levels.",
    benefits: [
      "Supports heart muscle function",
      "May help maintain healthy blood pressure",
      "Supports healthy cholesterol levels",
      "Has antioxidant properties",
      "Traditionally used for heart failure and angina"
    ],
    uses: ["Heart support", "Cardiovascular health", "Cholesterol management", "Blood pressure support"],
    preparations: ["Powder", "Capsules", "Decoction", "Extract"],
    dosage: "500mg-1500mg of bark powder or 1-2g extract daily",
    cautions: [
      "May interact with heart medications and blood thinners",
      "Can lower blood pressure - monitor if taking BP medications",
      "May cause digestive upset in some individuals",
      "Use with professional guidance if you have heart conditions"
    ],
    categories: ["Cardiovascular", "Ayurvedic", "Antioxidant"]
  }
];
