"use client";

import React, { useState, useEffect } from 'react';
import { Header } from "@/components/urds-director/Header";
import URDSSidebar from '@/components/urds-director/sidebar';
import { SubmissionRow } from "@/components/urds-director/SubmissionRow";


// Types defined inline to match the requested snippet structure
export interface Faculty {
  name: string;
  email: string;
  department: string;
}

export interface Submission {
  id: string;
  faculty: Faculty;
  researchTitle: string;
  call: string;
  submittedDate: string;
  status: 'Pending' | 'Approved' | 'Rejected'; // Updated to match SubmissionRow expectations
}

export default function FacultySubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(2);

  // Mock data - replace with actual API call
  const mockData: Submission[] = [
    {
      id: '1',
      faculty: {
        name: 'Dr. Sarah Johnson',
        email: 'sarah.johnson@university.edu',
        department: 'Computer Science'
      },
      researchTitle: 'Machine Learning Applications in Healthcare Diagnostic',
      call: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Pending'
    },
    {
      id: '2',
      faculty: {
        name: 'Dr. Robert Kim',
        email: 'robert.kim@university.edu',
        department: 'Mechanical Engineering'
      },
      researchTitle: 'Renewable Energy Storage Solutions',
      call: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Pending'
    },
    {
      id: '3',
      faculty: {
        name: 'Dr. Emily Cruz',
        email: 'emily.cruz@university.edu',
        department: 'Civil Engineering'
      },
      researchTitle: 'Smart Infrastructure Monitoring IoT Technologies',
      call: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Approved'
    },
    {
      id: '4',
      faculty: {
        name: 'Dr. James Tan',
        email: 'james.tan@university.edu',
        department: 'Electrical Engineering'
      },
      researchTitle: 'AI-Driven Power Grid Optimization',
      call: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Approved'
    },
    {
      id: '5',
      faculty: {
        name: 'Dr. Angela Lee',
        email: 'angela.lee@university.edu',
        department: 'Chemical Engineering'
      },
      researchTitle: 'Sustainable Materials for Water Purification',
      call: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Pending'
    },
    {
      id: '6',
      faculty: {
        name: 'Dr. Hannah Reyes',
        email: 'hannah.reyes@university.edu',
        department: 'Computer Engineering'
      },
      researchTitle: 'Edge Computing Framework for Smart Cities',
      call: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      status: 'Approved'
    }
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Replace with actual API call:
        // const response = await fetch('/api/faculty-submissions');
        // const data = await response.json();
        // setSubmissions(data);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        setSubmissions(mockData);
      } catch (error) {
        console.error("Failed to fetch submissions", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-red-500/20">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 h-full w-2 bg-red-500 z-0"></div>
      <div className="fixed top-0 right-0 h-full w-2 bg-red-500 z-0"></div>

      {/* Replaced Sidebar2 with URDSSidebar as requested */}
      <URDSSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-[1600px] mx-auto px-8 py-6 pl-24 relative">
        <Header />

        {/* Main Content Card */}
        <div className="w-[98%] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12 relative mx-auto">
          
          {/* Red Header Bar */}
          <div className="bg-red-500 text-white py-3 px-6 rounded-t-lg mx-4 mt-4 shadow-md relative z-10">
            <h2 className="text-lg font-bold tracking-wide uppercase">Faculty Submissions - College of VETERINARY MEDICINE</h2>
          </div>

          {/* Content Area */}
          <div className="p-6 pt-8 pb-12 relative">
            
            {/* Total Submissions Badge */}
            <div className="absolute -top-16 right-8 bg-white border border-gray-300 shadow-sm rounded-lg px-4 py-1 z-20 flex items-center gap-2">
              <span className="text-xs text-gray-500 font-bold uppercase">Total Submissions :</span>
              <span className="text-xl font-bold text-gray-800">{loading ? '...' : submissions.length}</span>
            </div>

            {/* Table Header */}
            <div className="w-full px-4 mb-2">
                <div className="grid grid-cols-12 gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <div className="col-span-2 text-left">Faculty</div>
                    <div className="col-span-2 text-left">Department</div>
                    <div className="col-span-3 text-left">Research Title</div>
                    <div className="col-span-2 text-left">Call</div>
                    <div className="col-span-1 text-center">Submitted</div>
                    <div className="col-span-1 text-left pl-2">Status</div>
                    <div className="col-span-1 text-center">Actions</div>
                </div>
            </div>


            {/* Scrollable List Area */}
            <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {loading ? (
                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-24 bg-gray-50 animate-pulse rounded-lg border border-gray-200"></div>
                  ))}
                </div>
              ) : (
                submissions.map((submission) => (
                  <SubmissionRow key={submission.id} data={submission} />
                ))
              )}
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #94a3b8;
              }
            `}</style>
          </div>
          
          {/* Bottom Red Line Decoration */}
          <div className="h-2 w-full bg-gray-100"></div>
        </div>
      </main>
    </div>
  );
}