import React from 'react';
import { motion } from 'framer-motion';
import {
    Users, GraduationCap, Award, BookOpen,
    Heart, Star, ShieldCheck, Zap,
    Facebook, Twitter, Linkedin, Instagram,
    CheckCircle2, Sparkles, MessageSquare
} from 'lucide-react';

const OurFaculty = () => {
    const leadership = [
        {
            name: "Ashlok Kumar",
            role: "Director & Founder",
            image: "/GyanSagar/Shloak Sir.jpg",
            bio: "A visionary educator with over 30 years of experience, dedicated to providing high-quality education to children in Bihar.",
            expertise: ["Educational Strategy", "Leadership", "Community Building"],
            color: "indigo"
        },
        {
            name: "P.K. Sharma",
            role: "Principal",
            image: "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=400",
            bio: "Expert in academic administration and student psychology, ensuring a balanced growth environment for all students.",
            expertise: ["Curriculum Design", "Student Mentorship", "Admin"],
            color: "amber"
        }
    ];

    const facultyGroups = [
        {
            title: "Senior Secondary Faculty (Class 11-12)",
            teachers: [
                { name: "Dr. R.K. Mishra", subject: "Physics", exp: "15+ Years", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=300" },
                { name: "Mrs. S. Kumari", subject: "Mathematics", exp: "12+ Years", image: "https://images.unsplash.com/photo-1580894732230-28dc8e140301?auto=format&fit=crop&q=80&w=300" },
                { name: "Prof. V. Singh", subject: "Chemistry", exp: "18+ Years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
                { name: "Ms. Anjali Jha", subject: "Biology", exp: "10+ Years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" }
            ]
        },
        {
            title: "Secondary Faculty (Class 6-10)",
            teachers: [
                { name: "Mr. Ajay Varma", subject: "Computer Science", exp: "14+ Years", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300" },
                { name: "Mrs. Neelam Rai", subject: "English Lit.", exp: "20+ Years", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" },
                { name: "Mr. Somesh Roy", subject: "Science & EVS", exp: "11+ Years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
                { name: "Ms. Kavita Das", subject: "Social Studies", exp: "9+ Years", image: "https://images.unsplash.com/photo-1544717305-27a734ef1904?auto=format&fit=crop&q=80&w=300" }
            ]
        },
        {
            title: "Primary & Foundation Faculty",
            teachers: [
                { name: "Mrs. Priya Sharma", subject: "Mathematics", exp: "8+ Years", image: "https://images.unsplash.com/photo-1484863137850-59afccd0759e?auto=format&fit=crop&q=80&w=300" },
                { name: "Ms. Shweta Roy", subject: "Hindi & Sanskrit", exp: "13+ Years", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" },
                { name: "Mr. Rahul Verma", subject: "Environmental Studies", exp: "6+ Years", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300" },
                { name: "Mrs. Meena Jha", subject: "Moral Science", exp: "15+ Years", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bb8c?auto=format&fit=crop&q=80&w=300" }
            ]
        },
        {
            title: "Activity & Co-Curricular Mentors",
            teachers: [
                { name: "Mr. Vikram Singh", subject: "Sports Captain", exp: "10+ Years", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" },
                { name: "Ms. Pooja Rai", subject: "Music & Dance", exp: "7+ Years", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" },
                { name: "Mr. Sameer Alam", subject: "Fine Arts", exp: "9+ Years", image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=80&w=300" },
                { name: "Mrs. Sunita Devi", subject: "Yoga & Wellness", exp: "12+ Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300" }
            ]
        }
    ];

    const stats = [
        { icon: <GraduationCap className="w-6 h-6" />, label: "Faculty Members", value: "85+" },
        { icon: <CheckCircle2 className="w-6 h-6" />, label: "PhD Qualified", value: "12" },
        { icon: <Users className="w-6 h-6" />, label: "Student Ratio", value: "25:1" },
        { icon: <Star className="w-6 h-6" />, label: "Avg Experience", value: "10y" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-['Nunito']">
            {/* Premium Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pb-20 px-4 overflow-hidden bg-slate-900">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/GyanSagar/StudentPatna.jpg"
                        alt="Faculty Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

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
                                <Sparkles className="w-4 h-4" /> Our Pillars of Strength
                            </motion.div>
                            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                                Faculty & <br />
                                <span className="text-indigo-500 italic">Leadership</span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Meet the dedicated professionals at Gyan Sagar Public School who are
                                shaping the future of our students with passion, discipline and expertise.
                            </p>
                            
                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                                <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-600/30 hover:scale-105 transition-all">
                                    Meet the Team
                                </button>
                                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all">
                                    Our Pedagogy
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="flex-1 relative hidden lg:block"
                        >
                            <div className="relative z-10">
                                <img
                                    src="/3d_grad_cap_1773384173222.png"
                                    alt="Academic Excellence"
                                    className="w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(79,70,229,0.3)] animate-float"
                                />
                            </div>
                            
                            {/* Decorative Cards */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20"
                            >
                                <Users className="w-8 h-8 text-indigo-400 mb-2" />
                                <p className="text-white font-black text-2xl tracking-tighter">85+</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Educators</p>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20"
                            >
                                <Award className="w-8 h-8 text-amber-400 mb-2" />
                                <p className="text-white font-black text-2xl tracking-tighter">100%</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Dedication</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </section>

            {/* Leadership Spotlight */}
            <section className="max-w-7xl mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {leadership.map((leader, idx) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[4rem] p-12 md:p-16 shadow-2xl shadow-indigo-100/50 border border-slate-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-bl-[10rem] group-hover:bg-indigo-600 transition-colors duration-700 pointer-events-none -z-0"></div>

                            <div className="relative z-10 flex flex-col items-center md:items-start md:flex-row gap-10">
                                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:scale-105 transition-transform">
                                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{leader.name}</h3>
                                    <p className="text-indigo-600 font-black uppercase tracking-widest text-sm mb-6 pb-2 border-b-2 border-indigo-100 inline-block">{leader.role}</p>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                        {leader.bio}
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                        {leader.expertise.map(exp => (
                                            <span key={exp} className="px-5 py-2 bg-slate-50 text-slate-600 rounded-full text-xs font-black shadow-sm border border-slate-100">
                                                {exp}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats Bar */}
            <section className="max-w-7xl mx-auto px-4 mb-32">
                <div className="bg-slate-900 rounded-[3rem] p-12 flex flex-wrap justify-center gap-12 md:gap-24">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="bg-white/10 p-4 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-indigo-600 transition-all flex justify-center text-white">
                                {stat.icon}
                            </div>
                            <h4 className="text-4xl font-black text-white mb-1 tracking-tighter">{stat.value}</h4>
                            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Faculty Departments */}
            {facultyGroups.map((group, groupIdx) => (
                <section key={groupIdx} className="max-w-7xl mx-auto px-4 mb-24 last:mb-0">
                    <div className="flex items-center gap-6 mb-12">
                        <div className="h-px bg-slate-200 flex-1"></div>
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">{group.title}</h2>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {group.teachers.map((teacher, memberIdx) => (
                            <motion.div
                                key={memberIdx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: memberIdx * 0.1 }}
                                className="bg-white rounded-[3rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:scale-[1.03] transition-all group"
                            >
                                <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-6 relative">
                                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-xl cursor-pointer hover:bg-indigo-600 hover:text-white transition-colors">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-xl cursor-pointer hover:bg-indigo-600 hover:text-white transition-colors">
                                            <Star className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-none">{teacher.name}</h3>
                                    <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-4">{teacher.subject}</p>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                                        {teacher.exp} Exp
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            ))}

            {/* Professional CTA */}
            <section className="max-w-7xl mx-auto px-4 mt-32">
                <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-4 border border-white/20 rounded-[3rem] pointer-events-none"></div>
                    <div className="relative z-10">
                        <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-8 drop-shadow-2xl" />
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter italic">Join Our <br />Academic Team?</h2>
                        <p className="text-indigo-100 text-xl font-medium max-w-2xl mx-auto mb-12">
                            We are always looking for passionate educators who want to make a real
                            difference in the lives of young learners.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-12 py-5 bg-white text-indigo-600 font-black rounded-2xl shadow-2xl hover:scale-105 transition-all">Careers Portal</button>
                            <button className="px-12 py-5 bg-indigo-950 text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-all border border-white/10">Staff Handbook</button>
                        </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-[3s]"></div>
                </div>
            </section>
        </div>
    );
};

export default OurFaculty;
