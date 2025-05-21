
import React, { useState } from "react";
import PreparationMethod from "./PreparationMethod";

// Preparation methods with step-by-step instructions
const preparationSteps = {
  tea: [
    "Start with 1-2 teaspoons of dried herb",
    "Heat water to just below boiling (about 200°F)",
    "Pour hot water over herbs in a cup or teapot",
    "Cover and steep for 5-10 minutes",
    "Strain and enjoy, adding honey if desired"
  ],
  tincture: [
    "Fill a clean jar 1/3 to 1/2 with dried herbs",
    "Pour 80-proof alcohol to cover herbs completely",
    "Seal jar tightly and store in a cool, dark place",
    "Shake the jar daily for 4-6 weeks",
    "Strain through cheesecloth and store in dark bottles"
  ],
  capsule: [
    "Grind dried herbs into a fine powder",
    "Fill empty vegetable or gelatin capsules with the powder",
    "Store in a cool, dry place in an airtight container",
    "Take with water as directed by a healthcare professional",
    "Typically 1-2 capsules, 1-3 times daily"
  ],
  extract: [
    "Combine herbs with a mixture of alcohol and water",
    "Heat mixture at low temperature (never boiling)",
    "Maintain heat for several hours to extract compounds",
    "Strain and reduce liquid through gentle evaporation",
    "Store concentrated extract in dark glass containers"
  ],
  powder: [
    "Thoroughly dry the herb material",
    "Grind into a fine powder using a grinder",
    "Sift to ensure consistent texture",
    "Store in airtight containers away from light",
    "Use 1/4 to 1/2 teaspoon mixed in water or food"
  ]
};

// Helper function to get preparation steps based on preparation type
export const getPreparationSteps = (preparation: string) => {
  const prepLower = preparation.toLowerCase();
  
  if (prepLower.includes("tea")) return preparationSteps.tea;
  if (prepLower.includes("tincture")) return preparationSteps.tincture;
  if (prepLower.includes("capsule")) return preparationSteps.capsule;
  if (prepLower.includes("extract")) return preparationSteps.extract;
  if (prepLower.includes("powder")) return preparationSteps.powder;
  
  // Default empty steps
  return [];
};

interface PreparationsSectionProps {
  preparations: string[];
}

const PreparationsSection = ({ preparations }: PreparationsSectionProps) => {
  const [showingPrepSteps, setShowingPrepSteps] = useState<string | null>(null);

  const togglePrepSteps = (method: string) => {
    if (showingPrepSteps === method) {
      setShowingPrepSteps(null);
    } else {
      setShowingPrepSteps(method);
    }
  };

  return (
    <div className="mt-4">
      <h4 className="font-medium text-sm mb-3 text-amber-700">Common Preparations</h4>
      <div className="grid grid-cols-1 gap-2">
        {preparations.map((method, index) => {
          const steps = getPreparationSteps(method);
          const isShowingSteps = showingPrepSteps === method;
          return (
            <PreparationMethod
              key={index}
              method={method}
              steps={steps}
              isShowingSteps={isShowingSteps}
              togglePrepSteps={() => togglePrepSteps(method)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PreparationsSection;
