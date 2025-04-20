import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  style, 
  priority = false,
  quality = 75 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`image-wrapper ${isLoading ? 'image-loading' : ''}`} style={style}>
      <Image
        src={src}
        alt={alt || ''}
        width={width || 800}
        height={height || 600}
        quality={quality}
        priority={priority}
        className={`${className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsLoading(false)}
        loading={priority ? 'eager' : 'lazy'}
      />
      {isLoading && (
        <div className="image-placeholder" style={{ 
          width: '100%', 
          height: '100%', 
          background: 'rgba(var(--light-bg-color-rgb), 0.2)',
          position: 'absolute',
          top: 0,
          left: 0
        }} />
      )}
    </div>
  );
};

export default OptimizedImage;
