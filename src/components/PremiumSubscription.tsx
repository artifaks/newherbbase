import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { loadStripe } from "@stripe/stripe-js";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen } from "lucide-react";
import { FREE_EBOOK_ID } from "./SubscriptionBanner";
import { grantFreeEbook } from "@/utils/subscriptionUtils";

// Initialize Stripe - using the publishable key
const stripePromise = loadStripe("pk_live_51R2DTxLvWTChRVZPjvfohBHTziKSaX9ou8vOy35Ul5RVYMKVKe6aiGT6p3hkolrei5XxRCRBoSUJxIBxSzKsul2U00OCKwEz2t");

// Subscription price ID
const SUBSCRIPTION_PRICE_ID = "price_1R2Nv5LvWTChRVZPNM1J9qr8"; 

const PremiumSubscription = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [freeEbook, setFreeEbook] = useState<any>(null);
  const navigate = useNavigate();
  
  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      setIsAuthenticated(!!data.user);
    };
    
    checkAuth();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === 'SIGNED_IN') {
          setIsAuthenticated(true);
        } else if (event === 'SIGNED_OUT') {
          setIsAuthenticated(false);
        }
      }
    );

    // Fetch the free eBook information
    const fetchFreeEbook = async () => {
      try {
        const { data, error } = await supabase
          .from("ebooks")
          .select("*")
          .eq("id", FREE_EBOOK_ID)
          .single();
          
        if (error) {
          console.error("Error fetching free eBook:", error);
        } else if (data) {
          setFreeEbook(data);
        }
      } catch (err) {
        console.error("Failed to fetch free eBook:", err);
      }
    };
    
    fetchFreeEbook();
    
    return () => subscription.unsubscribe();
  }, []);

  const handleSubscribe = async () => {
    setIsLoading(true);
    try {
      // Check if user is authenticated
      if (!isAuthenticated) {
        toast({
          title: "Authentication required",
          description: "Please sign in to subscribe to our premium membership",
          variant: "default",
        });
        
        // Navigate to auth page
        navigate("/auth");
        setIsLoading(false);
        return;
      }
      
      // Grant the free eBook when the user subscribes
      const ebookGranted = await grantFreeEbook();
      if (ebookGranted) {
        toast({
          title: "Free eBook Added!",
          description: "Your free 'Herbal Medicine Basics' eBook has been added to your account.",
          variant: "default",
        });
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
      
      // When backend is implemented, use window.open for the checkout URL:
      // const response = await fetch("/api/create-checkout-session", { ... });
      // const session = await response.json();
      // window.open(session.url, '_blank');
      
      // For now, just show a success message
      toast({
        title: "Subscription Activated!",
        description: "Your subscription has been activated and your free eBook is now available in your account.",
        variant: "default",
      });
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: "There was an error processing your request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 px-6">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-green-800">Become a Premium Member</h2>
        <p className="text-lg mb-6 text-gray-700">
          Unlock full access to our herb library, receive exclusive herbal wellness tips,
          and get a free herbal eBook when you subscribe — all for just $4.99/month.
        </p>
        
        {freeEbook && (
          <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-xl font-bold text-amber-800">
                Special Offer: FREE eBook with Signup!
              </h3>
            </div>
            <p className="text-amber-700 mb-3">
              Subscribe today and immediately receive our "{freeEbook.title}" eBook 
              (value: ${freeEbook.price.toFixed(2)}) absolutely free!
            </p>
          </div>
        )}
        
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-6 px-8 rounded-full"
          onClick={handleSubscribe}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Subscribe & Get Free eBook"}
        </Button>
        
        {freeEbook && (
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <img
                src={freeEbook.cover_url || "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//ashwagandha.jpg"}
                alt="Free Herbal eBook"
                className="w-full max-w-xs rounded-xl shadow-lg"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-green-700">{freeEbook.title}</h4>
                <p className="text-md text-gray-700 mb-2">{freeEbook.author || "Herbal Wisdom"}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>{freeEbook.description ? freeEbook.description.substring(0, 150) + "..." : ""}</p>
                </div>
                <p className="text-sm italic mt-3">Your free gift with subscription!</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              New subscribers get immediate access to their free eBook after signing up.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default PremiumSubscription;
