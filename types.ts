import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProductModule {
  id: string;
  category: string;
  title: string;
  description: string;
  features: FeatureItem[];
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  institution: string;
  quote: string;
  avatar: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  isThinking?: boolean;
}

export interface Job {
  id: string;
  title: string;
  institution: string;
  location: string;
  salary: string;
  type: string; // Full-time, Part-time
  experience: string;
  description: string;
  postedDate: string;
}

export interface JobApplication {
  jobId: string;
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  cvFileName: string;
}

export type Page = 
  | 'home' 
  | 'demo' 
  | 'pricing' 
  | 'teacher-hiring' 
  | 'post-job'
  | 'vendor-marketplace' 
  | 'vendor-registration'
  | 'vendor-dashboard'
  | 'book-class' 
  | 'list-institute'
  | 'teacher-features' 
  | 'student-tools'
  | 'school-erp'
  | 'fee-collection-promo';