// ================================================================
// src/app/URDS/SUBMISSIONS/FACULTY/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Header } from "@/components/urds-director/Header";
import URDSSidebar from '@/components/urds-director/sidebar';
import { SubmissionRow } from "@/components/urds-director/SubmissionRow";
import Link from "next/link";

// Types defined inline
export interface College {
  id: string;
  name: string;
  code: string;
  logoUrl: string;
}

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
  status: 'Pending' | 'Approved' | 'Rejected';
}

export default function FacultySubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  // State for selected college
  const [selectedCollege, setSelectedCollege] = useState<College>({
    id: 'cvm',
    name: 'College of Veterinary Medicine',
    code: 'CVM',
    logoUrl: '/images/logo/CVM-logo.png',
  });

  // Mock data - empty to trigger "No Submission" message
  const mockData: Submission[] = [];

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // TODO: Replace with actual API fetching logic filtering by selectedCollege.id
        setSubmissions(mockData);
      } catch (error) {
        console.error("Failed to fetch submissions", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedCollege]); // Refetch when college changes

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50 text-gray-800 font-sans selection:bg-red-500/20">

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 h-full w-2 bg-red-500 z-0"></div>
      <div className="fixed top-0 right-0 h-full w-2 bg-red-500 z-0"></div>

      {/* Sidebar */}
      <URDSSidebar />

      <main className="max-w-[1600px] mx-auto px-8 py-6 pl-24 relative">
        <Header selectedCollege={selectedCollege} setSelectedCollege={setSelectedCollege} />

        {/* Main Content Card */}
        <div className="w-[98%] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12 relative mx-auto">

          {/* Red Header Bar */}
          <div className="bg-red-500 text-white py-3 px-6 rounded-t-lg mx-4 mt-4 shadow-md relative z-10">
            <h2 className="text-lg font-bold tracking-wide uppercase">
              Faculty Submissions - {selectedCollege.name.toUpperCase()}
            </h2>
          </div>

          {/* Content Area */}
          <div className="p-6 pt-8 pb-12 relative">

            {/* Total Submissions Badge */}
            <div className="absolute -top-16 right-8 bg-white border border-gray-300 shadow-sm rounded-lg px-4 py-1 z-20 flex items-center gap-2">
              <span className="text-xs text-gray-500 font-bold uppercase">Total Submissions :</span>
              <span className="text-xl font-bold text-gray-800">
                {loading ? '...' : submissions.length}
              </span>
            </div>

            {/* Table Header */}
            <div className="w-full px-4 mb-2">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500 tracking-wider">
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
                // Skeleton Loaders
                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="h-24 bg-gray-50 animate-pulse rounded-lg border border-gray-200"
                    ></div>
                  ))}
                </div>

              ) : submissions.length === 0 ? (

                // NO SUBMISSION YET — with clickable text link
                <div className="w-full py-20 flex justify-center items-center">
                  <div className="text-center max-w-md">
                    <p className="text-gray-500 text-lg font-semibold tracking-wide">
                      No submissions yet
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Click{" "}
                      <Link
                        href="/URDS/Mamas/URDS-LP"
                        className="text-green-500 font-semibold hover:underline hover:text-green-600"
                      >
                        Create New Call
                      </Link>{" "}
                      to notify researchers of the submission.
                    </p>
                  </div>
                </div>

              ) : (

                // Rows
                submissions.map((submission) => (
                  <SubmissionRow key={submission.id} data={submission} />
                ))
              )}
            </div>

            {/* Custom Scrollbar */}
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

          {/* Bottom Decoration */}
          <div className="h-2 w-full bg-gray-100"></div>
        </div>
      </main>
    </div>
  );
}
