import React, { useState } from 'react';
import {
    PenTool, Lightbulb, Keyboard, BookOpen, Quote,
    Sparkles, Brain, Feather, Layers, Map, Stars, Star,
    MessageCircle, Type, Navigation, Target, ChevronRight
} from 'lucide-react';

const IntroductionToWriting = () => {
    const milestones = [
        {
            year: "Step 1",
            title: "Find Your Spark",
            description: "Writing begins with a single idea. It could be a dream, a memory, or a 'what if' question that pops into your head while daydreaming.",
            icon: <Lightbulb className="w-8 h-8 text-white" />
        },
        {
            year: "Step 2",
            title: "Plan Your World",
            description: "Before you start typing, imagine who lives in your story, where they are, and what exciting problem they need to solve.",
            icon: <Map className="w-8 h-8 text-white" />
        },
        {
            year: "Step 3",
            title: "The First Draft",
            description: "Just write! Don't worry about spelling or grammar yet. Let your imagination run wild and get your ideas out of your head and onto the paper.",
            icon: <PenTool className="w-8 h-8 text-white" />
        },
        {
            year: "Step 4",
            title: "Review & Refine",
            description: "Read your story out loud. Add sensory details, fix any plot holes, and make your characters shine even brighter.",
            icon: <Brain className="w-8 h-8 text-white" />
        },
        {
            year: "Step 5",
            title: "Polishing",
            description: "This is where you check your punctuation, capitalization, and grammar to make sure your story is easy for others to read.",
            icon: <Type className="w-8 h-8 text-white" />
        },
        {
            year: "Step 6",
            title: "Share with the World",
            description: "The best part of writing is sharing it! Show it to a friend, read it to your family, or publish it for everyone to enjoy.",
            icon: <Stars className="w-8 h-8 text-white" />
        }
    ];

    const mentorshipFeatures = [
        {
            title: "Express Your True Self",
            description: "Writing is a superpower that lets you share exactly what you're thinking and feeling, building confidence in your own unique voice."
        },
        {
            title: "Organize Your Thoughts",
            description: "Putting words on paper helps clear your mind and arrange messy, complicated ideas into clear, logical stories and arguments."
        },
        {
            title: "Create Infinite Worlds",
            description: "With nothing but a pen and paper or a keyboard, you can build entire universes that didn't exist a minute ago."
        }
    ];

    const teamMembers = [
        { name: "Characters", role: "The Who", icon: <MessageCircle className="w-8 h-8 text-white" />, color: "from-blue-500 to-cyan-400", desc: "The heroes, the villains, and the friends. Every great story needs interesting people (or aliens, or animals!) to follow.", image: "/images/learning/Elements-of-story-character.jpg" },
        { name: "Setting", role: "The Where & When", icon: <Map className="w-8 h-8 text-white" />, color: "from-purple-500 to-pink-500", desc: "A spooky castle, an underwater city, or a normal middle school. This is the stage where your story happens.", image: "/images/learning/Element_of-stort-Setting.jpg" },
        { name: "Plot", role: "The What Happens", icon: <Navigation className="w-8 h-8 text-white" />, color: "from-amber-400 to-orange-500", desc: "The thrilling events, the big problem, and the exciting climax. It's the journey your characters go on.", image: "/images/learning/Elements-of-story-plot.jpg" },
        { name: "Theme", role: "The Big Idea", icon: <Target className="w-8 h-8 text-white" />, color: "from-emerald-400 to-teal-500", desc: "The hidden lesson or meaning in your story, like 'friendship conquers all' or 'bravery comes in small packages'.", image: "/images/learning/Element-of-story-theam.jpg" }
    ];

    const heritageStats = [
        { year: "Rule 1", label: "Read Every Day", icon: <BookOpen className="w-6 h-6 text-amber-500" /> },
        { year: "Rule 2", label: "Keep a Journal", icon: <Feather className="w-6 h-6 text-indigo-500" /> },
        { year: "Rule 3", label: "Don't Fear Mistakes", icon: <Layers className="w-6 h-6 text-rose-500" /> }
    ];

    const printSteps = [
        { title: "Fiction", desc: "Stories built entirely from imagination, like fantasy and sci-fi.", icon: <Sparkles className="w-10 h-10" />, colorFront: "text-amber-500", bgBack: "bg-amber-500", iconBack: "bg-amber-600/50" },
        { title: "Non-Fiction", desc: "Writing based on true facts, real people, and actual events.", icon: <BookOpen className="w-10 h-10" />, colorFront: "text-emerald-500", bgBack: "bg-emerald-500", iconBack: "bg-emerald-600/50" },
        { title: "Poetry", desc: "Creative writing using rhythm, rhyme, and beautiful imagery.", icon: <Feather className="w-10 h-10" />, colorFront: "text-purple-500", bgBack: "bg-purple-500", iconBack: "bg-purple-600/50" }
    ];

    const footprintData = [
        { state: "Brainstorming", schools: "Phase 1", students: "Ideas", focus: "Mind maps, lists, and doodles. This is where you catch your ideas before they fly away! Every wild thought is welcome here." },
        { state: "Drafting", schools: "Phase 2", students: "Writing", focus: "Putting sentences together to form paragraphs. It doesn't have to be perfect; the goal is simply to get the story out." },
        { state: "Revising", schools: "Phase 3", students: "Improving", focus: "Making big changes. Moving paragraphs around, adding more details, or changing the ending to make it more exciting." },
        { state: "Editing", schools: "Phase 4", students: "Fixing", focus: "The cleanup crew! Fixing spelling, checking punctuation, and making sure the grammar is correct before anyone reads it." }
    ];

    const [activeFootprint, setActiveFootprint] = useState(0);

    return (
        <div className="pt-0 pb-20 bg-[#F8FAFC] min-h-screen font-sans">
            {/* Hero Banner Section */}
            <div className="relative w-full bg-[#0F172A] py-36 px-4 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/learning/Writing-Banner.jpg"
                        alt="Writing Banner"
                        className="w-full h-full object-cover opacity-60 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
                    <div className="inline-flex items-center gap-2 mb-8 border border-blue-500/30 bg-blue-500/10 px-6 py-2 rounded-full backdrop-blur-md">
                        <PenTool className="w-5 h-5 text-blue-400" />
                        <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">Welcome to the World of Words</p>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
                        Introduction to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-500">Writing</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
                        Discover the magic of putting your imagination onto paper. Learn how ordinary words can build extraordinary worlds.
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
                            Discover Your Voice
                        </div>
                        <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">What Exactly <br />Is <span className="text-emerald-500">Writing?</span></h2>
                        <div className="w-20 h-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                At its core, writing is simply thinking on paper. It is the ability to take the invisible thoughts swirling around in your mind and make them visible for the rest of the world.
                            </p>
                            <p>
                                Whether you're making up a thrilling story about dragons, keeping a diary about your day, or explaining how a volcano works for a science project, writing is your most powerful tool to communicate. <strong>It gives you a voice that can travel across time and space.</strong>
                            </p>
                            <p>
                                There's no single "right way" to write a story. You are the boss of the blank page!
                            </p>
                        </div>
                    </div>
                    {/* 3D Image Card */}
                    <div className="lg:w-1/2 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-400 rounded-[3rem] blur-3xl opacity-30"></div>
                        <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100 transform hover:scale-105 transition-transform duration-700">
                            <img
                                src="/images/learning/Writing-Tools.jpg"
                                alt="Writing Tools"
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-slate-100 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/learning/powerOfWords.jpg"
                                alt="power of words"
                                className="w-full h-[500px] rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center gap-2 mb-4 text-blue-500 font-bold uppercase tracking-widest text-sm">
                            <Sparkles className="w-5 h-5" />
                            Why We Write
                        </div>
                        <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">The Power of <br /><span className="text-blue-500">Words</span></h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full mb-8"></div>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                Writing is more than just passing English class. It is the foundation of almost everything we do. From the code that built your favorite video game, to the script of the movie you watched last weekend, someone had to write it first.
                            </p>
                            <p>
                                When you write, you become an active creator rather than just a consumer. Instead of just playing games or watching TV, you're making something completely new that belongs entirely to you.
                            </p>
                        </div>
                        <div className="mt-10 p-8 bg-blue-50 shadow-inner rounded-3xl border border-blue-100 relative overflow-hidden">
                            <BookOpen className="w-12 h-12 text-blue-500 mb-4 opacity-50 absolute top-4 right-4" />
                            <p className="text-2xl font-bold text-slate-800 italic relative z-10">
                                "A reader lives a thousand lives before he dies. But a writer is the one who created all those lives for them."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Benefits Section */}
            <div className="bg-slate-900 py-28 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/about/story_team_3d_1772875597417.png')] bg-cover opacity-10 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <p className="text-amber-400 font-bold tracking-widest uppercase mb-4 text-sm">Benefits of Writing</p>
                        <h2 className="text-5xl font-black mb-6">Why Start Writing?</h2>
                        <div className="w-20 h-1 bg-amber-500 rounded-full mb-8"></div>
                        <p className="text-xl text-slate-300 font-light mb-10 leading-relaxed">
                            Writing frequently does more than just make you a better speller. It actually changes how your brain processes the world around you, making you a better thinker, speaker, and problem-solver.
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
                            src="/images/learning/Why-Start-Writing.jpg"
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
                        <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">The Writing Journey</h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                            No one writes a perfect book on their first try! Here is the step-by-step process that every author uses, from beginners to famous professionals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative group perspective-[1000px] h-80">
                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col items-center justify-center text-center">
                                        <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                                            {milestone.icon}
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-200 mb-2 drop-shadow-sm">{milestone.year}</h3>
                                        <h4 className="text-2xl font-bold text-slate-800">{milestone.title}</h4>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center justify-center text-center border border-slate-700">
                                        <h4 className="text-2xl font-bold text-cyan-400 mb-4">{milestone.title}</h4>
                                        <p className="text-slate-300 text-lg leading-relaxed font-light">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Good Habits Section */}
            <div className="bg-slate-900 py-28 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600 rounded-full blur-[150px] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-rose-400 font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-rose-500 underline-offset-8">Best Practices</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Habits of Great <br /><span className="text-rose-500">Writers</span></h2>
                        <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                            Want to become a master storyteller? Like any skill, such as playing basketball or learning the piano, writing takes practice. Try setting up these healthy habits!
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
                            <h4 className="text-2xl font-black mb-2">Read A Lot</h4>
                            <p className="text-white/80 font-light">The secret formula to great writing? Reading books by great writers!</p>
                        </div>
                        <div className="bg-white p-8 rounded-[3rem] shadow-2xl relative group overflow-hidden h-[300px] flex flex-col justify-end border border-slate-800/10">
                            <BookOpen className="absolute top-10 right-10 w-20 h-20 text-slate-100 group-hover:-rotate-12 transition-transform" />
                            <h4 className="text-2xl font-black mb-2 text-slate-900">Be Observant</h4>
                            <p className="text-slate-500 font-light">Look closely at the world around you. Notice sounds, smells, and colors.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Types of Writing */}
            <div className="bg-white py-28 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Choose Your <span className="text-indigo-600">Genre</span></h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            There are many different paths a writer can take. Which one of these styles excites you the most?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-slate-900">
                        {printSteps.map((step, idx) => (
                            <div key={idx} className="relative group perspective-[1000px] h-96">
                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 [backface-visibility:hidden] p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center shadow-lg">
                                        <div className={`w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-6 ${step.colorFront}`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold">{step.title}</h3>
                                    </div>
                                    {/* Back */}
                                    <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] ${step.bgBack} rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl`}>
                                        <div className={`w-16 h-16 ${step.iconBack} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                                            {step.icon}
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                                        <p className="text-white/90 font-light leading-relaxed text-lg">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* NEW UI: Hover Expandable Team Cards - Adapted for Elements */}
            <div className="bg-slate-50 py-28 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Pieces of the Puzzle</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Elements of a Story</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[400px]">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={idx}
                                className={`relative flex-1 rounded-[2rem] overflow-hidden group hover:flex-[3] transition-all duration-1000 ease-in-out cursor-pointer bg-slate-900 border border-slate-200`}
                            >
                                <div className="absolute inset-0">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                                </div>
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-60 mix-blend-color transition-opacity duration-700`}></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 transition-colors duration-500 border border-white/20">
                                        {member.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white whitespace-nowrap drop-shadow-lg">{member.name}</h3>
                                    <p className="text-white/80 font-medium mb-4 whitespace-nowrap drop-shadow-md">{member.role}</p>

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

            {/* Interactive Accordion - Adapted for Writing Phases */}
            <div className="bg-white py-28 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-200 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 relative z-10">
                    <div className="lg:w-1/3">
                        <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block">How We Work</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">Phases of Writing</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-8"></div>
                        <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                            Did you know that writers actually spend more time editing and revising than they do coming up with the first draft? It's true!
                        </p>
                        <p className="text-lg text-slate-600 font-light leading-relaxed">
                            Click on each phase to discover what happens during the different stages of creating a book.
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
                                            <Navigation className="w-6 h-6" />
                                        </div>
                                        <h3 className={`text-2xl font-bold transition-colors duration-500 ${activeFootprint === idx ? 'text-emerald-600' : 'text-slate-700'}`}>
                                            {data.state}
                                        </h3>
                                    </div>
                                    <div className={`transition-transform duration-500 ${activeFootprint === idx ? 'rotate-180' : 'rotate-0'}`}>
                                        <ChevronRight className={`w-6 h-6 ${activeFootprint === idx ? 'text-emerald-500' : 'text-slate-400'}`} />
                                    </div>
                                </div>

                                <div className={`grid transition-all duration-500 ease-in-out ${activeFootprint === idx ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <p className="text-slate-400 font-medium uppercase text-xs mb-1">Stage</p>
                                                <p className="text-3xl font-black text-slate-800">{data.schools}</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 font-medium uppercase text-xs mb-1">Action</p>
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

            {/* Ready to Star Section */}
            <div className="bg-indigo-950 py-32 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500 rounded-full blur-[150px] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-20 relative z-10">
                    <div className="md:w-1/2">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Ready to Begin <span className="text-cyan-400">Your Story?</span></h2>
                        <div className="w-24 h-1 bg-cyan-400 mb-8"></div>
                        <p className="text-xl text-indigo-200 font-light mb-10 leading-relaxed">
                            You've learned the basics, explored the process, and discovered the elements of story. The blank page is waiting for your unique voice and brilliant ideas.
                        </p>
                        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 font-extrabold py-5 px-12 rounded-full shadow-2xl transform hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all duration-300 text-xl tracking-wide">
                            Open The Writer Pad
                        </button>
                    </div>
                    <div className="md:w-1/2 relative">
                        <img
                            src="/images/learning/Ready-to-Begin.jpg"
                            alt="3D Floating Notebook"
                            className="relative w-full max-w-lg rounded-2xl mx-auto drop-shadow-[0_0_80px_rgba(6,182,212,0.3)] transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IntroductionToWriting;
