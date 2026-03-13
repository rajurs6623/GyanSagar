import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Book, Users, Star, Trophy, ArrowRight,
    Palette, Music, ShieldCheck, Heart,
    Zap, Sparkles, Coffee, Globe, Compass,
    Camera, CheckCircle2, GraduationCap, Microscope
} from 'lucide-react';

const HighSchool = () => {
    const [activeSection, setActiveSection] = useState('Academics');

    const sections = [
        {
            id: 'Academics',
            title: "Core Subjects",
            icon: <Book className="w-8 h-8" />,
            color: "bg-indigo-600",
            lightColor: "bg-indigo-50",
            textColor: "text-indigo-600",
            desc: "Rigorous academic curriculum for Classes 6 to 10 based on CBSE standards, focusing on conceptual mastery.",
            features: ["Advanced Mathematics", "Science Labs", "Language Proficiency", "Social Sciences"],
            highlights: ["Weekly Assessment", "Doubt Clearing Sessions", "Practical Exams", "Olympiad Training"]
        },
        {
            id: 'Labs',
            title: "Practical Learning",
            icon: <Microscope className="w-8 h-8" />,
            color: "bg-emerald-600",
            lightColor: "bg-emerald-50",
            textColor: "text-emerald-600",
            desc: "Experience-based learning in our state-of-the-art laboratories for Science and IT.",
            features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Science Hub"],
            highlights: ["Safe Environment", "Modern Apparatus", "Expert Supervision", "Hands-on Projects"]
        }
    ];

    const currentSection = sections.find(s => s.id === activeSection);

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito']">
            {/* Premium Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pb-20 px-4 overflow-hidden bg-slate-900 text-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/3d_high_school_1773388532851.png"
                        alt="High School Focus"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
                </div>

                {/* Energy Glows */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md text-indigo-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 shadow-2xl"
                            >
                                <GraduationCap className="w-4 h-4" /> Classes 6th to 10th
                            </motion.div>
                            <h1 className="text-6xl md:text-[7rem] font-black text-white mb-8 tracking-tighter leading-none">
                                High <br />
                                <span className="text-indigo-400 italic">School</span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Empowering pre-teens and teenagers with in-depth foundational knowledge, 
                                logical reasoning, and comprehensive board exam preparation.
                            </p>
                            
                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                                <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-600/20 hover:scale-105 transition-all">
                                    Core Subjects
                                </button>
                                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all">
                                    Science Labs
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="flex-1 relative hidden lg:block"
                        >
                            <div className="relative z-10">
                                <img
                                    src="/3d_high_school_1773388532851.png"
                                    alt="High School Academy"
                                    className="w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(79,70,229,0.3)] animate-float"
                                />
                            </div>
                            
                            {/* Stats Floaties */}
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20"
                            >
                                <Microscope className="w-8 h-8 text-emerald-400 mb-2" />
                                <p className="text-white font-black text-2xl tracking-tighter">Live</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Experiments</p>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-5 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20"
                            >
                                <Trophy className="w-8 h-8 text-amber-400 mb-2" />
                                <p className="text-white font-black text-2xl tracking-tighter">Top</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Board Scores</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </section>

            {/* Content Switcher */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {sections.map(sec => (
                        <button
                            key={sec.id}
                            onClick={() => setActiveSection(sec.id)}
                            className={`px-10 py-4 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all ${activeSection === sec.id ? 'bg-slate-900 text-white shadow-2xl scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                        >
                            {sec.title}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <div className="flex items-center gap-6 mb-10">
                                    <div className={`${currentSection.color} p-5 rounded-3xl text-white shadow-xl`}>
                                        {currentSection.icon}
                                    </div>
                                    <h3 className={`text-4xl md:text-5xl font-black ${currentSection.textColor}`}>{currentSection.title}</h3>
                                </div>
                                <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12">
                                    {currentSection.desc}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {currentSection.features.map(f => (
                                        <div key={f} className="flex items-center gap-3 text-slate-700 font-black text-sm group">
                                            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-center">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${currentSection.textColor} mb-4 block`}>Key Highlights</span>
                                <div className="space-y-6">
                                    {currentSection.highlights.map((h, i) => (
                                        <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                                            <CheckCircle2 className={`w-6 h-6 ${currentSection.textColor}`} />
                                            <span className="text-slate-800 font-black text-sm">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Future Readiness */}
            <section className="max-w-7xl mx-auto px-4 mb-32">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-[4rem] p-12 md:p-24 border border-indigo-100 flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Ready for the <span className="text-indigo-600 italic">Future</span></h2>
                    <p className="text-slate-600 text-xl font-medium max-w-3xl mb-16 leading-relaxed">
                        High School is critical for board prep. We provide foundational coaching for competitive exams along with robust CBSE curriculum mapping to ensure our students excel everywhere.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-left hover:shadow-xl transition-all">
                            <h4 className="text-2xl font-black text-slate-800 mb-4">NTSE & Olympiads</h4>
                            <p className="text-slate-500 font-medium">Specialized training modules starting from class 8th to build competitive spirit.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-left hover:shadow-xl transition-all">
                            <h4 className="text-2xl font-black text-slate-800 mb-4">Career Counseling</h4>
                            <p className="text-slate-500 font-medium">Psychometric tests and expert guidance for class 10 students for stream selection.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-left hover:shadow-xl transition-all">
                            <h4 className="text-2xl font-black text-slate-800 mb-4">Skill Workshops</h4>
                            <p className="text-slate-500 font-medium">Coding, robotics, and communication skills integrated into the normal routine.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toppers Spotlight */}
            <section className="bg-indigo-950 py-32 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 text-white">
                            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic">Nurturing <br /><span className="text-indigo-400 italic">Excellence</span></h2>
                            <p className="text-indigo-200 text-xl font-medium leading-relaxed mb-12">
                                Our students consistently secure top ranks in CBSE 10th Board Examinations.
                                We don't just teach for grades; we teach for life.
                            </p>
                            <div className="flex gap-12">
                                <div>
                                    <p className="text-4xl font-black text-indigo-400 mb-1">100%</p>
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Board Results</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-indigo-400 mb-1">98.4%</p>
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">School Highest</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[4rem] rotate-3 shadow-3xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=600"
                                    alt="School Topper"
                                    className="w-full h-[500px] object-cover rounded-[3rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background Art */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[200px] opacity-20 -mr-64 -mt-64"></div>
            </section>
        </div>
    );
};

export default HighSchool;
