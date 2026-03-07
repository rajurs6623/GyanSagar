import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Users, Heart, BookOpen, UserPlus, Share2 } from "lucide-react";

const AuthorProfile = () => {
    const books = [
        { title: "The Hidden Magic", rating: "4.9", price: "₹250", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80" },
        { title: "A Journey Beyond", rating: "4.7", price: "₹200", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80" },
        { title: "Whispers of the Wind", rating: "5.0", price: "₹300", cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=400&q=80" },
    ];

    return (
        <div className="pt-20 bg-slate-50 min-h-screen font-['Nunito']">

            {/* AUTHOR HEADER */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-[1200px] mx-auto px-6 py-12 relative">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-bl-[200px] -z-10" />

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="relative shrink-0">
                            <img src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=400&q=80" alt="Author" className="w-48 h-48 rounded-[2rem] object-cover shadow-xl border-4 border-white" />
                            <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 mb-4">
                                <div>
                                    <h1 className="text-4xl font-black text-slate-800 mb-2">Aisha Rahman</h1>
                                    <p className="text-indigo-600 font-bold text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                                        <MapPin className="w-4 h-4" /> Springdale High School, Age 14
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-6 py-3 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 shadow-md flex items-center gap-2">
                                        <UserPlus className="w-4 h-4" /> Follow
                                    </button>
                                    <button className="px-4 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 shadow-sm">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
                                <div className="text-center md:text-left">
                                    <div className="text-2xl font-black text-slate-800">12</div>
                                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><BookOpen className="w-3 h-3" /> Books Written</div>
                                </div>
                                <div className="w-px h-10 bg-slate-200 hidden md:block" />
                                <div className="text-center md:text-left">
                                    <div className="text-2xl font-black text-slate-800">1.2k</div>
                                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><Users className="w-3 h-3" /> Followers</div>
                                </div>
                                <div className="w-px h-10 bg-slate-200 hidden md:block" />
                                <div className="text-center md:text-left">
                                    <div className="text-2xl font-black text-slate-800">4.9</div>
                                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><Heart className="w-3 h-3" /> Avg Rating</div>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl max-w-3xl">
                                <h3 className="text-sm font-black text-slate-800 mb-2">About The Author</h3>
                                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                    Hi, I'm Aisha! I love writing fantasy and adventure stories that transport readers to magical worlds. I started writing when I was 10, and my dream is to become a New York Times bestseller. When I'm not writing, I'm probably reading or drawing my characters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOOKS SECTION */}
            <div className="max-w-[1200px] mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    Books by Aisha <span className="text-xs font-bold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">{books.length}</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {books.map((book, idx) => (
                        <Link to="/book/1" key={idx} className="group bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-2xl transition-all cursor-pointer block">
                            <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl">
                                <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-1 font-bold shadow-sm">
                                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    <span className="text-sm text-slate-800">{book.rating}</span>
                                </div>
                            </div>
                            <div className="px-2">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 truncate group-hover:text-indigo-600 transition-colors">{book.title}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">Fantasy</span>
                                    <span className="font-black text-indigo-600 text-lg">{book.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AuthorProfile;
