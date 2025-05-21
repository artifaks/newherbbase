import { Herb } from "../types/herbs";

// Herbs that are classified as adaptogens - helping the body adapt to stress
export const adaptogenicHerbs: Herb[] = [
  {
    id: 7,
    name: "Ashwagandha",
    scientific_name: "Withania somnifera",
    description: "An adaptogenic herb widely used in Ayurvedic medicine to help the body resist physiological and psychological stress.",
    benefits: [
      "Helps body adapt to stress",
      "May reduce anxiety and depression",
      "Supports immune function",
      "Can improve energy and stamina",
      "Potential to improve cognitive function"
    ],
    uses: ["Stress management", "Energy support", "Immune support"],
    preparations: ["Powder", "Capsules", "Tincture", "Tea"],
    dosage: "300-500mg extract daily, or 1-2 teaspoons of powder",
    cautions: [
      "May interact with thyroid medications",
      "Not recommended during pregnancy",
      "Can cause drowsiness in higher doses"
    ],
    categories: ["Adaptogenic", "Nervine", "Ayurvedic"]
  },
  {
    id: 13,
    name: "Holy Basil",
    scientific_name: "Ocimum sanctum",
    description: "Also known as Tulsi, this sacred Ayurvedic herb is revered for its adaptogenic properties and ability to balance the body's stress response.",
    benefits: [
      "Adaptogenic - helps body cope with stress",
      "Supports immune function",
      "Has anti-inflammatory properties",
      "May help balance blood sugar",
      "Supports cognitive function"
    ],
    uses: ["Stress management", "Immune support", "Mental clarity", "Respiratory health"],
    preparations: ["Tea", "Tincture", "Capsules", "Fresh leaves", "Powder"],
    dosage: "1-2 teaspoons dried herb for tea, 2-3 times daily",
    cautions: [
      "May slow blood clotting",
      "Can interact with diabetes medications",
      "Not recommended during pregnancy"
    ],
    categories: ["Adaptogenic", "Immune", "Nervine", "Ayurvedic"]
  },
  {
    id: 15,
    name: "Rhodiola",
    scientific_name: "Rhodiola rosea",
    description: "An arctic root used traditionally in Russia and Scandinavia, known for combating fatigue and improving mental performance under stress.",
    benefits: [
      "Increases energy and stamina",
      "Enhances mental performance",
      "Helps the body adapt to stress",
      "May improve mood and reduce depression",
      "Supports immune function during stress"
    ],
    uses: ["Energy support", "Stress management", "Cognitive enhancement", "Athletic performance"],
    preparations: ["Capsules", "Tincture", "Extract", "Tea (less common)"],
    dosage: "200-600mg of standardized extract daily",
    cautions: [
      "May interact with antidepressants and other medications",
      "Can cause stimulant-like effects in sensitive individuals",
      "Not recommended for people with bipolar disorder"
    ],
    categories: ["Adaptogenic", "Nervine", "Energy", "European"]
  },
  {
    id: 28,
    name: "Schisandra",
    scientific_name: "Schisandra chinensis",
    description: "A woody vine bearing red berries with a complex flavor profile, used in Traditional Chinese Medicine as an adaptogen and liver protectant.",
    benefits: [
      "Supports liver function and detoxification",
      "Helps the body adapt to stress",
      "Improves mental and physical performance",
      "Has antioxidant properties",
      "May help with respiratory issues"
    ],
    uses: ["Adaptogenic support", "Liver health", "Stress management", "Cognitive function"],
    preparations: ["Tincture", "Dried berries", "Powder", "Decoction", "Capsules"],
    dosage: "2-4g dried berries daily or 2-4ml tincture 3 times daily",
    cautions: [
      "May cause digestive upset in sensitive individuals",
      "Can interact with some medications processed by the liver",
      "May increase pressure in the eyes - use caution with glaucoma",
      "Not recommended during pregnancy"
    ],
    categories: ["Adaptogenic", "Liver", "Chinese"]
  },
  {
    id: 31,
    name: "Eleuthero",
    scientific_name: "Eleutherococcus senticosus",
    description: "Formerly known as Siberian ginseng, this woody shrub has been used in traditional Chinese medicine for thousands of years as an energy tonic and stress adaptogen.",
    benefits: [
      "Enhances physical endurance and recovery",
      "Improves mental performance under stress",
      "Supports immune system function",
      "May help normalize blood pressure",
      "Increases resistance to environmental stressors"
    ],
    uses: ["Energy support", "Stress management", "Immune support", "Athletic performance"],
    preparations: ["Tincture", "Capsules", "Decoction", "Extract"],
    dosage: "500-3000mg of dried root daily or 2-3ml tincture 3 times daily",
    cautions: [
      "May interact with certain medications including heart medications and sedatives",
      "Not recommended for people with high blood pressure",
      "May increase effects of caffeine",
      "Avoid during pregnancy and breastfeeding"
    ],
    categories: ["Adaptogenic", "Energy", "Chinese"]
  },
  {
    id: 32,
    name: "Cordyceps",
    scientific_name: "Cordyceps sinensis",
    description: "A unique fungus that grows on caterpillar larvae at high altitudes in the Himalayas, valued in Traditional Chinese Medicine for its energy and endurance benefits.",
    benefits: [
      "Enhances oxygen utilization",
      "Increases cellular ATP production",
      "Supports kidney and lung function",
      "Has antioxidant properties",
      "May improve libido and sexual function"
    ],
    uses: ["Energy enhancement", "Athletic performance", "Respiratory support", "Kidney health"],
    preparations: ["Powder", "Capsules", "Extract", "Tincture"],
    dosage: "1-3g of dried mushroom daily or 2-4ml tincture 2-3 times daily",
    cautions: [
      "May interact with immunosuppressant medications",
      "Use with caution if you have autoimmune conditions",
      "May increase effects of blood-thinning medications",
      "Consult healthcare provider if you have hormone-sensitive conditions"
    ],
    categories: ["Adaptogenic", "Energy", "Mushroom", "Chinese"]
  },
  {
    id: 102,
    name: "Maca Root",
    scientific_name: "Lepidium meyenii",
    description: "A root vegetable from the high Andes of Peru, used for thousands of years as both food and medicine for energy, stamina, and hormonal balance.",
    benefits: [
      "Supports energy and stamina",
      "May help balance hormones",
      "Contains numerous vitamins and minerals",
      "Supports physical performance",
      "Traditionally used for fertility"
    ],
    uses: ["Energy support", "Hormonal balance", "Stress management", "Physical endurance"],
    preparations: ["Powder", "Capsules", "Tincture", "Culinary ingredient"],
    dosage: "1-3 teaspoons of powder daily or 500-1500mg in capsules",
    cautions: [
      "May interact with hormone medications",
      "Not recommended for those with thyroid conditions",
      "Best avoided during pregnancy without professional guidance",
      "Start with small doses to assess tolerance"
    ],
    categories: ["Adaptogenic", "Energy", "Hormonal", "South American"]
  },
  {
    id: 103,
    name: "Tulsi (Holy Basil)",
    scientific_name: "Ocimum sanctum",
    description: "A sacred herb in Ayurvedic medicine with a rich history of use for stress reduction, cognitive function, and immune support.",
    benefits: [
      "Reduces effects of stress",
      "Supports cognitive function",
      "Has immune-enhancing properties",
      "Contains powerful antioxidants",
      "Helps balance cortisol levels"
    ],
    uses: ["Stress reduction", "Cognitive support", "Immune enhancement", "Adaptogenic support"],
    preparations: ["Tea", "Tincture", "Fresh leaves", "Capsules", "Essential oil"],
    dosage: "1-2 cups of tea daily or 300-1000mg in supplement form",
    cautions: [
      "May increase bleeding time - discontinue before surgery",
      "Could affect fertility - caution when trying to conceive",
      "May interact with diabetes medications",
      "Potential allergen for those sensitive to plants in the mint family"
    ],
    categories: ["Adaptogenic", "Nervine", "Ayurvedic", "Immune"]
  }
];
