
import { Sparkles } from "lucide-react";
import BannerLayout from "./BannerLayout";

const WellnessBanner = () => {
  return (
    <BannerLayout 
      gradient="bg-gradient-to-r from-amber-100 to-yellow-200" 
      borderColor="border-amber-300"
      className="py-3"
    >
      <div className="flex items-center justify-center">
        <Sparkles className="h-5 w-5 text-amber-600 mr-2" />
        <p className="text-amber-800 font-medium">
          Herbal Harmony - Discover nature's treasures for your health
        </p>
      </div>
    </BannerLayout>
  );
};

export default WellnessBanner;
