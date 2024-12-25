import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "They guided me through my divorce with compassion and professionalism. I couldn't have asked for better support.",
    author: "Sarah M."
  },
  {
    quote: "The team's expertise in family law made a difficult custody situation much easier to navigate.",
    author: "Michael R."
  },
  {
    quote: "Professional, knowledgeable, and truly caring. They put my family's needs first.",
    author: "Jennifer L."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-800 p-6 rounded-lg relative">
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              <p className="mb-4 italic">{testimonial.quote}</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}