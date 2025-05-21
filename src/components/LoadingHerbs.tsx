
import React from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useIsMobile } from '@/hooks/use-mobile';

interface LoadingHerbsProps {
  message?: string;
}

const LoadingHerbs: React.FC<LoadingHerbsProps> = ({ 
  message = "Loading herbs database..."
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12">
      <LoadingSpinner 
        size={isMobile ? "md" : "lg"}
        text={message}
        className="mb-4"
      />
      <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'} mt-2 max-w-md text-center px-4`}>
        We're loading herbs from our database. This might take a few moments.
      </p>
    </div>
  );
};

export default LoadingHerbs;
