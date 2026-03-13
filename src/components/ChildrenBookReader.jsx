import React, { forwardRef } from 'react';
                                import HTMLFlipBook from 'react-pageflip';
                                import { AnimatePresence } from 'framer-motion';
                                import { X, Star, Sparkles, Book as BookIcon, ChevronLeft, Rocket, Search } from 'lucide-react';
import { getStoryChapters } from '../utils/storyGenerator';

const Page = forwardRef((props, ref) => {
    const isLeftPage = props.number % 2 !== 0; // In spread mode after cover, odd pages are left

    return (
        <div className="page bg-[#FDFBF7] shadow-inner relative overflow-hidden" ref={ref}>
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }} />

            {/* Page Header */}
            {!props.isCover && (
                <div className={`absolute top-8 left-10 right-10 flex ${isLeftPage ? 'flex-row' : 'flex-row-reverse'} justify-between items-center z-20 border-b border-amber-900/10 pb-2`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900/60">Page {props.number}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-900/60 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">{props.headerTitle}</span>
                </div>
            )}

            <div className={`page-content h-full p-12 pt-20 pb-16 flex flex-col relative z-10 ${isLeftPage ? 'border-r border-black/5' : 'border-l border-black/5'}`}>
                {/* Spine Shadow Effect */}
                <div className={`absolute top-0 bottom-0 w-32 pointer-events-none z-10 ${isLeftPage ? 'right-0 bg-gradient-to-l from-black/[0.1] to-transparent' : 'left-0 bg-gradient-to-r from-black/[0.1] to-transparent'}`} />
                <div className={`absolute top-0 bottom-0 w-1 pointer-events-none z-20 ${isLeftPage ? 'right-0 bg-black/10' : 'left-0 bg-black/10'}`} />
                {props.children}

                {!props.isCover && (
                    <div className="mt-auto pt-4 flex justify-center">
                        <div className="px-6 py-1.5 bg-amber-50/80 rounded-full border border-amber-100 text-[9px] font-bold uppercase tracking-[0.3em] text-amber-600 select-none cursor-pointer hover:bg-amber-100 transition-colors">Flip Page</div>
                    </div>
                )}
            </div>
        </div>
    );
});

const ChildrenBookReader = ({ book, isOpen, onClose }) => {
    const bookRef = React.useRef();

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!book) return null;

    const { chapters } = getStoryChapters(book);

    // Helper to split text into pages based on character limits
    const paginateText = (text, firstPageLimit, nextPageLimit) => {
        const words = text.split(' ');
        const pages = [];
        let currentPageText = [];
        let currentLength = 0;
        let isFirstPage = true;

        words.forEach(word => {
            const limit = isFirstPage ? firstPageLimit : nextPageLimit;
            if (currentLength + word.length > limit) {
                pages.push(currentPageText.join(' '));
                currentPageText = [word];
                currentLength = word.length;
                isFirstPage = false;
            } else {
                currentPageText.push(word);
                currentLength += word.length + 1;
            }
        });
        if (currentPageText.length > 0) pages.push(currentPageText.join(' '));
        return pages;
    };

    // Generate flat list of all book pages
    const bookPages = [];
    chapters.forEach((ch) => {
        const pagedContent = paginateText(ch.content, 450, 550);
        pagedContent.forEach((content, pIdx) => {
            bookPages.push({
                title: ch.title,
                content,
                isChapterStart: pIdx === 0,
                isLastInChapter: pIdx === pagedContent.length - 1,
                stats: ch.stats,
                quote: ch.quote
            });
        });
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-8 bg-black/95 overflow-hidden font-sans">
                    <div
                        className="relative w-full max-w-6xl h-screen flex flex-col items-center justify-center pt-2 animate-in fade-in zoom-in duration-300"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={onClose}
                            className="absolute top-10 right-10 p-3 bg-white/10 hover:bg-amber-500 rounded-full text-white transition-all z-[130]"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* THE BOOK WRAPPER WITH 3D SHADOWS */}
                        <div className="relative group transition-all duration-700 hover:scale-[1.02]">
                            <div className="absolute inset-x-0 -bottom-20 h-32 bg-indigo-500/20 blur-[60px] rounded-full transform scale-x-125 z-0" />

                            <div className="book-container relative rounded-lg flex z-10" style={{ perspective: '3000px' }}>
                                <div className="relative shadow-[0_50px_100px_rgba(0,0,0,0.7)] rounded-lg overflow-hidden">
                                    <HTMLFlipBook
                                        width={600}
                                        height={800}
                                        size="stretch"
                                        minWidth={450}
                                        maxWidth={900}
                                        minHeight={650}
                                        maxHeight={1100}
                                        maxShadowOpacity={0.7}
                                        showCover={true}
                                        mobileScrollSupport={true}
                                        className="demo-book"
                                        ref={bookRef}
                                        useMouseEvents={true}
                                        flippingTime={1000}
                                        usePortrait={false}
                                        startPage={0}
                                        drawShadow={true}
                                    >
                                        {[
                                            // 1. FRONT COVER
                                            <div key="front-cover" className="page shadow-2xl relative" data-density="hard" style={{ backgroundColor: '#2c3e50' }}>
                                                {book.cover ? (
                                                     <div className="absolute inset-0" style={{ backgroundImage: `url(${book.cover})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.9 }} />
                                                ) : (
                                                     <div className="absolute inset-0 bg-indigo-600" />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none" />
                                                <div className="h-full flex flex-col items-center justify-center p-10 text-center text-white relative z-10 border-r-8 border-black/30">
                                                    
                                                    <div className="mt-auto">
                                                        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-lg leading-tight">{book.title}</h1>
                                                        <p className="text-amber-300 font-bold tracking-widest uppercase text-sm mb-10 drop-shadow-md">By {book.author}</p>
                                                    </div>

                                                    {/* STICKERS */}
                                                    { book.badge && (
                                                       <div className="absolute top-12 left-8 -rotate-12 bg-amber-500 py-2 px-4 rounded-lg shadow-xl text-white font-bold border-2 border-white z-20 shadow-[5px_5px_0px_rgba(0,0,0,0.3)]">
                                                           {book.badge}
                                                       </div>
                                                    )}

                                                    <div className="mt-10 pt-10 border-t border-white/30 w-full text-[10px] font-black tracking-[0.4em] drop-shadow-sm text-white/80">Gyan Sagar Public School © 2026</div>
                                                </div>
                                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/40 to-transparent" />
                                            </div>,

                                            // 2. CREDITS
                                            <Page key="credits" number={1} headerTitle="Credits" isCover={false}>
                                                <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                                                    <div className="w-16 h-16 bg-amber-100 rounded-3xl flex items-center justify-center text-amber-600 mb-6 shadow-sm">
                                                        {book.category?.includes("Space") ? <Rocket className="w-8 h-8" /> : 
                                                         book.category?.includes("Mystery") ? <Search className="w-8 h-8" /> :
                                                         book.category?.includes("Magical") ? <Sparkles className="w-8 h-8" /> :
                                                         <BookIcon className="w-8 h-8" />}
                                                    </div>
                                                    <div className="text-2xl font-black text-slate-800 mb-2 leading-tight px-4">{book.title}</div>
                                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">By {book.author}</div>
                                                    
                                                    <div className="w-12 h-[2px] bg-slate-300 mb-6" />
                                                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Published by Gyan Sagar Public School</p>
                                                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Genre: {book.category}</p>
                                                </div>
                                            </Page>,

                                            // 3. TABLE OF CONTENTS
                                            <Page key="toc" number={2} headerTitle="Table of Contents" isCover={false}>
                                                <div className="h-full flex flex-col pt-10">
                                                    <div className="flex items-center gap-3 mb-10 pb-4 border-b-2 border-amber-900/10">
                                                        <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                                            <Sparkles className="w-5 h-5 text-white" />
                                                        </div>
                                                        <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Contents</h2>
                                                    </div>

                                                    <div className="space-y-6">
                                                        {chapters.map((ch, idx) => {
                                                            let startPage = 3;
                                                            for (let i = 0; i < idx; i++) {
                                                                startPage += paginateText(chapters[i].content, 450, 550).length;
                                                            }
                                                            const pagedContent = paginateText(ch.content, 450, 550);
                                                            const endPage = startPage + pagedContent.length - 1;

                                                            return (
                                                                <div key={idx} className="cursor-pointer group" onClick={() => bookRef.current.pageFlip().flip(startPage)}>
                                                                    <div className="flex items-center gap-4 text-slate-600 group-hover:text-indigo-600 transition-colors">
                                                                        <span className="text-sm font-black w-6 text-amber-500 text-right">{idx + 1}.</span>
                                                                        <div className="flex-1 flex items-baseline border-b-2 border-dotted border-slate-200 group-hover:border-indigo-200 transition-colors pb-1">
                                                                            <span className="text-sm font-bold uppercase tracking-widest">{ch.title}</span>
                                                                            <div className="flex-1" />
                                                                            <span className="text-xs font-black text-slate-400 group-hover:text-indigo-500">
                                                                                {startPage === endPage ? `P. ${startPage}` : `P. ${startPage}-${endPage}`}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    <div className="mt-auto pt-10 text-center">
                                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">"A story waiting to be told"</p>
                                                    </div>
                                                </div>
                                            </Page>,

                                            // 4. CONTENT PAGES
                                            ...bookPages.map((page, i) => (
                                                <Page key={`content-${i}`} number={i + 3} headerTitle={page.title.toUpperCase()} isCover={false}>
                                                    <div className="h-full flex flex-col pt-10">
                                                        <div className="w-full">
                                                            <div className="text-slate-800 font-medium text-lg leading-[2] antialiased text-left space-y-6">
                                                                <p className="relative">
                                                                    {page.isChapterStart ? (
                                                                        <>
                                                                            <span className="float-left mr-4 text-7xl font-black text-indigo-500 leading-[0.8] mt-2 select-none font-serif drop-shadow-sm">
                                                                                {page.content.trim().charAt(0)}
                                                                            </span>
                                                                            {page.content.trim().slice(1)}
                                                                        </>
                                                                    ) : (
                                                                        page.content
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Page>
                                            )),

                                            // 5. FILLER PAGE (Optional)
                                            ((bookPages.length + 3) % 2 !== 0) ? (
                                                <Page key="filler" number={bookPages.length + 3} headerTitle="The End" isCover={false}>
                                                    <div className="h-full flex flex-col items-center justify-center opacity-10">
                                                        <Star className="w-16 h-16 mb-6" />
                                                        <div className="w-16 h-2 bg-slate-900 rounded-full" />
                                                    </div>
                                                </Page>
                                            ) : null,

                                            // 6. BACK COVER
                                            <div key="back-cover" className="page shadow-2xl relative" data-density="hard" style={{ backgroundColor: '#2c3e50' }}>
                                                {book.cover ? (
                                                     <div className="absolute inset-0" style={{ backgroundImage: `url(${book.cover})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }} />
                                                ) : (
                                                     <div className="absolute inset-0 bg-indigo-900" />
                                                )}
                                                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
                                                <div className="h-full flex flex-col items-center justify-center p-12 text-center text-white relative z-10 border-l-8 border-black/30">
                                                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md mb-8 ring-4 ring-white/10">
                                                        <BookIcon className="w-16 h-16 text-white" />
                                                    </div>

                                                    <h3 className="text-2xl font-black uppercase tracking-widest mb-2 text-white drop-shadow-md">The End</h3>
                                                    <p className="text-xs text-amber-300 font-bold uppercase tracking-[0.3em] mb-12 drop-shadow-md">Thanks for reading!</p>

                                                    <button
                                                        onClick={() => {
                                                            bookRef.current.pageFlip().flip(0);
                                                        }}
                                                        className="group relative px-8 py-4 bg-white text-indigo-600 font-black rounded-full shadow-2xl overflow-hidden hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                                                    >
                                                        <span className="relative z-10 uppercase text-xs tracking-widest group-hover:text-white transition-colors">Read Again</span>
                                                        <ChevronLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-1 group-hover:text-white transition-all" />
                                                        <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                    </button>

                                                    <div className="mt-16 text-[10px] font-black tracking-widest opacity-60 text-white">Gyan Sagar Public School © 2026</div>
                                                </div>
                                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent" />
                                            </div>
                                        ].filter(child => child !== null && child !== false)}
                                    </HTMLFlipBook>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ChildrenBookReader;
