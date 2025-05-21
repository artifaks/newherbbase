
import HerbCard from "@/components/HerbCard";
import { Button } from "@/components/ui/button";
import { Herb } from "@/data/types/herbs";
import { Link } from "react-router-dom";

interface HerbGridProps {
  herbs: Herb[];
  clearFilters: () => void;
}

const HerbGrid = ({ herbs, clearFilters }: HerbGridProps) => {
  if (herbs.length === 0) {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {herbs.map((herb, index) => {
        // Create a more unique key by combining id, name, and index
        const uniqueKey = `herb-${herb.id}-${herb.name.replace(/\s+/g, '-').toLowerCase()}-${index}`;
        return <HerbCard key={uniqueKey} herb={herb} />;
      })}
    </div>
  );
};

export default HerbGrid;
