import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, Filter, Star, ChevronDown, Check,
    ShoppingCart, Eye, TrendingUp, Clock,
    Package, Calendar, User, ArrowUpRight,
    SlidersHorizontal, LayoutGrid, List, X,
    Activity, Globe, ShieldCheck, Zap, TrendingDown
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock real-time data data and constants
const CATEGORIES = ["All", "Adventure", "Fantasy", "Mystery", "Science", "History", "Poetry", "Comics", "Biography", "Business"];
const AUTHORS_LIST = ["All", "Aisha Rahman", "Rahul Tyagi", "Priya Mishra", "Sam Shive", "Meera Kapoor", "Kabir Das", "Vikram Seth", "Arundhati Roy", "Dev Patel", "Shreya Ghoshal", "Amitav Ghosh", "Zoya Akhtar"];
const LANGUAGES = ["All", "English", "Hindi", "Marathi", "Bengali", "Tamil", "Gujarati"];
const BINDINGS = ["All", "Hardcover", "Paperback", "Digital", "Special Edition"];
const YEARS = ["All", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2020 & older"];

const BOOKS_DATA = [
    {
        id: 1,
        title: "The Hidden Magic",
        author: "Aisha Rahman",
        category: "Fantasy",
        rating: 4.9,
        price: 250,
        year: 2023,
        language: "English",
        binding: "Paperback",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Dec 2023",
        sales: 1240,
        stock: 45,
        demand: "Extreme",
        description: "A young girl discovers a secret portal in her grandmother's attic that leads to a realm of ancient spirits."
    },
    {
        id: 2,
        title: "Space Explorers: Mars Base",
        author: "Rahul Tyagi",
        category: "Science",
        rating: 4.8,
        price: 200,
        year: 2024,
        language: "English",
        binding: "Hardcover",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Jan 2024",
        sales: 850,
        stock: 12,
        demand: "High",
        description: "Follow Commander Leo as he leads the first group of students to colonize the Red Planet."
    },
    {
        id: 3,
        title: "Mystery of the Old Clock",
        author: "Priya Mishra",
        category: "Mystery",
        rating: 5.0,
        price: 300,
        year: 2024,
        language: "Hindi",
        binding: "Paperback",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Feb 2024",
        sales: 2100,
        stock: 0,
        demand: "Trending",
        description: "Every midnight, the clock strikes thirteen. What happens in the mansion's basement?"
    },
    {
        id: 4,
        title: "The Talking Tree",
        author: "Sam Shive",
        category: "Adventure",
        rating: 4.7,
        price: 180,
        year: 2023,
        language: "English",
        binding: "Digital",
        cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Nov 2023",
        sales: 540,
        stock: 88,
        demand: "Stable",
        description: "A fable about a boy who can talk to trees and the quest to save the Great Forest."
    },
    {
        id: 5,
        title: "Kingdom of Clouds",
        author: "Meera Kapoor",
        category: "Fantasy",
        rating: 4.6,
        price: 220,
        year: 2023,
        language: "English",
        binding: "Paperback",
        cover: "https://images.unsplash.com/photo-1506869640319-fea1a2ab8e9d?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Oct 2023",
        sales: 320,
        stock: 31,
        demand: "Growing",
        description: "In a world where cities float on clouds, a young aviator must stop a storm coming from below."
    },
    {
        id: 6,
        title: "Robots vs Monsters",
        author: "Kabir Das",
        category: "Comics",
        rating: 4.9,
        price: 150,
        year: 2024,
        language: "English",
        binding: "Paperback",
        cover: "https://images.unsplash.com/photo-1517400508447-f8dde51d48f8?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Mar 2024",
        sales: 150,
        stock: 150,
        demand: "Hot",
        description: "The ultimate showdown between technology and ancient titans. Who will survive?"
    },
    {
        id: 7,
        title: "The Golden House",
        author: "Vikram Seth",
        category: "Biography",
        rating: 4.5,
        price: 450,
        year: 2022,
        language: "English",
        binding: "Hardcover",
        cover: "https://images.unsplash.com/photo-1543003923-435a62abbcc5?auto=format&fit=crop&w=800&q=80",
        publishedDate: "May 2022",
        sales: 980,
        stock: 20,
        demand: "Rising",
        description: "An intimate look at the rise and fall of a powerful family in modern Mumbai."
    },
    {
        id: 8,
        title: "Shadow of the Wind",
        author: "Arundhati Roy",
        category: "Adventure",
        rating: 4.9,
        price: 320,
        year: 2021,
        language: "Bengali",
        binding: "Paperback",
        cover: "https://images.unsplash.com/photo-1509273322744-93d3958ee15a?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Aug 2021",
        sales: 1560,
        stock: 5,
        demand: "Extreme",
        description: "A thrilling journey through the forgotten streets of old Calcutta."
    },
    {
        id: 9,
        title: "The Glass Palace",
        author: "Amitav Ghosh",
        category: "History",
        rating: 4.7,
        price: 380,
        year: 2020,
        language: "English",
        binding: "Hardcover",
        cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Jun 2020",
        sales: 780,
        stock: 15,
        demand: "Stable",
        description: "An epic saga spanning across Burma, India, and Malaya during the British rule."
    },
    {
        id: 10,
        title: "In Custody",
        author: "Shreya Ghoshal",
        category: "Poetry",
        rating: 4.4,
        price: 120,
        year: 2019,
        language: "Hindi",
        binding: "Digital",
        cover: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Sep 2019",
        sales: 450,
        stock: 200,
        demand: "Niche",
        description: "A poignant exploration of the declining world of Urdu poetry and its masters."
    },
    {
        id: 11,
        title: "Bombay Dreams",
        author: "Zoya Akhtar",
        category: "Business",
        rating: 4.8,
        price: 550,
        year: 2024,
        language: "English",
        binding: "Special Edition",
        cover: "https://images.unsplash.com/photo-1444653303772-2d930f7190f8?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Apr 2024",
        sales: 3200,
        stock: 0,
        demand: "Legendary",
        description: "The definitive guide to the cutthroat world of India's Silicon Valley and media moguls."
    },
    {
        id: 12,
        title: "The Blue Umbrella",
        author: "Ruskin Bond",
        category: "Adventure",
        rating: 4.9,
        price: 99,
        year: 2018,
        language: "Hindi",
        binding: "Paperback",
        cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Jan 2018",
        sales: 5000,
        stock: 120,
        demand: "Classic",
        description: "A heartwarming tale of a young girl and her precious blue umbrella in a Himalayan village."
    },
    {
        id: 13,
        title: "Sacred Games",
        author: "Vikram Chandra",
        category: "Mystery",
        rating: 4.7,
        price: 450,
        year: 2017,
        language: "English",
        binding: "Hardcover",
        cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Nov 2017",
        sales: 4500,
        stock: 10,
        demand: "Sold Out",
        description: "A sprawling thriller that dives deep into the underworld of Mumbai and police corruption."
    },
    {
        id: 14,
        title: "Mahabharata: The Great Epic",
        author: "C. Rajagopalachari",
        category: "History",
        rating: 5.0,
        price: 950,
        year: 2024,
        language: "English",
        binding: "Special Edition",
        cover: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
        publishedDate: "May 2024",
        sales: 50,
        stock: 5,
        demand: "Ultra Rare",
        description: "A deluxe, illustrated special edition of the timeless Indian epic."
    }
];

const MARKET_STATS = {
    totalVolume: "₹1.2M",
    activeUsers: "1,240",
    sentiment: "Highly Bullish",
    topGenre: "Fantasy"
};

const BookMarketplace = () => {
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedBindings, setSelectedBindings] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [priceRange, setPriceRange] = useState(1000);
    const [sortBy, setSortBy] = useState("newest");
    const [activeTab, setActiveTab] = useState("explore"); // explore or analytics
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [showAllAuthors, setShowAllAuthors] = useState(false);
    const [openFilters, setOpenFilters] = useState({
        categories: true,
        authors: false,
        years: false,
        rating: false,
        language: false,
        binding: false,
        price: true
    });

    const toggleFilter = (key) => {
        setOpenFilters(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // Mock real-time data
    const [liveSales, setLiveSales] = useState([
        { id: 1, user: "Arjun S.", book: "The Hidden Magic", price: 250, time: "2 mins ago", type: "Sale" },
        { id: 2, user: "Sarah K.", book: "Space Explorers", price: 200, time: "5 mins ago", type: "Mint" },
        { id: 3, user: "Rohan M.", book: "The Talking Tree", price: 180, time: "12 mins ago", type: "Offer" },
    ]);

    const [priceTrends, setPriceTrends] = useState({});

    // Simulate real-time activity
    React.useEffect(() => {
        const interval = setInterval(() => {
            const types = ["Sale", "Mint", "Offer", "Bid"];
            const users = ["Maya R.", "Zayn X.", "Leo V.", "Sana P.", "Kevin H."];
            const randomBook = BOOKS_DATA[Math.floor(Math.random() * BOOKS_DATA.length)];
            const randomType = types[Math.floor(Math.random() * types.length)];
            const randomUser = users[Math.floor(Math.random() * users.length)];

            const newSale = {
                id: Date.now(),
                user: randomUser,
                book: randomBook.title,
                price: randomBook.price + Math.floor(Math.random() * 50) - 10,
                time: "Just now",
                type: randomType
            };

            setLiveSales(prev => [newSale, ...prev.slice(0, 4)]);

            // Update a random price trend
            setPriceTrends(prev => ({
                ...prev,
                [randomBook.id]: Math.random() > 0.5 ? 'up' : 'down'
            }));
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const filteredBooks = useMemo(() => {
        return BOOKS_DATA.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(book.category);
            const matchesAuthors = selectedAuthors.length === 0 || selectedAuthors.includes(book.author);
            const matchesLanguage = selectedLanguages.length === 0 || selectedLanguages.includes(book.language);
            const matchesBinding = selectedBindings.length === 0 || selectedBindings.includes(book.binding);
            const matchesRating = book.rating >= minRating;

            let matchesYear = true;
            if (selectedYears.length > 0) {
                matchesYear = selectedYears.some(y => {
                    if (y === "2020 & older") return book.year <= 2020;
                    return book.year === parseInt(y);
                });
            }

            // Price Logic: Slider is global upper bound, Tiers are specific buckets
            const matchesSlider = book.price <= priceRange;
            const matchesTiers = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
                if (range === "under-200") return book.price <= 200;
                if (range === "200-500") return book.price >= 200 && book.price <= 500;
                if (range === "500-800") return book.price >= 500 && book.price <= 800;
                if (range === "above-800") return book.price >= 800;
                return true;
            });
            const matchesPrice = matchesSlider && matchesTiers;

            return matchesSearch && matchesCategory && matchesAuthors &&
                matchesLanguage && matchesBinding && matchesRating &&
                matchesYear && matchesPrice;
        }).sort((a, b) => {
            if (sortBy === "price-low") return a.price - b.price;
            if (sortBy === "price-high") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            if (sortBy === "year") return b.year - a.year;
            return 0; // default newest
        });
        // Dependency array with updated plural state variables
    }, [searchQuery, selectedCategories, selectedAuthors, selectedLanguages, selectedBindings, selectedYears, selectedPriceRanges, minRating, priceRange, sortBy]);

    return (
        <div className="min-h-screen bg-[#FDFDFF] font-sans pt-24 pb-20 selection:bg-indigo-100 selection:text-indigo-900">
            {/* LIVE MARKET TICKER */}
            <div className="fixed top-0 left-0 w-full z-[100] bg-slate-900 text-white py-2 overflow-hidden border-b border-white/5">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...BOOKS_DATA, ...BOOKS_DATA, ...BOOKS_DATA].map((book, i) => (
                        <div key={i} className="inline-flex items-center gap-6 px-8 border-r border-white/10">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{book.category}</span>
                            <span className="text-xs font-black">{book.title}</span>
                            <span className="text-xs font-black italic text-indigo-400">₹{book.price}</span>
                            <div className={`flex items-center gap-1 text-[9px] font-black ${i % 3 === 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {i % 3 === 0 ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                                {i % 3 === 0 ? '+2.4%' : '-1.1%'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

                {/* PREMIUM NAVIGATION HUB */}
                <div className="relative mb-12 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/30 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="p-2 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-200">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Node Gateway</span>
                        </motion.div>
                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none mb-4">
                            Global <span className="text-indigo-600">Trading</span> Floor
                        </h1>
                        <p className="text-slate-500 font-medium text-sm">Real-time assets, liquidity tracking, and peer-to-peer exchange.</p>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50/50 p-2 rounded-[2rem] border border-slate-100">
                        <button
                            onClick={() => setActiveTab("explore")}
                            className={`px-8 py-4 rounded-3xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === "explore" ? "bg-white text-slate-900 shadow-xl shadow-slate-200" : "text-slate-500 hover:text-slate-700 hover:bg-white/50"}`}
                        >
                            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Market Explorer</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("analytics")}
                            className={`px-8 py-4 rounded-3xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === "analytics" ? "bg-white text-slate-900 shadow-xl shadow-slate-200" : "text-slate-500 hover:text-slate-700 hover:bg-white/50"}`}
                        >
                            <span className="flex items-center gap-2"><Activity className="w-4 h-4" /> Live Terminal</span>
                        </button>
                    </div>
                </div>

                {/* SEARCH TRAY */}
                <div className="mb-12 relative max-w-4xl">
                    <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                        <Search className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Scan for assets, authors, or contract IDs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-20 pl-16 pr-8 bg-white border border-slate-100 rounded-[2.5rem] text-slate-900 font-bold text-lg outline-none focus:border-indigo-500/30 focus:ring-8 focus:ring-indigo-500/5 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.02)] placeholder:text-slate-300"
                    />
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "analytics" ? (
                        <motion.div
                            key="analytics"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-10"
                        >
                            {/* ANALYTICS TERMINAL */}
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {/* METRICS COLUMN */}
                                <div className="space-y-6">
                                    {[
                                        { label: "Market Vol.", value: MARKET_STATS.totalVolume, trend: "+14.2%", color: "text-emerald-600", bg: "bg-emerald-50" },
                                        { label: "Active Nodes", value: MARKET_STATS.activeUsers, trend: "Stable", color: "text-indigo-600", bg: "bg-indigo-50" },
                                        { label: "Floor Price", value: "₹140", trend: "+5.0%", color: "text-amber-600", bg: "bg-amber-50" },
                                        { label: "Sentiment", value: MARKET_STATS.sentiment, trend: "High", color: "text-rose-600", bg: "bg-rose-50" }
                                    ].map((m, i) => (
                                        <div key={i} className="premium-card p-8">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{m.label}</p>
                                            <div className="flex items-baseline justify-between">
                                                <h4 className="text-3xl font-black text-slate-900 italic tracking-tighter">{m.value}</h4>
                                                <span className={`text-[9px] font-black ${m.color} ${m.bg} px-2 py-1 rounded-md`}>{m.trend}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CENTER CHART TERMINAL */}
                                <div className="lg:col-span-2 premium-card p-10 bg-slate-900 text-white border-0 shadow-2xl relative">
                                    <div className="absolute top-8 right-8 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Feed</span>
                                    </div>
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-black italic tracking-tight">Market Velocity Index</h3>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Real-time throughput analysis</p>
                                    </div>
                                    <div className="h-64 mb-8">
                                        <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100">
                                            <path
                                                d="M 0,80 Q 50,20 100,50 T 200,30 T 300,70 T 400,10"
                                                fill="none"
                                                stroke="#6366f1"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                            />
                                            <path
                                                d="M 0,80 Q 50,20 100,50 T 200,30 T 300,70 T 400,10 V 100 H 0 Z"
                                                fill="url(#darkChartGradient)"
                                                className="opacity-20"
                                            />
                                            <defs>
                                                <linearGradient id="darkChartGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#6366f1" />
                                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                                        {['00:00', '08:00', '16:00', 'Now'].map((t, i) => (
                                            <span key={i} className="text-[10px] font-black text-slate-500 text-center uppercase tracking-widest">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* RECENT CONTRACTS */}
                                <div className="premium-card p-10 bg-white">
                                    <h3 className="text-xl font-black text-slate-900 mb-8 border-b border-slate-50 pb-6 italic tracking-tight">Recent Activity</h3>
                                    <div className="space-y-8">
                                        {liveSales.map((sale) => (
                                            <div key={sale.id} className="relative pl-6 border-l-2 border-slate-100 py-1 hover:border-indigo-500 transition-colors">
                                                <div className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-slate-200" />
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{sale.time}</p>
                                                <p className="text-xs font-bold text-slate-800 leading-relaxed">
                                                    <span className="text-indigo-600 font-black">{sale.type}:</span> {sale.book}
                                                </p>
                                                <p className="text-[10px] font-bold text-slate-400 mt-1">₹{sale.price} • {sale.user}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full py-5 mt-10 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
                                        Analyze Ledger
                                    </button>
                                </div>
                            </div>

                            {/* HEATMAP / VELOCITY TRAY */}
                            <div className="premium-card p-10 bg-white">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight">Market Heatmap</h3>
                                    <div className="flex gap-2">
                                        {['1h', '24h', '7d'].map(t => (
                                            <button key={t} className="px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all">{t}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
                                    {Array.from({ length: 48 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`aspect-square rounded-lg ${i % 7 === 0 ? 'bg-indigo-600' : i % 5 === 0 ? 'bg-emerald-500' : i % 3 === 0 ? 'bg-slate-200' : 'bg-slate-50'} transition-all hover:scale-110 cursor-help relative group`}
                                        >
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-20">
                                                Node {i + 100}: {Math.floor(Math.random() * 100)}%
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* MARKET LEADERS SECTION */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                                <div className="premium-card p-10">
                                    <h3 className="text-xl font-black text-slate-900 mb-8 italic tracking-tight flex items-center gap-3">
                                        <TrendingUp className="w-5 h-5 text-indigo-600" /> Top Trading Authors
                                    </h3>
                                    <div className="space-y-6">
                                        {[
                                            { name: "Aisha Rahman", volume: "₹420K", rank: "1", trend: "+12%" },
                                            { name: "Rahul Tyagi", volume: "₹380K", rank: "2", trend: "+8%" },
                                            { name: "Priya Mishra", volume: "₹310K", rank: "3", trend: "+15%" },
                                            { name: "Sam Shive", volume: "₹290K", rank: "4", trend: "+5%" }
                                        ].map((author, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100/50">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-xs">
                                                        #{author.rank}
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-slate-900 text-sm">{author.name}</p>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{author.volume} Volume</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">{author.trend}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="premium-card p-10 bg-indigo-600 text-white overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                                    <h3 className="text-xl font-black mb-8 italic tracking-tight">Sector Dominance</h3>
                                    <div className="space-y-8 relative z-10">
                                        {[
                                            { sector: "Fantasy", share: "45%", color: "bg-white" },
                                            { sector: "Science", share: "25%", color: "bg-indigo-300" },
                                            { sector: "Adventure", share: "20%", color: "bg-indigo-400" },
                                            { sector: "Others", share: "10%", color: "bg-indigo-900" }
                                        ].map((s, i) => (
                                            <div key={i} className="space-y-3">
                                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                                                    <span>{s.sector}</span>
                                                    <span>{s.share}</span>
                                                </div>
                                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: s.share }}
                                                        transition={{ duration: 1, delay: i * 0.1 }}
                                                        className={`h-full ${s.color}`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="premium-card p-10 bg-slate-900 text-white overflow-hidden relative">
                                    <h3 className="text-xl font-black mb-8 italic tracking-tight">Market Pulse (Depth)</h3>
                                    <div className="flex items-end gap-1 h-48 mb-6">
                                        {[40, 70, 45, 90, 65, 80, 50, 95, 100, 85, 60, 75, 55, 90, 45, 80].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                                className={`flex-1 rounded-t-sm ${i < 8 ? 'bg-emerald-500/50' : 'bg-rose-500/50'} hover:bg-white transition-colors cursor-pointer`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-500">
                                        <span className="text-emerald-400">Bids (Buying)</span>
                                        <span className="text-rose-400">Asks (Selling)</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="explore"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col lg:flex-row gap-16"
                        >
                            {/* FILTER SIDEBAR */}
                            <div className="w-full lg:w-80 shrink-0">
                                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm sticky top-32 overflow-hidden">
                                    <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                                        <h3 className="text-lg font-black text-slate-900 flex items-center gap-3">
                                            <Filter className="w-4 h-4 text-indigo-600" /> Filters
                                        </h3>
                                        {(selectedCategories.length > 0 || selectedAuthors.length > 0 || selectedYears.length > 0 || minRating > 0 || selectedLanguages.length > 0 || selectedBindings.length > 0 || selectedPriceRanges.length > 0 || priceRange < 1000) && (
                                            <button
                                                onClick={() => {
                                                    setSelectedCategories([]);
                                                    setSelectedAuthors([]);
                                                    setSelectedYears([]);
                                                    setMinRating(0);
                                                    setSelectedLanguages([]);
                                                    setSelectedBindings([]);
                                                    setPriceRange(1000);
                                                    setSelectedPriceRanges([]);
                                                }}
                                                className="text-[10px] font-black text-rose-500 uppercase tracking-widest hover:text-rose-600 transition-colors"
                                            >
                                                Clear All
                                            </button>
                                        )}
                                    </div>

                                    {/* SECTOR SELECT */}
                                    <div className="border-b border-slate-50">
                                        <button
                                            onClick={() => toggleFilter('categories')}
                                            className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                                        >
                                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Sector Select</h4>
                                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFilters.categories ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFilters.categories && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 flex flex-col gap-2">
                                                        {CATEGORIES.filter(c => c !== "All").map((cat) => (
                                                            <label
                                                                key={cat}
                                                                className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedCategories.includes(cat)}
                                                                    onChange={() => {
                                                                        setSelectedCategories(prev =>
                                                                            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
                                                                        );
                                                                    }}
                                                                    className="w-4 h-4 rounded border-slate-200 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                />
                                                                <span className={`text-[11px] font-bold ${selectedCategories.includes(cat) ? "text-slate-900" : "text-slate-500"} group-hover:text-slate-900 transition-colors`}>
                                                                    {cat}
                                                                </span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* AUTHOR SELECT */}
                                    <div className="border-b border-slate-50">
                                        <button
                                            onClick={() => toggleFilter('authors')}
                                            className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                                        >
                                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Filter by Author</h4>
                                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFilters.authors ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFilters.authors && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 flex flex-col gap-2">
                                                        {AUTHORS_LIST.filter(a => a !== "All").slice(0, showAllAuthors ? AUTHORS_LIST.length : 5).map(auth => (
                                                            <label
                                                                key={auth}
                                                                className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedAuthors.includes(auth)}
                                                                    onChange={() => {
                                                                        setSelectedAuthors(prev =>
                                                                            prev.includes(auth) ? prev.filter(a => a !== auth) : [...prev, auth]
                                                                        );
                                                                    }}
                                                                    className="w-4 h-4 rounded border-slate-200 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                />
                                                                <span className={`text-[11px] font-bold ${selectedAuthors.includes(auth) ? "text-slate-900" : "text-slate-500"} group-hover:text-slate-900 transition-colors`}>
                                                                    {auth}
                                                                </span>
                                                            </label>
                                                        ))}
                                                        {AUTHORS_LIST.length > 5 && (
                                                            <button
                                                                onClick={() => setShowAllAuthors(!showAllAuthors)}
                                                                className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-2 hover:text-indigo-700 px-4"
                                                            >
                                                                {showAllAuthors ? "- Show Less" : `+ ${AUTHORS_LIST.length - 6} More`}
                                                            </button>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* YEAR SELECT */}
                                    <div className="border-b border-slate-50">
                                        <button
                                            onClick={() => toggleFilter('years')}
                                            className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                                        >
                                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Release Era</h4>
                                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFilters.years ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFilters.years && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 flex flex-col gap-2">
                                                        {YEARS.filter(y => y !== "All").map((y) => (
                                                            <label
                                                                key={y}
                                                                className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedYears.includes(y)}
                                                                    onChange={() => {
                                                                        setSelectedYears(prev =>
                                                                            prev.includes(y) ? prev.filter(item => item !== y) : [...prev, y]
                                                                        );
                                                                    }}
                                                                    className="w-4 h-4 rounded border-slate-200 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                />
                                                                <span className={`text-[11px] font-bold ${selectedYears.includes(y) ? "text-slate-900" : "text-slate-500"} group-hover:text-slate-900 transition-colors`}>
                                                                    {y}
                                                                </span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* RATING THRESHOLD */}
                                    <div className="border-b border-slate-50">
                                        <button
                                            onClick={() => toggleFilter('rating')}
                                            className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                                        >
                                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Customer Ratings</h4>
                                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFilters.rating ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFilters.rating && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 flex flex-col gap-2">
                                                        {[4, 3, 2, 1].map((star) => (
                                                            <label
                                                                key={star}
                                                                className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={minRating === star}
                                                                    onChange={() => setMinRating(minRating === star ? 0 : star)}
                                                                    className="w-4 h-4 rounded border-slate-200 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                />
                                                                <span className={`text-[11px] font-bold ${minRating === star ? "text-slate-900" : "text-slate-500"} group-hover:text-slate-900 transition-colors flex items-center gap-1`}>
                                                                    {star}★ & Up
                                                                </span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* PRICE RANGE CHECKBOXES */}
                                    <div className="border-b border-slate-50">
                                        <button
                                            onClick={() => toggleFilter('price')}
                                            className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                                        >
                                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Price Range</h4>
                                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFilters.price ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFilters.price && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 pt-2">
                                                        {/* MINI PRICE HISTOGRAM */}
                                                        <div className="flex items-end gap-[2px] h-10 mb-4 px-4">
                                                            {[15, 30, 65, 85, 40, 25, 95, 60, 45, 80, 50, 35, 70, 40, 20].map((h, i) => {
                                                                const barPrice = (i + 1) * (1000 / 15);
                                                                const isInSlider = barPrice <= priceRange;
                                                                const isInTiers = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
                                                                    if (range === "under-200") return barPrice <= 200;
                                                                    if (range === "200-500") return barPrice >= 200 && barPrice <= 500;
                                                                    if (range === "500-800") return barPrice >= 500 && barPrice <= 800;
                                                                    if (range === "above-800") return barPrice >= 800;
                                                                    return false;
                                                                });
                                                                const isHighlight = isInSlider && (selectedPriceRanges.length === 0 ? true : isInTiers);

                                                                return (
                                                                    <div
                                                                        key={i}
                                                                        className={`flex-1 rounded-t-[1px] transition-all duration-300 ${isHighlight ? 'bg-indigo-500 p-[1px] shadow-[0_0_8px_rgba(99,102,241,0.3)]' : 'bg-slate-100'}`}
                                                                        style={{ height: `${h}%` }}
                                                                    />
                                                                );
                                                            })}
                                                        </div>

                                                        {/* PRECISE SLIDER (The "Bar" option requested) */}
                                                        <div className="px-4 mb-8">
                                                            <div className="flex justify-between items-center mb-3">
                                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Precise Scan</span>
                                                                <span className="text-xs font-black text-indigo-600 italic tracking-tighter">Up to ₹{priceRange}</span>
                                                            </div>
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="1000"
                                                                value={priceRange}
                                                                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                                                className="w-full h-1.5 bg-slate-100 rounded-full appearance-none accent-indigo-600 cursor-pointer"
                                                            />
                                                        </div>

                                                        {/* QUICK TIERS (Checkboxes) */}
                                                        <div className="pt-6 border-t border-slate-50 flex flex-col gap-2">
                                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-4 mb-1">Quick Tiers</span>
                                                            {[
                                                                { label: "Under ₹200", id: "under-200" },
                                                                { label: "₹200 - ₹500", id: "200-500" },
                                                                { label: "₹500 - ₹800", id: "500-800" },
                                                                { label: "Above ₹800", id: "above-800" }
                                                            ].map((range) => (
                                                                <label
                                                                    key={range.id}
                                                                    className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedPriceRanges.includes(range.id)}
                                                                        onChange={() => {
                                                                            setSelectedPriceRanges(prev =>
                                                                                prev.includes(range.id)
                                                                                    ? prev.filter(r => r !== range.id)
                                                                                    : [...prev, range.id]
                                                                            );
                                                                        }}
                                                                        className="w-4 h-4 rounded border-slate-200 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                    />
                                                                    <span className={`text-[11px] font-bold ${selectedPriceRanges.includes(range.id) ? "text-slate-900" : "text-slate-500"} group-hover:text-slate-900 transition-colors`}>
                                                                        {range.label}
                                                                    </span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* LANGUAGE SELECT */}
                                    <div className="border-b border-slate-50">
                                        <button
                                            onClick={() => toggleFilter('language')}
                                            className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                                        >
                                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Language</h4>
                                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFilters.language ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFilters.language && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 flex flex-col gap-2">
                                                        {LANGUAGES.filter(l => l !== "All").map(lang => (
                                                            <label
                                                                key={lang}
                                                                className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedLanguages.includes(lang)}
                                                                    onChange={() => {
                                                                        setSelectedLanguages(prev =>
                                                                            prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
                                                                        );
                                                                    }}
                                                                    className="w-4 h-4 rounded border-slate-200 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                />
                                                                <span className={`text-[11px] font-bold ${selectedLanguages.includes(lang) ? "text-slate-900" : "text-slate-500"} group-hover:text-slate-900 transition-colors`}>
                                                                    {lang}
                                                                </span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* BINDING SELECT */}
                                    <div className="border-b border-slate-50">
                                        <button
                                            onClick={() => toggleFilter('binding')}
                                            className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                                        >
                                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Binding</h4>
                                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFilters.binding ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFilters.binding && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 flex flex-col gap-2">
                                                        {BINDINGS.filter(b => b !== "All").map(b => (
                                                            <label
                                                                key={b}
                                                                className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedBindings.includes(b)}
                                                                    onChange={() => {
                                                                        setSelectedBindings(prev =>
                                                                            prev.includes(b) ? prev.filter(item => item !== b) : [...prev, b]
                                                                        );
                                                                    }}
                                                                    className="w-4 h-4 rounded border-slate-200 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                />
                                                                <span className={`text-[11px] font-bold ${selectedBindings.includes(b) ? "text-slate-900" : "text-slate-500"} group-hover:text-slate-900 transition-colors`}>
                                                                    {b}
                                                                </span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* AUTHENTICITY TOOLS */}
                                    <div className="p-6 bg-emerald-50/30">
                                        <div className="flex items-center gap-4">
                                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                                            <div>
                                                <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">Verified Vault</p>
                                                <p className="text-[9px] font-bold text-emerald-600">Assets are strictly audited</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MAIN ASSET GRID */}
                            <div className="flex-1 space-y-12">
                                {/* SORT & VIEW CONTROLS */}
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                                    <div className="flex items-center gap-10">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Results Found</span>
                                            <p className="text-xl font-black text-slate-900 italic tracking-tight">{filteredBooks.length} <span className="text-[11px] font-medium text-slate-400 uppercase not-italic tracking-normal">Assets</span></p>
                                        </div>
                                        <div className="h-10 w-px bg-slate-100" />
                                        <div className="flex bg-slate-50 p-1.5 rounded-2xl gap-1">
                                            <button onClick={() => setViewMode("grid")} className={`p-2.5 rounded-xl transition-all ${viewMode === "grid" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400"}`}>
                                                <LayoutGrid className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => setViewMode("list")} className={`p-2.5 rounded-xl transition-all ${viewMode === "list" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400"}`}>
                                                <List className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative group min-w-[240px]">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                                            <Activity className="w-4 h-4 text-indigo-500/50" />
                                        </div>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="w-full h-14 pl-14 pr-10 bg-slate-50/50 border border-slate-100 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-800 outline-none appearance-none cursor-pointer hover:border-indigo-200 transition-all"
                                        >
                                            <option value="newest">Market Recency</option>
                                            <option value="rating">Rating Velocity</option>
                                            <option value="price-low">Entry Price</option>
                                            <option value="price-high">Peak Price</option>
                                            <option value="year">By Year</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    </div>
                                </div>

                                {/* ASSETS LIST */}
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        layout
                                        className={`grid gap-10 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}
                                    >
                                        {filteredBooks.map((book) => (
                                            <motion.div
                                                layout
                                                key={book.id}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                className={`premium-card group overflow-hidden relative cursor-default ${viewMode === "list" ? "flex gap-10 p-8" : "p-4"}`}
                                            >
                                                {/* ASSET PREVIEW */}
                                                <div className={`relative overflow-hidden rounded-[2rem] ${viewMode === "list" ? "w-80 h-60 shrink-0" : "aspect-[3/4] mb-6"}`}>
                                                    <img
                                                        src={book.cover}
                                                        alt={book.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                                    {/* TAGS */}
                                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-900 border border-white shadow-sm">
                                                            {book.category}
                                                        </span>
                                                        <span className={`px-3 py-1 ${book.stock > 0 ? 'bg-emerald-500' : 'bg-rose-500'} text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg`}>
                                                            {book.stock > 0 ? 'Liquid' : 'Reserve'}
                                                        </span>
                                                    </div>

                                                    {/* DEMAND OVERLAY */}
                                                    <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-[8px] font-black uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                        {book.demand}
                                                    </div>
                                                </div>

                                                {/* ASSET DETAILS */}
                                                <div className="flex-1 px-4 pb-4">
                                                    <div className="mb-6">
                                                        <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                                                            {book.title}
                                                        </h3>
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-[11px] font-bold text-slate-400">By {book.author}</p>
                                                            <div className="flex items-center gap-1.5">
                                                                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                                                <span className="text-xs font-black text-slate-900 italic">{book.rating}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-50">
                                                        <div>
                                                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Contract Value</p>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-lg font-black text-slate-900 italic tracking-tighter">₹{book.price}</p>
                                                                {priceTrends[book.id] && (
                                                                    <div className={`flex items-center text-[10px] font-black ${priceTrends[book.id] === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                                        {priceTrends[book.id] === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Net Margin</p>
                                                            <p className="text-lg font-black text-emerald-600 italic tracking-tighter">70%</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <button className="flex-1 h-14 glass-button flex items-center justify-center gap-2 shadow-xl shadow-slate-100">
                                                            Trade Now <ArrowUpRight className="w-4 h-4" />
                                                        </button>
                                                        <button className="w-14 h-14 flex items-center justify-center bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-100 group/icon relative">
                                                            <Eye className="w-5 h-5" />
                                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-900 text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-lg opacity-0 group-hover/icon:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                                                                Live Stats
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>

                                {/* EMPTY STATE */}
                                {filteredBooks.length === 0 && (
                                    <div className="text-center py-40 premium-card">
                                        <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 text-slate-200">
                                            <Search className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 tracking-tight italic mb-4">No Assets Syncing</h3>
                                        <p className="text-slate-400 font-medium max-w-sm mx-auto">Adjust your frequency filters or check your connection status.</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* BOTTOM MARKET SUMMARY */}
                <div className="mt-32 p-20 bg-slate-950 rounded-[4rem] text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/50" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent" />
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                        >
                            <ShieldCheck className="w-4 h-4" /> Secure Trading Protocol
                        </motion.div>
                        <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 tracking-tighter leading-none italic">
                            Execute your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Legacy Trade</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { l: "Total Liquidity", v: "₹45.2M" },
                                { l: "Active Contracts", v: "1.2K+" },
                                { l: "Global Nodes", v: "450" },
                                { l: "Uptime", v: "99.9%" }
                            ].map((s, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors">
                                    <span className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-3">{s.l}</span>
                                    <span className="text-2xl font-black text-white tracking-tighter italic">{s.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FLOATING STATUS */}
                <div className="fixed bottom-10 right-10 z-[100]">
                    <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-2xl border border-slate-100/50">
                        <div className="relative">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Live Network</span>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default BookMarketplace;
