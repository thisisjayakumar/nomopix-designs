import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Appulights',
    role: 'HR Manager',
    company: 'Appulights',
    text: 'Nomopix is a game-changer! Their design and development work exceeded all my expectations. The quality they deliver at such affordable rates is exceptional. They truly stand out as the best in the business!',
    rating: 5,
  },
  {
    name: 'Ozaann Healthcare',
    role: 'Marketing Admin',
    company: 'Ozaann Healthcare',
    text: 'Nomopix is a hidden gem in the world of website design and development! Their work is top-tier, and what\'s even more impressive is their pricing. I\'m amazed by the incredible value they offer without compromising on quality. Definitely the best I\'ve seen in the industry!',
    rating: 5,
  },
  {
    name: 'A & G Products',
    role: 'Marketing Team',
    company: 'A & G Products',
    text: 'I was blown away by Nomopix\'s unparalleled design quality! Their attention to detail and creativity are unmatched. And the best part? The rates were unbelievably low! I never thought I\'d get such top-notch service at such a fantastic price.',
    rating: 5,
  },
  {
    name: 'Microsprings',
    role: 'Marketing Manager',
    company: 'Microsprings',
    text: 'Nomopix redefined my expectations of website design and development! Their work is simply the best in the industry, and the fact that they offer such high-quality design at such low rates is mind-boggling. I\'m beyond impressed!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef(null);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="testimonials-header"
        >
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            Our Proof of Excellence - Real feedback from real clients
          </p>
        </motion.div>

        <div className="testimonials-scroll" ref={scrollRef}>
          <div className="testimonials-track">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.1 }}
                className="testimonial-card"
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <p className="testimonial-text">{testimonial.text}</p>

                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.company[0]}</div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="testimonials-cta"
        >
          <h3 className="cta-quote">
            "Good design is obvious. Great design is transparent. Design is the silent ambassador of your brand."
          </h3>
          <p className="cta-subtext">
            Design adds value faster than it adds costs. For Best Designs Contact Us Today!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

