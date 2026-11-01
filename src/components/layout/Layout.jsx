import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  // More aggressive scroll to top on route change
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      // Apply multiple scroll methods to ensure it works across all browsers
      window.scrollTo(0, 0);
      
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
      
      // Delay another scroll attempt to handle any race conditions
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);
      
      prevPathRef.current = pathname;
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 