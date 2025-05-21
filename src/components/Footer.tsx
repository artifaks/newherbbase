import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Instagram, Facebook, Youtube, Users, GraduationCap, Award, Headphones, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
  const navigate = useNavigate();
  
  const handleSubscribe = () => {
    navigate("/auth");
  };
  
  return (
    <footer className="bg-herbal-800 text-white py-12 border-t border-herbal-700">
      <div className="container mx-auto px-4">
        {/* Our Experts Section */}
        <div className="mb-10 pb-10 border-b border-herbal-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-amber-300 mb-3">Our Experts</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We partner with certified holistic practitioners who bring decades of experience in traditional herbal medicine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-herbal-700 p-6 rounded-lg text-center hover:bg-herbal-600 transition-colors">
              <div className="flex justify-center mb-3">
                <GraduationCap size={32} className="text-amber-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Certified Herbalists</h3>
              <p className="text-gray-300 text-sm">
                Our team includes practitioners certified in Western, Chinese, and Ayurvedic herbal traditions
              </p>
            </div>
            
            <div className="bg-herbal-700 p-6 rounded-lg text-center hover:bg-herbal-600 transition-colors">
              <div className="flex justify-center mb-3">
                <Award size={32} className="text-amber-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Clinical Experience</h3>
              <p className="text-gray-300 text-sm">
                With 20+ years of combined clinical practice, our experts bring real-world healing experience
              </p>
            </div>
            
            <div className="bg-herbal-700 p-6 rounded-lg text-center hover:bg-herbal-600 transition-colors">
              <div className="flex justify-center mb-3">
                <Headphones size={32} className="text-amber-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Consultation Available</h3>
              <p className="text-gray-300 text-sm">
                Premium members can schedule personalized consultations with our herbal experts
              </p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button asChild variant="outline" className="border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-herbal-800">
              <Link to="/story">Learn About Our Team</Link>
            </Button>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mb-10 pb-10 border-b border-herbal-700">
          <div className="max-w-xl mx-auto">
            <NewsletterSignup 
              variant="footer" 
              location="footer" 
              title="Get Herbal Wisdom in Your Inbox"
              description="Join our community to receive weekly tips, remedies, and exclusive offers. We respect your privacy and will never share your information."
              buttonText="Join Now"
              className="bg-transparent p-0"
            />
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/a9ee8983-8edf-4672-8c04-7ee7bb04c52f.png" 
                alt="Herbal Wisdom Logo" 
                className="h-10 w-auto" 
              />
              <span className="text-xl font-bold text-amber-300">
                Herbal Wisdom
              </span>
            </Link>
            <p className="text-gray-300 italic">
              Nature's remedies for modern wellness
            </p>
            <a 
              href="mailto:admin@wellnessisgolden.com" 
              className="flex items-center gap-2 text-amber-300 hover:text-amber-100 mt-3 transition-colors"
            >
              <Mail size={16} />
              <span>admin@wellnessisgolden.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-300 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link to="/herbs" className="hover:text-amber-300 transition-colors">Herb Database</Link></li>
              <li><Link to="/ebooks" className="hover:text-amber-300 transition-colors">Ebooks</Link></li>
              <li><Link to="/chat" className="hover:text-amber-300 transition-colors">Herb Chat</Link></li>
              <li><Link to="/favorites" className="hover:text-amber-300 transition-colors">My Favorites</Link></li>
              <li><Link to="/youtube" className="hover:text-amber-300 transition-colors">YouTube Channel</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-amber-300 font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/story" className="hover:text-amber-300 transition-colors">Our Story</Link></li>
              <li><Link to="/story" className="hover:text-amber-300 transition-colors">Our Experts</Link></li>
              <li><Link to="/blog" className="hover:text-amber-300 transition-colors">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-amber-300 transition-colors">Testimonials</Link></li>
              <li><Link to="/youtube" className="hover:text-amber-300 transition-colors">YouTube Videos</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-amber-300 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-amber-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-amber-300 transition-colors">Disclaimer</Link></li>
              <li><Link to="/refund-policy" className="hover:text-amber-300 transition-colors">Refund Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-amber-300 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Social media and subscription */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-herbal-700 pt-6">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-amber-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-amber-300 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <Link 
              to="/youtube" 
              className="text-white hover:text-amber-300 transition-colors flex items-center gap-2"
            >
              <Youtube size={24} />
              <span className="text-sm hidden md:inline">Wellness is Golden</span>
            </Link>
          </div>
          
          <div>
            <Button 
              variant="secondary" 
              className="bg-amber-500 hover:bg-amber-600 text-white"
              onClick={handleSubscribe}
            >
              Subscribe for $4.99/month
            </Button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-6 mt-6 border-t border-herbal-700">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Herbal Wisdom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
