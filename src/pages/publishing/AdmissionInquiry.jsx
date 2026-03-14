import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GraduationCap, User, Mail, Phone,
    BookOpen, MapPin, Send, CheckCircle2,
    Calendar, Users, Info, Sparkles,
    ShieldCheck, Heart, Star, Clock,
    ArrowRight, Trophy, MessageSquare, Brain,
    ChevronRight, CreditCard, ClipboardList
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const WHATSAPP_NUMBER = '917979001951';

const AdmissionInquiry = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        dob: '',
        previousSchool: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const grades = [
        'Nursery/NC', 'LKG', 'UKG',
        'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
        'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
        'Class 11 (Science)', 'Class 11 (Commerce)', 'Class 11 (Humanities)',
        'Class 12 (Science)', 'Class 12 (Commerce)', 'Class 12 (Humanities)'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const waMsg = encodeURIComponent(
            `*New Admission Inquiry – Gyan Sagar Public School*\n\n` +
            `👦 Student Name: ${formData.studentName}\n` +
            `👨 Parent Name: ${formData.parentName}\n` +
            `📞 Phone: ${formData.phone}\n` +
            `📧 Email: ${formData.email}\n` +
            `📚 Desired Class: ${formData.grade}\n` +
            `🎂 Date of Birth: ${formData.dob}\n` +
            `🏫 Previous School: ${formData.previousSchool || 'N/A'}\n` +
            `💬 Message: ${formData.message || 'No additional message'}`
        );
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`, '_blank');
            setTimeout(() => setIsSubmitted(false), 6000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to inquire about admission at Gyan Sagar Public School.')}`;

    const inputClasses = "w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-xl px-11 py-3.5 text-slate-700 font-medium transition-all outline-none placeholder:text-slate-300 placeholder:font-normal";
    const labelClasses = "text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 block ml-1";

    return (
        <div className="min-h-screen bg-slate-50 font-['Plus Jakarta Sans'] selection:bg-indigo-100 selection:text-indigo-900">

            <PageHero
                title="Admission"
                italicTitle="Portal"
                tag="Registration 2025-26"
                subtitle="Join our community of learners. Our registration process is simple, digital, and designed for your convenience."
                bgImage="/GyanSagar/StudentPatna.jpg"
                accentColor="text-indigo-400"
            />

            <div className="max-w-[1300px] mx-auto px-4 md:px-8 -mt-24 pb-24 relative z-50">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* --- FORM SECTION --- */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 p-8 md:p-12 overflow-hidden relative"
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                                        <ClipboardList size={22} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Student Registration</h2>
                                        <p className="text-slate-500 text-sm font-medium">Please provide the student and guardian details below.</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    
                                    {/* --- Section: Student Information --- */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">01. Student Information</span>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative group">
                                                <label className={labelClasses}>Full Legal Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                    <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} placeholder="As per Birth Certificate" className={inputClasses} />
                                                </div>
                                            </div>
                                            <div className="relative group">
                                                <label className={labelClasses}>Date of Birth *</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                    <input type="date" name="dob" required value={formData.dob} onChange={handleChange} className={inputClasses} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative group">
                                                <label className={labelClasses}>Desired Class *</label>
                                                <div className="relative">
                                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                    <select name="grade" required value={formData.grade} onChange={handleChange} className={inputClasses + " appearance-none cursor-pointer"}>
                                                        <option value="">Select Target Class</option>
                                                        {grades.map(g => <option key={g} value={g}>{g}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="relative group">
                                                <label className={labelClasses}>Previous school Name</label>
                                                <div className="relative">
                                                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                    <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} placeholder="If applicable" className={inputClasses} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- Section: Parent / Contact --- */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">02. Parent & Contact Information</span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative group">
                                                <label className={labelClasses}>Guardian's Name *</label>
                                                <div className="relative">
                                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                    <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} placeholder="Father / Mother Name" className={inputClasses} />
                                                </div>
                                            </div>
                                            <div className="relative group">
                                                <label className={labelClasses}>WhatsApp Number *</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Active WhatsApp Number" className={inputClasses} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <label className={labelClasses}>Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="fexample@mail.com" className={inputClasses} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- Section: Additional --- */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">03. Additional Notes</span>
                                        </div>
                                        <div className="relative group">
                                            <label className={labelClasses}>Inquiry Details</label>
                                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                                                placeholder="Ask about fees, transport, scholarship, or any specific requirements..."
                                                className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-xl px-6 py-4 text-slate-700 font-medium transition-all outline-none resize-none placeholder:text-slate-300 placeholder:font-normal" />
                                        </div>
                                    </div>

                                    {/* --- Summary Info --- */}
                                    <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 text-indigo-600 shadow-sm">
                                            <Info size={20} />
                                        </div>
                                        <div>
                                            <p className="text-indigo-900 font-bold text-sm mb-1">Instant Direct Connection</p>
                                            <p className="text-indigo-700/70 text-xs leading-relaxed">
                                                Upon clicking the submit button, your registration details will be encrypted and sent directly to our admission counselors via WhatsApp for immediate processing.
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading || isSubmitted}
                                        className={`w-full group relative overflow-hidden py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-4 shadow-xl ${isSubmitted ? 'bg-emerald-500 text-white shadow-emerald-200' : 'bg-indigo-600 text-white hover:bg-slate-900 shadow-indigo-100'}`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        {isLoading ? (
                                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
                                        ) : isSubmitted ? (
                                            <><CheckCircle2 className="w-6 h-6 animate-pulse" /> Redirecting...</>
                                        ) : (
                                            <><Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Confirm Registration</>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a href={whatsappDirectUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-5 bg-white border border-slate-100 rounded-3xl shadow-lg hover:shadow-xl transition-all group">
                                <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"><Phone size={18} /></div>
                                <div className="text-left">
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Direct Helpline</p>
                                    <p className="text-slate-700 font-bold text-sm">WhatsApp Call / Chat</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300 ml-auto group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="tel:+917979001951" className="flex items-center justify-center gap-3 p-5 bg-white border border-slate-100 rounded-3xl shadow-lg hover:shadow-xl transition-all group">
                                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"><Mail size={18} /></div>
                                <div className="text-left">
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Email Inquiry</p>
                                    <p className="text-slate-700 font-bold text-sm">info@gyansagar.com</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300 ml-auto group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* --- SIDEBAR SECTION --- */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Why Choose Gyan Sagar Card */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
                             {/* Mesh Gradient Background */}
                             <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                                <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-[80px]" />
                                <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-500 rounded-full blur-[80px]" />
                            </div>

                            <div className="relative z-10 space-y-8">
                                <div>
                                    <h3 className="text-2xl font-black text-white leading-tight">Why Choose <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-300">Gyan Sagar?</span></h3>
                                    <div className="h-1 w-12 bg-indigo-500 rounded-full mt-4" />
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: "Smart Academics", desc: "NCERT mapped curriculum with 100% Board topper records.", icon: <Brain size={20} />, color: "text-indigo-400" },
                                        { title: "Safe GPS Transport", desc: "Live tracked school buses covering 90% of Patna routes.", icon: <MapPin size={20} />, color: "text-rose-400" },
                                        { title: "Elite Faculty", desc: "Mentors from top educational backgrounds dedicated to growth.", icon: <Star size={20} />, color: "text-amber-400" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5 group">
                                            <div className={`w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 border border-white/10 ${item.color}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                                                <p className="text-slate-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                                        <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400"><Clock size={16} /></div>
                                        <div>
                                            <p className="text-white font-bold text-xs uppercase tracking-widest">Office Hours</p>
                                            <p className="text-slate-400 text-[11px] font-medium mt-0.5">Mon–Sat, 8:30 AM – 2:30 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scholarship Sidebar Callout */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                    <Trophy size={24} className="text-amber-300" />
                                </div>
                                <h3 className="text-xl font-black mb-2">Gyan Ratna <br/>Scholarship 2025</h3>
                                <p className="text-indigo-100 text-xs font-medium leading-relaxed mb-6 opacity-80">
                                    Merit-based scholarships for Class 9 and 11 entrance. Upto 100% fee waiver.
                                </p>
                                <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg">
                                    Check Eligibility
                                </button>
                            </div>
                        </motion.div>

                        {/* Quick Contact Footer */}
                        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                            <h4 className="font-black text-slate-800 text-sm uppercase tracking-widest mb-6 border-l-4 border-indigo-600 pl-4">Contact Info</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><MapPin size={18}/></div>
                                    <p className="text-slate-500 text-xs font-bold leading-tight">Ram Krishna Nagar,<br/>Patna, Bihar 800027</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><Phone size={18}/></div>
                                    <p className="text-slate-500 text-xs font-bold leading-tight">+91 7979 001 951</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><Mail size={18}/></div>
                                    <p className="text-slate-500 text-xs font-bold leading-tight">info@gyansagar.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FLOATING WHATSAPP --- */}
            <a href={whatsappDirectUrl} target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 z-[999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-400/50 hover:scale-110 active:scale-95 transition-all group">
                <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </motion.div>
                <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
            </a>
        </div>
    );
};

export default AdmissionInquiry;
