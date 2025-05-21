
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { loadStripe } from "@stripe/stripe-js";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { SupabaseEbook } from "@/integrations/supabase/models";
import { Link } from "react-router-dom";

// Initialize Stripe with the publishable key
const stripePromise = loadStripe("pk_live_51R2DTxLvWTChRVZPjvfohBHTziKSaX9ou8vOy35Ul5RVYMKVKe6aiGT6p3hkolrei5XxRCRBoSUJxIBxSzKsul2U00OCKwEz2t");

// Default placeholder image from Unsplash - herbal/botanical themed image
const placeholderImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=400";

interface Ebook {
  id: string;
  title: string;
  author?: string;
  description: string;
  price: number;
  category?: string;
  cover_url?: string;
  pages?: number;
  publish_date?: string;
  file_url?: string;
  created_at?: string;
  updated_at?: string;
  validCover?: boolean;
}

// Fetch the newest eBooks for the "Explore Our eBooks" section
const EbookStore = () => {
  const { toast } = useToast();
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching newest ebooks from Supabase...");
        const { data, error } = await supabase
          .from("ebooks")
          .select("*")
          .order('created_at', { ascending: false }) // Get the newest eBooks
          .limit(4);
        
        if (error) {
          console.error("Error fetching eBooks:", error);
          setError(`Failed to load ebooks: ${error.message}`);
          toast({
            title: "Error loading eBooks",
            description: "Could not load the eBooks from our database.",
            variant: "destructive",
          });
        } else {
          console.log("Ebooks fetched successfully:", data);
          // Map Supabase data structure to our Ebook interface
          const mappedEbooks: Ebook[] = data.map((item: SupabaseEbook) => {
            return {
              id: item.id,
              title: item.title,
              author: item.author || "Unknown Author",
              description: item.description,
              price: item.price,
              category: item.category || "General",
              cover_url: item.cover_url,
              pages: item.pages || 0,
              publish_date: item.publish_date || new Date().toISOString().split('T')[0],
              file_url: item.file_url,
              created_at: item.created_at,
              updated_at: item.updated_at
            };
          });

          // Filter ebooks to only include those with valid cover images
          const ebooksWithValidation = await Promise.all(
            mappedEbooks.map(async (ebook) => {
              // First check if the ebook has a cover_url specified
              if (ebook.cover_url) {
                return { ...ebook, validCover: true };
              }
              
              // Try to find a cover in the storage bucket by title
              try {
                const { data: titleData } = await supabase.storage
                  .from('ebook-covers')
                  .getPublicUrl(`/${ebook.title}.png`);
                  
                if (titleData.publicUrl) {
                  // Check if the URL actually returns an image (not a 404)
                  const response = await fetch(titleData.publicUrl, { method: 'HEAD' });
                  if (response.ok) {
                    return { ...ebook, cover_url: titleData.publicUrl, validCover: true };
                  }
                }
                
                // Try with encoded title name
                const encodedTitle = encodeURIComponent(ebook.title);
                const { data: encodedData } = await supabase.storage
                  .from('ebook-covers')
                  .getPublicUrl(`/${encodedTitle}.png`);
                  
                if (encodedData.publicUrl) {
                  // Check if the URL actually returns an image (not a 404)
                  const response = await fetch(encodedData.publicUrl, { method: 'HEAD' });
                  if (response.ok) {
                    return { ...ebook, cover_url: encodedData.publicUrl, validCover: true };
                  }
                }
                
                // Try by ID
                const { data: idData } = await supabase.storage
                  .from('ebook-covers')
                  .getPublicUrl(`${ebook.id}.jpg`);
                  
                if (idData.publicUrl) {
                  // Check if the URL actually returns an image (not a 404)
                  const response = await fetch(idData.publicUrl, { method: 'HEAD' });
                  if (response.ok) {
                    return { ...ebook, cover_url: idData.publicUrl, validCover: true };
                  }
                }
                
                // No valid cover found
                return { ...ebook, validCover: false };
              } catch (err) {
                console.error(`Error checking cover for ${ebook.title}:`, err);
                return { ...ebook, validCover: false };
              }
            })
          );
          
          // Only keep ebooks with valid covers
          const validEbooks = ebooksWithValidation.filter(ebook => ebook.validCover);
          setEbooks(validEbooks);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEbooks();
  }, [toast]);
  
  const handleEbookCheckout = async (bookTitle: string, priceId: string) => {
    try {
      // Check if user is authenticated
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      
      if (!user) {
        toast({
          title: "Authentication required",
          description: `Please sign in to purchase "${bookTitle}"`,
          variant: "default",
        });
        return;
      }
      
      const stripe = await stripePromise;
      if (!stripe) {
        toast({
          title: "Error initializing payment",
          description: "Could not connect to payment provider",
          variant: "destructive",
        });
        return;
      }
      
      // For now, just show a success message
      toast({
        title: "Coming Soon",
        description: `The "${bookTitle}" ebook will be available for purchase shortly!`,
        variant: "default",
      });
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout Failed",
        description: "There was an error processing your request.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="bg-green-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10 text-green-800 font-serif"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Newly Added eBooks
        </motion.h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 overflow-hidden">
                <Skeleton className="h-48 w-full mb-6" />
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-1/2 mb-5" />
                <Skeleton className="h-4 w-full mb-5" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-9 w-24 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : ebooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ebooks.map((book) => (
              <motion.div 
                key={book.id} 
                className="bg-white rounded-xl shadow-lg p-8 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <img
                  src={book.cover_url || placeholderImage}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mb-5 transform transition-transform hover:scale-105 duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = placeholderImage;
                  }}
                />
                <h3 className="text-xl font-semibold mb-2 text-green-700 font-serif">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{book.description.substring(0, 100)}...</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-700">${book.price.toFixed(2)}</span>
                  <Link to={`/ebooks/${book.id}`}>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-full"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <p className="text-gray-600">No eBooks available at the moment. Please check back later.</p>
          </div>
        )}
        
        <div className="mt-10 text-center">
          <Link
            to="/ebooks" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Browse All eBooks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EbookStore;
