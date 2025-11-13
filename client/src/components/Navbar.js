import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="NOMOPIX Designs - Go to homepage">
          <span className="logo-text">NOMOPIX</span>
          <span className="logo-subtitle">Designs</span>
        </Link>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`} role="menu">
          <button onClick={() => scrollToSection('home')} className="nav-link" aria-label="Navigate to home section">Home</button>
          <button onClick={() => scrollToSection('services')} className="nav-link" aria-label="Navigate to services section">Services</button>
          <button onClick={() => scrollToSection('work')} className="nav-link" aria-label="Navigate to portfolio section">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link" aria-label="Navigate to testimonials section">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link" aria-label="Navigate to contact section">Contact</button>

          {user ? (
            <>
              <Link to="/dashboard" className="nav-link user-link" onClick={() => setMobileMenuOpen(false)}>
                <FaUser /> {user.name}
              </Link>
              <button onClick={handleLogout} className="nav-btn logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="nav-btn" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </>
          )}
        </div>

        <button 
          className="mobile-menu-icon" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="navbar-menu"
        >
          {mobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>
    </nav>
  );
}

