import { WORDPRESS_ENDPOINTS, getAuthHeaders } from '../config/wordpress';
import { herbs } from '../data/herbs';
import { ebooks } from '../data/ebooks';
import { BlogPost } from '../data/types/blog';

// Sample blog posts data since it's not exported
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Herbal Medicine",
    slug: "getting-started-with-herbal-medicine",
    content: "Learn the basics of herbal medicine and how to incorporate it into your daily life...",
    excerpt: "A beginner's guide to herbal medicine",
    author: "Herbal Expert",
    readingTime: 5,
    tags: ["herbal medicine", "beginners", "wellness"],
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

interface WordPressResponse {
  id: number;
  slug: string;
  status: string;
}

async function createCustomPostType(type: string, labels: any) {
  const response = await fetch(`${WORDPRESS_ENDPOINTS.custom[type]}`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      name: type,
      labels,
      public: true,
      show_in_rest: true,
      supports: ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields']
    })
  });

  if (!response.ok) {
    throw new Error(`Failed to create custom post type: ${type}`);
  }

  return response.json();
}

async function importHerbs() {
  console.log('Importing herbs...');
  
  for (const herb of herbs) {
    try {
      const response = await fetch(WORDPRESS_ENDPOINTS.custom.herbs, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          title: herb.name,
          content: herb.description,
          status: 'publish',
          meta: {
            scientific_name: herb.scientific_name,
            benefits: herb.benefits,
            uses: herb.uses,
            preparations: herb.preparations,
            cautions: herb.cautions,
            category: herb.category
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to import herb: ${herb.name}`);
      }

      const result: WordPressResponse = await response.json();
      console.log(`Imported herb: ${herb.name} (ID: ${result.id})`);
    } catch (error) {
      console.error(`Error importing herb ${herb.name}:`, error);
    }
  }
}

async function importEbooks() {
  console.log('Importing ebooks...');
  
  for (const ebook of ebooks) {
    try {
      const response = await fetch(WORDPRESS_ENDPOINTS.custom.ebooks, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          title: ebook.title,
          content: ebook.description,
          status: 'publish',
          meta: {
            author: ebook.author,
            price: ebook.price,
            category: ebook.category,
            pages: ebook.pages,
            publish_date: ebook.publishDate
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to import ebook: ${ebook.title}`);
      }

      const result: WordPressResponse = await response.json();
      console.log(`Imported ebook: ${ebook.title} (ID: ${result.id})`);
    } catch (error) {
      console.error(`Error importing ebook ${ebook.title}:`, error);
    }
  }
}

async function importBlogPosts() {
  console.log('Importing blog posts...');
  
  for (const post of blogPosts) {
    try {
      const response = await fetch(WORDPRESS_ENDPOINTS.posts, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          status: 'publish',
          slug: post.slug,
          meta: {
            author: post.author,
            reading_time: post.readingTime,
            tags: post.tags
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to import blog post: ${post.title}`);
      }

      const result: WordPressResponse = await response.json();
      console.log(`Imported blog post: ${post.title} (ID: ${result.id})`);
    } catch (error) {
      console.error(`Error importing blog post ${post.title}:`, error);
    }
  }
}

async function setupWordPress() {
  try {
    // Create custom post types
    console.log('Creating custom post types...');
    await createCustomPostType('herbs', {
      name: 'Herbs',
      singular_name: 'Herb',
      menu_name: 'Herbs',
      all_items: 'All Herbs',
      add_new: 'Add New Herb',
      add_new_item: 'Add New Herb',
      edit_item: 'Edit Herb',
      new_item: 'New Herb',
      view_item: 'View Herb',
      search_items: 'Search Herbs'
    });

    await createCustomPostType('ebooks', {
      name: 'Ebooks',
      singular_name: 'Ebook',
      menu_name: 'Ebooks',
      all_items: 'All Ebooks',
      add_new: 'Add New Ebook',
      add_new_item: 'Add New Ebook',
      edit_item: 'Edit Ebook',
      new_item: 'New Ebook',
      view_item: 'View Ebook',
      search_items: 'Search Ebooks'
    });

    // Import content
    await importHerbs();
    await importEbooks();
    await importBlogPosts();

    console.log('WordPress setup completed successfully!');
  } catch (error) {
    console.error('Error during WordPress setup:', error);
  }
}

// Run the setup
setupWordPress(); 