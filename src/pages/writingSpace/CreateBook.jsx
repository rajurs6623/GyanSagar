import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineBookOpen,
  HiOutlineGlobeAlt,
  HiOutlineLockClosed,
  HiOutlineShare,
  HiOutlineDownload,
  HiOutlinePrinter,
  HiOutlineSparkles,
  HiOutlineChevronRight,
  HiOutlineAdjustments,
  HiOutlineViewGrid,
  HiOutlineEye,
  HiOutlineCollection,
  HiOutlineDocumentText,
  HiOutlineRefresh,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const CreateBook = () => {
  // Mock project data for standalone operation
  const [currentProject] = useState({ id: "p1", title: "My Masterpiece" });

  const [format, setFormat] = useState("portrait");
  const [visibility, setVisibility] = useState("private");
  const [paperType, setPaperType] = useState("white"); // white, cream, parchment
  const [fontStyle, setFontStyle] = useState("modern"); // modern, classic, story
  const [activeStep, setActiveStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const formats = [
    {
      id: "portrait",
      label: "Portrait",
      icon: <div className="w-6 h-8 border-2 border-current rounded-sm mb-1" />,
    },
    {
      id: "landscape",
      label: "Landscape",
      icon: (
        <div className="w-10 h-6 border-2 border-current rounded-sm mb-1" />
      ),
    },
    {
      id: "square",
      label: "Square",
      icon: <div className="w-8 h-8 border-2 border-current rounded-sm mb-1" />,
    },
  ];

  const papers = [
    {
      id: "white",
      name: "Smooth White",
      color: "bg-white",
      border: "border-slate-200",
    },
    {
      id: "cream",
      name: "Classic Cream",
      color: "bg-orange-50/50",
      border: "border-orange-100",
    },
    {
      id: "parchment",
      name: "Antique Parchment",
      color: "bg-amber-50/70",
      border: "border-amber-100",
    },
  ];

  const fonts = [
    { id: "modern", name: "Modern Sans", font: "font-sans" },
    { id: "classic", name: "Classic Serif", font: "font-serif" },
    { id: "story", name: "Fun Storybook", font: "font-mono" },
  ];

  const startGeneration = () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setActiveStep(3);
          setIsGenerating(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header Overlay */}
      <div className="flex justify-center -mb-8 relative z-10">
        <div className="bg-white px-8 py-3 rounded-full border border-indigo-50 shadow-xl flex space-x-8 text-xs font-black uppercase tracking-widest text-indigo-300">
          {[
            { id: 1, label: "1. Blueprint" },
            { id: 2, label: "2. Preview" },
            { id: 3, label: "3. Launch" },
          ].map((step) => (
            <button
              key={step.id}
              onClick={() => !isGenerating && setActiveStep(step.id)}
              className={`transition-all flex items-center gap-2 ${activeStep === step.id ? "text-indigo-600" : "hover:text-indigo-400"}`}
            >
              {activeStep > step.id && (
                <HiOutlineCheckCircle className="text-green-500" />
              )}
              {step.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isGenerating ? (
          <motion.div
            key="generating"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[3rem] p-20 border border-indigo-50 shadow-2xl text-center space-y-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <HiOutlineRefresh className="text-8xl text-indigo-100 animate-spin absolute inset-0" />
              <HiOutlineBookOpen className="text-6xl text-indigo-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-indigo-950 uppercase tracking-tight">
                Generating Your Masterpiece
              </h2>
              <p className="text-indigo-400 font-medium">
                Assembling chapters, layouts, and high-res illustrations...
              </p>
            </div>
            <div className="max-w-md mx-auto h-3 bg-indigo-50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-indigo-600"
                initial={{ width: 0 }}
                animate={{ width: `${generationProgress}%` }}
              />
            </div>
            <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">
              {generationProgress}% Completed
            </p>
          </motion.div>
        ) : (
          activeStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Left: Configuration */}
              <div className="bg-white rounded-[4rem] p-10 border border-indigo-50 shadow-2xl space-y-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-black text-indigo-950 uppercase tracking-tight flex items-center">
                    <HiOutlineAdjustments className="mr-3 text-indigo-600" />{" "}
                    Blueprint
                  </h2>
                  <span className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter">
                    Project Configurator
                  </span>
                </div>

                {/* Format & Dimensions */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest px-2 flex items-center">
                    <HiOutlineViewGrid className="mr-2" /> Book Size
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {formats.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFormat(f.id)}
                        className={`p-4 rounded-3xl border-2 transition-all flex flex-col items-center justify-center ${format === f.id ? "bg-indigo-600 border-indigo-600 text-white shadow-xl scale-105" : "bg-indigo-50/30 border-transparent text-indigo-300 hover:border-indigo-100"}`}
                      >
                        {f.icon}
                        <span className="text-[10px] font-black leading-tight uppercase tracking-widest">
                          {f.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Paper & Type */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest px-2 flex items-center">
                      <HiOutlineCollection className="mr-2" /> Paper Type
                    </label>
                    <div className="flex gap-2">
                      {papers.map((p) => (
                        <button
                          key={p.id}
                          title={p.name}
                          onClick={() => setPaperType(p.id)}
                          className={`w-10 h-10 rounded-xl border-2 transition-all ${p.color} ${p.border} ${paperType === p.id ? "ring-2 ring-indigo-500 ring-offset-2 scale-110" : ""}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest px-2 flex items-center">
                      <HiOutlineDocumentText className="mr-2" /> Typography
                    </label>
                    <select
                      value={fontStyle}
                      onChange={(e) => setFontStyle(e.target.value)}
                      className="w-full bg-indigo-50/50 border border-transparent focus:border-indigo-200 rounded-xl px-4 py-2.5 text-xs font-bold text-indigo-900 outline-none"
                    >
                      {fonts.map((f) => (
                        <option key={f.id} value={f.id}>
                          {f.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Visibility Setting */}
                <div className="space-y-4 pt-2">
                  <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest px-2 flex items-center">
                    <HiOutlineGlobeAlt className="mr-2" /> Visibility
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      {
                        id: "public",
                        icon: <HiOutlineGlobeAlt />,
                        label: "Public Library",
                        desc: "Available in our global marketplace.",
                      },
                      {
                        id: "private",
                        icon: <HiOutlineLockClosed />,
                        label: "Private Entry",
                        desc: "Only visible to you and editors.",
                      },
                      {
                        id: "shared",
                        icon: <HiOutlineShare />,
                        label: "Link Access",
                        desc: "Shared via private secret link.",
                      },
                    ].map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVisibility(v.id)}
                        className={`w-full p-4 rounded-3xl flex items-center gap-4 border-2 transition-all ${visibility === v.id ? "bg-white border-indigo-600 shadow-xl scale-102" : "bg-indigo-50/30 border-transparent hover:bg-white hover:border-indigo-100"}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center text-lg ${visibility === v.id ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-indigo-300"}`}
                        >
                          {v.icon}
                        </div>
                        <div className="text-left">
                          <p
                            className={`text-xs font-black uppercase tracking-tight ${visibility === v.id ? "text-indigo-900" : "text-indigo-400"}`}
                          >
                            {v.label}
                          </p>
                          <p className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest">
                            {v.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Cover & Metadata */}
              <div className="bg-indigo-950 rounded-[4rem] p-12 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

                <motion.div
                  whileHover={{ rotateY: 8, rotateX: -8 }}
                  className={`bg-white rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-500 ease-out ${format === "portrait" ? "w-64 h-96" : format === "landscape" ? "w-96 h-64" : "w-80 h-80"}`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&fit=crop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-white font-black text-3xl uppercase tracking-tighter leading-8 drop-shadow-md">
                      {currentProject?.title}
                    </h3>
                    <div className="h-0.5 w-12 bg-indigo-500 my-3 rounded-full" />
                    <p className="text-white/70 text-xs font-black uppercase tracking-widest italic">
                      By Author Mind
                    </p>
                  </div>
                </motion.div>

                <div className="mt-12 flex gap-4">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center min-w-24">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">
                      Chapters
                    </p>
                    <p className="text-2xl font-black text-white">08</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center min-w-24">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">
                      Words
                    </p>
                    <p className="text-2xl font-black text-white">4.2k</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center min-w-24">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">
                      Artworks
                    </p>
                    <p className="text-2xl font-black text-white">15</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}

        {activeStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[4rem] p-16 border border-indigo-50 shadow-2xl">
              <div className="text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 text-xs font-black uppercase">
                  <HiOutlineEye /> Visual Proofing
                </div>
                <h2 className="text-5xl font-black text-indigo-950 uppercase tracking-tighter">
                  The Live Preview
                </h2>
                <p className="text-indigo-400 font-medium max-w-lg mx-auto">
                  This is exactly how your readers will see your story world.
                  Check every detail!
                </p>
              </div>

              <div className="flex items-center justify-center space-x-8 lg:space-x-12">
                <button className="p-4 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-lg hover:scale-110">
                  <HiOutlineChevronRight className="rotate-180" />
                </button>

                <div className="flex shadow-2xl rounded-sm overflow-hidden scale-90 lg:scale-100 origin-center transition-transform duration-500 hover:rotate-1">
                  {/* Left Page (Mock Illustration) */}
                  <div
                    className={`w-[400px] h-[560px] border-r border-indigo-50 flex flex-col p-1 dark-border ${paperType === "white" ? "bg-white" : paperType === "cream" ? "bg-[#fffcf0]" : "bg-[#fcf8f0]"}`}
                  >
                    <div className="flex-1 rounded-sm overflow-hidden m-4 bg-slate-100 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800"
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                    <div className="p-8 pt-0 text-center">
                      <p className="text-[10px] font-black text-indigo-200 mt-2 italic tracking-widest">
                        Illustration by Studio AI
                      </p>
                    </div>
                  </div>

                  {/* Right Page (Text Content) */}
                  <div
                    className={`w-[400px] h-[560px] flex flex-col p-12 ${paperType === "white" ? "bg-white" : paperType === "cream" ? "bg-[#fffcf0]" : "bg-[#fcf8f0]"}`}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <span className="bg-indigo-950 text-white text-[9px] font-black px-2 py-1 rounded">
                        CHAPTER 01
                      </span>
                      <span className="text-[10px] font-black text-indigo-200 tracking-tighter">
                        PAGE 12
                      </span>
                    </div>
                    <h1
                      className={`text-2xl font-black mb-8 text-indigo-950 leading-tight ${fontStyle === "modern" ? "font-sans" : fontStyle === "classic" ? "font-serif" : "font-mono"}`}
                    >
                      The Mysterious Map
                    </h1>
                    <div
                      className={`space-y-6 text-indigo-900/80 leading-relaxed text-sm ${fontStyle === "modern" ? "font-sans" : fontStyle === "classic" ? "font-serif" : "font-mono"}`}
                    >
                      <p>
                        The stars were unusually bright that night, casting
                        long, silver shadows across the cobblestone streets of
                        Oakhaven.
                      </p>
                      <p>
                        Young Elara clutched the bronze key tightly in her palm,
                        feeling its unnatural warmth pulse with a rhythmic glow.
                        Behind her, the clock tower struck twelve.
                      </p>
                      <p>
                        She knew what she had to do. The map her grandfather
                        left behind wasn't just a drawing—it was a promise of a
                        world far beyond the village gates.
                      </p>
                    </div>
                    <div className="mt-auto h-px bg-indigo-50 w-full mb-4" />
                    <footer className="text-center">
                      <span className="text-[8px] font-black text-indigo-100 uppercase tracking-[0.2em]">
                        {currentProject?.title}
                      </span>
                    </footer>
                  </div>
                </div>

                <button className="p-4 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-lg hover:scale-110">
                  <HiOutlineChevronRight />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="bg-white border border-indigo-100 text-indigo-600 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-50 transition-all">
                <HiOutlineCollection /> Paper: {paperType}
              </button>
              <button className="bg-white border border-indigo-100 text-indigo-600 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-50 transition-all">
                <HiOutlineDocumentText /> Font: {fontStyle}
              </button>
            </div>
          </motion.div>
        )}

        {activeStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <div className="relative text-center">
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                className="p-8 bg-amber-400 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-2xl shadow-amber-200 mb-8 z-10 relative"
              >
                <HiOutlineBookOpen className="text-5xl text-white" />
              </motion.div>
              <div className="space-y-4">
                <h1 className="text-6xl font-black text-indigo-950 uppercase tracking-tighter leading-none">
                  You're an Author!
                </h1>
                <p className="text-xl text-indigo-600 font-medium">
                  Your book is ready for its final journey into the world.
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 opacity-10">
                <HiOutlineSparkles className="text-[15rem] text-indigo-600 animate-pulse" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Build Section */}
              <div className="bg-white p-10 rounded-[4rem] border border-indigo-50 shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-bl-full -mr-8 -mt-8" />
                <div className="relative">
                  <h4 className="font-black text-2xl text-indigo-950 mb-2">
                    Build Digital Book
                  </h4>
                  <p className="text-xs text-indigo-400 font-bold tracking-widest uppercase mb-8">
                    Export Formats
                  </p>

                  <div className="space-y-4">
                    <button
                      onClick={() =>
                        alert(
                          "Preparing your Interactive eBook for download...",
                        )
                      }
                      className="w-full group bg-indigo-600 hover:bg-indigo-700 text-white p-6 rounded-[2rem] font-black uppercase tracking-widest shadow-xl shadow-indigo-100 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <HiOutlineDownload className="text-3xl" />
                        <div className="text-left">
                          <span className="block">Interactive eBook</span>
                          <span className="text-[9px] text-white/60 font-bold block">
                            EPUB & PDF WITH METADATA
                          </span>
                        </div>
                      </div>
                      <HiOutlineChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button
                      onClick={() =>
                        alert(
                          "Generating Print-Ready PDF with bleed marks...",
                        )
                      }
                      className="w-full group bg-slate-100 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 p-6 rounded-[2rem] font-black uppercase tracking-widest transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <HiOutlinePrinter className="text-3xl" />
                        <div className="text-left">
                          <span className="block">Printable Hardcopy</span>
                          <span className="text-[9px] text-slate-300 font-bold block">
                            CMYK 300DPI BLEED VERSION
                          </span>
                        </div>
                      </div>
                      <HiOutlineChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Publish Section */}
              <div className="bg-indigo-950 p-10 rounded-[4rem] text-white shadow-2xl space-y-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h4 className="font-black text-2xl text-amber-400 mb-2">
                    Global Marketplace
                  </h4>
                  <p className="text-xs text-white/40 font-bold tracking-widest uppercase mb-8">
                    Author Visibility
                  </p>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                        <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">
                          Target Age
                        </p>
                        <p className="text-base font-black text-white italic">
                          7 - 12 Years
                        </p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                        <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">
                          Suggested Price
                        </p>
                        <p className="text-base font-black text-white italic">
                          $4.99
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button
                        onClick={() =>
                          alert(
                            " Your book is being listed on the Nation's Young Authors marketplace!",
                          )
                        }
                        className="w-full bg-amber-400 hover:bg-amber-300 text-indigo-950 p-6 rounded-[2rem] font-black uppercase tracking-widest shadow-2xl shadow-amber-950/20 transition-all flex items-center justify-center gap-3"
                      >
                        <HiOutlineGlobeAlt className="text-3xl" />
                        <span>Release Internationally</span>
                      </button>
                      <p className="text-[9px] text-white/20 font-medium italic text-center px-4 leading-tight">
                        By publishing, you agree to the Young Author guidelines
                        for child-safe content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center max-w-4xl mx-auto pb-20">
        <button
          onClick={() =>
            !isGenerating && setActiveStep((prev) => Math.max(1, prev - 1))
          }
          className={`font-black uppercase tracking-widest text-indigo-300 transition-all hover:text-indigo-600 flex items-center gap-2 ${activeStep === 1 || isGenerating ? "opacity-0 pointer-events-none" : ""}`}
        >
          <HiOutlineChevronRight className="rotate-180" /> Back to{" "}
          {activeStep === 2 ? "Blueprint" : "Preview"}
        </button>

        <div className="flex space-x-3 items-center">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-500 ${activeStep === s ? "w-10 bg-indigo-600" : activeStep > s ? "w-4 bg-green-400" : "w-4 bg-indigo-100"}`}
            />
          ))}
        </div>

        {activeStep < 3 ? (
          <button
            onClick={() => {
              if (activeStep === 2) startGeneration();
              else setActiveStep((prev) => prev + 1);
            }}
            className={`bg-indigo-950 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-2xl transition-all hover:bg-indigo-800 hover:-translate-y-1 active:scale-95 flex items-center gap-3 ${isGenerating ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isGenerating}
          >
            {activeStep === 2 ? (
              <>
                <HiOutlineSparkles className="text-amber-400" />
                <span>Build Final Book</span>
              </>
            ) : (
              <>
                <span>Next Phase</span>
                <HiOutlineChevronRight />
              </>
            )}
          </button>
        ) : (
          <button
            onClick={() =>
              alert("Congratulations Author! Your project is complete.")
            }
            className="bg-green-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-2xl transition-all hover:bg-green-600 hover:-translate-y-1 flex items-center gap-3"
          >
            <HiOutlineCheckCircle />
            <span>Project Complete</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateBook;
