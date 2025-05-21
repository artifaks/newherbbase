-- Add blog posts without modifying existing setup
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
SELECT 
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
FROM (
  VALUES
  (
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
<p><strong>Dosage:</strong> 500mg extract or 1 cup tea</p>

<h2>Creating a Sleep-Inducing Routine</h2>
<p>Combine these herbs with these sleep-promoting practices:</p>
<ul>
  <li>Consistent bedtime schedule</li>
  <li>Blue light reduction</li>
  <li>Relaxing pre-sleep rituals</li>
  <li>Optimal bedroom environment</li>
</ul>

<h2>Herbal Sleep Blends</h2>
<p>Try these effective combinations:</p>

<h3>Calming Night Blend</h3>
<p><strong>Ingredients:</strong></p>
<ul>
  <li>Chamomile</li>
  <li>Lavender</li>
  <li>Lemon balm</li>
</ul>

<h3>Deep Sleep Blend</h3>
<p><strong>Ingredients:</strong></p>
<ul>
  <li>Valerian root</li>
  <li>Passionflower</li>
  <li>Hops</li>
</ul>

<h3>✅ Safety Considerations</h3>
<p>Important guidelines for using sleep herbs:</p>
<ul>
  <li>Start with small doses</li>
  <li>Monitor for interactions with medications</li>
  <li>Consult healthcare provider if pregnant or nursing</li>
  <li>Allow 2-3 weeks to assess effectiveness</li>
</ul>

<h3>Final Thoughts</h3>
<p>Herbal sleep remedies offer a gentle, natural approach to better sleep. Remember that consistency and patience are key when working with herbal solutions. Sweet dreams!</p>',
    'Herbal Wisdom Team',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    true,
    7,
    ARRAY['sleep', 'insomnia', 'herbal remedies', 'natural sleep aids'],
    'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  ),
  (
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
<p><strong>Properties:</strong> Astringent, styptic</p>

<h2>Common Ailments and Their Herbal Solutions</h2>

<h3>Headaches</h3>
<p><strong>Recommended herbs:</strong></p>
<ul>
  <li>Feverfew</li>
  <li>Peppermint</li>
  <li>Lavender</li>
</ul>

<h3>Digestive Issues</h3>
<p><strong>Recommended herbs:</strong></p>
<ul>
  <li>Ginger</li>
  <li>Peppermint</li>
  <li>Chamomile</li>
</ul>

<h3>Burns and Sunburns</h3>
<p><strong>Recommended herbs:</strong></p>
<ul>
  <li>Aloe vera</li>
  <li>Lavender</li>
  <li>Calendula</li>
</ul>

<h2>Creating Your Herbal First Aid Kit</h2>
<p>Essential items to include:</p>
<ul>
  <li>Herbal salves and ointments</li>
  <li>Tinctures and extracts</li>
  <li>Essential oils</li>
  <li>Dried herbs for teas</li>
  <li>Basic supplies (bandages, gauze, etc.)</li>
</ul>

<h3>✅ Safety First</h3>
<p>Important guidelines:</p>
<ul>
  <li>Know your herbs and their contraindications</li>
  <li>Keep a first aid manual handy</li>
  <li>Seek professional help for serious conditions</li>
  <li>Regularly check expiration dates</li>
</ul>

<h3>Final Thoughts</h3>
<p>Herbal first aid empowers you to handle common health issues naturally. Remember to maintain your kit regularly and continue learning about herbal medicine for optimal results.</p>',
    'Herbal Wisdom Team',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    true,
    8,
    ARRAY['first aid', 'natural remedies', 'herbal medicine', 'home remedies'],
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  ),
  (
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
<p><strong>Usage:</strong> Preventative and during illness</p>

<h2>Creating an Immune Support Protocol</h2>
<p>Combine these herbs with these immune-supporting practices:</p>
<ul>
  <li>Regular exercise</li>
  <li>Quality sleep</li>
  <li>Stress management</li>
  <li>Healthy diet</li>
</ul>

<h2>Seasonal Immune Support</h2>

<h3>Fall/Winter Protocol</h3>
<p><strong>Recommended herbs:</strong></p>
<ul>
  <li>Echinacea</li>
  <li>Astragalus</li>
  <li>Ginger</li>
  <li>Garlic</li>
</ul>

<h3>Spring/Summer Protocol</h3>
<p><strong>Recommended herbs:</strong></p>
<ul>
  <li>Nettle</li>
  <li>Dandelion</li>
  <li>Burdock</li>
  <li>Red clover</li>
</ul>

<h3>✅ Important Considerations</h3>
<p>Guidelines for immune support:</p>
<ul>
  <li>Start before illness strikes</li>
  <li>Rotate herbs to prevent adaptation</li>
  <li>Consider individual constitution</li>
  <li>Monitor for any reactions</li>
</ul>

<h3>Final Thoughts</h3>
<p>Herbal immune support offers a natural way to maintain health and vitality. Remember that consistency and proper timing are key to effective immune system support.</p>',
    'Herbal Wisdom Team',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    true,
    6,
    ARRAY['immune system', 'natural immunity', 'herbal remedies', 'wellness'],
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  )
) AS new_posts (
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
WHERE NOT EXISTS (
  SELECT 1 FROM blog_posts WHERE blog_posts.slug = new_posts.slug
); 