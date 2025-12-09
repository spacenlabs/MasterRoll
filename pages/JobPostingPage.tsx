import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, DollarSign, Clock, FileText, CheckCircle2, ArrowRight, Loader2 } from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { useJobs } from '../contexts/JobContext';
import { Job } from '../types';

const JobPostingPage: React.FC = () => {
  const { navigate } = useNavigation();
  const { addJob } = useJobs();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    institution: '',
    location: '',
    salary: '',
    type: 'Full-time',
    experience: '',
    description: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Create new job object
    const newJob: Job = {
      id: Date.now().toString(),
      title: formData.title,
      institution: formData.institution,
      location: formData.location,
      salary: formData.salary,
      type: formData.type,
      experience: formData.experience,
      description: formData.description,
      postedDate: 'Just now'
    };

    setTimeout(() => {
      addJob(newJob); // Add to context
      setIsLoading(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-12 rounded-3xl shadow-xl max-w-lg text-center border border-slate-200">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Job Posted Successfully!</h2>
          <p className="text-slate-600 mb-8">
            Your vacancy for <span className="font-bold">{formData.title}</span> is now live on the Teacher Marketplace.
          </p>
          <button 
            onClick={() => navigate('teacher-hiring')} // Redirects to the job board implicitly
            className="w-full px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
          >
            View Job Board
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
            Employer Portal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Post a Job Vacancy</h1>
          <p className="text-slate-600">
            Reach thousands of qualified educators. Fill in the details below to publish your listing instantly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Basic Info */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center border-b pb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-orange-600" />
                  Role Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Job Title <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="title" 
                      required
                      placeholder="e.g. Senior Physics Teacher" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Institution Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                      <input 
                        type="text" 
                        name="institution"
                        required
                        placeholder="e.g. Modern School" 
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Location <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                      <input 
                        type="text" 
                        name="location"
                        required
                        placeholder="e.g. Bangalore, Indiranagar" 
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Compensation */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center border-b pb-2">
                  <DollarSign className="w-5 h-5 mr-2 text-orange-600" />
                  Compensation & Type
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Salary Range <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="salary"
                      required
                      placeholder="e.g. ₹30,000 - ₹45,000 / month" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Job Type</label>
                    <select 
                      name="type"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                      onChange={handleChange}
                    >
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Guest Lecturer</option>
                    </select>
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Experience Required</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                      <input 
                        type="text" 
                        name="experience"
                        required
                        placeholder="e.g. 2+ Years" 
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center border-b pb-2">
                  <FileText className="w-5 h-5 mr-2 text-orange-600" />
                  Job Description
                </h3>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Description & Requirements <span className="text-red-500">*</span></label>
                   <textarea 
                     rows={5} 
                     name="description"
                     required
                     className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
                     placeholder="Describe the role, responsibilities, and key qualifications..."
                     onChange={handleChange}
                   ></textarea>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">HR Email for Applications</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="careers@school.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-orange-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-6 w-6" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      Post Job Vacancy
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobPostingPage;