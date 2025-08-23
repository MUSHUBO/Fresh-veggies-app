import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex bg-[#ebd9b9]">

      {/* Left Image Column */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/assets/login-form-img.jpg"
          alt="Register Image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center p-4">
            Join Our Fresh Veggies Community
          </h1>
          <p className="text-center text-gray-900 text-base mb-8">
            Create your account and <span className="text-green-500 font-semibold">enjoy fresh vegetables every day</span>.
          </p>
        </div>
      </div>

      {/* Right Register Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">
            Create an Account
          </h2>

          {/* Subtitle */}
          <p className="text-center text-gray-500 text-sm md:text-base mb-6">
            Sign up to start your <span className="text-green-600 font-semibold">healthy vegetable journey</span>.
          </p>

          {/* Form */}
          <RegisterForm />

          {/* Extra Links */}
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
};

export default RegisterPage;