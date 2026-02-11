import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <div className="page-title">DAYZ Blog</div>
        <div className="page-subtitle">News, tips, and stories from our studio</div>
      </div>
      
      <div className="blog-container" style={{ paddingBottom: '20px' }}>
        {blogPosts.map((post, index) => (
          <div 
            key={post.id}
            className="blog-card fade-in-up"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              cursor: 'pointer',
              padding: '0',
              overflow: 'hidden'
            }}
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            {/* Blog Hero Image */}
            <div 
              style={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(${post.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(15,31,26,0.8)',
                backdropFilter: 'blur(4px)',
                padding: '6px 14px',
                borderRadius: '30px',
                color: 'white',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                {post.category}
              </div>
            </div>
            
            {/* Content */}
            <div style={{ padding: '24px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '12px',
                fontSize: '13px',
                color: 'var(--dark-color)',
                opacity: 0.7
              }}>
                <span>📅 {post.date}</span>
              </div>
              
              <h3 style={{ 
                fontSize: '22px', 
                fontWeight: '700', 
                marginBottom: '12px', 
                color: 'var(--dark-color)',
                lineHeight: '1.3'
              }}>
                {post.title}
              </h3>
              
              <p style={{ 
                fontSize: '15px', 
                opacity: 0.8, 
                lineHeight: '1.6', 
                marginBottom: '20px',
                color: 'var(--dark-color)'
              }}>
                {post.excerpt}
              </p>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                color: 'var(--dark-color)',
                fontWeight: '600'
              }}>
                <span>READ MORE</span>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--dark-color)" fill="none" strokeWidth="2">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                </svg>
              </div>
            </div>
          </div>
        ))}
        
        {/* More coming soon */}
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          marginTop: '20px'
        }}>
          <p style={{ fontSize: '16px', opacity: 0.7 }}>More articles coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
