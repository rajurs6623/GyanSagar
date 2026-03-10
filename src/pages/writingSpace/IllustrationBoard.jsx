import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pencil,
  Square,
  Upload,
  Image as ImageIcon,
  Smile,
  Palette,
  Trash2,
  Save,
  Download,
  Info,
  Plus,
  Layout,
  Type,
  CheckCircle,
  Cloud,
  ChevronLeft,
} from "lucide-react";
// Mock project context since the feature isn't fully implemented yet
const currentProject = { title: "My Amazing Story" };

const IllustrationBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#4F46E5");
  const [brushSize, setBrushSize] = useState(5);
  const [activeTool, setActiveTool] = useState("pencil"); // pencil, eraser, square, circle

  const [layers, setLayers] = useState([
    { id: 1, name: "Background", visible: true },
    { id: 2, name: "Characters", visible: true },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    }
  }, []);

  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [canvasSnapshot, setCanvasSnapshot] = useState(null);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = canvas.getContext("2d");

    // Save state for shape preview
    setStartX(offsetX);
    setStartY(offsetY);
    setCanvasSnapshot(ctx.getImageData(0, 0, canvas.width, canvas.height));

    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.strokeStyle = activeTool === "eraser" ? "#FFFFFF" : color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = canvas.getContext("2d");

    if (activeTool === "pencil" || activeTool === "eraser") {
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    } else if (activeTool === "shape") {
      // Shape Preview (Rect for now)
      ctx.putImageData(canvasSnapshot, 0, 0);
      ctx.beginPath();
      ctx.rect(startX, startY, offsetX - startX, offsetY - startY);
      ctx.stroke();
    } else if (activeTool === "circle") {
      ctx.putImageData(canvasSnapshot, 0, 0);
      ctx.beginPath();
      const radius = Math.sqrt(
        Math.pow(offsetX - startX, 2) + Math.pow(offsetY - startY, 2),
      );
      ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };

  const stopDrawing = (e) => {
    if (activeTool === "sticker") {
      const { offsetX, offsetY } = e.nativeEvent;
      const ctx = canvasRef.current.getContext("2d");
      ctx.font = `${brushSize * 4}px Arial`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(selectedSticker, offsetX, offsetY);
    }
    setIsDrawing(false);
  };

  const exportToPNG = () => {
    const canvas = canvasRef.current;

    // Create a temporary canvas to add white background
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");

    // Fill with white
    tempCtx.fillStyle = "#FFFFFF";
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Draw original canvas on top
    tempCtx.drawImage(canvas, 0, 0);

    const link = document.createElement("a");
    link.download = `my-story-illustration.png`;
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const [activeAssetCategory, setActiveAssetCategory] = useState(null);
  const [selectedSticker, setSelectedSticker] = useState("⭐");

  const stickers = ["⭐", "🌈", "❤️", "☀️", "🦋", "🍄", "🎨", "👑"];

  const assetLibrary = {
    Trees: [
      {
        id: "t1",
        name: "Oak Tree",
        img: "https://i.pinimg.com/1200x/38/42/e9/3842e90dc8caa8b3c0e8a177b208a8e2.jpg",
      },
      {
        id: "t2",
        name: "Pine Tree",
        img: "https://i.pinimg.com/736x/ad/38/bb/ad38bb681ac24a5717bf7c350f5ac9bb.jpg",
      },
      {
        id: "t3",
        name: "Magical Willow",
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=100&h=100&auto=format&fit=crop",
      },
      {
        id: "t4",
        name: "Autumn Maple",
        img: "https://i.pinimg.com/736x/8e/c3/1e/8ec31ef6f61c17fe4b1dcfaf092c1872.jpg",
      },
    ],
    Magic: [
      {
        id: "m1",
        name: "Wizard Wand",
        img: "https://i.pinimg.com/1200x/b9/e7/44/b9e7444c0a09f0bf00d7a1b53f87df24.jpg",
      },
      {
        id: "m2",
        name: "Sparkle Aura",
        img: "https://i.pinimg.com/1200x/b8/33/df/b833df3ede9caf537b4d6f0651621da2.jpg",
      },
      {
        id: "m3",
        name: "Mystic Potion",
        img: "https://i.pinimg.com/736x/db/b7/4b/dbb74b0bc9368e53ac287484edd6b505.jpg",
      },
    ],
    Sky: [
      {
        id: "s1",
        name: "Puffy Cloud",
        img: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=100&h=100&auto=format&fit=crop",
      },
      {
        id: "s2",
        name: "Golden Sun",
        img: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=100&h=100&auto=format&fit=crop",
      },
      {
        id: "s3",
        name: "Night Moon",
        img: "https://images.unsplash.com/photo-1502759683299-cdcc57ee19ce?w=100&h=100&auto=format&fit=crop",
      },
    ],
    Cast: [
      {
        id: "c1",
        name: "Hero Character",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&auto=format&fit=crop",
      },
      {
        id: "c2",
        name: "Dragon Friend",
        img: "https://images.unsplash.com/photo-1635313271787-8fc4d7040523?w=100&h=100&auto=format&fit=crop",
      },
      {
        id: "c3",
        name: "Wise Owl",
        img: "https://images.unsplash.com/photo-1543549685-6b5d43236e7a?w=100&h=100&auto=format&fit=crop",
      },
    ],
  };

  const addAssetToCanvas = (asset) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = asset.img;

    img.onload = () => {
      // Draw image to center of canvas
      const size = 300; // Default size for added assets
      const x = (canvas.width - size) / 2;
      const y = (canvas.height - size) / 2;

      ctx.drawImage(img, x, y, size, size);

      // Add a new layer for the asset
      const newLayer = {
        id: layers.length + 1,
        name: asset.name,
        visible: true,
      };
      setLayers((prev) => [...prev, newLayer]);
    };
  };

  const tools = [
    { id: "pencil", icon: <Pencil size={20} />, label: "Pencil" },
    { id: "eraser", icon: <Square size={20} />, label: "Eraser" },
    { id: "shape", icon: <Square size={20} />, label: "Rectangle" },
    { id: "circle", icon: <Layout size={20} />, label: "Circle" },
    { id: "sticker", icon: <Smile size={20} />, label: "Stickers" },
  ];

  const colors = [
    "#4F46E5",
    "#EF4444",
    "#10B981",
    "#F59E0B",
    "#000000",
    "#FFFFFF",
  ];

  return (
    <div className="flex h-[calc(100vh-130px)] bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50 rounded-[2.5rem] overflow-hidden border border-indigo-100 shadow-2xl relative p-1">
      {/* SIDEBAR TOOLS */}
      <div className="w-24 bg-white/80 backdrop-blur-xl border-r border-indigo-50 flex flex-col items-center py-10 space-y-8 z-30 rounded-l-[2.4rem]">
        {activeTool === "sticker" && (
          <div className="absolute top-24 left-24 bg-white/90 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-indigo-100 flex flex-col items-center space-y-4 z-40">
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">
              Select Sticker
            </span>
            <div className="grid grid-cols-4 gap-2">
              {stickers.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSticker(s)}
                  className={`text-2xl p-2 rounded-xl border-2 transition-all ${selectedSticker === s ? "border-indigo-400 bg-indigo-50" : "border-transparent hover:bg-slate-50"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`p-5 rounded-[1.5rem] transition-all relative group ${activeTool === tool.id ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200" : "text-indigo-300 hover:text-indigo-600 hover:bg-indigo-50"}`}
          >
            {tool.icon}
            <span className="absolute left-full ml-4 px-2 py-1 bg-indigo-900 text-white text-[10px] font-black uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {tool.label}
            </span>
            {activeTool === tool.id && (
              <motion.div
                layoutId="active-tool-indicator"
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-indigo-600 rounded-full"
              />
            )}
          </button>
        ))}

        <div className="h-px w-12 bg-indigo-50 my-4" />

        <button className="p-5 text-amber-500 hover:bg-amber-50 rounded-[1.5rem] transition-all shadow-sm">
          <Cloud size={20} />
        </button>
      </div>

      {/* MAIN CANVAS AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP BAR */}
        <div className="h-20 bg-white/60 backdrop-blur-md border-b border-indigo-50 px-10 flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-3">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-7 h-7 rounded-full border-4 transition-all hover:scale-110 ${color === c ? "border-indigo-200 shadow-lg scale-125" : "border-white shadow-sm"}`}
                  style={{ backgroundColor: c }}
                />
              ))}
              <button className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-400 via-purple-500 to-indigo-500 border-4 border-white shadow-sm hover:scale-110 transition-all" />
            </div>

            <div className="h-8 w-px bg-indigo-100" />

            <div className="flex items-center space-x-5">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest w-16">
                Size
              </span>
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                className="w-40 h-2 bg-indigo-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
              />
              <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 w-12 text-center">
                {brushSize}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={clearCanvas}
              className="text-[10px] font-black text-rose-400 hover:text-rose-600 uppercase tracking-[0.2em] px-6 py-3 bg-rose-50/50 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100"
            >
              Clear Canvas
            </button>
            <button className="bg-indigo-600 text-white px-10 py-3.5 rounded-[1.2rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-indigo-200 flex items-center space-x-3 hover:bg-indigo-700 transition-all hover:-translate-y-0.5 transform">
              <Save size={16} />
              <span>Save Progress</span>
            </button>
          </div>
        </div>

        {/* CANVAS WORKSPACE */}
        <div className="flex-1 flex items-center justify-center p-16 overflow-hidden relative bg-[#f0f3ff]/30">
          <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#818cf8 0.5px, transparent 0.5px)",
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div
            className="bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden relative ring-1 ring-indigo-100/50"
            style={{ width: "900px", height: "600px" }}
          >
            <canvas
              ref={canvasRef}
              width={900}
              height={600}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseOut={stopDrawing}
              className="cursor-crosshair w-full h-full"
            />

            {/* Subtle paper texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          </div>

          {/* Floating Info */}
          <div className="absolute bottom-12 left-12 flex items-center space-x-4 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white shadow-2xl shadow-indigo-100/50">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <ImageIcon size={20} />
            </div>
            <div>
              <p className="text-[9px] font-black text-indigo-300 uppercase tracking-widest">
                Currently Designing
              </p>
              <h4 className="text-xs font-black text-indigo-950 uppercase tracking-tight">
                {" "}
                {currentProject?.title}{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR - INTERACTIVE ASSET LIBRARY */}
      <div className="w-96 bg-white/70 backdrop-blur-2xl border-l border-indigo-50 flex flex-col z-20 rounded-r-[2.4rem] overflow-hidden">
        <div className="p-8 flex-1 overflow-y-auto custom-scrollbar flex flex-col">
          <AnimatePresence mode="wait">
            {!activeAssetCategory ? (
              <motion.div
                key="categories"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="flex-1"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em]">
                    Asset Inventory
                  </h3>
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Palette size={18} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {Object.keys(assetLibrary).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveAssetCategory(cat)}
                      className="p-6 bg-white border border-indigo-50 rounded-[2rem] hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all text-center group active:scale-95"
                    >
                      <div className="w-16 h-16 bg-indigo-50 rounded-[1.2rem] flex items-center justify-center mx-auto mb-4 text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-6 shadow-inner">
                        <ImageIcon size={32} />
                      </div>
                      <span className="text-xs font-[900] text-indigo-950 uppercase tracking-[0.1em]">
                        {cat}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="assets"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                className="flex-1"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <button
                    onClick={() => setActiveAssetCategory(null)}
                    className="p-3 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h3 className="text-sm font-black text-indigo-950 uppercase tracking-[0.1em]">
                    {activeAssetCategory}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {assetLibrary[activeAssetCategory].map((asset) => (
                    <button
                      key={asset.id}
                      onClick={() => addAssetToCanvas(asset)}
                      className="group relative bg-white border border-indigo-50 rounded-2xl overflow-hidden hover:border-indigo-400 hover:shadow-xl transition-all p-2"
                    >
                      <div className="aspect-square bg-slate-50 rounded-xl overflow-hidden mb-2 shadow-inner">
                        <img
                          src={asset.img}
                          alt={asset.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-[10px] font-black text-indigo-950 uppercase block truncate px-1">
                        {asset.name}
                      </span>
                      <div className="absolute right-2 top-2 scale-0 group-hover:scale-100 transition-transform bg-indigo-600 text-white p-1.5 rounded-lg shadow-lg">
                        <Plus size={12} />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LAYERS SECTION */}
          <div className="mt-12 flex justify-between items-center mb-6">
            <h3 className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em]">
              Layer Stack
            </h3>
            <button className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all active:scale-90">
              <Plus size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className="p-4 bg-white/50 border border-indigo-50/50 rounded-2xl flex items-center justify-between group hover:border-indigo-200 hover:bg-white transition-all shadow-sm active:scale-98"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-[10px] font-black border border-indigo-100 shadow-inner">
                    {layer.id}
                  </div>
                  <span className="text-xs font-black text-indigo-950 uppercase tracking-tight">
                    {layer.name}
                  </span>
                </div>
                <Trash2 className="text-indigo-100 group-hover:text-rose-400 transition-colors cursor-pointer p-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 space-y-4 bg-indigo-50/20">
          <button className="w-full py-5 bg-white border-2 border-dashed border-indigo-100 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 hover:border-indigo-400 hover:text-indigo-600 hover:bg-white shadow-sm transition-all flex items-center justify-center space-x-3 group">
            <Info
              size={16}
              className="group-hover:rotate-12 transition-transform"
            />
            <span>Import Asset Sheet</span>
          </button>
          <button
            onClick={exportToPNG}
            className="w-full bg-indigo-600 text-white py-5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center space-x-3 shadow-2xl shadow-indigo-200/50 hover:bg-indigo-700 transition-all hover:-translate-y-1 transform"
          >
            <Download size={18} />
            <span>Generate PNG</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IllustrationBoard;
