"use client";

import React, { useState } from 'react';
import { ArrowLeft, Menu, ZoomIn, ZoomOut, ChevronDown } from 'lucide-react';

export default function DeanReviewDetailed() {
  const [selectedStatus, setSelectedStatus] = useState('approved');
  const [overallRating, setOverallRating] = useState(8);
  const [comments, setComments] = useState('');
  const [specificSuggestions, setSpecificSuggestions] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
              </div>
              
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Research Coordinator</h1>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                  <div className="text-xs text-gray-600">
                    <div className="font-medium">UNIVERSITY OF EASTERN PHILIPPINES</div>
                    <div>Dr. Maria L. Santos - Research Coordinator, College of Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Menu className="w-4 h-4" />
              <span className="text-sm">Thesis Evaluation Summary</span>
            </button>
            <span className="text-sm text-gray-700">Computer Science</span>
            <span className="text-sm font-medium">Faculty Submissions - College Engineering</span>
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-sm">
          <div className="grid grid-cols-2 gap-4 p-6">
            {/* Left Panel - Submission Details */}
            <div className="space-y-6">
              {/* Researcher Info */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Researcher - College Engineering</h2>
                  <span className="text-sm text-gray-600">Department</span>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="font-medium text-gray-900">Dr. Sarah Johnson</div>
                  <div className="text-sm text-gray-600">sarah.johnson@university.edu</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-700">Computer Science</div>
                </div>
              </div>

              {/* Research Title */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Research Title</h3>
                  <span className="text-sm text-gray-600">Date Submitted</span>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📄</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">Machine Learning Applications in Healthcare Diagnostics</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                  October 10, 2025
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  placeholder="This research demonstrates a strong understanding of how machine learning can transform healthcare diagnostics. The proposal clearly identifies the potential of AI in improving diagnostic accuracy and efficiency in medical analysis. It is innovative, relevant, and shows promise for real-world application in clinical settings."
                />
              </div>

              {/* Specific Suggestions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specific Suggestions</label>
                <textarea
                  value={specificSuggestions}
                  onChange={(e) => setSpecificSuggestions(e.target.value)}
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  placeholder="This research demonstrates a strong understanding of how machine learning can transform healthcare diagnostics. The proposal clearly identifies the potential of AI in improving diagnostic accuracy and efficiency in medical analysis. It is innovative, relevant, and shows promise for real-world application in clinical settings."
                />
              </div>

              {/* Review Status */}
              <div className="border-t pt-6">
                <div className="flex items-center gap-6 mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="revisions"
                      checked={selectedStatus === 'revisions'}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium">Need Revisions</span>
                  </label>
                  
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="disapproved"
                      checked={selectedStatus === 'disapproved'}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium">Disapproved</span>
                  </label>
                  
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="approved"
                      checked={selectedStatus === 'approved'}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-5 h-5 accent-blue-500"
                    />
                    <span className="text-sm font-medium text-blue-600">Approved</span>
                  </label>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">Overall Rating</span>
                  <div className="flex-1 flex items-center gap-3">
                    <select
                      value={overallRating}
                      onChange={(e) => setOverallRating(Number(e.target.value))}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num}/10</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 -ml-8 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Document Viewer */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
                {/* Document Header */}
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex-1 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">CHAPTER 1</h3>
                    <p className="text-sm text-gray-600">Need Machine Learning Applications in Healthcare Diagnostics</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <ZoomIn className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <ZoomOut className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Document Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="prose prose-sm max-w-none text-xs leading-relaxed">
                    <h4 className="font-semibold text-gray-900 mb-3">1.1 Introduction</h4>
                    
                    <h5 className="font-medium text-gray-800 mb-2">1.1.1 Presentation of the problem</h5>
                    <p className="text-gray-700 mb-4">
                      Any culture has been full of great effort to human beings ever since it has been known. Everything from navigating with them, since the proper is important we had yesterday. More so, any culture that does benefit provided are varied in many ways. However in recent years they don't solve them fully in a day (Marjanovic, 2000, p. 79; Poikolainen et al, 2007, pp. 259-305; see SO-2 until 2009, 2009). Further, the gap culture has appeared multiple users results, the computer of the people follows. Some basic number when a results is to impact and that much best deal results as they provided help.
                    </p>

                    <h5 className="font-medium text-gray-800 mb-2">1.1.2 The existence of an unsatisfactory condition, a felt problem that needs a solution</h5>
                    <p className="text-gray-700 mb-4">
                      Unfortunately, some problems are often the case with many health. In efforts those paradoxically. Unfortunately, and unsuccessfully in addition, it allows them their express determination, of their intentions. It has both positive and negative effects. The research focuses more on the effects of culture and the people's behaviors. When shown people want to be updated with what's happening about the latest trends, as a part for feeling of being left out by their peers. It keeps them in the loop. Many times, a person ends up making bad decisions such as looking at something rather as good as beneficial and that is how it affects the behavior of a particular person.
                    </p>

                    <h5 className="font-medium text-gray-800 mb-2">1.1.3 Rationale of the problem</h5>
                    <p className="text-gray-700 mb-4">
                      The motivation of this research is to show the effects of pay culture on the behavior of Philippine Science School Senior High students. In that the parents will be aware of the effects it may bring to their child. Such exposure behavior is student may affect our food to anxiety and depression, and more outside. Hence, this surgery is to present the full impact of the pay culture and its negative effects on the students of the Philippine Science School Senior High students.
                    </p>

                    <h5 className="font-medium text-gray-800 mb-2">1.1.4 Historical background of the problem</h5>
                    <p className="text-gray-700">
                      Pay culture has been around since the old days and has cannot be avoided as we culture. This is evident in us know the word "standing". We also culture because people and we get approved on "what happens next". "What's current with my neighbors and how they use getting better since they have it". This era is the subseparate of the...
                    </p>
                  </div>
                </div>

                {/* Document Footer */}
                <div className="p-4 border-t flex justify-center">
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronDown className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-6 border-t flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-sm transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Thesis Evaluation Summary Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Thesis Evaluation Summary</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="space-y-6">
                {/* Researcher and Department */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Researcher - College Engineering</label>
                    <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg">👤</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Dr. Sarah Johnson</div>
                        <div className="text-xs text-gray-600">sarah.johnson@university.edu</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Department</label>
                    <div className="bg-yellow-50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg">🎓</span>
                      </div>
                      <div className="font-medium text-gray-900">Computer Science</div>
                    </div>
                  </div>
                </div>

                {/* Research Title and Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Research Title</label>
                    <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📄</span>
                      </div>
                      <div className="flex-1 font-medium text-gray-900">
                        Machine Learning Applications in Healthcare Diagnostics
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Date Submitted</label>
                    <div className="bg-red-50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📅</span>
                      </div>
                      <div className="font-medium text-gray-900">October 10, 2025</div>
                    </div>
                  </div>
                </div>

                {/* Adviser */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Adviser</label>
                  <div className="bg-purple-50 rounded-lg p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">👨‍🏫</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Dr. Roberto P. Villanueva, Ph.D.</div>
                      <div className="text-xs text-gray-600">Faculty of Education and Research Adviser</div>
                    </div>
                  </div>
                </div>

                {/* Proponents and Panelists */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Proponents</label>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg">👥</span>
                        </div>
                        <div className="flex-1">
                          <ul className="space-y-1 text-sm text-gray-900">
                            <li>• Juan Dela Cruz</li>
                            <li>• Maria Santos</li>
                            <li>• Jose Ramirez</li>
                            <li>• Ana Martinez</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Panelists</label>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg">🎓</span>
                        </div>
                        <div className="flex-1">
                          <ul className="space-y-1 text-sm text-gray-900">
                            <li>• Prof. Lisa M. Castro, M.A.</li>
                            <li>• Dr. Henry T. Cruz, Ed.D.</li>
                            <li>• Prof. Susan D. Villegas, M.A.</li>
                            <li>• Dr. Ramon L. Mendoza, Ph.D.</li>
                            <li>• Prof. David F. Natalie, M.A.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 flex justify-end">
              <button 
                onClick={() => setShowModal(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}