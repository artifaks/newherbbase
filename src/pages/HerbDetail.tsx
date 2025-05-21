
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import HerbHeader from '@/components/herb-detail/HerbHeader';
import HerbTabs from '@/components/herb-detail/HerbTabs';
import LoadingState from '@/components/herb-detail/LoadingState';
import ErrorState from '@/components/herb-detail/ErrorState';
import NotFoundState from '@/components/herb-detail/NotFoundState';
import { useHerbDetail } from '@/hooks/useHerbDetail';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';
import analyticsService from '@/utils/analyticsService';

const HerbDetail = () => {
  const { name } = useParams<{ name: string }>();
  const { herb, loading, error, isFavorite, toggleFavorite } = useHerbDetail(name || '');
  const isMobile = useIsMobile();
  const baseUrl = "https://pureherbalwisdom.online";
  
  useEffect(() => {
    if (herb && !loading && !error) {
      // Track herb view in analytics
      analyticsService.trackHerbView(herb.name);
    }
  }, [herb, loading, error]);
  
  if (loading) {
    return <LoadingState />;
  }
  
  if (error) {
    return <ErrorState errorMessage={error} />;
  }
  
  if (!herb) {
    return <NotFoundState />;
  }

  // Create herb URL for sharing
  const herbUrl = `${baseUrl}/herbs/${herb.name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${herb.name} - Benefits, Uses & Preparations | Pure Herbal Wisdom`}
        description={`Learn about ${herb.name}'s benefits, medicinal properties, traditional uses, and how to prepare it safely. Comprehensive guide to this powerful medicinal herb.`}
        url={herbUrl}
        type="article"
        imageUrl={herb.image_url || `${baseUrl}/herbs/default.png`}
        keywords={[herb.name.toLowerCase(), 'medicinal herb', 'herbal remedy', 'natural medicine', ...herb.categories]}
        breadcrumbs={[
          { name: 'Home', url: baseUrl },
          { name: 'Herbs Database', url: `${baseUrl}/herbs` },
          { name: herb.name, url: herbUrl }
        ]}
      />

      <NavBar />

      <main className="flex-grow bg-herbal-50/30">
        <div className="container mx-auto px-4 py-6">
          <HerbHeader 
            name={herb.name}
            scientificName={herb.scientific_name}
            categories={herb.categories}
            imageUrl={herb.image_url || '/herbs/default.jpg'}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
          
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <HerbTabs herb={herb} isMobile={isMobile} />
            
            <div className="md:w-1/3">
              <ScrollArea className={`${isMobile ? 'max-h-[400px]' : 'max-h-[550px]'} pr-4`}>
                <div className="space-y-6">
                  {/* Social Sharing */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-medium text-herbal-800 mb-3">Share This Herb</h3>
                    <SocialShareButtons 
                      contentType="herb"
                      contentId={herb.name}
                      title={`${herb.name} - Benefits and Uses | Pure Herbal Wisdom`}
                      description={`Learn about the amazing benefits of ${herb.name} and how to use it properly.`}
                      url={herbUrl}
                    />
                  </div>
                  
                  {/* Newsletter Signup */}
                  <NewsletterSignup 
                    variant="compact"
                    location="herb-detail" 
                    title={`Learn More About ${herb.name}`}
                    description="Sign up for weekly tips on herbal remedies and special offers."
                  />
                  
                  {/* Additional herb information sections would go here */}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HerbDetail;
