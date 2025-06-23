"use client";
import React from "react";
import { AuthenticationDialog } from "@/app/components/ui/dialogs/AuthenticationDialog";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center text-sm font-semibold text-gray-800">
      <span className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-[#C17EF7] to-[#444744] bg-clip-text text-transparent">
          IAS
        </span>{" "}
        <span className="bg-gradient-to-r from-[#C17EF7] to-[#444744] bg-clip-text text-transparent">
          Interview
        </span>
        <span className="text-black">AI</span>
      </span>

      <AuthenticationDialog providers={["google"]} />
    </nav>
  );
};

export default Navbar;
