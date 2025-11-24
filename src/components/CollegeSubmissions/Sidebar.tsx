"use client";

import { Atom, Megaphone, ListTodo, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  route?: string; // add optional route
}

interface URDSSidebarProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

const sidebarItems: SidebarItem[] = [
  { icon: Atom, label: 'Home', color: 'from-yellow-400 to-orange-500', route: '/URDS/Mamas/COLLEGES' },
  { icon: Megaphone, label: 'Announcements', color: 'from-cyan-400 to-blue-500', route: '/URDS/Mamas/URDS-LP' },
  { icon: ListTodo, label: 'Colleges', color: 'from-purple-400 to-purple-600' }
];

export default function URDSSidebar({ activeTab, onTabChange }: URDSSidebarProps) {
  const router = useRouter();

  const handleClick = (item: SidebarItem, index: number) => {
    onTabChange(index);
    if (item.route) {
      router.push(item.route); // navigate to the route if defined
    }
  };

  return (
    <div className="w-20 bg-white py-6 flex flex-col items-center gap-2 fixed left-4 top-4 bottom-4 z-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl border border-gray-100">
      {/* Logo */}
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
        <span className="text-white font-bold text-sm">UCP</span>
      </div>
      
      {/* Navigation Items */}
      <div className="flex flex-col gap-3 flex-1 relative">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item, index)}
            className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group -mr-4 ml-auto transform translate-x-4 hover:translate-x-6 ${
              activeTab === index 
                ? 'bg-gradient-to-br ' + item.color + ' shadow-[0_8px_25px_rgba(0,0,0,0.25)] scale-110 z-20' 
                : 'bg-white shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] z-10'
            }`}
          >
            <item.icon className={`w-7 h-7 ${activeTab === index ? 'text-white' : 'text-gray-500'}`} />
            <div className="absolute left-20 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
              {item.label}
            </div>
          </button>
        ))}
      </div>

      {/* URDS Logo */}
      <div className="mt-auto">
        <img src="https://i.imgur.com/YqQYz1S.png" alt="URDS Logo" className="w-14 h-14 object-contain"/>
      </div>
    </div>
  );
}