
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import HerbGroups from '@/components/HerbGroups';
import HerbOfTheDay from '@/components/HerbOfTheDay';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';
import SubscriptionBanner from '@/components/SubscriptionBanner';
import NewsletterSignup from '@/components/NewsletterSignup';
import PromotionalVideo from '@/components/PromotionalVideo';
import WellnessBundle from '@/components/WellnessBundle';
import { allHerbs } from '@/data/herbs';
import { Herb } from '@/data/types/herbs';

export default function Index() {
  const [herbs, setHerbs] = useState<Herb[]>(allHerbs);
  
  const clearFilters = () => {
    setHerbs(allHerbs);
  };

  return (
    <>
      <SEO />
      <HeroSection />
      <PromotionalVideo />
      <WellnessBundle />
      <HerbOfTheDay />
      <HerbGroups herbs={herbs} clearFilters={clearFilters} />
      <SubscriptionBanner />
      <FeaturedBlogs />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
}
