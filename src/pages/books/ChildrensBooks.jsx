import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, ChevronRight, BookOpen, Rocket, Compass, Heart, PlayCircle, X, Search, Moon } from 'lucide-react';
import childrenBooksData from '../../data/children_books.json';
import ChildrenBookReader from '../../components/ChildrenBookReader';
import ChildrenAudioPlayer from '../../components/ChildrenAudioPlayer';

const BookModal = ({ book, isOpen, onClose }) => {
    if (!isOpen || !book) return null;
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-slate-900/60 z-[999] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        className="bg-white rounded-[3rem] p-8 md:p-12 max-w-4xl w-full relative shadow-2xl flex flex-col md:flex-row gap-10 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 z-10 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                        
                        <div className="w-full md:w-2/5 relative">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">
                                <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                                     <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                        {book.badge}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-3/5 flex flex-col justify-center relative z-10">
                            <h3 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight tracking-tight mb-2 font-['Comic_Sans_MS',_cursive,sans-serif]">{book.title}</h3>
                            <p className="text-lg font-bold text-indigo-500 mb-6">By {book.author}</p>
                            
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Dive into the magical world of <strong>{book.title}</strong>! A wonderful adventure awaits you inside these pages. Enjoy reading stories filled with fun, learning, and exciting discoveries.
                            </p>
                            
                            <div className="flex items-center gap-8 mb-8 pb-8 border-b border-slate-100">
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                                        <span className="text-2xl font-black text-slate-800">{book.rating}</span>
                                    </div>
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Rating</p>
                                </div>
                                <div className="w-px h-12 bg-slate-100" />
                                <div>
                                    <div className="text-3xl font-black text-emerald-500 mb-1">₹{book.price}</div>
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Price</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button 
                                    onClick={() => onClose(book)} 
                                    className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <BookOpen className="w-5 h-5" /> Start Reading
                                </button>
                                <button 
                                    onClick={() => onClose(null, book)}
                                    className="w-full sm:w-auto px-8 py-4 bg-amber-100 text-amber-700 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-amber-200 transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <PlayCircle className="w-5 h-5" /> Listen Audio
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


const ChildrensBooks = () => {
    const [categories] = useState(childrenBooksData);
    const [activeTab, setActiveTab] = useState(childrenBooksData[0]?.category || null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);
    const [readingBook, setReadingBook] = useState(null);
    const [audioBook, setAudioBook] = useState(null);

    const filteredBooks = categories.find(c => c.category === activeTab)?.books.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
        <div className="min-h-screen bg-[#F0F7FA] font-sans selection:bg-amber-200 selection:text-amber-900 pb-20">
            <BookModal 
                book={selectedBook} 
                isOpen={!!selectedBook} 
                onClose={(bookToRead, bookToListen) => {
                    setSelectedBook(null);
                    if (bookToRead && bookToRead.id) {
                        setReadingBook(bookToRead);
                    }
                    if (bookToListen && bookToListen.id) {
                        setAudioBook(bookToListen);
                    }
                }} 
            />
            <ChildrenBookReader
                book={readingBook}
                isOpen={!!readingBook}
                onClose={() => setReadingBook(null)}
            />

            <ChildrenAudioPlayer
                book={audioBook}
                isOpen={!!audioBook}
                onClose={() => setAudioBook(null)}
            />            {/* PREMIUM STUDENT AUTHOR STYLE HERO SECTION */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] rounded-[3.5rem] p-4 md:p-8 lg:p-16 text-white shadow-[0_30px_100px_-20px_rgba(99,102,241,0.4)] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16"
                    >
                        {/* Stardust Texture Overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                        
                        {/* Text Content */}
                        <div className="lg:w-1/2 relative z-10 text-center lg:text-left pt-8 lg:pt-0">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 shadow-lg shadow-black/5"
                            >
                                <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-white">Kids Story Corner</span>
                            </motion.div>
                            
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-6xl md:text-8xl lg:text-[100px] font-black mb-8 leading-[0.9] tracking-tighter font-['Comic_Sans_MS',_cursive,sans-serif]"
                                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}
                            >
                                Magical <br/>
                                <span className="text-[#FFEB3B] drop-shadow-[0_4px_10px_rgba(255,235,59,0.3)]">Adventures</span>
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg md:text-2xl text-white/90 font-medium mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-md"
                            >
                                Discover 80+ amazing stories! From classic tales like <span className="text-white font-black underline decoration-amber-400 decoration-2 underline-offset-4">Andher Nagari Chaupat Raja</span> to space explorers.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <button className="px-10 py-5 bg-white text-indigo-600 rounded-3xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl hover:shadow-white/20 active:scale-95 flex items-center gap-3 group">
                                    Start Exploring <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>

                        {/* Visuals Content */}
                        <div className="lg:w-1/2 relative z-10 w-full max-w-lg mx-auto lg:mx-0 pb-12 lg:pb-0">
                            {/* Main Card with Scale/Hover Effect */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                whileHover={{ scale: 1.02, rotate: -2 }}
                                className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border-8 border-white animate-bounce-subtle cursor-pointer group"
                            >
                                <img 
                                    src="/images/books/story_boy_forest_1773311645566.png" 
                                    alt="3D Boy Forest" 
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-60" />
                            </motion.div>

                            {/* Floating Circular Avatars */}
                            {/* Top Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, type: 'spring' }}
                                whileHover={{ scale: 1.2, zIndex: 50 }}
                                className="absolute -top-10 -right-4 md:-right-10 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-[6px] md:border-[10px] border-white shadow-2xl z-20 group"
                            >
                                <img src="/images/books/story_fox_friend_1773311872940.png" className="w-full h-full object-cover transition-transform group-hover:rotate-6" alt="Fox friend" />
                            </motion.div>

                            {/* Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: 'spring' }}
                                whileHover={{ scale: 1.2, zIndex: 50 }}
                                className="absolute -bottom-8 -left-4 md:-left-12 w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl z-20 group"
                            >
                                <img src="/images/books/space_boy_1773311898148.png" className="w-full h-full object-cover transition-transform group-hover:-rotate-6" alt="Space boy" />
                            </motion.div>
                            
                            {/* Accent Sparkle Elements */}
                            <motion.div 
                                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-1/4 -left-10 text-amber-300"
                            >
                                <Sparkles className="w-12 h-12" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
n>

            {/* CATEGORY EXPLORER */}
            <section className="py-10 max-w-7xl mx-auto px-4 relative z-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-3xl shadow-lg shadow-indigo-100 border border-indigo-50">
                    <div className="flex-1 w-full overflow-x-auto hide-scrollbar">
                        <div className="flex gap-2 p-2">
                            {categories.map((cat, idx) => (
                                <button
                                    key={cat.category}
                                    onClick={() => { setActiveTab(cat.category); setSearchQuery(""); }}
                                    className={`px-6 py-4 rounded-2xl font-black text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                                        activeTab === cat.category 
                                            ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200 scale-105' 
                                            : 'bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
                                    }`}
                                >
                                    {idx % 3 === 0 ? <Star className="w-4 h-4" /> : idx % 3 === 1 ? <Moon className="w-4 h-4" /> : <Rocket className="w-4 h-4" />}
                                    {cat.category}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="relative w-full md:w-64 shrink-0 px-2">
                        <input 
                            type="text" 
                            placeholder="Find a story..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-indigo-50/50 border-none text-indigo-900 placeholder:text-indigo-300 font-bold focus:ring-4 focus:ring-indigo-100 transition-all"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" />
                    </div>
                </div>

                {/* CURRENT CATEGORY HEADER */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-10 text-center md:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-2 font-['Comic_Sans_MS',_cursive,sans-serif]">
                            {activeTab}
                        </h2>
                        <p className="text-xl text-slate-500 font-medium">
                            {categories.find(c => c.category === activeTab)?.description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* BOOKS GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredBooks.map((book, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: index * 0.05 }}
                                key={book.id}
                                onClick={() => setSelectedBook({...book, category: activeTab})}
                                className="group cursor-pointer bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-300 border border-slate-100 relative"
                            >
                                <div className="absolute top-2 right-2 z-10">
                                    <span className="bg-amber-400 text-amber-950 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                                        {book.badge}
                                    </span>
                                </div>
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative bg-indigo-50">
                                    <img 
                                        src={book.cover} 
                                        alt={book.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    {/* Playful hover overlay */}
                                    <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="font-black text-lg text-slate-800 line-clamp-2 leading-tight mb-1 group-hover:text-indigo-600 transition-colors font-['Comic_Sans_MS',_cursive,sans-serif]">{book.title}</h4>
                                    <p className="text-sm font-bold text-slate-400 mb-2 line-clamp-1">{book.author}</p>
                                    <div className="flex items-center justify-center gap-1 bg-slate-50 py-1.5 px-3 rounded-full w-fit mx-auto border border-slate-100">
                                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                        <span className="font-bold text-slate-700 text-sm">{book.rating}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {filteredBooks.length === 0 && (
                            <div className="col-span-full py-20 text-center">
                                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-10 h-10 text-slate-300" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-800 mb-2">Oh no! Story not found!</h3>
                                <p className="text-slate-500">Try searching for another magical tale.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default ChildrensBooks;
