
// Simple analytics service to track user behavior
// This could be extended to integrate with Google Analytics, Mixpanel, etc.

export interface EventData {
  page?: string;
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class AnalyticsService {
  private initialized = false;
  
  init() {
    if (this.initialized) return;
    
    // Set up listeners for common events
    this.trackPageViews();
    this.trackClicks();
    
    console.info("Analytics service initialized");
    this.initialized = true;
  }
  
  private trackPageViews() {
    // Track initial page view
    this.trackEvent({
      action: 'view',
      category: 'page',
      page: window.location.pathname
    });
    
    // Listen for route changes (for SPAs)
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      // @ts-ignore
      originalPushState.apply(this, arguments);
      
      // Track page view after a slight delay to ensure URL is updated
      setTimeout(() => {
        analyticsService.trackEvent({
          action: 'view',
          category: 'page',
          page: window.location.pathname
        });
      }, 100);
    };
  }
  
  private trackClicks() {
    // Track clicks on important elements
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || 
          target.closest('button') || 
          target.getAttribute('role') === 'button') {
        
        const button = target.tagName === 'BUTTON' ? target : target.closest('button') || target;
        const buttonText = button.textContent?.trim() || '';
        const buttonId = button.id || '';
        
        this.trackEvent({
          action: 'click',
          category: 'button',
          label: buttonId || buttonText
        });
      }
      
      // Track link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target : target.closest('a');
        const href = link?.getAttribute('href') || '';
        
        if (href && !href.startsWith('javascript:')) {
          this.trackEvent({
            action: 'click',
            category: 'link',
            label: href
          });
        }
      }
    });
  }
  
  trackEvent(data: EventData) {
    // Log events to console in development
    console.info(`Analytics event:`, data);
    
    // Here you would normally send events to your analytics provider
    // Example: gtag('event', data.action, { event_category: data.category, ... });
    
    // For a complete implementation, you could integrate with:
    // - Google Analytics
    // - Mixpanel
    // - Amplitude
    // - Plausible
    // - Custom backend
  }
  
  trackSubscription(source: string) {
    this.trackEvent({
      action: 'subscribe',
      category: 'newsletter',
      label: source
    });
  }
  
  trackHerbView(herbName: string) {
    this.trackEvent({
      action: 'view',
      category: 'herb',
      label: herbName
    });
  }
  
  trackEbookView(ebookTitle: string) {
    this.trackEvent({
      action: 'view',
      category: 'ebook',
      label: ebookTitle
    });
  }
  
  trackSearch(query: string) {
    this.trackEvent({
      action: 'search',
      category: 'herb',
      label: query
    });
  }
  
  trackShare(platform: string, contentType: string, contentId: string) {
    this.trackEvent({
      action: 'share',
      category: platform,
      label: `${contentType}:${contentId}`
    });
  }
}

const analyticsService = new AnalyticsService();
export default analyticsService;
