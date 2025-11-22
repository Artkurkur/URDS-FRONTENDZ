// src/components/Sidebar.tsx
"use client";

import React from "react";

type SidebarProps = {
  activeCollegesCount: number;
};

export default function Sidebar({ activeCollegesCount }: SidebarProps) {
  const navigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <aside className="fixed left-0 top-1/2 transform -translate-y-1/2 w-20 bg-white shadow-lg rounded-r-3xl py-4 flex flex-col items-center z-50">
      <button 
        aria-label="Home" 
        onClick={() => navigate("/")}
        className="w-16 h-16 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors -mb-4 relative z-10"
      >
        <img src="/images/icons/URDSicon.png" alt="home" className="w-12 h-12" />
      </button>
      <button 
        aria-label="Announcements" 
        onClick={() => navigate("/announcements")}
        className="w-16 h-16 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors -mb-4 relative z-10"
      >
        <img src="/images/icons/MphoneIcon.png" alt="ann" className="w-12 h-12" />
        {activeCollegesCount > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center z-20">
            {activeCollegesCount}
          </span>
        )}
      </button>
      <button 
        aria-label="Courses" 
        onClick={() => navigate("/courses")}
        className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center transition-colors hover:bg-blue-100 relative z-10"
      >
        <img src="/images/icons/LibIcon.png" alt="course" className="w-12 h-12" />
      </button>
    </aside>
  );
}