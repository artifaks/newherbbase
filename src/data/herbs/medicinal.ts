import { Herb } from "../types/herbs";

// Medicinal herbs data - general therapeutic herbs
export const medicinalHerbs: Herb[] = [
  {
    id: 181,
    name: "Astragalus",
    scientific_name: "Astragalus membranaceus",
    description: "An adaptogenic herb used in Traditional Chinese Medicine to boost the immune system and combat fatigue.",
    benefits: [
      "Boosts immune system",
      "Reduces fatigue",
      "Anti-inflammatory properties",
      "Supports cardiovascular health",
      "Adaptogenic properties"
    ],
    uses: [
      "Immune support",
      "Chronic fatigue",
      "Upper respiratory infections",
      "Adjunct cancer therapy",
      "Cardiovascular support"
    ],
    preparations: ["Decoction", "Capsules", "Tincture", "Powder"],
    dosage: "3-9 grams daily in decoction or 400mg capsules 2-3 times daily",
    cautions: [
      "May interact with immunosuppressant drugs",
      "Not recommended for acute infections with fever",
      "May stimulate the immune system",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects"
    ],
    categories: ["Medicinal", "Adaptogenic", "Immune", "Chinese Medicine"]
  },
  {
    id: 182,
    name: "Echinacea",
    scientific_name: "Echinacea purpurea/angustifolia",
    description: "A popular herb known for its immune-boosting properties, often used to combat colds and flu.",
    benefits: [
      "Boosts immune system",
      "Reduces cold and flu symptoms",
      "Anti-inflammatory properties",
      "Antiviral properties",
      "Supports upper respiratory health"
    ],
    uses: [
      "Common cold",
      "Flu",
      "Upper respiratory infections",
      "Wound healing",
      "Immune support"
    ],
    preparations: ["Tincture", "Capsules", "Tea", "Extract"],
    dosage: "2-3ml tincture 3 times daily or 300mg capsules 2-3 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to the daisy family",
      "Not recommended for long-term use",
      "May interact with immunosuppressant drugs",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects"
    ],
    categories: ["Medicinal", "Immune", "Native American"]
  },
  {
    id: 183,
    name: "Goldenseal",
    scientific_name: "Hydrastis canadensis",
    description: "A potent herb with antimicrobial and anti-inflammatory properties, often used for digestive and respiratory ailments.",
    benefits: [
      "Antimicrobial properties",
      "Anti-inflammatory properties",
      "Supports digestive health",
      "Supports respiratory health",
      "Immune-boosting properties"
    ],
    uses: [
      "Digestive infections",
      "Respiratory infections",
      "Wound healing",
      "Immune support",
      "Eye infections"
    ],
    preparations: ["Tincture", "Capsules", "Powder", "Wash"],
    dosage: "1-2ml tincture 3 times daily or 500mg capsules 2 times daily",
    cautions: [
      "Should not be used during pregnancy",
      "May cause digestive upset",
      "Can affect blood pressure",
      "Consult healthcare provider before use",
      "Overuse can lead to reduced effectiveness"
    ],
    categories: ["Medicinal", "Antimicrobial", "Digestive", "Native American"]
  },
  {
    id: 184,
    name: "Usnea",
    scientific_name: "Usnea spp.",
    description: "A lichen with strong antibiotic and antifungal properties, used both internally and externally.",
    benefits: [
      "Antibiotic properties",
      "Antifungal properties",
      "Supports immune system",
      "Wound healing",
      "Anti-inflammatory"
    ],
    uses: [
      "Skin infections",
      "Respiratory infections",
      "Urinary tract infections",
      "Wound care",
      "Immune support"
    ],
    preparations: ["Tincture", "Salve", "Powder", "Tea"],
    dosage: "1-3ml tincture 3 times daily or apply topically as needed",
    cautions: [
      "May cause allergic reactions",
      "Not recommended for long-term use",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects",
      "Ensure sustainable harvesting"
    ],
    categories: ["Medicinal", "Antimicrobial", "Immune", "Wildcrafted"]
  },
  {
    id: 185,
    name: "Yarrow",
    scientific_name: "Achillea millefolium",
    description: "A versatile herb used for wound healing, stopping bleeding, and reducing inflammation.",
    benefits: [
      "Stops bleeding",
      "Wound healing",
      "Anti-inflammatory",
      "Antiseptic",
      "Digestive aid"
    ],
    uses: [
      "Wounds",
      "Cuts",
      "Nosebleeds",
      "Digestive upset",
      "Fever"
    ],
    preparations: ["Tincture", "Compress", "Tea", "Salve"],
    dosage: "1-2ml tincture 3 times daily or apply topically as needed",
    cautions: [
      "May cause allergic reactions in people sensitive to the daisy family",
      "Not recommended during pregnancy",
      "May increase photosensitivity",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects"
    ],
    categories: ["Medicinal", "First Aid", "Anti-inflammatory", "European"]
  },
  {
    id: 186,
    name: "Calendula",
    scientific_name: "Calendula officinalis",
    description: "A soothing herb used topically for skin inflammation, wound healing, and as a gentle antiseptic.",
    benefits: [
      "Skin inflammation",
      "Wound healing",
      "Antiseptic",
      "Soothes skin",
      "Supports tissue regeneration"
    ],
    uses: [
      "Eczema",
      "Rashes",
      "Minor burns",
      "Cuts",
      "Skin irritation"
    ],
    preparations: ["Salve", "Oil infusion", "Cream", "Tea"],
    dosage: "Apply topically as needed or 2-3 cups of tea daily",
    cautions: [
      "May cause allergic reactions in people sensitive to the daisy family",
      "Generally safe for topical use",
      "Consult healthcare provider before use",
      "Avoid if allergic to plants in the Asteraceae family",
      "Monitor for skin irritation"
    ],
    categories: ["Medicinal", "Skin", "Anti-inflammatory", "European"]
  },
  {
    id: 187,
    name: "Chamomile",
    scientific_name: "Matricaria chamomilla",
    description: "A gentle herb known for its calming and anti-inflammatory properties, often used as a tea to promote relaxation and sleep.",
    benefits: [
      "Calming",
      "Anti-inflammatory",
      "Promotes relaxation",
      "Aids sleep",
      "Digestive aid"
    ],
    uses: [
      "Anxiety",
      "Insomnia",
      "Digestive upset",
      "Skin irritation",
      "Teething in infants"
    ],
    preparations: ["Tea", "Tincture", "Compress", "Oil infusion"],
    dosage: "1-3 cups of tea daily or 2-4ml tincture 3 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to the daisy family",
      "Generally safe, but monitor for adverse effects",
      "Consult healthcare provider before use",
      "Avoid if allergic to plants in the Asteraceae family",
      "Monitor for skin irritation"
    ],
    categories: ["Medicinal", "Nervine", "Anti-inflammatory", "European"]
  },
  {
    id: 188,
    name: "Ginger",
    scientific_name: "Zingiber officinale",
    description: "A warming herb used to aid digestion, reduce nausea, and alleviate pain.",
    benefits: [
      "Aids digestion",
      "Reduces nausea",
      "Alleviates pain",
      "Anti-inflammatory",
      "Supports circulation"
    ],
    uses: [
      "Nausea",
      "Motion sickness",
      "Digestive upset",
      "Arthritis",
      "Muscle pain"
    ],
    preparations: ["Tea", "Capsules", "Tincture", "Fresh root"],
    dosage: "1-3 cups of tea daily or 1-3g of fresh root daily",
    cautions: [
      "May interact with blood-thinning medications",
      "May cause mild digestive upset",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects",
      "Use caution if taking blood thinners"
    ],
    categories: ["Medicinal", "Digestive", "Anti-inflammatory", "Asian"]
  },
  {
    id: 189,
    name: "Lavender",
    scientific_name: "Lavandula angustifolia",
    description: "An aromatic herb known for its calming and antiseptic properties, often used to reduce stress and promote sleep.",
    benefits: [
      "Calming",
      "Antiseptic",
      "Reduces stress",
      "Promotes sleep",
      "Aids relaxation"
    ],
    uses: [
      "Anxiety",
      "Insomnia",
      "Skin irritation",
      "Headaches",
      "Muscle tension"
    ],
    preparations: ["Tea", "Essential oil", "Tincture", "Compress"],
    dosage: "1-3 cups of tea daily or use essential oil topically or in a diffuser",
    cautions: [
      "May cause allergic reactions",
      "Generally safe, but monitor for adverse effects",
      "Consult healthcare provider before use",
      "Avoid if allergic to lavender or other mint family plants",
      "Monitor for skin irritation"
    ],
    categories: ["Medicinal", "Nervine", "Aromatic", "Mediterranean"]
  },
  {
    id: 190,
    name: "Peppermint",
    scientific_name: "Mentha piperita",
    description: "A refreshing herb used to aid digestion, relieve headaches, and clear congestion.",
    benefits: [
      "Aids digestion",
      "Relieves headaches",
      "Clears congestion",
      "Antispasmodic",
      "Antimicrobial"
    ],
    uses: [
      "Digestive upset",
      "Headaches",
      "Colds",
      "Sinus congestion",
      "Muscle pain"
    ],
    preparations: ["Tea", "Essential oil", "Tincture", "Compress"],
    dosage: "1-3 cups of tea daily or use essential oil topically or in a diffuser",
    cautions: [
      "May cause allergic reactions",
      "May worsen GERD symptoms",
      "Consult healthcare provider before use",
      "Avoid if allergic to peppermint or other mint family plants",
      "Monitor for skin irritation"
    ],
    categories: ["Medicinal", "Digestive", "Aromatic", "European"]
  },
  {
    id: 191,
    name: "Sage",
    scientific_name: "Salvia officinalis",
    description: "An herb used to improve memory, ease sore throats, and reduce excessive sweating.",
    benefits: [
      "Improves memory",
      "Eases sore throats",
      "Reduces sweating",
      "Antimicrobial",
      "Antioxidant"
    ],
    uses: [
      "Memory enhancement",
      "Sore throat",
      "Excessive sweating",
      "Digestive upset",
      "Menopausal symptoms"
    ],
    preparations: ["Tea", "Tincture", "Gargle", "Capsules"],
    dosage: "1-3 cups of tea daily or 1-3ml tincture 3 times daily",
    cautions: [
      "Should not be used during pregnancy or breastfeeding",
      "May affect blood sugar levels",
      "Consult healthcare provider before use",
      "Avoid if allergic to sage or other mint family plants",
      "Monitor for adverse effects"
    ],
    categories: ["Medicinal", "Brain", "Aromatic", "Mediterranean"]
  },
  {
    id: 192,
    name: "Turmeric",
    scientific_name: "Curcuma longa",
    description: "A potent anti-inflammatory and antioxidant herb used to treat arthritis, digestive disorders, and skin conditions.",
    benefits: [
      "Anti-inflammatory",
      "Antioxidant",
      "Aids digestion",
      "Supports liver health",
      "Alleviates pain"
    ],
    uses: [
      "Arthritis",
      "Digestive upset",
      "Skin conditions",
      "Liver support",
      "Pain relief"
    ],
    preparations: ["Capsules", "Powder", "Tea", "Fresh root"],
    dosage: "500mg-2g daily in capsules or powder form",
    cautions: [
      "May interact with blood-thinning medications",
      "May cause digestive upset",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects",
      "Use caution if taking blood thinners"
    ],
    categories: ["Medicinal", "Anti-inflammatory", "Antioxidant", "Ayurvedic"]
  },
  {
    id: 193,
    name: "Valerian",
    scientific_name: "Valeriana officinalis",
    description: "An herb used to promote sleep, reduce anxiety, and relieve muscle spasms.",
    benefits: [
      "Promotes sleep",
      "Reduces anxiety",
      "Relieves muscle spasms",
      "Calming",
      "Aids relaxation"
    ],
    uses: [
      "Insomnia",
      "Anxiety",
      "Muscle tension",
      "Nervousness",
      "Restlessness"
    ],
    preparations: ["Tincture", "Capsules", "Tea", "Extract"],
    dosage: "2-5ml tincture before bed or 300-600mg capsules before bed",
    cautions: [
      "May cause drowsiness",
      "May interact with sedatives",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects",
      "Avoid if taking sedatives or other sleep aids"
    ],
    categories: ["Medicinal", "Nervine", "Sleep", "European"]
  },
  {
    id: 194,
    name: "Ashwagandha",
    scientific_name: "Withania somnifera",
    description: "An adaptogenic herb used in Ayurvedic medicine to reduce stress, boost energy, and improve overall well-being.",
    benefits: [
      "Reduces stress",
      "Boosts energy",
      "Improves well-being",
      "Adaptogenic",
      "Supports immune system"
    ],
    uses: [
      "Stress",
      "Fatigue",
      "Anxiety",
      "Immune support",
      "Overall health"
    ],
    preparations: ["Capsules", "Powder", "Tincture", "Tea"],
    dosage: "300-500mg capsules daily or 1-2g powder daily",
    cautions: [
      "May affect thyroid function",
      "May interact with sedatives",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects",
      "Avoid if taking thyroid medications or sedatives"
    ],
    categories: ["Medicinal", "Adaptogenic", "Ayurvedic", "Immune"]
  },
  {
    id: 195,
    name: "Hawthorn",
    scientific_name: "Crataegus spp.",
    description: "An herb used to support cardiovascular health, lower blood pressure, and improve circulation.",
    benefits: [
      "Supports cardiovascular health",
      "Lowers blood pressure",
      "Improves circulation",
      "Antioxidant",
      "Tones heart muscle"
    ],
    uses: [
      "High blood pressure",
      "Heart failure",
      "Angina",
      "Arrhythmia",
      "Circulatory problems"
    ],
    preparations: ["Tincture", "Capsules", "Tea", "Extract"],
    dosage: "1-2ml tincture 3 times daily or 300-600mg capsules daily",
    cautions: [
      "May interact with heart medications",
      "May lower blood pressure",
      "Consult healthcare provider before use",
      "Generally safe, but monitor for adverse effects",
      "Avoid if taking heart medications or blood pressure medications"
    ],
    categories: ["Medicinal", "Cardiovascular", "European", "Antioxidant"]
  },
  {
    id: 316,
    name: "Ashoka",
    scientific_name: "Saraca indica",
    description: "A sacred tree in India with bark that has been used for centuries to treat various gynecological disorders and promote women's health.",
    benefits: [
      "Regulates menstrual cycle",
      "Reduces excessive menstrual bleeding",
      "Has astringent properties",
      "Contains powerful antioxidants",
      "Supports uterine health"
    ],
    uses: ["Menorrhagia", "Dysmenorrhea", "Uterine fibroids", "Endometriosis", "Reproductive health"],
    preparations: ["Decoction", "Powder", "Capsules", "Tincture", "Medicated oil"],
    dosage: "1-3g of bark powder daily or as directed by practitioner; traditional formulations as directed",
    cautions: [
      "Not recommended during pregnancy",
      "May enhance effects of blood-thinning medications",
      "Can cause digestive upset in sensitive individuals",
      "Long-term use should be supervised by healthcare professional",
      "May affect blood sugar levels"
    ],
    categories: ["Medicinal", "Women's Health", "Ayurvedic"]
  },
  {
    id: 317,
    name: "Suma",
    scientific_name: "Pfaffia paniculata",
    description: "A South American adaptogen also called 'Brazilian ginseng' that contains plant sterols and supports hormonal balance, energy, and immune function.",
    benefits: [
      "Contains plant sterols that may help balance hormones",
      "Supports healthy energy levels",
      "Has adaptogenic properties that help the body respond to stress",
      "May support immune function",
      "Contains germanium and allantoin for cellular health"
    ],
    uses: ["Fatigue", "Hormonal balance", "Immune support", "Stress relief", "Sexual vitality"],
    preparations: ["Root powder", "Capsules", "Tincture", "Tea", "Extract"],
    dosage: "500-2000mg daily of dried root or equivalent preparation",
    cautions: [
      "May affect estrogen-sensitive conditions",
      "Not recommended during pregnancy or breastfeeding",
      "May interact with diabetes medications",
      "Start with lower doses to assess tolerance",
      "Consult healthcare provider if taking prescription medications"
    ],
    categories: ["Medicinal", "Adaptogenic", "South American"]
  },
  {
    id: 318,
    name: "Butterbur",
    scientific_name: "Petasites hybridus",
    description: "A European plant with remarkable anti-inflammatory and anti-spasmodic properties, particularly useful for migraines and allergic conditions.",
    benefits: [
      "Contains petasins that have anti-inflammatory effects",
      "May reduce frequency and severity of migraines",
      "Has anti-histamine properties that help with allergies",
      "Shows anti-spasmodic effects on smooth muscle",
      "May help reduce bronchial constriction"
    ],
    uses: ["Migraine prevention", "Seasonal allergies", "Asthma", "Urinary spasms", "Digestive cramps"],
    preparations: ["Standardized extract", "Capsules", "Tablets", "Tincture"],
    dosage: "50-150mg of standardized extract (free of pyrrolizidine alkaloids) daily",
    cautions: [
      "Only use products certified as free from pyrrolizidine alkaloids (PAs)",
      "May cause digestive upset, fatigue, or headache in some individuals",
      "Not recommended during pregnancy or breastfeeding",
      "May interact with certain medications including birth control and blood thinners",
      "Consult healthcare provider before use"
    ],
    categories: ["Medicinal", "European", "Anti-inflammatory"]
  },
  {
    id: 319,
    name: "Fo-Ti",
    scientific_name: "Polygonum multiflorum",
    description: "A Chinese tonic herb traditionally used to restore vitality, darken gray hair, and promote longevity through its unique antioxidant compounds.",
    benefits: [
      "Contains antioxidant compounds including stilbenes",
      "Traditionally used to rejuvenate the body",
      "May support healthy aging processes",
      "Traditionally believed to help maintain hair color",
      "Supports liver and kidney function in TCM"
    ],
    uses: ["Premature gray hair", "Age-related decline", "Weakness", "Constipation", "High cholesterol"],
    preparations: ["Prepared root (cured with black beans)", "Tincture", "Capsules", "Decoction", "Syrup"],
    dosage: "3-9g daily of prepared root in decoction or 500-1000mg in capsules",
    cautions: [
      "Raw, unprepared root can cause liver damage - only use properly prepared forms",
      "May cause digestive upset, loose stools, or rash",
      "Not recommended during pregnancy or breastfeeding",
      "May interact with many medications including blood thinners and diabetes drugs",
      "Cases of liver toxicity have been reported - use with caution and proper guidance"
    ],
    categories: ["Medicinal", "Chinese Medicine", "Longevity"]
  },
  {
    id: 320,
    name: "Cat's Claw",
    scientific_name: "Uncaria tomentosa",
    description: "A woody vine from the Amazon rainforest with bark containing powerful immune-modulating and anti-inflammatory compounds.",
    benefits: [
      "Contains alkaloids that modulate immune function",
      "Has anti-inflammatory properties",
      "Shows antioxidant activity",
      "May support DNA repair mechanisms",
      "Traditionally used to cleanse the digestive tract"
    ],
    uses: ["Arthritis", "Inflammatory disorders", "Immune support", "Digestive disorders", "Viral infections"],
    preparations: ["Capsules", "Tablets", "Tincture", "Tea", "Decoction"],
    dosage: "250-1000mg dried bark extract daily or 1-2ml of tincture three times daily",
    cautions: [
      "May stimulate immune function - caution with autoimmune disorders",
      "Not recommended during pregnancy or when trying to conceive",
      "May interact with blood thinners, blood pressure medications, and immunosuppressants",
      "Can cause headache, dizziness, or vomiting in some individuals",
      "Take separate from meals and other medications"
    ],
    categories: ["Medicinal", "South American", "Immune"]
  }
];
