
import { Herb } from "../types/herbs";

// Collection of Mediterranean herbs famous for their culinary and medicinal properties
export const mediterraneanHerbs: Herb[] = [
  {
    id: 200,
    name: "Rosemary",
    scientific_name: "Rosmarinus officinalis",
    description: "An aromatic evergreen shrub with needle-like leaves and blue flowers native to the Mediterranean region, used extensively in cooking and traditional medicine.",
    benefits: [
      "Improves memory and concentration",
      "Contains powerful antioxidants",
      "Supports digestive health",
      "Anti-inflammatory properties",
      "May improve circulation"
    ],
    uses: ["Culinary enhancement", "Memory support", "Digestive aid", "Hair and skin care"],
    preparations: ["Essential oil", "Dried herb", "Fresh herb", "Tea", "Tincture"],
    dosage: "As tea: 1-2 teaspoons dried herb per cup, steeped for 10-15 minutes; as tincture: 20-40 drops, 2-3 times daily",
    cautions: [
      "May affect seizure medications",
      "May interact with blood thinners",
      "Not recommended during pregnancy in medicinal amounts",
      "May affect blood sugar in diabetics",
      "May cause allergic reactions in sensitive individuals"
    ],
    categories: ["Mediterranean", "Culinary", "Cognitive", "Aromatic"]
  },
  {
    id: 201,
    name: "Sage",
    scientific_name: "Salvia officinalis",
    description: "A perennial, evergreen subshrub with grayish leaves and blue to purplish flowers, highly valued for its culinary and medicinal properties since ancient times.",
    benefits: [
      "Supports cognitive function and memory",
      "Helps manage menopausal symptoms",
      "Has antimicrobial properties",
      "May help regulate blood sugar",
      "Supports oral health"
    ],
    uses: ["Culinary herb", "Memory enhancement", "Hot flash reduction", "Sore throat remedy", "Digestive aid"],
    preparations: ["Tea", "Essential oil", "Tincture", "Fresh or dried leaf", "Gargle"],
    dosage: "As tea: 1-3 grams dried leaves per cup of water, 2-3 times daily; as tincture: 2-4 ml, 3 times daily",
    cautions: [
      "May interact with diabetes medications",
      "Not recommended during pregnancy or breastfeeding",
      "May interfere with seizure medications",
      "Contains thujone which can be neurotoxic in extremely high doses",
      "May reduce milk production in nursing mothers"
    ],
    categories: ["Mediterranean", "Culinary", "Women's Health", "Cognitive"]
  },
  {
    id: 202,
    name: "Oregano",
    scientific_name: "Origanum vulgare",
    description: "A flowering plant in the mint family with purple flowers and an aromatic, warm, and slightly bitter taste, traditionally used as both a culinary and medicinal herb.",
    benefits: [
      "Powerful antimicrobial properties",
      "Rich source of antioxidants",
      "Supports respiratory health",
      "Anti-inflammatory effects",
      "May help fight parasitic infections"
    ],
    uses: ["Culinary spice", "Respiratory support", "Immune boosting", "Digestive aid"],
    preparations: ["Essential oil", "Dried herb", "Tea", "Tincture", "Capsules"],
    dosage: "As tea: 1-2 teaspoons dried herb per cup, steeped for 5-10 minutes; as oil: 1-2 drops diluted in carrier oil",
    cautions: [
      "May increase bleeding risk when used with blood thinners",
      "Not recommended during pregnancy in medicinal amounts",
      "May cause allergic reactions in people sensitive to plants in the Lamiaceae family",
      "Can interact with lithium and antidiabetic drugs",
      "May lower blood sugar - monitor if diabetic"
    ],
    categories: ["Mediterranean", "Culinary", "Antimicrobial", "Immune"]
  },
  {
    id: 203,
    name: "Thyme",
    scientific_name: "Thymus vulgaris",
    description: "A small, aromatic perennial evergreen herb with small, highly aromatic leaves and small, whorled pink or purple flowers, used extensively in cooking and traditional medicine.",
    benefits: [
      "Strong antimicrobial properties",
      "Supports respiratory health",
      "Helps with coughs and bronchitis",
      "Contains thymol with antifungal properties",
      "Provides digestive support"
    ],
    uses: ["Respiratory infections", "Cough remedy", "Culinary herb", "Digestive support"],
    preparations: ["Tea", "Tincture", "Essential oil", "Syrup", "Steam inhalation"],
    dosage: "As tea: 1-2 teaspoons dried herb per cup, steeped for 10 minutes; as syrup: 1-2 teaspoons, 3 times daily",
    cautions: [
      "May slow blood clotting - discontinue before surgery",
      "May interact with medications processed by the liver",
      "Should not be used in high doses during pregnancy",
      "Essential oil should not be taken internally without professional guidance",
      "May cause skin irritation when used topically in concentrated forms"
    ],
    categories: ["Mediterranean", "Culinary", "Respiratory", "Antimicrobial"]
  },
  {
    id: 204,
    name: "Bay Leaf",
    scientific_name: "Laurus nobilis",
    description: "An aromatic evergreen tree or large shrub with green, glossy leaves, native to the Mediterranean region, whose leaves are used as a culinary herb and in traditional medicine.",
    benefits: [
      "Supports digestive health",
      "Contains anti-inflammatory compounds",
      "Rich in antioxidants",
      "May help manage blood sugar levels",
      "Has antimicrobial properties"
    ],
    uses: ["Culinary seasoning", "Digestive aid", "Blood sugar management", "Respiratory support"],
    preparations: ["Dried leaf for cooking", "Tea", "Essential oil", "Poultice"],
    dosage: "For tea: 1 bay leaf steeped in hot water for 10 minutes; for cooking: 1-2 leaves per dish, remove before eating",
    cautions: [
      "Whole leaves can be a choking hazard and should be removed before eating",
      "May cause allergic reactions in some individuals",
      "May interact with medications for diabetes",
      "Large amounts may irritate the stomach",
      "Essential oil should not be taken internally"
    ],
    categories: ["Mediterranean", "Culinary", "Digestive", "Aromatic"]
  },
  {
    id: 205,
    name: "Marjoram",
    scientific_name: "Origanum majorana",
    description: "A perennial herb with sweet pine and citrus flavors, featuring delicate oval-shaped gray-green leaves and small white or pink flowers, closely related to oregano.",
    benefits: [
      "Supports digestive system health",
      "Has calming effects on the nervous system",
      "Contains antioxidants that help fight free radicals",
      "May help relieve menstrual cramps",
      "Has mild antimicrobial properties"
    ],
    uses: ["Culinary herb", "Digestive aid", "Stress relief", "Menstrual discomfort", "Sleep support"],
    preparations: ["Fresh herb", "Dried herb", "Tea", "Essential oil", "Tincture"],
    dosage: "As tea: 1-2 teaspoons dried herb per cup of hot water, steeped for 5-10 minutes; 2-3 times daily",
    cautions: [
      "May increase risk of bleeding when used with anticoagulant medications",
      "Not recommended during pregnancy as it may stimulate uterine contractions",
      "May cause drowsiness when combined with sedative medications",
      "Can lower blood sugar levels - monitor if diabetic",
      "Essential oil should not be taken internally"
    ],
    categories: ["Mediterranean", "Culinary", "Nervine", "Women's Health"]
  },
  {
    id: 206,
    name: "Fennel",
    scientific_name: "Foeniculum vulgare",
    description: "A hardy, perennial herb with feathery leaves and yellow flowers, known for its distinctive anise-like flavor and widely used in Mediterranean cuisine and traditional medicine.",
    benefits: [
      "Relieves digestive issues including bloating and gas",
      "May help increase milk production in nursing mothers",
      "Has anti-inflammatory properties",
      "May help with menstrual discomfort",
      "Contains antimicrobial compounds"
    ],
    uses: ["Culinary herb", "Digestive aid", "Lactation support", "Menstrual support", "Breath freshener"],
    preparations: ["Seeds", "Tea", "Essential oil", "Fresh bulb", "Tincture"],
    dosage: "As tea: 1-2 teaspoons crushed seeds per cup of hot water, steeped for 10 minutes; 2-3 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the carrot family",
      "May interact with certain medications including estrogen and blood thinners",
      "Not recommended in high doses during pregnancy",
      "Contains phytoestrogens - use with caution if you have hormone-sensitive conditions",
      "May increase sun sensitivity when used topically"
    ],
    categories: ["Mediterranean", "Culinary", "Digestive", "Women's Health"]
  },
  {
    id: 207,
    name: "Lavender",
    scientific_name: "Lavandula angustifolia",
    description: "An aromatic shrub with purple-blue flower spikes and a sweet, floral fragrance, widely cultivated throughout the Mediterranean region for its essential oil.",
    benefits: [
      "Promotes relaxation and stress relief",
      "May help improve sleep quality",
      "Has antimicrobial properties",
      "Can help with minor burns and skin irritations",
      "May help reduce anxiety and nervous tension"
    ],
    uses: ["Aromatherapy", "Sleep aid", "Skin care", "Anxiety relief", "Headache relief"],
    preparations: ["Essential oil", "Dried flowers", "Tea", "Tincture", "Bath sachets"],
    dosage: "As tea: 1-2 teaspoons dried flowers per cup of hot water, steeped for 5-10 minutes; before bedtime for sleep",
    cautions: [
      "May increase drowsiness when combined with sedative medications",
      "Can cause skin irritation in some individuals when used topically",
      "Essential oil should not be taken internally",
      "May interfere with blood pressure medications",
      "Avoid during first trimester of pregnancy"
    ],
    categories: ["Mediterranean", "Aromatic", "Nervine", "Sleep"]
  },
  {
    id: 208,
    name: "Mint",
    scientific_name: "Mentha spp.",
    description: "A group of aromatic herbs with square stems, opposite leaves, and small flowers, including varieties like peppermint and spearmint, native to the Mediterranean region.",
    benefits: [
      "Soothes digestive discomfort and indigestion",
      "Has cooling properties that may help with headaches",
      "Supports respiratory health",
      "Contains antimicrobial compounds",
      "May help relieve nausea"
    ],
    uses: ["Digestive aid", "Headache relief", "Breath freshener", "Cooling agent", "Culinary herb"],
    preparations: ["Fresh leaves", "Dried leaves", "Tea", "Essential oil", "Tincture"],
    dosage: "As tea: 1-2 teaspoons dried leaves per cup of hot water, steeped for 5-10 minutes; 2-3 times daily",
    cautions: [
      "May worsen acid reflux in some individuals",
      "Can interact with certain medications that are processed by the liver",
      "May reduce the absorption of iron when consumed with iron-rich foods",
      "Peppermint oil should not be used near the face of infants or young children",
      "May interfere with medications for diabetes, high blood pressure, and certain heart conditions"
    ],
    categories: ["Mediterranean", "Culinary", "Digestive", "Respiratory"]
  },
  {
    id: 209,
    name: "Basil",
    scientific_name: "Ocimum basilicum",
    description: "A tender annual herb with fragrant green leaves, widely used in Mediterranean cuisine and traditional medicine systems, especially popular in Italian cooking.",
    benefits: [
      "Rich in antioxidants that protect cells",
      "Contains anti-inflammatory compounds",
      "May help regulate blood sugar",
      "Supports digestive health",
      "Has mild antimicrobial properties"
    ],
    uses: ["Culinary herb", "Digestive support", "Anti-inflammatory", "Stress reduction", "Skin care"],
    preparations: ["Fresh leaves", "Dried leaves", "Essential oil", "Tea", "Infused oil"],
    dosage: "As tea: 1-2 teaspoons dried leaves per cup of hot water, steeped for 5-10 minutes; 2-3 times daily",
    cautions: [
      "May slow blood clotting - discontinue before surgery",
      "Can interact with certain medications including blood thinners",
      "Holy basil variety should be used with caution during pregnancy",
      "May lower blood sugar - monitor if diabetic",
      "Essential oil should be properly diluted before topical use"
    ],
    categories: ["Mediterranean", "Culinary", "Anti-inflammatory", "Aromatic"]
  },
  {
    id: 210,
    name: "Dill",
    scientific_name: "Anethum graveolens",
    description: "An annual herb with feathery green leaves and yellow flowers, used both as a herb for its leaves and as a spice for its seeds in Mediterranean cooking.",
    benefits: [
      "Supports digestive health and relieves gas",
      "Contains antibacterial properties",
      "Rich in antioxidants",
      "May help manage blood sugar levels",
      "Traditionally used as a sleep support"
    ],
    uses: ["Culinary seasoning", "Digestive aid", "Breath freshener", "Lactation support", "Sleep aid"],
    preparations: ["Fresh leaves", "Dried herb", "Seeds", "Tea", "Essential oil"],
    dosage: "As tea: 1-2 teaspoons dried herb or seeds per cup of hot water, steeped for 5-10 minutes; 2-3 times daily",
    cautions: [
      "May increase bleeding risk when taken with blood thinners",
      "Seeds should be used with caution during pregnancy",
      "May interact with lithium medications",
      "Can lower blood pressure - monitor if taking hypertension medications",
      "Essential oil should not be taken internally"
    ],
    categories: ["Mediterranean", "Culinary", "Digestive", "Sleep"]
  },
  {
    id: 211,
    name: "Savory",
    scientific_name: "Satureja spp.",
    description: "An aromatic herb with narrow leaves, including summer savory (annual) and winter savory (perennial), both used in Mediterranean cooking and traditional medicine.",
    benefits: [
      "Has antimicrobial properties",
      "Supports digestive function",
      "Contains antioxidant compounds",
      "May help with respiratory issues",
      "Has mild analgesic properties"
    ],
    uses: ["Culinary herb", "Digestive aid", "Sore throat remedy", "Insect repellent", "Antiseptic"],
    preparations: ["Fresh herb", "Dried herb", "Tea", "Essential oil", "Gargle"],
    dosage: "As tea: 1 teaspoon dried herb per cup of hot water, steeped for 5-10 minutes; 2-3 times daily",
    cautions: [
      "May interfere with certain medications",
      "Winter savory should be used with caution during pregnancy",
      "Essential oil should be diluted before use",
      "May cause skin irritation in sensitive individuals",
      "Can lower blood sugar levels - monitor if diabetic"
    ],
    categories: ["Mediterranean", "Culinary", "Antimicrobial", "Digestive"]
  },
  {
    id: 212,
    name: "Tarragon",
    scientific_name: "Artemisia dracunculus",
    description: "A perennial herb with narrow, aromatic leaves and a distinctive anise-like flavor, commonly used in French and Mediterranean cuisine.",
    benefits: [
      "Aids digestion and stimulates appetite",
      "Contains antioxidants",
      "May help regulate blood sugar",
      "Has mild analgesic properties",
      "Traditionally used for sleep support"
    ],
    uses: ["Culinary herb", "Digestive support", "Sleep aid", "Pain management", "Appetite stimulant"],
    preparations: ["Fresh leaves", "Dried leaves", "Tea", "Vinegar infusion", "Essential oil"],
    dosage: "As tea: 1 teaspoon dried herb per cup of hot water, steeped for 5 minutes; 1-2 times daily",
    cautions: [
      "May interact with blood thinning medications",
      "Not recommended in medicinal amounts during pregnancy",
      "Contains compounds similar to estrogen - use with caution with hormone-sensitive conditions",
      "May cause allergic reactions in people sensitive to plants in the Asteraceae family",
      "Should not be used in large amounts over extended periods"
    ],
    categories: ["Mediterranean", "Culinary", "Digestive", "Sleep"]
  },
  {
    id: 213,
    name: "Capers",
    scientific_name: "Capparis spinosa",
    description: "A perennial plant native to the Mediterranean region, known for its edible flower buds (capers) that are pickled and used as a culinary ingredient.",
    benefits: [
      "Rich in antioxidants, especially quercetin and rutin",
      "Contains anti-inflammatory compounds",
      "May support cardiovascular health",
      "Has antimicrobial properties",
      "Provides a good source of vitamins and minerals"
    ],
    uses: ["Culinary seasoning", "Antioxidant support", "Anti-inflammatory aid", "Digestive stimulant", "Traditional medicine"],
    preparations: ["Pickled buds", "Salted buds", "Extract", "Tincture"],
    dosage: "Primarily used as a culinary ingredient; for medicinal use, follow product-specific instructions",
    cautions: [
      "May interact with medications that affect blood clotting",
      "Could lower blood pressure - monitor if on hypertension medications",
      "May affect blood sugar levels - use with caution if diabetic",
      "High sodium content in preserved capers may be problematic for those on sodium-restricted diets",
      "May cause allergic reactions in sensitive individuals"
    ],
    categories: ["Mediterranean", "Culinary", "Antioxidant", "Anti-inflammatory"]
  },
  {
    id: 214,
    name: "Lemon Balm",
    scientific_name: "Melissa officinalis",
    description: "A perennial herb from the mint family with a gentle lemon scent, native to the Mediterranean region and used for its calming and digestive properties.",
    benefits: [
      "Promotes relaxation and reduces stress and anxiety",
      "May improve sleep quality",
      "Supports digestive health",
      "Has antiviral properties, particularly against herpes simplex",
      "Contains antioxidants that fight oxidative stress"
    ],
    uses: ["Sleep aid", "Anxiety relief", "Digestive support", "Cold sore treatment", "Nervous tension"],
    preparations: ["Tea", "Tincture", "Essential oil", "Fresh leaves", "Capsules"],
    dosage: "As tea: 1-2 teaspoons dried herb per cup, steeped for 10 minutes; 2-3 times daily",
    cautions: [
      "May interact with sedative medications",
      "Can affect thyroid function if used in large amounts long-term",
      "May increase the effects of GABA-enhancing drugs",
      "Can cause drowsiness - use caution when driving or operating machinery",
      "May lower blood sugar - monitor if diabetic"
    ],
    categories: ["Mediterranean", "Nervine", "Sleep", "Antiviral"]
  },
  {
    id: 215,
    name: "Borage",
    scientific_name: "Borago officinalis",
    description: "An annual herb with blue star-shaped flowers and cucumber-like flavored leaves, native to the Mediterranean region and valued for its medicinal properties.",
    benefits: [
      "Contains gamma-linolenic acid (GLA) that supports skin health",
      "Has anti-inflammatory properties",
      "May support adrenal function during stress",
      "Traditionally used to support lactation",
      "Contains beneficial minerals including calcium, potassium, and iron"
    ],
    uses: ["Skin conditions", "Anti-inflammatory support", "Adrenal support", "Lactation aid", "Culinary garnish"],
    preparations: ["Oil (from seeds)", "Fresh leaves and flowers", "Tea", "Tincture", "Poultice"],
    dosage: "As tea: 1 teaspoon dried herb per cup of water, steeped for 5-10 minutes; oil: follow product recommendations",
    cautions: [
      "Contains pyrrolizidine alkaloids - not recommended for long-term internal use",
      "May have blood-thinning effects - discontinue before surgery",
      "Not recommended during pregnancy",
      "May interact with anticonvulsant medications",
      "Can have diuretic effects - may interact with certain medications"
    ],
    categories: ["Mediterranean", "Women's Health", "Skin", "Anti-inflammatory"]
  }
];
