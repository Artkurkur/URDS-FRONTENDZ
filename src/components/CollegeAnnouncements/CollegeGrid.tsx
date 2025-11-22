// ================================================================

// src/components/CollegeGrid.tsx
"use client";

import React from "react";

export type College = {
  id: string | number;
  code?: string;
  name: string;
  logoUrl?: string;
  submissions: number;
};

type CollegeGridProps = {
  colleges: College[];
  onSelect: (college: College) => void;
  defaultLogo: string;
};

function getBadgeClass(n: number) {
  if (n >= 30) return "bg-blue-600";
  if (n >= 20) return "bg-orange-400";
  if (n >= 10) return "bg-teal-500";
  return "bg-red-500";
}

export default function CollegeGrid({ colleges, onSelect, defaultLogo }: CollegeGridProps) {
  if (colleges.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No colleges found matching your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {colleges.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c)}
          className="group bg-white rounded-xl p-4 flex items-center justify-center relative overflow-hidden border hover:shadow-xl transition"
        >
          <div className="w-full h-40 flex items-center justify-center">
            <img 
              src={c.logoUrl ?? defaultLogo} 
              alt={c.name} 
              className="max-h-28 object-contain transform group-hover:scale-105 transition" 
            />
          </div>

          {/* submission count badge */}
          <div className={`absolute top-3 right-3 w-10 h-10 rounded-full text-white font-bold flex items-center justify-center border-2 border-white shadow ${getBadgeClass(c.submissions)}`}>
            {c.submissions}
          </div>
        </button>
      ))}
    </div>
  );
}