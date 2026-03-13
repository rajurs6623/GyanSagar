import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBook, FaPenNib, FaTrophy, FaSignOutAlt, FaCog, FaChartLine,
  FaPlus, FaCheckCircle, FaRegClock, FaEllipsisH, FaUsers, FaEye, FaHeart, FaStar, FaFire,
  FaUserEdit, FaLock, FaBell, FaGlobe, FaTrashAlt
} from "react-icons/fa";

const Account = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [username, setUsername] = useState(localStorage.getItem("username") || "Vamsi Krishna");
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/signin");
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: <FaChartLine /> },
    { id: "drafts", label: "Class Projects", icon: <FaPenNib /> },
    { id: "published", label: "Library Showcase", icon: <FaBook /> },
    { id: "achievements", label: "Awards", icon: <FaTrophy /> },
    { id: "streak", label: "Learning Streak", icon: <FaFire /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Nunito'] pb-20">
      
      {/* HEADER BANNER */}
      <div className="bg-white border-b border-slate-200 pt-4 sm:pt-6 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* PROFILE INFO */}
          <div className="flex items-center gap-6">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="relative shrink-0"
            >
              <div className="w-24 h-34 sm:w-38 sm:h-38 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-100">
                <img 
                  src="https://i.pinimg.com/736x/68/18/d5/6818d56d7573f9cf2e1dec5cc1434c5a.jpg" 
                  alt="Avatar" 
                  className="w-full h-full object-cover rounded-full border-4 border-white bg-white" 
                />
              </div>
              
            </motion.div>
            
            <div className="flex flex-col">
              <motion.h1 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-4xl font-[900] text-slate-900 leading-tight tracking-tight"
              >
                {username}
              </motion.h1>
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 mt-3"
              >
                <span className="text-slate-600 font-[800] text-[13px] flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
                  Class 8th Student
                </span>
                <span className="text-slate-600 font-[800] text-[13px] flex items-center gap-1.5 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200 shadow-sm">
                  <FaStar className="text-yellow-500" />
                  Gyan Sagar Scholar
                </span>
              </motion.div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="flex items-center gap-3 w-full md:w-auto"
          >
            <button 
              onClick={handleSignOut}
              className="flex-1 md:flex-none px-5 py-2.5 bg-red-50 text-red-600 border border-red-100 text-sm font-[800] rounded-xl hover:bg-red-100 transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
            >
               <FaSignOutAlt /> Sign Out
            </button>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT DASHBOARD */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <div className="w-full lg:w-56 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 custom-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-[800] text-sm transition-all whitespace-nowrap border ${
                activeTab === tab.id 
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200 translate-x-0 lg:translate-x-1" 
                : "bg-transparent text-slate-500 border-transparent hover:bg-white hover:text-slate-900 hover:border-slate-200 hover:shadow-sm"
              }`}
            >
              <span className={`text-[17px] ${activeTab === tab.id ? "text-indigo-200" : "text-slate-400"}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 space-y-8 min-w-0">
          
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-[900] text-slate-900 tracking-tight">
              {activeTab === "settings" ? "Settings" : tabs.find(t => t.id === activeTab)?.label}
            </h2>
            {activeTab === "overview" && (
              <button 
                onClick={() => navigate('/writer-pad')}
                className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-[900] rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FaPlus /> Start Project
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "overview" && <OverviewTab />}
              {activeTab === "drafts" && <DraftsTab />}
              {activeTab === "published" && <PublishedTab />}
              {activeTab === "achievements" && <AchievementsTab />}
              {activeTab === "streak" && <StreakTab />}
              {activeTab === "settings" && <SettingsTab initialName={username} onUpdateName={(newName) => {
                setUsername(newName);
                localStorage.setItem("username", newName);
              }} />}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const OverviewTab = () => (
  <div className="space-y-8">
    {/* STATS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard 
        title="Books Read" 
        value="12" 
        trend="+2 this month" 
        icon={<FaBook />} 
        colorClass="text-indigo-600" 
        bgClass="bg-indigo-50" 
      />
      <StatCard 
        title="Projects Done" 
        value="45" 
        trend="+12 this month" 
        icon={<FaPenNib />} 
        colorClass="text-pink-600" 
        bgClass="bg-pink-50" 
      />
      <StatCard 
        title="Knowledge Points" 
        value="1.4k" 
        trend="+340 this week" 
        icon={<FaUsers />} 
        colorClass="text-emerald-600" 
        bgClass="bg-emerald-50" 
      />
    </div>

    {/* RECENT PROJECTS & ACTIVITY */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      
      {/* RECENT PROJECTS */}
      <div className="xl:col-span-2 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[17px] font-[900] text-slate-900 tracking-tight">Recent Work</h3>
          <button className="text-[13px] font-[800] text-indigo-600 hover:text-indigo-700 transition-colors">View All Work</button>
        </div>
        <div className="space-y-4">
          <ProjectCard 
            title="The Lost Kingdom" 
            status="Draft" 
            lastEdited="2 hours ago" 
            progress={65} 
            views={0}
            likes={0}
            coverImage="https://i.pinimg.com/1200x/14/6c/ea/146cea82fd75b5494b06d3498904eec2.jpg"
          />
          <ProjectCard 
            title="Mystery of the Blue Moon" 
            status="Published" 
            lastEdited="3 days ago" 
            progress={100} 
            views={245}
            likes={42}
            coverImage="https://i.pinimg.com/1200x/8c/8f/0f/8c8f0f6c9fd1883c2b40d7eb055ef52d.jpg"
          />
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="space-y-5">
        <h3 className="text-[17px] font-[900] text-slate-900 tracking-tight">Quick Actions</h3>
        
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
           
           <button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm transition-all group">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                 <FaPenNib className="text-lg" />
               </div>
               <div className="text-left">
                 <p className="text-[14px] font-[900] text-slate-900 leading-tight">New Project</p>
                 <p className="text-[12px] font-[800] text-slate-500 mt-0.5">The Lost Kingdom</p>
               </div>
             </div>
           </button>

           <button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm transition-all group">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                 <FaCheckCircle className="text-lg" />
               </div>
               <div className="text-left">
                 <p className="text-[14px] font-[900] text-slate-900 leading-tight">Submit Homework</p>
                 <p className="text-[12px] font-[800] text-slate-500 mt-0.5">Ready for review</p>
               </div>
             </div>
           </button>

        </div>

        {/* MILESTONE CARD */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-2xl p-6 text-white shadow-xl shadow-indigo-200 relative overflow-hidden flex items-center group cursor-default">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
          <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-purple-400/20 rounded-full blur-xl group-hover:bg-purple-400/30 transition-all duration-500"></div>
          <div className="relative z-10 flex items-center gap-5 w-full">
            <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-3xl backdrop-blur-md shadow-inner shrink-0">
               🏆
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-[900] text-indigo-200 uppercase tracking-wider mb-0.5">Academic Goal</p>
              <p className="text-[18px] font-[900] text-white tracking-tight leading-none">Collect 2k Points</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const StatCard = ({ title, value, trend, icon, colorClass, bgClass }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-default flex flex-col justify-between min-h-[160px]">
    <div className={`absolute -top-4 -right-4 w-32 h-32 ${bgClass} rounded-full opacity-30 -z-0 group-hover:scale-150 transition-transform duration-700 ease-out`}></div>
    <div className="relative z-10 flex items-center justify-between mb-2">
      <div className={`w-12 h-12 rounded-xl border border-slate-100 shadow-sm ${bgClass} ${colorClass} flex items-center justify-center text-xl`}>
        {icon}
      </div>
      <span className="text-[11px] font-[900] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">{trend}</span>
    </div>
    <div className="relative z-10 shrink-0">
      <div className="text-[34px] font-[900] text-slate-900 tracking-tight leading-none mb-1">{value}</div>
      <div className="text-[14px] font-[800] text-slate-500">{title}</div>
    </div>
  </div>
);

const ProjectCard = ({ title, status, lastEdited, progress, views, likes, coverImage }) => {
  const isPublished = status === "Published";
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-5 cursor-pointer">
      <div className="flex items-center gap-4">
        {/* Book Cover Placeholder */}
        <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[10px] border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:shadow group-hover:-translate-y-0.5 transition-all overflow-hidden">
           {coverImage ? (
             <img src={coverImage} alt={title} className="w-full h-full object-cover" />
           ) : (
             <FaBook className="text-slate-300 text-2xl" />
           )}
        </div>
        
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
            <h4 className="text-[16px] font-[900] text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight tracking-tight">{title}</h4>
            <span className={`text-[10px] font-[900] uppercase tracking-wider px-2 py-0.5 rounded-md border ${isPublished ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-orange-50 text-orange-700 border-orange-100"}`}>
              {status}
            </span>
          </div>
          <p className="text-[12px] font-[800] text-slate-400 flex items-center gap-1.5">
            <FaRegClock className="text-slate-300" /> Edited {lastEdited}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 sm:gap-8 justify-between sm:justify-end border-t sm:border-t-0 border-slate-100 pt-4 sm:pt-0">
        {/* Progress or Stats */}
        {isPublished ? (
          <div className="flex items-center gap-5 text-slate-500">
             <div className="flex items-center gap-2 text-[14px] font-[800]">
               <FaEye className="text-indigo-400 text-lg" /> {views}
             </div>
             <div className="flex items-center gap-2 text-[14px] font-[800]">
               <FaHeart className="text-pink-400 text-lg" /> {likes}
             </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1.5 w-32">
             <div className="flex justify-between text-[11px] font-[900] text-slate-500 tracking-wide">
                <span>PROGRESS</span>
                <span className="text-indigo-600">{progress}%</span>
             </div>
             <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-sm" 
                  style={{ width: `${progress}%` }}
                ></div>
             </div>
          </div>
        )}

        {/* Actions Button */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 border border-transparent hover:bg-slate-50 hover:border-slate-200 hover:text-slate-900 transition-all">
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
};

const AchievementsTab = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-50 rounded-full opacity-50 -z-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-200 flex items-center justify-center text-3xl text-white shrink-0">
        🏆
      </div>
      <div className="relative z-10 text-center sm:text-left flex-1">
        <h4 className="text-[18px] font-[900] text-slate-900 leading-tight mb-1">First Draft Completed</h4>
        <p className="text-[13px] font-[700] text-slate-500 mb-3">You successfully wrote and saved your very first book draft.</p>
        <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] font-[900] uppercase tracking-wider text-yellow-700 bg-yellow-50 w-max px-2.5 py-1 mx-auto sm:mx-0 rounded-md border border-yellow-200">
           <FaStar className="text-yellow-500" /> +50 XP
        </div>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-50 rounded-full opacity-50 -z-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 shadow-lg shadow-purple-200 flex items-center justify-center text-3xl text-white shrink-0">
        🌟
      </div>
      <div className="relative z-10 text-center sm:text-left flex-1">
        <h4 className="text-[18px] font-[900] text-slate-900 leading-tight mb-1">Rising Star</h4>
        <p className="text-[13px] font-[700] text-slate-500 mb-3">Your published story reached 1,000 readers this month.</p>
        <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] font-[900] uppercase tracking-wider text-purple-700 bg-purple-50 w-max px-2.5 py-1 mx-auto sm:mx-0 rounded-md border border-purple-200">
           <FaStar className="text-purple-500" /> +150 XP
        </div>
      </div>
    </div>
  </div>
);

const PublishedTab = () => (
  <div className="space-y-4">
    <ProjectCard 
      title="Mystery of the Blue Moon" 
      status="Published" 
      lastEdited="3 days ago" 
      progress={100} 
      views={245}
      likes={42}
      coverImage="https://i.pinimg.com/1200x/8c/8f/0f/8c8f0f6c9fd1883c2b40d7eb055ef52d.jpg"
    />
  </div>
);

const DraftsTab = () => (
  <div className="space-y-4">
    <ProjectCard 
      title="The Lost Kingdom" 
      status="Draft" 
      lastEdited="2 hours ago" 
      progress={65} 
      views={0}
      likes={0}
      coverImage="https://i.pinimg.com/1200x/14/6c/ea/146cea82fd75b5494b06d3498904eec2.jpg"
    />
  </div>
);

const StreakTab = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const activeDays = [true, true, true, true, true, false, false]; // 5-day streak simulation

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[150%] bg-gradient-to-br from-orange-50 via-rose-50 to-transparent opacity-50 -z-0 pointer-events-none"></div>
      
      <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 shadow-xl shadow-orange-200 flex items-center justify-center mb-6">
        <FaFire className="text-5xl text-white drop-shadow-md animate-pulse" />
      </div>
      
      <h3 className="relative z-10 text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-2">5 Day Streak!</h3>
      <p className="relative z-10 text-[15px] font-[700] text-slate-500 max-w-sm mb-8">
        You're on fire! Keep studying every day to build your streak and unlock school awards.
      </p>

      {/* Days Activity Row */}
      <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-4 w-full">
        {days.map((day, idx) => {
          const isActive = activeDays[idx];
          return (
            <div key={day} className="flex flex-col items-center gap-2">
              <div 
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl font-[800] text-[15px] transition-all duration-300
                  ${isActive 
                    ? "bg-gradient-to-br from-orange-400 to-rose-500 text-white shadow-md shadow-orange-200 scale-110" 
                    : "bg-slate-50 text-slate-400 border border-slate-200"
                  }`}
              >
                {isActive && <FaFire className="text-lg opacity-80" />}
              </div>
              <span className={`text-[11px] font-[900] uppercase tracking-wider ${isActive ? "text-rose-500" : "text-slate-400"}`}>
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ToggleButton = ({ enabled, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-12 h-6 rounded-full relative transition-colors duration-300 focus:outline-none shadow-inner ${enabled ? "bg-indigo-600" : "bg-slate-300"}`}
  >
    <motion.div 
      initial={false}
      animate={{ x: enabled ? 24 : 4 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
    />
  </button>
);

const SettingsTab = ({ initialName, onUpdateName }) => {
  const [name, setName] = useState(initialName);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showLoginActivity, setShowLoginActivity] = useState(false);
  const [settingsView, setSettingsView] = useState("menu"); // "menu", "profile", "security", "notifications"
  const [notifications, setNotifications] = useState({
    email: true,
    website: false,
    achievements: true
  });

  const toggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 max-w-4xl">
      
      {/* Settings Menu View */}
      {settingsView === "menu" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setSettingsView("profile")}
            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all group text-left"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <FaUserEdit className="text-xl" />
            </div>
            <h4 className="text-md font-[900] text-slate-900 mb-1">Profile Settings</h4>
            <p className="text-[12px] font-[700] text-slate-500 leading-relaxed">Update your public profile and contact info</p>
          </button>

          <button 
            onClick={() => setSettingsView("security")}
            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all group text-left"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <FaLock className="text-xl" />
            </div>
            <h4 className="text-md font-[900] text-slate-900 mb-1">Security</h4>
            <p className="text-[12px] font-[700] text-slate-500 leading-relaxed">Manage passwords and login security</p>
          </button>

          <button 
            onClick={() => setSettingsView("notifications")}
            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-orange-400 hover:shadow-md transition-all group text-left"
          >
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <FaBell className="text-xl" />
            </div>
            <h4 className="text-md font-[900] text-slate-900 mb-1">Notifications</h4>
            <p className="text-[12px] font-[700] text-slate-500 leading-relaxed">Choose how you want to be notified</p>
          </button>
        </div>
      )}

      {/* Profile Settings View */}
      {settingsView === "profile" && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-[900] text-slate-900 flex items-center gap-2">
              <FaUserEdit className="text-indigo-600" /> Profile Settings
            </h3>
            <button 
              onClick={() => setSettingsView("menu")}
              className="text-xs font-[900] text-indigo-600 hover:underline"
            >
              Back to Menu
            </button>
          </div>
          <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[12px] font-[800] text-slate-500 mb-1.5 uppercase tracking-wide">Full Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-[700] text-slate-800 outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner" 
              />
            </div>
            <div>
              <label className="block text-[12px] font-[800] text-slate-500 mb-1.5 uppercase tracking-wide">Username</label>
              <input type="text" defaultValue="@vamsi_k" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-[700] text-slate-800 outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner" />
            </div>
          </div>
          <div>
            <label className="block text-[12px] font-[800] text-slate-500 mb-1.5 uppercase tracking-wide">Bio</label>
            <textarea rows="3" placeholder="Tell the world about your writing adventures..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-[700] text-slate-800 outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner resize-none"></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[12px] font-[800] text-slate-500 mb-1.5 uppercase tracking-wide">Date of Birth</label>
              <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-[700] text-slate-400 outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner" />
            </div>
            <div>
              <label className="block text-[12px] font-[800] text-slate-500 mb-1.5 uppercase tracking-wide">Country / Language</label>
              <div className="relative">
                <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-[700] text-slate-800 outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner appearance-none cursor-pointer">
                  <option>India (English)</option>
                  <option>United States (English)</option>
                  <option>United Kingdom (English)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <button 
              onClick={() => onUpdateName(name)}
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-[800] rounded-xl hover:bg-indigo-700 transition-all shadow-md"
            >
              Save Changes
            </button>
          </div>
        </div>
      </motion.div>
      )}

      {/* Security Settings View */}
      {settingsView === "security" && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-[900] text-slate-900 flex items-center gap-2">
              <FaLock className="text-emerald-600" /> Security
            </h3>
            <button 
              onClick={() => setSettingsView("menu")}
              className="text-xs font-[900] text-emerald-600 hover:underline"
            >
              Back to Menu
            </button>
          </div>
          <div className="flex flex-col space-y-3">
          <button 
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all group"
          >
            <div className="text-left">
              <h4 className="text-[14px] font-[900] text-slate-900">Change Password</h4>
              <p className="text-[12px] font-[700] text-slate-500">Update your account password</p>
            </div>
            <motion.div
              animate={{ rotate: showPasswordForm ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaEllipsisH className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showPasswordForm && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 mt-1 space-y-4 shadow-inner">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-[11px] font-[800] text-slate-500 mb-1.5 uppercase tracking-wide">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-[700] outline-none focus:border-indigo-400 transition-all shadow-sm" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-[800] text-slate-500 mb-1.5 uppercase tracking-wide">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-[700] outline-none focus:border-indigo-400 transition-all shadow-sm" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-[800] text-slate-500 mb-1.5 uppercase tracking-wide">Confirm New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-[700] outline-none focus:border-indigo-400 transition-all shadow-sm" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button 
                      onClick={() => setShowPasswordForm(false)}
                      className="px-5 py-2 bg-indigo-600 text-white text-[13px] font-[800] rounded-lg hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                    >
                      Update Password
                    </button>
                    <button 
                       onClick={() => setShowPasswordForm(false)}
                       className="px-5 py-2 bg-white border border-slate-200 text-slate-600 text-[13px] font-[800] rounded-lg hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all group">
            <div className="text-left">
              <h4 className="text-[14px] font-[900] text-slate-900 flex items-center gap-2">Two-Factor Authentication (2FA) <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded uppercase tracking-wider font-black">Enabled</span></h4>
              <p className="text-[12px] font-[700] text-slate-500">Add an extra layer of security</p>
            </div>
            <FaEllipsisH className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
          </button>
          <button 
            onClick={() => setShowLoginActivity(!showLoginActivity)}
            className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all group"
          >
            <div className="text-left">
              <h4 className="text-[14px] font-[900] text-slate-900">Login Activity</h4>
              <p className="text-[12px] font-[700] text-slate-500">View devices logged into your account</p>
            </div>
            <motion.div
              animate={{ rotate: showLoginActivity ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaEllipsisH className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showLoginActivity && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mt-1 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <FaUsers />
                      </div>
                      <div className="text-left">
                        <h5 className="text-[13px] font-[800] text-slate-900">Windows PC • Chrome</h5>
                        <p className="text-[11px] font-[700] text-slate-400">Mumbai, India • <span className="text-emerald-500">Active Now</span></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Current</span>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all active:scale-90">
                        <FaTrashAlt className="text-[13px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      )}

      {/* Notification Settings View */}
      {settingsView === "notifications" && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-[900] text-slate-900 flex items-center gap-2">
              <FaBell className="text-orange-500" /> Notifications
            </h3>
            <button 
              onClick={() => setSettingsView("menu")}
              className="text-xs font-[900] text-orange-600 hover:underline"
            >
              Back to Menu
            </button>
          </div>
          <div className="space-y-4">
          
          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div>
              <h4 className="text-[14px] font-[800] text-slate-900">Email Notifications</h4>
              <p className="text-[12px] font-[600] text-slate-500">Receive updates and newsletters via email.</p>
            </div>
            <ToggleButton enabled={notifications.email} onClick={() => toggleNotification('email')} />
          </div>

          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div>
              <h4 className="text-[14px] font-[800] text-slate-900">Website Notifications</h4>
              <p className="text-[12px] font-[600] text-slate-500">In-app pings for messages and community replies.</p>
            </div>
            <ToggleButton enabled={notifications.website} onClick={() => toggleNotification('website')} />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div>
              <h4 className="text-[14px] font-[800] text-slate-900">Achievement Alerts</h4>
              <p className="text-[12px] font-[600] text-slate-500">Be notified when you unlock a new milestone.</p>
            </div>
            <ToggleButton enabled={notifications.achievements} onClick={() => toggleNotification('achievements')} />
          </div>

        </div>
      </motion.div>
      )}
    </div>
  );
};

export default Account;
