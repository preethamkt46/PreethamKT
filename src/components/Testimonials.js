import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const testimonials = [
    {
      name: 'William M.',
      company: 'John',
      text: 'John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!',
      avatar: '/images/testimonials/william.jpg'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="section-header">
        <h2 className={isVisible ? 'animate-in' : ''}>
          What Clients Say About My <span className="text-accent">Work</span>
        </h2>
      </div>
      
      <div className={`testimonials-container ${isVisible ? 'animate-in' : ''}`}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="testimonial-content">
              <p>"{testimonial.text}"</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                {/* Replace with actual avatar image */}
                <div className="avatar-placeholder"></div>
              </div>
              <div className="author-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.company}</p>
              </div>
            </div>
            <div className="testimonial-navigation">
              <button className="nav-prev" aria-label="Previous testimonial">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="nav-next" aria-label="Next testimonial">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 