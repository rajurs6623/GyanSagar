import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen, ChevronRight, ChevronLeft, Wand2, Users, MapPin,
  Clock, CloudSun, Plus, Trash2, Image as ImageIcon, PenTool,
  Smile, TypeOutline, CheckCircle, Save, BookMarked, Sparkles, ChevronDown, Lightbulb
} from "lucide-react";

const CATEGORIES = [
  "Adventure", "Fantasy", "Mystery", "Sci-Fi", "Bedtime Story",
  "Moral Story", "Friendship Story", "Nature Story", "School Story", "Patriotic Story"
];

const THEMES = [
  "Courage", "Kindness", "Friendship", "Honesty",
  "Teamwork", "Protecting Nature", "Dreams & Ambition"
];

const STORY_TIPS = [
  "Start with a hook! Make your first sentence so interesting that readers can't stop.",
  "Give your characters a secret or a special talent.",
  "Every good story has a problem that needs solving. Make it tricky!",
  "Use your senses: what does the magic forest smell like? What does the space laser sound like?",
  "Let your characters make mistakes - it makes them feel real.",
];

const AccordionItem = ({ title, icon: Icon, isActive, onToggle, children }) => {
  return (
    <div className="bg-white border border-sky-100/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-4">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-5 transition-colors ${isActive ? 'bg-sky-50' : 'hover:bg-slate-50'}`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-sky-500 text-white shadow-md' : 'bg-sky-100 text-sky-600 group-hover:bg-sky-200'}`}>
            <Icon size={18} />
          </div>
          <span className={`font-black uppercase tracking-[0.1em] text-[13px] ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
            {title}
          </span>
        </div>
        <ChevronDown className={`text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
      </button>
      {isActive && (
        <div className="p-6 border-t border-sky-100/50 bg-slate-50/30 animate-in fade-in slide-in-from-top-4 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const StoryCreator = ({ onBack }) => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState("Basics");
  const [activeTip, setActiveTip] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const previewRef = React.useRef(null);

  // Auto-rotate tips
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTip((prev) => (prev + 1) % STORY_TIPS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const [storyData, setStoryData] = useState({
    basics: { title: "", subtitle: "", category: "", theme: "" },
    setting: { location: "", timePeriod: "", atmosphere: "" },
    characters: [],
    plot: { beginning: "", conflict: "", adventure: "", climax: "", ending: "" },
    chapters: [],
    illustrations: { hasImages: false, hasStickers: false, hasDrawings: false }
  });

  const [newChar, setNewChar] = useState({ name: "", role: "Hero", personality: "", appearance: "" });
  const [newChap, setNewChap] = useState({ title: "", description: "" });

  const checkPagination = () => {
    if (previewRef.current) {
      const height = previewRef.current.scrollHeight;
      const count = Math.max(1, Math.ceil(height / 1056));
      if (count !== pageCount) setPageCount(count);
    }
  };

  React.useEffect(() => {
    checkPagination();
    const timer = setTimeout(checkPagination, 500);
    return () => clearTimeout(timer);
  }, [storyData]);

  const updateBasics = (field, value) => {
    setStoryData(prev => ({ ...prev, basics: { ...prev.basics, [field]: value } }));
  };

  const updateSetting = (field, value) => {
    setStoryData(prev => ({ ...prev, setting: { ...prev.setting, [field]: value } }));
  };

  const addCharacter = () => {
    if (!newChar.name) return;
    setStoryData(prev => ({ ...prev, characters: [...prev.characters, { ...newChar, id: Date.now() }] }));
    setNewChar({ name: "", role: "Hero", personality: "", appearance: "" });
  };

  const removeCharacter = (id) => {
    setStoryData(prev => ({ ...prev, characters: prev.characters.filter(c => c.id !== id) }));
  };

  const updatePlot = (field, value) => {
    setStoryData(prev => ({ ...prev, plot: { ...prev.plot, [field]: value } }));
  };

  const addChapter = () => {
    if (!newChap.title) return;
    setStoryData(prev => ({ ...prev, chapters: [...prev.chapters, { ...newChap, id: Date.now() }] }));
    setNewChap({ title: "", description: "" });
  };

  const removeChapter = (id) => {
    setStoryData(prev => ({ ...prev, chapters: prev.chapters.filter(c => c.id !== id) }));
  };

  const toggleIllustration = (field) => {
    setStoryData(prev => ({
      ...prev, illustrations: { ...prev.illustrations, [field]: !prev.illustrations[field] }
    }));
  };

  const generateIdea = (type) => {
    if (type === "title") updateBasics("title", "The Secret of the Whispering Woods");
    if (type === "character") setNewChar({ name: "Luna Riverfoot", role: "Hero", personality: "Brave but easily distracted", appearance: "Wears a starry cloak" });
    if (type === "plot") updatePlot("conflict", "The magic crystal has gone missing, and they must find it.");
  };

  return (
    <div className="min-h-screen bg-sky-50 font-['Outfit',-apple-system,sans-serif] selection:bg-sky-200 selection:text-sky-900 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="shrink-0 h-[70px] bg-white/80 backdrop-blur-xl border-b border-sky-200 px-6 flex items-center justify-between shadow-sm z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="w-10 h-10 flex items-center justify-center bg-white hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-all shadow-sm border border-slate-200 text-slate-500 hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h1 className="font-black text-slate-800 text-xl tracking-tight leading-none">Story Studio</h1>
            <p className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mt-1">Architecture Mode</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex px-4 py-2 bg-sky-100/50 rounded-xl border border-sky-200/50 text-slate-500 text-xs font-bold items-center gap-3">
             <CloudSun size={14} className="text-sky-500" />
             Cloud Sync Active
          </div>
          <button
            onClick={() => navigate("/writer-pad", { state: { storyData } })}
            className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all text-sm flex items-center gap-2 group border border-emerald-400/50"
          >
            <PenTool size={16} className="group-hover:rotate-12 transition-transform" /> Manifest in Editor
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Accordion Forms */}
        <aside className="w-full md:w-[380px] shrink-0 border-r border-sky-200/60 bg-white/50 backdrop-blur-sm shadow-[4px_0_24px_rgba(14,165,233,0.05)] overflow-y-auto p-6 custom-scrollbar z-10">
          
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg mb-6 relative overflow-hidden group hover:shadow-indigo-200/50 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 -mr-10 -mt-10"></div>
            <div className="relative z-10">
               <div className="flex items-center gap-2 mb-2">
                 <Lightbulb size={16} className="text-yellow-300" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100">Writer's Tip</span>
               </div>
               <p className="text-sm font-medium leading-relaxed min-h-[60px]">{STORY_TIPS[activeTip]}</p>
            </div>
          </div>

          <AccordionItem 
            title="Basics" 
            icon={BookMarked} 
            isActive={activeAccordion === "Basics"} 
            onToggle={() => setActiveAccordion(activeAccordion === "Basics" ? "" : "Basics")}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/50">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-tight">Need a<br/>spark?</span>
                <button onClick={() => generateIdea("title")} className="text-xs font-bold text-white flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-xl transition-colors shadow-sm active:scale-95">
                  <Wand2 size={12} /> Suggest Core
                </button>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">The Grand Title</label>
                <input
                  type="text" value={storyData.basics.title} onChange={(e) => updateBasics("title", e.target.value)}
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-sky-500 focus:ring-4 focus:ring-sky-50 outline-none font-bold text-slate-700 transition-all text-lg"
                  placeholder="e.g. Chronicles of the Floating Isles"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subtitle (The Hook)</label>
                <input
                  type="text" value={storyData.basics.subtitle} onChange={(e) => updateBasics("subtitle", e.target.value)}
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-sky-500 focus:ring-4 focus:ring-sky-50 outline-none font-medium text-slate-600 transition-all bg-slate-50/50"
                  placeholder="A short sentence that captures the soul..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Genre</label>
                  <select
                    value={storyData.basics.category} onChange={(e) => updateBasics("category", e.target.value)}
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-sky-500 focus:ring-4 focus:ring-sky-50 outline-none font-bold text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-1rem)_center] pr-10"
                  >
                    <option value="">Select</option>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Theme</label>
                  <select
                    value={storyData.basics.theme} onChange={(e) => updateBasics("theme", e.target.value)}
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-sky-500 focus:ring-4 focus:ring-sky-50 outline-none font-bold text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-1rem)_center] pr-10"
                  >
                    <option value="">Select</option>
                    {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Setting" 
            icon={MapPin}
            isActive={activeAccordion === "Setting"} 
            onToggle={() => setActiveAccordion(activeAccordion === "Setting" ? "" : "Setting")}
          >
            <div className="space-y-6">
              {[
                { field: 'location', label: 'Where is it set?', place: 'e.g. A library that spans dimensions', icon: MapPin },
                { field: 'timePeriod', label: 'When does it happen?', place: 'e.g. During the Great Eclipse', icon: Clock },
                { field: 'atmosphere', label: 'What\'s the energy?', place: 'e.g. Electric, slightly ominous', icon: CloudSun }
              ].map(item => (
                <div key={item.field} className="space-y-2 group">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <item.icon size={12} className="text-emerald-500" /> {item.label}
                  </label>
                  <input
                    type="text" value={storyData.setting[item.field]} onChange={(e) => updateSetting(item.field, e.target.value)}
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none font-bold text-slate-700 transition-all border-l-4 group-focus-within:border-l-emerald-500 border-l-transparent"
                    placeholder={item.place}
                  />
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Cast" 
            icon={Users}
            isActive={activeAccordion === "Cast"} 
            onToggle={() => setActiveAccordion(activeAccordion === "Cast" ? "" : "Cast")}  
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-rose-50/50 p-4 rounded-xl border border-rose-100/50">
                <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest leading-tight">Need a<br/>hero?</span>
                <button onClick={() => generateIdea("character")} className="text-xs font-bold text-white flex items-center gap-1.5 bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-xl transition-colors shadow-sm active:scale-95">
                  <Wand2 size={12} /> Summon
                </button>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-pink-500"></div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 block">Recruit New Character</label>
                <div className="flex gap-3">
                  <input 
                    placeholder="Name" value={newChar.name} onChange={e => setNewChar({...newChar, name: e.target.value})}
                    className="flex-1 bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm font-bold outline-none focus:border-rose-500 focus:bg-white transition-colors"
                  />
                  <select 
                    value={newChar.role} onChange={e => setNewChar({...newChar, role: e.target.value})}
                    className="w-28 bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm font-bold outline-none focus:border-rose-500 focus:bg-white transition-colors appearance-none text-center"
                  >
                    <option>Hero</option><option>Villain</option><option>Sidekick</option><option>Mentor</option><option>Extra</option>
                  </select>
                </div>
                <input 
                  placeholder="Personality & Vibe..." value={newChar.personality} onChange={e => setNewChar({...newChar, personality: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm font-bold outline-none focus:border-rose-500 focus:bg-white transition-colors"
                />
                <button 
                  onClick={addCharacter} disabled={!newChar.name} 
                  className="w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-black mt-2 disabled:opacity-20 hover:bg-rose-600 transition-colors shadow-sm active:scale-95"
                >
                  Join Cast
                </button>
              </div>

              {storyData.characters.length > 0 && (
                <div className="space-y-3 pt-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block">Active Cast Members</label>
                  {storyData.characters.map(char => (
                    <div key={char.id} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 font-black flex-shrink-0 group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors">
                           {char.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 text-sm leading-none mb-1.5">{char.name} <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 ml-1 uppercase tracking-wider">{char.role}</span></div>
                          <div className="text-[11px] text-slate-500 font-medium truncate w-[200px] leading-tight">{char.personality}</div>
                        </div>
                      </div>
                      <button onClick={() => removeCharacter(char.id)} className="text-rose-300 hover:text-white p-2 hover:bg-rose-500 rounded-xl transition-colors opacity-0 group-hover:opacity-100">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Plot" 
            icon={BookOpen}
            isActive={activeAccordion === "Plot"} 
            onToggle={() => setActiveAccordion(activeAccordion === "Plot" ? "" : "Plot")}  
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-violet-50/50 p-4 rounded-xl border border-violet-100/50">
                <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest leading-tight">Writer's<br/>Block?</span>
                <button onClick={() => generateIdea("plot")} className="text-xs font-bold text-white flex items-center gap-1.5 bg-violet-500 hover:bg-violet-600 px-4 py-2 rounded-xl transition-colors shadow-sm active:scale-95">
                  <Wand2 size={12} /> Inspire Twist
                </button>
              </div>
              {[
                { field: 'beginning', label: 'Genesis (Start)', sub: 'How it begins' },
                { field: 'conflict', label: 'The Turning (Conflict)', sub: 'The main problem' },
                { field: 'adventure', label: 'The Path (Rising Action)', sub: 'The journey' },
                { field: 'climax', label: 'The Apex (Climax)', sub: 'The peak moment' },
                { field: 'ending', label: 'Resolution (Ending)', sub: 'How it ends' }
              ].map((sec, i) => (
                <div key={sec.field} className="space-y-2 relative group pl-8">
                  <div className="absolute left-0 top-6 w-5 h-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-[10px] font-black group-hover:bg-violet-500 group-hover:text-white transition-colors">{i+1}</div>
                  {i < 4 && <div className="absolute left-2 top-11 bottom-[-24px] w-0.5 bg-slate-100"></div>}
                  <div className="pt-5">
                    <label className="text-[11px] font-black text-slate-600 uppercase tracking-widest block leading-none">{sec.label}</label>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{sec.sub}</span>
                    <textarea
                      value={storyData.plot[sec.field]} onChange={(e) => updatePlot(sec.field, e.target.value)}
                      className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-violet-500 focus:ring-4 focus:ring-violet-50 outline-none font-medium text-slate-700 min-h-[100px] resize-none mt-2 transition-all shadow-sm group-hover:shadow-md"
                      placeholder="Let your words flow..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Draft (Chapters)" 
            icon={TypeOutline}
            isActive={activeAccordion === "Draft (Chapters)"} 
            onToggle={() => setActiveAccordion(activeAccordion === "Draft (Chapters)" ? "" : "Draft (Chapters)")}  
          >
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-500"></div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Plus size={14} className="text-blue-500" /> Plot Next Chapter</label>
                <input 
                  placeholder="e.g. Chapter 1: The Discovery" value={newChap.title} onChange={e => setNewChap({...newChap, title: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm font-bold outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
                <input 
                  placeholder="Brief chapter summary..." value={newChap.description} onChange={e => setNewChap({...newChap, description: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm font-bold outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
                <button 
                  onClick={addChapter} disabled={!newChap.title} 
                  className="w-full bg-slate-900 text-white rounded-xl py-4 text-sm font-black mt-2 disabled:opacity-20 hover:bg-blue-600 transition-colors shadow-sm active:scale-95"
                >
                  Solidify Chapter
                </button>
              </div>

              {storyData.chapters.length > 0 && (
                <div className="space-y-3 pt-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block">Chapter Sequence</label>
                  {storyData.chapters.map((chap, i) => (
                    <div key={chap.id} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-black border border-blue-100 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                          {String(i+1).padStart(2,'0')}
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 text-sm mb-1 leading-none">{chap.title}</div>
                          <div className="text-[11px] text-slate-500 font-medium truncate w-[200px] leading-tight">{chap.description}</div>
                        </div>
                      </div>
                      <button onClick={() => removeChapter(chap.id)} className="text-rose-300 hover:text-white p-2 hover:bg-rose-500 rounded-xl transition-colors opacity-0 group-hover:opacity-100">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Visuals" 
            icon={ImageIcon}
            isActive={activeAccordion === "Visuals"} 
            onToggle={() => setActiveAccordion(activeAccordion === "Visuals" ? "" : "Visuals")}  
          >
             <div className="space-y-3">
              {[
                { id: "hasImages", icon: ImageIcon, title: "Art & Photos", desc: "Embed illustrations on your pages", color: "indigo" },
                { id: "hasStickers", icon: Smile, title: "Stickers", desc: "Playful emotes & shapes", color: "amber" },
                { id: "hasDrawings", icon: PenTool, title: "Canvas Pad", desc: "Sketch directly on pages", color: "emerald" }
              ].map((opt) => (
                <div
                  key={opt.id} onClick={() => toggleIllustration(opt.id)}
                  className={`p-5 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${storyData.illustrations[opt.id] ? 'bg-white border-sky-400 shadow-[0_8px_30px_rgb(56,189,248,0.2)]' : 'bg-white border-slate-100 hover:border-sky-200 hover:shadow-md'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${storyData.illustrations[opt.id] ? `bg-${opt.color}-500 text-white shadow-lg` : `bg-slate-50 text-slate-400`}`}>
                      <opt.icon size={20} />
                    </div>
                    <div>
                      <div className={`font-black tracking-tight ${storyData.illustrations[opt.id] ? 'text-slate-900' : 'text-slate-600'}`}>{opt.title}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{opt.desc}</div>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${storyData.illustrations[opt.id] ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-200 bg-transparent'}`}>
                    {storyData.illustrations[opt.id] && <CheckCircle size={14} />}
                  </div>
                </div>
              ))}
             </div>
          </AccordionItem>

        </aside>

        {/* Right Content - Live Preview Document */}
        <main className="flex-1 bg-[#f1f5f9] p-6 md:p-12 overflow-y-auto relative flex justify-center custom-scrollbar">
          
          <div className="w-full max-w-[816px] relative transition-all duration-500 animate-in zoom-in-95 group">
            
            {/* Page Background Column - Identical to Writer's Pad */}
            <div className="absolute inset-0 pointer-events-none flex flex-col z-0 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {Array.from({ length: pageCount }).map((_, i) => (
                <div
                  key={i}
                  className="w-full min-w-0 h-[1056px] shrink-0 relative transition-all duration-500 bg-white border-b border-dashed border-slate-200"
                  style={{
                    borderTopLeftRadius: i === 0 ? "1.5rem" : "0",
                    borderTopRightRadius: i === 0 ? "1.5rem" : "0",
                    borderBottomLeftRadius: i === pageCount - 1 ? "1.5rem" : "0",
                    borderBottomRightRadius: i === pageCount - 1 ? "1.5rem" : "0",
                  }}
                >
                  <div className="absolute bottom-6 right-8 font-bold text-[10px] font-mono opacity-40 text-slate-500 uppercase tracking-widest">
                    — PAGE {i + 1} —
                  </div>
                </div>
              ))}
            </div>

            {/* Paper Decorations */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-200/40 via-slate-100/20 to-transparent border-r border-slate-200/30 opacity-60 z-10 pointer-events-none"></div>
            <div className="absolute left-10 top-0 bottom-0 w-px bg-rose-200/50 opacity-60 z-10 pointer-events-none"></div>

            {/* Content Overlay */}
            <div 
              ref={previewRef}
              className="relative z-20 p-16 md:p-20 pl-24 space-y-20 min-h-screen"
            >
              
              {/* Cover Page Generation (Live) */}
              <div className="text-center space-y-10 pb-24 border-b-2 border-slate-100/80 border-dashed relative">
                {/* Premium Book Badge */}
                {(storyData.basics.category || storyData.basics.theme) && (
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-20">
                     <div className="relative">
                        <div className="absolute inset-0 bg-slate-900 blur-xl opacity-20 scale-110"></div>
                        <div className="relative inline-flex items-center justify-center bg-slate-900 px-8 py-3 pb-4 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-xl" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}>
                          {storyData.basics.category || "Masterpiece"} {storyData.basics.theme ? `• ${storyData.basics.theme}` : ""}
                        </div>
                     </div>
                  </div>
                )}
                
                <div className="space-y-4 pt-12">
                   <h1 className="text-6xl md:text-7xl font-black text-slate-800 tracking-tighter leading-[1] drop-shadow-sm">
                     {storyData.basics.title || <span className="opacity-10 text-slate-300">Untitled Story</span>}
                   </h1>
                   <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full opacity-20 mt-6"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-medium text-slate-400 italic px-12 leading-relaxed">
                  {storyData.basics.subtitle || <span className="opacity-20 italic">"The silent echo of a thousand dreams..."</span>}
                </h2>
              </div>

              {/* Setting Display */}
              {(storyData.setting.location || storyData.setting.timePeriod || storyData.setting.atmosphere) && (
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                     <span className="text-[11px] font-black text-slate-800 uppercase tracking-[0.4em] whitespace-nowrap">The Setting</span>
                     <span className="flex-1 h-px bg-slate-100"></span>
                  </div>
                  <div className="text-2xl text-slate-600 leading-[1.8] font-medium p-10 rounded-[2.5rem] border border-slate-100/50 bg-slate-50/30 text-center italic shadow-inner">
                    Our tale begins in <strong className="text-slate-900 border-b-4 border-sky-200/60 pb-1">{storyData.setting.location || "a place beyond maps"}</strong>, 
                    set during <strong className="text-slate-900 border-b-4 border-amber-200/60 pb-1">{storyData.setting.timePeriod || "an era of wonder"}</strong>. 
                    The air carries an unmistakably <strong className="text-slate-900 border-b-4 border-purple-200/60 pb-1">{storyData.setting.atmosphere || "vibrant"}</strong> energy.
                  </div>
                </div>
              )}

              {/* Cast Display */}
              {storyData.characters.length > 0 && (
                <div className="space-y-10 pt-10">
                   <div className="flex items-center gap-6">
                     <span className="text-[11px] font-black text-slate-800 uppercase tracking-[0.4em] whitespace-nowrap">Dramatis Personae</span>
                     <span className="flex-1 h-px bg-slate-100"></span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {storyData.characters.map((char) => (
                      <div key={char.id} className="flex flex-col gap-4 p-8 border border-slate-100 rounded-[2rem] bg-white hover:border-sky-200 transition-all duration-300 hover:shadow-xl hover:shadow-sky-100/30 group">
                        <div className="flex items-center gap-5">
                          <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-slate-800 to-slate-900 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            {char.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-2xl text-slate-800 tracking-tight leading-none mb-2">{char.name}</h4>
                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-widest">{char.role}</span>
                          </div>
                        </div>
                        {char.personality && (
                          <div className="mt-2 bg-slate-50/50 p-5 rounded-2xl border border-slate-100 text-[15px] text-slate-600 leading-relaxed min-h-[70px] flex items-center italic">
                            "{char.personality}"
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Plot Display */}
              {(storyData.plot.beginning || storyData.plot.conflict) && (
                <div className="space-y-10 pt-10">
                  <div className="flex items-center gap-6">
                     <span className="text-[11px] font-black text-slate-800 uppercase tracking-[0.4em] whitespace-nowrap">The Narrative Path</span>
                     <span className="flex-1 h-px bg-slate-100"></span>
                  </div>
                  <div className="prose prose-2xl prose-slate max-w-none text-slate-700 leading-[2] font-serif">
                    {storyData.plot.beginning && (
                      <p className="first-letter:text-[6rem] first-letter:font-black first-letter:-mt-5 first-letter:float-left first-letter:mr-6 first-letter:text-slate-900 first-letter:leading-[0.8] text-slate-800 font-medium text-xl">
                        {storyData.plot.beginning}
                      </p>
                    )}
                    {storyData.plot.conflict && <p className="text-xl">{storyData.plot.conflict}</p>}
                    {storyData.plot.adventure && <p className="text-xl">{storyData.plot.adventure}</p>}
                    {storyData.plot.climax && <p className="text-xl text-slate-900 font-bold">{storyData.plot.climax}</p>}
                    {storyData.plot.ending && <p className="text-xl italic opacity-80">{storyData.plot.ending}</p>}
                  </div>
                </div>
              )}

              {/* Chapters Display */}
              {storyData.chapters.length > 0 && (
                <div className="space-y-12 pt-12 px-10 bg-slate-50/40 rounded-[3rem] p-16 border border-slate-100 shadow-inner">
                   <div className="flex items-center justify-center gap-6 text-center mb-12">
                     <span className="w-12 h-px bg-slate-200"></span>
                     <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]">Table of Contents</span>
                     <span className="w-12 h-px bg-slate-200"></span>
                  </div>
                  <div className="space-y-6 max-w-xl mx-auto">
                    {storyData.chapters.map((chap, i) => (
                      <div key={chap.id} className="flex gap-6 group cursor-default">
                        <div className="text-2xl font-black text-slate-200 pt-1 w-12 text-right group-hover:text-sky-500 transition-colors">
                          {String(i+1).padStart(2,'0')}
                        </div>
                        <div className="flex-1 pb-6 border-b border-slate-200/50 border-dashed group-last:border-none">
                          <h3 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-sky-600 transition-colors mb-3">{chap.title}</h3>
                          {chap.description && <p className="text-base text-slate-500 leading-relaxed font-medium">{chap.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-20"></div> {/* Bottom spacer */}
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap');
        
        .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px;}
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; border: 2px solid transparent; background-clip: padding-box; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #94a3b8; border: 2px solid transparent; background-clip: padding-box; }
        
        .animate-in { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
};

export default StoryCreator;
