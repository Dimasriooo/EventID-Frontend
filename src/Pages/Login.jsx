import React from 'react';

function LoginPage() {
  return (
    <section className="p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded p-2" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full border rounded p-2" placeholder="Enter your password" />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        <p className="text-center mt-4 text-sm">
          Forgot your password? <a href="/forgot-password" className="text-blue-500">Reset it</a>
        </p>
        <p className="text-center mt-2 text-sm">
          Don't have an account? <a href="/register" className="text-blue-500">Register here</a>
        </p>
      </form>
    </section>
  );
}

export default LoginPage;