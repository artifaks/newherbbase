import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import SubscriptionBanner from "@/components/SubscriptionBanner";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, BookOpen, Share2, Download, Clock, User, Gift } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SupabaseEbook } from "@/integrations/supabase/models";
import { useToast } from "@/hooks/use-toast";
import { FREE_EBOOK_ID } from "@/components/SubscriptionBanner";

// Extending the SupabaseEbook type with optional fields
interface Ebook {
  id: string;
  title: string;
  description: string;
  price: number;
  author: string;
  category: string;
  coverUrl: string | null;
  fileUrl: string | null;
  pages: number;
  publishDate: string | null;
}

const EbookDetail = () => {
  const navigate = useNavigate();
  const { ebookId } = useParams<{ ebookId: string }>();
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { toast } = useToast();
  const [isFreeEbook, setIsFreeEbook] = useState(false);
  
  // Default placeholder image
  const placeholderImage = "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&h=400";

  // Fetch ebook data
  useEffect(() => {
    const fetchEbook = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error: supabaseError } = await supabase
          .from("ebooks")
          .select("id, title, author, description, price, cover_url, file_url, publish_date, pages, category")
          .eq("id", ebookId)
          .single();
          
        if (supabaseError) {
          console.error("Error fetching ebook:", supabaseError);
          console.error("Error details:", {
            message: supabaseError.message,
            details: supabaseError.details,
            hint: supabaseError.hint,
            code: supabaseError.code
          });
          setError("Failed to load ebook details");
          toast({
            title: "Error",
            description: "Could not load the ebook details.",
            variant: "destructive",
          });
          return;
        }
        
        if (!data) {
          setError("Ebook not found");
          toast({
            title: "Not found",
            description: "The requested ebook could not be found.",
            variant: "destructive",
          });
          return;
        }

        // Map the data to our Ebook interface
        const mappedEbook: Ebook = {
          id: data.id,
          title: data.title,
          author: data.author || "Unknown Author",
          description: data.description || "",
          price: data.price || 0,
          coverUrl: data.cover_url,
          fileUrl: data.file_url,
          pages: data.pages || 0,
          publishDate: data.publish_date,
          category: data.category || "General"
        };

        setEbook(mappedEbook);
        setCoverUrl(data.cover_url);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
        toast({
          title: "Error",
          description: "An unexpected error occurred while loading the ebook.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    if (ebookId) {
      fetchEbook();
    }
  }, [ebookId, toast]);

  const handlePurchase = async () => {
    if (!ebook) return;
    
    try {
      setCheckoutLoading(true);
      
      toast({
        title: "Processing payment",
        description: "Please wait while we set up your checkout...",
      });
      
      const response = await supabase.functions.invoke('create-checkout', {
        body: { ebookId: ebook.id }
      });
      
      // Check for errors in the response
      if (response.error) {
        console.error('Checkout error:', response.error);
        toast({
          title: "Checkout Error",
          description: "Failed to create checkout session. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      const data = response.data;
      
      // Redirect to Stripe checkout
      if (data?.url) {
        // Open in a new tab instead of redirecting the current page
        window.open(data.url, '_blank');
        
        toast({
          title: "Checkout Ready",
          description: "Checkout has opened in a new tab. Please complete your purchase there.",
          duration: 5000,
        });
      } else {
        toast({
          title: "Checkout Error",
          description: "No checkout URL returned. Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error('Failed to process checkout:', err);
      toast({
        title: "Payment Error",
        description: "There was a problem processing your payment request.",
        variant: "destructive",
      });
    } finally {
      setCheckoutLoading(false);
    }
  };

  const handleSubscribe = () => {
    navigate("/auth");
    toast({
      title: "Subscribe to get this eBook for free",
      description: "Sign up for a subscription to get this eBook for free!",
      duration: 5000,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: ebook?.title,
        text: ebook?.description,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "The link has been copied to your clipboard",
        duration: 3000,
      });
    }
  };

  // Choose the best available image
  const displayImage = () => {
    if (imageError) {
      return placeholderImage;
    } else if (coverUrl) {
      return coverUrl;
    } else if (ebook?.coverUrl) {
      return ebook.coverUrl;
    } else {
      return placeholderImage;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/ebooks" className="inline-flex items-center text-green-700 hover:text-green-900 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Ebooks
          </Link>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Skeleton className="h-96 w-full rounded-lg" />
              </div>
              <div className="md:col-span-2">
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/2 mb-6" />
                <Skeleton className="h-40 w-full mb-8" />
                <div className="space-y-4">
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-red-600">{error}</h3>
              <p className="mt-2 text-gray-500">Please try again later or select a different eBook</p>
            </div>
          ) : ebook ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={displayImage()}
                    alt={ebook.title}
                    className="w-full h-auto object-cover"
                    onError={() => {
                      console.log(`Error loading detail image for: ${ebook.title}`);
                      setImageError(true);
                    }}
                  />
                  
                  {isFreeEbook && (
                    <div className="bg-amber-100 text-amber-800 p-3 text-center font-medium border-t border-amber-200">
                      <Gift className="inline-block mr-1 h-4 w-4" />
                      Free with subscription
                    </div>
                  )}
                </div>
                
                <div className="mt-6 space-y-4">
                  {isFreeEbook ? (
                    <Button 
                      onClick={handleSubscribe}
                      className="w-full bg-amber-600 hover:bg-amber-700"
                    >
                      Subscribe to Get Free
                    </Button>
                  ) : (
                    <Button 
                      onClick={handlePurchase}
                      className="w-full bg-green-700 hover:bg-green-800"
                      disabled={checkoutLoading}
                    >
                      {checkoutLoading ? 
                        "Processing..." : 
                        `Purchase for $${ebook.price.toFixed(2)}`}
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-green-300 text-green-700"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{ebook.title}</h1>
                
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
                  {ebook.author && (
                    <span className="flex items-center mr-4 mb-2">
                      <User className="w-4 h-4 mr-1" />
                      {ebook.author}
                    </span>
                  )}
                  
                  {ebook.category && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-4 mb-2">
                      {ebook.category}
                    </span>
                  )}
                  
                  {ebook.pages && ebook.pages > 0 && (
                    <span className="flex items-center mr-4 mb-2">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {ebook.pages} pages
                    </span>
                  )}
                  
                  {ebook.publishDate && (
                    <span className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      Published: {new Date(ebook.publishDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
                
                <div className="prose max-w-none mb-8">
                  <h2 className="text-xl font-semibold mb-4">About this eBook</h2>
                  <p className="text-gray-700 whitespace-pre-line">{ebook.description}</p>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">What you'll get</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Download className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
                      {isFreeEbook ? (
                        <span>Instant download after subscription</span>
                      ) : (
                        <span>Instant download after purchase</span>
                      )}
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>PDF format compatible with all devices</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
                      <span>Lifetime access to updated versions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">eBook not found</h3>
              <p className="mt-2 text-gray-500">The eBook you're looking for doesn't exist or has been removed</p>
            </div>
          )}
        </div>
      </main>

      <SubscriptionBanner />
      
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Herbal Wisdom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EbookDetail;
