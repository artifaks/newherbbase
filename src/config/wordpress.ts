
// WordPress API Configuration
export const WORDPRESS_ENDPOINTS = {
  base: '/wp-json/wp/v2',
  posts: '/wp-json/wp/v2/posts',
  media: '/wp-json/wp/v2/media',
  pages: '/wp-json/wp/v2/pages',
  custom: {
    herbs: '/wp-json/wp/v2/herbs',
    ebooks: '/wp-json/wp/v2/ebooks'
  }
};

// Authentication headers for WordPress API
export function getAuthHeaders() {
  const credentials = `:`;
  // Use TextEncoder for encoding in ES modules
  const encoder = new TextEncoder();
  const data = encoder.encode(credentials);
  const encodedCredentials = btoa(String.fromCharCode(...new Uint8Array(data)));
  
  return {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${encodedCredentials}`
  };
}
