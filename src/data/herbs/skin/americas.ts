
import { Herb } from "../../types/herbs";

// North and South American skin herbs
export const americasSkinHerbs: Herb[] = [
  {
    id: 60,
    name: "Plantain",
    scientific_name: "Plantago major/lanceolata",
    description: "A common 'weed' with remarkable healing properties for skin conditions and wound healing.",
    benefits: [
      "Draws out toxins and foreign material",
      "Soothes inflammation and irritation",
      "Helps stop bleeding",
      "Has antimicrobial properties",
      "Supports tissue repair"
    ],
    uses: ["Insect bites", "Minor wounds", "Splinters", "Skin irritations", "Burns"],
    preparations: ["Fresh leaf poultice", "Salve", "Oil infusion", "Tincture", "Tea"],
    dosage: "Apply fresh crushed leaves directly to affected area or use prepared products as directed",
    cautions: [
      "Generally very safe for both internal and external use",
      "May lower blood sugar with internal use",
      "Can have mild laxative effect when taken internally",
      "Ensure correct identification - not to be confused with toxic plantain lily"
    ],
    categories: ["Skin", "First Aid", "Worldwide"]
  },
  {
    id: 263,
    name: "Jojoba",
    scientific_name: "Simmondsia chinensis",
    description: "A desert shrub that produces oil similar to human sebum, making it excellent for balancing skin oil production and moisturizing.",
    benefits: [
      "Closely resembles human sebum",
      "Balances oil production in skin",
      "Non-comedogenic moisturizer",
      "Has natural anti-inflammatory properties",
      "Provides long-lasting hydration without greasiness"
    ],
    uses: ["Facial moisturizing", "Acne-prone skin", "Hair conditioning", "Lip balms", "Massage medium"],
    preparations: ["Oil", "Cream", "Balm", "Hair products", "Cleansers"],
    dosage: "Apply as needed to skin or hair",
    cautions: [
      "Pure jojoba is generally very safe and non-allergenic",
      "Some products may contain additives that cause reactions",
      "Not for internal consumption",
      "Store in cool, dark place to prevent rancidity",
      "May temporarily worsen acne during skin adjustment period"
    ],
    categories: ["Skin", "Moisturizing", "North American"]
  },
  {
    id: 305,
    name: "Evening Primrose",
    scientific_name: "Oenothera biennis",
    description: "A flowering plant whose seeds produce an oil rich in gamma-linolenic acid (GLA), essential for skin barrier function and inflammation reduction.",
    benefits: [
      "Rich in gamma-linolenic acid (GLA)",
      "Strengthens skin barrier function",
      "Reduces inflammation in chronic skin conditions",
      "Helps maintain skin moisture balance",
      "May regulate hormonal effects on skin"
    ],
    uses: ["Eczema", "Psoriasis", "Acne", "Dry skin", "Hormonal skin issues"],
    preparations: ["Oil", "Capsules", "Cream", "Serum", "Supplement"],
    dosage: "Topical: Apply oil or products containing 5-10% evening primrose oil; Internal: 500-1000mg daily",
    cautions: [
      "May cause digestive upset with internal use",
      "Can interact with blood-thinning medications",
      "May affect seizure threshold with internal use",
      "Not recommended during pregnancy without medical guidance",
      "May increase bleeding risk before surgery"
    ],
    categories: ["Skin", "North American", "Anti-inflammatory"]
  },
  {
    id: 311,
    name: "Maca Root",
    scientific_name: "Lepidium meyenii",
    description: "An Andean adaptogen rich in nutrients that support skin's stress response, hormone balance, and natural radiance.",
    benefits: [
      "Contains unique glucosinolates with skin-protective properties",
      "Rich in minerals essential for skin health",
      "Has adaptogenic effects that help skin resist stress",
      "May help balance hormonal effects on skin",
      "Supports overall skin vitality"
    ],
    uses: ["Hormonal acne", "Stress-related skin issues", "Dull complexion", "Premature aging", "Overall skin nutrition"],
    preparations: ["Extract", "Powder", "Capsules", "Serum", "Mask"],
    dosage: "Topical: Products with 1-3% extract; Internal: 1,500-3,000mg daily",
    cautions: [
      "May affect hormone levels with internal use - consult healthcare provider",
      "Not recommended during pregnancy or breastfeeding",
      "Can cause stimulant effects in some people when taken internally",
      "May interact with medications for hormone-sensitive conditions",
      "Start with lower doses for internal use to assess tolerance"
    ],
    categories: ["Skin", "South American", "Adaptogenic"]
  }
];
