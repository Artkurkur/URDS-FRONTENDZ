"use client";

import React, { useState } from 'react';
import { Eye, Megaphone, FileText, User } from 'lucide-react';

interface Submission {
  id: number;
  researcher: string;
  email: string;
  call: string;
  title: string;
  submittedType: string;
  submittedDate: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

interface StatCard {
  label: string;
  count: number;
  color: string;
}

const ResearchCoordinatorDashboard: React.FC = () => {
  const [submissions] = useState<Submission[]>([
    {
      id: 1,
      researcher: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@university.edu',
      call: 'Computer Science',
      title: 'Machine Learning Applications in Healthcare Diagnostics',
      submittedType: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Pending'
    },
    {
      id: 2,
      researcher: 'Dr. Robert Kim',
      email: 'robert.kim@university.edu',
      call: 'Mechanical Engineering',
      title: 'Renewable Energy Storage Solutions',
      submittedType: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Pending'
    },
    {
      id: 3,
      researcher: 'Dr. Emily Cruz',
      email: 'emily.cruz@university.edu',
      call: 'Civil Engineering',
      title: 'Smart Infrastructure Monitoring Using IoT Technologies',
      submittedType: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Approved'
    },
    {
      id: 4,
      researcher: 'Dr. James Tan',
      email: 'james.tan@university.edu',
      call: 'Electrical Engineering',
      title: 'AI-Driven Power Grid Optimization',
      submittedType: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Approved'
    }
  ]);

  const stats: StatCard[] = [
    { label: 'Total Submissions', count: 5, color: 'bg-gray-900' },
    { label: 'Pending Dean Review', count: 4, color: 'bg-blue-400' },
    { label: 'Dean Approved', count: 1, color: 'bg-orange-400' },
    { label: 'Dean Rejected', count: 1, color: 'bg-red-400' }
  ];

  const handleViewSubmission = (id: number): void => {
    console.log('View submission:', id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Research Coordinator</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-700">UNIVERSITY OF EASTERN PHILIPPINES</p>
                  <p className="text-gray-600">Dr. Research C. Coordinator - Research Coordinator, College of Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105`}
            >
              <div className="text-4xl font-bold mb-2">{stat.count}</div>
              <div className="text-sm font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Announcements */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Announcements</h2>
            <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              New Announcement
            </span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden border border-gray-200">
            <div className="flex items-start justify-between relative z-10">
              <div className="flex gap-4 flex-1">
                <div className="bg-blue-400 rounded-xl p-4 text-white text-center min-w-[90px]">
                  <div className="text-xs font-medium uppercase">Today</div>
                  <div className="text-3xl font-bold my-1">17:00</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-base">
                    The University Research and Development Services (URDS) is now accepting Research Proposals for the Academic Year 2024-2025. Please review the guidelines and submit your proposal before the deadline.
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span className="font-medium">Deadline: Oct 31, 2025</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span>Guidelines Available</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium ml-auto">
                      View All
                    </button>
                    <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 font-medium transition-colors">
                      Post
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center">
                    <Megaphone className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Submissions Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Faculty Submissions - College Engineering
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Research Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Call
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {submissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900">{submission.researcher}</div>
                        <div className="text-sm text-gray-500">{submission.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {submission.call}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{submission.title}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {submission.submittedType}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {submission.submittedDate}
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          submission.status === 'Approved' ? 'bg-green-500' : 
                          submission.status === 'Pending' ? 'bg-yellow-500' : 
                          'bg-red-500'
                        }`}></span>
                        <span className={`text-sm font-semibold ${
                          submission.status === 'Approved' ? 'text-green-700' : 
                          submission.status === 'Pending' ? 'text-yellow-700' : 
                          'text-red-700'
                        }`}>
                          {submission.status}
                        </span>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleViewSubmission(submission.id)}
                        className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                        aria-label="View submission"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scrollbar indicator */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-gray-300 rounded-full hidden lg:block">
          <div className="w-full h-12 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCoordinatorDashboard;