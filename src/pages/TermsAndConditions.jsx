import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const TermsAndConditions = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl font-bold mb-8 dark:text-white">Terms and Conditions</h1>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary-600 dark:prose-headings:text-primary-400 prose-a:text-primary-600 dark:prose-a:text-primary-400">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Bhatiyani Astute Intelligence ("Company", "we", "our", "us"). These Terms and Conditions govern your use of our website located at <a href="https://www.bhatiyaniai.com">www.bhatiyaniai.com</a> (together or individually "Service") operated by Bhatiyani Astute Intelligence.
              </p>
              <p>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h2>2. Intellectual Property Rights</h2>
              <p>
                Our Service and its original content, features, and functionality are and will remain the exclusive property of Bhatiyani Astute Intelligence and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Bhatiyani Astute Intelligence.
              </p>

              <h2>3. Content on the Website</h2>
              <p>
                Our Service allows you to view information related to our company, products, and services. The content displayed on our website is for informational purposes only. We reserve the right to modify, update, or remove content at any time without prior notice.
              </p>

              <h2>4. Prohibited Activities</h2>
              <p>You agree not to engage in any of the following activities:</p>
              <ul>
                <li>Using the Service in any way that violates any applicable national or international law or regulation.</li>
                <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service.</li>
                <li>Using the Service in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Service.</li>
                <li>Using any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service.</li>
                <li>Introducing any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
              </ul>

              <h2>5. Third-Party Links</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by Bhatiyani Astute Intelligence. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Bhatiyani Astute Intelligence shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>

              <h2>6. Disclaimer of Warranties</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              <p>
                Bhatiyani Astute Intelligence, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Bhatiyani Astute Intelligence, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>

              <h2>8. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Bhatiyani Astute Intelligence and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your access credentials; or b) a breach of these Terms.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
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

export default TermsAndConditions; 