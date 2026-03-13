import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBookOpen,
  FaStore,
  FaPenNib,
  FaUpload,
  FaUsers,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

/*NAV DATA*/
const navGroups = [
  {
    label: "About School",
    links: [
      { name: "Our Story", path: "/story", icon: <FaBookOpen /> },
      { name: "Mission & Vision", path: "/mission", icon: <FaUsers /> },
      { name: "Infrastructure", path: "/infrastructure", icon: <FaUserCircle /> },
      { name: "Campus Facilities", path: "/campus-facilities", icon: <FaUsers /> },
    ],
  },
  {
    label: "Academics",
    links: [
      { name: "Primary (NC–5th)", path: "/primary-classes", icon: <FaBookOpen /> },
      { name: "High School (6th–10th)", path: "/high-school", icon: <FaBookOpen /> },
      { name: "Classes 11 & 12 (+2)", path: "/senior-secondary", icon: <FaBookOpen /> },
      { name: "Digital Classrooms", path: "/digital-classrooms", icon: <FaPenNib /> },
    ],
  },
  {
    label: "Admissions",
    links: [
      { name: "Admission Guide", path: "/admission-guide", icon: <FaUpload /> },
      { name: "Fee Structure", path: "/fee-structure", icon: <FaStore /> },
      { name: "School Uniform", path: "/school-uniform", icon: <FaStore /> },
      { name: "Apply Online", path: "/admission-inquiry", icon: <FaUpload /> },
    ],
  },
  {
    label: "Resources",
    links: [
      { name: "E-Learning", path: "/e-learning", icon: <FaBookOpen /> },
      { name: "Scholarships", path: "/scholarships", icon: <FaBookOpen /> },
      { name: "Alumni Network", path: "/alumni", icon: <FaUsers /> },
      { name: "Study Material", path: "/study-material", icon: <FaBookOpen /> },
    ],
  },
  {
    label: "School Life",
    links: [
      { name: "Student Achievers", path: "/student-achievers", icon: <FaUsers /> },
      { name: "Photo Gallery", path: "/photo-gallery", icon: <FaUsers /> },
      { name: "Toppers Gallery", path: "/toppers-gallery", icon: <FaUsers /> },
      { name: "Our Faculty", path: "/faculty", icon: <FaUserCircle /> },
      { name: "School Library", path: "/school-library", icon: <FaBookOpen /> },
    ],
  },
  {
    label: "Community",
    links: [
      { name: "Notice Board", path: "/notice-board", icon: <FaPenNib /> },
      { name: "School Events", path: "/events", icon: <FaUsers /> },
      { name: "Parents Portal", path: "/parents-portal", icon: <FaUsers /> },
      { name: "School Transport", path: "/school-transport", icon: <FaStore /> },
    ],
  },
];

const Navbar = () => {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === "/";
  const hoverTimerRef = useRef(null);

  useEffect(() => {
    setDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (label) => {
    clearTimeout(hoverTimerRef.current);
    setDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimerRef.current = setTimeout(() => setDropdown(null), 100);
  };

  return (
    <header className={`w-full font-['Nunito'] sticky top-0 left-0 right-0 z-[1000] ${isHome ? "bg-[#f1f3ff]" : "bg-white"}`}>

      {/* ── TOP NAV STRIP ─────────────────────────────────────────── */}
      <div className={`h-[70px] sm:h-[80px] flex items-center transition-all duration-300 ${!isHome ? "bg-white border-b border-slate-200 shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center shrink-0 group gap-2 sm:gap-3">

            <div className="flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
              <img
                src="/GyanSagar/LogoGyansagar.jfif"
                alt="Gyan Sagar Logo"
                className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] object-contain rounded-full border-2 border-indigo-600 p-0.5"
                onError={(e) => { e.target.src = "/icon.png" }}
              />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[16px] sm:text-[24px] font-[900] tracking-tighter leading-none">
                <span className="text-indigo-600">Gyan</span>{" "}
                <span className="text-slate-900">Sagar</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-extrabold text-slate-500 tracking-[0.15em] uppercase mt-[2px]">
                Public School
              </span>
            </div>

          </Link>

          {/* CENTER LINKS (Desktop) - Adjusted gap and padding */}
          <div className="hidden xl:flex items-center gap-4 flex-1 justify-center">
            <Link
              to="/"
              className={`text-[13px] font-[700] py-2 px-2 transition-colors ${isHome ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Home
            </Link>
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`text-[13px] font-[700] py-2 px-2 cursor-pointer transition-colors whitespace-nowrap flex items-center gap-1 ${dropdown === group.label ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"}`}>
                  {group.label}
                  <FaChevronDown className={`text-[8px] transition-transform duration-200 ${dropdown === group.label ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdown === group.label && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 min-w-[200px] bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-[1001]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                    >
                      {group.links.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="flex items-center gap-3 px-3 py-2 text-[13px] font-[600] text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          <span className="opacity-50">{link.icon}</span>
                          <span className="whitespace-nowrap">{link.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT ACCOUNT + MOBILE TOGGLE */}
          <div className="flex items-center gap-2 sm:gap-4">

            {localStorage.getItem("isLoggedIn") === "true" ? (
              <Link to="/account" className="flex items-center gap-2 group transition-all shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <FaUserCircle className="text-lg sm:text-xl" />
                </div>
                <span className="hidden lg:block text-[13px] font-black text-slate-700 group-hover:text-indigo-600 transition-colors whitespace-nowrap">My Account</span>
              </Link>
            ) : (
              <Link to="/signin" className="px-4 sm:px-6 py-2 bg-indigo-600 text-white text-[12px] sm:text-sm font-black rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2 whitespace-nowrap">
                <FaUserCircle className="text-base sm:text-lg" />
                Sign In
              </Link>
            )}

            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 text-xl sm:text-2xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER ──────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white z-[2001] p-6 sm:p-8 shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center">
                  <img src="/GyanSagar/LogoGyansagar.jfif" alt="Icon" className="w-[40px] h-[40px] rounded-full mr-2" />
                  <div className="flex flex-col">
                    <span className="font-[900] text-indigo-600 text-[16px] tracking-tighter leading-none">Gyan Sagar</span>
                    <span className="font-[900] text-slate-900 text-[12px] tracking-tighter leading-none uppercase">Public School</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 hover:bg-indigo-50 rounded-lg text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-[800] text-slate-800 hover:text-indigo-600 transition-colors"
                >
                  Home
                </Link>

                {navGroups.map((group) => (
                  <div key={group.label} className="space-y-3">
                    <h3 className="text-[10px] font-[900] text-slate-400 uppercase tracking-[0.2em]">{group.label}</h3>
                    <div className="grid gap-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 py-2 text-[15px] font-[700] transition-all hover:translate-x-1 ${location.pathname === link.path
                            ? "text-indigo-600"
                            : "text-slate-600 hover:text-indigo-600"
                            }`}
                        >
                          <span className="text-slate-300">{link.icon}</span>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="mt-auto pt-6 border-t border-slate-100">
                {localStorage.getItem("isLoggedIn") === "true" ? (
                  <Link
                    to="/account"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-indigo-600 py-4 rounded-xl text-white font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
                  >
                    <FaUserCircle className="text-xl" />
                    My Account
                  </Link>
                ) : (
                  <Link
                    to="/signin"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-indigo-600 py-4 rounded-xl text-white font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
                  >
                    <FaUserCircle className="text-xl" />
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f8fafc; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </header>
  );
};

export default Navbar;
