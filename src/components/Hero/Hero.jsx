import React from 'react';
import heroImage from '/EventID-React/EventID-Frontend/src/assets/Logo EventID.png';
import bgImage from '/EventID-React/EventID-Frontend/src/assets/wedding.jpg';
import { Link } from 'lucide-react';


const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to EventID inc.</h1>
            <p className="text-xl mb-8">EventID hadir sebagai Event Organizer (EO) Terbaik di Indonesia, platform manajemen event berbasis web yang dirancang khusus untuk pasar Indonesia. 
              Platform ini dikembangkan sebagai solusi komprehensif untuk mengotomatisasi dan mengoptimalkan seluruh aspek pengelolaan event, mulai dari perencanaan awal hingga evaluasi pasca-acara. Dengan fokus pada kebutuhan unik industri event Indonesia.

            </p>
            <a href="/booking" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
              Book Now 
            </a>
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