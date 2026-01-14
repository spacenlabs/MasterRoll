import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Job } from '../types';
import { fetchJobs } from '../services/formService';

interface JobContextType {
  jobs: Job[];
  addJob: (job: Job) => void;
  isLoading: boolean;
  refreshJobs: () => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadJobs = async () => {
    setIsLoading(true);
    const data = await fetchJobs();
    
    // If database is empty, provide some default mock data for UI visual
    if (data.length === 0) {
      setJobs([
        {
          id: '1',
          title: 'Senior Physics Teacher',
          institution: 'Delhi Public School',
          location: 'New Delhi',
          salary: '₹45,000 - ₹60,000',
          type: 'Full-time',
          experience: '5+ Years',
          description: 'Initial mock data. Real data will appear once you add jobs to Supabase.',
          postedDate: '2 days ago'
        }
      ]);
    } else {
      setJobs(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const addJob = (job: Job) => {
    setJobs(prev => [job, ...prev]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, isLoading, refreshJobs: loadJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};
