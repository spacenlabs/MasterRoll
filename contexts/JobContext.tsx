import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Job } from '../types';

interface JobContextType {
  jobs: Job[];
  addJob: (job: Job) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Senior Physics Teacher',
      institution: 'Delhi Public School',
      location: 'New Delhi',
      salary: '₹45,000 - ₹60,000',
      type: 'Full-time',
      experience: '5+ Years',
      description: 'We are looking for an experienced Physics teacher for Grade 11 & 12 (CBSE curriculum). Must have a Masters degree in Physics.',
      postedDate: '2 days ago'
    },
    {
      id: '2',
      title: 'Mathematics Tutor',
      institution: 'Allen Career Institute',
      location: 'Kota / Remote',
      salary: '₹80,000 - ₹1,20,000',
      type: 'Full-time',
      experience: '3+ Years',
      description: 'JEE Mains & Advanced level mathematics faculty required. Proven track record of producing rankers is a plus.',
      postedDate: '1 week ago'
    },
    {
      id: '3',
      title: 'Primary English Teacher',
      institution: 'St. Mary\'s School',
      location: 'Bangalore',
      salary: '₹30,000 - ₹40,000',
      type: 'Full-time',
      experience: '2+ Years',
      description: 'Energetic teacher required for primary grades (1-5). Focus on phonics and creative writing.',
      postedDate: '3 days ago'
    },
    {
      id: '4',
      title: 'Robotics Instructor',
      institution: 'TechKids Academy',
      location: 'Mumbai (Weekend)',
      salary: '₹1,500 / session',
      type: 'Part-time',
      experience: '1+ Years',
      description: 'Weekend instructor needed for STEM and Robotics workshops. Engineering background preferred.',
      postedDate: 'Just now'
    }
  ]);

  const addJob = (job: Job) => {
    setJobs(prev => [job, ...prev]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
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