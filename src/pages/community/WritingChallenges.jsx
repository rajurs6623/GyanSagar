import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Sparkles, 
  BookOpen, 
  Image as ImageIcon, 
  Clock, 
  MessageSquare, 
  Heart, 
  PenTool, 
  Star,
  Users,
  Flame,
  ChevronRight,
  Plus,
  Send,
  X
} from 'lucide-react';

const WritingChallenges = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [storyTitle, setStoryTitle] = useState('');
  const [storyContent, setStoryContent] = useState('');
  const [timeLeft, setTimeLeft] = useState(null);
  const [showWinnerStory, setShowWinnerStory] = useState(false);
  const challengesRef = useRef(null);
  const winnersRef = useRef(null);
  const timerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "Daily Writing Prompt",
      description: "Write a short story starting with: 'The clock struck thirteen...'",
      difficulty: "Beginner",
      deadline: "23h 45m left",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-600",
      status: "Active",
      category: "Daily"
    },
    {
      id: 2,
      title: "Weekly Story Challenge",
      description: "Theme: 'Echoes of the Future'. Write a story about a world without sound.",
      difficulty: "Intermediate",
      deadline: "4 days left",
      icon: <Target className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-600",
      status: "Active",
      category: "Weekly"
    },
    {
      id: 3,
      title: "Picture to Story",
      description: "Look at the weekly image and bring it to life with your words.",
      difficulty: "Beginner",
      deadline: "2 days left",
      icon: <ImageIcon className="w-6 h-6" />,
      color: "bg-rose-100 text-rose-600",
      status: "Active",
      category: "Creative",
      image: "https://i.pinimg.com/736x/04/fb/4d/04fb4d24d51c732ff3e4879a5766740a.jpg"
    },
    {
      id: 4,
      title: "100-Word Story",
      description: "Master the art of brevity. Tell a complete story in exactly 100 words.",
      difficulty: "Intermediate",
      deadline: "12h 10m left",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600",
      status: "Active",
      category: "Flash Fiction"
    },
    {
      id: 5,
      title: "Poetry Challenge",
      description: "Write a sonnet about the change of seasons.",
      difficulty: "Beginner",
      deadline: "5 days left",
      icon: <PenTool className="w-6 h-6" />,
      color: "bg-violet-100 text-violet-600",
      status: "Active",
      category: "Poetry"
    },
    {
      id: 6,
      title: "Dialogue Writing",
      description: "Write a conversation between two people who speak different languages.",
      difficulty: "Advanced",
      deadline: "Completed",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-slate-100 text-slate-400",
      status: "Completed",
      category: "Dialogue"
    },
    {
      id: 7,
      title: "Continue the Story",
      description: "Add the next 200 words to our community-driven epic 'The Crystal Key'.",
      difficulty: "Intermediate",
      deadline: "3 days left",
      icon: <Plus className="w-6 h-6" />,
      color: "bg-sky-100 text-sky-600",
      status: "Active",
      category: "Community"
    },
    {
      id: 8,
      title: "Genre Writing",
      description: "Write a Noir Mystery set in a futuristic underwater city.",
      difficulty: "Advanced",
      deadline: "6 days left",
      icon: <Star className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      status: "Active",
      category: "Genre"
    },
    {
      id: 9,
      title: "Moral Story",
      description: "Write a fable teaching the value of perseverance.",
      difficulty: "Beginner",
      deadline: "Active",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600",
      status: "Active",
      category: "Moral"
    },
    {
      id: 10,
      title: "Timed Writing",
      description: "You have 30 minutes! Ready, set, write everything you can on 'The Last Train'.",
      difficulty: "Advanced",
      deadline: "Starts in 2h",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-red-100 text-red-600",
      status: "Active",
      category: "Timed"
    }
  ]);

  const handleSubmitStory = () => {
    if (!activeChallenge) return;
    setIsSubmitting(true);
    
    // Clear timer if it exists
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setTimeout(() => {
      setChallenges(prev => prev.map(c => 
        c.id === activeChallenge.id 
          ? { ...c, status: "Completed", deadline: "Completed" } 
          : c
      ));
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setActiveChallenge(null);
        setStoryTitle('');
        setStoryContent('');
        setTimeLeft(null);
      }, 2000);
    }, 1500);
  };

  useEffect(() => {
    if (activeChallenge?.category === 'Timed') {
      setTimeLeft(30 * 60); // 30 minutes in seconds
      
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            handleSubmitStory(); // Auto-submit
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    if (activeChallenge?.title === 'Continue the Story') {
      setStoryTitle("The Crystal Key: Community Saga");
      setStoryContent("The forest was alive with whispers. Maya stepped across the mossy threshold, her breath hitching as the trees seemed to lean in, curious about the intruder. She held the crystal key tightly, its edges glowing with a faint, pulse-like light. Suddenly, a shadow flickered across the path ahead, but there was no wind to move the branches...");
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeChallenge]);

  const formatTime = (seconds) => {
    if (seconds === null) return "";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getWordCount = (text) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    const wordCountStatus = (limit) => {
      const words = newContent.trim().split(/\s+/);
      return words.length <= limit || newContent.length < storyContent.length;
    };

    if (activeChallenge?.title === "100-Word Story") {
      if (wordCountStatus(100)) setStoryContent(newContent);
    } else if (activeChallenge?.title === "Continue the Story") {
      // 57 words in prompt + 200 word limit = 257 total
      if (wordCountStatus(257)) setStoryContent(newContent);
    } else {
      setStoryContent(newContent);
    }
  };

  const leaderboard = [
    { rank: 1, name: "Aarav Sharma", points: 2450, avatar: "AS", level: "Pro Writer" },
    { rank: 2, name: "Zoya Khan", points: 2120, avatar: "ZK", level: "Storyteller" },
    { rank: 3, name: "Ishaan Gupta", points: 1980, avatar: "IG", level: "Wordsmith" },
    { rank: 4, name: "Meera Iyer", points: 1850, avatar: "MI", level: "Rising Star" },
    { rank: 5, name: "Kabir Singh", points: 1720, avatar: "KS", level: "Rising Star" },
  ];

  const recentStories = [
    { id: 1, author: "Aanya", title: "The Silent Forest", likes: 124, comments: 18, time: "2h ago" },
    { id: 2, author: "Rohan", title: "Mars' First Coffee", likes: 89, comments: 12, time: "5h ago" },
  ];

  const DifficultyBadge = ({ level }) => {
    const colors = {
      Beginner: "bg-green-100 text-green-700 border-green-200",
      Intermediate: "bg-blue-100 text-blue-700 border-blue-200",
      Advanced: "bg-purple-100 text-purple-700 border-purple-200"
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors[level]}`}>
        {level}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-mesh pt-6 pb-12">
      <div className="w-full">
        <AnimatePresence mode="wait">
          {!activeChallenge ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-7xl mx-auto px-4 md:px-8"
            >
              {/* Hero Section */}
              <div className="relative mb-16 text-center md:text-left overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 md:p-12 text-white shadow-2xl">
                <div className="relative z-10 md:w-2/3">
                  <motion.h1 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl font-black mb-4 leading-tight"
                  >
                    Unleash Your <span className="text-amber-400">Imagination</span> ✍️
                  </motion.h1>
                  <motion.p 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-indigo-100 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
                  >
                    Join thousands of young writers in our daily quests. From haikus to epics, every word you write takes you closer to becoming a Master Author.
                  </motion.p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => scrollToSection(challengesRef)}
                      className="px-8 py-3 bg-amber-400 hover:bg-amber-300 text-[#1E293B] font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                    >
                      Start Today's Quest
                    </button>
                    <button 
                      onClick={() => scrollToSection(winnersRef)}
                      className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl transition-all backdrop-blur-md border border-white/30"
                    >
                      View Past Winners
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-1/3 h-full hidden md:flex items-center justify-center pointer-events-none">
                  <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative">
                    <div className="w-48 h-64 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform rotate-6 absolute -top-10 -right-10 shadow-2xl"></div>
                    <div className="w-48 h-64 bg-white rounded-2xl border border-slate-200 transform -rotate-6 relative shadow-2xl flex flex-col p-6 group">
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm border border-slate-100 transition-all group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                          <img src="/vlogo.jpeg" alt="Visdom Waves Logo" className="w-10 h-10 object-contain" />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-black text-slate-800 leading-none">Visdom Waves</span>
                          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-[0.1em] mt-1">Innovations Private Limited</span>
                          <span className="text-[8px] font-extrabold text-indigo-600 italic mt-2 px-3 py-0.5 bg-indigo-50 rounded-full shadow-sm">"Empowering Every Writer's Dream"</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                        <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                      </div>
                      <div className="mt-auto flex justify-end">
                        <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center"><Send className="w-4 h-4 text-white" /></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { label: "Active Challenges", val: "12", icon: <Target className="text-indigo-500"/> },
                  { label: "Stories Today", val: "842", icon: <PenTool className="text-emerald-500"/> },
                  { label: "Total Writers", val: "15k+", icon: <Users className="text-violet-500"/> },
                  { label: "Writers Online", val: "124", icon: <Flame className="text-orange-500"/> },
                ].map((stat, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                      <p className="text-xl font-bold text-slate-900">{stat.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div ref={challengesRef} className="lg:col-span-3 space-y-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-black text-slate-800 flex items-center gap-2">
                        Active Challenges <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                      </h2>
                      <p className="text-slate-500 font-medium">Earn points and unlock new levels</p>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                      {['All', 'Daily', 'Weekly', 'Creative', 'Poetry'].map(cat => (
                        <button 
                          key={cat} onClick={() => setSelectedCategory(cat)}
                          className={`px-5 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {challenges.filter(c => selectedCategory === 'All' || c.category === selectedCategory).map((challenge) => (
                      <motion.div key={challenge.id} variants={itemVariants} whileHover={{ y: -12, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 17 } }} className="glass-card p-6 rounded-3xl group relative overflow-hidden flex flex-col interaction-card">
                        {challenge.status === "Completed" && (
                          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-20 flex items-center justify-center p-6">
                            <motion.div initial={{ scale: 0.5, opacity: 0, rotate: -20 }} animate={{ scale: 1, opacity: 1, rotate: -12 }} className="px-8 py-3 bg-slate-100/95 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] text-slate-600 font-extrabold rounded-full border-4 border-white uppercase tracking-[0.2em] text-sm backdrop-blur-md">Completed</motion.div>
                          </div>
                        )}
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-14 h-14 rounded-2xl ${challenge.color} flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-inner`}>{challenge.icon}</div>
                          <DifficultyBadge level={challenge.difficulty} />
                        </div>
                        <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{challenge.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{challenge.description}</p>
                        <div className="mt-auto">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4 border-t border-slate-100 pt-4">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {challenge.deadline}</span>
                            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {(Math.random() * 500).toFixed(0)} joined</span>
                          </div>
                          <button onClick={() => { setActiveChallenge(challenge); window.scrollTo({ top: 0, behavior: 'smooth' }); }} disabled={challenge.status === "Completed"} className={`w-full py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 ${challenge.status === "Completed" ? 'bg-slate-50 text-slate-300' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                            Participate Now <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Monthly Champion */}
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-1 shadow-2xl shadow-orange-200 overflow-hidden">
                    <div className="bg-white rounded-[1.4rem] p-8 md:p-12 relative">
                      <AnimatePresence mode="wait">
                        {!showWinnerStory ? (
                          <motion.div 
                            key="profile"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col md:flex-row items-center gap-12"
                          >
                            <div className="relative">
                              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full scale-110 blur-xl opacity-50" />
                              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-slate-100 flex items-center justify-center relative border-8 border-white shadow-xl overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" alt="Champion" className="w-full h-full object-cover" />
                              </div>
                              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-400 text-[#1E293B] px-6 py-1 rounded-full font-black text-xs uppercase tracking-widest shadow-lg whitespace-nowrap">March Champion</div>
                            </div>
                            <div className="flex-grow text-center md:text-left">
                              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-amber-600">
                                <Trophy className="w-6 h-6" /> <span className="font-black uppercase tracking-widest text-sm">Monthly Writing Champion</span>
                              </div>
                              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">Aarav Sharma</h2>
                              <p className="text-slate-600 text-lg mb-8 leading-relaxed">"Aarav's masterpiece 'The Clockmaker's Secret' scored a record-breaking 98/100 for creativity and narrative structure."</p>
                              <button 
                                onClick={() => setShowWinnerStory(true)}
                                className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-indigo-200"
                              >
                                Read Winner's Story
                              </button>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="story"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                          >
                            <div className="flex items-center justify-between mb-8">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-amber-400 overflow-hidden">
                                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" alt="" />
                                </div>
                                <div>
                                  <h4 className="font-black text-slate-800">The Clockmaker's Secret</h4>
                                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">By Aarav Sharma • 98/100</p>
                                </div>
                              </div>
                              <button 
                                onClick={() => setShowWinnerStory(false)}
                                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <div className="prose prose-slate max-w-none">
                              <p className="text-slate-600 leading-relaxed font-serif text-lg bg-slate-50 p-8 rounded-3xl border border-slate-100 italic">
                                "The gears of the world didn't turn on their own; Elias knew this better than anyone. Deep in the heart of the brass spire, he carefully adjusted the Copper Spring of Noon. One wrong move, and the sunrise would be delayed by decades. He had been repairing time for sixty years, sacrificing his own memories of the sun to ensure the rest of the world never forgot its warmth..."
                              </p>
                            </div>

                            <div className="bg-indigo-600 rounded-2xl p-6 text-white text-sm font-bold flex items-center gap-4">
                              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                              <p>Aarav practiced for 300 days straight before winning this award. Consistency is the key! ✨</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  <div ref={winnersRef} className="glass-card rounded-3xl overflow-hidden shadow-xl shadow-slate-100">
                    <div className="bg-slate-900 p-6 text-white text-center relative overflow-hidden">
                      <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-2 relative z-10" />
                      <h3 className="text-xl font-black relative z-10">Top Writers</h3>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest relative z-10">All Time Rankings</p>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -mr-16 -mt-16" />
                    </div>
                    <div className="p-2">
                      {leaderboard.map((user, i) => (
                        <div key={user.rank} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${i === 0 ? 'bg-indigo-50/50' : 'hover:bg-slate-50'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${i === 0 ? 'bg-amber-100 text-amber-600' : 'text-slate-400'}`}>{user.rank}</div>
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 overflow-hidden shadow-sm border-2 border-white">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt={user.name} />
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm font-black text-slate-800">{user.name}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{user.level}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-black text-indigo-600">{user.points}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white text-center shadow-lg shadow-indigo-100">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                      <Flame className="w-8 h-8 text-amber-400 animate-bounce" />
                    </div>
                    <h3 className="text-xl font-black mb-1">Your Streak</h3>
                    <p className="text-indigo-100 text-sm mb-6">4 Days Strong!</p>
                    <div className="flex justify-between">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                        <div key={day} className="flex flex-col items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${i <= 3 ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'bg-white/20'}`} />
                          <span className={`text-[10px] font-black ${i <= 3 ? 'text-amber-400' : 'text-white/40'}`}>{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100 relative overflow-hidden group">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                          <Star className="w-5 h-5 fill-white" />
                        </div>
                        <h4 className="font-extrabold text-slate-800">Master Scribe Quest</h4>
                      </div>
                      <p className="text-slate-500 text-sm font-medium mb-6">Complete 3 Weekly Challenges to unlock the <span className="text-indigo-600 font-bold">Silver Nib Badge</span>.</p>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-[10px] font-black uppercase text-slate-400">Current Progress</span>
                          <span className="text-xs font-black text-indigo-600">2/3</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '66%' }}
                            viewport={{ once: true }}
                            className="h-full bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.4)]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-50 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="glass-card rounded-3xl p-6 border border-slate-100 shadow-lg shadow-slate-50">
                    <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
                      <Users className="w-4 h-4 text-indigo-600" /> Upcoming Workshops
                    </h4>
                    <div className="space-y-4">
                      {[
                        { title: "World Building 101", time: "Tomorrow, 4 PM", color: "bg-emerald-50 text-emerald-600" },
                        { title: "The Art of Dialogue", time: "Sat, 11 AM", color: "bg-blue-50 text-blue-600" }
                      ].map((evt, i) => (
                        <div key={i} className="flex items-center gap-3 group cursor-pointer">
                          <div className={`w-10 h-10 rounded-xl ${evt.color} flex items-center justify-center shrink-0 font-bold text-xs`}>{evt.title[0]}</div>
                          <div>
                            <p className="text-xs font-black text-slate-800 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{evt.title}</p>
                            <p className="text-[10px] text-slate-400 font-bold">{evt.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100 shadow-inner relative overflow-hidden group">
                    <Sparkles className="absolute -right-2 -top-2 w-16 h-16 text-amber-200 opacity-20 group-hover:rotate-12 transition-transform" />
                    <h4 className="font-black text-amber-800 text-xs mb-3 uppercase tracking-[0.2em] flex items-center gap-2">
                       Expert Insight
                    </h4>
                    <p className="text-amber-900 text-sm font-medium leading-relaxed italic">
                      "Don't wait for inspiration. Start writing, and inspiration will find you in the middle of the work."
                    </p>
                    <p className="text-amber-600 text-[10px] font-black mt-4 uppercase tracking-widest text-right">— Master Scribe Leon</p>
                  </div>

                  <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 duration-500">
                    <h4 className="font-black text-slate-400 text-[10px] mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                       Community Pulse
                    </h4>
                    <div className="space-y-6">
                      {[
                        { user: "Zoya K.", action: "unlocked 'The Poet' badge", time: "2m ago" },
                        { user: "Ishaan G.", action: "reached level 15", time: "12m ago" },
                        { user: "Meera I.", action: "started daily challenge", time: "1h ago" }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 relative">
                          {i !== 2 && <div className="absolute left-4 top-8 w-0.5 h-6 bg-slate-200/50" />}
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border-2 border-slate-100 shadow-sm overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.user}`} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-700 leading-tight">
                              <span className="text-indigo-600">{item.user}</span> {item.action}
                            </p>
                            <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 px-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">1,248 Writers Active</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="studio"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-12"
            >
              {/* Studio Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${activeChallenge.color} flex items-center justify-center shadow-lg shadow-indigo-100`}>
                    {activeChallenge.icon}
                  </div>
                  <div>
                    <DifficultyBadge level={activeChallenge.difficulty} />
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">{activeChallenge.title}</h2>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  {timeLeft !== null && activeChallenge?.title === "Timed Writing" && (
                    <div className="flex items-center gap-3 bg-red-50 px-4 py-2 rounded-xl border border-red-100 animate-pulse">
                      <Clock className="w-4 h-4 text-red-500" />
                      <span className="font-mono font-bold text-red-600 text-lg">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <button 
                    onClick={() => setActiveChallenge(null)}
                    className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Back to Challenges
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Side: Prompt & Inspiration */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
                    <div className="relative z-10">
                      <p className="text-indigo-100 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Sparkles className="w-3 h-3" /> The Challenge
                      </p>
                      <h3 className="text-xl font-bold leading-relaxed mb-6">
                        {activeChallenge.description}
                      </h3>
                      
                      <div className="pt-6 border-t border-white/20">
                        <div className="flex items-center gap-3 text-sm font-medium text-indigo-100 mb-4 text-emerald-300">
                          <Trophy className="w-4 h-4" /> 500 XP Points Reward
                        </div>
                      </div>
                    </div>
                    {/* Abstract shapes for premium look */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl -ml-12 -mb-12"></div>
                  </div>

                  {activeChallenge.image && (
                    <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl group cursor-zoom-in">
                      <img 
                        src={activeChallenge.image} 
                        alt="Inspiration" 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}

                  <div className="bg-amber-50 rounded-[2rem] p-6 border border-amber-100">
                    <div className="flex items-center gap-3 mb-3 text-amber-600">
                      <Star className="w-5 h-5 fill-amber-400" />
                      <span className="font-bold uppercase tracking-wider text-[10px]">Master Scribe Pro-Tip</span>
                    </div>
                    <p className="text-amber-800 text-sm font-medium leading-relaxed italic">
                      "Show, don't tell. Use sensory details to explain the world without sound."
                    </p>
                  </div>
                </div>

                {/* Right Side: Professional Editor */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="bg-slate-50/80 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/30 border border-slate-200/50 relative overflow-hidden">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">Masterpiece Title</label>
                        <input 
                          type="text" 
                          value={storyTitle}
                          onChange={(e) => setStoryTitle(e.target.value)}
                          placeholder="What will you name your story?" 
                          className="w-full px-6 py-4 rounded-xl bg-white border-2 border-transparent focus:border-indigo-500/10 focus:outline-none transition-all font-bold text-xl text-slate-800 placeholder:text-slate-200 shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">The Narrative</label>
                        <div className="relative">
                          <textarea 
                            rows="12" 
                            value={storyContent}
                            onChange={handleContentChange}
                            placeholder="Your story begins here..." 
                            className="w-full px-6 py-6 rounded-2xl bg-white border-2 border-transparent focus:border-indigo-500/10 focus:outline-none transition-all font-medium text-base leading-relaxed text-slate-700 resize-none min-h-[400px] custom-scrollbar-indigo placeholder:text-slate-200 shadow-sm"
                          ></textarea>
                          <div className="absolute bottom-6 left-8 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            {activeChallenge?.title === "100-Word Story" && (
                              <span className={`${getWordCount(storyContent) > 90 ? 'text-orange-500' : ''} ${getWordCount(storyContent) === 100 ? 'text-red-500' : ''}`}>
                                Words: {getWordCount(storyContent)} / 100
                              </span>
                            )}
                            {activeChallenge?.title === "Continue the Story" && (
                              <span className={`${getWordCount(storyContent) > 237 ? 'text-orange-500' : ''} ${getWordCount(storyContent) === 257 ? 'text-red-500' : ''}`}>
                                Words Added: {Math.max(0, getWordCount(storyContent) - 57)} / 200
                              </span>
                            )}
                          </div>
                          <div className="absolute bottom-6 right-8 text-[10px] font-black text-slate-200 uppercase tracking-widest">
                            {isSubmitting ? 'Finalizing...' : 'Imagination in progress...'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Editor Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
                  </div>

                  {/* Submission Actions */}
                  <AnimatePresence>
                    {(storyTitle.trim() || storyContent.trim()) && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex flex-col sm:flex-row gap-6"
                      >
                        <button 
                          onClick={() => setActiveChallenge(null)}
                          disabled={isSubmitting}
                          className="flex-1 py-5 rounded-2xl bg-white border-2 border-slate-100 text-slate-400 font-bold hover:text-slate-600 hover:border-slate-200 transition-all active:scale-95"
                        >
                          Save to Drafts
                        </button>
                        <motion.button 
                          whileHover={storyTitle.trim() && storyContent.trim() && !isSubmitting ? { scale: 1.02, y: -4 } : {}}
                          whileTap={storyTitle.trim() && storyContent.trim() && !isSubmitting ? { scale: 0.98 } : {}}
                          disabled={isSubmitting || !storyTitle.trim() || !storyContent.trim()}
                          onClick={handleSubmitStory}
                          className={`flex-[3] py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-4 relative overflow-hidden group ${
                            storyTitle.trim() && storyContent.trim() 
                              ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 hover:bg-indigo-700' 
                              : 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-60'
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                              Submitting...
                            </div>
                          ) : (
                            <>Submit Your Masterpiece <Send className={`w-5 h-5 transition-transform ${storyTitle.trim() && storyContent.trim() ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''}`} /></>
                          )}
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Success Overlay */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-6"
                  >
                    <motion.div 
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      className="bg-white rounded-[3rem] p-12 max-w-lg w-full text-center shadow-3xl"
                    >
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Trophy className="w-12 h-12 text-green-500" />
                      </div>
                      <h2 className="text-3xl font-black text-slate-800 mb-4">Masterpiece Received!</h2>
                      <p className="text-slate-500 font-medium leading-relaxed mb-8">
                        Your story has been sent to our expert scribes for review. You'll be notified as soon as you earn your points!
                      </p>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="h-full w-1/3 bg-indigo-600"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      <style>{`
        .custom-scrollbar-indigo::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar-indigo::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-indigo::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar-indigo::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
      </div>
    </div>
  );
};

export default WritingChallenges;
