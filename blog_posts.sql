-- Insert blog posts based on ebook content
INSERT INTO "public"."blog_posts" (
    "title",
    "slug",
    "excerpt",
    "content",
    "author",
    "published_at",
    "updated_at",
    "featured_image",
    "tags",
    "reading_time_minutes",
    "is_published"
) VALUES
(
    'The Healing Power of Herbs: A Guide to Optimal Health',
    'healing-power-of-herbs-guide',
    'Discover the healing benefits of herbs in this essential guide. Learn how natural remedies like ginger, turmeric, and chamomile support immunity, digestion, heart health, and stress relief.',
    'Herbs have been used for centuries as natural remedies for various health conditions. In this comprehensive guide, we explore the healing benefits of common herbs and how they can support your overall wellness journey.

Key herbs covered:
- Ginger: Supports digestion and reduces inflammation
- Turmeric: Powerful anti-inflammatory properties
- Chamomile: Promotes relaxation and better sleep
- Echinacea: Boosts immune system function
- Peppermint: Aids digestion and relieves tension

Learn how to incorporate these herbs into your daily routine for optimal health benefits.',
    'Herbal Wisdom Team',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/The%20Healing%20Power%20of%20Herbs:%20A%20Guide%20to%20Optimal%20Health.png',
    ARRAY['herbs', 'wellness', 'natural remedies', 'health'],
    8,
    true
),
(
    'Nature''s Remedies: Ancient Herbs for Modern Health',
    'ancient-herbs-modern-health',
    'Unlock the power of time-tested herbs like ashwagandha and goldenseal to support stress relief, immunity, and overall wellness—naturally.',
    'Ancient wisdom meets modern science in this exploration of traditional herbs and their contemporary applications. Discover how herbs like ashwagandha and goldenseal can enhance your modern wellness routine.

Featured herbs:
- Ashwagandha: Adaptogenic herb for stress management
- Goldenseal: Natural immune system support
- Holy Basil: Promotes mental clarity and focus
- Milk Thistle: Supports liver health
- Valerian Root: Natural sleep aid

Learn practical ways to incorporate these powerful herbs into your daily life for enhanced well-being.',
    'Herbal Wisdom Team',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/Nature%27s%20Remedies:%20Ancient%20Herbs%20for%20Modern%20Health.png',
    ARRAY['ancient herbs', 'wellness', 'natural remedies', 'stress relief'],
    10,
    true
),
(
    'Healing with Herbs: A Beginner''s Guide to Making Herbal Tinctures',
    'beginners-guide-herbal-tinctures',
    'Make Your Own Herbal Tinctures at Home. Learn step-by-step how to create safe, effective herbal tinctures for immunity, stress, digestion, and more.',
    'Creating your own herbal tinctures is a rewarding way to harness the healing power of plants. This beginner-friendly guide walks you through the process of making effective herbal tinctures at home.

What you''ll learn:
- Essential equipment and ingredients
- Step-by-step tincture-making process
- Best herbs for different health concerns
- Proper storage and usage guidelines
- Safety considerations and precautions

Start your journey into herbal medicine with this practical guide to making tinctures.',
    'Herbal Wisdom Team',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/Healing%20with%20Herbs:%20A%20Beginner%27s%20Guide%20to%20Making%20Herbal%20Tinctures.png',
    ARRAY['herbal tinctures', 'DIY', 'natural remedies', 'herbs'],
    12,
    true
); 