import React from 'react';

function RegisterPage() {
  return (
    <section className="p-10 flex flex-col items-center mt-16">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Enter your name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded p-2" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full border rounded p-2" placeholder="Create a password" />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
      </form>
    </section>
  );
}

export default RegisterPage;