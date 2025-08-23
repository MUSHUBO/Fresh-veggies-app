"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import React from 'react';

const RegisterForm = () => {

  const handleRegister = async (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    await registerUser({name, email, image, password});
  }

  return (
    <form onSubmit={handleRegister} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
          Profile Image URL
        </label>
        <input
          type="text"
          name="image"
          placeholder="Enter image URL"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Register Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-medium py-3 rounded-xl hover:bg-green-700 transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;