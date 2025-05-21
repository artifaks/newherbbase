
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Menu, X, Leaf, Heart, Home, BookOpen, Search, Info, ShoppingBag, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-herbal-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/a9ee8983-8edf-4672-8c04-7ee7bb04c52f.png" 
                  alt="Herbal Wisdom Logo" 
                  className="h-10 w-auto" 
                />
                <span className="text-xl font-bold text-amber-300 hidden sm:inline">
                  Herbal Wisdom
                </span>
              </Link>
            </div>
          </div>

          {/* Navigation for non-mobile */}
          {!isMobile && (
            <nav className="flex space-x-4 items-center">
              <Link to="/" className="px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1">
                <Home className="h-4 w-4" /> Home
              </Link>
              <Link to="/herbs" className="px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1">
                <Leaf className="h-4 w-4" /> Herbs
              </Link>
              <Link to="/ebooks" className="px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1">
                <BookOpen className="h-4 w-4" /> Ebooks
              </Link>
              <Link to="/blog" className="px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1">
                <FileText className="h-4 w-4" /> Blog
              </Link>
              <Link to="/favorites" className="px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1">
                <Heart className="h-4 w-4" /> Favorites
              </Link>
              <Link to="/affiliates" className="px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1">
                <ShoppingBag className="h-4 w-4" /> Shop
              </Link>
              <Link to="/chat" className="px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1">
                <MessageSquare className="h-4 w-4" /> Chat
              </Link>
              <Link to="/story" className="px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1">
                <Info className="h-4 w-4" /> Our Story
              </Link>
              
              {/* Search bar */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:text-amber-300"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="h-4 w-4" />
                </Button>
                
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <div className="p-2">
                      <input
                        type="text"
                        placeholder="Search herbs or ebooks..."
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        autoFocus
                      />
                      <div className="text-xs text-gray-500 mt-1 px-1">
                        Press Enter to search
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button asChild variant="secondary" className="ml-4">
                <Link to="/">Subscribe</Link>
              </Button>
            </nav>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="flex items-center">
              <button 
                className="text-white hover:text-amber-300 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <nav className="px-4 pb-4 space-y-2">
          <div className="py-2">
            <input
              type="text"
              placeholder="Search herbs or ebooks..."
              className="w-full px-3 py-2 border border-herbal-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <Link 
            to="/" 
            className="block px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <Home className="h-4 w-4" /> Home
          </Link>
          <Link 
            to="/herbs" 
            className="block px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <Leaf className="h-4 w-4" /> Herbs
          </Link>
          <Link 
            to="/ebooks" 
            className="block px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <BookOpen className="h-4 w-4" /> Ebooks
          </Link>
          <Link 
            to="/blog" 
            className="block px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <FileText className="h-4 w-4" /> Blog
          </Link>
          <Link 
            to="/favorites" 
            className="block px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <Heart className="h-4 w-4" /> Favorites
          </Link>
          <Link 
            to="/affiliates" 
            className="block px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingBag className="h-4 w-4" /> Shop
          </Link>
          <Link 
            to="/chat" 
            className="block px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <MessageSquare className="h-4 w-4" /> Chat
          </Link>
          <Link 
            to="/story" 
            className="block px-3 py-2 text-white hover:text-amber-300 rounded-md flex items-center gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <Info className="h-4 w-4" /> Our Story
          </Link>
          <div className="pt-2">
            <Button asChild variant="secondary" className="w-full">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Subscribe</Link>
            </Button>
          </div>
        </nav>
      )}

      {/* Floating Ask the Herbalist button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link to="/chat">
          <Button 
            className="rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg flex items-center gap-2 px-4 py-6"
            size="lg"
          >
            <MessageSquare className="h-5 w-5" /> 
            Ask the Herbalist
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
