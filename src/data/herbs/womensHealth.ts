import { Herb } from "../types/herbs";

// Herbs that primarily support women's health and hormonal balance
export const womensHealthHerbs: Herb[] = [
  {
    id: 28,
    name: "Red Raspberry Leaf",
    scientific_name: "Rubus idaeus",
    description: "A nutrient-rich herb that's renowned for its benefits to the female reproductive system and pregnancy support.",
    benefits: [
      "Rich in minerals like iron, calcium, and magnesium",
      "Tones the uterus",
      "Supports healthy menstruation",
      "May ease menstrual cramping",
      "Traditionally used during pregnancy to prepare for childbirth"
    ],
    uses: ["Women's health", "Pregnancy preparation", "Menstrual support", "Nutritive tonic"],
    preparations: ["Tea", "Capsules", "Tincture", "Infusion"],
    dosage: "1-2 cups tea daily or 1-2 teaspoons of dried herb per cup",
    cautions: [
      "Generally considered safe, including during pregnancy",
      "May have mild laxative effect in some people",
      "Could potentially affect absorption of certain medications",
      "Consult healthcare provider if taking medications"
    ],
    categories: ["Women's Health", "Nutritive", "European"]
  },
  {
    id: 29,
    name: "Chaste Tree Berry",
    scientific_name: "Vitex agnus-castus",
    description: "A powerful hormone-balancing herb that works primarily by supporting the pituitary gland and normalizing progesterone levels.",
    benefits: [
      "Helps balance female hormones",
      "May reduce PMS symptoms",
      "Supports healthy progesterone levels",
      "Can help regulate menstrual cycles",
      "May help with fertility"
    ],
    uses: ["Hormonal balance", "PMS", "Menstrual irregularities", "Perimenopausal support"],
    preparations: ["Tincture", "Capsules", "Dry extract"],
    dosage: "20-40mg concentrated extract daily or 2-3ml tincture",
    cautions: [
      "Can interfere with hormonal medications including birth control",
      "Effects may take 3 cycles to become noticeable",
      "Not recommended during pregnancy",
      "May not be suitable for those with hormone-sensitive conditions",
      "Best avoided during breastfeeding"
    ],
    categories: ["Women's Health", "Hormonal", "European"]
  },
  {
    id: 30,
    name: "Black Cohosh",
    scientific_name: "Actaea racemosa",
    description: "A North American herb traditionally used for women's health concerns, particularly those related to menopause.",
    benefits: [
      "May reduce hot flashes and night sweats",
      "Has mild sedative effects",
      "Supports mood during hormonal transitions",
      "Can help with menstrual cramping",
      "Has anti-inflammatory properties"
    ],
    uses: ["Menopausal symptoms", "Hormonal balance", "Menstrual support"],
    preparations: ["Tincture", "Capsules", "Tablets", "Standardized extract"],
    dosage: "40-80mg standardized extract daily",
    cautions: [
      "Not for use during pregnancy or breastfeeding",
      "May cause digestive upset in some individuals",
      "Rare reports of liver issues - discontinue if signs of jaundice appear",
      "Not recommended for those with hormone-sensitive conditions",
      "May interact with medications metabolized by the liver"
    ],
    categories: ["Women's Health", "Nervine", "Native American"]
  },
  {
    id: 31,
    name: "Dong Quai",
    scientific_name: "Angelica sinensis",
    description: "An important women's tonic in Traditional Chinese Medicine that supports blood health and hormonal balance.",
    benefits: [
      "Supports healthy blood circulation",
      "Has blood-building properties",
      "May help regulate menstrual cycles",
      "Contains immune-modulating polysaccharides",
      "Supports overall vitality"
    ],
    uses: ["Women's health", "Blood building", "Menstrual support", "Circulation"],
    preparations: ["Decoction", "Capsules", "Tincture", "Traditional formulas"],
    dosage: "500-1000mg dried root daily or 2-3ml tincture",
    cautions: [
      "May increase bleeding - avoid before surgery",
      "Not recommended during pregnancy or heavy menstruation",
      "May cause photosensitivity in some individuals",
      "May interact with blood thinning medications",
      "Best used under guidance of practitioner knowledgeable in TCM"
    ],
    categories: ["Women's Health", "Blood Tonic", "Traditional Chinese"]
  },
  
  {
    id: 114,
    name: "Shatavari",
    scientific_name: "Asparagus racemosus",
    description: "A nourishing adaptogenic herb from Ayurvedic tradition used to support women's health throughout all life stages, from menstruation to menopause.",
    benefits: [
      "Supports balanced female hormones",
      "Has adaptogenic properties",
      "May increase breast milk production",
      "Nourishes reproductive tissues",
      "Supports menopausal transition"
    ],
    uses: ["Women's hormonal health", "Lactation support", "Reproductive vitality", "Menopausal support"],
    preparations: ["Powder", "Capsules", "Ghee preparation", "Milk decoction", "Tincture"],
    dosage: "1-2 teaspoons powder daily or 500-1000mg in capsule form",
    cautions: [
      "May not be suitable for those with estrogen-sensitive conditions",
      "Can cause digestive upset in some individuals",
      "May interact with diabetes medications",
      "Could potentially affect hormone-based birth control"
    ],
    categories: ["Women's Health", "Adaptogenic", "Ayurvedic", "Nutritive"]
  },
  {
    id: 115,
    name: "Lady's Mantle",
    scientific_name: "Alchemilla vulgaris",
    description: "A European herb traditionally used for women's health issues, particularly for heavy menstrual bleeding and menstrual cramps.",
    benefits: [
      "Has astringent properties for excessive menstruation",
      "Supports hormonal balance",
      "May reduce menstrual cramping",
      "Contains compounds that tone reproductive tissues",
      "Traditionally used for menopause support"
    ],
    uses: ["Menstrual support", "Heavy bleeding", "Menopause transition", "Reproductive health"],
    preparations: ["Tea", "Tincture", "Bath", "Compress", "Capsules"],
    dosage: "1-2 teaspoons dried herb for tea, 3 times daily or 2-4ml tincture",
    cautions: [
      "May increase effects of blood pressure medications",
      "Strong astringent effects may cause constipation in some individuals",
      "Not recommended during pregnancy",
      "Potential for allergic reactions in sensitive individuals"
    ],
    categories: ["Women's Health", "Astringent", "European", "Reproductive"]
  }
];
