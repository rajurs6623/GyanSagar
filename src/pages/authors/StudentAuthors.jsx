import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Sparkles, PenTool, Hash, ArrowRight, Zap, Star, Book, Award, ArrowUpRight, Quote, Activity, Users, Globe, ChevronRight, School, MapPin, Download, X, Heart, MessageCircle, Share2, Eye } from 'lucide-react';
import RealisticBookReader from '../../components/RealisticBookReader';

const studentAuthors = [
    { name: "Aarav Malhotra", age: 14, img: "/images/authors/aarav.png", tag: "Sci-Fi", role: "Lead Researcher", bio: "Aarav has been building worlds since he was 8. His debut novella 'The Last Orbit' has been praised for its technical accuracy.", stats: { stories: 12, readers: "4.5K" }, color: "from-cyan-500/10 to-blue-600/10" },
    { name: "Diya Singh", age: 12, img: "/images/authors/diya.png", tag: "Folklore", role: "Myth Narrator", bio: "Diya brings ancient Indian legends to life for a new generation. Her reimagined myths have won multiple awards.", stats: { stories: 8, readers: "3.2K" }, color: "from-pink-500/10 to-rose-600/10" },
    { name: "Ishaan Gupta", age: 16, img: "/images/authors/ishaan.png", tag: "Eco-Thriller", role: "Green Activist", bio: "Ishaan combines environmental activism with edge-of-the-seat storytelling. His series 'The Oasis' is a classroom favorite.", stats: { stories: 15, readers: "5.8K" }, color: "from-emerald-500/10 to-teal-600/10" },
    { name: "Meera Reddy", age: 10, img: "/images/authors/meera.png", tag: "Animals", role: "Wildlife Whisperer", bio: "Meera writes heartwarming tales about animal friendships that teach empathy and kindness to children worldwide.", stats: { stories: 20, readers: "2.1K" }, color: "from-amber-500/10 to-orange-600/10" },
    { name: "Kabir Sharma", age: 15, img: "/images/authors/kabir.png", tag: "Mystery", role: "Detective Mind", bio: "Kabir is the mastermind behind the 'Logic Lane' series. His mysteries are known for complex puzzles that challenge even adult readers.", stats: { stories: 10, readers: "6.1K" }, color: "from-indigo-500/10 to-blue-700/10" },
    { name: "Zoya Khan", age: 13, img: "/images/authors/zoya.png", tag: "Poetry", role: "Verse Visionary", bio: "Zoya captures the raw emotions of youth through her free-verse poetry. Her collection 'Unspoken' has been translated into three languages.", stats: { stories: 25, readers: "4.8K" }, color: "from-purple-500/10 to-pink-600/10" },
    { name: "Rohan Varma", age: 17, img: "/images/authors/rahul.png", tag: "Historical Fiction", role: "Legacy Keeper", bio: "Rohan meticulously researches Indian history to weave stories of unsung heroes. His work 'The Silent Fortress' is a bestseller.", stats: { stories: 7, readers: "5.2K" }, color: "from-orange-500/10 to-amber-700/10" },
    { name: "Ananya Kapoor", age: 11, img: "/images/authors/ananya.png", tag: "Fantasy", role: "Dream Weaver", bio: "Ananya creates magical realms hidden within modern cities. Her 'Cloud Kingdom' series has captured the imagination of thousands.", stats: { stories: 18, readers: "3.9K" }, color: "from-teal-500/10 to-cyan-600/10" },
    { name: "Aryan Dev", age: 16, img: "/images/authors/vikram.png", tag: "Dystopian", role: "Future Voice", bio: "Aryan explores themes of technology and ethics in a post-apocalyptic India. His dark, gripping prose is both haunting and beautiful.", stats: { stories: 9, readers: "7.4K" }, color: "from-slate-500/10 to-black/10" },
    { name: "Sanya Roy", age: 14, img: "/images/authors/kavita.png", tag: "Contemporary", role: "Urban Soul", bio: "Sanya writes about the daily challenges and joys of being a teenager in a fast-paced city. Her relatable characters feel like best friends.", stats: { stories: 14, readers: "4.2K" }, color: "from-rose-500/10 to-orange-600/10" },
    { name: "Neel Jha", age: 13, img: "/images/authors/sanjay.png", tag: "Sports", role: "Field Narrator", bio: "Neel brings the thrill of the stadium to the page. His stories about teamwork and resilience are inspiring young athletes across the country.", stats: { stories: 11, readers: "3.5K" }, color: "from-blue-500/10 to-indigo-600/10" },
    { name: "Priya Das", age: 15, img: "/images/authors/priya.png", tag: "Horror", role: "Shadow Hunter", bio: "Priya masters the art of psychological horror. Her stories explore the things that go bump in the night with chilling precision.", stats: { stories: 6, readers: "5.9K" }, color: "from-red-500/10 to-purple-800/10" },
    { name: "Arjun Mehta", age: 12, img: "/images/authors/aarav.png", tag: "Adventure", role: "Explorer", bio: "Arjun's tales of mountain expeditions and jungle survival are inspired by his own trekking trips with his family across the Himalayas.", stats: { stories: 9, readers: "2.8K" }, color: "from-green-500/10 to-emerald-700/10" },
    { name: "Kaira Wilson", age: 14, img: "/images/authors/diya.png", tag: "Magic Realism", role: "Enchanted Mind", bio: "Kaira blends the ordinary with the extraordinary, turning mundane school days into magical adventures that resonate with readers of all ages.", stats: { stories: 14, readers: "4.1K" }, color: "from-violet-500/10 to-fuchsia-700/10" },
    { name: "Advait Joshi", age: 16, img: "/images/authors/ishaan.png", tag: "Cyberpunk", role: "Tech Weaver", bio: "Advait envisions a high-tech future for India where ancient traditions meet futuristic AI. His world-building is incredibly immersive.", stats: { stories: 11, readers: "6.7K" }, color: "from-blue-600/10 to-black/10" },
    { name: "Tanya Sen", age: 13, img: "/images/authors/meera.png", tag: "Comedy", role: "Laugh Maker", bio: "Tanya has a unique gift for finding humor in everyday situations. Her series 'The Principal's Chair' is a lighthearted classroom favorite.", stats: { stories: 16, readers: "3.4K" }, color: "from-yellow-400/10 to-orange-500/10" },
    { name: "Samir Gupta", age: 15, img: "/images/authors/kabir.png", tag: "Thriller", role: "Suspense Artist", bio: "Samir's edge-of-the-seat thrillers keep readers guessing until the very last page. He's often compared to the greats of Indian mystery writing.", stats: { stories: 8, readers: "5.5K" }, color: "from-stone-500/10 to-slate-800/10" },
    { name: "Riya Kapoor", age: 11, img: "/images/authors/zoya.png", tag: "Poetry", role: "Soul Poet", bio: "Riya's poems explore the beauty of nature and the simplicity of childhood. Her words bring a sense of peace and reflection to her readers.", stats: { stories: 22, readers: "2.9K" }, color: "from-sky-400/10 to-blue-500/10" },
    { name: "Vikrant Singh", age: 17, img: "/images/authors/rahul.png", tag: "Drama", role: "Stage Master", bio: "Vikrant writes powerful stage plays and dramatic narrations that tackle social themes with maturity and deep emotional impact.", stats: { stories: 5, readers: "8.2K" }, color: "from-rose-600/10 to-red-900/10" },
    { name: "Ishani Roy", age: 12, img: "/images/authors/ananya.png", tag: "Space Opera", role: "Stellar Voyager", bio: "Ishani's sprawling space epics take readers to distant galaxies and unknown civilizations. Her imagination knows no earthly bounds.", stats: { stories: 13, readers: "4.6K" }, color: "from-blue-900/10 to-indigo-950/10" },
    { name: "Nakul Verma", age: 14, img: "/images/authors/vikram.png", tag: "Retro", role: "Nostalgia King", bio: "Nakul writes stories set in the India of the 1980s, inspired by his parents' childhood tales. His work is a beautiful bridge between generations.", stats: { stories: 10, readers: "3.8K" }, color: "from-sepia-500/10 to-orange-900/10" },
    { name: "Aisha Bakshi", age: 13, img: "/images/authors/kavita.png", tag: "Romance", role: "Heart Narrator", bio: "Aisha's innocent and sweet stories about friendship and first crushes are deeply relatable to middle-schoolers everywhere.", stats: { stories: 12, readers: "4.4K" }, color: "from-pink-300 text-pink-600 to-rose-400" },
    { name: "Devansh Nair", age: 16, img: "/images/authors/sanjay.png", tag: "Realism", role: "Truth Seeker", bio: "Devansh writes gritty, realistic stories about the struggles of street children in major cities, aiming to raise awareness and empathy.", stats: { stories: 7, readers: "6.3K" }, color: "from-gray-600/10 to-zinc-900/10" },
    { name: "Maya Iyer", age: 15, img: "/images/authors/priya.png", tag: "Gothic", role: "Dark Soul", bio: "Maya specializes in gothic tales set in ancient Indian mansions. Her atmosphere-heavy writing is both beautiful and unsettling.", stats: { stories: 9, readers: "5.1K" }, color: "from-purple-950/10 to-black/10" }
];

const StudentCard = ({ author, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            style={{ perspective: "1000px" }}
            className="group relative flex flex-col bg-white/70 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl overflow-hidden cursor-pointer"
            onClick={() => onClick(author)}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${author.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative h-80 overflow-hidden">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="relative p-6 space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{author.name}</h3>
                    <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">{author.tag}</p>
                </div>

                <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed min-h-[4.5rem]">
                    {author.bio}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/50">
                    <div className="text-center">
                        <Book className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                        <p className="text-xs font-bold text-slate-700">{author.stats.stories}</p>
                        <p className="text-[10px] text-slate-400 uppercase">Stories</p>
                    </div>
                    <div className="text-center">
                        <Award className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                        <p className="text-xs font-bold text-slate-700">{index + 1}</p>
                        <p className="text-[10px] text-slate-400 uppercase">Awards</p>
                    </div>
                    <div className="text-center">
                        <Star className="w-5 h-5 mx-auto text-yellow-400 mb-1" />
                        <p className="text-xs font-bold text-slate-700">{author.stats.readers}</p>
                        <p className="text-[10px] text-slate-400 uppercase">Readers</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Placeholder for AuthorDetailModal - assuming it exists elsewhere or is a simple modal
const AuthorDetailModal = ({ author, isOpen, onClose }) => {
    if (!isOpen || !author) return null;
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-900">
                            <X className="w-6 h-6" />
                        </button>
                        <div className="flex items-center gap-6 mb-6">
                            <img src={author.img} alt={author.name} className="w-24 h-24 rounded-full object-cover shadow-lg" />
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">{author.name}</h3>
                                <p className="text-md font-semibold text-amber-600 uppercase tracking-wider">{author.tag} • {author.role}</p>
                            </div>
                        </div>
                        <p className="text-slate-700 text-lg leading-relaxed mb-6">{author.bio}</p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <Book className="w-6 h-6 mx-auto text-slate-400 mb-2" />
                                <p className="text-sm font-bold text-slate-700">{author.stats.stories}</p>
                                <p className="text-xs text-slate-400 uppercase">Stories</p>
                            </div>
                            <div>
                                <Star className="w-6 h-6 mx-auto text-yellow-400 mb-2" />
                                <p className="text-sm font-bold text-slate-700">{author.stats.readers}</p>
                                <p className="text-xs text-slate-400 uppercase">Readers</p>
                            </div>
                            <div>
                                <Users className="w-6 h-6 mx-auto text-blue-400 mb-2" />
                                <p className="text-sm font-bold text-slate-700">{author.age}</p>
                                <p className="text-xs text-slate-400 uppercase">Age</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


const StudentAuthors = () => {
    const [selectedAuthor, setSelectedAuthor] = React.useState(null);
    const [selectedBook, setSelectedBook] = React.useState(null);

    return (
        <div className="min-h-screen bg-white">
            <AuthorDetailModal
                author={selectedAuthor}
                isOpen={!!selectedAuthor}
                onClose={() => setSelectedAuthor(null)}
            />
            <RealisticBookReader
                author={selectedBook}
                isOpen={!!selectedBook}
                onClose={() => setSelectedBook(null)}
            />
            {/* REFINED FULL SCREEN HERO WITH FIXED BG */}
            <section className="relative h-[92vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: "url('/images/authors/student_voices_hero.png')" }}
                />
                <div className="absolute inset-0 bg-black/50 z-10" />

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full text-center">
                    <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                        <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Author Spotlight</span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 italic leading-tight drop-shadow-2xl">
                            Student <span className="text-amber-400">Voices</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-white/80 text-lg md:text-2xl font-light italic leading-relaxed">
                            "Meet the students who are changing the world with their amazing stories. One word at a time."
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent" />
                </motion.div>
            </section>

            {/* BEST STORY CHOICE DEEP DIVE - LIGHT PREMIUM UI */}
            <section className="py-16 bg-white text-slate-900 overflow-hidden relative border-y border-slate-100">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent)]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-3/5">
                            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="space-y-6">
                                <div className="inline-flex items-center gap-4">
                                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-black text-white shadow-lg shadow-amber-500/20 text-sm">#1</div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">Best Story Choice</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-serif italic leading-none">The Crimson <br /><span className="text-amber-500">Skies</span></h2>
                                <p className="text-xl text-slate-500 font-light italic leading-relaxed max-w-2xl">
                                    "A great space adventure by 14-year-old Aarav Malhotra about living on new planets."
                                </p>
                                <div className="flex gap-12 pt-6 border-t border-slate-100">
                                    <div>
                                        <div className="text-3xl font-black text-slate-900">12.5K</div>
                                        <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">Want to Read</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-slate-900">48</div>
                                        <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">Big Awards</p>
                                    </div>
                                    <div className="flex gap-4 items-center pl-6 border-l border-slate-100">
                                        <button onClick={() => setSelectedBook(studentAuthors[0])} className="px-8 py-4 bg-slate-900 text-white font-black uppercase text-[10px] rounded-2xl hover:bg-amber-500 transition-all shadow-xl shadow-slate-900/10">Read Now</button>
                                        <button onClick={() => setSelectedAuthor(studentAuthors[0])} className="px-8 py-4 border border-slate-200 text-slate-900 font-black uppercase text-[10px] rounded-2xl hover:bg-slate-50 transition-all">Details</button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-2/5 relative">
                            <motion.div initial={{ scale: 0.9, rotate: 5 }} whileInView={{ scale: 1, rotate: 0 }} className="relative z-10">
                                <div className="p-4 bg-slate-50 rounded-[3.5rem] border border-slate-100 shadow-2xl">
                                    <img src="/images/authors/aarav.png" className="w-full h-[300px] object-cover rounded-[2.5rem] shadow-inner" alt="aarav" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-amber-500 p-6 rounded-[2rem] shadow-2xl hidden md:block">
                                    <Quote className="w-6 h-6 text-white mb-2" />
                                    <p className="text-white font-black italic text-sm">"The human heart is the paint."</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEAMLESS TRANSITION TICKER */}
            <section className="py-20 bg-white border-b border-slate-100 relative z-30">
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-16 py-2">
                        {[
                            "10K+ STUDENT VOICES", "500+ SCHOOL PARTNERS", "1500+ STORIES PUBLISHED", "50+ LITERARY AWARDS",
                            "10K+ STUDENT VOICES", "500+ SCHOOL PARTNERS", "1500+ STORIES PUBLISHED", "50+ LITERARY AWARDS"
                        ].map((text, i) => (
                            <span key={i} className="text-4xl font-black text-transparent stroke-slate-200 stroke-1 hover:text-amber-600 hover:stroke-amber-600 transition-all cursor-default opacity-50 uppercase tracking-widest">
                                {text}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* STUDENT LEGENDS - Full Expanded Dataset */}
            <section className="py-24 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-5xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Student <span className="text-amber-600">Stars</span></h2>
                            <p className="text-slate-500 font-serif italic text-xl">Our top young writers this year</p>
                        </div>
                        <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-amber-600 transition-all shadow-xl shadow-slate-900/10">
                            Download Census
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {studentAuthors.slice(0, 8).map((author, index) => (
                            <StudentCard key={author.name} author={author} index={index} onClick={setSelectedBook} />
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: MONTHLY GLOBAL LEADERBOARD (LIST UI) */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-1 space-y-8">
                            <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none text-slate-900">Top <br /><span className="text-amber-600">Writers</span></h2>
                            <p className="text-slate-500 text-lg leading-relaxed font-light italic border-l-4 border-amber-500 pl-8">
                                "See who is leading the way based on how many people read their stories."
                            </p>
                            <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
                                <h4 className="text-amber-600 text-4xl font-black mb-1">15.4K</h4>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Students Writing This Month</p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-4">
                            {studentAuthors.slice(0, 6).map((author, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 20 }}
                                    className="flex items-center justify-between p-6 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 rounded-3xl transition-all cursor-default group"
                                >
                                    <div className="flex items-center gap-8">
                                        <span className="text-4xl font-black text-slate-200 group-hover:text-amber-500 transition-colors">0{i + 1}</span>
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                            <img src={author.img} className="w-full h-full object-cover" alt="avatar" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900">{author.name}</h4>
                                            <p className="text-xs text-amber-600 font-bold uppercase tracking-widest">{author.tag}</p>
                                        </div>
                                    </div>
                                    <div className="text-right hidden md:block">
                                        <div className="text-sm font-black text-slate-900">{author.stats.readers} Readers</div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Level {10 - i} Master</div>
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-amber-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* BENTO GRID LAYOUT */}
            <section className="py-32 px-4 max-w-7xl mx-auto bg-white">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">The <span className="text-amber-600">Bento</span> Vault</h2>
                    <p className="text-slate-500 font-serif hidden md:block italic">Scanning Student Talent</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
                    <div onClick={() => setSelectedBook(studentAuthors[0])} className="col-span-2 row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl cursor-pointer">
                        <img src={studentAuthors[0].img} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" alt="aarav" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <span className="px-4 py-1 bg-amber-500 rounded-full text-[10px] font-black uppercase mb-3 block w-fit">Featured Author</span>
                            <h3 className="text-4xl font-black mb-1">{studentAuthors[0].name}</h3>
                            <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Age {studentAuthors[0].age} • Lead Researcher</p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-1 rounded-[2.5rem] bg-amber-500 p-8 flex flex-col justify-between text-white shadow-xl hover:-rotate-2 transition-transform">
                        <Zap className="w-10 h-10" />
                        <div>
                            <p className="text-4xl font-black tracking-tighter">150K+</p>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Global Readers</p>
                        </div>
                    </div>

                    <div onClick={() => setSelectedBook(studentAuthors[1])} className="col-span-1 row-span-2 relative rounded-[3rem] bg-slate-100 overflow-hidden group border border-slate-200 shadow-lg cursor-pointer">
                        <img src={studentAuthors[1].img} className="w-full h-full object-cover transition-all duration-700" alt="diya" />
                        <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-md text-amber-600">
                            <Sparkles className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 row-span-1 rounded-[2.5rem] bg-slate-900 p-10 flex items-center justify-center text-white relative shadow-2xl">
                        <p className="text-2xl font-black italic text-center leading-tight tracking-tight">"Storytelling <br />Refined."</p>
                        <div className="absolute -top-3 -right-3 w-14 h-14 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center shadow-lg uppercase text-[10px] font-black rotate-12">VOICE</div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: LIBRARY OF VOICES (GRID) */}
            <section className="py-32 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-6xl font-black uppercase tracking-tighter text-slate-900 italic">Book <span className="text-amber-500">Colletion</span></h2>
                        <p className="text-slate-500 text-xl font-serif italic max-w-2xl mx-auto">Explore many books written by students, from magic stories to exciting mysteries.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {studentAuthors.slice(0, 18).map((author, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedBook(author)}
                                className="space-y-4 cursor-pointer group"
                            >
                                <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${author.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
                                    <img src={author.img} className="w-full h-full object-cover mix-blend-multiply" alt="book" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                                            <ArrowUpRight className="text-amber-600" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h5 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">{author.name}</h5>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{author.tag}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-20">
                        <button className="px-16 py-6 bg-slate-900 text-white font-black uppercase tracking-widest rounded-3xl hover:bg-amber-600 transition-all shadow-2xl">
                            Browse All 1,500+ Books
                        </button>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: IMPACT STORIES (Bento/Text Mix) */}
            <section className="py-32 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <span className="px-6 py-2 bg-amber-100 text-amber-600 font-black text-xs uppercase tracking-widest rounded-full">Real World Impact</span>
                            <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-[0.85] text-slate-900">Stories and <br /><span className="text-amber-600">Influence</span></h2>
                            <div className="space-y-8">
                                {[
                                    { title: "National Curriculum Integration", desc: "Three of our student-authored books are now part of the recommended reading list in over 40 schools.", icon: <Book className="text-amber-500" /> },
                                    { title: "Literary Fellowship Grant", desc: "Announcing the 2024 Fellowship worth ₹5,00,000 for top performing student authors.", icon: <Award className="text-amber-500" /> },
                                    { title: "Film Optioning Success", desc: "Zoya Khan's poetry collection is currently being adapted into a short-film series.", icon: <Rocket className="text-amber-500" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-amber-500 transition-colors">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                            <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6 pt-12">
                                    <img src="/images/authors/desk_creative.png" className="rounded-[3rem] shadow-2xl" alt="impact1" />
                                    <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        <div className="relative z-10 transition-colors group-hover:text-slate-900">
                                            <span className="text-5xl font-black italic leading-none">92%</span>
                                            <p className="text-sm font-bold uppercase tracking-widest mt-4 opacity-60">Success Rate in Publishing</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-10 bg-amber-500 text-slate-900 rounded-[3rem] shadow-2xl">
                                        <span className="text-5xl font-black italic leading-none">500+</span>
                                        <p className="text-sm font-bold uppercase tracking-widest mt-4 opacity-60">Mentorship Hours Provided</p>
                                    </div>
                                    <img src="/images/authors/digital_canvas.png" className="rounded-[3rem] shadow-2xl" alt="impact2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: LIVE COMMUNITY PULSE (ACTIVITY FEED UI) */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                        <div className="space-y-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                <Activity className="w-4 h-4 animate-pulse" /> Live Community Pulse
                            </div>
                            <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none text-slate-900">
                                What's <br />
                                <span className="text-amber-500">Happening</span>
                            </h2>
                            <p className="text-slate-500 text-xl font-serif leading-relaxed italic border-l-4 border-slate-100 pl-8">
                                "Everything is active! Watch students working together and finishing their books right now."
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                    <Users className="w-8 h-8 text-amber-500 mb-4" />
                                    <div className="text-4xl font-black text-slate-900">842</div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Writers Online Now</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                    <Globe className="w-8 h-8 text-amber-500 mb-4" />
                                    <div className="text-4xl font-black text-slate-900">12k</div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Edits Today</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 relative h-[600px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none" />
                            {[
                                { user: "Ishaan G.", action: "Published 'The Oasis' Chapter 15", time: "2 min ago", icon: <Rocket className="w-4 h-4" /> },
                                { user: "Diya S.", action: "Reached 5,00,000 Global Readers", time: "5 min ago", icon: <Star className="text-amber-500" /> },
                                { user: "Zoya K.", action: "Submission accepted for Film Series", time: "12 min ago", icon: <Award className="text-blue-500" /> },
                                { user: "Aarav M.", action: "New Peer Review from New York", time: "18 min ago", icon: <Users className="text-emerald-500" /> },
                                { user: "Sanya R.", action: "Started World Building for 'Civitas'", time: "25 min ago", icon: <PenTool className="text-purple-500" /> },
                                { user: "Neel J.", action: "Milestone: 100th Daily Streak", time: "32 min ago", icon: <Zap className="text-amber-500" /> },
                                { user: "Rohan V.", action: "Archived Historical Metadata", time: "45 min ago", icon: <Book className="text-slate-500" /> }
                            ].map((feed, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:border-amber-500 transition-all cursor-default"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-colors">
                                            {feed.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-slate-900 group-hover:text-amber-600 transition-colors">{feed.user}</h4>
                                            <p className="text-xs text-slate-500 font-medium italic">{feed.action}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{feed.time}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* REDESIGNED GENRE DOMINANCE: GLASS ANALYTICS UI - COMPACT */}
            <section className="py-12 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.05),transparent)]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
                        <div className="max-w-xl text-center md:text-left">
                            <span className="text-amber-600 font-black text-xs uppercase tracking-[0.4em] mb-2 block">Story Tracker</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                                Top <span className="text-amber-500">Genres</span>
                            </h2>
                        </div>
                        <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hidden lg:block">
                            <p className="text-slate-400 font-serif italic text-sm max-w-xs">
                                "See what kinds of stories students are writing most."
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* LEFT: VISUAL PROGRESS CARDS */}
                        <div className="lg:col-span-7 space-y-4">
                            {[
                                { name: "Speculative Fiction", val: "88%", color: "amber" },
                                { name: "Historical Narratives", val: "72%", color: "slate" },
                                { name: "Contemporary Realism", val: "65%", color: "amber" },
                                { name: "Techno-Thriller", val: "48%", color: "slate" },
                                { name: "Classical Verse", val: "35%", color: "amber" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-5 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm hover:shadow-lg hover:border-amber-200 transition-all group"
                                >
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-1.5 h-6 ${stat.color === 'amber' ? 'bg-amber-500' : 'bg-slate-900'} rounded-full`} />
                                            <span className="text-lg font-black text-slate-900 uppercase italic tracking-tight">{stat.name}</span>
                                        </div>
                                        <span className="text-slate-400 text-xs font-bold">{stat.val} Reach</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: stat.val }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className={`h-full ${stat.color === 'amber' ? 'bg-amber-500' : 'bg-slate-900'}`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* RIGHT: INSIGHT GLASS BOX */}
                        <div className="lg:col-span-5">
                            <div className="space-y-6">
                                <div className="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 blur-[80px] opacity-20" />
                                    <h3 className="text-3xl font-black italic leading-tight mb-4">Summary of <br /><span className="text-amber-500">Insights</span></h3>
                                    <p className="text-white/60 text-base font-light leading-relaxed italic mb-8">
                                        Our data shows a massive shift towards **Speculative Fiction** among 13-16 year olds.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                                        <div>
                                            <p className="text-amber-500 font-black text-3xl italic">+24%</p>
                                            <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1">Genre Growth</p>
                                        </div>
                                        <div>
                                            <p className="text-amber-500 font-black text-3xl italic">5.2M</p>
                                            <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1">Word Count</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-amber-500 rounded-[2rem] text-slate-900">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                            <Activity className="w-4 h-4 text-amber-600" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Status Check</p>
                                            <p className="text-base font-bold italic">Analytics Engine Stable</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: DIGITAL ARCHIVES (TABULAR DATA UI) */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">Our Story <br /><span className="text-amber-500">Collection</span></h2>
                            <p className="text-slate-500 font-serif italic text-xl mt-4">A complete list of all active student books and papers.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-slate-100 text-slate-900 font-bold uppercase text-[10px] tracking-widest rounded-xl hover:bg-slate-200 transition-all">CSV Export</button>
                            <button className="px-8 py-4 bg-slate-100 text-slate-900 font-bold uppercase text-[10px] tracking-widest rounded-xl hover:bg-slate-200 transition-all flex items-center gap-2">
                                <Download className="w-4 h-4" /> PDF Report
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-slate-900 text-left">
                                    <th className="py-6 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Author Name</th>
                                    <th className="py-6 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Affiliated School</th>
                                    <th className="py-6 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Manuscript Title</th>
                                    <th className="py-6 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Word Count</th>
                                    <th className="py-6 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentAuthors.slice(0, 10).map((author, i) => (
                                    <tr key={i} className="border-b border-slate-100 group hover:bg-slate-50 transition-colors">
                                        <td className="py-8 px-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                                                    <img src={author.img} className="w-full h-full object-cover" alt="avatar" />
                                                </div>
                                                <span className="font-bold text-slate-900">{author.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-8 px-4 text-slate-500 italic font-serif">
                                            {author.name.split(' ')[0]} International Acad.
                                        </td>
                                        <td className="py-8 px-4">
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-lg mr-3">Draft</span>
                                            <span className="text-slate-900 font-medium">Beyond the Horizon v2</span>
                                        </td>
                                        <td className="py-8 px-4 text-slate-500 font-mono text-xs">
                                            {Math.floor(Math.random() * 50000 + 5000).toLocaleString()} words
                                        </td>
                                        <td className="py-8 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-emerald-600 text-[10px] font-black uppercase tracking-widest">Active Editing</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: GLOBAL SCHOOL NETWORK (INSTITUTIONAL UI) */}
            <section className="py-32 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-amber-600">
                                <School className="w-8 h-8" />
                                <span className="text-xs font-black uppercase tracking-widest">Our School Partners</span>
                            </div>
                            <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-tight text-slate-900">Great <br /><span className="text-amber-500">Schools</span></h2>
                            <p className="text-slate-500 text-lg leading-relaxed font-light italic">
                                "Our students come from 500+ famous schools all over India and the world."
                            </p>
                            <button className="px-12 py-5 border-2 border-slate-900 text-slate-900 font-black uppercase text-xs rounded-2xl hover:bg-slate-900 hover:text-white transition-all">Partner With Us</button>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                { name: "The Doon School", loc: "Dehradun, India", authors: 12, impact: "Top Folklore Hub" },
                                { name: "Eton College", loc: "Windsor, UK", authors: 8, impact: "Historical Legends" },
                                { name: "DPS International", loc: "New Delhi, India", authors: 24, impact: "Sci-Fi Greenhouse" },
                                { name: "St. Xavier's Collegiate", loc: "Kolkata, India", authors: 15, impact: "Contemporary Prose" },
                                { name: "Bishop Cotton School", loc: "Shimla, India", authors: 9, impact: "Nature & Poetry" },
                                { name: "The Lawrence School", loc: "Sanawar, India", authors: 11, impact: "Adventure Writing" }
                            ].map((school, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-colors">
                                                <MapPin className="w-5 h-5 text-slate-400 group-hover:text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{school.name}</h4>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{school.loc}</p>
                                            </div>
                                        </div>
                                        <span className="text-3xl font-black text-slate-200 group-hover:text-slate-400 transition-colors">{school.authors}</span>
                                    </div>
                                    <div className="h-px bg-slate-200" />
                                    <p className="text-xs text-slate-500 font-medium italic mt-3 group-hover:text-slate-700 transition-colors">{school.impact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentAuthors;
