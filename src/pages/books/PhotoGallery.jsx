import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Trophy, Award, Medal, Star, 
    X, Search, Camera, PlayCircle, 
    ChevronRight, Sparkles, Heart, Globe,
    Music, Palette, Microscope, GraduationCap, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const PhotoGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Science'];

    const achievements = [
        {
            id: 1,
            title: "Inter-School Cricket Champions",
            category: "Sports",
            date: "Feb 2024",
            img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
            desc: "Our senior boys team clinched the 'Patna School Cup' for the second consecutive year.",
            badge: "Gold Medal"
        },
        {
            id: 2,
            title: "District Science Exhibition 1st Prize",
            category: "Science",
            date: "Jan 2024",
            img: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&q=80&w=800",
            desc: "Class X students presented a working model of a Sustainable Smart City, winning top honors.",
            badge: "Innovation Award"
        },
        {
            id: 3,
            title: "Best Choir Performance",
            category: "Cultural",
            date: "Dec 2023",
            img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf28581?auto=format&fit=crop&q=80&w=800",
            desc: "Our school choir group performed at the Annual State Cultural Fest and received a standing ovation.",
            badge: "Arts Excellence"
        },
        {
            id: 4,
            title: "100% Distinction in Class XII",
            category: "Academic",
            date: "May 2023",
            img: "https://images.unsplash.com/photo-1523050335102-c3251c17b384?auto=format&fit=crop&q=80&w=800",
            desc: "An incredible milestone where every single student of the batch scored above 85% aggregate.",
            badge: "Historic Milestone"
        },
        {
            id: 5,
            title: "National Karate Championship",
            category: "Sports",
            date: "March 2024",
            img: "https://images.unsplash.com/photo-1552072047-54941d1b3339?auto=format&fit=crop&q=80&w=800",
            desc: "Master Sameer (Class VIII) won the Silver medal at the National Inter-School Karate Meet.",
            badge: "Silver Medalist"
        },
        {
            id: 6,
            title: "Robotics Hackathon 2024",
            category: "Science",
            date: "April 2024",
            img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3739?auto=format&fit=crop&q=80&w=800",
            desc: "The junior robotics team won 'Most Creative Design' for their disaster rescue bot.",
            badge: "Tech Visionary"
        }
    ];

    const filteredItems = selectedCategory === 'All' 
        ? achievements 
        : achievements.filter(item => item.category === selectedCategory);

    return (
        <div className="bg-slate-50 min-h-screen font-['Nunito']">
            <PageHero 
                title="Hall of"
                italicTitle="Winners"
                tag="Moments of Pride"
                subtitle="Every trophy in our cabinet tells a story of hard work, discipline, and the relentless pursuit of excellence at Gyan Sagar Public School."
                bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
                accentColor="text-amber-400"
            />

            {/* Gallery Category Filter */}
            <section className="max-w-7xl mx-auto px-4 mb-16">
                <div className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-wrap justify-center gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Achievements Grid */}
            <section className="max-w-7xl mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative bg-white rounded-[3rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100 cursor-pointer overflow-hidden"
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="w-14 h-14 bg-white text-indigo-600 rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform">
                                            <Camera className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-amber-400 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                            {item.badge}
                                        </span>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div> {item.category} • {item.date}
                                    </p>
                                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Achievement Detail Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white rounded-[4rem] p-8 md:p-16 max-w-5xl w-full relative shadow-3xl overflow-hidden flex flex-col md:flex-row gap-12"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors">
                                <X className="w-8 h-8" />
                            </button>
                            
                            <div className="w-full md:w-1/2">
                                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                                    <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 flex items-center gap-4">
                                         <Trophy className="w-12 h-12 text-amber-400 drop-shadow-lg" />
                                         <div>
                                             <p className="text-white text-3xl font-black">{selectedItem.badge}</p>
                                             <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Achievement Category</p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    {selectedItem.category === 'Science' && <Microscope className="w-6 h-6 text-indigo-600" />}
                                    {selectedItem.category === 'Sports' && <Medal className="w-6 h-6 text-amber-500" />}
                                    {selectedItem.category === 'Cultural' && <Palette className="w-6 h-6 text-rose-500" />}
                                    {selectedItem.category === 'Academic' && <GraduationCap className="w-6 h-6 text-emerald-500" />}
                                    <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">{selectedItem.category} Section</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{selectedItem.title}</h3>
                                <p className="text-slate-500 text-xl font-medium leading-relaxed mb-10">
                                    {selectedItem.desc}
                                </p>
                                <div className="flex gap-4 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                    <div className="flex-1">
                                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Achieved On</p>
                                        <p className="text-slate-900 font-black text-xl">{selectedItem.date}</p>
                                    </div>
                                    <div className="w-px h-12 bg-slate-200" />
                                    <div className="flex-1">
                                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Global Rank</p>
                                        <p className="text-indigo-600 font-black text-xl">Top Honors</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom: Submit Achievement CTA */}
            <section className="max-w-7xl mx-auto px-4 mt-20">
                <div className="bg-white rounded-[4rem] p-12 md:p-24 border border-slate-100 shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 underline decoration-indigo-200 decoration-8 underline-offset-8">Featured in <br />the Hall of Fame?</h2>
                            <p className="text-slate-500 text-xl font-medium max-w-xl">
                                Did you win a medal or participate in a significant event? Share your story 
                                with us and get featured on the school wall.
                            </p>
                        </div>
                        <button className="px-12 py-6 bg-indigo-600 text-white font-black rounded-[2rem] shadow-2xl shadow-indigo-100 hover:scale-105 transition-all text-lg group flex items-center gap-4">
                            Send Your Story <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent)] pointer-events-none"></div>
                </div>
            </section>
        </div>
    );
};

export default PhotoGallery;
