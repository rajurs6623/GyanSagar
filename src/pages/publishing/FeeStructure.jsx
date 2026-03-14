import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CreditCard, ShieldCheck, Wallet, 
    ArrowRight, Info, CheckCircle2, 
    Clock, HelpCircle, Download,
    Briefcase, PieChart, TrendingUp,
    Star, Heart, Lock, Brain
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
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito']">
            <PageHero 
                title="Investment in"
                italicTitle="Education"
                tag="Transparent & Simple"
                subtitle="We maintain a transparent fee structure with no hidden costs. Our goal is to provide world-class education that remains accessible."
                bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600"
                accentColor="text-indigo-400"
            />

            <div className="max-w-7xl mx-auto px-4 mb-20 -mt-32 relative z-20">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20 shadow-3xl flex flex-wrap justify-center gap-6">
                    <button className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/20 hover:scale-105 transition-all flex items-center gap-3">
                        Download Fee Chart <Download className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-black rounded-2xl hover:bg-white/30 transition-all flex items-center gap-3">
                        Pay Online <Wallet className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Fee Table Section */}
            <div className="max-w-7xl mx-auto px-4 mb-20">
                <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    <div className="flex flex-col md:flex-row border-b border-slate-50">
                        {Object.keys(feeData).map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-1 py-8 px-6 font-black text-sm uppercase tracking-[0.2em] transition-all border-b-4 md:border-b-0 md:border-r last:border-r-0 ${selectedCategory === cat ? 'bg-indigo-600 text-white border-indigo-600' : 'text-slate-400 hover:bg-slate-50 border-transparent'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="p-10 md:p-20">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                            >
                                <div>
                                    <h3 className="text-4xl font-black text-slate-800 mb-8 tracking-tighter">Academic Year <span className="text-indigo-600">2024-25</span></h3>
                                    <div className="space-y-6">
                                        {[
                                            { label: "One-time Admission Fee", val: feeData[selectedCategory].admission, icon: <Star className="w-4 h-4 text-amber-500" /> },
                                            { label: "Monthly Tuition Fee", val: feeData[selectedCategory].monthly, icon: <ArrowRight className="w-4 h-4 text-indigo-400" /> },
                                            { label: "Annual Charges", val: feeData[selectedCategory].annual, icon: <ArrowRight className="w-4 h-4 text-indigo-400" /> },
                                            { label: "Examination Fee (per term)", val: feeData[selectedCategory].exam, icon: <ArrowRight className="w-4 h-4 text-indigo-400" /> }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">{item.label}</span>
                                                </div>
                                                <span className="text-slate-900 font-black text-xl">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <Wallet className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
                                        <p className="text-indigo-200 text-xs font-black uppercase tracking-[0.3em] mb-2">Total Estimated Investment</p>
                                        <h4 className="text-6xl font-[900] mb-8 tracking-tighter">{feeData[selectedCategory].totalAnnual}</h4>
                                        <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">
                                            This estimate includes tuition, annual and exam fees. 
                                            Uniforms, books, and transport are calculated separately.
                                        </p>
                                        <button className="w-full py-4 bg-white text-slate-900 font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-amber-400 transition-all font-['Nunito']">
                                            Proceed to Payment
                                        </button>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Payment Modes */}
            <div className="max-w-7xl mx-auto px-4 mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                {paymentModes.map((mode, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-12">
                            {mode.icon}
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-4">{mode.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{mode.desc}</p>
                    </div>
                ))}
            </div>

            {/* FAQ / Policies */}
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-3xl font-black text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" /> Fee Related <span className="text-indigo-600">FAQ</span>
                </h3>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100">
                            <h4 className="text-lg font-black text-slate-800 mb-3">{faq.q}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 p-12 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-12 group">
                    <div className="shrink-0 w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-indigo-600">
                        <Info className="w-10 h-10" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-800 mb-2">Late Payment Policy</h4>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">
                            A late fine of ₹20 per day applies if the fee is not paid by the 10th of the due month. 
                            Please contact the accounts office for any difficulties.
                        </p>
                        <button className="flex items-center gap-3 font-black text-indigo-600 hover:gap-5 transition-all text-sm uppercase tracking-widest">
                            READ FULL POLICY <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Globe component since lucide-react doesn't have it by default in some versions or I might have missed it
const Globe = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
);

export default FeeStructure;
