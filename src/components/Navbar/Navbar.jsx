import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setOpen ]= useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  }

  const Menuclass= (isOpen) ? 'max-md:flex max-md:flex-col max-md:absolute right-0 top-20 max-md:bg-blue-500 max-md:p-5 ' : 'hidden';
  return(
      
    <nav className="fixed top-0 w-full z-50 bg-blue-500  px-4 md:px-8 py-4 ">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">EventID</div>

      <div class="inset-y-0 left-0 flex items-center md:hidden">
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
        aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMenu}>
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          
          <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      
      {/* Desktop Navigation */}
      <div className={`${Menuclass} md:flex gap-8`}>
        <a href="/" className="text-white hover:text-blue-200 transition-colors">Home</a>
        <a href="/events" className="text-white hover:text-blue-200 transition-colors">FeaturedEvents</a>
        <a href="/updates" className="text-white hover:text-blue-200 transition-colors">Event</a>
        <a href="/about" className="text-white hover:text-blue-200 transition-colors">Reviews</a>
        <a href="/booking-list" className="text-white hover:text-blue-200 transition-colors">Booking</a> |
        <a href="/login" className="text-white hover:text-blue-200 transition-colors">Login</a> 
        <a href="/register"className="text-white hover:text-blue-200 transition-colors">Register</a>
      </div>
      </div>
      </nav>
   
  );
}

export default Navbar;