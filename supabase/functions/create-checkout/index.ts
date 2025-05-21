
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper function to log steps
const logStep = (step: string, details?: any) => {
  console.log(`[CREATE-CHECKOUT] ${step}${details ? ': ' + JSON.stringify(details) : ''}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");
    let reqBody;
    try {
      reqBody = await req.json();
      logStep("Request body parsed", reqBody);
    } catch (jsonError) {
      logStep("JSON parse error", jsonError);
      return new Response(
        JSON.stringify({ error: "Invalid request format" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }
    
    // Check if this is a wellness bundle purchase
    const { ebookId, bundleId, priceId } = reqBody;
    
    // If bundleId is provided, we're dealing with a wellness bundle purchase
    if (bundleId === "wellness-bundle") {
      logStep("Processing wellness bundle purchase");
      
      const bundleDetails = {
        id: "wellness-bundle",
        title: "Complete Wellness Bundle",
        price: 9.99,
        description: "Collection of 3 wellness eBooks covering herbal remedies, natural health, and holistic wellness",
        cover_url: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/wellnessbundle//3eBooks.png",
        file_url: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/wellnessbundle//WellnessBundle.zip"
      };
      
      // Initialize Supabase client
      const supabaseUrl = Deno.env.get("SUPABASE_URL");
      const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
      
      if (!supabaseUrl || !supabaseAnonKey) {
        logStep("Missing Supabase credentials");
        return new Response(
          JSON.stringify({ error: "Server configuration error" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
        );
      }
      
      const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
      
      // Authenticate user (optional but recommended)
      let user = null;
      const authHeader = req.headers.get("Authorization");
      if (authHeader) {
        try {
          const token = authHeader.replace("Bearer ", "");
          const { data } = await supabaseClient.auth.getUser(token);
          user = data.user;
          logStep("User authenticated", { userId: user?.id, email: user?.email });
        } catch (authError) {
          logStep("Auth error", authError);
          // Continue without user
        }
      }
      
      // Use STRIPE_SECRET_KEY as the primary key, with PICA_STRIPE_CONNECTION_KEY as fallback
      const stripeKey = Deno.env.get("STRIPE_SECRET_KEY") || Deno.env.get("PICA_STRIPE_CONNECTION_KEY");
      if (!stripeKey) {
        logStep("Missing Stripe key");
        return new Response(
          JSON.stringify({ error: "Payment configuration error" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
        );
      }
      
      // Initialize Stripe
      const stripe = new Stripe(stripeKey, {
        apiVersion: "2023-10-16",
      });
      
      // Check if user has a Stripe customer record (if authenticated)
      let customerId;
      if (user?.email) {
        try {
          const customers = await stripe.customers.list({ email: user.email, limit: 1 });
          if (customers.data.length > 0) {
            customerId = customers.data[0].id;
            logStep("Customer found", { customerId });
          }
        } catch (stripeError) {
          logStep("Stripe customer fetch error", stripeError);
          // Continue without customer ID
        }
      }
      
      logStep("Preparing checkout session for bundle", { 
        bundleId: bundleDetails.id, 
        title: bundleDetails.title,
        price: bundleDetails.price,
        priceId: priceId 
      });
      
      // Construct line items for the checkout session - use priceId if provided
      const line_items = priceId ? 
        [{ price: priceId, quantity: 1 }] : 
        [{
          price_data: {
            currency: "usd",
            product_data: {
              name: bundleDetails.title,
              description: bundleDetails.description,
              images: [bundleDetails.cover_url],
            },
            unit_amount: Math.round(bundleDetails.price * 100),
          },
          quantity: 1,
        }];
      
      // Create the checkout session
      const origin = req.headers.get("origin") || "http://localhost:3000";
      
      logStep("Creating checkout session for bundle", { 
        customerId, 
        line_items,
        success_url: `${origin}/bundle-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/`
      });
      
      try {
        const session = await stripe.checkout.sessions.create({
          customer: customerId,
          customer_email: !customerId && user?.email ? user.email : undefined,
          payment_method_types: ["card"],
          line_items,
          mode: "payment",
          success_url: `${origin}/bundle-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${origin}/`,
          metadata: {
            bundleId: bundleDetails.id,
            userId: user?.id || "anonymous",
            fileUrl: bundleDetails.file_url,
          },
        });
        
        logStep("Bundle checkout session created", { sessionId: session.id, url: session.url });
        
        return new Response(
          JSON.stringify({ url: session.url }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      } catch (checkoutError) {
        logStep("Stripe checkout creation error", checkoutError);
        return new Response(
          JSON.stringify({ 
            error: "Failed to create checkout session", 
            details: checkoutError.message 
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
        );
      }
    } else if (ebookId) {
      // Regular eBook purchase flow
      
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
    
    if (!supabaseUrl || !supabaseAnonKey) {
      logStep("Missing Supabase credentials");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }
    
    const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    
    logStep("Fetching ebook", { id: ebookId });
    // Get ebook details
    const { data: ebook, error: ebookError } = await supabaseClient
      .from("ebooks")
      .select("id, title, price, description, cover_url, file_url")
      .eq("id", ebookId)
      .single();
      
    if (ebookError) {
      logStep("Ebook fetch error", ebookError);
      return new Response(
        JSON.stringify({ error: "Ebook not found" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 404 }
      );
    }
    
    if (!ebook) {
      logStep("No ebook found", { id: ebookId });
      return new Response(
        JSON.stringify({ error: "Ebook not found" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 404 }
      );
    }
    
    logStep("Ebook found", ebook);
    
    // Authenticate user (optional but recommended)
    let user = null;
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      try {
        const token = authHeader.replace("Bearer ", "");
        const { data } = await supabaseClient.auth.getUser(token);
        user = data.user;
        logStep("User authenticated", { userId: user?.id, email: user?.email });
      } catch (authError) {
        logStep("Auth error", authError);
        // Continue without user
      }
    }
    
    // Use STRIPE_SECRET_KEY as the primary key, with PICA_STRIPE_CONNECTION_KEY as fallback
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY") || Deno.env.get("PICA_STRIPE_CONNECTION_KEY");
    if (!stripeKey) {
      logStep("Missing Stripe key");
      return new Response(
        JSON.stringify({ error: "Payment configuration error" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }
    
    // Initialize Stripe
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-10-16",
    });
    
    // Check if user has a Stripe customer record (if authenticated)
    let customerId;
    if (user?.email) {
      try {
        const customers = await stripe.customers.list({ email: user.email, limit: 1 });
        if (customers.data.length > 0) {
          customerId = customers.data[0].id;
          logStep("Customer found", { customerId });
        }
      } catch (stripeError) {
        logStep("Stripe customer fetch error", stripeError);
        // Continue without customer ID
      }
    }
    
    // Format price for Stripe (in cents)
    const price = parseFloat(ebook.price) || 0;
    const unitAmount = Math.round(price * 100);
    
    logStep("Preparing checkout session", { 
      ebookId: ebook.id, 
      title: ebook.title, 
      price: price,
      unitAmount: unitAmount 
    });
    
    // Use a placeholder image or the actual cover image if available
    const imageUrl = ebook.cover_url || "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&h=400";
    
    // Construct line items for the checkout session
    const line_items = [{
      price_data: {
        currency: "usd",
        product_data: {
          name: ebook.title,
          description: ebook.description?.substring(0, 1000) || "Herbal Wisdom eBook",
          images: [imageUrl],
        },
        unit_amount: unitAmount,
      },
      quantity: 1,
    }];
    
    // Create the checkout session
    const origin = req.headers.get("origin") || "http://localhost:3000";
    
    logStep("Creating checkout session", { 
      customerId, 
      success_url: `${origin}/ebooks/${ebookId}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/ebooks/${ebookId}`
    });
    
    try {
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        customer_email: !customerId && user?.email ? user.email : undefined,
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${origin}/ebooks/${ebookId}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/ebooks/${ebookId}`,
        metadata: {
          ebookId: ebook.id,
          userId: user?.id || "anonymous",
          fileUrl: ebook.file_url || null,
        },
      });
      
      logStep("Checkout session created", { sessionId: session.id, url: session.url });
      
      // Record the order in Supabase if user is authenticated
      if (user?.id) {
        try {
          // We're using a console log instead of directly saving to a purchases table
          // since the user_purchases table doesn't exist in our schema yet
          logStep("Order recorded", { userId: user.id, ebookId: ebook.id, sessionId: session.id });
        } catch (orderError) {
          logStep("Order recording error", orderError);
          // Continue even if order recording fails
        }
      }
      
      return new Response(
        JSON.stringify({ url: session.url }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } catch (checkoutError) {
      logStep("Stripe checkout creation error", checkoutError);
      return new Response(
        JSON.stringify({ 
          error: "Failed to create checkout session", 
          details: checkoutError.message 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }
    } else {
      logStep("Missing product ID");
      return new Response(
        JSON.stringify({ error: "Missing product ID" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }
    
  } catch (error) {
    logStep("Unhandled error", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to process payment" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
