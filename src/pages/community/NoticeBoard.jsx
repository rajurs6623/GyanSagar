import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Bell, Calendar, Clock, ArrowRight,
    Megaphone, FileText, Star, Zap,
    ShieldCheck, Heart, User, Sparkles, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const NoticeBoard = () => {
    const [activeTab, setActiveTab] = useState('All');

    const notices = [
        {
            id: 1,
            title: "Session 2024-25 Admission Open",
            date: "12 March 2024",
            category: "Admission",
            desc: "Admissions are open for NC to Class 10 and 10+2 (Science, Commerce, Humanities). Visit the campus for details.",
            urgency: "High"
        },
        {
            id: 2,
            title: "Annual Sports Meet Postponed",
            date: "10 March 2024",
            category: "Sports",
            desc: "Due to predicted weather conditions, the Annual Sports Meet scheduled for 15th March is postponed to 22nd March.",
            urgency: "Medium"
        },
        {
            id: 3,
            title: "Summer Uniform Implementation",
            date: "08 March 2024",
            category: "Uniform",
            desc: "From 1st April, summer uniform code will be strictly followed. Please ensure compliance.",
            urgency: "Low"
        },
        {
            id: 4,
            title: "CBSE Board Exam Guidelines",
            date: "05 March 2024",
            category: "Academic",
            desc: "Important instructions for students of Class 10 and 12 regarding the upcoming board exams.",
            urgency: "High"
        }
    ];

    const categories = ['All', 'Academic', 'Admission', 'Sports', 'Uniform', 'Holiday'];

    const filteredNotices = activeTab === 'All' ? notices : notices.filter(n => n.category === activeTab);

    return (
        <div className="bg-slate-50 min-h-screen font-['Nunito']">
            <PageHero 
                title="School"
                italicTitle="Notice Board"
                tag="Official Announcements"
                subtitle="Stay updated with the latest news, event changes, and official circulars from Gyan Sagar Public School."
                bgImage="/GyanSagar/StudentPatna.jpg"
                accentColor="text-indigo-400"
            />

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-wrap gap-4 justify-center">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeTab === cat ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-100'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Notices List */}
            <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredNotices.map((notice, i) => (
                        <motion.div
                            key={notice.id}
                            layout
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 group hover:-translate-y-2 transition-all relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-3 px-full h-full ${notice.urgency === 'High' ? 'bg-rose-500' : notice.urgency === 'Medium' ? 'bg-amber-500' : 'bg-indigo-500'}`}></div>
                            
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100">{notice.category}</span>
                                        <span className="text-slate-300 font-bold text-xs flex items-center gap-2"><Clock className="w-4 h-4" /> {notice.date}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{notice.title}</h3>
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                                        {notice.desc}
                                    </p>
                                    <button className="flex items-center gap-3 font-black text-indigo-600 hover:gap-5 transition-all text-sm uppercase tracking-widest">
                                        Read Full Circular <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="hidden md:flex flex-col items-center gap-4 py-8 px-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                    <FileText className="w-8 h-8 text-slate-300" />
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Download PDF</span>
                                    <button className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all">
                                        ↓
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Archive Call */}
            <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
                <p className="text-slate-400 font-bold mb-6">Looking for older announcements?</p>
                <button className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl hover:scale-105 transition-all">View Notice Archive</button>
            </div>
        </div>
    );
};

export default NoticeBoard;
