-- Check if blog_posts table exists
SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public'
    AND table_name = 'blog_posts'
);

-- Show all blog posts
SELECT 
    id,
    title,
    slug,
    is_published,
    published_at,
    updated_at,
    author,
    reading_time_minutes,
    tags
FROM blog_posts
ORDER BY published_at DESC;

-- Count total published posts
SELECT COUNT(*) as total_published_posts
FROM blog_posts
WHERE is_published = true; 