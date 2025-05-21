import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import EbookCard from "@/components/EbookCard";
import SearchBar from "@/components/SearchBar";
import SubscriptionBanner from "@/components/SubscriptionBanner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { SupabaseEbook } from "@/integrations/supabase/models";
import { useToast } from "@/hooks/use-toast";

// Define a consistent interface for ebooks
interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  category: string;
  coverUrl: string | null;
  fileUrl: string | null;
  publishDate: string | null;
  pages: number;
  validCover: boolean;
}

const Ebooks = () => {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching ebooks from Supabase...");
        const { data, error } = await supabase
          .from("ebooks")
          .select("id, title, author, description, price, cover_url, file_url, publish_date, pages, category")
          .order('title', { ascending: true });
        
        if (error) {
          console.error("Error fetching eBooks:", error);
          console.error("Error details:", {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          setError(`Failed to load ebooks: ${error.message}`);
          toast({
            title: "Error loading ebooks",
            description: "Could not load the ebooks from our database.",
            variant: "destructive",
          });
          return;
        }

        console.log("Successfully fetched ebooks:", data);
        
        if (!data || data.length === 0) {
          console.log("No ebooks found in the database");
          setError("No ebooks available at the moment.");
          toast({
            title: "No ebooks found",
            description: "There are no ebooks available in our database.",
            variant: "destructive",
          });
          return;
        }

        // Map Supabase data structure to our Ebook interface
        const mappedEbooks = data.map(ebook => ({
          id: ebook.id,
          title: ebook.title,
          author: ebook.author || "Unknown Author",
          description: ebook.description || "",
          price: ebook.price || 0,
          coverUrl: ebook.cover_url || null,
          fileUrl: ebook.file_url || null,
          publishDate: ebook.publish_date || null,
          pages: ebook.pages || 0,
          category: ebook.category || "General",
          validCover: true // Set to true by default since we're not validating covers anymore
        }));

        console.log("Mapped ebooks:", mappedEbooks);
        setEbooks(mappedEbooks);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(mappedEbooks
          .map((ebook: Ebook) => ebook.category)
          .filter(Boolean))] as string[];
        setCategories(uniqueCategories.sort());
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
        toast({
          title: "Error",
          description: "An unexpected error occurred while loading ebooks.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEbooks();
  }, [toast]);

  // Filter ebooks based on search and category
  const filteredEbooks = ebooks.filter(ebook => {
    const matchesSearch = 
      searchQuery === "" || 
      ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ebook.author && ebook.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (ebook.description && ebook.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === null || 
      ebook.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">E-Books</h1>
          
          <div className="mb-8">
            <SearchBar
              value={searchQuery}
              onSearch={setSearchQuery}
              placeholder="Search ebooks..."
            />
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-full mb-4" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-red-600">{error}</h3>
              <p className="mt-2 text-gray-500">Please try again later</p>
            </div>
          ) : filteredEbooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEbooks.map(ebook => (
                <EbookCard
                  key={ebook.id}
                  id={ebook.id}
                  title={ebook.title}
                  description={ebook.description}
                  imageUrl={ebook.coverUrl || undefined}
                  author={ebook.author}
                  category={ebook.category}
                  price={ebook.price}
                  link={`/ebooks/${ebook.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No ebooks found matching your criteria</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>

      <SubscriptionBanner />
    </div>
  );
};

export default Ebooks;
