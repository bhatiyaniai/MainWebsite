import { Link } from 'react-router-dom';

const ScrollToTopLink = ({ children, to, className, ...props }) => {
  const handleClick = () => {
    // Force scroll to top
    window.scrollTo(0, 0);
    
    // For browsers that support smooth scrolling
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    } catch {
      // Fallback for older browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // For Safari
    }
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollToTopLink; 