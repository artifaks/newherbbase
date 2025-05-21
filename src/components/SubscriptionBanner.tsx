
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import BannerLayout from "./BannerLayout";

// The ID of the free eBook offered with subscription
export const FREE_EBOOK_ID = "72dd4e8d-d133-47e8-84ed-567fa32e74e6";

const SubscriptionBanner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubscribe = () => {
    setIsLoading(true);
    
    // Simply navigate to the auth page
    navigate("/auth");
    
    setIsLoading(false);
  };

  return (
    <BannerLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-amber-800 sm:text-3xl flex items-center">
            <Sparkles className="h-6 w-6 mr-2 text-amber-600" />
            Unlock Full Access
          </h2>
          <p className="mt-2 text-lg text-amber-700">
            Subscribe for just $4.99/month to access our complete herb database and premium ebooks.
          </p>
          <div className="mt-3 flex items-center text-amber-700">
            <BookOpen className="h-5 w-5 mr-2" />
            <span className="font-medium">Plus: Get a FREE "Herbal Medicine Basics" eBook when you sign up today!</span>
          </div>
        </div>
        <div className="mt-5 flex md:mt-0 md:ml-4">
          <Button 
            className="bg-amber-600 hover:bg-amber-700 group transition-all duration-300 transform hover:-translate-y-1"
            onClick={handleSubscribe}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Subscribe & Get Free eBook"}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </BannerLayout>
  );
};

export default SubscriptionBanner;
