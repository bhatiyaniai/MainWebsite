import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SectionTitle from '../common/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const industries = [
  {
    id: 1,
    name: 'Warehouses & Logistic Parks',
    description: 'Optimize inventory management, ensure security, and streamline operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    bgClass: 'from-blue-600 to-blue-400'
  },
  {
    id: 2,
    name: 'Manufacturing Facilities',
    description: 'Enhance quality control, monitor equipment, and ensure workplace safety.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    bgClass: 'from-primary-600 to-primary-400'
  },
  {
    id: 3,
    name: 'Automobile & Transportation',
    description: 'Improve fleet management, enhance security, and optimize logistics operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    bgClass: 'from-orange-600 to-orange-400'
  },
  {
    id: 4,
    name: 'Retail & E-commerce',
    description: 'Analyze customer behavior, prevent theft, and streamline inventory management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    bgClass: 'from-accent-500 to-accent-300'
  },
  {
    id: 5,
    name: 'Smart Cities & Security',
    description: 'Enhance public safety, optimize traffic management, and improve infrastructure monitoring.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    bgClass: 'from-green-600 to-green-400'
  },
  {
    id: 6,
    name: 'Educational Institutions',
    description: 'Improve campus security, monitor student attendance, and enhance facility management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    bgClass: 'from-purple-600 to-purple-400'
  },
  {
    id: 7,
    name: 'Healthcare Sector',
    description: 'Monitor patient safety, enhance facility security, and optimize resource utilization.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    bgClass: 'from-red-600 to-red-400'
  },
  {
    id: 8,
    name: 'Corporate Enterprises',
    description: 'Enhance workplace security, optimize facility management, and ensure regulatory compliance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    // bgClass removed for standardization
  }
];

const Industries = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <SectionTitle
          subtitle="Industries We Serve"
          title="AI Solutions Across Diverse Sectors"
          description="Our technology adapts to the unique challenges faced by different industries."
          centered={true}
          className="mb-16"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              className="card p-8 flex flex-col h-full group"
              variants={fadeInUp}
            >
              <div className="text-primary-500 dark:text-primary-500 mb-6 w-12 h-12 transition-transform duration-300 group-hover:-translate-y-1">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">{industry.name}</h3>
              <p className="text-secondary-600 dark:text-secondary-400 flex-grow">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-6 max-w-3xl mx-auto">
            Don't see your industry? Our flexible AI solutions can be customized for virtually any sector with visual data requirements.
          </p>
          <Link 
            to="/contact/sales" 
            className="btn btn-primary inline-flex items-center"
          >
            Discuss Your Industry Needs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries; 