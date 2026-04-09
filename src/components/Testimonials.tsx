import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const avatars = [
    { src: "https://i.pravatar.cc/150?u=11", className: "t-avatar-1" },
    { src: "https://i.pravatar.cc/150?u=12", className: "t-avatar-2" },
    { src: "https://i.pravatar.cc/150?u=13", className: "t-avatar-3" },
    { src: "https://i.pravatar.cc/150?u=14", className: "t-avatar-4" },
    { src: "https://i.pravatar.cc/150?u=15", className: "t-avatar-5" },
    { src: "https://i.pravatar.cc/150?u=16", className: "t-avatar-6" },
  ];

  return (
    <section className="testimonials">
      <div className="container testimonials-container">
        <motion.div 
           className="testimonials-header"
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
           <h2>What our customer <br /> says <span className="pill-highlight pill-green">About Us</span></h2>
        </motion.div>

        <div className="testimonials-content">
          <div className="floating-avatars-container">
            {avatars.map((avatar, index) => (
              <motion.div
                key={index}
                className={`testimonial-avatar ${avatar.className}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  delay: 0.1 * index, 
                  duration: 4 + index, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <img src={avatar.src} alt="Client" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="quote-bubble"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="quote-marks left">“</div>
            <p className="quote-body">
              Elementum: delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hadn't used, which have also proved to be easy to use and reliable.
            </p>
            <div className="quote-marks right">”</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
