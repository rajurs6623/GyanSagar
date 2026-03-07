import React, { useState } from 'react';
import {
    History, Lightbulb, Users, Trophy, ChevronRight, GraduationCap,
    Star, Heart, PenTool, Quote, Globe, Zap, MapPin,
    Code, Palette, MessageSquare, Library, BookOpen, Truck
} from 'lucide-react';

const OurStory = () => {
    const milestones = [
        {
            year: "2018",
            title: "Gurgaon's First Spark",
            description: "Conceived during a late-night discussion between educators in Gurgaon who noticed a massive drop in creative writing engagement among Indian middle schoolers.",
            icon: <Lightbulb className="w-8 h-8 text-white" />
        },
        {
            year: "2020",
            title: "The Seed is Planted",
            description: "Started with a vision in a small classroom in Delhi to give exactly 30 local students a digital platform to share their creative stories.",
            icon: <PenTool className="w-8 h-8 text-white" />
        },
        {
            year: "2021",
            title: "First Publication",
            description: "Successfully published our first anthology of short stories written entirely by primary and middle school students.",
            icon: <History className="w-8 h-8 text-white" />
        },
        {
            year: "2023",
            title: "Growing Community",
            description: "Reached over 10,000 young authors nationally, building a strong, vibrant community of passionate educators and avid readers.",
            icon: <Users className="w-8 h-8 text-white" />
        },
        {
            year: "2025",
            title: "Global Recognition",
            description: "Awarded for excellence in educational technology, bringing innovative story-building tools to classrooms worldwide.",
            icon: <Trophy className="w-8 h-8 text-white" />
        },
        {
            year: "Future",
            title: "The Next Frontier",
            description: "Aiming to integrate VR storytelling and real-time collaborative writing spaces to push the boundaries of imagination.",
            icon: <Zap className="w-8 h-8 text-white" />
        }
    ];

    const mentorshipFeatures = [
        {
            title: "Expert Guidance",
            description: "Our platform pairs young writers with structured, AI-assisted mentorship that feels just like having a friendly tutor by your side, offering gentle nudges and insightful suggestions."
        },
        {
            title: "Constructive Feedback",
            description: "Writers receive positive, actionable feedback focused on growth, encouraging them to refine their drafts and polish their narratives without fear of harsh criticism."
        },
        {
            title: "Safe Environment",
            description: "We've built a secure, moderated digital space where creativity can flourish without fear of negative criticism, ensuring every child feels empowered to share their voice."
        }
    ];

    const teamMembers = [
        { name: "Dr. Vikram Sarabhai", role: "Chief Education Officer", icon: <Lightbulb className="w-8 h-8 text-white" />, color: "from-blue-500 to-cyan-400", desc: "A visionary educator who believes that every Indian child has a unique story that needs to be told to the world." },
        { name: "Rohan Khanna", role: "Lead Platform Engineer", icon: <Code className="w-8 h-8 text-white" />, color: "from-purple-500 to-pink-500", desc: "The tech architect who built Bharat's first child-safe, AI-guided writing environment for students." },
        { name: "Sunita Reddy", role: "Head of Design", icon: <Palette className="w-8 h-8 text-white" />, color: "from-amber-400 to-orange-500", desc: "Creator of the magical, engaging user interface that bridges the digital divide for rural and urban students." },
        { name: "Kavita Singh", role: "Community Director", icon: <MessageSquare className="w-8 h-8 text-white" />, color: "from-emerald-400 to-teal-500", desc: "Driving the pan-India movement of teachers and parents dedicated to nurturing young literary talent." }
    ];

    const heritageStats = [
        { year: "2019", label: "Heritage Revival Award", icon: <Star className="w-6 h-6 text-amber-500" /> },
        { year: "2021", label: "National Folk-Lore Grant", icon: <Globe className="w-6 h-6 text-indigo-500" /> },
        { year: "2023", label: "Cultural Preservation Hub", icon: <Library className="w-6 h-6 text-rose-500" /> }
    ];

    const printSteps = [
        { title: "Digital Craft", desc: "The manuscript is formatted with beautiful layouts.", icon: <Palette className="w-10 h-10" /> },
        { title: "Physical Print", desc: "Eco-friendly paper is used for high-quality binding.", icon: <BookOpen className="w-10 h-10" /> },
        { title: "Doorstep Joy", desc: "We deliver to over 19,000 pin codes across India.", icon: <Truck className="w-10 h-10" /> }
    ];

    const footprintData = [
        { state: "Maharashtra", schools: "350+", students: "45,000+", focus: "Promoting regional language narratives alongside English creative writing." },
        { state: "Delhi NCR", schools: "280+", students: "38,000+", focus: "Interactive storytelling workshops in both public and private schools." },
        { state: "Karnataka", schools: "220+", students: "30,500+", focus: "Tech-integrated literature programs focusing on character development and world-building." },
        { state: "Kerala", schools: "180+", students: "25,000+", focus: "Highest literacy initiatives focusing on social awareness through student-authored books." }
    ];

    const [activeFootprint, setActiveFootprint] = useState(0);

    return (
        <div className="pt-0 pb-20 bg-[#F8FAFC] min-h-screen font-sans">

            {/* Hero Banner Section */}
            <div className="relative w-full bg-[#0F172A] py-36 px-4 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/about/story_banner_3d_1772874971974.png"
                        alt="Our Story Banner"
                        className="w-full h-full object-cover opacity-60 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
                    <div className="inline-flex items-center gap-2 mb-8 border border-amber-500/30 bg-amber-500/10 px-6 py-2 rounded-full backdrop-blur-md">
                        <Star className="w-5 h-5 text-amber-400" />
                        <p className="text-amber-400 font-bold tracking-widest uppercase text-sm">A Tale of Imagination</p>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
                        Our Beautiful <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Origin Story</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
                        Discover the story of Nation's Young Authors: a revolution in childhood education born from a single, undeniable truth—children are the greatest storytellers on earth.
                    </p>
                </div>
            </div>

            {/* The Founders' Spark (New Section) */}
            <div className="max-w-7xl mx-auto px-4 py-28">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center gap-2 mb-4 text-emerald-600 font-bold uppercase tracking-widest text-sm">
                            <Quote className="w-5 h-5" />
                            The Beginning
                        </div>
                        <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">The Spark of <br /><span className="text-emerald-500">Inspiration</span></h2>
                        <div className="w-20 h-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                Every great story has a beginning. Ours didn't start in a corporate boardroom, but rather at a crowded, messy vintage writing desk.
                            </p>
                            <p>
                                A teacher was reviewing standardized English essays from her students. The grammar was perfect, the punctuation flawless... but the stories were entirely devoid of soul. It was in that quiet moment, reading mechanical essays under a desk lamp, that a massive realization struck: <strong>We were teaching children how to follow rules, not how to build worlds.</strong>
                            </p>
                            <p>
                                Nation's Young Authors was founded on the belief that children shouldn't just be handed books to read; they should be handed the pen to write them.
                            </p>
                        </div>
                    </div>
                    {/* 3D Image Card */}
                    <div className="lg:w-1/2 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-400 rounded-[3rem] blur-3xl opacity-30"></div>
                        <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100 transform hover:scale-105 transition-transform duration-700">
                            <img
                                src="/images/about/story_founder_3d_1772876177448.png"
                                alt="3D Vintage Glasses on Manuscript"
                                className="w-full h-[500px] rounded-[2.5rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* A Legacy of Learning (The Impact Expansion) */}
            <div className="bg-white py-24 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-16">
                    {/* 3D Image Card */}
                    <div className="lg:w-1/2 w-full relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-rose-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-slate-100 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/about/story_card_3d_1772875203459.png"
                                alt="3D Owl Storytelling"
                                className="w-full h-[500px] rounded-2xl object-cover"
                            />
                            <div className="absolute -bottom-10 -right-4 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:flex items-center gap-4 animate-bounce-slow text-left">
                                <div className="p-4 bg-amber-100 rounded-2xl">
                                    <Heart className="w-10 h-10 text-amber-600" />
                                </div>
                                <div>
                                    <p className="font-black text-slate-800 text-4xl">1,000,000+</p>
                                    <p className="text-slate-500 font-medium text-lg">Sentences Written</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center gap-2 mb-4 text-rose-500 font-bold uppercase tracking-widest text-sm">
                            <Globe className="w-5 h-5" />
                            Our National Impact
                        </div>
                        <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">A Legacy of <br /><span className="text-rose-500">Learning</span></h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                What began in a single classroom quickly evolved into a nationwide movement. Teachers across the country realized that when their students were given the freedom to create their own heroes, villains, and universes, their academic performance skyrocketed.
                            </p>
                            <p>
                                Reading comprehension improved because they finally understood narrative structure. Vocabulary expanded rapidly because they actively reached for better words to describe their magical dragons or futuristic cities.
                            </p>
                        </div>
                        <div className="mt-10 p-8 bg-rose-50 shadow-inner rounded-3xl border border-rose-100 relative overflow-hidden">
                            <GraduationCap className="w-12 h-12 text-rose-500 mb-4 opacity-50 absolute top-4 right-4" />
                            <p className="text-2xl font-bold text-slate-800 italic relative z-10">
                                "Our dream is to walk into any school library across the nation, pick a book off the shelf, and see that it was written by a 12-year-old student from that very town."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentorship Section */}
            <div className="bg-slate-900 py-28 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/about/story_team_3d_1772875597417.png')] bg-cover opacity-10 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <p className="text-amber-400 font-bold tracking-widest uppercase mb-4 text-sm">Our Support System</p>
                        <h2 className="text-5xl font-black mb-6">Guided by Heart</h2>
                        <div className="w-20 h-1 bg-amber-500 rounded-full mb-8"></div>
                        <p className="text-xl text-slate-300 font-light mb-10 leading-relaxed">
                            Every great adventurer needs a wise mentor. Behind every young author on our platform is a comprehensive support system designed specifically to encourage, nurture, and carefully extract the brilliant ideas hiding inside their minds.
                        </p>
                        <div className="space-y-8">
                            {mentorshipFeatures.map((feature, i) => (
                                <div key={i} className="flex gap-6 items-start bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:bg-slate-800 transition-colors">
                                    <div className="mt-1 bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl shadow-lg">
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-2">{feature.title}</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/images/about/story_team_3d_1772875597417.png"
                            alt="3D Mentors"
                            className="w-full rounded-[3rem] drop-shadow-2xl border-8 border-slate-700/50 transform hover:-translate-y-4 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Extended Timeline Section */}
            <div className="bg-slate-50 py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">A Decade of Growth</h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                            From a single idea sketched out on a piece of paper to a sweeping national movement. Here are the key chapters that have defined our incredible journey so far.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative group perspective-1000">
                                <div className="bg-white rounded-[2.5rem] p-10 h-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:border-amber-400 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-900 to-slate-800 rounded-3xl flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        {milestone.icon}
                                    </div>
                                    <h3 className="text-5xl font-black text-slate-200 mb-4 drop-shadow-sm">{milestone.year}</h3>
                                    <h4 className="text-3xl font-bold text-slate-800 mb-4">{milestone.title}</h4>
                                    <p className="text-slate-600 text-lg leading-relaxed font-light">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* NEW SECTION: The Heritage Collective (Cultural Data) */}
            <div className="bg-slate-900 py-28 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600 rounded-full blur-[150px] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-rose-400 font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-rose-500 underline-offset-8">Indigenous Stories</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">The Heritage <br /><span className="text-rose-500">Collective</span></h2>
                        <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                            India has a rich tradition of oral storytelling. Our "Heritage Collective" initiative empowers students to interview their grandparents and elders, turning ancient folk tales and family histories into published books.
                        </p>

                        <div className="space-y-6">
                            {heritageStats.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="bg-slate-800 p-4 rounded-2xl shadow-xl">{item.icon}</div>
                                    <div>
                                        <p className="text-rose-400 font-bold text-sm tracking-widest">{item.year}</p>
                                        <h4 className="text-xl font-bold">{item.label}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-rose-500 to-indigo-600 p-8 rounded-[3rem] shadow-2xl relative group overflow-hidden h-[300px] flex flex-col justify-end">
                            <Star className="absolute top-10 right-10 w-20 h-20 text-white/20 group-hover:rotate-12 transition-transform" />
                            <h4 className="text-2xl font-black mb-2">Regional Pride</h4>
                            <p className="text-white/80 font-light">Supporting writing in 12+ Indian languages including Hindi, Marathi, and Tamil.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[3rem] shadow-2xl relative group overflow-hidden h-[300px] flex flex-col justify-end border border-slate-800/10">
                            <Users className="absolute top-10 right-10 w-20 h-20 text-slate-100 group-hover:-rotate-12 transition-transform" />
                            <h4 className="text-2xl font-black mb-2 text-slate-900">70,000+ Stories</h4>
                            <p className="text-slate-500 font-light">Of ancient wisdom preserved through the eyes of the digital generation.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: From Pixels to Paper (Lifecycle Section) */}
            <div className="bg-white py-28 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">From Pixels to <span className="text-indigo-600">Paper</span></h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            How we transform a digital manuscript into a high-quality physical book delivered across the Indian subcontinent.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {printSteps.map((step, idx) => (
                            <div key={idx} className="relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500 text-center">
                                <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 border border-slate-100">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-600 font-light leading-relaxed">{step.desc}</p>
                                {idx < 2 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-10 translate-y-[-50%] z-0">
                                        <ChevronRight className="w-10 h-10 text-slate-200" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* The Future Section (New) */}
            <div className="max-w-7xl mx-auto px-4 py-28">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center gap-2 mb-4 text-indigo-600 font-bold uppercase tracking-widest text-sm">
                            <Zap className="w-5 h-5" />
                            Looking Ahead
                        </div>
                        <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">The Next <br /><span className="text-indigo-500">Chapter</span></h2>
                        <div className="w-20 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                While our story so far is one of incredible success across major metros like Mumbai and Bangalore, we truly believe that we have barely scratched the surface of the creative potential buried in our tier-2 and tier-3 cities.
                            </p>
                            <p>
                                We are actively expanding our software platform to not only include the best writing tools but to fully integrate vernacular language support. Imagine a school in a remote village where a classroom of 30 students can collectively build a vast folk-tale universe in their own mother tongue.
                            </p>
                            <p className="font-semibold text-slate-800 text-2xl mt-4">
                                By 2030, we aim to have 1 million published young authors from every corner of Bharat.
                            </p>
                        </div>
                    </div>
                    {/* 3D Image Card */}
                    <div className="lg:w-1/2 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300 to-purple-400 rounded-[3rem] blur-3xl opacity-30"></div>
                        <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100 transform hover:-translate-y-4 transition-transform duration-700">
                            <img
                                src="/images/about/story_future_3d_1772876198240.png"
                                alt="3D Futuristic Library"
                                className="w-full h-[500px] rounded-[2.5rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW UI: Hover Expandable Team Cards (Alag UI) */}
            <div className="bg-white py-28 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Brains Behind The Magic</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Meet The Core Team</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Unique Hover Expand Array */}
                    <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[400px]">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={idx}
                                className={`relative flex-1 rounded-[2rem] overflow-hidden group hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer bg-slate-100 border border-slate-200`}
                            >
                                {/* Gradient Background appearing on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-800 group-hover:bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transition-colors duration-500 border border-white/10">
                                        {member.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-800 group-hover:text-white transition-colors duration-500 whitespace-nowrap">{member.name}</h3>
                                    <p className="text-slate-500 group-hover:text-white/80 font-medium mb-4 transition-colors duration-500 whitespace-nowrap">{member.role}</p>

                                    {/* Description only expands and shows on hover */}
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

            {/* NEW UI: Interactive Accordion Footprint (Alag UI) */}
            <div className="bg-slate-50 py-28 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-200 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 relative z-10">
                    <div className="lg:w-1/3">
                        <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Reach</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">A Global Footprint</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-8"></div>
                        <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                            We are not just a local initiative. Our platform is currently deployed in thousands of schools across multiple regions, creating a massive interconnected web of young creative minds.
                        </p>
                        <p className="text-lg text-slate-600 font-light leading-relaxed">
                            Click on the regions to see our specific impact metrics and core focus areas for each location.
                        </p>
                    </div>

                    <div className="lg:w-2/3 flex flex-col gap-4">
                        {footprintData.map((data, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveFootprint(idx)}
                                className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-500 overflow-hidden ${activeFootprint === idx
                                    ? 'bg-white border-emerald-400 shadow-[0_20px_50px_rgba(16,185,129,0.15)] shadow-emerald-500/20 md:scale-105 z-10'
                                    : 'bg-white/50 border-slate-200 hover:border-emerald-200 hover:bg-white z-0'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl transition-colors duration-500 ${activeFootprint === idx ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <h3 className={`text-2xl font-bold transition-colors duration-500 ${activeFootprint === idx ? 'text-emerald-600' : 'text-slate-700'}`}>
                                            {data.state}
                                        </h3>
                                    </div>
                                    <div className={`transition-transform duration-500 ${activeFootprint === idx ? 'rotate-180' : 'rotate-0'}`}>
                                        <ChevronRight className={`w-6 h-6 ${activeFootprint === idx ? 'text-emerald-500' : 'text-slate-400'}`} />
                                    </div>
                                </div>

                                {/* Expanding Content */}
                                <div className={`grid transition-all duration-500 ease-in-out ${activeFootprint === idx ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <p className="text-slate-400 font-medium uppercase text-xs mb-1">Active Schools</p>
                                                <p className="text-3xl font-black text-slate-800">{data.schools}</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 font-medium uppercase text-xs mb-1">Student Authors</p>
                                                <p className="text-3xl font-black text-slate-800">{data.students}</p>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                                            <p className="text-emerald-800 font-light italic text-lg text-center">"{data.focus}"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recognizing Excellence Section */}
            <div className="bg-indigo-950 py-32 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500 rounded-full blur-[150px] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-20 relative z-10">
                    <div className="md:w-1/2">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Celebrating Every <span className="text-amber-400">Victory</span></h2>
                        <div className="w-24 h-1 bg-amber-400 mb-8"></div>
                        <p className="text-xl text-indigo-200 font-light mb-10 leading-relaxed">
                            Publishing a book is a monumental achievement for anyone, let alone an elementary school student. We go above and beyond to ensure that every completed story is celebrated. From grand digital badges on their profiles to the beautiful moment of a physical book delivery to their doorstep.
                        </p>
                        <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-900 font-extrabold py-5 px-12 rounded-full shadow-2xl transform hover:-translate-y-2 hover:shadow-amber-500/30 transition-all duration-300 text-xl tracking-wide">
                            View The Award Hall
                        </button>
                    </div>
                    <div className="md:w-1/2 relative">
                        <img
                            src="/images/about/story_award_3d_1772875622110.png"
                            alt="3D Trophy Award"
                            className="relative w-full max-w-lg mx-auto drop-shadow-[0_0_80px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurStory;
