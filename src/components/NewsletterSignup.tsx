
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import analyticsService from '@/utils/analyticsService';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type FormData = z.infer<typeof formSchema>;

interface NewsletterSignupProps {
  location?: string;
  variant?: 'default' | 'compact' | 'footer';
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  location = 'default',
  variant = 'default',
  title = 'Subscribe to Our Newsletter',
  description = 'Get weekly herbal wisdom tips and exclusive content delivered to your inbox.',
  buttonText = 'Subscribe',
  className = '',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Track the subscription event
    analyticsService.trackSubscription(location);
    
    try {
      // Here you would typically send the email to your API or service
      console.log('Newsletter signup:', data.email, 'from', location);
      
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "We couldn't sign you up at this time. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styles based on variant
  const getStyles = () => {
    switch (variant) {
      case 'compact':
        return {
          container: 'bg-herbal-50 p-4 rounded-lg',
          title: 'text-lg font-semibold text-herbal-800',
          form: 'flex gap-2 mt-3',
          inputWrapper: 'flex-grow',
        };
      case 'footer':
        return {
          container: 'text-white',
          title: 'text-amber-300 font-semibold',
          form: 'flex flex-col sm:flex-row gap-2 mt-3',
          inputWrapper: 'flex-grow',
        };
      default:
        return {
          container: 'bg-herbal-50 border border-herbal-100 p-6 rounded-xl shadow-sm',
          title: 'text-xl font-serif font-bold text-herbal-800',
          form: 'flex flex-col sm:flex-row gap-3 mt-4',
          inputWrapper: 'flex-grow',
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`${styles.container} ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Mail className={variant === 'footer' ? "text-amber-300" : "text-herbal-600"} size={20} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      
      <p className={variant === 'footer' ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
        {description}
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputWrapper}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      className={variant === 'footer' ? "bg-herbal-700 border-herbal-600 text-white placeholder:text-gray-400" : ""}
                    />
                  </FormControl>
                  <FormMessage className="text-xs mt-1" />
                </FormItem>
              )}
            />
          </div>
          
          <Button 
            type="submit" 
            className={variant === 'footer' ? "bg-amber-500 hover:bg-amber-600 text-white" : ""}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : buttonText}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsletterSignup;
