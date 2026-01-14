
/**
 * MasterRoll Mock Persistence Service
 * This service uses localStorage to simulate a database for end-to-end testing
 * of the ERP lifecycle: Enquiry -> Admission -> Fees -> Attendance -> Exams.
 */

const getStore = (key: string, initial: any = []) => {
  const data = localStorage.getItem(`mr_db_${key}`);
  return data ? JSON.parse(data) : initial;
};

const setStore = (key: string, data: any) => {
  localStorage.setItem(`mr_db_${key}`, JSON.stringify(data));
};

// --- DATA INITIALIZATION ---

const INITIAL_STUDENTS = [
  { id: '1', student_id: 'S-1001', full_name: 'Rahul Khanna', class_name: 'Class 10', section: 'A', parent_name: 'Suresh Khanna', phone: '9876543210', email: 'rahul@mail.com', status: 'Active', joining_date: '2024-06-12' },
  { id: '2', student_id: 'S-1002', full_name: 'Aditi Singh', class_name: 'Class 10', section: 'A', parent_name: 'Vikram Singh', phone: '9876543211', email: 'aditi@mail.com', status: 'Active', joining_date: '2024-06-15' }
];

const INITIAL_FEES = [
  { id: 'f1', student_id: 'S-1001', amount: 15000, balance: 0, status: 'Paid', date: '2024-10-10', period: 'Term 1' },
  { id: 'f2', student_id: 'S-1002', amount: 15000, balance: 15000, status: 'Pending', date: '-', period: 'Term 1' }
];

const DEFAULT_PROFILE = {
  full_name: 'Dr. Rajesh Khanna',
  email: 'principal@modernacademy.edu',
  phone: '9876543210',
  institution_name: 'Modern Academy Global',
  address: '123 Academic Square, Bengaluru, Karnataka',
  role: 'org_admin',
  avatar: 'https://ui-avatars.com/api/?name=Rajesh+Khanna&background=0d9488&color=fff',
  gst: '29AAAAA0000A1Z5',
  website: 'https://modernacademy.edu'
};

// --- CORE FUNCTIONS ---

export const fetchUserProfile = async (role: string): Promise<any> => {
  const profiles = getStore('profiles', {});
  return profiles[role] || { ...DEFAULT_PROFILE, role };
};

export const updateUserProfile = async (role: string, data: any): Promise<boolean> => {
  const profiles = getStore('profiles', {});
  profiles[role] = { ...profiles[role], ...data };
  setStore('profiles', profiles);
  return true;
};

export const fetchStudents = async (): Promise<any[]> => getStore('students', INITIAL_STUDENTS);

export const registerStudent = async (data: any): Promise<boolean> => {
  const students = getStore('students', INITIAL_STUDENTS);
  const newStudent = {
    ...data,
    id: Date.now().toString(),
    student_id: `S-${1000 + students.length + 1}`,
    status: 'Active',
    joining_date: new Date().toISOString().split('T')[0]
  };
  students.push(newStudent);
  setStore('students', students);
  return true;
};

export const fetchFeeRecords = async (): Promise<any[]> => getStore('fees', INITIAL_FEES);

export const recordFeePayment = async (studentId: string, amount: number): Promise<boolean> => {
  const fees = getStore('fees', INITIAL_FEES);
  const idx = fees.findIndex((f: any) => f.student_id === studentId);
  if (idx > -1) {
    fees[idx].status = 'Paid';
    fees[idx].balance = 0;
    fees[idx].date = new Date().toISOString().split('T')[0];
  } else {
    fees.push({ id: Date.now().toString(), student_id: studentId, amount, balance: 0, status: 'Paid', date: new Date().toISOString().split('T')[0], period: 'Current' });
  }
  setStore('fees', fees);
  return true;
};

export const fetchEnquiries = async (): Promise<any[]> => getStore('enquiries');

export const submitForm = async (type: string, data: any): Promise<boolean> => {
  const enquiries = getStore('enquiries');
  enquiries.unshift({ id: Date.now().toString(), type, payload: data, created_at: new Date().toISOString() });
  setStore('enquiries', enquiries);
  return true;
};

export const markAttendance = async (records: any[]): Promise<boolean> => {
  const att = getStore('attendance');
  setStore('attendance', [...att, ...records]);
  return true;
};

export const fetchAttendanceByDate = async (date: string): Promise<any[]> => {
  const att = getStore('attendance');
  return att.filter((a: any) => a.date === date);
};

export const fetchExamMarks = async (): Promise<any[]> => getStore('marks');

export const submitMarks = async (marksData: any): Promise<boolean> => {
  const marks = getStore('marks');
  marks.push({ ...marksData, id: Date.now().toString() });
  setStore('marks', marks);
  return true;
};

// Auth Mock
export const loginUser = async (email: string, pass: string): Promise<any> => {
  let role = 'student';
  if (email.includes('admin')) role = 'super_admin';
  else if (email.includes('principal')) role = 'org_admin';
  else if (email.includes('teach')) role = 'teacher';
  else if (email.includes('parent')) role = 'parent';
  else if (email.includes('vendor')) role = 'vendor';
  
  return { success: true, user: { role, email } };
};

export const registerUser = async (data: any) => ({ success: true });
export const syncSocialUser = async (token: string) => ({ success: true, user: { role: 'org_admin' } });
export const fetchJobs = async () => [];
export const postJob = async (j: any) => true;
export const fetchTeachers = async () => [];
export const fetchVendorProducts = async () => [];
export const fetchCourses = async () => [];
export const postCourse = async (c: any) => true;
