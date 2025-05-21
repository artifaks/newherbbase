
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import NavBar from '@/components/NavBar';
import { ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';

interface AffiliateProduct {
  id: number;
  name: string;
  description: string;
  price: number | null;
  image_url: string | null;
  affiliate_url: string;
  category: string | null;
  merchant: string | null;
}

const Affiliates: React.FC = () => {
  const [products, setProducts] = useState<AffiliateProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAffiliateProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('affiliate_products')
          .select('*')
          .order('name');

        if (error) {
          throw error;
        }

        setProducts(data || []);
      } catch (err: any) {
        console.error('Error fetching affiliate products:', err);
        setError(err.message);
        toast({
          title: "Error",
          description: "Failed to load affiliate products. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliateProducts();
  }, [toast]);

  const handleProductClick = async (product: AffiliateProduct) => {
    try {
      // Record the click in the database
      await supabase.from('affiliate_clicks').insert({
        product_id: product.id,
        referrer: document.referrer || 'direct',
        user_agent: navigator.userAgent,
      });

      // Open the affiliate link in a new tab
      window.open(product.affiliate_url, '_blank');
    } catch (err) {
      console.error('Error tracking affiliate click:', err);
    }
  };

  // Structured data for products
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image_url,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Recommended Herbal Products - Herbal Wisdom Shop</title>
        <meta name="description" content="Discover our carefully curated selection of herbal wellness products, chosen for quality, effectiveness, and value." />
        <meta name="keywords" content="herbal products, herbal supplements, wellness products, natural remedies" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold text-green-800 mb-8">
          Recommended Products
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-3xl">
          We've carefully selected these herbal wellness products based on quality, effectiveness, 
          and value. When you purchase through these links, we may earn a small commission at no 
          additional cost to you, which helps support our educational content.
        </p>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-2">Error loading products:</p>
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {product.image_url && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image_url} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  {product.merchant && (
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {product.merchant}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold mt-1 mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description || "No description available"}
                  </p>
                  {product.price && (
                    <p className="text-green-700 font-semibold mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                  )}
                  <button
                    onClick={() => handleProductClick(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
                    aria-label={`View ${product.name} product details`}
                  >
                    View Product <ExternalLink size={16} />
                  </button>
                </div>
                {product.category && (
                  <div className="px-6 py-2 bg-green-50">
                    <span className="text-xs text-green-700 font-medium rounded-full px-2 py-1 bg-green-100">
                      {product.category}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {!loading && !error && products.length === 0 && (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <p className="text-gray-600">No affiliate products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Affiliates;
