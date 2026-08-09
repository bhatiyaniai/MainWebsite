import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import deepLearningImg from '../assets/deep_learning_vision.png';

// Blog categories with their descriptions
const blogCategories = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Latest trends, algorithms, and implementations in artificial intelligence and machine learning.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Case studies, tutorials, and best practices for implementing computer vision solutions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  },
  {
    id: 'industry-insights',
    title: 'Industry Insights',
    description: 'Market analysis and technology adoption trends across various industries.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  },
  {
    id: 'implementation-guides',
    title: 'Implementation Guides',
    description: 'Step-by-step technical documentation for implementing AI and computer vision solutions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  },
];

// Sample blog posts for display
const samplePosts = [
  {
    id: 1,
    title: 'Understanding Deep Learning Models for Computer Vision',
    excerpt: 'A comprehensive overview of the latest deep learning architectures used in computer vision applications.',
    category: 'ai-ml',
    date: 'May 15, 2023',
    image: deepLearningImg,
  },
  {
    id: 2,
    title: 'Implementing Real-time Object Detection for Industrial Applications',
    excerpt: 'Step-by-step guide to implementing YOLO v8 for real-time object detection in manufacturing settings.',
    category: 'computer-vision',
    date: 'June 22, 2023',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Computer Vision in 2023: Market Trends and Growth Forecast',
    excerpt: 'Analysis of current market trends and future growth prospects for computer vision technologies.',
    category: 'industry-insights',
    date: 'July 10, 2023',
    image: 'https://images.unsplash.com/photo-1553484771-689277e6fa16?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Setting Up an Edge AI System: Hardware and Software Considerations',
    excerpt: 'Technical guide on how to set up and optimize edge AI systems for various use cases.',
    category: 'implementation-guides',
    date: 'August 5, 2023',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop',
  },
];

const BlogPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Parse the category from URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    if (category && blogCategories.some(cat => cat.id === category)) {
      setActiveCategory(category);
    } else {
      setActiveCategory('all');
    }
  }, [location.search]);
  
  // Handle category change and update URL
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const url = new URL(window.location.href);
    if (categoryId === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', categoryId);
    }
    window.history.pushState({}, '', url);
  };
  
  const filteredPosts = activeCategory === 'all' 
    ? samplePosts 
    : samplePosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Technical Blog</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Stay updated with the latest advancements in AI and computer vision technology
          </p>
        </div>

        {/* Blog Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <button 
            className={`p-4 rounded-lg border transition duration-300 ${
              activeCategory === 'all' 
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                : 'border-secondary-200 dark:border-secondary-800 hover:border-primary-300 dark:hover:border-primary-700'
            }`}
            onClick={() => handleCategoryChange('all')}
          >
            <div className="text-center">
              <span className="text-lg font-medium dark:text-white">All Categories</span>
            </div>
          </button>

          {blogCategories.map((category) => (
            <button 
              key={category.id}
              className={`p-4 rounded-lg border transition duration-300 ${
                activeCategory === category.id 
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                  : 'border-secondary-200 dark:border-secondary-800 hover:border-primary-300 dark:hover:border-primary-700'
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3`}>
                  {category.icon}
                </div>
                <span className="text-lg font-medium dark:text-white">{category.title}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Category Description */}
        {activeCategory !== 'all' && (
          <div className="mb-12 p-6 bg-secondary-50 dark:bg-secondary-900 rounded-lg">
            <h2 className="text-2xl font-bold mb-2 dark:text-white">
              {blogCategories.find(cat => cat.id === activeCategory)?.title}
            </h2>
            <p className="text-secondary-600 dark:text-secondary-300">
              {blogCategories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>
        )}

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${blogCategories.find(cat => cat.id === post.category)?.color}`}>
                    {blogCategories.find(cat => cat.id === post.category)?.title}
                  </span>
                  <span className="ml-auto text-sm text-secondary-500 dark:text-secondary-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{post.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">{post.excerpt}</p>
                <Link to={`/resources/blog/${post.id}`} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center p-12 bg-secondary-50 dark:bg-secondary-900 rounded-lg">
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              No posts found in this category. Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage; 