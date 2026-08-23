import { useEffect } from 'react';
import SolutionsHero from '../components/solutions/SolutionsHero';
import CoreServices from '../components/solutions/CoreServices';
import Benefits from '../components/solutions/Benefits';
import Industries from '../components/solutions/Industries';
import SEO from '../components/common/SEO';

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SEO 
        title="AI Solutions - Bhatiyani Astute Intelligence" 
        description="Explore our robust AI solutions including Heavy Machinery Monitoring, Automatic Number Plate Recognition (ANPR), and Quality Inspection automation."
        path="/solutions"
      />
      <SolutionsHero />
      <CoreServices />
      <Benefits />
      <Industries />
    </div>
  );
};

export default Solutions; 