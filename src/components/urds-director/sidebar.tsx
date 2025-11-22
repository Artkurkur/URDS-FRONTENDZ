// src/app/components/urds-director/sidebar.tsxdd
"use client";

import { useState } from 'react';
import { Megaphone, Atom, ListTodo, Shield } from 'lucide-react';

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  color: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: Atom, label: 'Research', color: 'from-cyan-400 to-blue-500' },
  { icon: Megaphone, label: 'Announcements', color: 'from-yellow-400 to-orange-500' },
  { icon: ListTodo, label: 'Proposals', color: 'from-purple-400 to-purple-600' },
  { icon: Shield, label: 'Compliance', color: 'from-blue-400 to-blue-600' },
];

interface SidebarProps {
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

export default function Sidebar({ activeTab = 1, onTabChange }: SidebarProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div className="w-20 bg-white py-6 flex flex-col items-center gap-2 fixed left-4 top-4 bottom-4 z-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl border border-gray-100">
      {/* Logo at top */}
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
        <span className="text-white font-bold text-sm">UCP</span>
      </div>
      
      {/* Navigation Items - Overlapping */}
      <div className="flex flex-col gap-3 flex-1 relative">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group -mr-4 ml-auto transform translate-x-4 hover:translate-x-6 ${
              currentTab === index 
                ? 'bg-gradient-to-br ' + item.color + ' shadow-[0_8px_25px_rgba(0,0,0,0.25)] scale-110 z-20' 
                : 'bg-white shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] z-10'
            }`}
          >
            <item.icon className={`w-7 h-7 ${currentTab === index ? 'text-white' : 'text-gray-500'}`} />
            
            {/* Tooltip */}
            <div className="absolute left-20 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
              {item.label}
            </div>
          </button>
        ))}
      </div>

      {/* URDS Logo at bottom */}
      <div className="mt-auto">
        <img 
          src="https://i.imgur.com/YqQYz1S.png" 
          alt="URDS Logo" 
          className="w-14 h-14 object-contain"
        />
      </div>
    </div>
  );
}