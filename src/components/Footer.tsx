import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Terms & Policies</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Accesibility</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><p>4400 Ashwood Dr, <br /> Cincinnati, OH 45241</p></li>
            <li><a href="tel:+15135550123">+1 (513) 555-0123</a></li>
            <li><p>Social: @elementum</p></li>
            <li><a href="mailto:hello@elementum.com">hello@elementum.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2023 Elementum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
