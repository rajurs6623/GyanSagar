import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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
  CheckCircle,
  Mic,
  Languages,
  BookOpen,
  Palette,
} from "lucide-react";

const WRITING_THEMES = [
  {
    id: "mesh",
    name: "Premium Mesh",
    bg: "bg-mesh",
    paper: "bg-white shadow-sm border border-slate-200 rounded-sm",
    text: "text-slate-800",
    heading: "text-slate-900",
    quote: "border-indigo-500 text-slate-700",
    panelBg: "bg-white/80 backdrop-blur-2xl",
    panelBorder: "border-indigo-100/50",
  },
  {
    id: "gradient",
    name: "Soft Gradient",
    bg: "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100",
    paper:
      "bg-fuchsia-50/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(236,72,153,0.1)] rounded-3xl border border-white/60",
    text: "text-slate-800",
    heading: "text-slate-900",
    quote: "border-fuchsia-400 text-slate-700",
    panelBg: "bg-white/50 backdrop-blur-2xl",
    panelBorder: "border-white/40",
  },
  {
    id: "magical",
    name: "Magical Fantasy",
    bg: "bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-300",
    paper:
      "bg-[#f8f5ff]/90 backdrop-blur-2xl shadow-[0_0_40px_rgba(167,139,250,0.3)] rounded-3xl border border-indigo-200/50",
    text: "text-slate-800",
    heading: "text-slate-900",
    quote: "border-purple-400 text-slate-700",
    panelBg: "bg-purple-100/70 backdrop-blur-2xl",
    panelBorder: "border-purple-200/50",
  },
  {
    id: "cloud",
    name: "Minimal Cloud",
    bg: "bg-sky-100",
    paper: "bg-sky-50 shadow-sm border border-sky-200 rounded-[2rem]",
    text: "text-slate-800",
    heading: "text-slate-900",
    quote: "border-sky-400 text-slate-700",
    panelBg: "bg-sky-50/80 backdrop-blur-xl",
    panelBorder: "border-sky-200/50",
  },
  {
    id: "nature",
    name: "Nature Writer",
    bg: "bg-[#d1e8d8]",
    paper: "bg-[#e8f4ec] border-2 border-[#2f855a]/20 shadow-xl rounded-2xl",
    text: "text-slate-800",
    heading: "text-slate-900",
    quote: "border-[#2f855a]/40 text-slate-700",
    panelBg: "bg-[#d1ebd8]/90 backdrop-blur-xl",
    panelBorder: "border-[#a5d6b4]",
  },
];

const ILLUSTRATION_CATEGORIES = {
  "Sports & Games": [
    "Sports",
    "Cricket",
    "Football / Soccer",
    "Basketball",
    "Badminton",
    "Swimming",
    "Cycling",
    "Cricket Stars",
    "Football Stars",
    "Olympic Games",
    "Indoor Games",
    "Traditional Games",
    "My Own Images",
  ],
  "Vacation and Holiday": [
    "Summer Beach",
    "Mountain Trip",
    "Winter Vibes",
    "City Tour",
    "Camping",
    "Road Trip",
    "Festival Celebration",
    "My Own Images",
  ],
  Wallpapers: [
    "Nature Abstract",
    "Space Galaxy",
    "Modern Art",
    "Vintage Styles",
    "Landscapes",
    "Flowers & Garden",
    "Sunrise & Sunset",
    "My Own Images",
  ],
  "Young Author's": [
    "Fantasy Realm",
    "School Friends",
    "Magic Spells",
    "Pet Animals",
    "Fairy Tales",
    "Superheroes",
    "Village Life",
    "My Own Images",
  ],
  "Science & Technology": [
    "Future City",
    "Spacecraft",
    "Robots & AI",
    "Inventors",
    "Computers",
    "Lab Experiments",
    "Nature Science",
    "My Own Images",
  ],
  "Nature & Animals": [
    "Wild Animals",
    "Birds",
    "Ocean Life",
    "Insects",
    "Forests",
    "Mountains",
    "Deserts",
    "My Own Images",
  ],
  "Indian Culture": [
    "Festivals",
    "Classical Dance",
    "Traditional Food",
    "Historical Monuments",
    "Folk Art",
    "Yoga & Meditation",
    "My Own Images",
  ],
  "Write on Both Sides": [
    "Left Page Art",
    "Right Page Art",
    "Full Spread",
    "Border Frames",
    "Page Dividers",
    "My Own Images",
  ],
};

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

const SidebarButton = ({ icon: Icon, label, iconBg, iconColor, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-4 py-2.5 px-3 hover:bg-slate-50/80 rounded-xl transition-all group"
  >
    <div
      className={`p-2.5 rounded-xl border border-slate-100 ${iconBg} ${iconColor} shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform`}
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
  Insert: [
    "Image",
    "Related Images",
    "Table",
    "Drawing",
    "Link",
    "Special Characters",
  ],
  Format: ["Text", "Paragraph Styles", "Align & Indent", "Line Spacing"],
  Tools: [
    "Spelling & Grammar",
    "Word Count",
    "Dictionary",
    "Accessibility",
    "Voice Dictation",
    "Translator",
  ],
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
  const [showLeftSidebar, setShowLeftSidebar] = React.useState(false);
  const [showRightSidebarMobile, setShowRightSidebarMobile] =
    React.useState(false);
  const location = useLocation();
  const predefinedData = location.state?.storyData || null;
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeFont, setActiveFont] = useState(FONTS[0]);
  const [activeSize, setActiveSize] = useState("3");
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [showSizeMenu, setShowSizeMenu] = useState(false);
  const [activeFormats, setActiveFormats] = useState({});
  const [pageCount, setPageCount] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const containerRef = useRef(null);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  // New states for View menu
  const [zoom, setZoom] = useState(100);
  const [showOutline, setShowOutline] = useState(false);
  const [showRelatedWriters, setShowRelatedWriters] = useState(false);

  // New states for Insert menu
  const [showSpecialChars, setShowSpecialChars] = useState(false);
  const [showDrawing, setShowDrawing] = useState(false);

  // New states for Tools menu
  const [showWordCount, setShowWordCount] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [showGrammar, setShowGrammar] = useState(false);
  const [showDictation, setShowDictation] = useState(false);
  const [showTranslator, setShowTranslator] = useState(false);
  const [isDictating, setIsDictating] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [dictationLang, setDictationLang] = useState("en-IN");
  const [translateLang, setTranslateLang] = useState("hi");

  // New states for Export menu
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [downloadType, setDownloadType] = useState("");
  const [showPublishPopup, setShowPublishPopup] = useState(false);

  // New states for Formatting toolbar features
  const [showShapesPopup, setShowShapesPopup] = useState(false);
  const [showStickersPopup, setShowStickersPopup] = useState(false);
  const [showIconsPopup, setShowIconsPopup] = useState(false);
  const [showIllustrationsSidebar, setShowIllustrationsSidebar] =
    useState(false);

  // States for Illustrations Sidebar
  const [illusCategory, setIllusCategory] = useState("Sports & Games");
  const [illusSubcategory, setIllusSubcategory] = useState("Cricket");
  const [showIllusCategoryMenu, setShowIllusCategoryMenu] = useState(false);
  const [showIllusSubcategoryMenu, setShowIllusSubcategoryMenu] =
    useState(false);
  const [illusURLInput, setIllusURLInput] = useState("");
  const [illusSearchQuery, setIllusSearchQuery] = useState("");

  const [activeThemeId, setActiveThemeId] = useState("mesh");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const activeThemeObj =
    WRITING_THEMES.find((t) => t.id === activeThemeId) || WRITING_THEMES[0];

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

  // Set up Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const reco = new SpeechRecognition();
      reco.continuous = true;
      reco.interimResults = false;

      reco.onresult = (event) => {
        const lastResultIndex = event.results.length - 1;
        const text = event.results[lastResultIndex][0].transcript;
        if (editorRef.current) {
          editorRef.current.focus();
          document.execCommand("insertHTML", false, text + " ");
        }
      };

      reco.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsDictating(false);
      };

      reco.onend = () => {
        setIsDictating(false);
      };

      setRecognition(reco);
    }
  }, []);

  useEffect(() => {
    if (recognition) {
      if (isDictating) {
        try {
          recognition.lang = dictationLang;
          recognition.start();
        } catch (e) {}
      } else {
        try {
          recognition.stop();
        } catch (e) {}
      }
    }
  }, [isDictating, recognition, dictationLang]);

  const handleTranslate = async (targetLang) => {
    if (!editorRef.current) return;
    setIsTranslating(true);
    try {
      const text = editorRef.current.innerText;
      if (!text || text.trim() === "") {
        alert("There is no text to translate!");
        setIsTranslating(false);
        return;
      }

      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`,
      );
      const data = await res.json();

      const translatedText = data[0].map((item) => item[0]).join("");

      editorRef.current.innerHTML = `<h1 style="font-size: 2.25rem; font-weight: 900; color: #1e293b; margin-bottom: 1rem; outline: none;">${translatedText.split(" ").slice(0, 3).join(" ")}...</h1><p style="font-size: 1.125rem; color: #475569; line-height: 2; outline: none;">${translatedText}</p>`;

      setShowTranslator(false);
    } catch (error) {
      console.error("Translation failed:", error);
      alert("Uh oh! The translator couldn't connect right now.");
    } finally {
      setIsTranslating(false);
    }
  };

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

  const handleViewAction = (action) => {
    switch (action) {
      case "Print Layout":
        // Show related writers as requested
        setShowRelatedWriters(true);
        break;
      case "Outline":
        setShowOutline(!showOutline);
        break;
      case "Full Screen":
        if (!document.fullscreenElement) {
          containerRef.current?.requestFullscreen().catch((err) => {
            console.error(
              `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
            );
          });
        } else {
          document.exitFullscreen();
        }
        break;
      case "Zoom":
        setZoom(zoom === 100 ? 125 : zoom === 125 ? 150 : 100);
        break;
      default:
        break;
    }
    setActiveMenu(null);
  };

  const handleInsertAction = (action) => {
    switch (action) {
      case "Image":
        fileInputRef.current?.click();
        break;
      case "Table":
        insertHTML(
          '<br/><table border="1" style="width:100%; border-collapse: collapse; border-color: #cbd5e1; margin: 20px 0;"><tbody><tr><td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; background-color: #f8fafc;">Header 1</td><td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; background-color: #f8fafc;">Header 2</td></tr><tr><td style="padding: 10px; border: 1px solid #cbd5e1;">Data 1</td><td style="padding: 10px; border: 1px solid #cbd5e1;">Data 2</td></tr></tbody></table><br/>',
        );
        break;
      case "Drawing":
        setShowDrawing(true);
        break;
      case "Link":
        const url = prompt("Enter the link URL:", "https://");
        if (url) {
          execCmd("createLink", url);
        }
        break;
      case "Related Images":
        setShowIllustrationsSidebar(true);
        setShowRightSidebarMobile(true);
        setIllusCategory("Young Author's");
        setIllusSubcategory("Fantasy Realm");
        break;
      case "Special Characters":
        setShowSpecialChars(true);
        break;
      default:
        break;
    }
    setActiveMenu(null);
  };

  const handleFormatAction = (action) => {
    switch (action) {
      case "Text":
        execCmd("bold");
        break;
      case "Paragraph Styles":
        execCmd("formatBlock", "H2");
        break;
      case "Align & Indent":
        execCmd("justifyCenter"); // Example: toggles center alignment
        break;
      case "Line Spacing":
        insertHTML(
          `<div style="line-height: 2;">${window.getSelection().toString() || " "}</div>`,
        );
        break;
      default:
        break;
    }
    setActiveMenu(null);
  };

  const handleToolsAction = (action) => {
    switch (action) {
      case "Spelling & Grammar":
        setShowGrammar(true);
        break;
      case "Word Count":
        setShowWordCount(true);
        break;
      case "Dictionary":
        setShowDictionary(true);
        break;
      case "Accessibility":
        setShowAccessibility(true);
        break;
      case "Voice Dictation":
        setShowDictation(true);
        break;
      case "Translator":
        setShowTranslator(true);
        break;
      default:
        break;
    }
    setActiveMenu(null);
  };

  const handleExportAction = (action) => {
    switch (action) {
      case "Download as PDF":
        handleDownload("PDF");
        break;
      case "Download as Word":
        handleDownload("DOCX");
        break;
      case "Publish Online":
        setShowPublishPopup(true);
        break;
      default:
        break;
    }
    setActiveMenu(null);
  };

  const handleSaveDraft = () => {
    if (!editorRef.current) return;
    const content = editorRef.current.innerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Draft_${predefinedData?.basics?.title || "Untitled"}.html`;
    link.click();
    URL.revokeObjectURL(url);
    alert("Draft saved and downloaded successfully!");
  };

  const handleDownload = (type) => {
    if (!editorRef.current) return;
    const title = predefinedData?.basics?.title || "My_Masterpiece";
    const content = editorRef.current.innerHTML;

    if (type === "PDF") {
      window.print();
    } else if (type === "DOCX") {
      const header =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export</title></head><body>";
      const footer = "</body></html>";
      const source = header + content + footer;
      const blob = new Blob(["\ufeff", source], {
        type: "application/msword",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title}.doc`;
      link.click();
      URL.revokeObjectURL(url);
    } else {
      // Default to TXT draft
      const text = editorRef.current.innerText;
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title}_Draft.txt`;
      link.click();
      URL.revokeObjectURL(url);
    }
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
        !e.target.closest(".size-menu-container") &&
        !e.target.closest(".theme-menu-container")
      ) {
        setActiveMenu(null);
        setShowFontMenu(false);
        setShowSizeMenu(false);
        setShowThemeMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${activeThemeObj.bg} font-['Nunito'] flex flex-col min-h-[600px] overflow-hidden w-full relative border-b transition-colors duration-500 ${activeThemeObj.panelBorder} ${isFullscreen ? "h-screen" : "h-[calc(100vh-150px)]"}`}
    >
      {/* MOBILE TOOLBAR TOGGLE */}
      <div
        className={`md:hidden flex items-center gap-2 border-b px-3 py-2 shrink-0 transition-colors duration-500 ${activeThemeObj.panelBg} ${activeThemeObj.panelBorder}`}
      >
        <button
          onClick={() => setShowLeftSidebar(!showLeftSidebar)}
          className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
          title="Story Tools"
        >
          <MessageSquare className="w-4 h-4" />
        </button>
        <span className="text-sm font-black text-slate-700 flex-1 text-center truncate">
          Young Writer's Pad
        </span>
        <button
          onClick={() => setShowRightSidebarMobile(!showRightSidebarMobile)}
          className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
          title="Book Tools"
        >
          <BookOpen className="w-4 h-4" />
        </button>
      </div>
      {/* TOP BAR - MENU OPTIONS */}
      <div
        className={`border-b px-4 py-2 flex items-center justify-between shrink-0 transition-colors duration-500 relative z-50 ${activeThemeObj.panelBg} ${activeThemeObj.panelBorder}`}
      >
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
                            } else if (item === "View") {
                              handleViewAction(subItem);
                            } else if (item === "Insert") {
                              handleInsertAction(subItem);
                            } else if (item === "Format") {
                              handleFormatAction(subItem);
                            } else if (item === "Tools") {
                              handleToolsAction(subItem);
                            } else if (item === "Export") {
                              handleExportAction(subItem);
                            } else {
                              setActiveMenu(null);
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

        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveDraft}
            className="hidden sm:flex px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 items-center gap-2 text-sm transition-colors"
          >
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button
            onClick={handleSaveDraft}
            className="p-2 sm:hidden bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 flex items-center transition-colors"
            title="Save Draft"
          >
            <Save className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDownload("PDF")}
            className="hidden sm:flex px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 items-center gap-2 text-sm shadow-md transition-colors"
          >
            <Download className="w-4 h-4" /> Export
          </button>
          <button
            onClick={() => handleDownload("PDF")}
            className="p-2 sm:hidden bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 flex items-center shadow-md transition-colors"
            title="Export"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Quick Action Tools */}
          <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
            <button
              onClick={() => setShowDictation(true)}
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              title="Voice Dictation"
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowTranslator(true)}
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              title="Story Translator (Hindi/Telugu)"
            >
              <Languages className="w-5 h-5" />
            </button>
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
      <div
        className={`border-b px-2 md:px-4 py-2 md:py-3 flex items-center gap-1 md:gap-2 shrink-0 flex-wrap shadow-sm z-40 w-full relative transition-colors duration-500 ${activeThemeObj.panelBg} ${activeThemeObj.panelBorder}`}
      >
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

        <div className="flex items-center gap-1 border-r border-slate-200 pr-3 pl-1 relative theme-menu-container">
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-lg text-sm font-bold text-slate-700"
          >
            <Palette className="w-4 h-4" /> Theme
          </button>
          {showThemeMenu && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 shadow-xl rounded-lg py-2 w-56 z-[70] max-h-80 overflow-y-auto">
              <div className="px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 border-b border-slate-100">
                SCENE THEMES
              </div>
              {WRITING_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setActiveThemeId(theme.id);
                    setShowThemeMenu(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${activeThemeId === theme.id ? "text-indigo-600 bg-indigo-50/50" : "text-slate-700"}`}
                >
                  <span className="font-bold">{theme.name}</span>
                  {activeThemeId === theme.id && (
                    <CheckCircle className="w-4 h-4" />
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
          <EditorButton
            icon={Brush}
            title="Draw Shapes"
            action={() => setShowShapesPopup(true)}
          />
          <EditorButton
            icon={Smile}
            title="Add Stickers"
            action={() => setShowStickersPopup(true)}
          />
          <EditorButton
            icon={Sticker}
            title="Add Icons"
            action={() => setShowIconsPopup(true)}
          />
          <EditorButton
            icon={TypeOutline}
            title="Add Illustrations"
            action={() => setShowIllustrationsSidebar(true)}
          />
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
        {/* LEFT SIDEBAR - STORY TOOLS (hidden on mobile, shown via toggle) */}
        <div
          className={`${
            showLeftSidebar ? "flex" : "hidden"
          } md:flex w-[260px] border-r flex-col overflow-y-auto shrink-0 z-20 absolute md:relative top-0 bottom-0 left-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-all duration-500 ${activeThemeObj.panelBg} ${activeThemeObj.panelBorder}`}
        >
          <div className="p-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              Story Architecture
            </h3>
            <div className="space-y-1">
              <SidebarButton
                icon={FilePlus}
                label="Create Chapters"
                iconBg="bg-indigo-50"
                iconColor="text-indigo-600"
                onClick={() =>
                  insertHTML(
                    "<br/><h2><strong>Chapter Title</strong></h2><p>Start writing here...</p><br/>",
                  )
                }
              />
              <SidebarButton
                icon={Users}
                label="Add Characters"
                iconBg="bg-rose-50"
                iconColor="text-rose-600"
                onClick={() =>
                  insertHTML(
                    "<br/><p><strong>[Character Name]:</strong> (Role/Description)</p><br/>",
                  )
                }
              />
              <SidebarButton
                icon={Image}
                label="Add Scenes"
                iconBg="bg-emerald-50"
                iconColor="text-emerald-600"
                onClick={() =>
                  insertHTML(
                    "<br/><p><em>[Scene Setting: Time and Place]</em></p><br/>",
                  )
                }
              />
              <SidebarButton
                icon={MessageSquare}
                label="Dialogue Writer"
                iconBg="bg-blue-50"
                iconColor="text-blue-600"
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
              {predefinedData &&
              predefinedData.characters &&
              predefinedData.characters.length > 0 ? (
                predefinedData.characters.map((char, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      insertHTML(`&nbsp;<strong>${char.name}:</strong> `)
                    }
                    className={`px-3 py-1.5 ${idx % 2 === 0 ? "bg-rose-50 hover:bg-rose-100 border-rose-100 text-rose-600" : "bg-emerald-50 hover:bg-emerald-100 border-emerald-100 text-emerald-600"} border rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer`}
                  >
                    {char.name}
                  </button>
                ))
              ) : (
                <>
                  <button
                    onClick={() =>
                      insertHTML("&nbsp;<strong>Oliver:</strong> ")
                    }
                    className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-100 text-rose-600 rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    Oliver
                  </button>
                  <button
                    onClick={() =>
                      insertHTML("&nbsp;<strong>Professor:</strong> ")
                    }
                    className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-600 rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    Professor
                  </button>
                </>
              )}
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
              {predefinedData &&
              predefinedData.chapters &&
              predefinedData.chapters.length > 0 ? (
                predefinedData.chapters.map((chap, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      insertHTML(
                        `<br/><h2><strong>Chapter ${idx + 1}: ${chap.title}</strong></h2><br/>`,
                      )
                    }
                    className={`p-3 border rounded-xl cursor-pointer transition-colors ${idx === 0 ? "bg-indigo-50 hover:bg-indigo-100 border-indigo-100" : "border-slate-200 hover:bg-slate-50"}`}
                  >
                    <div
                      className={`text-xs font-bold mb-1 ${idx === 0 ? "text-indigo-400" : "text-slate-400"}`}
                    >
                      CHAPTER {idx + 1}
                    </div>
                    <div
                      className={`text-sm font-black ${idx === 0 ? "text-indigo-700" : "text-slate-700"}`}
                    >
                      {chap.title}
                    </div>
                  </div>
                ))
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
          {/* Close button on mobile */}
          <button
            className="md:hidden absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded-full text-slate-600 z-30"
            onClick={() => setShowLeftSidebar(false)}
          >
            ✕
          </button>
        </div>

        {/* CENTER EDITOR */}
        <div className="flex-1 overflow-y-auto bg-transparent p-4 md:p-8 flex justify-center custom-scrollbar">
          <div
            className="relative w-full max-w-[816px] transition-all duration-300 origin-top"
            style={{
              zoom: `${zoom}%`,
            }}
          >
            {/* Page Backgrounds */}
            <div className="absolute inset-0 pointer-events-none flex flex-col gap-[32px] z-0">
              {Array.from({ length: pageCount }).map((_, i) => (
                <div
                  key={i}
                  className={`w-full min-w-0 h-[1056px] shrink-0 relative transition-all duration-500 ${activeThemeObj.paper}`}
                >
                  <div
                    className={`absolute bottom-6 right-8 font-bold text-xs font-mono opacity-50 ${activeThemeObj.text}`}
                  >
                    PAGE {i + 1}
                  </div>
                  {showOutline && (
                    <div className="absolute inset-x-12 inset-y-12 border border-slate-200 border-dashed opacity-50 pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Editable Content */}
            <div
              ref={editorRef}
              className={`relative z-10 w-full focus:outline-none transition-colors duration-500 ${activeThemeObj.text}`}
              style={{
                fontFamily: activeFont.family,
                minHeight: `${pageCount * 1088}px`,
                padding: "96px",
                lineHeight: "32px",
              }}
              contentEditable
              suppressContentEditableWarning={true}
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
              <h1
                className={`text-4xl font-black mb-4 outline-none transition-colors duration-500 ${activeThemeObj.heading}`}
              >
                {predefinedData?.basics?.title || "The Discovery"}
              </h1>
              {predefinedData?.basics?.subtitle && (
                <h2
                  className={`text-2xl font-bold mb-4 outline-none opacity-80 ${activeThemeObj.text}`}
                >
                  {predefinedData.basics.subtitle}
                </h2>
              )}
              {predefinedData?.setting?.location && (
                <div
                  className={`text-sm font-bold uppercase tracking-widest mb-6 opacity-80 ${activeThemeObj.text}`}
                >
                  {predefinedData.setting.location}{" "}
                  {predefinedData.setting.timePeriod
                    ? `• ${predefinedData.setting.timePeriod}`
                    : ""}
                </div>
              )}
              <p className={`text-lg outline-none ${activeThemeObj.text}`}>
                {predefinedData?.plot?.beginning ||
                  "It was a dark and stormy night when Oliver first discovered the glowing orb in the attic. The dust danced in the pale moonlight as he reached out his trembling hand..."}
              </p>

              <div className="my-8 flex justify-center">
                <div
                  contentEditable={false}
                  suppressContentEditableWarning={true}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-[400px] h-[300px] bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center flex-col gap-3 text-slate-400 hover:bg-slate-50 hover:border-indigo-300 transition-colors cursor-pointer group"
                >
                  <ImagePlus className="w-10 h-10 group-hover:text-indigo-500 transition-colors" />
                  <span className="font-bold">
                    Click to Insert Illustration
                  </span>
                </div>
              </div>

              <p className={`text-lg outline-none mt-8 ${activeThemeObj.text}`}>
                The orb hummed with ancient energy, sending warm vibrations up
                his arm. Suddenly, a voice echoed in his mind, not heard, but
                felt.
              </p>

              <blockquote
                className={`pl-8 border-l-4 my-6 text-xl font-bold italic outline-none transition-colors duration-500 ${activeThemeObj.quote}`}
              >
                "You have awakened the long slumber, young one. The realms are
                yours to save or shatter."
              </blockquote>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR - CONDITIONAL: BOOK TOOLS OR ILLUSTRATIONS (hidden on mobile, shown via toggle) */}
        {showIllustrationsSidebar ? (
          <div
            className={`${showRightSidebarMobile || true ? "flex" : "hidden"} md:flex w-full md:w-[320px] border-l flex-col overflow-y-auto shrink-0 z-20 absolute md:relative top-0 bottom-0 right-0 shadow-[-4px_0_24px_rgba(0,0,0,0.02)] transition-all duration-500 ${activeThemeObj.panelBg} ${activeThemeObj.panelBorder}`}
          >
            <div
              className={`p-4 border-b flex justify-between items-center transition-colors duration-500 ${activeThemeObj.panelBg} brightness-95 ${activeThemeObj.panelBorder}`}
            >
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <TypeOutline className="w-5 h-5 text-indigo-600" />
                Add Illustrations
              </h3>
              <button
                onClick={() => setShowIllustrationsSidebar(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center font-bold transition-colors shadow-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto bg-white">
              {/* Custom Category Dropdown */}
              <div className="relative mb-2">
                <button
                  onClick={() => {
                    setShowIllusCategoryMenu(!showIllusCategoryMenu);
                    setShowIllusSubcategoryMenu(false);
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-slate-700 text-white rounded-t-xl hover:bg-slate-800 transition-colors font-bold text-sm shadow-sm"
                >
                  {illusCategory}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showIllusCategoryMenu && (
                  <div className="absolute top-12 left-0 w-full bg-white border border-slate-200 shadow-xl rounded-xl z-20 overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between text-slate-900 font-bold bg-slate-50/50">
                      {illusCategory}
                      <CheckCircle className="w-4 h-4 text-slate-400" />
                    </div>
                    {Object.keys(ILLUSTRATION_CATEGORIES).map((cat) => (
                      <div
                        key={cat}
                        onClick={() => {
                          setIllusCategory(cat);
                          setIllusSubcategory(ILLUSTRATION_CATEGORIES[cat][0]);
                          setShowIllusCategoryMenu(false);
                        }}
                        className={`px-4 py-3 text-sm cursor-pointer hover:bg-slate-50 flex items-center justify-between ${illusCategory === cat ? "text-indigo-600 bg-indigo-50/30" : "text-slate-600 hover:text-slate-900"}`}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Custom Subcategory Dropdown */}
              <div className="relative mb-6">
                <button
                  onClick={() => {
                    setShowIllusSubcategoryMenu(!showIllusSubcategoryMenu);
                    setShowIllusCategoryMenu(false);
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-slate-600 text-white rounded-b-xl hover:bg-slate-700 transition-colors font-bold text-sm shadow-sm border-t border-slate-500"
                >
                  {illusSubcategory}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showIllusSubcategoryMenu && (
                  <div className="absolute top-12 left-0 w-full bg-white border border-slate-200 shadow-xl rounded-xl z-10 overflow-hidden">
                    {ILLUSTRATION_CATEGORIES[illusCategory].map((sub) => (
                      <div
                        key={sub}
                        onClick={() => {
                          setIllusSubcategory(sub);
                          setShowIllusSubcategoryMenu(false);
                        }}
                        className={`px-4 py-3 text-sm cursor-pointer hover:bg-slate-50 flex items-center justify-between transition-colors ${illusSubcategory === sub ? "bg-orange-500 text-white font-bold" : "text-slate-700"}`}
                      >
                        {sub}
                        {illusSubcategory === sub && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SEARCH ILLUSTRATIONS */}
              <div className="mb-4">
                <div className="relative group">
                  <input
                    type="text"
                    value={illusSearchQuery}
                    onChange={(e) => setIllusSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && illusSearchQuery.trim()) {
                        setIllusSubcategory(illusSearchQuery.trim());
                      }
                    }}
                    placeholder="Search for related images..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-400 font-medium text-slate-700 transition-all group-hover:bg-white group-hover:shadow-md"
                  />
                  <PenTool className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
                </div>
                {illusSearchQuery ? (
                  <p className="text-[10px] font-bold text-indigo-500 mt-2 px-1">
                    🔍 Press Enter to find images for "{illusSearchQuery}"
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-3 px-1">
                    {["Fantasy", "Nature", "Space", "Magic", "Adventure"].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setIllusSubcategory(tag)}
                          className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold px-2 py-1 rounded-lg transition-all"
                        >
                          #{tag}
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>

              {/* === MY OWN IMAGES mode === */}
              {illusSubcategory === "My Own Images" ? (
                <div className="space-y-4">
                  {/* Upload from Device */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-indigo-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-indigo-50 hover:border-indigo-500 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                      <ImagePlus className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-slate-700 text-sm">
                        Upload from Device
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Click to browse your files
                      </p>
                    </div>
                  </div>

                  {/* Paste URL */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1">
                      🔗 Paste Image URL
                    </p>
                    <input
                      type="text"
                      value={illusURLInput}
                      onChange={(e) => setIllusURLInput(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 font-medium text-slate-700 bg-white mb-2"
                    />
                    {illusURLInput && (
                      <img
                        src={illusURLInput}
                        alt="Preview"
                        className="w-full h-28 object-cover rounded-xl mb-2 border border-slate-200"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    )}
                    <button
                      onClick={() => {
                        if (!illusURLInput.trim()) return;
                        insertHTML(
                          `<br/><div contenteditable="false" style="display: flex; justify-content: center; margin: 20px 0;"><img src="${illusURLInput.trim()}" style="max-width: 80%; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);" alt="Image" /></div><p><br/></p>`,
                        );
                        setIllusURLInput("");
                        setShowIllustrationsSidebar(false);
                      }}
                      disabled={!illusURLInput.trim()}
                      className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Insert Image
                    </button>
                  </div>

                  {/* Google Images hint */}
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                    <p className="text-xs font-bold text-amber-800 mb-1">
                      💡 How to get an image URL
                    </p>
                    <p className="text-xs text-amber-700">
                      Right-click any image on Google → "Copy image address" →
                      Paste above
                    </p>
                  </div>
                </div>
              ) : (
                /* === REGULAR PHOTO GRID === */
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        onClick={() => {
                          insertHTML(
                            `<br/><div contenteditable="false" style="display: flex; justify-content: center; margin: 20px 0;"><img src="https://picsum.photos/seed/${illusSubcategory.replace(/\s+/g, "")}${i}/400/300" style="max-width: 80%; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);" alt="Illustration" /></div><p><br/></p>`,
                          );
                          setShowIllustrationsSidebar(false);
                        }}
                        className="aspect-square bg-slate-200 rounded-xl overflow-hidden cursor-pointer ring-1 ring-slate-200 hover:ring-4 hover:ring-indigo-400 transition-all group relative shadow-sm"
                      >
                        <img
                          src={`https://picsum.photos/seed/${illusSubcategory.replace(/\s+/g, "")}${i}/200/200`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          alt={illusSubcategory}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent pt-6 pb-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white text-[10px] font-bold text-center uppercase tracking-wider">
                            + Insert
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-200 pt-3">
                    <p className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-1">
                      🔗 Or paste an image URL
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={illusURLInput}
                        onChange={(e) => setIllusURLInput(e.target.value)}
                        placeholder="https://..."
                        className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 bg-white"
                      />
                      <button
                        onClick={() => {
                          if (!illusURLInput.trim()) return;
                          insertHTML(
                            `<br/><div contenteditable="false" style="display: flex; justify-content: center; margin: 20px 0;"><img src="${illusURLInput.trim()}" style="max-width: 80%; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);" alt="Image" /></div><p><br/></p>`,
                          );
                          setIllusURLInput("");
                          setShowIllustrationsSidebar(false);
                        }}
                        disabled={!illusURLInput.trim()}
                        className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors disabled:opacity-40"
                      >
                        Insert
                      </button>
                    </div>

                    {/* Upload from device shortcut */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full mt-2 flex items-center justify-center gap-2 py-2 border border-dashed border-slate-300 text-slate-500 hover:bg-slate-50 rounded-xl text-xs font-bold transition-colors"
                    >
                      <ImagePlus className="w-3.5 h-3.5" /> Upload from Device
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div
            className={`${showRightSidebarMobile ? "flex" : "hidden"} md:flex w-full md:w-[280px] border-l flex-col overflow-y-auto shrink-0 z-20 absolute md:relative top-0 bottom-0 right-0 shadow-[-4px_0_24px_rgba(0,0,0,0.02)] transition-all duration-500 ${activeThemeObj.panelBg} ${activeThemeObj.panelBorder}`}
          >
            <div className="p-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                Book Building
              </h3>
              <div className="space-y-1">
                <SidebarButton
                  icon={FilePlus}
                  label="Add New Page Break"
                  iconBg="bg-sky-50"
                  iconColor="text-sky-600"
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
                  iconBg="bg-amber-50"
                  iconColor="text-amber-600"
                  onClick={() =>
                    insertHTML(
                      "<div style='text-align: center; padding: 60px 20px; border: 2px dashed #cbd5e1; border-radius: 12px; margin-bottom: 40px;'><h1 style='font-size: 3em; margin-bottom: 20px;'>[Your Book Title]</h1><h2 style='color: #64748b; font-size: 1.5em; margin-bottom: 40px;'>By [Your Name]</h2><p style='color: #94a3b8;'>[Drop Cover Image Here]</p></div><br/>",
                    )
                  }
                />
                <SidebarButton
                  icon={List}
                  label="Table of Contents"
                  iconBg="bg-slate-50"
                  iconColor="text-slate-600"
                  onClick={() =>
                    insertHTML(
                      "<br/><div style='background: #f8fafc; padding: 30px; border-radius: 12px; margin: 20px 0;'><h2><strong>Table of Contents</strong></h2><ul style='list-style-type: none; padding-left: 0; margin-top: 20px;'><li style='margin-bottom: 10px; display: flex; justify-content: space-between;'><span>Chapter 1: The Discovery</span><span style='color: #94a3b8;'>1</span></li><li style='margin-bottom: 10px; display: flex; justify-content: space-between;'><span>Chapter 2: Into the Unknown</span><span style='color: #94a3b8;'>12</span></li></ul></div><br/>",
                    )
                  }
                />
                <SidebarButton
                  icon={FileText}
                  label="Page Numbers"
                  iconBg="bg-indigo-50"
                  iconColor="text-indigo-600"
                  onClick={() =>
                    insertHTML(
                      "<br/><div style='text-align: center; margin: 40px 0; border-top: 1px dashed #cbd5e1; padding-top: 10px;'><p style='color: #94a3b8; font-size: 12px; font-weight: bold;'>— PAGE 1 —</p></div><br/>",
                    )
                  }
                />
                <SidebarButton
                  icon={UserCircle}
                  label="Author Bio Section"
                  iconBg="bg-violet-50"
                  iconColor="text-violet-600"
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
              <button
                onClick={() => setShowPreviewModal(true)}
                className="w-full flex justify-center items-center gap-3 py-3.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all mb-4 shadow-lg hover:shadow-indigo-200 group"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />{" "}
                Preview Book
              </button>

              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                Export Options
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => handleDownload("PDF")}
                  className="p-4 border-2 border-slate-100 rounded-2xl flex flex-col justify-center items-center gap-2 hover:border-indigo-400 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 transition-all cursor-pointer font-black text-[11px]"
                >
                  <div className="p-2 bg-red-50 text-red-500 rounded-lg group-hover:bg-red-100">
                    <FileText className="w-5 h-5" />
                  </div>
                  PDF
                </div>
                <div
                  onClick={() => handleDownload("DOCX")}
                  className="p-4 border-2 border-slate-100 rounded-2xl flex flex-col justify-center items-center gap-2 hover:border-indigo-400 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 transition-all cursor-pointer font-black text-[11px]"
                >
                  <div className="p-2 bg-blue-50 text-blue-500 rounded-lg group-hover:bg-blue-100">
                    <FileText className="w-5 h-5" />
                  </div>
                  DOCX
                </div>
                <div
                  onClick={() => handleDownload("TXT")}
                  className="p-4 border-2 border-slate-100 rounded-2xl flex flex-col justify-center items-center gap-2 hover:border-indigo-400 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 transition-all cursor-pointer font-black text-[11px]"
                >
                  <div className="p-2 bg-emerald-50 text-emerald-500 rounded-lg group-hover:bg-emerald-100">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  EPUB
                </div>
                <div
                  onClick={() => setShowPublishPopup(true)}
                  className="p-4 bg-indigo-50 border-2 border-indigo-100 rounded-2xl flex flex-col justify-center items-center gap-2 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-indigo-600 transition-all cursor-pointer font-black text-[11px]"
                >
                  <div className="p-2 bg-white text-indigo-600 rounded-lg">
                    <History className="w-5 h-5" />
                  </div>
                  PUBLISH
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Writers Popup (triggered from View -> Print Layout) */}
      {showRelatedWriters && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                <Users className="w-7 h-7 text-indigo-600" /> Related Writers
              </h2>
              <button
                onClick={() => setShowRelatedWriters(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50">
              <p className="text-slate-500 font-medium mb-6">
                Connect with other young authors writing similar stories in the
                "Fantasy" genre!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Aisha R.",
                    genre: "Fantasy & Mystery",
                    matching: "98%",
                    status: "Writing chapter 4",
                    avatar:
                      "https://i.pinimg.com/736x/08/9c/ce/089cce5e2c9767be9c27d8e6511d8936.jpg",
                  },
                  {
                    name: "Rahul T.",
                    genre: "Sci-Fi & Fantasy",
                    matching: "85%",
                    status: "Editing cover",
                    avatar:
                      "https://i.pinimg.com/736x/f2/19/94/f2199421fba96a19a66384348b4a39d1.jpg",
                  },
                  {
                    name: "Priya M.",
                    genre: "Mystery",
                    matching: "74%",
                    status: "Just started",
                    avatar:
                      "https://i.pinimg.com/736x/9b/86/ad/9b86adeaec5de7440d146c3fcf694f6e.jpg",
                  },
                  {
                    name: "Sam S.",
                    genre: "Adventure",
                    matching: "62%",
                    status: "Publishing soon!",
                    avatar:
                      "https://i.pinimg.com/736x/23/c5/35/23c5356c78b67b5cd2db8a7b43698a10.jpg",
                  },
                ].map((writer, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
                  >
                    <img
                      src={writer.avatar}
                      alt={writer.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800">
                        {writer.name}
                      </h4>
                      <p className="text-xs text-indigo-600 font-bold">
                        {writer.matching} Match
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {writer.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-white border-t border-slate-100 text-center">
              <button
                onClick={() => setShowRelatedWriters(false)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm"
              >
                Continue Writing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Special Characters Popup */}
      {showSpecialChars && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800">
                Special Characters
              </h2>
              <button
                onClick={() => setShowSpecialChars(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 grid grid-cols-6 gap-2 bg-slate-50/50 max-h-[300px] overflow-y-auto custom-scrollbar">
              {[
                "©",
                "®",
                "™",
                "°",
                "•",
                "·",
                "…",
                "¢",
                "£",
                "€",
                "¥",
                "—",
                "–",
                "“",
                "”",
                "‘",
                "’",
                "«",
                "»",
                "¿",
                "¡",
                "¶",
                "§",
                "†",
                "‡",
                "±",
                "×",
                "÷",
                "∞",
                "≈",
                "≠",
                "✓",
                "✔",
                "✗",
                "✘",
                "★",
                "☆",
                "♥",
                "♡",
                "♦",
                "♢",
                "♣",
                "♧",
                "♠",
                "♤",
              ].map((char) => (
                <button
                  key={char}
                  onClick={() => {
                    insertHTML(char);
                    setShowSpecialChars(false);
                  }}
                  className="w-10 h-10 bg-white border border-slate-200 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 flex items-center justify-center text-lg shadow-sm transition-all"
                >
                  {char}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Drawing Studio Popup */}
      {showDrawing && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Brush className="w-6 h-6 text-indigo-600" /> Drawing Canvas
              </h2>
              <button
                onClick={() => setShowDrawing(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 flex flex-col items-center justify-center min-h-[300px] text-center">
              <div className="w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-4 border-4 border-indigo-50">
                <Brush className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">
                Draw Your Story
              </h3>
              <p className="text-slate-500 mb-6 max-w-sm">
                Unleash your creativity! The interactive drawing board feature
                is specially crafted for young illustrators like you, and will
                be fully unlocked soon.
              </p>
              <button
                onClick={() => setShowDrawing(false)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm"
              >
                Back to Writing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spelling & Grammar Popup */}
      {showGrammar && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <SpellCheck className="w-6 h-6 text-indigo-600" /> Grammar Check
              </h2>
              <button
                onClick={() => setShowGrammar(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-50">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">
                Looking good!
              </h3>
              <p className="text-slate-500 mb-4">
                No major spelling or grammar errors were found in your story so
                far. Keep up the great writing!
              </p>
              <button
                onClick={() => setShowGrammar(false)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm w-full"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Word Count Popup */}
      {showWordCount && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <FileText className="w-6 h-6 text-indigo-600" /> Word Count
              </h2>
              <button
                onClick={() => setShowWordCount(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-3xl font-black text-indigo-600 mb-1">
                  {editorRef.current
                    ? editorRef.current.innerText
                        .trim()
                        .split(/\s+/)
                        .filter((w) => w.length > 0).length
                    : 0}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Words
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-3xl font-black text-indigo-600 mb-1">
                  {editorRef.current ? editorRef.current.innerText.length : 0}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Characters
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center col-span-2">
                <div className="text-3xl font-black text-indigo-600 mb-1">
                  {pageCount}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Pages
                </div>
              </div>
            </div>
            <div className="p-4 bg-white border-t border-slate-100 text-center">
              <button
                onClick={() => setShowWordCount(false)}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors shadow-sm w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dictionary Popup */}
      {showDictionary && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-indigo-600" /> Dictionary
              </h2>
              <button
                onClick={() => setShowDictionary(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search for a word..."
                  className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-indigo-500 outline-none font-medium text-slate-700 pl-10"
                />
                <BookOpen className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-slate-500 italic text-sm text-center">
                  Select a word in your story or type it above to see its
                  definition, synonyms, and how to use it!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Popup */}
      {showAccessibility && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" /> Accessibility
              </h2>
              <button
                onClick={() => setShowAccessibility(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 space-y-3">
              {[
                {
                  label: "High Contrast Mode",
                  desc: "Make text easier to read",
                },
                { label: "Large Menu Icons", desc: "Increase size of buttons" },
                {
                  label: "Screen Reader Support",
                  desc: "Enable spoken feedback",
                },
                {
                  label: "Focus Highlighting",
                  desc: "Outline active elements",
                },
              ].map((setting, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-indigo-300 transition-colors"
                >
                  <div>
                    <h4 className="font-bold text-slate-800">
                      {setting.label}
                    </h4>
                    <p className="text-xs text-slate-500">{setting.desc}</p>
                  </div>
                  <div className="w-10 h-6 bg-slate-200 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 shadow-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Download Popup */}
      {showDownloadPopup && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Download className="w-6 h-6 text-indigo-600" /> Downloading...
              </h2>
              <button
                onClick={() => setShowDownloadPopup(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 flex flex-col items-center justify-center min-h-[250px] text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-4 border-4 border-indigo-50 animate-bounce">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">
                Exporting your masterpiece to {downloadType}!
              </h3>
              <p className="text-slate-500 mb-6 max-w-sm">
                Compiling all the pages and illustrations of "
                {activeFormats.title || "The Discovery"}". Formatting your story
                to look just like a real book...
              </p>
              <button
                onClick={() => setShowDownloadPopup(false)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm w-full"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Publish Popup */}
      {showPublishPopup && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-indigo-600" /> Publish Online
              </h2>
              <button
                onClick={() => setShowPublishPopup(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 text-center">
              <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-amber-50">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">
                Congratulations!
              </h3>
              <p className="text-slate-600 mb-6">
                Your story will be submitted to the Nation's Young Authors
                public library for the world to see! Choose when you want it to
                go live:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="py-3 px-4 border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  Publish Now
                </button>
                <button className="py-3 px-4 border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  Schedule Later
                </button>
              </div>
              <button
                onClick={() => setShowPublishPopup(false)}
                className="w-full py-3 bg-slate-200 text-slate-700 hover:bg-slate-300 font-bold rounded-xl transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dictation Popup */}
      {showDictation && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Mic className="w-6 h-6 text-indigo-600" /> Voice Dictation
              </h2>
              <button
                onClick={() => {
                  setShowDictation(false);
                  setIsDictating(false);
                }}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 text-center">
              <button
                onClick={() => setIsDictating(!isDictating)}
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 shadow-md transition-all ${
                  isDictating
                    ? "bg-red-100 border-red-200 text-red-500 animate-pulse"
                    : "bg-indigo-100 border-indigo-200 text-indigo-500 hover:bg-indigo-200"
                }`}
              >
                <Mic className="w-12 h-12" />
              </button>
              <h3 className="font-bold text-slate-800 text-xl mb-3">
                {isDictating ? "Listening..." : "Ready to listen"}
              </h3>

              {!isDictating && (
                <div className="flex justify-center gap-2 mb-4">
                  <select
                    value={dictationLang}
                    onChange={(e) => setDictationLang(e.target.value)}
                    className="p-2 border border-slate-200 rounded-lg text-sm text-slate-700 font-bold outline-none focus:border-indigo-400 bg-white"
                  >
                    <option value="en-IN">English (India)</option>
                    <option value="hi-IN">Hindi (हिंदी)</option>
                    <option value="te-IN">Telugu (తెలుగు)</option>
                  </select>
                </div>
              )}

              <p className="text-slate-600 mb-6 font-medium">
                {isDictating
                  ? "Speak into your microphone and we will type your story for you."
                  : "Choose your language and click the microphone to speak your story aloud."}
              </p>
              <button
                onClick={() => {
                  setShowDictation(false);
                  setIsDictating(false);
                }}
                className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl transition-colors shadow-sm w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Translator Popup */}
      {showTranslator && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Languages className="w-6 h-6 text-indigo-600" /> Story
                Translator
              </h2>
              <button
                onClick={() => setShowTranslator(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-50">
                <Languages className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">
                Translate your story!
              </h3>
              <p className="text-slate-500 mb-6 font-medium text-sm">
                Choose a language below to translate your masterpiece so writers
                and readers from all over India can enjoy it. Our system will
                auto-detect your current language.
              </p>

              <div className="flex flex-col items-center gap-4 mb-6 w-full px-4">
                <select
                  value={translateLang}
                  onChange={(e) => setTranslateLang(e.target.value)}
                  className="w-full p-3 border-2 border-slate-200 rounded-xl text-sm text-slate-700 font-bold outline-none focus:border-indigo-400 bg-white"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi (हिंदी)</option>
                  <option value="te">Telugu (తెలుగు)</option>
                </select>

                <button
                  onClick={() => handleTranslate(translateLang)}
                  disabled={isTranslating}
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm disabled:opacity-50"
                >
                  {isTranslating ? "Translating..." : "Translate Now"}
                </button>
              </div>

              <button
                onClick={() => setShowTranslator(false)}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Shapes Popup */}
      {showShapesPopup && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Brush className="w-6 h-6 text-indigo-600" /> Draw Shapes
              </h2>
              <button
                onClick={() => setShowShapesPopup(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 text-center">
              <div className="grid grid-cols-4 gap-3 mb-6">
                {["◯", "△", "◻", "⭐", "☁", "⚡", "🌙", "♥"].map((shape, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      insertHTML(
                        `<span style="font-size: 2em; color: #6366f1;">${shape}</span>`,
                      );
                      setShowShapesPopup(false);
                    }}
                    className="h-14 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 flex items-center justify-center text-2xl shadow-sm transition-all"
                  >
                    {shape}
                  </button>
                ))}
              </div>
              <p className="text-slate-500 mb-4 text-sm font-medium">
                Add magical floating shapes to your story pages to enhance your
                world building!
              </p>
              <button
                onClick={() => setShowShapesPopup(false)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm w-full"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stickers Popup */}
      {showStickersPopup && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Smile className="w-6 h-6 text-indigo-600" /> Story Stickers
              </h2>
              <button
                onClick={() => setShowStickersPopup(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 text-center">
              <div className="grid grid-cols-4 gap-3 mb-6">
                {["🚀", "🐉", "🏰", "🔮", "🦄", "👽", "🏴‍☠️", "🐾"].map(
                  (sticker, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        insertHTML(
                          `<span style="font-size: 3em;">${sticker}</span>`,
                        );
                        setShowStickersPopup(false);
                      }}
                      className="h-16 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 flex items-center justify-center text-3xl shadow-sm transition-all"
                    >
                      {sticker}
                    </button>
                  ),
                )}
              </div>
              <p className="text-slate-500 mb-4 text-sm font-medium">
                Drop fun emoji stickers into your manuscript to show character
                reactions or scene settings!
              </p>
              <button
                onClick={() => setShowStickersPopup(false)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm w-full"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Icons Popup */}
      {showIconsPopup && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Sticker className="w-6 h-6 text-indigo-600" /> Book Icons
              </h2>
              <button
                onClick={() => setShowIconsPopup(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 text-center">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["📜", "🖋️", "📖", "📗", "📚", "🔖"].map((icon, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      insertHTML(
                        `<span style="font-size: 2.5em;">${icon}</span>`,
                      );
                      setShowIconsPopup(false);
                    }}
                    className="h-16 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 flex items-center justify-center text-3xl shadow-sm transition-all"
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <p className="text-slate-500 mb-4 text-sm font-medium">
                Use publishing icons to mark chapter breaks, footnotes, or
                author notes!
              </p>
              <button
                onClick={() => setShowIconsPopup(false)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm w-full"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
              .custom-scrollbar::-webkit-scrollbar { width: 6px; }
              .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
              .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
            `}</style>
      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[9999] flex items-center justify-center p-0 md:p-4 lg:p-10 transition-all duration-500 animate-in fade-in">
          <div className="bg-white w-full h-full md:rounded-[40px] md:max-w-6xl md:max-h-[92vh] shadow-2xl overflow-hidden flex flex-col border border-white/20 relative">
            {/* Modal Header */}
            <div className="p-5 md:p-8 border-b border-slate-100 flex justify-between items-center bg-indigo-50/30 backdrop-blur-md">
              <div className="flex items-center gap-3 md:gap-4 text-left">
                <div className="p-2.5 md:p-3 bg-indigo-600 text-white rounded-xl md:rounded-2xl shadow-lg shadow-indigo-100 hidden xs:flex">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-2xl font-black text-slate-800 leading-none truncate max-w-[150px] sm:max-w-none">
                    Previewing: {predefinedData?.basics?.title || "My Story"}
                  </h2>
                  <p className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest mt-1 md:mt-2">
                    {pageCount} {pageCount === 1 ? "Page" : "Pages"} • Reader
                    Mode
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  onClick={() => handleDownload("PDF")}
                  className="hidden sm:flex px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md items-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </button>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-all hover:rotate-90"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 md:p-12 bg-[#f1f5f9] custom-scrollbar flex flex-col items-center">
              <div
                className="w-full max-w-[850px] bg-white shadow-xl p-8 md:p-20 rounded-sm min-h-screen border border-slate-200"
                style={{
                  fontFamily: activeFont.family,
                  lineHeight: "1.8",
                }}
              >
                {/* Render Editor Content */}
                <div
                  className="prose prose-slate prose-lg max-w-none text-slate-700"
                  dangerouslySetInnerHTML={{
                    __html: editorRef.current?.innerHTML || "",
                  }}
                />
              </div>

              {/* Mobile download button - sticky at bottom of content or footer */}
              <div className="sm:hidden w-full mt-6 mb-4 px-4">
                <button
                  onClick={() => handleDownload("PDF")}
                  className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-indigo-200"
                >
                  <Download className="w-5 h-5" /> Download My Story
                </button>
              </div>
            </div>

            <div className="hidden sm:flex p-6 bg-white border-t border-slate-100 justify-center items-center gap-2 text-slate-400 font-bold text-sm italic">
              <Eye className="w-4 h-4" /> You're seeing exactly how your story
              will look to readers!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoungWritersPad;
