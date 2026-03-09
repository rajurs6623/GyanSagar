import React from 'react';
import { BookOpen, Sparkles, PenTool, Globe, Target, Heart, Layers, Users, Zap, Award, BookText, Lightbulb, Compass, MonitorPlay, ShoppingBag, Star as StarIcon, Quote, ChevronRight, ShieldCheck, Coins, Fingerprint } from 'lucide-react';

const OurMission = () => {
    const coreValues = [
        {
            icon: <BookOpen />,
            title: "Learn & Grow",
            description: "Providing world-class educational resources to nurture young minds. We believe that a strong foundation in reading and writing is the key to unlocking a child's full potential in life."
        },
        {
            icon: <PenTool />,
            title: "Creative Expression",
            description: "Encouraging students to express their unique ideas through writing. Every child has a universe inside them, and we give them the tools to paint that universe with words."
        },
        {
            icon: <Globe />,
            title: "Global Reach",
            description: "Publishing student voices to be heard by audiences worldwide. We don't just teach writing; we show children that their words have the power to touch hearts across the globe."
        },
        {
            icon: <Layers />,
            title: "Structured Learning",
            description: "Our scientifically designed curriculum breaks down complex narrative structures into fun, simple, and engaging modules that children of all ages can easily grasp."
        },
        {
            icon: <Users />,
            title: "Community Driven",
            description: "Building a supportive network of teachers, parents, and young authors who collaborate, inspire, and elevate each other's creative journeys."
        },
        {
            icon: <Award />,
            title: "Recognizing Talent",
            description: "We believe in celebrating every milestone. By publishing and highlighting their work, we instil a lifelong sense of confidence and accomplishment in young writers."
        }
    ];

    const stats = [
        { label: "Schools across India", value: "1,200+" },
        { label: "Bhartiya Young Authors", value: "75,000+" },
        { label: "National Publications", value: "2,500+" },
        { label: "Active Readers", value: "5M+" }
    ];

    const processes = [
        {
            icon: <Compass className="w-8 h-8 text-amber-500" />,
            title: "1. The Spark (Learn)",
            description: "It all begins with an idea. We provide students with interactive lessons, character design workshops, and world-building exercises to ignite their imagination."
        },
        {
            icon: <BookText className="w-8 h-8 text-rose-500" />,
            title: "2. The Sandbox (Practice)",
            description: "Writers enter a safe, moderated environment to experiment with dialogue, plot twists, and pacing, receiving instant AI-guided and mentor feedback."
        },
        {
            icon: <PenTool className="w-8 h-8 text-indigo-500" />,
            title: "3. The Workshop (Create)",
            description: "Students begin drafting their official manuscripts. We guide them chapter by chapter, ensuring they overcome writer's block and build a cohesive story."
        },
        {
            icon: <MonitorPlay className="w-8 h-8 text-emerald-500" />,
            title: "4. The Printing Press (Publish)",
            description: "Once the manuscript is perfect, it moves to our digital and physical publishing pipeline. Students choose their covers, format their text, and hit publish!"
        },
        {
            icon: <ShoppingBag className="w-8 h-8 text-teal-500" />,
            title: "5. The World Stage (Sell)",
            description: "We don't just publish; we give students a platform to sell their books. They learn the basics of entrepreneurship, marketing, and global distribution."
        }
    ];

    const testimonials = [
        { name: "Sita Ramanathan", role: "Principal, DAV Public School", quote: "मेरे छात्र अब लिखने के लिए उत्साहित रहते हैं। यह भारतीय शिक्षा प्रणाली में एक क्रांतिकारी बदलाव है।" },
        { name: "Rajesh Kumar", role: "Parent from Bangalore", quote: "Seeing my son publish his own book in both Hindi and English has been a moment of immense pride for our family." },
        { name: "Dr. Ananya Iyer", role: "Education Consultant, Delhi", quote: "We integrated this across our foundation years. The improvement in creative expression and vocabulary is truly remarkable." },
        { name: "Arjun Mehta", role: "Young Author (Age 11)", quote: "I never thought I could be a published author in India. Now my friends are reading my mystery novel across Mumbai!" },
        { name: "Meera Deshmukh", role: "Librarian, Pune", quote: "We have a dedicated 'Bhartiya Bal Sahitya' shelf now, filled with books written by our own students. It's inspiring!" }
    ];

    const pillars = [
        { title: "AI-Assisted Magic", text: "Our custom AI doesn't write for them; it acts as a socratic tutor, asking guiding questions when they get stuck on a plot hole.", color: "from-blue-400 to-blue-600" },
        { title: "Safe & Moderated", text: "Every interaction, comment, and review is processed through rigorous safety filters to ensure a 100% positive, bully-free environment.", color: "from-purple-400 to-purple-600" },
        { title: "Tangible Rewards", text: "The promise of a physical, beautifully bound book at the end of the journey provides an intrinsic motivation that grades cannot match.", color: "from-orange-400 to-rose-500" }
    ];

    const economicStats = [
        { label: "Total Royalties Distributed", value: "₹25L+" },
        { label: "Smallest Author Age", value: "6 Years" },
        { label: "Highest Selling Book", value: "4,000+ Copies" },
        { label: "Entrepreneurial Workshops", value: "150+" }
    ];

    const ethicalFeatures = [
        { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, title: "100% Safe AI", desc: "No data is shared outside. Our AI is trained specifically for child safety and educational encouragement." },
        { icon: <Fingerprint className="w-8 h-8 text-amber-500" />, title: "Anti-Plagiarism", desc: "We ensure every word is the child's own. Our system detects AI-generated content attempt to keep writing authentic." },
        { icon: <Users className="w-8 h-8 text-indigo-500" />, title: "Human Review", desc: "Every book goes through a final check by a human educator before moving to the printing press." }
    ];

    return (
        <div className="pt-0 pb-20 bg-slate-50 min-h-screen font-sans">

            {/* Hero Banner Section */}
            <div className="relative w-full min-h-[92vh] flex items-center bg-indigo-950 py-20 px-4 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/about/mission_banner_3d_1772874943740.png"
                        alt="Our Mission Banner"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/90 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-800/50 backdrop-blur-sm border border-indigo-400/30 mb-6 shadow-[0_0_15px_rgba(129,140,248,0.3)]">
                            <Target className="w-5 h-5 text-indigo-300" />
                            <span className="text-sm font-semibold tracking-wider text-indigo-200 uppercase">Our Sacred Mission</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">
                            Empowering <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Bharat's Young Voices</span>
                        </h1>
                        <p className="text-xl text-indigo-100 leading-relaxed max-w-xl font-light">
                            Our overarching mission is fundamentally simple but profoundly difficult: empower students to follow their journey from reading words to writing worlds. We strive to give every child the tools to create, build, publish, and sell tangible books to a global audience.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center transform hover:scale-105 transition-transform duration-700">
                        <div className="relative p-3 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
                            <div className="absolute inset-0 bg-indigo-500 rounded-3xl blur opacity-20 animate-pulse"></div>
                            <img
                                src="/images/about/mission_card_3d_1772875163046.png"
                                alt="3D Learning Character"
                                className="relative rounded-2xl w-full max-w-md object-cover drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Educational Philosophy (New Section) */}
            <div className="bg-white py-24 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row-reverse items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 mb-4 text-emerald-600 font-bold uppercase tracking-widest text-sm">
                            <Lightbulb className="w-5 h-5" />
                            Our Pedagogy
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">Our Philosophy on<br /><span className="text-emerald-500">Education</span></h2>
                        <div className="w-20 h-2 bg-emerald-500 rounded-full mb-8"></div>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                Traditional education often treats writing as a chore—a means to pass an exam or complete an assignment. Nation's Young Authors approaches writing as an art form, a psychological tool for self-discovery, and a critical cognitive exercise.
                            </p>
                            <p>
                                When a child realizes they have the power to invent a continent, dictate the laws of physics, or craft a hero capable of defeating evil, their entire perspective on reading and writing shifts completely. We don't just teach grammar and syntax; we teach architectural thinking, emotional empathy, and narrative confidence.
                            </p>
                            <p>
                                By tying the educational process to a tangible, physical reward—a real book they can hold, show to their parents, and even sell—we trigger an intrinsic motivation that standardized testing can never replicate.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-emerald-100 rounded-[3rem] blur-3xl opacity-50"></div>
                        <img
                            src="/images/about/mission_philosophy_3d_1772876120023.png"
                            alt="3D Growing Tree Book"
                            className="relative w-full rounded-[2.5rem] shadow-2xl border-8 border-white transform hover:-translate-y-2 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* The Vision & Problem Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">The Grand Vision</h2>
                        <div className="w-20 h-1.5 bg-indigo-600 rounded-full mb-8"></div>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                In today's fast-paced digital world, children consume an enormous amount of content—videos, games, and social media—but rarely are they given the structured opportunity to <strong>create</strong> it. Nation's Young Authors was born out of a desire to shift this paradigm from passive consumption to active creation.
                            </p>
                            <p>
                                We envision a world where the title of "Author" isn't reserved only for adults with literary agents. We see classrooms transformed into bustling writing studios, where the boundless imagination of a child is captured, refined, and bound into a beautiful physical book that sits proudly on the shelf of the local library.
                            </p>
                            <div className="flex items-start gap-4 p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                                <div className="bg-indigo-100 p-4 rounded-2xl">
                                    <Sparkles className="w-8 h-8 text-indigo-600" />
                                </div>
                                <p className="text-indigo-900 font-medium text-lg italic">
                                    "We don't just teach children how to write sentences; we teach them how to captivate hearts, construct worlds, and build a lasting legacy that outlives them."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-300 to-amber-200 blur-2xl opacity-40 rounded-full"></div>
                            <img
                                src="/images/about/mission_vision_3d_1772875572968.png"
                                alt="Vision Telescope 3D"
                                className="relative w-full max-w-lg object-contain drop-shadow-2xl transform hover:-translate-y-4 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* The Authoring Process (New Section) */}
            <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/about/mission_process_3d_1772876155113.png')] bg-cover opacity-10 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4">Our Methodology</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">The Journey of an Author</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                            Writing a book isn't a single step; it's a marathon. We've gamified and structured the entire lifecycle of a book from the initial spark of an idea to the moment a customer purchases it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {processes.map((process, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                                <div className="bg-slate-800 p-4 rounded-2xl inline-block mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    {process.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{process.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Impact / Stats Section */}
            <div className="bg-indigo-900 py-20 border-y border-indigo-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 text-white">
                        <h2 className="text-4xl font-black mb-4">Our Impact So Far</h2>
                        <p className="text-indigo-200 text-lg max-w-2xl mx-auto font-light">
                            The numbers speak for themselves. We are rapidly changing the landscape of childhood education by placing the power of storytelling directly into the hands of the youth across the world.
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

            {/* Core Values / Mission Details Grid */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">What Drives Us Forward</h2>
                    <div className="w-24 h-2 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                        We believe that every child has a story to tell. By giving them the right tools, knowledge, and platform, we are actively nurturing the next generation of great authors, critical thinkers, and empathetic innovators.
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

            {/* NEW SECTION: The Young Author's Economy (Data & Cards) */}
            <div className="bg-slate-50 py-24 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-amber-200 underline-offset-8">Financial Literacy</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">The Young Author's <br /><span className="text-amber-500">Economy</span></h2>
                            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                                We believe that writing isn't just a hobby—it's the first step toward entrepreneurship. Through our platform, Indian students are learning how to manage royalties, understand copyrights, and market their own stories to a national audience.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {economicStats.map((stat, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <p className="text-slate-400 text-xs font-bold uppercase mb-1">{stat.label}</p>
                                        <p className="text-2xl font-black text-slate-800">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 p-5 bg-amber-50 rounded-2xl border border-amber-100">
                                <Coins className="w-10 h-10 text-amber-600" />
                                <p className="text-amber-900 text-sm font-medium">
                                    Total royalties earned by our young authors have exceeded <span className="font-bold">25 Lakh Rupees</span>, funding many education goal and charities.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0 group-hover:bg-indigo-600 transition-colors duration-500"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Ownership & Rights</h3>
                                    <p className="text-slate-600 leading-relaxed font-light">
                                        Unlike other platforms, every child owns 100% of their intellectual property. We help them register their copyright in India, teaching them the value of their original ideas from day one.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden group">
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-50 rounded-tr-full -z-0 group-hover:bg-amber-500 transition-colors duration-500"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">The Marketplace</h3>
                                    <p className="text-slate-600 leading-relaxed font-light">
                                        Our dedicated marketplace allows students to set their own prices, run "author sales", and see real-time analytics of who is reading their books in which states of India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: Ethics & Mentorship (Grid) */}
            <div className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Built on <span className="text-indigo-600">Ethics</span></h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                            Technology is powerful, but in the hands of a child, it must be guided by wisdom. Our ethical framework ensures that AI remains a tool, never a crutch.
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

            {/* NEW UI: 3D Flip Card Pillars (Alag Animation UI) */}
            <div className="bg-slate-900 py-24 border-y border-slate-800 perspective-1000">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 text-white">
                        <span className="text-rose-400 font-bold tracking-widest uppercase text-sm mb-4 block">The Foundation</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Our Core System Pillars</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="group h-[350px] [perspective:1000px] cursor-pointer">
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

            {/* NEW UI: Infinite Scrolling Marquee Testimonials (Alag Animation UI) */}
            <div className="py-24 bg-white overflow-hidden relative border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800">Voices that Matter</h2>
                    <p className="text-slate-500 mt-4 text-lg">What the community is saying about our platform.</p>
                </div>

                {/* Marquee Track Container */}
                <div className="flex space-x-6 w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] px-4">
                    {/* Render the array twice to create an infinite loop effect */}
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
                {/* Inline Style Override for Tailwind Keyframe if missing */}
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
                    <div className="absolute inset-0 bg-[url('/images/about/mission_impact_3d_1772875545980.png')] bg-cover opacity-10 mix-blend-screen group-hover:opacity-20 transition-opacity duration-1000"></div>
                    <Sparkles className="absolute top-10 right-10 w-16 h-16 text-amber-400/30 animate-pulse" />
                    <Heart className="absolute bottom-10 left-10 w-20 h-20 text-rose-400/30 animate-pulse" />

                    <div className="relative z-10">
                        <Zap className="w-20 h-20 text-amber-400 mx-auto mb-8 drop-shadow-xl" />
                        <h2 className="text-5xl md:text-6xl font-black mb-8 drop-shadow-lg">Join Our Educational Journey</h2>
                        <p className="text-indigo-100 text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                            Whether you are an educator looking to inspire your classroom, a parent wanting to unlock your child's creativity, or a student ready to write your first book—your journey begins right here with us. Let's make history together.
                        </p>
                        <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-900 font-extrabold py-5 px-14 rounded-full shadow-2xl transform hover:-translate-y-2 hover:shadow-amber-500/30 transition-all duration-500 text-xl tracking-wide">
                            Start Learning Today
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurMission;
