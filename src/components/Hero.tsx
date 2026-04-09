import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
    "https://i.pravatar.cc/150?u=5",
    "https://i.pravatar.cc/150?u=6",
    "https://i.pravatar.cc/150?u=7"
  ];

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            The <span className="underline-yellow">thinkers</span> and <br />
            <span className="pill-highlight pill-pink">doers</span> were <span className="pill-highlight pill-purple">changing</span> <br />
            the <span className="pill-highlight pill-green">status Quo</span> with
          </h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We are a team of strategists, designers, communicators, researchers, innovators. Together, <br />
            we believe that progress only happens when you refuse to play things safe.
          </motion.p>
        </motion.div>

        <div className="avatar-arc">
          {avatars.map((src, index) => (
            <motion.div
              key={index}
              className={`avatar-item avatar-${index + 1}`}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 0.6 + (index * 0.1), 
                type: "spring", 
                stiffness: 100,
                damping: 10 
              }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <img src={src} alt="Team Member" />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="hero-blob"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="hero-swirl">
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
            <path d="M10 10C30 40 10 90 60 110" stroke="#111" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <motion.a 
          href="#studio"
          className="scroll-next"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="scroll-text">Explore Studio</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
