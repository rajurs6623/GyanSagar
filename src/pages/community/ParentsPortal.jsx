import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, MessageSquare, ShieldCheck, Heart,
    Bell, Star, Search, Filter, Send,
    MoreVertical, UserPlus, Image as ImageIcon,
    Flag, Share2, CornerUpRight, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const ParentsPortal = () => {
    const [activeTab, setActiveTab] = useState('Feed');
    const [searchQuery, setSearchQuery] = useState('');

    const schoolNotices = [
        {
            id: 1,
            title: "Annual Sports Meet 2024",
            date: "March 25, 2024",
            category: "Event",
            importance: "High",
            description: "Final schedule and participant list for the upcoming Sports Meet has been released."
        },
        {
            id: 2,
            title: "Parent-Teacher Meeting (PTM)",
            date: "April 02, 2024",
            category: "Meeting",
            importance: "Critical",
            description: "Discussion on final term results and summer vacation assignments."
        }
    ];

    const discussions = [
        {
            id: 1,
            author: "Mrs. Verma",
            role: "Parent (Class 8th)",
            time: "2h ago",
            title: "Tips for Olympiad Preparation?",
            content: "My son is appearing for the Science Olympiad next month. Any recommendations for study materials or coaching centers in Patna?",
            likes: 12,
            comments: 8,
            tags: ["Academics", "Olympiad"],
            replies: [
                { author: "Mr. Khanna", content: "The school library has a dedicated section for Olympiads. Do check it out!" }
            ]
        },
        {
            id: 2,
            author: "Dr. Singh",
            role: "Parent (Class 10th)",
            time: "5h ago",
            title: "School Bus Route Change Update",
            content: "Has anyone received the new route map for the Kankarbagh area? The morning pickup time seems to have shifted.",
            likes: 5,
            comments: 3,
            tags: ["Transport", "Update"],
            replies: []
        }
    ];

    const resources = [
        { title: "Academic Calendar 2025-26", type: "PDF", size: "1.2 MB" },
        { title: "Uniform Policy Guide", type: "PDF", size: "850 KB" },
        { title: "Monthly Newsletter - Feb", type: "DOCX", size: "2.1 MB" }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-['Nunito']">
            <PageHero
                title="Parents"
                italicTitle="Connect"
                tag="Community Hub"
                subtitle="A collaborative lounge for parents to discuss and stay updated with school events."
                bgImage="/GyanSagar/StudentPatna.jpg"
                accentColor="text-amber-400"
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 md:-mt-20 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

                    {/* Left Sidebar: Nav & Stats */}
                    <div className="lg:col-span-3 space-y-4 md:space-y-6">
                        <div className="bg-white rounded-[2rem] md:rounded-3xl p-5 md:p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="space-y-1 md:space-y-2">
                                {['Feed', 'Notices', 'Resources', 'My Profile'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all text-sm md:text-base ${activeTab === tab ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50'}`}
                                    >
                                        {tab === 'Feed' && <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />}
                                        {tab === 'Notices' && <Bell className="w-4 h-4 md:w-5 md:h-5" />}
                                        {tab === 'Resources' && <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />}
                                        {tab === 'My Profile' && <Users className="w-4 h-4 md:w-5 md:h-5" />}
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Quick Stats</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 font-bold">Active Parents</span>
                                        <span className="text-indigo-600 font-black">1.2k+</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 font-bold">Daily Topics</span>
                                        <span className="text-indigo-600 font-black">24</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 font-bold">Helpful Answers</span>
                                        <span className="text-indigo-600 font-black">450+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guidelines */}
                        <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
                            <h4 className="text-amber-800 font-black text-sm mb-3 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" /> Community Rules
                            </h4>
                            <p className="text-amber-900/70 text-xs leading-relaxed font-bold">
                                Please maintain decorum. This is a space for constructive discussion regarding student welfare and academic success.
                            </p>
                        </div>
                    </div>

                    {/* Middle Column: Feed */}
                    <div className="lg:col-span-6 space-y-4 md:space-y-6">
                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search discussions..."
                                className="w-full bg-white pl-12 md:pl-14 pr-6 py-3.5 md:py-4 rounded-xl md:rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none font-bold text-slate-600 text-sm md:text-base"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Create Post */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                    <Users className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div className="flex-grow">
                                    <textarea
                                        placeholder="Start a discussion or ask a question..."
                                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-600 font-bold focus:ring-1 focus:ring-indigo-100 resize-none"
                                        rows="2"
                                    ></textarea>
                                    <div className="flex justify-between mt-4">
                                        <div className="flex gap-2">
                                            <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 group">
                                                <ImageIcon className="w-5 h-5 group-hover:text-indigo-600" />
                                            </button>
                                            <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 group">
                                                <Filter className="w-5 h-5 group-hover:text-amber-600" />
                                            </button>
                                        </div>
                                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-black flex items-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
                                            Post <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actual Feed / Tab Content */}
                        <AnimatePresence mode="wait">
                            {activeTab === 'Feed' && (
                                <motion.div
                                    key="feed"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-6"
                                >
                                    {discussions.map(post => (
                                        <div key={post.id} className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-100 transition-all">
                                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                                <div className="flex gap-3 md:gap-4">
                                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
                                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} alt={post.author} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black text-slate-800 text-sm md:text-base">{post.author}</h4>
                                                        <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">{post.role} • {post.time}</p>
                                                    </div>
                                                </div>
                                                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-300">
                                                    <MoreVertical className="w-4 h-4 md:w-5 md:h-5" />
                                                </button>
                                            </div>

                                            <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                                            <p className="text-slate-600 leading-relaxed font-medium mb-6">{post.content}</p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {post.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-widest">#{tag}</span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                                <div className="flex gap-6">
                                                    <button className="flex items-center gap-2 text-slate-400 hover:text-rose-500 font-black text-xs transition-colors group">
                                                        <Heart className="w-4 h-4 group-hover:fill-rose-500" /> {post.likes}
                                                    </button>
                                                    <button className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-black text-xs transition-colors group">
                                                        <MessageSquare className="w-4 h-4" /> {post.comments}
                                                    </button>
                                                </div>
                                                <button className="flex items-center gap-2 text-indigo-600 font-black text-xs hover:gap-3 transition-all">
                                                    View Conversation <CornerUpRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'Notices' && (
                                <motion.div
                                    key="notices"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-4"
                                >
                                    {schoolNotices.map(notice => (
                                        <div key={notice.id} className="bg-white rounded-3xl p-6 border-l-4 border-l-indigo-600 shadow-xl shadow-slate-200/50 border border-slate-100">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${notice.importance === 'Critical' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'}`}>
                                                    {notice.importance} Importance
                                                </span>
                                                <p className="text-[10px] text-slate-400 font-bold">{notice.date}</p>
                                            </div>
                                            <h3 className="text-lg font-black text-slate-800 mb-2">{notice.title}</h3>
                                            <p className="text-slate-500 text-sm font-medium mb-4">{notice.description}</p>
                                            <button className="text-indigo-600 text-xs font-black flex items-center gap-1 hover:underline">
                                                Download Attached PDF <Share2 className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Sidebar: Connect & Downloads */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Parent Directory Preview */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                            <h4 className="font-black text-slate-800 mb-6 flex items-center justify-between">
                                Registered Parents
                                <UserPlus className="w-4 h-4 text-indigo-600 cursor-pointer" />
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { name: "Priya Sharma", class: "IV - B", online: true },
                                    { name: "Rahul Verma", class: "X - A", online: false },
                                    { name: "Sneha Gupta", class: "Kg - II", online: true }
                                ].map(parent => (
                                    <div key={parent.name} className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${parent.name}`} alt="" />
                                            </div>
                                            {parent.online && <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>}
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-800">{parent.name}</p>
                                            <p className="text-[10px] text-slate-400 font-bold">Class {parent.class}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-3 bg-slate-50 text-slate-500 text-xs font-black rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                                View Parent Directory
                            </button>
                        </div>

                        {/* Recent Resources */}
                        <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-2xl shadow-indigo-100 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="font-black mb-6 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-indigo-400" /> Recent Downloads
                                </h4>
                                <div className="space-y-4">
                                    {resources.map(res => (
                                        <div key={res.title} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center font-black text-[10px]">
                                                    {res.type}
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black leading-tight mb-1">{res.title}</p>
                                                    <p className="text-[8px] text-slate-400 font-bold">{res.size}</p>
                                                </div>
                                            </div>
                                            <Bell className="w-3 h-3 text-indigo-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
                        </div>

                        {/* Help / Support */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                <Flag className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black text-slate-800">Support Desk</h4>
                                <p className="text-[10px] text-slate-400 font-bold">Report an issue or bug</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ParentsPortal;
