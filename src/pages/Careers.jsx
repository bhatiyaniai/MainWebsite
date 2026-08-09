import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SectionTitle from '../components/common/SectionTitle';

const positions = [
  {
    id: 1,
    title: 'Senior Computer Vision Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    description: 'We are looking for a Senior Computer Vision Engineer to develop cutting-edge computer vision algorithms and models for our AI platform.'
  },
  {
    id: 2,
    title: 'Machine Learning Researcher',
    department: 'Research',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our research team to explore novel approaches to machine learning and deep learning in the context of video analytics.'
  },
  {
    id: 3,
    title: 'Frontend Developer (React)',
    department: 'Engineering',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    description: 'Help build intuitive and responsive user interfaces for our AI-powered video analytics platform.'
  },
  {
    id: 4,
    title: 'Technical Project Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead the development and deployment of our AI solutions for enterprise clients across various industries.'
  }
];

const benefits = [
  'Competitive salary and equity package',
  'Comprehensive health, dental, and vision insurance',
  'Flexible work arrangements including remote options',
  'Generous paid time off and parental leave',
  'Professional development stipend',
  'Regular team events and retreats'
];

const Careers = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            subtitle="Join Our Team"
            title="Careers at Bhatiyani Astute Intelligence"
            description="We're on a mission to revolutionize how machines understand visual data. Join us in building the future of computer vision and AI."
            centered={true}
          />
          
          <div className="mt-8 text-center">
            <p className="text-secondary-600 dark:text-secondary-300 mb-2">For general inquiries about careers at Bhatiyani Astute Intelligence:</p>
            <a href="mailto:support@bhatiyaniai.com" className="text-primary-600 dark:text-primary-400 font-medium text-lg hover:underline">
              support@bhatiyaniai.com
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 dark:text-white">Why Join Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 dark:bg-secondary-900 p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">Innovative Technology</h4>
              <p className="text-secondary-600 dark:text-secondary-300">
                Work on cutting-edge AI and computer vision technology that's changing how businesses operate. You'll have the opportunity to solve complex problems and create solutions that have real-world impact.
              </p>
            </div>
            <div className="bg-secondary-50 dark:bg-secondary-900 p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">Growth & Development</h4>
              <p className="text-secondary-600 dark:text-secondary-300">
                We're committed to helping our team members grow both professionally and personally. You'll have access to learning resources, mentorship, and opportunities to expand your skills and advance your career.
              </p>
            </div>
            <div className="bg-secondary-50 dark:bg-secondary-900 p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">Collaborative Culture</h4>
              <p className="text-secondary-600 dark:text-secondary-300">
                Join a diverse team of experts who are passionate about technology and innovation. We value collaboration, open communication, and the unique perspectives that each team member brings.
              </p>
            </div>
            <div className="bg-secondary-50 dark:bg-secondary-900 p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">Work-Life Balance</h4>
              <p className="text-secondary-600 dark:text-secondary-300">
                We believe in working smarter, not harder. We offer flexible work arrangements and prioritize maintaining a healthy work-life balance for all our employees.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 dark:text-white">Benefits & Perks</h3>
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-secondary-700 dark:text-secondary-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-secondary-50 dark:bg-secondary-900 p-12 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 dark:text-white">Interested in Joining Our Team?</h3>
          <p className="text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about AI and computer vision technology. 
            If you're interested in joining our team, please send your resume to:
          </p>
          <a href="mailto:support@bhatiyaniai.com" className="text-primary-600 dark:text-primary-400 font-medium text-xl hover:underline">
            support@bhatiyaniai.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers; 