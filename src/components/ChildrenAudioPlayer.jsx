import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, Music, Sparkles } from 'lucide-react';
import { getStoryChapters } from '../utils/storyGenerator';

const buddies = [
    { id: 'monkey', name: 'Minku Monkey', icon: '🐒', pitch: 1.8, rate: 1.1, intro: "Khau-Khau! Namaste! I am Minku the Monkey. Let's hear this story while we swing through the trees! " },
    { id: 'cat', name: 'Kitty Cat', icon: '🐱', pitch: 2.0, rate: 0.8, intro: "Meow! Hello little friend. I am Kitty. Let's purr-fectly enjoy this story together. " },
    { id: 'doraemon', name: 'Doraemon', icon: '🤖', pitch: 1.5, rate: 1.0, intro: "Hey! I'm Doraemon! I've used my translation tool to tell you this story! " },
    { id: 'bheem', name: 'Chhota Bheem', icon: '💪', pitch: 1.1, rate: 0.9, intro: "Jai Hind! I am Chhota Bheem. Ready for a brave adventure from Dholakpur? Let's go! " }
];

const ChildrenAudioPlayer = ({ book, isOpen, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [selectedBuddy, setSelectedBuddy] = useState(buddies[0]);
    const { chapters, recommendedBuddy } = useMemo(() => getStoryChapters(book), [book]);

    // Auto-select recommended buddy for the book
    useEffect(() => {
        if (book && recommendedBuddy) {
            const buddy = buddies.find(b => b.id === recommendedBuddy) || buddies[0];
            setSelectedBuddy(buddy);
        }
    }, [book, recommendedBuddy]);

    const speak = useCallback((text, buddyIntro) => {
        if (!window.speechSynthesis || !text) return;

        window.speechSynthesis.cancel();
        
        // Short delay to ensure cancel is processed
        setTimeout(() => {
            // First speak buddy intro if provided
            if (buddyIntro) {
                const introUtterance = new SpeechSynthesisUtterance(buddyIntro);
                configureUtterance(introUtterance);
                introUtterance.onend = () => speakText(text);
                window.speechSynthesis.speak(introUtterance);
            } else {
                speakText(text);
            }
        }, 50);
    }, [isPlaying, currentChapter, chapters.length, volume, isMuted, selectedBuddy]);

    const configureUtterance = (utterance) => {
        const voices = window.speechSynthesis.getVoices();
        const voiceKeywords = ['child', 'kid', 'google us english', 'samantha', 'zira', 'female', 'premium'];
        let selectedVoice = null;
        
        for (const keyword of voiceKeywords) {
            selectedVoice = voices.find(v => v.name.toLowerCase().includes(keyword));
            if (selectedVoice) break;
        }

        if (selectedVoice) utterance.voice = selectedVoice;
        utterance.pitch = selectedBuddy.pitch; 
        utterance.rate = selectedBuddy.rate; 
        utterance.volume = isMuted ? 0 : volume;
    };

    const speakText = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        configureUtterance(utterance);
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
            setIsSpeaking(true); // Keep sparkles while waiting or moving
            if (isPlaying && currentChapter < chapters.length - 1) {
                setCurrentChapter(prev => prev + 1);
            } else if (currentChapter === chapters.length - 1) {
                setIsPlaying(false);
                setIsSpeaking(false);
            } else {
                setIsSpeaking(false);
            }
        };

        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        if (isPlaying && isOpen && chapters[currentChapter]) {
            speak(chapters[currentChapter].content, currentChapter === 0 ? selectedBuddy.intro : null);
        } else {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    }, [isPlaying, currentChapter, isOpen, speak, chapters.length, selectedBuddy.intro]);

    useEffect(() => {
        if (!isOpen) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setCurrentChapter(0);
        }
    }, [isOpen]);

    if (!isOpen || !book) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100000] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-white rounded-[3rem] shadow-2xl w-full max-w-xl overflow-hidden relative"
                >
                    {/* Header/Banner */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-white relative">
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        <div className="flex flex-row items-center gap-6">
                            <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-white shrink-0">
                                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-black mb-1 font-['Comic_Sans_MS',_cursive,sans-serif]">{book.title}</h2>
                                <p className="text-indigo-100 font-bold opacity-80 uppercase tracking-widest text-xs">Audio Storyteller</p>
                                
                                {/* BUDDY SELECTOR */}
                                <div className="mt-4 flex gap-2">
                                    {buddies.map(buddy => (
                                        <button
                                            key={buddy.id}
                                            onClick={() => {
                                                setSelectedBuddy(buddy);
                                                setCurrentChapter(0); // Restart story with new buddy
                                                setIsPlaying(false);
                                            }}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all ${
                                                selectedBuddy.id === buddy.id 
                                                    ? 'bg-amber-400 scale-125 shadow-lg shadow-amber-500/50' 
                                                    : 'bg-white/20 hover:bg-white/40'
                                            }`}
                                            title={buddy.name}
                                        >
                                            {buddy.icon}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Animated Sparkles when playing */}
                        {isSpeaking && (
                            <div className="absolute inset-0 pointer-events-none">
                                <motion.div 
                                    animate={{ 
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 0.8, 0.3],
                                        rotate: [0, 90, 180]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute top-4 left-1/2"
                                >
                                    <Sparkles className="text-amber-300 w-6 h-6" />
                                </motion.div>
                            </div>
                        )}
                    </div>

                    {/* Progress & Content */}
                    <div className="p-8">
                        <div className="flex items-center gap-4 mb-6 bg-amber-50 p-4 rounded-2xl border border-amber-100">
                            <div className="text-4xl animate-bounce">{selectedBuddy.icon}</div>
                            <div className="flex-1">
                                <p className="text-[10px] font-black uppercase text-amber-600 tracking-widest">Your Story Buddy</p>
                                <p className="text-indigo-900 font-black font-['Comic_Sans_MS',_cursive,sans-serif]">{selectedBuddy.name} is speaking...</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="h-2 bg-indigo-50 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                    animate={{ width: `${chapters.length > 0 ? ((currentChapter + 1) / chapters.length) * 100 : 0}%` }}
                                />
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 mb-8 min-h-[120px] flex items-center justify-center text-center relative border border-slate-100">
                            <AnimatePresence mode="wait">
                                    <motion.p 
                                    key={`${selectedBuddy.id}-${currentChapter}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="text-indigo-950 font-bold text-lg leading-relaxed italic"
                                >
                                    "{chapters[currentChapter]?.content}"
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-6">
                                <button 
                                    onClick={() => setCurrentChapter(prev => Math.max(0, prev - 1))}
                                    className="p-3 text-indigo-400 hover:text-indigo-600 transition-colors disabled:opacity-30"
                                    disabled={currentChapter === 0}
                                >
                                    <SkipBack className="w-8 h-8 fill-current" />
                                </button>
                                
                                <button 
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="w-24 h-24 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-indigo-200"
                                >
                                    {isPlaying ? <Pause className="w-12 h-12 fill-current" /> : <Play className="w-12 h-12 fill-current ml-1" />}
                                </button>

                                <button 
                                    onClick={() => setCurrentChapter(prev => Math.min(chapters.length - 1, prev + 1))}
                                    className="p-3 text-indigo-400 hover:text-indigo-600 transition-colors disabled:opacity-30"
                                    disabled={currentChapter === chapters.length - 1}
                                >
                                    <SkipForward className="w-8 h-8 fill-current" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 w-full max-w-xs bg-slate-100 p-2 rounded-full">
                                <button onClick={() => setIsMuted(!isMuted)} className="p-2 text-slate-500 hover:text-indigo-600">
                                    {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="1" 
                                    step="0.1" 
                                    value={volume} 
                                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                                    className="flex-1 accent-indigo-500 h-1"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 py-3 text-center border-t border-slate-100 flex items-center justify-center gap-2">
                        <Music className="w-4 h-4 text-indigo-300 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Magic Cartoon Voices</span>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ChildrenAudioPlayer;
