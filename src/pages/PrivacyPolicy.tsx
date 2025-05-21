
import React from "react";
import NavBar from "@/components/NavBar";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="py-8 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <ShieldCheck className="text-amber-500 mr-3" size={32} />
            <h1 className="text-4xl font-serif font-bold text-green-800">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Last updated: May 19, 2025
          </p>
          
          <div className="prose prose-green max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2>1. Introduction</h2>
            <p>
              At Herbal Wisdom, we respect your privacy and are committed to protecting your personal data. This Privacy 
              Policy explains how we collect, use, and safeguard your information when you use our website, mobile 
              application, or any services offered by Herbal Wisdom (collectively, the "Services").
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect several types of information from and about users of our Services, including:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, and other contact details you provide when 
                creating an account, subscribing to our service, or contacting us.
              </li>
              <li>
                <strong>Payment Information:</strong> When you make purchases, our payment processors collect payment 
                card details and billing information.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our Services, including browsing patterns, 
                search queries, and feature usage.
              </li>
              <li>
                <strong>Device Information:</strong> Information about your device, IP address, browser type, and 
                operating system.
              </li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and manage your account</li>
              <li>Send you administrative messages, updates, and marketing communications</li>
              <li>Respond to your comments and questions</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
              <li>Detect, prevent, and address technical issues and fraudulent activities</li>
            </ul>
            
            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf 
                (e.g., payment processing, data analysis, email delivery).
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets,
                your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety, 
                or the rights, property, or safety of others.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information with third parties when you have given us 
                your consent to do so.
              </li>
            </ul>
            
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Services and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2>6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
              storage is 100% secure.
            </p>
            
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the 
              right to access, correct, delete, or restrict processing of your data. To exercise these rights, please 
              contact us using the information provided below.
            </p>
            
            <h2>8. Children's Privacy</h2>
            <p>
              Our Services are not intended for children under 13 years of age, and we do not knowingly collect personal 
              information from children under 13.
            </p>
            
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
