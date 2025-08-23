import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex bg-[#ebd9b9]">
      {/* Left Image */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/assets/login-form-img.jpg"
          alt="Register Image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center p-4">
            Welcome to Fresh Veggies
          </h1>
          <p className="text-center text-gray-900 text-sm md:text-base mb-8">
            Sign in to continue your
            <span className="text-green-600 font-semibold">healthy vegetable journey</span>.
          </p>
        </div>
      </div>

      {/* Right Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
            Login to Your Account
          </h2>

          {/* Form */}
          <LoginForm></LoginForm>

          {/* Extra Links */}
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-green-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;