import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Star, ChevronDown, Check } from "lucide-react";

const BookMarketplace = () => {
    const books = [
        { id: 1, title: "The Hidden Magic", author: "Aisha R.", category: "Fantasy", rating: "4.9", price: "₹250", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80" },
        { id: 2, title: "Space Explorers", author: "Rahul T.", category: "Science", rating: "4.8", price: "₹200", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80" },
        { id: 3, title: "Mystery of the Old Clock", author: "Priya M.", category: "Mystery", rating: "5.0", price: "₹300", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80" },
        { id: 4, title: "The Talking Tree", author: "Sam S.", category: "Adventure", rating: "4.7", price: "₹180", cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=400&q=80" },
        { id: 5, title: "Kingdom of Clouds", author: "Meera K.", category: "Fantasy", rating: "4.6", price: "₹220", cover: "https://images.unsplash.com/photo-1506869640319-fea1a2ab8e9d?auto=format&fit=crop&w=400&q=80" },
        { id: 6, title: "Robots vs Monsters", author: "Kabir D.", category: "Comics", rating: "4.9", price: "₹150", cover: "https://images.unsplash.com/photo-1517400508447-f8dde51d48f8?auto=format&fit=crop&w=400&q=80" },
    ];

    return (
        <div className="pt-20 bg-slate-50 min-h-screen font-['Nunito']">

            {/* MARKETPLACE HEADER & SUBSCRIPTIONS */}
            <div className="bg-indigo-600 pb-20 pt-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                <div className="max-w-[1200px] mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Book Marketplace</h1>
                    <p className="text-indigo-100 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
                        Discover incredible stories written by the nation's most talented young authors. Buy books, support young talent, or join our premium plans to publish yours.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-left flex-1">
                            <div className="text-indigo-100 font-bold mb-1 text-sm uppercase tracking-widest">Free Plan</div>
                            <div className="text-white text-3xl font-black mb-4">₹0<span className="text-sm font-medium opacity-70">/mo</span></div>
                            <ul className="text-indigo-50 space-y-2 text-sm">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400" /> Basic Writing Pad</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400" /> 1 Published Book</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400" /> Community Access</li>
                            </ul>
                            <button className="w-full mt-6 py-2 bg-white text-indigo-600 rounded-xl font-bold hover:bg-slate-50">Current Plan</button>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-2xl scale-105 z-10 border-4 border-indigo-200 text-left flex-1 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-amber-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
                            <div className="text-indigo-600 font-bold mb-1 text-sm uppercase tracking-widest">Premium Tools</div>
                            <div className="text-slate-800 text-3xl font-black mb-4">₹499<span className="text-sm font-medium opacity-50">/mo</span></div>
                            <ul className="text-slate-600 space-y-2 text-sm">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-600" /> Unlimited Book Publishing</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-600" /> AI Story Assistant</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-indigo-600" /> Premium Templates</li>
                            </ul>
                            <button className="w-full mt-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">Upgrade</button>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-left flex-1">
                            <div className="text-indigo-100 font-bold mb-1 text-sm uppercase tracking-widest">Advanced</div>
                            <div className="text-white text-3xl font-black mb-4">₹999<span className="text-sm font-medium opacity-70">/mo</span></div>
                            <ul className="text-indigo-50 space-y-2 text-sm">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400" /> Advanced Publishing Tools</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400" /> 0% Platform Commission</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400" /> Global Distribution</li>
                            </ul>
                            <button className="w-full mt-6 py-2 border border-white text-white rounded-xl font-bold hover:bg-white/20">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">

                {/* SIDEBAR FILTERS */}
                <div className="w-full lg:w-64 shrink-0">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-28">
                        <h3 className="font-black text-slate-800 text-lg mb-6 flex items-center gap-2">
                            <Filter className="w-5 h-5 text-indigo-600" /> Filters
                        </h3>

                        {/* Category Filter */}
                        <div className="mb-6 pb-6 border-b border-slate-100">
                            <h4 className="font-bold text-slate-700 mb-3 text-sm">Category</h4>
                            <div className="space-y-2">
                                {["Adventure", "Fantasy", "Mystery", "Science", "History", "Poetry"].map((cat) => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-600" />
                                        <span className="text-sm text-slate-600 group-hover:text-indigo-600 transition-colors font-medium">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-6 pb-6 border-b border-slate-100">
                            <h4 className="font-bold text-slate-700 mb-3 text-sm">Price</h4>
                            <input type="range" min="0" max="1000" className="w-full accent-indigo-600" />
                            <div className="flex justify-between text-xs font-bold text-slate-400 mt-2">
                                <span>₹0</span>
                                <span>₹1000+</span>
                            </div>
                        </div>

                        {/* Rating Filter */}
                        <div className="mb-6 pb-6 border-b border-slate-100">
                            <h4 className="font-bold text-slate-700 mb-3 text-sm">Rating</h4>
                            <div className="space-y-2">
                                {[5, 4, 3].map((star) => (
                                    <label key={star} className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="rating" className="w-4 h-4 text-amber-500 border-slate-300 focus:ring-amber-500" />
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: star }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                                            <span className="text-xs text-slate-500 font-bold ml-1">& Up</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Age Group */}
                        <div className="mb-6 pb-6 border-b border-slate-100">
                            <h4 className="font-bold text-slate-700 mb-3 text-sm">Age Group</h4>
                            <select className="w-full bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-lg p-2.5 font-bold outline-none">
                                <option>All Ages</option>
                                <option>Children (5-9)</option>
                                <option>Pre-Teens (10-12)</option>
                                <option>Teens (13-18)</option>
                            </select>
                        </div>

                        {/* Language */}
                        <div>
                            <h4 className="font-bold text-slate-700 mb-3 text-sm">Language</h4>
                            <select className="w-full bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-lg p-2.5 font-bold outline-none">
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Spanish</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* MAIN LISTINGS */}
                <div className="flex-1">
                    {/* Search bar & Sort */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input type="text" placeholder="Search by book title, author, or keyword..." className="w-full h-14 pl-12 pr-4 bg-white rounded-2xl border border-slate-200 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all font-bold text-slate-700" />
                        </div>
                        <div className="shrink-0 flex items-center bg-white rounded-2xl border border-slate-200 px-4 shadow-sm h-14">
                            <span className="text-slate-400 text-sm font-bold mr-2">Sort By:</span>
                            <select className="bg-transparent text-slate-700 font-bold text-sm outline-none cursor-pointer">
                                <option>Newest First</option>
                                <option>Top Rated</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Book Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {books.map((book) => (
                            <Link to={`/book/${book.id}`} key={book.id} className="group bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-2xl transition-all cursor-pointer block">
                                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl">
                                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-lg">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">{book.category}</span>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 font-bold shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                        <span className="text-xs text-slate-800">{book.rating}</span>
                                    </div>
                                </div>
                                <div className="px-1">
                                    <h3 className="text-lg font-black text-slate-800 mb-1 leading-tight line-clamp-1 group-hover:text-indigo-600 transition-colors">{book.title}</h3>
                                    <p className="text-sm text-slate-500 font-bold mb-3">By {book.author}</p>
                                    <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                                        <span className="font-black text-indigo-600 text-xl">{book.price}</span>
                                        <button className="text-[11px] font-black uppercase tracking-wider text-slate-600 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
                                            View details
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookMarketplace;
