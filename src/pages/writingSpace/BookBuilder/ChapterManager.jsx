import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { GripVertical, Trash2, Plus, Edit2, Check, PenTool } from "lucide-react";
import { motion } from "framer-motion";

export default function ChapterManager({ chapters = [], setChapters = () => {}, setActiveTab, setActiveChapterId }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    setChapters(prev => {
      const items = Array.from(prev);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      return items;
    });
  };

  const addChapter = () => {
    setChapters(prev => [...prev, { id: Date.now().toString(), title: `Chapter ${prev.length + 1}` }]);
  };

  const deleteChapter = (id) => {
    setChapters(prev => prev.filter((c) => c.id !== id));
  };

  const handleWrite = (id) => {
    if (setActiveChapterId && setActiveTab) {
      setActiveChapterId(id);
      setActiveTab("editor");
    }
  };

  const startEdit = (chapter) => {
    setEditingId(chapter.id);
    setEditTitle(chapter.title);
  };

  const saveEdit = (id) => {
    setChapters(prev => prev.map((c) => (c.id === id ? { ...c, title: editTitle } : c)));
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col pt-8 pb-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Chapters Manager</h2>
          <p className="text-slate-500 mt-1">Organize your book structure and chapters.</p>
        </div>
        <button
          onClick={addChapter}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
        >
          <Plus className="w-5 h-5" /> Add Chapter
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 overflow-hidden flex flex-col">
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50/50">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="chapters">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {chapters.map((chapter, index) => (
                    <Draggable key={chapter.id} draggableId={chapter.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`bg-white p-4 rounded-xl border flex items-center gap-4 transition-all
                            ${snapshot.isDragging ? "shadow-xl border-indigo-300 scale-[1.02]" : "shadow-sm border-slate-200 hover:border-indigo-200"}`}
                        >
                          <div {...provided.dragHandleProps} className="text-slate-400 hover:text-indigo-500 cursor-grab">
                            <GripVertical className="w-6 h-6" />
                          </div>
                          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold shrink-0">
                            {index + 1}
                          </div>
                          
                          <div className="flex-1">
                            {editingId === chapter.id ? (
                              <input
                                autoFocus
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && saveEdit(chapter.id)}
                                className="w-full text-lg font-semibold text-slate-800 border-b-2 border-indigo-500 focus:outline-none bg-transparent px-1 py-1"
                              />
                            ) : (
                              <h3 className="text-lg font-semibold text-slate-800">{chapter.title}</h3>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button 
                                onClick={() => handleWrite(chapter.id)} 
                                className="px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors font-bold text-sm flex items-center gap-1 shadow-sm mr-2"
                            >
                                <PenTool className="w-4 h-4" /> Write
                            </button>
                            {editingId === chapter.id ? (
                              <button onClick={() => saveEdit(chapter.id)} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                                <Check className="w-5 h-5" />
                              </button>
                            ) : (
                              <button onClick={() => startEdit(chapter)} className="p-2 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                                <Edit2 className="w-5 h-5" />
                              </button>
                            )}
                            <button onClick={() => deleteChapter(chapter.id)} className="p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {chapters.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p>No chapters yet. Click "Add Chapter" to begin.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
