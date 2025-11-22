// ================================================================

// src/components/SearchHeader.tsx
"use client";

import React from "react";

type SearchHeaderProps = {
  query: string;
  setQuery: (query: string) => void;
  onBack: () => void;
};

export default function SearchHeader({ query, setQuery, onBack }: SearchHeaderProps) {
  return (
    <header className="pl-28 pr-8 py-6 relative z-40">
      <div className="flex items-center">
        <button 
          className="mr-4 p-2 rounded-md hover:bg-gray-100 transition-colors" 
          onClick={onBack}
        >
          ←
        </button>
        <h1 className="text-xl font-semibold">Submissions</h1>

        <div className="ml-auto relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-56 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search Colleges"
            aria-label="Search colleges"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</div>
        </div>
      </div>
    </header>
  );
}