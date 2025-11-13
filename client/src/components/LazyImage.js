import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component for performance optimization
 * Implements lazy loading with Intersection Observer API
 */
export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23cccccc" width="400" height="300"/%3E%3C/svg%3E',
  threshold = 0.01,
  ...props 
}) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    let observer;
    const currentRef = imgRef.current;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Load the actual image
              const img = new Image();
              img.src = src;
              img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
              };
              img.onerror = () => {
                console.error(`Failed to load image: ${src}`);
                setIsLoaded(true); // Still mark as loaded to avoid infinite loading
              };
              
              // Stop observing once loaded
              if (currentRef) {
                observer.unobserve(currentRef);
              }
            }
          });
        },
        { threshold }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setImageSrc(src);
      setIsLoaded(true);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [src, threshold]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      loading="lazy"
      {...props}
    />
  );
}

