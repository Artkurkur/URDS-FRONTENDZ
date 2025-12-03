"use client";
import React, { useState } from 'react';
import { ArrowLeft, ZoomIn, ZoomOut, FileText, User, ChevronDown } from 'lucide-react';

interface Comment {
  id: number;
  type: 'research' | 'specific' | 'scientific';
  content: string;
}

const ResearchSubmissionReview: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<'needRevisions' | 'disapproved' | 'approved'>('approved');
  const [overallRating, setOverallRating] = useState<string>('8 to 10');
  const [zoom, setZoom] = useState<number>(100);
  
  const [comments] = useState<Comment[]>([
    {
      id: 1,
      type: 'research',
      content: 'This research demonstrates a strong understanding of how machine learning can transform healthcare diagnostics. The program clearly identifies the potential of AI in improving accuracy and efficiency in medical analysis. It is innovative, relevant, and shows promise for real-world application in clinical settings.'
    },
    {
      id: 2,
      type: 'specific',
      content: 'This research demonstrates a strong understanding of how machine learning can transform healthcare diagnostics. The program clearly identifies the potential of AI in improving accuracy and efficiency in medical analysis. It is innovative, relevant, and shows promise for real-world application in clinical settings.'
    }
  ]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                
              <button id='btn' className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
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
          {/* Left Panel - Submission Details */}
          <div className="col-span-1 space-y-4">
            {/* Researcher Info */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-xs text-gray-500 mb-2">Researcher - College Engineering</div>
              <div className="mb-3">
                <h3 className="font-bold text-gray-900">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-600">sarah.johnson@university.edu</p>
              </div>
              <div className="text-xs text-gray-500 mb-2">Department</div>
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="font-semibold text-gray-900">Computer Science</p>
                <p className="text-sm text-gray-600">College of Engineering</p>
              </div>
            </div>

            {/* Research Title */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-xs text-gray-500 mb-2">Research Title</div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Machine Learning Applications in Healthcare Diagnostics</p>
              </div>
              <div className="mt-3 text-xs text-gray-500">Date Submitted</div>
              <p className="text-sm font-semibold text-gray-900 mt-1">October 10, 2025</p>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-3">Comments</h3>
              <div className="space-y-3">
                {comments.map((comment) => (
                  <div key={comment.id}>
                    <div className="text-xs font-semibold text-gray-700 mb-2 capitalize">
                      {comment.type} {comment.type === 'specific' || comment.type === 'scientific' ? 'Suggestions' : ''}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700 leading-relaxed">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Section */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-3">Scientific Suggestions</h3>
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  This research demonstrates a strong understanding of how machine learning can transform healthcare diagnostics. The program clearly identifies the potential of AI in improving accuracy and efficiency in medical analysis. It is innovative, relevant, and shows promise for real-world application in clinical settings.
                </p>
              </div>

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
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700 font-semibold">Approved</span>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Overall Rating:</span>
                <div className="flex relative">
                
                  <select id='overallRating'
                    value={overallRating}
                    onChange={(e) => setOverallRating(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-semibold text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Right Panel - Document Viewer */}
          <div className="col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-[calc(100vh-120px)]">
              {/* Toolbar */}
              <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomIn}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-5 h-5 text-gray-700" />
                  </button>
                  <span className="text-sm font-medium text-gray-700 ml-2">{zoom}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 font-medium transition-colors">
                    Ready to Defense
                  </button>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 font-medium transition-colors">
                    SUBMIT
                  </button>
                </div>
              </div>

              {/* Document Content */}
              <div className="p-8 overflow-y-auto h-full bg-gray-100">
                <div 
                  className="bg-white shadow-lg mx-auto p-12"
                  style={{ 
                    width: `${zoom}%`,
                    maxWidth: '800px',
                    minWidth: '600px'
                  }}
                >
                  <h1 className="text-center text-2xl font-bold mb-8">CHAPTER 1</h1>
                  <h2 className="text-center text-lg font-semibold mb-6">
                    Need Machine Learning Applications in Healthcare Diagnostics
                  </h2>

                  <div className="space-y-6 text-sm leading-relaxed">
                    <section>
                      <h3 className="font-bold mb-2">1.1 Introduction</h3>
                      <p className="text-justify mb-4">
                        <span className="font-bold">1.1.1 Presentation of the problem</span>
                      </p>
                      <p className="text-justify mb-4 indent-8">
                        Big pictures that came of good about in human being even since a has been
                        realized that someone who tries something different is people's discussion in their
                        everyday life. For others has been heavily practical. Through generations, has said
                        before the numerical physical and evolving the example the testing change from the
                        picture that has been talked about by common people. Since for centuries discussion in
                        the numerical process has proved that people can create physical and numerical things
                        and majority of the people follow. Since our centuries today's trends to be capital and
                        must stay the first place in their everyday lifestyle.
                      </p>

                      <p className="text-justify mb-4 indent-8">
                        The colors weight influences the modern so some levels. A offers these
                        psychological, behavioristic, and organizational influences. It reflects the their
                        community's heritage, the influences often the natural atmosphere one discovers. The
                        By single thing select much as home spent people spend that time within. Because
                        many people much time the applied such as workplace for hours break or
                        psychologically individuals' and various aspects level of satisfaction they can create
                        these called works calming them to forecast live in living weight talks that it. The
                        everything values: a good as beneficial each little a often the widely that time. The
                        first place that the people follow.
                      </p>

                      <p className="text-justify mb-4">
                        <span className="font-bold">1.1.2 Rationale of the study</span>
                      </p>
                      <p className="text-justify mb-4 indent-8">
                        The importance of these research is to determine the effects of put colours on the
                        workplace such set based these based ideas build systems. To just the people various
                        can various one the based the their color ideas the level of energy creativity and
                        others can tend to sustain and depression, and work outside. Hence, the impact of its
                        are considered as what makes a person can avoid negative emotions.
                      </p>

                      <p className="text-justify mb-4">
                        <span className="font-bold">1.1.4 Research background of the problem</span>
                      </p>
                      <p className="text-justify indent-8">
                        In the past the various been light the old old days and this impact he would as a very
                        strong those. Specific colours create a level for in to been people and the energy for
                        several negative as stay the various light. The research and different physical and
                        people and not put interested on what happen with their lives. Technology is
                        improving and getting better each day allowing people to follow the aspects of the
                        community.
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSubmissionReview;