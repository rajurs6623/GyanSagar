import React, { useState } from 'react';
import {
    Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
    List, ListOrdered, Image, Type, TypeOutline, SpellCheck, Settings, Download,
    Save, Eye, FileText, FilePlus, Users, ImagePlus, UserCircle, PenTool,
    PaintBucket, LayoutTemplate, Brush, Sticker, Smile, History, Undo, Redo,
    ChevronDown, MessageSquare,
    BookOpen
} from 'lucide-react';

const EditorButton = ({ icon: Icon, active, onClick, title }) => (
    <button
        onClick={onClick}
        title={title}
        className={`p-2 rounded-lg transition-colors ${active ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`}
    >
        <Icon className="w-4 h-4" />
    </button>
);

const SidebarButton = ({ icon: Icon, label, color }) => (
    <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
        <div className={`p-2 rounded-lg ${color} bg-white group-hover:bg-slate-50 shadow-sm`}>
            <Icon className="w-5 h-5" />
        </div>
        <span className="font-bold text-slate-700 text-sm">{label}</span>
    </button>
);

const YoungWritersPad = () => {
    return (
        <div className="pt-20 bg-[#f8fafc] min-h-screen font-['Nunito'] flex flex-col h-screen overflow-hidden">

            {/* TOP BAR - MENU OPTIONS */}
            <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between shrink-0">
                <div className="flex flex-col">
                    <input type="text" className="text-xl font-black text-slate-800 outline-none bg-transparent hover:bg-slate-50 px-2 py-1 rounded-lg" defaultValue="Untitled Story" />
                    <div className="flex gap-1 ml-1 mt-1">
                        {['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Export'].map(item => (
                            <button key={item} className="text-[13px] font-bold text-slate-500 hover:bg-slate-100 px-3 py-1 rounded-md transition-colors">
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 flex items-center gap-2 text-sm transition-colors">
                        <Save className="w-4 h-4" /> Save Draft
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 flex items-center gap-2 text-sm shadow-md transition-colors">
                        <Download className="w-4 h-4" /> Publish / Export
                    </button>
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black ml-2 shadow-sm border border-indigo-200">
                        A
                    </div>
                </div>
            </div>

            {/* FORMATTING TOOLBAR */}
            <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-2 shrink-0 flex-wrap overflow-x-auto shadow-sm z-10">
                <div className="flex items-center gap-1 border-r border-slate-200 pr-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-lg text-sm font-bold text-slate-700">
                        Nunito <ChevronDown className="w-3 h-3" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-lg text-sm font-bold text-slate-700">
                        14 <ChevronDown className="w-3 h-3" />
                    </button>
                </div>

                <div className="flex items-center gap-1 border-r border-slate-200 pr-2 pl-2">
                    <EditorButton icon={Bold} title="Bold" />
                    <EditorButton icon={Italic} title="Italic" />
                    <EditorButton icon={Underline} title="Underline" />
                    <div className="flex flex-col h-6 w-6 ml-1 cursor-pointer items-center justify-center hover:bg-slate-100 rounded-md">
                        <Type className="w-4 h-4 text-slate-700" />
                        <div className="w-4 h-1 bg-red-500 rounded-full mt-[2px]" />
                    </div>
                    <div className="flex flex-col h-6 w-6 ml-1 cursor-pointer items-center justify-center hover:bg-slate-100 rounded-md">
                        <PaintBucket className="w-4 h-4 text-slate-700" />
                        <div className="w-4 h-1 bg-yellow-400 rounded-full mt-[2px]" />
                    </div>
                </div>

                <div className="flex items-center gap-1 border-r border-slate-200 pr-2 pl-2">
                    <EditorButton icon={AlignLeft} title="Align Left" active />
                    <EditorButton icon={AlignCenter} title="Align Center" />
                    <EditorButton icon={AlignRight} title="Align Right" />
                    <EditorButton icon={AlignJustify} title="Justify" />
                </div>

                <div className="flex items-center gap-1 border-r border-slate-200 pr-2 pl-2">
                    <EditorButton icon={List} title="Bullet List" />
                    <EditorButton icon={ListOrdered} title="Numbered List" />
                </div>

                <div className="flex items-center gap-1 border-r border-slate-200 pr-2 pl-2">
                    <EditorButton icon={ImagePlus} title="Insert Image" />
                    <EditorButton icon={Brush} title="Draw Shapes" />
                    <EditorButton icon={Smile} title="Add Stickers" />
                    <EditorButton icon={Sticker} title="Add Icons" />
                    <EditorButton icon={TypeOutline} title="Add Illustrations" />
                </div>

                <div className="flex items-center gap-1 pl-2 ml-auto">
                    <EditorButton icon={Undo} title="Undo" />
                    <EditorButton icon={Redo} title="Redo" />
                </div>
            </div>

            {/* MAIN WORKSPACE */}
            <div className="flex-1 flex overflow-hidden">

                {/* LEFT SIDEBAR - STORY TOOLS */}
                <div className="w-[260px] bg-white border-r border-slate-200 flex flex-col overflow-y-auto shrink-0 z-0">
                    <div className="p-4">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Story Architecture</h3>
                        <div className="space-y-1">
                            <SidebarButton icon={FilePlus} label="Create Chapters" color="text-indigo-500" />
                            <SidebarButton icon={Users} label="Add Characters" color="text-rose-500" />
                            <SidebarButton icon={Image} label="Add Scenes" color="text-emerald-500" />
                            <SidebarButton icon={MessageSquare} label="Dialogue Writer" color="text-blue-500" />
                        </div>
                    </div>

                    <div className="px-4 py-2 border-t border-slate-100">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 mt-2">Active Characters</h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="px-3 py-1.5 bg-rose-50 border border-rose-100 text-rose-600 rounded-lg text-xs font-bold shadow-sm">Oliver</div>
                            <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-lg text-xs font-bold shadow-sm">Professor</div>
                            <div className="px-3 py-1.5 border border-dashed border-slate-300 text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-50 cursor-pointer">+ Add</div>
                        </div>
                    </div>

                    <div className="px-4 py-2 mt-2 border-t border-slate-100 flex-1">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 mt-2">Chapters</h3>
                        <div className="space-y-2">
                            <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl cursor-pointer">
                                <div className="text-xs font-bold text-indigo-400 mb-1">CHAPTER 1</div>
                                <div className="text-sm font-black text-indigo-700">The Discovery</div>
                            </div>
                            <div className="p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <div className="text-xs font-bold text-slate-400 mb-1">CHAPTER 2</div>
                                <div className="text-sm font-black text-slate-700">Into the Unknown</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER EDITOR */}
                <div className="flex-1 overflow-y-auto bg-slate-100/50 p-8 flex justify-center custom-scrollbar">
                    <div className="w-[850px] bg-white min-h-[1100px] shadow-sm border border-slate-200 rounded-sm p-[1in] focus:outline-none">
                        <h1 className="text-4xl font-black text-slate-800 mb-4 outline-none" contentEditable>The Discovery</h1>
                        <p className="text-lg text-slate-600 leading-loose outline-none" contentEditable>
                            It was a dark and stormy night when Oliver first discovered the glowing orb in the attic. The dust danced in the pale moonlight as he reached out his trembling hand...
                        </p>

                        <div className="my-8 flex justify-center">
                            <div className="w-[400px] h-[300px] bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center flex-col gap-3 text-slate-400 hover:bg-slate-50 hover:border-indigo-300 transition-colors cursor-pointer group">
                                <ImagePlus className="w-10 h-10 group-hover:text-indigo-500 transition-colors" />
                                <span className="font-bold">Drop Illustration Here</span>
                            </div>
                        </div>

                        <p className="text-lg text-slate-600 leading-loose outline-none" contentEditable>
                            The orb hummed with ancient energy, sending warm vibrations up his arm. Suddenly, a voice echoed in his mind, not heard, but felt.
                        </p>

                        <div className="pl-8 border-l-4 border-indigo-500 my-6">
                            <p className="text-xl font-bold text-indigo-800 italic outline-none" contentEditable>
                                "You have awakened the long slumber, young one. The realms are yours to save or shatter."
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR - BOOK TOOLS & EXPORT */}
                <div className="w-[280px] bg-white border-l border-slate-200 flex flex-col overflow-y-auto shrink-0 z-0">
                    <div className="p-4">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Book Building</h3>
                        <div className="space-y-1">
                            <SidebarButton icon={LayoutTemplate} label="Cover Page Creator" color="text-amber-500" />
                            <SidebarButton icon={List} label="Table of Contents" color="text-slate-500" />
                            <SidebarButton icon={FileText} label="Page Numbers" color="text-slate-500" />
                            <SidebarButton icon={UserCircle} label="Author Bio Section" color="text-violet-500" />
                        </div>
                    </div>

                    <div className="p-4 border-t border-slate-100 mt-2">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Preview & Finish</h3>
                        <button className="w-full flex justify-center items-center gap-2 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors mb-4">
                            <Eye className="w-4 h-4" /> Preview Book
                        </button>

                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Export Options</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 border border-slate-200 rounded-xl flex flex-col justify-center items-center gap-2 hover:border-indigo-500 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all cursor-pointer font-bold text-xs">
                                <FileText className="w-6 h-6" /> PDF
                            </div>
                            <div className="p-3 border border-slate-200 rounded-xl flex flex-col justify-center items-center gap-2 hover:border-indigo-500 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all cursor-pointer font-bold text-xs">
                                <FileText className="w-6 h-6" /> DOCX
                            </div>
                            <div className="p-3 border border-slate-200 rounded-xl flex flex-col justify-center items-center gap-2 hover:border-indigo-500 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all cursor-pointer font-bold text-xs">
                                <BookOpen className="w-6 h-6" /> EPUB
                            </div>
                            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl flex flex-col justify-center items-center gap-2 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-indigo-600 transition-all cursor-pointer font-bold text-xs">
                                <History className="w-6 h-6" /> PUBLISH
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

export default YoungWritersPad;
