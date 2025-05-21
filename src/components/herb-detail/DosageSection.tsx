
import React from 'react';
import { Info } from 'lucide-react';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';

interface DosageSectionProps {
  dosage: string;
}

const DosageSection: React.FC<DosageSectionProps> = ({ dosage }) => (
  <Section title="Recommended Dosage" icon={<Info className="h-5 w-5 text-purple-700" />}>
    <Card className="bg-purple-50">
      <CardContent className="p-4">
        <p className="text-gray-700">{dosage || "Dosage information not available. Please consult with a qualified herbalist or healthcare professional for personalized dosage recommendations."}</p>
        <p className="text-sm text-gray-500 mt-2">Note: Dosage can vary based on individual factors such as age, health condition, and other medications being taken.</p>
      </CardContent>
    </Card>
  </Section>
);

export default DosageSection;
