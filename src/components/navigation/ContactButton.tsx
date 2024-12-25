import React from 'react';
import { Phone } from 'lucide-react';

interface ContactButtonProps {
  phoneNumber: string;
  displayNumber: string;
}

export default function ContactButton({ phoneNumber, displayNumber }: ContactButtonProps) {
  return (
    <a 
      href={`tel:${phoneNumber}`}
      className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
    >
      <Phone className="w-4 h-4 mr-2" />
      {displayNumber}
    </a>
  );
}