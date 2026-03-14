import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen, Sparkles, Star, Trophy,
    ArrowRight, Lightbulb, Target, Heart,
    Brain, Globe, PenTool, GraduationCap,
    Library, Microscope, Volume2
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const SeniorSecondary = () => {
    const [selectedWing, setSelectedWing] = useState('Science');

    const academicWings = [
        {
            id: 'Science',
            title: "Science Stream",
            icon: <Microscope className="w-8 h-8" />,
            color: "bg-emerald-600",
            lightColor: "bg-emerald-50",
            textColor: "text-emerald-600",
            desc: "Preparing future doctors and engineers with rigorous practical training and focused entrance prep.",
            subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "CS / IP"],
            highlights: ["NABL Graded Labs", "IIT-JEE Foundation", "NEET Coaching", "Robotics Hub"]
        },
        {
            id: 'Commerce',
            title: "Commerce Stream",
            icon: <Globe className="w-8 h-8" />,
            color: "bg-indigo-600",
            lightColor: "bg-indigo-50",
            textColor: "text-indigo-600",
            desc: "Nurturing business leaders and CA aspirants with real-world financial insights and ethics.",
            subjects: ["Accountancy", "Business Studies", "Economics", "Applied Math", "IP"],
            highlights: ["Stock Market Sim", "Entrepreneur Club", "CA Foundation Batches", "Industry Visits"]
        },
        {
            id: 'Arts',
            title: "Arts Stream",
            icon: <PenTool className="w-8 h-8" />,
            color: "bg-rose-600",
            lightColor: "bg-rose-50",
            textColor: "text-rose-600",
            desc: "Developing thinkers, civil servants, and creators through rich social sciences and arts.",
            subjects: ["History", "Political Science", "Geography", "Psychology", "Fine Arts"],
            highlights: ["UPSC / BPSC Foundation", "Model UN (MUN)", "Fine Arts Studio", "Literary Society"]
        }
    ];

    const stats = [
        { label: "Faculty", val: "50+", icon: <GraduationCap className="w-5 h-5" /> },
        { label: "Success Rate", val: "100%", icon: <Trophy className="w-5 h-5" /> },
        { label: "Modern Labs", val: "10+", icon: <Microscope className="w-5 h-5" /> }
    ];

    const currentWing = academicWings.find(w => w.id === selectedWing);

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Plus Jakarta Sans']">
            {/* Premium Hero Section */}
            <PageHero
                title="Future"
                italicTitle="Ready"
                tag="Class XI & XII"
                subtitle="Advanced streams and expert mentorship bridging the gap between school and professional success."
                bgImage="/3d_senior_sec_1773388549487.png"
                accentColor="text-amber-500"
            />

            {/* Wings Selector & Content */}
            <div className="max-w-7xl mx-auto px-4 mb-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left side: Navigation */}
                    <div className="lg:w-1/3 space-y-4">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Choose Your <span className="text-indigo-600">Stream</span></h2>
                        {academicWings.map(wing => (
                            <button
                                key={wing.id}
                                onClick={() => setSelectedWing(wing.id)}
                                className={`w-full flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-3xl border-2 transition-all text-left ${selectedWing === wing.id ? `bg-white ${wing.textColor} border-indigo-500 shadow-2xl shadow-indigo-100 scale-102 md:scale-105` : 'bg-white/50 border-slate-100 text-slate-400 hover:border-indigo-200'}`}
                            >
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${selectedWing === wing.id ? wing.color + ' text-white' : 'bg-slate-100 text-slate-300'}`}>
                                    {wing.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-black">{wing.title}</h4>
                                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Class XI & XII</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right side: Wing Details */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={selectedWing}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className={`${currentWing.color} p-4 rounded-3xl text-white shadow-xl`}>
                                        {currentWing.icon}
                                    </div>
                                    <h3 className={`text-4xl font-black ${currentWing.textColor}`}>{currentWing.title}</h3>
                                </div>
                                <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
                                    {currentWing.desc}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Core Subjects</h4>
                                        <div className="space-y-4">
                                            {currentWing.subjects.map(sub => (
                                                <div key={sub} className="flex items-center gap-4 text-slate-700 font-bold">
                                                    <div className={`w-2 h-2 rounded-full ${currentWing.color}`}></div>
                                                    {sub}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Batch Highlights</h4>
                                        <div className="space-y-4">
                                            {currentWing.highlights.map(h => (
                                                <div key={h} className={`p-4 rounded-2xl ${currentWing.lightColor} ${currentWing.textColor} font-black text-sm flex items-center gap-3`}>
                                                    <Star className="w-4 h-4 fill-current" /> {h}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 pt-12 border-t border-slate-50 flex flex-wrap gap-8">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300">
                                                {stat.icon}
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{stat.label}</p>
                                                <p className="text-lg font-black text-slate-800">{stat.val}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Preparation Section */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
                    <div className="bg-indigo-950 rounded-[3rem] p-12 relative overflow-hidden group">
                        <div className="relative z-10">
                            <Target className="w-12 h-12 text-indigo-400 mb-6" />
                            <h3 className="text-4xl font-extrabold mb-4">Integrated Coaching</h3>
                            <p className="text-indigo-300 text-lg mb-8 max-w-md">
                                Specialized batches for IIT-JEE, NEET, and CLAT within school hours to reduce travel time and pressure.
                            </p>
                            <button className="flex items-center gap-3 font-extrabold text-indigo-400 hover:gap-5 transition-all text-sm uppercase tracking-widest">
                                EXPLORE COACHING MODULES <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mb-32 group-hover:bg-indigo-500/20 transition-all"></div>
                    </div>

                    <div className="bg-emerald-950 rounded-[3rem] p-12 relative overflow-hidden group">
                        <div className="relative z-10">
                            <Brain className="w-12 h-12 text-emerald-400 mb-6" />
                            <h3 className="text-4xl font-black mb-4">Counseling Hub</h3>
                            <p className="text-emerald-300 text-lg mb-8 max-w-md">
                                Personalized career guidance and mental health support for students facing board exam stress.
                            </p>
                            <button className="flex items-center gap-3 font-black text-emerald-400 hover:gap-5 transition-all text-sm uppercase tracking-widest">
                                BOOK A SESSION <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mb-32 group-hover:bg-emerald-500/20 transition-all"></div>
                    </div>
                </div>
            </div>

            {/* Research & Publications */}
            <section className="max-w-7xl mx-auto px-4 py-24 mb-20 border-t border-slate-200">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Student Research & <br /><span className="text-rose-600">Publications</span></h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                            We encourage our Senior Secondary students to write research papers and articles. Our school magazine, "Gyan Darpan," features the best works, providing a platform for intellectual expression.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-black text-slate-800 mb-2">500+</h4>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Articles Published</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-slate-800 mb-2">20+</h4>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Research Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex gap-4">
                        <div className="w-1/2 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl skew-y-3">
                            <img src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Research" />
                        </div>
                        <div className="w-1/2 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl -skew-y-3 mt-12">
                            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Publication" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeniorSecondary;
                        />
                    </div >
                </div >
            </section >
        </div >
    );
};

export default SeniorSecondary;
