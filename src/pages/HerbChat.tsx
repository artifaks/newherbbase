
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import SubscriptionBanner from '@/components/SubscriptionBanner';
import ChatInterface from '@/components/chat/ChatInterface';
import WellnessBanner from '@/components/WellnessBanner';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const HerbChat = () => {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state for demonstration
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Herbal Wisdom Chat - Ask Questions About Medicinal Herbs"
        description="Have questions about medicinal herbs? Use our interactive chat to get instant answers from our extensive herb database. Learn about uses, benefits, and preparations."
        url="https://herbalwisdom.com/chat"
        canonical="https://herbalwisdom.com/chat"
        keywords={[
          'herb chat', 
          'herbal questions', 
          'medicinal herb information', 
          'herb database search', 
          'herb benefits',
          'herb preparations',
          'natural remedies chat'
        ]}
        breadcrumbs={[
          { name: 'Home', url: 'https://herbalwisdom.com' },
          { name: 'Herb Chat', url: 'https://herbalwisdom.com/chat' }
        ]}
      />
      <NavBar />
      
      <WellnessBanner />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-8 flex-grow">
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-amber-800">Herbal Wisdom Chat</h1>
          <p className="text-sm md:text-base text-gray-600">
            Ask questions about medicinal herbs and get instant answers from our herb database.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <LoadingSpinner size="lg" text="Loading chat interface..." />
          </div>
        ) : (
          <ChatInterface />
        )}
      </div>
      
      <SubscriptionBanner />
      <Footer />
    </div>
  );
};

export default HerbChat;
