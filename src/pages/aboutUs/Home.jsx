import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Star,
  Feather,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Book,
  PenTool,
  Globe,
  Users,
  Trophy,
  Rocket,
  Zap,
  Heart,
  Cpu,
  Printer,
  Palette,
  LayoutDashboard,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const FloatElement = ({ children, delay = 0, duration = 3, yOffset = 20 }) => (
  <motion.div
    animate={{ y: [-yOffset, yOffset, -yOffset] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({
  title,
  subtitle,
  icon: Icon,
  colorClass = "text-indigo-600",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-20 px-4"
  >
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6`}
    >
      {Icon && <Icon className={`w-4 h-4 ${colorClass}`} />}
      <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
        {subtitle}
      </span>
    </div>
    <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6">
      {title}
    </h2>
    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
  </motion.div>
);

const StoryCard = ({ title, excerpt, category, color, author, rating }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className="group relative h-full flex flex-col glass-card rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
  >
    <div
      className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-[0.05] transition-transform duration-700 group-hover:scale-150 ${color.replace("text", "bg")}`}
    />

    <div className="flex justify-between items-start mb-6">
      <span
        className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-white/50 border border-slate-100 ${color}`}
      >
        {category}
      </span>
      <div className="flex items-center gap-1 text-amber-500">
        <Star className="w-3.5 h-3.5 fill-current" />
        <span className="text-xs font-bold">{rating}</span>
      </div>
    </div>

    <h3 className="text-2xl font-black mb-4 text-slate-800 group-hover:text-indigo-600 transition-colors leading-tight">
      {title}
    </h3>

    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
      {excerpt}
    </p>

    <div className="mt-auto pt-6 border-t border-slate-100/50 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-100 border border-white flex items-center justify-center text-[10px] font-bold text-slate-600 uppercase">
          {author.charAt(0)}
        </div>
        <div>
          <span className="block text-[10px] text-slate-400 font-black uppercase tracking-widest">
            Writer
          </span>
          <span className="block text-xs font-bold text-slate-700">
            {author}
          </span>
        </div>
      </div>
      <Link
        to="#"
        className="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300"
      >
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

const AutoSwiper = () => {
  const images = [
    "https://i.pinimg.com/736x/50/e5/f5/50e5f5823d169a4162972baaadfbad16.jpg",
    "https://i.pinimg.com/736x/50/84/55/508455b92c93623b2a19813e76ef7a66.jpg",
    "https://i.pinimg.com/1200x/62/b4/81/62b48158ba6917f1d6b775cfffc8ecb5.jpg",
    "https://i.pinimg.com/736x/6b/ce/05/6bce0589aed3b1a06d8e6c7a4f2bbc37.jpg",
    "https://i.pinimg.com/1200x/f5/a7/0e/f5a70ee6418ddc77d265595b7866eb46.jpg",
    "https://i.pinimg.com/1200x/ea/7a/26/ea7a2601d3a258d13ae8090a22fcf0b0.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              idx === currentIndex ? "bg-white w-8" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Glass Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

const Home = () => {
  const stats = [
    { label: "Published Stories", value: "1,280+", icon: Book },
    { label: "Young Authors", value: "450+", icon: Users },
    { label: "Writing Stages", value: "12", icon: Trophy },
    { label: "Active Readers", value: "50k+", icon: Globe },
  ];

  const featuredStories = [
    {
      title: "The Whispering Woods",
      excerpt:
        "Deep within the Emerald Valley lies a forest that doesn't just rustle; it speaks in voices of ancient travelers who lost their way century ago.",
      category: "Adventure",
      color: "text-emerald-600",
      author: "Aarav Mehta",
      rating: "4.9",
    },
    {
      title: "Chronicles of Cyberia",
      excerpt:
        "In a world where human memories can be uploaded to the cloud, one young detective discovers a glitch that could change humanity forever.",
      category: "Sci-Fi",
      color: "text-indigo-600",
      author: "Zoya Khan",
      rating: "4.8",
    },
    {
      title: "The Paper Plane Poet",
      excerpt:
        "Finding magic in the mundane, these poems translate the simple joy of a summer breeze into verses that dance across the page.",
      category: "Poetry",
      color: "text-rose-600",
      author: "Ishaan Gupta",
      rating: "5.0",
    },
  ];

  return (
    <div className="min-h-screen bg-mesh selection:bg-indigo-100 selection:text-indigo-900">
      {/* --- IMMERSIVE FULL-SCREEN HERO --- */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Full-Screen Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/7e/ff/e3/7effe3de18cad4a0d26edae3c14949a4.jpg"
            alt="Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80 backdrop-blur-[2px]" />
        </div>

        {/* Animated Decorative Elements */}
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-[clamp(4rem,10vw,8rem)] font-black text-white leading-[0.85] tracking-tighter mb-10 drop-shadow-2xl">
              Nation's
              <span className="text-gradient brightness-125">
                Young Authors
              </span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-10 py-6 bg-[#5C3CFE] text-white rounded-[2.5rem] font-black text-lg shadow-[0_20px_50px_-10px_rgba(92,60,254,0.5)] hover:bg-[#4A2EDD] transition-all flex items-center justify-center gap-4"
              >
                Start Your Narrative <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VISION & SLIDER SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-white/30 backdrop-blur-sm">
        <div className="max-w-[1700px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-[1.1] mb-8">
                Shaping Young Writers into <br />
                <span className="text-indigo-500">Future Literary Leaders</span>
              </h2>

              <div className="space-y-6 text-xl text-slate-500 font-medium max-w-xl mb-12 leading-relaxed">
                <p>
                  At{" "}
                  <span className="text-indigo-600 font-bold">
                    Young Authors
                  </span>
                  , we believe that every child carries a story waiting to be
                  told. Within each imagination lies creativity, courage, and a
                  voice that deserves to be heard.
                </p>
                <p>
                  We celebrate all forms of expression and encourage young minds
                  to explore, create, and be proud of what they write. Because
                  every word has the power to inspire and every young author
                  deserves to be heard.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#1D4ED8] text-white rounded-full font-black shadow-xl hover:bg-blue-700 transition-all flex items-center gap-4"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Auto-Slide Side */}
            <div className="relative group">
              <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <AutoSwiper />
              </div>

              {/* Decorative Accents */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose-100 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      {/* --- STATS SECTION --- */}
      <section className="py-20">
        <div className="max-w-[1700px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-[2.5rem] border-white flex flex-col items-center text-center group"
              >
                <div className="p-4 bg-slate-50 rounded-2xl mb-6 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  <stat.icon className="w-6 h-6 text-slate-400 inherit" />
                </div>
                <h4 className="text-4xl font-black text-slate-800 mb-2">
                  {stat.value}
                </h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED STORIES SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <SectionHeader
          subtitle="Our Top Picks"
          title="Spotlight Stories"
          icon={Star}
          colorClass="text-amber-500"
        />

        <div className="max-w-[1700px] mx-auto px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {featuredStories.map((story, i) => (
              <StoryCard key={i} {...story} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-slate-100 rounded-[2rem] text-slate-600 font-black tracking-widest uppercase text-[12px] hover:bg-white hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm"
            >
              View All Publications
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- WRITER FEATURES GRID --- */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
        <div className="max-w-[1700px] mx-auto px-8 relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-black text-[#2A2E43] tracking-tight mb-4">
              Publishing Tools
            </h2>
            <div className="w-24 h-1.5 bg-indigo-600 rounded-full opacity-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
            {[
              {
                title: "Lit-Tech Publishing",
                icon: Cpu,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                desc: "Integrate seamlessly with our advanced lit-tech platform designed specifically for young authors. Convert thoughts to books effortlessly.",
              },
              {
                title: "Print On Demand",
                icon: Printer,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                desc: "Have physical copies printed from your digital manuscripts whenever readers place an order. Zero inventory hassle.",
              },
              {
                title: "Custom Illustrations",
                icon: Palette,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                desc: "Bring your stories to life with generated or matched illustrations that fit your narrative's exact mood and style.",
              },
              {
                title: "Author Dashboard",
                icon: LayoutDashboard,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                desc: "Monitor the status of your publications, track daily readership, and manage your growing portfolio of books in one place.",
              },
              {
                title: "Global Distribution",
                icon: Globe,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                desc: "Expand your reach instantly with our reliable global distribution network stretching across multiple digital storefronts.",
              },
              {
                title: "Community Scaling",
                icon: TrendingUp,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                desc: "Whether you're releasing your first poem or your tenth novel, our platform scales to meet your growing fanbase.",
              },
              {
                title: "Dedicated Mentorship",
                icon: MessageSquare,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                desc: "Get personalized guidance from published authors and editorial experts who care about your literary development.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-start group relative"
              >
                <div className="relative">
                  <div
                    className={`w-[100px] h-[100px] rounded-full ${feature.bg} flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]`}
                  >
                    <feature.icon
                      className={`w-10 h-10 ${feature.color}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Decorative circle behind icon like in the screenshot */}
                  <div className="absolute top-1 -right-2 w-[100px] h-[100px] rounded-full border border-indigo-100 z-0 bg-transparent group-hover:scale-105 transition-transform duration-500" />
                </div>

                <h3 className="text-[22px] font-bold text-[#2A2E43] mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] font-medium leading-[1.7] text-[15px] max-w-[90%]">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LITERARY JOURNEY ARCHITECTURE --- */}
      <section className="py-32 bg-slate-50 relative overflow-hidden text-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1500px] mx-auto px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6">
              How Nation's Young Authors Empowers Young Storytellers{" "}
            </h2>
            <p className="text-[19px] text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
              Our premium platform transforms the daunting process of writing
              into an interactive, magical journey. Young minds can draft,
              refine, and publish their masterpieces—all in one secure, elite
              ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_1fr] grid-cols-1 gap-16 lg:gap-10 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-14 lg:order-1 order-2">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 lg:translate-x-8 transition-transform hover:-translate-y-1">
                <div className="w-36 h-36 shrink-0 rounded-full border-2 border-dashed border-indigo-200 p-2 relative group bg-white shadow-xl">
                  <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all opacity-0 group-hover:opacity-100" />
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300"
                    alt="Dashboard"
                    className="w-full h-full object-cover rounded-full shadow-inner"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black text-slate-800 mb-3">
                    Immersive Dashboard
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 justify-center sm:justify-start text-slate-600 text-left">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0" />
                      <span className="text-[16px] leading-[1.6]">
                        Track narrative progress, set writing goals, and boost
                        creative momentum seamlessly.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 transition-transform hover:-translate-y-1">
                <div className="w-36 h-36 shrink-0 rounded-full border-2 border-dashed border-indigo-200 p-2 relative group bg-white shadow-xl">
                  <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all opacity-0 group-hover:opacity-100" />
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=300"
                    alt="Library"
                    className="w-full h-full object-cover rounded-full shadow-inner"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black text-slate-800 mb-3">
                    Curated Story Library
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 justify-center sm:justify-start text-slate-600 text-left">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0" />
                      <span className="text-[16px] leading-[1.6]">
                        Explore thousands of genres, benchmark styles, and spark
                        immediate inspiration.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="relative mx-auto w-full max-w-[450px] aspect-square group my-10 lg:my-0 lg:order-2 order-1 md:col-span-2 lg:col-span-1 border-8 border-transparent">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 transform scale-105 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800"
                alt="Kids Writing"
                className="w-full h-full object-cover rounded-full shadow-2xl border-[12px] border-white z-10 relative"
              />
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-14 lg:order-3 order-3">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 lg:-translate-x-8 transition-transform hover:-translate-y-1">
                <div className="w-36 h-36 shrink-0 rounded-full border-2 border-dashed border-indigo-200 p-2 relative group bg-white shadow-xl order-1 sm:order-2 lg:order-1">
                  <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all opacity-0 group-hover:opacity-100" />
                  <img
                    src="https://images.unsplash.com/photo-1588666309995-d4b9c9df8df3?auto=format&fit=crop&q=80&w=300"
                    alt="Books"
                    className="w-full h-full object-cover rounded-full shadow-inner"
                  />
                </div>
                <div className="pt-2 order-2 sm:order-1 lg:order-2">
                  <h3 className="text-2xl font-black text-slate-800 mb-3">
                    Create Books
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 justify-center sm:justify-start text-slate-600 text-left">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0" />
                      <span className="text-[16px] leading-[1.6]">
                        Transcend digital—craft beautifully formatted printed
                        books and global e-books.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 transition-transform hover:-translate-y-1">
                <div className="w-36 h-36 shrink-0 rounded-full border-2 border-dashed border-indigo-200 p-2 relative group bg-white shadow-xl order-1 sm:order-2 lg:order-1">
                  <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all opacity-0 group-hover:opacity-100" />
                  <img
                    src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=300"
                    alt="Voice Tech"
                    className="w-full h-full object-cover rounded-full shadow-inner"
                  />
                </div>
                <div className="pt-2 order-2 sm:order-1 lg:order-2">
                  <h3 className="text-2xl font-black text-slate-800 mb-3">
                    Lit-Tech Arsenal
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 justify-center sm:justify-start text-slate-600 text-left">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0" />
                      <span className="text-[16px] leading-[1.6]">
                        Overcome writer's block with smart dictation, grammar
                        checks, and fluid structuring.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-40 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto px-8"
        >
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-10 text-indigo-600">
            <Feather className="w-10 h-10" />
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-800 tracking-tighter mb-10 leading-[0.9]">
            Ready to Write Your <br />
            <span className="text-indigo-600 italic">Legacy?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
            Don't let your stories stay hidden. Join the community of elite
            young authors today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-indigo-200"
            >
              Open Your Pad
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-6 bg-white border-2 border-slate-100 text-slate-700 rounded-[2rem] font-black text-lg"
            >
              Contact Mentors
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
