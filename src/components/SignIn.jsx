import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaMobileAlt, FaTh, FaUserCircle, FaCamera, FaArrowLeft, FaCheckCircle, FaSpinner, FaMagic, FaBookOpen, FaPenNib } from "react-icons/fa";
import MickeyMouse from "./MickeyMouse";

const SignIn = () => {
    const [step, setStep] = useState(1); // 1: Mobile, 2: Auth Choice, 3: PIN, 4: FaceID
    const [mobile, setMobile] = useState("");
    const [pin, setPin] = useState("");
    const [isScanning, setIsScanning] = useState(false);
    const [scanSuccess, setScanSuccess] = useState(false);
    const mickeyVideoRef = useRef(null);
    const faceVideoRef = useRef(null);
    const faceStreamRef = useRef(null); // holds the MediaStream across renders
    const navigate = useNavigate();

    // Background Image URL (Optimized)
    const bgImage = "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=60&w=1600";

    useEffect(() => {
        // Preload background image
        const img = new Image();
        img.src = bgImage;
    }, []);

    useEffect(() => {
        // Explicitly play Mickey video on refresh/Step 1
        const playVideo = () => {
            if (mickeyVideoRef.current && step === 1) {
                mickeyVideoRef.current.currentTime = 0;
                const playPromise = mickeyVideoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Magic needs a click to start the greeting!", error);
                    });
                }
            }
        };

        // Try playing after a short delay for stability
        const timer = setTimeout(playVideo, 300);

        // Also try on window focus or click to bypass autoplay restrictions
        const handleInteraction = () => playVideo();
        window.addEventListener('click', handleInteraction, { once: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('click', handleInteraction);
        };
    }, [step]);

    const handlePinSubmit = (e) => {
        e.preventDefault();
        if (pin === "1947") {
            localStorage.setItem("isLoggedIn", "true");
            setTimeout(() => navigate("/"), 1000); // Faster redirect
        }
    };

    // Callback ref — fires the INSTANT the <video> element mounts in the DOM,
    // even after AnimatePresence delay. Assigns srcObject immediately.
    const faceVideoCallbackRef = useCallback((el) => {
        faceVideoRef.current = el;
        if (el && faceStreamRef.current) {
            el.srcObject = faceStreamRef.current;
            el.play().catch(() => { });
        }
    }, []);

    const startFaceID = async () => {
        setIsScanning(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            faceStreamRef.current = stream; // store before step change
            setStep(4);                     // mount the video element
            // Simulate scanning after a short delay so the feed renders first
            setTimeout(() => {
                setScanSuccess(true);
                setIsScanning(false);
                localStorage.setItem("isLoggedIn", "true");
                setTimeout(() => {
                    stream.getTracks().forEach(track => track.stop());
                    faceStreamRef.current = null;
                    navigate("/");
                }, 1500); // Faster transition
            }, 2000); // Faster scan simulation
        } catch (err) {
            console.error("Camera error:", err);
            setIsScanning(false);
            setStep(1);
        }
    };

    return (
        <div 
          className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 sm:p-8 font-['Nunito'] overflow-hidden relative"
          style={{ backgroundImage: `url(${bgImage})` }}
        >

            {/* ── WARM AMBER-BROWN OVERLAY ──────────────────────────────── */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1005]/75 via-[#2a1a08]/70 to-[#1a0f05]/75 z-0" />

            {/* ── BACKGROUND MAGIC ──────────────────────────────────────── */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-sky-200/30 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-pink-200/30 blur-[120px] rounded-full"
                />
            </div>

            {/* ── MAIN CONTAINER ────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl w-full bg-transparent backdrop-blur-sm rounded-[48px] shadow-[0_40px_100px_-20px_rgba(180,83,9,0.3)] flex flex-col lg:flex-row overflow-hidden border border-amber-200/25 relative z-10"
            >

                {/* ── LEFT SIDE: THE MAGIC STORY BOOK ─────────────────────── */}
                <div className="flex-1 bg-transparent p-12 flex flex-col items-center justify-center relative min-h-[450px]">

                    {/* Animated Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -100, 0],
                                    x: [0, Math.random() * 50 - 25, 0],
                                    opacity: [0, 0.6, 0]
                                }}
                                transition={{
                                    duration: 4 + Math.random() * 4,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                                className="absolute text-indigo-200/60"
                                style={{
                                    left: `${Math.random() * 80 + 10}%`,
                                    top: `${Math.random() * 80 + 10}%`
                                }}
                            >

                            </motion.div>
                        ))}
                    </div>

                    {/* Magical Mickey Video Display */}
                    <div className="relative w-full max-w-[520px] flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative w-64 h-64 sm:w-[360px] sm:h-[360px] rounded-[56px] overflow-hidden border-[10px] border-white shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] bg-white group"
                        >
                            <video
                                ref={mickeyVideoRef}
                                src="/Micky Mouse.mp4"
                                autoPlay
                                playsInline
                                preload="auto"
                                onEnded={(e) => {
                                    e.target.pause();
                                    // Seek to slightly before the very end to catch the character in a good pose
                                    if (e.target.duration > 0.5) {
                                        e.target.currentTime = e.target.duration - 0.5;
                                    }
                                }}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>

                    <div className="mt-4 text-center">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-3xl font-bold text-blue-400 mb-2"
                        >
                            Build Your Legacy
                        </motion.h2>
                        <p className="text-sky-100/90 font-medium max-w-xs mx-auto text-lg italic">"Every pen stroke creates a whole new world!"</p>
                    </div>
                </div>

                {/* ── RIGHT SIDE: FORM AREA ──────────────────────────────── */}
                <div className="w-full lg:w-[440px] bg-transparent p-8 sm:p-10 lg:pl-10 lg:pr-14 flex flex-col relative border-l border-amber-200/15">



                    {/* Header with Moving Animation - Single Line & Compact */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="mb-8 text-center lg:text-left relative z-10"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <img src="/GyanSagar/LogoGyansagar.jfif" alt="Logo" className="w-10 h-10 rounded-full border-2 border-blue-400/50 shadow-lg" onError={(e) => { e.target.style.display = 'none' }} />
                            <motion.h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none whitespace-nowrap">
                                Gyan{" "}
                                <motion.span
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-[length:200%_auto]"
                                >
                                    Sagar
                                </motion.span>
                            </motion.h1>
                        </div>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="flex items-center justify-center lg:justify-start gap-2 mt-2 text-blue-400/80 font-semibold tracking-widest uppercase text-[10px]"
                        >
                            Public School • Secure Login
                        </motion.div>
                    </motion.div>

                    <AnimatePresence mode="wait">

                        {/* STEP 1: MOBILE NUMBER & AUTH CHOICE */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="space-y-6 flex-grow relative z-10"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-white ml-1">
                                        <FaMobileAlt className="text-lg" />
                                        <span className="font-semibold text-[10px] uppercase tracking-[0.2em]">Mobile Number</span>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        className="relative group"
                                    >
                                        <input
                                            type="tel"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                            placeholder="Enter Mobile Number"
                                            className="w-full bg-white border-4 border-blue-400 rounded-2xl py-4 px-6 text-slate-800 font-semibold text-xl outline-none focus:border-blue-400 focus:bg-white transition-all placeholder:text-slate-300 shadow-inner hover:border-blue-400"
                                            required
                                        />

                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    {/* PIN Button */}
                                    <motion.div className="relative group rounded-[32px]">
                                        <motion.button
                                            whileHover={mobile.length === 10 ? { y: -10, scale: 1.02 } : { x: [-3, 3, -3, 3, 0] }}
                                            transition={mobile.length === 10 ? { type: "spring", stiffness: 300 } : { duration: 0.4 }}
                                            onClick={() => mobile.length === 10 && setStep(3)}
                                            className={`w-full aspect-[4/3] rounded-[32px] flex flex-col items-center justify-center gap-4 transition-all duration-700 relative overflow-hidden border-4
                                                ${mobile.length === 10
                                                    ? "bg-blue-50/80 border-blue-200 shadow-[0_20px_40px_rgba(59,130,246,0.15)] cursor-pointer"
                                                    : "bg-white/5 border-white/10 opacity-60 cursor-not-allowed"}`}
                                        >
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 z-10
                                                ${mobile.length === 10 ? "bg-white text-blue-500 scale-110 shadow-sm" : "bg-white/10 text-white/40"}`}>
                                                <FaTh size={24} />
                                            </div>
                                            <span className={`font-semibold tracking-widest text-sm transition-colors duration-500 z-10
                                                ${mobile.length === 10 ? "text-blue-700" : "text-white/40"}`}>PIN</span>

                                            <div className="absolute top-4 right-4 text-[12px]">
                                                {mobile.length === 10 ? null : "🔒"}
                                            </div>
                                        </motion.button>
                                    </motion.div>

                                    {/* Face ID Button */}
                                    <motion.div className="relative group rounded-[32px]">
                                        <motion.button
                                            whileHover={mobile.length === 10 ? { y: -10, scale: 1.02 } : { x: [-3, 3, -3, 3, 0] }}
                                            transition={mobile.length === 10 ? { type: "spring", stiffness: 300 } : { duration: 0.4 }}
                                            onClick={() => mobile.length === 10 && startFaceID()}
                                            className={`w-full aspect-[4/3] rounded-[32px] flex flex-col items-center justify-center gap-4 transition-all duration-700 relative overflow-hidden border-4
                                                ${mobile.length === 10
                                                    ? "bg-blue-100/80 border-blue-200 shadow-[0_20px_40px_rgba(59,130,246,0.15)] cursor-pointer"
                                                    : "bg-white/5 border-white/10 opacity-60 cursor-not-allowed"}`}
                                        >
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 z-10
                                                ${mobile.length === 10 ? "bg-white text-pink-500 scale-110 shadow-sm" : "bg-white/10 text-white/40"}`}>
                                                <FaUserCircle size={28} />
                                            </div>
                                            <span className={`font-semibold tracking-widest text-sm transition-colors duration-500 z-10
                                                ${mobile.length === 10 ? "text-blue-700" : "text-white/40"}`}>FACE ID</span>

                                            <div className="absolute top-4 right-4 text-[12px]">
                                                {mobile.length === 10 ? null : "🔒"}
                                            </div>
                                        </motion.button>
                                    </motion.div>
                                </div>

                            </motion.div>
                        )}


                        {/* STEP 3: PIN INPUT */}
                        {step === 3 && (
                            <motion.form
                                key="step3"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                onSubmit={handlePinSubmit}
                                className="flex flex-col gap-6 flex-grow relative z-10"
                            >
                                {/* ── Icon + Title ── */}
                                <div className="flex flex-col items-center gap-3">
                                    {/* Animated Icon Ring */}
                                    <div className="relative flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            className="absolute w-[72px] h-[72px] rounded-full border-2 border-dashed border-indigo-400/40"
                                        />
                                        <motion.div
                                            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute w-14 h-14 rounded-full bg-indigo-500/20 blur-md"
                                        />
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600/80 to-purple-700/80 backdrop-blur-sm flex items-center justify-center text-white border border-indigo-400/40 shadow-[0_0_20px_rgba(99,102,241,0.4)] z-10">
                                            <FaTh size={20} />
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-black text-white tracking-tight drop-shadow-[0_2px_12px_rgba(99,102,241,0.6)]">
                                            Enter Magic PIN
                                        </h2>
                                        <p className="text-xs text-indigo-300/70 font-semibold tracking-[0.18em] uppercase mt-0.5">
                                            4-Digit Secret Code
                                        </p>
                                    </div>
                                </div>

                                {/* ── PIN Boxes ── */}
                                <div className="relative flex justify-center gap-3">
                                    {[...Array(4)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={pin.length > i ? {
                                                scale: [1, 1.18, 1],
                                                backgroundColor: "rgba(99,102,241,0.85)",
                                                borderColor: "#818cf8",
                                                boxShadow: "0 0 18px rgba(99,102,241,0.55)"
                                            } : {
                                                scale: 1,
                                                backgroundColor: "rgba(255,255,255,0.08)",
                                                borderColor: "rgba(255,255,255,0.18)",
                                                boxShadow: "none"
                                            }}
                                            transition={{ duration: 0.25 }}
                                            className="w-[60px] h-[68px] rounded-2xl border-2 flex items-center justify-center backdrop-blur-sm"
                                        >
                                            {pin.length > i ? (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                                />
                                            ) : (
                                                <div className="w-2 h-2 bg-white/25 rounded-full" />
                                            )}
                                        </motion.div>
                                    ))}
                                    <input
                                        type="password"
                                        value={pin}
                                        onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                        className="absolute inset-0 opacity-0 cursor-default"
                                        autoFocus
                                        required
                                    />
                                </div>

                                {/* ── Hint Badge ── */}
                                <div className="flex justify-center">
                                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-4 py-2.5">
                                        <span className="text-indigo-300/80 text-[10px] font-bold uppercase tracking-[0.2em]">Hint:</span>
                                        <span className="text-sky-200/80 text-[11px] font-semibold">Year India got independence?</span>
                                        <span className="text-pink-300 font-black text-[12px] bg-pink-500/10 px-2 py-0.5 rounded-lg border border-pink-400/20">1947</span>
                                    </div>
                                </div>

                                {/* ── Buttons ── */}
                                <div className="flex flex-col gap-3">
                                    {/* Primary CTA */}
                                    <motion.button
                                        whileHover={pin.length === 4 ? { scale: 1.02, boxShadow: "0 20px 50px rgba(99,102,241,0.4)" } : {}}
                                        whileTap={pin.length === 4 ? { scale: 0.97 } : {}}
                                        disabled={pin.length < 4}
                                        type="submit"
                                        className={`w-full relative overflow-hidden font-bold py-4 rounded-2xl text-[15px] tracking-wide transition-all duration-300
                                            ${pin.length === 4
                                                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)] cursor-pointer"
                                                : "bg-white/8 text-white/30 border border-white/10 cursor-not-allowed"}`}
                                    >
                                        {pin.length === 4 && (
                                            <motion.span
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                                                animate={{ x: ["-100%", "200%"] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                                            />
                                        )}
                                        <span className="relative flex items-center justify-center gap-2">
                                            <FaCheckCircle className={`text-sm ${pin.length === 4 ? "opacity-100" : "opacity-30"}`} />
                                            Verify &amp; Login
                                        </span>
                                    </motion.button>

                                    {/* Divider */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-px bg-white/10" />
                                        <span className="text-white/25 text-[10px] uppercase tracking-widest font-semibold">or</span>
                                        <div className="flex-1 h-px bg-white/10" />
                                    </div>

                                    {/* Back Link */}
                                    <motion.button
                                        whileHover={{ x: -6 }}
                                        whileTap={{ scale: 0.97 }}
                                        type="button"
                                        onClick={() => { setPin(""); setStep(1); }}
                                        className="w-full flex items-center justify-center gap-2 text-sky-200/60 font-semibold hover:text-sky-100 transition-all py-2.5 text-[13px] rounded-xl hover:bg-white/5"
                                    >
                                        <FaArrowLeft className="text-[11px]" />
                                        <span className="uppercase tracking-[0.2em] text-[10px]">Different Magic Way</span>
                                    </motion.button>
                                </div>
                            </motion.form>
                        )}


                        {/* STEP 4: FACE VERIFICATION */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex-grow flex flex-col relative z-10"
                            >
                                {/* ── Cancel Button (top-left) ── */}
                                {!scanSuccess && (
                                    <div className="mb-6">
                                        <motion.button
                                            whileHover={{ x: -3, backgroundColor: "rgba(255,255,255,0.15)" }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                if (faceVideoRef.current?.srcObject) {
                                                    faceVideoRef.current.srcObject.getTracks().forEach(t => t.stop());
                                                }
                                                setStep(1);
                                            }}
                                            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm text-white font-semibold text-sm px-4 py-2 rounded-full transition-all"
                                        >
                                            <FaArrowLeft className="text-xs" />
                                            Cancel
                                        </motion.button>
                                    </div>
                                )}

                                {/* ── Main Content ── */}
                                <div className="flex flex-col items-center gap-7 flex-grow justify-center">

                                    {/* ── Circle Camera + Spinning Arc ── */}
                                    <div className="relative flex items-center justify-center w-56 h-56">

                                        {/* Spinning Blue Arc (SVG) */}
                                        <motion.svg
                                            className="absolute inset-0 w-full h-full"
                                            viewBox="0 0 224 224"
                                            fill="none"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                                        >
                                            <circle
                                                cx="112" cy="112" r="108"
                                                stroke="rgba(255,255,255,0.08)"
                                                strokeWidth="4"
                                            />
                                            <circle
                                                cx="112" cy="112" r="108"
                                                stroke="url(#blueArc)"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeDasharray="160 520"
                                                strokeDashoffset="0"
                                            />
                                            <defs>
                                                <linearGradient id="blueArc" x1="0" y1="0" x2="1" y2="1">
                                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                                    <stop offset="50%" stopColor="#3b82f6" />
                                                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
                                                </linearGradient>
                                            </defs>
                                        </motion.svg>

                                        {/* Camera Circle */}
                                        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] relative bg-black">
                                            {/* Video fill — z-0 so overlays sit on top */}
                                            <video
                                                ref={faceVideoCallbackRef}
                                                autoPlay
                                                playsInline
                                                muted
                                                className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1] z-0"
                                                style={{ borderRadius: "50%" }}
                                            />

                                            {/* Horizontal scan line when scanning */}
                                            {isScanning && !scanSuccess && (
                                                <motion.div
                                                    animate={{ top: ["5%", "95%", "5%"] }}
                                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_12px_rgba(59,130,246,0.8)] z-10"
                                                />
                                            )}

                                            {/* Success overlay */}
                                            {scanSuccess && (
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-700/90 flex items-center justify-center z-20 backdrop-blur-sm">
                                                    <motion.div
                                                        initial={{ scale: 0, rotate: -90 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        transition={{ type: "spring", stiffness: 220, damping: 14 }}
                                                    >
                                                        <FaCheckCircle className="text-white text-6xl drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* ── Title + Status ── */}
                                    <div className="text-center space-y-2">
                                        <h3 className="text-2xl font-black text-white tracking-tight">
                                            Face Verification
                                        </h3>

                                        {/* Status line */}
                                        <div className="flex items-center justify-center gap-2">
                                            {!scanSuccess ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                                                    >
                                                        <FaSpinner className="text-blue-400 text-sm" />
                                                    </motion.div>
                                                    <motion.span
                                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                                        transition={{ duration: 1.8, repeat: Infinity }}
                                                        className="text-blue-400 font-semibold text-sm tracking-wide"
                                                    >
                                                        {isScanning ? "Scanning Face..." : "Initializing Camera..."}
                                                    </motion.span>
                                                </>
                                            ) : (
                                                <span className="text-green-400 font-semibold text-sm tracking-wide flex items-center gap-2">
                                                    <FaCheckCircle className="text-green-400" />
                                                    Identity Confirmed!
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-white/40 text-[13px] font-medium max-w-[240px] mx-auto leading-relaxed">
                                            {scanSuccess
                                                ? "Welcome back! Redirecting you now..."
                                                : "Look directly at the camera. Ensure good lighting."}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>

                    {/* Footer Links - Slightly Smaller */}
                    <div className="mt-10 pt-8 text-center lg:text-left relative z-10 border-t border-sky-200/20">
                        <p className="text-sky-100/80 font-medium text-sm">
                            Don't have an Account?{" "}
                            <Link to="/signup" className="text-blue-400 font-bold underline decoration-blue-400/50 decoration-2 underline-offset-4">
                                Sign Up/Register
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
                body { background: #f8fbff; }
                input::-ms-reveal,
                input::-ms-clear {
                  display: none;
                }
            `}</style>
        </div>
    );
};

export default SignIn;
