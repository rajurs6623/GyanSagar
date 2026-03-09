import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Wand2,
  Users,
  MapPin,
  Clock,
  CloudSun,
  Plus,
  Trash2,
  Image as ImageIcon,
  PenTool,
  Smile,
  TypeOutline,
  CheckCircle,
  Save,
  BookMarked,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const CATEGORIES = [
  "Adventure",
  "Fantasy",
  "Mystery",
  "Sci-Fi",
  "Bedtime Story",
  "Moral Story",
  "Friendship Story",
  "Nature Story",
  "School Story",
  "Patriotic Story",
];

const THEMES = [
  "Courage",
  "Kindness",
  "Friendship",
  "Honesty",
  "Teamwork",
  "Protecting Nature",
  "Dreams & Ambition",
];

const STORY_TIPS = [
  "Start with a hook! Make your first sentence so interesting that readers can't stop.",
  "Give your characters a secret or a special talent.",
  "Every good story has a problem that needs solving. Make it tricky!",
  "Use your senses: what does the magic forest smell like? What does the space laser sound like?",
  "Let your characters make mistakes - it makes them feel real.",
];

const StoryCreator = ({ onBack }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTip, setActiveTip] = useState(0);

  // Auto-rotate tips
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTip((prev) => (prev + 1) % STORY_TIPS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const [storyData, setStoryData] = useState({
    basics: {
      title: "",
      subtitle: "",
      category: "",
      theme: "",
    },
    setting: {
      location: "",
      timePeriod: "",
      atmosphere: "",
    },
    characters: [],
    plot: {
      beginning: "",
      conflict: "",
      adventure: "",
      climax: "",
      ending: "",
    },
    chapters: [],
    illustrations: {
      hasImages: false,
      hasStickers: false,
      hasDrawings: false,
    },
  });

  // Keep track of temp states for forms
  const [newChar, setNewChar] = useState({
    name: "",
    role: "Hero",
    personality: "",
    appearance: "",
  });
  const [newChap, setNewChap] = useState({ title: "", description: "" });

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 7));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const updateBasics = (field, value) => {
    setStoryData((prev) => ({
      ...prev,
      basics: { ...prev.basics, [field]: value },
    }));
  };

  const updateSetting = (field, value) => {
    setStoryData((prev) => ({
      ...prev,
      setting: { ...prev.setting, [field]: value },
    }));
  };

  const addCharacter = () => {
    if (!newChar.name) return;
    setStoryData((prev) => ({
      ...prev,
      characters: [...prev.characters, { ...newChar, id: Date.now() }],
    }));
    setNewChar({ name: "", role: "Hero", personality: "", appearance: "" });
  };

  const removeCharacter = (id) => {
    setStoryData((prev) => ({
      ...prev,
      characters: prev.characters.filter((c) => c.id !== id),
    }));
  };

  const updatePlot = (field, value) => {
    setStoryData((prev) => ({
      ...prev,
      plot: { ...prev.plot, [field]: value },
    }));
  };

  const addChapter = () => {
    if (!newChap.title) return;
    setStoryData((prev) => ({
      ...prev,
      chapters: [...prev.chapters, { ...newChap, id: Date.now() }],
    }));
    setNewChap({ title: "", description: "" });
  };

  const removeChapter = (id) => {
    setStoryData((prev) => ({
      ...prev,
      chapters: prev.chapters.filter((c) => c.id !== id),
    }));
  };

  const toggleIllustration = (field) => {
    setStoryData((prev) => ({
      ...prev,
      illustrations: {
        ...prev.illustrations,
        [field]: !prev.illustrations[field],
      },
    }));
  };

  const generateIdea = (type) => {
    // Mock generators for premium feel
    if (type === "title")
      updateBasics("title", "The Secret of the Whispering Woods");
    if (type === "character")
      setNewChar({
        name: "Luna Riverfoot",
        role: "Hero",
        personality: "Brave but easily distracted by shiny things",
        appearance: "Wears a cloak made of starlight",
      });
    if (type === "plot")
      updatePlot(
        "conflict",
        "The magic crystal that powers the floating city has gone missing, and it's up to our hero to find it before the city falls into the clouds.",
      );
  };

  const Steps = [
    {
      title: "Basics",
      icon: BookMarked,
      color: "from-indigo-500 to-blue-500",
      light: "bg-indigo-50",
    },
    {
      title: "Setting",
      icon: MapPin,
      color: "from-emerald-500 to-teal-500",
      light: "bg-emerald-50",
    },
    {
      title: "Cast",
      icon: Users,
      color: "from-rose-500 to-pink-500",
      light: "bg-rose-50",
    },
    {
      title: "Plot",
      icon: BookOpen,
      color: "from-violet-500 to-purple-500",
      light: "bg-violet-50",
    },
    {
      title: "Draft",
      icon: TypeOutline,
      color: "from-blue-500 to-cyan-500",
      light: "bg-blue-50",
    },
    {
      title: "Visuals",
      icon: ImageIcon,
      color: "from-amber-500 to-orange-500",
      light: "bg-amber-50",
    },
    {
      title: "Finish",
      icon: CheckCircle,
      color: "from-teal-500 to-emerald-500",
      light: "bg-teal-50",
    },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-12 animate-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                  Story Foundation
                </h2>
                <p className="text-slate-500 font-medium mt-1 text-lg">
                  Every masterpiece begins with a name and a vision.
                </p>
              </div>
              <button
                onClick={() => generateIdea("title")}
                className="group flex items-center gap-3 bg-white border border-slate-200 px-6 py-3.5 rounded-2xl text-sm font-black text-slate-800 hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-slate-100/50 hover:-translate-y-1"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Wand2
                    size={18}
                    className="text-indigo-600 group-hover:text-white"
                  />
                </div>
                Summon Inspiration
              </button>
            </div>

            <div className="grid grid-cols-1 gap-10">
              <div className="group relative">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block ml-1 transition-colors group-focus-within:text-indigo-600">
                  The Grand Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chronicles of the Floating Isles"
                  className="w-full bg-white/50 border-2 border-slate-100 p-6 rounded-[2rem] focus:border-indigo-500 focus:bg-white focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all text-2xl font-black text-slate-800 placeholder:text-slate-200"
                  value={storyData.basics.title}
                  onChange={(e) => updateBasics("title", e.target.value)}
                />
              </div>

              <div className="group relative">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block ml-1 transition-colors group-focus-within:text-indigo-600">
                  The Hook (Subtitle)
                </label>
                <input
                  type="text"
                  placeholder="A short sentence that captures the soul of your tale..."
                  className="w-full bg-white/50 border-2 border-slate-100 p-5 rounded-[1.5rem] focus:border-indigo-500 focus:bg-white outline-none transition-all text-lg font-medium text-slate-600 placeholder:text-slate-200"
                  value={storyData.basics.subtitle}
                  onChange={(e) => updateBasics("subtitle", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Genre / Category
                  </label>
                  <div className="relative group">
                    <select
                      className="w-full appearance-none bg-white/50 border-2 border-slate-100 p-5 rounded-2xl focus:border-indigo-500 outline-none transition-all text-slate-700 font-bold cursor-pointer pr-12"
                      value={storyData.basics.category}
                      onChange={(e) => updateBasics("category", e.target.value)}
                    >
                      <option value="">Select a Genre</option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-indigo-500 transition-colors">
                      <ChevronRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Core Theme
                  </label>
                  <div className="relative group">
                    <select
                      className="w-full appearance-none bg-white/50 border-2 border-slate-100 p-5 rounded-2xl focus:border-indigo-500 outline-none transition-all text-slate-700 font-bold cursor-pointer pr-12"
                      value={storyData.basics.theme}
                      onChange={(e) => updateBasics("theme", e.target.value)}
                    >
                      <option value="">Select a Theme</option>
                      {THEMES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-indigo-500 transition-colors">
                      <ChevronRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-10 animate-in">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                World Building
              </h2>
              <p className="text-slate-500 font-medium mt-1 text-lg">
                Paint the backdrop where your legends will come to life.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  field: "location",
                  label: "Where is it set?",
                  sub: "e.g. A library that spans dimensions",
                  icon: MapPin,
                  color: "text-emerald-500",
                  bg: "bg-emerald-50",
                },
                {
                  field: "timePeriod",
                  label: "When does it happen?",
                  sub: "e.g. During the Great Eclipse of 2050",
                  icon: Clock,
                  color: "text-amber-500",
                  bg: "bg-amber-50",
                },
                {
                  field: "atmosphere",
                  label: "What's the energy?",
                  sub: "e.g. Electric, slightly ominous, hopeful",
                  icon: CloudSun,
                  color: "text-blue-500",
                  bg: "bg-blue-50",
                },
              ].map((item) => (
                <div
                  key={item.field}
                  className={`p-8 rounded-[2.5rem] border-2 border-transparent transition-all duration-500 hover:shadow-2xl flex flex-col md:flex-row gap-8 group ${storyData.setting[item.field] ? "bg-white border-slate-100 shadow-xl" : "bg-slate-50"}`}
                >
                  <div
                    className={`w-16 h-16 rounded-[1.5rem] ${item.bg} flex items-center justify-center ${item.color} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}
                  >
                    <item.icon size={32} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-lg font-black text-slate-800">
                        {item.label}
                      </h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {item.sub}
                      </p>
                    </div>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-indigo-500 outline-none transition-all text-xl font-bold text-slate-700 placeholder:text-slate-300"
                      placeholder="Specify the setting..."
                      value={storyData.setting[item.field]}
                      onChange={(e) =>
                        updateSetting(item.field, e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-10 animate-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                  The Cast
                </h2>
                <p className="text-slate-500 font-medium mt-1 text-lg">
                  Every great story needs unforgettable souls.
                </p>
              </div>
              <button
                onClick={() => generateIdea("character")}
                className="flex items-center gap-3 bg-rose-50 border border-rose-100 px-6 py-3.5 rounded-2xl text-sm font-black text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-xl shadow-rose-100/50"
              >
                <Wand2 size={18} /> Recruit a Hero
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {storyData.characters.map((char) => (
                <div
                  key={char.id}
                  className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/20 relative group overflow-hidden hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => removeCharacter(char.id)}
                      className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-indigo-100">
                      {char.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 tracking-tight">
                        {char.name}
                      </h4>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-black uppercase tracking-[0.2em]">
                        {char.role}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 bg-slate-50/50 p-6 rounded-3xl border border-slate-100/50">
                    <div className="flex gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                        Nature
                      </span>
                      <p className="text-sm font-bold text-slate-700">
                        {char.personality}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                        Vibe
                      </span>
                      <p className="text-sm font-medium text-slate-600">
                        {char.appearance}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-4 border-dashed border-slate-100 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center space-y-6 hover:border-indigo-200 transition-colors group py-12 bg-white/40 backdrop-blur-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-indigo-50 group-hover:text-indigo-400 transition-all duration-500">
                  <Plus size={40} />
                </div>
                <div>
                  <h4 className="font-black text-slate-400 group-hover:text-indigo-900 transition-colors">
                    Manifest New Character
                  </h4>
                  <p className="text-xs text-slate-300 font-bold uppercase tracking-widest mt-1">
                    Assemble your league
                  </p>
                </div>

                {/* Inline Character Form for speed */}
                <div className="w-full space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      className="bg-white border border-slate-100 px-5 py-3.5 rounded-2xl outline-none focus:border-indigo-500 font-bold text-sm w-full"
                      placeholder="Character Name"
                      value={newChar.name}
                      onChange={(e) =>
                        setNewChar({ ...newChar, name: e.target.value })
                      }
                    />
                    <select
                      className="bg-white border border-slate-100 px-5 py-3.5 rounded-2xl outline-none focus:border-indigo-500 font-bold text-sm w-full"
                      value={newChar.role}
                      onChange={(e) =>
                        setNewChar({ ...newChar, role: e.target.value })
                      }
                    >
                      <option>Hero</option>
                      <option>Villain</option>
                      <option>Sidekick</option>
                      <option>Mentor</option>
                    </select>
                  </div>
                  <input
                    className="bg-white border border-slate-100 px-5 py-3.5 rounded-2xl outline-none focus:border-indigo-500 font-bold text-sm w-full"
                    placeholder="Brief personality or quirk..."
                    value={newChar.personality}
                    onChange={(e) =>
                      setNewChar({ ...newChar, personality: e.target.value })
                    }
                  />
                  <button
                    onClick={addCharacter}
                    className="w-full bg-slate-900 text-white rounded-[1.5rem] py-4 font-black tracking-tight hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-20"
                    disabled={!newChar.name}
                  >
                    Confirm Manifestation
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-12 animate-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                  The Plot Weave
                </h2>
                <p className="text-slate-500 font-medium mt-1 text-lg">
                  Architect the emotional journey of your multiverse.
                </p>
              </div>
              <button
                onClick={() => generateIdea("plot")}
                className="flex items-center gap-3 bg-violet-50 border border-violet-100 px-6 py-3.5 rounded-2xl text-sm font-black text-violet-600 hover:bg-violet-600 hover:text-white transition-all shadow-xl shadow-violet-100/50"
              >
                <Wand2 size={18} /> Infinite Idea Loop
              </button>
            </div>

            <div className="grid grid-cols-1 gap-12 relative">
              {/* Stepping Stones UI */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-100 via-purple-100 to-indigo-100 hidden md:block opacity-50"></div>

              {[
                { field: "beginning", label: "Genesis", sub: "Starting point" },
                {
                  field: "conflict",
                  label: "The Turning",
                  sub: "Main challenge",
                },
                { field: "adventure", label: "The Path", sub: "Rising action" },
                { field: "climax", label: "The Apex", sub: "Peak of story" },
                { field: "ending", label: "Resolution", sub: "Final lesson" },
              ].map((section, idx) => (
                <div key={section.field} className="relative md:pl-20 group">
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-[1.5rem] bg-white border border-slate-100 shadow-xl flex items-center justify-center z-10 hidden md:flex transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 font-black text-slate-300">
                    {idx + 1}
                  </div>
                  <div
                    className={`p-10 rounded-[2.5rem] border-2 border-transparent transition-all duration-500 ${storyData.plot[section.field] ? "bg-white border-slate-100 shadow-2xl" : "bg-slate-50 shadow-inner"}`}
                  >
                    <div className="mb-6">
                      <h4 className="text-xl font-black text-slate-800 tracking-tight leading-none">
                        {section.label}
                      </h4>
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mt-2">
                        {section.sub}
                      </p>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-none focus:ring-0 text-lg font-medium text-slate-600 placeholder:text-slate-300 resize-none min-h-[100px]"
                      placeholder="Let your words flow here..."
                      value={storyData.plot[section.field]}
                      onChange={(e) =>
                        updatePlot(section.field, e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-10 animate-in">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                Manuscript Mapping
              </h2>
              <p className="text-slate-500 font-medium mt-1 text-lg">
                Break down the journey into epic chapters.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              {storyData.chapters.map((chap, idx) => (
                <div
                  key={chap.id}
                  className="bg-white hover:bg-slate-50 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/20 border border-slate-100 flex items-center gap-8 group transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-indigo-100">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black text-slate-800 tracking-tight leading-tight">
                      {chap.title}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 mt-1">
                      {chap.description || "The journey continues..."}
                    </p>
                  </div>
                  <button
                    onClick={() => removeChapter(chap.id)}
                    className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}

              <div className="bg-white/40 border-4 border-dashed border-slate-100 p-10 rounded-[2.5rem] space-y-8">
                <div className="flex items-center gap-4 text-slate-400">
                  <Plus className="w-8 h-8" />
                  <h4 className="text-lg font-black uppercase tracking-widest">
                    Outline Next Chapter
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      Chapter Heading
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-indigo-500 font-black"
                      placeholder="e.g. Into the Unknown"
                      value={newChap.title}
                      onChange={(e) =>
                        setNewChap({ ...newChap, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      The Gist (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-indigo-500 font-bold"
                      placeholder="A brief summary..."
                      value={newChap.description}
                      onChange={(e) =>
                        setNewChap({ ...newChap, description: e.target.value })
                      }
                    />
                  </div>
                </div>
                <button
                  onClick={addChapter}
                  disabled={!newChap.title}
                  className="w-full bg-slate-900 text-white py-5 rounded-[2rem] font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-10"
                >
                  Solidify Chapter Outline
                </button>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-12 animate-in text-center max-w-2xl mx-auto">
            <div className="mb-12">
              <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Visual Symphony
              </h2>
              <p className="text-slate-500 font-medium mt-4 text-xl">
                Enhance your narrative with rich visual layers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                {
                  id: "hasImages",
                  icon: ImageIcon,
                  title: "Art & Photos",
                  desc: "Embed custom illustrations",
                },
                {
                  id: "hasStickers",
                  icon: Smile,
                  title: "Dynamic Stickers",
                  desc: "Playful character emotes",
                },
                {
                  id: "hasDrawings",
                  icon: PenTool,
                  title: "Canvas Pad",
                  desc: "Sketch directly on pages",
                },
              ].map((option) => (
                <div
                  key={option.id}
                  onClick={() => toggleIllustration(option.id)}
                  className={`p-8 rounded-[3rem] border-2 cursor-pointer transition-all duration-500 group flex items-start gap-6 ${storyData.illustrations[option.id] ? "bg-indigo-600 border-indigo-600 text-white shadow-[0_20px_40px_rgba(79,70,229,0.3)]" : "bg-white border-slate-100 hover:border-indigo-200 hover:shadow-xl"}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-12 ${storyData.illustrations[option.id] ? "bg-white/20 text-white border border-white/20" : "bg-slate-50 text-indigo-500 shadow-sm"}`}
                  >
                    <option.icon size={26} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4
                      className={`text-xl font-black tracking-tight ${storyData.illustrations[option.id] ? "text-white" : "text-slate-800"}`}
                    >
                      {option.title}
                    </h4>
                    <p
                      className={`text-sm font-medium ${storyData.illustrations[option.id] ? "text-indigo-100" : "text-slate-400"}`}
                    >
                      {option.desc}
                    </p>
                  </div>
                  {storyData.illustrations[option.id] && (
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 animate-in zoom-in">
                      <CheckCircle size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-indigo-50/50 border border-indigo-100 p-10 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-indigo-500 shadow-xl shadow-indigo-100 mb-6">
                  <Sparkles size={32} />
                </div>
                <h4 className="text-xl font-black text-indigo-900 tracking-tight">
                  Magical Scaffolding Ready
                </h4>
                <p className="text-sm text-indigo-600/70 font-bold max-w-sm mt-2 leading-relaxed">
                  Your story pad will be automatically pre-formatted with
                  dedicated spaces for your creative choices!
                </p>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-12 animate-in text-center">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Save size={14} className="animate-pulse" /> Architecture Sealed
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Master Design Overview
              </h2>
              <p className="text-slate-500 font-medium mt-4 text-xl">
                Review the skeletal structure of your upcoming masterpiece.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-xl border border-white rounded-[4rem] p-12 text-left shadow-2xl shadow-indigo-100/20 space-y-12 max-w-4xl mx-auto overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-600"></div>

              <div className="border-b border-slate-100 pb-12">
                <span className="text-xs font-black text-slate-300 uppercase tracking-[0.3em]">
                  Manuscript Title
                </span>
                <h1 className="text-5xl font-black text-indigo-900 tracking-tighter mt-4 leading-none">
                  {storyData.basics.title || "Untethered Dreams"}
                </h1>
                <p className="text-xl text-slate-400 font-medium mt-4 italic">
                  "
                  {storyData.basics.subtitle || "A journey through the unknown"}
                  "
                </p>

                <div className="flex gap-3 mt-8">
                  <span className="px-4 py-2 bg-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-100">
                    {storyData.basics.category}
                  </span>
                  <span className="px-4 py-2 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest">
                    {storyData.basics.theme}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MapPin size={12} className="text-indigo-500" /> Origin
                    Point
                  </span>
                  <p className="text-lg font-black text-slate-800 leading-tight">
                    {storyData.setting.location || "Elsewhere"}
                  </p>
                  <p className="text-sm font-bold text-slate-400">
                    {storyData.setting.timePeriod || "Outside of time"}
                  </p>
                </div>

                <div className="space-y-4 col-span-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Users size={12} className="text-rose-500" /> Key Players (
                    {storyData.characters.length})
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {storyData.characters.map((c) => (
                      <div
                        key={c.id}
                        className="px-4 py-1 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                        <span className="text-sm font-black text-slate-700">
                          {c.name}
                        </span>
                        <span className="text-[10px] font-bold text-slate-300 uppercase">
                          {c.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100/50">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <TypeOutline size={12} className="text-violet-500" /> Chapter
                  Flow
                </span>
                <div className="grid grid-cols-1 gap-4">
                  {storyData.chapters.map((chap, i) => (
                    <div key={chap.id} className="flex gap-6 items-center">
                      <span className="text-2xl font-black text-indigo-200 w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-lg font-black text-slate-800 tracking-tight leading-tight">
                          {chap.title}
                        </p>
                        <p className="text-xs font-medium text-slate-400 mt-1">
                          {chap.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-indigo-200 animate-bounce transition-transform cursor-pointer transform hover:scale-110">
                <PenTool size={40} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight mt-8">
                Your Muse is Ready.
              </h3>
              <p className="text-slate-500 font-medium mt-2">
                The architecture is complete. Now, bring it to life.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafc] font-['Outfit',-apple-system,sans-serif] selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(250,250,252,1)_100%)] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto min-h-screen flex flex-col">
        {/* Top Navigation Bar / Stepper */}
        <header className="sticky top-0 z-50 px-4 md:px-10 py-3 md:py-4 backdrop-blur-xl bg-white/70 border-b border-slate-200/60 shadow-sm shadow-slate-200/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={onBack}
                className="group w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-lg md:rounded-xl shadow-sm border border-slate-100 hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-x-1 hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <ChevronLeft
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </button>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse"></div>
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Studio
                  </span>
                </div>
                <h1 className="text-base md:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 truncate max-w-[100px] md:max-w-none">
                  {storyData.basics.title || "Untitled"}
                  <span className="text-indigo-600">.</span>
                </h1>
              </div>
            </div>

            {/* Stepper Logic */}
            <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-1 lg:pb-0 scrollbar-hide px-2 md:px-4 flex-1">
              <div className="flex items-center gap-1.5 md:gap-3">
                {Steps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isActive = currentStep === idx + 1;
                  const isPast = currentStep > idx + 1;

                  return (
                    <React.Fragment key={idx}>
                      <button
                        onClick={() => setCurrentStep(idx + 1)}
                        className={`group relative flex flex-col items-center min-w-[45px] md:min-w-[60px] transition-all duration-300 ${isActive ? "scale-105" : "hover:scale-105"}`}
                      >
                        <div
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-slate-900 text-white shadow-xl shadow-slate-200" : isPast ? "bg-emerald-500 text-white" : "bg-white border border-slate-200 text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-500"}`}
                        >
                          {isPast ? (
                            <CheckCircle size={14} />
                          ) : (
                            <StepIcon size={14} />
                          )}
                        </div>
                        <span
                          className={`text-[8px] font-black mt-1 uppercase tracking-wider whitespace-nowrap transition-colors ${isActive ? "text-slate-900" : "text-slate-400"}`}
                        >
                          {step.title}
                        </span>
                        {isActive && (
                          <div className="absolute -top-1 w-1 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                        )}
                      </button>
                      {idx < Steps.length - 1 && (
                        <div
                          className={`w-2 md:w-6 h-0.5 rounded-full transition-colors duration-700 ${isPast ? "bg-emerald-500" : "bg-slate-100"}`}
                        ></div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="px-4 py-2 bg-slate-100/50 rounded-xl border border-slate-200/50 text-slate-500 text-xs font-bold flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 rounded-full border border-white shadow-sm bg-indigo-${i}00`}
                    ></div>
                  ))}
                </div>
                Cloud Sync Active
              </div>
            </div>
          </div>
        </header>

        {/* Main Interface */}
        <div className="flex-1 flex flex-col lg:flex-row p-6 md:p-12 gap-12">
          {/* Main Content Area */}
          <main className="flex-1 max-w-[1000px] mx-auto w-full flex flex-col items-center">
            <div className="w-full bg-white/60 backdrop-blur-2xl border border-white rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-indigo-100/30 transition-all duration-700 relative overflow-hidden flex flex-col h-full min-h-[600px]">
              {/* Internal Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

              <div className="flex-1">{renderStepContent()}</div>

              {/* Navigation Footer Inside Card */}
              <div className="mt-12 pt-10 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-3 px-8 py-4 bg-slate-50 text-slate-600 rounded-2xl font-black transition-all hover:bg-slate-100 active:scale-95 disabled:opacity-0 ${currentStep === 1 ? "pointer-events-none" : ""}`}
                >
                  <ChevronLeft size={20} /> Back
                </button>

                <div className="flex items-center gap-4">
                  {currentStep === Steps.length ? (
                    <button
                      onClick={() =>
                        navigate("/writer-pad", { state: { storyData } })
                      }
                      className="group flex items-center gap-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black px-10 py-5 rounded-[2rem] shadow-xl shadow-emerald-100 hover:shadow-emerald-200 hover:-translate-y-1 active:scale-95 transition-all"
                    >
                      <PenTool
                        size={22}
                        className="group-hover:rotate-12 transition-transform"
                      />
                      Manifest This Story
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="group flex items-center gap-4 bg-slate-900 text-white font-black px-12 py-5 rounded-[2rem] shadow-xl shadow-slate-200 hover:shadow-indigo-100 hover:-translate-y-1 active:scale-95 transition-all"
                    >
                      Next Chapter
                      <ChevronRight
                        size={22}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar / Assistant */}
          <aside className="lg:w-[400px] flex flex-col gap-8 shrink-0">
            {/* The Muse Card */}
            <div className="bg-slate-600 rounded-[3rem] p-10 text-black shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div>
                    <h3 className="font-black text-xs uppercase tracking-widest text-indigo-300">
                      Writing Wisdom
                    </h3>
                    <p className="text-xs text-slate-400">
                      Step {currentStep} Guidance
                    </p>
                  </div>
                </div>
                <div className="min-h-[160px] flex items-center">
                  <p
                    className="text-xl font-medium leading-relaxed italic text-indigo-50/90 transition-all duration-500 animate-in fade-in"
                    key={activeTip}
                  >
                    "{STORY_TIPS[activeTip]}"
                  </p>
                </div>
                <div className="flex gap-1.5 mt-10 justify-center">
                  {STORY_TIPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTip(i)}
                      className={`h-1 rounded-full transition-all duration-500 ${i === activeTip ? "w-10 bg-indigo-400" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Progress Checklist */}
            <div className="bg-white/60 backdrop-blur-xl border border-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40">
              <h3 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
                Architecture Checklist
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Core Concept",
                    done: !!storyData.basics.title,
                    icon: BookMarked,
                  },
                  {
                    label: "World Building",
                    done: !!storyData.setting.location,
                    icon: MapPin,
                  },
                  {
                    label: "Character Arc",
                    done: storyData.characters.length > 0,
                    icon: Users,
                  },
                  {
                    label: "Conflict Matrix",
                    done: !!storyData.plot.conflict,
                    icon: BookOpen,
                  },
                  {
                    label: "Plot Mapping",
                    done: storyData.chapters.length > 0,
                    icon: TypeOutline,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-5 rounded-3xl transition-all border ${item.done ? "bg-emerald-50/50 border-emerald-100" : "bg-slate-50/50 border-transparent opacity-60"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${item.done ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"}`}
                      >
                        <item.icon size={16} />
                      </div>
                      <span
                        className={`text-[13px] font-bold ${item.done ? "text-slate-800" : "text-slate-500"}`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${item.done ? "bg-emerald-500 text-white animate-bounce-once" : "bg-slate-200"}`}
                    >
                      {item.done && <CheckCircle size={14} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Generator Promo */}
            <button
              onClick={() => generateIdea("plot")}
              className="group p-8 rounded-[3rem] bg-indigo-50 border border-indigo-100 flex items-center gap-6 hover:bg-indigo-100 transition-all text-left"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl shadow-indigo-100 group-hover:rotate-12 transition-transform">
                <Wand2 size={32} />
              </div>
              <div>
                <h4 className="font-black text-indigo-900 tracking-tight leading-tight">
                  Need a Masterstroke?
                </h4>
                <p className="text-xs text-indigo-600 font-bold mt-1">
                  Tap for an AI Plot Twist
                </p>
              </div>
            </button>
          </aside>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap');
        
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        .animate-in {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-bounce-once {
          animation: bounceOnce 0.5s ease;
        }

        @keyframes bounceOnce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        input::placeholder, textarea::placeholder {
           color: #cbd5e1;
           font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default StoryCreator;
