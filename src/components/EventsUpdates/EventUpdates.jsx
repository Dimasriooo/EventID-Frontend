import React from 'react';

function EventUpdates() {
  return (
    <section className="bg-gray-100 p-10">
      <h2 className="text-2xl font-bold">Event Updates</h2>
      <div className="mt-6">
        <div className="bg-white shadow rounded p-4 mb-4">
          <h3 className="font-semibold">Music Festival is announced!</h3>
          <p className="text-gray-600">Don’t miss out on upcoming music festivals this season!</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold">Joined the tech conference?</h3>
          <p className="text-gray-600">Stay updated and share your experience!</p>
        </div>
      </div>
    </section>
  );
}

export default EventUpdates;