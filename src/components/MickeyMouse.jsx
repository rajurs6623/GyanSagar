import React from "react";
import { motion } from "framer-motion";

const MickeyMouse = () => {
    return (
        <div className="relative w-64 h-[400px] flex flex-col items-center justify-center scale-90 select-none">

            {/* ── MAGICAL BACKGROUND GLOW ── */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-x-0 top-10 bottom-10 bg-yellow-200/20 blur-[80px] rounded-full -z-10"
            />

            {/* ── FULL MICKEY BODY ── */}
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex flex-col items-center pt-8"
            >

                {/* ── HEAD SECTION ── */}
                <div className="relative z-30">
                    {/* Ears */}
                    <motion.div
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -left-12 -top-12 w-24 h-24 bg-black rounded-full shadow-lg"
                    />
                    <motion.div
                        animate={{ rotate: [2, -2, 2] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -right-12 -top-12 w-24 h-24 bg-black rounded-full shadow-lg"
                    />

                    {/* Main Head Container */}
                    <div className="relative w-36 h-36 bg-black rounded-full shadow-xl overflow-hidden">
                        {/* Classic Peaked Face Mask (Cream/Skin) */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-34 h-28 bg-[#ffdbac] rounded-full">
                            <div className="absolute -top-3 left-4 w-16 h-20 bg-[#ffdbac] rounded-full" />
                            <div className="absolute -top-3 right-4 w-16 h-20 bg-[#ffdbac] rounded-full" />

                            {/* Cheeks */}
                            <div className="absolute top-8 left-[-12px] w-22 h-22 bg-[#ffdbac] rounded-full" />
                            <div className="absolute top-8 right-[-12px] w-22 h-22 bg-[#ffdbac] rounded-full" />

                            {/* Eyes Container */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-20 grid grid-cols-2 gap-3 px-5 z-10">
                                {/* Left Eye */}
                                <div className="w-8 h-12 bg-white rounded-full flex items-center justify-center relative overflow-hidden border border-black/5">
                                    <motion.div
                                        animate={{ scaleY: [1, 0.1, 1], y: [3, 3, 3] }}
                                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }}
                                        className="w-3 h-7 bg-black rounded-full"
                                    />
                                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                                </div>
                                {/* Right Eye */}
                                <div className="w-8 h-12 bg-white rounded-full flex items-center justify-center relative overflow-hidden border border-black/5">
                                    <motion.div
                                        animate={{ scaleY: [1, 0.1, 1], y: [3, 3, 3] }}
                                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }}
                                        className="w-3 h-7 bg-black rounded-full"
                                    />
                                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                                </div>
                            </div>

                            {/* Nose */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-14 left-1/2 -translate-x-1/2 w-10 h-6 bg-black rounded-full shadow-md z-20"
                            />

                            {/* Classic Wide Smile */}
                            <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-24 h-12 flex flex-col items-center">
                                <motion.div
                                    animate={{
                                        height: [6, 14, 6],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                                    className="w-20 h-8 border-b-4 border-black/80 rounded-[50%] flex items-center justify-center overflow-hidden"
                                >
                                    {/* Tongue */}
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                                        className="w-8 h-5 bg-pink-400 rounded-full mt-6"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── BODY & ARMS ── */}
                <div className="relative -mt-6 z-20 flex flex-col items-center">
                    {/* Torso */}
                    <div className="w-16 h-28 bg-black rounded-[45%] relative">

                        {/* LEFT ARM (Viewer Right) - Pointing towards the Form Side */}
                        <motion.div
                            animate={{
                                rotate: [60, 75, 60], // Angled up and out towards the "Nation's Young Authors" text
                                y: [0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-12 top-4 w-6 h-22 bg-black rounded-full origin-top z-40"
                        >
                            {/* Glove Left (Detailed Inviting Palm) - Connected to Arm */}
                            <div className="absolute top-[75%] -right-14 w-32 h-32 relative rotate-[-20deg]">
                                {/* Thumb (pointing up) */}
                                <div className="absolute top-2 left-6 w-10 h-14 bg-white rounded-full border-2 border-slate-100 shadow-sm rotate-[-30deg]" />

                                {/* Main Palm */}
                                <div className="absolute top-8 left-8 w-22 h-22 bg-white rounded-[40%] shadow-2xl border-2 border-white flex items-center justify-center overflow-hidden">
                                    <div className="absolute top-4 left-8 w-14 h-14 border-l-2 border-t-2 border-black/5 rounded-full" />
                                </div>

                                {/* Fingers (Decisively pointing right) */}
                                <div className="absolute top-10 right-0 w-20 h-20 bg-white rounded-[40%] shadow-lg border-2 border-slate-100 flex flex-col items-center justify-center gap-2 p-2 rotate-[-5deg]">
                                    <div className="w-14 h-2 bg-black/5 rounded-full" />
                                    <div className="w-14 h-2 bg-black/5 rounded-full" />
                                    <div className="w-14 h-2 bg-black/5 rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT ARM (Viewer Left) - Resting on Hip Pose */}
                        <motion.div
                            animate={{ rotate: [-20, -10, -20] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-12 top-6 w-6 h-20 bg-black rounded-full origin-top z-40"
                        >
                            {/* Glove Right (Detailed Resting Palm) - Connected to Arm */}
                            <div className="absolute top-[75%] -left-10 w-24 h-24 relative rotate-[15deg]">
                                {/* Thumb (pointing in towards body) */}
                                <div className="absolute top-4 right-4 w-8 h-10 bg-white rounded-full border-2 border-slate-100 shadow-sm rotate-[40deg]" />

                                {/* Main Palm/Fist shape */}
                                <div className="absolute top-6 right-6 w-18 h-18 bg-white rounded-[45%] shadow-xl border-2 border-white flex items-center justify-center p-2">
                                    <div className="flex gap-1.5 rotate-[-5deg]">
                                        <div className="w-1 h-10 bg-black/10 rounded-full" />
                                        <div className="w-1 h-10 bg-black/10 rounded-full" />
                                        <div className="w-1 h-10 bg-black/10 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── RED SHORTS ── */}
                    <div className="relative -mt-12">
                        <div className="w-28 h-26 bg-red-600 rounded-b-[45%] rounded-t-[20%] shadow-lg border-b-6 border-red-700 flex items-start justify-center pt-6 gap-4 overflow-hidden">
                            {/* Vertical YELLOW Oval Buttons */}
                            <div className="w-8 h-12 bg-yellow-400 rounded-full shadow-inner border border-yellow-500/30" />
                            <div className="w-8 h-12 bg-yellow-400 rounded-full shadow-inner border border-yellow-500/30" />
                        </div>
                    </div>

                    {/* ── LEGS & FEET ── */}
                    <div className="flex gap-10 -mt-4">
                        {/* Left Leg */}
                        <motion.div
                            animate={{ rotate: [-1, 1, -1] }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="w-5 h-20 bg-black rounded-full" />
                            {/* Shoe Cuff */}
                            <div className="w-10 h-5 bg-yellow-400 rounded-full -mt-3 z-10 border border-yellow-500 shadow-sm" />
                            {/* Shoe */}
                            <div className="w-26 h-16 bg-yellow-400 rounded-[50%] -mt-3 shadow-xl border-b-6 border-yellow-500" />
                        </motion.div>

                        {/* Right Leg */}
                        <motion.div
                            animate={{ rotate: [1, -1, 1] }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="w-5 h-20 bg-black rounded-full" />
                            {/* Shoe Cuff */}
                            <div className="w-10 h-5 bg-yellow-400 rounded-full -mt-3 z-10 border border-yellow-500 shadow-sm" />
                            {/* Shoe */}
                            <div className="w-26 h-16 bg-yellow-400 rounded-[50%] -mt-3 shadow-xl border-b-6 border-yellow-500" />
                        </motion.div>
                    </div>
                </div>

            </motion.div>

            {/* Ground Shadow */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 w-52 h-6 bg-slate-900/10 blur-xl rounded-[100%]"
            />
        </div>
    );
};

export default MickeyMouse;
