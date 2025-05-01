import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS credentials are missing. Please check your .env file.');
      setStatus('error');
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
        
        // Reset status after showing success message
        setTimeout(() => setStatus(''), 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="section-header">
        <h2 className={isVisible ? 'animate-in' : ''}>
          Get In <span className="text-accent">Touch</span>
        </h2>
      </div>
      
      <div className={`contact-container ${isVisible ? 'animate-in' : ''}`}>
        {/* Left Section - Let's Connect */}
        <div className="contact-connect">
          <h3>Let's Connect</h3>
          
          <div className="contact-cards-wrapper">
            <div className="contact-cards">
              <a 
                href="https://www.linkedin.com/in/preetham-kt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="card-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="card-content">
                  <h4>LinkedIn</h4>
                  <p>www.linkedin.com/in/preetham-kt</p>
                </div>
                <div className="external-link">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </a>
              
              {/* <a 
                href="tel:+919876543210" 
                className="contact-card"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="card-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="card-content">
                  <h4>Phone</h4>
                  <p>+91 9876543210</p>
                </div>
                <div className="external-link">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </a> */}
            
              <a 
                href="mailto:preethamkt18@gmail.com" 
                className="contact-card"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="card-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="card-content">
                  <h4>Email</h4>
                  <p>preethamkt18@gmail.com</p>
                </div>
                <div className="external-link">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Section - Let's Discuss Your Project */}
        <div className="contact-right">
          <div className="contact-form-section">
            <h3 className="section-heading mb-4">Let's Discuss Your Project</h3>
            <div className="contact-form-wrapper">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Enter your name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Enter your email" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea" 
                    placeholder="Let's create something amazing together!" 
                    rows="5" 
                    required
                  ></textarea>
                </div>
                
                {status === 'success' && (
                  <div className="form-message success">
                    Message sent successfully!
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="form-message error">
                    Failed to send message. Please try again.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && <i className="fas fa-arrow-right"></i>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 