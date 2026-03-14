import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Trophy, Star, Award, GraduationCap,
    ArrowRight, Users, Heart, Zap,
    Medal, BookOpen, Microscope, Palette, Music, MapPin, Phone, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

// ─── School Achievers Data ──────────────────────────────────────────────────────
const toppers = [
    {
        name: "Rahul Kumar",
        class: "Class X",
        achievement: "School Board Topper",
        percentage: "98.4%",
        subject: "Science Stream",
        badge: "🥇",
        photo: "/GyanSagar/Student.jpg",
        color: "from-amber-400/20 to-yellow-300/10",
        border: "border-amber-200",
    },
    {
        name: "Anjali Kumari",
        class: "Class XII",
        achievement: "Senior Sec. Topper",
        percentage: "96.2%",
        subject: "Commerce Stream",
        badge: "🥈",
        photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400",
        color: "from-slate-400/20 to-slate-200/10",
        border: "border-slate-200",
    },
    {
        name: "Aryan Singh",
        class: "Class X",
        achievement: "3rd Rank – District",
        percentage: "95.6%",
        subject: "Humanities",
        badge: "🥉",
        photo: "/GyanSagar/StudentPatna.jpg",
        color: "from-orange-400/20 to-amber-200/10",
        border: "border-orange-200",
    },
    {
        name: "Priya Sharma",
        class: "Class IX",
        achievement: "School Rank 1 – 9th",
        percentage: "97%",
        subject: "Science",
        badge: "⭐",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
        color: "from-indigo-400/20 to-blue-200/10",
        border: "border-indigo-200",
    },
];

const achievementCategories = [
    {
        icon: <Microscope className="w-8 h-8" />,
        label: "Science & Olympiad",
        color: "bg-blue-50 text-blue-600 border-blue-100",
        count: "12 Medals",
        wins: [
            "District Science Olympiad – 1st Prize (2024)",
            "State Level Maths Olympiad – Silver Medal",
            "NTSE Qualified – 3 Students (2023-24)",
            "Smart City Model – National Level Participation",
        ],
    },
    {
        icon: <Trophy className="w-8 h-8" />,
        label: "Sports & Athletics",
        color: "bg-amber-50 text-amber-600 border-amber-100",
        count: "18 Trophies",
        wins: [
            "Patna School Cricket Cup – Champions (2024)",
            "National Karate Championship – Silver (Sameer, VIII)",
            "District Kabaddi – 1st Position",
            "Inter-School Badminton – Runners Up",
        ],
    },
    {
        icon: <Palette className="w-8 h-8" />,
        label: "Arts & Culture",
        color: "bg-rose-50 text-rose-600 border-rose-100",
        count: "9 Awards",
        wins: [
            "State Cultural Fest – Best Dance Group",
            "Republic Day – School Tableau Selected",
            "Rangoli Competition – District 1st",
            "Hindi Natya Spardha – Best Actor",
        ],
    },
    {
        icon: <BookOpen className="w-8 h-8" />,
        label: "Academic Excellence",
        color: "bg-emerald-50 text-emerald-600 border-emerald-100",
        count: "100% Results",
        wins: [
            "100% Pass Rate – Class X & XII (every year)",
            "3 CBSE Merit Students in 5 Years",
            "School Average above 85% – Class XII",
            "Hindi Essay Competition – State Level Win",
        ],
    },
];

const studentEvents = [
    { emoji: "🎭", title: "Annual Day 2024", desc: "Grand celebration with cultural performances, prize distribution, and Director's address.", month: "Dec 2024" },
    { emoji: "🔬", title: "Science Exhibition", desc: "Students showcased 30+ innovative models including solar cars, water purifiers, and more.", month: "Nov 2024" },
    { emoji: "🏅", title: "Sports Day", desc: "A day full of athletics, team sports, and inter-house competitions. Over 200 participants.", month: "Oct 2024" },
    { emoji: "🎨", title: "Art & Craft Week", desc: "Painting, origami, pottery and more — celebrating creativity across all classes.", month: "Sep 2024" },
    { emoji: "📚", title: "Book Fair 2024", desc: "Students explored and selected NCERT and activity books for the coming academic year.", month: "Mar 2024" },
    { emoji: "🌿", title: "Green Campus Drive", desc: "Tree plantation drive with every student planting a sapling on the school grounds.", month: "Jun 2024" },
];

const stats = [
    { val: "100%", label: "Board Pass Rate", icon: <GraduationCap className="w-7 h-7" /> },
    { val: "50+", label: "Trophies Won", icon: <Trophy className="w-7 h-7" /> },
    { val: "25+", label: "Years Legacy", icon: <Star className="w-7 h-7" /> },
    { val: "1200+", label: "Happy Students", icon: <Users className="w-7 h-7" /> },
];

const StudentAchievers = () => {
    const [openCategory, setOpenCategory] = useState(0);

    return (
        <div className="min-h-screen bg-slate-50 font-['Plus Jakarta Sans'] scroll-smooth overflow-x-hidden">
            <PageHero 
                title="Student"
                italicTitle="Excellence"
                tag="Our Pride"
                subtitle="Celebrating the performance and achievements of our exceptional students."
                bgImage="/GyanSagar/Student.jpg"
                accentColor="text-amber-500"
            />

            {/* ─── STATS BAR ─── */}
            <section className="bg-indigo-600 py-10 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                    {stats.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                            <div className="flex justify-center mb-2 text-amber-300">{s.icon}</div>
                            <p className="text-3xl md:text-4xl font-extrabold text-amber-300">{s.val}</p>
                            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-200">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── TOP BOARD TOPPERS ─── */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-3">
                            🏆 Board <span className="text-indigo-600">Toppers</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-base max-w-xl mx-auto">Our top scorers who have made Gyan Sagar proud in board examinations.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {toppers.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className={`bg-white rounded-[2rem] md:rounded-[3rem] border-2 ${t.border} shadow-xl overflow-hidden group`}
                            >
                                <div className={`h-48 md:h-56 overflow-hidden relative`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${t.color}`} />
                                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
                                    <div className="absolute top-3 md:top-4 right-3 md:right-4 text-2xl md:text-3xl">{t.badge}</div>
                                </div>
                                <div className="p-5 md:p-6 text-center">
                                    <h3 className="text-lg md:text-xl font-extrabold text-slate-800 mb-1">{t.name}</h3>
                                    <p className="text-indigo-600 font-extrabold text-[10px] md:text-xs uppercase tracking-widest mb-2">{t.achievement}</p>
                                    <p className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">{t.percentage}</p>
                                    <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">{t.class} • {t.subject}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ACHIEVEMENT CATEGORIES ─── */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-3">
                            Achievements <span className="text-indigo-600">Gallery</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-base max-w-xl mx-auto">We don't just study — we compete, we win, we grow.</p>
                    </div>

                    {/* Category Tabs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {achievementCategories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setOpenCategory(i)}
                                className={`p-4 md:p-6 rounded-[1.5rem] md:rounded-3xl border-2 transition-all text-left group ${openCategory === i ? cat.color + ' shadow-xl scale-[1.02]' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-200'}`}
                            >
                                <div className={`mb-2 md:mb-3 ${openCategory === i ? '' : 'opacity-40'}`}>
                                    {React.cloneElement(cat.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                                </div>
                                <p className="font-extrabold text-xs md:text-sm leading-tight">{cat.label}</p>
                                <p className="text-[10px] md:text-xs font-extrabold mt-1 opacity-60 uppercase tracking-widest">{cat.count}</p>
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={openCategory}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-white shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${achievementCategories[openCategory].color} flex items-center justify-center`}>
                                    {React.cloneElement(achievementCategories[openCategory].icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-4xl font-extrabold">{achievementCategories[openCategory].label}</h3>
                                    <p className="text-slate-400 font-extrabold text-[10px] md:text-sm">{achievementCategories[openCategory].count}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {achievementCategories[openCategory].wins.map((win, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10">
                                        <Medal className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                        <p className="text-slate-200 font-extrabold text-[11px] md:text-sm leading-relaxed">{win}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ─── RECENT SCHOOL EVENTS ─── */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-3">
                            School <span className="text-indigo-600">Events</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-base max-w-xl mx-auto">A year full of learning, fun, and growth.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {studentEvents.map((ev, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <span className="text-4xl mb-5 block">{ev.emoji}</span>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-indigo-600 transition-colors">{ev.title}</h3>
                                    <span className="text-[10px] font-extrabold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest whitespace-nowrap">{ev.month}</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{ev.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ADMISSION CTA ─── */}
            <section className="py-20 px-4 bg-indigo-600 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <Heart className="w-12 h-12 text-rose-400 mx-auto mb-6 animate-pulse" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        Want Your Child to be the Next Achiever?
                    </h2>
                    <p className="text-indigo-200 text-lg font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                        Admissions open for NC to 12th. Join the Gyan Sagar family and unlock your child's true potential.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/admission-inquiry" className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black hover:scale-105 transition-all shadow-xl flex items-center gap-2">
                            Apply for Admission <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/917979001951?text=Hello! I want admission information for Gyan Sagar Public School."
                            target="_blank" rel="noreferrer"
                            className="px-10 py-4 bg-[#25D366] text-white rounded-2xl font-black hover:bg-green-700 transition-all shadow-xl flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            WhatsApp Us
                        </a>
                        <a href="tel:+917979001951" className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-black hover:bg-white/20 transition-all flex items-center gap-2">
                            <Phone className="w-5 h-5" /> +91 7979 001 951
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentAchievers;
