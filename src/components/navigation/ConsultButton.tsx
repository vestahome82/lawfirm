import React, { useState } from 'react';
import Modal from '../modal/Modal';
import ConsultationForm from '../consultation/ConsultationForm';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ConsultButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: FormData) => {
    // Here you would typically send this data to your backend
    console.log('Form submitted:', data);
    
    // Show success message and close modal
    alert('Thank you! We will contact you shortly to schedule your consultation.');
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-white text-blue-900 px-6 py-2 rounded-lg border-2 border-blue-900 hover:bg-blue-50 transition-colors"
      >
        Free Consultation
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Schedule a Free Consultation</h2>
          <p className="mt-2 text-gray-600">
            Fill out the form below and we'll contact you within 24 hours to schedule your consultation.
          </p>
        </div>
        <ConsultationForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
}