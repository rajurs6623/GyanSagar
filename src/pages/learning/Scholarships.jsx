import React from 'react';
import { motion } from 'framer-motion';
import {
    Trophy, Star, Heart, GraduationCap,
    CheckCircle2, ArrowRight, Zap, Globe,
    Target, Lightbulb, Users, Award, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const Scholarships = () => {
    const rewards = [
        {
            title: "Gyan Ratna Scholarship",
            desc: "For toppers of Class 10 entering our Senior Secondary classes with 90%+ marks.",
            criteria: "90% in Boards",
            benefit: "100% Tuition Waiver",
            icon: <Trophy className="w-10 h-10 text-amber-500" />
        },
        {
            title: "Merit-cum-Means",
            desc: "Financial support for brilliant students from economically weaker backgrounds.",
            criteria: "Merit + Income Proof",
            benefit: "50% Fee Subsidy",
            icon: <Heart className="w-10 h-10 text-rose-500" />
        },
        {
            title: "Sports Excellence",
            desc: "Awarded to students representing the state or nation in recognized sports.",
            criteria: "State/National Level",
            benefit: "Registration Waiver",
            icon: <Award className="w-10 h-10 text-emerald-500" />
        },
        {
            title: "Founder's Award",
            desc: "Annual award for the best all-rounder of the school in Class 12.",
            criteria: "All-round Performance",
            benefit: "Cash Prize + Trophy",
            icon: <Star className="w-10 h-10 text-indigo-500" />
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20 font-['Nunito']">
            <PageHero
                title="Rewarding"
                italicTitle="Excellence"
                tag="Scholarship Hub"
                subtitle="Empowering brilliant minds with the support they need to pursue their academic dreams without boundaries."
                bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
                accentColor="text-indigo-400"
            />

            {/* Reward Cards */}
            <div className="max-w-7xl mx-auto px-4 mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
                {rewards.map((rew, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="p-12 rounded-[4rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center gap-10 group hover:bg-white hover:shadow-3xl hover:shadow-slate-100 transition-all"
                    >
                        <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                            {rew.icon}
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">{rew.title}</h3>
                            <p className="text-slate-500 font-medium mb-6 leading-relaxed">{rew.desc}</p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-5 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">{rew.criteria}</span>
                                <span className="px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">{rew.benefit}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Achievement Timeline / Wall */}
            <div className="max-w-7xl mx-auto px-4 mb-32 text-center">
                <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter">Wall of <span className="text-indigo-600 italic">Pride</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { name: "Priya Sharma", class: "Class 10", remark: "State Topper 2023", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
                        { name: "Rahul Verma", class: "Class 12", remark: "IIT-JEE Advanced AIR 452", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
                        { name: "Anjali Kumari", class: "Class 8", remark: "National Dance Gold", img: "https://images.unsplash.com/photo-1523050335102-c3251c17b384?auto=format&fit=crop&q=80&w=200" },
                        { name: "Vikram Raj", class: "Class 11", remark: "International Math Olympiad", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200" }
                    ].map((st, i) => (
                        <div key={i} className="group">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-[3rem] overflow-hidden mx-auto mb-6 border-4 border-slate-100 group-hover:border-indigo-600 transition-all p-2">
                                <img src={st.img} className="w-full h-full object-cover rounded-[2.5rem]" alt={st.name} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-1">{st.name}</h4>
                            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-2">{st.class}</p>
                            <p className="text-indigo-600 font-black text-xs italic">{st.remark}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Application Banner */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none opacity-20"></div>
                    <div className="relative z-10">
                        <Target className="w-16 h-16 text-indigo-400 mx-auto mb-10" />
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Ready to <span className="text-indigo-400 underline decoration-indigo-400 decoration-8 underline-offset-8">Achieve?</span></h2>
                        <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                            Scholarship applications for the session 2025-26 are now open.
                            Download the form and submit it with your documents.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-3xl hover:bg-slate-900 transition-all">Download Form</button>
                            <button className="px-12 py-5 border-2 border-slate-700 text-white font-black rounded-2xl hover:border-white transition-all">Scholarship Guide</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scholarships;
