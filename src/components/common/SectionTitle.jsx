import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import PropTypes from 'prop-types';

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  centered = false, 
  light = false, 
  className = '' 
}) => {
  return (
    <motion.div 
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-2 ${light ? 'text-primary-300' : 'text-primary-600 dark:text-primary-400'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-secondary-900 dark:text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? 'text-secondary-300' : 'text-secondary-600 dark:text-secondary-300'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  centered: PropTypes.bool,
  light: PropTypes.bool,
  className: PropTypes.string
};

export default SectionTitle; 