import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do we start a project with Elementum?",
    answer: "We begin with a discovery call to understand your goals. From there, we move to strategy, design, and implementation with weekly syncs to keep you updated."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across various sectors including fintech, healthcare, and SaaS, focusing on high-performance digital products and seamless UX."
  },
  {
    question: "How long does a typical redesign take?",
    answer: "A standard project can take anywhere from 4 to 12 weeks depending on the complexity and scope of the work required."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we providing ongoing maintenance, performance monitoring, and iterative improvements to ensure your product continues to thrive."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="container faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Frequently Asked <span className="underline-yellow">Questions</span></h2>
          <p>Everything you need to know about our process and workflow.</p>
        </motion.div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{item.question}</span>
                <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>+</span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq-answer-content">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
