import React, { useState, useEffect } from 'react';

function BookingListPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(loadedBookings);
  }, []);

  return (
    <section className="p-10 mt-16">
      <h1 className="text-3xl font-bold mb-6">Event Bookings</h1>
      <div className="grid gap-4">
        {bookings.map((booking) => (
          <div 
            key={booking.id} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{booking.eventName}</h3>
                <p className="text-gray-600">{booking.fullName}</p>
                <p className="text-gray-500">{booking.email}</p>
                <p className="text-gray-500">Date: {booking.date}</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                {booking.status}
              </span>
            </div>
          </div>
        ))}
        {bookings.length === 0 && (
          <p className="text-center text-gray-500">No bookings found</p>
        )}
      </div>
    </section>
  );
}

export default BookingListPage;