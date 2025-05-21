
import React from "react";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="py-8 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 font-serif">
            Testimonials
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our community of herb enthusiasts, practitioners, and wellness seekers 
            have to say about their experience with Herbal Wisdom.
          </p>
        </div>
      </div>
      <Testimonials compact={false} />
    </div>
  );
};

export default TestimonialsPage;
