import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

function EventUpdates() {
  const ongoingEvents = [
    {
      id: 1,
      title: "Annual Tech Summit",
      description: "Join us for the latest tech trends and innovations discussion.",
      location: "Convention Center Hall A",
      attendees: "250+ attending",
      status: "Live Now"
    },
    {
      id: 2,
      title: "Music Festival 2024",
      description: "Experience amazing performances from top artists.",
      location: "Central Park Arena",
      attendees: "1000+ attending",
      status: "Day 2 of 3"
    },
    {
      id: 3,
      title: "Food & Culture Expo",
      description: "Explore diverse cuisines and cultural exhibitions.",
      location: "City Exhibition Center",
      attendees: "500+ attending",
      status: "Ongoing"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Event Updates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-600">{event.title}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {event.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventUpdates;