
import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  compact?: boolean;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah J.",
    title: "Wellness Coach",
    content: "Herbal Wisdom has transformed how I approach natural remedies. The detailed information about each herb has been invaluable in my practice. I recommend this resource to all my clients!",
    avatar: "/lovable-uploads/a9ee8983-8edf-4672-8c04-7ee7bb04c52f.png",
    rating: 5
  },
  {
    id: 2,
    name: "Michael T.",
    title: "Chronic Pain Sufferer",
    content: "After years of relying on conventional medication, I discovered natural alternatives through Herbal Wisdom. Their guidance on anti-inflammatory herbs has significantly reduced my dependency on pain killers.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Elizabeth K.",
    title: "Integrative Medicine Physician",
    content: "As a doctor who values both conventional and traditional medicine, I appreciate the scientifically-backed approach Herbal Wisdom takes. The information is thorough, accurate, and presented in a way that respects both modern science and traditional knowledge.",
    rating: 5
  },
  {
    id: 4,
    name: "David R.",
    title: "Urban Gardener",
    content: "Not only have I learned about the medicinal properties of herbs, but the growing guides have helped me establish a thriving herb garden in my small apartment. The growing conditions section is particularly detailed!",
    rating: 4
  },
  {
    id: 5,
    name: "Priya S.",
    title: "Ayurvedic Practitioner",
    content: "Herbal Wisdom does an excellent job of honoring various herbal traditions, including Ayurveda. I've been practicing for 15 years, and I still learn new things from their comprehensive database.",
    rating: 5
  },
  {
    id: 6,
    name: "James W.",
    title: "Premium Subscriber",
    content: "The premium subscription is absolutely worth it! The personalized consultation with their herbalists gave me insights specific to my health concerns that I couldn't find anywhere else.",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "#fbbf24" : "none"}
          stroke={i < rating ? "#fbbf24" : "#d1d5db"}
          className="mr-0.5"
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({ 
  testimonials = defaultTestimonials,
  compact = false 
}) => {
  // If compact mode, only show first 3 testimonials
  const displayTestimonials = compact ? testimonials.slice(0, 3) : testimonials;
  
  return (
    <section className={`py-12 ${compact ? 'bg-white' : 'bg-green-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-green-800 mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community of herbalists, wellness practitioners, and individuals on their journey with herbal medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-amber-200">
                    {testimonial.avatar ? (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    ) : (
                      <AvatarFallback className="bg-green-100 text-green-800">
                        {testimonial.name.substring(0, 2)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-gray-600 italic flex-grow">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {compact && (
          <div className="text-center mt-8">
            <a href="/testimonials" className="text-green-600 hover:text-green-800 font-semibold transition-colors underline decoration-2 underline-offset-4 hover:decoration-green-400">
              Read More Testimonials &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
