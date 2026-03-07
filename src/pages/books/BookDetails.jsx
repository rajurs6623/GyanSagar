import React from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Info, User, Check, BookOpen, Quote, ShieldCheck } from "lucide-react";

const BookDetails = () => {
    return (
        <div className="pt-20 bg-slate-50 min-h-screen font-['Nunito']">
            {/* HERO PRODUCT SECTION */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-[1200px] mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* COVER & PREVIEWS */}
                        <div className="lg:w-1/3">
                            <div className="relative aspect-[3/4] mb-6 rounded-2xl shadow-2xl p-2 bg-white border border-slate-100 sticky top-28">
                                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80" alt="Book Cover" className="w-full h-full object-cover rounded-xl shadow-inner" />
                                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-xl">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    <span>4.9</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 sticky top-[calc(28px+400px)] mt-4">
                                <div className="aspect-[3/4] rounded-lg bg-slate-100 overflow-hidden cursor-pointer border border-slate-200 hover:border-indigo-500 transition-colors">
                                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=150&q=80" className="w-full h-full object-cover opacity-80" />
                                </div>
                                <div className="aspect-[3/4] rounded-lg bg-slate-100 overflow-hidden cursor-pointer border border-slate-200 hover:border-indigo-500 transition-colors flex items-center justify-center p-2">
                                    <div className="w-full h-full bg-white border border-slate-200 p-2 shadow-sm text-[4px] leading-tight text-slate-400">Chapter 1...</div>
                                </div>
                                <div className="aspect-[3/4] rounded-lg bg-slate-100 overflow-hidden cursor-pointer border border-slate-200 hover:border-indigo-500 transition-colors flex items-center justify-center p-2">
                                    <div className="w-full h-full bg-white border border-slate-200 p-2 shadow-sm text-[4px] leading-tight text-slate-400">Chapter 2...</div>
                                </div>
                            </div>
                        </div>

                        {/* DETAILS */}
                        <div className="flex-1 lg:py-4">
                            <div className="mb-4">
                                <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg">Fantasy</span>
                                <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg ml-2">Age: 10-14</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-4 leading-tight">The Hidden Magic</h1>

                            <div className="flex items-center gap-4 mb-8">
                                <img src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=100&q=80" alt="Author" className="w-12 h-12 rounded-full border-2 border-slate-100" />
                                <div>
                                    <p className="text-sm font-bold text-slate-500 mb-0.5">Written by</p>
                                    <Link to="/author/1" className="text-lg font-black text-indigo-600 hover:underline">Aisha Rahman</Link>
                                </div>
                            </div>

                            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
                                When 12-year-old Elara discovers a glowing crystal in her grandmother's attic, she has no idea it's the key to protecting her entire town from an ancient sleeping curse. A thrilling story about friendship, bravery, and finding magic in everyday life.
                            </p>

                            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 mb-8 max-w-xl">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="text-4xl font-black text-slate-800 flex items-center gap-2">₹250 <span className="text-sm font-medium text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 uppercase tracking-widest">Print + Digital</span></div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 py-4 bg-indigo-600 text-white font-black text-lg rounded-xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                                        <ShoppingCart className="w-5 h-5" /> Buy Book
                                    </button>
                                    <button className="px-6 py-4 bg-white border border-slate-200 text-slate-700 font-black text-lg rounded-xl hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors shadow-sm">
                                        <BookOpen className="w-5 h-5" /> Preview Pages
                                    </button>
                                </div>

                                <div className="mt-6 flex items-start gap-3 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                                    <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-700 mb-1">Directly Supports The Author</p>
                                        <p className="text-xs text-slate-500 font-medium">Of this ₹250 purchase, ₹160 goes directly to Aisha Rahman, and ₹90 supports publishing, printing & platform costs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                                <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                                    <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Language</div>
                                    <div className="font-bold text-slate-700">English</div>
                                </div>
                                <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                                    <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Pages</div>
                                    <div className="font-bold text-slate-700">120</div>
                                </div>
                                <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                                    <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Format</div>
                                    <div className="font-bold text-slate-700">Paperback</div>
                                </div>
                                <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                                    <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Publish Date</div>
                                    <div className="font-bold text-slate-700">Oct 2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LOWER SPEC SECTIONS */}
            <div className="max-w-[1200px] mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                            Preview <span className="bg-slate-100 text-[10px] uppercase font-bold px-2 py-1 rounded text-slate-500">First Chapter Snippet</span>
                        </h2>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative font-serif">
                            <Quote className="absolute top-4 left-4 w-12 h-12 text-slate-100 -z-10" />
                            <p className="text-lg text-slate-700 leading-loose mb-4">
                                The floorboards creaked as Elara tiptoed past her grandmother's room. The moonlight streamed through the dusty circular window, illuminating something she had never seen before—a small, wooden chest bound in glowing purple vines.
                            </p>
                            <p className="text-lg text-slate-700 leading-loose">
                                She held her breath and reached out. The moment her fingers brushed the wood, the vines unwrapped themselves with a soft snap, like a lock clicking open. Inside laid a smooth, diamond-shaped crystal that pulsed like a heartbeat.
                            </p>
                            <div className="w-full h-24 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 right-0 rounded-b-2xl flex items-end justify-center pb-4">
                                <button className="text-sm font-bold text-indigo-600 hover:underline">Read More in Preview PDF</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                            Reviews & Ratings
                        </h2>
                        <div className="space-y-6">
                            {[1, 2, 3].map((_, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 uppercase">U</div>
                                            <div>
                                                <div className="font-bold text-slate-800 text-sm">Verified Reader</div>
                                                <div className="flex gap-1 mt-1">
                                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold text-slate-400">2 weeks ago</span>
                                    </div>
                                    <p className="text-sm text-slate-600 font-medium italic">"Absolutely wonderful story! My daughter couldn't put it down. The magic system is so creative and inspiring."</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <h2 className="text-2xl font-black text-slate-800 mb-6">About the Author</h2>
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
                        <img src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=200&q=80" alt="Author" className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-50 mb-4" />
                        <h3 className="text-xl font-bold text-slate-800 mb-1">Aisha Rahman</h3>
                        <p className="text-sm font-bold text-indigo-600 mb-4">Age 14 • 12 Books Published</p>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                            Hi, I'm Aisha! I love writing fantasy and adventure stories that transport readers to magical worlds.
                        </p>
                        <Link to="/author/1" className="block w-full py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-colors text-sm">
                            View Full Profile
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;
