import React from 'react';
import { 
  Users, UserCog, BookOpen, CreditCard, Bus, Library, 
  Bed, Utensils, BarChart3, ShieldCheck, ClipboardList, 
  FileCheck, Megaphone, Database, CheckCircle2, 
  Settings, Printer, Globe, Smartphone, Lock, Award,
  Calendar, FileSpreadsheet, Server, Key, Video
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const SchoolERPPage: React.FC = () => {
  const { navigate } = useNavigation();

  // Categorized feature list to manage the "101 Features" requirement
  const featureCategories = [
    {
      title: "Administration & Admissions",
      icon: <UserCog className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400",
      items: [
        "Online Admission Form", "Enquiry Management (CRM)", "Student Information System", "ID Card Generation",
        "Admission Follow-up", "Document Management", "Alumni Management", "TC/Transfer Certificate",
        "Student Promotion", "House/Section Allocation", "Visitor Management", "Gate Pass Generation",
        "Reception Desk", "Postal/Dispatch Record", "Complaint Management"
      ]
    },
    {
      title: "Academics & Learning",
      icon: <BookOpen className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
      items: [
        "Lesson Planning", "Class Timetable", "Teacher Timetable", "Substitute Teacher Mgmt",
        "Syllabus Tracking", "Homework/Assignments", "Online Live Classes", "LMS Integration",
        "Question Bank", "Online Exams (CBT)", "Offline Exam Marks", "Report Card Generation",
        "CBSE/ICSE Report Formats", "Skill-based Assessment", "Academic Calendar"
      ]
    },
    {
      title: "Finance & Accounts",
      icon: <CreditCard className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400",
      items: [
        "Fee Structure Config", "Online Fee Collection", "Offline Fee (Cash/Cheque)", "Partial Payments",
        "Fine & Concessions", "Scholarship Management", "Expense Management", "Income vs Expense",
        "Tally Integration", "Payment Gateway Integration", "Consolidated Invoices (Print & Email)", "Fee Defaulter List",
        "Daily Collection Reports", "Refund Management", "Staff Payroll Integration"
      ]
    },
    {
      title: "Human Resources (HR)",
      icon: <Users className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400",
      items: [
        "Staff Directory", "Biometric Attendance", "Leave Management", "Payroll Processing",
        "Salary Slips", "PF/ESI Calculation", "Staff Recruitment", "Performance Appraisal",
        "Teacher Service Book", "Training Records", "Document Vault", "Shift Management"
      ]
    },
    {
      title: "Communication & Front Office",
      icon: <Megaphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=400",
      items: [
        "SMS Gateway Integration", "WhatsApp Integration", "Email Broadcasts", "Mobile App Notifications",
        "Notice Board (Digital)", "Event Calendar", "Polls & Surveys", "Parent-Teacher Chat",
        "Feedback System", "Circular Management", "Birthday Wishes Automation", "News & Media Gallery"
      ]
    },
    {
      title: "Infrastructure & Logistics",
      icon: <Bus className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1570126618953-d437136e8c03?auto=format&fit=crop&q=80&w=400",
      items: [
        "Transport Route Mgmt", "Vehicle GPS Tracking", "Driver/Conductor Data", "Fuel Log",
        "Vehicle Maintenance", "Transport Fee Mgmt", "Hostel Room Allocation", "Mess Menu Planning",
        "Hostel Attendance", "Inventory Stock Mgmt", "Purchase Orders", "Vendor Management",
        "Asset Tracking", "Lost & Found", "Facility Booking"
      ]
    },
    {
      title: "Library & Resources",
      icon: <Library className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1507842217121-e859c164fa9a?auto=format&fit=crop&q=80&w=400",
      items: [
        "Book Cataloging (ISBN)", "Barcode Printing", "Book Issue/Return", "Fine Calculation",
        "OPAC Search", "Digital Library (E-books)", "Newspaper/Journal Subscriptions", "Stock Verification",
        "Book Reservation", "Reading Logs", "Top Readers Report", "Damaged Book Record"
      ]
    },
    {
      title: "Technical & Security",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      items: [
        "Role-Based Access Control", "Data Backup & Restore", "Audit Logs", "Mobile App (Android/iOS)",
        "Multi-Branch Support", "Dynamic Certificate Builder", "Custom Report Builder", "API Access",
        "SSL Security", "IP Restriction", "Two-Factor Auth", "Theme Customization"
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Database size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900/50 border border-brand-700 text-brand-300 text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2 animate-spin-slow" />
            MasterRoll Enterprise Edition
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            The Ultimate <span className="text-brand-500">School Operating System</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            A comprehensive ERP suite with 101+ modules designed to automate every single aspect of your educational institution. From the front gate to the back office.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => navigate('demo')} className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-500/25">
              Get Full Feature PDF
            </button>
            <button onClick={() => navigate('demo')} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
              Schedule Deep-Dive Demo
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
             <div className="text-4xl font-bold text-brand-600 mb-2">101+</div>
             <div className="text-slate-600 text-sm font-medium">Unique Features</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
             <div className="text-4xl font-bold text-brand-600 mb-2">99.9%</div>
             <div className="text-slate-600 text-sm font-medium">Uptime Guarantee</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
             <div className="text-4xl font-bold text-brand-600 mb-2">30%</div>
             <div className="text-slate-600 text-sm font-medium">Cost Reduction</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
             <div className="text-4xl font-bold text-brand-600 mb-2">0</div>
             <div className="text-slate-600 text-sm font-medium">Paperwork Required</div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Comprehensive Feature Matrix</h2>
          <p className="text-slate-600 mt-4">Explore the detailed breakdown of our all-in-one platform.</p>
        </div>

        {/* Massive Feature Grid */}
        <div className="space-y-16">
          {featureCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="md:flex">
                {/* Category Header (Left/Top) */}
                <div className="md:w-1/3 bg-slate-50 border-r border-slate-100 p-8 flex flex-col justify-center relative overflow-hidden">
                   <div className="absolute inset-0 z-0">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover opacity-10" />
                   </div>
                   <div className="relative z-10">
                     <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6 text-brand-600">
                       {category.icon}
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.title}</h3>
                     <p className="text-slate-500 text-sm">
                       Powerful tools designed to streamline {category.title.toLowerCase()} workflows and improve efficiency.
                     </p>
                   </div>
                </div>

                {/* Feature List (Right/Bottom) */}
                <div className="md:w-2/3 p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium hover:text-brand-700 transition-colors cursor-default">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-24 bg-indigo-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-indigo-200 mb-10 max-w-2xl mx-auto">
              MasterRoll ERP plays nicely with the tools you already use.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 font-bold flex items-center">
                 <Globe className="mr-2 w-5 h-5" /> Google Classroom
               </div>
               <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 font-bold flex items-center">
                 <Video className="mr-2 w-5 h-5" /> Zoom / Meet
               </div>
               <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 font-bold flex items-center">
                 <FileSpreadsheet className="mr-2 w-5 h-5" /> Tally / Excel
               </div>
               <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 font-bold flex items-center">
                 <CreditCard className="mr-2 w-5 h-5" /> Razorpay / Stripe
               </div>
               <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 font-bold flex items-center">
                 <Smartphone className="mr-2 w-5 h-5" /> WhatsApp Business
               </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a custom module?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            If you didn't see the feature you need in our list of 101+ modules, our engineering team can build it for you.
          </p>
          <button onClick={() => navigate('demo')} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-xl">
            Request Custom Feature
          </button>
        </div>

      </div>
    </div>
  );
};

export default SchoolERPPage;