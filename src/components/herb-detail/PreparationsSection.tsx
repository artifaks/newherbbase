
import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';

interface PreparationsSectionProps {
  preparations: string[];
}

const PreparationsSection: React.FC<PreparationsSectionProps> = ({ preparations }) => (
  <Section title="Preparation Methods" icon={<BookOpen className="h-5 w-5 text-amber-700" />}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {preparations.map((preparation, index) => (
        <Card key={index} className="bg-amber-50">
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">{preparation}</h3>
            <p className="text-sm text-gray-700">
              {preparation.toLowerCase().includes("tea") && "Steep the dried herb in hot water for 5-10 minutes."}
              {preparation.toLowerCase().includes("tincture") && "Extract active compounds using alcohol or glycerin."}
              {preparation.toLowerCase().includes("capsule") && "Powdered herb in vegetable or gelatin capsules."}
              {preparation.toLowerCase().includes("poultice") && "Crush fresh herbs and apply directly to the skin."}
              {preparation.toLowerCase().includes("salve") && "Herbs infused in oils and mixed with beeswax."}
              {!preparation.toLowerCase().includes("tea") && 
               !preparation.toLowerCase().includes("tincture") && 
               !preparation.toLowerCase().includes("capsule") &&
               !preparation.toLowerCase().includes("poultice") &&
               !preparation.toLowerCase().includes("salve") && "Traditional herbal preparation method."}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export default PreparationsSection;
