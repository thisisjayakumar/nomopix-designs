import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CoreAttributes from '../components/CoreAttributes';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ExitPopup from '../components/ExitPopup';

export default function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CoreAttributes />
      <Testimonials />
      <Contact />
      <Footer />
      <ExitPopup />
    </div>
  );
}

