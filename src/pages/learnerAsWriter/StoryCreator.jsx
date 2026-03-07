import React, { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  ChevronDown,
  Plus,
  X,
  Mic,
  HelpCircle,
  Save,
  CheckCircle,
  Image as ImageIcon,
  Upload,
  Monitor,
  Smartphone,
  Edit2,
  Type,
} from "lucide-react";

const StoryCreator = ({ onBack }) => {
  const [pages, setPages] = useState([
    { id: 1, type: "spread", leftText: "", rightImage: null },
  ]);
  const [activeSpread, setActiveSpread] = useState(0); // index in pages array
  const [theme, setTheme] = useState("Sports & Games");
  const [subTheme, setSubTheme] = useState("Cricket");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isSubThemeOpen, setIsSubThemeOpen] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [editFilters, setEditFilters] = useState({
    brightness: 100,
    contrast: 100,
    grayscale: 0,
  });
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);

  // Drawing and Text Style States
  const [tool, setTool] = useState(null);
  const [fontColor, setFontColor] = useState("#1e293b");
  const [highlightColor, setHighlightColor] = useState("transparent");
  const [drawColor, setDrawColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Drawing Handlers
  const clearCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const startDrawing = (e) => {
    if (!tool) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const clientX =
      e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
    const clientY =
      e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;

    if (clientX === undefined || clientY === undefined) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    ctx.beginPath();
    ctx.moveTo(x * scaleX, y * scaleY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing || !tool || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const clientX =
      e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
    const clientY =
      e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;

    if (clientX === undefined || clientY === undefined) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = brushSize * 4;
      ctx.globalAlpha = 1.0;
    } else if (tool === "highlighter") {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = drawColor;
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = brushSize * 4;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = drawColor;
      ctx.globalAlpha = 1.0;
      ctx.lineWidth = brushSize;
    }

    ctx.lineTo(x * scaleX, y * scaleY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const availableFonts = [
    { name: "Default (Sans)", family: "'Inter', sans-serif", preview: "Ag" },
    { name: "Storybook (Serif)", family: "'Georgia', serif", preview: "Ag" },
    {
      name: "Typewriter (Mono)",
      family: "'Courier New', monospace",
      preview: "Ag",
    },
    {
      name: "Handwriting (Cursive)",
      family: "'Comic Sans MS', cursive, sans-serif",
      preview: "Ag",
    },
    { name: "Playful", family: "'Trebuchet MS', sans-serif", preview: "Ag" },
  ];
  const [selectedFont, setSelectedFont] = useState(availableFonts[0].family);
  const [isFontMenuOpen, setIsFontMenuOpen] = useState(false);

  const themes = [
    "Sports & Games",
    "Vacation and Holiday",
    "Wallpapers",
    "Young Author's",
    "Science& Teachnology",
  ];

  const subThemes = {
    "Sports & Games": [
      "Sports",
      "Cricket",
      "Football/ Soccer",
      "My own images",
      "Write on both sides",
      "Cricket Stars",
      "Baseball",
      "Basketball",
    ],
    "Vacation and Holiday": ["Beach", "Mountains", "City Tour"],
    Wallpapers: ["Light", "Dark", "Abstract"],
    "Young Author's": ["Hero Among Us", "Kindness/Joy", "My Own Images"],
    "Science& Teachnology": ["Young Scientists", "Robots", "My Own Images"],
  };

  const images = {
    Cricket: [
      "https://i.pinimg.com/736x/13/19/86/1319862faa59732853d9c713f9dcb026.jpg",
      "https://i.pinimg.com/1200x/c6/05/da/c605da039038cfd6d415d5a3bd2bbd9b.jpg",
      "https://i.pinimg.com/736x/49/f1/4b/49f14bd8fd1e199a415ac50581ab20bb.jpg",
      "https://i.pinimg.com/736x/fe/58/0d/fe580d40c4dc624c76518abea12ed8e4.jpg",
      "https://i.pinimg.com/736x/f4/0a/70/f40a7005c2b2d8bcbf9e4af442dbcaa7.jpg",
      "https://i.pinimg.com/736x/dc/60/9c/dc609c649f626927a406951434f30514.jpg",
    ],
    Beach: [
      "https://i.pinimg.com/736x/65/cc/f8/65ccf86e994f922a5462d879f8b7560d.jpg",
      "https://i.pinimg.com/1200x/6d/cd/14/6dcd140b80b210ac445a0eddfc40784a.jpg",
      "https://i.pinimg.com/1200x/5f/d7/9b/5fd79be9af1589ec80a507919712a0b7.jpg",
      "https://i.pinimg.com/1200x/a4/7c/7d/a47c7de6440921a1452e5424a2bf4a57.jpg",
      "https://i.pinimg.com/736x/af/2b/f9/af2bf9dd53e1d065f9a292f48d047539.jpg",
      "https://i.pinimg.com/736x/f9/1e/9b/f91e9b07c2c5f8c9ca07358299fbf259.jpg",
    ],
  };

  const currentImages = images[subTheme] || [
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80",
    "https://i.pinimg.com/1200x/69/9b/60/699b60ea2ea3b26bf7bb4c9d7992c8d0.jpg",
    "https://i.pinimg.com/1200x/9b/b5/13/9bb513fd255c9a7e172ee61e0280f069.jpg",
    "https://i.pinimg.com/736x/cf/4c/eb/cf4cebc97c2c7ae8bd6834abae085420.jpg",
  ];

  const handleAddPage = () => {
    setPages([
      ...pages,
      { id: pages.length + 1, type: "spread", leftText: "", rightImage: null },
    ]);
    setActiveSpread(pages.length);
  };

  const handleDeletePage = (index) => {
    if (pages.length === 1) return;
    const newPages = pages.filter((_, i) => i !== index);
    setPages(newPages);
    setActiveSpread(Math.max(0, activeSpread - 1));
  };

  const handleTextChange = (e) => {
    const newPages = [...pages];
    newPages[activeSpread].leftText = e.target.value;
    setPages(newPages);
  };

  const handleImageSelect = (imgUrl) => {
    const newPages = [...pages];
    newPages[activeSpread].rightImage = imgUrl;
    setPages(newPages);
  };

  return (
    <div className="w-full h-full bg-[#EDEDF5] flex overflow-hidden font-sans rounded-3xl shadow-2xl border border-slate-200">
      {/* LEFT SIDEBAR: Page Thumbnails */}
      <div className="w-28 flex-shrink-0 bg-[#EDEDF5] overflow-y-auto no-scrollbar py-6 flex flex-col items-center border-r border-slate-200">
        {pages.map((page, index) => {
          const isFirstNum = index * 2 + 1;
          const isSecondNum = index * 2 + 2;
          const pageTitle = `${isFirstNum},${isSecondNum}`;

          return (
            <div
              key={index}
              className="mb-4 relative w-20 flex flex-col items-center group"
            >
              <div
                onClick={() => setActiveSpread(index)}
                className={`w-20 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all relative ${
                  activeSpread === index
                    ? "border-indigo-500 shadow-md ring-2 ring-indigo-200"
                    : "border-slate-300 hover:border-slate-400"
                }`}
              >
                {/* Mock spread preview */}
                <div className="flex h-full w-full">
                  <div className="w-1/2 bg-white flex items-start justify-start p-1 text-[8px] text-slate-300">
                    {page.leftText ? (
                      <div className="bg-slate-200 w-full h-1 rounded-sm" />
                    ) : null}
                  </div>
                  <div className="w-1/2 bg-blue-100 flex items-center justify-center">
                    {page.rightImage ? (
                      <img
                        src={page.rightImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-4 h-4 text-blue-300" />
                    )}
                  </div>
                </div>
                {/* Numbers */}
                <div className="absolute top-1 left-1 bg-white/80 rounded px-1 text-[8px] font-bold text-slate-600">
                  {pageTitle}
                </div>
              </div>

              {pages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeletePage(index);
                  }}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 text-red-500 hover:bg-red-50 border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <X size={12} />
                </button>
              )}

              {/* + circle icon between pages */}
              {index < pages.length - 1 && (
                <div className="absolute -bottom-3 z-10 w-4 h-4 rounded-full bg-emerald-300 flex items-center justify-center text-white text-xs border border-emerald-400">
                  <Plus size={10} />
                </div>
              )}
            </div>
          );
        })}
        <button
          onClick={handleAddPage}
          className="mt-4 w-20 h-20 bg-green-700 hover:bg-green-600 text-white rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg transition-colors border-2 border-green-600"
        >
          <Plus size={24} />
          <span className="text-[10px] font-bold">Add Page</span>
        </button>
      </div>

      {/* CENTER: Main Book Spread */}
      <div className="flex-1 flex flex-col relative bg-[#EDEDF5]">
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={onBack}
            className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg font-bold text-sm text-slate-600 hover:bg-white shadow"
          >
            Back
          </button>
        </div>

        {/* The Book */}
        <div className="flex-1 p-6 lg:p-12 pb-24 flex flex-col items-center justify-center relative">
          {/* Top Tools Bar (Drawing & Text) */}
          <div className="absolute top-4 bg-white/90 backdrop-blur rounded-xl shadow-lg p-1.5 flex flex-wrap gap-2 items-center z-40 border border-slate-200 max-w-full overflow-visible mx-4 sm:mx-0 shadow-emerald-500/10">
            <div className="flex items-center gap-1.5 border-r pr-3 border-slate-200">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1 hidden md:block">
                Draw
              </span>
              <button
                onClick={() => setTool(tool === "pencil" ? null : "pencil")}
                className={`w-7 h-7 rounded shrink-0 flex items-center justify-center transition-colors shadow-sm border ${
                  tool === "pencil"
                    ? "bg-indigo-600 text-white border-indigo-700"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
                title="Pencil"
              >
                <Edit2 size={12} />
              </button>
              <button
                onClick={() =>
                  setTool(tool === "highlighter" ? null : "highlighter")
                }
                className={`w-7 h-7 rounded shrink-0 flex items-center justify-center transition-colors shadow-sm border text-xs ${
                  tool === "highlighter"
                    ? "bg-amber-400 text-white border-amber-500"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
                title="Canvas Highlighter"
              >
                🖍
              </button>
              <button
                onClick={() => setTool(tool === "eraser" ? null : "eraser")}
                className={`w-7 h-7 rounded shrink-0 flex items-center justify-center transition-colors shadow-sm border text-xs ${
                  tool === "eraser"
                    ? "bg-red-500 text-white border-red-600"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
                title="Eraser"
              >
                🧽
              </button>

              <div
                className="relative w-7 h-7 rounded shrink-0 flex items-center justify-center shadow-sm border border-slate-200 bg-white ml-1 hover:bg-slate-50 transition-colors"
                title="Brush Color"
              >
                <input
                  type="color"
                  value={drawColor}
                  onChange={(e) => setDrawColor(e.target.value)}
                  className="w-full h-full absolute inset-0 opacity-0 cursor-pointer"
                />
                <div
                  className="w-4 h-4 rounded-full border border-slate-200 shadow-inner"
                  style={{ backgroundColor: drawColor }}
                ></div>
              </div>

              <input
                type="range"
                min="1"
                max="20"
                value={brushSize}
                onChange={(e) => setBrushSize(e.target.value)}
                className="w-16 md:w-20 ml-2 accent-indigo-600"
                title="Brush Size"
              />
              <button
                onClick={clearCanvas}
                className="px-2 py-1 ml-1 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded text-[10px] transition-colors shadow-sm"
              >
                Clear
              </button>
            </div>

            <div className="flex items-center gap-2 pl-1 shrink-0">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1 hidden md:block">
                Text
              </span>

              {/* Text Mode Button */}
              <button
                onClick={() => setTool(null)}
                className={`w-7 h-7 rounded shrink-0 flex items-center justify-center transition-colors shadow-sm border ${
                  tool === null
                    ? "bg-blue-600 text-white border-blue-700"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
                title="Text Mode"
              >
                <Type size={12} />
              </button>

              {/* Font Selector */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsFontMenuOpen(!isFontMenuOpen);
                    setTool(null);
                  }}
                  className="bg-white hover:bg-slate-50 px-2 py-1.5 rounded-lg font-bold text-[11px] text-slate-700 shadow-sm flex items-center gap-1 transition-colors border border-slate-200"
                >
                  <span className="hidden sm:inline">Font</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${isFontMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isFontMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden flex flex-col z-50">
                    <div className="px-3 py-2 bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Select Font
                    </div>
                    {availableFonts.map((f) => (
                      <button
                        key={f.name}
                        onClick={() => {
                          setSelectedFont(f.family);
                          setIsFontMenuOpen(false);
                          setTool(null);
                        }}
                        className={`px-4 py-3 flex items-center justify-between text-left hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 ${selectedFont === f.family ? "bg-indigo-50 text-indigo-700" : "text-slate-700"}`}
                      >
                        <span
                          style={{ fontFamily: f.family }}
                          className="text-base truncate"
                        >
                          {f.name}
                        </span>
                        {selectedFont === f.family && (
                          <CheckCircle
                            size={14}
                            className="text-indigo-600 flex-shrink-0"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Text Color Box */}
              <div
                className="flex flex-col items-center gap-0.5 relative group cursor-pointer hover:bg-slate-50 p-1 rounded transition-colors"
                title="Text Color"
                onClick={() => setTool(null)}
              >
                <span className="text-xs font-black text-slate-700">A</span>
                <input
                  type="color"
                  value={fontColor}
                  onChange={(e) => {
                    setFontColor(e.target.value);
                    setTool(null);
                  }}
                  className="w-6 h-6 absolute inset-0 opacity-0 cursor-pointer"
                />
                <div
                  className="w-4 h-1 rounded-sm shadow-sm"
                  style={{ backgroundColor: fontColor }}
                ></div>
              </div>

              {/* Text Highlight Color Box */}
              <div
                className="flex flex-col items-center gap-0.5 relative group cursor-pointer hover:bg-slate-50 p-1 rounded transition-colors"
                title="Text Highlight"
                onClick={() => setTool(null)}
              >
                <span className="text-[10px] font-bold">🖍️</span>
                <input
                  type="color"
                  value={highlightColor}
                  onChange={(e) => {
                    setHighlightColor(e.target.value);
                    setTool(null);
                  }}
                  className="w-6 h-6 absolute inset-0 opacity-0 cursor-pointer"
                />
                <div
                  className="w-4 h-1 rounded-sm shadow-sm"
                  style={{
                    backgroundColor:
                      highlightColor === "transparent"
                        ? "#fbbf24"
                        : highlightColor,
                  }}
                ></div>
              </div>
              <button
                onClick={() => {
                  setHighlightColor("transparent");
                  setTool(null);
                }}
                className="text-[10px] text-slate-400 hover:text-slate-600 font-bold ml-1 px-1 rounded hover:bg-slate-100 transition-colors"
                title="Remove Text Highlight"
              >
                X
              </button>
            </div>
          </div>

          {/* Book Spreads Element */}
          <div className="w-full max-w-5xl aspect-[16/10] bg-white rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex relative mt-20 md:mt-16 overflow-hidden">
            {/* Canvas Overlay for free format drawing on the book! */}
            <canvas
              ref={canvasRef}
              width={2000}
              height={1250}
              className={`absolute inset-0 w-full h-full z-30 transition-all ${tool ? "cursor-crosshair pointer-events-auto" : "pointer-events-none"}`}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
            {/* Book Crease/Shadow */}
            <div className="absolute top-0 bottom-0 left-1/2 w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none z-10" />

            {/* Left Page (Text Area) */}
            <div className="w-1/2 h-full flex flex-col p-8 lg:p-12 relative bg-[#82B9EF]">
              <div className="flex-1 relative mt-8">
                <textarea
                  value={pages[activeSpread].leftText}
                  onChange={handleTextChange}
                  className="w-full h-full resize-none bg-transparent outline-none text-lg md:text-xl font-medium placeholder:text-slate-600/50 leading-relaxed border-b border-slate-800/20"
                  placeholder="Young Author's Story Pad"
                  style={{
                    fontFamily: selectedFont,
                    color: fontColor,
                    backgroundColor:
                      highlightColor === "transparent"
                        ? "transparent"
                        : highlightColor,
                  }}
                />
              </div>

              {/* Enhanced Bottom Footer Bar (Character count, Page Number, Mic) */}
              <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between z-10">
                {/* Character Count (Left side) */}
                <div className="text-xs font-bold text-slate-800/50 bg-white/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/50">
                  <span
                    className={
                      pages[activeSpread].leftText.length > 0
                        ? "text-slate-800"
                        : ""
                    }
                  >
                    {pages[activeSpread].leftText.length}
                  </span>{" "}
                  / 460
                </div>

                {/* Page Number (Center) */}
                <div className="bg-white/80 font-bold text-slate-600 w-8 h-8 rounded flex items-center justify-center shadow-sm -ml-8">
                  {activeSpread * 2 + 1}
                </div>

                {/* Mic Button (Right side) */}
                {/* <button
                  className="bg-green-600 hover:bg-green-700 text-white w-8 h-8 rounded flex items-center justify-center shadow-sm transition-all hover:scale-105 active:scale-95"
                  title="Voice Typing"
                >
                  <Mic size={14} />
                </button> */}
              </div>
            </div>

            {/* Right Page (Image) */}
            <div className="w-1/2 h-full bg-[#82B9EF] relative overflow-hidden flex items-end justify-center">
              {pages[activeSpread].rightImage ? (
                <img
                  src={pages[activeSpread].rightImage}
                  className="w-full h-full object-cover"
                  alt="Story illustration"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white/40 font-bold text-2xl uppercase tracking-widest">
                    Illustration Area
                  </div>
                </div>
              )}

              <div className="absolute bottom-6 mx-auto left-0 right-0 flex justify-center z-10">
                <div className="bg-white/80 font-bold text-slate-600 w-8 h-8 rounded flex items-center justify-center">
                  {activeSpread * 2 + 2}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Toolbar */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-20">
          {/* <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1">
            <HelpCircle size={18} /> Help Me
          </button> */}
          <button
            onClick={handleAddPage}
            className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1"
          >
            <Plus size={18} /> Add New Page
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1">
            <Save size={18} /> Save Changes
          </button>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1"
          >
            <CheckCircle size={18} /> Finish Writing
          </button>
        </div>
      </div>

      {/* RIGHT SIDEBAR: Media selection wrapper */}
      <div className="w-80 flex-shrink-0 bg-white border-l border-slate-200 overflow-y-auto z-20 shadow-[-10px_0_20px_rgba(0,0,0,0.05)] flex flex-col">
        {/* Top Banner */}
        <div className="bg-green-600 p-4 m-4 rounded-xl text-white flex gap-3 shadow-md items-start">
          <p className="text-xs font-medium leading-relaxed">
            Activate the “Your Own Images” theme to design your story with
            images that reflect your vision.
          </p>
        </div>

        {/* Selection Dropdowns */}
        <div className="px-4 space-y-3 relative z-30">
          {/* Custom Theme Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsThemeOpen(!isThemeOpen);
                setIsSubThemeOpen(false);
              }}
              className="w-full bg-[#374151] hover:bg-[#4B5563] focus:ring-2 focus:ring-slate-400 outline-none text-white p-3 rounded-lg font-bold text-sm flex items-center justify-between transition-colors border border-slate-700 shadow-sm"
            >
              <span>{theme}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-slate-300 ${isThemeOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isThemeOpen && (
              <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden flex flex-col text-sm z-50 max-h-60 overflow-y-auto custom-scrollbar">
                {themes.map((t) => (
                  <div
                    key={t}
                    onClick={() => {
                      setTheme(t);
                      setSubTheme(subThemes[t][0]);
                      setIsThemeOpen(false);
                    }}
                    className={`px-4 py-3 cursor-pointer flex items-center justify-between border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors ${
                      theme === t
                        ? "bg-slate-50 text-slate-900 font-bold"
                        : "text-slate-700"
                    }`}
                  >
                    <span>{t}</span>
                    {theme === t && (
                      <CheckCircle size={16} className="text-slate-400" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Custom SubTheme Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsSubThemeOpen(!isSubThemeOpen);
                setIsThemeOpen(false);
              }}
              className={`w-full bg-[#374151] hover:bg-[#4B5563] focus:ring-2 focus:ring-slate-400 outline-none text-white p-3 font-bold text-sm flex items-center justify-between transition-colors shadow-sm border border-slate-700 ${
                isSubThemeOpen ? "rounded-t-lg border-b-0" : "rounded-lg"
              }`}
            >
              <span>{subTheme}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-slate-300 ${isSubThemeOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isSubThemeOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-slate-400 rounded-b-lg shadow-xl overflow-hidden flex flex-col text-sm z-50 max-h-64 overflow-y-auto custom-scrollbar">
                {subThemes[theme]?.map((t) => (
                  <div
                    key={t}
                    onClick={() => {
                      setSubTheme(t);
                      setIsSubThemeOpen(false);
                    }}
                    className={`px-4 py-3 cursor-pointer flex items-center justify-between border-t border-slate-200 hover:bg-slate-50 transition-colors ${
                      subTheme === t
                        ? "bg-[#F97316] text-white font-bold hover:bg-[#EA580C]"
                        : "text-slate-700 font-medium"
                    }`}
                  >
                    <span>{t}</span>
                    {subTheme === t && (
                      <CheckCircle size={16} className="text-white" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Media Content Area */}
        <div className="p-4 flex-1 flex flex-col">
          {subTheme === "My own images" ? (
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-100 hover:border-indigo-400 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Upload size={24} />
                </div>
                <h4 className="font-bold text-slate-700 text-sm mb-1">
                  Upload New Image
                </h4>
                <p className="text-xs text-slate-500 max-w-[200px]">
                  Drag and drop or click to browse files
                </p>

                {/* Hidden File Input for Real Upload Mock */}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="imageUpload"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const url = URL.createObjectURL(e.target.files[0]);
                      handleImageSelect(url);
                    }
                  }}
                />
                <button
                  onClick={() => document.getElementById("imageUpload").click()}
                  className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Browse Files
                </button>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-200">
                <button
                  onClick={() => setIsEditingImage(true)}
                  disabled={!pages[activeSpread].rightImage}
                  className="w-full flex items-center justify-center gap-2 p-3 bg-slate-800 hover:bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-sm transition-colors"
                >
                  <Edit2 size={16} /> Edit Selected Image
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 max-h-full overflow-y-auto custom-scrollbar content-start">
              {currentImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleImageSelect(img)}
                  className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-indigo-500 cursor-pointer shadow-sm relative group"
                >
                  <img
                    src={img}
                    alt={`Theme item ${idx}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">
                      Select
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image Editor Modal Wrapper */}
      {isEditingImage && pages[activeSpread].rightImage && (
        <div className="absolute inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-lg text-slate-800">Edit Image</h3>
              <button
                onClick={() => {
                  setIsEditingImage(false);
                  setCrop(undefined);
                  setCompletedCrop(null);
                }}
                className="text-slate-400 hover:text-slate-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 flex flex-col items-center gap-6">
              <div className="w-full h-64 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center relative bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACVJREFUKFNjZCASMDKgAnv37v3/n0EQwzTBCVjSUEU4FfI1wWQAAGe1Bw5hA4jWAAAAAElFTkSuQmCC')]">
                <ReactCrop
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                  className="max-w-full max-h-full flex items-center justify-center p-2"
                >
                  <img
                    ref={imgRef}
                    src={pages[activeSpread].rightImage}
                    alt="Preview"
                    className="max-w-full max-h-full object-contain"
                    style={{
                      filter: `brightness(${editFilters.brightness}%) contrast(${editFilters.contrast}%) grayscale(${editFilters.grayscale}%)`,
                    }}
                  />
                </ReactCrop>
              </div>
              <p className="text-xs text-slate-400 mt-[-20px]">
                Tip: Click and drag on the image to crop it.
              </p>
              <div className="w-full space-y-4 px-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                    <span>Brightness</span>
                    <span>{editFilters.brightness}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={editFilters.brightness}
                    onChange={(e) =>
                      setEditFilters({
                        ...editFilters,
                        brightness: e.target.value,
                      })
                    }
                    className="w-full accent-indigo-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                    <span>Contrast</span>
                    <span>{editFilters.contrast}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={editFilters.contrast}
                    onChange={(e) =>
                      setEditFilters({
                        ...editFilters,
                        contrast: e.target.value,
                      })
                    }
                    className="w-full accent-indigo-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                    <span>Grayscale</span>
                    <span>{editFilters.grayscale}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={editFilters.grayscale}
                    onChange={(e) =>
                      setEditFilters({
                        ...editFilters,
                        grayscale: e.target.value,
                      })
                    }
                    className="w-full accent-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setEditFilters({
                    brightness: 100,
                    contrast: 100,
                    grayscale: 0,
                  });
                  setIsEditingImage(false);
                  setCrop(undefined);
                  setCompletedCrop(null);
                }}
                className="px-6 py-2 rounded-lg font-bold text-slate-600 hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!imgRef.current) return;
                  const canvas = document.createElement("canvas");
                  const img = new Image();
                  img.crossOrigin = "anonymous";
                  img.onload = () => {
                    const scaleX = img.width / imgRef.current.width;
                    const scaleY = img.height / imgRef.current.height;

                    if (
                      completedCrop &&
                      completedCrop.width &&
                      completedCrop.height
                    ) {
                      canvas.width = completedCrop.width * scaleX;
                      canvas.height = completedCrop.height * scaleY;
                      const ctx = canvas.getContext("2d");
                      ctx.filter = `brightness(${editFilters.brightness}%) contrast(${editFilters.contrast}%) grayscale(${editFilters.grayscale}%)`;
                      ctx.drawImage(
                        img,
                        completedCrop.x * scaleX,
                        completedCrop.y * scaleY,
                        completedCrop.width * scaleX,
                        completedCrop.height * scaleY,
                        0,
                        0,
                        completedCrop.width * scaleX,
                        completedCrop.height * scaleY,
                      );
                    } else {
                      canvas.width = img.width;
                      canvas.height = img.height;
                      const ctx = canvas.getContext("2d");
                      ctx.filter = `brightness(${editFilters.brightness}%) contrast(${editFilters.contrast}%) grayscale(${editFilters.grayscale}%)`;
                      ctx.drawImage(img, 0, 0);
                    }

                    try {
                      const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
                      handleImageSelect(dataUrl);
                      setIsEditingImage(false);
                      setCrop(undefined);
                      setCompletedCrop(null);
                    } catch (err) {
                      alert(
                        "Cannot save edited image directly from template samples due to browser security. Please use with your uploaded images instead!",
                      );
                      setIsEditingImage(false);
                    }
                  };
                  img.src = pages[activeSpread].rightImage;
                }}
                className="px-6 py-2 rounded-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Lightbulb Icon component for exact match to image
const LightbulbIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
    <circle cx="12" cy="12" r="4"></circle>
  </svg>
);

export default StoryCreator;
