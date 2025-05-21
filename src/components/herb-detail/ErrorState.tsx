
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  errorMessage: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ errorMessage }) => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
          <AlertTriangle className="h-8 w-8 text-yellow-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Something Went Wrong</h1>
        <p className="text-gray-600 mb-6">
          We encountered an error while trying to load this herb: {errorMessage}
        </p>
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link to="/herbs">
              Browse All Herbs
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/">
              Return to Homepage
            </Link>
          </Button>
          <Button variant="ghost" onClick={() => window.location.reload()} className="w-full">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
