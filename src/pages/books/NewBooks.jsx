import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Award, Star, Quote, ArrowUpRight, Zap, Sparkles, Navigation, Activity, Globe, Download, X, BookmarkPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import RealisticBookReader from '../../components/RealisticBookReader';

// Mock data for new book releases adapted with colors
const NEW_RELEASES = [
    {
        id: "nr1",
        title: "The Silent Echo",
        author: "Meera Kapoor",
        category: "Thriller",
        rating: 4.8,
        price: 350,
        cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Last Week",
        isBestseller: true,
        badge: "Hot Release",
        description: "A gripping tale of secrets that echo through generations in a small mountain town.",
        tags: ["Mystery", "Debut Novel"],
        color: "from-cyan-500/10 to-blue-600/10",
        stats: { reads: "12.5K", awards: 4 }
    },
    {
        id: "nr2",
        title: "Neon Skies",
        author: "Rahul Tyagi",
        category: "Sci-Fi",
        rating: 4.9,
        price: 280,
        cover: "https://images.unsplash.com/photo-1614729939124-032f0b5609ce?auto=format&fit=crop&w=800&q=80",
        publishedDate: "3 Days Ago",
        isBestseller: false,
        badge: "Just Added",
        description: "In a cyberpunk future, one hacker discovers a code that could rewrite reality itself.",
        tags: ["Cyberpunk", "Action"],
        color: "from-pink-500/10 to-rose-600/10",
        stats: { reads: "8.2K", awards: 1 }
    },
    {
        id: "nr3",
        title: "Whispers of the Ancestors",
        author: "Aisha Rahman",
        category: "Historical Fiction",
        rating: 4.7,
        price: 420,
        cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Today",
        isBestseller: true,
        badge: "Editor's Pick",
        description: "An epic journey tracing a lost lineage through the vibrant landscape of ancient India.",
        tags: ["History", "Culture"],
        color: "from-emerald-500/10 to-teal-600/10",
        stats: { reads: "15.1K", awards: 3 }
    },
    {
        id: "nr4",
        title: "The Art of Stillness",
        author: "Kabir Das",
        category: "Self-Help",
        rating: 5.0,
        price: 250,
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Just Now",
        isBestseller: false,
        badge: "Exclusive",
        description: "Finding peace and purpose in a world that never stops moving.",
        tags: ["Philosophy", "Mindfulness"],
        color: "from-amber-500/10 to-orange-600/10",
        stats: { reads: "5.4K", awards: 2 }
    },
    {
        id: "nr5",
        title: "Midnight Sonatas",
        author: "Shreya Ghoshal",
        category: "Poetry",
        rating: 4.6,
        price: 180,
        cover: "https://images.unsplash.com/photo-1509273322744-93d3958ee15a?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Yesterday",
        isBestseller: false,
        badge: "Trending",
        description: "A collection of poems penned under the starlight, exploring love and loss.",
        tags: ["Romance", "Verse"],
        color: "from-indigo-500/10 to-blue-700/10",
        stats: { reads: "10.8K", awards: 0 }
    },
    {
        id: "nr6",
        title: "Quantum Paradox",
        author: "Dev Patel",
        category: "Science",
        rating: 4.9,
        price: 500,
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
        publishedDate: "2 Weeks Ago",
        isBestseller: true,
        badge: "Must Read",
        description: "Unraveling the most complex mysteries of the universe in a way anyone can understand.",
        tags: ["Physics", "Education"],
        color: "from-purple-500/10 to-pink-600/10",
        stats: { reads: "22.3K", awards: 5 }
    },
    {
        id: "nr7",
        title: "The Golden House",
        author: "Vikram Seth",
        category: "Biography",
        rating: 4.5,
        price: 450,
        cover: "https://images.unsplash.com/photo-1543003923-435a62abbcc5?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Last Month",
        isBestseller: false,
        badge: "Biography",
        description: "An intimate look at the rise and fall of a powerful family in modern Mumbai.",
        tags: ["Biography", "Drama"],
        color: "from-rose-500/10 to-orange-600/10",
        stats: { reads: "6.9K", awards: 2 }
    },
    {
        id: "nr8",
        title: "Shadow of the Wind",
        author: "Arundhati Roy",
        category: "Adventure",
        rating: 4.9,
        price: 320,
        cover: "https://images.unsplash.com/photo-1509273322744-93d3958ee15a?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Last Month",
        isBestseller: true,
        badge: "Trending",
        description: "A thrilling journey through the forgotten streets of old Calcutta.",
        tags: ["Adventure", "Mystery"],
        color: "from-slate-500/10 to-black/10",
        stats: { reads: "18.1K", awards: 4 }
    }
];

const NewBookCard = ({ book, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            style={{ perspective: "1000px" }}
            className="group relative flex flex-col bg-white/70 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl overflow-hidden cursor-pointer"
            onClick={() => onClick(book)}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative h-80 overflow-hidden bg-slate-100 p-4">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {book.badge}
                    </span>
                </div>
            </div>

            <div className="relative p-6 space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors line-clamp-1">{book.title}</h3>
                    <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">By {book.author}</p>
                </div>

                <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed min-h-[4.5rem]">
                    {book.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                    <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <p className="text-sm font-bold text-slate-700">{book.rating}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-700">{book.stats.reads} Reads</p>
                    </div>
                    <div>
                        <p className="text-lg font-black text-slate-900 italic">₹{book.price}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const BookDetailModal = ({ book, isOpen, onClose }) => {
    if (!isOpen || !book) return null;
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        className="bg-white rounded-3xl p-8 max-w-2xl w-full relative shadow-2xl flex flex-col md:flex-row gap-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 z-10 bg-white/50 backdrop-blur-md rounded-full p-1">
                            <X className="w-6 h-6" />
                        </button>
                        
                        <div className="w-full md:w-1/3">
                            <img src={book.cover} alt={book.title} className="w-full aspect-[2/3] rounded-2xl object-cover shadow-lg" />
                        </div>
                        
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                            <div className="mb-4">
                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest rounded-full">{book.category}</span>
                                <h3 className="text-3xl font-black text-slate-900 mt-3 leading-tight tracking-tight">{book.title}</h3>
                                <p className="text-md font-bold text-slate-500 uppercase tracking-wider mt-1">By {book.author}</p>
                            </div>
                            
                            <p className="text-slate-700 text-base leading-relaxed mb-6">{book.description}</p>
                            
                            <div className="grid grid-cols-3 gap-4 text-center mb-6 py-4 border-y border-slate-100">
                                <div>
                                    <Star className="w-5 h-5 mx-auto text-amber-500 mb-1" />
                                    <p className="text-sm font-bold text-slate-700">{book.rating}</p>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Rating</p>
                                </div>
                                <div>
                                    <Activity className="w-5 h-5 mx-auto text-emerald-500 mb-1" />
                                    <p className="text-sm font-bold text-slate-700">{book.stats.reads}</p>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Readers</p>
                                </div>
                                <div>
                                    <Award className="w-5 h-5 mx-auto text-blue-500 mb-1" />
                                    <p className="text-sm font-bold text-slate-700">{book.stats.awards}</p>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Awards</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <button className="flex-1 py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-colors shadow-lg">
                                    Read Sample
                                </button>
                                <button className="px-6 py-4 bg-slate-100 text-slate-900 rounded-xl font-black italic text-lg hover:bg-slate-200 transition-colors">
                                    ₹{book.price}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const NewBooks = () => {
    const [selectedBookDetail, setSelectedBookDetail] = useState(null);
    const [selectedReaderBook, setSelectedReaderBook] = useState(null);

    return (
        <div className="min-h-screen bg-white">
            <BookDetailModal
                book={selectedBookDetail}
                isOpen={!!selectedBookDetail}
                onClose={() => setSelectedBookDetail(null)}
            />
            {/* The Reader expects an author object structure currently, but we pass book to avoid breaking for now. Ideally adapt RealisticBookReader to handle books */}
            <RealisticBookReader
                author={selectedReaderBook ? { name: selectedReaderBook.title, img: selectedReaderBook.cover } : null}
                isOpen={!!selectedReaderBook}
                onClose={() => setSelectedReaderBook(null)}
            />

            {/* FULL SCREEN HERO WITH FIXED BG */}
            <section className="relative h-[92vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80')" }}
                />
                <div className="absolute inset-0 bg-black/60 z-10" />

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full text-center">
                    <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                        <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Library Updates</span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 italic leading-tight drop-shadow-2xl">
                            New <span className="text-amber-400">Arrivals</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-white/80 text-lg md:text-2xl font-light italic leading-relaxed">
                            "Discover the latest masterpieces fresh off the press. Dive into new worlds today."
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent" />
                </motion.div>
            </section>

            {/* EDITOR'S PICK DEEP DIVE */}
            <section className="py-16 bg-white text-slate-900 overflow-hidden relative border-y border-slate-100">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent)]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-3/5">
                            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="space-y-6">
                                <div className="inline-flex items-center gap-4">
                                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-black text-white shadow-lg shadow-amber-500/20 text-sm">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">Editor's Pick</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-serif italic leading-none">{NEW_RELEASES[0].title.split(' ')[0]} <br /><span className="text-amber-500">{NEW_RELEASES[0].title.split(' ').slice(1).join(' ')}</span></h2>
                                <p className="text-xl text-slate-500 font-light italic leading-relaxed max-w-2xl">
                                    "{NEW_RELEASES[0].description}"
                                </p>
                                <div className="flex gap-12 pt-6 border-t border-slate-100 items-center">
                                    <div>
                                        <div className="text-3xl font-black text-slate-900">{NEW_RELEASES[0].stats.reads}</div>
                                        <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">Readers</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-amber-500 italic">₹{NEW_RELEASES[0].price}</div>
                                        <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">Price</p>
                                    </div>
                                    <div className="flex gap-4 items-center pl-6 border-l border-slate-100">
                                        <button onClick={() => setSelectedReaderBook(NEW_RELEASES[0])} className="px-8 py-4 bg-slate-900 text-white font-black uppercase text-[10px] rounded-2xl hover:bg-amber-500 transition-all shadow-xl shadow-slate-900/10">Read Extract</button>
                                        <button onClick={() => setSelectedBookDetail(NEW_RELEASES[0])} className="px-8 py-4 border border-slate-200 text-slate-900 font-black uppercase text-[10px] rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-2">Details</button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-2/5 relative">
                            <motion.div initial={{ scale: 0.9, rotate: 5 }} whileInView={{ scale: 1, rotate: 0 }} className="relative z-10 w-3/4 mx-auto">
                                <div className="p-4 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-2xl">
                                    <img src={NEW_RELEASES[0].cover} className="w-full h-auto aspect-[2/3] object-cover rounded-[1.5rem] shadow-inner" alt="cover" />
                                </div>
                                <div className="absolute -bottom-6 -right-12 bg-amber-500 p-6 rounded-[2rem] shadow-2xl hidden md:block max-w-[200px]">
                                    <Quote className="w-6 h-6 text-white mb-2" />
                                    <p className="text-white font-black italic text-sm">"A masterpiece of modern thriller."</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEAMLESS TRANSITION TICKER */}
            <section className="py-20 bg-white border-b border-slate-100 relative z-30">
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-16 py-2">
                        {[
                            "150+ NEW BOOKS THIS WEEK", "2M+ PAGES READ", "FRESH STORIES", "AWARD-WINNING AUTHORS",
                            "150+ NEW BOOKS THIS WEEK", "2M+ PAGES READ", "FRESH STORIES", "AWARD-WINNING AUTHORS"
                        ].map((text, i) => (
                            <span key={i} className="text-4xl font-black text-transparent stroke-slate-200 stroke-1 hover:text-amber-600 hover:stroke-amber-600 transition-all cursor-default opacity-50 uppercase tracking-widest">
                                {text}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW ARRIVALS GRID */}
            <section className="py-24 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-5xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Fresh <span className="text-amber-600">Releases</span></h2>
                            <p className="text-slate-500 font-serif italic text-xl">The most recent additions to our library</p>
                        </div>
                        <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-amber-600 transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2">
                            View Full Catalog <ArrowUpRight className="w-4 h-4"/>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {NEW_RELEASES.slice(0, 8).map((book, index) => (
                            <NewBookCard key={book.id} book={book} index={index} onClick={setSelectedBookDetail} />
                        ))}
                    </div>
                </div>
            </section>

            {/* TRENDING NOW (LIST UI) */}
            <section className="py-32 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-1 space-y-8">
                            <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none text-slate-900">Trending <br /><span className="text-amber-600">Now</span></h2>
                            <p className="text-slate-500 text-lg leading-relaxed font-light italic border-l-4 border-amber-500 pl-8">
                                "See which new releases are flying off the digital shelves this week."
                            </p>
                            <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
                                <h4 className="text-amber-600 text-4xl font-black mb-1">Top 6</h4>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Most Purchased This Week</p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-4">
                            {NEW_RELEASES.slice(0, 6).map((book, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 20 }}
                                    onClick={() => setSelectedBookDetail(book)}
                                    className="flex items-center justify-between p-6 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 rounded-3xl transition-all cursor-pointer group shadow-sm hover:shadow-md"
                                >
                                    <div className="flex items-center gap-6 md:gap-8">
                                        <span className="text-3xl md:text-4xl font-black text-slate-200 group-hover:text-amber-500 transition-colors">0{i + 1}</span>
                                        <div className="w-12 h-16 md:w-16 md:h-20 rounded-md overflow-hidden shadow-lg shrink-0">
                                            <img src={book.cover} className="w-full h-full object-cover" alt="cover" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">{book.title}</h4>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">By {book.author}</p>
                                        </div>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <div className="text-sm font-black text-slate-900">{book.category}</div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter flex items-center justify-end gap-1 mt-1">
                                            <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> {book.rating}
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-amber-500 hidden sm:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENTO GRID LAYOUT */}
            <section className="py-32 px-4 max-w-7xl mx-auto bg-slate-50">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">The <span className="text-amber-600">Spotlight</span></h2>
                    <p className="text-slate-500 font-serif hidden md:block italic">Featured Books & Collections</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
                    <div onClick={() => setSelectedBookDetail(NEW_RELEASES[1])} className="col-span-2 row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl cursor-pointer">
                        <img src={NEW_RELEASES[1].cover} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" alt="cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white z-10 w-3/4">
                            <span className="px-4 py-1 bg-amber-500 rounded-full text-[10px] font-black uppercase mb-3 block w-fit">Genre Defining</span>
                            <h3 className="text-4xl font-black mb-2">{NEW_RELEASES[1].title}</h3>
                            <p className="text-white/80 text-sm font-medium mb-4 line-clamp-2">{NEW_RELEASES[1].description}</p>
                            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{NEW_RELEASES[1].category} • {NEW_RELEASES[1].publishedDate}</p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-1 rounded-[2.5rem] bg-amber-500 p-8 flex flex-col justify-between text-white shadow-xl hover:-rotate-2 transition-transform">
                        <BookmarkPlus className="w-10 h-10" />
                        <div>
                            <p className="text-4xl font-black tracking-tighter">15+</p>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Genres Updated</p>
                        </div>
                    </div>

                    <div onClick={() => setSelectedBookDetail(NEW_RELEASES[2])} className="col-span-1 row-span-2 relative rounded-[3rem] bg-slate-100 overflow-hidden group border border-slate-200 shadow-lg cursor-pointer">
                        <img src={NEW_RELEASES[2].cover} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="cover" />
                        <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-md text-amber-600">
                            <Award className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 row-span-1 rounded-[2.5rem] bg-slate-900 p-10 flex flex-col items-center justify-center text-white relative shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.8),transparent)]" />
                        <p className="text-2xl font-black italic text-center leading-tight tracking-tight relative z-10">"Discover <br />the Never-Before-Seen."</p>
                        <div className="absolute -top-3 -left-3 w-14 h-14 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center shadow-lg uppercase text-[10px] font-black -rotate-12">NEW</div>
                    </div>
                </div>
            </section>

            {/* LIBRARY GRID OF SIMPLE COVERS */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-6xl font-black uppercase tracking-tighter text-slate-900 italic">Full <span className="text-amber-500">Collection</span></h2>
                        <p className="text-slate-500 text-xl font-serif italic max-w-2xl mx-auto">Explore the complete catalog of latest additions to our marketplace.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                        {/* Repeat data to fill the grid up to 12 items */}
                        {[...NEW_RELEASES, ...NEW_RELEASES].slice(0, 12).map((book, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedBookDetail(book)}
                                className="space-y-3 cursor-pointer group"
                            >
                                <div className="aspect-[2/3] bg-slate-100 rounded-lg md:rounded-2xl overflow-hidden relative shadow-md group-hover:shadow-2xl transition-all border border-slate-200">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                    <img src={book.cover} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="book" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                        <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-xl">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">{book.title}</h5>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest line-clamp-1">{book.author}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewBooks;

