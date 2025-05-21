
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Link } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import analyticsService from '@/utils/analyticsService';

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  contentType?: string;
  contentId?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  url = window.location.href,
  title = document.title,
  description = '',
  image = '',
  contentType = 'page',
  contentId = url,
  size = 'md',
  className = '',
}) => {
  const { toast } = useToast();
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };
  
  const iconSize = size === 'sm' ? 16 : size === 'md' ? 20 : 24;
  
  const handleShare = (platform: string) => {
    analyticsService.trackShare(platform, contentType, contentId);
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        description: "Link copied to clipboard",
        duration: 2000,
      });
      analyticsService.trackShare('copy', contentType, contentId);
    });
  };
  
  const getButtonClass = () => {
    const baseClass = "flex items-center justify-center rounded-full transition-colors";
    
    switch (size) {
      case 'sm':
        return `${baseClass} w-8 h-8`;
      case 'lg':
        return `${baseClass} w-12 h-12`;
      default:
        return `${baseClass} w-10 h-10`;
    }
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a 
        href={shareLinks.facebook} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => handleShare('facebook')}
        className={`${getButtonClass()} bg-blue-600 hover:bg-blue-700 text-white`}
        aria-label="Share on Facebook"
      >
        <Facebook size={iconSize} />
      </a>
      
      <a 
        href={shareLinks.twitter}
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => handleShare('twitter')}
        className={`${getButtonClass()} bg-sky-500 hover:bg-sky-600 text-white`}
        aria-label="Share on Twitter"
      >
        <Twitter size={iconSize} />
      </a>
      
      <a 
        href={shareLinks.linkedin}
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => handleShare('linkedin')}
        className={`${getButtonClass()} bg-blue-800 hover:bg-blue-900 text-white`}
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      
      <a 
        href={shareLinks.email}
        onClick={() => handleShare('email')}
        className={`${getButtonClass()} bg-green-600 hover:bg-green-700 text-white`}
        aria-label="Share via Email"
      >
        <Mail size={iconSize} />
      </a>
      
      <button
        onClick={handleCopyLink}
        className={`${getButtonClass()} bg-gray-200 hover:bg-gray-300 text-gray-700`}
        aria-label="Copy link"
      >
        <Link size={iconSize} />
      </button>
    </div>
  );
};

export default SocialShareButtons;
