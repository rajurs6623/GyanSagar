import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "Our Story", path: "/story" },
        { name: "Our Publisher", path: "/publisher" },
        { name: "Book Store", path: "/marketplace" },
      ],
    },
    {
      title: "Learning",
      links: [
        { name: "Knowledge Store", path: "/store" },
        { name: "Reading Library", path: "/library" },
        { name: "Writing Stages", path: "/writing-stages" },
        { name: "Young Writer's Pad", path: "/writer-pad" },
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
    <footer className="w-full font-['Nunito'] bg-[#f8fafc] text-slate-600 border-t border-indigo-100 py-6 md:py-8 shrink-0 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center justify-center md:items-start gap-8 md:gap-4 relative z-10 w-full">
        {/* ── BRAND COLUMN ── */}
        <div className="flex flex-col items-center md:items-start space-y-3 shrink-0 lg:w-[300px]">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/icon.png"
              alt="Icon"
              className="w-8 h-8 object-contain transform group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col text-left">
              <span className="text-base font-black text-slate-800 leading-none">
                Nation's <span className="text-indigo-600">Young Authors</span>
              </span>
            </div>
          </Link>
          <p className="text-[11px] text-slate-500 max-w-[200px] text-center md:text-left font-semibold leading-tight italic">
            "Every child is an author, and every story deserves a shelf."
          </p>
          <div className="flex gap-2">
            {[
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaYoutube />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-7 h-7 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm text-[10px]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── LINKS COLUMNS ── */}
        <div className="flex justify-center md:justify-start gap-8 md:gap-16 w-full md:w-auto flex-1 md:pl-8">
          {footerSections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col items-center md:items-start space-y-2"
            >
              <h4 className="text-indigo-600 font-bold text-[9px] uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-1.5 text-center md:text-left">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-500 hover:text-indigo-600 transition-colors text-[11px] font-bold block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── CONTACT STRIP ── */}
        <div className="flex flex-col items-center md:items-end space-y-3 shrink-0 lg:w-[300px]">
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <div className="flex items-center gap-2 text-slate-500 text-[11px] font-bold group">
              <FaEnvelope className="text-indigo-400 group-hover:text-indigo-600 transition-colors text-[10px]" />
              <a
                href="mailto:hello@nationsyoungauthors.com"
                className="hover:text-indigo-600 transition-colors"
              >
                hello@nationsyoungauthors.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-[11px] font-bold">
              <FaMapMarkerAlt className="text-indigo-400 text-[10px]" />
              <span>London, United Kingdom</span>
            </div>
          </div>
          <p className="text-slate-400 font-bold text-[8px] tracking-widest uppercase mt-2 text-center md:text-right">
            © {currentYear} NYA. All rights reserved.
          </p>
        </div>
      </div>
      {/* Subtle Gradient Glows to stay looking premium but small */}
      <div className="absolute bottom-0 -left-12 w-32 h-32 bg-indigo-200/20 rounded-full blur-[60px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-12 w-32 h-32 bg-indigo-200/20 rounded-full blur-[60px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
