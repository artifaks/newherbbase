import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Leaf } from 'lucide-react';
import { BlogPost } from '@/data/types/blog';
import BlogCard from '@/components/BlogCard';
import SEO from '@/components/SEO';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const postsPerPage = 6;
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching blog posts from Supabase...");
        
        // Fetch total count for pagination
        const { count, error: countError } = await supabase
          .from('blog_posts')
          .select('*', { count: 'exact', head: true })
          .eq('is_published', true);
          
        if (countError) {
          console.error('Error fetching post count:', countError);
          console.error('Error details:', {
            message: countError.message,
            details: countError.details,
            hint: countError.hint,
            code: countError.code
          });
          setError('Failed to fetch blog posts count: ' + countError.message);
          throw countError;
        }
        
        console.log(`Found ${count} published blog posts`);
        const totalCount = count || 0;
        setTotalPages(Math.ceil(totalCount / postsPerPage));
        
        // Fetch paginated posts
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('is_published', true)
          .order('published_at', { ascending: false })
          .range((currentPage - 1) * postsPerPage, currentPage * postsPerPage - 1);
          
        if (error) {
          console.error('Error fetching blog posts:', error);
          console.error('Error details:', {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          setError('Failed to fetch blog posts: ' + error.message);
          throw error;
        }
        
        if (!data || data.length === 0) {
          console.log('No blog posts found');
          setPosts([]);
          return;
        }
        
        console.log(`Successfully fetched ${data.length} blog posts`);
        
        // Map Supabase data to BlogPost type
        const blogPosts: BlogPost[] = data.map(post => ({
          id: post.id.toString(),
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || '',
          content: post.content,
          author: post.author || 'Herbal Wisdom Team',
          publishedAt: post.published_at,
          updatedAt: post.updated_at,
          coverImage: post.featured_image,
          tags: post.tags || [],
          readingTime: post.reading_time_minutes
        }));
        
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error in fetchBlogPosts:', error);
        toast({
          title: "Error fetching blog posts",
          description: "Could not load the blog posts. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [toast, currentPage]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Blog | Herbal Wisdom"
        description="Explore our collection of articles on herbal remedies, wellness tips, traditional wisdom, and holistic health practices."
        url="https://herbalwisdom.com/blog"
        keywords={['herbal blog', 'wellness blog', 'herbal remedies', 'holistic health', 'herbal wisdom articles', 'medicinal plants']}
      />
      <NavBar />
      
      <div className="bg-herbal-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Herbal Wisdom Blog</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our collection of articles on herbal remedies, wellness tips, and traditional wisdom
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        {loading ? (
          // Loading state
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
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
        ) : error ? (
          <div className="text-center py-16">
            <Leaf className="h-16 w-16 text-red-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Error Loading Blog Posts</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-4">
              {error}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-herbal-600 text-white rounded-lg hover:bg-herbal-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={`blog-${post.id}`}
                  post={post}
                />
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(prev => Math.max(prev - 1, 1));
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }} 
                        />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                      // Show pages around current page
                      let pageNum = currentPage - 2 + i;
                      if (currentPage < 3) {
                        pageNum = i + 1;
                      } else if (currentPage > totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      }
                      
                      if (pageNum > 0 && pageNum <= totalPages) {
                        return (
                          <PaginationItem key={pageNum}>
                            <PaginationLink 
                              href="#" 
                              isActive={currentPage === pageNum}
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(pageNum);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              {pageNum}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }
                      return null;
                    })}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(prev => Math.min(prev + 1, totalPages));
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }} 
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <Leaf className="h-16 w-16 text-herbal-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Blog Posts Yet</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              We're currently working on creating valuable content. 
              Check back soon for articles on herbal remedies, wellness tips, and more!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;
