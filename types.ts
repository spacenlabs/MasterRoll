
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
  type: string;
  experience: string;
  description: string;
  postedDate: string;
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

/** ERP CORE TYPES **/

export interface Student {
  id: string;
  student_id: string;
  full_name: string;
  class_name: string;
  section: string;
  parent_name: string;
  phone: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Suspended' | 'Alumni';
  joining_date: string;
  image?: string;
  gender?: string;
  dob?: string;
  house?: string;
}

export interface Visitor {
  id: string;
  name: string;
  phone: string;
  purpose: string;
  whomToMeet: string;
  entryTime: string;
  exitTime?: string;
  idCardNo?: string;
  passType: 'GatePass' | 'Normal';
}

export interface Complaint {
  id: string;
  complaintBy: string;
  source: string;
  type: string;
  date: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  actionTaken?: string;
}

export interface PostalRecord {
  id: string;
  type: 'Inward' | 'Outward';
  refNo: string;
  fromTitle: string;
  toTitle: string;
  date: string;
  note?: string;
}

export interface TimetableSlot {
  id: string;
  day: string;
  period: number;
  time: string;
  subject: string;
  teacher: string;
  class: string;
  section: string;
  type: 'Lecture' | 'Lab' | 'Break' | 'Activity';
}

export interface ExamMark {
  id: string;
  student_id: string;
  student_name: string;
  subject: string;
  max_marks: number;
  obtained_marks: number;
  grade: string;
  remarks: string;
}

export interface ExpenseRecord {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  paymentMethod: string;
  status: 'Paid' | 'Pending';
  invoiceRef?: string;
}

export interface PayrollRecord {
  id: string;
  staffName: string;
  staffId: string;
  role: string;
  baseSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'Processed' | 'Draft' | 'Paid';
}

export interface LeaveRequest {
  id: string;
  staffName: string;
  staffId: string;
  type: 'Casual' | 'Sick' | 'Earned';
  fromDate: string;
  toDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface ServiceEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'Promotion' | 'Increment' | 'Training' | 'Award' | 'Incident';
}

/** TECHNICAL & SECURITY TYPES **/

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  ip: string;
  severity: 'Info' | 'Warning' | 'Critical';
}

export interface ApiKey {
  id: string;
  name: string;
  keyHint: string;
  createdAt: string;
  status: 'Active' | 'Revoked';
}

/** LIBRARY TYPES **/

export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  isbn: string;
  barcode: string;
  category: string;
  copiesAvailable: number;
  totalCopies: number;
  status: 'Available' | 'Low Stock' | 'Damaged';
  shelfNo: string;
}

export interface BookIssue {
  id: string;
  studentId: string;
  studentName: string;
  bookTitle: string;
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  fineAmount: number;
  status: 'Issued' | 'Returned' | 'Overdue';
}

/** INFRASTRUCTURE & LOGISTICS TYPES **/

export interface TransportRoute {
  id: string;
  routeName: string;
  vehicleNo: string;
  driverName: string;
  stops: number;
  studentCount: number;
  status: 'On Route' | 'Garage' | 'Inactive';
}

export interface HostelRoom {
  id: string;
  blockName: string;
  roomNo: string;
  capacity: number;
  occupied: number;
  type: 'AC' | 'Non-AC' | 'Suite';
  status: 'Available' | 'Full' | 'Maintenance';
}

export interface InventoryRecord {
  id: string;
  itemName: string;
  category: string;
  currentStock: number;
  minLevel: number;
  unit: string;
  lastPurchaseDate: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

/** COMMUNICATION TYPES **/

export interface BroadcastLog {
  id: string;
  channel: 'SMS' | 'WhatsApp' | 'Email' | 'Push';
  subject: string;
  recipientGroup: string;
  sentAt: string;
  status: 'Delivered' | 'Failed' | 'Scheduled';
  count: number;
}

export interface DigitalNotice {
  id: string;
  title: string;
  content: string;
  date: string;
  targetAudience: 'All' | 'Teachers' | 'Parents' | 'Students';
  isPinned: boolean;
  category: 'Urgent' | 'Academic' | 'Event' | 'General';
}

export interface Poll {
  id: string;
  question: string;
  options: { text: string; votes: number }[];
  totalVotes: number;
  endDate: string;
  status: 'Open' | 'Closed';
}

export interface Circular {
  id: string;
  refNo: string;
  title: string;
  date: string;
  fileUrl: string;
  fileSize: string;
}

export interface MediaAlbum {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  itemCount: number;
  category: 'Sports' | 'Cultural' | 'Infrastructure' | 'Workshop';
}

export interface Guardian {
  id: string;
  full_name: string;
  relation: string;
  phone: string;
  occupation: string;
  ward_count: number;
}

export interface Employee {
  id: string;
  staff_id: string;
  full_name: string;
  role: string;
  department: string;
  designation: string;
  phone: string;
  email: string;
  joining_date: string;
  status: 'Active' | 'Resigned' | 'On Leave';
  salary?: number;
  attendance_score?: number;
}

export interface AttendanceRecord {
  id: string;
  student_id: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
  marked_by: string;
}

export interface FeePayment {
  id: string;
  student_id: string;
  student_name?: string;
  amount: number;
  balance: number;
  total_due: number;
  payment_mode: string;
  transaction_id: string;
  date: string;
  period: string; // e.g. "Oct 2024"
  status: 'Paid' | 'Pending' | 'Partial' | 'Overdue';
}

export type Page = 
  | 'home' 
  | 'demo' 
  | 'signup'
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
  | 'parent-dashboard'
  | 'create-admission'
  | 'admission-enquiry'
  | 'school-subscription'
  | 'create-branch'
  | 'online-admission-public'
  | 'terms-and-conditions'
  | 'privacy-policy'
  | 'refund-policy'
  | 'shipping-policy'
  | 'contact-us'
  | 'it-services';
