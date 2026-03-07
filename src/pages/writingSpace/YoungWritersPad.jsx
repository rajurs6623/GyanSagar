import React, { useState, useEffect, useRef } from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Image,
  Type,
  TypeOutline,
  SpellCheck,
  Settings,
  Download,
  Save,
  Eye,
  FileText,
  FilePlus,
  Users,
  ImagePlus,
  UserCircle,
  PenTool,
  PaintBucket,
  LayoutTemplate,
  Brush,
  Sticker,
  Smile,
  History,
  Undo,
  Redo,
  ChevronDown,
  MessageSquare,
  BookOpen,
} from "lucide-react";

const EditorButton = ({ icon: Icon, active, action, title }) => (
  <button
    onMouseDown={(e) => {
      e.preventDefault();
      if (action) action();
    }}
    title={title}
    className={`p-2 rounded-lg transition-colors ${active ? "bg-indigo-100 text-indigo-700" : "text-slate-600 hover:bg-slate-100"}`}
  >
    <Icon className="w-4 h-4" />
  </button>
);

const SidebarButton = ({ icon: Icon, label, color, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-4 py-2 hover:bg-slate-50 rounded-xl transition-colors group"
  >
    <div
      className={`p-2.5 rounded-xl border border-slate-200 ${color} bg-white shadow-sm flex items-center justify-center group-hover:border-slate-300 transition-colors`}
    >
      <Icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
    </div>
    <span className="font-bold text-slate-700 text-[15px] leading-none">
      {label}
    </span>
  </button>
);

const MENUS = {
  Edit: ["Undo", "Redo", "Cut", "Copy", "Paste", "Find & Replace"],
  View: ["Print Layout", "Outline", "Full Screen", "Zoom"],
  Insert: ["Image", "Table", "Drawing", "Link", "Special Characters"],
  Format: ["Text", "Paragraph Styles", "Align & Indent", "Line Spacing"],
  Tools: ["Spelling & Grammar", "Word Count", "Dictionary", "Accessibility"],
  Export: ["Download as PDF", "Download as Word", "Publish Online"],
};

const FONTS = [
  { name: "Default (Sans)", family: "'Nunito', sans-serif" },
  { name: "Storybook (Serif)", family: "Georgia, serif" },
  { name: "Typewriter (Mono)", family: "'Courier New', Courier, monospace" },
  { name: "Handwriting (Cursive)", family: "'Comic Sans MS', cursive" },
  { name: "Playful", family: "'Trebuchet MS', sans-serif" },
];

const SIZE_MAP = {
  1: "10pt",
  2: "13pt",
  3: "16pt",
  4: "18pt",
  5: "24pt",
  6: "32pt",
  7: "48pt",
};

const YoungWritersPad = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeFont, setActiveFont] = useState(FONTS[0]);
  const [activeSize, setActiveSize] = useState("3");
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [showSizeMenu, setShowSizeMenu] = useState(false);
  const [activeFormats, setActiveFormats] = useState({});
  const [pageCount, setPageCount] = useState(1);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const checkPagination = () => {
    if (editorRef.current) {
      const height = editorRef.current.scrollHeight;
      const count = Math.max(1, Math.ceil(height / 1088));
      if (count !== pageCount) {
        setPageCount(count);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(checkPagination, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgHtml = `<br/><div contenteditable="false" style="display: flex; justify-content: center; margin: 20px 0;"><img src="${event.target.result}" style="max-width: 80%; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);" alt="Story Illustration" /></div><p><br/></p>`;
        insertHTML(imgHtml);
      };
      reader.readAsDataURL(file);
      e.target.value = null;
    }
  };

  const handleMenuClick = (item) => {
    setActiveMenu(activeMenu === item ? null : item);
    setShowFontMenu(false);
    setShowSizeMenu(false);
  };

  const execCmd = (command, value = null) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
    }
    checkFormats();
  };

  const insertHTML = (html) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand("insertHTML", false, html);
    }
  };

  const checkFormats = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      strikethrough: document.queryCommandState("strikethrough"),
      justifyLeft: document.queryCommandState("justifyLeft"),
      justifyCenter: document.queryCommandState("justifyCenter"),
      justifyRight: document.queryCommandState("justifyRight"),
      justifyFull: document.queryCommandState("justifyFull"),
      insertUnorderedList: document.queryCommandState("insertUnorderedList"),
      insertOrderedList: document.queryCommandState("insertOrderedList"),
    });
  };

  const handleEditAction = async (action) => {
    switch (action) {
      case "Undo":
        execCmd("undo");
        break;
      case "Redo":
        execCmd("redo");
        break;
      case "Cut":
        execCmd("cut");
        break;
      case "Copy":
        execCmd("copy");
        break;
      case "Paste":
        try {
          const text = await navigator.clipboard.readText();
          insertHTML(text.replace(/\n/g, "<br/>"));
        } catch (e) {
          console.error(e);
        }
        break;
      case "Find & Replace":
        const findText = prompt("Find what:");
        if (findText) {
          const replaceText = prompt("Replace with:");
          if (replaceText !== null && editorRef.current) {
            editorRef.current.innerHTML = editorRef.current.innerHTML
              .split(findText)
              .join(replaceText);
          }
        }
        break;
      default:
        break;
    }
    setActiveMenu(null);
  };

  const handleFontChange = (font) => {
    setActiveFont(font);
    setShowFontMenu(false);
    execCmd("fontName", font.family);
  };

  const handleSizeChange = (size) => {
    setActiveSize(size);
    setShowSizeMenu(false);
    execCmd("fontSize", size);
  };

  const handleTemplateClick = (templateName) => {
    setActiveMenu(null);
    if (!editorRef.current) return;

    let templateTitle = templateName;
    let templateContent = "";

    switch (templateName) {
      case "Blank document":
        templateTitle = "Untitled Story";
        templateContent = "";
        break;
      case "Fairy Tale":
        templateTitle = "Once Upon a Time...";
        templateContent =
          "<p>In a faraway kingdom where dragons soared above cloud-capped mountains, there lived a brave young soul named [Name]. The kingdom was known for its magical enchanted forests.</p><div style='text-align: center; margin: 20px 0; color: #6366f1; font-style: italic; font-weight: bold;'>~ ~ ~</div><p>One sunny morning, [Name] discovered a mysterious glowing object hidden beneath the roots of the oldest oak tree.</p>";
        break;
      case "Sci-Fi Adventure":
        templateTitle = "Mission to Sector 7";
        templateContent =
          "<p>Captain's Log, Stardate 3421.5. Our ship, the <em>Stellar Voyager</em>, has just entered the asteroid belt of Sector 7. The radar is picking up strange, rhythmic signals.</p><p style='background-color: #f1f5f9; padding: 10px; border-left: 4px solid #3b82f6; margin: 15px 0;'>ALERT: Unknown vessel approaching at warp speed.</p><p>We have to act fast before they lock onto our navigation systems.</p>";
        break;
      case "Mystery":
        templateTitle = "The Secret of the Old Mansion";
        templateContent =
          "<p>The floorboards creaked loudly as Detective [Name] stepped into the abandoned hallway. The air was thick with dust and the smell of ancient secrets.</p><p>A single, muddy footprint led towards the locked library door. Who could have been here? And more importantly... what were they looking for?</p>";
        break;
      case "Super Hero":
        templateTitle = "The Rise of [Hero Name]";
        templateContent =
          "<p>Metro City was in chaos. The sky had turned a strange shade of purple, and giant robots were marching down Main Street.</p><p>Just when all hope seemed lost, a figure swooped down from the clouds. It was [Hero Name]! With a flash of [color] energy, the first robot was sent flying.</p>";
        break;
      default:
        break;
    }

    editorRef.current.innerHTML = `<h1 style="font-size: 2.25rem; font-weight: 900; color: #1e293b; margin-bottom: 1rem; outline: none;">${templateTitle}</h1><div style="font-size: 1.125rem; color: #475569; line-height: 2; outline: none;">${templateContent}</div>`;
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".menu-container") &&
        !e.target.closest(".font-menu-container") &&
        !e.target.closest(".size-menu-container")
      ) {
        setActiveMenu(null);
        setShowFontMenu(false);
        setShowSizeMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#f8fafc] font-['Nunito'] flex flex-col h-[calc(100vh-150px)] min-h-[600px] overflow-hidden w-full relative border-b border-indigo-100/50">
      {/* TOP BAR - MENU OPTIONS */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between shrink-0">
        <div className="flex flex-col">
          <input
            type="text"
            className="text-xl font-black text-slate-800 outline-none bg-transparent hover:bg-slate-50 px-2 py-1 rounded-lg"
            defaultValue="Young Writer's Pad"
          />
          <div className="flex gap-1 ml-1 mt-1 menu-container relative">
            {[
              "File",
              "Edit",
              "View",
              "Insert",
              "Format",
              "Tools",
              "Export",
            ].map((item) => (
              <div key={item} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuClick(item);
                  }}
                  className={`text-[13px] font-bold px-3 py-1 rounded-md transition-colors ${activeMenu === item ? "bg-slate-200 text-slate-800" : "text-slate-500 hover:bg-slate-100"}`}
                >
                  {item}
                </button>
                {activeMenu === item &&
                  (item === "File" ? (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white border border-slate-200 shadow-xl rounded-lg p-5 w-[700px] z-[60] cursor-default"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="font-extrabold text-slate-800 text-lg">
                          New Story Templates
                        </div>
                      </div>
                      <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                        <div
                          onClick={() => handleTemplateClick("Blank document")}
                          className="flex flex-col items-center gap-2 cursor-pointer group min-w-[120px]"
                        >
                          <div className="w-[110px] h-[140px] bg-white border-2 border-slate-200 group-hover:border-indigo-500 rounded-lg flex items-center justify-center transition-colors shadow-sm group-hover:shadow-md">
                            <FilePlus className="w-10 h-10 text-slate-400 group-hover:text-indigo-500" />
                          </div>
                          <span className="text-[13px] font-bold text-slate-600 text-center">
                            Blank document
                          </span>
                        </div>
                        <div
                          onClick={() => handleTemplateClick("Fairy Tale")}
                          className="flex flex-col items-center gap-2 cursor-pointer group min-w-[120px]"
                        >
                          <div className="w-[110px] h-[140px] bg-indigo-50/50 border-2 border-slate-200 group-hover:border-indigo-500 rounded-lg p-3 transition-colors shadow-sm group-hover:shadow-md border-t-8 border-t-indigo-400">
                            <div className="h-3 bg-indigo-200 rounded w-3/4 mb-3 mt-1"></div>
                            <div className="h-2 bg-indigo-100 rounded w-full mb-1.5"></div>
                            <div className="h-2 bg-indigo-100 rounded w-full mb-1.5"></div>
                            <div className="h-2 bg-indigo-100 rounded w-5/6 mb-4"></div>
                            <div className="h-10 bg-indigo-100/50 rounded w-full mt-auto"></div>
                          </div>
                          <span className="text-[13px] font-bold text-slate-600 text-center">
                            Fairy Tale
                          </span>
                        </div>
                        <div
                          onClick={() =>
                            handleTemplateClick("Sci-Fi Adventure")
                          }
                          className="flex flex-col items-center gap-2 cursor-pointer group min-w-[120px]"
                        >
                          <div className="w-[110px] h-[140px] bg-emerald-50/50 border-2 border-slate-200 group-hover:border-emerald-500 rounded-lg p-3 transition-colors flex flex-col items-center shadow-sm group-hover:shadow-md border-t-8 border-t-emerald-400">
                            <div className="w-full h-12 bg-emerald-100 rounded mb-3 mt-1"></div>
                            <div className="h-2 bg-emerald-200 rounded w-full mb-1.5"></div>
                            <div className="h-2 bg-emerald-200 rounded w-full mb-1.5"></div>
                            <div className="h-2 bg-emerald-200 rounded w-3/4"></div>
                          </div>
                          <span className="text-[13px] font-bold text-slate-600 text-center">
                            Sci-Fi Adventure
                          </span>
                        </div>
                        <div
                          onClick={() => handleTemplateClick("Mystery")}
                          className="flex flex-col items-center gap-2 cursor-pointer group min-w-[120px]"
                        >
                          <div className="w-[110px] h-[140px] bg-rose-50/50 border-2 border-slate-200 group-hover:border-rose-500 rounded-lg p-3 transition-colors shadow-sm group-hover:shadow-md border-t-8 border-t-rose-400">
                            <div className="h-5 bg-rose-200 rounded w-full mb-4 mt-1"></div>
                            <div className="h-2 bg-rose-100 rounded w-full mb-2"></div>
                            <div className="h-2 bg-rose-100 rounded w-full mb-2"></div>
                            <div className="h-2 bg-rose-100 rounded w-4/5 mb-2"></div>
                            <div className="h-2 bg-rose-100 rounded w-3/4"></div>
                          </div>
                          <span className="text-[13px] font-bold text-slate-600 text-center">
                            Mystery
                          </span>
                        </div>
                        <div
                          onClick={() => handleTemplateClick("Super Hero")}
                          className="flex flex-col items-center gap-2 cursor-pointer group min-w-[120px]"
                        >
                          <div className="w-[110px] h-[140px] bg-amber-50/50 border-2 border-slate-200 group-hover:border-amber-500 rounded-lg p-3 transition-colors flex flex-col items-center shadow-sm group-hover:shadow-md border-t-8 border-t-amber-400">
                            <div className="w-10 h-10 rounded-full bg-amber-200 mb-3 mt-1"></div>
                            <div className="h-2 bg-amber-100 rounded w-full mb-2"></div>
                            <div className="h-2 bg-amber-100 rounded w-5/6"></div>
                          </div>
                          <span className="text-[13px] font-bold text-slate-600 text-center">
                            Super Hero
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 mt-2 pt-4 flex flex-col gap-1">
                        {["Open...", "Make a copy", "Rename", "Print"].map(
                          (subItem) => (
                            <div
                              key={subItem}
                              className="px-3 py-2 hover:bg-slate-50 text-[13px] font-bold text-slate-600 cursor-pointer rounded transition-colors"
                            >
                              {subItem}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white border border-slate-200 shadow-xl rounded-lg py-2 w-56 z-[60] cursor-default"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {MENUS[item]?.map((subItem) => (
                        <div
                          key={subItem}
                          onClick={() => {
                            if (item === "Edit") {
                              handleEditAction(subItem);
                            }
                          }}
                          className="px-4 py-2 hover:bg-slate-50 text-[13px] font-bold text-slate-600 cursor-pointer transition-colors flex justify-between items-center group"
                        >
                          <span>{subItem}</span>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
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

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />

      {/* FORMATTING TOOLBAR */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-2 shrink-0 flex-wrap overflow-visible shadow-sm z-10 w-full relative">
        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 relative font-menu-container">
          <button
            onClick={() => setShowFontMenu(!showFontMenu)}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-lg text-sm font-bold text-slate-700 truncate max-w-[140px]"
          >
            <span className="truncate">{activeFont.name.split(" ")[0]}</span>{" "}
            <ChevronDown className="w-3 h-3 shrink-0" />
          </button>

          {showFontMenu && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 shadow-xl rounded-lg py-2 w-56 z-[60]">
              <div className="px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 border-b border-slate-100">
                SELECT FONT
              </div>
              {FONTS.map((font) => (
                <button
                  key={font.name}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleFontChange(font);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${activeFont.name === font.name ? "text-indigo-600 bg-indigo-50/50" : "text-slate-700"}`}
                  style={{ fontFamily: font.family }}
                >
                  {font.name}
                  {activeFont.name === font.name && (
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-3 pl-1 relative size-menu-container">
          <button
            onClick={() => setShowSizeMenu(!showSizeMenu)}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-lg text-sm font-bold text-slate-700"
          >
            {SIZE_MAP[activeSize]} <ChevronDown className="w-3 h-3" />
          </button>
          {showSizeMenu && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 shadow-xl rounded-lg py-1 w-24 z-[60]">
              {Object.entries(SIZE_MAP).map(([size, label]) => (
                <button
                  key={size}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSizeChange(size);
                  }}
                  className={`w-full text-center px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${activeSize === size ? "text-indigo-600 font-bold bg-indigo-50/50" : "text-slate-700"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 pl-2">
          <EditorButton
            icon={Bold}
            title="Bold"
            active={activeFormats.bold}
            action={() => execCmd("bold")}
          />
          <EditorButton
            icon={Italic}
            title="Italic"
            active={activeFormats.italic}
            action={() => execCmd("italic")}
          />
          <EditorButton
            icon={Underline}
            title="Underline"
            active={activeFormats.underline}
            action={() => execCmd("underline")}
          />
          <EditorButton
            icon={Strikethrough}
            title="Strikethrough"
            active={activeFormats.strikethrough}
            action={() => execCmd("strikethrough")}
          />

          <div className="flex flex-col h-6 w-6 ml-1 cursor-pointer items-center justify-center hover:bg-slate-100 rounded-md relative overflow-hidden group">
            <Type className="w-4 h-4 text-slate-700" />
            <div className="w-4 h-1 bg-red-500 rounded-full mt-[2px]" />
            <input
              type="color"
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              onChange={(e) => execCmd("foreColor", e.target.value)}
            />
          </div>
          <div className="flex flex-col h-6 w-6 ml-1 cursor-pointer items-center justify-center hover:bg-slate-100 rounded-md relative overflow-hidden group">
            <PaintBucket className="w-4 h-4 text-slate-700" />
            <div className="w-4 h-1 bg-yellow-400 rounded-full mt-[2px]" />
            <input
              type="color"
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              onChange={(e) => execCmd("hiliteColor", e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 pl-2">
          <EditorButton
            icon={AlignLeft}
            title="Align Left"
            active={activeFormats.justifyLeft}
            action={() => execCmd("justifyLeft")}
          />
          <EditorButton
            icon={AlignCenter}
            title="Align Center"
            active={activeFormats.justifyCenter}
            action={() => execCmd("justifyCenter")}
          />
          <EditorButton
            icon={AlignRight}
            title="Align Right"
            active={activeFormats.justifyRight}
            action={() => execCmd("justifyRight")}
          />
          <EditorButton
            icon={AlignJustify}
            title="Justify"
            active={activeFormats.justifyFull}
            action={() => execCmd("justifyFull")}
          />
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 pl-2">
          <EditorButton
            icon={List}
            title="Bullet List"
            active={activeFormats.insertUnorderedList}
            action={() => execCmd("insertUnorderedList")}
          />
          <EditorButton
            icon={ListOrdered}
            title="Numbered List"
            active={activeFormats.insertOrderedList}
            action={() => execCmd("insertOrderedList")}
          />
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 pl-2">
          <EditorButton
            icon={Quote}
            title="Quote"
            action={() => execCmd("formatBlock", "BLOCKQUOTE")}
          />
          <EditorButton
            icon={ImagePlus}
            title="Insert Image"
            action={() => fileInputRef.current?.click()}
          />
          <EditorButton icon={Brush} title="Draw Shapes" />
          <EditorButton icon={Smile} title="Add Stickers" />
          <EditorButton icon={Sticker} title="Add Icons" />
          <EditorButton icon={TypeOutline} title="Add Illustrations" />
        </div>

        <div className="flex items-center gap-1 pl-2 ml-auto">
          <EditorButton
            icon={Undo}
            title="Undo"
            action={() => execCmd("undo")}
          />
          <EditorButton
            icon={Redo}
            title="Redo"
            action={() => execCmd("redo")}
          />
        </div>
      </div>

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR - STORY TOOLS */}
        <div className="w-[260px] bg-white border-r border-slate-200 flex flex-col overflow-y-auto shrink-0 z-0">
          <div className="p-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              Story Architecture
            </h3>
            <div className="space-y-1">
              <SidebarButton
                icon={FilePlus}
                label="Create Chapters"
                color="text-indigo-500"
                onClick={() =>
                  insertHTML(
                    "<br/><h2><strong>Chapter Title</strong></h2><p>Start writing here...</p><br/>",
                  )
                }
              />
              <SidebarButton
                icon={Users}
                label="Add Characters"
                color="text-rose-500"
                onClick={() =>
                  insertHTML(
                    "<br/><p><strong>[Character Name]:</strong> (Role/Description)</p><br/>",
                  )
                }
              />
              <SidebarButton
                icon={Image}
                label="Add Scenes"
                color="text-emerald-500"
                onClick={() =>
                  insertHTML(
                    "<br/><p><em>[Scene Setting: Time and Place]</em></p><br/>",
                  )
                }
              />
              <SidebarButton
                icon={MessageSquare}
                label="Dialogue Writer"
                color="text-blue-500"
                onClick={() =>
                  insertHTML(
                    '<br/><p><strong>[Name]:</strong> "Enter their dialogue here..."</p><br/>',
                  )
                }
              />
            </div>
          </div>

          <div className="px-4 py-2 border-t border-slate-100">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 mt-2">
              Active Characters
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => insertHTML("&nbsp;<strong>Oliver:</strong> ")}
                className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-100 text-rose-600 rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
              >
                Oliver
              </button>
              <button
                onClick={() => insertHTML("&nbsp;<strong>Professor:</strong> ")}
                className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-600 rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
              >
                Professor
              </button>
              <button
                onClick={() =>
                  insertHTML("<br/><p><strong>[New Character]:</strong> </p>")
                }
                className="px-3 py-1.5 border border-dashed border-slate-300 text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-50 cursor-pointer transition-colors"
              >
                + Add
              </button>
            </div>
          </div>

          <div className="px-4 py-2 mt-2 border-t border-slate-100 flex-1">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 mt-2">
              Chapters
            </h3>
            <div className="space-y-2">
              <div
                onClick={() =>
                  insertHTML(
                    "<br/><h2><strong>Chapter 1: The Discovery</strong></h2><br/>",
                  )
                }
                className="p-3 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 rounded-xl cursor-pointer transition-colors"
              >
                <div className="text-xs font-bold text-indigo-400 mb-1">
                  CHAPTER 1
                </div>
                <div className="text-sm font-black text-indigo-700">
                  The Discovery
                </div>
              </div>
              <div
                onClick={() =>
                  insertHTML(
                    "<br/><h2><strong>Chapter 2: Into the Unknown</strong></h2><br/>",
                  )
                }
                className="p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className="text-xs font-bold text-slate-400 mb-1">
                  CHAPTER 2
                </div>
                <div className="text-sm font-black text-slate-700">
                  Into the Unknown
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER EDITOR */}
        <div className="flex-1 overflow-y-auto bg-slate-100/50 p-8 flex justify-center custom-scrollbar">
          <div className="relative w-[816px]">
            {/* Page Backgrounds */}
            <div className="absolute inset-0 pointer-events-none flex flex-col gap-[32px] z-0">
              {Array.from({ length: pageCount }).map((_, i) => (
                <div
                  key={i}
                  className="w-[816px] h-[1056px] bg-white shadow-sm border border-slate-200 shrink-0 relative rounded-sm"
                >
                  <div className="absolute bottom-6 right-8 text-slate-300 font-bold text-xs font-mono">
                    PAGE {i + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Editable Content */}
            <div
              ref={editorRef}
              className="relative z-10 w-[816px] focus:outline-none"
              style={{
                fontFamily: activeFont.family,
                minHeight: `${pageCount * 1088}px`,
                padding: "96px",
                lineHeight: "32px",
              }}
              contentEditable
              onInput={checkPagination}
              onKeyUp={(e) => {
                checkFormats();
                checkPagination();
              }}
              onMouseUp={(e) => {
                checkFormats();
                checkPagination();
              }}
            >
              <h1 className="text-4xl font-black text-slate-800 mb-4 outline-none">
                The Discovery
              </h1>
              <p className="text-lg text-slate-600 outline-none">
                It was a dark and stormy night when Oliver first discovered the
                glowing orb in the attic. The dust danced in the pale moonlight
                as he reached out his trembling hand...
              </p>

              <div className="my-8 flex justify-center">
                <div
                  contentEditable={false}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-[400px] h-[300px] bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center flex-col gap-3 text-slate-400 hover:bg-slate-50 hover:border-indigo-300 transition-colors cursor-pointer group"
                >
                  <ImagePlus className="w-10 h-10 group-hover:text-indigo-500 transition-colors" />
                  <span className="font-bold">
                    Click to Insert Illustration
                  </span>
                </div>
              </div>

              <p className="text-lg text-slate-600 outline-none mt-8">
                The orb hummed with ancient energy, sending warm vibrations up
                his arm. Suddenly, a voice echoed in his mind, not heard, but
                felt.
              </p>

              <blockquote className="pl-8 border-l-4 border-indigo-500 my-6 text-xl font-bold text-indigo-800 italic outline-none">
                "You have awakened the long slumber, young one. The realms are
                yours to save or shatter."
              </blockquote>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR - BOOK TOOLS & EXPORT */}
        <div className="w-[280px] bg-white border-l border-slate-200 flex flex-col overflow-y-auto shrink-0 z-0">
          <div className="p-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              Book Building
            </h3>
            <div className="space-y-1">
              <SidebarButton
                icon={FilePlus}
                label="Add New Page Break"
                color="text-sky-500"
                onClick={() => {
                  insertHTML(
                    '<div contentEditable="false" style="page-break-after: always; height: 32px; width: 100%; border-bottom: 2px dashed #cbd5e1; margin: 32px 0; text-align: center;"><span style="position: relative; top: 22px; color: #94a3b8; font-size: 10px; font-weight: bold;">PAGE BREAK</span></div><p><br/></p>',
                  );
                  setTimeout(checkPagination, 50);
                }}
              />
              <SidebarButton
                icon={LayoutTemplate}
                label="Cover Page Creator"
                color="text-amber-500"
                onClick={() =>
                  insertHTML(
                    "<div style='text-align: center; padding: 60px 20px; border: 2px dashed #cbd5e1; border-radius: 12px; margin-bottom: 40px;'><h1 style='font-size: 3em; margin-bottom: 20px;'>[Your Book Title]</h1><h2 style='color: #64748b; font-size: 1.5em; margin-bottom: 40px;'>By [Your Name]</h2><p style='color: #94a3b8;'>[Drop Cover Image Here]</p></div><br/>",
                  )
                }
              />
              <SidebarButton
                icon={List}
                label="Table of Contents"
                color="text-slate-500"
                onClick={() =>
                  insertHTML(
                    "<br/><div style='background: #f8fafc; padding: 30px; border-radius: 12px; margin: 20px 0;'><h2><strong>Table of Contents</strong></h2><ul style='list-style-type: none; padding-left: 0; margin-top: 20px;'><li style='margin-bottom: 10px; display: flex; justify-content: space-between;'><span>Chapter 1: The Discovery</span><span style='color: #94a3b8;'>1</span></li><li style='margin-bottom: 10px; display: flex; justify-content: space-between;'><span>Chapter 2: Into the Unknown</span><span style='color: #94a3b8;'>12</span></li></ul></div><br/>",
                  )
                }
              />
              <SidebarButton
                icon={FileText}
                label="Page Numbers"
                color="text-slate-500"
                onClick={() =>
                  insertHTML(
                    "<br/><div style='text-align: center; margin: 40px 0; border-top: 1px dashed #cbd5e1; padding-top: 10px;'><p style='color: #94a3b8; font-size: 12px; font-weight: bold;'>— PAGE 1 —</p></div><br/>",
                  )
                }
              />
              <SidebarButton
                icon={UserCircle}
                label="Author Bio Section"
                color="text-violet-500"
                onClick={() =>
                  insertHTML(
                    "<br/><div style='background-color: #f4f0ff; padding: 30px; border-left: 6px solid #8b5cf6; border-radius: 0 12px 12px 0; margin: 40px 0;'><h3 style='color: #7c3aed; margin-bottom: 10px;'><strong>About the Author</strong></h3><p style='color: #4c1d95; line-height: 1.6;'>[Your Name] is a brilliant young author who loves writing stories about [favorite subjects]. When they aren't writing, they enjoy [favorite hobbies].</p></div><br/>",
                  )
                }
              />
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 mt-2">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              Preview & Finish
            </h3>
            <button className="w-full flex justify-center items-center gap-2 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors mb-4">
              <Eye className="w-4 h-4" /> Preview Book
            </button>

            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              Export Options
            </h3>
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
