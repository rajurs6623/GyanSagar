import React, { useState } from 'react';
import {
    BookOpen, BookMarked, PenTool, Globe, Award, Sparkles,
    Truck, BarChart3, ShieldCheck, ShoppingCart, Send,
    Layers, Search, CheckCircle2, Star, Quote, ChevronDown,
    Zap, MousePointer2, Heart, Leaf, Microscope, Palette,
    Users, Briefcase, Languages, MapPin, History, Flag,
    Dribbble as Ball, Computer, Library, School, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const OurInfrastructure = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const campusHighlights = [
        {
            icon: <Microscope className="w-8 h-8 text-blue-500" />,
            title: "Advanced Science Labs",
            description: "Dedicated Physics, Chemistry, and Biology labs equipped with the latest instruments for hands-on practical learning."
        },
        {
            icon: <Computer className="w-8 h-8 text-purple-500" />,
            title: "Digital Computer Hub",
            description: "Modern computer labs with high-speed internet and latest software to ensure our students stay ahead in the digital age."
        },
        {
            icon: <Library className="w-8 h-8 text-amber-500" />,
            title: "Smart Classrooms",
            description: "Multimedia-enabled classrooms with interactive boards to make learning a visually engaging and fun experience."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
            title: "Safe & Secure Campus",
            description: "24/7 CCTV surveillance and trained security personnel ensuring a safe environment for every student."
        },
        {
            icon: <Truck className="w-8 h-8 text-rose-500" />,
            title: "Safe Transport",
            description: "A fleet of well-maintained school buses covering all major routes across Patna with GPS tracking."
        }
    ];

    const sportsFacilities = [
        { name: "Cricket Ground", reach: "Full Size", icon: <Ball className="w-6 h-6" /> },
        { name: "Basketball Court", reach: "Professional", icon: <Ball className="w-6 h-6" /> },
        { name: "Indoor Sports Room", reach: "Table Tennis, Chess", icon: <Sparkles className="w-6 h-6" /> },
        { name: "Play Area", reach: "Primary Classes", icon: <Heart className="w-6 h-6" /> }
    ];

    const stats = [
        { label: "Modern Classrooms", value: "40+", desc: "Spacious and well-ventilated." },
        { label: "Library Books", value: "10,000+", desc: "Covering all academic topics." },
        { label: "Laboratories", value: "5+", desc: "Equipped for practicals." },
        { label: "School Buses", value: "15+", desc: "Safe city-wide transport." }
    ];

    const campusSections = [
        { name: "Pre-Primary Classes", icon: <School className="w-6 h-6" />, color: "bg-indigo-100 text-indigo-600" },
        { name: "Primary Block", icon: <BookOpen className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
        { name: "Middle Section", icon: <Globe className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
        { name: "Secondary block", icon: <Award className="w-6 h-6" />, color: "bg-rose-100 text-rose-600" },
        { name: "Sr. Secondary Lab", icon: <Microscope className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
        { name: "Admin Office", icon: <Briefcase className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" }
    ];

    const faqs = [
        { q: "What is the transport coverage area?", a: "Our school buses cover almost all major residential areas in Patna, including Ram Krishna Nagar, Kankarbagh, and more." },
        { q: "Are the labs safe for junior students?", a: "Yes, junior students use the labs under strict supervision of specialized teachers and lab assistants with all safety protocols in place." },
        { q: "Is there a first-aid facility on campus?", a: "Absolutely. We have a dedicated medical room with a trained nurse and first-aid kits available 24/7 during school hours." },
        { q: "What sports options are available?", a: "We offer professional coaching in Cricket, Football, Basketball, Table Tennis, and various athletics." }
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-['Plus Jakarta Sans']">
            <PageHero
                title="Modern"
                italicTitle="Spaces"
                tag="High-Tech Campus"
                subtitle="Inspiring facilities designed for safety, creativity, and holistic student growth."
                bgImage="/GyanSagar/StudentPatna.jpg"
                accentColor="text-blue-400"
            />

            {/* Infrastructure Stats */}
            <div className="max-w-7xl mx-auto px-4 mt-16 md:mt-24 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-lg border border-slate-100 text-center transform hover:-translate-y-1 transition-all">
                            <p className="text-slate-400 font-bold uppercase text-[7px] md:text-[9px] tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-xl md:text-3xl font-extrabold text-slate-800 mb-0.5">{stat.value}</h3>
                            <p className="text-slate-500 text-[9px] md:text-[11px] font-medium leading-tight">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Campus Sections */}
            <div className="bg-white py-12 md:py-16 border-y border-slate-100 my-12 md:my-16">
                <div className="max-w-7xl mx-auto px-4 text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2">Explore Our <span className="text-blue-600">Campus Sections</span></h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">Every section tailors to specific developmental needs.</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {campusSections.map((wing, idx) => (
                        <div key={idx} className="bg-slate-50 p-3 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all group">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${wing.color} flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-105 transition-transform`}>
                                {React.cloneElement(wing.icon, { className: "w-4 h-4 md:w-5 md:h-5" })}
                            </div>
                            <h4 className="font-bold text-slate-800 text-[10px] md:text-xs">{wing.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Facilities Highlight */}
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">Advanced <br /><span className="text-blue-600">Learning Spaces</span></h2>
                        <div className="w-16 h-2 bg-blue-600 rounded-full mb-6"></div>
                        <div className="space-y-4 text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                            <p>
                                Gyan Sagar Public School invests in creating the right atmosphere. Our library is stocked with over 10,000 titles, and our science labs are updated annually.
                            </p>
                        </div>

                        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div className="flex items-center gap-3 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-sm border border-slate-100 group">
                                <Library className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />
                                <div>
                                    <p className="font-bold text-slate-700 text-xs md:text-sm">Central Library</p>
                                    <p className="text-[9px] md:text-[10px] text-slate-400">10k+ Books</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-sm border border-slate-100 group">
                                <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
                                <div>
                                    <p className="font-bold text-slate-700 text-xs md:text-sm">Awards Hall</p>
                                    <p className="text-[9px] md:text-[10px] text-slate-400">School Victories</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] shadow-xl relative overflow-hidden">
                            <img
                                src="/GyanSagar/Student.jpg"
                                alt="Labs"
                                className="w-full rounded-[1rem] md:rounded-[1.5rem]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex items-center justify-between">
                                <div className="text-white">
                                    <p className="font-extrabold text-xl md:text-2xl leading-tight">MODERN</p>
                                    <p className="font-medium tracking-widest text-[9px] md:text-xs">LABORATORIES</p>
                                </div>
                                <Microscope className="w-6 h-6 md:w-8 md:h-8 text-blue-300 animate-spin-slow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Campus Highlights */}
            <div className="bg-slate-50 py-16 md:py-20 border-y border-slate-200 my-16 md:my-20">
                <div className="max-w-7xl mx-auto px-4 text-center mb-10 md:mb-12">
                    <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Our Facilities</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">Campus Highlights</h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                    {campusHighlights.map((step, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg shadow-inner flex items-center justify-center mx-auto mb-4 text-blue-600">
                                {React.cloneElement(step.icon, { className: "w-5 h-5" })}
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm mb-2">{step.title}</h4>
                            <p className="text-slate-500 text-[11px] leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Transport Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="bg-[#0F172A] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-10"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Secure <br /><span className="text-blue-400">School Transport</span></h2>
                            <p className="text-xl text-slate-400 font-light mb-12 leading-relaxed">
                                Our school provides a safe and reliable transport system for students across Patna. Every bus is equipped with GPS and monitored by trained staff.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {sportsFacilities.map((facility, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                                        <div className="p-3 bg-white/10 rounded-xl inline-block mb-4 text-blue-400">
                                            {facility.icon}
                                        </div>
                                        <h4 className="font-bold text-xl mb-1">{facility.name}</h4>
                                        <p className="text-slate-500 text-sm uppercase tracking-widest">{facility.reach}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-12 rounded-[2.5rem] shadow-2xl relative group h-[450px] flex flex-col justify-between overflow-hidden">
                                <Truck className="absolute top-10 right-10 w-24 h-24 text-white/20 group-hover:-translate-y-4 group-hover:translate-x-4 transition-transform duration-700" />
                                <div>
                                    <Quote className="w-12 h-12 text-white/30 mb-6" />
                                    <p className="text-2xl font-light italic leading-relaxed text-white">
                                        "The transport service is excellent. I never have to worry about my kids' safety as the bus staff is very responsible and the tracking gives me peace of mind."
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">R</div>
                                    <div>
                                        <p className="font-bold text-white">Rajesh Kumar</p>
                                        <p className="text-white/60 text-sm">School Parent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4 py-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Infrastructure FAQ</h2>
                    <p className="text-slate-500 font-light">Common questions about our campus and facilities.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-800 text-lg">{faq.q}</span>
                                <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                            </button>
                            {activeFaq === i && (
                                <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-white rounded-[3rem] p-16 text-center shadow-2xl border border-slate-100 group relative overflow-hidden">
                    <School className="w-20 h-20 text-blue-600 mx-auto mb-8 drop-shadow-xl" />
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">Experience It Personally</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        We invite you to take a physical tour of our campus. See our classrooms, labs, and sports fields to understand why we are the preferred choice for parents in Patna.
                    </p>
                    <button className="bg-[#0F172A] hover:bg-blue-600 text-white font-extrabold py-5 px-14 rounded-full shadow-2xl transition-all duration-500 text-xl tracking-wide group flex items-center gap-3 mx-auto">
                        Book a Campus Tour
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Inline Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin 12s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}} />
        </div>
    );
};

export default OurInfrastructure;

