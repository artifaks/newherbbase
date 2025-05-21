import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import HerbImportPage from './pages/HerbImport';
import Index from './pages/Index';
import HerbDatabase from './pages/HerbDatabase';
import Ebooks from './pages/Ebooks';
import HerbDetail from './pages/HerbDetail';
import EbookDetail from './pages/EbookDetail';
import EbookSuccess from './pages/EbookSuccess';
import BundleSuccess from './pages/BundleSuccess';
import MyFavorites from './pages/MyFavorites';
import HerbChat from './pages/HerbChat';
import Story from './pages/Story';
import Testimonials from './pages/Testimonials';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import RefundPolicy from './pages/RefundPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Affiliates from './pages/Affiliates';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import Authentication from './pages/Authentication';
import MyEbooksPage from './pages/MyEbooksPage';
import YoutubeChannel from './pages/YoutubeChannel';
import analyticsService from './utils/analyticsService';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  // Initialize analytics when the app loads
  useEffect(() => {
    try {
      analyticsService.init();
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }, []);
  
  return (
    <ErrorBoundary>
      <Router>
        <div className="App flex flex-col min-h-screen">
          <div className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/herbs" element={<HerbDatabase />} />
                <Route path="/ebooks" element={<Ebooks />} />
                <Route path="/herbs/:name" element={<HerbDetail />} />
                <Route path="/favorites" element={<MyFavorites />} />
                <Route path="/ebooks/:ebookId" element={<EbookDetail />} />
                <Route path="/ebooks/:ebookId/success" element={<EbookSuccess />} />
                <Route path="/bundle-success" element={<BundleSuccess />} />
                <Route path="/herb-import" element={<HerbImportPage />} />
                <Route path="/chat" element={<HerbChat />} />
                <Route path="/story" element={<Story />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/affiliates" element={<Affiliates />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/auth" element={<Authentication />} />
                <Route path="/my-ebooks" element={<MyEbooksPage />} />
                <Route path="/youtube" element={<YoutubeChannel />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Toaster />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
