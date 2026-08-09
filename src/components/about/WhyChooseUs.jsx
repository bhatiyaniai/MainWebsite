import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SectionTitle from '../common/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const reasons = [
  {
    id: 1,
    title: 'Operational Cost Reduction',
    description: 'Automated data entry, decreased manual inspections, lower need for labor, and reduced compliance-related expenses.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Time Efficient',
    description: 'Reduction in stockouts and product rejections, with faster quality inspection and inventory management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Safety & Revenue Enhancement',
    description: 'Reduced security breaches and workplace accidents. Faster decision-making processes and optimized warehouse space utilization.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Innovative AI Solutions',
    description: 'Automating industrial operations with state-of-the-art technology.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Onsite & Cloud-based Monitoring',
    description: 'Hybrid infrastructure for real-time insights and decision-making.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.9-6.975A5 5 0 105.1 7.975 4 4 0 003 11v4z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Research-Driven Approach',
    description: 'Led by experienced professionals in AI and computer vision.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Tailored Solutions',
    description: 'Custom AI applications designed to meet industry-specific needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <SectionTitle
          subtitle="Why Choose Us"
          title="What Sets Us Apart"
          description="We're committed to excellence in every aspect of our service."
          centered={true}
          className="mb-16"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className="p-6 rounded-xl bg-secondary-50 dark:bg-secondary-900 hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{reason.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-300">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-primary-700 dark:text-primary-300">OUR MOTTO</h3>
            <p className="text-xl font-medium italic text-secondary-700 dark:text-secondary-300">
              "YOUR CHALLENGE IS OUR PROGRESS"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 