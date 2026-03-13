import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star, MapPin, Users, Heart, BookOpen, UserPlus, Share2,
    TrendingUp, Award, DollarSign, PenTool, Image as ImageIcon,
    ChevronRight, MessageSquare, ShoppingCart, Activity,
    Eye, Download, Layout, Sparkles, Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const ProfileDetail = () => {
    const [activeTab, setActiveTab] = useState("published");

    const authorData = {
        name: "Aisha Rahman",
        username: "@aisha_writes",
        bio: "Award-winning young novelist exploring the intersection of Vedic mythology and futuristic sci-fi. Dreaming of worlds where ancient wisdom guides the stars.",
        location: "Mumbai, India",
        age: 14,
        school: "Springdale International Acad.",
        joinedDate: "March 2024",
        stats: {
            books: 12,
            followers: "2.4K",
            avgRating: 4.9,
            totalReads: "45K",
            totalSales: "₹12,450",
            storyPoints: 850
        },
        badges: [
            { id: 1, name: "Bestseller", icon: <Award className="w-4 h-4" />, color: "bg-amber-500" },
            { id: 2, name: "Fast Writer", icon: <Activity className="w-4 h-4" />, color: "bg-blue-500" },
            { id: 3, name: "Community Star", icon: <Star className="w-4 h-4" />, color: "bg-purple-500" }
        ]
    };

    const publishedBooks = [
        { id: 1, title: "The Hidden Magic", genre: "Fantasy", rating: 4.9, readers: "12K", price: "₹250", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80", sales: 142 },
        { id: 2, title: "A Journey Beyond", genre: "Sci-Fi", rating: 4.7, readers: "8.5K", price: "₹200", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80", sales: 98 },
        { id: 3, title: "Whispers of Wind", genre: "Poetry", rating: 5.0, readers: "5.2K", price: "₹300", cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=400&q=80", sales: 56 },
    ];

    const currentDrafts = [
        { id: 4, title: "The Galactic Monk", progress: 75, lastEdited: "2 hours ago", wordCount: "12,400" },
        { id: 5, title: "Monsoon Secrets", progress: 30, lastEdited: "Yesterday", wordCount: "4,600" },
    ];

    const readerReviews = [
        { id: 1, user: "Kabir Verma", rating: 5, comment: "Absolutely breathtaking world-building! Aisha's perspective on mythology is unique.", book: "The Hidden Magic", date: "2 days ago", avatar: "KV" },
        { id: 2, user: "Ananya Iyer", rating: 4, comment: "The pacing in 'A Journey Beyond' is incredible. Can't wait for the sequel!", book: "A Journey Beyond", date: "1 week ago", avatar: "AI" },
        { id: 3, user: "Rohan Malhotra", rating: 5, comment: "A masterpiece of modern poetry. Every word feels intentional.", book: "Whispers of Wind", date: "3 weeks ago", avatar: "RM" },
    ];

    return (
        <div className="min-h-screen bg-[#FDFDFF] font-['Outfit',_sans-serif] pb-20 selection:bg-indigo-100 selection:text-indigo-900">
            {/* 3D IMMERSIVE HERO HEADER */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/images/authors/author_3d_studio.png"
                        className="w-full h-full object-cover"
                        alt="3D Studio"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-indigo-950/30 to-[#FDFDFF]" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                </motion.div>

                <div className="absolute top-12 right-8 flex items-center gap-4 z-20">
                    <Link to="/marketplace" className="px-8 py-3.5 bg-white/10 backdrop-blur-2xl rounded-2xl text-white hover:bg-amber-500 transition-all flex items-center gap-3 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                        <ShoppingCart className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
                        <span className="text-[12px] font-black uppercase tracking-widest hidden sm:block">Author Store</span>
                    </Link>
                    <button className="p-3.5 bg-white/10 backdrop-blur-2xl rounded-2xl text-white hover:bg-white/20 transition-all border border-white/20 shadow-xl">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500 text-white rounded-full mb-8 shadow-xl shadow-amber-500/20"
                        >
                            <Sparkles className="w-4 h-4 fill-white" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Master Storyteller</span>
                        </motion.div>
                        
                        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            {authorData.name.split(' ')[0]} <span className="text-amber-400 italic font-serif" style={{ fontFamily: 'Georgia, serif' }}>{authorData.name.split(' ')[1]}</span>
                        </h1>
                        
                        <p className="text-white/90 text-xl md:text-3xl font-medium italic max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                            "{authorData.bio.split('.')[0]}."
                        </p>
                    </motion.div>
                </div>
                
                {/* Floating 3D Elements Placeholder for styling */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFDFF] to-transparent z-10" />
            </section>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-32 relative z-20">
                {/* 3D PROFILE HUB */}
                <div className="bg-white/80 backdrop-blur-3xl rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-white p-10 md:p-16 mb-20 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/20 via-transparent to-amber-50/20 pointer-events-none" />
                    
                    <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start relative z-10">
                        {/* 3D AVATAR & LEVEL */}
                        <div className="shrink-0 relative">
                            <motion.div 
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                className="w-64 h-64 rounded-[4rem] p-3 bg-gradient-to-tr from-indigo-600 via-purple-500 to-amber-500 shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)] relative z-20"
                            >
                                <img
                                    src="/images/authors/author_3d_avatar.png"
                                    className="w-full h-full object-cover rounded-[3.5rem] border-4 border-white shadow-inner"
                                    alt="3D Author Avatar"
                                />
                            </motion.div>
                            
                            {/* Level Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center border-8 border-white shadow-2xl z-30 transform hover:scale-110 transition-transform cursor-help">
                                <span className="text-[10px] font-black uppercase text-amber-500">Level</span>
                                <span className="text-2xl font-black">42</span>
                            </div>

                            {/* Achievements Row */}
                            <div className="mt-10 flex justify-center gap-3">
                                {authorData.badges.map(badge => (
                                    <motion.div 
                                        key={badge.id} 
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className={`${badge.color} p-3 rounded-2xl text-white shadow-xl shadow-indigo-100 cursor-pointer group relative`}
                                    >
                                        {React.cloneElement(badge.icon, { className: "w-6 h-6" })}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none">
                                            {badge.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* PREMIUM INFO & GLOBAL ACTIONS */}
                        <div className="flex-1 space-y-12">
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-slate-100 pb-12">
                                <div className="space-y-6 flex-1">
                                    <div className="flex items-center gap-4 justify-center md:justify-start">
                                        <h2 className="text-[13px] font-black text-indigo-600 uppercase tracking-[0.4em]">Creative DNA</h2>
                                        <div className="h-0.5 w-16 bg-amber-500 rounded-full" />
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                                        Exploration of <span className="text-indigo-600">Mythology</span> & <span className="text-amber-500">Future</span>
                                    </h3>
                                    <p className="text-slate-500 text-xl leading-relaxed max-w-2xl font-medium italic">
                                        "{authorData.bio}"
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                                        <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                                            <MapPin className="w-4 h-4 text-rose-500" />
                                            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">{authorData.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                                            <Users className="w-4 h-4 text-indigo-500" />
                                            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">{authorData.school}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                                    <button className="px-12 py-5 bg-indigo-600 text-white font-black text-sm rounded-[2rem] hover:bg-slate-900 transition-all shadow-[0_25px_50px_-12px_rgba(79,70,229,0.5)] flex items-center justify-center gap-3 group uppercase tracking-widest">
                                        <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" /> Follow Author
                                    </button>
                                    <button className="px-12 py-5 bg-white text-slate-900 font-black text-sm rounded-[2rem] hover:bg-slate-50 transition-all border-2 border-slate-100 flex items-center justify-center gap-3 uppercase tracking-widest">
                                        <MessageSquare className="w-5 h-5" /> Send Message
                                    </button>
                                </div>
                            </div>

                            {/* 3D STATS BAR */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { label: "Total Reads", value: authorData.stats.totalReads, icon: <Eye className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-50" },
                                    { label: "Book Revenue", value: authorData.stats.totalSales, icon: <DollarSign className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-50" },
                                    { label: "Followers", value: authorData.stats.followers, icon: <Users className="w-5 h-5" />, color: "text-indigo-500", bg: "bg-indigo-50" },
                                    { label: "Masterpieces", value: authorData.stats.books, icon: <BookOpen className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-50" },
                                ].map((stat, i) => (
                                    <motion.div 
                                        key={i} 
                                        whileHover={{ y: -5 }}
                                        className="p-6 rounded-3xl bg-slate-50/50 hover:bg-white border border-slate-100 hover:shadow-2xl transition-all group cursor-pointer"
                                    >
                                        <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                                            {stat.icon}
                                        </div>
                                        <h4 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-1">{stat.value}</h4>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT GRID */}
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* SIDEBAR: WORKSPACE & ACHIEVEMENTS */}
                    <div className="lg:col-span-4 space-y-10">
                        {/* PREMIUM WRITER'S HUB CARD */}
                        <div className="bg-[#0f111a] rounded-[3.5rem] p-10 text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-white/5 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />
                            
                            <Link to="/writer-pad" className="block relative z-10">
                                <div className="flex flex-col gap-8">
                                    <div className="flex items-center justify-between">
                                        <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500">
                                            <PenTool className="w-8 h-8 text-indigo-400 group-hover:text-white" />
                                        </div>
                                        <div className="px-4 py-1.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-indigo-500/50 transition-colors">
                                            <span className="text-[10px] font-black uppercase text-amber-500 tracking-[0.2em]">Open Workspace</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <h3 className="text-4xl font-black tracking-tighter italic leading-none uppercase">
                                            Writer's <span className="text-indigo-400">Hub</span>
                                        </h3>
                                        <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] leading-relaxed">
                                            Assemble Your literary empire in a 3D immersive world.
                                        </p>
                                    </div>

                                    {/* Interactive Progress Line */}
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1.5 }}
                                            className="h-full bg-gradient-to-r from-indigo-600 to-purple-500"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* 3D ACHIEVEMENTS TILE */}
                        <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 group">
                            <div className="flex items-center justify-between mb-10 border-b border-slate-50 pb-6">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Hall of Fame</h3>
                                <button className="text-[10px] font-black text-indigo-600 tracking-widest uppercase hover:text-amber-500 transition-colors">View All</button>
                            </div>
                            
                            <div className="space-y-6">
                                {authorData.badges.map(badge => (
                                    <motion.div 
                                        key={badge.id}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-6 p-4 rounded-3xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all group/item"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl ${badge.color} text-white flex items-center justify-center shadow-lg group-hover/item:rotate-6 transition-transform`}>
                                            {React.cloneElement(badge.icon, { className: "w-6 h-6" })}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-800 text-sm uppercase tracking-tight italic">{badge.name}</h4>
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Global Ranking #24</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* NEON WRITING DNA */}
                        <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-transparent to-amber-500/10" />
                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-black tracking-tight italic">Writing <span className="text-amber-500">DNA</span></h3>
                                    <Activity className="w-5 h-5 text-indigo-400 animate-pulse" />
                                </div>
                                
                                <div className="space-y-8">
                                    {[
                                        { label: "Vocabulary", val: 92, color: "bg-indigo-500" },
                                        { label: "Narrative Flow", val: 85, color: "bg-amber-500" },
                                        { label: "Depth", val: 95, color: "bg-emerald-500" }
                                    ].map((skill, i) => (
                                        <div key={i} className="space-y-3">
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <span>{skill.label}</span>
                                                <span className="text-white">{skill.val}%</span>
                                            </div>
                                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.val}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1 }}
                                                    className={`h-full ${skill.color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAIN AREA: CONTENT PANELS */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* 3D NAVIGATION TABS */}
                        <div className="bg-white/50 backdrop-blur-3xl p-2 rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.04)] flex items-center justify-center sm:justify-start gap-2 w-fit">
                            {[
                                { id: "published", label: "Library", icon: <BookOpen className="w-4 h-4" /> },
                                { id: "drafts", label: "Drafts", icon: <Clock className="w-4 h-4" /> },
                                { id: "reviews", label: "Reviews", icon: <MessageSquare className="w-4 h-4" /> },
                                { id: "sales", label: "Analytics", icon: <TrendingUp className="w-4 h-4" /> }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-500 ${activeTab === tab.id
                                        ? "bg-slate-900 text-amber-400 shadow-2xl shadow-slate-900/20 scale-105"
                                        : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                                        }`}
                                >
                                    {React.cloneElement(tab.icon, { className: activeTab === tab.id ? "text-amber-400" : "text-slate-300" })} 
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* TAB CONTENT CAROUSEL/GRID */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTab === "published" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {publishedBooks.map((book, i) => (
                                            <motion.div 
                                                key={i} 
                                                whileHover={{ y: -15 }}
                                                className="group bg-white rounded-[4rem] p-8 border border-white hover:border-indigo-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(79,70,229,0.1)] transition-all duration-700 relative overflow-hidden"
                                            >
                                                <div className="flex flex-col sm:flex-row gap-8">
                                                    <div className="w-full sm:w-44 h-64 rounded-[3rem] overflow-hidden shadow-2xl relative group/img">
                                                        <img src={book.cover} className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000" alt="cover" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                                    </div>
                                                    
                                                    <div className="flex-1 py-4 space-y-6">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full uppercase tracking-widest">{book.genre}</span>
                                                            <div className="flex items-center gap-1.5 text-amber-500 font-black text-sm">
                                                                <Star className="w-4 h-4 fill-current" /> {book.rating}
                                                            </div>
                                                        </div>
                                                        
                                                        <div>
                                                            <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter leading-tight group-hover:text-indigo-600 transition-colors uppercase italic">{book.title}</h4>
                                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Masterpiece</p>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                                                            <div>
                                                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Impact</p>
                                                                <p className="font-black text-slate-900 text-lg tracking-tight">{book.readers} <span className="text-[10px] text-slate-400">Reads</span></p>
                                                            </div>
                                                            <div>
                                                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Commerce</p>
                                                                <p className="font-black text-emerald-500 text-lg tracking-tight">{book.sales} <span className="text-[10px] text-slate-400">Units</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                                                    <span className="text-3xl font-black text-slate-900 tracking-tighter italic">₹{book.price.replace('₹', '')}</span>
                                                    <Link to={`/book/${book.id}`} className="px-10 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-3xl hover:bg-amber-500 hover:text-white transition-all shadow-xl flex items-center gap-3 group/btn">
                                                        View Asset <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        ))}
                                        
                                        {/* 3D ADD NEW BOOK SLAP */}
                                        <motion.div 
                                            whileHover={{ scale: 0.98 }}
                                            className="rounded-[4rem] border-4 border-dashed border-slate-100 p-12 flex flex-col items-center justify-center text-center gap-8 hover:border-indigo-200 hover:bg-indigo-50/20 transition-all cursor-pointer group"
                                        >
                                            <div className="w-24 h-24 rounded-[3rem] bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner relative">
                                                <ImageIcon className="w-10 h-10" />
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg">+</div>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 text-2xl tracking-tighter uppercase italic">Draft New Vision</h4>
                                                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2">Publish your latest masterpiece to the world.</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}

                                {activeTab === "drafts" && (
                                    <div className="space-y-6">
                                        {currentDrafts.map((draft, i) => (
                                            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-full bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <button className="p-4 bg-indigo-600 text-white rounded-2xl shadow-xl hover:scale-110 transition-all">
                                                        <PenTool className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                                                    <div className="flex-1 space-y-4">
                                                        <div className="flex items-center gap-4">
                                                            <h4 className="text-2xl font-black text-slate-900 italic tracking-tighter leading-none">{draft.title}</h4>
                                                            <span className="px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-amber-100 italic">Work in Progress</span>
                                                        </div>
                                                        <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
                                                            <Clock className="w-4 h-4 text-slate-300" /> Auto-saved {draft.lastEdited} • {draft.wordCount} words
                                                        </p>
                                                    </div>
                                                    <div className="w-full md:w-64 text-right">
                                                        <div className="flex justify-between items-end mb-2">
                                                            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Chapter Completion</p>
                                                            <p className="text-xl font-black text-slate-900">{draft.progress}%</p>
                                                        </div>
                                                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: `${draft.progress}%` }}
                                                                className="h-full bg-indigo-500 rounded-full shadow-lg shadow-indigo-100"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "reviews" && (
                                    <div className="space-y-6">
                                        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
                                                    <Star className="w-8 h-8 fill-current" />
                                                </div>
                                                <div>
                                                    <h4 className="text-3xl font-black text-slate-900 italic tracking-tighter">4.9 / 5.0</h4>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Average Reader Satisfaction</p>
                                                </div>
                                            </div>
                                            <div className="flex -space-x-3">
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                                        U{i}
                                                    </div>
                                                ))}
                                                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">
                                                    +2k
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-6">
                                            {readerReviews.map((rev) => (
                                                <motion.div
                                                    layout
                                                    key={rev.id}
                                                    className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                                                >
                                                    <div className="flex flex-col md:flex-row gap-8">
                                                        <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-black text-xl shrink-0">
                                                            {rev.avatar}
                                                        </div>
                                                        <div className="flex-1 space-y-4">
                                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                                <div>
                                                                    <div className="flex items-center gap-3 mb-1">
                                                                        <h4 className="font-extrabold text-slate-900">{rev.user}</h4>
                                                                        <div className="flex gap-0.5">
                                                                            {[...Array(5)].map((_, i) => (
                                                                                <Star key={i} className={`w-3 h-3 ${i < rev.rating ? 'text-amber-400 fill-current' : 'text-slate-200'}`} />
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Reviewed: <span className="text-slate-400 font-bold">{rev.book}</span></p>
                                                                </div>
                                                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{rev.date}</span>
                                                            </div>
                                                            <p className="text-slate-500 font-medium text-lg leading-relaxed italic">
                                                                "{rev.comment}"
                                                            </p>
                                                            <div className="flex gap-4 pt-2">
                                                                <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 flex items-center gap-2">
                                                                    <Heart className="w-3.5 h-3.5" /> Love this Review
                                                                </button>
                                                                <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 flex items-center gap-2">
                                                                    <Share2 className="w-3.5 h-3.5" /> Share
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "sales" && (
                                    <div className="space-y-20 py-10">
                                        {/* TOP REVENUE BAR - No Background */}
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                                            <div className="lg:col-span-7 space-y-12">
                                                <div className="relative group">
                                                    <div className="flex items-center gap-4 mb-6">
                                                        <TrendingUp className="w-6 h-6 text-emerald-500" />
                                                        <h4 className="text-[17px] font-black text-slate-400 uppercase tracking-[0.3em]">Commercial Command</h4>
                                                    </div>
                                                    <div className="flex items-baseline gap-4">
                                                        <span className="text-[75px] font-[950] text-slate-900 tracking-tighter italic">₹12,450</span>
                                                        <span className="text-[17px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">+12.4%</span>
                                                    </div>
                                                    <p className="text-slate-400 font-bold text-[15px] uppercase tracking-widest mt-4 italic">Gross earnings across all literary assets</p>

                                                    {/* Animated Underline */}
                                                    <div className="h-[2px] bg-slate-100 w-full mt-10 group-hover:bg-emerald-500 transition-colors duration-700" />
                                                </div>

                                                <div className="grid grid-cols-2 gap-12 pt-6">
                                                    <div className="space-y-1">
                                                        <p className="text-[13px] font-black text-slate-300 uppercase tracking-widest">Global Ranking</p>
                                                        <p className="text-[33px] font-[950] text-slate-900 italic tracking-tighter">#14 <span className="text-[15px] font-bold text-slate-400 uppercase ml-2">Top Tier</span></p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="text-[13px] font-black text-slate-300 uppercase tracking-widest">Next Payout</p>
                                                        <p className="text-[33px] font-[950] text-indigo-600 italic tracking-tighter">APR 15</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-5 space-y-10">
                                                <h3 className="text-[17px] font-black text-slate-900 tracking-[0.2em] uppercase italic border-b border-slate-100 pb-4">Audience Analytics</h3>
                                                <div className="space-y-8">
                                                    {[
                                                        { label: "Direct Store", val: 8400, color: "bg-indigo-600", pct: "70%" },
                                                        { label: "Distributors", val: 3200, color: "bg-emerald-500", pct: "25%" },
                                                        { label: "Grants", val: 850, color: "bg-amber-500", pct: "5%" }
                                                    ].map((item, i) => (
                                                        <div key={i} className="space-y-3 group">
                                                            <div className="flex justify-between items-end">
                                                                <span className="text-[13px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                                                                <span className="font-[950] text-slate-900 text-[17px] tracking-tighter italic">₹{item.val}</span>
                                                            </div>
                                                            <div className="h-1 bg-slate-50 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    whileInView={{ width: item.pct }}
                                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                                    className={`h-full ${item.color} shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* GEOGRAPHIC GRID - No Cards */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pt-10 border-t border-slate-50">
                                            <div className="space-y-10">
                                                <div className="flex items-center gap-4">
                                                    <MapPin className="w-5 h-5 text-rose-500" />
                                                    <h4 className="text-[17px] font-black text-slate-900 tracking-[0.2em] uppercase italic">Global Footprint</h4>
                                                </div>
                                                <div className="space-y-6">
                                                    {[
                                                        { city: "Mumbai, IN", share: "45%" },
                                                        { city: "London, UK", share: "22%" },
                                                        { city: "New York, US", share: "18%" }
                                                    ].map((loc, i) => (
                                                        <div key={i} className="flex items-center gap-6 group">
                                                            <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest w-24 shrink-0">{loc.city}</span>
                                                            <div className="h-[2px] bg-slate-100 flex-1 rounded-full overflow-hidden relative">
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    whileInView={{ width: loc.share }}
                                                                    className="h-full bg-slate-900 group-hover:bg-indigo-600 transition-colors"
                                                                />
                                                            </div>
                                                            <span className="text-[15px] font-black text-slate-900 italic w-10 text-right">{loc.share}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center space-y-8">
                                                <div className="space-y-3">
                                                    <h4 className="text-[39px] font-[950] text-slate-900 tracking-tighter uppercase italic leading-none">Elite Status</h4>
                                                    <p className="text-slate-400 font-bold text-[15px] uppercase tracking-widest">Verified Multi-Market Professional</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <button className="flex-1 py-5 bg-slate-900 text-white font-black text-[13px] uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all rounded-full">
                                                        Expand Network
                                                    </button>
                                                    <button className="flex-1 py-5 border-2 border-slate-100 text-slate-900 font-black text-[13px] uppercase tracking-[0.2em] hover:border-slate-900 transition-all rounded-full">
                                                        Download HQ Analytics
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* RECENT ACTIVITY LOG UI */}
                        <div className="pt-24 px-4">
                            <div className="flex items-center gap-6 mb-16">
                                <div className="w-14 h-[3px] bg-indigo-600 rounded-full"></div>
                                <h3 className="text-4xl font-[950] italic tracking-tighter uppercase text-slate-900 leading-none">
                                    Recent Activity
                                </h3>
                            </div>

                            <div className="relative pl-12 sm:pl-20">
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-[47px] sm:left-[71px] top-6 bottom-6 w-[2px] bg-slate-100"></div>

                                <div className="space-y-12">
                                    {[
                                        { time: "2 hours ago", action: "Published a new chapter of 'Galactic Monk'", icon: <PenTool className="w-5 h-5 text-white" />, color: "bg-[#6366f1]" },
                                        { time: "Yesterday", action: "Reached 10,000 total readers milestone!", icon: <Users className="w-5 h-5 text-white" />, color: "bg-[#9333ea]" },
                                        { time: "3 days ago", action: "Withdrew earnings into primary wallet", icon: <Download className="w-5 h-5 text-white" />, color: "bg-[#10b981]" },
                                    ].map((act, i) => (
                                        <div key={i} className="relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16 group">
                                            {/* Icon with white border and shadow */}
                                            <div className={`shrink-0 w-12 h-12 rounded-2xl ${act.color} flex items-center justify-center shadow-xl shadow-slate-200 relative z-10 border-4 border-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                                {act.icon}
                                            </div>

                                            {/* Activity Information Card */}
                                            <motion.div
                                                whileHover={{ x: 10 }}
                                                className="flex-1 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all max-w-lg cursor-default"
                                            >
                                                <p className="text-[1.1rem] font-[800] text-slate-800 mb-2 leading-tight tracking-tight">
                                                    {act.action}
                                                </p>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                                    {act.time}
                                                </p>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* FLOATING ACTION BUTTON (MOBILE) */}
            <div className="fixed bottom-10 right-10 z-[100] lg:hidden">
                <button className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-indigo-500/40 hover:scale-110 active:scale-95 transition-all">
                    <PenTool className="w-7 h-7" />
                </button>
            </div>
        </div>
    );
};

const ArrowRight = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default ProfileDetail;

