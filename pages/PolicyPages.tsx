import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';

const PolicyLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 border-b border-slate-100 pb-6">
          {title}
        </h1>
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-p:text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <PolicyLayout title="Terms and Conditions">
      <p className="font-bold">Last Updated: August 14, 2026</p>
      
      <h3>1. Introduction</h3>
      <p>
        Welcome to MasterRoll Technologies ("Company", "we", "our", "us"). These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.
      </p>

      <h3>2. Company Information</h3>
      <p>
        MasterRoll Technologies is wholly owned by Arjun Kumar Prasad. <br />
        <strong>Registered Office:</strong> Ayachigram, Muzaffarpur, Bihar-843108.<br />
        <strong>Corporate Office:</strong> Wework, Bellandur, Bengaluru, Karnataka, India.
      </p>

      <h3>3. Services Provided</h3>
      <p>
        MasterRoll provides an ecosystem for educational institutions, educators, students, and parents, including SaaS solutions, marketplace offerings, LMS platforms, and related digital services.
      </p>

      <h3>4. User Obligations</h3>
      <p>
        Users must provide accurate information during registration. You are responsible for maintaining the confidentiality of your account credentials. You agree not to use our services for any illegal or unauthorized purpose.
      </p>

      <h3>5. Payments and Subscriptions</h3>
      <p>
        Payments for SaaS subscriptions, digital courses, and other services are processed securely via third-party payment gateways (e.g., Razorpay). By making a payment, you agree to the pricing and billing terms presented at checkout.
      </p>

      <h3>6. Intellectual Property</h3>
      <p>
        All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to MasterRoll Technologies and are protected from infringement by local and international legislation and treaties.
      </p>

      <h3>7. Limitation of Liability</h3>
      <p>
        MasterRoll Technologies shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of the platform.
      </p>

      <h3>8. Governing Law</h3>
      <p>
        These terms shall be governed by and constructed in accordance with the laws of India, without reference to conflict of laws principles. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka or Muzaffarpur, Bihar as applicable.
      </p>

      <h3>9. Modifications</h3>
      <p>
        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the platform signifies your acceptance of the updated Terms.
      </p>
    </PolicyLayout>
  );
};

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      <p className="font-bold">Last Updated: August 14, 2026</p>

      <h3>1. Introduction</h3>
      <p>
        MasterRoll Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h3>2. Information We Collect</h3>
      <p>
        We may collect personal information that you voluntarily provide to us when you register on the platform, express an interest in obtaining information about us or our products, or otherwise contact us. The personal information that we collect depends on the context of your interactions with us and the platform, and may include:
      </p>
      <ul>
        <li>Name, email address, phone number</li>
        <li>Billing address and payment details (processed securely by Razorpay)</li>
        <li>Educational institutional data, student/teacher details as provided during ERP usage</li>
      </ul>

      <h3>3. How We Use Your Information</h3>
      <p>
        We use the information we collect or receive:
      </p>
      <ul>
        <li>To facilitate account creation and logon process.</li>
        <li>To fulfill and manage your orders, payments, and subscriptions.</li>
        <li>To deliver and facilitate delivery of services to the user.</li>
        <li>To respond to user inquiries and offer support.</li>
        <li>To send administrative information to you.</li>
      </ul>

      <h3>4. Information Sharing</h3>
      <p>
        We do not share, sell, rent, or trade your personal information with third parties for their commercial purposes. We may share information with third-party service providers (such as payment processors) who perform services for us or on our behalf and require access to such information to do that work.
      </p>

      <h3>5. Data Security</h3>
      <p>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
      </p>

      <h3>6. Contact Us</h3>
      <p>
        If you have questions or comments about this Privacy Policy, please contact us at: <br/>
        <strong>Email:</strong> support@masterroll.in <br/>
        <strong>Phone:</strong> +91 9973216308
      </p>
    </PolicyLayout>
  );
};

export const RefundPolicyPage: React.FC = () => {
  return (
    <PolicyLayout title="Refund and Cancellation Policy">
      <p className="font-bold">Last Updated: August 14, 2026</p>

      <h3>1. General Policy</h3>
      <p>
        MasterRoll Technologies strives to ensure customer satisfaction. However, due to the nature of digital goods and SaaS subscriptions, our refund and cancellation policies are structured as follows.
      </p>

      <h3>2. SaaS Subscriptions (School ERP, LMS, etc.)</h3>
      <p>
        Subscriptions can be cancelled at any time from your dashboard. Cancellations take effect at the end of the current billing cycle. We do not provide prorated refunds for mid-cycle cancellations. If you face technical issues that prevent you from using the service, please contact support within 7 days of payment for a review of your case.
      </p>

      <h3>3. Digital Courses and Content</h3>
      <p>
        For purchases of digital courses or downloadable content, refunds are generally not provided once the content has been accessed or downloaded. If the content is defective or not as described, please contact us within 48 hours of purchase.
      </p>

      <h3>4. Physical Goods (Marketplace)</h3>
      <p>
        If applicable, physical goods ordered through our platform may be returned within 7 days of delivery if they are defective or damaged. Please contact support with photographic evidence to initiate a return/refund process.
      </p>

      <h3>5. Refund Process</h3>
      <p>
        Approved refunds will be processed within 5-7 business days and credited back to the original method of payment (via Razorpay). Processing times may vary depending on your bank or credit card issuer.
      </p>

      <h3>6. Contact</h3>
      <p>
        To request a cancellation or refund, please email <strong>support@masterroll.in</strong> with your order details and reason for the request.
      </p>
    </PolicyLayout>
  );
};

export const ShippingPolicyPage: React.FC = () => {
  return (
    <PolicyLayout title="Shipping and Delivery Policy">
      <p className="font-bold">Last Updated: August 14, 2026</p>

      <h3>1. Digital Services & SaaS</h3>
      <p>
        MasterRoll Technologies primarily offers software as a service (SaaS) and digital products. Delivery of these services is instantaneous upon successful payment confirmation.
      </p>
      <ul>
        <li><strong>SaaS Access:</strong> Login credentials and dashboard access are provided immediately to the registered email address.</li>
        <li><strong>Digital Courses:</strong> Access to course modules and downloadable materials is granted instantly within the user's LMS portal.</li>
      </ul>

      <h3>2. Physical Goods (Marketplace/Vendor Orders)</h3>
      <p>
        In instances where physical goods (e.g., school supplies, uniforms, hardware) are procured through the MasterRoll vendor marketplace:
      </p>
      <ul>
        <li><strong>Processing Time:</strong> Orders are typically processed within 2-3 business days.</li>
        <li><strong>Shipping Method:</strong> We partner with reputable courier services. Delivery typically takes 5-10 business days depending on the destination within India.</li>
        <li><strong>Shipping Charges:</strong> Shipping costs are calculated at checkout based on the delivery location and order weight.</li>
        <li><strong>Tracking:</strong> A tracking number will be provided via email once the order is dispatched.</li>
      </ul>

      <h3>3. Delivery Delays</h3>
      <p>
        While we strive for timely deliveries, MasterRoll Technologies is not liable for delays caused by third-party logistics partners, natural disasters, or unforeseen circumstances.
      </p>

      <h3>4. Contact Support</h3>
      <p>
        If you have not received your digital access or if your physical order is significantly delayed, please reach out to us at <strong>support@masterroll.in</strong>.
      </p>
    </PolicyLayout>
  );
};

export const ContactUsPage: React.FC = () => {
  return (
    <PolicyLayout title="Contact Us">
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
          <p className="text-slate-600 mb-8">
            Whether you have a question about our products, pricing, or need technical support, our team is ready to answer all your questions.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Email Us</h4>
                <p className="text-slate-600 mt-1">support@masterroll.in</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Call Us</h4>
                <p className="text-slate-600 mt-1">+91 9973216308</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Corporate Office</h4>
                <p className="text-slate-600 mt-1">
                  MasterRoll Technologies<br />
                  Wework, Bellandur,<br />
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Registered Office</h4>
                <p className="text-slate-600 mt-1">
                  MasterRoll Technologies (wholly owned by Arjun Kumar Prasad)<br />
                  Ayachigram, Muzaffarpur,<br />
                  Bihar-843108, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-brand-500 focus:border-brand-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-brand-500 focus:border-brand-500" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-brand-500 focus:border-brand-500" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </PolicyLayout>
  );
};
