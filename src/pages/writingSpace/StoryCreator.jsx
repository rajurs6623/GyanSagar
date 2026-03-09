import React, { useState } from "react";
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
  const [newChar, setNewChar] = useState({ name: "", role: "Hero", personality: "", appearance: "" });
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
      illustrations: { ...prev.illustrations, [field]: !prev.illustrations[field] },
    }));
  };

  const generateIdea = (type) => {
    // Mock generators for premium feel
    if (type === "title") updateBasics("title", "The Secret of the Whispering Woods");
    if (type === "character") setNewChar({ name: "Luna Riverfoot", role: "Hero", personality: "Brave but easily distracted by shiny things", appearance: "Wears a cloak made of starlight" });
    if (type === "plot") updatePlot("conflict", "The magic crystal that powers the floating city has gone missing, and it's up to our hero to find it before the city falls into the clouds.");
  };

  const Steps = [
    { title: "Story Basics", icon: BookMarked },
    { title: "Setting", icon: MapPin },
    { title: "Characters", icon: Users },
    { title: "Plot Builder", icon: BookOpen },
    { title: "Chapters", icon: TypeOutline },
    { title: "Creative", icon: ImageIcon },
    { title: "Review", icon: CheckCircle },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-slate-800">Story Basics</h2>
              <button 
                onClick={() => generateIdea("title")}
                className="flex items-center gap-2 text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors"
              >
                <Wand2 size={16} /> Idea Generator
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Story Title</label>
                <input
                  type="text"
                  placeholder="e.g. The Great Space Race"
                  className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-lg font-bold text-slate-800"
                  value={storyData.basics.title}
                  onChange={(e) => updateBasics("title", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Subtitle / Tagline (Optional)</label>
                <input
                  type="text"
                  placeholder="A journey to the stars..."
                  className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-slate-600"
                  value={storyData.basics.subtitle}
                  onChange={(e) => updateBasics("subtitle", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Story Category</label>
                  <select
                    className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-indigo-500 outline-none bg-white text-slate-700 font-medium"
                    value={storyData.basics.category}
                    onChange={(e) => updateBasics("category", e.target.value)}
                  >
                    <option value="">Select a Category</option>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Story Theme</label>
                  <select
                    className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-indigo-500 outline-none bg-white text-slate-700 font-medium"
                    value={storyData.basics.theme}
                    onChange={(e) => updateBasics("theme", e.target.value)}
                  >
                    <option value="">Select a Theme</option>
                    {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Story Setting</h2>
            <div className="space-y-6">
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-emerald-900 mb-1">Story Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Enchanted Forest"
                    className="w-full border-2 border-white bg-white/50 p-3 rounded-xl focus:border-emerald-500 outline-none transition-all text-slate-700 font-medium"
                    value={storyData.setting.location}
                    onChange={(e) => updateSetting("location", e.target.value)}
                  />
                </div>
              </div>
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                  <Clock size={20} />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-amber-900 mb-1">Time Period</label>
                  <input
                    type="text"
                    placeholder="e.g. In the year 3045, or A long time ago..."
                    className="w-full border-2 border-white bg-white/50 p-3 rounded-xl focus:border-amber-500 outline-none transition-all text-slate-700 font-medium"
                    value={storyData.setting.timePeriod}
                    onChange={(e) => updateSetting("timePeriod", e.target.value)}
                  />
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <CloudSun size={20} />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-blue-900 mb-1">Environment / Atmosphere</label>
                  <input
                    type="text"
                    placeholder="e.g. Foggy and mysterious, Sunny and cheerful"
                    className="w-full border-2 border-white bg-white/50 p-3 rounded-xl focus:border-blue-500 outline-none transition-all text-slate-700 font-medium"
                    value={storyData.setting.atmosphere}
                    onChange={(e) => updateSetting("atmosphere", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-slate-800">Character Creator</h2>
              <button 
                onClick={() => generateIdea("character")}
                className="flex items-center gap-2 text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-rose-100 transition-colors"
              >
                <Wand2 size={16} /> Auto Generate
              </button>
            </div>

            {/* Character List */}
            {storyData.characters.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {storyData.characters.map(char => (
                  <div key={char.id} className="border-2 border-slate-100 bg-white p-4 rounded-2xl shadow-sm relative group">
                    <div className="absolute top-2 right-2">
                      <button onClick={() => removeCharacter(char.id)} className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 hover:bg-red-100 hover:text-red-500 flex items-center justify-center transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-black text-lg">
                          {char.name.charAt(0)}
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-800">{char.name}</h4>
                         <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{char.role}</span>
                       </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-1"><strong>Personality:</strong> {char.personality}</p>
                    <p className="text-sm text-slate-600"><strong>Looks like:</strong> {char.appearance}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Add Character Form */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl p-6">
              <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                <Plus size={18} /> Create New Character
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      placeholder="Character Name"
                      className="w-full border border-slate-200 p-2.5 rounded-lg focus:border-indigo-500 outline-none text-sm font-medium"
                      value={newChar.name}
                      onChange={(e) => setNewChar({...newChar, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Role</label>
                    <select
                      className="w-full border border-slate-200 p-2.5 rounded-lg focus:border-indigo-500 outline-none bg-white text-sm font-medium"
                      value={newChar.role}
                      onChange={(e) => setNewChar({...newChar, role: e.target.value})}
                    >
                      <option>Hero</option>
                      <option>Villain</option>
                      <option>Friend</option>
                      <option>Guide / Mentor</option>
                      <option>Pet / Sidekick</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Personality</label>
                  <input
                    type="text"
                    placeholder="e.g. Brave, funny, always hungry..."
                    className="w-full border border-slate-200 p-2.5 rounded-lg focus:border-indigo-500 outline-none text-sm font-medium"
                    value={newChar.personality}
                    onChange={(e) => setNewChar({...newChar, personality: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Appearance</label>
                  <input
                    type="text"
                    placeholder="e.g. Tall, wears round glasses and a green hat..."
                    className="w-full border border-slate-200 p-2.5 rounded-lg focus:border-indigo-500 outline-none text-sm font-medium"
                    value={newChar.appearance}
                    onChange={(e) => setNewChar({...newChar, appearance: e.target.value})}
                  />
                </div>
                <button 
                  onClick={addCharacter}
                  disabled={!newChar.name}
                  className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors mt-2"
                >
                  + Add Character
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-slate-800">Story Plot Builder</h2>
              <button 
                onClick={() => generateIdea("plot")}
                className="flex items-center gap-2 text-violet-600 bg-violet-50 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-violet-100 transition-colors"
              >
                <Wand2 size={16} /> Plot Idea
              </button>
            </div>

            <div className="space-y-5">
              {[
                { field: "beginning", label: "Beginning / Introduction", placeholder: "How does the story start? Introduce the main characters and setting." },
                { field: "conflict", label: "The Problem (Conflict)", placeholder: "What goes wrong? What is the challenge the hero must face?" },
                { field: "adventure", label: "The Adventure (Rising Action)", placeholder: "What happens as they try to solve the problem?" },
                { field: "climax", label: "The Climax", placeholder: "The biggest, most exciting part of the story! How do they finally face the challenge?" },
                { field: "ending", label: "The Ending", placeholder: "How does it all wrap up? What did the characters learn?" }
              ].map(section => (
                <div key={section.field}>
                  <label className="block text-sm font-bold text-slate-700 mb-1">{section.label}</label>
                  <textarea
                    placeholder={section.placeholder}
                    rows="2"
                    className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-indigo-500 outline-none transition-all text-slate-700 font-medium resize-none"
                    value={storyData.plot[section.field]}
                    onChange={(e) => updatePlot(section.field, e.target.value)}
                  ></textarea>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Chapter Creator</h2>
            
            {/* Chapter List */}
            {storyData.chapters.length > 0 && (
              <div className="space-y-3 mb-8">
                {storyData.chapters.map((chap, idx) => (
                  <div key={chap.id} className="border border-slate-200 bg-white p-4 rounded-xl shadow-sm flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-lg">{chap.title}</h4>
                      {chap.description && <p className="text-slate-500 text-sm mt-1">{chap.description}</p>}
                    </div>
                    <button onClick={() => removeChapter(chap.id)} className="w-8 h-8 rounded-full text-slate-400 hover:bg-red-100 hover:text-red-500 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Add Chapter Form */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl p-6">
              <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                <Plus size={18} /> Add New Chapter
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Chapter Title</label>
                  <input
                    type="text"
                    placeholder="e.g. The Discovery"
                    className="w-full border border-slate-200 p-2.5 rounded-lg focus:border-indigo-500 outline-none font-bold text-slate-800"
                    value={newChap.title}
                    onChange={(e) => setNewChap({...newChap, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Short Description</label>
                  <input
                    type="text"
                    placeholder="Briefly describe what happens in this chapter..."
                    className="w-full border border-slate-200 p-2.5 rounded-lg focus:border-indigo-500 outline-none text-sm text-slate-600"
                    value={newChap.description}
                    onChange={(e) => setNewChap({...newChap, description: e.target.value})}
                  />
                </div>
                <button 
                  onClick={addChapter}
                  disabled={!newChap.title}
                  className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors mt-2 text-sm"
                >
                  + Add Chapter
                </button>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Illustrations & Creative</h2>
            <p className="text-slate-600 font-medium mb-8">What kind of illustrations do you want to include in your storybook?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { id: "hasImages", icon: ImageIcon, title: "Insert Images", desc: "Upload your own pictures" },
                 { id: "hasStickers", icon: Smile, title: "Add Stickers", desc: "Fun emojis and graphic stickers" },
                 { id: "hasDrawings", icon: PenTool, title: "Drawing Canvas", desc: "Draw your own art directly" },
               ].map(option => (
                 <div 
                   key={option.id}
                   onClick={() => toggleIllustration(option.id)}
                   className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 ${storyData.illustrations[option.id] ? "border-indigo-500 bg-indigo-50 shadow-md" : "border-slate-200 hover:border-slate-300 bg-white"}`}
                 >
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${storyData.illustrations[option.id] ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                     <option.icon size={24} />
                   </div>
                   <div className="flex-1">
                     <h4 className={`font-bold text-lg ${storyData.illustrations[option.id] ? "text-indigo-900" : "text-slate-800"}`}>{option.title}</h4>
                     <p className="text-sm text-slate-500 font-medium">{option.desc}</p>
                   </div>
                   <div className="mt-1">
                     <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${storyData.illustrations[option.id] ? "bg-indigo-500 border-indigo-500 text-white" : "border-slate-300"}`}>
                       {storyData.illustrations[option.id] && <CheckCircle size={16} />}
                     </div>
                   </div>
                 </div>
               ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-center border-dashed">
                <div className="text-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-amber-500 shadow-sm border border-amber-100">
                     <ImageIcon size={32} />
                   </div>
                   <h4 className="font-bold text-amber-900 mb-1">Illustration Placeholders Ready</h4>
                   <p className="text-sm text-amber-700 max-w-sm">We'll automatically set up picture frames for your story based on these selections!</p>
                </div>
            </div>
           </div>
        );
      case 7:
        return (
           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Review Story Structure</h2>
            
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm">
               <div className="text-center mb-6 pb-6 border-b border-slate-100">
                  <h1 className="text-3xl font-black text-indigo-900 font-serif mb-2">{storyData.basics.title || "Untitled Story"}</h1>
                  <p className="text-lg text-slate-500 italic">{storyData.basics.subtitle}</p>
                  <div className="flex gap-2 justify-center mt-4">
                    {storyData.basics.category && <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">{storyData.basics.category}</span>}
                    {storyData.basics.theme && <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">{storyData.basics.theme}</span>}
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-3 flex items-center gap-2"><MapPin size={14}/> Setting</h3>
                    <p className="text-slate-800 font-medium mb-1"><span className="text-slate-500">Location:</span> {storyData.setting.location || "Not set"}</p>
                    <p className="text-slate-800 font-medium mb-1"><span className="text-slate-500">Time:</span> {storyData.setting.timePeriod || "Not set"}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-3 flex items-center gap-2"><Users size={14}/> Characters ({storyData.characters.length})</h3>
                    <div className="flex flex-wrap gap-2">
                      {storyData.characters.length > 0 ? storyData.characters.map(c => (
                        <span key={c.id} className="bg-slate-100 px-3 py-1 rounded-lg text-sm font-bold text-slate-700 border border-slate-200">
                          {c.name} <span className="text-slate-400 font-normal">({c.role})</span>
                        </span>
                      )) : <span className="text-slate-500 italic text-sm">No characters planned</span>}
                    </div>
                  </div>
               </div>

               <div className="mt-8">
                  <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-3 flex items-center gap-2"><TypeOutline size={14}/> Chapters ({storyData.chapters.length})</h3>
                  {storyData.chapters.length > 0 ? (
                    <div className="flex flex-col gap-2">
                       {storyData.chapters.map((chap, i) => (
                         <div key={chap.id} className="flex gap-3 text-sm">
                           <span className="font-black text-indigo-300 w-4">{i+1}.</span>
                           <span className="font-bold text-slate-700">{chap.title}</span>
                         </div>
                       ))}
                    </div>
                  ) : <span className="text-slate-500 italic text-sm">No specific chapters added</span>}
               </div>
            </div>

            <div className="flex flex-col items-center mt-12 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-3xl text-center text-white shadow-xl shadow-indigo-500/20">
               <Wand2 size={48} className="mb-4 text-indigo-200" />
               <h3 className="text-2xl font-black mb-2">Ready to write?</h3>
               <p className="text-indigo-100 mb-8 max-w-md mx-auto">Your story structure is perfectly mapped. Let's open the premium writing editor and bring it to life!</p>
               <button 
                  onClick={onBack}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-black text-lg shadow-lg hover:scale-105 transition-all w-full md:w-auto"
                >
                 Start Writing Now
               </button>
            </div>
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-['Inter',sans-serif]">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <div>
            <h1 className="text-xl font-black text-slate-800 tracking-tight">Story Creator Studio</h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Turn Your Ideas into Amazing Stories</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm font-bold bg-slate-100 px-3 py-1.5 rounded-full">
            <Save size={14} className="animate-pulse" /> Autosaving...
          </div>
          <button onClick={onBack} className="text-sm font-bold text-slate-600 hover:text-slate-900 px-3 py-2">
            Exit Studio
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left/Center Split */}
        <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full">
          
          {/* Main Form Center */}
          <div className="flex-1 overflow-y-auto px-4 py-8 md:p-8 custom-scrollbar">
            
            {/* Progress Indicator */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-black text-indigo-600 uppercase tracking-widest">Step {currentStep} of 7</span>
                <span className="text-sm font-bold text-slate-500">{Steps[currentStep-1].title}</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden flex">
                {Steps.map((_, index) => (
                  <div 
                    key={index} 
                    className={`h-full transition-all duration-500 ease-out border-r border-white/20 last:border-0 ${
                      index < currentStep ? "bg-indigo-600 flex-1" : "bg-transparent flex-1"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step Content Wrapper */}
            <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[500px] flex flex-col relative">
               
               <div className="flex-1">
                 {renderStepContent()}
               </div>

               {/* Navigation Buttons footer inside card */}
               <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between sticky bottom-0 bg-white z-10">
                 <button
                   onClick={handleBack}
                   disabled={currentStep === 1}
                   className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-600 hover:bg-slate-100'}`}
                 >
                   <ChevronLeft size={18} /> Back
                 </button>
                 
                 {currentStep < 7 && (
                   <button
                     onClick={handleNext}
                     className="flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black shadow-lg shadow-indigo-600/20 transition-transform active:scale-95"
                   >
                     Next Step <ChevronRight size={18} />
                   </button>
                 )}
                 {currentStep === 7 && (
                   <div/> // Hidden here, Start Writing is huge in the center
                 )}
               </div>
            </div>

          </div>

          {/* Right Sidebar: Story Tips */}
          <div className="w-full md:w-80 border-l border-slate-200 bg-white p-6 shrink-0 hidden lg:block overflow-y-auto">
             <div className="sticky top-6">
                <div className="bg-amber-50 rounded-3xl p-6 border-2 border-amber-100/50 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                   
                   <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mb-6 shadow-sm border border-amber-200">
                     <Lightbulb size={24} />
                   </div>
                   
                   <h3 className="text-lg font-black text-amber-900 mb-2">Writing Pad Tip</h3>
                   <div className="min-h-[100px] flex items-center">
                     <p className="text-amber-800 font-medium leading-relaxed animate-in fade-in duration-500" key={activeTip}>
                       "{STORY_TIPS[activeTip]}"
                     </p>
                   </div>

                   <div className="flex gap-1.5 mt-6 justify-center">
                     {STORY_TIPS.map((_, i) => (
                       <button
                         key={i}
                         onClick={() => setActiveTip(i)}
                         className={`w-2 h-2 rounded-full transition-all ${i === activeTip ? "bg-amber-500 w-4" : "bg-amber-200 hover:bg-amber-300"}`}
                       />
                     ))}
                   </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Your Progress</h4>
                  <ul className="space-y-3">
                    {Steps.map((step, idx) => {
                      const isPast = idx + 1 < currentStep;
                      const isCurrent = idx + 1 === currentStep;
                      return (
                         <li key={idx} className={`flex items-center gap-3 font-bold text-sm transition-colors ${isPast ? "text-emerald-500" : isCurrent ? "text-indigo-600" : "text-slate-300"}`}>
                           <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 ${isPast ? "bg-emerald-500 border-emerald-500 text-white" : isCurrent ? "border-indigo-600 bg-white" : "border-slate-200 bg-slate-50"}`}>
                             {isPast ? <CheckCircle size={12} /> : idx + 1}
                           </div>
                           {step.title}
                         </li>
                      )
                    })}
                  </ul>
                </div>
             </div>
          </div>

        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default StoryCreator;
