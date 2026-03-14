import React from 'react';
import { motion } from 'framer-motion';
import {
    Users, Globe, Heart, Star,
    ArrowRight, MessageCircle, Trophy,
    ShieldCheck, GraduationCap, MapPin, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const AlumniNetwork = () => {
    const successStories = [
        {
            name: "Dr. Sameer Ranjan",
            batch: "Class of 2005",
            role: "Senior Surgeon, AIIMS",
            img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=300",
            desc: "The foundational values I learned at Gyan Sagar helped me navigate the toughest challenges in my medical career."
        },
        {
            name: "Ananya Misra",
            batch: "Class of 2012",
            role: "Product Manager, Google",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
            desc: "The debate club and school leadership roles prepared me for the corporate world in ways I never imagined."
        },
        {
            name: "Capt. Vivek Sinha",
            batch: "Class of 2008",
            role: "Indian Army",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
            desc: "Discipline and integrity are not just words here; they are a way of life that Gyan Sagar instills in you."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito']">
            <PageHero
                title="Global"
                italicTitle="Alumni Network"
                tag="Our Legacy"
                subtitle="Over 5,000 graduates across continents, carrying the spirit of Gyan Sagar into the world's leading spaces."
                bgImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1600"
                accentColor="text-indigo-400"
            />

            <div className="max-w-7xl mx-auto px-4 mb-32 mt-12 md:mt-16">
                <div className="bg-white rounded-[4rem] p-12 border border-slate-100 shadow-3xl flex flex-wrap justify-center gap-12 relative z-20">
                    <div className="text-center px-8 border-r border-slate-100 last:border-0">
                        <p className="text-5xl font-black text-slate-900 mb-1 leading-none">5000+</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Past Students</p>
                    </div>
                    <div className="text-center px-8 border-r border-slate-100 last:border-0">
                        <p className="text-5xl font-black text-slate-900 mb-1 leading-none">20+</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Countries</p>
                    </div>
                    <div className="text-center px-8 border-r border-slate-100 last:border-0">
                        <p className="text-5xl font-black text-slate-900 mb-1 leading-none">100+</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Top Universities</p>
                    </div>
                </div>
            </div>

            {/* Success Stories Slider (Static Grid) */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <h2 className="text-3xl font-black text-slate-900 mb-12 tracking-tighter border-l-8 border-indigo-600 pl-6">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {successStories.map((story, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[3.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 group"
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-slate-50 group-hover:border-indigo-600 transition-all p-1">
                                <img src={story.img} className="w-full h-full object-cover rounded-full" alt={story.name} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-1">{story.name}</h3>
                            <p className="text-indigo-600 font-extrabold text-[10px] uppercase tracking-widest mb-6">{story.batch} • {story.role}</p>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed italic border-t border-slate-50 pt-6">
                                "{story.desc}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Alumni Network Banner */}
            <div className="max-w-7xl mx-auto px-4 mb-32">
                <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
                    <div className="lg:w-1/2 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Stay <span className="text-indigo-600 italic">Connected</span></h2>
                        <p className="text-slate-500 text-xl font-medium mb-10 leading-relaxed">
                            Our Alumni Association 'Sagar Sangam' is a platform to mentor juniors,
                            organize reunions, and contribute back to the school community.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl flex items-center gap-3">Register Now <ArrowRight className="w-4 h-4" /></button>
                            <button className="px-10 py-4 bg-slate-50 text-slate-600 font-black rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all">Sagar Sangam Portal</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-40 bg-indigo-50 rounded-3xl flex flex-col items-center justify-center text-indigo-600">
                                    <GraduationCap className="w-8 h-8 mb-2" />
                                    <span className="font-black text-[10px] uppercase tracking-widest">Reunions</span>
                                </div>
                                <div className="h-40 bg-slate-900 rounded-3xl flex flex-col items-center justify-center text-white">
                                    <Star className="w-8 h-8 mb-2" />
                                    <span className="font-black text-[10px] uppercase tracking-widest">Mentorship</span>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="h-40 bg-emerald-50 rounded-3xl flex flex-col items-center justify-center text-emerald-600">
                                    <MapPin className="w-8 h-8 mb-2" />
                                    <span className="font-black text-[10px] uppercase tracking-widest">Global Meet</span>
                                </div>
                                <div className="h-40 bg-rose-50 rounded-3xl flex flex-col items-center justify-center text-rose-600">
                                    <Heart className="w-8 h-8 mb-2" />
                                    <span className="font-black text-[10px] uppercase tracking-widest">Welfare</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BG Art */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-[100px] opacity-30 -mr-32 -mb-32"></div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl">
                    <MessageCircle className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">Proud of your Achievement?</h2>
                <p className="text-slate-500 text-lg font-medium mb-12">
                    We love hearing from our alumni. Share your story with us and inspire
                    the next generation of Gyan Sagar students.
                </p>
                <a href="mailto:alumni@gyansagar.edu.in" className="text-lg font-black text-indigo-600 underline underline-offset-[12px] decoration-indigo-200 decoration-8 hover:decoration-indigo-600 transition-all">alumni@gyansagar.edu.in</a>
            </div>
        </div>
    );
};

export default AlumniNetwork;
