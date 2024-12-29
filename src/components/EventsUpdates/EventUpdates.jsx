import React, { useState } from 'react';
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
    },
    {
      id: 4,
      title: "Elegant Wedding Celebration",
      description: "A luxurious wedding celebration featuring live music, gourmet dining, and a stunning floral arrangement.",
      location: "Grand Ballroom, City Hall",
      attendees: "500+ attending",
      status: "Ongoing"
    },
    {
      id: 5,
      title: "Kids' Superhero Party",
      description: "A fun-filled birthday party with superhero costumes, games, and a custom cake.",
      location: "FunZone Play Area",
      attendees: "50 (Kids & Parents)",
      status: "Ongoing"
    },
    {
      id: 6,
      title: "Corporate Team-Building Retreat",
      description: " A retreat featuring workshops, outdoor activities, and motivational speakers to foster teamwork.",
      location: " Green Valley Resort",
      attendees: "200 (Employees)",
      status: "Upcoming"
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null); // State untuk menyimpan acara yang dipilih

  const handleViewDetails = (event) => {
    setSelectedEvent(event); // Simpan data acara yang dipilih
  };

  const handleBackToList = () => {
    setSelectedEvent(null); // Kembali ke daftar acara
  };

  return (
    <section className="py-12 px-4 bg-white text-black">
      <div className="container mx-auto">
        {selectedEvent ? ( // Tampilkan detail acara jika ada acara yang dipilih
          <div className="bg-white rounded-xl shadow-lg p-6">
            <button
              onClick={handleBackToList} // Tombol kembali
              className="mb-4 text-blue-600 hover:underline"
            >
              Back to Events
            </button>

            <h2 className="text-3xl font-bold mb-6">{selectedEvent.title}</h2>
            <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
            
            <div className="text-gray-500 mb-2">
              <MapPin className="w-5 h-5 inline-block mr-2" />
              {selectedEvent.location}
            </div>
            
            <div className="text-gray-500">
              <Users className="w-5 h-5 inline-block mr-2" />
              {selectedEvent.attendees}
            </div>
          </div>
        ) : ( // Jika belum ada acara yang dipilih, tampilkan daftar acara
          <>
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

                    <button
                      onClick={() => handleViewDetails(event)} // Tambahkan handler di tombol
                      className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default EventUpdates;