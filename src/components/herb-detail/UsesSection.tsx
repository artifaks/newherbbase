
import React from 'react';
import { FileText } from 'lucide-react';
import Section from './Section';

interface UsesSectionProps {
  uses: string[];
}

const UsesSection: React.FC<UsesSectionProps> = ({ uses }) => (
  <Section title="Common Uses" icon={<FileText className="h-5 w-5 text-blue-700" />}>
    <ul className="list-none pl-0 text-gray-700 space-y-3">
      {uses.map((use, index) => (
        <li key={index} className="mb-2 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-green-100 before:rounded-full before:border before:border-green-300">
          {use}
        </li>
      ))}
    </ul>
  </Section>
);

export default UsesSection;
