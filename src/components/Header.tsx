import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './logo/Logo';
import NavLink from './navigation/NavLink';
import ContactButton from './navigation/ContactButton';
import ConsultButton from './navigation/ConsultButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-900" />
            ) : (
              <Menu className="h-6 w-6 text-blue-900" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Contact buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ContactButton 
              phoneNumber="+18585555555"
              displayNumber="(858) 555-5555"
            />
            <ConsultButton />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="pt-4 space-y-4">
                <ContactButton 
                  phoneNumber="+18585555555"
                  displayNumber="(858) 555-5555"
                />
                <div className="block">
                  <ConsultButton />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}