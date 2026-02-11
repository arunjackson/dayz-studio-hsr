import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image = "/og-image.jpg" }) => {
  const siteTitle = 'DAYZ Studio HSR';
  const fullTitle = title === 'Home' ? siteTitle : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="yoga, dance, zumba, arts, HSR Layout, Bengaluru, fitness, wellness, studio" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="geo.position" content="12.9116;77.6446" />
      <meta name="ICBM" content="12.9116, 77.6446" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
