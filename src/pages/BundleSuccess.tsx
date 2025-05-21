
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import NavBarWithEbooks from '@/components/NavBarWithEbooks';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Download, Check } from "lucide-react";

const BundleSuccess = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [downloading, setDownloading] = useState(false);
  
  // Parse the URL search params to get the session ID
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('session_id');
  
  useEffect(() => {
    if (sessionId) {
      console.log("Purchase successful with session ID:", sessionId);
      toast({
        title: "Purchase Successful!",
        description: "Your Wellness Bundle is ready to download.",
        variant: "default",
      });
    } else {
      console.log("No session ID found in URL");
    }
  }, [sessionId, toast]);
  
  const handleDownload = () => {
    setDownloading(true);
    console.log("Starting download process...");
    
    // Direct download link
    const bundleUrl = "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/wellnessbundle//WellnessBundle.zip";
    
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = bundleUrl;
    link.download = 'WellnessBundle.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Set downloading to false after a delay
    setTimeout(() => {
      setDownloading(false);
      toast({
        title: "Download Started",
        description: "Your files should be downloading now.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Purchase Successful - Wellness Bundle"
        description="Thank you for purchasing the Wellness Bundle from Herbal Wisdom"
        type="website"
      />
      <NavBarWithEbooks />
      
      <div className="flex-grow bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold font-serif text-green-800 mb-4">
              Thank You For Your Purchase!
            </h1>
            
            <p className="text-lg text-gray-700 mb-6">
              Your wellness journey begins now. Your bundle includes 3 comprehensive eBooks 
              to guide you toward natural health and wellbeing.
            </p>
            
            <Button
              onClick={handleDownload}
              disabled={downloading}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 h-auto text-lg rounded-full"
            >
              {downloading ? (
                "Preparing Download..."
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download Your Bundle Now
                </>
              )}
            </Button>
            
            <p className="text-sm text-gray-500 mt-6">
              Having trouble? Contact our support at support@herbalwisdom.com for assistance.
            </p>
          </div>
          
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-amber-800 mb-3">What's Inside Your Bundle</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                <span>The Complete Guide to Herbal Remedies - 80+ pages of herbal wisdom</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                <span>Natural Healing Protocols - Comprehensive wellness routines</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                <span>Mediterranean Herbs & Remedies - Traditional wisdom from the Mediterranean region</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BundleSuccess;
