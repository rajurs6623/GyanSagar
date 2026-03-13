import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Award, Star, GraduationCap, ArrowUpRight, 
    Sparkles, Globe, Trophy, X, Heart, 
    Target, Medal, Zap, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TOPPERS_DATA = [
    {
        id: "t1",
        name: "Aryan Raj",
        class: "Class XII (Science)",
        achievement: "Distinction in JEE Mains",
        rank: "99.8 Percentile",
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400",
        message: "The teachers at Gyan Sagar guided me at every step. The practical labs were my second home.",
        subjects: ["Physics: 98", "Chemistry: 96", "Math: 99"],
        badge: "Academic Star",
        color: "from-blue-500/10 to-indigo-600/10",
        stats: { attendence: "98%", score: "97.6%" }
    },
    {
        id: "t2",
        name: "Ananya Sharma",
        class: "Class X",
        achievement: "State Level Debate Winner",
        rank: "Gold Medalist",
        img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400",
        message: "Participating in MUN and debate competitions helped me find my voice and confidence.",
        subjects: ["English: 99", "SST: 98", "Science: 95"],
        badge: "Public Speaker",
        color: "from-pink-500/10 to-rose-600/10",
        stats: { attendence: "95%", score: "96.4%" }
    },
    {
        id: "t3",
        name: "Rohit Singh",
        class: "Class XII (Commerce)",
        achievement: "CA Foundation Cleared",
        rank: "All India Rank 420",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
        message: "The commerce wing's focus on real-world concepts made the foundation exam look easy.",
        subjects: ["Accountancy: 100", "Economics: 98", "BST: 96"],
        badge: "Future CA",
        color: "from-emerald-500/10 to-teal-600/10",
        stats: { attendence: "99%", score: "98.2%" }
    },
    {
        id: "t4",
        name: "Sanya Gupta",
        class: "Class VIII",
        achievement: "National Science Olympiad",
        rank: "Zonal Rank 1",
        img: "https://images.unsplash.com/photo-1491013516836-7dbf43897474?auto=format&fit=crop&q=80&w=400",
        message: "I love exploring the 'why' behind everything. Our science club is where I belong.",
        subjects: ["Science: 100", "Math: 98", "History: 92"],
        badge: "Young Scientist",
        color: "from-amber-500/10 to-orange-600/10",
        stats: { attendence: "97%", score: "95.8%" }
    }
];

const TopperCard = ({ topper, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
            className="group relative flex flex-col bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden cursor-pointer"
            onClick={() => onClick(topper)}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${topper.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                    src={topper.img}
                    alt={topper.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {topper.badge}
                    </span>
                </div>
            </div>

            <div className="relative p-6 space-y-3">
                <h3 className="text-2xl font-black text-slate-800">{topper.name}</h3>
                <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">{topper.class}</p>
                <p className="text-slate-500 font-medium text-sm line-clamp-2 leading-relaxed italic">
                    "{topper.message}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        <p className="text-[10px] font-black text-slate-700 uppercase">{topper.rank}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-emerald-500" />
                        <p className="text-[10px] font-black text-slate-700 uppercase">{topper.stats.score}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const TopperDetailModal = ({ topper, isOpen, onClose }) => {
    if (!isOpen || !topper) return null;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-900/60 z-[999] flex items-center justify-center p-4 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    className="bg-white rounded-[3rem] p-8 md:p-12 max-w-4xl w-full relative shadow-3xl flex flex-col md:flex-row gap-12"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 z-10">
                        <X className="w-8 h-8" />
                    </button>
                    
                    <div className="w-full md:w-2/5">
                        <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
                             <img src={topper.img} alt={topper.name} className="w-full h-auto aspect-[3/4] object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />
                             <div className="absolute bottom-6 left-6 text-white">
                                 <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Achievement</p>
                                 <h4 className="text-xl font-black">{topper.achievement}</h4>
                             </div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-3/5 flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full">{topper.badge}</span>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter">{topper.name}</h3>
                            <p className="text-lg font-bold text-slate-400 uppercase tracking-wider mt-1">{topper.class}</p>
                        </div>
                        
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 italic font-medium text-slate-600 mb-8 relative">
                            <Quote className="absolute -top-3 -left-3 w-8 h-8 text-indigo-200" />
                            {topper.message}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {topper.subjects.map((sub, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-2xl font-black text-indigo-600">{sub.split(': ')[1]}</p>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{sub.split(': ')[0]}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex gap-4">
                            <button className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100">
                                Send Congratulations
                            </button>
                            <button className="px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-all">
                                See Full Profile
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const StudentToppers = () => {
    const [selectedTopper, setSelectedTopper] = useState(null);

    return (
        <div className="min-h-screen bg-white font-['Nunito']">
            <TopperDetailModal
                topper={selectedTopper}
                isOpen={!!selectedTopper}
                onClose={() => setSelectedTopper(null)}
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523050335102-c3251c17b384?auto=format&fit=crop&q=80&w=1200"
                        alt="Graduation"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-transparent to-slate-900" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/20 rounded-full text-indigo-400 text-xs font-black uppercase tracking-[0.3em] mb-8 border border-white/5">
                            <Medal className="w-4 h-4" /> Academic Excellence
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">
                            Student <span className="text-indigo-500">Toppers</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-slate-400 text-xl font-medium leading-relaxed">
                            Celebrating the bright minds who have made Gyan Sagar Public School 
                            proud with their exceptional performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Hall of Fame Ticker */}
            <section className="py-12 bg-indigo-600 overflow-hidden relative z-20 shadow-2xl">
                <div className="flex animate-marquee whitespace-nowrap gap-16">
                    {[
                        "100% BOARD RESULTS 2023", "50+ JEE QUALIFIED", "STATE DEBATE CHAMPIONS", "NATIONAL OLYMPIAD GOLD",
                        "100% BOARD RESULTS 2023", "50+ JEE QUALIFIED", "STATE DEBATE CHAMPIONS", "NATIONAL OLYMPIAD GOLD"
                    ].map((text, i) => (
                        <span key={i} className="text-3xl font-black text-white/20 uppercase tracking-widest italic">
                            {text}
                        </span>
                    ))}
                </div>
            </section>

            {/* Featured Topper Spotlight */}
            <section className="py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16 bg-slate-50 rounded-[4rem] p-12 md:p-24 border border-slate-100 shadow-2xl shadow-indigo-100/20">
                        <div className="lg:w-1/2">
                            <motion.div 
                                initial={{ x: -30, opacity: 0 }} 
                                whileInView={{ x: 0, opacity: 1 }} 
                                className="space-y-8"
                            >
                                <div className="inline-flex items-center gap-3">
                                    <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center shadow-xl">
                                        <Trophy className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">State Topper Spotlight</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                                    Inspiring <br /><span className="text-indigo-600">Success</span>
                                </h2>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed italic border-l-4 border-indigo-500 pl-8">
                                    "Aryan Raj's journey from Class NC to becoming one of the top percentilers in JEE is a testament to the consistency and quality of education at Gyan Sagar."
                                </p>
                                <div className="flex flex-wrap gap-8 py-8 border-y border-slate-200">
                                    <div>
                                        <p className="text-3xl font-black text-slate-900">97.6%</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Board Aggregate</p>
                                    </div>
                                    <div className="w-px h-12 bg-slate-200" />
                                    <div>
                                        <p className="text-3xl font-black text-indigo-600">AIR 420</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Competitive Rank</p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedTopper(TOPPERS_DATA[0])} className="px-12 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-xl hover:bg-indigo-600 transition-all flex items-center gap-3">
                                    View Full Story <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2">
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }} 
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-indigo-500/20 rounded-[3rem] blur-3xl transform rotate-6"></div>
                                <img 
                                    src={TOPPERS_DATA[0].img} 
                                    className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] border-8 border-white shadow-2xl transform transition-transform group-hover:scale-[1.02]" 
                                    alt="Topper" 
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-slate-50">
                                     <Quote className="w-8 h-8 text-indigo-400 mb-2" />
                                     <p className="text-slate-600 font-bold italic text-sm">"Success is a habit, <br />earned daily."</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toppers Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">Board <span className="text-indigo-600">Champions</span></h2>
                            <p className="text-slate-500 font-medium text-lg mt-2">Class X & XII Board Toppers Session 2023-24</p>
                        </div>
                        <div className="flex gap-4">
                             <div className="flex -space-x-4">
                                 {[1,2,3,4].map(i => (
                                     <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} alt="" />
                                     </div>
                                 ))}
                                 <div className="w-12 h-12 rounded-full border-4 border-white bg-indigo-600 flex items-center justify-center text-white text-xs font-black shadow-lg">
                                     +20
                                 </div>
                             </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TOPPERS_DATA.map((topper, idx) => (
                            <TopperCard key={topper.id} topper={topper} index={idx} onClick={setSelectedTopper} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA: Guidance */}
            <section className="py-32 px-4 max-w-7xl mx-auto">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <GraduationCap className="w-16 h-16 text-indigo-400 mx-auto mb-10" />
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Your Success <br />Starts Here</h2>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            Join the ranks of achievers. Our specialized board exam workshops 
                            and career counseling help you unlock your full potential.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                             <button className="px-12 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-amber-400 transition-all shadow-xl">
                                 View Study Material
                             </button>
                             <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-2xl hover:bg-white/20 transition-all">
                                 Counseling Desk
                             </button>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
                </div>
            </section>
        </div>
    );
};

export default StudentToppers;
