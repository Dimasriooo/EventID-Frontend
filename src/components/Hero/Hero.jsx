import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gray-100 p-10 text-center">
      <h1 className="text-4xl font-bold">Welcome to EventID!</h1>
      <p className="text-lg mt-4">Find and book your favorite events effortlessly.</p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
    </section>
  );
}

export default HeroSection;