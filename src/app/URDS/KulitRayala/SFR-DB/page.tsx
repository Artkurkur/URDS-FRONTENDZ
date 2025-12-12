'use client';

import React, { useState } from 'react';
import URDSSidebar from '@/components/CollegeDean/Sidebar';
import DashboardHeader from '@/components/CollegeDean/DashboardHeader';
import StatsCards from '@/components/CollegeDean/StatsCards';
import SubmissionsTable from '@/components/CollegeDean/SubmissionsTable';
import ProfileModal from '@/components/CollegeDean/ProfileModal';
import SubmissionModal from '@/components/CollegeDean/SubmissionModal';

interface Submission {
  id: string;
  name: string;
  email: string;
  cell: string;
  submitted: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  statusDescription: string;
  submittedDate: string;
  comments?: string;
  suggestions?: string;
}

type FilterType = 'All' | 'Pending' | 'Approved' | 'Rejected';

const EvaluatorDashboard: React.FC = () => {
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  const [submissions] = useState<Submission[]>([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@university.edu',
      cell: 'Computer Science',
      submitted: 'Machine Learning Applications in Healthcare Diagnostics',
      status: 'Pending',
      statusDescription: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      comments: 'This research demonstrates a strong understanding of how machine learning can transform healthcare diagnostics.',
      suggestions: 'Consider expanding the methodology section.'
    },
    {
      id: '2',
      name: 'Dr. Robert Kim',
      email: 'robert.kim@university.edu',
      cell: 'Mechanical Engineering',
      submitted: 'Renewable Energy Storage Solutions',
      status: 'Pending',
      statusDescription: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      comments: 'Innovative approach to energy storage challenges.',
      suggestions: 'Include cost-benefit analysis in the proposal.'
    },
    {
      id: '3',
      name: 'Dr. Emily Cruz',
      email: 'emily.cruz@university.edu',
      cell: 'Civil Engineering',
      submitted: 'Smart Infrastructure Monitoring Using IoT Technologies',
      status: 'Rejected',
      statusDescription: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      comments: 'The proposal lacks sufficient detail in the implementation plan.',
      suggestions: 'Revise the methodology and resubmit with clearer objectives.'
    },
    {
      id: '4',
      name: 'Dr. James Tan',
      email: 'james.tan@university.edu',
      cell: 'Mechanical Engineering',
      submitted: 'AI-Driven Power Grid Optimization',
      status: 'Approved',
      statusDescription: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      comments: 'Excellent proposal with clear objectives and methodology.',
      suggestions: 'None. Ready to proceed.'
    },
    {
      id: '5',
      name: 'Dr. Maria Santos',
      email: 'maria.santos@university.edu',
      cell: 'Civil Engineering',
      submitted: 'Sustainable Building Materials Research',
      status: 'Approved',
      statusDescription: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      comments: 'Well-structured research plan.',
      suggestions: 'Consider collaboration with the engineering department.'
    }
  ]);

  // Calculate counts
  const totalSubmissions = submissions.length;
  const pendingCount = submissions.filter(s => s.status === 'Pending').length;
  const approvedCount = submissions.filter(s => s.status === 'Approved').length;
  const rejectedCount = submissions.filter(s => s.status === 'Rejected').length;

  // Filter submissions
  const filteredSubmissions = activeFilter === 'All' 
    ? submissions 
    : submissions.filter(s => s.status === activeFilter);

  // Handlers
  const handleViewSubmission = (id: string) => {
    const submission = submissions.find(s => s.id === id);
    if (submission) {
      setSelectedSubmission(submission);
      setShowSubmissionModal(true);
    }
  };

  const handleCloseSubmissionModal = () => {
    setShowSubmissionModal(false);
    setSelectedSubmission(null);
  };

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Sidebar */}
      <URDSSidebar />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:ml-24">
        {/* Header */}
        <DashboardHeader onProfileClick={() => setShowProfileModal(true)} />

        {/* Stats Cards */}
        <StatsCards
          totalSubmissions={totalSubmissions}
          pendingCount={pendingCount}
          approvedCount={approvedCount}
          rejectedCount={rejectedCount}
          activeFilter={activeFilter}
          onFilterClick={handleFilterClick}
        />

        {/* Active Filter Indicator */}
        {activeFilter !== 'All' && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">
              Showing: <span className="font-bold">{activeFilter}</span> submissions ({filteredSubmissions.length})
            </span>
            <button
              onClick={() => handleFilterClick('All')}
              className="text-sm text-blue-600 hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Submissions Table */}
        <SubmissionsTable 
          submissions={filteredSubmissions} 
          onViewSubmission={handleViewSubmission}
        />
      </div>

      {/* Modals */}
      <SubmissionModal 
        isOpen={showSubmissionModal}
        onClose={handleCloseSubmissionModal}
        submission={selectedSubmission}
      />

      <ProfileModal 
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </div>
  );
};

export default EvaluatorDashboard;