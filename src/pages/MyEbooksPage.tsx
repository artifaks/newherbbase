
import React from 'react';
import NavBarWithEbooks from '@/components/NavBarWithEbooks';
import MyEbooks from '@/components/MyEbooks';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const MyEbooksPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="My eBooks - Herbal Wisdom"
        description="Access your purchased and free eBooks from Herbal Wisdom."
        url="https://herbalwisdom.com/my-ebooks"
        keywords={['herbal ebooks', 'herbal medicine', 'digital books', 'herbal wisdom']}
        type="website"
      />
      <NavBarWithEbooks />
      <div className="flex-grow">
        <div className="bg-herbal-50 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-herbal-800">My eBook Library</h1>
            <p className="text-lg text-gray-600">Access all your herbal wisdom books in one place.</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <MyEbooks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyEbooksPage;
