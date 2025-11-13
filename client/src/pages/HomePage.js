import React from 'react';
import SEO from '../components/SEO';
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
    <>
      <SEO 
        title="NOMOPIX Designs - Stunning Websites Starting at ₹999 | Professional Web Development India"
        description="Transform your business with professional websites starting at just ₹999! NOMOPIX offers full-stack web development, SEO, digital marketing, and hosting services. 50+ happy clients. Fast delivery in 3-5 days. 24/7 support. Get your stunning website now!"
        keywords="web development India, website design Rs 999, cheap websites, affordable web design, full stack development, SEO services, digital marketing, business website, NOMOPIX designs, web hosting India, MERN stack development, WordPress website, React development, best web developers"
        canonical="/"
      />
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
    </>
  );
}

