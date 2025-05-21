
import React from 'react';
import { Leaf } from 'lucide-react';
import Section from './Section';

interface BenefitsSectionProps {
  benefits: string[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => (
  <Section title="Health Benefits" icon={<Leaf className="h-5 w-5 text-green-700" />}>
    <ul className="list-disc pl-5 text-gray-700">
      {benefits.map((benefit, index) => (
        <li key={index} className="mb-2">{benefit}</li>
      ))}
    </ul>
  </Section>
);

export default BenefitsSection;
