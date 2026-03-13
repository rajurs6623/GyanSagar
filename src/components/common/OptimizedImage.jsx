import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * OptimizedImage Component
 * Handles lazy loading, progressive loading (blur-up), and Unsplash optimization.
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  blurHash = "", // Optional blur placeholder
  width = 800,
  quality = 60,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Auto-optimize Unsplash URLs if detected
  const optimizedSrc = src.includes('unsplash.com') 
    ? `${src.split('?')[0]}?auto=format&fit=crop&q=${quality}&w=${width}`
    : src;

  // Tiny placeholder for blur effect
  const placeholderSrc = src.includes('unsplash.com')
    ? `${src.split('?')[0]}?auto=format&fit=crop&q=10&w=50`
    : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blurred Placeholder */}
      {!isLoaded && !error && (
        <img
          src={placeholderSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        />
      )}

      {/* Main Image */}
      <motion.img
        src={optimizedSrc}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        className={`w-full h-full object-cover ${isLoaded ? 'relative' : 'absolute'}`}
        {...props}
      />

      {/* Error Fallback */}
      {error && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400">
          <span className="text-xs font-bold uppercase tracking-widest">Image Unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
