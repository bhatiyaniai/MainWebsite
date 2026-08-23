import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Team from '../components/about/Team';
import SEO from '../components/common/SEO';

const About = () => {
  return (
    <div>
      <SEO 
        title="About Us - Bhatiyani Astute Intelligence" 
        description="Learn about our mission to revolutionize industries using Computer Vision, AI, and edge devices. Meet our leadership team driving innovation."
        path="/about"
      />
      <AboutHero />
      <WhyChooseUs />
      <Team />
    </div> 
  );
};

export default About; 