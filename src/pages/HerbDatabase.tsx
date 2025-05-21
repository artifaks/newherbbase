
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import SubscriptionBanner from "@/components/SubscriptionBanner";
import { herbs, initializeHerbs } from "@/data/herbs";

// Import refactored components
import WellnessBanner from "@/components/WellnessBanner";
import HerbDatabaseHeader from "@/components/HerbDatabaseHeader";
import HerbFilters from "@/components/HerbFilters";
import ActiveFilters from "@/components/ActiveFilters";
import ResultsCount from "@/components/ResultsCount";
import HerbGrid from "@/components/HerbGrid";
import HerbGroups from "@/components/HerbGroups";
import { useHerbFiltering } from "@/components/useHerbFiltering";
import { Grid3X3, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

const HerbDatabase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "groups">("grid");

  // Use the custom hook for herb filtering
  const {
    searchQuery,
    setSearchQuery,
    selectedCategories,
    toggleCategory,
    clearFilters,
    filteredHerbs,
    categories
  } = useHerbFiltering(herbs);

  useEffect(() => {
    // Initialize herbs from Supabase when the component mounts
    const loadHerbs = async () => {
      try {
        console.log("HerbDatabase: Loading herbs from Supabase");
        await initializeHerbs();
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading herbs:", err);
        setError("Failed to load herbs from the database");
        setIsLoading(false);
      }
    };
    
    loadHerbs();
  }, []);

  // Validate herbs data
  if (!herbs || !Array.isArray(herbs)) {
    console.error("Herbs data is not available or not an array:", herbs);
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Data Error</h2>
            <p className="text-gray-700">Unable to load herb database. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-amber-600 text-xl animate-pulse">Loading herbs database...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Error</h2>
            <p className="text-gray-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Toggle between grid and grouped view
  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "groups" : "grid");
    console.log("View mode toggled to:", viewMode === "grid" ? "groups" : "grid");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <WellnessBanner />
      
      <HerbDatabaseHeader 
        onSearch={setSearchQuery} 
        searchQuery={searchQuery} 
      />

      <main className="flex-grow bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium text-amber-700">Browse Herbs</h2>
            <div>
              <Button 
                onClick={toggleViewMode}
                variant="outline"
                className="px-4 py-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-md hover:bg-amber-100 transition-colors flex items-center gap-2"
              >
                {viewMode === "grid" ? (
                  <>
                    <LayoutGrid className="h-4 w-4" />
                    <span>Switch to Grouped View</span>
                  </>
                ) : (
                  <>
                    <Grid3X3 className="h-4 w-4" />
                    <span>Switch to Grid View</span>
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* Category filters */}
          <HerbFilters 
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            clearFilters={clearFilters}
          />

          {/* Active filters */}
          <ActiveFilters 
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
          />

          {/* Results count */}
          <ResultsCount 
            filteredCount={filteredHerbs.length}
            totalCount={herbs.length}
            selectedCategories={selectedCategories}
          />

          {/* Herb display - toggle between grid and groups */}
          <div className="animate-fade-in">
            {viewMode === "grid" ? (
              <HerbGrid 
                herbs={filteredHerbs}
                clearFilters={clearFilters}
              />
            ) : (
              <HerbGroups
                herbs={filteredHerbs}
                clearFilters={clearFilters}
              />
            )}
          </div>
        </div>
      </main>

      <SubscriptionBanner />
    </div>
  );
};

export default HerbDatabase;
