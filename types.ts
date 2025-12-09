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

export type Page = 
  | 'home' 
  | 'demo' 
  | 'pricing' 
  | 'teacher-hiring' 
  | 'vendor-marketplace' 
  | 'vendor-registration'
  | 'vendor-dashboard'
  | 'book-class' 
  | 'list-institute'
  | 'teacher-features' 
  | 'student-tools'
  | 'school-erp'
  | 'fee-collection-promo';