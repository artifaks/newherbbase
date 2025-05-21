
import React from "react";
import NavBar from "@/components/NavBar";
import { Receipt } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="py-8 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Receipt className="text-amber-500 mr-3" size={32} />
            <h1 className="text-4xl font-serif font-bold text-green-800">Refund Policy</h1>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Last updated: May 19, 2025
          </p>
          
          <div className="prose prose-green max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2>1. Digital Products</h2>
            <p>
              Due to the nature of digital products, all sales of digital items including e-books, 
              digital guides, downloadable content, and premium subscription access are <strong>final and 
              non-refundable</strong>. Once a digital product has been purchased and access has been granted, 
              no refunds will be issued.
            </p>
            
            <h2>2. Physical Products</h2>
            <p>
              For physical products such as books, herb kits, or other tangible items:
            </p>
            <ul>
              <li>
                <strong>15-Day Return Window:</strong> We accept returns within 15 days of delivery, provided 
                the product remains unopened and in its original packaging.
              </li>
              <li>
                <strong>Condition Requirements:</strong> Products must be returned in their original, unopened 
                condition with all packaging intact, seals unbroken, and all included accessories and materials.
              </li>
              <li>
                <strong>Damaged or Defective Items:</strong> If you receive a damaged or defective item, please 
                contact customer service within 7 days of receipt, with photos of the damaged item and packaging.
              </li>
            </ul>
            
            <h2>3. Subscription Services</h2>
            <p>
              Monthly or annual subscriptions to Herbal Wisdom premium services:
            </p>
            <ul>
              <li>
                <strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellations will 
                take effect at the end of your current billing period.
              </li>
              <li>
                <strong>No Prorated Refunds:</strong> We do not offer refunds for partial subscription periods. 
                When you cancel, you will continue to have access until the end of your current billing period.
              </li>
              <li>
                <strong>New Subscribers:</strong> For first-time subscribers who cancel within the first 7 days, we 
                may offer a full refund at our discretion. Please contact customer support.
              </li>
            </ul>
            
            <h2>4. Return Process for Physical Products</h2>
            <p>To return a physical product:</p>
            <ol>
              <li>Contact us at admin@wellnessisgolden.com to request a return authorization.</li>
              <li>Include your order number and reason for return in your email.</li>
              <li>Once approved, we will provide return shipping instructions.</li>
              <li>Ship the item back to us in its original packaging.</li>
              <li>Refunds will be processed to the original payment method within 10 business days after we receive and inspect the returned item.</li>
            </ol>
            
            <h2>5. Return Shipping Costs</h2>
            <p>
              Return shipping costs are the responsibility of the customer, except in cases where the item 
              was damaged or defective upon arrival. In these cases, we will provide a prepaid return shipping label.
            </p>
            
            <h2>6. Refund Processing</h2>
            <p>
              Once your return is received and inspected, we will send you an email to notify you that we have 
              received your returned item. We will also notify you of the approval or rejection of your refund.
              If approved, your refund will be processed, and a credit will automatically be applied to your original 
              method of payment within 10 business days.
            </p>
            
            <h2>7. Exceptions</h2>
            <p>
              Some products are exempt from this refund policy, including:
            </p>
            <ul>
              <li>Clearance items or items marked as "Final Sale"</li>
              <li>Gift cards</li>
              <li>Personalized or custom-made products</li>
              <li>Products that have been opened, used, or tampered with</li>
            </ul>
            
            <h2>8. Cancellation of Orders</h2>
            <p>
              If you wish to cancel an order before it has been shipped, please contact us immediately 
              at admin@wellnessisgolden.com. We will attempt to process your cancellation request if the order 
              has not already been prepared for shipping.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions regarding our refund policy, please contact us at:
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

export default RefundPolicy;
