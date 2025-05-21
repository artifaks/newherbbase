
import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';

interface CautionsSectionProps {
  cautions: string[];
  title: string;
  icon: "alert-triangle" | "info";
}

const CautionsSection: React.FC<CautionsSectionProps> = ({ cautions, title, icon }) => {
  const IconComponent = icon === "alert-triangle" ? AlertTriangle : Info;

  return (
    <Section title={title} icon={<IconComponent className="h-5 w-5 text-yellow-600" />}>
      {cautions && cautions.length > 0 ? (
        <Card className="bg-yellow-50">
          <CardContent className="p-4">
            <ul className="space-y-2">
              {cautions.map((caution, index) => (
                <li key={index} className="flex items-start">
                  <IconComponent className="mr-2 h-4 w-4 text-yellow-600 flex-shrink-0 mt-1" />
                  <span>{caution}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <p className="text-gray-700">No specific cautions listed.</p>
      )}
    </Section>
  );
};

export default CautionsSection;
