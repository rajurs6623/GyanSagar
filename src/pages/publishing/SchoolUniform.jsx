import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldCheck, Ruler, Scissors, Sparkles,
    CheckCircle2, Info, Star, Clock,
    ArrowRight, Heart, Briefcase, UserCheck, Brain,
    Shirt, ChevronRight, Sparkle
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const SchoolUniform = () => {
    const [selectedGender, setSelectedGender] = useState('Boys');

    const uniformData = {
        'Boys': [
            { item: "Formal Shirt", desc: "White half-sleeved with school monogram on pocket." },
            { item: "Trousers", desc: "Steel grey formal trousers for all classes (1-12)." },
            { item: "Footwear", desc: "Polished black leather shoes with standard laces." },
            { item: "Socks", desc: "White cotton socks with horizontal grey stripes." },
            { item: "Tie & Belt", desc: "Official school pattern tie and leather belt with logo buckle." }
        ],
        'Girls': [
            { item: "Formal Shirt", desc: "White half-sleeved shirt with official school monogram." },
            { item: "Skirt", desc: "Steel grey pleated skirt (available for NC to Class 8)." },
            { item: "Salwar Suit", desc: "Grey salwar with white dupatta for senior girls (9-12)." },
            { item: "Footwear", desc: "Polished black leather shoes with adjustable buckles." },
            { item: "Hair Accessories", desc: "White ribbons or simple hairbands are mandatory." }
        ]
    };

    const winterUniform = [
        "V-neck navy blue sweater with school logo.",
        "Navy blue blazer with school crest (Classes 6-12).",
        "Navy blue woolen cap (optional during peak winter).",
        "Full-sleeved white shirts replacing half-sleeves."
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-['Plus Jakarta Sans'] selection:bg-indigo-100 selection:text-indigo-900">
            <PageHero
                title="Uniform"
                italicTitle="Code"
                tag="Our Collective Pride"
                subtitle="The school uniform is more than just clothing; it is a symbol of unity, discipline, and the Gyan Sagar identity."
                bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600"
                accentColor="text-indigo-400"
            />

            <div className="max-w-7xl mx-auto px-4 -mt-24 pb-24 relative z-50">
                
                {/* --- SELECTION TABS --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center mb-16"
                >
                    <div className="bg-white/70 backdrop-blur-2xl p-2 rounded-[2rem] border border-white shadow-2xl flex gap-2">
                        {['Boys', 'Girls'].map(gender => (
                            <button
                                key={gender}
                                onClick={() => setSelectedGender(gender)}
                                className={`px-12 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all relative ${selectedGender === gender ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <span className="relative z-10">{gender} Section</span>
                                {selectedGender === gender && (
                                    <motion.div layoutId="genderTab" className="absolute inset-0 bg-indigo-600 rounded-full shadow-lg shadow-indigo-200" />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* --- UNIFORM DISPLAY --- */}
                <div className="space-y-12 mb-32">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={selectedGender}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {uniformData[selectedGender].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-12">
                                        <Shirt size={22} />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 mb-2">{item.item}</h4>
                                    <p className="text-slate-500 font-medium text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}

                            {/* Info Card */}
                            <div className="lg:col-span-1 bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-center relative overflow-hidden shadow-xl border border-white/5">
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-20" />
                                 <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                                        <Briefcase size={22} />
                                    </div>
                                    <h4 className="text-xl font-black mb-2">Wednesday Special</h4>
                                    <p className="text-slate-400 text-xs font-medium leading-relaxed">
                                        House Uniform (Red, Blue, Green, or Yellow) paired with white canvas shoes is mandatory for all students on Wednesdays.
                                    </p>
                                 </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- WINTER SECTION --- */}
                <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden mb-32 shadow-2xl">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[150px] -mr-48 -mt-48" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-[150px] -ml-48 -mb-48" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-400 border border-white/10">Winter Season</span>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight">Winter <span className="text-indigo-400 italic">Essentials</span></h2>
                            </div>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed">During the colder months, students must adhere to the winter dress code to maintain uniformity and health.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {winterUniform.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={14} className="text-indigo-400" />
                                        </div>
                                        <p className="text-slate-200 font-bold text-xs leading-tight">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-end pr-10">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />
                                <div className="w-64 h-64 rounded-[3.5rem] bg-gradient-to-br from-indigo-500 to-indigo-700 p-12 flex flex-col justify-center items-center text-center shadow-2xl relative z-10 border border-white/20">
                                    <ShieldCheck size={48} className="text-white mb-4" />
                                    <h4 className="text-xl font-black">Quality Check</h4>
                                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mt-2">Certified Suppliers Only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- ADDITIONAL GUIDELINES --- */}
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                         <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Additional <span className="text-indigo-600 italic">Guidelines</span></h2>
                         <p className="text-slate-500 font-medium">Standards of grooming that every Gyan Sagar student must uphold.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Hair Styling", icon: <Scissors size={24}/>, desc: "Boys: Professional short cut. Girls: Long hair must be braided with school-authorized white ribbons." },
                            { title: "Personal Hygiene", icon: <Sparkle size={24}/>, desc: "Nails must be trimmed and clean. Use of makeup, nail polish, or henna is strictly prohibited." },
                            { title: "Jewelry Rules", icon: <ShieldCheck size={24}/>, desc: "Ornaments, luxury watches, and smart gadgets are not allowed to maintain focus and equality." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center group">
                                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-indigo-600 transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black text-slate-900 mb-4">{item.title}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-amber-50 rounded-[3rem] p-10 md:p-16 border border-amber-100 flex flex-col md:flex-row items-center gap-10 group">
                        <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-rose-500 shadow-xl shadow-amber-200 transition-transform group-hover:rotate-6">
                            <Heart size={36} className="animate-pulse" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Commitment to Tidiness</h4>
                            <p className="text-slate-600 font-medium text-lg leading-relaxed">
                                Students are the ambassadors of Gyan Sagar. We expect every student to arrive in clean, well-ironed uniforms, representing our values of excellence and discipline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolUniform;
