import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ExitPopup.css';

export default function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const whatsappNumber = '917010066299';
  const whatsappMessage = encodeURIComponent('Hi! I want to claim my Rs.499 first-time user offer!');

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="popup-overlay"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="exit-popup"
          >
            <button className="popup-close" onClick={handleClose}>
              <FaTimes />
            </button>

            <div className="popup-badge">
              <FaFire className="fire-icon" />
              EXCLUSIVE FIRST-TIME OFFER
            </div>

            <h2 className="popup-title">
              Wait! Don't Miss This
              <span className="gradient-text"> Incredible Deal!</span>
            </h2>

            <div className="popup-price">
              <div className="price-box">
                <span className="price-label">Regular Price</span>
                <span className="price-old">₹999</span>
              </div>
              
              <div className="price-arrow">→</div>
              
              <div className="price-box special">
                <span className="price-label">First-Time Users</span>
                <span className="price-new">₹499</span>
                <span className="price-save">Save ₹500!</span>
              </div>
            </div>

            <div className="popup-features">
              <div className="popup-feature">
                <span className="feature-check">✓</span>
                Professional Website Design
              </div>
              <div className="popup-feature">
                <span className="feature-check">✓</span>
                Responsive & Mobile-Friendly
              </div>
              <div className="popup-feature">
                <span className="feature-check">✓</span>
                24/7 Customer Support
              </div>
              <div className="popup-feature">
                <span className="feature-check">✓</span>
                Fast Delivery (3-5 Days)
              </div>
            </div>

            <p className="popup-urgency">
              <FaFire className="urgency-icon" />
              This offer expires in 24 hours. Claim it now before it's gone!
            </p>

            <div className="popup-actions">
              <button onClick={handleWhatsAppClick} className="popup-btn primary">
                <FaWhatsapp className="btn-icon" />
                Claim on WhatsApp
              </button>
              
              <Link to="/signup" className="popup-btn secondary" onClick={handleClose}>
                Sign Up Now
              </Link>
            </div>

            <p className="popup-footer">
              Join 50+ satisfied customers who chose NOMOPIX
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

