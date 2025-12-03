'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ResearchRecord {
  id: string;
  title: string;
  department: string;
  status: 'ongoing' | 'approved';
  date: string;
}

const FacultyDashboard: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    researcherName: '',
    studentId: '',
    email: '',
    yearSection: '3rd Year - BSIT - A',
    researchTitle: '',
    researchCategory: 'Technology',
    researchStatus: 'Ongoing',
    dateSubmitted: '',
    description: '',
    attachments: null as File | null
  });

  // Load Font Awesome
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
  }, []);

  const researchRecords: ResearchRecord[] = [
    {
      id: '1',
      title: 'AI in Climate Prediction',
      department: 'Computer Science',
      status: 'ongoing',
      date: '2024-02-15'
    },
    {
      id: '2',
      title: 'IoT-Enabled Smart Farming System',
      department: 'Mechanical Engineering',
      status: 'ongoing',
      date: '2024-02-15'
    },
    {
      id: '3',
      title: 'Blockchain for Medical Records',
      department: 'Civil Engineering',
      status: 'approved',
      date: '2024-02-15'
    },
    {
      id: '4',
      title: 'Virtual Reality in Education',
      department: 'Electrical Engineering',
      status: 'ongoing',
      date: '2024-02-15'
    }
  ];

  const handleMetricCardClick = (cardType: string) => {
    if (cardType === 'announcements') {
      router.push('/announce');
    } else if (cardType === 'my files') {
      router.push('/file');
    } else if (cardType === 'feedback') {
      router.push('/feed');
    }
  };

  const handleRecordClick = (title: string) => {
    console.log(`Viewing details for research: "${title}"`);
  };

  const handleSettings = () => {
    console.log('Opening settings...');
    router.push('/settings');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    router.push('/login');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, attachments: e.target.files![0] }));
    }
  };

  const handleSubmitForm = () => {
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({
      researcherName: '',
      studentId: '',
      email: '',
      yearSection: '3rd Year - BSIT - A',
      researchTitle: '',
      researchCategory: 'Technology',
      researchStatus: 'Ongoing',
      dateSubmitted: '',
      description: '',
      attachments: null
    });
  };

  const handleClearForm = () => {
    setFormData({
      researcherName: '',
      studentId: '',
      email: '',
      yearSection: '3rd Year - BSIT - A',
      researchTitle: '',
      researchCategory: 'Technology',
      researchStatus: 'Ongoing',
      dateSubmitted: '',
      description: '',
      attachments: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f6fa] to-[#e0e8f3] flex items-center justify-center p-5">
      <div className="grid grid-cols-[80px_1fr] w-[95%] max-w-[1400px] h-[90vh] bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-5">
        
        {/* Sidebar Navigation */}
        <aside className="flex flex-col items-center gap-7 pt-12">
          <Link href="/facul">
            <div className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_8px_16px_rgba(59,130,246,0.3)]">
              <i className="fas fa-user text-white text-2xl"></i>
            </div>
          </Link>
          <Link href="/file">
            <div className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 bg-gradient-to-br from-orange-300 to-orange-500 shadow-[0_8px_16px_rgba(251,146,60,0.3)]">
              <i className="fas fa-folder-open text-white text-2xl"></i>
            </div>
          </Link>
          <Link href="/announce">
            <div className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 bg-gradient-to-br from-blue-300 to-blue-500 shadow-[0_8px_16px_rgba(59,130,246,0.3)]">
              <i className="fas fa-bullhorn text-white text-2xl"></i>
            </div>
          </Link>
          <Link href="/feed">
            <div className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-[0_8px_16px_rgba(99,102,241,0.3)]">
              <i className="fas fa-comment-dots text-white text-2xl"></i>
            </div>
          </Link>
        </aside>

        {/* Main Content */}
        <main className="px-8 overflow-y-auto">
          {/* Profile Header */}
          <header className="mb-5">
            <div className="text-sm font-extrabold mb-3">Faculty Researcher</div>
            
            <div className="bg-white rounded-[2rem] shadow-[0_5px_15px_rgba(0,0,0,0.08)] py-6">
              <div className="px-8 pb-6 border-b border-gray-200 mb-6 relative">
                <div className="flex gap-5">
                  <Image 
                    src="/images/sampleprofile.png" 
                    alt="Dr. Maria L. Santos" 
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full border-[3px] border-gray-200 object-cover"
                  />
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 m-0">Dr. Maria L. Santos</h1>
                    <p className="text-xs text-purple-600 font-medium mb-4">UNIVERSITY OF EASTERN PHILIPPINES</p>
                    
                    <div className="flex gap-8 text-sm">
                      <div>
                        <span className="block text-gray-500 font-normal text-[0.9em]">
                          <i className="fas fa-id-badge mr-1"></i>Role
                        </span>
                        <span className="block font-semibold text-gray-800 text-[0.9em]">Faculty Researcher</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 font-normal text-[0.9em]">
                          <i className="fas fa-building mr-1"></i>Department
                        </span>
                        <span className="block font-semibold text-gray-800 text-[0.9em]">College Of Engineering</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 font-normal text-[0.9em]">
                          <i className="fas fa-envelope mr-1"></i>Email Address
                        </span>
                        <span className="block font-semibold text-gray-800 text-[0.9em]">maria.santos@university.edu</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4 absolute top-0 right-8">
                  <div className="flex gap-4">
                    <i 
                      onClick={handleSettings}
                      className="fas fa-cog text-2xl text-gray-400 cursor-pointer transition-colors hover:text-gray-800"
                    ></i>
                    <i 
                      onClick={handleLogout}
                      className="fas fa-sign-out-alt text-2xl text-gray-400 cursor-pointer transition-colors hover:text-gray-800"
                    ></i>
                  </div>
                  <Image 
                    src="/images/logo/UEPlogo.png" 
                    alt="UEP Logo" 
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover shadow-[0_0_0_4px_white,0_0_0_5px_#f0f0f0] mt-4"
                  />
                </div>
              </div>

              {/* Metric Cards */}
              <section className="flex gap-5 px-8">
                <div 
                  onClick={() => handleMetricCardClick('announcements')}
                  className="flex flex-row items-center justify-start p-4 px-6 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex-1 text-gray-800 font-medium text-left transition-transform hover:-translate-y-0.5 cursor-pointer bg-white border border-gray-200 border-l-[5px] border-l-blue-500"
                >
                  <i className="fas fa-bullhorn text-4xl text-blue-500 mr-4"></i>
                  <span className="text-2xl font-bold mr-2">6</span>
                  <p className="text-base m-0">Announcements</p>
                </div>

                <div 
                  onClick={() => handleMetricCardClick('my files')}
                  className="flex flex-row items-center justify-start p-4 px-6 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex-1 text-gray-800 font-medium text-left transition-transform hover:-translate-y-0.5 cursor-pointer bg-white border border-gray-200 border-l-[5px] border-l-[#f9b14b]"
                >
                  <i className="fas fa-folder text-4xl text-[#f9b14b] mr-4"></i>
                  <span className="text-2xl font-bold mr-2">20</span>
                  <p className="text-base m-0">My Files</p>
                </div>
             
                <div 
                  onClick={() => handleMetricCardClick('feedback')}
                  className="flex flex-row items-center justify-start p-4 px-6 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex-1 text-gray-800 font-medium text-left transition-transform hover:-translate-y-0.5 cursor-pointer bg-white border border-gray-200 border-l-[5px] border-l-purple-600"
                >
                  <i className="fas fa-comments text-4xl text-purple-600 mr-4"></i>
                  <p className="text-base m-0">Feedback</p>
                </div>
              </section>
            </div>
          </header>

          {/* Research Records Section */}
          <section className="bg-white rounded-[2rem] p-5 px-8 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#e0e8f3]">
            <div className="flex justify-between items-center mb-5">
              <h2 className="inline-block bg-gradient-to-r from-[#c7d2fe] to-[#fbcfe8] text-gray-800 py-2 px-5 rounded-2xl text-xl font-semibold m-0">
                Submitted Research Records
              </h2>
              <div 
                onClick={() => setIsModalOpen(true)}
                className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer transition-colors hover:bg-blue-600 text-sm flex items-center gap-2"
              >
                <i className="fas fa-plus"></i>
                Research Submission Form
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden max-h-[400px] relative pr-4">
              {researchRecords.map((record) => (
                <div 
                  key={record.id} 
                  onClick={() => handleRecordClick(record.title)}
                  className="grid grid-cols-[3fr_1.5fr_1fr_1fr] items-center py-4 border-b border-gray-200 text-gray-800 text-[0.95rem] transition-colors cursor-pointer hover:bg-gray-50"
                >
                  <div className="font-semibold flex items-center gap-3">
                    <i className="fas fa-file-alt text-2xl text-blue-500"></i>
                    {record.title}
                  </div>
                  <div className="text-gray-500 flex items-center gap-2">
                    <i className="fas fa-building text-sm"></i>
                    {record.department}
                  </div>
                  <div className="flex justify-center">
                    <span className={`py-1 px-3 rounded-full font-medium text-[0.85rem] inline-block ${
                      record.status === 'ongoing' 
                        ? 'bg-[rgba(249,177,75,0.2)] text-[#f9b14b]' 
                        : 'bg-[rgba(74,199,137,0.2)] text-[#4ac789]'
                    }`}>
                      <i className={`fas ${record.status === 'ongoing' ? 'fa-clock' : 'fa-check-circle'} mr-1`}></i>
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </div>
                  <div className="text-gray-500 text-center flex items-center justify-center gap-2">
                    <i className="fas fa-calendar-alt text-sm"></i>
                    {record.date}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Research Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors z-10"
            >
              <i className="fas fa-times text-gray-600"></i>
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-3xl">
              <div className="flex items-center gap-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <i className="fas fa-file-alt text-3xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold m-0">Submissions Form</h2>
                  <p className="text-sm opacity-90 m-0">Submit your research details</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Student Information Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Student Information
                  </div>
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <i className="fas fa-graduation-cap text-xl text-gray-800"></i>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Researcher Name
                    </label>
                    <input
                      type="text"
                      name="researcherName"
                      value={formData.researcherName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Student ID
                    </label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Year & Section
                    </label>
                    <select
                      name="yearSection"
                      value={formData.yearSection}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option>3rd Year - BSIT - A</option>
                      <option>3rd Year - BSIT - B</option>
                      <option>4th Year - BSIT - A</option>
                      <option>4th Year - BSIT - B</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Research Details Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Research Details
                  </div>
                  <div className="bg-blue-400 p-2 rounded-lg">
                    <i className="fas fa-clipboard-list text-xl text-white"></i>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Research Title
                    </label>
                    <input
                      type="text"
                      name="researchTitle"
                      value={formData.researchTitle}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Research Category
                    </label>
                    <select
                      name="researchCategory"
                      value={formData.researchCategory}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option>Technology</option>
                      <option>Education</option>
                      <option>Health</option>
                      <option>Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Research Status
                    </label>
                    <select
                      name="researchStatus"
                      value={formData.researchStatus}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option>Ongoing</option>
                      <option>Completed</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date Submitted
                    </label>
                    <input
                      type="date"
                      name="dateSubmitted"
                      value={formData.dateSubmitted}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description / Abstract:
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Enter your research abstract here..."
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attachments (PDF, Guidelines, Forms)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      <i className="fas fa-upload mr-2 text-gray-500"></i>
                      <span className="text-gray-600">
                        {formData.attachments ? formData.attachments.name : 'Choose File'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={handleClearForm}
                  className="px-6 py-2 border-2 border-red-400 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  Clear Form
                </button>
                <button
                  type="button"
                  onClick={handleSubmitForm}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyDashboard;