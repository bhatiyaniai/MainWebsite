import { useEffect } from 'react';
import Hero from '../components/home/Hero';
// import ProductsOverview from '../components/home/ProductsOverview';
import SolutionsOverview from '../components/home/SolutionsOverview';
import Testimonials from '../components/home/Testimonials';
import SEO from '../components/common/SEO';

const Home = () => {
  return (
    <div>
      <SEO 
        title="Bhatiyani Astute Intelligence - Computer Vision & AI Solutions" 
        description="Transforming industries with cutting-edge Computer Vision and AI solutions. Specializing in automated inventory, real-time vehicle tracking, and drone analytics."
        path="/"
      />
      <Hero />
      {/* <ProductsOverview /> */}
      <SolutionsOverview />
      <Testimonials />
    </div>
  );
};

export default Home; 