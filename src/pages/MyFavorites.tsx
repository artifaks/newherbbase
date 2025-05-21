
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import NavBar from "@/components/NavBar";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Define a simplified herb interface based on what we need
interface FavoriteHerb {
  id: number;
  name: string;
  scientific_name: string;
  description: string;
  image_url?: string;
}

const MyFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteHerb[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data: authData, error: authError } = await supabase.auth.getUser();
        if (authError || !authData?.user) {
          console.error("User not authenticated:", authError);
          setError("Please sign in to view your favorites.");
          setLoading(false);
          return;
        }

        const userId = authData.user.id;

        // First get the user's favorite herb IDs
        const { data: userFavoritesData, error: favoritesError } = await supabase
          .from('user_favorites')
          .select('herb_id')
          .eq('user_id', userId);

        if (favoritesError) {
          console.error("Error fetching favorites:", favoritesError);
          setError("Failed to load favorites: " + favoritesError.message);
          setLoading(false);
          return;
        }

        // If user has no favorites, return early
        if (!userFavoritesData || userFavoritesData.length === 0) {
          setFavorites([]);
          setLoading(false);
          return;
        }

        // Extract herb IDs from the favorites data
        const herbIds = userFavoritesData.map(fav => fav.herb_id);

        // Then fetch the herb details separately using the IDs
        const { data: herbsData, error: herbsError } = await supabase
          .from('herbs')
          .select('id, name, scientific_name, description, image_url')
          .in('id', herbIds);

        if (herbsError) {
          console.error("Error fetching herb details:", herbsError);
          setError("Failed to load herb details: " + herbsError.message);
          setLoading(false);
          return;
        }

        // Map the herbs data to our simplified format
        const formattedFavorites: FavoriteHerb[] = herbsData?.map(herb => ({
          id: herb.id,
          name: herb.name,
          scientific_name: herb.scientific_name,
          description: herb.description,
          image_url: herb.image_url
        })) || [];
        
        setFavorites(formattedFavorites);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (herbId: number) => {
    try {
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData?.user) {
        console.error("User not authenticated:", authError);
        toast({
          title: "Authentication required",
          description: "Please sign in to remove favorites.",
          variant: "destructive",
        });
        return;
      }

      const userId = authData.user.id;

      // Remove the herb from the user's favorites
      const { error: deleteError } = await supabase
        .from('user_favorites')
        .delete()
        .eq('user_id', userId)
        .eq('herb_id', herbId);

      if (deleteError) {
        console.error("Error removing favorite:", deleteError);
        toast({
          title: "Error removing favorite",
          description: "Failed to remove the herb from your favorites.",
          variant: "destructive",
        });
        return;
      }

      // Update the local state to reflect the removal
      setFavorites(favorites.filter(herb => herb.id !== herbId));

      toast({
        title: "Removed from favorites",
        description: "The herb has been removed from your favorites.",
      });
    } catch (err) {
      console.error("Unexpected error:", err);
      toast({
        title: "Unexpected error",
        description: "An unexpected error occurred while removing the favorite.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      <NavBar />

      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">My Favorite Herbs</h1>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <CardHeader>
                  <CardTitle><Skeleton className="h-6 w-full" /></CardTitle>
                  <CardDescription><Skeleton className="h-4 w-3/4" /></CardDescription>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-24 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200">
            <h2 className="text-2xl font-semibold text-red-700 mb-2">Error</h2>
            <p className="text-red-600">{error}</p>
            {error.includes("sign in") && (
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                <Link to="/login">Sign In</Link>
              </Button>
            )}
          </div>
        ) : favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((herb) => (
              <Card key={herb.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <CardHeader>
                  <CardTitle>{herb.name}</CardTitle>
                  <CardDescription>{herb.scientific_name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{herb.description}</p>
                </CardContent>
                <div className="flex justify-between items-center p-4">
                  <Link to={`/herbs/${encodeURIComponent(herb.name)}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Button 
                    onClick={() => handleRemoveFavorite(Number(herb.id))} 
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No favorite herbs yet. Add some from the herb database!</p>
            <Link to="/herbs">
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                Explore Herb Database
              </Button>
            </Link>
          </div>
        )}
      </div>

      <footer className="bg-green-800 text-white py-8 mt-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Herbal Harmony. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MyFavorites;
