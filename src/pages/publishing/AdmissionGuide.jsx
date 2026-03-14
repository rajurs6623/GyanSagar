import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    GraduationCap, BookOpen, Search, UserCheck,
    FileText, CheckCircle2, ArrowRight, ShieldCheck,
    MessageCircle, Calendar, MapPin, Star,
    Heart, Sparkles, Trophy, Globe, Phone,
    Clock, Users, ChevronDown, ChevronUp, Zap, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const WHATSAPP_NUMBER = '917979001951'; // 91 = India country code

const AdmissionGuide = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);

    const whatsappMessage = encodeURIComponent(
        "Hello! I am interested in admission at Gyan Sagar Public School. Please guide me about the admission process for the academic session 2024-25."
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
        <div className="min-h-screen bg-white pt-28 pb-20 font-['Nunito']">

            <PageHero
                title="Admission"
                italicTitle="Guide"
                tag="Admission Session 2024-25"
                subtitle="Join the legacy of Gyan Sagar Public School. We follow a transparent and parent-friendly process to ensure a smooth transition for your child from NC to 12th Standard."
                bgImage="https://images.unsplash.com/photo-1523050335102-c3251c17b384?auto=format&fit=crop&q=80&w=1600"
                accentColor="text-indigo-400"
            />

            <div className="max-w-7xl mx-auto px-4 mb-20 -mt-32 relative z-20">
                {/* Quick Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20 shadow-3xl">
                    <Link
                        to="/admission-inquiry"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-2xl shadow-indigo-100 hover:bg-slate-900 transition-all group"
                    >
                        Apply Online Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black shadow-2xl shadow-green-100 hover:bg-green-700 transition-all"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat on WhatsApp
                    </a>
                    <a
                        href="tel:+917979001951"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-black hover:bg-slate-50 transition-all"
                    >
                        <Phone className="w-5 h-5 text-indigo-600" /> +91 7979 001 951
                    </a>
                </div>
            </div>

            {/* ─── QUICK STATS BAR ─── */}
            <div className="max-w-5xl mx-auto px-4 mb-20">
                <div className="bg-indigo-600 rounded-[3rem] p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white shadow-2xl shadow-indigo-200">
                    {[
                        { val: "NC–12th", label: "All Classes Open" },
                        { val: "25+", label: "Years of Excellence" },
                        { val: "100%", label: "Board Results" },
                        { val: "24h", label: "Response Time" },
                    ].map((s, i) => (
                        <div key={i}>
                            <p className="text-3xl md:text-4xl font-black mb-1 text-amber-300">{s.val}</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── STEP-BY-STEP PROCESS ─── */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
                        4-Step <span className="text-indigo-600">Admission Journey</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Simple, transparent, and parent-friendly — from first inquiry to first day at school.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {steps.map((step, idx) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(idx)}
                            className={`p-6 md:p-8 rounded-[3rem] border-2 transition-all text-center relative overflow-hidden group ${activeStep === idx ? `bg-white ${step.textColor} ${step.borderColor} shadow-2xl` : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-200'}`}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${activeStep === idx ? step.color + ' text-white' : 'bg-slate-200 text-slate-400'}`}>
                                {step.icon}
                            </div>
                            <h4 className="text-base md:text-xl font-black mb-1 leading-tight">{step.title}</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest">Step {idx + 1}</p>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <span className={`w-12 h-12 rounded-2xl ${steps[activeStep].color} flex items-center justify-center font-black text-xl`}>{activeStep + 1}</span>
                                    <h3 className="text-3xl md:text-5xl font-black">{steps[activeStep].title}</h3>
                                </div>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">{steps[activeStep].desc}</p>
                                <div className="space-y-4 mb-10">
                                    {steps[activeStep].details.map(detail => (
                                        <div key={detail} className="flex items-center gap-4 text-slate-200 font-bold">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> {detail}
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black hover:bg-green-700 transition-all"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Ask on WhatsApp
                                </a>
                            </div>
                            <div className="hidden lg:flex flex-col gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-5">
                                    <Zap className="w-10 h-10 text-amber-400" />
                                    <p className="text-2xl font-black">Help Your Child<br />Take the First Step</p>
                                    <p className="text-slate-400 font-medium leading-relaxed">Our counselors are available Mon–Sat, 8:30 AM–2:30 PM to guide you through the process seamlessly.</p>
                                    <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                                        <a href="tel:+917979001951" className="flex items-center gap-3 text-slate-300 font-bold hover:text-white transition-colors">
                                            <Phone className="w-5 h-5 text-indigo-400" /> +91 7979 001 951
                                        </a>
                                        <div className="flex items-center gap-3 text-slate-300 font-bold">
                                            <MapPin className="w-5 h-5 text-rose-400" /> Ram Krishna Nagar, Patna 800027
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-300 font-bold">
                                            <Clock className="w-5 h-5 text-emerald-400" /> Mon–Sat, 8:30 AM – 2:30 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Ambient Glows */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                            <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]"></div>
                            <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500 rounded-full blur-[150px]"></div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ─── DOCUMENT CHECKLIST + CONTACT ─── */}
            <div className="max-w-7xl mx-auto px-4 mb-24">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">
                            Document <br /><span className="text-indigo-600 underline decoration-amber-400">Checklist</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium mb-10 leading-relaxed max-w-md">
                            Keep these documents ready to avoid delays in the admission finalization process.
                        </p>
                        <div className="space-y-4">
                            {documents.map((item, i) => (
                                <div key={i} className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-slate-700 font-black text-sm">{item.doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-6">
                        {/* WhatsApp Card */}
                        <div className="bg-[#25D366] rounded-[3rem] p-10 text-white shadow-2xl shadow-green-100 relative overflow-hidden group">
                            <div className="relative z-10">
                                <svg className="w-12 h-12 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <h3 className="text-3xl font-black mb-4">WhatsApp Directly</h3>
                                <p className="text-green-100 text-lg mb-8 leading-relaxed">
                                    Have a quick question? Chat with our admissions team right now on WhatsApp for instant support.
                                </p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 bg-white text-green-700 font-black px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-lg"
                                >
                                    Chat Now → +91 7979 001 951
                                </a>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-110 transition-transform"></div>
                        </div>

                        {/* Scholarship Card */}
                        <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <Trophy className="w-10 h-10 text-amber-400 mb-6" />
                                <h3 className="text-3xl font-black mb-4">Gyan Ratna Scholarship</h3>
                                <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                                    Brilliant students entering Class 9 and 11 can apply for our scholarship based on their previous results. Merit-based 100% fee waiver available.
                                </p>
                                <Link to="/publish" className="flex items-center gap-3 font-black text-amber-400 hover:gap-5 transition-all text-sm uppercase tracking-widest">
                                    Check Eligibility <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-900 mb-6">Need Help?</h3>
                            <p className="text-slate-500 font-medium mb-8">Our helpdesk is open Mon–Sat, 8:30AM to 2:30PM.</p>
                            <div className="space-y-4">
                                <a href="tel:+917979001951" className="flex items-center gap-4 text-slate-700 font-black hover:text-indigo-600 transition-colors group">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    +91 7979 001 951
                                </a>
                                <div className="flex items-center gap-4 text-slate-700 font-black">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-rose-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    Ram Krishna Nagar, Patna 800027
                                </div>
                                <div className="flex items-center gap-4 text-slate-700 font-black">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    Mon–Sat, 8:30 AM – 2:30 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── FAQ SECTION ─── */}
            <div className="max-w-4xl mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
                        Frequently Asked <br /><span className="text-indigo-600">Questions</span>
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-7 text-left font-black text-slate-800 hover:text-indigo-600 transition-colors"
                            >
                                <span>{faq.q}</span>
                                {openFaq === i ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                            </button>
                            <AnimatePresence>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-7 pb-7 text-slate-500 font-medium leading-relaxed"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── DIRECTOR MESSAGE CTA ─── */}
            <div className="max-w-4xl mx-auto px-4 py-20 bg-slate-900 rounded-[4rem] text-center text-white relative overflow-hidden">
                <Heart className="w-12 h-12 text-rose-500 mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl font-black mb-6">A Message from the Director</h2>
                <p className="text-slate-400 text-lg font-light italic leading-relaxed mb-10 max-w-2xl mx-auto">
                    "We welcome you to be a part of a community that values character as much as competence.
                    At Gyan Sagar, we don't just enroll a student — we welcome a family."
                </p>
                <p className="text-amber-400 font-black uppercase tracking-widest text-sm mb-10">— Ashlok Kumar, Director</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/publish" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all flex items-center gap-2">
                        Apply for Admission <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black hover:bg-green-700 transition-all flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp Us
                    </a>
                </div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[150px] -ml-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[150px] -mr-32 -mb-32 pointer-events-none" />
            </div>

            {/* ─── FLOATING WHATSAPP BUTTON ─── */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-8 right-8 z-[999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-400/50 hover:scale-110 active:scale-95 transition-all"
                title="Chat on WhatsApp"
            >
                <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </motion.div>
                {/* Ping ring */}
                <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
            </a>
        </div>
    );
};

export default AdmissionGuide;
