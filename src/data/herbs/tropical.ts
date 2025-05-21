
import { Herb } from "../types/herbs";

// Tropical herbs from around the world
export const tropicalHerbs: Herb[] = [
  {
    id: 71,
    name: "Moringa",
    scientific_name: "Moringa oleifera",
    description: "A highly nutritious tree native to India with leaves that contain exceptional levels of vitamins, minerals, and protein.",
    benefits: [
      "Provides exceptional nutritional support",
      "Has antioxidant properties",
      "Helps reduce inflammation",
      "Supports healthy blood sugar levels",
      "May help reduce cholesterol"
    ],
    uses: ["Nutritional supplementation", "General wellness", "Anti-inflammatory support", "Blood sugar management"],
    preparations: ["Powder", "Capsules", "Fresh leaves", "Tea", "Oil (from seeds)"],
    dosage: "1-2 teaspoons powder daily or 1000-1500mg in capsules",
    cautions: [
      "Root bark contains alkaloids and should be avoided",
      "May have mild laxative effect in some people",
      "May interact with medications that modify blood sugar",
      "Avoid during pregnancy due to potential uterine stimulation"
    ],
    categories: ["Nutritive", "Tropical", "Ayurvedic"]
  },
  {
    id: 72,
    name: "Graviola",
    scientific_name: "Annona muricata",
    description: "A tropical fruit tree whose leaves have traditional uses for supporting the immune system and overall health.",
    benefits: [
      "Has antioxidant properties",
      "May support immune function",
      "Traditionally used for relaxation",
      "Has digestive benefits",
      "Contains beneficial phytochemicals"
    ],
    uses: ["Immune support", "Relaxation", "Digestive health", "Overall wellness"],
    preparations: ["Tea", "Capsules", "Tincture", "Fresh fruit"],
    dosage: "1-2 capsules (500-1000mg) daily or 1 cup of leaf tea",
    cautions: [
      "May lower blood pressure - caution with hypotension or related medications",
      "Potential interaction with diabetes medications",
      "Contains annonacin which may have neurotoxic properties in very high doses",
      "Not recommended during pregnancy or breastfeeding"
    ],
    categories: ["Tropical", "South American"]
  },
  {
    id: 73,
    name: "Guava Leaf",
    scientific_name: "Psidium guajava",
    description: "Leaves from the tropical guava fruit tree that have been traditionally used for digestive health and blood sugar management.",
    benefits: [
      "Supports healthy blood sugar levels",
      "Has antimicrobial properties",
      "Helps with diarrhea and digestive issues",
      "Rich in antioxidants",
      "Supports oral health"
    ],
    uses: ["Digestive support", "Blood sugar management", "Oral health", "Wound healing"],
    preparations: ["Tea", "Capsules", "Mouthwash", "Poultice"],
    dosage: "1-2 cups of tea daily or as directed on supplement packaging",
    cautions: [
      "May enhance effects of diabetes medications",
      "May cause constipation in some individuals",
      "Could potentially interact with medications for hypertension",
      "Not enough research on safety during pregnancy"
    ],
    categories: ["Tropical", "Digestive", "South American"]
  },
  {
    id: 74,
    name: "Noni",
    scientific_name: "Morinda citrifolia",
    description: "A tropical fruit with a strong odor and taste that has been traditionally used in Polynesian medicine for overall health.",
    benefits: [
      "Contains unique antioxidants",
      "Supports immune function",
      "May help with joint health",
      "Has traditional use for skin conditions",
      "Supports cellular health"
    ],
    uses: ["Immune support", "Joint health", "Skin health", "General wellness"],
    preparations: ["Juice", "Capsules", "Powder", "Fruit leather", "Topical applications"],
    dosage: "1-2 ounces of juice daily or as directed on supplement packaging",
    cautions: [
      "Strong taste and odor may be unpleasant",
      "High potassium content - caution with kidney issues",
      "May interact with blood thinners and liver medications",
      "Can cause digestive upset in some individuals"
    ],
    categories: ["Tropical", "Oceanic"]
  },
  {
    id: 75,
    name: "Neem",
    scientific_name: "Azadirachta indica",
    description: "A sacred tree in Indian tradition with bitter leaves that have powerful medicinal properties for skin, blood purification, and immune support.",
    benefits: [
      "Has antimicrobial and antifungal properties",
      "Supports healthy skin",
      "Helps with blood purification",
      "Supports oral health",
      "Has insect-repellent properties"
    ],
    uses: ["Skin conditions", "Oral health", "Blood purification", "Insect repellent"],
    preparations: ["Capsules", "Oil", "Powder", "Tea", "Toothpaste"],
    dosage: "300-500mg capsules twice daily or as directed by a healthcare provider",
    cautions: [
      "Very bitter taste makes internal use challenging",
      "May affect fertility - not for use when trying to conceive",
      "Not recommended during pregnancy",
      "May interact with diabetes and blood pressure medications",
      "Can cause liver damage in excessive doses"
    ],
    categories: ["Tropical", "Ayurvedic", "Antimicrobial"]
  },
  {
    id: 76,
    name: "Cat's Claw",
    scientific_name: "Uncaria tomentosa",
    description: "A woody vine from the Amazon rainforest with hook-like thorns and powerful immunomodulating and anti-inflammatory properties.",
    benefits: [
      "Supports immune system function",
      "Has anti-inflammatory properties",
      "May help with joint health",
      "Supports digestive health",
      "Has antioxidant effects"
    ],
    uses: ["Immune support", "Inflammatory conditions", "Joint health", "Digestive support"],
    preparations: ["Capsules", "Tea", "Tincture", "Decoction"],
    dosage: "500-1000mg capsules daily or 1-2ml tincture 2-3 times daily",
    cautions: [
      "May enhance effects of blood pressure medication",
      "Could affect blood clotting - discontinue before surgery",
      "Not recommended during pregnancy or breastfeeding",
      "May interact with immunosuppressant drugs",
      "May affect hormone-sensitive conditions"
    ],
    categories: ["Tropical", "South American", "Immunomodulating"]
  },
  {
    id: 77,
    name: "Andrographis",
    scientific_name: "Andrographis paniculata",
    description: "An intensely bitter herb from Southeast Asia that has powerful immune-supporting and anti-inflammatory properties.",
    benefits: [
      "Supports immune response to infections",
      "Has anti-inflammatory properties",
      "Helps with respiratory health",
      "Supports liver function",
      "Has bitter digestive properties"
    ],
    uses: ["Immune support", "Respiratory health", "Liver support", "Inflammatory conditions"],
    preparations: ["Capsules", "Tablets", "Tincture", "Tea (very bitter)"],
    dosage: "400-800mg standardized extract daily",
    cautions: [
      "Extremely bitter taste makes tea unpalatable for many",
      "May affect blood clotting - discontinue before surgery",
      "Not recommended during pregnancy",
      "May interact with blood pressure and immunosuppressant medications",
      "May cause allergic reactions in some individuals"
    ],
    categories: ["Tropical", "Traditional Chinese", "Bitter"]
  },
  {
    id: 78,
    name: "Bitter Melon",
    scientific_name: "Momordica charantia",
    description: "A tropical vine with unique bitter fruits that have been traditionally used for blood sugar management and digestive health.",
    benefits: [
      "Supports healthy blood sugar levels",
      "Has digestive benefits",
      "Contains unique phytonutrients",
      "Has antimicrobial properties",
      "Supports liver health"
    ],
    uses: ["Blood sugar management", "Digestive support", "Liver support", "General wellness"],
    preparations: ["Fresh fruit", "Juice", "Capsules", "Tea", "Extract"],
    dosage: "500-1000mg dried fruit or 50-100ml fresh juice daily",
    cautions: [
      "Extremely bitter taste is challenging for many",
      "May enhance effects of diabetes medications",
      "Seeds contain toxic compounds and should be removed before consumption",
      "Not recommended during pregnancy",
      "May affect fertility"
    ],
    categories: ["Tropical", "Asian", "Blood Sugar"]
  },
  {
    id: 79,
    name: "Acerola Cherry",
    scientific_name: "Malpighia emarginata",
    description: "A tropical fruit with exceptionally high vitamin C content and powerful antioxidant properties.",
    benefits: [
      "Provides natural vitamin C complex",
      "Has powerful antioxidant properties",
      "Supports immune function",
      "Helps with collagen production",
      "Supports overall wellness"
    ],
    uses: ["Immune support", "Antioxidant protection", "Skin health", "General wellness"],
    preparations: ["Powder", "Capsules", "Fresh fruit", "Frozen fruit", "Extract"],
    dosage: "500-1000mg powder or 1-2 tablespoons fresh fruit daily",
    cautions: [
      "May increase iron absorption - monitor if you have hemochromatosis",
      "High doses may cause digestive upset",
      "Natural vitamin C degrades rapidly after harvesting",
      "Choose quality sources to ensure potency"
    ],
    categories: ["Tropical", "Nutritive", "South American"]
  },
  {
    id: 80,
    name: "Papaya Leaf",
    scientific_name: "Carica papaya",
    description: "Leaves from the tropical papaya tree that contain enzymes and compounds that support digestion and have traditional medicinal uses.",
    benefits: [
      "Contains digestive enzymes",
      "Has anti-inflammatory properties",
      "Supports platelet production",
      "Contains unique antioxidants",
      "May have antimicrobial effects"
    ],
    uses: ["Digestive support", "Platelet support", "Inflammatory conditions", "Skin health"],
    preparations: ["Tea", "Capsules", "Tincture", "Fresh leaves", "Juice"],
    dosage: "1-2 cups tea daily or as directed on supplement packaging",
    cautions: [
      "Not recommended during pregnancy (contains papain which may affect pregnancy)",
      "Can increase blood thinning effects",
      "May lower blood sugar - monitor if diabetic",
      "Potential allergic reactions in people sensitive to latex"
    ],
    categories: ["Tropical", "Digestive", "Asian"]
  }
];
