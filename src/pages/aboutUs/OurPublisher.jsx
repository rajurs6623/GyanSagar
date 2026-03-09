import React, { useState } from 'react';
import {
    BookOpen, BookMarked, PenTool, Globe, Award, Sparkles,
    Truck, BarChart3, ShieldCheck, ShoppingCart, Send,
    Layers, Search, CheckCircle2, Star, Quote, ChevronDown,
    Zap, MousePointer2, Heart, Leaf, Microscope, Palette,
    Users, Briefcase, Languages, MapPin, History, Flag
} from 'lucide-react';

const OurPublisher = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const publishingSteps = [
        {
            icon: <Search className="w-8 h-8 text-blue-500" />,
            title: "Manuscript Review",
            description: "Every story is reviewed by our editorial team to ensure it sparks imagination and meets our quality standards for young readers."
        },
        {
            icon: <PenTool className="w-8 h-8 text-purple-500" />,
            title: "Professional Editing",
            description: "Our editors work delicately to polish grammar and flow while preserving the authentic voice and 'soul' of the young author."
        },
        {
            icon: <Layers className="w-8 h-8 text-amber-500" />,
            title: "Artistic Design",
            description: "We create custom, professional book covers and interior layouts that make every young author's work look like a bestseller."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />,
            title: "ISBN & Copyright",
            description: "We handle all legalities, including ISBN registration and copyright protection, ensuring the child owns their intellectual property."
        },
        {
            icon: <Truck className="w-8 h-8 text-rose-500" />,
            title: "Production & Logistics",
            description: "High-quality physical printing using eco-friendly materials, followed by distribution to major retailers and direct-to-door delivery."
        }
    ];

    const distributionChannels = [
        { name: "NYA Global Marketplace", reach: "Worldwide", icon: <ShoppingCart className="w-6 h-6" /> },
        { name: "Amazon & Kindle", reach: "100+ Countries", icon: <Globe className="w-6 h-6" /> },
        { name: "School Libraries", reach: "1,200+ Schools", icon: <BookOpen className="w-6 h-6" /> },
        { name: "Retail Bookstores", reach: "Major Metro Hubs", icon: <BookMarked className="w-6 h-6" /> }
    ];

    const stats = [
        { label: "Unique Titles Published", value: "2,500+", desc: "Across 24 genres and themes." },
        { label: "Copies Distributed", value: "150,000+", desc: "Physical books in circulation." },
        { label: "Global Readership", value: "12+ Countries", desc: "Fans from UK to Singapore." },
        { label: "Royalties Paid", value: "₹25.4L+", desc: "Directly to student savings." }
    ];

    const genres = [
        { name: "Mystery & Thriller", icon: <Search className="w-6 h-6" />, color: "bg-indigo-100 text-indigo-600" },
        { name: "Fantasy Worlds", icon: <Sparkles className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
        { name: "Science Fiction", icon: <Zap className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
        { name: "Poetry & Verse", icon: <Heart className="w-6 h-6" />, color: "bg-rose-100 text-rose-600" },
        { name: "Non-Fiction Hub", icon: <Microscope className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
        { name: "Cultural Tales", icon: <Globe className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" }
    ];

    const technicalSpecs = [
        { title: "Museum Quality Paper", detail: "80-100 GSM acid-free cream or white paper for a premium feel and long-lasting durability.", icon: <Layers /> },
        { title: "Perfect Binding", detail: "Reinforced thermal binding that ensures the book remains intact for decades on a bookshelf.", icon: <ShieldCheck /> },
        { title: "Full-Bleed Printing", detail: "Professional 2400 DPI color printing for illustrations that pop off the page.", icon: <Palette /> }
    ];

    const regionalLanguages = [
        { name: "Hindi", percentage: "45%", count: "1,120 Books", color: "bg-orange-500" },
        { name: "Marathi", percentage: "18%", count: "450 Books", color: "bg-blue-500" },
        { name: "Tamil", percentage: "12%", count: "300 Books", color: "bg-red-500" },
        { name: "Bengali", percentage: "10%", count: "250 Books", color: "bg-green-500" },
        { name: "Others", percentage: "15%", count: "380 Books", color: "bg-slate-500" }
    ];

    const faqs = [
        { q: "Who owns the rights to the book?", a: "The child author (and their guardian) retains 100% intellectual property ownership. We act only as the publishing service provider." },
        { q: "How long does the publishing process take?", a: "Typically, it takes 4-6 weeks from the final manuscript submission to the book being available on the global marketplace." },
        { q: "Can we publish in languages other than English?", a: "Yes! We support Hindi, Marathi, Tamil, and 10+ other regional Indian languages." },
        { q: "Is there a minimum number of copies to print?", a: "No. We use Print-on-Demand (POD) technology, meaning we can print even a single copy if that is all you need." }
    ];

    return (
        <div className="pt-0 pb-20 bg-[#F8FAFC] min-h-screen font-sans">
            {/* Hero Section */}
            <div className="relative w-full bg-[#0F172A] py-32 px-4 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/about/publisher_hero_3d.png"
                        alt="Publisher Hero"
                        className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 text-white text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 mb-6 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-bold tracking-widest text-blue-300 uppercase">The Publishing House</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Bringing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Young Stories</span> to Life
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                            Nation's Young Authors Publication isn't just a printer; we are a bridge between a child's imagination and a reader's heart. We turn manuscripts into legacy.
                        </p>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all duration-700"></div>
                            <img
                                src="/images/about/mission_process_3d_1772876155113.png"
                                alt="3D Process"
                                className="relative w-full max-w-md animate-float drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Stats */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 text-center transform hover:-translate-y-2 transition-all duration-300">
                            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-2">{stat.label}</p>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-1">{stat.value}</h3>
                            <p className="text-slate-500 text-xs font-medium">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Regional Language Mastery Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-orange-200 underline-offset-8">Vernacular Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Mastering The <br /><span className="text-orange-500">Bhartiya Dialects</span></h2>
                        <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                            While English is a global bridge, a child's truest expression often lies in their mother tongue. We are the first child-focused publisher in India to provide professional-grade publishing in 12+ regional languages.
                        </p>

                        <div className="space-y-6">
                            {regionalLanguages.map((lang, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between text-sm font-bold text-slate-700">
                                        <span>{lang.name}</span>
                                        <span>{lang.count} ({lang.percentage})</span>
                                    </div>
                                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${lang.color} transition-all duration-1000 ease-out`}
                                            style={{ width: lang.percentage }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-orange-100 rounded-[3rem] blur-3xl opacity-50"></div>
                        <img
                            src="/images/about/mission_philosophy_3d_1772876120023.png"
                            alt="Language Tree"
                            className="relative w-full rounded-[3rem] shadow-2xl border-8 border-white transform hover:rotate-2 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Genre Expertise Section */}
            <div className="bg-white py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-800 mb-4">Mastery Across <span className="text-blue-600">All Genres</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Whether it's a journey to a far-off planet or a collection of heart-touching poems, we provide the specific editorial expertise for every style.</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-6 gap-6">
                    {genres.map((genre, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all group">
                            <div className={`w-14 h-14 rounded-2xl ${genre.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                {genre.icon}
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm">{genre.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Introduction Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 leading-tight">A Professional <br /><span className="text-blue-600">Standard</span> for Young Minds</h2>
                        <div className="w-20 h-2 bg-blue-600 rounded-full mb-8"></div>
                        <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                            <p>
                                At NYA Publications, we believe that the age of an author should never dictate the quality of their book. Our publishing house operates with the highest industry standards, ensuring that every student's work is treated with the same respect as a Nobel laureate's.
                            </p>
                            <p>
                                We've invested in state-of-the-art Print-on-Demand infrastructure that allows for a "Zero Inventory" model, making publishing affordable and sustainable for every family in India, from Srinagar to Kanyakumari.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4 p-5 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors">
                                <ShieldCheck className="w-10 h-10 text-emerald-500 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="font-bold text-slate-700">Legal Security</p>
                                    <p className="text-xs text-slate-400">100% IP & Copyright Control</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-5 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors">
                                <Award className="w-10 h-10 text-amber-500 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="font-bold text-slate-700">Official ISBN</p>
                                    <p className="text-xs text-slate-400">Recognized by Libraries</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white p-6 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <img
                                src="/images/about/story_future_3d_1772876198240.png"
                                alt="Distribution"
                                className="w-full rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                                <div className="text-white">
                                    <p className="font-black text-4xl">GLOBAL</p>
                                    <p className="font-medium tracking-widest text-sm">DISTRIBUTION NETWORK</p>
                                </div>
                                <Globe className="w-12 h-12 text-blue-300 animate-spin-slow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Literacy Movement Section */}
            <div className="bg-slate-900 py-24 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-16 relative z-10">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Beyond Business</span>
                        <h2 className="text-5xl font-black mb-8 leading-tight">A Global Literacy <span className="text-blue-400">Movement</span></h2>
                        <p className="text-xl text-slate-400 font-light leading-relaxed mb-10">
                            Nation's Young Authors isn't just about selling books; it's about solving the global creative deficit. We partner with NGOs and government schools to bring publishing tools to underprivileged talented students.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                <h4 className="text-3xl font-black text-blue-400 mb-2">150+</h4>
                                <p className="text-slate-400 text-sm">NGO Partnerships across Asia & Africa.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                <h4 className="text-3xl font-black text-emerald-400 mb-2">5,000+</h4>
                                <p className="text-slate-400 text-sm">Scholarships for underprivileged authors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/images/about/mission_impact_3d_1772875545980.png"
                            alt="Global Impact"
                            className="w-full rounded-[4rem] border-8 border-slate-800 shadow-2xl transform hover:-translate-y-4 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* The Workflow */}
            <div className="bg-white py-24 border-y border-slate-200 my-24">
                <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                    <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Process</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800">The Lifecycle of a Book</h2>
                    <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        We have transformed a complex industry into a simple, beautiful journey for our students.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 overflow-x-auto pb-10 custom-scrollbar">
                    <div className="flex min-w-[1200px] justify-between relative">
                        <div className="absolute top-[40%] left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0 hidden lg:block"></div>
                        {publishingSteps.map((step, idx) => (
                            <div key={idx} className="w-[18%] relative z-10 group">
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-md hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center h-full">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-black text-slate-800 mb-3">{step.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-light">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Publisher Honors Section */}
            <div className="max-w-7xl mx-auto px-4 py-24 border-b border-slate-200">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-black text-slate-800 mb-6 leading-tight">Recognized For <br /><span className="text-amber-500">Innovation</span></h2>
                        <p className="text-lg text-slate-500 mb-10 font-light">Our unique approach to democratization of publishing has earned us several accolades from world-class education and technology institutions.</p>
                        <div className="space-y-6">
                            {[
                                { year: "2022", title: "Global EdTech Innovation Award", desc: "For revolutionary child-safe publishing workflow." },
                                { year: "2023", title: "National Literacy Leadership Medal", desc: "Recognized by the Ministry of Education for promoting regional languages." },
                                { year: "2024", title: "Eco-Print Achievement Award", desc: "For implementing 100% sustainable paper sourcing." }
                            ].map((award, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-amber-100 p-4 rounded-2xl h-fit text-amber-600">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-amber-500 font-bold text-xs">{award.year}</p>
                                        <h4 className="font-bold text-slate-800">{award.title}</h4>
                                        <p className="text-slate-500 text-sm">{award.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="/images/about/story_award_3d_1772875622110.png"
                            alt="Awards"
                            className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
                        />
                    </div>
                </div>
            </div>

            {/* Technical Excellence Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-black text-slate-800 mb-4">Technical <br />Specification</h2>
                        <p className="text-slate-500 leading-relaxed font-light">We don't just print; we engineer books. Here's exactly what goes into every physical copy we produce.</p>
                        <div className="mt-8 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-center gap-4">
                            <Leaf className="w-8 h-8 text-emerald-600" />
                            <p className="text-emerald-900 text-sm font-bold">100% Eco-Friendly Ink & Recycled Paper Options Available.</p>
                        </div>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {technicalSpecs.map((spec, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
                                <div className="p-4 bg-slate-50 rounded-2xl inline-block mb-6 group-hover:bg-blue-50 transition-colors">
                                    {React.cloneElement(spec.icon, { className: "w-8 h-8 text-blue-600" })}
                                </div>
                                <h4 className="font-bold text-slate-800 mb-2">{spec.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{spec.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Author Benefits Grid */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-800">The Author <span className="text-indigo-600">Growth Program</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Dynamic Author Dashboard", icon: <BarChart3 />, desc: "Track sales, royalties, and reader demographics in real-time." },
                        { title: "Global Book Launches", icon: <Send />, desc: "Invitation to virtual and physical book launch events across India." },
                        { title: "Marketing Kit", icon: <Briefcase />, desc: "Customized posters, book trailers, and social media media for every book." },
                        { title: "Peer Networking", icon: <Users />, desc: "Connect with thousands of other published young authors globally." },
                        { title: "Marketing Support", icon: <Globe />, desc: "Feature spotlight on our home page and monthly newsletter." },
                        { title: "Language Support", icon: <Languages />, desc: "Translate your book into multiple languages with our auto-assist tools." }
                    ].map((benefit, i) => (
                        <div key={i} className="flex gap-6 p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-all border border-slate-100">
                            <div className="bg-indigo-50 p-4 rounded-2xl h-fit text-indigo-600">
                                {benefit.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-2">{benefit.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Distribution Map / Channels */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="bg-[#0F172A] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-10"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Where Our Stories <br /><span className="text-blue-400">Travel</span></h2>
                            <p className="text-xl text-slate-400 font-light mb-12 leading-relaxed">
                                A book is only powerful if it's read. We ensure our young authors' voices reach the widest possible audience through a multi-channel distribution strategy.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {distributionChannels.map((channel, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                                        <div className="p-3 bg-white/10 rounded-xl inline-block mb-4 text-blue-400">
                                            {channel.icon}
                                        </div>
                                        <h4 className="font-bold text-xl mb-1">{channel.name}</h4>
                                        <p className="text-slate-500 text-sm uppercase tracking-widest">{channel.reach}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-12 rounded-[2.5rem] shadow-2xl relative group h-[450px] flex flex-col justify-between overflow-hidden">
                                <Send className="absolute top-10 right-10 w-24 h-24 text-white/20 group-hover:-translate-y-4 group-hover:translate-x-4 transition-transform duration-700" />
                                <div>
                                    <Quote className="w-12 h-12 text-white/30 mb-6" />
                                    <p className="text-2xl font-light italic leading-relaxed text-white">
                                        "Seeing my daughter's book on Amazon next to my favorite authors was the proudest moment of my life as a parent. The quality was better than what I buy at bookstores."
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">M</div>
                                    <div>
                                        <p className="font-bold text-white">Meera Kapoor</p>
                                        <p className="text-white/60 text-sm">Parent of a 9-year-old Author</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4 py-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-slate-800 mb-4">Common Questions</h2>
                    <p className="text-slate-500 font-light">Everything you need to know about getting your child published.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-800 text-lg">{faq.q}</span>
                                <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                            </button>
                            {activeFaq === i && (
                                <div className="px-8 pb-8 text-slate-600 leading-relaxed animate-fade-in">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-white rounded-[3rem] p-16 text-center shadow-2xl border border-slate-100 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <BookMarked className="w-20 h-20 text-blue-600 mx-auto mb-8 drop-shadow-xl animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Ready to Get Published?</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Join thousands of young authors who have already taken their first step toward legacy. Start your writing journey today and see your name on the cover of tomorrow.
                    </p>
                    <button className="bg-[#0F172A] hover:bg-blue-600 text-white font-extrabold py-5 px-14 rounded-full shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-xl tracking-wide group flex items-center gap-3 mx-auto">
                        Submit Your Manuscript
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Inline Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin 12s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}} />
        </div>
    );
};

export default OurPublisher;
