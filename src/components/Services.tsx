import React from 'react';
import { Scale, Users, FileText, Heart } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Divorce & Mediation',
    description: 'Professional guidance through divorce proceedings with emphasis on mediation and peaceful resolution.'
  },
  {
    icon: Users,
    title: 'Child Custody & Support',
    description: "Protecting your children's best interests while ensuring fair and practical custody arrangements."
  },
  {
    icon: FileText,
    title: 'Prenuptial Agreements',
    description: 'Secure your future with carefully crafted prenuptial and postnuptial agreements.'
  },
  {
    icon: Heart,
    title: 'Family Law Services',
    description: 'Comprehensive family law services including adoption, guardianship, and domestic partnerships.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}