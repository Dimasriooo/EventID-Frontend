import React from 'react';

import WeddingImage from '/EventID-React/EventID-Frontend/src/assets/Wedding.jpg';
import Birthday from '/EventID-React/EventID-Frontend/src/assets/birthday.jpg';
import Cathering from '/EventID-React/EventID-Frontend/src/assets/cathering.jpg';
import Birthday2 from '/EventID-React/EventID-Frontend/src/assets/birthday2.jpg';
import Wedding3 from '/EventID-React/EventID-Frontend/src/assets/Wedding3.jpg';
import Wedding4 from '/EventID-React/EventID-Frontend/src/assets/Wedding4.jpg';

function FeaturedEvents() {
  const events = [
    { 
      id: 1, 
      title: 'Wedding Intimate', 
      date: 'Jan 20-22, 2024', 
      img: WeddingImage 
    },
    { 
      id: 2, 
      title: 'Birthday Party ', 
      date: 'Feb 5-7, 2024', 
      img: Birthday
    },
    { 
      id: 3, 
      title: 'Cathering', 
      date: 'Mar 15-17, 2024', 
      img: Cathering
    },
    { 
      id: 4, 
      title: 'Bithday in beach', 
      date: 'jun 16-18, 2024', 
      img: Birthday2
    },
    { 
      id: 5, 
      title: 'Wedding Intimate', 
      date: 'august 15-17, 2024', 
      img: Wedding3
    },
    { 
      id: 6, 
      title: 'Wedding Intimate', 
      date: 'Des 15-17, 2024', 
      img: Wedding4
    },
  ];

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-black mb-12">Featured Events</h2>
      <p className="text-lg text-black mb-12">
        Di EventID Arena Experience, ada sesuatu yang menarik dengan fitur eksklusif yang kami tingkatkan setiap hari. Telusuri kota kami ke 
        temukan acara yang menghubungkan Anda dengan orang-orang yang berpikiran sama. Komunitas kami dibangun untuk menyediakan konten berkualitas
        memberikan pengalaman luar biasa bagi semua orang yang menghadiri acara kami.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img 
                src={event.img} 
                alt={event.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-lg text-black mt-4 mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedEvents;