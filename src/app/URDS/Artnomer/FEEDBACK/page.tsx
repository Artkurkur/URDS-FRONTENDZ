// ============================================================
// File: pages/AnnouncementBoard.tsx
import React from 'react';
import { Search } from 'lucide-react';
import URDSSidebar from '@/components/FacultyResearcher/sidebar';
import { Header } from '@/components/FacultyResearcher/header';

const AnnouncementBoard = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50 text-gray-800">
      {/* Sidebar */}
      <URDSSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header 
          userName="Dr. Maria L. Santos"
          userDepartment="College Of Engineering"
          searchPlaceholder="Search Announcement"
        />

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto relative">

                {/* Overlapping Search Bar */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full max-w-md z-20">
                <input
                    type="text"
                    placeholder="Search Announcement..."
                    className="w-full px-9 py-2 bg-white shadow-lg rounded-full border border-gray-200 
                            focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>

                {/* Content container with 10px border radius */}
                <div className="bg-white rounded-[10px] shadow-sm p-8 min-h-[calc(100vh-180px)] mt-10">
                {/* Announcement content goes here */}
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default AnnouncementBoard;