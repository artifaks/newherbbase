import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Book, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { FREE_EBOOK_ID } from "./SubscriptionBanner";
import { useCheckFreeEbook } from "@/utils/subscriptionUtils";

interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string | null;
  fileUrl: string | null;
}

interface UserEbook {
  id: string;
  ebook: Ebook;
  is_free: boolean;
  purchase_date: string;
}

// Raw data as it comes from the database
interface UserEbookRaw {
  id: string;
  is_free: boolean | string; // Could be a boolean or string from DB
  purchase_date: string;
  ebook: {
    id: string;
    title: string;
    author: string;
    description: string;
    cover_url: string;
    file_url: string;
  };
}

const MyEbooks = () => {
  const [userEbooks, setUserEbooks] = useState<UserEbook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const { hasFreeEbook } = useCheckFreeEbook();

  useEffect(() => {
    const fetchUserEbooks = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get the current user
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          setError("You must be logged in to view your ebooks");
          return;
        }

        // Fetch user's ebooks
        const { data, error: fetchError } = await supabase
          .from('user_ebooks')
          .select(`
            id,
            is_free,
            purchase_date,
            ebook:ebooks (
              id,
              title,
              author,
              description,
              cover_url,
              file_url
            )
          `)
          .eq('user_id', user.id);

        if (fetchError) {
          console.error("Error fetching user ebooks:", fetchError);
          setError("Failed to load your ebooks");
          toast({
            title: "Error",
            description: "Could not load your ebooks.",
            variant: "destructive",
          });
          return;
        }

        // Map the data to our UserEbook interface
        const mappedEbooks = (data as UserEbookRaw[]).map(item => ({
          id: item.id,
          ebook: {
            id: item.ebook.id,
            title: item.ebook.title,
            author: item.ebook.author || "Unknown Author",
            description: item.ebook.description || "",
            coverUrl: item.ebook.cover_url,
            fileUrl: item.ebook.file_url
          },
          is_free: typeof item.is_free === 'string' ? item.is_free === 'true' : item.is_free,
          purchase_date: item.purchase_date
        }));

        setUserEbooks(mappedEbooks);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
        toast({
          title: "Error",
          description: "An unexpected error occurred while loading your ebooks.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserEbooks();
  }, [toast]);

  const handleDownload = (fileUrl: string, title: string) => {
    if (!fileUrl) {
      toast({
        title: "Download unavailable",
        description: "This eBook is not available for download at this time.",
        variant: "destructive",
      });
      return;
    }
    
    // Create a download link
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${title.replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: "Your eBook is now downloading.",
      variant: "default",
    });
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            {[1, 2, 3].map(idx => (
              <div key={idx} className="h-80 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">{error}</h2>
        <p className="text-gray-600 mb-6">Please try again later.</p>
        <Link to="/ebooks">
          <Button className="bg-green-600 hover:bg-green-700">Browse Available eBooks</Button>
        </Link>
      </div>
    );
  }

  if (userEbooks.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">No eBooks Found</h2>
        <p className="text-gray-600 mb-6">You don't have any eBooks in your library yet.</p>
        <Link to="/ebooks">
          <Button className="bg-green-600 hover:bg-green-700">Browse Available eBooks</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2">My eBook Library</h2>
      <p className="text-gray-600 mb-6">Access your purchased and free eBooks anytime.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userEbooks.map((item) => (
          <Card key={item.id} className="overflow-hidden flex flex-col h-full">
            <div className="aspect-[2/3] relative overflow-hidden">
              <img 
                src={item.ebook.coverUrl || "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//ashwagandha.jpg"} 
                alt={item.ebook.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {item.is_free && (
                <span className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                  Free with Subscription
                </span>
              )}
            </div>
            
            <CardHeader>
              <CardTitle>{item.ebook.title}</CardTitle>
              <CardDescription>By {item.ebook.author || "Herbal Wisdom"}</CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.ebook.description || "No description available."}
              </p>
            </CardContent>
            
            <CardFooter>
              <Button 
                onClick={() => handleDownload(item.ebook.fileUrl || "", item.ebook.title)}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
              >
                <Download className="h-4 w-4" /> Download eBook
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyEbooks;
