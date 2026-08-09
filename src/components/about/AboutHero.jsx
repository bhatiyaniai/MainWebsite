import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';

const AboutHero = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900 dark:text-white">
              Pioneering The Future of Computer Vision
            </h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
              We are a technology-driven company specializing in computer vision solutions for warehouse management, 
              industrial monitoring, Robotics and automation, 3D modeling using Artificial Intelligence. 
              Our expertise lies in developing AI-powered systems that enhance operational efficiency, 
              security, and quality control across warehouses, factories, and various industries.
            </p>
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
                className="w-full h-full object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bhatiyani Astute Intelligence Team"
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

export default AboutHero; 