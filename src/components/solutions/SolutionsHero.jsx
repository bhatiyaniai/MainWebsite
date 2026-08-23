import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';

const SolutionsHero = () => {
  return (
    <section className="pt-32 pb-16 bg-secondary-50 dark:bg-secondary-900 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-2 text-primary-600 dark:text-primary-400">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900 dark:text-white">
              Cutting-Edge AI Solutions for Modern Businesses
            </h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
              We leverage onsite edge devices, drones, and cloud infrastructure to provide real-time insights
              and automation for businesses across various industries.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
                Real-time Monitoring
              </span>
              <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-300 rounded-full text-sm font-medium">
                Automated Analysis
              </span>
              <span className="px-4 py-2 bg-secondary-100 dark:bg-secondary-800/50 text-secondary-600 dark:text-secondary-300 rounded-full text-sm font-medium">
                Cloud Integration
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 relative"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <img 
                src="/images/Our Solutions.png" 
                alt="AI Solutions" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-200 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50 z-0"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent-200 dark:bg-accent-900/20 rounded-full filter blur-3xl opacity-50 z-0"></div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-100/50 to-transparent dark:from-secondary-900/50 rounded-xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero; 