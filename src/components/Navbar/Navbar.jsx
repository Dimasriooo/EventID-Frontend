import React from 'react';

function Navbar() {
  return(
      
    <nav className="fixed top-0 w-full z-50 bg-blue-500  px-4 md:px-8 py-4 ">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">EventID</div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <a href="/" className="text-white hover:text-blue-200 transition-colors">Home</a>
        <a href="/events" className="text-white hover:text-blue-200 transition-colors">Events</a>
        <a href="#services" className="text-white hover:text-blue-200 transition-colors">Event</a>
        <a href="/about" className="text-white hover:text-blue-200 transition-colors">About</a>
      </div>
      </div>
      </nav>
   
  );
}

export default Navbar;