import React from 'react';
import { Scale } from 'lucide-react';

export default function Logo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="flex items-center space-x-2 focus:outline-none"
    >
      <Scale className="h-8 w-8 text-blue-900" />
      <span className="text-2xl font-semibold text-blue-900">
        SD Family Law
      </span>
    </button>
  );
}