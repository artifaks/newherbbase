
import React from "react";
import NavBar from "@/components/NavBar";
import { Cookie } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="py-8 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Cookie className="text-amber-500 mr-3" size={32} />
            <h1 className="text-4xl font-serif font-bold text-green-800">Cookie Policy</h1>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Last updated: May 19, 2025
          </p>
          
          <div className="prose prose-green max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the website owners. 
              Cookies allow us to recognize your device and store information about your preferences or past actions on our website.
            </p>
            
            <h2>2. How We Use Cookies</h2>
            <p>
              At Herbal Wisdom, we use cookies and similar technologies for the following purposes:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. 
                They enable basic functions like page navigation, access to secure areas, and remembering your login session. 
                The website cannot function properly without these cookies.
              </li>
              <li>
                <strong>Preference Cookies:</strong> These cookies allow our website to remember choices you make 
                (such as your preferred language or the region you are in) and provide enhanced, more personal features.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> We use analytics cookies to collect information about how visitors 
                use our website. This helps us improve our website's functionality and user experience. 
                These cookies collect aggregated, anonymous data.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. 
                The intention is to display ads that are relevant and engaging for the individual user.
              </li>
            </ul>
            
            <h2>3. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We use services from the following 
              third parties, which may place cookies on your device:
            </p>
            <ul>
              <li>Google Analytics (for website usage analysis)</li>
              <li>Payment processors (for processing purchases securely)</li>
              <li>Social media platforms (for sharing and social media integration)</li>
            </ul>
            
            <h2>4. Managing Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through browser settings. To find out more about cookies, 
              including how to see what cookies have been set and how to manage and delete them, visit 
              <a href="http://www.allaboutcookies.org" className="text-green-600 hover:text-green-800"> www.allaboutcookies.org</a>.
            </p>
            <p>
              To opt out of being tracked by Google Analytics across all websites, visit 
              <a href="http://tools.google.com/dlpage/gaoptout" className="text-green-600 hover:text-green-800"> tools.google.com/dlpage/gaoptout</a>.
            </p>
            
            <h2>5. Cookie Consent</h2>
            <p>
              When you first visit our website, a cookie banner will inform you about our use of cookies. 
              By continuing to browse our website after being presented with the cookie notice, you consent to our use of cookies 
              as described in this policy. You can withdraw your consent at any time by changing your browser settings to reject cookies.
            </p>
            
            <h2>6. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. 
              Any changes will be posted on this page with an updated "Last updated" date.
            </p>
            
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
