import React, { useState, useRef } from "react";
import { UploadCloud, Image as ImageIcon, Sparkles, Layers, Type, Trash2, X } from "lucide-react";
import { motion } from "framer-motion";

export default function IllustrationBoard() {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showStickers, setShowStickers] = useState(false);

  const fileInputRef = useRef(null);
  const boardRef = useRef(null);

  const predefinedAssets = [
    "https://i.pinimg.com/1200x/fd/81/11/fd81113c84008c62ba0075652ad25923.jpg",
    "https://i.pinimg.com/736x/45/e0/0e/45e00e5a30bf85f35cad56f8e8c557e2.jpg",
    "https://i.pinimg.com/736x/b9/a4/7c/b9a47c22099528451d972e4fec076bae.jpg",
    "https://i.pinimg.com/736x/a2/f1/cb/a2f1cb8f758b68b5324846b982dd1a07.jpg",
    "https://i.pinimg.com/736x/19/37/71/1937716930b1c31eb7bc0c86bdb0f603.jpg",
    "https://i.pinimg.com/736x/ea/06/ab/ea06abbe73e164b683da3991d4db3ede.jpg"
  ];

  const stickers = ["⭐", "✨", "🔥", "❤️", "👑", "🌈", "🎈", "🚀", "🎨", "🎭", "🎪", "🏰"];

  const addElement = (type, content) => {
    const newElement = {
      id: Date.now().toString(),
      type,
      content,
      x: Math.random() * 100 + 50,
      y: Math.random() * 100 + 50,
      zIndex: elements.length + 1,
      width: type === "image" ? 200 : undefined
    };
    setElements([...elements, newElement]);
    setSelectedId(newElement.id);
    setShowStickers(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      addElement("image", url);
    }
  };

  const handleBringForward = () => {
    if (!selectedId) return;

    const itemToMove = elements.find(el => el.id === selectedId);
    if (!itemToMove) return;

    const otherElements = elements.filter(el => el.id !== selectedId);
    const maxZ = otherElements.length > 0 ? Math.max(...otherElements.map(e => e.zIndex || 0)) : 0;

    // Move to end of array AND increase zIndex to guarantee it renders on top
    setElements([...otherElements, { ...itemToMove, zIndex: maxZ + 1 }]);
  };

  const deleteSelected = () => {
    if (!selectedId) return;
    setElements(elements.filter(el => el.id !== selectedId));
    setSelectedId(null);
  };

  const updateTextContent = (id, newText) => {
    setElements(elements.map(el => el.id === id ? { ...el, content: newText } : el));
  };

  const handleDragEnd = (id, event, info) => {
    setElements(elements.map(el => {
      if (el.id === id) {
        return { ...el, x: el.x + info.offset.x, y: el.y + info.offset.y };
      }
      return el;
    }));
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-sky-100 font-['Outfit',-apple-system,sans-serif] selection:bg-sky-200 selection:text-sky-900">
      <div className="max-w-[1400px] mx-auto h-full flex flex-col pt-8 pb-12 px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Illustration Board</h2>
            <p className="text-slate-500 font-medium mt-1 text-lg">Design and manage artwork for your book.</p>
          </div>
          <div className="flex gap-3">
            {selectedId && (
              <button
                onClick={deleteSelected}
                className="bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-700 px-4 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                <Trash2 className="w-5 h-5" /> Delete Selected
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <UploadCloud className="w-5 h-5" /> Upload Image
            </button>
          </div>
        </div>

        <div className="flex gap-6 h-[calc(100vh-220px)] min-h-0 relative">
          {/* Left Toolbar */}
          <div className="w-20 bg-white rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center py-6 gap-6 z-20 shrink-0">
            <button
              onClick={() => addElement("text", "New Text Box")}
              title="Add Text"
              className="p-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all shadow-sm border border-transparent hover:border-indigo-100"
            >
              <Type className="w-6 h-6" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowStickers(!showStickers)}
                title="Add Sticker"
                className={`p-3 rounded-xl transition-all shadow-sm border ${showStickers ? "bg-amber-100 text-amber-600 border-amber-200" : "text-slate-500 hover:text-amber-500 hover:bg-amber-50 border-transparent hover:border-amber-100"}`}
              >
                <Sparkles className="w-6 h-6" />
              </button>

              {showStickers && (
                <div className="absolute left-20 top-0 ml-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 grid grid-cols-4 gap-3 w-64 animate-in fade-in slide-in-from-left-4">
                  <div className="col-span-4 flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-700 text-sm">Stickers</span>
                    <button onClick={() => setShowStickers(false)} className="text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>
                  </div>
                  {stickers.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => addElement("sticker", s)}
                      className="text-3xl hover:bg-slate-50 p-2 rounded-xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="w-10 h-px bg-slate-200" />

            <button
              onClick={handleBringForward}
              title="Bring Forward"
              className="p-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all shadow-sm border border-transparent hover:border-indigo-100"
            >
              <Layers className="w-6 h-6" />
            </button>
          </div>

          {/* Canvas Area */}
          <div
            ref={boardRef}
            className="flex-1 bg-white rounded-3xl shadow-inner border border-slate-200 overflow-hidden relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slate-50/50"
            onClick={(e) => {
              if (e.target === boardRef.current) setSelectedId(null);
            }}
          >
            {elements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center text-slate-400">
                  <ImageIcon className="w-20 h-20 mx-auto mb-6 text-slate-300 opacity-50" />
                  <p className="font-bold text-2xl text-slate-500 mb-2">Your Canvas is Empty</p>
                  <p className="text-slate-400 font-medium">Click "Upload Image" or use the toolbar to start creating</p>
                </div>
              </div>
            )}

            {elements.map((el) => (
              <motion.div
                key={el.id}
                drag
                dragMomentum={false}
                onDragEnd={(e, info) => handleDragEnd(el.id, e, info)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(el.id);
                }}
                style={{
                  position: 'absolute',
                  left: el.x,
                  top: el.y,
                  zIndex: el.zIndex,
                }}
                className={`cursor-move transition-shadow ${selectedId === el.id ? 'ring-4 ring-indigo-500 ring-offset-2' : 'hover:ring-2 hover:ring-indigo-300 hover:ring-offset-1 rounded-sm'}`}
              >
                {el.type === "image" && (
                  <img
                    src={el.content}
                    alt="Canvas Element"
                    style={{ width: el.width }}
                    className="rounded-lg shadow-lg pointer-events-none object-cover"
                  />
                )}
                {el.type === "sticker" && (
                  <div className="text-6xl drop-shadow-lg select-none">
                    {el.content}
                  </div>
                )}
                {el.type === "text" && (
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-slate-200 min-w-[200px]">
                    {selectedId === el.id ? (
                      <textarea
                        autoFocus
                        className="w-full bg-transparent resize-none focus:outline-none text-2xl font-bold text-slate-800 text-center font-serif leading-tight"
                        value={el.content}
                        onChange={(e) => updateTextContent(el.id, e.target.value)}
                        rows={2}
                      />
                    ) : (
                      <div className="text-2xl font-bold text-slate-800 text-center font-serif leading-tight select-none">
                        {el.content}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Panel: Asset Lib */}
          <div className="w-80 bg-white rounded-3xl shadow-lg border border-slate-100 p-6 flex flex-col z-20 shrink-0">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-indigo-500" /> Asset Library
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Click to add</p>
            <div className="grid grid-cols-2 gap-4 overflow-y-auto no-scrollbar pb-10">
              {predefinedAssets.map((img, i) => (
                <div
                  key={i}
                  onClick={() => addElement("image", img)}
                  className="aspect-square bg-slate-100 rounded-2xl overflow-hidden hover:ring-4 ring-indigo-500 hover:scale-105 transition-all cursor-pointer shadow-sm group"
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Asset ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
