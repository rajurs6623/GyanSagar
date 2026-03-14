import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen, Sparkles, Pencil, Palette,
    Music, Trophy, Star, Heart,
    Smile, Sun, Cloud, ChevronRight,
    Gamepad2, Microscope, UserPlus, Zap
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const PrimaryClasses = () => {
    const wings = [
        {
            title: "Foundation (NC to KG)",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da07bb5e?auto=format&fit=crop&q=80&w=800",
            desc: "Focusing on sensory learning, play-way methods, and basic motor skills development.",
            features: ["Storytelling Sessions", "Clay Modeling", "Phonics", "Nature Walks"]
        },
        {
            title: "Primary (1st to 5th)",
            img: "https://images.unsplash.com/photo-1544648397-52ee3bf8224d?auto=format&fit=crop&q=80&w=800",
            desc: "Critical thinking, language mastery, and basic mathematical concepts are introduced.",
            features: ["Concept Math", "Language Lab", "EVS Projects", "Creative Arts"]
        }
    ];

    const curriculumPillars = [
        {
            title: "Conceptual Clarity",
            desc: "We prioritize understanding over rote learning. Every topic is taught through practical examples.",
            icon: <Zap className="w-10 h-10 text-amber-500" />,
            color: "bg-amber-50"
        },
        {
            title: "Character Building",
            desc: "Regular value education classes to instill integrity, respect, and social responsibility.",
            icon: <Heart className="w-10 h-10 text-rose-500" />,
            color: "bg-rose-50"
        },
        {
            title: "Digital Integration",
            desc: "Interactive smart boards in every classroom for visual and engaging learning experiences.",
            icon: <Gamepad2 className="w-10 h-10 text-indigo-500" />,
            color: "bg-indigo-50"
        },
        {
            title: "Skill Based",
            desc: "Workshops on public speaking, art, and music to nurture hobbies alongside academics.",
            icon: <Palette className="w-10 h-10 text-emerald-500" />,
            color: "bg-emerald-50"
        }
    ];

    const [activeWing, setActiveWing] = useState(0);

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito'] overflow-hidden">
            {/* Premium Hero Section */}
            <PageHero
                title="Building"
                italicTitle="Foundations"
                tag="NC to Class 5"
                subtitle="Nurturing curiosity and character to ignite a lifelong love for learning in every child."
                bgImage="/3d_junior_wing_1773388498083.png"
                accentColor="text-amber-500"
            />

            {/* Curriculum Wings - Interactive Split */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col md:flex-row gap-8 min-h-[500px]">
                    {wings.map((wing, idx) => (
                        <motion.div
                            key={idx}
                            layout
                            onClick={() => setActiveWing(idx)}
                            className={`relative rounded-[4rem] overflow-hidden cursor-pointer transition-all duration-700 flex flex-col justify-end p-12 ${activeWing === idx ? 'flex-[2.5] bg-slate-900' : 'flex-1 bg-slate-100 hover:bg-slate-200'}`}
                        >
                            <div className="absolute inset-0 z-0">
                                <img src={wing.img} alt={wing.title} className={`w-full h-full object-cover transition-all duration-700 ${activeWing === idx ? 'opacity-40 scale-110' : 'opacity-20 grayscale group-hover:opacity-40'}`} />
                                <div className={`absolute inset-0 bg-gradient-to-t ${activeWing === idx ? 'from-slate-900 via-slate-900/60' : 'from-slate-200/40'} to-transparent`}></div>
                            </div>

                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <h3 className={`text-3xl md:text-5xl font-black ${activeWing === idx ? 'text-white' : 'text-slate-400 rotate-90 md:rotate-0 origin-left whitespace-nowrap'}`}>{wing.title}</h3>

                                <AnimatePresence>
                                    {activeWing === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-6 max-w-xl"
                                        >
                                            <p className="text-white/80 text-xl font-medium leading-relaxed">
                                                {wing.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                {wing.features.map(feat => (
                                                    <span key={feat} className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-black text-white border border-white/20">
                                                        {feat}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Pillars Grid */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Our Core <span className="text-indigo-600">Philosophy</span></h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed italic border-l-4 border-indigo-200 pl-8">
                        "Children must be taught how to think, not what to think." — At Gyan Sagar, we live by this principle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {curriculumPillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -15 }}
                            className={`${pillar.color} p-10 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/20 group cursor-default`}
                        >
                            <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                {pillar.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{pillar.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Key Focus Areas */}
            <section className="max-w-7xl mx-auto px-4 py-24 border-t border-slate-100">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Key Focus Areas</h2>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Providing a holistic foundation that balances academics, physical health, and moral values for primary students.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {['Language & Literacy', 'Numeracy & Logic', 'Environmental Awareness', 'Physical Education', 'Arts & Crafts', 'Moral Science'].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center gap-6 hover:shadow-xl transition-all cursor-default group">
                            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <span className="font-black text-xl">0{idx + 1}</span>
                            </div>
                            <h4 className="text-xl font-black text-slate-800">{item}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Fun & Games Banner */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="bg-emerald-500 rounded-[5rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="flex-1 text-white relative z-10">
                        <Smile className="w-20 h-20 text-indigo-900 mb-8 animate-bounce-slow" />
                        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic">Beyond the <br /><span className="text-indigo-900">Textbooks</span></h2>
                        <p className="text-emerald-50 text-xl font-medium max-w-xl leading-relaxed mb-12">
                            From theater workshops to yoga sessions, we ensure your child's first school experience
                            is filled with joy, creativity, and discovery.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20">
                                    <Palette className="w-6 h-6" />
                                </div>
                                <span className="font-black text-sm uppercase tracking-widest">Art Therapy</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20">
                                    <Music className="w-6 h-6" />
                                </div>
                                <span className="font-black text-sm uppercase tracking-widest">Music Lab</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full flex justify-center scale-90 md:scale-100">
                        <div className="relative">
                            <div className="absolute -inset-10 bg-white rounded-full blur-[100px] opacity-20"></div>
                            <div className="relative p-6 bg-white rounded-[4rem] shadow-3xl rotate-3">
                                <img
                                    src="https://images.unsplash.com/photo-1544648397-52ee3bf8224d?auto=format&fit=crop&q=80&w=600"
                                    alt="Activity"
                                    className="w-80 h-96 object-cover rounded-[3rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parent Feedback */}
            <section className="max-w-7xl mx-auto px-4 py-24 text-center">
                <h2 className="text-3xl font-black text-slate-400 uppercase tracking-widest mb-16">Trusted by Patna Parents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-slate-50 p-12 rounded-[3.5rem] text-left border border-slate-100 flex gap-8 group hover:bg-white hover:shadow-2xl transition-all">
                        <div className="w-16 h-16 bg-white rounded-full border-4 border-emerald-500 overflow-hidden shrink-0 shadow-lg">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-xl text-slate-600 font-medium italic mb-6 leading-relaxed">
                                "The personal attention my son gets in KG is amazing. He loves going
                                to school every day and has already started reading basic words!"
                            </p>
                            <h4 className="text-lg font-black text-slate-900">- Mrs. Sneha Rai, Patna</h4>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-12 rounded-[3.5rem] text-left border border-slate-100 flex gap-8 group hover:bg-white hover:shadow-2xl transition-all">
                        <div className="w-16 h-16 bg-white rounded-full border-4 border-indigo-500 overflow-hidden shrink-0 shadow-lg">
                            <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-xl text-slate-600 font-medium italic mb-6 leading-relaxed">
                                "I was worried about my daughter's transition to 1st standard, but
                                the teachers made it so smooth. The science lab is her favorite place."
                            </p>
                            <h4 className="text-lg font-black text-slate-900">- Mr. Alok Jha, Patna</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions Banner */}
            <section className="max-w-5xl mx-auto px-4 pt-12">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none opacity-20"></div>
                    <div className="relative z-10">
                        <UserPlus className="w-20 h-20 text-indigo-400 mx-auto mb-10" />
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter italic leading-none">Your Child's Journey <br /><span className="text-indigo-400 underline decoration-indigo-400 decoration-8 underline-offset-[16px]">Starts Here</span></h2>
                        <p className="text-slate-400 text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                            Admissions for Primary Classes (NC to 5th) are open. Schedule a visit to
                            explore our kid-friendly campus today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-3xl hover:bg-indigo-700 transition-all">Download Brochure</button>
                            <button className="px-12 py-5 border-2 border-slate-700 hover:border-white text-white font-black rounded-2xl transition-all">Vist Campus</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrimaryClasses;
