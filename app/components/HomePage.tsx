"use client";
import React from "react";
import Navbar from "./Navbar";
// import { login } from "@/app/lib/action/auth";

export default function Landing() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-between px-6 py-10 bg-gradient-to-b from-white to-[#9680E1]" 
      //style={{ background: "linear-gradient(135deg, #ff6a00, #ee0979)" }}
    >
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center flex-grow">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-black mb-4">
          Prepare for{" "}
          <span className="px-1">your next competitive</span>
          <br />
          <strong className="text-black text-2xl sm:text-3xl md:text-4xl">
            Exam Interview
          </strong>
        </h1>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition">
          Start Interview
        </button>
      </section>
    </main>
  );
}
