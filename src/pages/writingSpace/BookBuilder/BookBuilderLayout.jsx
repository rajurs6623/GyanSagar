import React, { useState } from "react";
import SidebarNavigation from "./SidebarNavigation";
import BookInfoPanel from "./BookInfoPanel";
import ChapterManager from "./ChapterManager";
import WritingEditor from "./WritingEditor";
import IllustrationBoard from "./IllustrationBoard";
import StoryElementsPanel from "./StoryElementsPanel";
import BookPreview from "./BookPreview";
import PublishPanel from "./PublishPanel";
import { Bell, Eye, UploadCloud } from "lucide-react";

export default function BookBuilderLayout() {
  const [activeTab, setActiveTab] = useState("editor");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [bookInfo, setBookInfo] = useState({
    title: "My Masterpiece",
    author: "Young Writer",
    synopsis: "",
    coverImage:
      "https://i.pinimg.com/1200x/fd/81/11/fd81113c84008c62ba0075652ad25923.jpg",
  });
  const [chapters, setChapters] = useState([
    { id: "1", title: "The Beginning of Everything", content: "" },
    { id: "2", title: "A New Discovery", content: "" },
    { id: "3", title: "The Mysterious Artifact", content: "" },
  ]);
  const [activeChapterId, setActiveChapterId] = useState("1");

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return <BookInfoPanel bookInfo={bookInfo} setBookInfo={setBookInfo} />;
      case "chapters":
        return <ChapterManager chapters={chapters} setChapters={setChapters} setActiveTab={setActiveTab} setActiveChapterId={setActiveChapterId} />;
      case "editor":
        return <WritingEditor chapters={chapters} setChapters={setChapters} activeChapterId={activeChapterId} />;
      case "characters":
        return <StoryElementsPanel />;
      case "illustrations":
        return <IllustrationBoard />;
      case "preview":
        return <BookPreview bookInfo={bookInfo} />;
      case "publish":
        return <PublishPanel />;
      default:
        return <WritingEditor />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <SidebarNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 relative">
        {/* Top Header */}
        <header className="h-[72px] bg-white border-b border-slate-200/80 flex items-center justify-between px-6 shadow-[0_4px_20px_-15px_rgba(0,0,0,0.1)] shrink-0 z-10 relative">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black text-slate-800 tracking-tight">
              {bookInfo.title || "Untitled Book"}
            </h1>
            <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest hidden sm:inline-block">
              Draft
            </span>
            <span className="text-sm font-semibold text-slate-400 hidden md:inline-block">
              By {bookInfo.author || "Unknown"}
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden lg:flex items-center gap-2 mr-2 text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Auto-saved
            </div>

            <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-6 w-px bg-slate-200 hidden sm:block" />

            <button
              onClick={() => setActiveTab("preview")}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-bold text-sm transition-colors"
            >
              <Eye className="w-4 h-4" />{" "}
              <span className="hidden sm:inline">Preview</span>
            </button>
            <button
              onClick={() => setActiveTab("publish")}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md shadow-indigo-600/20 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <UploadCloud className="w-4 h-4" />{" "}
              <span className="hidden sm:inline">Publish</span>
            </button>
          </div>
        </header>

        {/* Dynamic Workspace */}
        <main className="flex-1 overflow-hidden relative">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
