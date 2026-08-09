import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const Sitemap = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Our Location</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Find our office in the heart of Bengaluru. We're located in Gandhinagar, easily accessible and ready to welcome you.
          </p>
        </div>

        {/* Company Information */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          {/* Company Details */}
          <div className="bg-secondary-50 dark:bg-secondary-900 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">Address</h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  # 23, 1st Floor, 5th Cross, Gandhinagar,<br />
                  Bengaluru, Karnataka, India 560009
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">Phone Numbers</h3>
                <ul className="space-y-1 text-secondary-700 dark:text-secondary-300">
                  <li>
                    <a href="tel:+919480603623" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      +91 9480603623
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919845043204" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      +91 9845043204
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">Email</h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  <a href="mailto:support@bhatiyaniai.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    support@bhatiyaniai.com
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">Business Hours</h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
                <p className="text-secondary-700 dark:text-secondary-300 mt-2">
                  <span className="font-semibold text-primary-600 dark:text-primary-400">Emergency Support:</span> 24/7 for critical systems
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://www.google.com/maps?kgmid=/g/1tfdx8yl&hl=en-IN&shndl=30&shem=lcuae,npsc2&kgs=556ee26ac48ea2d0&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KbsIXx0SFq47MTagOstvrj5k&daddr=24,+5th+Cross+Rd,+Gandhi+Nagar,+Bengaluru,+Karnataka+560009,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-secondary-50 dark:bg-secondary-900 p-4 rounded-lg shadow-sm">
            <div className="aspect-square h-full w-full rounded-lg overflow-hidden">
              {/* Using Google Maps iframe with exact address */}
              <iframe 
                title="Bhatiyani Astute Intelligence Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9942929535915!2d77.57552367404402!3d12.974242914884506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzI3LjMiTiA3N8KwMzQnMzIuMCJF!5e0!3m2!1sen!2sin!4v1717424456358!5m2!1sen!2sin&iwloc=&q=%2323%2C%205th%20Cross%2C%20Gandhinagar%2C%20Bengaluru%2C%20Karnataka%2C%20India%20560009"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        {/* Transportation Options */}
        <motion.div 
          className="bg-secondary-50 dark:bg-secondary-900 p-8 rounded-lg shadow-sm mb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Getting Here</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">
                <span className="mr-2">🚗</span> By Car
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300">
                We're located in central Gandhinagar with easy access from major roads. Limited parking is available nearby.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">
                <span className="mr-2">🚇</span> Public Transport
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300">
                The nearest metro station is Majestic (1.2km). Several bus routes stop within walking distance of our office.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">
                <span className="mr-2">🚕</span> Taxi/Rideshare
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300">
                Taxis and rideshare services like Uber and Ola can drop you directly at our building entrance.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Nearby Landmarks */}
        <motion.div 
          className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 p-8 rounded-lg shadow-sm"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-primary-700 dark:text-primary-400">Nearby Landmarks</h2>
          
          <ul className="list-disc list-inside space-y-2 text-secondary-700 dark:text-secondary-300">
            <li>Majestic Bus Station (1.2 km)</li>
            <li>Bengaluru City Railway Station (1.5 km)</li>
            <li>Freedom Park (0.8 km)</li>
            <li>Bangalore Palace (3.2 km)</li>
            <li>Cubbon Park (2.7 km)</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap; 