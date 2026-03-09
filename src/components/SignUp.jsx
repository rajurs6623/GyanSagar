import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaPenNib, FaPenFancy, FaLanguage } from "react-icons/fa";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        magicName: ""
    });
    const [isSpeaking, setIsSpeaking] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        speak("Hello! Let's build your Story World together!");
    }, []);


    const speak = (text, lang = "en-US") => {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        speak("Whoo-hoo! You are now a Nation's Young Author!");
        setTimeout(() => {
            navigate("/signin");
        }, 2000);
    };

    const tellTeluguStory = () => {
        const story = "ఒకప్పుడు ఒక దట్టమైన అడవిలో ఒక చిన్న కుందేలు ఉండేది. అది చాలా తెలివైనది...";
        speak(story, "te-IN"); // Telugu locale
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/login-bg.png')] bg-cover bg-center py-16 px-4 font-['Nunito'] overflow-hidden relative">

            {/* Floating Child-Friendly Elements */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-10 right-[15%] opacity-20 text-indigo-500"
            >
                <FaPenFancy size={80} />
            </motion.div>
            <motion.div
                animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-10 left-[15%] opacity-20 text-sky-500"
            >
                <FaPenNib size={80} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                className="max-w-xl w-full bg-white rounded-[40px] shadow-[0_32px_80px_-20px_rgba(71,85,105,0.15)] border-8 border-indigo-50 p-10 relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-6">
                        <motion.img
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            src="/icon.png"
                            alt="Logo"
                            className="w-24 h-24 drop-shadow-xl"
                        />
                    </div>
                    <h1 className="text-4xl font-[900] text-slate-900 mb-2">Join the Magic! ✨</h1>
                    <p className="text-slate-500 font-bold">Create your author profile today.</p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 ml-2 uppercase tracking-widest">Author Username</label>
                        <div className="relative">
                            <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400" />
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full bg-slate-50 border-3 border-transparent focus:border-indigo-400 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-slate-700 font-bold outline-none transition-all placeholder:text-slate-300"

                                placeholder="Ex: J.K. Rowling Jr"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 ml-2 uppercase tracking-widest">Email Address</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-slate-50 border-3 border-transparent focus:border-indigo-400 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-slate-700 font-bold outline-none transition-all placeholder:text-slate-300"

                                placeholder="Ex: magic@pen.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 ml-2 uppercase tracking-widest">Secret Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400" />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full bg-slate-50 border-3 border-transparent focus:border-indigo-400 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-slate-700 font-bold outline-none transition-all placeholder:text-slate-300"

                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 ml-2 uppercase tracking-widest">Magic Pen Name</label>
                        <div className="relative">
                            <FaPenNib className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400" />
                            <input
                                type="text"
                                name="magicName"
                                value={formData.magicName}
                                onChange={handleInputChange}
                                className="w-full bg-slate-50 border-3 border-transparent focus:border-indigo-400 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-slate-700 font-bold outline-none transition-all placeholder:text-slate-300"

                                placeholder="Ex: Goldy Pen"
                                required
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2 pt-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-2xl shadow-[0_12px_24px_-8px_rgba(79,70,229,0.5)] active:scale-95 transition-all text-xl"
                        >
                            Create My Magic Account!
                        </button>
                    </div>
                </form>

                <div className="mt-10 flex flex-col items-center gap-6">
                    {/* Telugu Story Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={tellTeluguStory}
                        className="flex items-center gap-3 px-6 py-3 bg-yellow-400 text-slate-900 font-black rounded-full shadow-lg hover:bg-yellow-500 transition-all border-4 border-white"
                    >
                        <FaLanguage className="text-2xl" />
                        Tell me a story in Telugu!
                    </motion.button>

                    <p className="text-slate-500 font-bold text-sm">
                        Already a Storyteller?{" "}
                        <Link to="/signin" className="text-indigo-600 hover:text-indigo-800 underline decoration-2 underline-offset-4 decoration-indigo-200">
                            Sign in to your world! 🚀
                        </Link>
                    </p>
                </div>
            </motion.div>

            {/* Visual Indicator of Speaking */}
            <AnimatePresence>
                {isSpeaking && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="fixed bottom-10 left-10 bg-indigo-600 text-white p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-[100] border-4 border-white"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                            <FaPenNib />
                        </div>
                        <span className="font-black text-xs uppercase tracking-tighter">Pen is talking...</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SignUp;
