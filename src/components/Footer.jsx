import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About School",
      links: [
        { name: "Infrastructure", path: "/infrastructure" },
        { name: "Our Vision", path: "/mission" },
        { name: "Our Story", path: "/story" },
        { name: "School Events", path: "/events" },
      ],
    },
    {
      title: "Academics",
      links: [
        { name: "Primary Classes", path: "/primary-classes" },
        { name: "Senior Secondary", path: "/senior-secondary" },
        { name: "High School", path: "/high-school" },
        { name: "School Library", path: "/school-library" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { name: "Admission Guide", path: "/admission-guide" },
        { name: "Fee Structure", path: "/fee-structure" },
        { name: "Online Registration", path: "/admission-inquiry" },
        { name: "School Uniform", path: "/school-uniform" },
      ],
    },
    {
      title: "Campus Life",
      links: [
        { name: "Notice Board", path: "/notice-board" },
        { name: "Student Achievers", path: "/student-achievers" },
        { name: "Toppers Gallery", path: "/toppers-gallery" },
        { name: "Photo Gallery", path: "/photo-gallery" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Parents Portal", path: "/parents-portal" },
        { name: "E-Learning", path: "/e-learning" },
        { name: "Scholarships", path: "/scholarships" },
        { name: "Alumni Network", path: "/alumni" },
      ],
    },
  ];

  return (
    <footer className="w-full font-['Nunito'] relative bg-slate-50 text-slate-900 pt-10 pb-6 overflow-hidden border-t border-slate-200">
      <div className="max-w-[1450px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 border-b border-slate-100 pb-10">

          {/* BRAND AREA - School Branding */}
          <div className="lg:w-1/3 space-y-4">
            <Link to="/" className="inline-flex items-center group">
              <div className="mr-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                <img src="/GyanSagar/LogoGyansagar.jfif" alt="School Logo" className="w-12 h-12 object-contain rounded-full border border-indigo-100" />
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-[20px] font-[900] text-indigo-600 tracking-tighter leading-none">Gyan Sagar</span>
                <span className="text-[14px] font-[900] text-slate-900 tracking-tighter leading-none uppercase">Public School</span>
              </div>

            </Link>
            <p className="text-slate-400 text-[13px] font-bold italic leading-relaxed max-w-[280px]">
              "Excel in Knowledge, Flourish in Character. Providing quality education from NC to 12th Standard."
            </p>
            
            <div className="flex gap-4 pt-2">
              {[<FaInstagram />, <FaTwitter />, <FaFacebookF />, <FaYoutube />].map((icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-indigo-600 transition-colors text-xl">{icon}</a>
              ))}
            </div>
          </div>

          {/* GRID OF LINKS */}
          <div className="flex-1 grid grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-8 gap-y-10">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-indigo-600 font-black text-[11px] uppercase tracking-widest">{section.title}</h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-slate-500 hover:text-indigo-600 transition-colors font-bold text-[13px]">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-slate-400 text-[11px] font-black uppercase tracking-widest">
            <span className="flex items-center gap-2"><FaEnvelope className="text-indigo-600" /> info@gyansagar.com</span>
            <span className="flex items-center gap-2 text-wrap max-w-[300px]"><FaMapMarkerAlt className="text-indigo-600 shrink-0" /> Ram Krishna Nagar, Patna, Bihar 800027</span>
          </div>
          <p className="text-slate-300 font-bold text-[11px] tracking-widest uppercase">
            © {currentYear} Gyan Sagar Public School.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-slate-300 hover:text-slate-900 text-[10px] font-black uppercase transition-colors">Privacy</Link>
            <Link to="/terms" className="text-slate-300 hover:text-slate-900 text-[10px] font-black uppercase transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
