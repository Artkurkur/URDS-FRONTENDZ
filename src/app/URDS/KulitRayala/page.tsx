'use client';

import React, { useState } from 'react';
import { Eye, X, Edit2 } from 'lucide-react';

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
  const [showModal, setShowModal] = useState(false);
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
      name: 'Dr. aw aw aw',
      email: 'james.tan@university.edu',
      cell: 'Civil Engineering',
      submitted: 'AI-Driven Power Grid Optimization',
      status: 'Approved',
      statusDescription: 'Research Grants for Academic Year 2024-2025',
      submittedDate: '2024-02-15',
      comments: 'Well-structured research plan.',
      suggestions: 'Consider collaboration with the engineering department.'
    }
  ]);

  const totalSubmissions = submissions.length;
  const pendingCount = submissions.filter(s => s.status === 'Pending').length;
  const approvedCount = submissions.filter(s => s.status === 'Approved').length;
  const rejectedCount = submissions.filter(s => s.status === 'Rejected').length;

  const filteredSubmissions = activeFilter === 'All' 
    ? submissions 
    : submissions.filter(s => s.status === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-400';
      case 'Approved':
        return 'bg-green-500';
      case 'Rejected':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  const handleViewSubmission = (id: string) => {
    const submission = submissions.find(s => s.id === id);
    if (submission) {
      setSelectedSubmission(submission);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSubmission(null);
  };

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                 onClick={() => setShowProfileModal(true)}
                 title="View Profile">
              <span className="text-white text-2xl font-bold">👤</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Senior Faculty Researcher</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/University_of_the_Philippines_seal.svg/150px-University_of_the_Philippines_seal.svg.png" alt="UEP" className="w-6 h-6" />
                <span className="font-semibold">UNIVERSITY OF EASTERN PHILIPPINES</span>
              </div>
              <p className="text-sm text-gray-600">Dr. Eva L. Autorayan - Senior Faculty Researcher, College of Engineering</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-700">Computer Science</p>
              <p className="text-sm text-gray-600">Faculty Submissions - College Engineering</p>
            </div>
            <button 
              onClick={() => setShowProfileModal(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-md flex items-center gap-2 font-medium"
            >
              <Edit2 className="w-4 h-4" />
              My Profile
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => handleFilterClick('All')}
            className={`bg-gray-900 text-white rounded-3xl p-6 text-center transition-all hover:scale-105 cursor-pointer ${
              activeFilter === 'All' ? 'ring-4 ring-gray-600' : ''
            }`}
          >
            <div className="text-4xl font-bold mb-2">{totalSubmissions}</div>
            <div className="text-sm font-medium">Total Submissions</div>
          </button>
          
          <button
            onClick={() => handleFilterClick('Pending')}
            className={`bg-blue-400 text-white rounded-3xl p-6 text-center transition-all hover:scale-105 cursor-pointer ${
              activeFilter === 'Pending' ? 'ring-4 ring-blue-600' : ''
            }`}
          >
            <div className="text-4xl font-bold mb-2">{pendingCount}</div>
            <div className="text-sm font-medium">SFR Evaluator Review</div>
          </button>
          
          <button
            onClick={() => handleFilterClick('Approved')}
            className={`bg-orange-400 text-white rounded-3xl p-6 text-center transition-all hover:scale-105 cursor-pointer ${
              activeFilter === 'Approved' ? 'ring-4 ring-orange-600' : ''
            }`}
          >
            <div className="text-4xl font-bold mb-2">{approvedCount}</div>
            <div className="text-sm font-medium">SFR Approved</div>
          </button>
          
          <button
            onClick={() => handleFilterClick('Rejected')}
            className={`bg-red-400 text-white rounded-3xl p-6 text-center transition-all hover:scale-105 cursor-pointer ${
              activeFilter === 'Rejected' ? 'ring-4 ring-red-600' : ''
            }`}
          >
            <div className="text-4xl font-bold mb-2">{rejectedCount}</div>
            <div className="text-sm font-medium">SFR Rejected</div>
          </button>
        </div>

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
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-white p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800">Faculty Submissions - College Engineering</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Research Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Cell
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSubmissions.length > 0 ? (
                  filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{submission.name}</div>
                        <div className="text-sm text-gray-500">{submission.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {submission.cell}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                        {submission.submitted}
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-600">
                        {submission.statusDescription}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {submission.submittedDate}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(submission.status)}`}></div>
                          <span className="text-sm font-medium text-gray-700">{submission.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => handleViewSubmission(submission.id)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                          title="View submission details"
                        >
                          <Eye className="w-5 h-5 text-gray-700" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      No submissions found for this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal - Submission Details */}
      {showModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Evaluator</h2>
                  <p className="text-sm opacity-90">UNIVERSITY OF EASTERN PHILIPPINES</p>
                  <p className="text-xs opacity-80">Dr. Eva L. Autorayan - Evaluator, College of Engineering</p>
                </div>
              </div>
              <button 
                onClick={handleCloseModal}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase mb-1">Researcher - College Engineering</p>
                    <p className="font-bold text-lg text-gray-800">{selectedSubmission.name}</p>
                    <p className="text-sm text-gray-600">{selectedSubmission.email}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase mb-1">Research Title</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📘</span>
                      <p className="font-semibold text-gray-800">{selectedSubmission.submitted}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase mb-1">Comments</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">{selectedSubmission.comments}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Specific Suggestions</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">{selectedSubmission.suggestions}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase mb-1">Department</p>
                    <p className="font-semibold text-gray-800">{selectedSubmission.cell}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase mb-1">Date Submitted</p>
                    <p className="font-semibold text-gray-800">{selectedSubmission.submittedDate}</p>
                  </div>

                  <div className="border-2 border-gray-300 rounded-lg p-8 bg-gray-50 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl mb-4">📄</p>
                      <p className="text-gray-600 font-semibold mb-2">CHAPTER 1</p>
                      <p className="text-sm text-gray-500">Need Machine Learning Applications in Healthcare Diagnostics</p>
                      <button className="mt-4 text-blue-600 text-sm hover:underline">View Full Document</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="status" className="w-4 h-4" />
                    <span className="text-sm">Need Revisions</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="status" className="w-4 h-4" />
                    <span className="text-sm">Disapproved</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="status" className="w-4 h-4" defaultChecked />
                    <span className="text-sm">Approved</span>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                    <option>[1 to 10]</option>
                  </select>
                  <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                    Ready to Defense
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors">
                    SUBMIT FEEDBACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Evaluator Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white flex items-center justify-between sticky top-0">
              <h2 className="text-2xl font-bold">Evaluator Profile</h2>
              <button 
                onClick={() => setShowProfileModal(false)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start gap-8 mb-8 pb-8 border-b">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">👤</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Change Photo
                  </button>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      defaultValue="Dr. Eva L. Autorayan"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                      <input 
                        type="text" 
                        defaultValue="Dr."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Position *</label>
                      <input 
                        type="text" 
                        defaultValue="Evaluator"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      defaultValue="eva.autorayan@uep.edu.ph"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      defaultValue="+63 912 345 6789"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Office Location</label>
                    <input 
                      type="text" 
                      defaultValue="Engineering Building, Room 301"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Office Hours</label>
                    <input 
                      type="text" 
                      defaultValue="Mon-Fri, 9:00 AM - 5:00 PM"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                      <input 
                        type="text" 
                        defaultValue="Computer Science"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">College *</label>
                      <input 
                        type="text" 
                        defaultValue="College of Engineering"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specialization/Expertise</label>
                    <textarea 
                      rows={3}
                      defaultValue="Machine Learning, Artificial Intelligence, Data Science, Software Engineering"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Highest Educational Attainment</label>
                    <input 
                      type="text" 
                      defaultValue="Ph.D. in Computer Science"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                    <input 
                      type="number" 
                      defaultValue="15"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Bio</h3>
                <textarea 
                  rows={5}
                  defaultValue="Dr. Eva L. Autorayan is a distinguished professor and evaluator at the University of Eastern Philippines with over 15 years of experience in computer science education and research. She specializes in machine learning, artificial intelligence, and data science, and has published numerous papers in international journals."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t">
                <button 
                  onClick={() => setShowProfileModal(false)}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    alert('Profile updated successfully!');
                    setShowProfileModal(false);
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluatorDashboard;