import { Herb } from "../types/herbs";

// Herbs that primarily support immune function
export const immuneHerbs: Herb[] = [
  {
    id: 1,
    name: "Echinacea",
    scientific_name: "Echinacea purpurea",
    description: "A popular herb known for its immune-boosting properties. Echinacea has been used for centuries by Native Americans to treat various ailments.",
    benefits: [
      "Supports immune system function",
      "May reduce cold symptoms",
      "Has anti-inflammatory properties",
      "Potential antiviral effects"
    ],
    uses: ["Immune support", "Cold & flu", "Infections"],
    preparations: ["Tincture", "Tea", "Capsules", "Extract"],
    dosage: "300-500mg of dried herb three times daily",
    cautions: [
      "May interact with immunosuppressants",
      "Not recommended for people with autoimmune disorders",
      "May cause allergic reactions in people allergic to plants in the daisy family"
    ],
    categories: ["Immune", "Respiratory", "Native American"]
  },
  {
    id: 8,
    name: "Elderberry",
    scientific_name: "Sambucus nigra",
    description: "A dark purple berry known for its immune-supporting properties and high antioxidant content.",
    benefits: [
      "Supports immune system function",
      "Has antiviral properties",
      "Rich in antioxidants",
      "May reduce cold and flu duration",
      "Supports respiratory health"
    ],
    uses: ["Immune support", "Cold & flu", "Antioxidant support"],
    preparations: ["Syrup", "Tincture", "Tea", "Capsules", "Lozenges"],
    dosage: "1 tablespoon of syrup 3-4 times daily during illness",
    cautions: [
      "Raw or unripe berries are toxic",
      "May interact with immunosuppressants and diuretics",
      "Not recommended for long-term use without breaks"
    ],
    categories: ["Immune", "Antioxidant", "Respiratory", "European"]
  },
  {
    id: 17,
    name: "Astragalus",
    scientific_name: "Astragalus membranaceus",
    description: "A foundational herb in Traditional Chinese Medicine, known for its immune-strengthening and energy-enhancing properties.",
    benefits: [
      "Strengthens immune system",
      "Increases stamina and vitality",
      "Supports heart and cardiovascular health",
      "May have anti-aging effects",
      "Helps body recover from chronic illness"
    ],
    uses: ["Immune support", "Energy enhancement", "Stress recovery", "Longevity"],
    preparations: ["Decoction", "Tincture", "Capsules", "Powder", "Traditional soups"],
    dosage: "500-1000mg of extract daily or 3-5g of dried root in decoction",
    cautions: [
      "Not recommended during acute infections or fever",
      "May interact with immune-suppressing medications",
      "Use with caution in autoimmune conditions"
    ],
    categories: ["Immune", "Adaptogenic", "Energy", "Chinese"]
  },
  {
    id: 30,
    name: "Reishi Mushroom",
    scientific_name: "Ganoderma lucidum",
    description: "A woody, kidney-shaped mushroom with a shiny red-brown surface, revered in Asian traditions as the 'mushroom of immortality' for its immune and longevity benefits.",
    benefits: [
      "Supports immune system function",
      "Has adaptogenic properties",
      "May help reduce allergic responses",
      "Supports cardiovascular health",
      "Has anti-inflammatory effects"
    ],
    uses: ["Immune support", "Stress management", "Longevity", "Respiratory health"],
    preparations: ["Decoction", "Tincture", "Powder", "Capsules", "Extract"],
    dosage: "1.5-9g dried mushroom daily or 1-2ml tincture 2-3 times daily",
    cautions: [
      "May increase bleeding risk - avoid before surgery",
      "Can interact with immunosuppressants and blood pressure medications",
      "May cause digestive upset in some individuals",
      "Not recommended during pregnancy without professional guidance"
    ],
    categories: ["Immune", "Adaptogenic", "Mushroom", "Chinese"]
  },
  {
    id: 45,
    name: "Andrographis",
    scientific_name: "Andrographis paniculata",
    description: "An intensely bitter herb from Southeast Asia, known for its powerful immune-supporting properties and ability to reduce severity of cold and flu symptoms.",
    benefits: [
      "Supports immune system function",
      "May reduce duration and severity of respiratory infections",
      "Has anti-inflammatory properties",
      "Contains andrographolides that support healthy immune response",
      "May help reduce fever"
    ],
    uses: ["Immune support", "Cold & flu relief", "Respiratory health", "Fever reduction"],
    preparations: ["Capsules", "Tablets", "Tincture", "Tea (less common due to bitterness)"],
    dosage: "400-1200mg of standardized extract daily, in divided doses during illness",
    cautions: [
      "Very bitter taste - difficult to take as tea",
      "May interact with blood-thinning medications",
      "May lower blood pressure",
      "Not recommended during pregnancy",
      "May cause digestive upset in some individuals"
    ],
    categories: ["Immune", "Bitter", "Anti-inflammatory", "Ayurvedic"]
  },
  {
    id: 46,
    name: "Olive Leaf",
    scientific_name: "Olea europaea",
    description: "The leaves of the olive tree contain oleuropein and other compounds that provide antimicrobial, antioxidant and immune-supporting benefits.",
    benefits: [
      "Has antimicrobial properties against bacteria, viruses, and fungi",
      "Contains powerful antioxidants",
      "Supports cardiovascular health",
      "May help reduce blood pressure",
      "Supports healthy immune response"
    ],
    uses: ["Immune support", "Infection relief", "Cardiovascular health", "Antioxidant support"],
    preparations: ["Capsules", "Tincture", "Tea", "Extract"],
    dosage: "500-1000mg of extract daily or 2-3 teaspoons dried herb for tea, 2-3 times daily",
    cautions: [
      "May interact with blood pressure medications",
      "Can cause stomach upset in sensitive individuals",
      "May lower blood sugar levels",
      "May interact with certain medications metabolized by the liver"
    ],
    categories: ["Immune", "Antimicrobial", "Cardiovascular", "Mediterranean"]
  },
  {
    id: 100,
    name: "Garlic",
    scientific_name: "Allium sativum",
    description: "A potent herb used historically for its immune-boosting and antimicrobial properties. Garlic has been used medicinally across many cultures throughout history.",
    benefits: [
      "Enhances immune function",
      "Has antimicrobial properties",
      "May reduce blood pressure",
      "Contains compounds that fight oxidative stress",
      "Supports cardiovascular health"
    ],
    uses: ["Immune support", "Heart health", "Infection prevention"],
    preparations: ["Fresh cloves", "Aged extract", "Capsules", "Oil infusion"],
    dosage: "1-2 fresh cloves daily or 600-1200mg aged garlic extract",
    cautions: [
      "May interact with blood thinning medications",
      "Can cause digestive upset in some individuals",
      "May affect blood sugar levels",
      "Strong odor may be socially challenging"
    ],
    categories: ["Immune", "Cardiovascular", "Antimicrobial", "Worldwide"]
  },
  {
    id: 101,
    name: "Shiitake Mushroom",
    scientific_name: "Lentinula edodes",
    description: "A medicinal mushroom valued for its immune-modulating effects and culinary uses, containing beta-glucans that support immune function.",
    benefits: [
      "Contains immune-enhancing polysaccharides",
      "Supports balanced immune response",
      "Has adaptogenic properties",
      "Rich in nutrients and antioxidants",
      "May help maintain healthy cholesterol levels"
    ],
    uses: ["Immune modulation", "Overall wellness", "Nutritional support"],
    preparations: ["Fresh or dried in cooking", "Powdered extract", "Capsules", "Tincture"],
    dosage: "3-5g dried mushroom daily or as directed on supplement packaging",
    cautions: [
      "May cause digestive distress in some individuals",
      "Rare allergic reactions possible",
      "Not recommended for people with mushroom allergies",
      "Should be cooked before consumption"
    ],
    categories: ["Immune", "Adaptogenic", "Mushroom", "Japanese"]
  }
];
