import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle, FaBook, FaPen, FaTrophy, FaSignOutAlt, FaMagic } from "react-icons/fa";

const Account = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const username = localStorage.getItem("username") || "Young Author";

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

    return (
        <div className="min-h-screen bg-slate-50 font-['Nunito'] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
                <header className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full p-2 border-4 border-indigo-600 shadow-xl overflow-hidden"
                        >
                            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Visdomwaves" alt="Avatar" className="w-full h-full object-cover" />
                        </motion.div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-[900] text-slate-900 leading-tight">Hello, <span className="text-indigo-600">{username}!</span></h1>
                            <p className="text-slate-500 font-bold flex items-center gap-2">
                                <FaMagic className="text-yellow-500" /> Professional Storyteller
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-red-500 font-black rounded-2xl border-4 border-slate-100 hover:border-red-100 hover:bg-red-50 transition-all active:scale-95"
                    >
                        <FaSignOutAlt /> Sign Out
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Dashboard Cards */}
                    <DashboardCard
                        icon={<FaBook className="text-indigo-600" />}
                        title="My Stories"
                        value="12"
                        subtitle="Adventures written"
                        color="bg-indigo-50"
                        delay={0.1}
                    />
                    <DashboardCard
                        icon={<FaPen className="text-pink-600" />}
                        title="Writing Streak"
                        value="5 Days"
                        subtitle="Keep it up! ✨"
                        color="bg-pink-50"
                        delay={0.2}
                    />
                    <DashboardCard
                        icon={<FaTrophy className="text-yellow-600" />}
                        title="Achievements"
                        value="3"
                        subtitle="Badges earned"
                        color="bg-yellow-50"
                        delay={0.3}
                    />
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-[900] text-slate-900 mb-8 px-2">Ready for your next masterpiece?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <button className="flex flex-col items-center justify-center p-8 bg-indigo-600 text-white rounded-[32px] shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FaPen className="text-2xl" />
                            </div>
                            <span className="text-xl font-black">Write New Story</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-8 bg-white border-4 border-slate-100 text-slate-900 rounded-[32px] hover:border-indigo-100 hover:bg-indigo-50 transition-all hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FaBook className="text-2xl text-indigo-600" />
                            </div>
                            <span className="text-xl font-black">View My Books</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DashboardCard = ({ icon, title, value, subtitle, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className={`${color} p-8 rounded-[40px] border-4 border-white shadow-lg`}
    >
        <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
                {icon}
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">{title}</span>
        </div>
        <div className="text-3xl font-[900] text-slate-900 mb-1">{value}</div>
        <div className="text-sm font-bold text-slate-500">{subtitle}</div>
    </motion.div>
);

export default Account;
