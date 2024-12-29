import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventName: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simpan data booking ke localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const newBooking = {
      id: Date.now(),
      ...formData,
      status: 'Pending'
    };
    
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]));

    // Redirect ke halaman booking list
    navigate('/booking-list');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="p-10 flex flex-col items-center  bg-gray-50 ">
      <h1 className="text-3xl font-bold mb-6 text-black">Booking Event</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full border rounded p-2" 
            placeholder="Enter your full name"
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border rounded p-2" 
            placeholder="Enter your email"
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Event Name</label>
          <input 
            type="text" 
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            className="w-full border rounded p-2" 
            placeholder="Enter event name"
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input 
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required 
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Book Now
        </button>
      </form>
    </section>
  );
}

export default BookingPage;