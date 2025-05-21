import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { BlogPost } from '@/data/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Only log post data in development if needed for debugging
  // console.log(`Rendering BlogCard for: ${post.title} (${post.id})`);
  // console.log('Post details:', JSON.stringify(post, null, 2));
  
  const formatDate = (dateString: string) => {
    if (!dateString) {
      console.warn(`Missing date string for post: ${post.title}`);
      return '';
    }
    try {
      // Make sure the date is properly formatted
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        console.error(`Invalid date format for post ${post.title}: ${dateString}`);
        return '';
      }
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date);
    } catch (error) {
      console.error(`Error formatting date: ${dateString}`, error);
      return '';
    }
  };

  // Check if post has all required fields
  if (!post.title || !post.slug) {
    console.error('Post is missing required fields:', post);
    return null;
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        {/* Pre-check if coverImage is a valid URL before attempting to render */}
        {post.coverImage && post.coverImage.startsWith('http') ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              // Silently handle the error without console logs
              e.currentTarget.onerror = null; // Prevent further error handling
              e.currentTarget.src = '/placeholder.svg';
              // Remove hover effect on fallback
              e.currentTarget.classList.remove('hover:scale-105');
            }}
          />
        ) : (
          <div className="w-full h-full bg-herbal-100 flex items-center justify-center">
            <Leaf className="h-12 w-12 text-herbal-500" />
          </div>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="absolute top-0 right-0 m-3">
            <span className="bg-herbal-700 text-white text-xs px-2 py-1 rounded-full">
              {post.tags[0]}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>{post.author || 'Unknown Author'}</span>
          <span>{post.publishedAt ? formatDate(post.publishedAt) : 'No date'}</span>
        </div>
        <h2 className="text-xl font-serif font-semibold mb-2 text-gray-800">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {post.excerpt || 'No excerpt available'}
        </p>
        <div className="flex justify-between items-center text-sm mt-auto">
          <span className="text-herbal-600 font-medium">Read more</span>
          {post.readingTime && (
            <span className="text-gray-500">{post.readingTime} min read</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
