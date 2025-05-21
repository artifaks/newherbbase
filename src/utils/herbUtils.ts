import { Leaf, Sprout, Brain, Heart, Shield, Activity, Coffee, Pill, Atom, Wind, UserRound } from "lucide-react";

// Map categories to colors with more vibrant, distinct colors - updated for new grouping
export const categoryColors: Record<string, string> = {
  "Immune": "bg-emerald-100 border-emerald-300 text-emerald-800",
  "Respiratory": "bg-sky-100 border-sky-300 text-sky-800",
  "Native American": "bg-amber-100 border-amber-300 text-amber-800",
  "Anti-inflammatory": "bg-rose-100 border-rose-300 text-rose-800",
  "Antioxidant": "bg-violet-100 border-violet-300 text-violet-800",
  "Ayurvedic": "bg-orange-100 border-orange-300 text-orange-800",
  "Nervine": "bg-indigo-100 border-indigo-300 text-indigo-800",
  "Aromatic": "bg-pink-100 border-pink-300 text-pink-800",
  "Sleep": "bg-purple-100 border-purple-300 text-purple-800",
  "Mediterranean": "bg-teal-100 border-teal-300 text-teal-800",
  "Digestive": "bg-green-100 border-green-300 text-green-800",
  "Circulatory": "bg-red-100 border-red-300 text-red-800",
  "European": "bg-blue-100 border-blue-300 text-blue-800",
  "Liver": "bg-yellow-100 border-yellow-300 text-yellow-800",
  "Detoxifying": "bg-green-100 border-green-300 text-green-800",
  "Adaptogenic": "bg-cyan-100 border-cyan-300 text-cyan-800",
  "Women's Health": "bg-pink-100 border-pink-300 text-pink-800",
  "Men's Health": "bg-blue-100 border-blue-300 text-blue-800",
  "Cardiovascular": "bg-red-100 border-red-300 text-red-800",
  "Brain": "bg-purple-100 border-purple-300 text-purple-800",
  "Herbal Tea": "bg-amber-100 border-amber-300 text-amber-800",
  "Urinary": "bg-teal-100 border-teal-300 text-teal-800",
  "Skin": "bg-pink-100 border-pink-300 text-pink-800",
  "Culinary": "bg-amber-100 border-amber-300 text-amber-800",
};

// Map categories to icons (still used for filtering but not in the main card display)
export const getCategoryIcon = (categories: string[]) => {
  if (categories.includes("Digestive")) return Sprout;
  if (categories.includes("Sleep") || categories.includes("Nervine") || categories.includes("Brain")) return Brain;
  if (categories.includes("Immune")) return Shield;
  if (categories.includes("Anti-inflammatory")) return Activity;
  if (categories.includes("Ayurvedic") || categories.includes("Native American")) return Leaf;
  if (categories.includes("Aromatic")) return Leaf;
  if (categories.includes("Antioxidant") || categories.includes("Detoxifying")) return Atom;
  if (categories.includes("Circulatory") || categories.includes("Cardiovascular")) return Heart;
  if (categories.includes("Adaptogenic") || categories.includes("Energy")) return Coffee;
  if (categories.includes("European")) return Pill;
  if (categories.includes("Liver")) return Atom;
  if (categories.includes("Respiratory")) return Wind;
  if (categories.includes("Women's Health")) return UserRound;
  if (categories.includes("Men's Health")) return UserRound;
  if (categories.includes("Herbal Tea")) return Coffee;
  if (categories.includes("Urinary") || categories.includes("Skin")) return Pill;
  if (categories.includes("Mediterranean") || categories.includes("Culinary")) return Leaf;
  
  // Default icon
  return Leaf;
};

// Get the primary color for a herb based on its first category
export const getHerbColor = (categories: string[]) => {
  if (!categories.length) return "bg-herbal-100 border-herbal-200 text-herbal-800";
  
  const primaryCategory = categories[0];
  
  // Get color from map or return default
  return categoryColors[primaryCategory] || "bg-herbal-100 border-herbal-200 text-herbal-800";
};

// Get a more vibrant header color based on the primary herb category
export const getHeaderColor = (categories: string[]) => {
  if (!categories.length) return "bg-herbal-200 border-herbal-300";
  
  const primaryCategory = categories[0];
  const colorClass = categoryColors[primaryCategory];
  
  // Make the header color more vibrant for better visual appeal
  if (colorClass) {
    // Extract the color family (e.g., 'emerald' from 'bg-emerald-100')
    const matches = colorClass.match(/bg-([a-z]+)-\d+/);
    if (matches && matches[1]) {
      return `bg-${matches[1]}-200 border-${matches[1]}-300`;
    }
  }
  
  return "bg-herbal-200 border-herbal-300";
};

// Categories used for herb grouping - order matters for display
export const herbGroups = [
  {
    id: "heart",
    name: "Herbs for Heart Health",
    icon: Heart,
    color: "bg-red-700",
    categories: ["Cardiovascular", "Circulatory"]
  },
  {
    id: "digestive",
    name: "Digestive Support Herbs",
    icon: Sprout,
    color: "bg-green-700",
    categories: ["Digestive", "Liver"]
  },
  {
    id: "mens",
    name: "Men's Wellness",
    icon: UserRound,
    color: "bg-blue-700",
    categories: ["Men's Health"]
  },
  {
    id: "womens",
    name: "Women's Health",
    icon: UserRound,
    color: "bg-pink-700",
    categories: ["Women's Health"]
  },
  {
    id: "brain",
    name: "Brain & Cognitive Health",
    icon: Brain,
    color: "bg-purple-700",
    categories: ["Nervine", "Sleep", "Brain"]
  },
  {
    id: "tea",
    name: "Herbal Teas",
    icon: Coffee,
    color: "bg-amber-700",
    categories: ["Herbal Tea"]
  },
  {
    id: "immune",
    name: "Immune Support",
    icon: Shield,
    color: "bg-emerald-700",
    categories: ["Immune", "Antioxidant"]
  },
  {
    id: "respiratory",
    name: "Respiratory System",
    icon: Wind,
    color: "bg-sky-700",
    categories: ["Respiratory"]
  },
  {
    id: "skin",
    name: "Skin & External Use",
    icon: Leaf,
    color: "bg-pink-700",
    categories: ["Skin"]
  },
  {
    id: "urinary",
    name: "Urinary System Support",
    icon: Pill,
    color: "bg-teal-700",
    categories: ["Urinary"]
  },
  {
    id: "mediterranean",
    name: "Mediterranean Herbs",
    icon: Leaf,
    color: "bg-teal-700",
    categories: ["Mediterranean", "Culinary"]
  },
  {
    id: "other",
    name: "Other Medicinal Herbs",
    icon: Leaf,
    color: "bg-gray-700",
    categories: ["Anti-inflammatory", "Adaptogenic", "Medicinal"]
  }
];

// Get the correct group for a herb based on its categories
export const getHerbGroup = (herbCategories: string[]) => {
  for (const group of herbGroups) {
    for (const category of herbCategories) {
      if (group.categories.includes(category)) {
        return group;
      }
    }
  }
  // Default to "Other" if no match
  return herbGroups[herbGroups.length - 1];
};
