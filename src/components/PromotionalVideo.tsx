import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Droplet, Eye, Heart, Microscope, Zap, Wind, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mediterraneanHerbs } from "@/data/herbs";
import SEO from "@/components/SEO";
import YouTubePlayer from "@/components/YouTubePlayer";

const PromotionalVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState("");
  
  const featuredHerbs = [
    {
      name: "Olive Leaf",
      benefit: "Powerful antioxidant that protects skin from damage",
      detailedBenefits: [
        "Contains oleuropein that fights free radicals",
        "Supports healthy blood pressure levels",
        "Has natural antimicrobial properties"
      ],
      traditionalUse: "Used in Mediterranean folk medicine for centuries to treat fevers and infections",
      modernResearch: "Studies show potential in supporting immune function and cardiovascular health",
      image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//Olive%20Leaf.jpg",
      icon: <Leaf className="text-green-600 h-5 w-5" />,
      id: 307,
      category: "skin",
      videoId: "vkNNIrADrB8" // YouTube video ID for Olive Leaf
    },
    {
      name: "Cypress",
      benefit: "Reduces appearance of broken capillaries",
      detailedBenefits: [
        "Astringent properties tighten and tone skin", 
        "Improves circulation in small blood vessels",
        "Provides antioxidant protection"
      ],
      traditionalUse: "Traditionally used to treat varicose veins and hemorrhoids",
      modernResearch: "Clinical studies suggest benefits for microcirculation and tissue healing",
      image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//Cypress.jpeg",
      icon: <Droplet className="text-blue-600 h-5 w-5" />,
      id: 310,
      category: "skin",
      videoId: "hp5y3nAEqQA" // YouTube video ID for Cypress
    },
    {
      name: "Rosemary",
      benefit: "Improves memory and concentration",
      detailedBenefits: [
        "Contains compounds that increase cerebral blood flow",
        "Provides neuroprotective benefits",
        "Enhances mental alertness"
      ],
      traditionalUse: "Historically used to improve memory and relieve headaches",
      modernResearch: "Research indicates potential benefits for cognitive function and brain health",
      image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//Rosemary.jpg",
      icon: <Eye className="text-purple-600 h-5 w-5" />,
      id: 200,
      category: "general",
      videoId: "L-bTFAYRWVA" // YouTube video ID for Rosemary
    },
    {
      name: "Myrtle",
      benefit: "Contains antimicrobial properties for skin",
      detailedBenefits: [
        "Rich in myrtucommulones with antibacterial effects",
        "Helps regulate sebum production",
        "Soothes inflammatory skin conditions"
      ],
      traditionalUse: "Used since ancient times to treat skin infections and respiratory issues",
      modernResearch: "Recent studies confirm its efficacy against certain bacterial strains",
      image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//Myrtle%20.jpg",
      icon: <Microscope className="text-teal-600 h-5 w-5" />,
      id: 308,
      category: "skin",
      videoId: "qP-Aw9OksgA" // YouTube video ID for Myrtle
    },
    {
      name: "Lavender",
      benefit: "Promotes relaxation and reduces anxiety",
      detailedBenefits: [
        "Contains linalool that calms the nervous system",
        "Helps improve sleep quality", 
        "Reduces stress hormone levels"
      ],
      traditionalUse: "Traditionally used to treat insomnia, anxiety, and headaches",
      modernResearch: "Clinical studies support its use for stress reduction and sleep improvement",
      image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//Lavender.jpg",
      icon: <Heart className="text-pink-600 h-5 w-5" />,
      id: 207,
      category: "general",
      videoId: "qP-Aw9OksgA" // YouTube video ID for Lavender
    },
    {
      name: "Thyme",
      benefit: "Powerful antibacterial for respiratory health",
      detailedBenefits: [
        "Contains thymol with strong antimicrobial properties",
        "Helps clear respiratory infections",
        "Acts as a natural expectorant"
      ],
      traditionalUse: "Historically used to treat coughs, bronchitis and respiratory infections",
      modernResearch: "Studies confirm its effectiveness against respiratory pathogens",
      image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//thyme.jpg",
      icon: <Wind className="text-indigo-600 h-5 w-5" />,
      id: 311,
      category: "respiratory",
      videoId: "Lsz9xwrdxTY" // YouTube video ID for Thyme
    },
    {
      name: "Sage",
      benefit: "Natural remedy for excessive sweating and hot flashes",
      detailedBenefits: [
        "Contains compounds that reduce perspiration",
        "Helps balance hormones during menopause",
        "Provides antioxidant protection"
      ],
      traditionalUse: "Traditionally used to reduce sweating, hot flashes, and digestive issues",
      modernResearch: "Clinical studies show effectiveness in reducing menopausal symptoms",
      image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//sage.jpg",
      icon: <Flame className="text-orange-600 h-5 w-5" />,
      id: 312,
      category: "general",
      videoId: "pyJS1sZBS_I" // YouTube video ID for Sage
    },
    {
      name: "Oregano",
      benefit: "Powerful immune booster with antimicrobial properties",
      detailedBenefits: [
        "Contains carvacrol and thymol with antiviral effects",
        "Helps fight bacterial infections",
        "Provides antioxidant protection"
      ],
      traditionalUse: "Used in folk medicine to treat respiratory and digestive infections",
      modernResearch: "Studies show potent antibacterial action even against resistant strains",
      image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//oregano.jpg",
      icon: <Zap className="text-yellow-600 h-5 w-5" />,
      id: 313,
      category: "immune",
      videoId: "M2I-RgWPE1s" // Updated YouTube video ID for Oregano
    }
  ];

  const handleOpenVideo = (videoId) => {
    setVideoId(videoId);
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SEO
        title="8 Mediterranean Herbs Your Doctor Never Told You About - Herbal Wisdom"
        description="Discover the ancient healing secrets of Mediterranean herbs that modern medicine has overlooked. Learn how these powerful plants can transform your health naturally."
        type="article"
      />
      
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-4">
          8 Mediterranean Herbs Your Doctor Never Told You About
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          These powerful herbs have been used for thousands of years in traditional Mediterranean medicine, but modern healthcare has almost forgotten them.
        </p>
      </motion.div>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, staggerChildren: 0.1 }}
      >
        {featuredHerbs.map((herb, index) => (
          <motion.div
            key={herb.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <div className="relative h-40">
              <img
                src={herb.image}
                alt={herb.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Herb+Image";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-green-800/70 text-white py-2 px-3 flex items-center gap-2">
                {herb.icon}
                <span className="font-medium">{herb.name}</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-green-700 mb-2">{herb.benefit}</p>
              <ul className="text-xs text-gray-600 mb-3 list-disc ml-4 space-y-1">
                {herb.detailedBenefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic mb-1">
                  <span className="font-semibold">Traditional Use:</span> {herb.traditionalUse}
                </p>
                <p className="text-xs text-gray-500 italic">
                  <span className="font-semibold">Modern Research:</span> {herb.modernResearch}
                </p>
              </div>
              {herb.videoId ? (
                <button 
                  onClick={() => handleOpenVideo(herb.videoId)}
                  className="text-green-700 font-medium text-sm mt-3 inline-flex items-center hover:underline"
                >
                  Watch Video
                  <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              ) : (
                <Link 
                  to={`/herbs/${herb.name}`}
                  className="text-green-700 font-medium text-sm mt-3 inline-flex items-center hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button 
          asChild
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg rounded-full group"
        >
          <Link to="/herbs?category=mediterranean">
            Explore All Mediterranean Herbs
            <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        
        <p className="mt-8 text-gray-500 max-w-xl mx-auto text-sm">
          *These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </motion.div>

      {showVideo && (
        <YouTubePlayer videoId={videoId} onClose={handleCloseVideo} />
      )}
    </div>
  );
};

export default PromotionalVideo;
