'use client'; // Enables client-side rendering for this component in Next.js

import React from 'react';
import { useForm, FieldErrors, FieldError } from 'react-hook-form'; // Import hooks and types from react-hook-form

// Define the shape of the form data
type DAFFormData = {
  address: string;
  gender: string;
  dob: string;
  education: string;
  subject: string;
  attempts: number;
};

export default function DAFForm() {
  // Initialize react-hook-form with the DAFFormData type
  const {
    register, // Registers input fields
    handleSubmit, // Handles form submission
    formState: { errors }, // Contains validation errors
    getValues, // Gets current form values
  } = useForm<DAFFormData>();

  // Function to export form data as a JSON file
  const exportToJson = () => {
    const data = getValues(); // Get current form values
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); // Create a JSON blob
    const url = URL.createObjectURL(blob); // Create a URL for the blob
    const a = document.createElement('a'); // Create a temporary anchor element
    a.href = url; // Set the href to the blob URL
    a.download = 'daf-form-data.json'; // Set the download filename
    a.click(); // Trigger the download
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  // Function to handle form submission
  const onSubmit = (data: DAFFormData) => {
    console.log('Submitted:', data); // Log submitted data
    alert('Form submitted successfully!'); // Show success alert
  };

  // Helper function to render validation errors
  const renderError = (error: FieldError | undefined) => {
    return error?.message ? <p className="text-red-500 text-sm mt-1">{error.message}</p> : null;
  };

  return (
    // Main container with background and centering styles
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)} // Attach form submit handler
        className="w-full max-w-2xl p-6 bg-white border border-purple-200 rounded-2xl shadow-xl animate-fadeIn"
      >
        {/* Form title */}
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6 animate-pulse">
          DAF Form
        </h1>

        {/* Address input field */}
        <div className="mb-4">
          <input
            {...register('address', { required: 'Address is required' })} // Register with validation
            placeholder="Address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition-all"
          />
          {renderError(errors.address)} {/* Show error if any */}
        </div>

        {/* Gender select field */}
        <div className="mb-4">
          <select
            {...register('gender', { required: 'Gender is required' })} // Register with validation
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition-all"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {renderError(errors.gender)} {/* Show error if any */}
        </div>

        {/* Date of Birth input field */}
        <div className="mb-4">
          <input
            type="date"
            {...register('dob', { required: 'Date of Birth is required' })} // Register with validation
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition-all"
          />
          {renderError(errors.dob)} {/* Show error if any */}
        </div>

        {/* Education input field */}
        <div className="mb-4">
          <input
            {...register('education', { required: 'Education details required' })} // Register with validation
            placeholder="Education (10th/12th/Graduation)"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition-all"
          />
          {renderError(errors.education)} {/* Show error if any */}
        </div>

        {/* Subject input field */}
        <div className="mb-4">
          <input
            {...register('subject', { required: 'Subject is required' })} // Register with validation
            placeholder="Subject"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition-all"
          />
          {renderError(errors.subject)} {/* Show error if any */}
        </div>

        {/* Number of Attempts input field */}
        <div className="mb-4">
          <input
            type="number"
            {...register('attempts', {
              required: 'Number of attempts is required',
              min: { value: 0, message: 'Cannot be negative' },
            })} // Register with validation
            placeholder="No. of Attempts"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition-all"
          />
          {renderError(errors.attempts)} {/* Show error if any */}
        </div>

        {/* Submit and Export buttons */}
        <div className="flex justify-between items-center mt-6 gap-4">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 animate-bounce"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={exportToJson} // Export form data as JSON
            className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 animate-pulse"
          >
            Export to JSON
          </button>
        </div>
      </form>

      {/* Custom fade-in animation for the form */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}

// Export the form data type for use elsewhere if needed
export type { DAFForm };
