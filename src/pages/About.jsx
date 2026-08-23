import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Team from '../components/about/Team';

const About = () => {
  return (
    <div>
      <AboutHero />
      <WhyChooseUs />
      <Team />
    </div> 
  );
};

export default About; 