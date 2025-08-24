"use client";
import React from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value

    const toastId = toast.loading("Submitting...");

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.ok) {
        toast.success("Logged in successfully!", { id: toastId });
        form.reset(); // reset form after success
        router.push("/"); // redirect to home
      }
      // else if (response.error) {
      //   // custom error message from NextAuth authorize()
      //   toast.error(response.error, { id: toastId });
      // }
      else {
        toast.error("Invalid email or password", { id: toastId });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong", { id: toastId });
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5">
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
          required
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
          required
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-medium py-3 rounded-xl hover:bg-green-700 transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;