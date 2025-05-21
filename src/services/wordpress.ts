import { WORDPRESS_ENDPOINTS, getAuthHeaders } from '../config/wordpress';

export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export interface WordPressPage {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

export const WordPressService = {
  async getPosts(page = 1, perPage = 10): Promise<WordPressPost[]> {
    const response = await fetch(
      `${WORDPRESS_ENDPOINTS.posts}?page=${page}&per_page=${perPage}&_embed`,
      { headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  },

  async getPost(slug: string): Promise<WordPressPost> {
    const response = await fetch(
      `${WORDPRESS_ENDPOINTS.posts}?slug=${slug}&_embed`,
      { headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error('Failed to fetch post');
    const posts = await response.json();
    return posts[0];
  },

  async getPages(): Promise<WordPressPage[]> {
    const response = await fetch(
      WORDPRESS_ENDPOINTS.pages,
      { headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error('Failed to fetch pages');
    return response.json();
  },

  async getPage(slug: string): Promise<WordPressPage> {
    const response = await fetch(
      `${WORDPRESS_ENDPOINTS.pages}?slug=${slug}`,
      { headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error('Failed to fetch page');
    const pages = await response.json();
    return pages[0];
  },

  async getCategories() {
    const response = await fetch(
      WORDPRESS_ENDPOINTS.categories,
      { headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  },

  async getTags() {
    const response = await fetch(
      WORDPRESS_ENDPOINTS.tags,
      { headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error('Failed to fetch tags');
    return response.json();
  },

  async searchPosts(query: string) {
    const response = await fetch(
      `${WORDPRESS_ENDPOINTS.posts}?search=${encodeURIComponent(query)}&_embed`,
      { headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error('Failed to search posts');
    return response.json();
  }
}; 