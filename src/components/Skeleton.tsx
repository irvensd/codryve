import React from 'react';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', height = '1.5rem', width = '100%' }) => {
  return (
    <div
      className={`animate-pulse bg-gray-700 rounded ${className}`}
      style={{ height, width }}
    />
  );
};

export default Skeleton; 