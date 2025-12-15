"use client";

import React, { useState, useEffect } from 'react';
import { Eye, Megaphone, Menu, X } from 'lucide-react';

interface Submission {
  id: number;
  name: string;
  email: string;
  college: string;
  researchTitle: string;
  status: string;
  submittedDate: string;
  statusColor: string;
}

interface Announcement {
  id: number;
  title: string;
  deadline: string;
  time: string;
  date: string;
}

interface DashboardStats {
  totalSubmissions: number;
  pendingCount: number;
  approvedCount: number;
  rejectedCount: number;
}

// Mock Sidebar Component (replace with your actual URDSSidebar)
const MockSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <div className={`fixed lg:static inset-y-0 left-0 transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-64 bg-white shadow-lg lg:shadow-none`}>
    <div className="p-6">
      <div className="flex items-center justify-between lg:justify-center mb-8">
        <h2 className="text-xl font-bold text-gray-900">URDS Portal</h2>
        <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="space-y-2">
        <a href="#" className="block px-4 py-3 bg-orange-100 text-orange-900 rounded-lg font-medium">Dashboard</a>
        <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">Submissions</a>
        <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">Announcements</a>
        <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">Settings</a>
      </nav>
    </div>
  </div>
);

export default function ResearchCoordinator() {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [stats, setStats] = useState<DashboardStats>({
    totalSubmissions: 0,
    pendingCount: 0,
    approvedCount: 0,
    rejectedCount: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch submissions from database
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/submissions');
        
        if (!response.ok) {
          throw new Error('Failed to fetch submissions');
        }
        
        const data = await response.json();
        setSubmissions(data);
        
        // Calculate stats from fetched data
        const total = data.length;
        const pending = data.filter((s: Submission) => s.statusColor === 'pending').length;
        const approved = data.filter((s: Submission) => s.statusColor === 'approved').length;
        const rejected = data.filter((s: Submission) => s.statusColor === 'rejected').length;
        
        setStats({
          totalSubmissions: total,
          pendingCount: pending,
          approvedCount: approved,
          rejectedCount: rejected
        });
        
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching submissions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  // Fetch latest announcement from database
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch('/api/announcements/latest');
        
        if (!response.ok) {
          throw new Error('Failed to fetch announcement');
        }
        
        const data = await response.json();
        setAnnouncement(data);
      } catch (err) {
        console.error('Error fetching announcement:', err);
      }
    };

    fetchAnnouncement();
  }, []);

  // Filter submissions based on selected status
  const filteredSubmissions = filterStatus === 'all' 
    ? submissions 
    : submissions.filter(sub => sub.statusColor === filterStatus);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 text-gray-800 font-sans selection:bg-red-500/20">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <MockSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden sticky top-0 z-20 bg-white shadow-sm px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Evaluator Dashboard</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Header Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              {/* Profile Avatar */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl md:text-2xl">👤</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 w-full min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Evaluator</h1>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-1">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-700 truncate">
                      UNIVERSITY OF EASTERN PHILIPPINES
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      Dr. Maria L. Santos • Evaluator, College of Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6">
              <button
                onClick={() => setFilterStatus('all')}
                className={`bg-gray-900 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 text-center text-white transition-all active:scale-95 hover:scale-105 ${
                  filterStatus === 'all' ? 'ring-2 sm:ring-4 ring-gray-400' : ''
                }`}
                disabled={loading}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stats.totalSubmissions}</div>
                <div className="text-xs sm:text-sm mt-1">Total Submissions</div>
              </button>

              <button
                onClick={() => setFilterStatus('pending')}
                className={`bg-blue-400 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 text-center text-white transition-all active:scale-95 hover:scale-105 ${
                  filterStatus === 'pending' ? 'ring-2 sm:ring-4 ring-blue-600' : ''
                }`}
                disabled={loading}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stats.pendingCount}</div>
                <div className="text-xs sm:text-sm mt-1">Pending Review</div>
              </button>

              <button
                onClick={() => setFilterStatus('approved')}
                className={`bg-orange-400 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 text-center text-white transition-all active:scale-95 hover:scale-105 ${
                  filterStatus === 'approved' ? 'ring-2 sm:ring-4 ring-orange-600' : ''
                }`}
                disabled={loading}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stats.approvedCount}</div>
                <div className="text-xs sm:text-sm mt-1">Approved</div>
              </button>

              <button
                onClick={() => setFilterStatus('rejected')}
                className={`bg-red-400 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 text-center text-white transition-all active:scale-95 hover:scale-105 ${
                  filterStatus === 'rejected' ? 'ring-2 sm:ring-4 ring-red-600' : ''
                }`}
                disabled={loading}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stats.rejectedCount}</div>
                <div className="text-xs sm:text-sm mt-1">Rejected</div>
              </button>
            </div>

            {/* Active Indicator Line */}
            <div className="relative h-1 mt-3 sm:mt-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`absolute h-full rounded-full transition-all duration-300 ${
                  filterStatus === 'all'
                    ? 'bg-gray-900 w-1/4 left-0'
                    : filterStatus === 'pending'
                    ? 'bg-blue-500 w-1/4 left-1/4'
                    : filterStatus === 'approved'
                    ? 'bg-orange-500 w-1/4 left-2/4'
                    : 'bg-red-500 w-1/4 left-3/4'
                }`}
              />
            </div>
          </div>

          {/* Announcement Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 mb-4 sm:mb-6">
            <div className="flex items-center flex-wrap gap-2 mb-3 sm:mb-4">
              <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Announcements</h2>
              <span className="bg-blue-500 text-white text-xs px-2 py-0.5 sm:py-1 rounded-full">New</span>
            </div>

            {announcement ? (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Date Badge and Content */}
                  <div className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4">
                    <div className="bg-blue-500 text-white rounded-lg px-3 sm:px-4 py-2 flex-shrink-0 self-start">
                      <div className="text-xs">{announcement.time}</div>
                      <div className="text-xl sm:text-2xl font-bold">{announcement.date}</div>
                    </div>
                    
                    <div className="flex-1 min-w-0 w-full">
                      <p className="text-sm sm:text-base font-medium text-gray-900 break-words">
                        {announcement.title}
                      </p>
                      <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 mt-2 text-xs text-gray-600">
                        <span className="flex items-center gap-1">📅 Deadline: {announcement.deadline}</span>
                        <span className="flex items-center gap-1">📋 Guidelines Available</span>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                        <button className="px-3 sm:px-4 py-1.5 border-2 border-green-500 text-green-600 hover:bg-green-50 active:bg-green-100 rounded-lg font-medium text-xs sm:text-sm transition-colors">
                          View All
                        </button>
                        <button className="px-3 sm:px-4 py-1.5 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 active:bg-blue-100 rounded-lg font-medium text-xs sm:text-sm transition-colors">
                          Post
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Emoji */}
                  <div className="text-4xl sm:text-5xl md:text-6xl self-center xs:self-end">📢</div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 text-center text-gray-500 text-sm">
                No announcements available
              </div>
            )}
          </div>

          {/* Faculty Submissions Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6">
            {/* Section Header */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between mb-4 gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Faculty Submissions - College Engineering
                {filterStatus !== 'all' && (
                  <span className="block xs:inline ml-0 xs:ml-2 text-xs sm:text-sm font-normal text-gray-600 mt-1 xs:mt-0">
                    ({filteredSubmissions.length} {filterStatus})
                  </span>
                )}
              </h2>
              {filterStatus !== 'all' && (
                <button
                  onClick={() => setFilterStatus('all')}
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 active:text-blue-800 font-medium whitespace-nowrap"
                >
                  Clear Filter
                </button>
              )}
            </div>

            {/* Loading/Error/Empty States */}
            {loading ? (
              <div className="text-center py-8 sm:py-12 text-gray-500 text-sm">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2" />
                <p>Loading submissions...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8 sm:py-12 text-red-500 text-sm">
                <p className="font-medium">Error loading data</p>
                <p className="text-xs mt-1">{error}</p>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="text-center py-8 sm:py-12 text-gray-500 text-sm">
                No submissions found
              </div>
            ) : (
              <>
                {/* Desktop Table View (hidden on mobile/tablet) */}
                <div className="hidden lg:block overflow-x-auto -mx-6 px-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 whitespace-nowrap">Faculty Name</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 whitespace-nowrap">College</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 whitespace-nowrap">Research Title</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 whitespace-nowrap">Call</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 whitespace-nowrap">Submitted Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 whitespace-nowrap">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 whitespace-nowrap">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubmissions.map((submission) => (
                        <tr key={submission.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-medium text-gray-900">{submission.name}</div>
                            <div className="text-sm text-gray-500">{submission.email}</div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-700">{submission.college}</td>
                          <td className="py-4 px-4 text-sm text-gray-700 max-w-xs truncate" title={submission.researchTitle}>
                            {submission.researchTitle}
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">{submission.status}</td>
                          <td className="py-4 px-4 text-sm text-gray-700 whitespace-nowrap">{submission.submittedDate}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-3 h-3 rounded-full flex-shrink-0 ${
                                  submission.statusColor === 'pending'
                                    ? 'bg-yellow-400'
                                    : submission.statusColor === 'approved'
                                    ? 'bg-green-500'
                                    : 'bg-red-500'
                                }`}
                              />
                              <span className="text-sm font-medium capitalize">{submission.statusColor}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <button className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors">
                              <Eye className="w-5 h-5 text-gray-600" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile/Tablet Card View */}
                <div className="lg:hidden space-y-3 sm:space-y-4">
                  {filteredSubmissions.map((submission) => (
                    <div key={submission.id} className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-3 hover:shadow-md transition-shadow">
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 text-sm sm:text-base truncate">
                            {submission.name}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500 truncate mt-0.5">
                            {submission.email}
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-colors flex-shrink-0">
                          <Eye className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      
                      {/* Card Details */}
                      <div className="space-y-2 text-xs sm:text-sm">
                        <div className="flex flex-wrap items-start gap-1">
                          <span className="text-gray-500 font-medium min-w-fit">College:</span>
                          <span className="text-gray-900">{submission.college}</span>
                        </div>
                        <div className="flex flex-wrap items-start gap-1">
                          <span className="text-gray-500 font-medium min-w-fit">Research:</span>
                          <span className="text-gray-900 break-words">{submission.researchTitle}</span>
                        </div>
                        <div className="flex flex-wrap items-start gap-1">
                          <span className="text-gray-500 font-medium min-w-fit">Call:</span>
                          <span className="text-gray-900">{submission.status}</span>
                        </div>
                        <div className="flex flex-wrap items-start gap-1">
                          <span className="text-gray-500 font-medium min-w-fit">Submitted:</span>
                          <span className="text-gray-900">{submission.submittedDate}</span>
                        </div>
                      </div>
                      
                      {/* Card Status */}
                      <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                        <div
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            submission.statusColor === 'pending'
                              ? 'bg-yellow-400'
                              : submission.statusColor === 'approved'
                              ? 'bg-green-500'
                              : 'bg-red-500'
                          }`}
                        />
                        <span className="text-xs sm:text-sm font-medium capitalize">{submission.statusColor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}