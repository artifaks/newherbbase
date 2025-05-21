
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Herb } from "@/data/types/herbs";
import BenefitsChart from "./BenefitsChart";
import HerbCardHeader from "./herb-card/HerbCardHeader";
import CategoryDisplay from "./herb-card/CategoryDisplay";
import PreparationsSection from "./herb-card/PreparationsSection";
import ComplementaryHerbs from "./herb-card/ComplementaryHerbs";
import CautionsSection from "./herb-card/CautionsSection";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

interface HerbCardProps {
  herb: Herb;
}

const HerbCard = ({ herb }: HerbCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);

  const toggleFavorite = () => {
    // In a real app, this would also update a database or local storage
    setIsFavorite(!isFavorite);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleFullDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  // Get herb initials for monogram
  const getMonogram = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  // Get shape class based on herb category
  const getShapeClass = () => {
    if (herb.categories.includes("Immune")) return "rounded-full";
    if (herb.categories.includes("Digestive")) return "rounded-lg";
    if (herb.categories.includes("Sleep") || herb.categories.includes("Nervine")) return "rounded-3xl";
    if (herb.categories.includes("Adaptogenic")) return "rounded-md";
    if (herb.categories.includes("Anti-inflammatory")) return "rounded-lg";
    return "rounded-xl";
  };

  const monogram = getMonogram(herb.name);
  const shapeClass = getShapeClass();
  const primaryCategory = herb.categories[0] || "Herb";

  // Generate mock benefit scores for visualization
  const getBenefitScores = () => {
    // In a real app, these would come from real data
    const benefits = [];
    
    if (herb.categories.includes("Immune")) {
      benefits.push({ name: "Immune Support", value: 85 });
    }
    if (herb.categories.includes("Digestive")) {
      benefits.push({ name: "Digestive Health", value: 90 });
    }
    if (herb.categories.includes("Sleep")) {
      benefits.push({ name: "Sleep Quality", value: 75 });
    }
    if (herb.categories.includes("Anti-inflammatory")) {
      benefits.push({ name: "Reduces Inflammation", value: 80 });
    }
    if (herb.categories.includes("Nervine")) {
      benefits.push({ name: "Calming Effect", value: 70 });
    }
    if (herb.categories.includes("Circulatory")) {
      benefits.push({ name: "Improves Circulation", value: 85 });
    }
    
    // Add some default benefits based on herb.benefits if available
    const defaultBenefits = herb.benefits?.slice(0, 3).map((benefit, index) => {
      return { name: benefit, value: 65 + (index * 10) };
    }) || [];
    
    return [...benefits, ...defaultBenefits].slice(0, 4); // Limit to 4 benefits
  };

  // Mock complementary herbs data
  const getComplementaryHerbs = () => {
    // In a real app, this would be actual data from a database
    const allHerbs = ["Ginger", "Turmeric", "Echinacea", "Lavender", "Chamomile", "Valerian", "Ashwagandha"];
    const thisHerbIndex = allHerbs.findIndex(h => h.toLowerCase() === herb.name.toLowerCase());
    
    // Remove current herb from the list
    if (thisHerbIndex !== -1) {
      allHerbs.splice(thisHerbIndex, 1);
    }
    
    // Select 2 random herbs as complementary
    const selected = [];
    for (let i = 0; i < 2 && allHerbs.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * allHerbs.length);
      selected.push({
        name: allHerbs[randomIndex],
        reason: `Enhances the ${["effectiveness", "potency", "benefits"][Math.floor(Math.random() * 3)]} of ${herb.name}`
      });
      allHerbs.splice(randomIndex, 1);
    }
    
    return selected;
  };

  const benefitScores = getBenefitScores();
  const complementaryHerbs = getComplementaryHerbs();

  if (showFullDetails) {
    return (
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-herbal-100 relative">
        <div className="absolute right-2 top-2 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/80 hover:bg-white"
            onClick={toggleFullDetails}
          >
            <X size={18} />
          </Button>
        </div>
        
        <CardHeader className="p-0">
          <HerbCardHeader
            name={herb.name}
            scientificName={herb.scientific_name}
            categories={herb.categories}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            monogram={monogram}
            shapeClass={shapeClass}
          />
        </CardHeader>
        
        <CardContent className="p-4">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2 text-herbal-700">Description</h3>
                <p className="text-gray-600">{herb.description}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2 text-herbal-700">Health Benefits</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {herb.benefits?.map((benefit, index) => (
                    <li key={index} className="mb-1">{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2 text-herbal-700">Benefits Visualization</h3>
                <BenefitsChart benefits={benefitScores} />
              </div>
              
              <ComplementaryHerbs 
                complementaryHerbs={complementaryHerbs} 
                currentHerbName={herb.name} 
              />
              
              <PreparationsSection preparations={herb.preparations} />
              
              <CautionsSection cautions={herb.cautions} />
              
              {herb.history && (
                <div>
                  <h3 className="font-medium text-lg mb-2 text-herbal-700">Historical Use</h3>
                  <p className="text-gray-600">{herb.history}</p>
                </div>
              )}
              
              {herb.medicinal_uses && herb.medicinal_uses.length > 0 && (
                <div>
                  <h3 className="font-medium text-lg mb-2 text-herbal-700">Medicinal Uses</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {herb.medicinal_uses.map((use, index) => (
                      <li key={index} className="mb-1">{use}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        
        <CardFooter className="p-4 bg-gray-50 flex justify-between items-center">
          <div>
            <Badge className="bg-amber-100 text-amber-800 border border-amber-200 font-medium">
              {primaryCategory}
            </Badge>
          </div>
          <Button
            variant="link"
            className="text-green-600 p-0"
            asChild
          >
            <Link to={`/herbs/${encodeURIComponent(herb.name)}`}>View Full Page</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border border-herbal-100">
      <CardHeader className="p-0">
        <div onClick={() => {/* No navigation on card header click */}}>
          <HerbCardHeader
            name={herb.name}
            scientificName={herb.scientific_name}
            categories={herb.categories}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            monogram={monogram}
            shapeClass={shapeClass}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{herb.description}</p>
        
        <CategoryDisplay categories={herb.categories} />
        
        {/* Expanded content */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="font-medium text-sm mb-3 text-amber-700">Benefits Visualization</h4>
            <BenefitsChart benefits={benefitScores} />
            
            <ComplementaryHerbs 
              complementaryHerbs={complementaryHerbs} 
              currentHerbName={herb.name} 
            />
            
            <PreparationsSection preparations={herb.preparations} />
            
            <CautionsSection cautions={herb.cautions} />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div>
          <Badge className="bg-amber-100 text-amber-800 border border-amber-200 font-medium">
            {primaryCategory}
          </Badge>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="link" 
            className="text-herbal-600 p-0 flex items-center gap-1"
            onClick={toggleExpanded}
          >
            {expanded ? (
              <>Show Less <ChevronUp size={14} /></>
            ) : (
              <>View Details <ChevronDown size={14} /></>
            )}
          </Button>
          <Button
            variant="link"
            className="text-green-600 p-0"
            onClick={toggleFullDetails}
          >
            View Full Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HerbCard;
