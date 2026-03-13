import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, GraduationCap, ChevronRight, Star, Filter } from 'lucide-react';

const classData = [
    {
        class: "Nursery / NC",
        color: "bg-pink-50", border: "border-pink-200", text: "text-pink-600",
        subjects: [
            { name: "English Rhymes & Stories", publisher: "NCERT", icon: "📖" },
            { name: "Hindi Varnamala", publisher: "S. Chand", icon: "📚" },
            { name: "Maths (Numbers 1-100)", publisher: "NCERT", icon: "🔢" },
            { name: "Drawing & Craft Book", publisher: "Activity Books", icon: "🎨" },
            { name: "GK for Tiny Tots", publisher: "Navneet", icon: "🌍" },
        ]
    },
    {
        class: "LKG",
        color: "bg-orange-50", border: "border-orange-200", text: "text-orange-600",
        subjects: [
            { name: "English (My First Book)", publisher: "S. Chand", icon: "📖" },
            { name: "Hindi Sulekh", publisher: "Goyal Brothers", icon: "📚" },
            { name: "Maths (Counting & Shapes)", publisher: "NCERT", icon: "🔢" },
            { name: "EVS (My World)", publisher: "Navneet", icon: "🌱" },
            { name: "Art & Craft", publisher: "Activity Series", icon: "🎨" },
        ]
    },
    {
        class: "UKG",
        color: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700",
        subjects: [
            { name: "English Grammar Primer", publisher: "S. Chand", icon: "📖" },
            { name: "Hindi Mala", publisher: "Goyal Brothers", icon: "📚" },
            { name: "Maths (Addition & Subtraction)", publisher: "NCERT", icon: "🔢" },
            { name: "EVS (Nature & Me)", publisher: "Navneet", icon: "🌱" },
            { name: "GK Junior", publisher: "Navneet", icon: "🌍" },
        ]
    },
    {
        class: "Class 1",
        color: "bg-green-50", border: "border-green-200", text: "text-green-700",
        subjects: [
            { name: "Marigold - English", publisher: "NCERT", icon: "📖" },
            { name: "Rimjhim - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Maths Magic", publisher: "NCERT", icon: "🔢" },
            { name: "Aas Paas (EVS)", publisher: "NCERT", icon: "🌱" },
        ]
    },
    {
        class: "Class 2",
        color: "bg-teal-50", border: "border-teal-200", text: "text-teal-700",
        subjects: [
            { name: "Marigold - English", publisher: "NCERT", icon: "📖" },
            { name: "Rimjhim - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Maths Magic", publisher: "NCERT", icon: "🔢" },
            { name: "Aas Paas (EVS)", publisher: "NCERT", icon: "🌱" },
        ]
    },
    {
        class: "Class 3",
        color: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700",
        subjects: [
            { name: "Marigold - English", publisher: "NCERT", icon: "📖" },
            { name: "Rimjhim - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Maths Magic", publisher: "NCERT", icon: "🔢" },
            { name: "Aas Paas (EVS)", publisher: "NCERT", icon: "🌱" },
            { name: "Computer Masti", publisher: "IntelliEdge", icon: "💻" },
        ]
    },
    {
        class: "Class 4",
        color: "bg-blue-50", border: "border-blue-200", text: "text-blue-700",
        subjects: [
            { name: "Marigold - English", publisher: "NCERT", icon: "📖" },
            { name: "Rimjhim - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Maths Magic", publisher: "NCERT", icon: "🔢" },
            { name: "Aas Paas (EVS)", publisher: "NCERT", icon: "🌱" },
            { name: "Computer Masti", publisher: "IntelliEdge", icon: "💻" },
            { name: "General Knowledge", publisher: "Navneet", icon: "🌍" },
        ]
    },
    {
        class: "Class 5",
        color: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700",
        subjects: [
            { name: "Marigold - English", publisher: "NCERT", icon: "📖" },
            { name: "Rimjhim - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Maths Magic", publisher: "NCERT", icon: "🔢" },
            { name: "Aas Paas (EVS)", publisher: "NCERT", icon: "🌱" },
            { name: "Computer Masti", publisher: "IntelliEdge", icon: "💻" },
        ]
    },
    {
        class: "Class 6",
        color: "bg-violet-50", border: "border-violet-200", text: "text-violet-700",
        subjects: [
            { name: "Honeysuckle - English", publisher: "NCERT", icon: "📖" },
            { name: "Vasant - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Mathematics", publisher: "NCERT", icon: "🔢" },
            { name: "Science", publisher: "NCERT", icon: "🔬" },
            { name: "Social Science - Our Past", publisher: "NCERT", icon: "🌍" },
            { name: "Sanskrit (Ruchira)", publisher: "NCERT", icon: "🕉️" },
        ]
    },
    {
        class: "Class 7",
        color: "bg-purple-50", border: "border-purple-200", text: "text-purple-700",
        subjects: [
            { name: "Honeycomb - English", publisher: "NCERT", icon: "📖" },
            { name: "Vasant 2 - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Mathematics", publisher: "NCERT", icon: "🔢" },
            { name: "Science", publisher: "NCERT", icon: "🔬" },
            { name: "Social Science - Our Past II", publisher: "NCERT", icon: "🌍" },
            { name: "Sanskrit (Ruchira 2)", publisher: "NCERT", icon: "🕉️" },
        ]
    },
    {
        class: "Class 8",
        color: "bg-fuchsia-50", border: "border-fuchsia-200", text: "text-fuchsia-700",
        subjects: [
            { name: "Honeydew - English", publisher: "NCERT", icon: "📖" },
            { name: "Vasant 3 - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Mathematics", publisher: "NCERT", icon: "🔢" },
            { name: "Science", publisher: "NCERT", icon: "🔬" },
            { name: "Social Science - Our Past III", publisher: "NCERT", icon: "🌍" },
            { name: "Sanskrit (Ruchira 3)", publisher: "NCERT", icon: "🕉️" },
        ]
    },
    {
        class: "Class 9",
        color: "bg-rose-50", border: "border-rose-200", text: "text-rose-700",
        subjects: [
            { name: "Beehive - English", publisher: "NCERT", icon: "📖" },
            { name: "Kshitij - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Mathematics", publisher: "NCERT", icon: "🔢" },
            { name: "Science", publisher: "NCERT", icon: "🔬" },
            { name: "Social Science (History/Geo/Civics/Eco)", publisher: "NCERT", icon: "🌍" },
            { name: "Sanskrit (Shemushi)", publisher: "NCERT", icon: "🕉️" },
        ]
    },
    {
        class: "Class 10",
        color: "bg-red-50", border: "border-red-200", text: "text-red-700",
        subjects: [
            { name: "First Flight - English", publisher: "NCERT", icon: "📖" },
            { name: "Kshitij 2 - Hindi", publisher: "NCERT", icon: "📚" },
            { name: "Mathematics (Standard)", publisher: "NCERT", icon: "🔢" },
            { name: "Science", publisher: "NCERT", icon: "🔬" },
            { name: "Social Science (Board Pattern)", publisher: "NCERT", icon: "🌍" },
            { name: "Sanskrit (Shemushi 2)", publisher: "NCERT", icon: "🕉️" },
        ]
    },
    {
        class: "Class 11 – Science",
        color: "bg-sky-50", border: "border-sky-200", text: "text-sky-700",
        subjects: [
            { name: "Physics Part I & II", publisher: "NCERT", icon: "⚡" },
            { name: "Chemistry Part I & II", publisher: "NCERT", icon: "🧪" },
            { name: "Mathematics", publisher: "NCERT", icon: "🔢" },
            { name: "Biology", publisher: "NCERT", icon: "🧬" },
            { name: "English (Hornbill + Snapshots)", publisher: "NCERT", icon: "📖" },
            { name: "Computer Science / Informatics", publisher: "NCERT", icon: "💻" },
        ]
    },
    {
        class: "Class 11 – Commerce",
        color: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700",
        subjects: [
            { name: "Accountancy Part I & II", publisher: "NCERT", icon: "📊" },
            { name: "Business Studies", publisher: "NCERT", icon: "💼" },
            { name: "Economics (Statistics + Intro)", publisher: "NCERT", icon: "📈" },
            { name: "Mathematics", publisher: "NCERT", icon: "🔢" },
            { name: "English (Hornbill + Snapshots)", publisher: "NCERT", icon: "📖" },
        ]
    },
    {
        class: "Class 11 – Humanities",
        color: "bg-amber-50", border: "border-amber-200", text: "text-amber-700",
        subjects: [
            { name: "History (Themes in World History)", publisher: "NCERT", icon: "🏛️" },
            { name: "Political Science", publisher: "NCERT", icon: "⚖️" },
            { name: "Geography (Fundamentals)", publisher: "NCERT", icon: "🌍" },
            { name: "Sociology (Introducing Sociology)", publisher: "NCERT", icon: "👥" },
            { name: "English (Hornbill + Snapshots)", publisher: "NCERT", icon: "📖" },
        ]
    },
    {
        class: "Class 12 – Science",
        color: "bg-slate-100", border: "border-slate-300", text: "text-slate-700",
        subjects: [
            { name: "Physics Part I & II", publisher: "NCERT", icon: "⚡" },
            { name: "Chemistry Part I & II", publisher: "NCERT", icon: "🧪" },
            { name: "Mathematics", publisher: "NCERT", icon: "🔢" },
            { name: "Biology", publisher: "NCERT", icon: "🧬" },
            { name: "English (Flamingo + Vistas)", publisher: "NCERT", icon: "📖" },
        ]
    },
    {
        class: "Class 12 – Commerce",
        color: "bg-lime-50", border: "border-lime-200", text: "text-lime-700",
        subjects: [
            { name: "Accountancy Part I & II", publisher: "NCERT", icon: "📊" },
            { name: "Business Studies", publisher: "NCERT", icon: "💼" },
            { name: "Economics (Macro + Micro)", publisher: "NCERT", icon: "📈" },
            { name: "Mathematics", publisher: "NCERT", icon: "🔢" },
            { name: "English (Flamingo + Vistas)", publisher: "NCERT", icon: "📖" },
        ]
    },
    {
        class: "Class 12 – Humanities",
        color: "bg-orange-50", border: "border-orange-200", text: "text-orange-700",
        subjects: [
            { name: "History (Themes in Indian History I/II/III)", publisher: "NCERT", icon: "🏛️" },
            { name: "Political Science (Contemporary + Indian)", publisher: "NCERT", icon: "⚖️" },
            { name: "Geography (India + Practical)", publisher: "NCERT", icon: "🌍" },
            { name: "Sociology", publisher: "NCERT", icon: "👥" },
            { name: "English (Flamingo + Vistas)", publisher: "NCERT", icon: "📖" },
        ]
    },
];

const SchoolLibrary = () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(null);

    const filtered = classData.filter(c =>
        c.class.toLowerCase().includes(search.toLowerCase()) ||
        c.subjects.some(s => s.name.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-24 font-['Nunito']">
            {/* Hero */}
            <div className="max-w-5xl mx-auto px-4 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-black uppercase tracking-widest mb-6"
                >
                    <BookOpen className="w-4 h-4" /> NCERT Curriculum • CBSE Pattern
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-[900] text-slate-900 tracking-tighter mb-6"
                >
                    School <span className="text-indigo-600">Textbooks</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-slate-500 text-lg font-medium max-w-2xl mx-auto mb-10"
                >
                    Class-wise list of all textbooks followed at Gyan Sagar Public School — from Nursery to Class 12.
                </motion.p>
                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="relative max-w-xl mx-auto"
                >
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by class or subject name..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100 font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                    />
                </motion.div>
            </div>

            {/* Classes Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filtered.map((cls, idx) => (
                        <motion.div
                            key={cls.class}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            viewport={{ once: true }}
                            className={`bg-white rounded-[2.5rem] border-2 ${cls.border} shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer`}
                            onClick={() => setSelected(selected === idx ? null : idx)}
                        >
                            {/* Card Header */}
                            <div className={`${cls.color} p-6 flex items-center justify-between`}>
                                <div className="flex items-center gap-3">
                                    <GraduationCap className={`w-8 h-8 ${cls.text}`} />
                                    <div>
                                        <h3 className={`text-xl font-black ${cls.text} leading-tight`}>{cls.class}</h3>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{cls.subjects.length} Subjects</p>
                                    </div>
                                </div>
                                <ChevronRight className={`w-5 h-5 ${cls.text} transition-transform duration-300 ${selected === idx ? 'rotate-90' : ''}`} />
                            </div>

                            {/* Subject List */}
                            <AnimatePresence>
                                {selected === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 space-y-3">
                                            {cls.subjects.map((sub, i) => (
                                                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl hover:bg-white border border-transparent hover:border-slate-100 transition-all">
                                                    <span className="text-2xl">{sub.icon}</span>
                                                    <div>
                                                        <p className="font-black text-slate-800 text-sm leading-tight">{sub.name}</p>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sub.publisher}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Preview when closed */}
                            {selected !== idx && (
                                <div className="px-6 py-4 flex flex-wrap gap-2">
                                    {cls.subjects.slice(0, 3).map((sub, i) => (
                                        <span key={i} className={`text-[10px] font-black px-3 py-1 rounded-full ${cls.color} ${cls.text} border ${cls.border}`}>
                                            {sub.icon} {sub.name.split(' ')[0]}
                                        </span>
                                    ))}
                                    {cls.subjects.length > 3 && (
                                        <span className="text-[10px] font-black px-3 py-1 rounded-full bg-slate-100 text-slate-500">
                                            +{cls.subjects.length - 3} more
                                        </span>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-24">
                        <p className="text-6xl mb-6">🔍</p>
                        <p className="text-2xl font-black text-slate-400">No results found</p>
                        <p className="text-slate-400 font-medium mt-2">Try searching a different class or subject</p>
                    </div>
                )}
            </div>

            {/* Footer Note */}
            <div className="max-w-3xl mx-auto px-4 mt-20 text-center">
                <div className="bg-indigo-50 border border-indigo-100 rounded-[2rem] p-8">
                    <Star className="w-8 h-8 text-amber-500 mx-auto mb-4 fill-amber-500" />
                    <p className="text-slate-700 font-bold leading-relaxed">
                        All books follow the <strong>NCERT/CBSE curriculum</strong>. Booklist may be updated at the start of each academic session.
                        For the latest booklist, contact <strong>+91 7979 001 951</strong> or visit the school office.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SchoolLibrary;
