import { Herb } from "../types/herbs";

// Herbs that primarily support urinary tract health
export const urinaryHerbs: Herb[] = [
  {
    id: 50,
    name: "Cranberry",
    scientific_name: "Vaccinium macrocarpon",
    description: "A small red berry that has proven benefits for urinary tract health and prevention of UTIs.",
    benefits: [
      "Prevents bacteria from adhering to urinary tract walls",
      "Acidifies urine",
      "Has antioxidant properties",
      "Supports bladder health",
      "May help prevent recurrent UTIs"
    ],
    uses: ["UTI prevention", "Urinary tract health", "Bladder support"],
    preparations: ["Capsules", "Unsweetened juice", "Extract", "Powder"],
    dosage: "300-500mg concentrated extract or 8oz unsweetened juice daily",
    cautions: [
      "Commercial juices often contain added sugar",
      "May interact with blood thinning medications",
      "Not as effective for treating active infections as for prevention",
      "Acidic nature may aggravate acid reflux in susceptible individuals"
    ],
    categories: ["Urinary", "Native American", "Berry"]
  },
  {
    id: 51,
    name: "Uva Ursi",
    scientific_name: "Arctostaphylos uva-ursi",
    description: "A small evergreen shrub whose leaves have powerful antiseptic properties in the urinary tract.",
    benefits: [
      "Has antimicrobial effects in urinary tract",
      "Soothes irritated urinary tissues",
      "Contains arbutin which converts to hydroquinone in alkaline urine",
      "Has anti-inflammatory properties",
      "Acts as a mild diuretic"
    ],
    uses: ["UTI symptoms", "Urinary tract irritation", "Cystitis", "Urinary antiseptic"],
    preparations: ["Capsules", "Tea", "Tincture"],
    dosage: "400-800mg standardized extract or 1-2 teaspoons dried leaf as tea, 2-3 times daily",
    cautions: [
      "Most effective in alkaline urine - avoid acid-forming foods during use",
      "Not for long-term use (limited to 7-10 days)",
      "Not recommended during pregnancy or breastfeeding",
      "Contraindicated with kidney disease",
      "Not for children under 12"
    ],
    categories: ["Urinary", "Native American", "Antimicrobial"]
  },
  {
    id: 118,
    name: "Corn Silk",
    scientific_name: "Zea mays",
    description: "The silky threads from corn that have traditional use as a gentle, soothing diuretic and urinary tract support herb.",
    benefits: [
      "Has gentle diuretic properties",
      "Soothes irritated urinary tract tissues",
      "May help with mild edema",
      "Contains compounds that support kidney health",
      "Traditionally used for prostate health"
    ],
    uses: ["Urinary tract irritation", "Water retention", "Kidney support", "Prostate health"],
    preparations: ["Tea", "Tincture", "Capsules", "Fresh preparation"],
    dosage: "2-3 teaspoons dried silk for tea, 3 times daily or 2-4ml tincture",
    cautions: [
      "May enhance the effects of diabetes medications",
      "Can interact with lithium and other medications",
      "Not recommended with kidney disease",
      "Best to use organic sources to avoid pesticide exposure"
    ],
    categories: ["Urinary", "Diuretic", "Native American", "Soothing"]
  },
  {
    id: 119,
    name: "Goldenrod",
    scientific_name: "Solidago species",
    description: "A misunderstood herb often blamed for allergies but actually beneficial for urinary tract health, with diuretic and anti-inflammatory properties.",
    benefits: [
      "Supports kidney and bladder health",
      "Has anti-inflammatory effects on urinary tissues",
      "Contains compounds with mild diuretic properties",
      "May help with kidney stones",
      "Has astringent properties for urinary tract"
    ],
    uses: ["Urinary tract health", "Kidney support", "Seasonal support", "Inflammation reduction"],
    preparations: ["Tea", "Tincture", "Capsules", "Fresh juice"],
    dosage: "1-2 teaspoons dried herb for tea, 2-3 times daily or 2-4ml tincture",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Use with caution if you have heart or kidney disease",
      "May interact with diuretic medications",
      "Not to be confused with ragweed (a common allergen)"
    ],
    categories: ["Urinary", "Anti-inflammatory", "Native American", "European"]
  },
  {
    id: 120,
    name: "Marshmallow Root",
    scientific_name: "Althaea officinalis",
    description: "A mucilage-rich herb that soothes and protects irritated tissues throughout the body, particularly effective for urinary tract inflammation.",
    benefits: [
      "Forms protective coating on urinary tract tissues",
      "Soothes irritation and inflammation",
      "Has gentle diuretic properties",
      "Helps relieve urinary urgency",
      "Supports overall mucous membrane health"
    ],
    uses: ["Urinary tract irritation", "Interstitial cystitis", "Kidney support", "Urinary frequency"],
    preparations: ["Cold infusion", "Decoction", "Capsules", "Tincture"],
    dosage: "1 tablespoon dried root in 1 quart cold water infused for 4-8 hours, drink throughout day",
    cautions: [
      "May slow absorption of medications - take separately",
      "May lower blood sugar slightly",
      "Can cause digestive changes in some individuals",
      "Best taken on empty stomach for maximum benefit"
    ],
    categories: ["Urinary", "Demulcent", "European", "Soothing"]
  },
  {
    id: 121,
    name: "Dandelion Leaf",
    scientific_name: "Taraxacum officinale",
    description: "A common yard plant whose leaves have powerful yet gentle diuretic properties that support kidney function without depleting potassium.",
    benefits: [
      "Natural potassium-sparing diuretic",
      "Supports kidney filtration",
      "Helps with mild edema and water retention",
      "Rich in nutrients including potassium",
      "Supports whole-body detoxification"
    ],
    uses: ["Urinary support", "Water retention", "Gentle detoxification", "Kidney health"],
    preparations: ["Fresh leaves", "Dried herb tea", "Tincture", "Capsules"],
    dosage: "1-2 teaspoons dried leaf for tea, 2-3 times daily or 4-8ml tincture",
    cautions: [
      "May increase effects of lithium and similar medications",
      "May interact with certain antibiotics",
      "Could potentially affect blood sugar levels",
      "Harvest from areas free of pesticides and pollutants"
    ],
    categories: ["Urinary", "Diuretic", "Worldwide", "Nutritive"]
  },
  {
    id: 207,
    name: "Cleavers",
    scientific_name: "Galium aparine",
    description: "A sticky plant with hook-like hairs that has traditional use as a lymphatic cleanser and urinary system support herb.",
    benefits: [
      "Supports lymphatic system cleansing",
      "Has gentle diuretic properties",
      "Cools and soothes urinary inflammation",
      "May help reduce water retention",
      "Traditionally used to dissolve kidney stones"
    ],
    uses: ["Lymphatic support", "Urinary tract health", "Kidney health", "Water retention"],
    preparations: ["Fresh plant juice", "Tea", "Tincture", "Cold infusion"],
    dosage: "2-3 teaspoons dried herb for tea, 2-3 times daily or 2-4ml tincture",
    cautions: [
      "May increase effects of diuretic medications",
      "Not extensively studied during pregnancy",
      "May lower blood pressure",
      "Best used fresh or as freshly dried herb - loses potency quickly"
    ],
    categories: ["Urinary", "Lymphatic", "European"]
  },
  {
    id: 208,
    name: "Juniper Berry",
    scientific_name: "Juniperus communis",
    description: "A coniferous plant with dark blue berries that have strong diuretic and antimicrobial properties affecting the urinary system.",
    benefits: [
      "Acts as a strong urinary antiseptic",
      "Has diuretic properties",
      "Contains volatile oils with antimicrobial effects",
      "Stimulates kidney filtration",
      "May help with urinary tract infections"
    ],
    uses: ["Urinary tract infections", "Water retention", "Kidney stones", "Bladder support"],
    preparations: ["Tea", "Tincture", "Capsules", "Essential oil (diluted)"],
    dosage: "1 teaspoon dried berries for tea, 1-2 times daily for up to 6 weeks, or 1-2ml tincture",
    cautions: [
      "Not for long-term use (limit to 4-6 weeks)",
      "Contraindicated with kidney disease",
      "Not recommended during pregnancy",
      "May interact with diabetes medications",
      "Can irritate the kidneys in high doses"
    ],
    categories: ["Urinary", "Antimicrobial", "European", "Diuretic"]
  },
  {
    id: 209,
    name: "Parsley",
    scientific_name: "Petroselinum crispum",
    description: "A common culinary herb whose leaves and roots have traditional use as a kidney tonic and urinary system cleanser.",
    benefits: [
      "Has notable diuretic properties",
      "Rich in vitamins and minerals",
      "Helps flush bacteria from urinary tract",
      "May help dissolve kidney stones",
      "Supports overall kidney function"
    ],
    uses: ["Urinary tract infections", "Kidney stones", "Water retention", "Kidney support"],
    preparations: ["Tea", "Fresh juice", "Tincture", "Capsules", "Culinary herb"],
    dosage: "2 teaspoons dried herb or root for tea, 2-3 times daily or 1-2ml tincture",
    cautions: [
      "Avoid therapeutic doses during pregnancy (may stimulate uterus)",
      "Can interact with diuretic medications",
      "May increase photosensitivity in high doses",
      "Concentrates naturally-occurring oxalates",
      "May affect blood clotting"
    ],
    categories: ["Urinary", "Diuretic", "Mediterranean", "Nutritive"]
  },
  {
    id: 210,
    name: "Horsetail",
    scientific_name: "Equisetum arvense",
    description: "An ancient plant rich in silica with diuretic and astringent properties that support urinary system health.",
    benefits: [
      "Contains high amounts of silica which supports connective tissue",
      "Has diuretic properties",
      "Acts as an astringent for urinary tissues",
      "May help with urinary incontinence",
      "Traditionally used for kidney stones"
    ],
    uses: ["Urinary tract health", "Kidney stones", "Mild incontinence", "Connective tissue support", "Edema"],
    preparations: ["Tea", "Tincture", "Capsules", "Extract"],
    dosage: "1-2 teaspoons dried herb for tea, 2-3 times daily or 2-4ml tincture",
    cautions: [
      "Do not use with thiamine deficiency",
      "May deplete potassium with long-term use",
      "Use only spring growth (not late summer)",
      "Not for use with kidney disease",
      "Always ensure correct species identification"
    ],
    categories: ["Urinary", "Diuretic", "Worldwide", "Astringent"]
  },
  {
    id: 277,
    name: "Bearberry",
    scientific_name: "Arctostaphylos uva-ursi",
    description: "A low-growing evergreen shrub whose leaves contain antimicrobial compounds specifically effective in the urinary tract.",
    benefits: [
      "Contains arbutin which converts to hydroquinone in alkaline urine",
      "Has strong antimicrobial effects specifically in the urinary tract",
      "Provides astringent effects for urinary tissues",
      "Helps reduce inflammation in the urinary system",
      "May help with mild incontinence"
    ],
    uses: ["Urinary tract infections", "Cystitis", "Urinary tract inflammation", "Frequent urination", "Bladder weakness"],
    preparations: ["Capsules", "Tea", "Tincture", "Traditional formulas"],
    dosage: "2-4g dried leaf as tea 3 times daily or 2-5ml tincture",
    cautions: [
      "Most effective with alkaline urine - avoid acidic foods during use",
      "Not for long-term use (7-10 days maximum)",
      "Not for use during pregnancy or with kidney disease",
      "May irritate the stomach in sensitive individuals",
      "Not recommended for children under 12"
    ],
    categories: ["Urinary", "Antimicrobial", "Native American", "Astringent"]
  },
  {
    id: 278,
    name: "Stone Root",
    scientific_name: "Collinsonia canadensis",
    description: "A North American herb traditionally used for kidney stones, gravel, and urinary calculi due to its antispasmodic and diuretic properties.",
    benefits: [
      "May help prevent and relieve kidney stones",
      "Has antispasmodic effects on urinary tract tissues",
      "Shows diuretic properties",
      "Reduces inflammation in the urinary system",
      "Traditionally used for urinary gravel"
    ],
    uses: ["Kidney stones", "Urinary gravel", "Bladder irritation", "Urinary spasms", "Preventative for stone-formers"],
    preparations: ["Tincture", "Tea", "Capsules", "Decoction"],
    dosage: "2-4ml tincture 3 times daily or 1-2 teaspoons dried root as decoction",
    cautions: [
      "Limited clinical research available",
      "Not well studied during pregnancy - avoid use",
      "May interact with medications for kidney conditions",
      "Consult healthcare provider if you have kidney disease",
      "May increase effects of diuretic medications"
    ],
    categories: ["Urinary", "Native American", "Antilithic", "Antispasmodic"]
  },
  {
    id: 279,
    name: "Pipsissewa",
    scientific_name: "Chimaphila umbellata",
    description: "A small evergreen woodland plant traditionally used by Native Americans for urinary tract infections and kidney stones.",
    benefits: [
      "Has diuretic properties",
      "Contains arbutin with antimicrobial effects",
      "Shows anti-inflammatory action in the urinary tract",
      "May help dissolve small kidney stones",
      "Traditionally used for prostate inflammation"
    ],
    uses: ["Urinary tract infections", "Kidney stones", "Prostate conditions", "Urinary tract inflammation", "Bladder discomfort"],
    preparations: ["Tea", "Tincture", "Capsules", "Traditional formulas"],
    dosage: "1-2 teaspoons dried herb as tea 2-3 times daily or 2-3ml tincture",
    cautions: [
      "May irritate pre-existing kidney conditions",
      "Not for use during pregnancy or breastfeeding",
      "Endangered in some regions - source sustainably",
      "May interact with diuretic medications",
      "May cause digestive upset in sensitive individuals"
    ],
    categories: ["Urinary", "Native American", "Diuretic", "Antimicrobial"]
  },
  {
    id: 280,
    name: "Hydrangea Root",
    scientific_name: "Hydrangea arborescens",
    description: "A North American shrub whose root has traditional use for urinary stones, gravel, and prostate conditions.",
    benefits: [
      "May help dissolve kidney and bladder stones",
      "Has diuretic properties",
      "Shows anti-inflammatory effects in the urinary tract",
      "Traditionally used for prostate enlargement",
      "May help with urinary pain and discomfort"
    ],
    uses: ["Kidney stones", "Bladder stones", "Prostate conditions", "Urinary tract inflammation", "Chronic cystitis"],
    preparations: ["Tincture", "Decoction", "Capsules", "Traditional formulas"],
    dosage: "2-4ml tincture 3 times daily or 1-2 teaspoons dried root as decoction",
    cautions: [
      "Contains small amounts of cyanogenic glycosides - follow dosage recommendations",
      "Not for use during pregnancy",
      "May interact with medications for kidney conditions",
      "Not recommended for those with severe kidney disease",
      "Use fresh or recently dried root for best efficacy"
    ],
    categories: ["Urinary", "Native American", "Antilithic", "Prostate"]
  },
  {
    id: 281,
    name: "Gravel Root",
    scientific_name: "Eupatorium purpureum",
    description: "A tall North American plant whose root has traditional use for kidney and bladder stones, giving it the common name 'gravel root'.",
    benefits: [
      "Traditionally used to help dissolve and pass kidney stones",
      "Has diuretic properties",
      "Shows anti-inflammatory effects in the urinary system",
      "May help with urinary tract irritation",
      "Traditionally used for rheumatic conditions"
    ],
    uses: ["Kidney stones", "Urinary gravel", "Gout", "Rheumatic conditions", "Bladder irritation"],
    preparations: ["Tincture", "Decoction", "Capsules", "Traditional formulas"],
    dosage: "2-4ml tincture 3 times daily or 1-2 teaspoons dried root as decoction",
    cautions: [
      "Contains pyrrolizidine alkaloids - follow dosage recommendations",
      "Not for use during pregnancy or breastfeeding",
      "Not for long-term use without professional guidance",
      "May interact with medications for gout and kidney conditions",
      "Not recommended for those with severe kidney disease"
    ],
    categories: ["Urinary", "Native American", "Antilithic", "Diuretic"]
  }
];
