import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, Filter, Star, ChevronDown, Check,
    ShoppingCart, Eye, TrendingUp, Clock,
    Package, Calendar, User, ArrowUpRight,
    SlidersHorizontal, LayoutGrid, List, X
} from "lucide-react";
import { Link } from "react-router-dom";

const BookMarketplace = () => {
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState(1000);
    const [sortBy, setSortBy] = useState("newest");

    const categories = ["All", "Adventure", "Fantasy", "Mystery", "Science", "History", "Poetry", "Comics"];
    const authors_list = ["All", "Aisha Rahman", "Rahul Tyagi", "Priya Mishra", "Sam Shive", "Meera Kapoor", "Kabir Das"];

    const books = [
        {
            id: 1,
            title: "The Hidden Magic",
            author: "Aisha Rahman",
            category: "Fantasy",
            rating: 4.9,
            price: 250,
            cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
            publishedDate: "Dec 2023",
            sales: 1240,
            stock: 45,
            description: "A young girl discovers a secret portal in her grandmother's attic that leads to a realm of ancient spirits."
        },
        {
            id: 2,
            title: "Space Explorers: Mars Base",
            author: "Rahul Tyagi",
            category: "Science",
            rating: 4.8,
            price: 200,
            cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
            publishedDate: "Jan 2024",
            sales: 850,
            stock: 12,
            description: "Follow Commander Leo as he leads the first group of students to colonize the Red Planet."
        },
        {
            id: 3,
            title: "Mystery of the Old Clock",
            author: "Priya Mishra",
            category: "Mystery",
            rating: 5.0,
            price: 300,
            cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
            publishedDate: "Feb 2024",
            sales: 2100,
            stock: 0,
            description: "Every midnight, the clock strikes thirteen. What happens in the mansion's basement?"
        },
        {
            id: 4,
            title: "The Talking Tree",
            author: "Sam Shive",
            category: "Adventure",
            rating: 4.7,
            price: 180,
            cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=400&q=80",
            publishedDate: "Nov 2023",
            sales: 540,
            stock: 88,
            description: "A fable about a boy who can talk to trees and the quest to save the Great Forest."
        },
        {
            id: 5,
            title: "Kingdom of Clouds",
            author: "Meera Kapoor",
            category: "Fantasy",
            rating: 4.6,
            price: 220,
            cover: "https://images.unsplash.com/photo-1506869640319-fea1a2ab8e9d?auto=format&fit=crop&w=400&q=80",
            publishedDate: "Oct 2023",
            sales: 320,
            stock: 31,
            description: "In a world where cities float on clouds, a young aviator must stop a storm coming from below."
        },
        {
            id: 6,
            title: "Robots vs Monsters",
            author: "Kabir Das",
            category: "Comics",
            rating: 4.9,
            price: 150,
            cover: "https://images.unsplash.com/photo-1517400508447-f8dde51d48f8?auto=format&fit=crop&w=400&q=80",
            publishedDate: "Mar 2024",
            sales: 150,
            stock: 150,
            description: "The ultimate showdown between technology and ancient titans. Who will survive?"
        },
    ];

    const [selectedAuthor, setSelectedAuthor] = useState("All");

    const filteredBooks = useMemo(() => {
        return books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
            const matchesAuthor = selectedAuthor === "All" || book.author === selectedAuthor;
            const matchesPrice = book.price <= priceRange;
            return matchesSearch && matchesCategory && matchesAuthor && matchesPrice;
        }).sort((a, b) => {
            if (sortBy === "price-low") return a.price - b.price;
            if (sortBy === "price-high") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            return 0; // default newest (id based here)
        });
    }, [searchQuery, selectedCategory, selectedAuthor, priceRange, sortBy]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-['Nunito'] pt-24 pb-20">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-10">

                {/* HERO HEADER */}
                <div className="relative mb-16 rounded-[3.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-12 lg:p-20 text-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <TrendingUp className="w-4 h-4" /> Author Management Hub
                        </motion.div>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight italic">
                            Command your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Literary Empire</span>
                        </h1>
                        <p className="text-slate-400 text-lg lg:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Monitor real-time performance, manage royalties, and scale your reach across global markets.
                        </p>

                        {/* SEARCH OVERLAY */}
                        <div className="relative max-w-2xl mx-auto group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by title, author, or genre..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-20 pl-16 pr-8 bg-slate-950/50 backdrop-blur-3xl border border-slate-800 rounded-3xl text-white font-bold text-lg outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-600"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* SIDEBAR FILTERS */}
                    <div className="w-full lg:w-80 shrink-0 space-y-8">
                        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 sticky top-28">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <SlidersHorizontal className="w-5 h-5 text-slate-500" /> Filters
                                </h3>
                                {(selectedCategory !== "All" || selectedAuthor !== "All" || searchQuery !== "" || priceRange !== 1000) && (
                                    <button
                                        onClick={() => {
                                            setSelectedCategory("All");
                                            setSelectedAuthor("All");
                                            setSearchQuery("");
                                            setPriceRange(1000);
                                        }}
                                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>

                            {/* CATEGORY SELECTOR */}
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h4>
                                <div className="space-y-1">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${selectedCategory === cat
                                                ? "bg-indigo-50 text-indigo-700"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                                }`}
                                        >
                                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedCategory === cat ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 group-hover:border-slate-400'}`}>
                                                {selectedCategory === cat && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                            <span className="text-sm font-medium">{cat}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* AUTHOR SELECTOR */}
                            <div className="mb-10">
                                <h4 className="text-xs font-[900] text-slate-400 uppercase tracking-widest mb-6 px-1">Filter by Author</h4>
                                <div className="relative group">
                                    <select
                                        value={selectedAuthor}
                                        onChange={(e) => setSelectedAuthor(e.target.value)}
                                        className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 font-black text-xs uppercase tracking-widest text-slate-800 outline-none appearance-none cursor-pointer focus:border-indigo-200 focus:ring-4 focus:ring-indigo-100 transition-all"
                                    >
                                        {authors_list.map(auth => (
                                            <option key={auth} value={auth}>{auth}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* PRICE SLIDER */}
                            <div className="mb-10 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                <h4 className="text-xs font-[900] text-slate-400 uppercase tracking-widest mb-6">Price Ceiling (₹)</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="50"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-full appearance-none accent-indigo-600 cursor-pointer"
                                />
                                <div className="flex justify-between mt-4">
                                    <span className="text-lg font-black text-slate-900 italic tracking-tighter">₹0</span>
                                    <span className="text-lg font-black text-indigo-600 italic tracking-tighter">₹{priceRange}</span>
                                </div>
                            </div>

                            {/* QUICK TOOLS */}
                            <div className="pt-6 border-t border-slate-50 space-y-4">
                                <button className="w-full flex items-center gap-4 p-5 bg-indigo-50 text-indigo-600 rounded-[1.75rem] font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                                    <Package className="w-5 h-5" /> Bulk Order Enquiries
                                </button>
                                <button className="w-full flex items-center gap-4 p-5 bg-slate-900 text-white rounded-[1.75rem] font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
                                    <Calendar className="w-5 h-5" /> Upcoming Releases
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* MAIN MARKET CONTENT */}
                    <div className="flex-1 space-y-10">

                        {/* PERFORMANCE STATS BAR */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Gross Revenue", value: "₹84,250", trend: "+12.5%", color: "text-emerald-600" },
                                { label: "Pending Royalties", value: "₹12,400", trend: "Due in 4 days", color: "text-amber-600" },
                                { label: "Active Readership", value: "8,920", trend: "High Engagement", color: "text-indigo-600" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                    <div className="flex items-end justify-between">
                                        <span className={`text-2xl font-black ${stat.color} tracking-tight italic`}>{stat.value}</span>
                                        <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-md">{stat.trend}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* VIEW CONTROLS */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-8">
                                <p className="text-sm font-bold text-slate-400 italic">Showing <span className="text-slate-900 font-black">{filteredBooks.length}</span> Masterpieces</p>
                                <div className="h-4 w-px bg-slate-200 hidden md:block" />
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:bg-slate-50"}`}
                                    >
                                        <LayoutGrid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:bg-slate-50"}`}
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest hidden lg:block">Sort Intelligence:</span>
                                <div className="relative flex-1 md:flex-none">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full md:w-56 h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 font-black text-xs uppercase tracking-widest text-slate-800 outline-none appearance-none cursor-pointer focus:border-indigo-200 focus:ring-4 focus:ring-indigo-100 transition-all"
                                    >
                                        <option value="newest">Newest Arrivals</option>
                                        <option value="rating">Top Critic Rated</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* BOOK LISTINGS */}
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                layout
                                className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}
                            >
                                {filteredBooks.map((book) => (
                                    <motion.div
                                        layout
                                        key={book.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        className={`group bg-white rounded-[3rem] p-4 border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all overflow-hidden ${viewMode === "list" ? "flex flex-col md:flex-row gap-10 p-8" : ""}`}
                                    >
                                        {/* IMAGE CONTAINER */}
                                        <div className={`relative overflow-hidden rounded-2xl ${viewMode === "list" ? "w-full md:w-60 h-48 shrink-0" : "aspect-[16/10] mb-5"}`}>
                                            <img
                                                src={book.cover}
                                                alt={book.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                            />
                                            {/* OVERLAYS */}
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-md border border-slate-200 shadow-sm">
                                                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{book.category}</span>
                                                </div>
                                            </div>

                                            {/* STATUS PILL */}
                                            <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-tight border ${book.stock === 0
                                                ? "bg-rose-50 border-rose-100 text-rose-600"
                                                : "bg-emerald-50 border-emerald-100 text-emerald-600"
                                                }`}>
                                                {book.stock === 0 ? "Inactive" : "Live in Market"}
                                            </div>
                                        </div>

                                        {/* CONTENT SECTION */}
                                        <div className="flex-1 px-2 pb-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors truncate">
                                                    {book.title}
                                                </h3>
                                                <div className="flex items-center gap-1 text-slate-400">
                                                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                                    <span className="text-xs font-bold text-slate-700">{book.rating}</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-5 pt-3 border-t border-slate-50">
                                                <div className="space-y-0.5">
                                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Net Royalties</p>
                                                    <p className="text-sm font-bold text-slate-900">70% (₹{(book.price * 0.7).toFixed(0)})</p>
                                                </div>
                                                <div className="space-y-0.5 text-right">
                                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Copyright ID</p>
                                                    <p className="text-[11px] font-bold text-slate-500">NYA-{(book.id + 1000)}CP</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button className="flex-1 h-10 px-4 bg-slate-900 text-white rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                                    Manage <ArrowUpRight className="w-3.5 h-3.5" />
                                                </button>
                                                <button className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-all border border-slate-200">
                                                    <TrendingUp className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* EMPTY STATE */}
                        {filteredBooks.length === 0 && (
                            <div className="text-center py-40">
                                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-400">
                                    <X className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic mb-4">No Masterpieces Found</h3>
                                <p className="text-slate-400 font-medium max-w-sm mx-auto">We couldn't find any books matching your elite criteria. Try adjusting your premium filters.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* BOTTOM CTA: MARKETPLACE SUMMARY */}
                <div className="mt-32 p-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[4rem] text-center relative overflow-hidden shadow-3xl shadow-indigo-100">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black text-white mb-8 tracking-tighter italic">Own a Piece of <span className="text-amber-400">Literary History</span></h2>
                        <p className="text-slate-400 font-medium mb-12 text-lg italic">Every book purchased directly funds the education and creative development of our young titan authors.</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-10 py-6 rounded-[2.5rem]">
                                <span className="block text-3xl font-black text-white mb-1">12K+</span>
                                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Global Readers</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-10 py-6 rounded-[2.5rem]">
                                <span className="block text-3xl font-black text-white mb-1">₹4.5L+</span>
                                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Author Revenue</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-10 py-6 rounded-[2.5rem]">
                                <span className="block text-3xl font-black text-white mb-1">450+</span>
                                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Global Stockists</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookMarketplace;

