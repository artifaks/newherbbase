
import { Herb } from "../types/herbs";

// Herbs that primarily benefit skin health
export const skinHerbs: Herb[] = [
  {
    id: 150,
    name: "Calendula",
    scientific_name: "Calendula officinalis",
    description: "A bright orange flowering herb with exceptional healing properties for skin conditions, wounds, and inflammatory skin disorders.",
    benefits: [
      "Promotes wound healing",
      "Reduces skin inflammation",
      "Moisturizes dry skin",
      "Has antimicrobial properties",
      "Soothes irritated skin"
    ],
    uses: ["Skin healing", "Wound care", "Rash treatment", "Skin inflammation"],
    preparations: ["Oil infusion", "Salve", "Cream", "Wash", "Compress"],
    dosage: "Apply topically as needed using infused oil or salve",
    cautions: [
      "May cause allergic reactions in people allergic to plants in the daisy family",
      "For external use only unless under guidance of a professional",
      "Avoid during pregnancy (when used internally)",
      "Do not apply to deep or puncture wounds"
    ],
    categories: ["Skin", "Anti-inflammatory", "First Aid", "European"]
  },
  {
    id: 151,
    name: "Aloe Vera",
    scientific_name: "Aloe barbadensis",
    description: "A succulent plant with thick, fleshy leaves containing clear gel with remarkable skin-healing and cooling properties.",
    benefits: [
      "Soothes burns and sunburns",
      "Accelerates wound healing",
      "Hydrates and moisturizes skin",
      "Has anti-inflammatory properties",
      "Contains vitamins and minerals beneficial for skin"
    ],
    uses: ["Burn treatment", "Skin hydration", "Wound healing", "Sunburn relief"],
    preparations: ["Fresh gel", "Commercial gel", "Cream", "Juice (internal)"],
    dosage: "Apply fresh gel or prepared product to affected area 2-3 times daily",
    cautions: [
      "Some people may experience allergic reactions",
      "Topical aloe may delay healing of deep surgical wounds",
      "Internal use may cause digestive discomfort",
      "May lower blood sugar - monitor if diabetic"
    ],
    categories: ["Skin", "Cooling", "First Aid", "Succulent"]
  },
  {
    id: 152,
    name: "Chamomile",
    scientific_name: "Matricaria chamomilla",
    description: "A gentle herb with apple-scented flowers that has anti-inflammatory and calming properties beneficial for sensitive skin.",
    benefits: [
      "Reduces skin inflammation",
      "Calms irritated skin",
      "Has antimicrobial properties",
      "Speeds healing of minor wounds",
      "Soothes skin allergies and rashes"
    ],
    uses: ["Sensitive skin care", "Eczema relief", "Eye inflammation", "Skin irritation"],
    preparations: ["Tea wash", "Compress", "Essential oil (diluted)", "Cream", "Bath"],
    dosage: "Apply cooled strong tea as compress or wash 2-3 times daily",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Essential oil must be properly diluted",
      "Avoid during pregnancy in medicinal amounts",
      "Test patch before widespread use"
    ],
    categories: ["Skin", "Anti-inflammatory", "Nervine", "European"]
  },
  {
    id: 153,
    name: "Comfrey",
    scientific_name: "Symphytum officinale",
    description: "A herb with large, hairy leaves containing allantoin which dramatically speeds cell proliferation and wound healing when used externally.",
    benefits: [
      "Accelerates wound closure",
      "Reduces inflammation",
      "Soothes irritated skin",
      "Helps heal minor burns",
      "Promotes cell regeneration"
    ],
    uses: ["Wound healing", "Bruise treatment", "Bone and tissue repair (external only)", "Skin regeneration"],
    preparations: ["Poultice", "Salve", "Oil", "Compress"],
    dosage: "Apply externally as needed, do not use on deep wounds or broken skin",
    cautions: [
      "NOT for internal use - contains pyrrolizidine alkaloids",
      "Do not use on deep wounds or punctures",
      "Do not apply to infected areas",
      "Discontinue use before surgery",
      "Do not use during pregnancy or breastfeeding"
    ],
    categories: ["Skin", "Vulnerary", "European"]
  },
  {
    id: 154,
    name: "Witch Hazel",
    scientific_name: "Hamamelis virginiana",
    description: "A shrub whose bark and leaves produce an astringent extract that tones skin, reduces inflammation, and treats various skin conditions.",
    benefits: [
      "Astringent properties tighten skin",
      "Reduces inflammation and redness",
      "Helps control excess oil",
      "Soothes irritation and itching",
      "May help with acne and blemishes"
    ],
    uses: ["Skin toner", "Acne treatment", "Varicose veins", "Hemorrhoid relief", "Skin inflammation"],
    preparations: ["Distilled extract", "Tincture", "Compress", "Spray"],
    dosage: "Apply topically as needed with cotton pad or spray",
    cautions: [
      "May cause skin irritation in sensitive individuals",
      "For external use only",
      "Avoid contact with eyes",
      "Discontinue if irritation develops",
      "Test patch before widespread use"
    ],
    categories: ["Skin", "Astringent", "Anti-inflammatory", "Native American"]
  }
];
