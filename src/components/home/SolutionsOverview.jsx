import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { fadeInLeft, fadeInRight, fadeInUp } from '../../utils/animations';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const solutions = [
  {
    id: 1,
    title: 'Inventory Counting & Management',
    description: 'AI-powered tracking and automation for stock monitoring. Our solution offers real-time visibility and control of your inventory.',
    image: '/images/1ivcm.png',
    link: '/solutions',
    stats: [
      { value: '99%', label: 'Accuracy Rate' },
      { value: '60%', label: 'Time Saved' },
      { value: '40%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 2,
    title: 'Heavy Machinery Monitoring',
    description: 'Real-time tracking of industrial equipment to ensure operational safety and efficiency. Prevent accidents and optimize usage.',
    image: '/images/Heavy Machinery Monitoring.png',
    link: '/solutions',
    stats: [
      { value: '45%', label: 'Fewer Accidents' },
      { value: '30%', label: 'Maintenance Costs' },
      { value: '24/7', label: 'Monitoring' }
    ]
  },
  {
    id: 3,
    title: 'Quality Inspection & Security',
    description: 'Combining AI-driven defect detection and real-time anomaly detection for enhanced security in warehouses and factories.',
    image: '/images/Quality Inspection & Security.png',
    link: '/solutions',
    stats: [
      { value: '95%', label: 'Detection Rate' },
      { value: '80%', label: 'Faster Inspection' },
      { value: '50%', label: 'Reduced Theft' }
    ]
  }
];

const SolutionsOverview = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Solutions"
          title="AI-Powered Computer Vision Solutions"
          description="We leverage onsite edge devices, drones, and cloud infrastructure to provide real-time insights and automation for businesses across various industries."
          centered={true}
          className="mb-16"
        />

        <div ref={ref} className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.id} 
              className="card p-0 overflow-hidden group"
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} h-full`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-5/12 relative h-72 lg:h-auto min-h-[300px] overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none flex items-end">
                    <div className="p-6 lg:p-8 w-full">
                      <div className="grid grid-cols-3 gap-2 lg:gap-4 text-white">
                        {solution.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-primary-400 mb-1">{stat.value}</div>
                            <div className="text-xs lg:text-sm text-secondary-200">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12 p-8 lg:p-10 flex flex-col">
                  <h3 className="text-3xl font-bold mb-3 dark:text-white">{solution.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-6 text-lg leading-relaxed">{solution.description}</p>
                  

                  
                  {/* Features List */}
                  <ul className="mb-10 space-y-3">
                    <li className="flex items-start">
                      <div className="bg-primary-50 dark:bg-primary-900/20 p-1 rounded-full mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-secondary-700 dark:text-secondary-300 font-medium">Real-time analytics and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 dark:bg-primary-900/20 p-1 rounded-full mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-secondary-700 dark:text-secondary-300 font-medium">AI-powered decision making</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 dark:bg-primary-900/20 p-1 rounded-full mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-secondary-700 dark:text-secondary-300 font-medium">Seamless integration with existing systems</span>
                    </li>
                  </ul>

                  {/* Action Button */}
                  <div className="mt-4">
                    <Link 
                      to="/solutions" 
                      className="inline-flex items-center gap-3 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white px-6 py-3 rounded-full font-semibold text-sm shadow-sm border border-secondary-100 dark:border-secondary-700 hover:shadow-md transition-all group-hover/btn:border-primary-200 dark:group-hover/btn:border-primary-900"
                    >
                      Explore Our Solutions
                      <div className="bg-primary-600 text-white p-1.5 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/solutions" 
            className="btn btn-outline"
          >
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview; 