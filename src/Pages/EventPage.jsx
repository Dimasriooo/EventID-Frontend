import React from 'react';

function EventPage() {
  const events = [
    { id: 1, title: 'Music Festival', date: 'Jan 20-22, 2023', img: 'image1.jpg' },
    { id: 2, title: 'Food Expo', date: 'Feb 5-7, 2024', img: 'image2.jpg' },
    { id: 3, title: 'Tech Conference', date: 'Mar 15-17, 2024', img: 'image3.jpg' },
    { id: 4, title: 'Wedding Party', date: 'Apr 10-12, 2024', img: 'image4.jpg' },
    { id: 5, title: 'Engagement Party', date: 'Jul 7, 2024', img: 'image5.jpg' },
    { id: 6, title: 'Birthday Party', date: 'Aug 17, 2024', img: 'image6.jpg' },
  ];

  const tips = [
    { id: 1, title: 'Venue Selection', description: 'Choose the perfect venue for your event.', icon: '🎉' },
    { id: 2, title: 'Budgeting Tips', description: 'Manage your budget efficiently.', icon: '💰' },
    { id: 3, title: 'Marketing Strategies', description: 'Promote your event to reach a wider audience.', icon: '📢' },
  ];

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-6">Featured Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event.id} className="border rounded-lg shadow-md p-4">
            <img src={event.img} alt={event.title} className="rounded mb-4" />
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-10">Event Planning Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {tips.map(tip => (
          <div key={tip.id} className="border rounded-lg shadow-md p-4 flex items-center space-x-4">
            <div className="text-4xl">{tip.icon}</div>
            <div>
              <h4 className="font-bold text-lg">{tip.title}</h4>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventPage;