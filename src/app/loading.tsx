import React from 'react';
import Skeleton from '../components/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section Skeleton */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Skeleton className="w-64 h-12 mx-auto mb-4" />
            <Skeleton className="w-96 h-6 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-6 rounded-lg bg-gray-800/50">
                <Skeleton className="w-12 h-12 mb-4" />
                <Skeleton className="w-32 h-6 mb-2" />
                <Skeleton className="w-full h-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Skeleton className="w-48 h-10 mx-auto mb-4" />
            <Skeleton className="w-96 h-6 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-8 rounded-lg bg-gray-800/50">
                <Skeleton className="w-12 h-12 mb-6" />
                <Skeleton className="w-48 h-8 mb-4" />
                <Skeleton className="w-full h-4 mb-2" />
                <Skeleton className="w-full h-4 mb-2" />
                <Skeleton className="w-3/4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 