import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPost } from '../data/blogData';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getBlogPost(id);

  if (!post) {
    return (
      <div className="page">
        <div className="page-header">
          <div className="page-title">Post Not Found</div>
          <button className="explore-btn" onClick={() => navigate('/blog')} style={{ marginTop: '20px' }}>
            ← BACK TO BLOG
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page" style={{ paddingBottom: '40px' }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate('/blog')}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--dark-color)',
          fontSize: '15px',
          fontWeight: '600',
          marginBottom: '20px',
          cursor: 'pointer',
          padding: '10px 0'
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="var(--dark-color)" fill="none" strokeWidth="2">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" />
        </svg>
        BACK TO BLOG
      </button>

      {/* Hero Image - YOU REPLACE URL LATER */}
      <div 
        style={{
          width: '100%',
          height: '300px',
          backgroundImage: `url(${post.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '24px',
          marginBottom: '24px',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          background: 'rgba(15,31,26,0.8)',
          backdropFilter: 'blur(4px)',
          padding: '8px 16px',
          borderRadius: '40px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          {post.category}
        </div>
      </div>

      {/* Post Meta */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <span style={{
          fontSize: '14px',
          color: 'var(--dark-color)',
          opacity: 0.7
        }}>
          📅 {post.date} • ✍️ {post.author}
        </span>
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: 'var(--dark-color)',
        marginBottom: '24px',
        lineHeight: '1.3'
      }}>
        {post.title}
      </h1>

      {/* Content - YOU WRITE LATER */}
      <div 
        style={{
          fontSize: '17px',
          lineHeight: '1.8',
          color: 'var(--dark-color)',
          opacity: 0.9
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Book CTA */}
      <div style={{
        background: 'rgba(111,198,192,0.1)',
        borderRadius: '20px',
        padding: '30px',
        marginTop: '40px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '22px',
          fontWeight: '700',
          color: 'var(--dark-color)',
          marginBottom: '12px'
        }}>
          Ready to try?
        </h3>
        <p style={{
          fontSize: '16px',
          color: 'var(--dark-color)',
          opacity: 0.8,
          marginBottom: '20px'
        }}>
          First session 40% off at DAYZ Studio HSR
        </p>
        <button 
          className="explore-btn"
          onClick={() => navigate('/booking')}
          style={{ marginTop: '0' }}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default BlogPostPage;
