import React, { useState } from "react";
import { Users, MapPin, Clock, FileText, Plus, Trash2, Edit2, Save, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryElementsPanel() {
  const [activeElement, setActiveElement] = useState("characters");

  // Initial dummy data to show functionality
  const [data, setData] = useState({
    characters: [
      { id: "c1", name: "Elara", subtitle: "Protagonist", details: "Age: 12. Brave, loves drawing maps and exploring the woods." },
      { id: "c2", name: "Finn", subtitle: "Best Friend", details: "Age: 13. Loyal friend, a bit clumsy, but very resourceful." },
    ],
    locations: [
      { id: "l1", name: "Oakhaven Village", subtitle: "Starting Location", details: "A quiet village surrounded by ancient woods where everyone knows each other." },
      { id: "l2", name: "Crystal Caves", subtitle: "Mysterious Place", details: "Hidden caves that glow in the dark with strange purple crystals." },
    ],
    timeline: [
      { id: "t1", name: "The Discovery", subtitle: "Day 1", details: "Elara finds the glowing map in her grandfather's attic." },
      { id: "t2", name: "The Departure", subtitle: "Day 3", details: "Elara and Finn sneak out of the village at night to follow the map." },
    ],
    notes: [
      { id: "n1", name: "Magic System Rules", subtitle: "Important", details: "Magic is drawn from glowing crystals. Using too much magic makes the user exhausted." },
    ]
  });

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", subtitle: "", details: "" });

  const tabs = [
    { id: "characters", label: "Characters", icon: Users },
    { id: "locations", label: "Locations", icon: MapPin },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "notes", label: "Plot Notes", icon: FileText },
  ];

  const currentList = data[activeElement];
  const ActiveIcon = tabs.find(t => t.id === activeElement)?.icon || FileText;

  const handleAddNew = () => {
    const activeLabel = tabs.find((t) => t.id === activeElement)?.label;
    const singularName = activeLabel.endsWith("s") ? activeLabel.slice(0, -1) : activeLabel;
    
    const newItem = {
      id: Date.now().toString(),
      name: `New ${singularName}`,
      subtitle: "",
      details: "",
    };
    
    setData(prev => ({
      ...prev,
      [activeElement]: [newItem, ...prev[activeElement]]
    }));
    
    startEditing(newItem);
  };

  const startEditing = (item) => {
    setEditingId(item.id);
    setEditForm({ name: item.name, subtitle: item.subtitle || "", details: item.details || "" });
  };

  const cancelEditing = (id) => {
    // If it was a newly created empty item and we cancel without putting real data, let's just revert it.
    // To be safe, we just close edit mode.
    setEditingId(null);
  };

  const saveEditing = (id) => {
    setData(prev => ({
      ...prev,
      [activeElement]: prev[activeElement].map(item => 
        item.id === id 
          ? { ...item, name: editForm.name || "Unnamed", subtitle: editForm.subtitle, details: editForm.details } 
          : item
      )
    }));
    setEditingId(null);
  };

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      setData(prev => ({
        ...prev,
        [activeElement]: prev[activeElement].filter(item => item.id !== id)
      }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-full flex flex-col pt-8 pb-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Story Elements</h2>
          <p className="text-slate-500 mt-1">Keep track of your universe.</p>
        </div>
        <button 
          onClick={handleAddNew}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95"
        >
          <Plus className="w-5 h-5" /> Add New
        </button>
      </div>

      <div className="flex gap-2 mb-6 border-b border-slate-200 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveElement(tab.id);
                setEditingId(null); // Close any active edits when switching tabs
              }}
              className={`px-6 py-3 font-medium flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                activeElement === tab.id
                  ? "border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-xl"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-t-xl"
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeElement === tab.id ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-500"}`}>
                 {data[tab.id].length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-50/50 rounded-3xl border border-slate-100 flex-1 p-6 md:p-8 overflow-y-auto">
        <AnimatePresence>
          {currentList.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex h-full items-center justify-center text-slate-400"
            >
              <div className="text-center">
                <ActiveIcon className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                <p className="font-medium text-lg text-slate-500 mb-2">No items here yet.</p>
                <button onClick={handleAddNew} className="text-indigo-600 hover:text-indigo-700 font-bold underline underline-offset-4">
                  Add your first one
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentList.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id} 
                  className={`border rounded-2xl p-6 transition-all bg-white
                    ${editingId === item.id ? "ring-2 ring-indigo-500 shadow-xl border-transparent" : "border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200"}
                  `}
                >
                  {editingId === item.id ? (
                    /* EDIT MODE */
                    <div className="space-y-4">
                      <div>
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 block">Name</label>
                         <input 
                           autoFocus
                           className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-bold text-slate-800"
                           value={editForm.name}
                           onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                           placeholder="Name..."
                         />
                      </div>
                      <div>
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 block">Subtitle / Role</label>
                         <input 
                           className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-slate-600"
                           value={editForm.subtitle}
                           onChange={(e) => setEditForm({...editForm, subtitle: e.target.value})}
                           placeholder="Optional subtitle..."
                         />
                      </div>
                      <div>
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 block">Description</label>
                         <textarea 
                           rows="3"
                           className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-slate-700 resize-none"
                           value={editForm.details}
                           onChange={(e) => setEditForm({...editForm, details: e.target.value})}
                           placeholder="Details about this element..."
                         />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button onClick={() => saveEditing(item.id)} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                           <Save className="w-4 h-4" /> Save
                        </button>
                        <button onClick={() => cancelEditing(item.id)} className="px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors">
                           <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* VIEW MODE */
                    <div className="h-full flex flex-col relative group">
                      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                         <button onClick={() => startEditing(item)} className="p-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg transition-colors">
                           <Edit2 className="w-4 h-4" />
                         </button>
                         <button onClick={() => deleteItem(item.id)} className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors">
                           <Trash2 className="w-4 h-4" />
                         </button>
                      </div>

                      {activeElement === "characters" && (
                        <div className="w-16 h-16 rounded-full bg-indigo-100 mb-4 border-2 border-white shadow-sm flex items-center justify-center text-indigo-400 font-bold text-xl uppercase shrink-0">
                          {item.name.charAt(0)}
                        </div>
                      )}
                      
                      {activeElement !== "characters" && (
                        <div className="w-10 h-10 rounded-xl bg-slate-100 mb-4 flex items-center justify-center text-slate-400 shrink-0">
                          <ActiveIcon className="w-5 h-5" />
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-slate-800 leading-tight pr-16">{item.name}</h3>
                      {item.subtitle && (
                        <p className="text-sm font-semibold text-indigo-500 mt-1 mb-3">{item.subtitle}</p>
                      )}
                      <p className="text-sm text-slate-600 mt-2 whitespace-pre-wrap flex-1">
                        {item.details || <span className="text-slate-400 italic">No details added.</span>}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
