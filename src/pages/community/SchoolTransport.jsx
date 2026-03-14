import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bus, MapPin, Clock, ShieldCheck,
    Phone, Users, ArrowRight, Star,
    AlertCircle, CheckCircle2, Navigation, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

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
        <div className="bg-slate-50 min-h-screen font-['Nunito']">
            <PageHero 
                title="Safe &"
                italicTitle="Secured"
                tag="GPS Enabled"
                subtitle="A modern fleet with real-time tracking, ensuring every student's journey is safe, timely, and comfortable."
                bgImage="/3d_school_bus_1773384243028.png"
                accentColor="text-indigo-400"
            />

            {/* Safety Features */}
            <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {[
                        { title: "GPS Tracking", desc: "Real-time tracking for parents via app.", icon: <Navigation className="w-6 h-6 md:w-8 md:h-8 text-indigo-500" /> },
                        { title: "Female Attendants", desc: "Trained attendants on every bus for safety.", icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" /> },
                        { title: "CCTV Cameras", desc: "Monitored regularity by our transport cell.", icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="p-5 md:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                            <div className="shrink-0">{item.icon}</div>
                            <div>
                                <h4 className="text-lg font-extrabold text-slate-900 mb-1">{item.title}</h4>
                                <p className="text-slate-500 text-[11px] md:text-sm font-medium leading-tight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Route Map & Selector */}
            <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
                <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-lg shadow-slate-100">
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                        <div className="lg:w-[30%]">
                            <h2 className="text-2xl md:text-3xl font-black mb-6 text-slate-800">Route <span className="text-indigo-600">Directory</span></h2>
                            <div className="space-y-2">
                                {Object.keys(transportRoutes).map(routeName => (
                                    <button
                                        key={routeName}
                                        onClick={() => setSelectedRoute(routeName)}
                                        className={`w-full p-4 rounded-xl font-bold text-left flex items-center justify-between transition-all text-sm ${selectedRoute === routeName ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                    >
                                        {routeName}
                                        <ArrowRight className={`w-4 h-4 transition-transform ${selectedRoute === routeName ? 'translate-x-1' : ''}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-[70%]">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={selectedRoute}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="bg-slate-50 rounded-2xl p-5 md:p-8 border border-slate-100 h-full"
                                >
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-black text-slate-800 leading-tight mb-2">{transportRoutes[selectedRoute].coverage}</h3>
                                            <p className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5" /> {transportRoutes[selectedRoute].timing}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm shrink-0">
                                            <div className="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                                                <Users className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-1">Driver</p>
                                                <p className="font-extrabold text-[11px] text-slate-700">{transportRoutes[selectedRoute].driver}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-slate-400 font-extrabold text-[9px] uppercase tracking-widest mb-4">Route Stops</p>
                                        <div className="space-y-4">
                                            {transportRoutes[selectedRoute].stops.map((stop, i) => (
                                                <div key={i} className="flex items-center gap-4 group">
                                                    <div className="relative">
                                                        <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full z-10 relative"></div>
                                                        {i !== transportRoutes[selectedRoute].stops.length - 1 && <div className="absolute top-2.5 left-1.5 w-0.5 h-5 bg-indigo-100"></div>}
                                                    </div>
                                                    <span className="text-slate-600 font-bold text-sm md:text-base group-hover:text-indigo-600 transition-colors">{stop}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Helpline Section */}
            <div className="max-w-5xl mx-auto px-4 text-center pb-12">
                <div className="p-6 md:p-8 bg-white rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500">
                        <AlertCircle className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div className="text-left flex-1">
                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Emergency Help</h4>
                        <p className="text-slate-500 text-sm font-medium mb-4">
                            For concerns regarding delays, contact our desk.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="px-5 py-2.5 bg-rose-600 text-white font-bold rounded-lg shadow-md flex items-center justify-center gap-2 text-xs">
                                <Phone className="w-4 h-4" /> +91 79790 01951
                            </button>
                            <button className="px-5 py-2.5 bg-slate-50 text-slate-600 font-bold rounded-lg border border-slate-100 flex items-center justify-center gap-2 text-xs">
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
