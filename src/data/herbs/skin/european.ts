
import { Herb } from "../../types/herbs";

// European skin herbs
export const europeanSkinHerbs: Herb[] = [
  {
    id: 59,
    name: "Calendula",
    scientific_name: "Calendula officinalis",
    description: "A bright orange or yellow flower with remarkable skin-healing and anti-inflammatory properties.",
    benefits: [
      "Accelerates wound healing",
      "Reduces inflammation",
      "Has antimicrobial properties",
      "Soothes irritated skin",
      "Supports tissue regeneration"
    ],
    uses: ["Wound healing", "Skin inflammation", "Minor burns", "Diaper rash", "Dry or damaged skin"],
    preparations: ["Salve", "Oil infusion", "Cream", "Tincture", "Tea (for internal use)"],
    dosage: "Apply topical preparations as needed; internal: 2-3ml tincture 3 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Potential contact dermatitis in sensitive individuals",
      "Internal use may affect the menstrual cycle",
      "Internal use not recommended during pregnancy"
    ],
    categories: ["Skin", "Anti-inflammatory", "European"]
  },
  {
    id: 61,
    name: "Comfrey",
    scientific_name: "Symphytum officinale",
    description: "A herb with remarkable wound-healing properties, traditionally used externally for bruises, sprains, and skin conditions.",
    benefits: [
      "Contains allantoin which promotes cell proliferation",
      "Speeds wound healing",
      "Reduces inflammation",
      "Soothes skin irritation",
      "Traditionally used for bone and tissue repair"
    ],
    uses: ["Minor wounds", "Bruises", "Joint inflammation", "Skin conditions", "Tissue repair"],
    preparations: ["Salve", "Poultice", "Oil infusion", "Compress", "Wash"],
    dosage: "Apply topical preparations to affected area 2-3 times daily",
    cautions: [
      "For external use only - contains pyrrolizidine alkaloids",
      "Not to be used on deep wounds or punctures",
      "Should not be applied to broken skin for extended periods",
      "Not for use during pregnancy or breastfeeding",
      "Do not use on infected areas"
    ],
    categories: ["Skin", "External", "European"]
  },
  {
    id: 201,
    name: "Witch Hazel",
    scientific_name: "Hamamelis virginiana",
    description: "A shrub whose bark and leaves are distilled to create an astringent solution commonly used for skin health.",
    benefits: [
      "Reduces skin inflammation",
      "Tightens skin tissues",
      "Has natural astringent properties",
      "Helps control excess oil production",
      "May reduce under-eye puffiness"
    ],
    uses: ["Acne control", "Skin toning", "After-shave treatment", "Hemorrhoid relief", "Bruise treatment"],
    preparations: ["Distilled extract", "Tincture", "Cream", "Wipes", "Compress"],
    dosage: "Apply topically as needed; common in commercial skincare products",
    cautions: [
      "May cause dryness with overuse",
      "Can irritate very sensitive skin",
      "Not for use on severely broken or infected skin",
      "May cause contact allergies in rare cases",
      "Internal consumption not recommended"
    ],
    categories: ["Skin", "Astringent", "Native American"]
  },
  {
    id: 202,
    name: "Sea Buckthorn",
    scientific_name: "Hippophae rhamnoides",
    description: "A thorny shrub with bright orange berries, extremely rich in nutrients and beneficial oils for skin health.",
    benefits: [
      "Rich in omega fatty acids (3, 6, 7, and 9)",
      "Supports skin cell regeneration",
      "Has strong antioxidant properties",
      "Helps maintain skin moisture balance",
      "Promotes wound healing"
    ],
    uses: ["Skin repair", "Anti-aging", "Eczema treatment", "Rosacea care", "UV damage protection"],
    preparations: ["Oil", "Capsules", "Cream", "Serum", "Berry juice"],
    dosage: "Topical: Apply oil or cream as needed; Internal: 1-2 teaspoons oil or 500mg capsules daily",
    cautions: [
      "May lower blood pressure",
      "Can interact with blood-thinning medications",
      "May slow blood clotting",
      "Can cause digestive upset with internal use",
      "Avoid during pregnancy without professional guidance"
    ],
    categories: ["Skin", "Antioxidant", "European", "Nutritive"]
  },
  {
    id: 204,
    name: "Helichrysum",
    scientific_name: "Helichrysum italicum",
    description: "An aromatic herb with golden flowers whose essential oil has remarkable skin healing and anti-inflammatory properties.",
    benefits: [
      "Promotes skin cell regeneration",
      "Reduces appearance of scars",
      "Has natural antimicrobial properties",
      "Soothes skin inflammation",
      "Helps fade bruising"
    ],
    uses: ["Scar treatment", "Bruise healing", "Wound care", "Anti-aging", "Skin inflammation"],
    preparations: ["Essential oil", "Infused oil", "Cream", "Serum", "Hydrosol"],
    dosage: "Essential oil must be diluted to 0.5-1% before topical application",
    cautions: [
      "Never use essential oil undiluted",
      "May cause skin sensitization in some individuals",
      "Expensive and often adulterated - source carefully",
      "Not for internal use",
      "Avoid during pregnancy"
    ],
    categories: ["Skin", "Essential Oil", "Mediterranean"]
  },
  {
    id: 205,
    name: "Chickweed",
    scientific_name: "Stellaria media",
    description: "A common garden 'weed' with remarkable cooling and soothing properties for irritated skin conditions.",
    benefits: [
      "Cools and soothes itchy skin",
      "Has mild anti-inflammatory effects",
      "Mildly antiseptic",
      "Rich in vitamins and minerals",
      "Traditionally used for drawing out splinters"
    ],
    uses: ["Eczema relief", "Psoriasis management", "Rash treatment", "Itchy skin", "Minor wounds"],
    preparations: ["Fresh poultice", "Salve", "Oil infusion", "Cream", "Compress"],
    dosage: "Apply topically as needed; can be used fresh by crushing leaves and applying directly",
    cautions: [
      "Generally very safe for topical use",
      "May rarely cause contact dermatitis",
      "Ensure proper identification - can resemble toxic plants",
      "Not for use on infected wounds",
      "Best harvested from areas free of pesticides"
    ],
    categories: ["Skin", "Cooling", "Soothing", "European"]
  },
  {
    id: 260,
    name: "Elder Flower",
    scientific_name: "Sambucus nigra",
    description: "Delicate white flowers that have been traditionally used in skincare to tone, soften and brighten the complexion.",
    benefits: [
      "Has anti-inflammatory properties for sensitive skin",
      "Contains natural alpha hydroxy acids that gently exfoliate",
      "Helps reduce appearance of blemishes and dark spots",
      "Softens and brightens complexion",
      "Soothes sunburned or irritated skin"
    ],
    uses: ["Facial toners", "Skin brightening", "Sensitive skin care", "Sunburn relief", "Eye compresses"],
    preparations: ["Infusion", "Hydrosol", "Cold cream", "Compress", "Face mask"],
    dosage: "Apply as facial wash or toner 1-2 times daily",
    cautions: [
      "May cause allergic reactions in sensitive individuals",
      "Use only the flowers, as leaves, stems, and unripe berries contain toxic compounds",
      "Avoid using on broken skin",
      "Test in small area before widespread application",
      "Should not be used as sole treatment for serious skin conditions"
    ],
    categories: ["Skin", "European", "Toning"]
  },
  {
    id: 303,
    name: "Horse Chestnut",
    scientific_name: "Aesculus hippocastanum",
    description: "A European tree whose seed extract contains aescin, a compound with remarkable vascular-strengthening properties that benefit skin with visible capillaries.",
    benefits: [
      "Strengthens capillary walls",
      "Reduces fluid leakage into tissues",
      "Improves micro-circulation in the skin",
      "Has anti-inflammatory properties",
      "Tightens and tones skin"
    ],
    uses: ["Rosacea", "Spider veins", "Varicose veins", "Bruising", "Under-eye circles"],
    preparations: ["Gel", "Cream", "Serum", "Tincture", "Capsules"],
    dosage: "Apply topical preparations containing 2% extract to affected areas 1-2 times daily",
    cautions: [
      "Not for internal use except under professional guidance",
      "Can cause skin irritation in some individuals",
      "Should not be applied to broken skin",
      "May enhance effects of blood-thinning medications",
      "Avoid during pregnancy and breastfeeding"
    ],
    categories: ["Skin", "European", "Vascular"]
  },
  {
    id: 310,
    name: "Bilberry",
    scientific_name: "Vaccinium myrtillus",
    description: "A European berry rich in anthocyanins that strengthen skin capillaries and provide potent antioxidant protection for skin health.",
    benefits: [
      "Rich in anthocyanins that strengthen vascular tissues",
      "Has powerful antioxidant properties",
      "Promotes healthy circulation in skin tissues",
      "May help reduce under-eye circles",
      "Supports collagen maintenance"
    ],
    uses: ["Rosacea", "Broken capillaries", "Anti-aging", "Under-eye circles", "Bruising"],
    preparations: ["Extract", "Serum", "Cream", "Eye gel", "Mask"],
    dosage: "Apply products containing 1-2% bilberry extract twice daily",
    cautions: [
      "May enhance effects of blood-thinning medications if used internally",
      "Can temporarily stain skin if using fresh berries",
      "Patch test recommended as some people may be sensitive",
      "Keep away from eyes unless product is specifically formulated for eye area",
      "Internal use should be supervised by healthcare professional"
    ],
    categories: ["Skin", "European", "Antioxidant"]
  },
  {
    id: 315,
    name: "Milk Thistle",
    scientific_name: "Silybum marianum",
    description: "A Mediterranean herb whose seeds contain silymarin, a powerful antioxidant complex that protects skin cells and supports detoxification processes.",
    benefits: [
      "Contains silymarin with powerful antioxidant properties",
      "Protects skin cells from UV and pollution damage",
      "Supports liver function which affects skin health",
      "May help reduce inflammatory skin conditions",
      "Shows promise for reducing acne related to toxin buildup"
    ],
    uses: ["Environmental skin protection", "Acne", "Rosacea", "Aging skin", "Sun damage"],
    preparations: ["Extract", "Serum", "Cream", "Capsules", "Tincture"],
    dosage: "Topical: Products with 1-3% extract; Internal: 140-800mg standardized extract daily",
    cautions: [
      "May cause allergic reactions in those sensitive to plants in the daisy family",
      "Can have mild laxative effect with internal use",
      "May lower blood sugar levels with internal use",
      "Can affect certain drug metabolism in the liver",
      "Consult healthcare provider before internal use"
    ],
    categories: ["Skin", "Mediterranean", "Detoxifying"]
  }
];
