import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Laptop, Globe, ShieldCheck,
    Monitor, Layout, Cpu, Sparkles,
    CheckCircle2, ArrowRight, Play, Server
} from 'lucide-react';

const DigitalClassrooms = () => {
    const features = [
        {
            title: "Interactive Smart Boards",
            desc: "75-inch touch-sensitive boards with 4K resolution in every classroom for visual learning.",
            icon: <Monitor className="w-10 h-10 text-indigo-500" />,
            status: "Implemented"
        },
        {
            title: "School Management App",
            desc: "Dedicated app for parents to track attendance, fees, and homework in real-time.",
            icon: <Laptop className="w-10 h-10 text-emerald-500" />,
            status: "Live"
        },
        {
            title: "High-Speed Wi-Fi",
            desc: "Campus-wide fiber optic connectivity for seamless access to digital resources.",
            icon: <Globe className="w-10 h-10 text-amber-500" />,
            status: "Active"
        },
        {
            title: "E-Library Portal",
            desc: "24/7 access to over 5,000+ e-books and educational videos through our portal.",
            icon: <Server className="w-10 h-10 text-rose-500" />,
            status: "Expanding"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito']">
            {/* Premium Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pb-20 px-4 overflow-hidden bg-slate-900">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/3d_digital_class_1773388599382.png"
                        alt="Digital Future"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
                </div>

                {/* Cyber Glows */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

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
                                <Zap className="w-4 h-4" /> Future-Ready Education
                            </motion.div>
                            <h1 className="text-6xl md:text-[7rem] font-black text-white mb-8 tracking-tighter leading-none">
                                Digital <br />
                                <span className="text-indigo-400 italic">Classrooms</span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Bridging the gap between traditional values and modern technology. 
                                Making learning interactive, visual, and infinitely more effective.
                            </p>
                            
                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                                <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-600/20 hover:scale-105 transition-all">
                                    Our Tech Stack
                                </button>
                                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all">
                                    Virtual Tour
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="flex-1 relative hidden lg:block"
                        >
                            <div className="relative z-10">
                                <img
                                    src="/3d_school_campus_premium.png"
                                    alt="Digital Campus"
                                    className="w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(79,70,229,0.3)] animate-float"
                                />
                            </div>
                            
                            {/* Floating Tech Cards */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20"
                            >
                                <Monitor className="w-8 h-8 text-indigo-400 mb-2" />
                                <p className="text-white font-black text-2xl tracking-tighter">75"</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Smart Boards</p>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20"
                            >
                                <Cpu className="w-8 h-8 text-emerald-400 mb-2" />
                                <p className="text-white font-black text-2xl tracking-tighter">AI</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Powered Labs</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom smooth fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </section>

            {/* Features Bento */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 group hover:shadow-2xl hover:shadow-indigo-100 transition-all"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform">
                                {feat.icon}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-4 block">{feat.status}</span>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{feat.title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Interactive Experience */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2 relative z-10">
                        <Sparkles className="w-12 h-12 text-indigo-400 mb-8" />
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Visualizing <br /><span className="text-indigo-400">Complex Concepts</span></h2>
                        <p className="text-slate-400 text-xl font-medium mb-12 leading-relaxed">
                            Through 3D simulations and interactive animations, students understand
                            science and math concepts that are otherwise hard to grasp.
                        </p>
                        <div className="space-y-6">
                            {['3D Science Modules', 'Virtual Reality Expeditions', 'Gamified Mathematics', 'Linguistic Software'].map(item => (
                                <div key={item} className="flex items-center gap-4 text-slate-200 font-bold">
                                    <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60" alt="Smart Board" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                                >
                                    <Play className="w-8 h-8 fill-white" />
                                </motion.div>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[80px]"></div>
                    </div>
                </div>
            </div>

            {/* Online Learning Resources */}
            <section className="max-w-7xl mx-auto px-4 py-24 mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Digital <span className="text-indigo-600">Ecosystem</span></h2>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Access world-class learning materials anytime, anywhere with our integrated online platforms.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="p-8 rounded-[3rem] bg-indigo-50 border border-indigo-100">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Globe className="w-7 h-7 text-indigo-600" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-800 mb-4">E-Pathshala</h4>
                        <p className="text-slate-600 font-medium">Digital repository of textbooks, videos, and interactive quizzes for Class NC-10.</p>
                    </div>
                    <div className="p-8 rounded-[3rem] bg-emerald-50 border border-emerald-100">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Laptop className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-800 mb-4">Virtual Tutors</h4>
                        <p className="text-slate-600 font-medium">Recorded lectures from subject experts available for revision 24/7.</p>
                    </div>
                    <div className="p-8 rounded-[3rem] bg-rose-50 border border-rose-100">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Brain className="w-7 h-7 text-rose-600" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-800 mb-4">Assessment Hub</h4>
                        <p className="text-slate-600 font-medium">Automated testing platform that provides instant feedback and progress reports.</p>
                    </div>
                </div>
            </section>

            {/* App Promotion */}
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="p-12 md:p-24 bg-indigo-50 rounded-[4rem] border border-indigo-100">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-8 tracking-tighter">Download the <span className="text-indigo-600">Gyan Sagar Parent App</span></h2>
                    <p className="text-slate-500 text-lg font-medium mb-12 max-w-xl mx-auto">
                        Track your child's progress, pay fees, and receive important notices
                        right on your smartphone.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl flex items-center gap-4 hover:scale-105 transition-all">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-6" alt="Play Store" /> Google Play
                        </button>
                        <button className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl flex items-center gap-4 hover:scale-105 transition-all">
                            App Store
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalClassrooms;
