import React from 'react';
import { motion } from 'framer-motion';
import './ContentSection.css';

interface ContentSectionProps {
  title: React.ReactNode;
  description: string;
  image: string;
  imageSide: 'left' | 'right';
  linkText: string;
  shape?: 'square' | 'triangle' | 'none';
  showCurvedPath?: boolean;
  nextSectionId?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  description, 
  image, 
  imageSide, 
  linkText, 
  shape = 'none',
  showCurvedPath = false,
  nextSectionId
}) => {
  return (
    <section className={`content-section ${imageSide}`}>
      <div className="container content-container">
        <div className="content-text">
          <motion.h2
            initial={{ opacity: 0, x: imageSide === 'left' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>
          <motion.a 
            href="#" 
            className="read-more"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {linkText}
          </motion.a>
        </div>
        
        <div className="content-image-wrapper">
          <motion.div 
            className="image-container"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={image} alt="Content" />
          </motion.div>
          
          {shape === 'square' && <div className="shape-square"></div>}
          {shape === 'triangle' && <div className="shape-triangle"></div>}
          
          {showCurvedPath && (
            <div className="curved-path-container">
               <svg viewBox="0 0 100 200" fill="none" preserveAspectRatio="none">
                 <path d="M0 0C50 50 20 150 100 200" stroke="#ff4136" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
               </svg>
            </div>
          )}
        </div>

        {nextSectionId && (
          <motion.a 
            href={`#${nextSectionId}`}
            className="scroll-next"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
