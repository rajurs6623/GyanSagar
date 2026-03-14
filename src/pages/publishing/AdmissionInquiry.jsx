import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GraduationCap, User, Mail, Phone,
    BookOpen, MapPin, Send, CheckCircle2,
    Calendar, Users, Info, Sparkles,
    ShieldCheck, Heart, Star, Clock,
    ArrowRight, Trophy, MessageSquare, Brain
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
        // Compose WhatsApp message from form data
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
            // Open WhatsApp with form details
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`, '_blank');
            setTimeout(() => setIsSubmitted(false), 6000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to inquire about admission at Gyan Sagar Public School.')}`;

    return (
        <div className="min-h-screen bg-white pt-28 pb-20 font-['Nunito']">

            <PageHero 
                title="Admission"
                italicTitle="Inquiry"
                tag="Start the Journey"
                subtitle="Fill the form below and our team will reach you within 24 hours. Or directly connect with us on WhatsApp for instant support!"
                bgImage="/GyanSagar/StudentPatna.jpg"
                accentColor="text-indigo-400"
            />

            {/* ─── MAIN FORM + SIDEBAR ─── */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">

                {/* FORM */}
                <div className="lg:w-3/5 w-full">
                    <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter">
                        Registration <span className="text-indigo-600">Form</span>
                    </h2>
                    <p className="text-slate-500 text-base font-medium mb-10">
                        Fill in the details below. After submitting, the form will open WhatsApp so our team can get in touch instantly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Student + Parent */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Student's Full Name *</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} placeholder="Student Name"
                                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-200 rounded-2xl px-12 py-4 font-bold text-slate-700 focus:outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Parent / Guardian Name *</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} placeholder="Parent Name"
                                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-200 rounded-2xl px-12 py-4 font-bold text-slate-700 focus:outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Phone + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Number (WhatsApp) *</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91-XXXXX-XXXXX"
                                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-200 rounded-2xl px-12 py-4 font-bold text-slate-700 focus:outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com"
                                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-200 rounded-2xl px-12 py-4 font-bold text-slate-700 focus:outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* DOB + Grade */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Date of Birth *</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <input type="date" name="dob" required value={formData.dob} onChange={handleChange}
                                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-200 rounded-2xl px-12 py-4 font-bold text-slate-700 focus:outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Desired Class *</label>
                                <div className="relative">
                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <select name="grade" required value={formData.grade} onChange={handleChange}
                                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-200 rounded-2xl px-12 py-4 font-bold text-slate-700 focus:outline-none transition-all appearance-none cursor-pointer">
                                        <option value="">Select Class</option>
                                        {grades.map(g => <option key={g} value={g}>{g}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Previous School */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Previous School Name (if any)</label>
                            <div className="relative">
                                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} placeholder="Name of previous school"
                                    className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-200 rounded-2xl px-12 py-4 font-bold text-slate-700 focus:outline-none transition-all" />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Additional Message / Questions</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                                placeholder="Any specific requirements, scholarship queries, or questions..."
                                className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-200 rounded-2xl px-6 py-4 font-bold text-slate-700 focus:outline-none transition-all resize-none" />
                        </div>

                        {/* Notice */}
                        <div className="flex items-start gap-3 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-amber-800 font-bold text-sm leading-relaxed">
                                After clicking Submit, a WhatsApp chat will open with your form details pre-filled. Just hit Send to reach us instantly!
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading || isSubmitted}
                            className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-4 shadow-2xl ${isSubmitted ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white hover:bg-slate-900 shadow-indigo-100'}`}
                        >
                            {isLoading ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
                            ) : isSubmitted ? (
                                <><CheckCircle2 className="w-6 h-6" /> Redirecting to WhatsApp...</>
                            ) : (
                                <><Send className="w-5 h-5" /> Submit & Open WhatsApp</>
                            )}
                        </button>

                        {/* Direct WhatsApp Alt */}
                        <a
                            href={whatsappDirectUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 bg-[#25D366] text-white hover:bg-green-700 shadow-xl shadow-green-100"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Or Chat Directly on WhatsApp → +91 7979 001 951
                        </a>
                    </form>
                </div>

                {/* SIDEBAR */}
                <div className="lg:w-2/5 w-full space-y-8">
                    {/* Why Gyan Sagar */}
                    <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100">
                        <h3 className="text-2xl font-black text-slate-900 mb-8">Why Choose <br /><span className="text-indigo-600">Gyan Sagar?</span></h3>
                        <div className="space-y-6">
                            {[
                                { title: "Holistic Development", desc: "Academics, sports, arts — all under one roof.", icon: <Heart className="w-5 h-5" />, color: "text-rose-500" },
                                { title: "Expert Educators", desc: "Passionate teachers dedicated to every child.", icon: <Star className="w-5 h-5" />, color: "text-amber-500" },
                                { title: "Safe & Modern Campus", desc: "Smart classrooms, labs, library & CCTV.", icon: <ShieldCheck className="w-5 h-5" />, color: "text-emerald-500" },
                                { title: "100% Board Results", desc: "Consistent toppers in Bihar Board exams.", icon: <Trophy className="w-5 h-5" />, color: "text-indigo-500" },
                                { title: "GPS School Transport", desc: "Safe, tracked buses on all major Patna routes.", icon: <MapPin className="w-5 h-5" />, color: "text-blue-500" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-5 group">
                                    <div className={`shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-black mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-6">Contact Admissions</h3>
                            <div className="space-y-5">
                                <a href="tel:+917979001951" className="flex items-center gap-4 font-black text-indigo-100 hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"><Phone className="w-5 h-5" /></div>
                                    +91 7979 001 951
                                </a>
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 font-black text-indigo-100 hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-[#25D366]/40 rounded-2xl flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    </div>
                                    WhatsApp: +91 7979 001 951
                                </a>
                                <div className="flex items-center gap-4 font-black text-indigo-100">
                                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
                                    Ram Krishna Nagar, Patna 800027
                                </div>
                                <div className="flex items-center gap-4 font-black text-indigo-100">
                                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"><Clock className="w-5 h-5" /></div>
                                    Mon–Sat, 8:30 AM – 2:30 PM
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                    </div>

                    {/* Campus Image */}
                    <div className="relative group overflow-hidden rounded-[3rem]">
                        <div className="absolute inset-0 bg-indigo-900/50 group-hover:bg-indigo-900/30 transition-all z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
                            alt="Visit Campus"
                            className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                            <MapPin className="w-10 h-10 mb-3 animate-bounce" />
                            <p className="font-black text-xl uppercase tracking-tighter">Visit Our Campus</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest mt-2 text-slate-300">Ram Krishna Nagar, Patna</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── SUCCESS MODAL ─── */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                            className="bg-white rounded-[3rem] p-12 max-w-lg w-full text-center shadow-3xl"
                        >
                            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-800 mb-4">Thank You! 🎉</h2>
                            <p className="text-slate-500 font-medium leading-relaxed mb-4">
                                Your inquiry has been received. WhatsApp should open automatically with your details.
                            </p>
                            <p className="text-slate-400 font-bold text-sm mb-8">
                                If WhatsApp didn't open, call us: <a href="tel:+917979001951" className="text-indigo-600 underline">+91 7979 001 951</a>
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── FLOATING WHATSAPP BUTTON ─── */}
            <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-8 right-8 z-[999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-400/50 hover:scale-110 active:scale-95 transition-all"
                title="Chat on WhatsApp"
            >
                <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </motion.div>
                <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
            </a>
        </div>
    );
};

export default AdmissionInquiry;
