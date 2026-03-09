import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function YoungAuthorsHero() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotations = useMemo(
    () => [
      "Write Your Story With Courage",
      "Young Minds Create Bright Stories",
      "Dream Big Write Your Story",
      "Small Words Can Change Lives",
      "Your Voice Can Inspire Many",
      "Young Writers Shape The Future",
      "Start Writing Change Tomorrow",
      "Stories Begin With Brave Minds",
      "Write Today Lead Tomorrow",
      "A Pen Can Build Dreams",
    ],
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [quotations.length]);

  // 🎨 Stable Asset Configuration: Left and Right Clusters
  const sideAssets = useMemo(
    () => [
      // LEFT SIDE (5 Assets) - Compacted Top Values
      {
        src: "https://static.vecteezy.com/system/resources/thumbnails/072/314/579/small/elegant-gold-quill-pen-poised-over-an-open-antique-book-ready-for-writing-classic-symbol-of-literature-education-and-knowledge-on-transparent-background-png.png",
        size: "w-16 md:w-28",
        top: "15%",
        left: "5%",
        delay: 0.1,
      },
      {
        src: "https://png.pngtree.com/png-clipart/20250419/original/pngtree-a-cheerful-child-holding-book-symbolizing-education-or-learning-png-image_20737890.png",
        size: "w-20 md:w-36",
        top: "32%",
        left: "8%",
        delay: 0.3,
      },
      {
        src: "https://png.pngtree.com/png-vector/20241030/ourmid/pngtree-playful-kid-writing-graphic-for-educational-use-png-image_14197817.png",
        size: "w-16 md:w-28",
        top: "50%",
        left: "3%",
        delay: 0.5,
      },
      {
        src: "https://static.vecteezy.com/system/resources/thumbnails/054/589/905/small/cute-cartoon-characters-reading-a-book-on-transparent-background-free-png.png",
        size: "w-14 md:w-24",
        top: "68%",
        left: "10%",
        delay: 0.7,
      },
      {
        src: "https://static.vecteezy.com/system/resources/previews/054/110/959/non_2x/cartoon-boy-is-sitting-at-a-desk-with-a-book-open-in-front-of-him-free-png.png",
        size: "w-20 md:w-36",
        top: "85%",
        left: "6%",
        delay: 0.9,
      },

      // RIGHT SIDE (5 Assets) - Compacted Top Values
      {
        src: "https://png.pngtree.com/png-vector/20250724/ourmid/pngtree-happy-children-reading-book-adventure-imagination-childhood-fun-png-image_16680490.webp",
        size: "w-20 md:w-36",
        top: "15%",
        left: "85%",
        delay: 0.2,
      },
      {
        src: "https://png.pngtree.com/png-vector/20250530/ourmid/pngtree-happy-kids-reading-book-cartoon-illustration-children-s-literature-png-image_16417127.png",
        size: "w-16 md:w-28",
        top: "32%",
        left: "78%",
        delay: 0.4,
      },
      {
        src: "https://static.vecteezy.com/system/resources/thumbnails/046/301/849/small/a-child-is-sitting-in-a-chair-and-reading-book-png.png",
        size: "w-16 md:w-28",
        top: "50%",
        left: "88%",
        delay: 0.6,
      },
      {
        src: "https://static.vecteezy.com/system/resources/thumbnails/043/112/713/small/youth-children-kid-reading-book-cartoon-illustration-design-for-decoration-world-book-day-read-png.png",
        size: "w-16 md:w-28",
        top: "68%",
        left: "82%",
        delay: 0.8,
      },
      {
        src: "https://png.pngtree.com/png-vector/20250731/ourmid/pngtree-writing-child-in-tidy-home-setup-png-image_16943520.webp",
        size: "w-18 md:w-32",
        top: "85%",
        left: "86%",
        delay: 1.0,
      },
    ],
    [],
  );

  return (
    <section className="relative h-[80vh] min-h-[600px] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-[#e8ecff] to-[#dee8ff]">
      {/* --- BACKGROUND SCENERY (Vivid Sunrise, 3D Clouds, Real-Motion Birds) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* VIVID BRIGHT SUNRISE (Touching Top Left / Navbar) */}
        <div className="absolute top-[-20%] left-[-20%] w-[350px] h-[350px] md:w-[750px] md:h-[750px] flex items-center justify-center">
          {/* Atmospheric Glow */}
          <motion.div
            animate={{ opacity: [0.7, 0.95, 0.7], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-orange-500/60 via-yellow-300/40 to-transparent rounded-full blur-[100px] md:blur-[140px]"
          />

          {/* The Sun Disc - Moved higher to touch top/navbar */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative w-28 h-28 md:w-64 md:h-64 bg-gradient-to-br from-white via-yellow-200 to-orange-300 rounded-full shadow-[0_0_100px_rgba(255,220,100,0.9)] z-10 -translate-y-10 md:-translate-y-20 -translate-x-10 md:-translate-x-20"
          />
        </div>

        {/* 3D-VOLUME CLOUDS */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`cloud-${i}`}
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: ["110vw", "-30vw"],
              opacity: [0, 0.6, 0.6, 0],
              y: [0, 10, -10, 0],
            }}
            transition={{
              duration: 50 + i * 20,
              repeat: Infinity,
              delay: i * 10,
              ease: "linear",
            }}
            className="absolute bg-gradient-to-b from-white to-indigo-50/50 rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.4)]"
            style={{
              width: 180 + i * 120,
              height: 70 + i * 40,
              top: `${12 + i * 14}%`,
              filter: "blur(30px)",
            }}
          />
        ))}

        {/* REALISTIC MOTION BIRDS */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`bird-${i}`}
            initial={{ x: "115vw", y: "25vh" }}
            animate={{
              x: "-10vw",
              y: [`${20 + i * 3}vh`, `${18 + i * 3}vh`, `${20 + i * 3}vh`],
              scale: [1, 0.95, 1],
            }}
            transition={{
              duration: 30 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
            className="absolute z-20"
          >
            <div className="relative group">
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-1 bg-black/5 blur-[2px] mt-2 rounded-full scale-125" />
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-indigo-600/50 drop-shadow-md"
              >
                <motion.path
                  animate={{
                    d: [
                      "M12 12c-4-2-8-5-10 0 2-1 6-1 10 0 4-1 8-1 10 0-2-5-6-2-10 0z",
                      "M12 12c-4-2-8-5-10 0 2-1 6-1 10 0 4-1 8-1 10 0-2-5-6-2-10 0z",
                      "M12 12c-4-2-8-5-10 0 2-1 6-1 10 0 4-1 8-1 10 0-2-5-6-2-10 0z",
                    ],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  d="M12 12c-4-2-8-5-10 0 2-1 6-1 10 0 4-1 8-1 10 0-2-5-6-2-10 0z"
                />
                <circle cx="12" cy="12" r="1.5" />
              </svg>
            </div>
          </motion.div>
        ))}

        {/* Ambient Sparkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute bg-white/40 rounded-full w-1 h-1 shadow-[0_0_10px_white]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* --- STABLE SIDE ASSETS (Animated) --- */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {sideAssets.map((asset, i) => (
          <motion.div
            key={i}
            className={`absolute ${asset.size}`}
            style={{ top: asset.top, left: asset.left }}
            initial={{
              opacity: 0,
              scale: 0.5,
              x: i < 5 ? -100 : 100,
              rotate: i < 5 ? -20 : 20,
            }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0.8, 1, 1],
              x: 0,
              y: [0, -15, 0],
              rotate: i % 2 === 0 ? [0, 5, -5, 0] : [0, -5, 5, 0],
              filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"],
            }}
            transition={{
              delay: asset.delay,
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={asset.src}
              alt="3D Visual"
              className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] opacity-100 transform preserve-3d"
            />
          </motion.div>
        ))}
      </div>

      {/* --- CENTRAL CORE & LOCALIZED ROTATING RAYS --- */}
      <div className="relative z-40 flex flex-col items-center gap-4 text-center max-w-[95vw] md:max-w-[90vw]">
        {/* LOCALIZED RAYS (Inside Central Core) - BEHIND LOGO */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-visible scale-[1.2] md:scale-[1.5]">
          {/* Clockwise Rays */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] md:w-[1500px] md:h-[1500px] opacity-[0.12]"
            style={{
              background:
                "repeating-conic-gradient(from 0deg, transparent 0deg 20deg, #4f46e5 22deg 26deg)",
              maskImage: "radial-gradient(circle, black 35%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 35%, transparent 75%)",
            }}
          />
          {/* Anti-Clockwise Rays */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute w-[700px] h-[700px] md:w-[1300px] md:h-[1300px] opacity-[0.1]"
            style={{
              background:
                "repeating-conic-gradient(from 45deg, transparent 0deg 25deg, #6366f1 27deg 31deg)",
              maskImage: "radial-gradient(circle, black 25%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 25%, transparent 70%)",
            }}
          />
        </div>

        {/* Compact Quote with Dynamic Text */}
        <div className="h-16 flex flex-col items-center justify-center mb-2 overflow-hidden w-full px-4">
          <div className="flex flex-col gap-2 items-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={quoteIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8 }}
                className="text-indigo-600 font-extrabold text-[12px] md:text-lg tracking-[0.2em] md:tracking-[0.5em] uppercase drop-shadow-sm h-6 whitespace-nowrap"
              >
                {quotations[quoteIndex]}
              </motion.span>
            </AnimatePresence>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1 }}
              className="h-[3px] bg-indigo-200 rounded-full"
            />
          </div>
        </div>

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="relative px-6 mb-6 md:mb-10"
        >
          <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full scale-150" />
          <img
            src="/logoVw.png"
            alt="Young Authors Logo"
            className="w-[180px] md:w-[320px] relative z-20 drop-shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-row items-center justify-center gap-3 md:gap-6"
        >
          <Link
            to="/writer-pad"
            className="px-6 md:px-12 py-3.5 md:py-4.5 bg-indigo-600 text-white rounded-[1.25rem] font-black text-[10px] md:text-[14px] shadow-2xl shadow-indigo-200/60 hover:bg-indigo-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            Start Writing <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
          </Link>
          <Link
            to="/marketplace"
            className="px-6 md:px-12 py-3.5 md:py-4.5 bg-white text-indigo-600 border border-indigo-100 rounded-[1.25rem] font-black text-[10px] md:text-[14px] shadow-lg hover:bg-slate-50 hover:-translate-y-1 active:scale-95 transition-all whitespace-nowrap"
          >
            Explore Books
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
