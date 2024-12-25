import React from 'react';

function BookingPage() {
  return (
    <section className="p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Booking Event</h1>
      <form className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded p-2" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Event Name</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Enter event name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input type="date" className="w-full border rounded p-2" />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;