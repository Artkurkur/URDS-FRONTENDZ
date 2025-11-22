"use client";

import { useState } from 'react';
import { Clock, FileText, Plus, Pencil, Eye, Trash2, Megaphone, Atom, ListTodo, Shield, X, Calendar, Search, ChevronDown, Filter } from 'lucide-react';

const sidebarItems = [
  { icon: Atom, label: 'Research', color: 'from-cyan-400 to-blue-500', active: false },
  { icon: Megaphone, label: 'Announcements', color: 'from-yellow-400 to-orange-500', active: true },
  { icon: ListTodo, label: 'Proposals', color: 'from-purple-400 to-purple-600', active: false },
  { icon: Shield, label: 'Compliance', color: 'from-blue-400 to-blue-600', active: false },
];

const filterOptions = ['All', 'Today', 'This Week', 'This Month', 'This Year', 'Specific Date'];

export default function URDSDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAnnouncementActive, setIsAnnouncementActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
const [specificYear, setSpecificYear] = useState(new Date().getFullYear()); // number

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    deadline: '',
    guidelines: ''
  });

  const handleFilterSelect = (filter: string) => {
    if (filter === 'Specific Date') {
      setIsDateModalOpen(true);
    } else {
      setSelectedFilter(filter);
    }
    setIsFilterOpen(false);
  };

const handleSpecificYearSubmit = () => {
  setSelectedFilter(specificYear.toString()); // convert number to string
  setIsDateModalOpen(false);
};


  const handleAnnouncementClick = () => {
    setIsAnnouncementActive(!isAnnouncementActive);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditMode(true);
    setFormData({
      title: 'Research Proposals for Academic Year 2024-2025',
      description: 'The University Research and Development Services (URDS) is now accepting Research Proposals for the Academic Year 2024-2025. Please review the guidelines and submit your proposal before the deadline.',
      startDate: '2025-10-12',
      deadline: '2025-10-13',
      guidelines: ''
    });
    setIsModalOpen(true);
    setIsAnnouncementActive(false);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Delete announcement');
    setIsAnnouncementActive(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ title: '', description: '', startDate: '', deadline: '', guidelines: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex">
      {/* Sidebar */}
      <div className="w-20 bg-white py-6 flex flex-col items-center gap-2 fixed left-4 top-4 bottom-4 z-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl border border-gray-100">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
          <span className="text-white font-bold text-sm">UCP</span>
        </div>
        
        <div className="flex flex-col gap-3 flex-1 relative">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
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

        <div className="mt-auto">
          <img src="https://i.imgur.com/YqQYz1S.png" alt="URDS Logo" className="w-14 h-14 object-contain"/>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-28 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  University Research & Development Services
                </h1>
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 hidden md:flex items-center justify-center overflow-hidden">
                <span className="text-xs font-bold text-center leading-tight">EASTERN<br/>UNIV</span>
              </div>
            </div>

            {/* Announcement Banner */}
            <div className="relative">
              <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                New Announcement
              </span>
              <div 
                onClick={handleAnnouncementClick}
                className={`relative bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100 cursor-pointer transition-all duration-300 ${
                  isAnnouncementActive 
                    ? 'brightness-90 ring-2 ring-blue-400' 
                    : 'hover:brightness-95'
                }`}
              >
                {isAnnouncementActive && (
                  <>
                    <div 
                      onClick={handleEdit}
                      className="absolute -top-3 right-20 bg-white rounded-xl shadow-lg p-3 z-20 hover:bg-blue-50 hover:scale-110 transition-all duration-200 cursor-pointer border border-gray-100"
                    >
                      <Pencil className="w-5 h-5 text-blue-500" />
                    </div>
                    <div 
                      onClick={handleDelete}
                      className="absolute -top-3 right-6 bg-white rounded-xl shadow-lg p-3 z-20 hover:bg-red-50 hover:scale-110 transition-all duration-200 cursor-pointer border border-gray-100"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </div>
                  </>
                )}

                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-3 text-white text-center min-w-16">
                  <div className="text-xs">TODAY</div>
                  <div className="text-xl font-bold">17:00</div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm md:text-base">
                    The University Research and Development Services (URDS) is now accepting Research Proposals for the Academic Year 2024-2025. Please review the guidelines and submit your proposal before the deadline.
                  </p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Deadline: Oct 13, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Guidelines Available
                    </span>
                  </div>
                </div>
                <button className="text-blue-600 text-sm hover:underline whitespace-nowrap">
                  View All
                </button>
                <div className="hidden md:block">
                  <Megaphone className="w-16 h-16 text-orange-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Director Dashboard */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h2 className="text-lg font-semibold text-gray-700">URDS DIRECTOR DASHBOARD</h2>
              <div className="flex items-center gap-3">
                
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                  Submissions
                </button>
                <button 
                  onClick={() => {
                    setIsEditMode(false);
                    setFormData({ title: '', description: '', startDate: '', deadline: '', guidelines: '' });
                    setIsModalOpen(true);
                  }}
                  className="group flex items-center gap-2 text-gray-600 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 px-4 py-2 rounded-full transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
                  <span className="text-sm">Create New Call For Proposals</span>
                </button>
              </div>
            </div>

            {/* Search Bar and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search proposals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors min-w-48"
                >
                  <Filter className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 text-sm flex-1 text-left">{selectedFilter}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {isFilterOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-20">
                    {filterOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleFilterSelect(option)}
                        className={`w-full px-4 py-3 text-left text-sm hover:bg-blue-50 transition-colors flex items-center gap-2 ${
                          selectedFilter === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        {option === 'Specific Date' && <Calendar className="w-4 h-4" />}
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Posted Calls Table */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-700">Posted Calls for Proposals</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Title</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Start Date</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Deadline</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="text-center py-8 text-gray-400">
                        No proposals yet. Click "Create New Call For Proposals" to add one.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  {isEditMode ? <Pencil className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  {isEditMode ? 'Edit Announcement' : 'Create New Call For Proposals'}
                </h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proposal Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter proposal title..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter proposal description..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deadline <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guidelines / Attachments
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                    <FileText className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Drag & drop files here or <span className="text-emerald-500 font-medium">browse</span></p>
                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/30 transition-all"
              >
                {isEditMode ? 'Save Changes' : 'Create Proposal'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Specific Date Modal */}
      {isDateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
  <div 
    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
    onClick={() => setIsDateModalOpen(false)}
  ></div>
  
  <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4">
    {/* Header */}
    <div className="flex items-center justify-between p-6 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Select Year</h2>
      </div>
      <button 
        onClick={() => setIsDateModalOpen(false)}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
      >
        <X className="w-5 h-5 text-gray-500" />
      </button>
    </div>

    {/* Year Input */}
    <div className="p-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
      <input
        type="number"
        min="2000"
        max={new Date().getFullYear() + 10} // optional, limit future years
        value={specificYear}
        onChange={(e) => setSpecificYear(Number(e.target.value))}
        placeholder="e.g., 2025"
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>

    {/* Footer Buttons */}
    <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
      <button
        onClick={() => setIsDateModalOpen(false)}
        className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={handleSpecificYearSubmit}
        className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 transition-all"
      >
        Apply Filter
      </button>
    </div>
  </div>
</div>

      )}
    </div>
  );
}