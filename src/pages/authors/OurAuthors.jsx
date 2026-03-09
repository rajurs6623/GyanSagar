import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Book, Award, ArrowUpRight, Instagram, Twitter, Linkedin, Star, Sparkles } from 'lucide-react';

const featuredAuthor = {
    name: "Vikram Sethi",
    image: "/images/authors/vikram.png",
    banner: "/images/authors/banner_heritage.png",
    bio: "With a career spanning three decades, Vikram has redefined Indian philosophical literature. His ability to blend ancient wisdom with contemporary struggle makes him a true living legend.",
    quote: "Literature is the bridge between our inner chaos and the world's order."
};

const topAuthors = [
    {
        name: "Ananya Sharma",
        role: "Contemporary Fiction",
        image: "/images/authors/ananya.png",
        excerpt: "Writing about the unspoken emotions of the modern Indian woman.",
        color: "bg-amber-50"
    },
    {
        name: "Rahul Varma",
        role: "Crime & Thriller",
        image: "/images/authors/rahul.png",
        excerpt: "Exploring the dark underbelly of urban life through mystery.",
        color: "bg-slate-50"
    }
];

const genreSpecialists = [
    { name: "Priya Iyer", genre: "Romance", img: "/images/authors/priya.png" },
    { name: "Sanjay Khanna", genre: "Business", img: "/images/authors/sanjay.png" },
    { name: "Kavita Nair", genre: "Poetry", img: "/images/authors/kavita.png" },
    { name: "Dr. Aryan Dev", genre: "Spirituality", img: "/images/authors/vikram.png" },
    { name: "Meera Oberoi", genre: "Kitchen Arts", img: "/images/authors/neha.png" },
    { name: "Zafar Ali", genre: "Historical War", img: "/images/authors/rahul.png" }
];

const AuthorCard = ({ author, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            style={{ perspective: "1000px" }}
            className="group relative flex flex-col bg-white/70 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl overflow-hidden cursor-pointer"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${author.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative h-72 overflow-hidden">
                <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="relative p-6 space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{author.name}</h3>
                    <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">{author.role}</p>
                </div>

                <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed">
                    {author.bio}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/50">
                    <div className="text-center">
                        <Book className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                        <p className="text-xs font-bold text-slate-700">{author.stats?.books || 5}</p>
                        <p className="text-[10px] text-slate-400 uppercase">Books</p>
                    </div>
                    <div className="text-center">
                        <Award className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                        <p className="text-xs font-bold text-slate-700">{author.stats?.awards || 2}</p>
                        <p className="text-[10px] text-slate-400 uppercase">Awards</p>
                    </div>
                    <div className="text-center">
                        <Star className="w-5 h-5 mx-auto text-yellow-400 mb-1" />
                        <p className="text-xs font-bold text-slate-700">4.9</p>
                        <p className="text-[10px] text-slate-400 uppercase">Rating</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const regionalAuthors = {
    NORTH: [
        { name: "Sumeet Gill", location: "Chandigarh", specialty: "Rustic Fiction", img: "/images/authors/rahul.png" },
        { name: "Prerna Vats", location: "Delhi", specialty: "Political Thriller", img: "/images/authors/neha.png" }
    ],
    SOUTH: [
        { name: "Karthi S.", location: "Chennai", specialty: "Historical Epics", img: "/images/authors/sanjay.png" },
        { name: "Lekha Nair", location: "Kochi", specialty: "Eco-Lit", img: "/images/authors/kavita.png" }
    ],
    EAST: [
        { name: "Joydeep B.", location: "Kolkata", specialty: "Surrealism", img: "/images/authors/vikram.png" },
        { name: "Rimjhim S.", location: "Guwahati", specialty: "Folklore", img: "/images/authors/priya.png" }
    ],
    WEST: [
        { name: "Amol P.", location: "Pune", specialty: "Satire", img: "/images/authors/rahul.png" },
        { name: "Sarah M.", location: "Mumbai", specialty: "Urban Noir", img: "/images/authors/ananya.png" }
    ]
};

const fullAuthors = [
    {
        name: "Ananya Sharma",
        role: "Contemporary Fiction",
        image: "/images/authors/ananya.png",
        bio: "Ananya explores the intricacies of modern Indian relationships through her soul-stirring prose. Her latest bestseller 'Urban Echoes' has touched thousands of hearts.",
        stats: { books: 5, awards: 3 },
        color: "from-amber-500/20 to-orange-600/20"
    },
    {
        name: "Rahul Varma",
        role: "Crime & Mystery",
        image: "/images/authors/rahul.png",
        bio: "Known for his gripping plot twists and atmospheric world-building, Rahul brings the dark alleys of Mumbai to life in his suspenseful thrillers.",
        stats: { books: 4, awards: 2 },
        color: "from-blue-600/20 to-indigo-900/20"
    },
    {
        name: "Priya Iyer",
        role: "Historical Romance",
        image: "/images/authors/priya.png",
        bio: "Priya weaves magic into history, creating lush landscapes and timeless love stories that transport readers to bygone eras of Indian royalty.",
        stats: { books: 7, awards: 5 },
        color: "from-rose-500/20 to-purple-600/20"
    },
    {
        name: "Vikram Sethi",
        role: "Philosophical Non-Fiction",
        image: "/images/authors/vikram.png",
        bio: "A veteran in the literary world, Vikram's insights into Vedantic philosophy and modern life provide a bridge between ancient wisdom and current challenges.",
        stats: { books: 12, awards: 8 },
        color: "from-emerald-500/20 to-teal-800/20"
    },
    {
        name: "Neha Sharma",
        role: "Self-Help & Motivation",
        image: "/images/authors/neha.png",
        bio: "Neha is a leading voice in modern mindfulness. Her books help young professionals navigate the complexities of life with calm and focus.",
        stats: { books: 4, awards: 2 },
        color: "from-sky-500/20 to-indigo-600/20"
    },
    {
        name: "Amit Mishra",
        role: "Modern Poetry",
        image: "/images/authors/priya.png",
        bio: "Amit's poetry captures the heartbeat of urban India. His verses are a mix of raw emotion and sharp social commentary.",
        stats: { books: 6, awards: 3 },
        color: "from-rose-500/20 to-orange-600/20"
    },
    {
        name: "Dr. Shalini Rai",
        role: "Academic Research",
        image: "/images/authors/kavita.png",
        bio: "Dr. Shalini explores the intersection of technology and sociology. Her research-backed books are a staple in universities nationwide.",
        stats: { books: 9, awards: 6 },
        color: "from-purple-500/20 to-blue-600/20"
    }
];

const OurAuthors = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* HERO: Cinematic Entry */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src={featuredAuthor.banner} className="absolute inset-0 w-full h-full object-cover scale-110" alt="banner" />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-4 block">Author Spotlight</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 italic leading-tight">{featuredAuthor.name}</h1>
                        <p className="text-white/80 text-lg md:text-2xl font-light italic max-w-2xl mx-auto">
                            "<Quote className="inline-block w-8 h-8 -mt-4 mr-2 text-amber-500 opacity-50" />
                            {featuredAuthor.quote}"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AWARDS & RECOGNITION (Accolades that Define Us) - Moved below Hero */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-5xl font-black text-slate-900 leading-tight">Accolades that <br /><span className="text-amber-600">Define Us</span></h2>
                            <p className="text-slate-600 text-lg leading-relaxed">Our authors are regularly honored at prestigious literary festivals and award ceremonies worldwide. These recognitions are a testament to our commitment to quality.</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Sahitya Akademi", "Booker Shortlist", "Crossword Awards", "Commonwealth Prize"
                                ].map((award) => (
                                    <div key={award} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700">
                                        <Award className="text-amber-500 w-5 h-5" /> {award}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <img src="/images/authors/ananya.png" className="w-full aspect-video object-cover rounded-[2rem] shadow-xl" alt="award-pic-1" />
                                <div className="bg-amber-600 p-8 rounded-[2rem] text-white">
                                    <h4 className="text-3xl font-black mb-2">12</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">National Awards</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                                    <h4 className="text-3xl font-black mb-2">05</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">International Laurels</p>
                                </div>
                                <img src="/images/authors/rahul.png" className="w-full aspect-video object-cover rounded-[2rem] shadow-xl" alt="award-pic-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LITERARY LEGACY TIMELINE - Moved below Awards */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Our Literary <span className="text-amber-600">Legacy</span></h2>
                        <p className="text-slate-500 font-serif italic text-lg text-center max-w-2xl mx-auto">Tracing the footsteps of our storytelling excellence through the decades.</p>
                    </div>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {[
                            { year: "2015", title: "The First Spark", desc: "Started with just 2 authors and a dream to revolutionize Indian publishing.", side: "left" },
                            { year: "2018", title: "Global Expansion", desc: "Our books reached the UK and US markets, winning international acclaim.", side: "right" },
                            { year: "2021", title: "Digital Transformation", desc: "Launched our first interactive e-book series featuring augmented reality.", side: "left" },
                            { year: "2024", title: "100+ Authors Milestone", desc: "Proudly supporting over a hundred diverse voices across 20+ genres.", side: "right" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-lg">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-black text-amber-600">{item.year}</div>
                                    </div>
                                    <div className="text-slate-900 font-bold text-xl mb-2">{item.title}</div>
                                    <div className="text-slate-600 leading-relaxed">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: AUTHOR IMPACT STATS */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Master Authors", value: "25+", icon: <Award className="text-amber-500 w-6 h-6" /> },
                            { label: "Books Published", value: "150+", icon: <Book className="text-amber-500 w-6 h-6" /> },
                            { label: "Awards Won", value: "40+", icon: <Star className="text-amber-500 w-6 h-6" /> },
                            { label: "Global Reach", value: "12+", icon: <ArrowUpRight className="text-amber-500 w-6 h-6" /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-center mb-4">{stat.icon}</div>
                                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: 3D PREMIUM CARDS GRID (Limited to 4) */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-2">LITERARY <span className="text-amber-600">TITANS</span></h2>
                            <p className="text-slate-500 font-serif italic text-lg">Curated shortlist of our most celebrated voices</p>
                        </div>
                        <div className="flex gap-4">
                            {['All', 'Fiction', 'Thriller', 'Mystery'].map(cat => (
                                <button key={cat} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${cat === 'All' ? 'bg-amber-600 text-white shadow-lg shadow-amber-200' : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-400'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fullAuthors.slice(0, 4).map((author, index) => (
                            <AuthorCard key={author.name} author={author} index={index} />
                        ))}
                    </div>
                </div>
            </section>







            {/* SECTION 2: Top Authors Alternating */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    {topAuthors.map((author, index) => (
                        <div key={author.name} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-32 last:mb-0`}>
                            <motion.div className="w-full lg:w-1/2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                                <div className="aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                                    <img src={author.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={author.name} />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex gap-4">
                                            <Instagram className="text-white w-5 h-5 cursor-pointer hover:text-amber-400" />
                                            <Twitter className="text-white w-5 h-5 cursor-pointer hover:text-amber-400" />
                                            <Linkedin className="text-white w-5 h-5 cursor-pointer hover:text-amber-400" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="w-full lg:w-1/2 space-y-6">
                                <span className="text-amber-600 font-bold uppercase tracking-tighter text-4xl opacity-20 block">{`0${index + 1}`}</span>
                                <h3 className="text-4xl font-black text-slate-900">{author.name}</h3>
                                <p className="text-sm font-bold text-amber-500 uppercase tracking-widest">{author.role}</p>
                                <p className="text-slate-600 text-xl leading-relaxed font-light italic">"{author.excerpt}"</p>
                                <button className="group inline-flex items-center gap-2 text-slate-900 font-bold hover:text-amber-600 transition-colors">
                                    VIEW PROFILE <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: The Mini Grid */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-amber-400 inline-block pb-2">GENRE SPECIALISTS</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {genreSpecialists.map((spec) => (
                        <div key={spec.name} className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-xl transition-all cursor-pointer group">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-200 group-hover:scale-110 transition-transform">
                                <img src={spec.img} className="w-full h-full object-cover" alt={spec.name} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{spec.name}</h4>
                                <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">{spec.genre}</p>
                            </div>
                            <ArrowUpRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-amber-500" />
                        </div>
                    ))}
                </div>
            </section>
            {/* NEW SECTION: THE WRITER'S RETREAT (IMMERSIVE SPLIT) */}
            <section className="relative py-24 bg-slate-100 overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
                    <div className="h-full w-full relative">
                        <img src="/images/authors/desk_creative.png" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="retreat" />
                        <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                    <div className="lg:w-1/2 space-y-12 pr-12">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-xs">Exclusivity</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] mt-4">The <br />Writer's <br /><span className="text-amber-600 italic font-serif">Sanctuary</span></h2>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                { title: "Himalayan Solitude", desc: "A 30-day residency in the heart of the mountains for deep manuscript work.", img: "/images/authors/vikram.png" },
                                { title: "Coastal Narratives", desc: "Writing workshops held by the Goa shores, focusing on sensory storytelling.", img: "/images/authors/priya.png" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex gap-6 items-start group cursor-pointer"
                                >
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-xl group-hover:rotate-6 transition-transform">
                                        <img src={item.img} className="w-full h-full object-cover" alt="loc" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: GLOBAL BOOK TOUR (HORIZONTAL MARQUEE) */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 mb-16">
                    <h2 className="text-4xl font-black text-slate-900">GLOBAL <span className="text-amber-600">FOOTPRINTS</span></h2>
                    <p className="text-slate-500 font-serif italic text-lg mt-2">Where our stories have traveled this year.</p>
                </div>

                <div className="flex gap-8 px-4 animate-marquee-fast hover:[animation-play-state:paused]">
                    {[
                        { city: "New York", event: "Times Square Reading", img: "/images/authors/ananya.png" },
                        { city: "London", event: "British Library Gala", img: "/images/authors/rahul.png" },
                        { city: "Dubai", event: "Emirates Lit Fest", img: "/images/authors/kavita.png" },
                        { city: "Mumbai", event: "Gateway Literature Festival", img: "/images/authors/sanjay.png" },
                        { city: "Tokyo", event: "Shibuya Book Fair", img: "/images/authors/vikram.png" }
                    ].map((tour, i) => (
                        <div key={i} className="min-w-[400px] h-[300px] relative rounded-[3rem] overflow-hidden group">
                            <img src={tour.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="tour" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-10 left-10">
                                <span className="px-4 py-1 bg-amber-500 rounded-full text-[10px] font-black uppercase text-white mb-2 block w-fit">{tour.city}</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter leading-none">{tour.event}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* NEW SECTION: CRITIC REVIEWS (PREMIUM TESTIMONIALS) */}
            <section className="py-32 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">The World <span className="text-amber-500">Listens</span></h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { critic: "The Literary Times", text: "A powerhouse of Indian talent. Their authors are not just writing books; they are defining a generation's identity.", rating: 5 },
                            { critic: "Global Reader's Digest", text: "Sophisticated, brave, and infinitely relatable. This community is a masterclass in modern storytelling.", rating: 5 }
                        ].map((rev, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="p-12 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden group"
                            >
                                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 group-hover:text-amber-500/10 transition-colors" />
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                                </div>
                                <p className="text-2xl font-light italic leading-relaxed mb-8 text-slate-300">"{rev.text}"</p>
                                <div className="font-black text-amber-500 uppercase tracking-widest">— {rev.critic}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: MEDIA MENTIONS (LOGO CLOUD) */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">FEATURED IN PRESTIGIOUS MEDIA</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        <span className="text-3xl font-black text-slate-900">FORBES INDIA</span>
                        <span className="text-3xl font-black text-slate-900">THE HINDU</span>
                        <span className="text-3xl font-black text-slate-900">VOGUE</span>
                        <span className="text-3xl font-black text-slate-900">NDTV</span>
                        <span className="text-3xl font-black text-slate-900">BBC CULTURE</span>
                    </div>
                </div>
            </section>
            {/* NEW SECTION: REGIONAL VOICES (GRID MAP) */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-20">
                        <h2 className="text-4xl font-black text-slate-900 uppercase">Regional <span className="text-amber-600">Powerhouses</span></h2>
                        <p className="text-slate-500 mt-2 italic font-serif">Stories from every corner of the peninsula.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {Object.entries(regionalAuthors).map(([region, list], i) => (
                            <div key={region} className="space-y-4">
                                <div className="p-2 border-b-2 border-slate-900 font-black text-xs tracking-widest uppercase">
                                    Region: {region}
                                </div>
                                {list.map((auth, j) => (
                                    <div key={j} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-4 mb-4">
                                            <img src={auth.img} className="w-10 h-10 rounded-full object-cover" alt="reg" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm">{auth.name}</h4>
                                                <p className="text-[10px] text-amber-600 font-bold uppercase">{auth.location}</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest">{auth.specialty}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: SPEAKER'S BUREAU (PODIUM UI) */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <img src="/images/about/mission_banner_3d_1772874943740.png" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" alt="podium" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">Speaker's <br /><span className="text-amber-500">Bureau</span></h2>
                        </div>
                        <p className="max-w-xs text-slate-400 font-medium border-l-2 border-amber-500 pl-6 italic">Our authors aren't just writers; they are thought leaders available for global summits.</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { name: "Vikram Sethi", topic: "The Philosophy of Digital Silence", event: "TEDx Mumbai" },
                            { name: "Ananya Sharma", topic: "Emotional Resilience in Modern Lit", event: "Jaipur Lit Fest" },
                            { name: "Sanjay Khanna", topic: "The Future of Indian Fintech Narrative", event: "TechCrunch Disrupt" }
                        ].map((speak, i) => (
                            <div key={i} className="flex flex-col md:flex-row justify-between p-8 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all cursor-default group">
                                <div className="flex gap-8 items-center">
                                    <span className="text-4xl font-black text-amber-500 italic opacity-20">0{i + 1}</span>
                                    <div>
                                        <h3 className="text-2xl font-bold">{speak.name}</h3>
                                        <p className="text-slate-400 text-sm font-black uppercase tracking-[0.2em]">{speak.event}</p>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 flex items-center">
                                    <span className="text-xl font-medium italic group-hover:text-amber-400 transition-colors">"{speak.topic}"</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: PROFESSIONAL WORKSHOPS (CALENDAR) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-5xl font-black text-slate-900 italic leading-none mb-6">Learning <br />With <span className="text-amber-600">Masters</span></h2>
                            <p className="text-slate-500 leading-relaxed mb-8">Exclusive 2-day workshops hosted by our authors for aspiring writers and professionals.</p>
                            <button className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-amber-600 transition-all">Download Brochure</button>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { date: "15-16 OCT", title: "Character Design", host: "Ananya S.", color: "border-amber-200" },
                                { date: "22-23 OCT", title: "The Art of Plotting", host: "Rahul V.", color: "border-blue-200" },
                                { date: "05-06 NOV", title: "Poetic Structures", host: "Kavita N.", color: "border-pink-200" },
                                { date: "12-13 NOV", title: "World Building", host: "Vikram S.", color: "border-emerald-200" }
                            ].map((ws, i) => (
                                <div key={i} className={`p-8 bg-slate-50 rounded-[2.5rem] border ${ws.color} group hover:bg-white hover:shadow-2xl transition-all cursor-pointer`}>
                                    <div className="text-xs font-black text-slate-400 mb-2">{ws.date}</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-amber-600 transition-colors uppercase">{ws.title}</h4>
                                    <p className="text-sm font-bold text-slate-500">Host: <span className="text-slate-900">{ws.host}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTHOR FAQ (Author Insights) - Moved to bottom */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">AUTHOR <span className="text-amber-600">INSIGHTS</span></h2>
                        <p className="text-slate-500">Frequently asked questions about our literary community.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "How are authors selected?", a: "We look for voices that are authentic, brave, and have a unique perspective on the human condition." },
                            { q: "Do you support first-time writers?", a: "Yes! Nearly 40% of our current roster consists of authors who published their debut with us." },
                            { q: "What genres do you specialize in?", a: "While we love all storytelling, we have strong departments in Fiction, Historical Research, and Poetry." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group">
                                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                                    {faq.q} <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h4>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurAuthors;

