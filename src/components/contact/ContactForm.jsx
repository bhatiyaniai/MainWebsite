import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

// Anti-abuse rate limiting constants
const COOLDOWN_SECONDS = 45;
const MAX_SUBMISSIONS_PER_HOUR = 5;
const MIN_FILL_TIME_MS = 2000; // 2 seconds minimum to prevent instant bot submissions

// RFC 5322 compliant regex for email validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Phone number regex (optional country code, spaces, dashes, parentheses, digits)
const PHONE_REGEX = /^[+]?[0-9\s\-()]{0,25}$/;

/**
 * Sanitizes input string to prevent control character injection
 */
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return Array.from(str)
    .filter(char => {
      const code = char.charCodeAt(0);
      return (code >= 32 && code !== 127) || code === 10 || code === 13 || code === 9;
    })
    .join('')
    .trim();
};

const ContactForm = ({ type = 'sales', title, subtitle, description, email = 'support@bhatiyaniai.com' }) => {
  const form = useRef();
  const formMountedAt = useRef(Date.now());

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Honeypot field for bot trapping (invisible to humans)
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Initialize EmailJS securely
  useEffect(() => {
    formMountedAt.current = Date.now();
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
      try {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      } catch {
        // Silently continue; error will be caught on submission
      }
    }
  }, []);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldownRemaining <= 0) return;
    const interval = setInterval(() => {
      setCooldownRemaining(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldownRemaining]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Checks client-side rate limiting to mitigate form spam / DDoS
   */
  const checkRateLimit = () => {
    try {
      const storageKey = 'bai_form_submissions';
      const rawHistory = sessionStorage.getItem(storageKey);
      const now = Date.now();
      const history = rawHistory ? JSON.parse(rawHistory) : [];

      // Filter out submissions older than 1 hour (3600000 ms)
      const recentHistory = history.filter(ts => (now - ts) < 3600000);

      // Check minimum cooldown from last submission
      if (recentHistory.length > 0) {
        const lastSubmission = recentHistory[recentHistory.length - 1];
        const elapsedSeconds = Math.floor((now - lastSubmission) / 1000);
        if (elapsedSeconds < COOLDOWN_SECONDS) {
          const waitTime = COOLDOWN_SECONDS - elapsedSeconds;
          setCooldownRemaining(waitTime);
          return { allowed: false, message: `Please wait ${waitTime} seconds before submitting another message.` };
        }
      }

      // Check max submissions in 1 hour
      if (recentHistory.length >= MAX_SUBMISSIONS_PER_HOUR) {
        return { 
          allowed: false, 
          message: `Submission limit reached. For urgent inquiries, please email us directly at ${email}.` 
        };
      }

      return { allowed: true, recentHistory };
    } catch {
      // If sessionStorage fails, allow submission
      return { allowed: true, recentHistory: [] };
    }
  };

  const recordSubmission = (recentHistory) => {
    try {
      const now = Date.now();
      const updated = [...(recentHistory || []), now];
      sessionStorage.setItem('bai_form_submissions', JSON.stringify(updated));
      setCooldownRemaining(COOLDOWN_SECONDS);
    } catch {
      // Ignore sessionStorage errors
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // 1. Honeypot check: If bot filled out the hidden trap field, simulate success without sending
      if (honeypot.trim() !== '') {
        await new Promise(r => setTimeout(r, 1000));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        return;
      }

      // 2. Minimum fill time check: Bots submit forms in < 2 seconds
      const elapsedFillTime = Date.now() - formMountedAt.current;
      if (elapsedFillTime < MIN_FILL_TIME_MS) {
        // Unusually fast submission; delay and simulate completion
        await new Promise(r => setTimeout(r, 1200));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        return;
      }

      // 3. Client-side Rate Limit check
      const rateLimitCheck = checkRateLimit();
      if (!rateLimitCheck.allowed) {
        setSubmitStatus('error');
        setErrorMessage(rateLimitCheck.message);
        return;
      }

      // 4. Input sanitization & validation
      const sanitizedName = sanitizeInput(formData.name);
      const sanitizedEmail = sanitizeInput(formData.email);
      const sanitizedPhone = sanitizeInput(formData.phone);
      const sanitizedSubject = sanitizeInput(formData.subject);
      const sanitizedMessage = sanitizeInput(formData.message);

      if (!sanitizedName || sanitizedName.length > 100) {
        throw new Error("Please provide a valid name (maximum 100 characters).");
      }

      if (!sanitizedEmail || sanitizedEmail.length > 100 || !EMAIL_REGEX.test(sanitizedEmail)) {
        throw new Error("Please provide a valid email address.");
      }

      if (sanitizedPhone && (!PHONE_REGEX.test(sanitizedPhone) || sanitizedPhone.length > 25)) {
        throw new Error("Please provide a valid phone number.");
      }

      if (!sanitizedSubject || sanitizedSubject.length > 150) {
        throw new Error("Please provide a subject line (maximum 150 characters).");
      }

      if (!sanitizedMessage || sanitizedMessage.length > 3000) {
        throw new Error("Please enter a message (maximum 3000 characters).");
      }

      // 5. Configuration check
      const isConfigured = 
        EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY" &&
        EMAILJS_CONFIG.SERVICE_ID !== "YOUR_EMAILJS_SERVICE_ID" &&
        ((type === 'sales' && EMAILJS_CONFIG.SALES_TEMPLATE_ID !== "YOUR_EMAILJS_SALES_TEMPLATE_ID") ||
         (type === 'support' && EMAILJS_CONFIG.SUPPORT_TEMPLATE_ID !== "YOUR_EMAILJS_SUPPORT_TEMPLATE_ID"));

      if (!isConfigured) {
        // Fallback gracefully without revealing sensitive internals
        throw new Error(`The contact service is currently undergoing scheduled maintenance. Please reach out to us directly at ${email}.`);
      }

      // Current timestamp formatted for Asia/Kolkata
      const submissionDate = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      });

      const formattedMessage = `
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone || 'Not provided'}
Subject: ${sanitizedSubject}
Form Type: ${type === 'sales' ? 'Sales Enquiry' : 'Support Request'}
Submission Date: ${submissionDate}

Message:
${sanitizedMessage}
      `.trim();

      const templateParams = {
        to_email: 'support@bhatiyaniai.com',
        from_name: sanitizedName,
        from_email: sanitizedEmail,
        phone: sanitizedPhone || 'Not provided',
        subject: `${type.toUpperCase()} Enquiry: ${sanitizedSubject}`,
        message: sanitizedMessage,
        formatted_message: formattedMessage,
        reply_to: sanitizedEmail,
        form_type: type === 'sales' ? 'Sales Enquiry' : 'Support Request',
        submission_date: submissionDate
      };

      const templateId = type === 'sales' 
        ? EMAILJS_CONFIG.SALES_TEMPLATE_ID 
        : EMAILJS_CONFIG.SUPPORT_TEMPLATE_ID;

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        templateId,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error("Message dispatch failed. Please try again later.");
      }

      // Record successful submission for rate limiting
      recordSubmission(rateLimitCheck.recentHistory);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Clear success banner after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 8000);

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Contact form submission error:", error);
      }

      let userMessage = error.message;
      if (!userMessage || userMessage.includes('EmailJS') || userMessage.includes('status code')) {
        userMessage = `There was an unexpected error sending your message. Please try again later or contact us directly at ${email}.`;
      }

      setSubmitStatus('error');
      setErrorMessage(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-10">
        {subtitle && <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{subtitle}</p>}
        <h2 className="text-3xl font-bold mb-4 dark:text-white">{title}</h2>
        <p className="text-secondary-600 dark:text-secondary-300 mb-6">{description}</p>
        {email && (
          <a href={`mailto:${email}`} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
            {email}
          </a>
        )}
      </div>

      <form ref={form} onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Anti-spam Honeypot field (hidden from legitimate users, filled by bots) */}
        <div 
          style={{ 
            position: 'absolute', 
            left: '-9999px', 
            width: '1px', 
            height: '1px', 
            overflow: 'hidden', 
            opacity: 0, 
            pointerEvents: 'none' 
          }} 
          aria-hidden="true"
        >
          <label htmlFor="company_fax_hp">Do not fill this field</label>
          <input
            type="text"
            id="company_fax_hp"
            name="company_fax_hp"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
              placeholder="John Doe"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              maxLength={100}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
              placeholder="john@example.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={25}
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
            placeholder="+91 9480603623"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            maxLength={150}
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
            placeholder={type === 'sales' ? 'Product Inquiry' : 'Support Request'}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            maxLength={3000}
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white resize-none"
            placeholder="Please describe how we can help you..."
          ></textarea>
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            disabled={isSubmitting || cooldownRemaining > 0}
            className={`btn btn-primary w-full ${isSubmitting || cooldownRemaining > 0 ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Securely...
              </span>
            ) : cooldownRemaining > 0 ? (
              `Please wait ${cooldownRemaining}s`
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-center" role="alert">
            Thank you for your message! Our team will get back to you shortly.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-center" role="alert">
            {errorMessage}
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
