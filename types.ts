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

export interface VendorProduct {
  id: number;
  name: string;
  category: string;
  price: string;
  minOrder: string;
  supplier: string;
  rating: number;
  image: string;
}

export interface TeacherProfile {
  id: string;
  name: string;
  subject: string;
  exp: string;
  rating: number;
  location: string;
  img: string;
  bio: string;
  education: string;
  skills: string[];
  certifications: string[];
  availability: string;
  languages: string[];
}

export interface DigitalCourse {
  id: string;
  title: string;
  thumbnail: string;
  price: string;
  sales: number;
  revenue: string;
  status: 'Active' | 'Draft' | 'Review';
  rating: number;
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
  | 'lms-dashboard'
  | 'teacher-features' 
  | 'student-tools'
  | 'school-erp'
  | 'fee-collection-promo'
  | 'transport-security'
  | 'analytics-suite'
  | 'ai-doubt-solving'
  | 'digital-library'
  | 'login'
  | 'super-admin-dashboard'
  | 'org-dashboard'
  | 'teacher-dashboard'
  | 'student-dashboard'
  | 'parent-dashboard';