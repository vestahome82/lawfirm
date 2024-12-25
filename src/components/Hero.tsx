import React from 'react';
import ConsultButton from './navigation/ConsultButton';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
          alt="San Diego Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            San Diego Family Law Professionals
          </h1>
          <p className="text-xl mb-8">
            Helping families navigate through life's challenges with empathy and expertise. Your trusted partner in family law services.
          </p>
          <ConsultButton />
        </div>
      </div>
    </div>
  );
}