import React from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <div className="container newsletter-container">
        <motion.div 
           className="newsletter-content"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
           <h2>Subscribe to <br /> our newsletter</h2>
           <p>To make your day special and learn more about us</p>
           
           <motion.button 
             className="btn-black"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             Enter the flow
           </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <div className="newsletter-swirl">
          <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
             <path d="M5 5C15 20 5 45 30 55" stroke="#ff4136" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          </svg>
        </div>
        <div className="newsletter-shape"></div>
      </div>
    </section>
  );
};

export default Newsletter;
