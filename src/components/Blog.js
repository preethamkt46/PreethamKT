import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const blogPosts = [
    {
      title: 'Starting and Growing a Career in Web Design',
      date: 'Apr 8, 2022',
      image: '/images/blog/career.jpg',
      link: '#'
    },
    {
      title: 'Create a Landing Page That Performs Great',
      date: 'Mar 15, 2022',
      image: '/images/blog/landing-page.jpg',
      link: '#'
    },
    {
      title: 'How Can Designers Prepare for the Future?',
      date: 'Feb 28, 2022',
      image: '/images/blog/future.jpg',
      link: '#'
    },
    {
      title: 'How to Create an Effective Design Portfolio',
      date: 'Jan 12, 2022',
      image: '/images/blog/portfolio.jpg',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="blog-section" ref={ref}>
      <div className="section-header">
        <h2 className={isVisible ? 'animate-in' : ''}>
          Design Thoughts and <span className="text-accent">Perspectives</span>
        </h2>
      </div>
      
      <div className={`blog-grid ${isVisible ? 'animate-in' : ''}`}>
        {blogPosts.map((post, index) => (
          <a 
            href={post.link}
            key={index} 
            className="blog-card"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="blog-image">
              {/* Replace with actual blog image */}
              <div className="image-placeholder"></div>
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog; 