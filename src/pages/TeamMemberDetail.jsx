import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import adhipImg from '../assets/adhip-upright.JPG';
import ChandrikaImg from '../assets/Chandrika.jpg';
import KishanImg from '../assets/Kishan.jpg';

const adhipSections = [
  {
    title: 'Visionary Technologist & Founder',
    content: `Adhip Sarda is the Founder and Chief Technology Officer of Bhatiyani Astute Intelligence. He bridges advanced robotics, AI, and real-world manufacturing, driving the company's mission to revolutionize industrial operations through intelligent automation.`
  },
  {
    title: 'Technical & Industry Expertise',
    content: `• Robotics & Automation Engineering (2022 graduate)
• AI & Computer Vision for manufacturing
• Real-world experience in family-run PP/HDPE manufacturing
• Internship experience in healthcare automation and computer vision`
  },
  {
    title: 'Entrepreneurial Vision',
    content: `Adhip founded Bhatiyani Astute Intelligence to close the gap between cutting-edge AI research and practical manufacturing needs, focusing on scalable, affordable, and impactful solutions for industry transformation.`
  }
];

const adhipQuote = `"The future belongs to those who can see the connection between cutting-edge technology and real-world challenges. Our success comes from combining deep technical expertise with genuine understanding of how people work, how businesses operate, and how technology can make both better."`;

const chandrikaSections = [
  {
    title: 'Empathetic Innovator & Strategic Director',
    content: `Mrs. Chandrika Chhatria is the Strategic Director & Operational Insights Leader at Bhatiyani Astute Intelligence. Her journey from listening to real operational pain points in Indian warehouses to co-founding a technology company is rooted in authentic problem understanding, creative design thinking, and a passion for social impact.`
  },
  {
    title: 'Operational & Social Impact Expertise',
    content: `• Deep insights from observing large-scale warehouse and supply chain operations
• Leadership in Mission Shakti, empowering women and driving community development
• Design thinking background, enabling practical, human-centered technology solutions`
  },
  {
    title: 'Vision for Human-Centered Innovation',
    content: `Chandrika champions technology that solves real problems, enhances worker safety, and delivers practical value—ensuring AI and automation serve people, not replace them.`
  }
];

const chandrikaQuote = `"The most powerful innovations emerge when we truly listen to people's challenges and combine that understanding with creative thinking and technological possibility. Our solutions work because they're born from genuine empathy, guided by design thinking, and driven by the desire to make work life better for everyone."`;

const kishanSections = [
  {
    title: 'Visionary Leader & Strategic Director',
    content: `Kishan Surana is the Strategic Director & Retail Innovation Pioneer at Bhatiyani Astute Intelligence. With over 30 years of entrepreneurial excellence in luxury retail and precision manufacturing, he bridges traditional craftsmanship with cutting-edge technology to drive innovation in computer vision and 3D reconstruction.`
  },
  {
    title: 'Entrepreneurial & Technical Excellence',
    content: `• Built a multi-brand diamond retail empire across South India
• Pioneered diamond education and market expansion
• Expert in precision quality control, defect detection, and 3D reconstruction for custom manufacturing
• Led digital transformation in inventory, customer experience, and manufacturing tools`
  },
  {
    title: 'Strategic Value & Vision',
    content: `Kishan's industry expertise, market network, and relentless pursuit of excellence fuel Bhatiyani's mission to transform manufacturing and retail with AI-powered precision and innovation.`
  }
];

const kishanQuote = `"Excellence is not an accident. It is the result of relentless pursuit of perfection, whether in cutting a diamond or coding an algorithm."`;

const teamMembers = [
  {
    id: 1,
    name: 'Adhip Sarda',
    title: 'Founder & Chief Technology Officer',
    image: adhipImg,
    bio: '',
    sections: adhipSections,
    quote: adhipQuote
  },
  {
    id: 2,
    name: 'Chandrika Chhatria',
    title: 'Strategic Director & Operational Insights Leader',
    image: ChandrikaImg,
    bio: '',
    sections: chandrikaSections,
    quote: chandrikaQuote
  },
  {
    id: 3,
    name: 'Kishan Surana',
    title: 'Strategic Director & Retail Innovation Pioneer',
    image: KishanImg,
    bio: '',
    sections: kishanSections,
    quote: kishanQuote
  }
];

export default function TeamMemberDetail() {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === Number(id));

  if (!member) {
    return (
      <div className="pt-32 pb-20 bg-white dark:bg-secondary-950 text-center">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Leader Not Found</h1>
        <Link to="/about" className="btn btn-primary">Back to Team</Link>
      </div>
    );
  }

  if (!member.sections || member.sections.length === 0) {
    return (
      <div className="pt-32 pb-20 bg-white dark:bg-secondary-950 text-center">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">{member.name}</h1>
        <h2 className="text-xl text-primary-600 dark:text-primary-400 mb-4">{member.title}</h2>
        <img src={member.image} alt={member.name} className={`w-48 h-48 object-cover rounded-full shadow-lg mb-4 ${member.id === 2 ? 'object-top' : ''}`} />
        <div className="prose dark:prose-invert max-w-none whitespace-pre-line mb-8">
          Detailed bio coming soon.
        </div>
        <Link to="/about" className="btn btn-outline">Back to Team</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-8"
        >
          <img src={member.image} alt={member.name} className={`w-48 h-48 object-cover rounded-full shadow-lg mb-4 ${member.id === 2 ? 'object-top' : ''}`} />
          <h1 className="text-3xl font-bold mb-2 dark:text-white text-center">{member.name}</h1>
          <h2 className="text-xl text-primary-600 dark:text-primary-400 mb-2 text-center">{member.title}</h2>
          <p className="text-lg text-secondary-700 dark:text-secondary-300 text-center mb-6">{member.bio}</p>
        </motion.div>
        <div className="space-y-10">
          {member.sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-secondary-50 dark:bg-secondary-900 rounded-xl p-6 shadow-md border-l-4 border-primary-400"
            >
              <h3 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-300">{section.title}</h3>
              <div className="prose dark:prose-invert whitespace-pre-line text-secondary-700 dark:text-secondary-200">
                {section.content}
              </div>
            </motion.div>
          ))}
          {member.quote && (
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="border-l-8 border-primary-400 bg-primary-50 dark:bg-primary-900/30 p-8 rounded-xl shadow-lg text-xl italic text-primary-900 dark:text-primary-200 mt-10"
            >
              {member.quote}
            </motion.blockquote>
          )}
        </div>
        <div className="mt-12 text-center">
          <Link to="/about" className="btn btn-outline">Back to Team</Link>
        </div>
      </div>
    </div>
  );
} 