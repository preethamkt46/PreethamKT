import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'I offer product design, UI/UX design, web development, branding, and digital strategy services. Each project is approached with a focus on creating intuitive, engaging, and high-performing digital products.'
    },
    {
      id: 2,
      question: 'What is your design process?',
      answer: 'My design process includes discovery, research, wireframing, prototyping, user testing, and implementation. I work collaboratively with clients throughout each phase to ensure the final product meets both business goals and user needs.'
    },
    {
      id: 3,
      question: 'How do you handle project timelines?',
      answer: 'Project timelines are established during the initial planning phase. I break projects into milestones with clear deliverables and deadlines. Regular check-ins ensure we stay on track, and I maintain transparent communication about progress throughout.'
    },
    {
      id: 4,
      question: 'Can you work with existing teams?',
      answer: 'Absolutely! I regularly collaborate with in-house teams, bringing my expertise while integrating smoothly into established workflows. I can adapt to your team\'s communication tools and processes.'
    },
    {
      id: 5,
      question: 'What tools do you use?',
      answer: 'I use industry-standard tools like Figma, Adobe XD, Sketch for design; React, Next.js for frontend development; and various prototyping and testing tools. I\'m always adapting my toolkit to include the most effective solutions.'
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section" ref={ref}>
      <div className="section-header">
        <h2 className={isVisible ? 'animate-in' : ''}>
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
      </div>
      
      <div className={`faq-container ${isVisible ? 'animate-in' : ''}`}>
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className={`faq-item ${openQuestion === faq.id ? 'open' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleQuestion(faq.id)}
            >
              {faq.question}
              <span className="faq-icon">
                <i className={`fas fa-chevron-${openQuestion === faq.id ? 'up' : 'down'}`}></i>
              </span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 