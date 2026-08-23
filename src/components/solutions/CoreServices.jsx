import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeInLeft } from '../../utils/animations';
import SectionTitle from '../common/SectionTitle';

const services = [
  {
    id: 1,
    title: 'Inventory Counting & Management',
    description: 'AI-powered tracking and automation for stock monitoring.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Heavy Machinery Monitoring',
    description: 'Real-time tracking of industrial equipment to ensure operational safety and efficiency.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Automatic Number Plate Recognition (ANPR)',
    description: 'Intelligent vehicle identification and access control.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Quality Inspection',
    description: 'AI-driven defect detection and product quality assessment.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Docking Management System',
    description: 'Creating an efficient communication system between the dock/dispatch team and the transport team.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Theft Detection & Security',
    description: 'Real-time anomaly detection for enhanced security in warehouses and factories.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

const additionalServices = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom-built websites tailored to business needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Augmented Reality (AR) Solutions',
    description: 'Interactive and immersive experiences for industrial applications.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: '3D Modeling Using AI',
    description: 'AI-powered 3D modeling to reduce designing time and effort.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Robotics Solutions',
    description: 'Robotics to reduce ergonomic issues in the workplace.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const CoreServices = () => {
  return (
    <section className="py-24 bg-[#3A2A20] dark:bg-secondary-950 text-white">
      <div className="container-custom">
        
        {/* Core Services Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column - Sticky Heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit self-start relative z-10">
            <motion.div 
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Engineered For <br className="hidden lg:block" />
                <span className="text-primary-500">Accuracy, Flexibility, and Speed</span>
              </h2>
              <p className="text-lg text-secondary-300 mb-8">
                We leverage onsite edge devices, drones, and cloud infrastructure to provide real-time insights and automation for businesses.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="lg:w-2/3">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-white/5 dark:bg-black/40 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 dark:hover:bg-black/60 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-primary-500/20"
                  variants={fadeInUp}
                >
                  <div className="text-secondary-400 group-hover:text-primary-500 transition-colors duration-300 mb-8 w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-secondary-400">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Beyond <span className="text-primary-500">AI & Computer Vision</span>
            </h2>
            <p className="text-secondary-300 text-lg">
              We also offer additional technology services to support your business goals with the same commitment to quality.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {additionalServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white/5 dark:bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 dark:hover:bg-black/60 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-primary-500/20"
                variants={fadeInUp}
              >
                <div className="text-secondary-400 group-hover:text-primary-500 mb-6 w-12 h-12">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-secondary-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices; 