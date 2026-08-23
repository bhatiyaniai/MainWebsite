import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://bhatiyaniai.com';

const SEO = ({ 
  title, 
  description, 
  name = 'Bhatiyani Astute Intelligence', 
  type = 'website',
  path = '',
  image = `${BASE_URL}/logo.png`
}) => {
  const canonicalUrl = `${BASE_URL}${path || '/'}`;
  
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:site_name' content={name} />
      
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
};

export default SEO;
