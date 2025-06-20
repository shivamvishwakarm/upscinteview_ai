"use client";
import React from "react";
import { AuthenticationDialog } from "@/app/components/ui/dialogs/AuthenticationDialog";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center text-sm font-semibold text-gray-800">
      <span className="text-xl">
        <span className="text-purple-600">IAS</span> Interview
        <span className="text-black">AI</span>
      </span>

      <AuthenticationDialog providers={["google"]} />
    </nav>
  );
};

export default Navbar;
