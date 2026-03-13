import React from 'react';
import { BookOpen, Sparkles, PenTool, Globe, Target, Heart, Layers, Users, Zap, Award, BookText, Lightbulb, Compass, MonitorPlay, ShoppingBag, Star as StarIcon, Quote, ChevronRight, ShieldCheck, Coins, Fingerprint, Microscope, GraduationCap, School } from 'lucide-react';

const OurMission = () => {
    const coreValues = [
        {
            icon: <GraduationCap />,
            title: "Academic Excellence",
            description: "At Gyan Sagar Public School, we prioritize rigorous academic standards. Our curriculum for NC to 12th is designed to challenge students and prepare them for national-level excellence."
        },
        {
            icon: <Heart />,
            title: "Character Building",
            description: "We believe education is incomplete without strong values. We instill honesty, respect, and empathy in our students, helping them grow into responsible citizens of Bharat."
        },
        {
            icon: <Zap />,
            title: "Holistic Development",
            description: "Beyond textbooks, we focus on sports, arts, and leadership. Every child at Gyan Sagar is encouraged to discover their hidden talents through diverse co-curricular activities."
        },
        {
            icon: <Microscope />,
            title: "Scientific Temper",
            description: "We encourage a spirit of inquiry. Our modern science and computer labs provide the perfect environment for students to experiment, question, and innovate."
        },
        {
            icon: <Users />,
            title: "Global Citizenship",
            description: "While rooted in Indian values, we prepare our students for a globalized world. We emphasize communication skills and cross-cultural understanding from an early age."
        },
        {
            icon: <Award />,
            title: "Consistent Results",
            description: "Our mission is reflected in our performance. Gyan Sagar consistently produces top-tier results in board examinations (10th and 10+2), setting benchmarks in Patna."
        }
    ];

    const stats = [
        { label: "Years of Excellence", value: "25+" },
        { label: "Successful Alumni", value: "10,000+" },
        { label: "Expert Faculty", value: "100+" },
        { label: "Campus Area", value: "2 Acres" }
    ];

    const educationalStages = [
        {
            icon: <Compass className="w-8 h-8 text-amber-500" />,
            title: "1. Pre-Primary (NC to KG)",
            description: "Play-way method focusing on sensory learning, social skills, and basic numeracy/literacy in a nurturing environment."
        },
        {
            icon: <BookText className="w-8 h-8 text-rose-500" />,
            title: "2. Primary (1st to 5th)",
            description: "Building foundational blocks in Mathematics, Science, and Languages with a focus on conceptual clarity and creativity."
        },
        {
            icon: <Microscope className="w-8 h-8 text-indigo-500" />,
            title: "3. Middle School (6th to 8th)",
            description: "Transitioning to more structured academic disciplines and introducing advanced laboratory work and computer science."
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-emerald-500" />,
            title: "4. Secondary (9th & 10th)",
            description: "Intensive preparation for Board exams with regular testing and personalized mentorship for career guidance."
        },
        {
            icon: <Award className="w-8 h-8 text-teal-500" />,
            title: "5. Sr. Secondary (10+2)",
            description: "Specialized streams (Science/Commerce/Arts) with focused preparation for competitive exams like JEE, NEET, and CLAT."
        }
    ];

    const testimonials = [
        { name: "Mrs. Anjali Sharma", role: "Parent, Patna", quote: "Gyan Sagar has truly been a second home for my child. The teachers are dedicated and the focus on values is what sets it apart." },
        { name: "Mr. Rakesh Verma", role: "Alumni (Batch 2015)", quote: "The foundation I received at Gyan Sagar helped me crack the JEE. I'm forever grateful to Ashlok sir and the faculty." },
        { name: "Dr. Sumit Gupta", role: "Educationalist", quote: "I've seen many schools in Patna, but Gyan Sagar's commitment to individual student progress is remarkable and consistent." },
        { name: "Sneha Kumari", role: "10th Topper (2023)", quote: "The smart classrooms and well-equipped labs made even difficult concepts easy to understand. I love my school!" },
        { name: "Mr. Vinod Jha", role: "Senior Faculty", quote: "At Gyan Sagar, we don't just teach; we mentor. It's rewarding to see our students excel in all walks of life." }
    ];

    const pillars = [
        { title: "Smart Learning", text: "Integration of interactive digital boards and multimedia resources to make complex theories visually intuitive for all grades.", color: "from-blue-400 to-blue-600" },
        { title: "Safe Campus", text: "CCTV-secured premises and a strict anti-bullying policy ensure a peaceful and focused learning environment for every student.", color: "from-purple-400 to-purple-600" },
        { title: "Personalized Care", text: "With a healthy teacher-student ratio, we provide individual attention to ensure no student is left behind in their academic journey.", color: "from-orange-400 to-rose-500" }
    ];

    const ethicalFeatures = [
        { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, title: "Safety First", desc: "Verifiable background checks for all staff and GPS-enabled transport for total parental peace of mind." },
        { icon: <Fingerprint className="w-8 h-8 text-amber-500" />, title: "Honesty Policy", desc: "A strict code of conduct that promotes academic integrity and discourages all forms of unfair practices." },
        { icon: <Users className="w-8 h-8 text-indigo-500" />, title: "Parent Collaboration", desc: "Regular PTMs and a dedicated mobile app to keep parents updated on their child's daily progress and attendance." }
    ];

    return (
        <div className="pt-0 pb-20 bg-slate-50 min-h-screen font-sans">

            {/* Hero Banner Section */}
            <div className="relative w-full min-h-[92vh] flex items-center bg-indigo-950 py-20 px-4 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/GyanSagar/StudentPatna.jpg"
                        alt="School Mission Banner"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/90 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-800/50 backdrop-blur-sm border border-indigo-400/30 mb-6 shadow-[0_0_15px_rgba(129,140,248,0.3)]">
                            <Target className="w-5 h-5 text-indigo-300" />
                            <span className="text-sm font-semibold tracking-wider text-indigo-200 uppercase">Vision for Excellence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">
                            Shaping the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Leaders of Tomorrow</span>
                        </h1>
                        <p className="text-xl text-indigo-100 leading-relaxed max-w-xl font-light">
                            Our mission is to provide quality education that empowers students with knowledge, character, and skills to excel in life. At Gyan Sagar Public School, we nurture every child's potential from NC to Senior Secondary.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center transform hover:scale-105 transition-transform duration-700">
                        <div className="relative p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
                            <div className="absolute inset-0 bg-indigo-500 rounded-full blur opacity-20 animate-pulse"></div>
                            <img
                                src="/GyanSagar/LogoGyansagar.jfif"
                                alt="Gyan Sagar Logo"
                                className="relative rounded-full w-64 h-[260px] md:w-80 md:h-[324px] object-cover drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Educational Philosophy Section */}
            <div className="bg-white py-24 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row-reverse items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 mb-4 text-emerald-600 font-bold uppercase tracking-widest text-sm">
                            <Lightbulb className="w-5 h-5" />
                            Our Pedagogy
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">Philosophy of <br /><span className="text-emerald-500">Holistic Learning</span></h2>
                        <div className="w-20 h-3 bg-emerald-500 rounded-full mb-8"></div>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                We believe that true education goes beyond textbooks. At Gyan Sagar, our pedagogy is centered on 'Action-Based Learning.' We encourage students to interact with their environment, asking 'why' and 'how' rather than just 'what.'
                            </p>
                            <p>
                                For our senior students, the focus shifts towards a balanced mix of academic rigor and competitive preparation. We provide in-house training for national-level entrance exams, ensuring our students are ready for the challenges that lie beyond school gates.
                            </p>
                            <p>
                                Discipline and mental health are the cornerstones of our approach. Weekly meditation sessions, regular sports activities, and one-on-one counseling help our students maintain focus and emotional balance.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-emerald-100 rounded-[3rem] blur-3xl opacity-50"></div>
                        <img
                            src="/GyanSagar/Student.jpg"
                            alt="Active Learning"
                            className="relative w-full rounded-[2.5rem] shadow-2xl border-8 border-white transform hover:-translate-y-2 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* The Vision Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">The Grand Vision</h2>
                        <div className="w-20 h-[10px] bg-indigo-600 rounded-full mb-8"></div>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                Gyan Sagar Public School was founded with a vision to bring world-class education within the reach of families in Patna. We don't just see ourselves as a school, but as a community dedicated to the intellectual and moral growth of our youth.
                            </p>
                            <p>
                                We envision our students becoming not just successful professionals, but compassionate individuals who contribute positively to society. Our integrated curriculum for NC to 12th ensures a steady, logical growth of knowledge and confidence.
                            </p>
                            <div className="flex items-start gap-4 p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                                <div className="bg-indigo-100 p-4 rounded-2xl">
                                    <Sparkles className="w-8 h-8 text-indigo-600" />
                                </div>
                                <p className="text-indigo-900 font-medium text-lg italic">
                                    "Education is the most powerful weapon which you can use to change the world. At Gyan Sagar, we sharpen that weapon with wisdom and virtue."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-300 to-amber-200 blur-2xl opacity-40 rounded-full"></div>
                            <img
                                src="/GyanSagar/StudentPatna.jpg"
                                alt="Student Vision"
                                className="relative w-full max-w-lg h-[404px] rounded-3xl object-cover shadow-2xl transform hover:-translate-y-4 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Educational Stages Section */}
            <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4">Academic Journey</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">From Playroom to Professionalism</h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                            A student's journey at Gyan Sagar is structured to provide age-appropriate challenges and growth at every step of their school life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {educationalStages.map((stage, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                                <div className="bg-slate-800 p-4 rounded-2xl inline-block mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    {stage.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{stage.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{stage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Impact / Stats Section */}
            <div className="bg-indigo-900 py-20 border-y border-indigo-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 text-white">
                        <h2 className="text-4xl font-black mb-4">Our Legacy in Numbers</h2>
                        <p className="text-indigo-200 text-lg max-w-2xl mx-auto font-light">
                            Over two decades of dedication has resulted in thousands of success stories that inspire our current students every day.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-8 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-5xl md:text-6xl font-black text-amber-400 mb-3 drop-shadow-lg">{stat.value}</h3>
                                <p className="text-indigo-100 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">What Drives Us Forward</h2>
                    <div className="w-24 h-2 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                        At Gyan Sagar Public School, we stay true to our founding principles, ensuring every student receives an education rooted in empathy and excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-600 transition-colors duration-700"></div>
                            <div className="w-20 h-20 rounded-3xl bg-indigo-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500 transition-all duration-500 group-hover:rotate-6">
                                {React.cloneElement(value.icon, {
                                    className: "w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-500"
                                })}
                            </div>
                            <h3 className="text-3xl font-bold text-slate-800 mb-4">{value.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg font-light">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ethics & Safety Section */}
            <div className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Built on <span className="text-indigo-600">Ethics & Safety</span></h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                            Trust is the foundation of any educational institution. We ensure that our campus is a sanctuary where students can learn without any fear or distraction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {ethicalFeatures.map((feat, idx) => (
                            <div key={idx} className="bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100 text-center hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-600 transition-colors duration-500">
                                    <span className="group-hover:text-white transition-colors duration-500">
                                        {feat.icon}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">{feat.title}</h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* System Pillars Section */}
            <div className="bg-slate-900 py-24 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 text-white">
                        <span className="text-rose-400 font-bold tracking-widest uppercase text-sm mb-4 block">The Foundation</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Our School's Pillars</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="group h-[350px] cursor-pointer">
                                <div className="relative h-full w-full rounded-[2rem] shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                    {/* Front of Card */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-[2rem] p-10 flex flex-col items-center justify-center text-center [backface-visibility:hidden]`}>
                                        <Sparkles className="w-16 h-16 text-white mb-6 drop-shadow-md" />
                                        <h3 className="text-3xl font-black text-white drop-shadow-md">{pillar.title}</h3>
                                        <p className="max-w-xs text-white/80 mt-4 text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
                                            Hover to Reveal <ChevronRight className="w-4 h-4 inline" />
                                        </p>
                                    </div>

                                    {/* Back of Card */}
                                    <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-white border-4 border-slate-800 p-10 text-center flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                            {pillar.text}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Infinite Scrolling Marquee Testimonials */}
            <div className="py-24 bg-white overflow-hidden relative border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800">Voices of Our Community</h2>
                    <p className="text-slate-500 mt-4 text-lg">What parents and alumni say about Gyan Sagar.</p>
                </div>

                <div className="flex space-x-6 w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] px-4">
                    {[...testimonials, ...testimonials].map((testi, idx) => (
                        <div key={idx} className="w-[400px] bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg flex-shrink-0 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                            <div>
                                <Quote className="w-10 h-10 text-amber-300 mb-6" />
                                <p className="text-slate-700 text-lg leading-relaxed italic mb-6">"{testi.quote}"</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                                    {testi.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{testi.name}</h4>
                                    <p className="text-sm text-indigo-500 font-medium">{testi.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}} />
            </div>

            {/* Bottom Call to Action */}
            <div className="max-w-5xl mx-auto px-4 pb-24">
                <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10">
                        <School className="w-20 h-20 text-amber-400 mx-auto mb-8 drop-shadow-xl" />
                        <h2 className="text-5xl md:text-6xl font-black mb-8 drop-shadow-lg">Take the First Step</h2>
                        <p className="text-indigo-100 text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                            Admissions are open for the session 2024-25. Join the Gyan Sagar family and give your child the foundation they deserve.
                        </p>
                        <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-900 font-extrabold py-5 px-14 rounded-full shadow-2xl transform hover:-translate-y-2 hover:shadow-amber-500/30 transition-all duration-500 text-xl tracking-wide">
                            Register for Admission
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurMission;
