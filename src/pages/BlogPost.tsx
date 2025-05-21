import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPost as BlogPostType } from '@/data/types/blog';
import SEO from '@/components/SEO';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();
          
        if (error) {
          throw error;
        }
        
        // Map Supabase data to BlogPost type
        const blogPost: BlogPostType = {
          id: data.id.toString(),
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          author: data.author,
          publishedAt: data.published_at,
          updatedAt: data.updated_at,
          coverImage: data.featured_image,
          tags: data.tags || [],
          readingTime: data.reading_time_minutes
        };
        
        setPost(blogPost);
        console.log("Loaded blog post:", blogPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        toast({
          title: "Error loading article",
          description: "Could not load the requested article. It may not exist or has been removed.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug, toast]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO title="Loading Article | Herbal Wisdom" />
        <NavBar />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="max-w-3xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded mb-8 animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO title="Article Not Found | Herbal Wisdom" />
        <NavBar />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-semibold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Extract plain text from HTML for meta description
  const getMetaDescription = (html: string) => {
    // Create temporary element to strip HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    return textContent.substring(0, 160) + (textContent.length > 160 ? '...' : '');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={post.title}
        description={post.excerpt || getMetaDescription(post.content)}
        imageUrl={post.coverImage || 'https://herbalwisdom.com/default-blog-image.jpg'}
        url={`https://herbalwisdom.com/blog/${slug}`}
        type="article"
        keywords={post.tags || ['herbal remedies', 'herbal wisdom', 'natural health']}
        author={post.author}
        publishedTime={post.publishedAt}
      />
      <NavBar />
      
      <article className="flex-grow">
        {/* Hero Section */}
        {post.coverImage && (
          <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden relative">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 text-white p-6 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                {post.title}
              </h1>
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Back to blog button */}
            <div className="mb-8">
              <Button variant="ghost" asChild className="text-herbal-700 pl-0">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            
            {/* Title (if no featured image) */}
            {!post.coverImage && (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                {post.title}
              </h1>
            )}
            
            {/* Article meta */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              {post.readingTime && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readingTime} min read</span>
                </div>
              )}
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <Link 
                    key={index} 
                    to={`/blog/tag/${tag}`}
                    className="flex items-center text-xs bg-herbal-100 text-herbal-800 px-3 py-1 rounded-full hover:bg-herbal-200 transition-colors"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            )}
            
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
