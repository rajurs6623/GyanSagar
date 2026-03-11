import React from "react";
import { motion } from "framer-motion";
import {
  Info,
  ListOrdered,
  PenTool,
  Users,
  Image as ImageIcon,
  LayoutTemplate,
  Eye,
  UploadCloud,
  ChevronLeft,
  ChevronRight,
  BookOpen
} from "lucide-react";

const navItems = [
  { id: "info", label: "Book Info", icon: Info },
  { id: "chapters", label: "Chapters Manager", icon: ListOrdered },
  { id: "editor", label: "Writing Editor", icon: PenTool },
  { id: "characters", label: "Story Elements", icon: Users },
  { id: "illustrations", label: "Illustrations Board", icon: ImageIcon },
  { id: "preview", label: "Book Preview", icon: Eye },
  { id: "publish", label: "Publish Settings", icon: UploadCloud },
];

export default function SidebarNavigation({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }) {
  return (
    <motion.div
      animate={{ width: isCollapsed ? 80 : 260 }}
      className="bg-slate-900 text-slate-300 h-full flex flex-col justify-between shadow-2xl relative z-20 shrink-0 border-r border-slate-800"
    >
      <div>
        {/* Logo Area */}
        <div className="h-20 flex items-center justify-center border-b border-slate-800/50">
          <BookOpen className="text-indigo-500 w-8 h-8" />
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ml-3 font-bold text-lg text-white tracking-wide"
            >
              Book Builder
            </motion.span>
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 group
                  ${isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "hover:bg-slate-800 hover:text-white"}`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} />
                {!isCollapsed && (
                  <span className={`font-medium whitespace-nowrap ${isActive ? "text-white" : "text-slate-300"}`}>
                    {item.label}
                  </span>
                )}
                {/* Tooltip for collapsed mode */}
                {isCollapsed && (
                  <div className="absolute left-20 bg-slate-800 text-white px-3 py-1 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Collapse Toggle */}
      <div className="p-4 border-t border-slate-800/50 flex justify-center">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
    </motion.div>
  );
}
