import React from 'react';
import { motion } from 'framer-motion';
import { 
    BookOpen, Video, FileText, 
    Monitor, Users, ArrowRight,
    Search, Download, PlayCircle,
    Star, Heart, Trophy
} from 'lucide-react';

const ELearningPortal = () => {
    const categories = [
        { title: "Video Lectures", count: "120+ Hrs", icon: <PlayCircle className="w-8 h-8" />, color: "bg-indigo-600" },
        { title: "E-Books & PDFs", count: "500+ Files", icon: <BookOpen className="w-8 h-8" />, color: "bg-emerald-600" },
        { title: "Topic Wise Quizzes", count: "1000+ Questions", icon: <Trophy className="w-8 h-8" />, color: "bg-amber-500" },
        { title: "Past Exam Papers", count: "10 Years", icon: <FileText className="w-8 h-8" />, color: "bg-rose-600" }
    ];

    const topResources = [
        { title: "CBSE Class 10 Math Solutions", type: "PDF", size: "4.2 MB", thumb: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=200" },
        { title: "Basics of Organic Chemistry", type: "Video", duration: "45 Mins", thumb: "https://images.unsplash.com/photo-1532187878486-d6590d240683?auto=format&fit=crop&q=80&w=200" },
        { title: "English Grammar Mastery", type: "Interactive", modules: "12 Parts", thumb: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=200" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-['Nunito']">
            {/* E-Portal Hero */}
            <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-12"
                >
                    <Monitor className="w-4 h-4" /> Infinite Learning Resource
                </motion.div>
                <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter">
                    E-Learning <br /><span className="text-indigo-600 italic">Portal</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                    Exclusive educational content for Gyan Sagar students. Access your lessons, 
                    resources, and assessments anytime, anywhere.
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mt-16 relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300" />
                    <input 
                        type="text" 
                        placeholder="Search for subjects, topics, or resources..." 
                        className="w-full h-20 bg-white rounded-3xl px-16 text-lg font-bold text-slate-700 shadow-2xl shadow-indigo-100 border border-slate-100 focus:outline-none focus:border-indigo-400 transition-all"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 px-8 py-3 bg-indigo-600 text-white font-black rounded-2xl">Find</button>
                </div>
            </div>

            {/* Feature Categories */}
            <div className="max-w-7xl mx-auto px-4 mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl group"
                    >
                        <div className={`w-16 h-16 ${cat.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                            {cat.icon}
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">{cat.title}</h3>
                        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{cat.count}</p>
                    </motion.div>
                ))}
            </div>

            {/* Top Trending Resources */}
            <div className="max-w-7xl mx-auto px-4">
                 <div className="flex justify-between items-end mb-12">
                     <div>
                         <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Popular Resources</h2>
                         <p className="text-slate-500 font-medium">Frequently accessed by students this week.</p>
                     </div>
                     <button className="text-indigo-600 font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">View All <ArrowRight className="w-4 h-4" /></button>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {topResources.map((res, i) => (
                         <div key={i} className="bg-white rounded-[3rem] p-6 border border-slate-100 shadow-lg group">
                             <div className="h-48 rounded-[2rem] overflow-hidden mb-6">
                                 <img src={res.thumb} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={res.title} />
                             </div>
                             <h4 className="text-xl font-black text-slate-800 mb-6 px-2">{res.title}</h4>
                             <div className="flex items-center justify-between px-2">
                                 <div className="flex flex-col">
                                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{res.type}</span>
                                     <span className="text-sm font-bold text-slate-600">{res.size || res.duration || res.modules}</span>
                                 </div>
                                 <button className="w-12 h-12 bg-slate-50 rounded-2xl text-slate-300 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center">
                                     <Download className="w-5 h-5" />
                                 </button>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>

            {/* Portal Stats / Footer Area */}
            <div className="max-w-7xl mx-auto px-4 mt-32">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Login to your <br /><span className="text-indigo-400 italic">Student Account</span></h3>
                        <p className="text-slate-400 text-lg font-medium max-w-md mb-10 leading-relaxed">
                            Use your S-ID and password provided by the school office to 
                            access personalized dashboards and test results.
                        </p>
                        <button className="px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl hover:bg-white hover:text-slate-900 transition-all">Go to Dashboard</button>
                    </div>
                    <div className="relative z-10 hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" className="w-80 h-96 object-cover rounded-[3rem] rotate-3 border-4 border-white/10" alt="Student Portal" />
                    </div>
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                </div>
            </div>
        </div>
    );
};

export default ELearningPortal;
