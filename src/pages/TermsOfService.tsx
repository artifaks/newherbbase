
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Terms of Service | Herbal Wisdom"
        description="Read our Terms of Service for details about using Herbal Wisdom's website, app, and services."
        canonical="https://herbalwisdom.com/terms"
        type="website"
      />
      
      <NavBar />
      <div className="py-8 bg-gradient-to-b from-green-50 to-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Shield className="text-amber-500 mr-3" size={32} />
            <h1 className="text-4xl font-serif font-bold text-green-800">Terms of Service</h1>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Last updated: May 19, 2025
          </p>
          
          <div className="prose prose-green max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Herbal Wisdom ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your use of our
              website located at <a href="https://herbalwisdom.com" className="text-green-600">herbalwisdom.com</a>,
              mobile application, and any associated services or content (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you disagree
              with any part of these Terms, you may not access the Services.
            </p>
            
            <h2>2. Communications</h2>
            <p>
              By creating an account or subscribing to our newsletter, you agree to receive communications from us,
              including marketing emails. You may opt out of marketing communications at any time by following the
              unsubscribe instructions included in our emails.
            </p>
            
            <h2>3. User Accounts</h2>
            <p>
              Some features of our Services require you to create an account. When you create an account, you must provide
              accurate and complete information. You are solely responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account if we determine, in our sole discretion, that you
              have violated these Terms.
            </p>
            
            <h2>4. Subscriptions and Payments</h2>
            <p>
              <strong>Free Services:</strong> We offer certain Services free of charge. We reserve the right to modify
              or terminate these free Services at any time.
            </p>
            <p>
              <strong>Premium Services:</strong> We offer premium subscription services for a fee. By subscribing to our premium
              Services, you agree to the following terms:
            </p>
            <ul>
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period</li>
              <li>Payment will be charged to your payment method at confirmation of purchase</li>
              <li>Fees are non-refundable except as required by law or as specified in our Refund Policy</li>
              <li>We reserve the right to change subscription fees upon notice</li>
            </ul>
            
            <h2>5. User Content</h2>
            <p>
              Our Services may allow you to submit content such as comments, reviews, or forum posts ("User Content").
              You retain ownership of your User Content, but you grant us a worldwide, non-exclusive, royalty-free license
              to use, reproduce, modify, publish, and display such User Content in connection with our Services.
            </p>
            <p>
              You are solely responsible for your User Content. By submitting User Content, you represent and warrant that:
            </p>
            <ul>
              <li>You own or have the necessary licenses, rights, and permissions to use and authorize us to use your User Content</li>
              <li>Your User Content does not infringe upon the intellectual property rights of any third party</li>
              <li>Your User Content does not violate the rights of any person or entity</li>
            </ul>
            
            <h2>6. Intellectual Property</h2>
            <p>
              Our Services and their original content, features, and functionality are and will remain the exclusive property
              of Herbal Wisdom and its licensors. Our Services are protected by copyright, trademark, and other intellectual
              property laws.
            </p>
            <p>
              You may not use our name, logo, or other proprietary information without our prior written consent.
            </p>
            
            <h2>7. Medical Disclaimer</h2>
            <p>
              The information provided through our Services is for educational purposes only and is not intended to be a
              substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician
              or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
            <p>
              Never disregard professional medical advice or delay seeking it because of something you have read or learned
              through our Services. The use of any information provided by our Services is solely at your own risk.
            </p>
            
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, in no event shall Herbal Wisdom, its directors, employees, partners,
              agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            
            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Services immediately, without prior notice or
              liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue using the Services or contact us to request
              account deletion.
            </p>
            
            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
              posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our
              Services after any such changes constitutes acceptance of the updated Terms.
            </p>
            
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
              Herbal Wisdom is established, without regard to its conflict of law provisions.
            </p>
            
            <h2>12. Dispute Resolution</h2>
            <p>
              Any disputes arising out of or related to these Terms or the Services shall be resolved through binding
              arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be
              conducted in English and shall take place in the jurisdiction where Herbal Wisdom is established.
            </p>
            
            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br /><br />
              <a href="mailto:admin@wellnessisgolden.com" className="text-green-600 hover:text-green-800">
                admin@wellnessisgolden.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
