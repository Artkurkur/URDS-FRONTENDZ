import React from 'react';
import { ChevronLeft, Search } from 'lucide-react';

export const Header: React.FC = () => {
  // Array representing the slots for partner logos
  const partnerLogos = Array(9).fill(null);

  return (
    <div className="w-full flex flex-col gap-6 mb-8 relative z-10">
      {/* Top Bar with Logos */}
      <div className="flex justify-between items-start">
        {/* Left Side: Back button and Main Logo */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft size={28} className="text-gray-700" />
          </button>
          
          <div className="flex items-center gap-4">
             {/* Main College Seal */}
             <div className="w-20 h-20 rounded-full border-2 border-gray-200 p-1 flex items-center justify-center bg-white shadow-sm overflow-hidden">
                <img src="/images/logo/UEPlogo.png" alt="College Seal" className="w-full h-full object-cover rounded-full" />
             </div>
             
             <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">COLLEGE OF VETERINARY MEDICINE</h1>
                <div className="h-0.5 w-full bg-gray-200 my-1"></div>
                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">University of Eastern Philippines Colleges Department</p>
             </div>
          </div>
        </div>

        {/* Right Side: Partner Logos Container */}
        <div className="bg-white rounded-l-full rounded-r-2xl shadow-md border border-gray-100 py-2 px-6 flex items-center gap-3">
          {partnerLogos.map((_, idx) => (
             <div key={idx} className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden bg-gray-50 hover:scale-110 transition-transform cursor-pointer">
                {/* Slot left blank for manual image insertion */}
             </div>
          ))}
        </div>
      </div>

      {/* Search Bar Row */}
      <div className="flex justify-end w-full px-4">
        <div className="relative w-96">
          <input 
            type="text" 
            placeholder="Search College" 
            className="w-full pl-6 pr-10 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-gray-600 bg-white"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
    </div>
  );
};