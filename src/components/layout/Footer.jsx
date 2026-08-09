import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import ScrollToTopLink from '../common/ScrollToTopLink';
import logo from '../../assets/logo.png';

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { name: 'All Solutions', to: '/solutions' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', to: '/resources/blog' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', to: '/about' },
      { name: 'Careers', to: '/contact/careers' },
      { name: 'Find Us', to: '/find-us' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms & Conditions', to: '/terms' },
      { name: 'Privacy Policy', to: '/privacy' }
    ]
  }
];

const FooterLinkItem = ({ link }) => {
  return (
    <li>
      <ScrollToTopLink
        to={link.to}
        className="text-secondary-300 hover:text-primary-400 transition-colors"
      >
        {link.name}
      </ScrollToTopLink>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4 space-x-2">
              <img src={logo} alt="Company Logo" className="h-8 w-8" />
              <Link to="/" className="text-2xl font-heading font-bold text-primary-400 mb-4 inline-block">
                Bhatiyani Astute Intelligence
              </Link>
            </div>
            <p className="text-secondary-300 mt-4 max-w-xs">
              Pioneering the future of computer vision and AI-powered video analytics to transform businesses and improve lives.
            </p>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Contact Us</h4>
              <p className="text-secondary-300 mb-2">
                # 23, 1st Floor, 5th Cross, Gandhinagar,
                <br />
                Bengaluru, Karnataka, India 560009
              </p>
              <p className="text-secondary-300 mb-2">
                <a href="tel:+919480603623" className="hover:text-primary-400 transition-colors">
                  +91 9480603623
                </a>
                <br />
                <a href="tel:+919845043204" className="hover:text-primary-400 transition-colors">
                  +91 9845043204
                </a>
              </p>
              <p className="text-secondary-300">
                <a href="mailto:support@bhatiyaniai.com" className="hover:text-primary-400 transition-colors">
                  support@bhatiyaniai.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column) => (
            <motion.div key={column.title} variants={fadeInUp}>
              <h3 className="font-heading font-medium text-lg mb-4 text-white">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <FooterLinkItem key={link.name} link={link} />
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              &copy; {new Date().getFullYear()} Bhatiyani Astute Intelligence. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <ScrollToTopLink to="/terms" className="text-secondary-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </ScrollToTopLink>
                </li>
                <li>
                  <ScrollToTopLink to="/privacy" className="text-secondary-400 hover:text-white transition-colors">
                    Privacy Policy
                  </ScrollToTopLink>
                </li>
                <li>
                  <ScrollToTopLink to="/find-us" className="text-secondary-400 hover:text-white transition-colors">
                    Find Us
                  </ScrollToTopLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 