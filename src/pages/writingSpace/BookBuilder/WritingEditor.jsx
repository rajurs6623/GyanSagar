import React, { useState, useEffect, useRef } from "react";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  Quote,
  Highlighter,
  Image as ImageIcon,
  Minus,
  Maximize2,
  Save
} from "lucide-react";
import { motion } from "framer-motion";

export default function WritingEditor({ chapters = [], setChapters = () => {}, activeChapterId }) {
  const activeChapter = chapters.find(c => c.id === activeChapterId) || (chapters.length > 0 ? chapters[0] : null);
  const [content, setContent] = useState(activeChapter ? activeChapter.content : "");
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  
  const editorRef = useRef(null);
  
  const dailyGoal = 500;
  const progress = Math.min((wordCount / dailyGoal) * 100, 100);

  // Load content when active chapter changes
  useEffect(() => {
     if (activeChapter && editorRef.current) {
         setContent(activeChapter.content || "");
         editorRef.current.innerHTML = activeChapter.content || "";
     }
  }, [activeChapterId]);

  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    setWordCount(words);

    // Auto save simulator
    const timeout = setTimeout(() => {
      if (content) {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 800);
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, [content]);

  // Handle Rich Text Formatting Commands
  const handleFormat = (command, value = null) => {
    document.execCommand("styleWithCSS", false, true); // Required for some browsers to use CSS instead of HTML tags
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
      const currentContent = editorRef.current.innerHTML || "";
      setContent(currentContent);
      setChapters(prev => prev.map(c => c.id === activeChapterId ? { ...c, content: currentContent } : c));
    }
  };

  const handleInput = (e) => {
    const currentContent = e.currentTarget.innerHTML || "";
    setContent(currentContent);
    setChapters(prev => prev.map(c => c.id === activeChapterId ? { ...c, content: currentContent } : c));
  };

  const toolbarTools = [
    { id: "bold", icon: Bold, title: "Bold", action: () => handleFormat("bold") },
    { id: "italic", icon: Italic, title: "Italic", action: () => handleFormat("italic") },
    { id: "h1", icon: Heading1, title: "Heading 1", action: () => handleFormat("formatBlock", "H1") },
    { id: "h2", icon: Heading2, title: "Heading 2", action: () => handleFormat("formatBlock", "H2") },
    { id: "list", icon: List, title: "Bullet List", action: () => handleFormat("insertUnorderedList") },
    { id: "quote", icon: Quote, title: "Blockquote", action: () => handleFormat("formatBlock", "BLOCKQUOTE") },
    { id: "highlight", icon: Highlighter, title: "Highlight text", action: () => handleFormat("hiliteColor", "#fef08a") },
    { id: "image", icon: ImageIcon, title: "Insert Image", action: () => {
        const url = prompt("Enter an image URL (e.g., https://images.unsplash.com/...)");
        if (url) {
           handleFormat("insertImage", url);
        }
    }},
    { id: "divider", icon: Minus, title: "Add Divider", action: () => handleFormat("insertHorizontalRule") },
  ];

  return (
    <div className={`h-full flex flex-col transition-all duration-500 bg-slate-50 relative ${isFocusMode ? "fixed inset-0 z-50 bg-white" : ""}`}>
      {/* Editor Styles Container */}
      <style>{`
        .prose-editor h1 { font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem; color: #1e293b; line-height: 1.2; }
        .prose-editor h2 { font-size: 1.75rem; font-weight: 700; margin-bottom: 0.75rem; color: #334155; line-height: 1.3; }
        .prose-editor ul { list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0; }
        .prose-editor ul li { margin-bottom: 0.5rem; }
        .prose-editor blockquote { border-left: 4px solid #cbd5e1; padding-left: 1.25rem; color: #64748b; font-style: italic; margin: 1.5rem 0; }
        .prose-editor hr { border: 0; border-top: 2px solid #e2e8f0; margin: 2rem 0; clear: both; }
        .prose-editor img { max-width: 100%; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); margin: 1.5rem auto; display: block; }
        .prose-editor:focus { outline: none; }
        .prose-editor p { margin-bottom: 1rem; }
      `}</style>

      {/* Top Bar */}
      <div className={`flex items-center justify-between px-4 md:px-8 py-4 border-b border-slate-200 bg-white ${isFocusMode ? "opacity-0 hover:opacity-100 transition-opacity absolute top-0 w-full shadow-md backdrop-blur-md bg-white/90 z-20" : ""}`}>
        <div className="flex gap-4 items-center overflow-x-auto no-scrollbar">
          <div className="flex bg-slate-100 p-1.5 rounded-xl shrink-0 gap-1">
            {toolbarTools.map((tool) => (
              <button 
                key={tool.id} 
                onClick={tool.action}
                title={tool.title}
                className="p-2.5 text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-md hover:scale-105 rounded-lg transition-all"
              >
                <tool.icon className="w-5 h-5 pointer-events-none" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center shrink-0 ml-4">
          <div className="items-center gap-2 text-sm text-slate-500 font-medium hidden sm:flex">
            {isSaving ? (
              <span className="text-amber-500 flex items-center gap-1"><Save className="w-4 h-4 animate-pulse" /> Saving...</span>
            ) : (
              <span className="text-green-500 flex items-center gap-1"><Save className="w-4 h-4" /> Saved</span>
            )}
          </div>
          <div className="h-6 w-px bg-slate-200 hidden md:block" />
          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full transition-colors whitespace-nowrap ${
              isFocusMode ? "bg-indigo-600 text-white shadow-lg" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Maximize2 className="w-4 h-4" /> <span className="hidden sm:inline">{isFocusMode ? "Exit Focus" : "Focus Mode"}</span>
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className={`flex-1 overflow-y-auto px-6 md:px-12 lg:px-24 py-16 flex justify-center pb-32 ${isFocusMode ? "pt-24" : ""}`}>
        <div className="relative w-full max-w-3xl">
          {(!content || content.length === 0) && (
            <div className="absolute top-0 left-0 text-slate-300 font-serif text-xl md:text-2xl pointer-events-none tracking-wide text-left pt-1 opacity-70">
              Start writing your masterpiece here...
            </div>
          )}
          <div
            ref={editorRef}
            className="prose-editor w-full text-xl md:text-2xl text-slate-800 leading-relaxed font-serif min-h-[60vh] pb-24"
            contentEditable={true}
            onInput={handleInput}
            suppressContentEditableWarning={true}
          />
        </div>
      </div>

      {/* Bottom Bar: Word Counter & Goal */}
      <div className={`border-t border-slate-200 bg-white p-4 flex items-center justify-between px-4 md:px-8 z-10 ${isFocusMode ? "hidden" : ""}`}>
        <div className="text-sm font-medium text-slate-500 whitespace-nowrap">
          <span className="text-indigo-600 font-bold text-base">{wordCount}</span> / {dailyGoal} words today
        </div>
        <div className="flex-1 max-w-xs mx-4 hidden sm:block">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
          {activeChapter ? activeChapter.title : "Chapter 1"}
        </div>
      </div>
    </div>
  );
}
