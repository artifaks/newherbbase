-- Indexes for herbs table
CREATE INDEX IF NOT EXISTS idx_herbs_name ON herbs(name);
CREATE INDEX IF NOT EXISTS idx_herbs_category ON herbs(category);
CREATE INDEX IF NOT EXISTS idx_herbs_medicinal_uses ON herbs USING GIN(medicinal_uses);
CREATE INDEX IF NOT EXISTS idx_herbs_benefits ON herbs USING GIN(benefits);
CREATE INDEX IF NOT EXISTS idx_herbs_safety_warnings ON herbs USING GIN(safety_warnings);

-- Indexes for blog_posts table
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING GIN(tags);

-- Indexes for ebooks table
CREATE INDEX IF NOT EXISTS idx_ebooks_title ON ebooks(title);
CREATE INDEX IF NOT EXISTS idx_ebooks_category ON ebooks(category);
CREATE INDEX IF NOT EXISTS idx_ebooks_price ON ebooks(price);

-- Indexes for user_favorites table
CREATE INDEX IF NOT EXISTS idx_user_favorites_user_id ON user_favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_user_favorites_herb_id ON user_favorites(herb_id);

-- Indexes for user_ebooks table
CREATE INDEX IF NOT EXISTS idx_user_ebooks_user_id ON user_ebooks(user_id);
CREATE INDEX IF NOT EXISTS idx_user_ebooks_ebook_id ON user_ebooks(ebook_id); 