import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({
    title,
    italicTitle,
    subtitle,
    tag,
    bgImage,
    accentColor = "text-amber-500",
    tagColor = "text-amber-500",
    tagBg = "bg-amber-500/10",
    tagBorder = "border-amber-500/20"
}) => {
    return (
        <section className="relative min-h-[45vh] md:min-h-[92vh] flex items-center justify-center pb-8 md:pb-12 px-4 text-white text-center overflow-hidden mb-20 md:mb-32 font-['Plus Jakarta Sans']">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
                {/* Gradient Overlays for depth and readability */}
                <div className="absolute inset-0 bg-slate-900/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mt-8 md:mt-12">
                {/* Animated Tag */}
                {tag && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`inline-flex items-center gap-2 px-6 py-2 bg-slate-900/60 border border-white/10 backdrop-blur-xl text-amber-500 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-10 shadow-2xl`}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        {tag}
                    </motion.div>
                )}

                {/* Main Title with mixed typography */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-black font-['Outfit'] tracking-tighter mb-6 md:mb-10 leading-[0.85] flex flex-wrap items-center justify-center gap-x-4 md:gap-x-10"
                >
                    <span className="text-white drop-shadow-2xl">{title}</span>
                    {italicTitle && (
                        <span className={`font-serif italic ${accentColor} font-normal drop-shadow-2xl`}>
                            {italicTitle}
                        </span>
                    )}
                </motion.h1>

                {/* Subtitle / Quote */}
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-lg text-white/90 font-medium italic max-w-2xl leading-relaxed mb-4 md:mb-8 px-4"
                    >
                        "{subtitle}"
                    </motion.p>
                )}

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col items-center gap-4 mt-12"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">Scroll to explore</span>
                    <div className="relative w-[1px] h-20 bg-white/10 overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 80] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-amber-500 to-transparent"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Prestige Glows – hidden on mobile to save GPU */}
            <div className="hidden md:block absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
            <div className="hidden md:block absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse delay-700 pointer-events-none"></div>
        </section>
    );
};

export default PageHero;
