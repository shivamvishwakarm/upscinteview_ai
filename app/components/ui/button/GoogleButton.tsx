import React from "react";
import Image from "next/image";

interface GoogleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add custom props here if needed
  loading?: boolean; // optional: if you want to show a loading state
}

const GoogleButton: React.FC<GoogleButtonProps> = ({
  loading,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      {...props}
      className={` flex items-center gap-2 px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed ease-in-out duration-300 hover:cursor-pointer ${
        props.className ?? ""
      }`}>
      {/* You can add the Google icon here */}
      <Image
        width={20}
        height={20}
        src={"/google-icon-logo-svgrepo-com.svg"}
        alt="Google Icon"
      />
      {loading ? "Loading..." : children || "Continue with Google"}
    </button>
  );
};

export default GoogleButton;
