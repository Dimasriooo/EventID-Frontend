import React from 'react';

function Navbar() {
  return(
      
    <nav className="fixed w-full bg-blue-600 px-4 md:px-8 py-4 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">EventID</div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a>
        <a href="#Features" className="text-white hover:text-blue-200 transition-colors">Packages</a>
        <a href="#services" className="text-white hover:text-blue-200 transition-colors">Event</a>
        <a href="#contact" className="text-white hover:text-blue-200 transition-colors"></a>
      </div>
      </div>
      </nav>
   
  );
}

export default Navbar;