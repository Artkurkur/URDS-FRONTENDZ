// ================================================================

// src/components/CollegeModal.tsx
"use client";

import React from "react";
import { College } from "./CollegeGrid";

type CollegeModalProps = {
  college: College | null;
  onClose: () => void;
  defaultLogo: string;
};

export default function CollegeModal({ college, onClose, defaultLogo }: CollegeModalProps) {
  if (!college) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 w-[90%] max-w-md" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="ml-auto mb-2 text-gray-500 hover:text-gray-700 text-2xl" 
          onClick={onClose}
        >
          ×
        </button>
        <img 
          src={college.logoUrl ?? defaultLogo} 
          alt="logo" 
          className="w-full h-36 object-contain mb-4" 
        />
        <h2 className="font-semibold text-lg">{college.name}</h2>
        <p className="mt-2 text-gray-600">
          Total Submissions: <span className="text-blue-600 font-bold">{college.submissions}</span>
        </p>
        <div className="mt-4 text-right">
          <button 
            className="px-4 py-2 rounded-md border hover:bg-gray-50 transition-colors" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}