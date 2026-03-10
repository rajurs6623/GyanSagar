import React, { useState, useEffect } from "react";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import {
  HiOutlineCollection,
  HiOutlineDuplicate,
  HiOutlineTrash,
  HiOutlinePencilAlt,
  HiOutlineMenu,
  HiOutlinePlus,
  HiOutlineInformationCircle,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";

const ChapterCreator = () => {
  // Mock project data for standalone operation
  const [currentProject] = useState({ id: "p1", title: "My Masterpiece" });
  const updateProject = () => {};

  const [chapters, setChapters] = useState([
    { id: "c1", title: "The Mysterious Map", wordCount: 450 },
    { id: "c2", title: "Into the Shadow Realm", wordCount: 1200 },
    { id: "c3", title: "The Guardian of Light", wordCount: 850 },
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  // Edit State
  const [editingId, setEditingId] = useState(null);
  const [tempTitle, setTempTitle] = useState("");

  const handleAddChapter = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newChap = {
      id: `c${Date.now()}`,
      title: newTitle,
      wordCount: 0,
    };
    setChapters([...chapters, newChap]);
    setNewTitle("");
    setIsAdding(false);
    updateProjectStats([...chapters, newChap]);
  };

  const handleDelete = (id) => {
    const updated = chapters.filter((c) => c.id !== id);
    setChapters(updated);
    updateProjectStats(updated);
  };

  const startEditing = (chapter) => {
    setEditingId(chapter.id);
    setTempTitle(chapter.title);
  };

  const saveEdit = (id) => {
    if (!tempTitle.trim()) return;
    const updated = chapters.map((c) =>
      c.id === id ? { ...c, title: tempTitle } : c,
    );
    setChapters(updated);
    setEditingId(null);
  };

  const updateProjectStats = (chapList) => {
    if (currentProject) {
      updateProject(currentProject.id, { chapters: chapList.length });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-300 p-8 rounded-[3rem]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-[900] text-slate-900 tracking-tight">
              Chapter Creator
            </h2>
            <div className="group relative">
              <HiOutlineInformationCircle className="w-6 h-6 text-purple-600 cursor-help" />
              <div className="absolute right-0 top-8 scale-0 group-hover:scale-100 transition-all origin-top-right bg-indigo-900 text-white text-xs px-3 py-2 rounded-xl w-48 shadow-xl z-50">
                Craft your magical story chapters here! Drag to reorder, click
                to edit.
              </div>
            </div>
          </div>
          <p className="text-indigo-900 font-bold uppercase tracking-widest text-[10px] opacity-80">
            Map out your epic journey
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-500/80 backdrop-blur-xl border border-purple-200/50 rounded-[2.5rem] p-8 text-white shadow-[0_0_40px_rgba(167,139,250,0.3)] relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70 mb-2">
              Total Chapters
            </p>
            <p className="text-5xl font-black">{chapters.length}</p>
          </div>
          <div className="bg-[#f8f5ff]/70 backdrop-blur-2xl border border-indigo-200/50 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(167,139,250,0.15)]">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">
              Total Words
            </p>
            <p className="text-5xl font-black text-slate-900">
              {chapters.reduce((acc, c) => acc + c.wordCount, 0)}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, translateY: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsAdding(true)}
            className="bg-amber-400 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-amber-200/50 flex flex-col items-center justify-center font-black uppercase tracking-[0.2em] text-xs transition-all"
          >
            <HiOutlinePlus className="text-4xl mb-2" />
            New Chapter
          </motion.button>
        </div>

        {/* Add Chapter Form*/}
        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              className="overflow-hidden"
            >
              <form
                onSubmit={handleAddChapter}
                className="bg-purple-100/70 backdrop-blur-2xl rounded-[2.5rem] p-8 border-2 border-indigo-200/50 shadow-2xl flex gap-4"
              >
                <input
                  autoFocus
                  type="text"
                  placeholder="Enchanted chapter title..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="flex-1 px-8 py-5 bg-white/50 border-2 border-transparent focus:border-purple-400 rounded-2xl outline-none font-black text-slate-800 text-lg placeholder:text-slate-400 transition-all"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-purple-200 hover:bg-purple-700 transition-all"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="bg-white/50 text-slate-500 px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/80 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reorderable List */}
        <Reorder.Group
          axis="y"
          values={chapters}
          onReorder={setChapters}
          className="space-y-6"
        >
          {chapters.map((chapter, index) => (
            <Reorder.Item
              key={chapter.id}
              value={chapter}
              whileDrag={{
                scale: 1.03,
                rotate: 1,
                boxShadow: "0_0_40px_rgba(167,139,250,0.4)",
              }}
              className="bg-[#f8f5ff]/90 backdrop-blur-2xl cursor-grab active:cursor-grabbing rounded-3xl border border-indigo-200/50 p-8 flex items-center justify-between group hover:border-purple-400/50 transition-all shadow-[0_0_40px_rgba(167,139,250,0.1)] relative"
            >
              <div className="flex items-center space-x-8 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 rounded-[1.5rem] flex items-center justify-center font-black text-2xl shadow-inner border border-white/50">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  {editingId === chapter.id ? (
                    <div className="flex items-center gap-3 pr-8">
                      <input
                        autoFocus
                        type="text"
                        value={tempTitle}
                        onChange={(e) => setTempTitle(e.target.value)}
                        onBlur={() => saveEdit(chapter.id)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && saveEdit(chapter.id)
                        }
                        className="flex-1 px-4 py-2 bg-white/80 border-2 border-purple-400 rounded-xl outline-none font-black text-slate-800 text-xl"
                      />
                      <button
                        onMouseDown={(e) => {
                          e.preventDefault();
                          saveEdit(chapter.id);
                        }}
                        className="p-2 bg-purple-600 text-white rounded-xl shadow-lg"
                      >
                        <HiOutlineCheckCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDoubleClick={() => startEditing(chapter)}
                      className="cursor-text"
                    >
                      <h3 className="text-2xl font-black text-slate-800 group-hover:text-purple-600 transition-colors tracking-tight truncate">
                        {chapter.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center bg-white/50 px-3 py-1 rounded-full border border-indigo-100/30">
                          <HiOutlineDuplicate className="mr-1.5" />{" "}
                          {chapter.wordCount} Words
                        </span>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center bg-emerald-50/50 px-3 py-1 rounded-full border border-emerald-100/30">
                          <HiOutlineCheckCircle className="mr-1.5" /> Story
                          Magic Active
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all translate-x-0 lg:translate-x-4 lg:group-hover:translate-x-0">
                <button
                  onClick={() => startEditing(chapter)}
                  className={`p-4 rounded-2xl transition-all ${editingId === chapter.id ? "bg-purple-600 text-white shadow-xl" : "text-purple-400 hover:text-purple-600 hover:bg-white/80 bg-white/30 border border-transparent hover:border-purple-200"}`}
                >
                  <HiOutlinePencilAlt className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleDelete(chapter.id)}
                  className="p-4 text-rose-400 hover:text-rose-600 hover:bg-rose-50/50 bg-white/30 border border-transparent hover:border-rose-100 rounded-2xl transition-all"
                >
                  <HiOutlineTrash className="w-6 h-6" />
                </button>
                <div className="p-4 text-slate-300 group-hover:text-purple-400 transition-colors">
                  <HiOutlineMenu className="w-6 h-6" />
                </div>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>

        {chapters.length === 0 && (
          <div className="text-center py-32 bg-white/30 backdrop-blur-sm rounded-[3rem] border-4 border-dashed border-indigo-200/50">
            <HiOutlineCollection className="w-24 h-24 text-indigo-400/30 mx-auto mb-6" />
            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
              Begin Your Quest
            </h3>
            <p className="text-slate-600 font-medium mt-2">
              Every legend starts with a single chapter.
            </p>
          </div>
        )}

        {/* Bottom Tooltip */}
        <div className="bg-slate-900/40 backdrop-blur-3xl rounded-[3rem] p-10 text-white flex items-center space-x-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
          <HiOutlineSparkles className="text-6xl text-amber-300 animate-bounce" />
          <div className="relative z-10">
            <h4 className="font-black uppercase tracking-[0.3em] text-amber-300 text-[10px] mb-3">
              Magical Writing Secret
            </h4>
            <p className="font-bold text-xl leading-relaxed text-indigo-50 max-w-2xl">
              "A chapter's length is like a spell—too short and it leaves them
              wanting, too long and it tires the mind. Aim for 500 to 1,500
              words for perfect pacing."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterCreator;
