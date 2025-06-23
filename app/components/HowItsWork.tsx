import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-white p-4">
      {/* Heading */}
      <div>
        <h2 className="text-xl mt-17 font-bold bg-purple-400 text-black rounded-full px-6 py-2 shadow-md">
          How It Works
        </h2>
      </div>
      {/* Video placeholder */}
      <div
        className="w-[90%] max-w-4xl h-72 bg-gray-300 rounded-3xl flex items-center justify-center text-black text-sm shadow-xl"
        style={{
          boxShadow: '0 0 25px 5px rgba(168, 85, 247, 0.6)',
          marginTop: 'calc(var(--spacing) * 17)',
        }}
      >
        Video
      </div>
    </div>
  );
};

export default HowItWorks;
