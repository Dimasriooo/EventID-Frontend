import React from 'react';

function FeaturedEvents() {
  const events = [
    { id: 1, title: 'Music Festival', date: 'Jan 20-22, 2022', img: 'image1.jpg' },
    { id: 2, title: 'Food Fair', date: 'Feb 5-7, 2022', img: 'image2.jpg' },
    { id: 3, title: 'Tech Conference', date: 'Mar 15-17, 2022', img: 'image3.jpg' },
  ];

  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold">Featured Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {events.map(event => (
          <div key={event.id} className="border rounded-lg shadow-md p-4">
            <img src={event.img} alt={event.title} className="rounded mb-4" />
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedEvents;