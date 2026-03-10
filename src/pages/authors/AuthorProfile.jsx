import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star, MapPin, Users, Heart, BookOpen, UserPlus, Share2,
    TrendingUp, Award, DollarSign, PenTool, Image as ImageIcon,
    ChevronRight, MessageSquare, ShoppingCart, Activity,
    Eye, Download, Layout, Sparkles, Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const AuthorProfile = () => {
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
        <div className="min-h-screen bg-white font-['Nunito'] pb-20">
            {/* CINEMATIC HERO HEADER */}
            <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=80"
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]"
                    alt="banner"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />

                <div className="absolute top-8 right-8 flex items-center gap-3 z-20">
                    <Link to="/marketplace" className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-amber-600 transition-all flex items-center gap-2 border border-white/20 shadow-xl group/market">
                        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform text-amber-400" />
                        <span className="text-[11px] font-black uppercase tracking-widest hidden sm:block">Author Store</span>
                    </Link>
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white/20 transition-all border border-white/10">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl -mt-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Master Storyteller</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 italic leading-tight tracking-tight drop-shadow-2xl">
                            {authorData.name}
                        </h1>
                        <p className="text-white/90 text-xl md:text-2xl font-light italic max-w-2xl mx-auto leading-relaxed">
                            "{authorData.bio.split('.')[0]}."
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                {/* PROFILE HUB */}
                <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-8 md:p-12 mb-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start text-center lg:text-left">
                        {/* PHOTO & BADGES */}
                        <div className="shrink-0 group">
                            <div className="w-56 h-56 rounded-[3.5rem] p-2 bg-gradient-to-tr from-amber-500 to-indigo-600 shadow-2xl transform transition-transform group-hover:rotate-3 group-hover:scale-105">
                                <img
                                    src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=400&q=80"
                                    className="w-full h-full object-cover rounded-[3rem] border-4 border-white"
                                    alt="Author"
                                />
                            </div>
                            <div className="mt-6 flex justify-center lg:justify-start gap-2">
                                {authorData.badges.map(badge => (
                                    <div key={badge.id} className={`${badge.color} p-2.5 rounded-2xl text-white shadow-lg shadow-indigo-100 hover:scale-110 transition-all`}>
                                        {React.cloneElement(badge.icon, { className: "w-5 h-5" })}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* INFO & ACTIONS */}
                        <div className="flex-1 space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-slate-50 pb-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 justify-center md:justify-start">
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Biography</h2>
                                        <div className="h-0.5 w-12 bg-amber-500" />
                                    </div>
                                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl font-medium">
                                        {authorData.bio}
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                                        <span className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest bg-slate-50 px-5 py-2.5 rounded-full">
                                            <MapPin className="w-3 h-3 text-rose-500" /> {authorData.location}
                                        </span>
                                        <span className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest bg-slate-50 px-5 py-2.5 rounded-full">
                                            <Users className="w-3 h-3 text-indigo-500" /> {authorData.school}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 shrink-0">
                                    <button className="px-10 py-5 bg-indigo-600 text-white font-black text-xs rounded-[1.5rem] hover:bg-slate-900 transition-all shadow-2xl shadow-indigo-100 flex items-center justify-center gap-3 group uppercase tracking-[0.2em]">
                                        <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" /> Follow Author
                                    </button>
                                    <button className="px-10 py-5 bg-white text-slate-900 font-black text-xs rounded-[1.5rem] hover:bg-slate-50 transition-all border border-slate-100 shadow-xl shadow-slate-50 flex items-center justify-center gap-3 uppercase tracking-[0.2em]">
                                        <MessageSquare className="w-5 h-5" /> Send Message
                                    </button>
                                </div>
                            </div>

                            {/* IMPACT ANALYTICS */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                                {[
                                    { label: "Total Reads", value: authorData.stats.totalReads, icon: <Eye className="text-amber-500" /> },
                                    { label: "Book Revenue", value: authorData.stats.totalSales, icon: <DollarSign className="text-emerald-500" />, link: "/marketplace" },
                                    { label: "Followers", value: authorData.stats.followers, icon: <Users className="text-indigo-500" /> },
                                    { label: "Masterpieces", value: authorData.stats.books, icon: <BookOpen className="text-purple-500" /> },
                                ].map((stat, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                                                {React.cloneElement(stat.icon, { className: "w-5 h-5" })}
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-black text-slate-900 leading-none">{stat.value}</h4>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT GRID */}
                <div className="grid lg:grid-cols-12 gap-10">

                    {/* SIDEBAR: WORKSPACE & ACHIEVEMENTS */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* OWNER'S SIGNATURE COMMAND (No Background/Card Shape) */}
                        <div className="py-12 relative group cursor-pointer overflow-visible">
                            <Link to="/writer-pad" className="block relative">
                                <div className="flex items-center gap-10">
                                    {/* The Writing Tool Anchor */}
                                    <div className="relative">
                                        <motion.div
                                            animate={{
                                                rotate: [25, 32, 25],
                                                y: [0, -12, 0]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-slate-100 group-hover:border-indigo-600 transition-colors duration-700 relative z-20"
                                        >
                                            <PenTool className="w-10 h-10 text-indigo-600 group-hover:scale-125 transition-all duration-500" />

                                            {/* Rotating Orbital Ring */}
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                                className="absolute -inset-2 border-r-2 border-indigo-200/30 rounded-full"
                                            />
                                        </motion.div>

                                        {/* Floating Label */}
                                        <motion.div
                                            className="absolute -top-3 -left-3 px-3 py-1 bg-slate-900 text-white rounded-md text-[11px] font-black uppercase tracking-widest z-30 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            Malik
                                        </motion.div>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-[33px] font-[950] text-slate-900 tracking-tighter uppercase italic leading-none">
                                                Writer's Hub
                                            </h3>
                                            <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                                        </div>
                                        <p className="text-slate-400 font-bold text-[14px] uppercase tracking-[0.2em]">
                                            Assemble Your Literary Empire
                                        </p>

                                        {/* Interactive Pen Stroke Underline */}
                                        <div className="relative h-2 w-full pt-4">
                                            <motion.div
                                                className="h-px bg-slate-100 group-hover:bg-indigo-600 transition-colors w-full"
                                            />
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileHover={{ width: "100%" }}
                                                className="absolute top-4 left-0 h-1 bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Background 'Owner' Floating Text */}
                            <div className="absolute top-0 right-0 text-[6.5rem] font-black text-slate-100/50 select-none pointer-events-none -z-10 leading-none">
                                OWNER
                            </div>
                        </div>

                        {/* MINIMALIST ACHIEVEMENTS (No Card Shape) */}
                        <div className="py-8 space-y-10">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                <h3 className="text-[23px] font-[950] text-slate-900 tracking-tighter uppercase italic">Achievements</h3>
                                <button className="text-[12px] font-black text-indigo-600 tracking-[0.2em] uppercase">View All</button>
                            </div>
                            <div className="space-y-8">
                                {authorData.badges.map(badge => (
                                    <div key={badge.id} className="group relative flex items-center gap-6">
                                        <div className={`w-14 h-14 rounded-full ${badge.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 relative z-10`}>
                                            {badge.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-800 text-[17px] italic uppercase tracking-tight">{badge.name}</h4>
                                            <p className="text-[12px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Earned April 2024</p>
                                            {/* Signature Underline */}
                                            <div className="h-px bg-slate-50 w-full mt-3 group-hover:bg-indigo-600 transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SKILLS CARD */}
                        <div className="bg-[#0f111a] rounded-[3.5rem] p-12 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/5 group">
                            <div className="flex items-center gap-4 mb-10">
                                <h3 className="text-3xl font-[900] tracking-tighter italic">Writing DNA</h3>
                                <div className="px-3 py-1 bg-[#1e2235] rounded-xl border border-white/10">
                                    <span className="text-[9px] font-black uppercase text-amber-500 tracking-widest">Analytics</span>
                                </div>
                            </div>
                            <div className="space-y-10">
                                {[
                                    { label: "Vocabulary", percentage: 92 },
                                    { label: "Narrative Flow", percentage: 85 },
                                    { label: "Character Depth", percentage: 95 }
                                ].map((skill, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">{skill.label}</span>
                                            <span className="text-sm font-black text-slate-100">{skill.percentage}%</span>
                                        </div>
                                        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                                                className="h-full bg-[#6366f1] rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* MAIN AREA: CONTENT PANELS */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* NAVIGATION TABS */}
                        <div className="flex items-center gap-4 p-2 bg-white rounded-[2rem] border border-slate-100 w-fit shadow-sm">
                            {[
                                { id: "published", label: "Library", icon: <BookOpen className="w-4 h-4" /> },
                                { id: "drafts", label: "Drafts", icon: <Clock className="w-4 h-4" /> },
                                { id: "reviews", label: "Reviews", icon: <MessageSquare className="w-4 h-4" /> },
                                { id: "sales", label: "Analytics", icon: <TrendingUp className="w-4 h-4" /> }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-3 px-6 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                                        ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
                                        : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                                        }`}
                                >
                                    {tab.icon} {tab.label}
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
                                            <div key={i} className="group bg-white rounded-[3rem] p-6 border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden">
                                                <div className="flex gap-8">
                                                    <div className="w-32 h-44 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
                                                        <img src={book.cover} className="w-full h-full object-cover" alt="cover" />
                                                    </div>
                                                    <div className="flex-1 py-2">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest">{book.genre}</span>
                                                            <div className="flex items-center gap-1 text-amber-500 font-black text-xs">
                                                                <Star className="w-3 h-3 fill-current" /> {book.rating}
                                                            </div>
                                                        </div>
                                                        <h4 className="text-xl font-black text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">{book.title}</h4>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Readers</p>
                                                                <p className="font-black text-slate-700">{book.readers}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sales</p>
                                                                <p className="font-black text-emerald-600">{book.sales}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                                    <span className="text-2xl font-black text-slate-900 tracking-tighter">{book.price}</span>
                                                    <Link to={`/book/${book.id}`} className="px-6 py-3 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-amber-500 transition-all shadow-lg overflow-hidden relative group/btn">
                                                        <span className="relative z-10 flex items-center gap-2">VIEW DETAILS <ArrowRight className="w-3 h-3" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                        {/* ADD NEW BOOK SLAP */}
                                        <div className="rounded-[3rem] border-4 border-dashed border-slate-100 p-8 flex flex-col items-center justify-center text-center gap-6 hover:border-indigo-200 transition-all cursor-pointer group">
                                            <div className="w-20 h-20 rounded-[2rem] bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                                                <ImageIcon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-800 text-xl tracking-tighter">New Masterpiece</h4>
                                                <p className="text-slate-400 font-medium italic">Publish your latest work to the world.</p>
                                            </div>
                                        </div>
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

export default AuthorProfile;

