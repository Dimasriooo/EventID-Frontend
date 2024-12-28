import React from 'react';

// function Hero() {
//   return (
//     <section className="bg-gray-100 p-10 text-center">
//       <h1 className="text-4xl font-bold">Welcome to EventID!</h1>
//       <p className="text-lg mt-4">Find and book your favorite events effortlessly.</p>
//       <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
//     </section>
//   );
// }

import heroImage from '/EventID-React/EventID-Frontend/src/assets/Logo EventID.png';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to EventID!</h1>
            <p className="text-xl mb-8">EventID tercipta dari sebuah visi untuk menciptakan komunitas dimana kita dapat berbagi berbagai macam info bermanfaat
              seperti lab IT Programming dan berkolaborasi dengan orang-orang berbakat lainnya dalam bertukar ide sekaligus memberikan 
              sarana untuk berbagi keterampilan, kerjasama tim yang baik, dan lingkungan yang nyaman.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Image */}
          <div className="order-first lg:order-last">
            <img 
              src={heroImage} 
              alt="Technology illustration" 
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;