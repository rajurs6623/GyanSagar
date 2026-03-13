import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Calendar, MapPin, Users, Camera, Info, 
    ArrowRight, Music, Palette, Trophy, 
    BookOpen, Microscope, GraduationCap,
    Heart, Play, Share2
} from 'lucide-react';

const Events = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const activities = [
        {
            id: 1,
            title: "Annual Cultural Fest",
            category: "Cultural",
            image: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?auto=format&fit=crop&q=80&w=800",
            description: "A celebration of diversity through dance, music, and theatrical performances by our students.",
            icon: <Music className="w-6 h-6" />,
            color: "bg-indigo-600",
            date: "Feb 15, 2024"
        },
        {
            id: 2,
            title: "Science & Tech Expo",
            category: "Academic",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            description: "Young innovators showcasing solar projects, robotics, and interactive chemical models.",
            icon: <Microscope className="w-6 h-6" />,
            color: "bg-emerald-600",
            date: "Mar 10, 2024"
        },
        {
            id: 3,
            title: "Inter-House Sports",
            category: "Sports",
            image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800",
            description: "Developing teamwork and competitive spirit through Athletics, Cricket, and Basketball leagues.",
            icon: <Trophy className="w-6 h-6" />,
            color: "bg-amber-500",
            date: "Jan 20, 2024"
        },
        {
            id: 4,
            title: "Art & Craft Gallery",
            category: "Creative",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
            description: "Expressing creativity through Madhubani painting, pottery, and modern installation art.",
            icon: <Palette className="w-6 h-6" />,
            color: "bg-rose-600",
            date: "Apr 05, 2024"
        }
    ];

    const stats = [
        { label: "Houses", val: "4", desc: "Takshshila, Nalanda, Vikramshila, Mithila" },
        { label: "Clubs", val: "12+", desc: "Science, Literature, Eco, IT, Music" },
        { label: "Activities", val: "50+", desc: "Year-round competitions and fests" }
    ];

    const filteredActivities = selectedCategory === 'All' 
        ? activities 
        : activities.filter(a => a.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white font-['Nunito'] pt-32 pb-20">
            {/* Header / Intro */}
            <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-black uppercase tracking-widest mb-6"
                >
                    <GraduationCap className="w-4 h-4" /> Living the Legacy
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-[900] text-slate-900 tracking-tighter mb-8"
                >
                    Campus <span className="text-indigo-600">Life</span> & Aura
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 text-xl font-medium max-w-3xl mx-auto leading-relaxed"
                >
                    Education at Gyan Sagar goes beyond boundaries. Explore a vibrant world of activities, 
                    sports, and culture that shapes well-rounded personalities.
                </motion.p>
            </div>

            {/* Stats Dashboard */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-slate-50 rounded-[3rem] p-10 text-center border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all cursor-default"
                        >
                            <h2 className="text-6xl font-black text-indigo-600 mb-2">{stat.val}</h2>
                            <p className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest">{stat.label}</p>
                            <p className="text-slate-500 text-sm font-bold">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Gallery / Filter Section */}
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <h2 className="text-4xl font-black text-slate-900">Life at <span className="text-indigo-600 underline decoration-amber-400">Gyan Sagar</span></h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['All', 'Cultural', 'Academic', 'Sports', 'Creative'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full font-black text-xs transition-all tracking-widest uppercase ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <AnimatePresence mode='popLayout'>
                        {filteredActivities.map((activity, idx) => (
                            <motion.div
                                key={activity.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="group relative bg-white rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200/30 border border-slate-100 hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10"></div>
                                    <img 
                                        src={activity.image} 
                                        alt={activity.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-8 left-8 z-20">
                                        <div className={`${activity.color} p-4 rounded-3xl text-white shadow-2xl transform group-hover:rotate-12 transition-transform`}>
                                            {activity.icon}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 left-8 z-20 text-white">
                                        <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30">
                                            {activity.date}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-12">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-3xl font-black text-slate-900 leading-tight">{activity.title}</h3>
                                        <Camera className="w-6 h-6 text-slate-200 hover:text-indigo-600 cursor-pointer transition-colors" />
                                    </div>
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                                        {activity.description}
                                    </p>
                                    <button className="flex items-center gap-3 font-black text-indigo-600 hover:gap-5 transition-all">
                                        VIEW GALLERY <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Infrastructure Highlight */}
            <div className="bg-slate-900 py-32 mt-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Beyond the <br /><span className="text-amber-400">Classroom</span></h2>
                        <div className="space-y-8">
                            {[
                                { title: "Smart Auditoriums", desc: "Equipped with immersive sound systems for seminars and fests.", icon: <Play className="w-5 h-5" /> },
                                { title: "Eco-Friendly Grounds", desc: "Lush green playgrounds for football, cricket, and morning drills.", icon: <Heart className="w-5 h-5" /> },
                                { title: "Innovation Hub", desc: "Dedicated spaces for robotics, 3D printing, and design thinking.", icon: <Microscope className="w-5 h-5" /> }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 border border-white/10 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xl font-black mb-2">{item.title}</h4>
                                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-indigo-500/20 rounded-[4rem] blur-[100px]"></div>
                        <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-[5rem] border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
                            <img 
                                src="https://images.unsplash.com/photo-1541829070764-84a7d30dee6d?auto=format&fit=crop&q=80&w=800" 
                                alt="Campus Aura" 
                                className="w-full h-[600px] object-cover rounded-[4rem]"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-indigo-600 p-10 rounded-[3rem] shadow-2xl hidden md:block">
                                <Users className="w-12 h-12 text-white mb-4" />
                                <p className="text-white font-black text-4xl mb-1">1,500+</p>
                                <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Happy Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social / Share Section */}
            <div className="max-w-4xl mx-auto px-4 py-32 text-center">
                <h3 className="text-3xl font-black text-slate-800 mb-8">Want to Experience Our Campus?</h3>
                <p className="text-slate-500 font-medium text-lg mb-12">
                    Join us for an Open House session every Saturday from 10:00 AM to 12:00 PM. 
                    Meet the faculty and explore our facilities firsthand.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-12 py-5 bg-indigo-600 text-white font-black rounded-[2rem] shadow-2xl shadow-indigo-200 hover:bg-slate-900 transition-all flex items-center gap-3">
                        Book a School Tour <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-12 py-5 bg-white border-2 border-slate-100 text-slate-600 font-black rounded-[2rem] hover:bg-slate-50 transition-all flex items-center gap-3">
                        Social Feed <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Events;
