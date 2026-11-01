// EmailJS configuration
// Credentials are preferentially loaded from Vite environment variables for security.
// To configure, set these in your deployment environment or in a local .env file.
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  SALES_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_SALES_TEMPLATE_ID || "YOUR_EMAILJS_SALES_TEMPLATE_ID",
  SUPPORT_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_SUPPORT_TEMPLATE_ID || "YOUR_EMAILJS_SUPPORT_TEMPLATE_ID"
};
