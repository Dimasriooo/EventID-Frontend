import React from 'react';

function EventUpdates() {
  return (
    <section className="bg-gray-100 p-10">
      <h2 className="text-2xl font-bold text-center text-black mb-12">Event Updates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Web Development</h3>
            <p className="text-gray-600">Building responsive and modern websites.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">App Development</h3>
            <p className="text-gray-600">Creating mobile applications with the best user experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Cloud Solutions</h3>
            <p className="text-gray-600">Providing scalable cloud services for your business.</p>
          </div>
        </div>
    </section>
  );
}

export default EventUpdates;