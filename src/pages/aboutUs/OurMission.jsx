import React from 'react';
import { BookOpen, Sparkles, PenTool, Globe, Target, Heart, Layers, Users, Zap, Award, BookText, Lightbulb, Compass, MonitorPlay, ShoppingBag, Star as StarIcon, Quote, ChevronRight, ShieldCheck, Coins, Fingerprint, Microscope, GraduationCap, School, Brain } from 'lucide-react';
import PageHero from '../../components/common/PageHero';

const OurMission = () => {
    const coreValues = [
        {
            icon: <GraduationCap />,
            title: "Strong Studies",
            description: "At Gyan Sagar Public School, we make sure every student learns very well. Our classes from NC to 12th are made to help students do their best and score great marks."
        },
        {
            icon: <Heart />,
            title: "Good Character",
            description: "We believe school is not just about books. We teach our students to be honest, kind, and respectful — so they grow up to be good human beings."
        },
        {
            icon: <Zap />,
            title: "All-Round Growth",
            description: "We don't just focus on studies. Sports, art, and fun activities are also very important to us. Every child gets a chance to find what they love doing!"
        },
        {
            icon: <Microscope />,
            title: "Love for Science",
            description: "We teach children to ask questions and find answers. Our science labs and computer rooms help students try new things and learn by doing."
        },
        {
            icon: <Users />,
            title: "Ready for the World",
            description: "We help students learn good values from India while also getting ready for the big world. We teach them how to talk well and understand different people."
        },
        {
            icon: <Award />,
            title: "Great Results Always",
            description: "Our students do very well in their 10th and 12th board exams every year. Gyan Sagar is known for producing top students in Patna!"
        }
    ];

    const stats = [
        { label: "Years of Teaching", value: "25+" },
        { label: "Happy Students", value: "10,000+" },
        { label: "Great Teachers", value: "100+" },
        { label: "School Ground", value: "2 Acres" }
    ];

    const educationalStages = [
        {
            icon: <Compass className="w-8 h-8 text-amber-500" />,
            title: "1. Pre-Primary (NC to KG)",
            description: "Children learn by playing, drawing, and talking. We help them make new friends and learn basic things in a fun and loving way."
        },
        {
            icon: <BookText className="w-8 h-8 text-rose-500" />,
            title: "2. Primary (1st to 5th)",
            description: "Students learn Maths, Science, and Languages step by step. We make sure every child understands things clearly and enjoys learning."
        },
        {
            icon: <Microscope className="w-8 h-8 text-indigo-500" />,
            title: "3. Middle School (6th to 8th)",
            description: "Students start learning harder topics and get to do science experiments and computer work. This is where curiosity grows!"
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-emerald-500" />,
            title: "4. Secondary (9th & 10th)",
            description: "We help students study well for their board exams. Teachers give extra attention and guide each student about what to do after school."
        },
        {
            icon: <Award className="w-8 h-8 text-teal-500" />,
            title: "5. Sr. Secondary (10+2)",
            description: "Students can choose Science, Commerce, or Arts. We also help them prepare for big entrance exams like JEE and NEET."
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
        { title: "Smart Learning", text: "We use digital boards and videos to make hard topics easy and fun for students of all classes.", color: "from-blue-400 to-blue-600" },
        { title: "Safe School", text: "Our school has cameras everywhere and strict rules so every student feels safe, happy, and can focus on studying.", color: "from-purple-400 to-purple-600" },
        { title: "Care for Every Child", text: "Our teachers have fewer students in each class so they can give time to each child and help anyone who needs extra support.", color: "from-orange-400 to-rose-500" }
    ];

    const ethicalFeatures = [
        { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, title: "Safety First", desc: "All our staff are properly checked before joining. Our school buses have GPS tracking so parents always know where their child is." },
        { icon: <Fingerprint className="w-8 h-8 text-amber-500" />, title: "Honesty Matters", desc: "We have clear rules so students behave well and work hard honestly. Cheating is never allowed at Gyan Sagar." },
        { icon: <Users className="w-8 h-8 text-indigo-500" />, title: "Parents Stay Updated", desc: "We hold regular Parent-Teacher meetings and use a mobile app to share news about your child's progress and attendance." }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-['Plus Jakarta Sans']">
            <PageHero
                title="Vision &"
                italicTitle="Purpose"
                tag="Our Commitment"
                subtitle="Empowering every student with knowledge, character, and the values to excel globally."
                bgImage="/GyanSagar/StudentPatna.jpg"
                accentColor="text-amber-400"
            />

            {/* Educational Philosophy Section */}
            <div className="bg-white py-24 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row-reverse items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 mb-4 text-emerald-600 font-bold uppercase tracking-widest text-sm">
                            <Lightbulb className="w-5 h-5" />
                            How We Teach
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">Our Way of <br /><span className="text-emerald-500">Teaching & Learning</span></h2>
                        <div className="w-20 h-3 bg-emerald-500 rounded-full mb-8"></div>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                We believe that real learning happens when students do things — not just read about them. At Gyan Sagar, we ask students to ask questions like "Why?" and "How?" so they truly understand what they study.
                            </p>
                            <p>
                                For older students, we mix study with practice. We also train students inside school for big exams like JEE and NEET, so they don't have to go anywhere else.
                            </p>
                            <p>
                                We care about both studying AND feeling good. Students enjoy meditation, sports, and friendly chats with teachers to stay happy and focused every day.
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
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">Our Big Dream</h2>
                        <div className="w-20 h-[10px] bg-indigo-600 rounded-full mb-8"></div>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                Gyan Sagar Public School started with a dream — to give every child in Patna a chance to get the best education. We are not just a school, we are a family that cares about every student's growth.
                            </p>
                            <p>
                                We want our students to become not just good at their jobs, but also kind and helpful people. Our school teaches both brain and heart — from NC all the way to 12th grade.
                            </p>
                            <div className="flex items-start gap-4 p-4 md:p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                                <div className="bg-indigo-100 p-3 md:p-4 rounded-2xl flex-shrink-0">
                                    <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-indigo-600" />
                                </div>
                                <p className="text-indigo-900 font-medium text-base md:text-lg italic">
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
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">From Play School to Big School</h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                            A student's journey at Gyan Sagar is structured to provide age-appropriate challenges and growth at every step of their school life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                        {educationalStages.map((stage, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                                <div className="bg-slate-800 p-3 md:p-4 rounded-2xl inline-block mb-4 md:mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(stage.icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{stage.title}</h3>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{stage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Impact / Stats Section */}
            <div className="bg-indigo-900 py-20 border-y border-indigo-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 text-white">
                        <h2 className="text-4xl font-extrabold mb-4">Our Numbers Tell the Story</h2>
                        <p className="text-indigo-200 text-lg max-w-2xl mx-auto font-light">
                            In over 25 years, thousands of children have grown up and done great things! They are our biggest achievement.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-3xl md:text-6xl font-extrabold text-amber-400 mb-1 md:mb-3 drop-shadow-lg">{stat.value}</h3>
                                <p className="text-indigo-100 font-medium tracking-wide uppercase text-[10px] md:text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">What We Have Achieved</h2>
                        <div className="w-24 h-2 bg-amber-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                            At Gyan Sagar Public School, we always follow our values and make sure every student gets a good education that builds both brain and character.
                        </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-600 transition-colors duration-700"></div>
                            <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-indigo-100 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-indigo-500 transition-all duration-500 group-hover:rotate-6">
                                {React.cloneElement(value.icon, {
                                    className: "w-7 md:w-10 h-7 md:h-10 text-indigo-600 group-hover:text-white transition-colors duration-500"
                                })}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">{value.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">
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
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Built on <span className="text-indigo-600">Ethics & Safety</span></h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                            We keep our school safe and honest so every student can learn without any worry or fear.
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
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our School's Pillars</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="group h-[350px] cursor-pointer">
                                <div className="relative h-full w-full rounded-[2rem] shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                    {/* Front of Card */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-[2rem] p-10 flex flex-col items-center justify-center text-center [backface-visibility:hidden]`}>
                                        <Sparkles className="w-16 h-16 text-white mb-6 drop-shadow-md" />
                                        <h3 className="text-3xl font-extrabold text-white drop-shadow-md">{pillar.title}</h3>
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
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">Voices of Our Community</h2>
                    <p className="mt-4 text-center text-slate-500 font-medium">What parents and our former students say about Gyan Sagar.</p>
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
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-lg">Take the First Step</h2>
                        <p className="text-indigo-100 text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                            Admissions are open for 2025-26. Come and join our Gyan Sagar family. Give your child a great start in life!
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
