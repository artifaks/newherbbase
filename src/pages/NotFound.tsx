
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';
import SEO from '@/components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Page Not Found | Herbal Wisdom"
        description="We couldn't find the page you're looking for. Please check the URL or navigate back to the homepage."
      />
      <NavBar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-10">
          <div className="mb-6">
            <Leaf className="h-24 w-24 mx-auto text-herbal-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. The herb you're seeking might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="bg-herbal-600 hover:bg-herbal-700">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-herbal-600 text-herbal-700">
              <Link to="/herbs">Browse Herb Database</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
