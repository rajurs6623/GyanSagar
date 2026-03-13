import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bus, MapPin, Clock, ShieldCheck,
    Phone, Users, ArrowRight, Star,
    AlertCircle, CheckCircle2, Navigation
} from 'lucide-react';

const SchoolTransport = () => {
    const [selectedRoute, setSelectedRoute] = useState('Route 1');

    const transportRoutes = {
        'Route 1': {
            coverage: "Ram Krishna Nagar - Kankarbagh - Rajendra Nagar",
            timing: "6:45 AM - 7:30 AM",
            driver: "Ram Singh",
            phone: "+91 98765 43XXX",
            stops: ["Gandhi Chouraha", "Big Bazaar", "Mithapur Bus Stand", "School Campus"]
        },
        'Route 2': {
            coverage: "Anisabad - Phulwari Sharif - Khagaul",
            timing: "6:30 AM - 7:20 AM",
            driver: "Mohammed Ali",
            phone: "+91 91223 34XXX",
            stops: ["Patliputra Junction", "Jagdeo Path", "Raja Bazar", "School Campus"]
        },
        'Route 3': {
            coverage: "Boring Road - Bailey Road - Danapur",
            timing: "6:50 AM - 7:40 AM",
            driver: "Vikram Kumar",
            phone: "+91 88776 55XXX",
            stops: ["Income Tax Chouraha", "Patna Museum", "Station", "School Campus"]
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito']">
            {/* Premium Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pb-20 px-4 overflow-hidden bg-slate-900 text-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <img 
                        src="/3d_school_bus_1773384243028.png" 
                        alt="Route Map" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md text-indigo-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 shadow-2xl"
                            >
                                <Navigation className="w-4 h-4" /> Safety First • GPS Enabled
                            </motion.div>
                            <h1 className="text-6xl md:text-[6.5rem] font-black text-white mb-8 tracking-tighter leading-none">
                                School <br />
                                <span className="text-indigo-400 italic">Transport</span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Ensuring every student reaches home and school safely with our modern 
                                fleet, professional tracking systems, and dedicated care.
                            </p>
                            
                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                                <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-600/20 hover:scale-105 transition-all">
                                    Explore Routes
                                </button>
                                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all">
                                    Safety Protocols
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="flex-1 relative hidden lg:block"
                        >
                            <div className="relative z-10">
                                <img
                                    src="/3d_school_bus_1773384243028.png"
                                    alt="Modern Transport"
                                    className="w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(79,70,229,0.3)] animate-float"
                                />
                            </div>
                            
                            {/* Floating Stats */}
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20"
                            >
                                <Bus className="w-8 h-8 text-indigo-400 mb-2" />
                                <p className="text-white font-black text-2xl tracking-tighter">GPS</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Tracking</p>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-5 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20"
                            >
                                <ShieldCheck className="w-8 h-8 text-emerald-400 mb-2" />
                                <p className="text-white font-black text-2xl tracking-tighter">100%</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Safe Passage</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </section>

            {/* Safety Features */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "GPS Tracking", desc: "Real-time tracking available for parents via the school app.", icon: <Navigation className="w-10 h-10 text-indigo-500" /> },
                        { title: "Female Attendants", desc: "Every bus is accompanied by a trained female attendant for safety.", icon: <ShieldCheck className="w-10 h-10 text-emerald-500" /> },
                        { title: "CCTV Surveillance", desc: "Inner-bus cameras monitored regularly by our transport cell.", icon: <Star className="w-10 h-10 text-amber-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                            <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                            <h4 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed italic">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Route Map & Selector */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-3xl">
                    <div className="relative z-10 flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-black mb-12 tracking-tighter">Route <span className="text-indigo-400">Directory</span></h2>
                            <div className="space-y-4">
                                {Object.keys(transportRoutes).map(routeName => (
                                    <button
                                        key={routeName}
                                        onClick={() => setSelectedRoute(routeName)}
                                        className={`w-full p-6 rounded-3xl font-black text-left flex items-center justify-between transition-all ${selectedRoute === routeName ? 'bg-indigo-600 text-white shadow-2xl' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                                    >
                                        {routeName}
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={selectedRoute}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-white/10"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
                                        <div>
                                            <h3 className="text-3xl font-black mb-2">{transportRoutes[selectedRoute].coverage}</h3>
                                            <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2"><Clock className="w-4 h-4" /> {transportRoutes[selectedRoute].timing}</p>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                                                <Users className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase">Driver</p>
                                                <p className="font-black text-sm">{transportRoutes[selectedRoute].driver}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-4">Route Stops</p>
                                        {transportRoutes[selectedRoute].stops.map((stop, i) => (
                                            <div key={i} className="flex items-center gap-6 group">
                                                <div className="relative">
                                                    <div className="w-4 h-4 bg-indigo-500 rounded-full z-10 relative"></div>
                                                    {i !== transportRoutes[selectedRoute].stops.length - 1 && <div className="absolute top-4 left-1.5 w-1 h-12 bg-white/10"></div>}
                                                </div>
                                                <span className="text-slate-200 font-bold text-lg group-hover:text-indigo-400 transition-colors">{stop}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] -mr-64 -mt-64"></div>
                </div>
            </div>

            {/* Helpline Section */}
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="p-16 bg-rose-50 rounded-[4rem] border border-rose-100 flex flex-col md:flex-row items-center gap-16 group">
                    <div className="shrink-0 w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-rose-500 animate-pulse">
                        <AlertCircle className="w-12 h-12" />
                    </div>
                    <div className="text-left">
                        <h4 className="text-3xl font-black text-slate-900 mb-4">Emergency Transport Helpline</h4>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">
                            For any immediate concerns regarding bus arrival, delays, or emergencies,
                            please contact our transport desk available from 6:00 AM to 6:00 PM.
                        </p>
                        <div className="flex items-center gap-4">
                            <button className="px-8 py-4 bg-rose-500 text-white font-black rounded-2xl shadow-xl shadow-rose-200 flex items-center gap-3">
                                <Phone className="w-5 h-5" /> +91 91225 55XXX
                            </button>
                            <button className="px-8 py-4 bg-white text-rose-500 font-black rounded-2xl border border-rose-100 flex items-center gap-3">
                                Request Route Change
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolTransport;
