import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import BlogCard from './BlogCard';
import { ChevronRight } from 'lucide-react';
import { BlogPost } from '@/data/types/blog';
import { useToast } from '@/hooks/use-toast';

// Fallback blog posts data
const fallbackBlogPosts: BlogPost[] = [
  {
    id: 'fallback-1',
    title: '10 Natural Herbs That Actually Work for Anxiety',
    slug: 'natural-herbs-for-anxiety-relief',
    excerpt: 'Discover powerful herbs backed by science that can help manage anxiety and stress naturally.',
    content: '',
    author: 'Dr. Sarah Johnson',
    publishedAt: new Date().toISOString(),
    coverImage: '/blog/anxiety-herbs.jpg',
    tags: ['anxiety', 'herbs', 'wellness'],
    readingTime: 5
  },
  {
    id: 'fallback-2',
    title: 'The Healing Power of Herbal Teas',
    slug: 'healing-power-of-herbal-teas',
    excerpt: 'Explore the ancient tradition of herbal teas and their modern health benefits.',
    content: '',
    author: 'Michael Chen',
    publishedAt: new Date().toISOString(),
    coverImage: '/blog/herbal-teas.jpg',
    tags: ['tea', 'herbs', 'traditional medicine'],
    readingTime: 4
  },
  {
    id: 'fallback-3',
    title: 'Growing Your Own Medicinal Garden',
    slug: 'growing-medicinal-garden',
    excerpt: 'A beginner\'s guide to cultivating your own healing herbs at home.',
    content: '',
    author: 'Emma Thompson',
    publishedAt: new Date().toISOString(),
    coverImage: '/blog/medicinal-garden.jpg',
    tags: ['gardening', 'herbs', 'self-sufficiency'],
    readingTime: 6
  }
];

const FeaturedBlogs = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true;
    
    const fetchFeaturedPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error: supabaseError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('is_published', true)
          .order('published_at', { ascending: false })
          .limit(3);
          
        if (!isMounted) return;
          
        if (supabaseError) {
          console.error("Supabase error:", supabaseError);
          console.error("Error details:", {
            message: supabaseError.message,
            details: supabaseError.details,
            hint: supabaseError.hint,
            code: supabaseError.code
          });
          setError("Failed to load featured posts");
          toast({
            title: "Error",
            description: "Could not load featured blog posts.",
            variant: "destructive",
          });
          // Use fallback data on error
          setFeaturedPosts(fallbackBlogPosts);
          return;
        }
        
        if (!data || data.length === 0) {
          console.warn("No blog posts found, using fallback data");
          setFeaturedPosts(fallbackBlogPosts);
          return;
        }

        console.log("Successfully loaded blog posts:", data);
        setFeaturedPosts(data.map(post => ({
          id: post.id.toString(),
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || '',
          content: post.content,
          author: post.author,
          publishedAt: post.published_at,
          updatedAt: post.updated_at,
          coverImage: post.featured_image,
          tags: post.tags || [],
          readingTime: post.reading_time_minutes
        })));
      } catch (err) {
        if (!isMounted) return;
        
        console.error("Error fetching featured blog posts:", err);
        setError("An unexpected error occurred");
        toast({
          title: "Error",
          description: "An unexpected error occurred while loading blog posts.",
          variant: "destructive",
        });
        // Use fallback data on error
        setFeaturedPosts(fallbackBlogPosts);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchFeaturedPosts();
    
    return () => {
      isMounted = false;
    };
  }, [toast]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-green-800">
              From Our Blog
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error && featuredPosts.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-green-800">
              From Our Blog
            </h2>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-2">Error loading blog posts:</p>
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-green-800">
            From Our Blog
          </h2>
          <Link
            to="/blog"
            className="flex items-center text-green-700 hover:text-green-900 transition-colors"
          >
            View all articles <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard 
              key={`featured-${post.id.toString()}`} 
              post={post} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
