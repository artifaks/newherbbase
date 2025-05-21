
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Heart, Leaf } from "lucide-react";
import { herbGroups, getHerbGroup } from "@/utils/herbUtils";
import { Herb } from "@/data/types/herbs";
import HerbCard from "./HerbCard";

interface HerbGroupsProps {
  herbs: Herb[];
  clearFilters: () => void;
}

const HerbGroups = ({ herbs, clearFilters }: HerbGroupsProps) => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  
  // Function to toggle a group's expanded state
  const toggleGroup = (groupId: string) => {
    if (expandedGroups.includes(groupId)) {
      setExpandedGroups(expandedGroups.filter(id => id !== groupId));
    } else {
      setExpandedGroups([...expandedGroups, groupId]);
    }
  };
  
  // Functions to expand/collapse all groups
  const expandAll = () => {
    setExpandedGroups(herbGroups.map(group => group.id));
  };
  
  const collapseAll = () => {
    setExpandedGroups([]);
  };
  
  // Organize herbs into their respective groups
  const organizeHerbsByGroup = () => {
    const grouped: Record<string, Herb[]> = {};
    
    // Initialize groups
    herbGroups.forEach(group => {
      grouped[group.id] = [];
    });
    
    // Place herbs in their groups
    herbs.forEach(herb => {
      const group = getHerbGroup(herb.categories);
      grouped[group.id].push(herb);
    });
    
    return grouped;
  };
  
  const groupedHerbs = organizeHerbsByGroup();
  
  // Check if any herbs are available at all
  const hasHerbs = herbs.length > 0;
  
  if (!hasHerbs) {
    return (
      <div className="text-center py-12 bg-amber-50 rounded-lg border border-amber-100">
        <h3 className="text-xl font-medium text-amber-800">No herbs found matching your criteria</h3>
        <p className="mt-2 text-gray-600">Try adjusting your search or filters</p>
        <Button 
          variant="outline" 
          className="mt-4 border-amber-300 text-amber-700 hover:bg-amber-50"
          onClick={clearFilters}
        >
          Clear all filters
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={expandAll}
          className="flex items-center gap-1 border-amber-300 text-amber-700 hover:bg-amber-50"
        >
          <ChevronDown className="h-4 w-4" /> Expand All
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={collapseAll}
          className="flex items-center gap-1 border-amber-300 text-amber-700 hover:bg-amber-50"
        >
          <ChevronUp className="h-4 w-4" /> Collapse All
        </Button>
      </div>
      
      <Accordion 
        type="multiple" 
        value={expandedGroups} 
        onValueChange={setExpandedGroups}
        className="space-y-4"
      >
        {herbGroups.map(group => {
          const herbs = groupedHerbs[group.id];
          if (herbs.length === 0) return null;
          
          const Icon = group.icon;
          
          return (
            <AccordionItem 
              key={group.id} 
              value={group.id}
              className="border-0 transition-all duration-300 hover:shadow-sm"
            >
              <div className={`rounded-lg overflow-hidden shadow-sm transition-shadow duration-300 ${expandedGroups.includes(group.id) ? "shadow-md" : ""}`}>
                <AccordionTrigger 
                  className={`${group.color} text-white py-4 px-6 hover:no-underline transition-colors duration-200`}
                >
                  <div className="flex items-center gap-2 text-left">
                    <Icon className="h-5 w-5" />
                    <h3 className="text-lg font-medium">{group.name}</h3>
                    <span className="ml-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                      {herbs.length}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 pt-6 pb-4 px-4 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                    {herbs.map((herb, index) => {
                      // Create a more unique key by combining group id, herb id, name, and index
                      const uniqueKey = `${group.id}-herb-${herb.id}-${herb.name.replace(/\s+/g, '-').toLowerCase()}-${index}`;
                      return <HerbCard key={uniqueKey} herb={herb} />;
                    })}
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default HerbGroups;
