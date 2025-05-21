
import React from 'react';
import { History } from 'lucide-react';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';

interface HistorySectionProps {
  history?: string;
}

const HistorySection: React.FC<HistorySectionProps> = ({ history }) => {
  if (!history) return null;
  
  return (
    <Section title="Historical Background" icon={<History className="h-5 w-5 text-amber-700" />}>
      <Card className="bg-amber-50">
        <CardContent className="p-4">
          <p className="text-gray-700">{history}</p>
        </CardContent>
      </Card>
    </Section>
  );
};

export default HistorySection;
