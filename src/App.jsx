import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Blog1 from './resources/blog/1.jsx';
import Blog2 from './resources/blog/2.jsx';
import Blog3 from './resources/blog/3.jsx';
import Blog4 from './resources/blog/4.jsx';
import DeepLearningCVBlog from './resources/blog/5.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import ContactSales from './pages/ContactSales';
import ContactSupport from './pages/ContactSupport';
import Careers from './pages/Careers';
import Placeholder from './components/common/Placeholder';
import BlogPage from './pages/BlogPage';
import Sitemap from './pages/Sitemap';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingScreen from './components/common/LoadingScreen';
import TeamMemberDetail from './pages/TeamMemberDetail';

function App() {
  // Show loading screen for 3.5 seconds, then hide
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        {isLoading && <LoadingScreen />}
        <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about/leader/:id" element={<TeamMemberDetail />} />
            <Route path="solutions" element={<Solutions />} />
            
            {/* Contact Routes */}
            <Route path="contact/sales" element={<ContactSales />} />
            <Route path="contact/support" element={<ContactSupport />} />
            <Route path="contact/careers" element={<Careers />} />
            
            {/* Product Routes - Placeholders */}
            <Route path="product/computer-vision" element={
              <Placeholder 
                title="Computer Vision Solutions" 
                description="This page is under construction. Our computer vision solutions will be detailed here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            <Route path="product/ai-models" element={
              <Placeholder 
                title="AI Models & Learning Systems" 
                description="This page is under construction. Our AI Models and learning systems will be detailed here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            <Route path="product/video-analytics" element={
              <Placeholder 
                title="Video Analytics Platform" 
                description="This page is under construction. Our video analytics platform details will be available here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            
            {/* Solution Routes - Placeholders */}
            <Route path="solution/retail" element={
              <Placeholder 
                title="Retail Analytics Solutions" 
                description="This page is under construction. Our retail analytics solutions will be detailed here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            <Route path="solution/security" element={
              <Placeholder 
                title="Security & Surveillance Solutions" 
                description="This page is under construction. Our security and surveillance solutions will be detailed here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            <Route path="solution/smart-cities" element={
              <Placeholder 
                title="Smart Cities Solutions" 
                description="This page is under construction. Our smart cities solutions will be detailed here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            <Route path="solution/healthcare" element={
              <Placeholder 
                title="Healthcare Solutions" 
                description="This page is under construction. Our healthcare solutions will be detailed here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            
            {/* Resources Routes - Blog */}
            <Route path="resources/blog" element={<BlogPage />} />
            <Route path="resources/blog/1" element={<Blog1 />} />
            <Route path="resources/blog/2" element={<Blog2 />} />
            <Route path="resources/blog/3" element={<Blog3 />} />
            <Route path="resources/blog/4" element={<Blog4 />} />
            <Route path="resources/blog/5" element={<DeepLearningCVBlog />} />
            <Route path="resources/case-studies" element={
              <Placeholder 
                title="Case Studies" 
                description="Our case studies will be available here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            <Route path="resources/documentation" element={
              <Placeholder 
                title="Documentation" 
                description="Our product documentation will be available here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            <Route path="resources/research-papers" element={
              <Placeholder 
                title="Research Papers" 
                description="Our research papers will be available here soon." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
            
            {/* Legal and Utility Pages */}
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="location" element={<Sitemap />} />
            <Route path="find-us" element={<Sitemap />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={
              <Placeholder 
                title="Page Not Found" 
                description="The page you are looking for doesn't exist or has been moved." 
                linkText="Back to Home" 
                linkUrl="/"
              />
            } />
          </Route>
        </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
