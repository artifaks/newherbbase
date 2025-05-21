
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, Download, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BUNDLE_PRICE = 9.99;
const BUNDLE_IMAGE_URL = "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/wellnessbundle//3eBooks.png";
const STRIPE_PRICE_ID = "price_1RPj0GDy5nLog29F7yrylI1B";

const WellnessBundle = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      // Check if user is authenticated
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to purchase this bundle",
          variant: "destructive",
        });
        
        // Redirect to auth page or show sign-in modal
        window.location.href = "/auth?redirect=/";
        return;
      }
      
      // Create a checkout session with Stripe using our edge function
      const { data: checkoutData, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          bundleId: "wellness-bundle",
          priceId: STRIPE_PRICE_ID
        }
      });
      
      if (error) {
        console.error("Checkout error:", error);
        throw new Error(error.message || "Failed to create checkout session");
      }
      
      if (checkoutData?.url) {
        console.log("Redirecting to Stripe checkout:", checkoutData.url);
        // Redirect to Stripe checkout
        window.location.href = checkoutData.url;
      } else {
        console.error("Invalid checkout response:", checkoutData);
        throw new Error("Invalid response from checkout service");
      }
    } catch (error) {
      console.error("Purchase error:", error);
      toast({
        title: "Purchase Failed",
        description: "There was an error processing your purchase. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-br from-green-50 to-amber-50 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/2">
          <motion.img
            src={BUNDLE_IMAGE_URL}
            alt="Wellness eBook Bundle - 3 eBooks"
            className="rounded-lg shadow-lg w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>
        
        <div className="md:w-1/2">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800">
              Special Offer: Complete Wellness Bundle
            </h2>
            
            <div className="flex items-center gap-2 my-3">
              <span className="text-2xl md:text-3xl font-bold text-green-700">${BUNDLE_PRICE.toFixed(2)}</span>
              <span className="text-lg text-gray-500 line-through">$29.97</span>
              <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded-md text-sm font-medium">
                Save 67%
              </span>
            </div>
            
            <p className="text-lg text-gray-700">
              Get our complete collection of wellness guides in one convenient bundle. 
              Unlock the secrets of herbal remedies, natural health practices, and holistic wellness.
            </p>
            
            <div className="space-y-2 mt-4">
              <div className="flex items-start gap-2">
                <BookOpen className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">3 comprehensive eBooks with over 200 pages of expert knowledge</p>
              </div>
              <div className="flex items-start gap-2">
                <Download className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Instant digital access - download immediately after purchase</p>
              </div>
            </div>
            
            <Button
              onClick={handlePurchase}
              disabled={isLoading}
              size="lg"
              className="mt-6 bg-green-700 hover:bg-green-800 text-white px-8 py-6 h-auto text-lg rounded-full group w-full md:w-auto"
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now - ${BUNDLE_PRICE.toFixed(2)}
                </>
              )}
            </Button>
            
            <p className="text-sm text-gray-500 mt-2">
              *Secure payment. Instant digital delivery. No subscription required.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WellnessBundle;
