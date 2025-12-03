"use client";
import React, { useState } from 'react';
import { ArrowLeft, ZoomIn, ZoomOut, FileText, User, ChevronDown, X, Calendar } from 'lucide-react';

interface Panelist {
  name: string;
  credentials: string[];
}

const ThesisEvaluationSummary: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<'needRevisions' | 'disapproved' | 'approved'>('approved');
  const [overallRating, setOverallRating] = useState<string>('8 to 10');
  const [showModal, setShowModal] = useState<boolean>(true);
  
  const researcher = {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    department: 'Computer Science',
    college: 'College of Engineering'
  };

  const researchTitle = "Machine Learning Applications in Healthcare Diagnostics";
  const dateSubmitted = "October 10, 2025";

  const adviser = {
    name: 'Dr. Robert P. Villanueva, Ph.D.',
    email: 'robert.villanueva@uep.edu.ph'
  };

  const proponents: Panelist = {
    name: 'Juan Dela Cruz',
    credentials: [
      'Maria Santos',
      'Jose Mercado',
      'Anna Reyes'
    ]
  };

  const panelists: Panelist = {
    name: 'Prof. Luis M. Castro, M.A.',
    credentials: [
      'Dr. James L. Cruz, Ed.D.',
      'Dr. Sofia N. Torres, Ph.D.',
      'Prof. Mark S. Gonzales, M.S.',
      'Dr. Patricia M. Ramos, Ph.D.'
    ]
  };

  const comments = {
    research: "This research demonstrates a strong understanding of how machine learning can transform healthcare diagnostics. The proposal clearly identifies the potential of AI in improving accuracy and efficiency in medical analysis. It is innovative, relevant, and shows promise for real-world application in clinical settings.",
    specific: "This research demonstrates a strong understanding of how machine learning can transform healthcare diagnostics. The proposal clearly identifies the potential of AI in improving accuracy and efficiency in medical analysis.",
    scientific: "The colors weight influences the modern so some levels. A offers these psychological, behavioristic, and organizational influences."
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Research Coordinator</h1>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold">UNIVERSITY OF EASTERN PHILIPPINES</p>
                    <p>Dr. Research C. Coordinator - Research Coordinator, College of Engineering</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Computer Science</p>
                <p className="text-xs text-gray-600">Faculty Submissions - College Engineering</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <FileText className="w-5 h-5" />
                <div>
                  <p className="text-xs font-semibold">Team Duration</p>
                  <p className="text-xs text-gray-600">16 months</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4">
          {/* Left Panel */}
          <div className="col-span-1 space-y-4">
            {/* Researcher Info */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-xs text-gray-500 mb-2">Researcher - College Engineering</div>
              <div className="mb-3">
                <h3 className="font-bold text-gray-900">{researcher.name}</h3>
                <p className="text-sm text-gray-600">{researcher.email}</p>
              </div>
              <div className="text-xs text-gray-500 mb-2">Department</div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-gray-900">{researcher.department}</p>
                <p className="text-sm text-gray-600">{researcher.college}</p>
              </div>
            </div>

            {/* Research Title */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-xs text-gray-500 mb-2">Research Title</div>
              <div className="flex items-start gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">{researchTitle}</p>
              </div>
            </div>

            {/* Comments */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-3">Comments</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-gray-700 mb-2">Research</div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700 leading-relaxed">{comments.research}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scientific Suggestions */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-3">Scientific Suggestions</h3>
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">{comments.specific}</p>
              </div>
            </div>

            {/* Specific Suggestions */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-3">Specific Suggestions</h3>
              
              <div className="flex items-center gap-3 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value="needRevisions"
                    checked={selectedRating === 'needRevisions'}
                    onChange={(e) => setSelectedRating(e.target.value as any)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Need Revisions</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value="disapproved"
                    checked={selectedRating === 'disapproved'}
                    onChange={(e) => setSelectedRating(e.target.value as any)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Disapproved</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value="approved"
                    checked={selectedRating === 'approved'}
                    onChange={(e) => setSelectedRating(e.target.value as any)}
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-sm font-semibold text-blue-600">Approved</span>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Overall Rating:</span>
                <div className="relative">
                  <select
                    value={overallRating}
                    onChange={(e) => setOverallRating(e.target.value)}
                    className="appearance-none bg-white border border-blue-500 rounded-lg px-4 py-2 pr-8 text-sm font-semibold text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1 to 3">1 to 3</option>
                    <option value="4 to 7">4 to 7</option>
                    <option value="8 to 10">8 to 10</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Modal Overlay */}
          <div className="col-span-2 relative">
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                  {/* Modal Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-200 relative">
                    <button
                      onClick={() => setShowModal(false)}
                      className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-500">CHAPTER 1</div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-white rounded-lg transition-colors">
                          <ZoomIn className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-white rounded-lg transition-colors">
                          <ZoomOut className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                      Thesis Evaluation Summary
                    </h2>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      {/* Researcher */}
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Researcher - College Engineering</div>
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{researcher.name}</p>
                            <p className="text-xs text-gray-600">{researcher.email}</p>
                          </div>
                        </div>
                      </div>
                        <div></div>
                      {/* Department */}
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Department</div>
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{researcher.department}</p>
                          </div>
                        </div>
                      </div>

                      {/* Research Title */}
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Research Title</div>
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-4 h-4 text-blue-600" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">{researchTitle}</p>
                        </div>
                      </div>

                      {/* Date Submitted */}
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Date Submitted</div>
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-red-600" />
                          </div>
                          <p className="text-sm font-medium text-gray-900">{dateSubmitted}</p>
                        </div>
                      </div>

                      {/* Adviser */}
                      <div className="col-span-2">
                        <div className="text-xs text-gray-500 mb-2">Adviser</div>
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{adviser.name}</p>
                            <p className="text-xs text-gray-600">{adviser.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* Proponents */}
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Proponents</div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <p className="font-semibold text-gray-900 text-sm">{proponents.name}</p>
                          </div>
                          <ul className="text-xs text-gray-700 space-y-1 ml-10">
                            {proponents.credentials.map((person, idx) => (
                              <li key={idx}>• {person}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Panelists */}
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Panelists</div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                            <p className="font-semibold text-gray-900 text-sm">{panelists.name}</p>
                          </div>
                          <ul className="text-xs text-gray-700 space-y-1 ml-10">
                            {panelists.credentials.map((person, idx) => (
                              <li key={idx}>• {person}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Defense Summary */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-800 leading-relaxed text-justify">
                        The colors have been around since the old days and this colors be symbols in the
                        culture or the community has a different meaning. Through the various people follow
                        this such as people's discussion in their everyday life. Since the centuries people
                        put work and rely cultural of the aspect of various even which important various out.
                        Since for centuries discussion in the numerical process has proved that people can
                        create physical and numerical things and majority of the people follow. Since our
                        centuries today's trends to be capital and must stay the first place in their everyday
                        lifestyle. The psychological through influences the modern so some levels. A offers these
                        living might talks like it. The everything values is good as beneficial each little a
                        often the follow this influence in the.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-800 leading-relaxed text-justify">
                        The effects of put colours on the lifestyle. To just the people various can various
                        one the based the their color ideas the level of energy, creativity, and others can
                        tend to sustain and depression, and work outside. Hence, the impact of its are
                        considered as what makes a person can avoid negative emotions.
                      </p>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-end gap-3">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 font-medium transition-colors">
                      Ready to Defense
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 font-medium transition-colors">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Background Content (grayed out when modal is open) */}
            <div className={`bg-white rounded-2xl shadow-sm p-6 ${showModal ? 'opacity-30' : ''}`}>
              <div className="text-center py-20">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Document Preview Area</p>
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 font-medium transition-colors"
                >
                  View Thesis Evaluation Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThesisEvaluationSummary;