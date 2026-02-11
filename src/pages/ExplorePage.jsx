import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudio } from '../context/StudioContext';

const ExplorePage = () => {
  const navigate = useNavigate();
  const { setSelectedCategory } = useStudio();

  const categories = [
    {
      id: 'yoga',
      name: 'Yoga',
      count: '7 Programs',
      icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"/><path d="M12 14v8M17 10l2 2M7 10l-2 2M14.5 7.5l1 1M9.5 7.5l-1 1M17 17l2-2M7 17l-2-2"/></svg>`,
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600',
      delay: '0s'
    },
    {
      id: 'dance',
      name: 'Dance',
      count: '9 Styles',
      icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"/><path d="M7 20l2-5 5-2-2 5-5 2zM14 7l2 5 5 2-2-5-5-2z"/><path d="M7 7l5 2 2 5-5-2-2-5zM14 20l-2-5-5-2 2 5 5 2z"/></svg>`,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600',
      delay: '0.1s'
    },
    {
      id: 'zumba',
      name: 'Zumba',
      count: '2 Programs',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 2v4M4.93 4.93l2.83 2.83M2 12h4M4.93 19.07l2.83-2.83M12 18v4M19.07 19.07l-2.83-2.83M22 12h-4M19.07 4.93l-2.83 2.83"/><circle cx="12" cy="12" r="4"/></svg>`,
      image: 'https://images.unsplash.com/photo-1534150034564-5cbb0e06d7a0?w=600',
      delay: '0.2s'
    },
    {
      id: 'arts',
      name: 'Arts & Music',
      count: '3 Programs',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
      delay: '0.3s'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    navigate('/programs');
  };

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <div className="page-title">Categories</div>
        <div className="page-subtitle">Choose your interest</div>
      </div>
      
      <div className="categories-grid">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="category-card fade-in-up"
            style={{ 
              animationDelay: category.delay,
              backgroundImage: `linear-gradient(0deg, rgba(15,31,26,0.7) 0%, rgba(15,31,26,0.3) 100%), url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              color: 'white'
            }}
            onClick={() => handleCategoryClick(category.id)}
          >
            {/* Dark overlay for text readability */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(15,31,26,0.2) 0%, rgba(15,31,26,0.8) 100%)',
              borderRadius: 'var(--border-radius)',
              zIndex: 1
            }} />
            
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div 
                className="category-icon"
                style={{ 
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(4px)',
                  marginBottom: '16px'
                }}
                dangerouslySetInnerHTML={{ __html: category.icon }}
              />
              <div className="category-name" style={{ color: 'white' }}>{category.name}</div>
              <div className="category-count" style={{ color: 'rgba(255,255,255,0.9)' }}>{category.count}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
