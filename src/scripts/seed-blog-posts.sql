-- Create indexes for frequently queried fields
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Insert sample blog posts
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
) VALUES
(
  '10 Natural Herbs That Actually Work for Anxiety (Backed by Science)',
  'natural-herbs-for-anxiety-relief',
  'Anxiety is one of the most common mental health challenges, but nature offers powerful remedies. These 10 herbs have been studied and used for centuries to help calm the mind, relieve stress, and restore balance—backed by both tradition and science.',
  '<h1>10 Natural Herbs for Anxiety Relief</h1>
<p>Anxiety is one of the most common mental health challenges, but nature offers powerful remedies. These 10 herbs have been studied and used for centuries to help calm the mind, relieve stress, and restore balance—backed by both tradition and science.</p>

<h2>1. Ashwagandha</h2>
<p><strong>Benefit:</strong> Adaptogen that reduces cortisol levels and stress.</p>
<p><strong>How to Use:</strong> Take as a powder or capsule (300–600 mg/day).</p>
<p><strong>Reference:</strong> NCBI Study</p>

<h2>2. Lavender</h2>
<p><strong>Benefit:</strong> Promotes relaxation and reduces generalized anxiety.</p>
<p><strong>How to Use:</strong> Tea, essential oil, or capsules.</p>
<p><strong>Reference:</strong> PubMed</p>

<h2>3. Lemon Balm</h2>
<p><strong>Benefit:</strong> Mild sedative effects for stress and insomnia.</p>
<p><strong>How to Use:</strong> Tea or tincture, especially before bed.</p>
<p><strong>Reference:</strong> Journal of Ethnopharmacology</p>

<h2>4. Passionflower</h2>
<p><strong>Benefit:</strong> Helps with anxiety-induced insomnia.</p>
<p><strong>How to Use:</strong> Tea, capsule, or extract.</p>
<p><strong>Reference:</strong> PubMed</p>

<h2>5. Chamomile</h2>
<p><strong>Benefit:</strong> Calms nerves and eases restlessness.</p>
<p><strong>How to Use:</strong> Steep flowers for tea or take as a supplement.</p>
<p><strong>Reference:</strong> Journal of Clinical Psychopharmacology</p>

<h2>6. Rhodiola Rosea</h2>
<p><strong>Benefit:</strong> Enhances resilience to mental fatigue.</p>
<p><strong>How to Use:</strong> Standardized capsules (200–400 mg/day).</p>
<p><strong>Reference:</strong> Phytomedicine</p>

<h2>7. Valerian Root</h2>
<p><strong>Benefit:</strong> Supports deep sleep and reduces anxiety symptoms.</p>
<p><strong>How to Use:</strong> Tea or capsules before bedtime.</p>
<p><strong>Reference:</strong> PubMed Central</p>

<h2>8. Kava Kava</h2>
<p><strong>Benefit:</strong> Shown to reduce social anxiety (use with caution).</p>
<p><strong>How to Use:</strong> Extract or supplement form.</p>
<p><strong>Reference:</strong> Cochrane Review</p>

<h2>9. Holy Basil (Tulsi)</h2>
<p><strong>Benefit:</strong> Adaptogen that reduces physical and mental stress.</p>
<p><strong>How to Use:</strong> Tea or capsules daily.</p>
<p><strong>Reference:</strong> NCBI Study</p>

<h2>10. Ginkgo Biloba</h2>
<p><strong>Benefit:</strong> Increases blood flow and improves mood stability.</p>
<p><strong>How to Use:</strong> Capsule (120–240 mg/day).</p>
<p><strong>Reference:</strong> Psychopharmacology</p>

<h3>✅ Final Thoughts</h3>
<p>Herbs can provide a safe and natural alternative for easing anxiety—but always consult a professional before starting any new supplement routine. The power of plants is real, and when used properly, they can restore harmony to both mind and body.</p>',
  'Herbal Wisdom Team',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP,
  true,
  5,
  ARRAY['anxiety', 'mental health', 'herbal remedies', 'natural medicine'],
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
),
(
  'The Complete Guide to Growing Your Own Medicinal Herbs',
  'growing-medicinal-herbs-guide',
  'Learn how to cultivate your own medicinal herb garden with this comprehensive guide. From soil preparation to harvesting techniques, discover everything you need to know to grow powerful healing plants at home.',
  '<h1>The Complete Guide to Growing Your Own Medicinal Herbs</h1>
<p>Growing your own medicinal herbs is not only rewarding but also ensures you have access to fresh, high-quality herbs for your health needs. This guide will walk you through everything you need to know to start your medicinal herb garden.</p>

<h2>Getting Started</h2>
<p>Before you begin planting, consider these essential factors:</p>
<ul>
  <li>Sunlight requirements</li>
  <li>Soil quality and preparation</li>
  <li>Watering needs</li>
  <li>Space requirements</li>
  <li>Climate considerations</li>
</ul>

<h2>Essential Herbs to Grow</h2>
<p>Here are some of the most beneficial medicinal herbs to start with:</p>

<h3>1. Echinacea</h3>
<p><strong>Growing Tips:</strong> Plant in full sun, well-draining soil</p>
<p><strong>Uses:</strong> Immune support, cold prevention</p>

<h3>2. Calendula</h3>
<p><strong>Growing Tips:</strong> Easy to grow, self-seeding</p>
<p><strong>Uses:</strong> Skin healing, anti-inflammatory</p>

<h3>3. Chamomile</h3>
<p><strong>Growing Tips:</strong> Prefers cool weather, partial shade</p>
<p><strong>Uses:</strong> Sleep aid, digestive support</p>

<h2>Harvesting and Storage</h2>
<p>Learn the best practices for harvesting and preserving your herbs:</p>
<ul>
  <li>Timing your harvest</li>
  <li>Drying techniques</li>
  <li>Storage methods</li>
  <li>Making tinctures and extracts</li>
</ul>

<h2>Common Challenges</h2>
<p>Be prepared to handle these common issues:</p>
<ul>
  <li>Pest control</li>
  <li>Disease prevention</li>
  <li>Weather protection</li>
  <li>Soil maintenance</li>
</ul>

<h3>✅ Conclusion</h3>
<p>Growing your own medicinal herbs is a journey that combines gardening skills with herbal knowledge. Start small, learn as you go, and enjoy the benefits of having fresh, potent herbs at your fingertips.</p>',
  'Herbal Wisdom Team',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP,
  true,
  8,
  ARRAY['gardening', 'medicinal herbs', 'herb cultivation', 'sustainable living'],
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
),
(
  'Understanding Herbal Medicine: A Beginners Guide',
  'herbal-medicine-beginners-guide',
  'Discover the fundamentals of herbal medicine and how to safely incorporate herbs into your wellness routine. This comprehensive guide covers everything from basic principles to practical applications.',
  '<h1>Understanding Herbal Medicine: A Beginners Guide</h1>
<p>Herbal medicine has been used for thousands of years to promote health and treat various conditions. This guide will help you understand the basics and start your journey into the world of herbal healing.</p>

<h2>What is Herbal Medicine?</h2>
<p>Herbal medicine, also known as botanical medicine or phytotherapy, involves using plants for their therapeutic properties. It combines traditional knowledge with modern scientific understanding.</p>

<h2>Basic Principles</h2>
<p>Understanding these fundamental concepts will help you use herbs effectively:</p>
<ul>
  <li>Herb actions and properties</li>
  <li>Dosage considerations</li>
  <li>Safety precautions</li>
  <li>Quality assessment</li>
</ul>

<h2>Common Herbal Preparations</h2>
<p>Learn about different ways to use herbs:</p>

<h3>1. Teas and Infusions</h3>
<p><strong>Best for:</strong> Leafy herbs, flowers</p>
<p><strong>Preparation:</strong> Steep in hot water</p>

<h3>2. Tinctures</h3>
<p><strong>Best for:</strong> Strong, concentrated extracts</p>
<p><strong>Preparation:</strong> Alcohol or glycerin extraction</p>

<h3>3. Capsules</h3>
<p><strong>Best for:</strong> Convenient dosing</p>
<p><strong>Preparation:</strong> Powdered herbs in gelatin or vegetable capsules</p>

<h2>Safety Considerations</h2>
<p>Important safety guidelines to follow:</p>
<ul>
  <li>Consult healthcare providers</li>
  <li>Research herb interactions</li>
  <li>Start with small doses</li>
  <li>Monitor for reactions</li>
</ul>

<h3>✅ Getting Started</h3>
<p>Begin your herbal journey with these steps:</p>
<ol>
  <li>Research basic herbs</li>
  <li>Start with simple preparations</li>
  <li>Keep a journal of effects</li>
  <li>Join herbal communities</li>
</ol>

<h3>Final Thoughts</h3>
<p>Herbal medicine offers a natural approach to health and wellness. With proper knowledge and respect for these powerful plants, you can safely incorporate them into your daily life.</p>',
  'Herbal Wisdom Team',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP,
  true,
  6,
  ARRAY['herbal medicine', 'beginners guide', 'natural healing', 'wellness'],
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
); 