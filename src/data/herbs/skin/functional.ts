
import { Herb } from "../../types/herbs";

// Functional skin herbs (classified by main function rather than geographic origin)
export const functionalSkinHerbs: Herb[] = [
  {
    id: 262,
    name: "Marshmallow Root",
    scientific_name: "Althaea officinalis",
    description: "A mucilage-rich root that forms a protective, soothing gel when mixed with water, ideal for irritated or inflamed skin.",
    benefits: [
      "Forms protective layer over irritated skin",
      "Provides deep hydration to dry skin",
      "Soothes inflammation and redness",
      "Gently cleanses without stripping natural oils",
      "Helps skin retain moisture"
    ],
    uses: ["Dry skin relief", "Eczema soothing", "Gentle facial cleansing", "Dermatitis", "Minor burns"],
    preparations: ["Cold infusion", "Powder", "Cream", "Compress", "Wash"],
    dosage: "Apply cold infusion or cream to affected areas 2-3 times daily",
    cautions: [
      "May slow absorption of other topical medications",
      "Allow time between application and other skin products",
      "May rarely cause allergic reactions",
      "Not for use on infected wounds",
      "Store preparations in refrigerator as they spoil quickly"
    ],
    categories: ["Skin", "Demulcent", "European", "Soothing"]
  },
  {
    id: 264,
    name: "Rosehip",
    scientific_name: "Rosa canina",
    description: "The fruit of wild roses, rich in vitamins and essential fatty acids that promote skin cell regeneration and reduce scars.",
    benefits: [
      "Rich in vitamins A, C, and E",
      "Contains essential fatty acids that support skin repair",
      "Promotes collagen production",
      "Reduces appearance of scars and fine lines",
      "Has astringent and toning properties"
    ],
    uses: ["Anti-aging skincare", "Scar reduction", "Hyperpigmentation", "Skin elasticity", "Sun damage repair"],
    preparations: ["Oil", "Powder", "Serum", "Capsules", "Tea"],
    dosage: "Apply oil or products containing rosehip 1-2 times daily to affected areas",
    cautions: [
      "May trigger reactions in people with rose allergies",
      "Can increase sensitivity to UV radiation",
      "May not be suitable for very oily or acne-prone skin",
      "Quality varies greatly between products",
      "Oil is highly unsaturated and can go rancid quickly"
    ],
    categories: ["Skin", "Anti-aging", "European"]
  },
  {
    id: 265,
    name: "Arnica",
    scientific_name: "Arnica montana",
    description: "A mountain flower with powerful anti-inflammatory and pain-relieving properties, primarily used for bruises and injuries.",
    benefits: [
      "Reduces swelling and inflammation",
      "Relieves pain from injuries",
      "Improves circulation to injured areas",
      "Speeds healing of bruises and contusions",
      "Has antimicrobial properties"
    ],
    uses: ["Bruises", "Muscle soreness", "Sprains", "Post-surgical healing", "Sports injuries"],
    preparations: ["Gel", "Ointment", "Cream", "Homeopathic tablets", "Compresses"],
    dosage: "Apply topical preparations to unbroken skin 3-4 times daily; do not use on open wounds",
    cautions: [
      "For external use only - toxic if ingested except in homeopathic dilutions",
      "Do not apply to broken skin",
      "May cause allergic reactions in people sensitive to the Asteraceae family",
      "Do not use longer than 10 consecutive days",
      "Consult healthcare provider before use during pregnancy"
    ],
    categories: ["Skin", "Anti-inflammatory", "Mountain", "European"]
  },
  {
    id: 307,
    name: "Mullein",
    scientific_name: "Verbascum thapsus",
    description: "A velvety-leaved plant used traditionally for its softening, anti-inflammatory, and soothing properties on irritated skin.",
    benefits: [
      "Contains mucilage that soothes irritated skin",
      "Has mild anti-inflammatory properties",
      "Shows antimicrobial activity against certain skin pathogens",
      "Rich in antioxidants including flavonoids",
      "Creates protective barrier on damaged skin"
    ],
    uses: ["Minor burns", "Skin irritations", "Eczema", "Diaper rash", "Chapped skin"],
    preparations: ["Oil infusion", "Compress", "Poultice", "Salve", "Wash"],
    dosage: "Apply oil or other preparations to affected areas 2-3 times daily",
    cautions: [
      "Perform patch test before widespread use",
      "Use only properly filtered preparations to remove plant hairs",
      "Not recommended for deep wounds or serious burns",
      "Store oil infusions properly to prevent rancidity",
      "Internal use should be supervised by healthcare professional"
    ],
    categories: ["Skin", "European", "Soothing"]
  },
  {
    id: 314,
    name: "Usnea Lichen",
    scientific_name: "Usnea barbata",
    description: "A symbiotic organism containing usnic acid with potent antimicrobial properties effective against skin infections and inflammation.",
    benefits: [
      "Contains usnic acid with strong antimicrobial activity",
      "Has anti-inflammatory properties",
      "Shows wound-healing capabilities",
      "Contains lichenic acid that may inhibit biofilm formation",
      "Traditionally used for skin infections"
    ],
    uses: ["Fungal infections", "Minor wounds", "Acne", "Athlete's foot", "Skin inflammation"],
    preparations: ["Tincture", "Salve", "Cream", "Powder", "Wash"],
    dosage: "Apply preparations containing 1-2% extract to affected areas 2-3 times daily",
    cautions: [
      "May cause skin irritation in sensitive individuals",
      "Internal use can cause liver toxicity - external use only",
      "Harvest sustainably as lichen grows very slowly",
      "Not recommended during pregnancy or breastfeeding",
      "Avoid applying to large areas of broken skin"
    ],
    categories: ["Skin", "Antimicrobial", "Worldwide"]
  }
];
