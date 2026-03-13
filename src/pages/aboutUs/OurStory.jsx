import React, { useState } from 'react';
import {
    History, Lightbulb, Users, Trophy, ChevronRight, GraduationCap,
    Star, Heart, PenTool, Quote, Globe, Zap, MapPin,
    Code, Palette, MessageSquare, Library, BookOpen, Truck, UserCircle
} from 'lucide-react';

const OurStory = () => {
    const milestones = [
        {
            year: "1998",
            title: "The Foundation",
            description: "Gyan Sagar Public School was founded in Ram Krishna Nagar, Patna, with a vision to provide quality education to the common man's children.",
            icon: <MapPin className="w-8 h-8 text-white" />
        },
        {
            year: "2005",
            title: "Academic Milestone",
            description: "Achieved recognition for our rigorous academic standards and expanded our campus to include dedicated primary and middle blocks.",
            icon: <Library className="w-8 h-8 text-white" />
        },
        {
            year: "2012",
            title: "Scientific Excellence",
            description: "Inaugurated our state-of-the-art Science and Computer laboratories, marking a new era of practical learning for our 10th and +2 students.",
            icon: <Zap className="w-8 h-8 text-white" />
        },
        {
            year: "2018",
            title: "Digital Transformation",
            description: "Introduced interactive smart classrooms and digital learning modules to integrate modern technology into traditional teaching methods.",
            icon: <Code className="w-8 h-8 text-white" />
        },
        {
            year: "2023",
            title: "Landmark Results",
            description: "Celebrated 25 years of educational excellence with 100% first-division results in CBSE board examinations.",
            icon: <Star className="w-8 h-8 text-white" />
        },
        {
            year: "Future",
            title: "Vision 2030",
            description: "Aimed at becoming a global center for educational research and student-led innovation in the heart of Bihar.",
            icon: <Globe className="w-8 h-8 text-white" />
        }
    ];

    const educationValues = [
        {
            title: "Holistic Growth",
            description: "We focus not just on textbook knowledge, but on the emotional, physical, and ethical development of every student under our care."
        },
        {
            title: "Individual Attention",
            description: "With a balanced student-teacher ratio, we ensure that no child's question goes unanswered and no potential goes unnoticed."
        },
        {
            title: "Cultural Values",
            description: "Rooted in our rich heritage, we instill respect, integrity, and social responsibility as the core pillars of our students' character."
        }
    ];

    const leadership = [
        { name: "Ashlok Kumar", role: "Director & Visionary", icon: <UserCircle className="w-8 h-8 text-white" />, color: "from-indigo-600 to-blue-500", desc: "A seasoned educator dedicated to bringing modern pedagogical standards to the students of Patna." },
        { name: "P.K. Sharma", role: "Principal", icon: <GraduationCap className="w-8 h-8 text-white" />, color: "from-indigo-500 to-purple-500", desc: "Expert in academic administration with 20+ years of experience in fostering student success." },
        { name: "S. Kumari", role: "Head of Academics", icon: <BookOpen className="w-8 h-8 text-white" />, color: "from-amber-400 to-orange-500", desc: "Oversees curriculum design and ensures our teaching methods stay at the forefront of educational trends." },
        { name: "R. Singh", role: "Physical Education Head", icon: <Trophy className="w-8 h-8 text-white" />, color: "from-emerald-400 to-teal-500", desc: "Passionate about sports and fitness, driving our students to excel in national-level athletic competitions." }
    ];

    const successStats = [
        { year: "2020", label: "Best School Award", icon: <Trophy className="w-6 h-6 text-amber-500" /> },
        { year: "2022", label: "State Topper Hub", icon: <Star className="w-6 h-6 text-indigo-500" /> },
        { year: "2024", label: "Excellence in Innovation", icon: <Zap className="w-6 h-6 text-rose-500" /> }
    ];

    const campusFacilities = [
        { title: "Smart Classrooms", desc: "Equipped with interactive boards for visual learning.", icon: <Palette className="w-10 h-10" /> },
        { title: "Central Library", desc: "Over 10,000+ books covering all academic genres.", icon: <Library className="w-10 h-10" /> },
        { title: "Transport Facility", desc: "Safe and secure bus service across Patna city.", icon: <Truck className="w-10 h-10" /> }
    ];

    const departmentData = [
        { state: "Science Labs", schools: "12+ Labs", students: "500+", focus: "Practical experiments and research-based projects for Senior Secondary students." },
        { state: "Arts & Culture", schools: "5 Clubs", students: "300+", focus: "Promoting music, dance, and fine arts to nurture creative expression." },
        { state: "Sports Academy", schools: "4 Fields", students: "450+", focus: "Professional coaching in Cricket, Football, and Basketball." },
        { state: "IIT/Medical Prep", schools: "Special Batches", students: "200+", focus: "Integrated coaching for entrance exams within school hours." }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="pt-0 pb-20 bg-[#F8FAFC] min-h-screen font-['Nunito']">

            {/* Hero Banner Section */}
            <div className="relative w-full bg-[#0F172A] py-36 px-4 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/GyanSagar/StudentPatna.jpg"
                        alt="Our Story Banner"
                        className="w-full h-full object-cover opacity-60 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
                    <div className="inline-flex items-center gap-2 mb-8 border border-indigo-500/30 bg-indigo-500/10 px-6 py-2 rounded-full backdrop-blur-md">
                        <GraduationCap className="w-5 h-5 text-indigo-400" />
                        <p className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Est. 1998</p>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
                        A Legacy of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-500">Knowledge</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
                        At Gyan Sagar Public School, we believe every child is a potential leader. Our mission is to nurture that potential through discipline, dedication, and world-class education.
                    </p>
                </div>
            </div>

            {/* The Founding Vision */}
            <div className="max-w-7xl mx-auto px-4 py-28">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center gap-2 mb-4 text-indigo-600 font-bold uppercase tracking-widest text-sm">
                            <Quote className="w-5 h-5" />
                            Our Vision
                        </div>
                        <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">The Seed of <br /><span className="text-indigo-500">Excellence</span></h2>
                        <div className="w-20 h-3 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                What started in a small building in Ram Krishna Nagar has today blossomed into one of Patna's most respected educational institutions.
                            </p>
                            <p>
                                Founded by Shri Ashlok Kumar and a group of dedicated educators, the school was born from a simple yet powerful dream: <strong>"To create a school that treats every child like its own, providing them with the tools to build their own future."</strong>
                            </p>
                            <p>
                                Over the past 25 years, we have evolved from a primary school to a full-fledged Senior Secondary institution, but our core value remains the same—Empowering students through education.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-blue-400 rounded-[3rem] blur-3xl opacity-30"></div>
                        <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100 transform hover:scale-105 transition-transform duration-700">
                            <img
                                src="/GyanSagar/Student.jpg"
                                alt="Founder's Vision"
                                className="w-full h-[504px] rounded-[2.5rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Academic Impact */}
            <div className="bg-white py-24 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 w-full relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-rose-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-slate-100 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1577891729319-f4871c6ec217?auto=format&fit=crop&q=80&w=800"
                                alt="Academic Success"
                                className="w-full h-[504px] rounded-2xl object-cover"
                            />
                            <div className="absolute -bottom-10 -right-4 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:flex items-center gap-4 animate-bounce-slow text-left">
                                <div className="p-4 bg-amber-100 rounded-2xl">
                                    <Trophy className="w-10 h-10 text-amber-600" />
                                </div>
                                <div>
                                    <p className="font-black text-slate-800 text-4xl">5,000+</p>
                                    <p className="text-slate-500 font-medium text-lg">Successful Alumni</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center gap-2 mb-4 text-rose-500 font-bold uppercase tracking-widest text-sm">
                            <Trophy className="w-5 h-5" />
                            Academic Excellence
                        </div>
                        <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">Nurturing <br /><span className="text-rose-500">Brilliance</span></h2>
                        <div className="w-24 h-3 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                Our results speak louder than words. Year after year, Gyan Sagar Public School students have secure top ranks in board examinations and competitive exams like NTSE and Olympiads.
                            </p>
                            <p>
                                Beyond grades, we pride ourselves on the discipline and character our students exhibit in society. Our alumni are currently serving as Doctors, Engineers, Leaders, and Entrepreneurs across the globe.
                            </p>
                        </div>
                        <div className="mt-10 p-8 bg-rose-50 shadow-inner rounded-3xl border border-rose-100 relative overflow-hidden">
                            <Star className="w-12 h-12 text-rose-500 mb-4 opacity-50 absolute top-4 right-4" />
                            <p className="text-2xl font-bold text-slate-800 italic relative z-10">
                                "Our mission is to educate the heart as much as the mind. A scholar without character is like a book without pages."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Timeline */}
            <div className="bg-slate-900 py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-white text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">The Journey of 25 Years</h2>
                        <div className="w-32 h-3 bg-indigo-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                            Tracing our steps from a local initiative to a premier educational hub in Patna.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-slate-800 rounded-[2.5rem] p-10 h-full border border-slate-700 hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                                        {milestone.icon}
                                    </div>
                                    <h3 className="text-5xl font-black text-slate-700 mb-4">{milestone.year}</h3>
                                    <h4 className="text-2xl font-bold text-white mb-4">{milestone.title}</h4>
                                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leadership Team */}
            <div className="bg-white py-28">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Guiding Lights</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">School Leadership</h2>
                        <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[450px]">
                        {leadership.map((member, idx) => (
                            <div
                                key={idx}
                                className={`relative flex-1 rounded-[2rem] overflow-hidden group hover:flex-[2.5] transition-all duration-700 ease-in-out cursor-pointer bg-slate-50 border border-slate-100 shadow-sm`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800 group-hover:bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10">
                                        {member.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-800 group-hover:text-white transition-colors duration-500">{member.name}</h3>
                                    <p className="text-indigo-600 group-hover:text-white/80 font-bold mb-4 transition-colors duration-500 uppercase tracking-widest text-xs">{member.role}</p>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                                        <div className="overflow-hidden">
                                            <p className="text-white font-light text-lg leading-relaxed pt-2 border-t border-white/20">
                                                {member.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Academic Wings Info */}
            <div className="bg-slate-50 py-28">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Curriculum</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">Academic Classes</h2>
                        <div className="w-20 h-2 bg-indigo-500 rounded-full mb-8"></div>
                        <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                            We offer specialized education across different levels, ensuring age-appropriate learning and maximum engagement.
                        </p>
                    </div>

                    <div className="lg:w-2/3 flex flex-col gap-4">
                        {departmentData.map((data, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-500 overflow-hidden ${activeTab === idx
                                    ? 'bg-white border-indigo-500 shadow-xl scale-105 z-10'
                                    : 'bg-white/50 border-slate-200 hover:border-indigo-200'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl ${activeTab === idx ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                                            <Star className="w-6 h-6" />
                                        </div>
                                        <h3 className={`text-2xl font-bold ${activeTab === idx ? 'text-indigo-600' : 'text-slate-700'}`}>
                                            {data.state}
                                        </h3>
                                    </div>
                                    <ChevronRight className={`w-6 h-6 transition-transform ${activeTab === idx ? 'rotate-90 text-indigo-500' : 'text-slate-400'}`} />
                                </div>

                                <div className={`grid transition-all duration-500 ${activeTab === idx ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-6 mb-4">
                                            <div>
                                                <p className="text-slate-400 font-medium uppercase text-xs mb-1">Facilities</p>
                                                <p className="text-2xl font-black text-slate-800">{data.schools}</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 font-medium uppercase text-xs mb-1">Students Enrolled</p>
                                                <p className="text-2xl font-black text-slate-800">{data.students}</p>
                                            </div>
                                        </div>
                                        <p className="p-4 bg-indigo-50 rounded-2xl text-indigo-800 italic">{data.focus}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Call to Action */}
            <div className="bg-slate-900 py-32 text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Be a Part of Our <br />Educational Family</h2>
                    <p className="text-2xl text-slate-400 mb-12 font-light">Admissions for the upcoming academic year are now open. Visit our campus to learn more.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 px-12 rounded-2xl shadow-2xl transition-all text-xl">
                            Apply Online
                        </button>
                        <button className="bg-slate-800 hover:bg-slate-700 text-white font-black py-5 px-12 rounded-2xl transition-all text-xl">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurStory;
