import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen, ArrowRight, GraduationCap, ArrowUpRight, Star,
  Trophy, Users, Shield, Heart, Microscope, Palette, Bus, Laptop, ChevronLeft, ChevronRight, Play, Cake, Gift, Sparkles as SparklesIcon, X
} from "lucide-react";
import SchoolHero from "./SchoolHero";
import OptimizedImage from "../../components/common/OptimizedImage";
import AdmissionPopup from "../../components/common/AdmissionPopup";

// ─── Academic Journey Steps ───────────────────────────────────────────────────
const stepImages = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600",  // Pre-Primary
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",  // Primary
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600",  // Middle
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",  // Secondary
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",  // Senior Secondary
];

// ─── Campus Facilities Images ─────────────────────────────────────────────────
const facilityImages = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=400",  // Smart Classroom
  "https://images.unsplash.com/photo-1532094349884-543559c5fdc5?auto=format&fit=crop&q=80&w=400",  // Science Lab
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400",     // Library
  "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&q=80&w=400",     // Sports Ground
];

const CampusCarousel = () => {
  const scrollRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const autoScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({
            left: scrollLeft + 320,
            behavior: "smooth"
          });
        }
      }
    };

    const interval = setInterval(autoScroll, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const highlights = [
    { emoji: "🔬", title: "NABL Labs", desc: "Advanced Physics, Chemistry & Biology research labs.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600", tag: "Science" },
    { emoji: "💻", title: "Hi-Tech IT Suite", desc: "Modern computer labs with high-speed coding tools.", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600", tag: "Tech" },
    { emoji: "📚", title: "Hybrid Library", desc: "10,000+ books with digital E-Kindle reading zone.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600", tag: "Learning" },
    { emoji: "🏏", title: "Sports Arena", desc: "Cricket nets, Karate Dojo, and Badminton courts.", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600", tag: "Sports" },
    { emoji: "🚌", title: "GPS Transport", desc: "100% safe, tracked buses on all Patna routes.", img: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=600", tag: "Transport" },
  ];

  return (
    <section
      className="py-10 md:py-14 bg-white relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-3">See Our School!</h2>
            <p className="text-slate-500 font-medium text-xs md:text-base max-w-2xl">
              Take a look inside Gyan Sagar Public School, Ram Krishna Nagar, Patna.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {highlights.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative w-72 md:w-80 lg:w-[320px] shrink-0 aspect-[4/5] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all snap-start"
            >
              <div className="absolute inset-0">
                <OptimizedImage src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={400} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/40 text-white shadow-xl pointer-events-auto cursor-pointer">
                  <Play size={24} className="translate-x-0.5 md:w-8 md:h-8" fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full font-black text-[10px] md:text-xs tracking-widest uppercase border border-white/30 z-20">
                {card.tag}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-20">
                <span className="text-3xl md:text-4xl mb-4 block drop-shadow-lg">{card.emoji}</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2 leading-tight">{card.title}</h3>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed opacity-90 line-clamp-2">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ActivityCarousel = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const autoScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({
            left: scrollLeft + 320,
            behavior: "smooth"
          });
        }
      }
    };
    const interval = setInterval(autoScroll, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activities = [
    { emoji: "🙏", title: "School Prayer", desc: "Daily morning assembly and spiritual शुरूवात.", video: "/gg/Prayer.mp4", tag: "Daily" },
    { emoji: "🎨", title: "Holi Celebration", desc: "Vibrant colors and joy during our school Holi event.", video: "/gg/Holi 2026.mp4", tag: "Festival" },
    { emoji: "🇮🇳", title: "Independence Day", desc: "Celebrating national pride with students and faculty.", video: "/gg/indipendentday.mp4", tag: "National" },
    { emoji: "🏏", title: "Cricket Match", desc: "Inter-school cricket championship highlights.", video: "/gg/cricket.mp4", tag: "Sports" },
    { emoji: "🙏", title: "Saraswati Puja", desc: "Seeking blessings of knowledge and wisdom.", video: "/gg/sarswatipuja.mp4", tag: "Cultural" },
    { emoji: "🛡️", title: "Nagrik Surakha", desc: "Safety awareness and security training program.", video: "/gg/Nagrik Surkha.mp4", tag: "Training" },
    { emoji: "🎮", title: "Gaming Activity", desc: "Interactive gaming and skill development session.", video: "/gg/gaming.mp4", tag: "Fun" },
    { emoji: "🏆", title: "Award Ceremony", desc: "Celebrating academic and extracurricular excellence.", video: "/gg/Medial.mp4", tag: "Awards" },
    { emoji: "📝", title: "Examination", desc: "Students during their annual board preparation.", video: "/gg/examination.mp4", tag: "Academic" },
    { emoji: "🏆", title: "Competitions", desc: "Engagement in various school-wide competitions.", video: "/gg/Comption.mp4", tag: "Events" },
    { emoji: "📖", title: "Skill Training", desc: "Dedicated sessions for student skill enhancement.", video: "/gg/Traing.mp4", tag: "Learning" },
    { emoji: "✨", title: "Special Prayer", desc: "Special assembly session for our students.", video: "/gg/prayer2.mp4", tag: "Daily" },
    { emoji: "🎖️", title: "Medal Honors", desc: "Recognizing outstanding student contributions.", video: "/gg/Medal contribution.mp4", tag: "Awards" },
    { emoji: "🌟", title: "Campus Life", desc: "Daily glimpses of student activities on campus.", video: "/gg/Activities.mp4", tag: "Life" },
  ];

  return (
    <section
      className="py-10 md:py-14 bg-slate-50 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-3">Our Activities!</h2>
            <p className="text-slate-500 font-medium text-xs md:text-base max-w-2xl">
              Take a look at the various activities and events happening at Gyan Sagar Public School.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {activities.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative w-72 md:w-80 lg:w-[320px] shrink-0 aspect-[4/5] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all snap-start bg-slate-200"
            >
              <div className="absolute inset-0">
                <video 
                  src={item.video} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  muted
                  loop
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <div 
                  onClick={() => setSelectedVideo(item.video)}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/40 text-white shadow-xl pointer-events-auto cursor-pointer"
                >
                  <Play size={24} className="translate-x-0.5 md:w-8 md:h-8" fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full font-black text-[10px] md:text-xs tracking-widest uppercase border border-white/30 z-20">
                {item.tag}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-20">
                <span className="text-3xl md:text-4xl mb-4 block drop-shadow-lg">{item.emoji}</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2 leading-tight">{item.title}</h3>
                <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed opacity-90 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={24} />
            </button>
            <video 
              src={selectedVideo} 
              className="w-full h-full" 
              controls 
              autoPlay 
            />
          </div>
        </div>
      )}
    </section>
  );
};

const ToppersCarousel = ({ toppers }) => {
  const scrollRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const autoScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        // If we're near the end of the first set, jump back to the start of the first set
        // to maintain the illusion of infinite scroll (since we have concat(toppers))
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({
            left: scrollLeft + 300,
            behavior: "smooth"
          });
        }
      }
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [isPaused, toppers.length]);

  return (
    <section
      className="py-10 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-3">Our School Toppers</h2>
            <p className="text-slate-500 font-medium text-xs md:text-base">Pride of Gyan Sagar Public School.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Manual Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {toppers.concat(toppers).map((topper, idx) => (
            <div
              key={idx}
              className="bg-[#f1f3ff] rounded-[28px] p-4 text-center border border-slate-100 shadow-sm w-[240px] md:w-[280px] shrink-0 hover:bg-white hover:shadow-xl transition-all cursor-default snap-start"
            >
              <div className="w-full h-40 md:h-48 rounded-2xl overflow-hidden mb-4 shadow-md bg-white">
                <OptimizedImage src={topper.photo} alt={topper.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" width={300} />
              </div>
              <h3 className="text-base md:text-xl font-black text-slate-800 mb-1">{topper.name}</h3>
              <p className="text-[10px] md:text-xs text-indigo-600 font-bold mb-2 uppercase tracking-wider">{topper.achievement}</p>
              <div className="text-[10px] font-bold text-slate-400">Batch {topper.batch}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false);
  // ─── Academic Journey (NC → +2) ────────────────────────────────────────────
  const steps = [
    {
      num: "1",
      title: "Pre-Primary (NC–KG)",
      desc: "Building the foundation with play-based learning, phonics, and social skills.",
      img: stepImages[0],
    },
    {
      num: "2",
      title: "Primary (1st–5th)",
      desc: "NCERT curriculum focused on core concepts in English, Maths, Science & Hindi.",
      img: stepImages[1],
    },
    {
      num: "3",
      title: "Middle School (6th–8th)",
      desc: "Developing analytical thinking with structured subject-wise study and activities.",
      img: stepImages[2],
    },
    {
      num: "4",
      title: "Secondary (9th–10th)",
      desc: "Board-focused preparation with experienced faculty and regular mock tests.",
      img: stepImages[3],
    },
    {
      num: "5",
      title: "Senior Secondary (+2)",
      desc: "Science, Commerce & Humanities streams with career counseling and coaching.",
      img: stepImages[4],
    },
  ];

  // ─── Campus Facilities Grid ────────────────────────────────────────────────
  const facilities = [
    { name: "Smart Classrooms", img: facilityImages[0], bg: "bg-indigo-50/50", border: "group-hover:border-indigo-400" },
    { name: "Science Laboratories", img: facilityImages[1], bg: "bg-blue-50/50", border: "group-hover:border-blue-400" },
    { name: "School Library", img: facilityImages[2], bg: "bg-indigo-50/50", border: "group-hover:border-indigo-400" },
    { name: "Sports Ground", img: facilityImages[3], bg: "bg-blue-50/50", border: "group-hover:border-blue-400" },
  ];

  // ─── Recent Achievements ───────────────────────────────────────────────────
  const achievements = [
    {
      id: 1,
      title: "Inter-School Cricket Champions",
      category: "Sports",
      icon: "🏏",
      year: "2024",
      desc: "Senior boys team clinched the Patna School Cup for 2nd consecutive year.",
      color: "bg-amber-50 border-amber-100",
      badge: "bg-amber-400",
    },
    {
      id: 2,
      title: "District Science Exhibition – 1st Prize",
      category: "Science",
      icon: "🔬",
      year: "2024",
      desc: "Class X students won top honors for a Sustainable Smart City model.",
      color: "bg-blue-50 border-blue-100",
      badge: "bg-blue-500",
    },
    {
      id: 3,
      title: "100% Distinction in Class XII",
      category: "Academic",
      icon: "🎓",
      year: "2023",
      desc: "Every student of the batch scored above 85% aggregate in board exams.",
      color: "bg-indigo-50 border-indigo-100",
      badge: "bg-indigo-600",
    },
    {
      id: 4,
      title: "National Karate Championship – Silver",
      category: "Sports",
      icon: "🥋",
      year: "2024",
      desc: "Sameer (Class VIII) won Silver at the National Inter-School Karate Meet.",
      color: "bg-rose-50 border-rose-100",
      badge: "bg-rose-500",
    },
  ];

  // ─── Why Choose Us ─────────────────────────────────────────────────────────
  const whyUs = [
    { icon: <GraduationCap className="w-7 h-7" />, title: "25+ Years of Great Teaching", desc: "Families in Patna have trusted us since 1998.", color: "bg-indigo-100 text-indigo-600" },
    { icon: <Trophy className="w-7 h-7" />, title: "100% Pass in Board Exams", desc: "Our students always do great in Bihar Board and board exams.", color: "bg-amber-100 text-amber-600" },
    { icon: <Shield className="w-7 h-7" />, title: "Safe School", desc: "Cameras on campus, GPS buses — your child is always safe.", color: "bg-emerald-100 text-emerald-600" },
    { icon: <Laptop className="w-7 h-7" />, title: "Smart Classrooms", desc: "We use smart boards and computers to make learning fun.", color: "bg-blue-100 text-blue-600" },
    { icon: <Palette className="w-7 h-7" />, title: "Art & Creativity", desc: "We teach drawing, music, and digital art to all students.", color: "bg-rose-100 text-rose-600" },
    { icon: <Bus className="w-7 h-7" />, title: "School Bus with GPS", desc: "Safe buses that cover all big roads in Patna.", color: "bg-slate-100 text-slate-600" },
  ];

  // ─── Academic Classes ──────────────────────────────────────────────────────
  const academicClasses = [
    { name: "Pre-Primary (NC–KG)", img: stepImages[0] },
    { name: "Primary (1st–5th)", img: stepImages[1] },
    { name: "Middle School (6th–8th)", img: stepImages[2] },
    { name: "Secondary (9th–10th)", img: stepImages[3] },
    { name: "Senior Secondary (+2)", img: stepImages[4] },
  ];

  // ─── School Toppers ────────────────────────────────────────────────────────
  const toppers = [
    { name: "Rahul Kumar", achievement: "10th Board Topper (98%)", batch: "2023-24", photo: "/GyanSagar/Student.jpg" },
    { name: "Anjali Kumari", achievement: "12th Science Topper", batch: "2023-24", photo: "https://i.pinimg.com/736x/fd/b1/ad/fdb1ad6b09f61bc7bfafa2c583c5f742.jpg" },
    { name: "Aryan Singh", achievement: "Sports Captain", batch: "2024", photo: "/GyanSagar/StudentPatna.jpg" },
    { name: "Sneha Sinha", achievement: "Olympiad Winner", batch: "2024", photo: "https://i.pinimg.com/736x/9d/a0/a4/9da0a44ba9238ee07c14db531e1242db.jpg" },
  ];

  // ─── Birthdays Data ────────────────────────────────────────────────────────
  const birthdays = [
    { name: "Sneha Kumari", class: "Class VIII-B", photo: "https://i.pinimg.com/736x/9d/a0/a4/9da0a44ba9238ee07c14db531e1242db.jpg", date: "Today" },
    { name: "Aryan Raj", class: "Class V-A", photo: "/GyanSagar/StudentPatna.jpg", date: "Today" },
    { name: "Siddharth Verma", class: "Class X-C", photo: "https://images.unsplash.com/photo-1519085185758-1917830536cd?auto=format&fit=crop&q=80&w=400", date: "Today" },
    { name: "Ishani Singh", class: "Class VI-A", photo: "https://i.pinimg.com/736x/fd/b1/ad/fdb1ad6b09f61bc7bfafa2c583c5f742.jpg", date: "Today" },
  ];

  const faculty = [
    { name: "Ashlok Kumar", role: "Director", photo: "/GyanSagar/Shloak Sir.jpg", bg: "bg-indigo-50/50", border: "group-hover:border-indigo-400" },
    { name: "Puja Singh", role: "Principal", photo: "/GyanSagar/Principal.jpeg", bg: "bg-blue-50/50", border: "group-hover:border-blue-400" },
  ];

  return (
    <div>
      <AdmissionPopup manualShow={showAdmissionPopup} setManualShow={setShowAdmissionPopup} />
      {/* ─── HERO ───────────────────────────────────────────────────────────── */}
      <SchoolHero onApplyClick={() => setShowAdmissionPopup(true)} />

      {/* ─── ACADEMIC JOURNEY (NC → +2) ─────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-3">
              How We Teach Step by Step
            </h2>
            <p className="text-slate-500 font-medium text-xs md:text-base max-w-2xl mx-auto">
              From Nursery to Class 12 — we take care of every student, teach them step by step, and help them grow into great young people.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="relative aspect-[4/5] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0">
                  <OptimizedImage src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={500} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                </div>
                <div className="absolute top-3 left-3 w-7 h-7 md:w-10 md:h-10 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center font-black text-xs md:text-lg border border-white/30 z-20">
                  {step.num}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 z-20">
                  <h3 className="text-sm md:text-xl font-black text-white truncate">{step.title}</h3>
                  <p className="text-white/80 text-[10px] md:text-xs font-bold leading-snug opacity-70 md:opacity-100 line-clamp-2">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CampusCarousel />

      {/* ─── ACTIVITY CAROUSEL ─────────────────────────────────────────────── */}
      <ActivityCarousel />

      {/* ─── CAMPUS FACILITIES ──────────────────────────────────────────────── */}
      <section className="py-8 md:py-10 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-3 md:mb-4">
              World-Class Campus Facilities
            </h2>
            <p className="text-slate-500 font-medium text-xs md:text-base max-w-2xl mx-auto">
              State-of-the-art infrastructure to ensure our students have every tool they need to thrive.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="grid grid-cols-2 gap-3 md:gap-8">
                {facilities.map((f, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`${f.bg} p-2 md:p-4 rounded-2xl md:rounded-[20px] shadow-sm hover:shadow-xl transition-all flex flex-col items-center gap-1 md:gap-3 border border-slate-100 group`}
                  >
                    <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border-2 md:border-4 border-indigo-50 shadow-inner ${f.border}`}>
                      <OptimizedImage src={f.img} alt={f.name} className="w-full h-full object-cover" width={200} />
                    </div>
                    <span className="font-black text-slate-800 text-[10px] md:text-sm text-center truncate w-full">{f.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative mb-6 lg:mb-0 flex justify-center">
              <div className="aspect-[4/2.8] max-w-[420px] bg-white rounded-2xl shadow-lg border border-slate-100 p-2">
                <OptimizedImage src="https://images.unsplash.com/photo-1580582932707-520aed937b7b" alt="Smart Classroom" className="w-full h-full object-cover rounded-xl" width={800} />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-indigo-500/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── STUDENT BIRTHDAYS ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50/30 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-rose-100 text-rose-600 rounded-full mb-6">
              <Cake size={20} className="animate-bounce" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Celebrations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
              Happy <span className="text-rose-500">Birthday!</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-lg max-w-xl mx-auto">
              Wishing our wonderful students a day filled with joy, laughter, and success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {birthdays.map((student, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="relative group w-full h-full"
              >
                {/* Decorative Balloons - CSS only, no JS animation */}
                <div className="absolute -top-6 -right-4 text-3xl group-hover:scale-125 transition-transform z-20 animate-bounce">
                  🎈
                </div>
                <div className="absolute -top-10 -left-4 text-4xl group-hover:scale-125 transition-transform z-20" style={{animation: 'bounce 1.5s infinite 0.3s'}}>
                  🎊
                </div>

                <div className="bg-white p-6 md:p-8 rounded-[3rem] shadow-xl border border-rose-100 relative overflow-hidden flex flex-col items-center text-center group-hover:shadow-2xl transition-all h-full min-h-[420px] justify-between">
                  <div className="absolute top-0 inset-x-0 h-2 bg-rose-500" />
                  
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-rose-50 shadow-md mb-6 relative z-10 shrink-0">
                    <OptimizedImage src={student.photo} alt={student.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={300} />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center flex-grow">
                    <div className="flex items-center justify-center gap-2 mb-2 px-2">
                       <SparklesIcon size={16} className="text-amber-400 fill-amber-400 shrink-0" />
                       <h3 className="text-xl lg:text-2xl font-black text-slate-800 leading-tight line-clamp-2">{student.name}</h3>
                       <SparklesIcon size={16} className="text-amber-400 fill-amber-400 shrink-0" />
                    </div>
                    <p className="text-[10px] md:text-xs text-rose-500 font-black uppercase tracking-[0.2em] mb-4">{student.class}</p>
                    
                    <div className="mt-auto inline-flex items-center gap-2 px-6 py-2 bg-rose-50 text-rose-600 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-rose-100">
                      <Gift size={14} /> Celebrating Today
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RECENT ACHIEVEMENTS ────────────────────────────────────────────── */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-2xl font-semibold text-slate-800 mb-1">Recent School Achievements</h2>
            <p className="text-slate-500 text-[11px] md:text-sm">Celebrating hard work, discipline, and excellence</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group ${item.color} border rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className={`${item.badge} text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full`}>{item.category}</span>
                </div>
                <h3 className="font-black text-slate-800 text-sm md:text-base mb-2 leading-tight group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed mb-3">{item.desc}</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Batch {item.year}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link to="/photo-gallery" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center justify-center gap-1 text-xs md:text-sm">
              View All Achievements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SCHOOL TOPPERS ─────────────────────────────────────────────────── */}
      <ToppersCarousel toppers={toppers} />

      {/* ─── WHY CHOOSE GYAN SAGAR ──────────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-2">Why Choose Gyan Sagar?</h2>
            <p className="text-slate-500 font-medium text-xs md:text-base">Here's what makes us special and why so many families trust us!</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-black text-slate-800 text-sm md:text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR LEADERSHIP ─────────────────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-2">Meet Our Leaders</h2>
            <p className="text-slate-500 font-medium text-xs md:text-base">The people who lead and guide Gyan Sagar Public School</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 px-4">
            {faculty.map((member, idx) => (
              <div key={idx} className={`${member.bg} p-5 lg:p-10 rounded-[2.5rem] lg:rounded-[4rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-row items-center group w-full lg:w-[580px] gap-6 lg:gap-10 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Profile Image with Dynamic Zoom */}
                <div className={`w-24 h-24 lg:w-48 lg:h-48 shrink-0 rounded-full overflow-hidden border-4 border-white mb-0 ${member.border} shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-700 bg-white`}>
                  <OptimizedImage src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" width={400} />
                </div>

                <div className="flex flex-col items-start relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-8 lg:h-10 bg-indigo-600 rounded-full" />
                    <h3 className="text-xl lg:text-3xl font-black text-slate-900 leading-tight">{member.name}</h3>
                  </div>
                  <p className="text-[10px] lg:text-xs text-indigo-600 font-black uppercase tracking-[0.3em] mb-4">{member.role}</p>
                  
                  {/* Laptop-only vision statement */}
                  <div className="hidden lg:block overflow-hidden">
                    <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[260px] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      Dedicated to fostering a culture of academic rigor and moral excellence at Gyan Sagar.
                    </p>
                  </div>
                  
                  {/* Decorative Micro-animation dots */}
                  <div className="mt-4 flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover:bg-indigo-500 transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-100 group-hover:bg-indigo-300 transition-colors duration-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-50 group-hover:bg-indigo-200 transition-colors duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── ADMISSIONS CTA ─────────────────────────────────────────────────── */}
      <section className="py-10 md:py-12 bg-[#f1f3ff] relative overflow-hidden text-center px-4 md:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 md:w-64 md:h-64 bg-indigo-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-purple-200/40 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-medium text-slate-800 tracking-tight mb-4 md:mb-6 text-center">
            Admissions Open for 2025-26
          </h2>
          <p className="text-xs md:text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Give your child the best school in Patna. We have classes from NC to 12th. Seats are filling up fast — apply now!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowAdmissionPopup(true)}
              className="inline-block px-8 md:px-12 py-3.5 md:py-4.5 bg-indigo-600 text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100"
            >
              Apply for Admission
            </button>
            <a
              href="https://wa.me/917979001951?text=Hello%21%20I%20want%20to%20inquire%20about%20admission%20at%20Gyan%20Sagar%20Public%20School."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 md:px-12 py-3 md:py-4 bg-[#25D366] text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:bg-green-700 transition-all shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── SCHOOL INFO STRIP ──────────────────────────────────────────────── */}
      <section className="pb-16 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-[#f8fafc] p-4 md:p-8 rounded-[3rem] shadow-inner border border-slate-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
                <OptimizedImage src="/GyanSagar/Student.jpg" alt="Students at Gyan Sagar" className="w-full h-[400px] object-cover transform transition-transform duration-1000 group-hover:scale-105" width={800} />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight">We Help Our Students Shine</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Gyan Sagar Public School is more than just a school. Every child is special here. Our caring teachers and bright classrooms work together to make learning fun and help every student reach their goals.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
                    <span className="block text-2xl font-black text-indigo-600">25+</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Legacy</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
                    <span className="block text-2xl font-black text-indigo-600">100%</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Board Results</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
                    <span className="block text-2xl font-black text-indigo-600">50+</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trophies Won</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
