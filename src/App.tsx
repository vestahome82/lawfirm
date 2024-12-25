import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Add padding to account for fixed header */}
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;