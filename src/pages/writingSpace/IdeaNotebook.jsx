import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Search,
  Plus,
  Star,
  Trash2,
  Edit3,
  Book,
  MessageSquare,
  PenTool,
  Bookmark,
  ChevronRight,
  Lightbulb,
  Tags,
} from "lucide-react";

export default function IdeaNotebook() {
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Story Idea");
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["Story Idea", "Character", "Plot", "Dialogue"];

  // AI Mock Feature States
  const [isGenerating, setIsGenerating] = useState(false);

  // Load ideas from local storage
  useEffect(() => {
    const savedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    setIdeas(savedIdeas);
  }, []);

  // Save ideas to local storage
  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const handleSaveIdea = () => {
    if (!title || !description) return;

    if (editingId) {
      setIdeas(
        ideas.map((idea) =>
          idea.id === editingId
            ? { ...idea, title, description, category }
            : idea,
        ),
      );
      setEditingId(null);
    } else {
      const newIdea = {
        id: Date.now(),
        title,
        description,
        category,
        isFavorite: false,
        tags: ["fantasy", "adventure"], // default tags for demo
      };
      setIdeas([newIdea, ...ideas]);
    }

    setTitle("");
    setDescription("");
    setCategory("Story Idea");
  };

  const handleEdit = (idea) => {
    setTitle(idea.title);
    setDescription(idea.description);
    setCategory(idea.category);
    setEditingId(idea.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const toggleFavorite = (id) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id ? { ...idea, isFavorite: !idea.isFavorite } : idea,
      ),
    );
  };

  const generateAIIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setTitle("The Clockwork Dragon");
      setDescription(
        "A young inventor in a steampunk city accidentally activates an ancient mechanical dragon. Now they must ride it to the center of the earth to save their home from collapsing.",
      );
      setCategory("Story Idea");
      setIsGenerating(false);
    }, 1500);
  };

  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterCategory === "All" ||
      idea.category === filterCategory ||
      (filterCategory === "Favorites" && idea.isFavorite);
    return matchesSearch && matchesFilter;
  });

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case "Character":
        return <Users size={16} />;
      case "Plot":
        return <Book size={16} />;
      case "Dialogue":
        return <MessageSquare size={16} />;
      default:
        return <Sparkles size={16} />;
    }
  };

  const getCategoryStyles = (cat) => {
    switch (cat) {
      case "Character":
        return "bg-rose-50 text-rose-500 border-rose-100";
      case "Plot":
        return "bg-blue-50 text-blue-500 border-blue-100";
      case "Dialogue":
        return "bg-amber-50 text-amber-500 border-amber-100";
      default:
        return "bg-indigo-50 text-indigo-500 border-indigo-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 pt-28 pb-20 px-4 md:px-8 font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Writer's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-800">
                Idea Notebook
              </span>
            </h1>
            <p className="text-slate-800 font-bold text-lg md:text-xl drop-shadow-sm">
              Don't let a single creative spark fade away.
            </p>
          </div>

          <button
            onClick={generateAIIdea}
            disabled={isGenerating}
            className="group relative flex items-center gap-3 bg-indigo-950 text-purple-100 font-bold py-4 px-8 rounded-2xl hover:bg-indigo-900 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:transform-none border border-indigo-500/30"
          >
            <div
              className={`transition-all duration-700 ${isGenerating ? "animate-spin" : "group-hover:rotate-12"}`}
            ></div>
            {isGenerating ? "Consulting AI Muse..." : "AI Idea Generator"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column - Input Form */}
          <div className="lg:col-span-4 lg:sticky top-28 h-fit">
            <div className="bg-[#f8f5ff]/90 backdrop-blur-2xl p-8 rounded-[2rem] shadow-[0_0_40px_rgba(167,139,250,0.3)] border border-indigo-200/50">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    {editingId ? (
                      <Edit3 size={20} />
                    ) : (
                      <Plus size={20} strokeWidth={3} />
                    )}
                  </div>
                  {editingId ? "Refine Idea" : "Draft Idea"}
                </h2>
                {editingId && (
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setTitle("");
                      setDescription("");
                    }}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    What's the spark?
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a captivating title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-4 bg-white/60 border border-indigo-100 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-400 focus:bg-white outline-none transition-all font-bold text-slate-800 placeholder-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Classification
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-bold transition-all ${category === cat ? "bg-purple-600 border-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]" : "bg-white/50 border-indigo-100 text-slate-600 hover:border-purple-300 hover:text-purple-600"}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Unfold the details
                  </label>
                  <textarea
                    placeholder="Describe your vision here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-48 p-4 bg-white/60 border border-indigo-100 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-400 focus:bg-white outline-none transition-all font-medium text-slate-800 placeholder-slate-400 resize-none custom-scrollbar leading-relaxed"
                  />
                </div>

                <button
                  onClick={handleSaveIdea}
                  disabled={!title || !description}
                  className="w-full group bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black px-6 py-5 rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center justify-center gap-3 overflow-hidden"
                >
                  <Bookmark
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>
                    {editingId ? "Update Manuscript" : "Seal this Idea"}
                  </span>
                  <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Idea Library */}
          <div className="lg:col-span-8 space-y-8">
            {/* Search and Filters Bar */}
            <div className="bg-[#f8f5ff]/90 backdrop-blur-2xl p-3 rounded-[2rem] shadow-[0_0_40px_rgba(167,139,250,0.3)] border border-indigo-200/50 flex flex-col md:flex-row gap-3">
              <div className="relative flex-1 group">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-purple-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Scour your archive..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-3.5 bg-white/60 border border-indigo-100/50 rounded-2xl focus:border-purple-300 focus:bg-white outline-none font-bold text-slate-800 transition-all placeholder-slate-400"
                />
              </div>
              <div className="flex gap-2 px-2 overflow-x-auto custom-scrollbar pb-1 md:pb-0 h-auto items-center">
                {["All", "Favorites", ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${filterCategory === cat ? "bg-indigo-950 shadow-[0_0_15px_rgba(99,102,241,0.3)] text-purple-100" : "bg-white/50 text-slate-600 hover:text-purple-600 hover:bg-purple-50/50"}`}
                  >
                    {cat === "Favorites" ? (
                      <span className="flex items-center gap-1.5">
                        <Star
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        Favorites
                      </span>
                    ) : (
                      cat
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Idea Grid */}
            {filteredIdeas.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-8">
                {filteredIdeas.map((idea) => (
                  <div
                    key={idea.id}
                    className="group bg-[#f8f5ff]/90 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_0_20px_rgba(167,139,250,0.1)] border border-indigo-200/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                  >
                    {/* Hover Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-[2] duration-1000 blur-xl"></div>

                    {/* Metadata Header */}
                    <div className="flex justify-between items-start mb-6 z-10">
                      <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.1em] ${getCategoryStyles(idea.category)}`}
                      >
                        {getCategoryIcon(idea.category)}
                        {idea.category}
                      </div>
                      <button
                        onClick={() => toggleFavorite(idea.id)}
                        className={`transition-all duration-300 hover:scale-125 ${idea.isFavorite ? "text-yellow-400" : "text-slate-200 hover:text-yellow-400"}`}
                      >
                        <Star
                          size={24}
                          className={idea.isFavorite ? "fill-yellow-400" : ""}
                        />
                      </button>
                    </div>

                    <div className="mb-4 z-10">
                      <h2 className="text-2xl font-black text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">
                        {idea.title}
                      </h2>
                    </div>

                    <p className="text-slate-500 leading-relaxed font-medium text-sm mb-8 flex-1 line-clamp-4 group-hover:line-clamp-none transition-all duration-500 whitespace-pre-line z-10">
                      {idea.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50 z-10">
                      <div className="flex gap-1.5 overflow-hidden">
                        {(idea.tags || []).map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/50 border border-indigo-100/50 text-slate-500 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(idea)}
                          className="w-10 h-10 bg-white/60 hover:bg-indigo-900 text-slate-500 hover:text-white rounded-xl flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                          title="Edit"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(idea.id)}
                          className="w-10 h-10 bg-white/60 hover:bg-rose-500 text-slate-500 hover:text-white rounded-xl flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#f8f5ff]/50 backdrop-blur-md rounded-[3rem] p-20 text-center border-2 border-indigo-200/50 border-dashed shadow-[0_0_20px_rgba(167,139,250,0.1)]">
                <div className="w-24 h-24 bg-white/80 rounded-3xl shadow-[0_0_20px_rgba(167,139,250,0.2)] flex items-center justify-center mx-auto mb-6 text-indigo-300 transform -rotate-12">
                  <Book size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">
                  A blank page is full of possibilities
                </h3>
                <p className="text-slate-500 max-w-sm mx-auto font-medium leading-relaxed">
                  {searchTerm || filterCategory !== "All"
                    ? "Searching for ghosts? We couldn't find any ideas matching those filters."
                    : "Your archive is currently empty. Summon a new idea or use the AI Generator to wake the Muse!"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
