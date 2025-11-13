import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const whatsappNumber = '917010066299';
  const email = 'nomopix.designs@gmail.com';
  const phone = '+91 70100 66299';

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I want to know more about your services.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(99, 102, 241, 0.1)"
          />
        </svg>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-text">NOMOPIX</span>
              <span className="logo-subtitle">Designs</span>
            </h3>
            <p className="footer-description">
              Elevate Your Digital Identity with Exceptional Website Design Creations!
              Evolve your business more BetterBiggerFaster.
            </p>
            <div className="footer-contact-quick">
              <button onClick={handleWhatsApp} className="quick-contact-btn whatsapp">
                <FaWhatsapp /> WhatsApp Us
              </button>
              <a href={`mailto:${email}`} className="quick-contact-btn email">
                <FaEnvelope /> Email Us
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li>Website Development</li>
              <li>WordPress Solutions</li>
              <li>Hosting Services</li>
              <li>SEO Optimization</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaPhone className="contact-icon" />
                <span>{phone}</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>{email}</span>
              </li>
              <li>
                <FaWhatsapp className="contact-icon" />
                <span>Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 NOMOPIX. Made with <FaHeart className="heart-icon" /> by NOMOPIX Team
          </p>
          <div className="footer-links-bottom">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

