// File: components/Header.tsx
import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  userName: string;
  userDepartment: string;
  searchPlaceholder?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  userName, 
  userDepartment, 
  searchPlaceholder = "Search Announcement" 
}) => {
  return (
    <div className="bg-transparent px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-15 h-15 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
          </div>
          
          <div>
            <h1 className="text-lg font-bold text-gray-900">{userName}</h1>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px]">🎓</span>
              {userDepartment}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Profile Badge */}
          <div className="w-17 h-17 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
          </div>
        </div>
      </div>
    </div>
  );
};