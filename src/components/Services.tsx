import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    subtitle: "Office of multiple interior content",
    title: "Collaborative & partnership"
  },
  {
    subtitle: "The larger US Air Force digital experiments!",
    title: "We talk about our weight"
  },
  {
    subtitle: "Data faucet content, social, digital",
    title: "Piloting digital confidence"
  }
];

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="container services-container">
        <div className="services-header">
           <motion.h2
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             What we <span className="pill-highlight pill-green">can</span> <br /> 
             offer you!
           </motion.h2>
        </div>

        <div className="services-list-wrapper">
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="service-subtitle">{service.subtitle}</div>
                <div className="service-title">{service.title}</div>
                <div className="service-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.a 
          href="#faq"
          className="scroll-next"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Services;
