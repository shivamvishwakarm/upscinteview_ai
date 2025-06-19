import React from "react";
import { login } from "@/app/lib/action/auth";
import Image from "next/image";
const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl transform transition-all duration-300 scale-100 sm:scale-100 items-center text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close Modal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Hi Aspirant</h2>
          <p className="text-sm text-gray-500">
            Enter your email to receive an OTP
          </p>
        </div>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Get OTP
          </button>

          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Login
          </button>
        </form>

        <div className="h-[2px] w-full bg-gray-200 rounded-lg my-4" />

        <button
          className="bg-blue-600 rounded-md px-3 py-2 text-white flex flex-row gap-2 items-center text-center mx-[15%] cursor-pointer"
          onClick={login}>
          <Image
            src={"/google-icon-logo-svgrepo-com.svg"}
            alt="Google Icon"
            width={20}
            height={20}
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
