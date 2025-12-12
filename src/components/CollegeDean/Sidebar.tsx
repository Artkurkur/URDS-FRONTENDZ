"use client";

import { LayoutDashboard, ClipboardList, FileText, Users, Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', color: 'from-yellow-400 to-orange-500', route: '/URDS/KulitRayala/SFR-DB' },
  { icon: ClipboardList, label: 'Submissions', color: 'from-blue-400 to-blue-600', route: '/URDS/KulitRayala/SFR-DB/submissions' },
  { icon: FileText, label: 'Proposals', color: 'from-purple-400 to-purple-600', route: '/URDS/KulitRayala/SFR-DB/proposals' },
  { icon: Users, label: 'Faculty', color: 'from-green-400 to-teal-500', route: '/URDS/KulitRayala/SFR-DB/faculty' }
];

export default function URDSSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if current path starts with the route (for nested routes)
  const activeTab = sidebarItems.findIndex(item => 
    pathname === item.route || pathname.startsWith(item.route + '/')
  );

  const handleNavigation = (route: string) => {
    router.push(route);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-[9999] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 right-4 z-[9998] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-56">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.route)}
              className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                activeTab === index
                  ? `bg-gradient-to-r ${item.color} text-white`
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-[9997]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar - Hidden on Mobile */}
      <div className="hidden md:flex w-20 bg-white py-6 flex-col items-center gap-2 fixed left-4 top-4 bottom-4 z-[9999] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl border border-gray-100">
        
        {/* Logo */}
        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6">
          <img 
             src="/images/logo/URDS-logo.png" 
             alt="URDS Logo" 
             className="w-16 h-16 object-contain" 
          />
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-3 flex-1 relative">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.route)}
              className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group -mr-4 ml-auto transform translate-x-4 hover:translate-x-6 ${
                activeTab === index 
                  ? `bg-gradient-to-br ${item.color} shadow-[0_8px_25px_rgba(0,0,0,0.25)] scale-110 z-20` 
                  : 'bg-white shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] z-10'
              }`}
            >
              <item.icon className={`w-7 h-7 ${activeTab === index ? 'text-white' : 'text-gray-500'}`} />
              {/* Tooltip */}
              <div className="absolute left-20 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                {item.label}
              </div>
            </button>
          ))}
        </div>

        {/* UEP Logo at bottom */}
        <div className="mt-auto">
          <img 
            src="/images/logo/UEPlogo.png" 
            alt="UEP Logo" 
            className="w-16 h-16 -mb-1 object-contain"
          />
        </div>
      </div>
    </>
  );
}