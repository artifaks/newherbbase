
import React from "react";
import NavBar from "@/components/NavBar";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="py-8 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="text-amber-500 mr-3" size={32} />
            <h1 className="text-4xl font-serif font-bold text-green-800">Disclaimer</h1>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Last updated: May 19, 2025
          </p>
          
          <div className="prose prose-green max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2>1. Educational Purpose Only</h2>
            <p>
              The information provided through Herbal Wisdom, including our website, mobile application, 
              herb database, articles, e-books, and any other content or services (collectively, the "Services"), 
              is for educational and informational purposes only. It is not intended to diagnose, treat, cure, 
              or prevent any disease, illness, or health condition.
            </p>
            
            <h2>2. Not Medical Advice</h2>
            <p>
              The content provided by Herbal Wisdom should not be considered medical advice and is not a substitute 
              for professional medical diagnosis, treatment, or advice. Always seek the advice of your physician or 
              other qualified healthcare provider with any questions you may have regarding a medical condition or 
              before starting any new health regimen including the use of herbs or herbal supplements.
            </p>
            
            <h2>3. Individual Results May Vary</h2>
            <p>
              The effects of herbs and natural remedies can vary greatly between individuals. What works for one 
              person may not work for another, and some herbs may cause adverse reactions in certain individuals. 
              The information we provide is general in nature and not tailored to any individual's specific health 
              needs or circumstances.
            </p>
            
            <h2>4. Personal Responsibility</h2>
            <p>
              By using our Services, you acknowledge and agree that you are taking responsibility for your own 
              health decisions. It is your responsibility to research and verify any information you find on our 
              platform and to consult with appropriate healthcare providers before making health decisions based 
              on our content.
            </p>
            
            <h2>5. Potential Risks</h2>
            <p>
              Herbs and herbal preparations can interact with medications and may cause side effects. Some herbs may 
              not be suitable for pregnant or nursing women, children, elderly individuals, or those with certain health 
              conditions. Always consult with a qualified healthcare provider before using herbs, especially if you are 
              taking medications, have existing health conditions, or are pregnant or nursing.
            </p>
            
            <h2>6. Accuracy of Information</h2>
            <p>
              While we strive to provide accurate and up-to-date information, we make no representations or warranties 
              about the completeness, reliability, or accuracy of the information on our platform. Any action you take 
              based on the information found on Herbal Wisdom is strictly at your own risk.
            </p>
            
            <h2>7. Expert Consultation</h2>
            <p>
              The experts featured on our platform provide general information based on their knowledge and experience. 
              Their advice is not a substitute for personalized medical care. Any consultations provided through our 
              premium services are for educational purposes only and do not establish a doctor-patient relationship.
            </p>
            
            <h2>8. External Links</h2>
            <p>
              Our Services may contain links to external websites or content. We are not responsible for the content or 
              privacy practices of these external sites. Inclusion of links does not imply endorsement.
            </p>
            
            <h2>9. Limitation of Liability</h2>
            <p>
              By using our Services, you agree to hold Herbal Wisdom, its owners, operators, employees, and affiliates 
              harmless from any and all claims, demands, or damages arising from your use of our Services or any information 
              provided through them.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us at:
              <br /><br />
              <a href="mailto:admin@wellnessisgolden.com" className="text-green-600 hover:text-green-800">
                admin@wellnessisgolden.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
