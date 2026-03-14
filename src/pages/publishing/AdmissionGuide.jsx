import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    GraduationCap, BookOpen, Search, UserCheck,
    FileText, CheckCircle2, ArrowRight, ShieldCheck,
    MessageCircle, Calendar, MapPin, Star,
    Heart, Sparkles, Trophy, Globe, Phone,
    Clock, Users, ChevronDown, ChevronUp, Zap, Brain,
    LayoutDashboard, ClipboardCheck, Sparkle
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const WHATSAPP_NUMBER = '917979001951';

const AdmissionGuide = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);

    const whatsappMessage = encodeURIComponent(
        "Hello! I am interested in admission at Gyan Sagar Public School. Please guide me about the admission process for the academic session 2025-26."
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    const steps = [
        {
            id: 0,
            title: "Inquiry & Visit",
            icon: <MapPin className="w-8 h-8" />,
            color: "bg-indigo-600",
            lightColor: "bg-indigo-50",
            textColor: "text-indigo-600",
            borderColor: "border-indigo-500",
            desc: "Visit our campus at Ram Krishna Nagar for a personal tour and collect the school prospectus. You can also start your inquiry directly via WhatsApp.",
            details: ["Campus Tour", "Meet the Counselors", "Prospectus Collection", "WhatsApp Chat with Admission Team"]
        },
        {
            id: 1,
            title: "Registration",
            icon: <FileText className="w-8 h-8" />,
            color: "bg-amber-500",
            lightColor: "bg-amber-50",
            textColor: "text-amber-600",
            borderColor: "border-amber-400",
            desc: "Submit the registration form along with the required processing fee and basic student details. Online & offline registration both available.",
            details: ["Form Submission", "Registration Fee Payment", "Schedule Assessment Date", "Document Pre-Verification"]
        },
        {
            id: 2,
            title: "Assessment",
            icon: <MessageCircle className="w-8 h-8" />,
            color: "bg-emerald-600",
            lightColor: "bg-emerald-50",
            textColor: "text-emerald-600",
            borderColor: "border-emerald-500",
            desc: "For NC–5th: A friendly interaction session. For Class 6 and above: A basic proficiency test in core subjects. No pressure, just a conversation!",
            details: ["Friendly Interaction (NC–5th)", "Proficiency Test (6th+)", "Parent-Counselor Discussion", "Same-Day Result for Junior Classes"]
        },
        {
            id: 3,
            title: "Finalization",
            icon: <UserCheck className="w-8 h-8" />,
            color: "bg-rose-600",
            lightColor: "bg-rose-50",
            textColor: "text-rose-600",
            borderColor: "border-rose-400",
            desc: "After selection, complete the admission formalities — submit necessary documents, deposit the fee, and collect your welcome kit on Day 1!",
            details: ["Documents Verification", "Fee Deposit", "Uniform & Books", "Welcome Kit & ID Card"]
        }
    ];

    const documents = [
        { doc: "Recent Passport Size Photographs (4 copies)", icon: "📷" },
        { doc: "Birth Certificate (Original + Copy)", icon: "📋" },
        { doc: "Transfer Certificate (for Grade 2 upwards)", icon: "🔖" },
        { doc: "Previous Class Report Card / Marksheet", icon: "📊" },
        { doc: "Aadhar Card of Student & Parent (Copy)", icon: "🪪" },
        { doc: "Residence Proof (if applicable)", icon: "🏠" },
    ];

    const faqs = [
        { q: "What is the age criteria for Nursery admission?", a: "A child must be at least 3 years of age as of April 1st of the new academic session to be eligible for Nursery/NC admission." },
        { q: "Is there any entrance test for junior classes?", a: "No formal test for NC to Class 5. It is a simple, friendly interaction to understand the child's readiness. For Class 6 and above, a basic proficiency test is conducted." },
        { q: "When does the new academic session begin?", a: "Our new academic session typically begins in April. Admissions open in January. We recommend applying early as seats are limited." },
        { q: "Is there a school bus facility?", a: "Yes! We have a fleet of GPS-tracked school buses covering major routes in Patna. Details are provided at the time of admission." },
        { q: "Can I apply online?", a: "Absolutely. You can fill out our online inquiry form on this website. Our team will call you back within 24 working hours to proceed." },
        { q: "What is the medium of instruction?", a: "The medium of instruction at Gyan Sagar Public School is primarily English, with special emphasis on Hindi as a second language." },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-['Plus Jakarta Sans'] selection:bg-indigo-100 selection:text-indigo-900">

            <PageHero
                title="Admission"
                italicTitle="Guide"
                tag="Session 2025-26"
                subtitle="Everything you need to know about joining Gyan Sagar. We ensure a transparent, parent-friendly enrollment journey."
                bgImage="https://images.unsplash.com/photo-1523050335102-c3251c17b384?auto=format&fit=crop&q=80&w=1600"
                accentColor="text-indigo-400"
            />

            <div className="max-w-7xl mx-auto px-4 -mt-24 pb-24 relative z-50">
                {/* --- QUICK ACTION BAR --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/70 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] border border-white shadow-2xl flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-20"
                >
                    <Link
                        to="/admission-inquiry"
                        className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-slate-900 hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95 group"
                    >
                        Apply for Admission <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex items-center gap-6">
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                            <div className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-100 transition-transform group-hover:scale-110"><Phone size={20} /></div>
                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">WhatsApp</span>
                        </a>
                        <a href="tel:+917979001951" className="flex flex-col items-center gap-1 group">
                            <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg transition-transform group-hover:scale-110"><Phone size={20} /></div>
                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Call Desk</span>
                        </a>
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-rose-500 shadow-lg transition-transform group-hover:scale-110"><MapPin size={20} /></div>
                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Visit</span>
                        </div>
                    </div>
                </motion.div>

                {/* --- STATS GRID --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-32">
                    {[
                        { val: "NC–12th", label: "Classes Open", icon: <GraduationCap size={20}/>, color: "bg-indigo-50 text-indigo-600" },
                        { val: "25+ Yrs", label: "Experience", icon: <Trophy size={20}/>, color: "bg-amber-50 text-amber-600" },
                        { val: "100%", label: "Matric Success", icon: <ClipboardCheck size={20}/>, color: "bg-emerald-50 text-emerald-600" },
                        { val: "24 Hrs", label: "Quick Reply", icon: <Clock size={20}/>, color: "bg-rose-50 text-rose-600" },
                    ].map((s, i) => (
                        <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                            <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>{s.icon}</div>
                            <p className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{s.val}</p>
                            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* --- THE JOURNEY SECTION --- */}
                <div className="space-y-12 mb-32">
                    <div className="text-center space-y-4">
                        <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Step-by-Step</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">The Enrollment <span className="text-indigo-600">Journey</span></h2>
                        <p className="text-slate-500 font-medium max-w-2xl mx-auto">We've simplified our admission process into four clear stages to help you secure your child's seat effectively.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Tabs */}
                        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
                            {steps.map((step, idx) => (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(idx)}
                                    className={`relative p-6 rounded-[2rem] border-2 transition-all text-left overflow-hidden group ${activeStep === idx ? `bg-white ${step.borderColor} shadow-xl scale-[1.02]` : 'bg-slate-100/50 border-transparent text-slate-400 hover:bg-white hover:border-slate-200'}`}
                                >
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${activeStep === idx ? step.color + ' text-white shadow-lg shadow-indigo-100' : 'bg-white shadow-sm'}`}>
                                            {step.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Step {idx + 1}</p>
                                            <h4 className={`text-lg font-black leading-tight ${activeStep === idx ? 'text-slate-900' : 'text-slate-500'}`}>{step.title}</h4>
                                        </div>
                                    </div>
                                    {activeStep === idx && <div className={`absolute top-0 right-0 w-32 h-32 ${step.color} opacity-[0.03] rounded-full -mr-16 -mt-16`} />}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-8">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden h-full"
                                >
                                    {/* Mesh Gradient */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                                        <div className={`absolute top-0 left-0 w-64 h-64 ${steps[activeStep].color} rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2`} />
                                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
                                    </div>

                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <div className="space-y-8">
                                            <div className="space-y-2">
                                                <h3 className="text-3xl md:text-5xl font-black tracking-tight">{steps[activeStep].title}</h3>
                                                <div className="h-1.5 w-16 bg-white/20 rounded-full">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "100%" }}
                                                        className={`h-full ${steps[activeStep].color} rounded-full`}
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-slate-400 text-lg font-medium leading-relaxed">{steps[activeStep].desc}</p>
                                            <ul className="grid grid-cols-1 gap-4">
                                                {steps[activeStep].details.map((detail, i) => (
                                                    <motion.li 
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        key={detail} 
                                                        className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors"
                                                    >
                                                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                                                        <span className="text-slate-200 font-bold text-sm tracking-wide">{detail}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-12 flex items-center justify-center relative group">
                                                <div className="absolute inset-0 bg-white/5 rounded-[3rem] blur-2xl group-hover:scale-110 transition-transform duration-1000" />
                                                <div className={`w-32 h-32 rounded-[2.5rem] ${steps[activeStep].color} flex items-center justify-center text-white shadow-2xl shadow-black/50 relative z-10 transition-transform duration-700 group-hover:rotate-12`}>
                                                    {React.cloneElement(steps[activeStep].icon, { className: "w-16 h-16" })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* --- DOCUMENT SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <div className="space-y-8">
                        <div>
                            <span className="text-indigo-600 font-black text-xs uppercase tracking-widest pl-4 border-l-4 border-indigo-600">Verification</span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mt-4">Document <br/><span className="text-indigo-600 italic">Checklist</span></h2>
                        </div>
                        <p className="text-slate-500 font-medium text-lg max-w-lg leading-relaxed">Please ensure you have these documents ready for a smooth and hassle-free admission finalization process.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {documents.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-indigo-50 transition-colors">{item.icon}</div>
                                    <p className="text-slate-700 font-bold text-xs tracking-tight leading-tight">{item.doc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group">
                             {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                                <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-[80px]" />
                                <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-500 rounded-full blur-[80px]" />
                            </div>

                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-amber-300 border border-white/10"><Trophy size={32}/></div>
                                <h3 className="text-3xl font-black leading-tight">Gyan Ratna <br/>Scholarship 2025</h3>
                                <p className="text-slate-400 font-medium text-lg leading-relaxed">
                                    Brilliant students entering Class 9 and 11 can apply for our merit-based scholarship through an entrance test.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <Sparkles className="text-amber-400" size={20}/>
                                        <span className="font-bold text-sm">Up to 100% Fee Waiver</span>
                                    </div>
                                    <Link to="/scholarships" className="block w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-center shadow-xl hover:bg-amber-400 transition-all active:scale-95 group">
                                        Check Eligibility <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- FAQ SECTION --- */}
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Got Questions?</h2>
                        <p className="text-slate-500 font-medium mt-4">Common queries parents ask about our admission process.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-8 text-left group"
                                >
                                    <span className={`font-black tracking-tight transition-colors ${openFaq === i ? 'text-indigo-600' : 'text-slate-800'}`}>{faq.q}</span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${openFaq === i ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                                        {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-8 pb-8 text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-4"
                                        >
                                            {faq.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- FINAL CTA --- */}
            <div className="max-w-5xl mx-auto px-4 py-24 bg-slate-900 rounded-[4rem] text-center text-white relative overflow-hidden mb-24">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
                </div>
                
                <div className="relative z-10 space-y-8">
                    <Heart className="w-12 h-12 text-rose-500 mx-auto animate-pulse" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">Ready to Enroll Your Child <br/>at Gyan Sagar?</h2>
                    <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto italic">
                        "Enrolling a student at Gyan Sagar is the beginning of a lifelong journey of partnership. We welcome you to our family."
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <Link to="/admission-inquiry" className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-2xl shadow-indigo-500/20 hover:bg-white hover:text-slate-900 transition-all active:scale-95 group">
                            Start Registration <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-12 py-5 bg-[#25D366] text-white rounded-2xl font-black shadow-2xl shadow-green-500/20 hover:bg-white hover:text-[#25D366] transition-all active:scale-95">
                            Chat on WhatsApp
                        </a>
                    </div>
                    <div className="pt-12 flex items-center justify-center gap-8">
                        <div className="text-center">
                            <p className="text-white font-black text-2xl">NC – 12th</p>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Class Range</p>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-center">
                            <p className="text-white font-black text-2xl">Session</p>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">2025–26</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FLOATING WHATSAPP --- */}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 z-[999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-400/50 hover:scale-110 active:scale-95 transition-all group">
                <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </motion.div>
                <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
            </a>
        </div>
    );
};

export default AdmissionGuide;
