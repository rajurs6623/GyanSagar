import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CreditCard, ShieldCheck, Wallet,
    ArrowRight, Info, CheckCircle2,
    Clock, HelpCircle, Download,
    Briefcase, PieChart, TrendingUp,
    Star, Heart, Lock, Brain, Globe,
    ChevronRight, ReceiptText, Banknote
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const FeeStructure = () => {
    const [selectedCategory, setSelectedCategory] = useState('Primary');

    const feeData = {
        'Kindergarten': {
            admission: "₹5,000",
            monthly: "₹1,800",
            annual: "₹3,500",
            exam: "₹500",
            totalAnnual: "₹28,600 approx."
        },
        'Primary': {
            admission: "₹6,000",
            monthly: "₹2,200",
            annual: "₹4,000",
            exam: "₹800",
            totalAnnual: "₹34,200 approx."
        },
        'Middle': {
            admission: "₹7,000",
            monthly: "₹2,800",
            annual: "₹5,000",
            exam: "₹1,000",
            totalAnnual: "₹42,600 approx."
        },
        'Secondary': {
            admission: "₹8,000",
            monthly: "₹3,500",
            annual: "₹6,000",
            exam: "₹1,500",
            totalAnnual: "₹53,500 approx."
        }
    };

    const paymentModes = [
        { title: "Online Portal", desc: "Pay via Credit/Debit Cards, UPI, or Net Banking on our portal.", icon: <Globe className="w-5 h-5 text-indigo-400" /> },
        { title: "Bank Transfer", desc: "Direct NEFT/IMPS to the school's official account.", icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
        { title: "Account Office", desc: "Cash or Cheque deposit at our office counter.", icon: <Briefcase className="w-5 h-5 text-amber-400" /> }
    ];

    const faqs = [
        { q: "Is there any transportation fee?", a: "Transport fee varies based on distance (Route 1-12) and ranges from ₹800 to ₹1,800 per month." },
        { q: "Are there siblings discounts?", a: "Yes, we offer a 10% discount on the monthly tuition fee for the younger sibling." },
        { q: "What is the deadline for fee payment?", a: "Fee should be paid by the 10th of every month or every quarter to avoid late fine." }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-['Plus Jakarta Sans'] selection:bg-indigo-100 selection:text-indigo-900">
            <PageHero
                title="Fee"
                italicTitle="Structure"
                tag="Transparent Pricing"
                subtitle="Investing in your child's education is the best decision you'll ever make. We keep our fees clear, honest, and accessible."
                bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600"
                accentColor="text-indigo-400"
            />

            <div className="max-w-7xl mx-auto px-4 mt-12 md:mt-16 pb-24 relative z-50">
                {/* --- QUICK ACTION BAR --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/70 backdrop-blur-2xl p-6 md:p-8 rounded-[2.5rem] border border-white shadow-2xl flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-20"
                >
                    <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-slate-900 hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95 group">
                        Download Fee Chart <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-3">
                         <div className="flex -space-x-3 overflow-hidden">
                            {[1,2,3].map(i => (
                                <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" />
                            ))}
                        </div>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest pl-2 border-l border-slate-200">1.2k+ Parents Paid Online</p>
                    </div>
                </motion.div>

                {/* --- FEE CALCULATOR / DISPLAY --- */}
                <div className="bg-white rounded-[3rem] shadow-2xl shadow-indigo-100/50 border border-slate-100 overflow-hidden mb-32">
                    <div className="flex flex-col md:flex-row bg-slate-50/50 border-b border-slate-100">
                        {Object.keys(feeData).map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-1 py-8 px-6 font-black text-xs uppercase tracking-[0.2em] transition-all relative group ${selectedCategory === cat ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <span className="relative z-10">{cat}</span>
                                {selectedCategory === cat && (
                                    <motion.div layoutId="feeTab" className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-8 md:p-16 lg:p-24">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                            >
                                <div className="space-y-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <span className="w-8 h-px bg-indigo-600 rounded-full" />
                                            <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest">Pricing Details</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Educational <br/><span className="text-indigo-600">Investment</span></h2>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { label: "Admission Fee (One-time)", val: feeData[selectedCategory].admission, icon: <ReceiptText size={18}/>, color: "bg-amber-100 text-amber-600" },
                                            { label: "Tuition Fee (Monthly)", val: feeData[selectedCategory].monthly, icon: <Clock size={18}/>, color: "bg-indigo-100 text-indigo-600" },
                                            { label: "Annual Charges (Annual)", val: feeData[selectedCategory].annual, icon: <TrendingUp size={18}/>, color: "bg-emerald-100 text-emerald-600" },
                                            { label: "Examination Fee (Termly)", val: feeData[selectedCategory].exam, icon: <HelpCircle size={18}/>, color: "bg-rose-100 text-rose-600" }
                                        ].map((item, i) => (
                                            <motion.div 
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                key={i} 
                                                className="flex justify-between items-center p-6 bg-white rounded-3xl border border-slate-100 group hover:shadow-xl hover:shadow-indigo-50 transition-all"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-slate-500 font-bold text-sm tracking-tight">{item.label}</span>
                                                </div>
                                                <span className="text-slate-900 font-black text-xl">{item.val}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative group">
                                    <div className="absolute inset-0 bg-indigo-600 rounded-[3rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                                    <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                                        {/* Mesh Background */}
                                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] -mr-32 -mt-32" />
                                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] -ml-32 -mb-32" />
                                        </div>

                                        <div className="relative z-10 space-y-8">
                                            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto border border-white/10 shadow-inner">
                                                <Banknote size={40} className="text-indigo-400" />
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em]">Estimated Annual Projection</p>
                                                <h4 className="text-4xl md:text-6xl font-black tracking-tight">{feeData[selectedCategory].totalAnnual}</h4>
                                            </div>
                                            <p className="text-slate-400 text-sm font-medium leading-relaxed px-4">
                                                Includes tuition, annual, and exam charges. Transportation, uniform, and activity fees are calculated per requirement.
                                            </p>
                                            <button className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-500/20 hover:bg-white hover:text-slate-900 transition-all active:scale-95 flex items-center justify-center gap-3 group">
                                                Proceed to Pay <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- PAYMENT MODES --- */}
                <div className="space-y-12 mb-32">
                    <div className="text-center space-y-4">
                        <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Transaction Modes</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Flexible Payment <span className="text-indigo-600">Methods</span></h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {paymentModes.map((mode, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                key={i} 
                                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 border border-slate-50 transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6">
                                    {React.cloneElement(mode.icon, { className: "w-8 h-8" })}
                                </div>
                                <h4 className="text-lg font-black text-slate-900 mb-4">{mode.title}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{mode.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- POLICIES / FAQ --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <HelpCircle className="text-indigo-600" size={24}/>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Fee Policies & FAQ</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-slate-900 font-black text-base mb-3 leading-tight">{faq.q}</h4>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-indigo-50 rounded-[3rem] p-10 md:p-14 border border-indigo-100 md:sticky md:top-32 group">
                            <div className="w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-indigo-600 mb-8 transform group-hover:-rotate-6 transition-transform">
                                <Info size={32} />
                            </div>
                            <h4 className="text-2xl font-black text-slate-800 mb-4">Late Payment Policy</h4>
                            <p className="text-slate-600 font-medium leading-relaxed mb-8">
                                A late fine of <span className="font-black text-indigo-600">₹20 per day</span> applies if the fee is not paid by the 10th of the due month.
                                <br/><br/>
                                Please reach out to our accounts department if you are facing any genuine difficulties or need payment extensions.
                            </p>
                            <button className="flex items-center gap-2 font-black text-indigo-600 text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                                View Full Policy <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeStructure;
