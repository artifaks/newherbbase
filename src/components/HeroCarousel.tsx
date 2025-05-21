
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { fetchHerbsFromStorage, HerbData } from "@/data/fetchHerbs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const [herbs, setHerbs] = useState<HerbData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadHerbs() {
      try {
        setIsLoading(true);
        const herbsData = await fetchHerbsFromStorage();
        setHerbs(herbsData);
      } catch (error) {
        console.error("Error loading herbs:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadHerbs();
  }, []);

  if (isLoading) {
    return (
      <div className="relative h-screen w-full bg-green-800/50 flex items-center justify-center">
        <div className="text-white text-xl">Loading herb collection...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="h-full"
      >
        {herbs.map((herb) => (
          <SwiperSlide key={herb.id}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${herb.image_url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-400/20"></div>
              <motion.div
                className="relative z-10 text-white text-center px-6 max-w-4xl"
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
                {herb.scientific_name && (
                  <motion.p 
                    className="text-sm text-white/80 italic mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    {herb.scientific_name}
                  </motion.p>
                )}
                <motion.a
                  href="#herbs"
                  className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition inline-block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Herbs
                </motion.a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom navigation buttons */}
      <div className="swiper-button-prev absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white cursor-pointer">
        <ChevronLeft size={24} />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white cursor-pointer">
        <ChevronRight size={24} />
      </div>
    </div>
  );
}
