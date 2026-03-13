import React from 'react';
import { motion } from 'framer-motion';
import {
    Home, Globe, ShieldCheck, Zap,
    Coffee, Bus, Library, Microscope,
    Gamepad2, Camera, Star, Heart,
    Sun, Music, Users, Trophy, Palette
} from 'lucide-react';

const CampusFacilities = () => {
    const facilities = [
        {
            title: "Smart Digiclasses",
            desc: "Every room is a digital hub with high-end interactive panels (Promethean/Marker), providing a visual-heavy learning environment for complex concepts.",
            icon: <Zap className="w-10 h-10 text-amber-500" />,
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600",
            color: "amber"
        },
        {
            title: "Advanced Science Labs",
            desc: "NABL standard Physics, Chemistry, and Biology labs equipped with precision instruments to encourage research and hands-on experiments from class 6th onwards.",
            icon: <Microscope className="w-10 h-10 text-emerald-500" />,
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
            color: "emerald"
        },
        {
            title: "Hi-Tech IT Suite",
            desc: "Modern computer labs with high-speed internet, latest software, and coding tools (Java, Python, IP) to prepare students for the digital era.",
            icon: <Globe className="w-10 h-10 text-blue-500" />,
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
            color: "blue"
        },
        {
            title: "Resourceful Library",
            desc: "A hybrid library with 10,000+ physical volumes and a digital library section (E-Kindle) covering NCERT, Board Prep, and competitive exam books.",
            icon: <Library className="w-10 h-10 text-indigo-500" />,
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
            color: "indigo"
        },
        {
            title: "Sports Arena",
            desc: "Specialized coaching areas for Cricket (nets), Karate (Dojo), and Badminton courts to ensure physical fitness and disciplined training.",
            icon: <Trophy className="w-10 h-10 text-rose-500" />,
            image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600",
            color: "rose"
        },
        {
            title: "24/7 Safety & Transport",
            desc: "GPS-enabled fleet of buses and CCTV monitored campus with professional guards to ensure a 100% safe environment for your child.",
            icon: <ShieldCheck className="w-10 h-10 text-slate-700" />,
            image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=600",
            color: "slate"
        },
        {
            title: "Multipurpose Auditorium",
            desc: "A spacious, air-conditioned hall for seminars, cultural fests, and workshops, equipped with advanced Bose sound systems.",
            icon: <Globe className="w-10 h-10 text-purple-500" />,
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600",
            color: "purple"
        },
        {
            title: "Music & Dance Studio",
            desc: "Dedicated acoustics-treated studios for students to learn Indian Classical, Western music, and various dance forms under expert guidance.",
            icon: <Music className="w-10 h-10 text-pink-500" />,
            image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600",
            color: "pink"
        },
        {
            title: "Art & Craft Workshop",
            desc: "A vibrant space where students explore pottery, painting, and origami, fostering the 'Artist' within every child.",
            icon: <Palette className="w-10 h-10 text-orange-500" />,
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
            color: "orange"
        },
        {
            title: "Health & Medical Room",
            desc: "A well-equipped infirmary with a qualified nurse on duty, providing immediate first-aid and routine health checkups for all students.",
            icon: <Heart className="w-10 h-10 text-red-500" />,
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
            color: "red"
        },
        {
            title: "Kindergarten Play Zone",
            desc: "A safe, cushioned play area for our tiny tots with age-appropriate slides, swings, and sensory learning toys.",
            icon: <Gamepad2 className="w-10 h-10 text-cyan-500" />,
            image: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?auto=format&fit=crop&q=80&w=600",
            color: "cyan"
        }
    ];

    const activities = [
        { name: "Science Expo", icon: <Microscope className="w-6 h-6" /> },
        { name: "Sports Meet", icon: <Trophy className="w-6 h-6" /> },
        { name: "Tech Fest", icon: <Zap className="w-6 h-6" /> },
        { name: "Art League", icon: <Palette className="w-6 h-6" /> },
        { name: "Music Gala", icon: <Music className="w-6 h-6" /> },
        { name: "Health Yoga", icon: <Sun className="w-6 h-6" /> },
    ];

    return (
        <div className="min-h-screen bg-white font-['Nunito']">
            {/* ─── CAMPUS HERO ─── */}
            <section className="relative min-h-[90vh] flex items-center justify-center pb-20 px-4 text-white text-center overflow-hidden mb-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/3d_school_campus_premium.png"
                        alt="Campus Facilities Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-amber-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6"
                    >
                        World-Class Infrastructure
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl md:text-[6rem] font-bold tracking-tight mb-8"
                    >
                        Campus <span className="font-serif italic text-amber-500 font-normal">& Facilities</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-white/90 font-medium italic max-w-2xl leading-relaxed mb-16"
                    >
                        "We provide a world-class environment in Ram Krishna Nagar, Patna, that inspires learning, creativity, and physical excellence."
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

            {/* Facilities Grid */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {facilities.map((fact, idx) => (
                        <motion.div
                            key={fact.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[4rem] p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 group"
                        >
                            <div className="relative h-[324px] rounded-[3.5rem] overflow-hidden mb-10">
                                <img
                                    src={fact.image}
                                    alt={fact.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center gap-4">
                                    {fact.icon}
                                    <h3 className="text-2xl font-black">{fact.title}</h3>
                                </div>
                            </div>
                            <div className="px-10 pb-10">
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                    {fact.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Life at Gyan Sagar */}
            <section className="bg-slate-900 py-32 mt-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 text-white">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Life @ <span className="text-indigo-400">Gyan Sagar</span></h2>
                        <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Our campus is alive with energy, creativity, and student initiatives that
                            go far beyond the classroom walls.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {activities.map((act, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] text-center text-white group cursor-default"
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                                    {act.icon}
                                </div>
                                <p className="font-black text-xs uppercase tracking-widest">{act.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Decoration */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] -mr-96 -mt-96"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[150px] -ml-96 -mb-96"></div>
            </section>

            {/* Gallery Preview */}
            <section className="max-w-7xl mx-auto px-4 py-32">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Campus <br /><span className="text-indigo-600">Gallery</span></h2>
                        <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                            A glimpse into the daily life, events, and milestones at our Ram Krishna Nagar
                            campus. We believe in capturing every small success.
                        </p>
                        <button className="px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl hover:bg-slate-900 transition-all">
                            View Full Gallery
                        </button>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-3 gap-4">
                        <div className="space-y-4">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300" className="w-full h-40 object-cover rounded-3xl" />
                            <img src="https://images.unsplash.com/photo-1544648397-52ee3bf8224d?auto=format&fit=crop&q=80&w=300" className="w-full h-64 object-cover rounded-3xl" />
                        </div>
                        <div className="space-y-4 pt-8">
                            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=300" className="w-full h-64 object-cover rounded-3xl" />
                            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=300" className="w-full h-40 object-cover rounded-3xl" />
                        </div>
                        <div className="space-y-4 pt-16">
                            <img src="https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=300" className="w-full h-40 object-cover rounded-3xl" />
                            <img src="https://images.unsplash.com/photo-1577891729319-f4871c6ec217?auto=format&fit=crop&q=80&w=300" className="w-full h-64 object-cover rounded-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Visit CTA */}
            <section className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl shadow-indigo-100 border border-slate-100 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-bl-full pointer-events-none opacity-20"></div>
                    <Star className="w-16 h-16 text-amber-500 mx-auto mb-8 animate-spin-slow" />
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Want to see for yourself?</h2>
                    <p className="text-slate-500 text-xl font-medium mb-12 max-w-xl mx-auto">
                        Experience our campus life firsthand. Book a school tour for a guided
                        walkthrough of our facilities.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl hover:bg-slate-900 transition-all">Schedule a Visit</button>
                        <button className="px-12 py-5 bg-slate-50 text-slate-600 font-black rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all">Download Campus Map</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampusFacilities;
