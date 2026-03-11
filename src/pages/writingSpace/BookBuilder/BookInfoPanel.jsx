import React, { useState } from "react";
import { BookOpen, ImageIcon } from "lucide-react";

export default function BookInfoPanel({ bookInfo, setBookInfo }) {
  const coverImages = [
    "https://i.pinimg.com/1200x/fd/81/11/fd81113c84008c62ba0075652ad25923.jpg",
    "https://i.pinimg.com/736x/45/e0/0e/45e00e5a30bf85f35cad56f8e8c557e2.jpg",
    "https://i.pinimg.com/736x/e5/4b/93/e54b93337e9414415261cf926bcdb479.jpg",
    "https://i.pinimg.com/1200x/36/8d/5f/368d5fe07fb7f32e4caa4632933fe4de.jpg",
    "https://i.pinimg.com/736x/b9/a4/7c/b9a47c22099528451d972e4fec076bae.jpg",
    "https://i.pinimg.com/736x/a2/f1/cb/a2f1cb8f758b68b5324846b982dd1a07.jpg",
    "https://i.pinimg.com/736x/19/37/71/1937716930b1c31eb7bc0c86bdb0f603.jpg",
    "https://i.pinimg.com/736x/ea/06/ab/ea06abbe73e164b683da3991d4db3ede.jpg"
  ];

  const [isSelectingCover, setIsSelectingCover] = useState(false);

  // Fallback if not provided by parent
  const currentInfo = bookInfo || {
    title: "My Masterpiece",
    author: "Young Writer",
    synopsis: "",
    coverImage: coverImages[0]
  };

  const updateInfo = (key, value) => {
    if (setBookInfo) {
      setBookInfo(prev => ({ ...prev, [key]: value }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-full flex flex-col pt-8 pb-12 px-6 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Book Information</h2>
        <p className="text-slate-500 mt-1">Set up your book's basic details and cover.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pb-8">
        {/* Left Form */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Book Title</label>
              <input 
                type="text" 
                value={currentInfo.title}
                onChange={(e) => updateInfo('title', e.target.value)}
                placeholder="Name your story"
                className="w-full border-2 border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-slate-800 font-medium text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Author Name</label>
              <input 
                type="text" 
                value={currentInfo.author}
                onChange={(e) => updateInfo('author', e.target.value)}
                placeholder="Pen name"
                className="w-full border-2 border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-slate-800 font-medium text-lg"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                 <label className="block text-sm font-semibold text-slate-700">Synopsis / Blurb</label>
                 <span className="text-xs text-slate-400 font-medium">{currentInfo.synopsis.length} / 500 chars</span>
              </div>
              <textarea 
                rows="6"
                value={currentInfo.synopsis}
                onChange={(e) => updateInfo('synopsis', e.target.value)}
                placeholder="What is your story about? Give readers a sneak peek!"
                className="w-full border-2 border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-slate-800 resize-none font-medium leading-relaxed"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right Cover Preview */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center justify-between">
            <span>Cover Preview</span>
            <button 
              onClick={() => setIsSelectingCover(!isSelectingCover)}
              className="text-xs text-indigo-600 font-bold bg-indigo-50 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors flex items-center gap-1"
            >
               <ImageIcon className="w-3 h-3"/> Change Cover
            </button>
          </label>
          
          <div className="w-full max-w-[320px] mx-auto xl:mx-0 aspect-[2/3] bg-indigo-950 rounded-2xl shadow-xl shadow-indigo-900/10 relative overflow-hidden group border-4 border-white">
            <img src={currentInfo.coverImage} className="w-full h-full object-cover opacity-90 transition-all duration-700" alt="Book Cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white font-bold text-3xl drop-shadow-md leading-tight" style={{textShadow: "0 2px 10px rgba(0,0,0,0.5)"}}>
                 {currentInfo.title || "Untitled Book"}
              </h3>
              <p className="text-white/90 font-bold text-xs mt-3 uppercase tracking-widest flex items-center gap-2">
                 <span className="h-px bg-white/40 w-4"></span>
                 {currentInfo.author || "Unknown Author"}
              </p>
            </div>
            <div 
              onClick={() => setIsSelectingCover(!isSelectingCover)}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm cursor-pointer"
            >
              <span className="bg-white text-indigo-900 px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 transform transition-transform group-hover:scale-105">
                <ImageIcon className="w-4 h-4"/> 
                {isSelectingCover ? "Close Gallery" : "Change Cover"}
              </span>
            </div>
          </div>

          {/* Image Selection Gallery */}
          {isSelectingCover && (
            <div className="mt-4 p-5 bg-white rounded-3xl shadow-lg border border-slate-100 animate-in slide-in-from-top-4 fade-in duration-300">
              <p className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-indigo-500" />
                Select a new cover
              </p>
              <div className="grid grid-cols-4 gap-3">
                {coverImages.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => {
                      updateInfo('coverImage', img);
                      setIsSelectingCover(false);
                    }}
                    className={`aspect-[2/3] rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${currentInfo.coverImage === img ? 'border-indigo-600 scale-105 shadow-md shadow-indigo-600/20' : 'border-transparent hover:border-indigo-300 relative group'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Cover option ${idx + 1}`} />
                    {currentInfo.coverImage !== img && (
                      <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
