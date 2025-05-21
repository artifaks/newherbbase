import { Herb } from "../types/herbs";

// Herbs that primarily support respiratory health
export const respiratoryHerbs: Herb[] = [
  {
    id: 41,
    name: "Mullein",
    scientific_name: "Verbascum thapsus",
    description: "A tall plant with soft, fuzzy leaves that's renowned for its ability to soothe and protect the respiratory tract.",
    benefits: [
      "Soothes irritated respiratory tissues",
      "Helps expel excess mucus",
      "Supports lung health",
      "Has mild anti-inflammatory effects",
      "Calms coughs"
    ],
    uses: ["Respiratory support", "Cough relief", "Bronchial congestion", "Sore throat"],
    preparations: ["Tea", "Tincture", "Syrup", "Oil (for ear infections)"],
    dosage: "1-2 teaspoons dried leaf steeped in hot water for 10-15 minutes, 3 times daily",
    cautions: [
      "Ensure proper filtration of tea to remove fine hairs",
      "Seed contains small amounts of rotenone - use only leaf and flower",
      "Generally considered very safe",
      "Do not use ear oil if eardrum is perforated"
    ],
    categories: ["Respiratory", "European", "Native American"]
  },
  {
    id: 42,
    name: "Elecampane",
    scientific_name: "Inula helenium",
    description: "A tall, yellow-flowered plant whose root has been used for centuries to support lung health and clear congestion.",
    benefits: [
      "Helps clear deep-seated congestion",
      "Supports expectoration of mucus",
      "Has antimicrobial properties",
      "Soothes irritated respiratory tissues",
      "Strengthens lung function"
    ],
    uses: ["Deep lung congestion", "Chronic cough", "Bronchitis", "Respiratory infections"],
    preparations: ["Decoction", "Tincture", "Syrup", "Honey infusion"],
    dosage: "2-4ml tincture three times daily or 1-2 teaspoons dried root in decoction",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Large doses can cause nausea or vomiting",
      "Not recommended during pregnancy",
      "May lower blood sugar levels"
    ],
    categories: ["Respiratory", "European"]
  },
  {
    id: 43,
    name: "Marshmallow Root",
    scientific_name: "Althaea officinalis",
    description: "A mucilage-rich plant that soothes and protects irritated or inflamed tissues throughout the body.",
    benefits: [
      "Soothes irritated tissues",
      "Forms protective coating on mucous membranes",
      "Helps relieve dry cough",
      "Supports expectoration",
      "Has anti-inflammatory properties"
    ],
    uses: ["Dry cough", "Sore throat", "Respiratory irritation", "Digestive inflammation"],
    preparations: ["Cold infusion", "Decoction", "Tincture", "Syrup", "Lozenges"],
    dosage: "Cold infusion: 1oz root in 1 quart cold water for 4-8 hours, drink throughout day",
    cautions: [
      "May slow absorption of other medications - take separately",
      "Very safe herb with few contraindications",
      "Avoid if allergic to mallow family",
      "Large amounts may cause digestive upset"
    ],
    categories: ["Respiratory", "Digestive", "European"]
  },
  {
    id: 44,
    name: "Wild Cherry Bark",
    scientific_name: "Prunus serotina",
    description: "The inner bark of wild cherry trees, traditionally used to calm coughs and support respiratory health.",
    benefits: [
      "Suppresses coughs",
      "Reduces inflammation in airways",
      "Relaxes respiratory tissues",
      "Has astringent properties",
      "Contains compounds that help thin mucus"
    ],
    uses: ["Cough relief", "Bronchitis", "Respiratory irritation", "Convalescence"],
    preparations: ["Syrup", "Cold infusion", "Tincture", "Lozenges"],
    dosage: "2-3ml tincture three times daily or 1 teaspoon dried bark as cold infusion",
    cautions: [
      "Contains small amounts of cyanogenic glycosides - do not exceed recommended dosage",
      "Not for long-term use",
      "Not recommended during pregnancy",
      "Avoid with chronic respiratory conditions without professional guidance"
    ],
    categories: ["Respiratory", "Native American"]
  },
  {
    id: 45,
    name: "Lobelia",
    scientific_name: "Lobelia inflata",
    description: "A powerful herb traditionally used in small doses for respiratory conditions and as an antispasmodic.",
    benefits: [
      "Relaxes bronchial spasms",
      "Acts as an expectorant",
      "Has antitussive properties",
      "Supports deeper breathing",
      "Opens airways"
    ],
    uses: ["Asthmatic conditions", "Bronchial spasms", "Whooping cough", "Lung congestion"],
    preparations: ["Tincture", "Capsules", "External applications"],
    dosage: "Very small doses only - 5-10 drops tincture up to 3 times daily",
    cautions: [
      "Potentially toxic in large doses - respect recommended dosage",
      "Can cause nausea, vomiting, and dizziness even in therapeutic doses",
      "Not recommended during pregnancy or breastfeeding",
      "Should be used only under professional guidance",
      "Contraindicated with certain heart conditions"
    ],
    categories: ["Respiratory", "Native American"]
  },
  {
    id: 46,
    name: "Grindelia",
    scientific_name: "Grindelia spp.",
    description: "A resinous plant with sticky buds, traditionally used for respiratory conditions and topically for poison ivy.",
    benefits: [
      "Relaxes bronchial muscles",
      "Has expectorant properties",
      "Helps clear mucus",
      "Soothes irritated tissues",
      "Has antimicrobial effects"
    ],
    uses: ["Bronchial congestion", "Asthmatic conditions", "Poison ivy (topical)", "Respiratory allergies"],
    preparations: ["Tincture", "Tea", "Syrup", "Salve"],
    dosage: "1-2ml tincture three times daily or as tea",
    cautions: [
      "May cause digestive upset in sensitive individuals",
      "Not recommended during pregnancy",
      "May lower blood pressure in higher doses",
      "Possible contact dermatitis in sensitive individuals from topical use"
    ],
    categories: ["Respiratory", "Native American"]
  },
  {
    id: 116,
    name: "Osha Root",
    scientific_name: "Ligusticum porteri",
    description: "A powerful respiratory herb used by Native Americans for respiratory infections, coughs, and to increase lung capacity.",
    benefits: [
      "Supports respiratory immune function",
      "Has expectorant properties",
      "Contains compounds with antimicrobial effects",
      "May help increase blood flow to lungs",
      "Traditionally used for high altitude adaptation"
    ],
    uses: ["Respiratory infections", "Cough relief", "Throat irritation", "Altitude sickness"],
    preparations: ["Tincture", "Throat spray", "Tea", "Chewing the fresh root"],
    dosage: "20-40 drops of tincture 3-4 times daily or as needed",
    cautions: [
      "Not for use during pregnancy",
      "May affect blood pressure - caution with hypertension",
      "Endangered in some areas - source sustainably",
      "May interact with blood thinning medications",
      "Not for long-term use without professional guidance"
    ],
    categories: ["Respiratory", "Native American", "Antimicrobial", "Alpine"]
  },
  {
    id: 117,
    name: "Eucalyptus",
    scientific_name: "Eucalyptus globulus",
    description: "An aromatic herb with powerful respiratory benefits, used traditionally for congestion, coughs, and respiratory infections.",
    benefits: [
      "Opens airways and eases breathing",
      "Has expectorant properties",
      "Contains compounds with antimicrobial effects",
      "Relieves congestion and sinus pressure",
      "Provides cooling relief for fevers"
    ],
    uses: ["Respiratory congestion", "Sinus support", "Fever management", "Antimicrobial"],
    preparations: ["Essential oil", "Steam inhalation", "Chest rub", "Lozenges", "Tea (less common)"],
    dosage: "1-2 drops essential oil in steam inhalation or properly diluted for topical use",
    cautions: [
      "Essential oil is toxic if ingested",
      "Not for internal use except in properly formulated lozenges",
      "Keep away from eyes and mucous membranes",
      "Use with caution in children under 6",
      "Can cause skin irritation if not properly diluted"
    ],
    categories: ["Respiratory", "Antimicrobial", "Australian", "Aromatic"]
  }
];
