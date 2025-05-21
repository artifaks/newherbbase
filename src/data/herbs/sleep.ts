import { Herb } from "../types/herbs";

// Herbs that primarily support sleep and relaxation
export const sleepHerbs: Herb[] = [
  {
    id: 232,
    name: "Valerian",
    scientific_name: "Valeriana officinalis",
    description: "A perennial herb whose root has powerful sedative and sleep-enhancing properties, commonly used for insomnia and anxiety.",
    benefits: [
      "Promotes falling asleep faster",
      "May improve sleep quality",
      "Helps reduce anxiety",
      "Has muscle relaxant properties",
      "Traditionally used for stress relief"
    ],
    uses: ["Insomnia", "Anxiety", "Stress relief", "Sleep support", "Muscle tension"],
    preparations: ["Tincture", "Capsules", "Tea", "Extract"],
    dosage: "300-900mg dried root or 2-3ml tincture 30-60 minutes before bed",
    cautions: [
      "Has strong unpleasant odor",
      "May cause vivid dreams",
      "Can cause morning grogginess in some people",
      "May interact with sedative medications",
      "Not recommended for use with alcohol"
    ],
    categories: ["Sleep", "Nervine", "European", "Sedative"]
  },
  {
    id: 233,
    name: "Lemon Balm",
    scientific_name: "Melissa officinalis",
    description: "A lemon-scented member of the mint family with gentle calming and sleep-supporting properties.",
    benefits: [
      "Has gentle sedative effect",
      "Reduces anxiety and stress",
      "May help with restlessness",
      "Supports digestive health",
      "Shows antiviral properties"
    ],
    uses: ["Sleep support", "Anxiety", "Stress relief", "Digestive calm", "Herpes simplex"],
    preparations: ["Tea", "Tincture", "Capsules", "Essential oil"],
    dosage: "1-2 teaspoons dried herb for tea, 2-3 times daily or 2-4ml tincture",
    cautions: [
      "May affect thyroid function with excessive use",
      "Can interact with sedative medications",
      "May lower attention and alertness",
      "Avoid before driving or operating machinery",
      "Use with caution if you have thyroid issues"
    ],
    categories: ["Sleep", "Nervine", "European", "Aromatic"]
  },
  {
    id: 234,
    name: "Passionflower",
    scientific_name: "Passiflora incarnata",
    description: "A climbing vine with unique flowers that has traditional use for anxiety, restlessness, and sleep support.",
    benefits: [
      "Has mild sedative effects",
      "Helps reduce anxiety without strong drowsiness",
      "May help with nervous tension",
      "Supports GABA activity in the brain",
      "Can help with racing thoughts before sleep"
    ],
    uses: ["Mild insomnia", "Anxiety", "Racing thoughts", "Nervousness", "Sleep support"],
    preparations: ["Tea", "Tincture", "Capsules", "Liquid extract"],
    dosage: "1-2 teaspoons dried herb for tea or 2-4ml tincture before bed",
    cautions: [
      "May enhance effects of sedative medications",
      "Can cause drowsiness",
      "Not recommended during pregnancy",
      "May affect blood pressure",
      "Avoid before driving or operating machinery"
    ],
    categories: ["Sleep", "Nervine", "Native American", "Sedative"]
  },
  {
    id: 235,
    name: "California Poppy",
    scientific_name: "Eschscholzia californica",
    description: "A bright orange flowering plant native to California with mild sedative and anxiety-reducing properties.",
    benefits: [
      "Has gentle sedative effects",
      "Helps with mild to moderate anxiety",
      "May improve sleep quality",
      "Supports relaxation without strong drowsiness",
      "Traditionally used for children's sleep issues"
    ],
    uses: ["Mild insomnia", "Anxiety", "Restlessness", "Mild pain relief", "Children's sleep (under professional guidance)"],
    preparations: ["Tincture", "Tea", "Capsules", "Liquid extract"],
    dosage: "1-2ml tincture up to 3 times daily or 2-4ml before bed",
    cautions: [
      "May enhance effects of sedative medications",
      "Not the same as opium poppy - contains different compounds",
      "Not recommended during pregnancy",
      "Avoid before driving",
      "Keep away from pets"
    ],
    categories: ["Sleep", "Nervine", "Native American", "Mild Sedative"]
  },
  {
    id: 236,
    name: "Skullcap",
    scientific_name: "Scutellaria lateriflora",
    description: "A member of the mint family traditionally used for nervous tension, anxiety, and insomnia, particularly when racing thoughts are present.",
    benefits: [
      "Calms nervous tension and anxiety",
      "Helps quiet racing thoughts",
      "Supports healthy sleep",
      "May help with stress-induced headaches",
      "Has mild antispasmodic properties"
    ],
    uses: ["Anxiety", "Nervous tension", "Insomnia with racing thoughts", "Stress relief", "Nervous headaches"],
    preparations: ["Tincture", "Tea", "Capsules", "Fresh plant extract"],
    dosage: "1-2 teaspoons dried herb for tea or 2-4ml tincture up to 3 times daily",
    cautions: [
      "May enhance effects of sedative medications",
      "Ensure correct species - Chinese skullcap has different properties",
      "Fresh plant tincture more effective than dried",
      "May cause drowsiness",
      "Avoid before driving"
    ],
    categories: ["Sleep", "Nervine", "Native American", "Relaxant"]
  },
  {
    id: 237,
    name: "Lavender",
    scientific_name: "Lavandula angustifolia",
    description: "An aromatic herb with purple flowers known for its calming scent and effects on the nervous system.",
    benefits: [
      "Reduces anxiety and stress",
      "Supports healthy sleep",
      "Has mild sedative properties",
      "May help with headaches",
      "Shows antimicrobial properties"
    ],
    uses: ["Sleep support", "Anxiety", "Stress relief", "Headache relief", "Aromatherapy"],
    preparations: ["Essential oil", "Tea", "Tincture", "Bath", "Pillow sachets"],
    dosage: "1-2 teaspoons dried flowers for tea or 3-5 drops essential oil in diffuser",
    cautions: [
      "Essential oil not for internal use without professional guidance",
      "May cause skin irritation in sensitive individuals",
      "Can interact with certain medications",
      "Oral use may increase drowsiness",
      "Not studied extensively during pregnancy"
    ],
    categories: ["Sleep", "Nervine", "European", "Aromatic"]
  },
  {
    id: 238,
    name: "Chamomile",
    scientific_name: "Matricaria recutita",
    description: "A daisy-like plant with apple-scented flowers that have gentle calming and digestive-soothing properties.",
    benefits: [
      "Gently calms the nervous system",
      "Soothes digestive discomfort",
      "Has mild anti-inflammatory properties",
      "Traditionally used for children's sleep issues",
      "May help with anxiety"
    ],
    uses: ["Mild insomnia", "Digestive calm", "Anxiety", "Children's sleep support", "Skin conditions"],
    preparations: ["Tea", "Tincture", "Essential oil", "Bath", "Compress"],
    dosage: "1-2 teaspoons dried flowers for tea, 1-3 times daily or before bed",
    cautions: [
      "May cause allergic reactions in people sensitive to plants in the daisy family",
      "Can enhance effects of sedative medications",
      "May increase effects of blood thinners",
      "Avoid very large therapeutic doses during pregnancy",
      "May cause drowsiness in high doses"
    ],
    categories: ["Sleep", "Digestive", "European", "Gentle"]
  },
  {
    id: 239,
    name: "Hops",
    scientific_name: "Humulus lupulus",
    description: "A climbing plant whose female flowers contain bitter sedative compounds, traditionally used for sleep and brewing beer.",
    benefits: [
      "Has moderate sedative effects",
      "May increase sleep time",
      "Contains compounds that support GABA function",
      "Has bitter digestive properties",
      "Traditionally used for restlessness"
    ],
    uses: ["Insomnia", "Anxiety", "Restlessness", "Digestive support"],
    preparations: ["Tea", "Tincture", "Capsules", "Sleep pillow", "Extract"],
    dosage: "1 teaspoon dried strobiles for tea or 1-2ml tincture before bed",
    cautions: [
      "May worsen depression in sensitive individuals",
      "Can cause drowsiness",
      "Estrogenic effects - caution with hormone-sensitive conditions",
      "Avoid before driving",
      "Not recommended during pregnancy"
    ],
    categories: ["Sleep", "Nervine", "European", "Bitter"]
  },
  {
    id: 240,
    name: "Wild Lettuce",
    scientific_name: "Lactuca virosa",
    description: "A bitter plant whose milky sap has mild sedative and pain-relieving properties, traditionally used as a gentle opium substitute.",
    benefits: [
      "Has mild sedative effects",
      "May help with mild pain",
      "Supports relaxation",
      "Can help with restlessness",
      "Traditionally used for coughs"
    ],
    uses: ["Mild insomnia", "Pain management", "Anxiety", "Restlessness", "Cough"],
    preparations: ["Tincture", "Extract", "Tea", "Capsules", "Smoking (traditional)"],
    dosage: "1-2ml tincture or 2-4 grams dried leaf as tea before bed",
    cautions: [
      "White sap can irritate skin",
      "May enhance effects of sedative medications",
      "Not recommended during pregnancy",
      "Can cause drowsiness",
      "Not to be confused with garden lettuce"
    ],
    categories: ["Sleep", "Nervine", "European", "Mild Analgesic"]
  },
  {
    id: 241,
    name: "Blue Lotus",
    scientific_name: "Nymphaea caerulea",
    description: "A sacred water lily from ancient Egypt with mild psychoactive and sedative properties, traditionally used for relaxation and sleep.",
    benefits: [
      "Has mild sedative effects",
      "May induce a sense of relaxation",
      "Traditionally used for lucid dreaming",
      "Contains apomorphine which may help with libido",
      "Has been used in meditation practices"
    ],
    uses: ["Sleep support", "Relaxation", "Meditation aid", "Dream enhancement", "Traditional ceremonial uses"],
    preparations: ["Tea", "Tincture", "Smoking blend (traditional)", "Wine infusion (traditional)"],
    dosage: "0.5-1 gram dried flowers as tea or other preparation before bed",
    cautions: [
      "Mild psychoactive effects possible",
      "Legal status varies by country - check local regulations",
      "May enhance effects of other psychoactive substances",
      "Not recommended during pregnancy",
      "Avoid before driving or operating machinery"
    ],
    categories: ["Sleep", "Nervine", "Egyptian", "Sedative"]
  },
  {
    id: 272,
    name: "Mulungu",
    scientific_name: "Erythrina mulungu",
    description: "A South American tree whose bark has traditional use for anxiety, insomnia, and as a natural tranquilizer.",
    benefits: [
      "Has sedative and anxiolytic properties",
      "May help with persistent insomnia",
      "Can reduce anxiety and nervous tension",
      "Traditionally used for panic attacks",
      "May support healthy sleep architecture"
    ],
    uses: ["Insomnia", "Anxiety", "Nervous tension", "Sleep support", "Relaxation"],
    preparations: ["Tincture", "Capsules", "Decoction", "Extract"],
    dosage: "1-2ml tincture before bed or 500-1000mg capsules",
    cautions: [
      "May enhance effects of sedative medications",
      "Can cause drowsiness",
      "Not recommended during pregnancy",
      "May lower blood pressure",
      "Avoid before driving or operating machinery"
    ],
    categories: ["Sleep", "Nervine", "South American", "Anxiolytic"]
  },
  {
    id: 273,
    name: "Magnolia Bark",
    scientific_name: "Magnolia officinalis",
    description: "The bark of magnolia trees used in Traditional Chinese Medicine for sleep and anxiety, containing honokiol and magnolol.",
    benefits: [
      "Contains compounds that bind to GABA receptors",
      "Helps reduce anxiety without morning grogginess",
      "May improve sleep quality",
      "Has mild antidepressant effects",
      "Supports relaxation without strong sedation"
    ],
    uses: ["Sleep quality improvement", "Anxiety reduction", "Stress management", "Mild depression", "Relaxation"],
    preparations: ["Extract", "Tincture", "Capsules", "Traditional formulas"],
    dosage: "200-400mg standardized extract before bed or 1-2ml tincture",
    cautions: [
      "May enhance effects of sedative medications",
      "Use with caution if taking blood thinners",
      "Not well studied during pregnancy",
      "May affect hormone-sensitive conditions",
      "Some preparations may contain significant alcohol content"
    ],
    categories: ["Sleep", "Nervine", "Traditional Chinese", "Anxiolytic"]
  },
  {
    id: 274,
    name: "Ashwagandha",
    scientific_name: "Withania somnifera",
    description: "An adaptogenic herb from Ayurvedic medicine that helps the body respond to stress while supporting healthy sleep patterns.",
    benefits: [
      "Supports stress resilience",
      "Promotes deep, restful sleep without morning grogginess",
      "Has anxiolytic properties",
      "May support healthy thyroid function",
      "Helps balance the HPA axis (stress response system)"
    ],
    uses: ["Sleep support", "Stress management", "Anxiety", "Energy regulation", "Immune support"],
    preparations: ["Powder", "Capsules", "Tincture", "Traditional formulas", "Tea"],
    dosage: "500-1000mg powdered root or extract before bed",
    cautions: [
      "May increase thyroid hormone levels",
      "Not recommended with autoimmune thyroid conditions",
      "Can cause digestive upset in some individuals",
      "May interact with sedative medications",
      "Not recommended during pregnancy without professional guidance"
    ],
    categories: ["Sleep", "Adaptogenic", "Ayurvedic", "Nervine"]
  },
  {
    id: 275,
    name: "Ziziphus",
    scientific_name: "Ziziphus jujuba",
    description: "A Traditional Chinese Medicine herb used for insomnia characterized by excessive thinking, worry, and difficulty falling asleep.",
    benefits: [
      "Helps calm the mind and reduce overthinking",
      "Specifically for sleep difficulty related to mental restlessness",
      "May reduce time to fall asleep",
      "Traditionally used for night sweats",
      "Nourishes the heart and spirit in TCM terms"
    ],
    uses: ["Insomnia with racing thoughts", "Sleep onset issues", "Anxiety-related sleep problems", "Night sweats", "Dream-disturbed sleep"],
    preparations: ["Decoction", "Granules", "Capsules", "Traditional formulas"],
    dosage: "3-6g dried seed in decoction or 500mg capsules before bed",
    cautions: [
      "Best used as part of a formula in Traditional Chinese Medicine",
      "May cause digestive discomfort in some individuals",
      "Use with professional guidance for chronic insomnia",
      "May enhance effects of other sedatives",
      "Not well studied during pregnancy"
    ],
    categories: ["Sleep", "Traditional Chinese", "Nervine", "Cooling"]
  },
  {
    id: 276,
    name: "Jujube Seed",
    scientific_name: "Ziziphus jujuba (seed)",
    description: "The seed of the jujube fruit used in Traditional Chinese Medicine for insomnia, anxiety, and to nourish the heart.",
    benefits: [
      "Calms the spirit and mind",
      "May reduce anxiety and irritability",
      "Supports deeper sleep",
      "Traditionally used to stop excessive dreaming",
      "Considered nourishing and calming in TCM"
    ],
    uses: ["Insomnia", "Anxiety", "Irritability", "Dream-disturbed sleep", "Heart palpitations related to anxiety"],
    preparations: ["Powder", "Capsules", "Decoction", "Traditional formulas"],
    dosage: "3-10g dried seeds in decoction or 500mg capsules before bed",
    cautions: [
      "May enhance effects of sedative medications",
      "Best used under guidance of practitioner trained in TCM",
      "May cause digestive discomfort in some people",
      "Not well studied during pregnancy",
      "Potential for allergic reactions in sensitive individuals"
    ],
    categories: ["Sleep", "Traditional Chinese", "Heart", "Nervine"]
  }
];
