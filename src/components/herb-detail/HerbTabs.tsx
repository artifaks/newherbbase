
import React, { useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Herb } from '@/data/types/herbs';
import BenefitsSection from './BenefitsSection';
import UsesSection from './UsesSection';
import PreparationsSection from './PreparationsSection';
import DosageSection from './DosageSection';
import CautionsSection from './CautionsSection';
import HistorySection from './HistorySection';
import Section from './Section';
import { Badge } from '@/components/ui/badge';
import { Leaf, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import analyticsService from '@/utils/analyticsService';
import SocialShareButtons from '@/components/SocialShareButtons';

interface HerbTabsProps {
  herb: Herb;
  isMobile?: boolean;
}

const HerbTabs: React.FC<HerbTabsProps> = ({ herb, isMobile }) => {
  const trackTabView = (tab: string) => {
    analyticsService.trackEvent({
      action: 'view_tab',
      category: 'herb',
      label: `${herb.name}:${tab}`
    });
  };
  
  useEffect(() => {
    // Track initial tab view
    trackTabView('overview');
  }, [herb.name]);

  return (
    <div className="md:w-2/3 p-6">
      <Tabs defaultValue="overview" className="w-full" onValueChange={trackTabView}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="medicinal">Medicinal</TabsTrigger>
          <TabsTrigger value="preparation">Preparation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <ScrollArea className={`${isMobile ? 'h-[400px]' : 'h-[550px]'} pr-4 rounded-md`}>
            <Section title="Description">
              <p className="text-gray-700 leading-relaxed">{herb.description}</p>
            </Section>

            <HistorySection history={herb.history} />
            <BenefitsSection benefits={herb.benefits} />
            
            <Section title="Key Properties" icon={<Leaf className="h-5 w-5 text-green-700" />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {herb.medicinal_properties && herb.medicinal_properties.length > 0 ? (
                  herb.medicinal_properties.map((property, index) => (
                    <Badge key={index} className="bg-green-100 text-green-800 px-3 py-1 text-sm">
                      {property}
                    </Badge>
                  ))
                ) : (
                  <p className="text-gray-600 italic">No specific properties listed</p>
                )}
              </div>
            </Section>
            
            {/* Social Share section in overview tab */}
            <Section title="Share This Information">
              <p className="text-gray-600 mb-3 text-sm">
                Know someone who could benefit from learning about {herb.name}?
              </p>
              <SocialShareButtons 
                size="sm" 
                contentType="herb" 
                contentId={herb.name} 
                className="justify-start"
              />
            </Section>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="medicinal" className="space-y-4">
          <ScrollArea className={`${isMobile ? 'h-[400px]' : 'h-[550px]'} pr-4 rounded-md`}>
            <UsesSection uses={herb.uses} />

            {herb.traditional_uses && herb.traditional_uses.length > 0 && (
              <Section title="Traditional Uses" icon={<BookOpen className="h-5 w-5 text-amber-700" />}>
                <ul className="list-disc pl-5 text-gray-700">
                  {herb.traditional_uses.map((use, index) => (
                    <li key={index} className="mb-2">{use}</li>
                  ))}
                </ul>
              </Section>
            )}

            <CautionsSection 
              cautions={herb?.cautions || []} 
              title="Safety Considerations" 
              icon="alert-triangle"
            />
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="preparation" className="space-y-4">
          <ScrollArea className={`${isMobile ? 'h-[400px]' : 'h-[550px]'} pr-4 rounded-md`}>
            <PreparationsSection preparations={herb.preparations} />
            <DosageSection dosage={herb.dosage} />

            <Section title="Complementary Herbs" icon={<Leaf className="h-5 w-5 text-green-700" />}>
              <p className="text-gray-700 mb-2">These herbs work well with {herb.name}:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Ginger", "Turmeric", "Lemon Balm"].map((complementaryHerb, index) => (
                  <Card key={index} className="bg-green-50">
                    <CardContent className="p-3">
                      <h4 className="font-medium">{complementaryHerb}</h4>
                      <p className="text-sm text-gray-600">Enhances the effectiveness when combined</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HerbTabs;
