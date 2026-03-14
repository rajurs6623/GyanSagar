import React, { useState } from 'react';
import {
    History, Lightbulb, Users, Trophy, ChevronRight, GraduationCap,
    Star, Heart, PenTool, Quote, Globe, Zap, MapPin,
    Code, Palette, MessageSquare, Library, BookOpen, Truck, UserCircle, Brain
} from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const OurStory = () => {
    const milestones = [
        {
            year: "1998",
            title: "How It All Started",
            description: "Gyan Sagar Public School was started in Ram Krishna Nagar, Patna. The dream was simple — to give every child a good education, no matter where they come from.",
            icon: <MapPin className="w-8 h-8 text-white" />
        },
        {
            year: "2005",
            title: "Growing Schools",
            description: "We became known for teaching very well. We also built new buildings for our younger and middle school students.",
            icon: <Library className="w-8 h-8 text-white" />
        },
        {
            year: "2012",
            title: "Science Gets Better!",
            description: "We opened our new Science labs and Computer rooms. Now students could learn by doing real experiments — not just reading from books!",
            icon: <Zap className="w-8 h-8 text-white" />
        },
        {
            year: "2018",
            title: "Smart Classes Begin",
            description: "We started using smart boards and computer tools in classrooms. Learning became more fun, colorful, and easy for every student.",
            icon: <Code className="w-8 h-8 text-white" />
        },
        {
            year: "2023",
            title: "Amazing Results!",
            description: "We celebrated 25 years of great education! All our 12th grade students passed with first division — every single one of them!",
            icon: <Star className="w-8 h-8 text-white" />
        },
        {
            year: "Future",
            title: "Our Big Goal for 2030",
            description: "We want to become a top learning center in Bihar, where students create new ideas and lead the way into the future!",
            icon: <Globe className="w-8 h-8 text-white" />
        }
    ];

    const educationValues = [
        {
            title: "All-Round Growth",
            description: "We don't just teach from books. We also care about how students feel, how fit they are, and how they treat others."
        },
        {
            title: "Attention to Every Child",
            description: "Our teachers have small classes so every child's questions get answered and no student is left behind."
        },
        {
            title: "Good Values & Culture",
            description: "We teach students to respect others, be honest, and help their community. These values stay with them for life."
        }
    ];

    const leadership = [
        { name: "Ashlok Kumar", role: "Director & Founder", icon: <UserCircle className="w-8 h-8 text-white" />, color: "from-indigo-600 to-blue-500", desc: "A great teacher who started this school to give every child in Patna the best education possible." },
        { name: "P.K. Sharma", role: "Principal", icon: <GraduationCap className="w-8 h-8 text-white" />, color: "from-indigo-500 to-purple-500", desc: "Has more than 20 years of experience running the school and helping every student do well." },
        { name: "S. Kumari", role: "Head of Academics", icon: <BookOpen className="w-8 h-8 text-white" />, color: "from-amber-400 to-orange-500", desc: "Makes sure our subjects are taught in the best way possible and that students enjoy learning." },
        { name: "R. Singh", role: "Sports Head", icon: <Trophy className="w-8 h-8 text-white" />, color: "from-emerald-400 to-teal-500", desc: "Loves sports and helps our students become fit, strong, and win in many school-level games." }
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
        { state: "Science Labs", schools: "12+ Labs", students: "500+", focus: "Students do real science experiments to learn about Physics, Chemistry, and Biology in a fun way." },
        { state: "Arts & Culture", schools: "5 Clubs", students: "300+", focus: "We run music, dance, and art clubs so every child can show their creative side!" },
        { state: "Sports Academy", schools: "4 Fields", students: "450+", focus: "Students get coaching in Cricket, Football, and Basketball from trained coaches." },
        { state: "JEE/NEET Coaching", schools: "Special Batches", students: "200+", focus: "Special classes for students who want to become doctors or engineers when they grow up." }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-['Plus Jakarta Sans']">
            <PageHero
                title="Our"
                italicTitle="Story"
                tag="Since 1998"
                subtitle="See how we grew from a small school into one of Patna's best — and how we keep getting better every year."
                bgImage="/GyanSagar/StudentPatna.jpg"
                accentColor="text-indigo-400"
            />

            {/* The Founding Vision */}
            <div className="max-w-7xl mx-auto px-4 py-28">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center gap-2 mb-4 text-indigo-600 font-bold uppercase tracking-widest text-sm">
                            <Quote className="w-5 h-5" />
                            Our Vision
                        </div>
                        <h2 className="text-5xl font-extrabold text-slate-800 mb-6 leading-tight">How It All <br /><span className="text-indigo-500">Began</span></h2>
                        <div className="w-20 h-3 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                What started as a small school in Ram Krishna Nagar has now become one of the most trusted schools in Patna.
                            </p>
                            <p>
                                Shri Ashlok Kumar and his team started this school with one big dream: <strong>"To build a school that treats every child as its own and gives them all the tools they need to build their future."</strong>
                            </p>
                            <p>
                                In 25 years, we grew from a primary school to a full school up to 12th grade — but our values have never changed. We still care about every student, just as we did on day one.
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
                                    <p className="font-extrabold text-slate-800 text-4xl">5,000+</p>
                                    <p className="text-slate-500 font-medium text-lg">Successful Alumni</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center gap-2 mb-4 text-rose-500 font-bold uppercase tracking-widest text-sm">
                            <Trophy className="w-5 h-5 md:w-5 md:h-5" />
                            Academic Excellence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 md:mb-6 leading-tight">Nurturing <br /><span className="text-rose-500">Brilliance</span></h2>
                        <div className="w-20 md:w-24 h-2 md:h-3 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mb-6 md:mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                Every year, our students do very well in their board exams and many win prizes in big competitions like NTSE and Olympiads.
                            </p>
                            <p>
                                We are very proud of our students! Our old students are now Doctors, Engineers, and Leaders working all around the world.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-10 p-5 md:p-8 bg-rose-50 shadow-inner rounded-3xl border border-rose-100 relative overflow-hidden">
                            <Star className="w-8 h-8 md:w-12 md:h-12 text-rose-500 mb-4 opacity-50 absolute top-4 right-4" />
                            <p className="text-lg md:text-2xl font-bold text-slate-800 italic relative z-10">
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
                        <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tighter">The Journey of 25 Years</h2>
                        <div className="w-32 h-3 bg-indigo-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                            See how a small school in Patna grew bigger and better with every passing year.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 h-full border border-slate-700 hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl">
                                        {React.cloneElement(milestone.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-700 mb-3 md:mb-4">{milestone.year}</h3>
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{milestone.title}</h4>
                                    <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
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
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">School Leadership</h2>
                        <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        {leadership.map((member, idx) => (
                            <div
                                key={idx}
                                className={`relative flex-1 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group hover:flex-[2.5] transition-all duration-700 ease-in-out cursor-pointer bg-slate-50 border border-slate-100 shadow-sm min-h-[300px] md:h-[450px]`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-800 group-hover:bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10">
                                        {React.cloneElement(member.icon, { className: "w-6 h-6 md:w-7 md:h-7" })}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 group-hover:text-white transition-colors duration-500">{member.name}</h3>
                                    <p className="text-indigo-600 group-hover:text-white/80 font-bold mb-4 transition-colors duration-500 uppercase tracking-widest text-[10px] md:text-xs">{member.role}</p>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                                        <div className="overflow-hidden">
                                            <p className="text-white font-light text-base md:text-lg leading-relaxed pt-2 border-t border-white/20">
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
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">Academic Classes</h2>
                        <div className="w-20 h-2 bg-indigo-500 rounded-full mb-8"></div>
                        <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                            We teach students at every level in a way that best suits their age, so they always enjoy learning!
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
                                                <p className="text-2xl font-extrabold text-slate-800">{data.schools}</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 font-medium uppercase text-xs mb-1">Students Enrolled</p>
                                                <p className="text-2xl font-extrabold text-slate-800">{data.students}</p>
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
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">Be a Part of Our <br />Educational Family</h2>
                    <p className="text-2xl text-slate-400 mb-12 font-light">Admissions for 2025-26 are now open. Come visit our school and see it for yourself!</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-5 px-12 rounded-2xl shadow-2xl transition-all text-xl">
                            Apply Online
                        </button>
                        <button className="bg-slate-800 hover:bg-slate-700 text-white font-extrabold py-5 px-12 rounded-2xl transition-all text-xl">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurStory;
