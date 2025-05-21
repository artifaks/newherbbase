
import React from "react";
import NavBar from "@/components/NavBar";
import { Leaf, Book, History, Shield, HeartHandshake } from "lucide-react";

const Story = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 font-serif">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            How our passion for herbal wisdom became a mission to share nature's healing gifts
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif text-green-800 mb-6 font-bold">Why We Love Herbs for Healing</h2>
            
            <div className="flex items-start mb-8">
              <div className="mr-4 mt-1">
                <div className="p-3 bg-green-100 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Connection to Nature</h3>
                <p className="text-gray-700 mb-6">
                  Our journey began with a profound appreciation for the healing power of plants. 
                  We believe that herbs provide a direct connection to nature's wisdom, offering 
                  remedies that have supported human health for thousands of years. This ancient 
                  knowledge forms the foundation of our approach to wellness.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <div className="mr-4 mt-1">
                <div className="p-3 bg-green-100 rounded-full">
                  <History className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Traditional Wisdom</h3>
                <p className="text-gray-700 mb-6">
                  We honor the rich traditions of herbal medicine from cultures around the world. 
                  From Traditional Chinese Medicine to Ayurveda to Native American healing practices, 
                  these time-tested approaches offer invaluable insights into the therapeutic 
                  properties of plants. Our mission is to preserve and share this wisdom.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <div className="mr-4 mt-1">
                <div className="p-3 bg-green-100 rounded-full">
                  <Book className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education and Empowerment</h3>
                <p className="text-gray-700 mb-6">
                  We believe in empowering individuals with knowledge about herbal remedies. 
                  By providing comprehensive information about herbs, their benefits, and proper 
                  usage, we hope to help people make informed choices about their health and 
                  well-being. Education is the key to safe and effective herbal practice.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <div className="mr-4 mt-1">
                <div className="p-3 bg-green-100 rounded-full">
                  <HeartHandshake className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
                <p className="text-gray-700 mb-6">
                  Herbs remind us that health is holistic. They work with the body's natural 
                  processes, addressing root causes rather than just symptoms. This gentle, 
                  supportive approach to wellness aligns with our philosophy of treating the 
                  whole person—mind, body, and spirit—rather than isolated conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-amber-50 py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <div className="p-3 bg-amber-100 rounded-full">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-amber-800 mb-4">Important Disclaimer</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <p className="text-gray-700 mb-4">
                  The information provided on Herbal Wisdom is for educational and informational purposes only. 
                  It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="text-gray-700 mb-4">
                  Always seek the advice of your physician or other qualified health provider with any questions 
                  you may have regarding a medical condition. Never disregard professional medical advice or delay 
                  in seeking it because of something you have read on this website.
                </p>
                <p className="text-gray-700">
                  Herbs can interact with medications and may not be appropriate for all individuals. Pregnant women, 
                  nursing mothers, children, and individuals with existing health conditions should be particularly 
                  cautious and consult with a healthcare professional before using any herbal remedies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-green-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 italic">
            "To honor and share the wisdom of herbal healing traditions, empowering individuals 
            with knowledge while promoting responsible, informed use of nature's remedies."
          </p>
        </div>
      </section>

      {/* Removed the duplicate Footer import and component from here */}
    </div>
  );
};

export default Story;
