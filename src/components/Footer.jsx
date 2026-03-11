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
      title: "About Us",
      links: [
        { name: "Home", path: "/" },
        { name: "Our Mission", path: "/mission" },
        { name: "Our Story", path: "/story" },
        { name: "Our Publisher", path: "/publisher" },
      ],
    },
    {
      title: "Learning Hub",
      links: [
        { name: "Writing Basics", path: "/writing-basics" },
        { name: "Writing Stages", path: "/writing-stages" },
        { name: "Story Structure", path: "/story-structure" },
        { name: "Grammar Guide", path: "/grammar-guide" },
        { name: "Famous Authors", path: "/famous-authors" },
      ],
    },
    {
      title: "Creative Tools",
      links: [
        { name: "Young Writer's Pad", path: "/writer-pad" },
        { name: "Idea Notebook", path: "/idea-notebook" },
        { name: "Story Creator", path: "/story-creator" },
        { name: "Illustration Board", path: "/illustration-board" },
        { name: "Create Book", path: "/create-book" },
      ],
    },
    {
      title: "Publishing",
      links: [
        { name: "How to Publish", path: "/how-to-publish" },
        { name: "Publish Your Book", path: "/publish" },
        { name: "Copyright Guide", path: "/copyright-guide" },
        { name: "Pricing Guide", path: "/book-pricing-guide" },
      ],
    },
    {
      title: "Marketplace",
      links: [
        { name: "Book Store", path: "/marketplace" },
        { name: "New Arrivals", path: "/new-books" },
        { name: "Top Rated", path: "/top-rated-books" },
        { name: "Categories", path: "/book-categories" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Student Authors", path: "/student-authors" },
        { name: "Top Authors", path: "/top-authors" },
        { name: "Challenges", path: "/challenges" },
        { name: "Competitions", path: "/competitions" },
        { name: "Forum", path: "/forum" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Contact Us", path: "/contact" },
        { name: "FAQ", path: "/faq" },
      ],
    },
  ];

  return (
    <footer className="w-full font-['Nunito'] relative bg-slate-50 text-slate-900 pt-10 pb-6 overflow-hidden border-t border-slate-200">
      <div className="max-w-[1450px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 border-b border-slate-100 pb-10">

          {/* BRAND AREA - Minimalist */}
          <div className="lg:w-1/3 space-y-4">
            <Link to="/" className="inline-flex items-center group">
              <div className="mr-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                <img src="/icon.png" alt="Icon" className="w-11 h-11 object-contain" />
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-[20px] font-[900] text-indigo-600 tracking-tighter leading-none">Nation's</span>
                <span className="text-[20px] font-[900] text-slate-900 tracking-tighter leading-none">Young Authors</span>
              </div>
            </Link>
            <p className="text-slate-400 text-[13px] font-bold italic leading-relaxed max-w-[240px]">
              "Empowering small voices, one story at a time. The premiere home for young literary talent."
            </p>
            <div className="flex gap-4 pt-2">
              {[<FaInstagram />, <FaTwitter />, <FaFacebookF />, <FaYoutube />].map((icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-indigo-600 transition-colors text-xl">{icon}</a>
              ))}
            </div>
          </div>

          {/* GRID OF LINKS - Expanded Row */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
            {footerSections.slice(0, 6).map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-indigo-600 font-black text-[11px] uppercase tracking-widest">{section.title}</h4>
                <ul className="space-y-2.5">
                  {section.links.slice(0, 4).map((link) => (
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

        {/* BOTTOM STRIP - Clean & Single Line */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-slate-400 text-[11px] font-black uppercase tracking-widest">
            <span className="flex items-center gap-2"><FaEnvelope className="text-indigo-600" /> hello@nya.com</span>
            <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-600" /> Hyderabad</span>
          </div>
          <p className="text-slate-300 font-bold text-[11px] tracking-widest uppercase">
            © {currentYear} Nation's Young Authors.
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
