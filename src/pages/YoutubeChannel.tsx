
import React, { useState } from 'react';
import { ExternalLink, Youtube } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import YouTubePlayer from '@/components/YouTubePlayer';

const CHANNEL_ID = "Wellnessisgolden";
const CHANNEL_URL = `https://www.youtube.com/@${CHANNEL_ID}`;

const YoutubeChannel: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubscribe = () => {
    window.open(`${CHANNEL_URL}?sub_confirmation=1`, '_blank');
    toast({
      title: "Thank you for subscribing!",
      description: "You'll now receive notifications about our latest herbal wisdom videos.",
    });
  };

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Wellness is Golden YouTube Channel - Natural Health Videos"
        description="Watch our educational videos about herbs, natural remedies, and holistic wellness on the Wellness is Golden YouTube channel."
        url="https://pureherbalwisdom.online/youtube"
        canonical="https://pureherbalwisdom.online/youtube"
        keywords={[
          'herbal videos', 
          'medicinal herbs youtube', 
          'natural remedy tutorials', 
          'herbal education', 
          'wellness is golden', 
          'herbal medicine videos', 
          'holistic health channel'
        ]}
      />
      <NavBar />
      
      {selectedVideo && (
        <YouTubePlayer 
          videoId={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
      
      <main className="flex-grow">
        <section className="bg-herbal-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <Youtube className="h-12 w-12 text-red-600 bg-white rounded-lg p-2 mr-3" />
              <h1 className="text-3xl md:text-4xl font-serif">Wellness is Golden</h1>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our collection of educational videos about herbal medicine, natural remedies, 
              and holistic approaches to health and wellness.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                onClick={handleSubscribe}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Subscribe to Our Channel
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-herbal-800"
                asChild
              >
                <a 
                  href={`${CHANNEL_URL}/videos`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit YouTube Channel <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-herbal-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">Our YouTube Channel</h2>
            
            <div className="aspect-video w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src={`https://www.youtube.com/embed?listType=user_uploads&list=${CHANNEL_ID}`} 
                title="Wellness is Golden YouTube Channel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="secondary" 
                size="lg"
                asChild
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                <a 
                  href={`${CHANNEL_URL}/videos`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View All Videos <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">Why Subscribe to Our Channel?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center p-6 bg-herbal-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-herbal-800">Educational Content</h3>
                <p className="text-gray-700">
                  Learn about medicinal herbs, their traditional uses, and how to incorporate them into your modern wellness routine.
                </p>
              </div>
              <div className="text-center p-6 bg-herbal-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-herbal-800">Practical Guidance</h3>
                <p className="text-gray-700">
                  Step-by-step tutorials on creating your own remedies, growing herbs, and using them effectively and safely.
                </p>
              </div>
              <div className="text-center p-6 bg-herbal-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-herbal-800">Expert Insights</h3>
                <p className="text-gray-700">
                  Our certified herbalists share their knowledge, clinical experience, and wisdom about plant medicine.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default YoutubeChannel;
