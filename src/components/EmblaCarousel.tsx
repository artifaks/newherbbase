
import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const herbImages = [
  {
    name: "Ginger",
    description: "Supports digestion and reduces nausea.",
    url: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//ginger.jpg",
  },
  {
    name: "Holy Basil",
    description: "Promotes mental clarity and respiratory health.",
    url: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//holy-basil.jpg",
  },
  {
    name: "Ashwagandha",
    description: "Adaptogen that reduces stress and boosts energy.",
    url: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//ashwagandha.jpg",
  },
  {
    name: "Turmeric",
    description: "Anti-inflammatory herb with powerful antioxidant effects.",
    url: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//turmeric.jpg",
  },
];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-screen w-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {herbImages.map((herb, index) => (
            <div
              className="flex-shrink-0 min-w-full h-full relative"
              key={index}
            >
              <div 
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${herb.url})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-400/20"></div>
                <motion.div
                  className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    {herb.name}
                  </motion.h1>
                  <motion.p 
                    className="text-lg md:text-xl mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {herb.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#herbs"
                      className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition inline-block"
                    >
                      Browse Herbs
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute z-10 flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white/20 backdrop-blur-sm border-white/10 hover:bg-white/30 text-white rounded-full"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Previous slide</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white/20 backdrop-blur-sm border-white/10 hover:bg-white/30 text-white rounded-full"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {herbImages.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
