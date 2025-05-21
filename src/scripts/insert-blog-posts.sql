-- First, ensure the blog_posts table exists with the correct structure
CREATE TABLE IF NOT EXISTS blog_posts (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    author TEXT,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_published BOOLEAN DEFAULT true,
    reading_time_minutes INTEGER,
    tags TEXT[],
    featured_image TEXT
);

-- Insert blog posts with error handling
DO $$
BEGIN
    -- Insert first blog post
    INSERT INTO blog_posts (
        title,
        slug,
        excerpt,
        content,
        author,
        published_at,
        updated_at,
        is_published,
        reading_time_minutes,
        tags,
        featured_image
    )
    VALUES (
        'Herbal Remedies for Better Sleep: Natural Solutions for Insomnia',
        'herbal-remedies-for-better-sleep',
        'Discover effective herbal solutions for insomnia and sleep disorders. Learn about the most powerful sleep-promoting herbs, their mechanisms of action, and how to use them safely for better rest.',
        '<h1>Herbal Remedies for Better Sleep: Natural Solutions for Insomnia</h1>
<p>Quality sleep is essential for overall health and well-being. When sleep eludes you, these natural herbal remedies can help restore your body''s natural sleep-wake cycle without the side effects of conventional sleep medications.</p>

<h2>Top Sleep-Promoting Herbs</h2>

<h3>1. Valerian Root</h3>
<p><strong>How it works:</strong> Increases GABA levels in the brain</p>
<p><strong>Best form:</strong> Tea or tincture</p>
<p><strong>Dosage:</strong> 300-600mg before bedtime</p>

<h3>2. Chamomile</h3>
<p><strong>How it works:</strong> Contains apigenin, a natural sedative</p>
<p><strong>Best form:</strong> Tea</p>
<p><strong>Dosage:</strong> 1-2 cups 30 minutes before bed</p>

<h3>3. Passionflower</h3>
<p><strong>How it works:</strong> Increases GABA production</p>
<p><strong>Best form:</strong> Tea or tincture</p>
<p><strong>Dosage:</strong> 500mg extract or 1 cup tea</p>',
        'Herbal Wisdom Team',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        true,
        7,
        ARRAY['sleep', 'insomnia', 'herbal remedies', 'natural sleep aids'],
        'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    )
    ON CONFLICT (slug) DO NOTHING;

    -- Insert second blog post
    INSERT INTO blog_posts (
        title,
        slug,
        excerpt,
        content,
        author,
        published_at,
        updated_at,
        is_published,
        reading_time_minutes,
        tags,
        featured_image
    )
    VALUES (
        'Herbal First Aid: Natural Remedies for Common Ailments',
        'herbal-first-aid-natural-remedies',
        'Learn how to create a natural first aid kit using herbs. From cuts and burns to headaches and digestive issues, discover effective herbal solutions for common health problems.',
        '<h1>Herbal First Aid: Natural Remedies for Common Ailments</h1>
<p>Nature provides powerful healing tools for everyday health challenges. This guide will help you build a comprehensive herbal first aid kit and use it effectively for common ailments.</p>

<h2>Essential Herbs for Your First Aid Kit</h2>

<h3>1. Calendula</h3>
<p><strong>Uses:</strong> Cuts, scrapes, burns</p>
<p><strong>Form:</strong> Salve or infused oil</p>
<p><strong>Properties:</strong> Anti-inflammatory, antimicrobial</p>

<h3>2. Plantain</h3>
<p><strong>Uses:</strong> Insect bites, stings, rashes</p>
<p><strong>Form:</strong> Fresh leaf poultice or salve</p>
<p><strong>Properties:</strong> Drawing, soothing</p>

<h3>3. Yarrow</h3>
<p><strong>Uses:</strong> Wounds, nosebleeds</p>
<p><strong>Form:</strong> Powder or tincture</p>
<p><strong>Properties:</strong> Astringent, styptic</p>',
        'Herbal Wisdom Team',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        true,
        8,
        ARRAY['first aid', 'natural remedies', 'herbal medicine', 'home remedies'],
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    )
    ON CONFLICT (slug) DO NOTHING;

    -- Insert third blog post
    INSERT INTO blog_posts (
        title,
        slug,
        excerpt,
        content,
        author,
        published_at,
        updated_at,
        is_published,
        reading_time_minutes,
        tags,
        featured_image
    )
    VALUES (
        'Herbal Immune Support: Natural Ways to Boost Your Defenses',
        'herbal-immune-support',
        'Discover powerful herbs that can strengthen your immune system naturally. Learn about the most effective immune-boosting herbs, their scientific backing, and how to incorporate them into your daily routine.',
        '<h1>Herbal Immune Support: Natural Ways to Boost Your Defenses</h1>
<p>Your immune system is your body''s natural defense against illness. These powerful herbs can help strengthen and support your immune function, keeping you healthy year-round.</p>

<h2>Top Immune-Boosting Herbs</h2>

<h3>1. Echinacea</h3>
<p><strong>Benefits:</strong> Stimulates immune response</p>
<p><strong>Best form:</strong> Tincture or tea</p>
<p><strong>Usage:</strong> At first sign of illness</p>

<h3>2. Astragalus</h3>
<p><strong>Benefits:</strong> Adaptogenic immune support</p>
<p><strong>Best form:</strong> Decoction or capsules</p>
<p><strong>Usage:</strong> Daily during cold season</p>

<h3>3. Elderberry</h3>
<p><strong>Benefits:</strong> Antiviral properties</p>
<p><strong>Best form:</strong> Syrup or tincture</p>
<p><strong>Usage:</strong> Preventative and during illness</p>',
        'Herbal Wisdom Team',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        true,
        6,
        ARRAY['immune system', 'natural immunity', 'herbal remedies', 'wellness'],
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    )
    ON CONFLICT (slug) DO NOTHING;

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Error inserting blog posts: %', SQLERRM;
END $$; 