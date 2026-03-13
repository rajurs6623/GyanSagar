import React from 'react';
import { motion } from 'framer-motion';
import { 
    Trophy, Music, Palette, Users, 
    Star, Heart, Zap, Globe,
    Compass, Camera, Gamepad2, Mic2
} from 'lucide-react';

const CoCurricular = () => {
    const activities = [
        {
            title: "Sports & Athletics",
            desc: "From Cricket to Basketball, we provide professional coaching and state-of-the-art courts.",
            icon: <Trophy className="w-10 h-10 text-amber-500" />,
            image: "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=600",
            stats: "20+ Sports"
        },
        {
            title: "Music & Dance",
            desc: "Nurturing rhythm and expression through Indian classical and western contemporary forms.",
            icon: <Music className="w-10 h-10 text-rose-500" />,
            image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600",
            stats: "Live Studio"
        },
        {
            title: "Visual Arts",
            desc: "Painting, sculpture, and digital art studios where imagination takes physical form.",
            icon: <Palette className="w-10 h-10 text-emerald-500" />,
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600",
            stats: "Art Gallery"
        },
        {
            title: "Debate & Drama",
            desc: "Building confidence and public speaking skills through theater and regular MUNs.",
            icon: <Mic2 className="w-10 h-10 text-indigo-500" />,
            image: "https://images.unsplash.com/photo-1503676260728-1c00da07bb5e?auto=format&fit=crop&q=80&w=600",
            stats: "Theater Group"
        }
    ];

    const houses = [
        { name: "Red House", motto: "Strength & Courage", color: "bg-rose-500" },
        { name: "Blue House", motto: "Wisdom & Peace", color: "bg-indigo-500" },
        { name: "Green House", motto: "Growth & Prosperity", color: "bg-emerald-500" },
        { name: "Yellow House", motto: "Joy & Knowledge", color: "bg-amber-500" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito']">
            {/* ─── CO-CURRICULAR HERO ─── */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 text-white text-center overflow-hidden mb-20">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/3d_co_curricular_1773388614135.png" 
                        alt="Co-Curricular Background" 
                        className="w-full h-full object-cover grayscale-[10%]"
                    />
                    <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-slate-50" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-amber-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6"
                    >
                        Beyond the Classroom
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl md:text-[6rem] font-bold tracking-tight mb-8"
                    >
                        Co-Curricular <span className="font-serif italic text-amber-500 font-normal">& Sports</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-white/90 font-medium italic max-w-2xl leading-relaxed mb-16"
                    >
                        "Because holistic development means discovering talent that goes far beyond academic excellence."
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
                        className="flex flex-col items-center gap-3 mt-10"
                    >
                        <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Scroll to explore</span>
                        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500 to-transparent" />
                    </motion.div>
                </div>
            </section>

            {/* Activities Grid */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {activities.map((act, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -15 }}
                            className="bg-white rounded-[3rem] p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 group cursor-default"
                        >
                            <div className="relative h-64 rounded-[2.5rem] overflow-hidden mb-8">
                                <img src={act.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={act.title} />
                                <div className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-white font-black text-[10px] uppercase tracking-widest">
                                    {act.stats}
                                </div>
                            </div>
                            <div className="px-6 pb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    {act.icon}
                                    <h3 className="text-xl font-black text-slate-900">{act.title}</h3>
                                </div>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {act.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* House System */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                 <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
                     <div className="relative z-10">
                         <div className="text-center mb-20">
                             <Users className="w-16 h-16 text-indigo-400 mx-auto mb-8" />
                             <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">The House <span className="text-indigo-400">System</span></h2>
                             <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">
                                 Instilling healthy competition, team spirit, and leadership 
                                 through our four distinct school houses.
                             </p>
                         </div>
                         
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                             {houses.map((house, i) => (
                                 <motion.div
                                     key={i}
                                     whileHover={{ y: -10 }}
                                     className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] text-center"
                                 >
                                     <div className={`w-16 h-16 ${house.color} rounded-2xl mx-auto mb-6 shadow-2xl border-4 border-white/20`}></div>
                                     <h4 className="text-2xl font-black mb-2">{house.name}</h4>
                                     <p className="text-slate-400 text-xs font-bold italic">"{house.motto}"</p>
                                 </motion.div>
                             ))}
                         </div>
                     </div>
                     {/* Decoration */}
                     <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
                 </div>
            </div>

            {/* Clubs & Societies */}
            <div className="max-w-7xl mx-auto px-4">
                 <div className="flex flex-col lg:flex-row gap-20 items-center">
                     <div className="lg:w-1/2">
                         <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Clubs & <br /><span className="text-indigo-600 italic">Societies</span></h2>
                         <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                             Diverse interest groups that allow students to explore hobbies, 
                             build networks, and develop niche skills outside their curriculum.
                         </p>
                         <div className="grid grid-cols-2 gap-4">
                             {['Eco Club', 'Literary Club', 'Heritage Club', 'Interact Club'].map(club => (
                                 <div key={club} className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                     <Zap className="w-5 h-5 text-amber-500" />
                                     <span className="font-black text-slate-700">{club}</span>
                                 </div>
                             ))}
                         </div>
                     </div>
                     <div className="lg:w-1/2">
                         <div className="relative">
                             <div className="absolute -inset-10 bg-indigo-100 rounded-full blur-[100px] opacity-50"></div>
                             <div className="relative bg-white p-6 rounded-[4rem] shadow-3xl rotate-3">
                                 <img 
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                                    alt="Club Activity" 
                                    className="w-full h-[500px] object-cover rounded-[3rem]"
                                 />
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default CoCurricular;
