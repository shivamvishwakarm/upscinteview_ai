
import React from 'react';

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-white to-purple-300 px-6 py-10">
      {/* Header */}
      <header className="w-full flex justify-between items-center text-sm font-semibold text-gray-800">
        <span className="text-xl">
          <span className="text-purple-600">IAS</span> Interview <span className="text-black">AI</span>
        </span>
        <a href="#" className="hover:underline">Login</a>
      </header>

      {/* Content */}
      <section className="flex flex-col items-center justify-center text-center flex-grow">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-black mb-4">
          Prepare for <span className="px-1">your next competitive</span><br />
          <strong className="text-black text-2xl sm:text-3xl md:text-4xl">Exam Interview</strong>
        </h1>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition">
          Start Interview
        </button>
      </section>
    </main>
  );
}
