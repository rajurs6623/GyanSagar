import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaYoutube,
    FaEnvelope,
    FaMapMarkerAlt,
    FaChevronRight,
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
        <footer className="w-full font-['Nunito'] relative bg-[#f1f3ff] text-slate-900 pt-20 pb-12 overflow-hidden border-t-2 border-indigo-100">

            {/* ── TOP BOOKSHELF DECORATION (Subtle) ─────────────────────────── */}
            <div
                className="absolute top-0 left-0 right-0 h-16 pointer-events-none opacity-20 bg-repeat-x bg-contain bg-top"
                style={{ backgroundImage: 'url("/bookshelf_bg.png")' }}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* ── BRAND COLUMN ─────────────────────────────────────────── */}
                    <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
                        <Link to="/" className="inline-flex items-center group transition-all duration-300">
                            <div className="flex flex-col items-end">
                                <span className="text-[22px] sm:text-[28px] font-[900] text-indigo-600 tracking-tighter leading-none group-hover:-translate-x-1 transition-transform">Nation's</span>
                            </div>
                            <div className="mx-2 sm:mx-2.5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                                <img src="/icon.png" alt="Icon" className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] object-contain" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[22px] sm:text-[28px] font-[900] text-slate-900 tracking-tighter leading-none group-hover:translate-x-1 transition-transform">Young Authors</span>
                                <span className="text-[9px] font-[800] text-slate-400 tracking-[0.2em] uppercase mt-1">Empowering Small Voices</span>
                            </div>
                        </Link>

                        <p className="text-slate-600 text-lg leading-relaxed max-w-sm mx-auto lg:mx-0 font-medium italic">
                            "Every child is an author, and every story deserves a shelf."
                            Join our global literary movement.
                        </p>

                        {/* Social Icons with Navbar Theme */}
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            {[
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaTwitter />, href: "#" },
                                { icon: <FaFacebookF />, href: "#" },
                                { icon: <FaYoutube />, href: "#" },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-11 h-11 rounded-xl bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300 shadow-sm"
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* ── LINKS COLUMNS ────────────────────────────────────────── */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
                            {footerSections.map((section) => (
                                <div key={section.title} className="space-y-6 text-center sm:text-left">
                                    <h4 className="text-indigo-600 font-[900] text-[12px] uppercase tracking-[0.25em] relative inline-block pb-2">
                                        {section.title}
                                        <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-indigo-600 hidden sm:block"></span>
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-indigo-600 sm:hidden"></span>
                                    </h4>
                                    <ul className="space-y-4">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    to={link.path}
                                                    className="group flex items-center justify-center sm:justify-start gap-2 text-slate-600 hover:text-indigo-600 transition-all duration-300 font-bold text-[15px]"
                                                >
                                                    <FaChevronRight className="text-[9px] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── CONTACT STRIP ──────────────────────────────────────────── */}
                <div className="mt-20 pt-10 border-t border-indigo-200/50 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                        <div className="flex items-center justify-center gap-3 text-slate-600 font-bold group">
                            <div className="w-10 h-10 rounded-full bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                                <FaEnvelope />
                            </div>
                            <span className="text-sm group-hover:text-indigo-600 transition-colors">hello@nationsyoungauthors.com</span>
                        </div>

                        <div className="flex items-center justify-center gap-3 text-slate-600 font-bold group">
                            <div className="w-10 h-10 rounded-full bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                                <FaMapMarkerAlt />
                            </div>
                            <span className="text-sm group-hover:text-indigo-600 transition-colors">London, United Kingdom</span>
                        </div>
                    </div>

                    <p className="text-slate-400 font-black text-[11px] tracking-widest uppercase py-2">
                        © {currentYear} Nation's Young Authors. All rights reserved.
                    </p>

                </div>
            </div>

            {/* Decorative Blur for Extra Modern Look */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        </footer>
    );
};

export default Footer;
