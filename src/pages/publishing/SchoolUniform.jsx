import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ShieldCheck, Ruler, Scissors, Sparkles, 
    CheckCircle2, Info, Star, Clock, 
    ArrowRight, Heart, Briefcase, UserCheck, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const SchoolUniform = () => {
    const [selectedGender, setSelectedGender] = useState('Boys');

    const uniformData = {
        'Boys': [
            { item: "Shirt", desc: "White half-sleeved with school monogram on pocket." },
            { item: "Trousers", desc: "Steel grey trousers (Classes 1-12)." },
            { item: "Shoes", desc: "Black leather shoes with laces." },
            { item: "Socks", desc: "White socks with grey stripes." },
            { item: "Tie & Belt", desc: "School pattern tie and belt with logo." }
        ],
        'Girls': [
            { item: "Shirt", desc: "White half-sleeved with school monogram." },
            { item: "Skirt", desc: "Steel grey pleated skirt (upto Class 8)." },
            { item: "Salwar Suit", desc: "Grey salwar with white dupatta (Class 9-12)." },
            { item: "Shoes", desc: "Black leather shoes with buckles." },
            { item: "Ribbons", desc: "White ribbons or hairbands." }
        ]
    };

    const winterUniform = [
        "V-neck navy blue sweater with school logo.",
        "Navy blue blazer with school crest (Classes 6-12).",
        "Navy blue woolen cap (optional).",
        "Full-sleeved white shirts."
    ];

    return (
        <div className="min-h-screen bg-white pb-20 font-['Nunito']">
            <PageHero 
                title="Uniform"
                italicTitle="Code"
                tag="Identity & Discipline"
                subtitle="A uniform creates a sense of belonging and equality. Our dress code identifies a student as a member of the Gyan Sagar community."
                bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600"
                accentColor="text-indigo-400"
            />

            {/* Switcher & Display */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {['Boys', 'Girls'].map(gender => (
                        <button
                            key={gender}
                            onClick={() => setSelectedGender(gender)}
                            className={`px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all ${selectedGender === gender ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-105' : 'bg-slate-50 text-slate-400 hover:text-slate-600'}`}
                        >
                            {gender} Section
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-12">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={selectedGender}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white rounded-[4rem] border border-slate-100 shadow-2xl p-12 md:p-20 relative overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                                    {uniformData[selectedGender].map((item, i) => (
                                        <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all">
                                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                                <Star className="w-5 h-5 fill-current" />
                                            </div>
                                            <h4 className="text-xl font-black text-slate-900 mb-2">{item.item}</h4>
                                            <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                    
                                    <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col items-center justify-center text-center">
                                        <Briefcase className="w-10 h-10 text-indigo-400 mb-4" />
                                        <h4 className="text-lg font-black mb-2">Wednesday Special</h4>
                                        <p className="text-slate-400 text-xs">House Uniform (Red, Blue, Green, Yellow) with white canvas shoes.</p>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Winter Uniform */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative z-10">
                        <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-10 border border-white/20"
                        >
                            <ShieldCheck className="w-8 h-8 text-indigo-400" />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Winter <br /><span className="text-indigo-400">Essentials</span></h2>
                        <div className="space-y-6">
                            {winterUniform.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-slate-300 font-bold">
                                    <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[120px]"></div>
                        <div className="relative grid grid-cols-2 gap-6 scale-90 md:scale-100">
                           <div className="w-48 h-64 bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-md flex flex-col justify-center transform -rotate-6">
                               <h4 className="text-4xl font-black text-indigo-400">01</h4>
                               <p className="text-slate-300 font-bold mt-4">Tidiness First</p>
                           </div>
                           <div className="w-48 h-64 bg-indigo-600 rounded-[3rem] p-8 shadow-2xl flex flex-col justify-center translate-y-8 rotate-6">
                               <h4 className="text-4xl font-black text-white">02</h4>
                               <p className="text-indigo-100 font-bold mt-4">Personal Grooming</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* General Instructions */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Hair Style", icon: <Scissors className="w-8 h-8" />, desc: "Boys must keep short hair. Girls with long hair should have two braids with white ribbons." },
                        { title: "Nail Care", icon: <Star className="w-8 h-8" />, desc: "Nails should be trimmed regularly. Use of nail polish or henna is strictly prohibited." },
                        { title: "Accessories", icon: <Info className="w-8 h-8" />, desc: "Gold ornaments, wristwatches (upto Class 8), and expensive gadgets are not allowed." }
                    ].map((item, i) => (
                        <div key={i} className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-2xl transition-all cursor-default group">
                            <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-indigo-600 mx-auto mb-8 shadow-sm group-hover:-rotate-12 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-amber-50 rounded-[4rem] border border-amber-100 text-center relative overflow-hidden">
                    <Heart className="w-12 h-12 text-rose-500 mx-auto mb-8 animate-pulse" />
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Cleanliness is Next to Godliness</h3>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                        Students are expected to come to school in clean, well-ironed uniforms. 
                        Tattered or stained clothes reflecting poor grooming will not be permitted.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SchoolUniform;
