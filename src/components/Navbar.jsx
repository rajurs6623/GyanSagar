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
    label: "About",
    links: [
      { name: "Our Mission", path: "/mission", icon: <FaUsers /> },
      { name: "Our Story", path: "/story", icon: <FaBookOpen /> },
      { name: "Our Publisher", path: "/publisher", icon: <FaUsers /> },
    ],
  },
  {
    label: "Learning",
    links: [
      { name: "What is Writing", path: "/what-is-writing", icon: <FaPenNib /> },
      { name: "What is Storytelling", path: "/what-is-storytelling", icon: <FaBookOpen /> },
      { name: "Writing Basics", path: "/writing-basics", icon: <FaPenNib /> },
      { name: "Writing Stages", path: "/writing-stages", icon: <FaPenNib /> },
      { name: "Story Structure", path: "/story-structure", icon: <FaBookOpen /> },
      { name: "Book Structure", path: "/book-structure", icon: <FaBookOpen /> },
      { name: "Grammar Guide", path: "/grammar-guide", icon: <FaPenNib /> },
      { name: "Writing Tips", path: "/writing-tips", icon: <FaPenNib /> },
      { name: "Famous Authors", path: "/famous-authors", icon: <FaUsers /> },
    ],
  },
  {
    label: "Writing Space",
    links: [
      { name: "Young Writer Pad", path: "/writer-pad", icon: <FaPenNib /> },
      { name: "Idea Notebook", path: "/idea-notebook", icon: <FaBookOpen /> },
      { name: "Story Creator", path: "/story-creator", icon: <FaPenNib /> },
      { name: "Chapter Creator", path: "/chapter-creator", icon: <FaPenNib /> },
      { name: "Illustration Board", path: "/illustration-board", icon: <FaPenNib /> },
      { name: "Book Builder", path: "/create-book", icon: <FaBookOpen /> },
    ],
  },
  {
    label: "Publishing",
    links: [
      { name: "How to Publish", path: "/how-to-publish", icon: <FaUpload /> },
      { name: "Publish Your Book", path: "/publish", icon: <FaUpload /> },
      { name: "Copyright Guide", path: "/copyright-guide", icon: <FaBookOpen /> },
      { name: "Book Pricing Guide", path: "/book-pricing-guide", icon: <FaStore /> },
    ],
  },
  {
    label: "Books",
    links: [
      { name: "Book Marketplace", path: "/marketplace", icon: <FaStore /> },
      { name: "New Books", path: "/new-books", icon: <FaBookOpen /> },
      { name: "Top Rated Books", path: "/top-rated-books", icon: <FaBookOpen /> },
      { name: "Book Categories", path: "/book-categories", icon: <FaBookOpen /> },
    ],
  },
  {
    label: "Authors",
    links: [
      { name: "Our Authors", path: "/authors", icon: <FaUsers /> },
      { name: "Student Authors", path: "/student-authors", icon: <FaUsers /> },
      { name: "Top Authors", path: "/top-authors", icon: <FaUsers /> },
      { name: "Author Profiles", path: "/author-profiles", icon: <FaUserCircle /> },
    ],
  },
  {
    label: "Community",
    links: [
      { name: "Writing Challenges", path: "/challenges", icon: <FaPenNib /> },
      { name: "Story Competitions", path: "/competitions", icon: <FaBookOpen /> },
      { name: "Events", path: "/events", icon: <FaUsers /> },
      { name: "Discussion Forum", path: "/forum", icon: <FaUsers /> },
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
      <div className={`h-[85px] flex items-center transition-all duration-300 ${!isHome ? "bg-white border-b border-slate-200 shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center shrink-0 group">
            <div className="flex flex-col items-end">
              <span className="text-[20px] sm:text-[28px] font-[900] text-indigo-600 tracking-tighter leading-none transform group-hover:-translate-x-1 transition-transform">Nation's</span>
            </div>
            <div className="mx-1 sm:mx-2.5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
              <img src="/icon.png" alt="Icon" className="w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] sm:text-[28px] font-[900] text-slate-900 tracking-tighter leading-none transform group-hover:translate-x-1 transition-transform">Young Authors</span>
              <span className="hidden sm:block text-[9px] font-[800] text-slate-400 tracking-[0.2em] uppercase mt-1">Empowering Small Voices</span>
            </div>
          </Link>

          {/* CENTER LINKS (Desktop) */}
          <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            <Link
              to="/"
              className={`text-[14px] font-[700] py-2 transition-colors ${isHome ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"
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
                <button className={`text-[14px] font-[700] py-2 cursor-pointer transition-colors whitespace-nowrap flex items-center gap-1 ${dropdown === group.label ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"}`}>
                  {group.label}
                  <FaChevronDown className={`text-[10px] transition-transform duration-200 ${dropdown === group.label ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdown === group.label && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 min-w-[220px] bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-[1001]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                    >
                      {group.links.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="flex items-center gap-3 px-4 py-2.5 text-[14px] font-[600] text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          <span className="opacity-50">{link.icon}</span>
                          {link.name}
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
            <Link to="/account" className="flex items-center gap-2 group transition-all">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <FaUserCircle className="text-xl" />
              </div>
              <span className="hidden md:block text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">Account</span>
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 text-2xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
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
                  <img src="/icon.png" alt="Icon" className="w-[35px] h-[35px] mr-2" />
                  <div className="flex flex-col">
                    <span className="font-[900] text-indigo-600 text-[16px] tracking-tighter leading-none">Nation's</span>
                    <span className="font-[900] text-slate-900 text-[16px] tracking-tighter leading-none">Young Authors</span>
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
                <Link
                  to="/account"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-indigo-600 py-4 rounded-xl text-white font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
                >
                  <FaUserCircle className="text-xl" />
                  My Account
                </Link>
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