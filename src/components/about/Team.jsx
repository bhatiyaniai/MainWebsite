import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import adhipImg from '../../assets/adhip-upright.JPG';
import ChandrikaImg from '../../assets/Chandrika.jpg';
import KishanImg from '../../assets/Kishan.jpg';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    id: 2,
    name: 'Chandrika Chhatria',
    title: 'Strategic Director & Operational Insights Leader',
    bio: 'Strategic Director, known for transforming real operational pain points into human-centered technology solutions. Leader in social impact and design thinking.',
    image: ChandrikaImg,
    linkedin: '',
    email: ''
  },
  {
    id: 1,
    name: 'Adhip Sarda',
    title: 'Founder & CEO',
    bio: 'Founder & CTO blending robotics, AI, and manufacturing expertise to drive industrial innovation. Focused on scalable, real-world automation solutions.',
    image: adhipImg,
    linkedin: 'https://www.linkedin.com/in/adhipsarda26/',
    email: 'support@bhatiyaniai.com'
  },
  {
    id: 3,
    name: 'Kishan Surana',
    title: 'Strategic Director & Retail Innovation Pioneer',
    bio: 'Strategic Director with 30+ years in luxury retail and manufacturing. Expert in quality, digital transformation, and bridging tradition with technology.',
    image: KishanImg,
    linkedin: '',
    email: ''
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Leadership"
          title="Meet the Visionaries Behind Bhatiyani Astute Intelligence"
          description="Our team combines expertise in AI, computer vision, and business transformation."
          centered={true}
          className="mb-16"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={fadeInUp}>
              <Link to={`/about/leader/${member.id}`} className="card group block h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 object-center ${(member.id === 2 || member.id === 3) ? 'object-top' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-primary-300 mb-3">{member.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary-600 dark:text-secondary-300">{member.bio}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-secondary-600 dark:text-secondary-300 mb-8">
            Our team of 50+ experts includes PhDs and industry veterans from top universities and tech companies around the world.
          </p>
          <a 
            href="/contact/careers" 
            className="btn btn-outline"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team; 