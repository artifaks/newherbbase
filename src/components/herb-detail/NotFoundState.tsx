
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Search } from 'lucide-react';

interface NotFoundStateProps {
  herbName?: string;
}

const NotFoundState: React.FC<NotFoundStateProps> = ({ herbName }) => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
          <Leaf className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Herb Not Found</h1>
        <p className="text-gray-600 mb-6">
          {herbName ? 
            `We couldn't find any information about "${herbName}". It might not be in our database yet.` : 
            `We couldn't find the herb you're looking for. It might not be in our database yet.`
          }
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
          <Button variant="ghost" className="w-full inline-flex items-center justify-center" asChild>
            <Link to="/herb-import">
              <Search className="mr-2 h-4 w-4" /> 
              Suggest a New Herb
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundState;
