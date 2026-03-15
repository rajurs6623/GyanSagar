import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Laptop, Globe, ShieldCheck,
    Monitor, Layout, Cpu, Sparkles,
    CheckCircle2, ArrowRight, Play, Server, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const DigitalClassrooms = () => {
    const features = [
        {
            title: "Interactive Smart Boards",
            desc: "75-inch touch-sensitive boards with 4K resolution and anti-glare screens in every classroom.",
            icon: <Monitor className="w-10 h-10 text-indigo-500" />,
            status: "Fully Integrated"
        },
        {
            title: "School Management App",
            desc: "Dedicated app for parents to track attendance, fee receipts, and homework in real-time.",
            icon: <Laptop className="w-10 h-10 text-emerald-500" />,
            status: "Live on PlayStore"
        },
        {
            title: "Fiber-Optic Internet",
            desc: "High-speed 1Gbps dedicated line ensuring seamless digital resource access campus-wide.",
            icon: <Globe className="w-10 h-10 text-amber-500" />,
            status: "24/7 Active"
        },
        {
            title: "E-Library Portal",
            desc: "Access to 5,000+ digital books and curated educational videos for exam preparation.",
            icon: <Server className="w-10 h-10 text-rose-500" />,
            status: "Always Open"
        }
    ];

    const appGuide = [
        { step: "Download", desc: "Install 'Gyan Sagar Parent App' from Play Store or App Store." },
        { step: "Login", desc: "Use your registered mobile number to get the OTP." },
        { step: "Track", desc: "Monitor academic progress, attendance, and pay fees in seconds." }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito']">
            <PageHero
                title="Digital"
                italicTitle="Learning"
                tag="Next-Gen Tech"
                subtitle="Interactive smart classrooms and multimedia resources making education visual, engaging, and highly effective."
                bgImage="/3d_digital_class_1773388599382.png"
                accentColor="text-indigo-400"
            />

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

            {/* App Promotion & Guide */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter italic">Parent App <br /><span className="text-indigo-200">User Guide</span></h2>
                            <div className="space-y-8">
                                {appGuide.map((item, i) => (
                                    <div key={i} className="flex gap-6 group/item">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-black text-xl border border-white/20 group-hover/item:bg-white group-hover/item:text-indigo-600 transition-all">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black mb-1">{item.step}</h4>
                                            <p className="text-indigo-100 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-6 mt-12">
                                <button className="px-8 py-3.5 bg-white text-indigo-600 font-extrabold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-3">
                                    <Monitor className="w-5 h-5" /> Download App
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20 rotate-6 group-hover:rotate-0 transition-transform duration-700">
                                <div className="aspect-[9/16] bg-slate-900 rounded-[2rem] overflow-hidden border-8 border-slate-800 shadow-2xl">
                                    <div className="p-6">
                                        <div className="w-12 h-12 bg-indigo-500 rounded-full mb-8"></div>
                                        <div className="space-y-4">
                                            <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
                                            <div className="h-4 bg-white/20 rounded-full w-1/2"></div>
                                            <div className="h-32 bg-white/10 rounded-3xl mt-8"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cyber Safety */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <div className="bg-rose-50 rounded-[4rem] p-12 md:p-20 border border-rose-100 flex flex-col md:flex-row items-center gap-16">
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-12 h-12 text-rose-500" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-slate-800 mb-4">A Safe Digital <span className="text-rose-500">Environment</span></h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                            We prioritize student safety. Our Wi-Fi is equipped with enterprise-grade firewalls and filters to ensure students only access educational and age-appropriate content. Regular "Digital Hygiene" workshops are conducted for all grades.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalClassrooms;
