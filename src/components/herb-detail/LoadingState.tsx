
import React from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const LoadingState: React.FC = () => (
  <div className="min-h-screen bg-green-50 py-6">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center h-64">
        <LoadingSpinner size="lg" text="Loading herb details..." />
        <p className="text-green-700 mt-4 text-sm">Please wait while we gather information about this herb.</p>
      </div>
    </div>
  </div>
);

export default LoadingState;
