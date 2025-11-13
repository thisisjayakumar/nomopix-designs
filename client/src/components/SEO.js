import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "NOMOPIX Designs - Stunning Websites Starting at ₹999 | Professional Web Development",
  description = "Transform your business with professional websites starting at just ₹999! NOMOPIX offers full-stack web development, SEO, digital marketing, and hosting services. 50+ happy clients. 24/7 support. Get your stunning website in 3-5 days!",
  keywords = "web development, website design, cheap websites India, affordable web design, full stack development, SEO services, digital marketing, website Rs.999, business website, NOMOPIX, web hosting, MERN stack, WordPress development",
  ogImage = "https://nomopix.com/og-image.jpg",
  ogType = "website",
  canonical,
  noindex = false
}) {
  const siteUrl = "https://nomopix.com";
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="NOMOPIX Designs" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="NOMOPIX Digital Studio - Jay and Khalid" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Business Contact */}
      <meta name="contact" content="nomopix.designs@gmail.com" />
      <meta name="telephone" content="+917010066299" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-IN" />
      
      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="NOMOPIX" />
      
      {/* Referrer Policy */}
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NOMOPIX Designs",
          "alternateName": "NOMOPIX Digital Studio",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": "Professional web development and digital marketing agency offering affordable website solutions starting at ₹999",
          "foundingDate": "2023",
          "founders": [
            {
              "@type": "Person",
              "name": "Jay"
            },
            {
              "@type": "Person",
              "name": "Khalid"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7010066299",
            "contactType": "customer service",
            "availableLanguage": ["en", "hi"],
            "areaServed": "IN",
            "contactOption": "TollFree"
          },
          "sameAs": [
            `https://wa.me/917010066299`
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "India"
          }
        })}
      </script>
      
      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "NOMOPIX Designs",
          "image": `${siteUrl}/logo.png`,
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": "+91-7010066299",
          "email": "nomopix.designs@gmail.com",
          "priceRange": "₹₹",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "50"
          }
        })}
      </script>
      
      {/* Structured Data - ProfessionalService */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "NOMOPIX Designs",
          "description": "Professional web development, SEO, and digital marketing services",
          "url": siteUrl,
          "telephone": "+91-7010066299",
          "email": "nomopix.designs@gmail.com",
          "priceRange": "₹₹",
          "serviceType": [
            "Web Development",
            "Website Design",
            "SEO Services",
            "Digital Marketing",
            "Web Hosting",
            "Full Stack Development"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        })}
      </script>
      
      {/* Structured Data - Service Offers */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Website Development",
          "provider": {
            "@type": "Organization",
            "name": "NOMOPIX Designs"
          },
          "offers": {
            "@type": "Offer",
            "price": "999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": siteUrl,
            "priceValidUntil": "2025-12-31",
            "description": "Professional website starting at just ₹999 - 90% OFF limited time offer"
          }
        })}
      </script>
      
      {/* Structured Data - FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a website cost at NOMOPIX?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our websites start at just ₹999 as a special limited-time offer (90% OFF from ₹9,999). We offer affordable, professional websites for businesses of all sizes."
              }
            },
            {
              "@type": "Question",
              "name": "What services does NOMOPIX provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide comprehensive digital solutions including Website Creation, Web Hosting, SEO (Search Engine Optimization), Digital Marketing, Full Stack Development with clean organized code, and 24/7 customer support."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to build a website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We deliver websites within 3-5 days with lightning-fast turnaround time, ensuring quality and functionality."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide support after website delivery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We provide 24/7 customer support with 100% response time. Our team is always available to assist you via WhatsApp, email, or phone."
              }
            }
          ]
        })}
      </script>
      
      {/* Structured Data - BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": siteUrl
            }
          ]
        })}
      </script>
    </Helmet>
  );
}

