
import { useState, useMemo } from "react";
import { Herb } from "@/data/types/herbs";

export const useHerbFiltering = (allHerbs: Herb[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Get all unique categories from herbs
  const categories = useMemo(() => {
    return [...new Set(allHerbs.flatMap(herb => herb.categories))].sort();
  }, [allHerbs]);
  
  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  // Clear all selected categories
  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  // Filter herbs based on search query and selected categories
  const filteredHerbs = useMemo(() => {
    return allHerbs.filter(herb => {
      // Search filtering
      const matchesSearch = 
        searchQuery === "" || 
        herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        herb.scientific_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        herb.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        herb.benefits.some(benefit => benefit.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Category filtering - changed from 'every' to 'some' to match any selected category
      const matchesCategories = 
        selectedCategories.length === 0 || 
        selectedCategories.some(category => herb.categories.includes(category));
      
      return matchesSearch && matchesCategories;
    });
  }, [allHerbs, searchQuery, selectedCategories]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategories,
    toggleCategory,
    clearFilters,
    filteredHerbs,
    categories
  };
};
