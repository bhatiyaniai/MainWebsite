import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl font-bold mb-8 dark:text-white">Privacy Policy</h1>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary-600 dark:prose-headings:text-primary-400 prose-a:text-primary-600 dark:prose-a:text-primary-400">
              <h2>1. Introduction</h2>
              <p>
                Bhatiyani Astute Intelligence ("we", "our", or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website at <a href="https://www.bhatiyaniai.com">www.bhatiyaniai.com</a> ("Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                Our website is primarily informational in nature, and we do not automatically collect personal information from visitors. We do not use cookies, tracking technologies, or other automated data collection methods. The only personal information we collect is what you voluntarily provide to us through our contact forms or when you send us emails.
              </p>
              <p>
                When you contact us through our website, we may collect:
              </p>
              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name (if applicable)</li>
                <li>Any other information you choose to provide in your message to us</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information you provide to us to:</p>
              <ul>
                <li>Respond to your inquiries, questions, and/or other requests</li>
                <li>Process any requests for information about our services</li>
                <li>Improve our website and services</li>
                <li>Contact you regarding your interest in our services</li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
              </p>
              <p>
                We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h2>6. Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of any third-party websites. We are not responsible for the privacy practices or the content of such websites. You should review the privacy policies of such websites before providing them with any personal information.
              </p>

              <h2>7. Children's Privacy</h2>
              <p>
                Our Website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, please do not provide any information on this Website. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information.
              </p>

              <h2>8. Your Rights Under Indian Law</h2>
              <p>
                Under the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, you have the right to:
              </p>
              <ul>
                <li>Access personal information we hold about you</li>
                <li>Correct inaccuracies in your personal information</li>
                <li>Withdraw consent for the collection and processing of your personal information</li>
                <li>Request deletion of your personal information</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>

              <h2>9. Changes to Our Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>By email: support@bhatiyaniai.com</li>
                <li>By phone: +91 9480603623</li>
                <li>By mail: # 23, 1st Floor, 5th Cross, Gandhinagar, Bengaluru, Karnataka, India 560009</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 