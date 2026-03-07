import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  BookOpen,
  PenTool,
  Sparkles,
  Trophy,
  Target,
  FileText,
  CheckCircle,
  Clock,
  HeartPulse,
  Lightbulb,
  MessageSquare,
  Layout,
  Type,
  ShieldCheck,
  Award,
  TrendingUp,
  Zap,
  ChevronRight,
  ChevronDown,
  Quote,
  BarChart,
  Stethoscope,
  Coffee,
  Droplets,
  Moon,
  Edit3,
  Layers,
  Calendar,
  Mic,
  Headphones,
  ArrowRight,
  Check,
  Star,
  Activity,
  Play,
  Pause,
  Info,
  History,
  ShoppingBag,
  Users,
  Briefcase,
  Globe,
  ChevronLeft,
  Share2,
  CalendarDays,
  Mail,
  Flame,
  Flag,
  TreePine,
  Palette,
  Scale,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StoryBookStructure from "./StoryBookStructure";
import StoryCreator from "./StoryCreator";
import StoryCategoryView from "./StoryCategoryView";
const readingPrompts = [
  {
    day: 1,
    writingTopic: "A Mysterious Letter",
    storyStartingOnWords:
      "One morning, you find a letter with no name but your address. What does it say?",
    goal: "Practice suspense writing.",
    reflection: "How do you build curiosity?",
  },
  {
    day: 2,
    writingTopic: "The Day Time Stopped",
    storyStartingOnWords:
      "Imagine the clock stopped for everyone except you. What would you do?",
    goal: "Creative imagination.",
    reflection: "How would you use extra time wisely?",
  },
  {
    day: 3,
    writingTopic: "A Talking Tree",
    storyStartingOnWords:
      "A tree near your house suddenly starts talking. What advice does it give?",
    goal: "Moral storytelling.",
    reflection: "What message should nature teach us?",
  },
  {
    day: 4,
    writingTopic: "My Future Self",
    storyStartingOnWords: "Your future self visits you. What does he/she say?",
    goal: "Motivational writing.",
    reflection: "What habits should you start today?",
  },
  {
    day: 5,
    writingTopic: "The Hidden Door",
    storyStartingOnWords:
      "You discover a hidden door in your classroom. Where does it lead?",
    goal: "Adventure writing.",
    reflection: "What is beyond the known?",
  },
  {
    day: 6,
    writingTopic: "The Smallest Hero",
    storyStartingOnWords: "A very small child saves the day. How?",
    goal: "Show courage through action.",
    reflection: "Does size dictate bravery?",
  },
  {
    day: 7,
    writingTopic: "The Power of One Word",
    storyStartingOnWords: "One word changes your life. What is it? How?",
    goal: "Emotional writing.",
    reflection: "Why are words so impactful?",
  },
  {
    day: 8,
    writingTopic: "The Empty Notebook",
    storyStartingOnWords:
      "You open your notebook and everything you write becomes real.",
    goal: "Fantasy creativity.",
    reflection: "What is your deepest desire?",
  },
  {
    day: 9,
    writingTopic: "A Day Without Technology",
    storyStartingOnWords: "No phones, no internet for 24 hours. What happens?",
    goal: "Real-life reflection.",
    reflection: "What do we miss staring at screens?",
  },
  {
    day: 10,
    writingTopic: "The School Competition",
    storyStartingOnWords:
      "You participate in a competition you fear most. What happens next?",
    goal: "Confidence-building story.",
    reflection: "How does one overcome fear?",
  },
  {
    day: 11,
    writingTopic: "The Lost Wallet",
    storyStartingOnWords: "You find a wallet on the road. What do you do?",
    goal: "Moral decision-making.",
    reflection: "What defines honesty?",
  },
  {
    day: 12,
    writingTopic: "The Unexpected Guest",
    storyStartingOnWords: "A stranger knocks on your door during a storm.",
    goal: "Suspense writing.",
    reflection: "How do you treat the unknown?",
  },
  {
    day: 13,
    writingTopic: "The Dream That Felt Real",
    storyStartingOnWords: "You wake up unsure if it was a dream or reality.",
    goal: "Descriptive writing.",
    reflection: "How blurred is the line between dreams and life?",
  },
  {
    day: 14,
    writingTopic: "If I Were Principal",
    storyStartingOnWords:
      "You become principal for one day. What changes do you make?",
    goal: "Leadership thinking.",
    reflection: "What does true leadership look like?",
  },
  {
    day: 15,
    writingTopic: "The Magical Pen",
    storyStartingOnWords: "Your pen can solve one global problem. Which one?",
    goal: "Problem-solving writing.",
    reflection: "What is the world's most pressing issue?",
  },
  {
    day: 16,
    writingTopic: "The Library Secret",
    storyStartingOnWords: "You find a secret book in the library.",
    goal: "Mystery building.",
    reflection: "What knowledge is kept hidden?",
  },
  {
    day: 17,
    writingTopic: "The Day I Failed",
    storyStartingOnWords: "Write about a failure that taught you something.",
    goal: "Growth mindset.",
    reflection: "How do failures pave the way to success?",
  },
  {
    day: 18,
    writingTopic: "A Letter to My Younger Self",
    storyStartingOnWords: "What advice would you give?",
    goal: "Reflective writing.",
    reflection: "What would you change if you could?",
  },
  {
    day: 19,
    writingTopic: "The Silent Observer",
    storyStartingOnWords: "You notice something others miss.",
    goal: "Observation skill.",
    reflection: "Why is taking a step back important?",
  },
  {
    day: 20,
    writingTopic: "The Brave Decision",
    storyStartingOnWords: "You must choose between comfort and courage.",
    goal: "Character building.",
    reflection: "What is the cost of staying in the comfort zone?",
  },
  {
    day: 21,
    writingTopic: "The Superpower I Don’t Want",
    storyStartingOnWords: "You get a superpower but it has a problem.",
    goal: "Creative conflict.",
    reflection: "Are all gifts blessings?",
  },
  {
    day: 22,
    writingTopic: "The Kind Act",
    storyStartingOnWords: "A small act of kindness changes everything.",
    goal: "Moral storytelling.",
    reflection: "How far does a ripple of kindness go?",
  },
  {
    day: 23,
    writingTopic: "The Race Against Time",
    storyStartingOnWords: "You have one hour to fix a big mistake.",
    goal: "Fast-paced writing.",
    reflection: "How does pressure affect decisions?",
  },
  {
    day: 24,
    writingTopic: "The Hidden Talent",
    storyStartingOnWords: "You discover a hidden talent in yourself.",
    goal: "Self-confidence writing.",
    reflection: "What else might you be ignoring about yourself?",
  },
  {
    day: 25,
    writingTopic: "The Broken Promise",
    storyStartingOnWords: "What happens when someone breaks a promise?",
    goal: "Emotional depth.",
    reflection: "How does trust rebuild?",
  },
  {
    day: 26,
    writingTopic: "The Mountain Challenge",
    storyStartingOnWords: "You must climb a mountain to prove something.",
    goal: "Determination theme.",
    reflection: "What is your personal mountain?",
  },
  {
    day: 27,
    writingTopic: "The Voice Inside",
    storyStartingOnWords: "Your inner voice speaks loudly for one day.",
    goal: "Internal dialogue writing.",
    reflection: "Does your inner voice help or hinder you?",
  },
  {
    day: 28,
    writingTopic: "The Surprise Result",
    storyStartingOnWords:
      "You expected to fail but something unexpected happens.",
    goal: "Plot twist.",
    reflection: "Is self-doubt our biggest illusion?",
  },
  {
    day: 29,
    writingTopic: "The Courage Test",
    storyStartingOnWords: "Describe a moment that tested your courage.",
    goal: "Real-life reflection.",
    reflection: "When did you surprise yourself?",
  },
  {
    day: 30,
    writingTopic: "My Story Begins",
    storyStartingOnWords: "Today I decide to change my life.",
    goal: "Motivational ending.",
    reflection: "What stops you from starting right now?",
  },
];

const stages = [
  { id: 1, name: "Foundation", icon: BookOpen, desc: "Observe & Read" },
  { id: 2, name: "Start Small", icon: Edit3, desc: "Remove Fear" },
  { id: 3, name: "Structure", icon: Layers, desc: "Format & Org" },
  { id: 4, name: "Critical Thinking", icon: Brain, desc: "Make it Powerful" },
  { id: 5, name: "Advanced", icon: Trophy, desc: "Publish Ready" },
];

const StoryCard = ({ item, isDark, onReadMore, category }) => {
  return (
    <div className="w-1/6 px-4">
      <div
        onClick={onReadMore}
        className={`group border cursor-pointer h-full ${isDark ? "border-white/10 bg-slate-900" : "border-slate-100 bg-white"} rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col relative`}
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/10 z-10 hover:bg-black/60 transition-colors">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span className="text-white text-[11px] font-bold">
              {item.rating || "4.8"}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-1 z-10 w-full text-left">
              {category || "BEDTIME STORIES"}
            </span>
            <h5 className="text-xl font-bold text-white leading-tight z-10 line-clamp-2 w-full text-left">
              {item.title}
            </h5>
          </div>
        </div>

        <div
          className={`p-5 flex items-center justify-between z-10 ${isDark ? "bg-[#0f0f11]" : "bg-white"} mt-auto w-full`}
        >
          <div className="flex flex-col items-start text-left">
            <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-0.5">
              WRITTEN BY
            </span>
            <span
              className={`text-[13px] font-black tracking-wide ${isDark ? "text-slate-200" : "text-slate-800"}`}
            >
              {item.author || "Admin"}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onReadMore();
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 shrink-0 ${isDark ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`}
          >
            <BookOpen className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const storeCategories = [
  {
    id: "friendship",
    title: "Friendship Stories",
    stories: [
      {
        title: "The Best of Friends",
        author: "Leo Chen, age 12",
        category: "Friendship",
        color: "from-blue-500 to-indigo-500",
        rating: 4.9,
      },
      {
        title: "Together Always",
        author: "Sarah Miller, age 9",
        category: "Friendship",
        color: "from-emerald-500 to-teal-500",
        rating: 4.8,
      },
      {
        title: "Secret Handshake",
        author: "Mike Ross, age 14",
        category: "Friendship",
        color: "from-purple-500 to-pink-500",
        rating: 5.0,
      },
      {
        title: "A Friend in Need",
        author: "Emma Watson, age 11",
        category: "Friendship",
        color: "from-cyan-500 to-blue-500",
        rating: 4.7,
      },
      {
        title: "Two Peas in a Pod",
        author: "Casper G., age 8",
        category: "Friendship",
        color: "from-rose-500 to-red-500",
        rating: 4.6,
      },
    ],
  },
  {
    id: "school",
    title: "School Life Stories",
    stories: [
      {
        title: "The First Day",
        author: "Arthur King, age 10",
        category: "School Life",
        color: "from-amber-500 to-orange-500",
        rating: 4.8,
      },
      {
        title: "Lunchbox Secrets",
        author: "Luna Love, age 13",
        category: "School Life",
        color: "from-fuchsia-500 to-purple-500",
        rating: 4.9,
      },
      {
        title: "Math Class Magic",
        author: "John Doe, age 7",
        category: "School Life",
        color: "from-slate-500 to-slate-800",
        rating: 4.6,
      },
      {
        title: "Recess Adventures",
        author: "Alex Kim, age 10",
        category: "School Life",
        color: "from-indigo-500 to-blue-600",
        rating: 4.6,
      },
      {
        title: "The School Play",
        author: "Mia Wong, age 13",
        category: "School Life",
        color: "from-teal-500 to-emerald-600",
        rating: 4.9,
      },
    ],
  },
  {
    id: "family",
    title: "Family Stories",
    stories: [
      {
        title: "My Hero Dad",
        author: "Sam Jenkins, age 12",
        category: "Family",
        color: "from-pink-500 to-purple-600",
        rating: 4.8,
      },
      {
        title: "Super Mom",
        author: "Chloe Davis, age 9",
        category: "Family",
        color: "from-blue-400 to-cyan-500",
        rating: 4.5,
      },
      {
        title: "Grandpa's Tales",
        author: "Leo Chen, age 12",
        category: "Family",
        color: "from-orange-400 to-red-500",
        rating: 4.9,
      },
      {
        title: "Sibling Rivalry",
        author: "Sarah Miller, age 9",
        category: "Family",
        color: "from-green-400 to-emerald-500",
        rating: 4.7,
      },
      {
        title: "Family Vacation",
        author: "Mike Ross, age 14",
        category: "Family",
        color: "from-purple-400 to-indigo-500",
        rating: 5.0,
      },
    ],
  },
  {
    id: "science",
    title: "Science & Discovery Stories",
    stories: [
      {
        title: "The Cosmic Voyager",
        author: "Emma Watson, age 11",
        category: "Science",
        color: "from-cyan-500 to-blue-500",
        rating: 4.7,
      },
      {
        title: "Space Camp",
        author: "Arthur King, age 10",
        category: "Science",
        color: "from-indigo-500 to-purple-500",
        rating: 4.9,
      },
      {
        title: "The Little Scientist",
        author: "Luna Love, age 13",
        category: "Science",
        color: "from-emerald-500 to-teal-500",
        rating: 4.8,
      },
      {
        title: "Robot Friends",
        author: "John Doe, age 7",
        category: "Science",
        color: "from-slate-500 to-slate-700",
        rating: 4.6,
      },
      {
        title: "Dinosaur Bones",
        author: "Alex Kim, age 10",
        category: "Science",
        color: "from-amber-500 to-orange-500",
        rating: 4.7,
      },
    ],
  },
  {
    id: "inspiration",
    title: "Inspirational Stories",
    stories: [
      {
        title: "Never Give Up",
        author: "Mia Wong, age 13",
        category: "Inspiration",
        color: "from-rose-500 to-red-500",
        rating: 4.9,
      },
      {
        title: "The Brave Little Bird",
        author: "Sam Jenkins, age 12",
        category: "Inspiration",
        color: "from-pink-500 to-purple-600",
        rating: 4.8,
      },
      {
        title: "A Spark of Hope",
        author: "Chloe Davis, age 9",
        category: "Inspiration",
        color: "from-blue-400 to-cyan-500",
        rating: 4.5,
      },
      {
        title: "Mountain Peak",
        author: "Leo Chen, age 12",
        category: "Inspiration",
        color: "from-fuchsia-500 to-pink-500",
        rating: 5.0,
      },
      {
        title: "Dream Big",
        author: "Sarah Miller, age 9",
        category: "Inspiration",
        color: "from-emerald-400 to-green-500",
        rating: 4.8,
      },
    ],
  },
  {
    id: "sports",
    title: "Sports & Games Stories",
    stories: [
      {
        title: "The Winning Goal",
        author: "Mike Ross, age 14",
        category: "Sports",
        color: "from-purple-500 to-pink-500",
        rating: 5.0,
      },
      {
        title: "Basketball Dreams",
        author: "Emma Watson, age 11",
        category: "Sports",
        color: "from-blue-500 to-indigo-500",
        rating: 4.7,
      },
      {
        title: "The Big Race",
        author: "Arthur King, age 10",
        category: "Sports",
        color: "from-amber-500 to-orange-500",
        rating: 4.8,
      },
      {
        title: "Team Spirit",
        author: "Luna Love, age 13",
        category: "Sports",
        color: "from-cyan-400 to-blue-500",
        rating: 4.9,
      },
      {
        title: "Chess Champion",
        author: "Casper G., age 8",
        category: "Sports",
        color: "from-slate-600 to-slate-800",
        rating: 4.6,
      },
    ],
  },
];

const popularStories = [
  {
    title: "The Cosmic Voyager",
    author: "Emma Watson, age 11",
    category: "Science",
    color: "from-cyan-500 to-blue-500",
    rating: 4.7,
  },
  {
    title: "Never Give Up",
    author: "Mia Wong, age 13",
    category: "Inspiration",
    color: "from-rose-500 to-red-500",
    rating: 4.9,
  },
  {
    title: "Together Always",
    author: "Sarah Miller, age 9",
    category: "Friendship",
    color: "from-emerald-500 to-teal-500",
    rating: 4.8,
  },
  {
    title: "The Winning Goal",
    author: "Mike Ross, age 14",
    category: "Sports",
    color: "from-purple-500 to-pink-500",
    rating: 5.0,
  },
  {
    title: "My Hero Dad",
    author: "Sam Jenkins, age 12",
    category: "Family",
    color: "from-pink-500 to-purple-600",
    rating: 4.8,
  },
  {
    title: "Lunchbox Secrets",
    author: "Luna Love, age 13",
    category: "School Life",
    color: "from-fuchsia-500 to-purple-500",
    rating: 4.9,
  },
  {
    title: "Space Camp",
    author: "Arthur King, age 10",
    category: "Science",
    color: "from-indigo-500 to-purple-500",
    rating: 4.9,
  },
  {
    title: "Grandpa's Tales",
    author: "Leo Chen, age 12",
    category: "Family",
    color: "from-orange-400 to-red-500",
    rating: 4.9,
  },
];

const StoreBookCard = ({ book, isDark }) => (
  <div
    className={`group relative rounded-[2rem] p-4 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-2 ${isDark ? "bg-white/5 border-white/10 hover:shadow-2xl hover:shadow-white/5" : "bg-white border-slate-200 hover:shadow-xl hover:shadow-slate-200"}`}
  >
    <div
      className={`relative aspect-[3/4] rounded-[1.5rem] bg-gradient-to-br ${book.color} p-6 flex flex-col text-white overflow-hidden`}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 scale-90 origin-left opacity-80">
        {book.category}
      </div>
      <h4 className="text-[17px] sm:text-lg font-black mb-auto leading-tight">
        {book.title}
      </h4>
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="text-[10px] font-bold opacity-80">WRITTEN BY</div>
        <div className="text-xs font-black">{book.author}</div>
      </div>
      <div className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
        <BookOpen size={14} />
      </div>
    </div>
    <div className="flex justify-between items-center px-1">
      <div className="flex items-center gap-1">
        <Star size={12} className="text-amber-400 fill-amber-400" />
        <span
          className={`text-[10px] font-black ${isDark ? "text-slate-400" : "text-slate-600"}`}
        >
          {book.rating}
        </span>
      </div>
      <button
        className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "text-indigo-400 hover:text-white" : "text-indigo-600 hover:text-indigo-800"}`}
      >
        Buy Now
      </button>
    </div>
  </div>
);

function LearnerAsWriter() {
  const navigate = useNavigate();
  const isDark = false;

  const [activeTab, setActiveTab] = useState("publisher");
  const [activeStage, setActiveStage] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState("about");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [latestStorySlide, setLatestStorySlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [panchatantraSlide, setPanchatantraSlide] = useState(0);
  const [latestPoemsSlide, setLatestPoemsSlide] = useState(0);
  const [tenaliSlide, setTenaliSlide] = useState(0);
  const [birbalSlide, setBirbalSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDailyLibrary, setShowDailyLibrary] = useState(false);
  const [showListeningSummary, setShowListeningSummary] = useState(false);
  const [showStoryCreator, setShowStoryCreator] = useState(false);
  const [storeFilter, setStoreFilter] = useState("All Categories");
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const storeDropdownRef = useRef(null);
  const [promptText, setPromptText] = useState(
    "What if gravity reversed for one hour every day?",
  );
  const [timerStatus, setTimerStatus] = useState(1200); // 20 mins in seconds
  const [wordCount, setWordCount] = useState(0);

  // Auto-decrement mock timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerStatus((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 5 ? 0 : prev + 1));
    }, 3000);

    const slideInterval2 = setInterval(() => {
      setLatestStorySlide((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4500);

    const slideInterval3 = setInterval(() => {
      setPanchatantraSlide((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4000);

    const slideInterval4 = setInterval(() => {
      setLatestPoemsSlide((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4200);

    const slideInterval5 = setInterval(() => {
      setTenaliSlide((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4300);

    const slideInterval6 = setInterval(() => {
      setBirbalSlide((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4400);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      clearInterval(slideInterval);
      clearInterval(slideInterval2);
      clearInterval(slideInterval3);
      clearInterval(slideInterval4);
      clearInterval(slideInterval5);
      clearInterval(slideInterval6);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        storeDropdownRef.current &&
        !storeDropdownRef.current.contains(event.target)
      ) {
        setIsStoreDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleWordCount = (e) => {
    const text = e.target.value;
    setWordCount(
      text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length,
    );
  };

  const generatePrompt = () => {
    const prompts = [
      "Describe a world where humans communicate only through music.",
      "You discovered a door in your room that wasn't there yesterday.",
      "Write a letter to your future self 10 years from now.",
      "What happens when the oceans suddenly turn clear as glass?",
      "Argue for or against: Schools should abolish traditional grading.",
    ];
    setPromptText(prompts[Math.floor(Math.random() * prompts.length)]);
  };

  return (
    <div
      className={`min-h-screen ${isDark ? "bg-[#0A0A0B] text-slate-200" : "bg-slate-50 text-slate-800"} font-sans selection:bg-indigo-500/30 overflow-x-clip relative transition-colors duration-300`}
    >
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] ${isDark ? "bg-indigo-600/20 mix-blend-screen" : "bg-indigo-200/40 mix-blend-multiply"} blur-[120px] rounded-full`}
        />
        <div
          className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] ${isDark ? "bg-fuchsia-600/20 mix-blend-screen" : "bg-fuchsia-200/40 mix-blend-multiply"} blur-[120px] rounded-full`}
        />
        <div
          className={`absolute top-[40%] left-[60%] w-[30%] h-[30%] ${isDark ? "bg-blue-600/10 mix-blend-screen" : "bg-blue-200/40 mix-blend-multiply"} blur-[100px] rounded-full`}
        />
        {isDark && (
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        )}
      </div>

      <div className="relative z-10 w-full pt-0">
        {/* Header */}
        {/* Sticky Unified Header & Navigation */}
        <div
          className={`sticky top-0 z-[100] transition-all duration-300 w-full`}
        >
          <div
            className={`transition-all duration-500 border-b overflow-hidden ${isScrolled ? (isDark ? "bg-black/95 border-white/10 shadow-2xl" : "bg-white/98 border-slate-200 shadow-xl") : isDark ? "bg-black/60 border-white/5" : "bg-white/80 border-slate-100"} backdrop-blur-3xl px-6 py-4`}
          >
            <header className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block">
                    <h1 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-emerald-900 leading-none">
                      Learner As Writer
                    </h1>
                    <p className="text-[8px] font-black text-slate-600 uppercase tracking-[0.2em] mt-1">
                      Young Authors Publishing Platform
                    </p>
                  </div>
                </div>

                {/* Main Navigation - Single Line Unified */}
                {!showDailyLibrary && !showListeningSummary && (
                  <nav className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar">
                    {/* Primary Tab: Publisher */}
                    <button
                      onClick={() => setActiveTab("publisher")}
                      className={`px-4 py-2 rounded-full font-bold text-[11px] tracking-wider uppercase transition-all relative shrink-0 ${
                        activeTab === "publisher"
                          ? isDark
                            ? "text-white"
                            : "text-slate-900"
                          : isDark
                            ? "text-slate-500 hover:text-slate-300"
                            : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      OUR PUBLISHER
                      {activeTab === "publisher" && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-500 rounded-full"
                        />
                      )}
                    </button>

                    {/* Integrated Sub-tabs for Publisher */}
                    <AnimatePresence>
                      {activeTab === "publisher" && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="flex items-center gap-1 border-l border-slate-200 dark:border-white/10 ml-2 pl-2"
                        >
                          {[
                            { id: "about", label: "HOME" },
                            { id: "story", label: "OUR STORY" },
                            { id: "store", label: "KNOWLEDGE STORE" },
                            { id: "pad", label: "YOUNG WRITER'S PAD" },
                          ].map((subTab) => (
                            <button
                              key={subTab.id}
                              onClick={() => {
                                if (subTab.id === "pad") {
                                  setShowStoryCreator(true);
                                  setActiveSubTab("pad");
                                } else {
                                  setShowStoryCreator(false);
                                  setActiveSubTab(subTab.id);
                                  setTimeout(() => {
                                    document
                                      .getElementById(`publisher-${subTab.id}`)
                                      ?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                      });
                                  }, 100);
                                }
                              }}
                              className={`px-3 py-2 rounded-full font-bold text-[11px] tracking-wider transition-all relative shrink-0 ${
                                activeSubTab === subTab.id
                                  ? isDark
                                    ? "text-blue-400"
                                    : "text-blue-600"
                                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                              }`}
                            >
                              {subTab.label}
                              {activeSubTab === subTab.id && (
                                <motion.div
                                  layoutId="activeSubTabUnderlineNav"
                                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500 rounded-full"
                                />
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Remaining Main Tabs */}
                    {[{ id: "stages", label: "WRITING STAGES" }].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-full font-bold text-[11px] tracking-wider uppercase transition-all relative shrink-0 ${
                          activeTab === tab.id
                            ? isDark
                              ? "text-white"
                              : "text-slate-400"
                            : isDark
                              ? "text-slate-400 hover:text-slate-300"
                              : "text-slate-400 hover:text-slate-700"
                        }`}
                      >
                        {tab.label}
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="activeTabUnderline"
                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-500 rounded-full"
                          />
                        )}
                      </button>
                    ))}

                    {/* Action Buttons & Badge Removed */}
                  </nav>
                )}
              </div>
            </header>

            {/* Removed independent row Sub Navigation */}
          </div>
        </div>

        {showStoryCreator ? (
          <div className="w-full h-[calc(100vh-80px)] overflow-hidden">
            <StoryCreator
              onBack={() => {
                setShowStoryCreator(false);
                setActiveSubTab("about");
              }}
            />
          </div>
        ) : showDailyLibrary ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 mt-8">
            <DailyLibraryView
              isDark={isDark}
              onClose={() => setShowDailyLibrary(false)}
              readingPrompts={readingPrompts}
            />
          </div>
        ) : showListeningSummary ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 mt-8">
            <ListeningSummaryView
              isDark={isDark}
              onClose={() => setShowListeningSummary(false)}
            />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 mt-0">
            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* STAGES TAB */}
                {activeTab === "stages" && (
                  <div className="grid lg:grid-cols-12 gap-10">
                    {/* Vertical Timeline Nav */}
                    <div className="lg:col-span-3 space-y-4">
                      <h4
                        className={`text-xs font-black uppercase tracking-widest pl-4 mb-6 ${isDark ? "text-slate-500" : "text-slate-400"}`}
                      >
                        The Journey
                      </h4>
                      {stages.map((stage, idx) => (
                        <div key={stage.id} className="relative group">
                          {idx !== stages.length - 1 && (
                            <div
                              className={`absolute left-8 top-16 bottom-[-16px] w-[2px] bg-gradient-to-b ${isDark ? "from-white/10" : "from-slate-200"} to-transparent`}
                            ></div>
                          )}
                          <button
                            onClick={() => setActiveStage(stage.id)}
                            className={`w-full flex items-center gap-4 p-4 rounded-3xl transition-all duration-300 text-left relative z-10 border ${
                              activeStage === stage.id
                                ? isDark
                                  ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md"
                                  : "bg-white border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md"
                                : isDark
                                  ? "border-transparent hover:bg-white/5"
                                  : "border-transparent hover:bg-slate-50"
                            }`}
                          >
                            <div
                              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                                activeStage === stage.id
                                  ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg"
                                  : isDark
                                    ? "bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10"
                                    : "bg-slate-100 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50"
                              }`}
                            >
                              <stage.icon size={20} />
                            </div>
                            <div>
                              <div
                                className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeStage === stage.id ? "text-indigo-500" : "text-slate-400"}`}
                              >
                                Stage {stage.id}
                              </div>
                              <div
                                className={`font-black tracking-wide ${activeStage === stage.id ? (isDark ? "text-white" : "text-slate-900") : isDark ? "text-slate-300" : "text-slate-600"}`}
                              >
                                {stage.name}
                              </div>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Stage Content */}
                    <div className="lg:col-span-9">
                      {activeStage === 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div
                            className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"} border rounded-[2.5rem] p-8 md:p-12 mb-6 backdrop-blur-md relative overflow-hidden shadow-sm`}
                          >
                            <div
                              className={`absolute -right-20 -top-20 w-64 h-64 ${isDark ? "bg-emerald-500/10" : "bg-emerald-500/5"} blur-[80px] rounded-full pointer-events-none`}
                            ></div>
                            <h2
                              className={`text-3xl lg:text-4xl font-black ${isDark ? "text-white" : "text-slate-900"} mb-4`}
                            >
                              Build the Foundation
                            </h2>
                            <p
                              className={`text-lg max-w-2xl leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                            >
                              Before writing well, a student must learn to
                              observe and read deeply. Great outputs demand
                              great inputs.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div
                              className={`${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 hover:bg-slate-50"} border rounded-[2rem] p-8 transition-colors shadow-sm`}
                            >
                              <BookOpen className="text-emerald-500 w-8 h-8 mb-6" />
                              <h3
                                className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"} mb-3`}
                              >
                                Daily Reading Room
                              </h3>
                              <p
                                className={`text-sm mb-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                              >
                                Immerse in stories, articles, essays for 15-20
                                mins daily.
                              </p>
                              <button
                                onClick={() => setShowDailyLibrary(true)}
                                className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border transition-colors ${isDark ? "bg-white/5 text-white hover:bg-white/10 border-white/10" : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200"}`}
                              >
                                Enter Library <ArrowRight size={14} />
                              </button>
                            </div>

                            <div
                              className={`${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 hover:bg-slate-50"} border rounded-[2rem] p-8 transition-colors shadow-sm`}
                            >
                              <Headphones className="text-purple-500 w-8 h-8 mb-6" />
                              <h3
                                className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"} mb-3`}
                              >
                                Listening Summary
                              </h3>
                              <p
                                className={`text-sm mb-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                              >
                                Listen to powerful speeches and note the core
                                message.
                              </p>
                              <button
                                onClick={() => setShowListeningSummary(true)}
                                className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border transition-colors ${isDark ? "bg-white/5 text-white hover:bg-white/10 border-white/10" : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200"}`}
                              >
                                Play Audio <Play size={14} />
                              </button>
                            </div>

                            <div
                              className={`md:col-span-2 ${isDark ? "bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20" : "bg-gradient-to-br from-indigo-50 to-white border-indigo-100"} border rounded-[2rem] p-8 md:p-10 relative shadow-sm`}
                            >
                              <div className="flex justify-between items-start mb-6">
                                <div>
                                  <div className="flex items-center gap-3 mb-2">
                                    <Edit3 className="text-indigo-500" />
                                    <h3
                                      className={`text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
                                    >
                                      5 Lines a Day: Write about your Best
                                      Friend
                                    </h3>
                                  </div>
                                  <p
                                    className={`text-sm ${isDark ? "text-indigo-200/60" : "text-slate-500"}`}
                                  >
                                    Observe your surroundings and describe a
                                    person, place, or situation.
                                  </p>
                                </div>
                                <span
                                  className={`text-xs font-bold px-3 py-1 rounded-full border ${isDark ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" : "bg-indigo-50 text-indigo-600 border-indigo-200"}`}
                                >
                                  Daily Habit
                                </span>
                              </div>

                              <div
                                className={`${isDark ? "bg-black/40 border-white/5" : "bg-slate-50 border-slate-200"} rounded-2xl border p-4 mt-4`}
                              >
                                <textarea
                                  placeholder="Today, I noticed the old tree in the courtyard casting long shadows..."
                                  className={`w-full bg-transparent outline-none resize-none h-24 font-medium ${isDark ? "text-white placeholder:text-slate-600" : "text-slate-800 placeholder:text-slate-400"}`}
                                />
                                <div
                                  className={`flex justify-between items-center mt-4 border-t pt-4 ${isDark ? "border-white/5" : "border-slate-200"}`}
                                >
                                  <span
                                    className={`text-xs font-bold uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}
                                  >
                                    Input ready
                                  </span>
                                  <button className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(99,102,241,0.4)]">
                                    Submit Observation
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStage === 2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div
                            className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"} border rounded-[2.5rem] p-8 md:p-12 mb-6 backdrop-blur-md shadow-sm`}
                          >
                            <h2
                              className={`text-3xl lg:text-4xl font-black ${isDark ? "text-white" : "text-slate-900"} mb-4`}
                            >
                              Start Small Practice
                            </h2>
                            <p
                              className={`text-lg max-w-2xl leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                            >
                              Objective: Crush the fear of writing through
                              small, achievable wins. Focus on sentence
                              formation and basic grammar.
                            </p>
                          </div>

                          {/* Timed Writing Console UI */}
                          <div
                            className={`${isDark ? "bg-gradient-to-br from-slate-900 to-slate-950 border-white/10" : "bg-white border-slate-200"} border rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden`}
                          >
                            <div
                              className={`flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8 border-b pb-6 ${isDark ? "border-white/10" : "border-slate-100"}`}
                            >
                              <div>
                                <span
                                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border inline-block mb-3 ${isDark ? "text-purple-400 bg-purple-500/10 border-purple-500/20" : "text-purple-600 bg-purple-50 border-purple-200"}`}
                                >
                                  Focus Sprint
                                </span>
                                <h3
                                  className={`text-2xl font-bold mt-2 ${isDark ? "text-white" : "text-slate-900"}`}
                                >
                                  Describe Your Best Friend
                                </h3>
                              </div>
                              <div
                                className={`flex items-center gap-4 py-3 px-6 rounded-2xl border ${isDark ? "bg-black/50 border-white/5" : "bg-slate-50 border-slate-200"}`}
                              >
                                <div
                                  className={`flex items-center gap-2 font-mono text-2xl font-bold tracking-wider ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
                                >
                                  <Clock className="w-5 h-5" />{" "}
                                  {formatTime(timerStatus)}
                                </div>
                              </div>
                            </div>

                            <div className="relative mb-6">
                              <textarea
                                onChange={handleWordCount}
                                placeholder="Start typing your paragraph here (aim for 100-150 words)..."
                                className={`w-full h-64 border rounded-2xl p-6 text-lg outline-none transition-all resize-none shadow-inner leading-relaxed ${
                                  isDark
                                    ? "bg-white/5 border-white/10 text-slate-200 focus:border-purple-500/50 focus:bg-white/10"
                                    : "bg-slate-50 border-slate-200 text-slate-800 focus:border-purple-300 focus:bg-white"
                                }`}
                              ></textarea>

                              {/* Fake Grammar Suggestion Popover */}
                              <div
                                className={`absolute top-12 left-1/4 border p-3 rounded-xl shadow-xl flex items-start gap-3 w-64 pointer-events-none opacity-0 hover:opacity-100 transition-opacity ${isDark ? "bg-slate-800 border-slate-700 shadow-black/50" : "bg-white border-amber-100 shadow-slate-200/50"}`}
                              >
                                <Sparkles className="text-amber-500 w-4 h-4 mt-0.5 shrink-0" />
                                <div>
                                  <p
                                    className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                                  >
                                    Consider using{" "}
                                    <span className="text-emerald-500 font-bold">
                                      "compassionate"
                                    </span>{" "}
                                    instead of "very nice".
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <div className="flex gap-6">
                                <div className="flex flex-col">
                                  <span
                                    className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}
                                  >
                                    Words
                                  </span>
                                  <span
                                    className={`text-xl font-black ${
                                      wordCount >= 100
                                        ? "text-emerald-500"
                                        : isDark
                                          ? "text-slate-300"
                                          : "text-slate-700"
                                    }`}
                                  >
                                    {wordCount} / 150
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span
                                    className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}
                                  >
                                    Format
                                  </span>
                                  <span
                                    className={`text-xl font-black ${isDark ? "text-slate-300" : "text-slate-700"}`}
                                  >
                                    Paragraph
                                  </span>
                                </div>
                              </div>

                              <div className="flex gap-3">
                                <button
                                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all border ${isDark ? "bg-white/5 hover:bg-white/10 text-white border-white/10" : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200"}`}
                                >
                                  Save Draft
                                </button>
                                <button
                                  className={`px-8 py-3 rounded-xl font-black text-sm transition-all shadow-lg flex items-center gap-2 ${isDark ? "bg-white text-slate-900 hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                                >
                                  Submit <Target size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStage === 3 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div
                            className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"} border rounded-[2.5rem] p-8 md:p-12 mb-6 backdrop-blur-md shadow-sm`}
                          >
                            <h2
                              className={`text-3xl lg:text-4xl font-black ${isDark ? "text-white" : "text-slate-900"} mb-4`}
                            >
                              Structured Writing
                            </h2>
                            <p
                              className={`text-lg max-w-2xl leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                            >
                              Teach format and organization. Learn the anatomy
                              of powerful essays, reports, and stories.
                            </p>
                          </div>

                          {/* Structure Visualizer */}
                          <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {[
                              {
                                title: "Introduction",
                                desc: "Hook the reader. State intent.",
                                theme: "blue",
                                color: "text-blue-600",
                                darkColor: "text-blue-400",
                                border: "border-blue-100",
                                darkBorder: "border-blue-500/20",
                                bg: "bg-blue-50/50",
                                darkBg: "bg-blue-500/5",
                              },
                              {
                                title: "Body Paragraphs",
                                desc: "Develop arguments & evidence.",
                                theme: "indigo",
                                color: "text-indigo-600",
                                darkColor: "text-indigo-400",
                                border: "border-indigo-100",
                                darkBorder: "border-indigo-500/20",
                                bg: "bg-indigo-50/50",
                                darkBg: "bg-indigo-500/5",
                              },
                              {
                                title: "Conclusion",
                                desc: "Summarize & leave an impact.",
                                theme: "purple",
                                color: "text-purple-600",
                                darkColor: "text-purple-400",
                                border: "border-purple-100",
                                darkBorder: "border-purple-500/20",
                                bg: "bg-purple-50/50",
                                darkBg: "bg-purple-500/5",
                              },
                            ].map((block, i) => (
                              <div
                                key={i}
                                className={`p-8 rounded-[2rem] border transition-all hover:scale-[1.02] ${isDark ? `${block.darkBorder} ${block.darkBg}` : `${block.border} ${block.bg}`} relative overflow-hidden shadow-sm`}
                              >
                                <h4
                                  className={`text-xl font-black mb-3 ${isDark ? block.darkColor : block.color}`}
                                >
                                  {block.title}
                                </h4>
                                <p
                                  className={`text-sm font-medium leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                                >
                                  {block.desc}
                                </p>
                                <div
                                  className={`absolute -right-6 -bottom-6 ${isDark ? "opacity-10 text-white" : "opacity-5 text-slate-900"}`}
                                >
                                  <Layers size={100} />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* AI Evaluation Matrix */}
                          <div
                            className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-100"} border rounded-[3rem] p-10 md:p-14 shadow-sm`}
                          >
                            <div className="flex items-center gap-4 mb-16">
                              <div
                                className={`p-2 rounded-lg ${isDark ? "bg-emerald-500/10" : "bg-emerald-50"}`}
                              >
                                <ShieldCheck
                                  className="text-emerald-500"
                                  size={24}
                                />
                              </div>
                              <h3
                                className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                              >
                                AI Evaluation Matrix
                              </h3>
                            </div>

                            <div className="flex flex-wrap justify-between items-center gap-10 px-4">
                              {[
                                { name: "CLARITY", color: "text-emerald-500" },
                                { name: "GRAMMAR", color: "text-blue-500" },
                                {
                                  name: "CREATIVITY",
                                  color: "text-purple-500",
                                },
                                { name: "STRUCTURE", color: "text-orange-500" },
                              ].map((metric) => (
                                <div
                                  key={metric.name}
                                  className="flex flex-col items-center"
                                >
                                  <span
                                    className={`text-sm font-black tracking-[0.2em] ${metric.color}`}
                                  >
                                    {metric.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStage === 4 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div
                            className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"} border rounded-[2.5rem] p-8 md:p-12 mb-6 backdrop-blur-md shadow-sm`}
                          >
                            <h2
                              className={`text-3xl lg:text-4xl font-black ${isDark ? "text-white" : "text-slate-900"} mb-4`}
                            >
                              Critical Thinking & Creativity
                            </h2>
                            <p
                              className={`text-lg max-w-2xl leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                            >
                              Make writing powerful, not just correct. Learn to
                              persuade, debate, and imagine solutions.
                            </p>
                          </div>

                          {/* Random Prompt Generator Tool */}
                          <div
                            className={`${isDark ? "bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/30" : "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200"} border rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden group shadow-md`}
                          >
                            {isDark && (
                              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                            )}

                            <span
                              className={`inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 ${isDark ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" : "bg-white text-indigo-700 border-indigo-200 shadow-sm"}`}
                            >
                              Creative Intelligence Engine
                            </span>

                            <h3
                              className={`text-2xl md:text-3xl font-serif italic leading-relaxed max-w-2xl mx-auto mb-10 px-4 ${isDark ? "text-white" : "text-slate-800"}`}
                            >
                              "{promptText}"
                            </h3>

                            <div className="flex justify-center flex-wrap gap-4 relative z-10">
                              <button
                                onClick={generatePrompt}
                                className={`px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all flex items-center gap-2 ${isDark ? "bg-white text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "bg-white text-indigo-600 border border-indigo-100 shadow-md hover:shadow-lg"}`}
                              >
                                Reroll Scenario
                              </button>
                              <button
                                className={`outline-none px-8 py-4 rounded-2xl font-black text-sm transition-all border shadow-lg ${isDark ? "bg-indigo-600 text-white hover:bg-indigo-500 border-indigo-400/50" : "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600 shadow-indigo-200"}`}
                              >
                                Accept Challenge
                              </button>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div
                              className={`border rounded-[2.5rem] p-4 shadow-sm overflow-hidden group ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
                            >
                              <div className="relative h-64 rounded-[2rem] overflow-hidden">
                                <img
                                  src="https://i.pinimg.com/736x/91/81/2b/91812b749b2afc0b6685069758e9da11.jpg"
                                  alt="Writer Inspiration"
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                  <p className="text-white text-sm font-medium">
                                    Visualizing your creative flow with CI
                                    Engine.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`border rounded-[2.5rem] p-8 flex flex-col justify-center shadow-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
                            >
                              <h4
                                className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
                              >
                                Interactive Mind Mapping
                              </h4>
                              <p
                                className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"} mb-6`}
                              >
                                Tap on keywords to integrate them into your
                                active draft instantly.
                              </p>
                              <div className="flex flex-wrap gap-3">
                                {[
                                  "Character Arc",
                                  "Plot Twist",
                                  "Suspense",
                                  "Atmosphere",
                                  "Metaphor",
                                  "Pacing",
                                ].map((tag) => (
                                  <button
                                    key={tag}
                                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all hover:-translate-y-1 ${isDark ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20" : "bg-indigo-50 text-indigo-600 border border-indigo-100 hover:bg-indigo-100"}`}
                                  >
                                    + {tag}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div
                              className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"} border p-8 rounded-[2rem] shadow-sm`}
                            >
                              <MessageSquare className="text-pink-500 w-8 h-8 mb-4" />
                              <h4
                                className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                              >
                                Debate Arena
                              </h4>
                              <p
                                className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                              >
                                Write arguments for both sides of a given
                                controversial topic.
                              </p>
                            </div>
                            <div
                              className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"} border p-8 rounded-[2rem] shadow-sm`}
                            >
                              <Lightbulb className="text-amber-500 w-8 h-8 mb-4" />
                              <h4
                                className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                              >
                                Real-Life Solutions
                              </h4>
                              <p
                                className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                              >
                                Draft proposals to solve actual community or
                                global problems.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStage === 5 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div
                            className={`${isDark ? "bg-gradient-to-r from-purple-900/40 to-fuchsia-900/40 border-purple-500/30" : "bg-gradient-to-r from-purple-50 to-fuchsia-50 border-purple-200"} border rounded-[2.5rem] p-8 md:p-12 mb-6 backdrop-blur-md relative overflow-hidden shadow-sm`}
                          >
                            <Trophy
                              className={`absolute -right-10 -bottom-10 w-64 h-64 ${isDark ? "text-white/5" : "text-purple-500/5"}`}
                            />
                            <h2
                              className={`text-3xl lg:text-4xl font-black mb-4 relative z-10 ${isDark ? "text-white" : "text-slate-900"}`}
                            >
                              Advanced Writer Level
                            </h2>
                            <p
                              className={`text-lg max-w-2xl leading-relaxed relative z-10 ${isDark ? "text-slate-300" : "text-slate-600"}`}
                            >
                              Refine, edit, and publish. Make your content ready
                              for the world to read.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-3 gap-6">
                            <div
                              className={`col-span-1 border rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
                            >
                              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1 mb-6 shadow-xl">
                                <div
                                  className={`w-full h-full rounded-full flex items-center justify-center border-4 ${isDark ? "bg-slate-900 border-slate-900" : "bg-white border-white"}`}
                                >
                                  <Award className="w-10 h-10 text-purple-500" />
                                </div>
                              </div>
                              <h3
                                className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                              >
                                Published Author
                              </h3>
                              <p
                                className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? "text-purple-400" : "text-purple-600"}`}
                              >
                                Elite Badge
                              </p>
                              <button
                                className={`text-sm border px-4 py-2 rounded-lg transition-colors ${isDark ? "text-slate-300 bg-white/5 border-white/10 hover:bg-white/10" : "text-slate-700 bg-slate-50 border-slate-200 hover:bg-slate-100"}`}
                              >
                                View Certificate
                              </button>
                            </div>

                            <div className="col-span-2 grid grid-cols-2 gap-4">
                              {[
                                {
                                  title: "Proofreading Pro",
                                  desc: "Identify obscure errors.",
                                  icon: Edit3,
                                },
                                {
                                  title: "SEO Writing",
                                  desc: "Write for discovery.",
                                  icon: Activity,
                                },
                                {
                                  title: "Blog Publishing",
                                  desc: "Push to live servers.",
                                  icon: Layout,
                                },
                                {
                                  title: "Script Writing",
                                  desc: "Format dialogue flows.",
                                  icon: Type,
                                },
                              ].map((skill, i) => (
                                <div
                                  key={i}
                                  className={`border p-6 rounded-2xl transition-all cursor-pointer shadow-sm ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 hover:bg-slate-50 hover:shadow-md"}`}
                                >
                                  <skill.icon className="text-indigo-500 w-6 h-6 mb-4" />
                                  <h4
                                    className={`font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
                                  >
                                    {skill.title}
                                  </h4>
                                  <p
                                    className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}
                                  >
                                    {skill.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {/* PROGRESSION PLAN TAB */}
                {activeTab === "progress" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-12"
                  >
                    {/* Skill Levels */}
                    <div>
                      <h2
                        className={`text-3xl font-black mb-8 flex items-center gap-3 ${isDark ? "text-white" : "text-slate-900"}`}
                      >
                        <TrendingUp className="text-indigo-500" /> Skill
                        Progression Matrix
                      </h2>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div
                          className={`border rounded-[2rem] p-8 shadow-sm ${isDark ? "bg-gradient-to-b from-emerald-500/10 to-transparent border-emerald-500/20" : "bg-gradient-to-b from-emerald-50 to-white border-emerald-200"}`}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${isDark ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-emerald-100 text-emerald-600 border-emerald-200"}`}
                          >
                            <Layout size={24} />
                          </div>
                          <h3
                            className={`text-xl font-black mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                          >
                            Beginner
                          </h3>
                          <p
                            className={`text-xs font-bold uppercase tracking-widest mb-6 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                          >
                            Sentence Builder
                          </p>
                          <ul className="space-y-3">
                            {[
                              "Simple sentences",
                              "Basic paragraphs",
                              "Vocab improvement",
                            ].map((str, i) => (
                              <li
                                key={i}
                                className={`flex items-center gap-2 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}
                              >
                                <Check size={14} className="text-emerald-500" />{" "}
                                {str}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div
                          className={`border rounded-[2rem] p-8 shadow-sm ${isDark ? "bg-gradient-to-b from-blue-500/10 to-transparent border-blue-500/20" : "bg-gradient-to-b from-blue-50 to-white border-blue-200"}`}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${isDark ? "bg-blue-500/20 text-blue-400 border-blue-500/30" : "bg-blue-100 text-blue-600 border-blue-200"}`}
                          >
                            <Layers size={24} />
                          </div>
                          <h3
                            className={`text-xl font-black mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                          >
                            Intermediate
                          </h3>
                          <p
                            className={`text-xs font-bold uppercase tracking-widest mb-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                          >
                            Structured Writer
                          </p>
                          <ul className="space-y-3">
                            {[
                              "Multi-paragraph essays",
                              "Opinion writing",
                              "Descriptive/Narrative",
                            ].map((str, i) => (
                              <li
                                key={i}
                                className={`flex items-center gap-2 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}
                              >
                                <Check size={14} className="text-blue-500" />{" "}
                                {str}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div
                          className={`border rounded-[2rem] p-8 shadow-sm ${isDark ? "bg-gradient-to-b from-fuchsia-500/10 to-transparent border-fuchsia-500/20" : "bg-gradient-to-b from-fuchsia-50 to-white border-fuchsia-200"}`}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${isDark ? "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30" : "bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200"}`}
                          >
                            <Trophy size={24} />
                          </div>
                          <h3
                            className={`text-xl font-black mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                          >
                            Advanced
                          </h3>
                          <p
                            className={`text-xs font-bold uppercase tracking-widest mb-6 ${isDark ? "text-fuchsia-400" : "text-fuchsia-600"}`}
                          >
                            Confident Author
                          </p>
                          <ul className="space-y-3">
                            {[
                              "Persuasive writing",
                              "Research-based",
                              "Ready to publish",
                            ].map((str, i) => (
                              <li
                                key={i}
                                className={`flex items-center gap-2 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}
                              >
                                <Check size={14} className="text-fuchsia-500" />{" "}
                                {str}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Weekly Plan */}
                    <div>
                      <h2
                        className={`text-3xl font-black mb-8 flex items-center gap-3 ${isDark ? "text-white" : "text-slate-900"}`}
                      >
                        <Calendar className="text-purple-500" /> Weekly
                        Implementation
                      </h2>
                      <div className="grid md:grid-cols-4 gap-4">
                        {[
                          {
                            wk: "1-2",
                            title: "Foundation",
                            desc: "Reading + Vocab + Journal",
                          },
                          {
                            wk: "3-4",
                            title: "Building blocks",
                            desc: "Paragraphs + Basic Essays",
                          },
                          {
                            wk: "5-6",
                            title: "Structuring",
                            desc: "Organized Writing + Feedback",
                          },
                          {
                            wk: "7-8",
                            title: "Mastery",
                            desc: "Creative Writing + Publishing",
                          },
                        ].map((plan, i) => (
                          <div
                            key={i}
                            className={`border rounded-2xl p-6 relative overflow-hidden group transition-colors shadow-sm ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 hover:bg-slate-50"}`}
                          >
                            <span
                              className={`absolute top-0 right-0 text-7xl font-black -mt-2 -mr-2 transition-colors ${isDark ? "text-white/5 group-hover:text-white/10" : "text-slate-100 group-hover:text-slate-200"}`}
                            >
                              {i + 1}
                            </span>
                            <div
                              className={`text-xs font-black uppercase tracking-widest mb-2 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
                            >
                              Weeks {plan.wk}
                            </div>
                            <div
                              className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
                            >
                              {plan.title}
                            </div>
                            <div
                              className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                            >
                              {plan.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ASSESSMENTS TAB */}
                {activeTab === "assessments" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div
                      className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"} border rounded-[2.5rem] p-8 md:p-12 mb-10 backdrop-blur-md text-center max-w-4xl mx-auto shadow-sm`}
                    >
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border ${isDark ? "bg-indigo-500/20 border-indigo-500/30" : "bg-indigo-100 border-indigo-200"}`}
                      >
                        <Target
                          className={`w-10 h-10 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
                        />
                      </div>
                      <h2
                        className={`text-3xl lg:text-4xl font-black mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
                      >
                        Skill Assessment Hub
                      </h2>
                      <p
                        className={`text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                      >
                        Evaluate progress through structured, timed, and
                        creative challenges.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                      {[
                        {
                          title: "Speed Writing Test",
                          desc: "Write 200 words in 15 minutes.",
                          icon: Zap,
                          darkBg: "bg-orange-500/20",
                          lightBg: "bg-orange-100",
                          darkText: "text-orange-400",
                          lightText: "text-orange-600",
                          darkBorder: "border-orange-500/30",
                          lightBorder: "border-orange-200",
                        },
                        {
                          title: "Creativity Test",
                          desc: "Continue a story from a given unpredictable sentence.",
                          icon: Sparkles,
                          darkBg: "bg-fuchsia-500/20",
                          lightBg: "bg-fuchsia-100",
                          darkText: "text-fuchsia-400",
                          lightText: "text-fuchsia-600",
                          darkBorder: "border-fuchsia-500/30",
                          lightBorder: "border-fuchsia-200",
                        },
                        {
                          title: "Structure Test",
                          desc: "Rearrange mixed paragraphs into logical flow.",
                          icon: Layers,
                          darkBg: "bg-blue-500/20",
                          lightBg: "bg-blue-100",
                          darkText: "text-blue-400",
                          lightText: "text-blue-600",
                          darkBorder: "border-blue-500/30",
                          lightBorder: "border-blue-200",
                        },
                        {
                          title: "Editing Test",
                          desc: "Find and correct grammar mistakes in a passage.",
                          icon: Edit3,
                          darkBg: "bg-emerald-500/20",
                          lightBg: "bg-emerald-100",
                          darkText: "text-emerald-400",
                          lightText: "text-emerald-600",
                          darkBorder: "border-emerald-500/30",
                          lightBorder: "border-emerald-200",
                        },
                      ].map((test, i) => (
                        <div
                          key={i}
                          className={`border rounded-[2rem] p-8 flex items-start gap-6 transition-all cursor-pointer group hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 hover:bg-slate-50"}`}
                        >
                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border group-hover:scale-110 transition-transform ${
                              isDark
                                ? `${test.darkBg} ${test.darkText} ${test.darkBorder}`
                                : `${test.lightBg} ${test.lightText} ${test.lightBorder}`
                            }`}
                          >
                            <test.icon size={24} />
                          </div>
                          <div>
                            <h3
                              className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                            >
                              {test.title}
                            </h3>
                            <p
                              className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                            >
                              {test.desc}
                            </p>
                            <div
                              className={`mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${isDark ? "text-slate-500 group-hover:text-white" : "text-slate-500 group-hover:text-indigo-600"}`}
                            >
                              Start Test <ChevronRight size={14} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* HEALTH TAB */}
                {activeTab === "health" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div
                      className={`border rounded-[2.5rem] p-8 md:p-12 mb-10 backdrop-blur-md flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto shadow-sm ${isDark ? "bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border-emerald-500/20" : "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200"}`}
                    >
                      <div
                        className={`w-32 h-32 rounded-full flex items-center justify-center shrink-0 border-4 relative ${isDark ? "bg-emerald-500/20 border-emerald-500/30" : "bg-emerald-100 border-emerald-200"}`}
                      >
                        <Stethoscope
                          className={`w-16 h-16 relative z-10 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                        />
                        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                      </div>
                      <div>
                        <h2
                          className={`text-3xl lg:text-4xl font-black mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
                        >
                          Mental & Brain Health
                        </h2>
                        <p
                          className={`text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                        >
                          Writing is a cognitively demanding task. A healthy
                          brain is the foundation of a creative and organized
                          writer.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                      {[
                        {
                          title: "Quality Sleep",
                          desc: "7-8 hours daily for memory consolidation.",
                          icon: Moon,
                          darkBg: "bg-indigo-500/20",
                          lightBg: "bg-indigo-100",
                          darkText: "text-indigo-400",
                          lightText: "text-indigo-600",
                        },
                        {
                          title: "Hydration",
                          desc: "Brain functions best when fully hydrated.",
                          icon: Droplets,
                          darkBg: "bg-blue-500/20",
                          lightBg: "bg-blue-100",
                          darkText: "text-blue-400",
                          lightText: "text-blue-600",
                        },
                        {
                          title: "Digital Detox",
                          desc: "Reduce screen distraction for deep work.",
                          icon: ShieldCheck,
                          darkBg: "bg-rose-500/20",
                          lightBg: "bg-rose-100",
                          darkText: "text-rose-400",
                          lightText: "text-rose-600",
                        },
                        {
                          title: "Handwriting",
                          desc: "Practice weekly to stimulate brain mapping.",
                          icon: Edit3,
                          darkBg: "bg-amber-500/20",
                          lightBg: "bg-amber-100",
                          darkText: "text-amber-400",
                          lightText: "text-amber-600",
                        },
                        {
                          title: "Meditation",
                          desc: "5 mins daily improves structural clarity.",
                          icon: Brain,
                          darkBg: "bg-purple-500/20",
                          lightBg: "bg-purple-100",
                          darkText: "text-purple-400",
                          lightText: "text-purple-600",
                        },
                        {
                          title: "Read Aloud",
                          desc: "Improves flow, rhythm and catches errors.",
                          icon: Mic,
                          darkBg: "bg-emerald-500/20",
                          lightBg: "bg-emerald-100",
                          darkText: "text-emerald-400",
                          lightText: "text-emerald-600",
                        },
                      ].map((tip, i) => (
                        <div
                          key={i}
                          className={`border rounded-2xl p-6 flex flex-col items-center text-center transition-colors shadow-sm ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 hover:bg-slate-50 hover:shadow-md"}`}
                        >
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                              isDark
                                ? `${tip.darkBg} ${tip.darkText}`
                                : `${tip.lightBg} ${tip.lightText}`
                            }`}
                          >
                            <tip.icon size={20} />
                          </div>
                          <h4
                            className={`font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                          >
                            {tip.title}
                          </h4>
                          <p
                            className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                          >
                            {tip.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {/* OUR PUBLISHER TAB */}
                {activeTab === "publisher" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSubTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {activeSubTab === "about" && (
                          <div
                            id="publisher-about"
                            className="w-full space-y-16 mt-0"
                          >
                            {/* SECTION 1: Inventor-style Hero tailored for Writers */}
                            <div className="relative z-10 w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1200px] mx-auto min-h-[45vh] sm:min-h-[50vh] flex flex-col items-center justify-center overflow-hidden rounded-[2rem] mt-4 sm:mt-6 bg-sky-100 border-4 border-blue-900 shadow-[0_10px_25px_rgba(30,58,138,0.15)] py-8 sm:py-16 px-4">
                              {/* Rotating Rays */}
                              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] origin-center"
                                  style={{
                                    background:
                                      "repeating-conic-gradient(from 0deg, transparent 0deg 15deg, rgba(59, 130, 246, 0.15) 15deg 30deg)",
                                  }}
                                />
                              </div>

                              {/* Floating Elements - WRITER RELATED */}
                              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
                                <motion.img
                                  src="https://static.vecteezy.com/system/resources/thumbnails/069/997/057/small/a-boy-is-writing-in-a-book-with-a-pencil-png.png"
                                  alt="3D Book"
                                  animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 10, 0],
                                  }}
                                  transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                  className="absolute top-[5%] left-[5%] w-14 h-14 sm:w-28 sm:h-28 object-contain opacity-80 drop-shadow-xl"
                                />
                                <motion.img
                                  src="https://png.pngtree.com/png-vector/20250621/ourmid/pngtree-pencil-with-orange-body-png-image_16567132.png"
                                  alt="3D Pencil"
                                  animate={{
                                    y: [0, 25, 0],
                                    rotate: [-10, 5, -10],
                                  }}
                                  transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                  }}
                                  className="absolute top-[15%] right-[5%] w-20 h-20 sm:w-32 sm:h-32 object-contain opacity-90 drop-shadow-2xl"
                                />
                                <motion.img
                                  src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png"
                                  alt="3D Document"
                                  animate={{ y: [0, -15, 0], rotate: [0, 360] }}
                                  transition={{
                                    y: {
                                      duration: 5,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    },
                                    rotate: {
                                      duration: 10,
                                      repeat: Infinity,
                                      ease: "linear",
                                    },
                                  }}
                                  className="absolute bottom-[10%] left-[8%] w-16 h-16 sm:w-24 sm:h-24 object-contain opacity-80 drop-shadow-xl hidden sm:block"
                                />
                                <motion.img
                                  src="https://png.pngtree.com/png-vector/20241113/ourmid/pngtree-cute-cartoon-child-writing-on-paper-isolated-vector-illustration-png-image_14326326.png"
                                  alt="3D Notebook"
                                  animate={{
                                    y: [0, 20, 0],
                                    rotate: [5, -5, 5],
                                  }}
                                  transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2,
                                  }}
                                  className="absolute bottom-[15%] right-[8%] w-16 h-16 sm:w-28 sm:h-28 object-contain opacity-90 drop-shadow-2xl hidden sm:block"
                                />
                              </div>

                              {/* Main Hero Content */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col items-center justify-center w-full max-w-4xl text-center relative z-20"
                              >
                                <h1 className="w-full text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 tracking-tight mb-2 sm:mb-4 drop-shadow-sm px-2">
                                  Learner As Writer
                                </h1>

                                <h2 className="text-[12px] sm:text-sm md:text-lg text-blue-800 mb-6 sm:mb-8 leading-snug sm:leading-relaxed max-w-[280px] sm:max-w-xl font-bold opacity-80 px-2">
                                  Nation's Young Authors
                                </h2>

                                <div className="flex items-center justify-center gap-2 sm:gap-8 w-full z-30">
                                  <button
                                    onClick={() => {
                                      setShowStoryCreator(true);
                                      setActiveSubTab("pad");
                                    }}
                                    className="px-6 py-3 sm:px-10 sm:py-4 bg-blue-600 text-white rounded-xl sm:rounded-2xl font-black text-[12px] sm:text-sm uppercase tracking-widest border-2 sm:border-[3px] border-blue-900 shadow-[4px_4px_0px_#1E3A8A] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center cursor-pointer"
                                  >
                                    Start Writing
                                  </button>
                                </div>
                              </motion.div>
                            </div>
                            {/* SECTION 2: Little Authors Inspired Section */}
                            <div className="grid lg:grid-cols-2 gap-16 items-center pt-8">
                              <div className="space-y-8">
                                <h1
                                  className={`text-3xl lg:text-4xl font-black leading-tight flex flex-wrap gap-x-4 items-center ${isDark ? "text-white" : "text-slate-900"}`}
                                >
                                  Shaping Young Writers into
                                  <span className="text-blue-400 block">
                                    Future Literary Leaders
                                  </span>
                                </h1>
                                <p
                                  className={`text-lg lg:text-xl leading-relaxed max-w-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}
                                >
                                  At{" "}
                                  <span className="italic font-bold text-blue-800">
                                    Young Authors
                                  </span>
                                  , we believe that every child carries a story
                                  waiting to be told. Within each imagination
                                  lies creativity, courage, and a voice that
                                  deserves to be heard.
                                </p>
                                <p
                                  className={`text-lg lg:text-xl leading-relaxed max-w-xl ${isDark ? "text-slate-400" : "text-slate-500"}`}
                                >
                                  We celebrate all forms of expression and
                                  encourage young minds to explore, create, and
                                  be proud of what they write. Because every
                                  word has the power to inspire and every young
                                  author deserves to be heard.
                                </p>
                                <div className="pt-4">
                                  <button
                                    onClick={() => {
                                      setActiveSubTab("learn-more");
                                      setTimeout(() => {
                                        document
                                          .getElementById("learn-more-section")
                                          ?.scrollIntoView({
                                            behavior: "smooth",
                                          });
                                      }, 100);
                                    }}
                                    className="px-12 py-5 bg-blue-800 hover:bg-blue-600 text-white font-black rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/20 text-lg"
                                  >
                                    Learn More{" "}
                                    <ArrowRight
                                      size={24}
                                      className="group-hover:translate-x-1 transition-transform"
                                    />
                                  </button>
                                </div>
                              </div>

                              <div className="relative group">
                                <div
                                  className={`absolute -inset-4 rounded-[4rem] blur-2xl opacity-20 transition-opacity group-hover:opacity-30 ${isDark ? "bg-blue-500" : "bg-blue-400"}`}
                                ></div>
                                <div
                                  className={`relative aspect-[16/10] lg:aspect-[4/3] rounded-[3.5rem] overflow-hidden border-[10px] ${isDark ? "border-white/10" : "border-white shadow-3xl shadow-emerald-500/20"}`}
                                >
                                  <AnimatePresence mode="popLayout">
                                    <motion.img
                                      key={currentSlide}
                                      src={
                                        [
                                          "https://i.pinimg.com/1200x/a2/a6/51/a2a65171d83b8822fc10e5fca0dd0e8c.jpg",
                                          "https://i.pinimg.com/736x/32/a1/5c/32a15c12183fb1f0892e6487f100b9e2.jpg",
                                          "https://i.pinimg.com/736x/d3/26/ce/d326cecc989db53725067e585ef49a17.jpg",
                                          "https://i.pinimg.com/1200x/c5/71/b7/c571b720b2d5ffa4360b8468958b9799.jpg",
                                          "https://i.pinimg.com/736x/59/cc/ef/59ccefbcb1207b8e8089c3edbcaeddf4.jpg",
                                          "https://i.pinimg.com/736x/f7/43/62/f74362fecdaf7a87fe503dd85c3f80ac.jpg",
                                        ][currentSlide]
                                      }
                                      alt="Story slide"
                                      initial={{ opacity: 0, x: 50 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -50 }}
                                      transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                      }}
                                      className="w-full h-full object-cover absolute inset-0 swiper-slide swiper-slide-active"
                                    />
                                  </AnimatePresence>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                                  <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                    <button
                                      onClick={() =>
                                        setCurrentSlide((prev) =>
                                          prev === 0 ? 5 : prev - 1,
                                        )
                                      }
                                      className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/50 transition-all focus:outline-none"
                                    >
                                      <ChevronLeft size={32} />
                                    </button>
                                    <button
                                      onClick={() =>
                                        setCurrentSlide((prev) =>
                                          prev === 5 ? 0 : prev + 1,
                                        )
                                      }
                                      className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/50 transition-all focus:outline-none"
                                    >
                                      <ChevronRight size={32} />
                                    </button>
                                  </div>

                                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                                      <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`w-3 h-3 rounded-full transition-all focus:outline-none ${currentSlide === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* CATEGORY ICONS & LATEST STORIES SECTION */}
                            <div className="pt-24 space-y-16">
                              <div className="flex flex-col items-center justify-center w-full space-y-4">
                                <h3
                                  className={`text-3xl md:text-5xl font-black tracking-widest uppercase ${isDark ? "text-white" : "text-[#222222]"}`}
                                >
                                  LATEST{" "}
                                  <span className="text-blue-500">STORIES</span>
                                </h3>
                                <div className="h-[2px] w-[80px] bg-blue-500"></div>
                              </div>
                              {/* Icon Categories */}
                              <div className="max-w-6xl mx-auto px-4 mt-8">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
                                  {[
                                    {
                                      name: "Bedtime Stories",
                                      image:
                                        "https://i.pinimg.com/1200x/98/ff/ba/98ffbaff8ee6a7b9379214b04d8b640e.jpg",
                                    },
                                    {
                                      name: "Festival",
                                      image:
                                        "https://i.pinimg.com/736x/36/b9/6c/36b96ccd5a46348ef1ce65ba0bcedca4.jpg",
                                    },
                                    {
                                      name: "Pride&Nation",
                                      image:
                                        "https://i.pinimg.com/736x/ee/ae/03/eeae03f57a3c4c2b8d0b17eabfaba3a7.jpg",
                                    },
                                    {
                                      name: "Nature",
                                      image:
                                        "https://i.pinimg.com/1200x/e3/14/96/e31496de96113e7b35e38ce3c2da86a6.jpg",
                                    },
                                    {
                                      name: "Art",
                                      image:
                                        "https://i.pinimg.com/1200x/bb/ee/bd/bbeebd3392ebfe46b7c58fd840e2f9f4.jpg",
                                    },
                                    {
                                      name: "Moral Stories",
                                      image:
                                        "https://i.pinimg.com/736x/68/86/47/6886470927620bca9af35dc37cd914ad.jpg",
                                    },
                                  ].map((cat, idx) => (
                                    <div
                                      key={idx}
                                      onClick={() =>
                                        setSelectedCategory(cat.name)
                                      }
                                      className="flex flex-col items-center gap-3 group cursor-pointer"
                                    >
                                      <div
                                        className={`w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-transform hover:-translate-y-2 shadow-md hover:shadow-xl overflow-hidden ${isDark ? "bg-slate-800" : "bg-white"}`}
                                      >
                                        <img
                                          src={cat.image}
                                          alt={cat.name}
                                          className="w-full h-full transform group-hover:scale-110 transition-transform object-cover"
                                        />
                                      </div>
                                      <span
                                        className={`text-[15px] font-medium tracking-wide ${isDark ? "text-slate-300" : "text-slate-700"}`}
                                      >
                                        {cat.name}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {selectedCategory ? (
                                <StoryCategoryView
                                  isDark={isDark}
                                  category={selectedCategory}
                                  onBack={() => setSelectedCategory(null)}
                                />
                              ) : (
                                <>
                                  {/* LATEST STORIES SLIDER */}
                                  <div className="relative max-w-7xl mx-auto px-4 mt-6">
                                    <div className="overflow-hidden -mx-3">
                                      <div
                                        className="flex w-[600%] sm:w-[300%] lg:w-[150%] transition-transform duration-700 ease-in-out"
                                        style={{
                                          transform: `translateX(-${latestStorySlide * (100 / 6)}%)`,
                                        }}
                                      >
                                        {[
                                          {
                                            title: "ZOM100",
                                            desc: "ZOM100 The siren began at exactly 3:17 A.M. Not outside. Inside...",
                                            author: "A Aniruthan",
                                            image:
                                              "https://i.pinimg.com/1200x/bb/26/19/bb2619430dc313a253c9565f4360cd27.jpg",
                                          },
                                          {
                                            title:
                                              "A Tale of Scales, Sands and Secrets",
                                            desc: "A Tale of Scales, Sands and Secrets One day, a...",
                                            author: "schettiar",
                                            image:
                                              "https://i.pinimg.com/736x/52/74/96/5274964027f2f598dff2f13d59a8a8d0.jpg",
                                          },
                                          {
                                            title:
                                              "The monkey who grants wishes",
                                            desc: "The monkey who grants wishes Once upon a time there...",
                                            author: "Sukaina Mirza",
                                            image:
                                              "https://media.craiyon.com/2025-07-29/YwEwJcjCRNi2OGKTVxkm-Q.webp",
                                          },
                                          {
                                            title: "The Orphan's Secret",
                                            desc: 'The Orphan\'s Secret "Where am I?" I wondered as I...',
                                            author: "Oliva Gu",
                                            image:
                                              "https://i.pinimg.com/736x/10/ab/3d/10ab3dd08300bd2c07d9306834851c82.jpg",
                                          },
                                          {
                                            title: "The Magic Forest",
                                            desc: "Deep in the enchanted woods, a little girl discovered a hidden portal to a world of endless imagination and vibrant colors...",
                                            author: "Maya, 8",
                                            image:
                                              "https://cdn.8thwall.com/apps/cover/2in5cu3lm0ulrezdczgxhe4pq25wx3iojd1bdkn4qoli1e78vktgx2sk-preview-600x315",
                                          },
                                          {
                                            title: "Space Puppy",
                                            desc: "When a stray puppy climbed into the starship, nobody expected the adventure that awaited in the galaxy...",
                                            author: "Liam, 11",
                                            image:
                                              "https://i.pinimg.com/736x/f3/fe/fe/f3fefeb53ef616e89346fc696cfdca60.jpg",
                                          },
                                        ].map((story, i) => (
                                          <StoryCard
                                            key={i}
                                            item={story}
                                            isDark={isDark}
                                            category="BEDTIME STORIES"
                                            onReadMore={() => {
                                              setActiveSubTab("story");
                                              setTimeout(() => {
                                                document
                                                  .getElementById(
                                                    "publisher-story",
                                                  )
                                                  ?.scrollIntoView({
                                                    behavior: "smooth",
                                                  });
                                              }, 100);
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>

                                    {/* Arrows (Visible on Large Screens) */}
                                    <div className="absolute top-[60%] -translate-y-1/2 left-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setLatestStorySlide((prev) =>
                                            prev === 0 ? 2 : prev - 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronLeft
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>
                                    <div className="absolute top-[60%] -translate-y-1/2 right-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setLatestStorySlide((prev) =>
                                            prev >= 2 ? 0 : prev + 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronRight
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>

                                    {/* Paginator Dots */}
                                    <div className="flex justify-center gap-3 mt-12">
                                      {[0, 1, 2].map((dot) => (
                                        <button
                                          key={dot}
                                          onClick={() =>
                                            setLatestStorySlide(dot)
                                          }
                                          className={`rounded-full transition-all focus:outline-none ${latestStorySlide === dot ? "bg-[#333333] dark:bg-white w-[10px] h-[10px]" : "bg-slate-300 dark:bg-slate-700 w-[8px] h-[8px] hover:bg-slate-400 mt-0.5"}`}
                                        />
                                      ))}
                                    </div>
                                  </div>

                                  <div className="flex flex-col items-center justify-center w-full mb-12 space-y-4 pt-8">
                                    <h3
                                      className={`text-3xl md:text-5xl font-black tracking-widest uppercase ${isDark ? "text-white" : "text-[#222222]"}`}
                                    >
                                      PANCHATANTRA{" "}
                                      <span className="text-red-500">
                                        TALES
                                      </span>
                                    </h3>
                                    <div className="h-[2px] w-[80px] bg-red-500"></div>
                                  </div>

                                  <div className="relative max-w-7xl mx-auto px-4">
                                    <div className="overflow-hidden -mx-3">
                                      <div
                                        className="flex w-[600%] sm:w-[300%] lg:w-[150%] transition-transform duration-700 ease-in-out"
                                        style={{
                                          transform: `translateX(-${panchatantraSlide * (100 / 6)}%)`,
                                        }}
                                      >
                                        {[
                                          {
                                            title: "The Three Fishes",
                                            desc: "The Three Fishes Once upon a time, in a large...",
                                            image:
                                              "https://i.pinimg.com/1200x/b8/58/d0/b858d0df290b0137c9ddb2ac437d2dbd.jpg",
                                          },
                                          {
                                            title: "The Dove And The Ant",
                                            desc: "The Dove And The Ant One hot summer day, a...",
                                            image:
                                              "https://i.pinimg.com/1200x/95/56/45/9556454b198b83a74ce449a197a95bed.jpg",
                                          },
                                          {
                                            title: "The Flea And The Bug",
                                            desc: "The Flea And The Bug Once upon a time, in...",
                                            image:
                                              "https://i.pinimg.com/736x/bc/ce/0a/bcce0a155caae26639d4eca5bc06724a.jpg",
                                          },
                                          {
                                            title: "The Hermit And The Mouse",
                                            desc: "The Hermit And The Mouse Once upon a time, there...",
                                            image:
                                              "https://i.pinimg.com/736x/16/bb/90/16bb903b6be4d622d9809b9c07f2ce84.jpg",
                                          },
                                          {
                                            title: "The Elephants And Mice",
                                            desc: "The Elephants And The Mice Once upon a time, in...",
                                            image:
                                              "https://i.pinimg.com/1200x/db/27/31/db2731e7b0162439f2d47a709d4a1a57.jpg",
                                          },
                                          {
                                            title: "The Tortoise And Rabbit",
                                            desc: "The Tortoise And The Rabbit A tortoise lived in a...",
                                            image:
                                              "https://i.pinimg.com/1200x/c2/2e/70/c22e70af59b4ebb7976e53c7634a5b58.jpg",
                                          },
                                        ].map((story, i) => (
                                          <StoryCard
                                            key={i}
                                            item={story}
                                            isDark={isDark}
                                            category="CLASSIC TALES"
                                            onReadMore={() => {
                                              setActiveSubTab("story");
                                              setTimeout(() => {
                                                document
                                                  .getElementById(
                                                    "publisher-story",
                                                  )
                                                  ?.scrollIntoView({
                                                    behavior: "smooth",
                                                  });
                                              }, 100);
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>

                                    {/* Arrows (Visible on Large Screens) */}
                                    <div className="absolute top-[60%] -translate-y-1/2 left-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setPanchatantraSlide((prev) =>
                                            prev === 0 ? 2 : prev - 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronLeft
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>
                                    <div className="absolute top-[60%] -translate-y-1/2 right-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setPanchatantraSlide((prev) =>
                                            prev >= 2 ? 0 : prev + 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronRight
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>

                                    {/* Paginator Dots */}
                                    <div className="flex justify-center gap-3 mt-12">
                                      {[0, 1, 2].map((dot) => (
                                        <button
                                          key={dot}
                                          onClick={() =>
                                            setPanchatantraSlide(dot)
                                          }
                                          className={`rounded-full transition-all focus:outline-none ${panchatantraSlide === dot ? "bg-[#333333] dark:bg-white w-[10px] h-[10px]" : "bg-slate-300 dark:bg-slate-700 w-[8px] h-[8px] hover:bg-slate-400 mt-0.5"}`}
                                        />
                                      ))}
                                    </div>
                                  </div>

                                  {/* TENALI RAMA STORIES */}
                                  <div className="flex flex-col items-center justify-center w-full mb-12 space-y-4 pt-8">
                                    <h3
                                      className={`text-3xl md:text-5xl font-black tracking-widest uppercase text-center ${isDark ? "text-white" : "text-[#222222]"}`}
                                    >
                                      TENALI RAMA{" "}
                                      <span className="text-orange-500">
                                        STORIES
                                      </span>
                                    </h3>
                                    <div className="h-[2px] w-[80px] bg-orange-500"></div>
                                  </div>

                                  <div className="relative max-w-7xl mx-auto px-4 mt-6">
                                    <div className="overflow-hidden -mx-3">
                                      <div
                                        className="flex w-[600%] sm:w-[300%] lg:w-[150%] transition-transform duration-700 ease-in-out"
                                        style={{
                                          transform: `translateX(-${tenaliSlide * (100 / 6)}%)`,
                                        }}
                                      >
                                        {[
                                          {
                                            title: "The Stolen Well",
                                            desc: "When Tenali Rama was accused of stealing a well...",
                                            image:
                                              "https://i.pinimg.com/736x/ff/3b/e1/ff3be1632b8bb1f9f2c8ed5d3f3d1b4e.jpg",
                                          },
                                          {
                                            title: "The Red Peacock",
                                            desc: "A painter claimed to have found a red peacock...",
                                            image:
                                              "https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/8717413a40ee4f6e8d779699ab61fe2d.jpg",
                                          },
                                          {
                                            title:
                                              "Tenali Rama and the Brinjal",
                                            desc: "Tenali's son ate the favorite brinjal...",
                                            image:
                                              "https://i.pinimg.com/736x/c2/55/f4/c255f46ab0820e51f4c9cc8ec42c5865.jpg",
                                          },
                                          {
                                            title: "The Heaviest Thing",
                                            desc: "What is the heaviest thing in the world?...",
                                            image:
                                              "https://i.pinimg.com/1200x/33/91/bb/3391bbdbb5c89edccf595d89e62ae158.jpg",
                                          },
                                          {
                                            title:
                                              "The Reward and the Punishment",
                                            desc: "The king's guards demanded half of Tenali's reward...",
                                            image:
                                              "https://i.pinimg.com/736x/86/23/fe/8623fe89369f98b6c8ce480ccd82cd56.jpg",
                                          },
                                          {
                                            title: "The Magical Stick",
                                            desc: "Find the thief among the merchants using magic sticks...",
                                            image:
                                              "https://i.pinimg.com/736x/35/73/bd/3573bd4d21b5440db6f7f5ae1d4aefbf.jpg",
                                          },
                                        ].map((story, i) => (
                                          <StoryCard
                                            key={i}
                                            item={story}
                                            isDark={isDark}
                                            category="CLASSIC TALES"
                                            onReadMore={() => {
                                              setActiveSubTab("story");
                                              setTimeout(() => {
                                                document
                                                  .getElementById(
                                                    "publisher-story",
                                                  )
                                                  ?.scrollIntoView({
                                                    behavior: "smooth",
                                                  });
                                              }, 100);
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>

                                    {/* Arrows (Visible on Large Screens) */}
                                    <div className="absolute top-[60%] -translate-y-1/2 left-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setTenaliSlide((prev) =>
                                            prev === 0 ? 2 : prev - 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronLeft
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>
                                    <div className="absolute top-[60%] -translate-y-1/2 right-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setTenaliSlide((prev) =>
                                            prev >= 2 ? 0 : prev + 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronRight
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>

                                    {/* Paginator Dots */}
                                    <div className="flex justify-center gap-3 mt-12">
                                      {[0, 1, 2].map((dot) => (
                                        <button
                                          key={dot}
                                          onClick={() => setTenaliSlide(dot)}
                                          className={`rounded-full transition-all focus:outline-none ${tenaliSlide === dot ? "bg-[#333333] dark:bg-white w-[10px] h-[10px]" : "bg-slate-300 dark:bg-slate-700 w-[8px] h-[8px] hover:bg-slate-400 mt-0.5"}`}
                                        />
                                      ))}
                                    </div>
                                  </div>

                                  {/* AKBAR BIRBAL STORIES */}
                                  <div className="flex flex-col items-center justify-center w-full mb-12 space-y-4 pt-8">
                                    <h3
                                      className={`text-3xl md:text-5xl font-black tracking-widest uppercase text-center ${isDark ? "text-white" : "text-[#222222]"}`}
                                    >
                                      Akbar-Birbal{" "}
                                      <span className="text-emerald-500">
                                        STORIES
                                      </span>
                                    </h3>
                                    <div className="h-[2px] w-[80px] bg-emerald-500"></div>
                                  </div>

                                  <div className="relative max-w-7xl mx-auto px-4 mt-6">
                                    <div className="overflow-hidden -mx-3">
                                      <div
                                        className="flex w-[600%] sm:w-[300%] lg:w-[150%] transition-transform duration-700 ease-in-out"
                                        style={{
                                          transform: `translateX(-${birbalSlide * (100 / 6)}%)`,
                                        }}
                                      >
                                        {[
                                          {
                                            title: "The Crows of Agra",
                                            desc: "Akbar asked Birbal how many crows were in Agra...",
                                            image:
                                              "https://i.pinimg.com/1200x/29/5b/da/295bda7bd4bcd8d67159e36768ad49dd.jpg",
                                          },
                                          {
                                            title: "The Hot Rice",
                                            desc: "Eating hot rice from the edge is easier than the middle...",
                                            image:
                                              "https://i.pinimg.com/1200x/58/3b/38/583b389b5285dfe9a6fa695f121f163c.jpg",
                                          },
                                          {
                                            title: "The List of Fools",
                                            desc: "Akbar bought horses from an unknown merchant...",
                                            image:
                                              "https://i.pinimg.com/1200x/84/b3/78/84b37857a2b646eaa50a5b86a37bd3bb.jpg",
                                          },
                                          {
                                            title:
                                              "The Washerman and the Cold River",
                                            desc: "A washerman stood in the freezing river for a reward...",
                                            image:
                                              "https://i.pinimg.com/1200x/a3/24/0f/a3240fc626f1fc22e88215db40e4b3a6.jpg",
                                          },
                                          {
                                            title: "Half the Reward",
                                            desc: "Birbal promises half his reward to a greedy guard...",
                                            image:
                                              "https://i.pinimg.com/736x/d1/a8/23/d1a823af643700d83b3a97784a09dc71.jpg",
                                          },
                                          {
                                            title: "The Mango Tree",
                                            desc: "Two brothers fought over a mango tree...",
                                            image:
                                              "https://i.pinimg.com/1200x/89/42/ba/8942ba31c6c30c9f31accdaa311cc027.jpg",
                                          },
                                        ].map((story, i) => (
                                          <StoryCard
                                            key={i}
                                            item={story}
                                            isDark={isDark}
                                            category="CLASSIC TALES"
                                            onReadMore={() => {
                                              setActiveSubTab("story");
                                              setTimeout(() => {
                                                document
                                                  .getElementById(
                                                    "publisher-story",
                                                  )
                                                  ?.scrollIntoView({
                                                    behavior: "smooth",
                                                  });
                                              }, 100);
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>

                                    {/* Arrows (Visible on Large Screens) */}
                                    <div className="absolute top-[60%] -translate-y-1/2 left-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setBirbalSlide((prev) =>
                                            prev === 0 ? 2 : prev - 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronLeft
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>
                                    <div className="absolute top-[60%] -translate-y-1/2 right-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setBirbalSlide((prev) =>
                                            prev >= 2 ? 0 : prev + 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronRight
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>

                                    {/* Paginator Dots */}
                                    <div className="flex justify-center gap-3 mt-12">
                                      {[0, 1, 2].map((dot) => (
                                        <button
                                          key={dot}
                                          onClick={() => setBirbalSlide(dot)}
                                          className={`rounded-full transition-all focus:outline-none ${birbalSlide === dot ? "bg-[#333333] dark:bg-white w-[10px] h-[10px]" : "bg-slate-300 dark:bg-slate-700 w-[8px] h-[8px] hover:bg-slate-400 mt-0.5"}`}
                                        />
                                      ))}
                                    </div>
                                  </div>

                                  {/* LATEST POEMS SECTION */}
                                  <div className="flex flex-col items-center justify-center w-full mb-12 space-y-4 pt-16">
                                    <h3
                                      className={`text-3xl md:text-4xl font-black leading-tight flex flex-wrap gap-x-3 items-center ${isDark ? "text-white" : "text-slate-900"}`}
                                    >
                                      LATEST{" "}
                                      <span className="text-red-500 block">
                                        POEMS
                                      </span>
                                    </h3>
                                    <div className="h-[3px] w-[80px] bg-red-500 rounded-full"></div>
                                  </div>

                                  <div className="relative max-w-7xl mx-auto px-4 mt-6">
                                    <div className="overflow-hidden -mx-3">
                                      <div
                                        className="flex w-[600%] sm:w-[300%] lg:w-[150%] transition-transform duration-700 ease-in-out"
                                        style={{
                                          transform: `translateX(-${latestPoemsSlide * (100 / 6)}%)`,
                                        }}
                                      >
                                        {[
                                          {
                                            title: "Soaring High",
                                            desc: "Soaring High Soaring high, very high in the sky,The kite...",
                                            author: "Vriddhi Khullar",
                                            image:
                                              "https://i.pinimg.com/1200x/fc/c8/d3/fcc8d334f4498129d9efb314b632e943.jpg",
                                          },
                                          {
                                            title: "Happy Morning",
                                            desc: "Happy Morning There comes the sun with warm and bright...",
                                            author: "Ayisha Fathima S",
                                            image:
                                              "https://i.pinimg.com/1200x/92/fd/d3/92fdd3140daa3a14aa0ec5f35457b58d.jpg",
                                          },
                                          {
                                            title: "Rain Drops",
                                            desc: "Rain Drops Oh raindrops up in the sky, You fall...",
                                            author: "Nidhura V S",
                                            image:
                                              "https://i.pinimg.com/736x/22/48/bb/2248bb0058b41105b6c724b8258ca396.jpg",
                                          },
                                          {
                                            title: "My Best Friend, My Papa",
                                            desc: "My Best Friend, My Papa You are my very best...",
                                            author: "Apeksha Thakur",
                                            image:
                                              "https://i.pinimg.com/736x/a7/66/07/a766078f1f72a8f6f48aebee059b0d2b.jpg",
                                          },
                                          {
                                            title: "The Silent Forest",
                                            desc: "The Silent Forest As the wind whispers through the trees...",
                                            author: "Maya J",
                                            image:
                                              "https://i.pinimg.com/736x/e9/5b/e3/e95be3050dab959ce10beb9b4aa69ee1.jpg",
                                          },
                                          {
                                            title: "Waves of Joy",
                                            desc: "Waves of Joy The ocean waves crash softly on the shore...",
                                            author: "Leo M",
                                            image:
                                              "https://i.pinimg.com/1200x/e1/e6/d8/e1e6d8f9c90223180ee708c985677095.jpg",
                                          },
                                        ].map((poem, i) => (
                                          <StoryCard
                                            key={i}
                                            item={poem}
                                            isDark={isDark}
                                            category="POEMS"
                                            onReadMore={() => {
                                              setActiveSubTab("story");
                                              setTimeout(() => {
                                                document
                                                  .getElementById(
                                                    "publisher-story",
                                                  )
                                                  ?.scrollIntoView({
                                                    behavior: "smooth",
                                                  });
                                              }, 100);
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>

                                    {/* Arrows (Visible on Large Screens) */}
                                    <div className="absolute top-[50%] -translate-y-1/2 left-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setLatestPoemsSlide((prev) =>
                                            prev === 0 ? 2 : prev - 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronLeft
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>
                                    <div className="absolute top-[50%] -translate-y-1/2 right-0 hidden lg:flex">
                                      <button
                                        onClick={() =>
                                          setLatestPoemsSlide((prev) =>
                                            prev >= 2 ? 0 : prev + 1,
                                          )
                                        }
                                        className={`p-2 z-10 hover:scale-125 transition-transform drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] ${isDark ? "text-slate-300 hover:text-white drop-shadow-none" : "text-[#222222] hover:text-black"}`}
                                      >
                                        <ChevronRight
                                          size={36}
                                          strokeWidth={3}
                                        />
                                      </button>
                                    </div>

                                    {/* Paginator Dots */}
                                    <div className="flex justify-center gap-3 mt-12">
                                      {[0, 1, 2].map((dot) => (
                                        <button
                                          key={dot}
                                          onClick={() =>
                                            setLatestPoemsSlide(dot)
                                          }
                                          className={`rounded-full transition-all focus:outline-none ${latestPoemsSlide === dot ? "bg-[#333333] dark:bg-white w-[10px] h-[10px]" : "bg-slate-300 dark:bg-slate-700 w-[8px] h-[8px] hover:bg-slate-400 mt-0.5"}`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        )}

                        {activeSubTab === "story" && (
                          <div
                            id="publisher-story"
                            className="max-w-5xl mx-auto pt-16 pb-24 items-start px-6 lg:px-12"
                          >
                            <div className="space-y-12">
                              {/* Hero Image */}
                              <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group">
                                <img
                                  src="https://i.pinimg.com/1200x/e3/6b/4e/e36b4efd110eb2ae50e2ead4a7b01ab4.jpg"
                                  alt="Magical Story World"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-10 left-10">
                                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
                                    Our Stories
                                  </h2>
                                  <div className="h-1.5 w-24 bg-rose-500 rounded-full mt-4"></div>
                                </div>
                              </div>

                              {/* Story Content */}
                              <div
                                className={`text-lg md:text-xl font-medium leading-[2] md:leading-[2.2] space-y-10 relative ${isDark ? "text-slate-300" : "text-slate-700"}`}
                              >
                                {/* Decorative Quote Icon */}
                                <div className="absolute -top-6 -left-8 text-rose-500/10 dark:text-rose-500/5 select-none hidden md:block z-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="120"
                                    height="120"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                  </svg>
                                </div>

                                <p className="relative z-10 first-letter:text-7xl first-letter:font-black first-letter:text-rose-500 first-letter:float-left first-letter:mr-4 first-letter:leading-none">
                                  <span className="font-bold text-slate-800 dark:text-white tracking-wide">
                                    Our Stories
                                  </span>{" "}
                                  is a curated collection of original creations
                                  written by young minds, where imagination
                                  meets expression. Each story reflects
                                  creativity, courage, and a unique voice,
                                  transforming simple ideas into meaningful
                                  narratives. From adventurous journeys to
                                  heartfelt lessons, every piece celebrates the
                                  power of storytelling and the brilliance
                                  within every child.
                                </p>

                                <div className="py-6 border-l-4 border-emerald-500 pl-8 ml-4 my-10 bg-gradient-to-r from-emerald-500/10 to-transparent italic">
                                  <p
                                    className={`text-xl md:text-2xl font-semibold leading-relaxed ${isDark ? "text-emerald-400" : "text-emerald-700"}`}
                                  >
                                    "Our Stories is a vibrant showcase of young
                                    authors who dare to dream and write. Every
                                    page carries original thoughts, imaginative
                                    worlds, and heartfelt emotions crafted by
                                    children who express themselves freely and
                                    confidently."
                                  </p>
                                </div>

                                <p className="relative z-10">
                                  Through these stories, we celebrate creativity
                                  in its purest form. Whether it’s a tale of
                                  adventure, a lesson of kindness, or a spark of
                                  fantasy, each story reminds us that every
                                  child has a powerful voice worth sharing with
                                  the world. It serves as an expanding
                                  compendium of human expression, shaped by
                                  those who view the world without limits and
                                  paint it brilliantly with their words.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeSubTab === "store" && (
                          <div
                            id="publisher-store"
                            className="max-w-7xl mx-auto space-y-20 pt-20"
                          >
                            <div className="text-center space-y-6">
                              <h4
                                className={`text-5xl lg:text-7xl font-black uppercase tracking-tight ${isDark ? "text-white" : "text-[#1A1A1A]"}`}
                              >
                                KNOWLEDGE{" "}
                                <span className="text-rose-500">STORE</span>
                              </h4>
                              <div className="w-32 h-2 bg-rose-500 mx-auto rounded-full"></div>
                            </div>
                            <div className="flex flex-wrap justify-between items-end gap-6">
                              <div className="space-y-2">
                                <h3
                                  className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
                                >
                                  Knowledge Store
                                </h3>
                                <p
                                  className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                                >
                                  Explore masterpieces written by our global
                                  student community.
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-4 items-center">
                                <button
                                  onClick={() => {
                                    setStoreFilter("All Categories");
                                    setIsStoreDropdownOpen(false);
                                  }}
                                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${storeFilter === "All Categories" ? (isDark ? "bg-white text-black border-transparent" : "bg-slate-900 text-white border-transparent") : isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"} shadow-sm`}
                                >
                                  All
                                </button>

                                <div
                                  className="relative"
                                  ref={storeDropdownRef}
                                >
                                  <button
                                    onClick={() =>
                                      setIsStoreDropdownOpen(
                                        !isStoreDropdownOpen,
                                      )
                                    }
                                    className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all flex items-center gap-2 ${storeCategories.some((cat) => cat.title === storeFilter) ? (isDark ? "bg-white text-black border-transparent" : "bg-slate-900 text-white border-transparent") : isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"} shadow-sm`}
                                  >
                                    {storeCategories.find(
                                      (cat) => cat.title === storeFilter,
                                    )?.title || "All Categories"}
                                    <ChevronDown
                                      size={14}
                                      className={`transition-transform duration-300 ${isStoreDropdownOpen ? "rotate-180" : ""}`}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {isStoreDropdownOpen && (
                                      <motion.div
                                        initial={{
                                          opacity: 0,
                                          y: 10,
                                          scale: 0.95,
                                        }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{
                                          opacity: 0,
                                          y: 10,
                                          scale: 0.95,
                                        }}
                                        className={`absolute left-0 top-full mt-2 w-64 rounded-2xl shadow-2xl border p-2 z-[100] ${isDark ? "bg-slate-900 border-white/10" : "bg-white border-slate-100"}`}
                                      >
                                        {storeCategories.map((cat) => (
                                          <button
                                            key={cat.id}
                                            onClick={() => {
                                              setStoreFilter(cat.title);
                                              setIsStoreDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors ${storeFilter === cat.title ? (isDark ? "bg-indigo-500/20 text-indigo-400" : "bg-indigo-50 text-indigo-600") : isDark ? "text-slate-400 hover:bg-white/5 hover:text-white" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                                          >
                                            {cat.title}
                                          </button>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                <button
                                  onClick={() => {
                                    setStoreFilter("Popular");
                                    setIsStoreDropdownOpen(false);
                                  }}
                                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${storeFilter === "Popular" ? (isDark ? "bg-white text-black border-transparent" : "bg-slate-900 text-white border-transparent") : isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"} shadow-sm`}
                                >
                                  Popular
                                </button>
                              </div>
                            </div>

                            {storeFilter === "Popular" ? (
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {popularStories.map((book, i) => (
                                  <StoreBookCard
                                    key={i}
                                    book={book}
                                    isDark={isDark}
                                  />
                                ))}
                              </div>
                            ) : (
                              <div className="space-y-16">
                                {storeCategories
                                  .filter(
                                    (category) =>
                                      storeFilter === "All Categories" ||
                                      category.title === storeFilter,
                                  )
                                  .map((category) => (
                                    <div
                                      key={category.id}
                                      className="space-y-6"
                                    >
                                      <h5
                                        className={`text-2xl font-black flex items-center gap-3 ${isDark ? "text-white" : "text-slate-800"}`}
                                      >
                                        {category.title}
                                      </h5>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        {category.stories.map((book, i) => (
                                          <StoreBookCard
                                            key={i}
                                            book={book}
                                            isDark={isDark}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        )}

                        {activeSubTab === "learn-more" && (
                          <div
                            id="learn-more-section"
                            className="w-full relative mt-12 mb-20 overflow-hidden shadow-2xl rounded-3xl"
                          >
                            <StoryBookStructure
                              onCreateStory={() => setShowStoryCreator(true)}
                            />
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

const DailyLibraryView = ({ isDark, onClose, readingPrompts }) => {
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [draftWordCount, setDraftWordCount] = useState(0);

  const handleDraftContent = (e) => {
    const text = e.target.value.trim();
    if (!text) {
      setDraftWordCount(0);
      return;
    }
    setDraftWordCount(text.split(/\s+/).length);
  };

  useEffect(() => {
    // Start at Day 1 by default instead of local Date
    setCurrentPrompt(readingPrompts[0]);
  }, [readingPrompts]);

  if (!currentPrompt) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          className={`flex items-center gap-2 text-sm font-bold ${isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"} transition-colors`}
        >
          <ArrowLeft size={16} /> Back to Stages
        </button>
        <div
          className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${isDark ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" : "bg-indigo-50 text-indigo-700 border-indigo-200"}`}
        >
          30-Day Series
        </div>
      </div>

      <div
        className={`${isDark ? "bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-emerald-500/30" : "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200"} border rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm`}
      >
        <BookOpen
          className={`absolute -right-10 -bottom-10 w-64 h-64 ${isDark ? "text-emerald-500/5" : "text-emerald-500/10"}`}
        />
        <div className="relative z-10 max-w-3xl">
          <h2
            className={`text-3xl lg:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Daily Reading Room
          </h2>
          <p
            className={`text-lg leading-relaxed ${isDark ? "text-emerald-100/70" : "text-emerald-800/70"}`}
          >
            Day {currentPrompt.day}: {currentPrompt.writingTopic}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div
          className={`md:col-span-2 border rounded-[2rem] p-8 shadow-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isDark ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" : "bg-indigo-100 text-indigo-600 border-indigo-200"}`}
            >
              <Sparkles size={20} />
            </div>
            <h3
              className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Today topic
            </h3>
          </div>
          <p
            className={`text-2xl font-serif italic mb-8 leading-relaxed ${isDark ? "text-slate-200" : "text-slate-800"}`}
          >
            {currentPrompt.writingTopic}
          </p>

          <p
            className={`text-xl font-serif italic mb-10 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}
          >
            {currentPrompt.storyStartingOnWords}
          </p>

          <div
            className={`p-6 rounded-2xl border ${isDark ? "bg-black/40 border-white/5" : "bg-slate-50 border-slate-200"}`}
          >
            <textarea
              placeholder="Start drafting your response here..."
              onChange={handleDraftContent}
              className={`w-full bg-transparent outline-none resize-none h-40 font-medium ${isDark ? "text-white placeholder:text-slate-600" : "text-slate-800 placeholder:text-slate-400"}`}
            />
            <div
              className={`flex justify-between items-center mt-4 border-t pt-4 ${isDark ? "border-white/5" : "border-slate-200"}`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-xs font-bold uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}
                >
                  Draft Auto-Saving
                </span>
                <span
                  className={`text-xs font-bold uppercase ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
                >
                  {draftWordCount} Words
                </span>
              </div>
              <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.4)]">
                Complete Day {currentPrompt.day}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:col-span-1">
          <div
            className={`border rounded-[2rem] p-6 shadow-sm ${isDark ? "bg-gradient-to-b from-blue-500/10 to-transparent border-blue-500/20" : "bg-gradient-to-b from-blue-50 to-white border-blue-200"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Target
                className={isDark ? "text-blue-400" : "text-blue-600"}
                size={20}
              />
              <h4
                className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Writing Goal
              </h4>
            </div>
            <p
              className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              {currentPrompt.goal}
            </p>
          </div>

          <div
            className={`border rounded-[2rem] p-6 shadow-sm ${isDark ? "bg-gradient-to-b from-amber-500/10 to-transparent border-amber-500/20" : "bg-gradient-to-b from-amber-50 to-white border-amber-200"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb
                className={isDark ? "text-amber-400" : "text-amber-600"}
                size={20}
              />
              <h4
                className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Reflection Question
              </h4>
            </div>
            <p
              className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              {currentPrompt.reflection}
            </p>
          </div>

          <div
            className={`border rounded-[2rem] p-6 shadow-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h4
                className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Progress Tracking
              </h4>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-md ${isDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-600"}`}
              >
                Day {currentPrompt.day} / 30
              </span>
            </div>
            <div
              className={`w-full h-2 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-slate-200"}`}
            >
              <div
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${(currentPrompt.day / 30) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ListeningSummaryView = ({ isDark, onClose }) => {
  const [replayCount, setReplayCount] = useState(2);
  const [draftWordCount, setDraftWordCount] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDraftContent = (e) => {
    const text = e.target.value.trim();
    if (!text) {
      setDraftWordCount(0);
      return;
    }
    setDraftWordCount(text.split(/\s+/).length);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        if (audioRef.current.currentTime === 0 && replayCount > 0) {
          setReplayCount((prev) => prev - 1);
        }
        if (replayCount > 0 || audioRef.current.currentTime > 0) {
          audioRef.current.play().catch((err) => {
            console.error("Audio playback error:", err);
            setIsPlaying(false);
          });
          setIsPlaying(true);
        }
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleAudioError = (e) => {
    console.error("Audio failed to load:", e);
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          className={`flex items-center gap-2 text-sm font-bold ${isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"} transition-colors`}
        >
          <ArrowLeft size={16} /> Back to Stages
        </button>
      </div>

      <div
        className={`${isDark ? "bg-gradient-to-r from-purple-900/40 to-fuchsia-900/40 border-purple-500/30" : "bg-gradient-to-r from-purple-50 to-fuchsia-50 border-purple-200"} border rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm`}
      >
        <Headphones
          className={`absolute -right-10 -bottom-10 w-64 h-64 ${isDark ? "text-purple-500/5" : "text-purple-500/10"}`}
        />
        <div className="relative z-10 max-w-3xl">
          <h2
            className={`text-3xl lg:text-5xl font-black mb-6 flex items-center gap-4 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            <Headphones
              size={40}
              className={isDark ? "text-purple-400" : "text-purple-600"}
            />{" "}
            Audio Story: The Fox Princess
          </h2>
          {/* <p
            className={`text-lg leading-relaxed font-medium ${isDark ? "text-purple-100/70" : "text-purple-800/70"}`}
          >
            Do not write while listening the first time.
            <br />
            Focus only on understanding the message.
          </p> */}

          <div className="mt-8 flex items-center gap-6">
            <audio
              ref={audioRef}
              onEnded={handleAudioEnded}
              onError={handleAudioError}
              src="https://traffic.libsyn.com/blogrelations/fox-princess-16-2.mp3"
              preload="auto"
            />
            <button
              onClick={toggleAudio}
              disabled={
                replayCount === 0 &&
                !isPlaying &&
                (!audioRef.current || audioRef.current.currentTime === 0)
              }
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg hover:-translate-y-1 ${isDark ? "bg-white text-slate-900 hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800"} disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed`}
            >
              {isPlaying ? (
                <Pause size={24} className="fill-current" />
              ) : (
                <Play size={24} className="fill-current" />
              )}
              {isPlaying ? "Pause Audio" : "Play Audio"}
            </button>
            <div
              className={`flex flex-col ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              <span className="text-sm font-bold uppercase tracking-widest">
                Replay Limit
              </span>
              <span
                className={`text-xl font-black ${isDark ? "text-purple-400" : "text-purple-600"}`}
              >
                {replayCount} Left
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className={`md:col-span-2 space-y-6`}>
          <div
            className={`border rounded-[2rem] p-8 shadow-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isDark ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-emerald-100 text-emerald-600 border-emerald-200"}`}
              >
                <Edit3 size={20} />
              </div>
              <h3
                className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Structured Summary
              </h3>
            </div>

            <div
              className={`p-6 rounded-2xl mb-6 ${isDark ? "bg-black/30" : "bg-slate-50"}`}
            >
              <p
                className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-600"} mb-4`}
              >
                Identify the core message, key supporting details, and the final
                moral of the story. Focus on structure and clarity.
              </p>
              <div className="flex items-center gap-2">
                <Target
                  size={14}
                  className={isDark ? "text-emerald-400" : "text-emerald-600"}
                />
                <p
                  className={`text-xs font-bold uppercase ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                >
                  Goal: 100–120 words
                </p>
              </div>
            </div>

            <textarea
              placeholder="After listening, write your structured summary here..."
              onChange={handleDraftContent}
              className={`w-full p-6 rounded-2xl border bg-transparent outline-none resize-none h-64 font-medium ${isDark ? "text-white border-white/10 placeholder:text-slate-600" : "text-slate-800 border-slate-200 placeholder:text-slate-400"}`}
            />

            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-4">
                <span
                  className={`text-xs font-bold uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}
                >
                  Live Word Count:
                </span>
                <span
                  className={`text-sm font-black ${draftWordCount >= 100 && draftWordCount <= 120 ? "text-emerald-500" : "text-orange-500"}`}
                >
                  {draftWordCount} Words
                </span>
              </div>
              <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(168,85,247,0.4)]">
                Submit Summary
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:col-span-1">
          <div
            className={`border rounded-[2rem] p-6 shadow-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award
                className={isDark ? "text-yellow-400" : "text-yellow-600"}
                size={20}
              />
              <h4
                className={`font-bold text-lg ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Listening Levels
              </h4>
            </div>

            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border ${isDark ? "bg-emerald-500/10 border-emerald-500/20" : "bg-emerald-50 border-emerald-200"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <h5
                    className={`font-bold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}
                  >
                    Beginner
                  </h5>
                </div>
                <p
                  className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  Short speech (1–2 mins)
                  <br />
                  Identify main idea only
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border ${isDark ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-200"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <h5
                    className={`font-bold ${isDark ? "text-blue-400" : "text-blue-700"}`}
                  >
                    Intermediate
                  </h5>
                </div>
                <p
                  className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  3–5 minute speech
                  <br />
                  Write structured summary
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border ${isDark ? "bg-purple-500/10 border-purple-500/20" : "bg-purple-50 border-purple-200"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  <h5
                    className={`font-bold ${isDark ? "text-purple-400" : "text-purple-700"}`}
                  >
                    Advanced
                  </h5>
                </div>
                <p
                  className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  5–10 minute speech
                  <br />
                  Analyze tone, emotion, and persuasion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Icon wrapper for rendering
function EditingIcon(props) {
  return <Edit3 {...props} />;
}

export default LearnerAsWriter;
