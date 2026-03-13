import React, { useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Maximize, ZoomIn, ZoomOut, Minimize, Search, Book as BookIcon } from "lucide-react";

// The Realistic Page Component
const Page = forwardRef((props, ref) => {
    const isLeftPage = props.number % 2 !== 0; // In spread mode after cover, odd pages are left

    return (
        <div className="page bg-white shadow-inner relative overflow-hidden h-full" ref={ref}>
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }} />

            {/* Page Header */}
            {!props.isCover && (
                <div className={`absolute top-6 md:top-8 left-8 right-8 flex ${isLeftPage ? 'flex-row' : 'flex-row-reverse'} justify-between items-center z-20 border-b border-slate-200 pb-2`}>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-800">Page {props.number}</span>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                        {props.headerTitle}
                    </span>
                </div>
            )}

            <div className={`page-content h-full p-8 md:p-12 pt-16 md:pt-20 pb-16 flex flex-col relative z-10 ${isLeftPage ? 'border-r border-black/5' : 'border-l border-black/5'}`}>
                {/* Spine Shadow Effect */}
                <div className={`absolute top-0 bottom-0 w-24 md:w-32 pointer-events-none z-10 ${isLeftPage ? 'right-0 bg-gradient-to-l from-black/[0.1] to-transparent' : 'left-0 bg-gradient-to-r from-black/[0.1] to-transparent'}`} />
                <div className={`absolute top-0 bottom-0 w-1 pointer-events-none z-20 ${isLeftPage ? 'right-0 bg-black/10' : 'left-0 bg-black/10'}`} />
                
                {/* Page Content */}
                {props.children}

                {/* Footer with working Flip Button */}
                {!props.isCover && props.showFlipButton && (
                    <div className="mt-auto pt-4 flex justify-center">
                        <button 
                            onClick={props.onFlipRequest}
                            className="px-6 py-2 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer z-30 flex items-center gap-2 relative shadow-sm"
                        >
                            {isLeftPage ? 'Flip Page' : 'Next Page'} 
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
});

export default function BookPreview({ bookInfo, chapters = [] }) {
  const currentInfo = bookInfo || {
    title: "My Masterpiece",
    author: "Young Writer",
    synopsis: "",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
  };

  const bookRef = useRef();
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const handleNextPage = () => {
      if (bookRef.current && bookRef.current.pageFlip()) {
          bookRef.current.pageFlip().flipNext();
      }
  };

  const handlePrevPage = () => {
      if (bookRef.current && bookRef.current.pageFlip()) {
          bookRef.current.pageFlip().flipPrev();
      }
  };

  const handleGoToPage = (pageNum) => {
      if (bookRef.current && bookRef.current.pageFlip()) {
          bookRef.current.pageFlip().flip(pageNum);
      }
  };

  return (
    <div className={`h-full flex flex-col bg-slate-900 border-l border-slate-800 relative overflow-hidden transition-all duration-500 ${isFullScreen ? "fixed inset-0 z-[100] w-full" : ""}`}>
      {/* Background decoration */}
      <div className="absolute inset-x-0 bottom-[-20%] h-[50%] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none" />

      {/* Top Bar */}
      <div className="flex justify-between items-center p-6 relative z-10 transition-all">
        <h2 className="text-2xl font-bold text-white tracking-tight">Interactive Preview</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsZoomed(!isZoomed)}
            className={`p-2.5 rounded-xl transition-all shadow-lg ${isZoomed ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"}`}
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => setIsFullScreen(!isFullScreen)}
            className={`p-2.5 rounded-xl transition-all shadow-lg ${isFullScreen ? "bg-amber-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"}`}
            title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullScreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Flipbook Area */}
      <div className={`flex-1 flex items-center justify-center p-4 md:p-8 relative z-10 overflow-auto ${isZoomed ? "items-start pt-20" : ""}`}>
        <div className={`book-container relative rounded-lg flex shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-500 origin-top ${isZoomed ? "scale-125 md:scale-150 mb-32" : "scale-100"}`} style={{ perspective: '2000px' }}>
          <HTMLFlipBook 
            width={450} 
            height={600} 
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            showCover={true} 
            className="demo-book"
            ref={bookRef}
            drawShadow={true}
            maxShadowOpacity={0.6}
            flippingTime={800}
          >
            {/* Front Cover */}
            <div className="page bg-indigo-950 flex flex-col items-center justify-center shadow-inner relative p-0 m-0" data-density="hard">
              <div 
                className="w-full h-full flex flex-col p-8 items-center justify-center bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('${currentInfo.coverImage}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80" />
                <h1 className="text-4xl text-white font-serif font-black text-center relative z-10 drop-shadow-lg tracking-tight uppercase break-words w-full">{currentInfo.title || "Untitled Book"}</h1>
                <div className="h-0.5 w-12 bg-amber-500 my-6 relative z-10" />
                <p className="text-white/90 font-bold relative z-10 uppercase tracking-[0.3em] text-[10px] text-center">{currentInfo.author || "Unknown"}</p>
                
                <div className="absolute bottom-6 left-0 right-0 text-center">
                   <p className="text-[8px] font-black tracking-[0.4em] text-white/50 uppercase">Published by Gyan Sagar Public School</p>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Page 1: Credits */}
            <Page number={1} headerTitle="Credits" isCover={false} showFlipButton={true} onFlipRequest={handleNextPage}>
               <div className="h-full flex flex-col items-center justify-center text-center opacity-50 relative z-30">
                  <div className="w-16 h-px bg-slate-300 mb-6" />
                  <p className="text-xs uppercase font-black tracking-[0.2em] text-slate-500 mb-2">{currentInfo.title || "Untitled Book"}</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Written by {currentInfo.author || "Unknown"}</p>
                  <div className="w-8 h-px bg-slate-200 my-6" />
                  <p className="text-[8px] uppercase font-black tracking-[0.3em] text-slate-300">Published by Gyan Sagar Public School</p>
               </div>
            </Page>

            {/* Page 2: Table of Contents */}
            <Page number={2} headerTitle="Table of Contents" isCover={false} showFlipButton={true} onFlipRequest={handleNextPage}>
               <div className="h-full flex flex-col pt-4 relative z-30">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-slate-900/5">
                      <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-inner">
                          <BookIcon className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Contents</h2>
                  </div>

                  <div className="space-y-3 flex-1">
                      {chapters.map((chapter, idx) => (
                          <div key={idx} className="cursor-pointer group" onClick={() => handleGoToPage(idx * 2 + 3)}>
                              <div className="flex items-center gap-4 text-slate-600 transition-colors group-hover:text-indigo-600">
                                  <span className="text-[10px] font-black w-4 opacity-30 group-hover:opacity-100">{idx + 1}.</span>
                                  <div className="flex-1 flex items-baseline border-b border-dotted border-slate-300 group-hover:border-indigo-300 overflow-hidden">
                                      <span className="text-[11px] font-bold uppercase tracking-widest leading-none bg-white pr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[130px] md:max-w-[200px]">
                                          Ch {idx + 1}: {chapter.title}
                                      </span>
                                      <div className="flex-1" />
                                      <span className="text-[10px] font-black text-slate-400 bg-white pl-2 group-hover:text-indigo-500 whitespace-nowrap shrink-0">
                                          P. {idx * 2 + 3} - {idx * 2 + 4}
                                      </span>
                                  </div>
                              </div>
                          </div>
                      ))}
                      
                      {/* Dynamic About Author Link */}
                      <div className="cursor-pointer group" onClick={() => handleGoToPage(chapters.length * 2 + 3)}>
                          <div className="flex items-center gap-4 text-slate-600 transition-colors group-hover:text-indigo-600 pt-4">
                              <span className="text-[10px] font-black w-4 opacity-30 group-hover:opacity-100">*</span>
                              <div className="flex-1 flex items-baseline border-b border-dotted border-slate-300 group-hover:border-indigo-300">
                                  <span className="text-[11px] font-bold uppercase tracking-widest leading-none bg-white pr-2">About Author</span>
                                  <div className="flex-1" />
                                  <span className="text-[10px] font-black text-slate-400 bg-white pl-2 group-hover:text-indigo-500">
                                      P. {chapters.length * 2 + 3}
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="mt-auto pt-6 text-center border-t border-slate-100">
                      <p className="text-[9px] font-serif italic text-slate-400">"Every story begins with a single word, but its journey is defined by its contents."</p>
                  </div>
               </div>
            </Page>

            {/* Dynamic Chapter Pages */}
            {/* Dynamic Chapter Pages */}
            {chapters.flatMap((chapter, idx) => {
              // Create an element to extract text and generate drop cap
              let rawText = "";
              let dropCap = chapter.title ? chapter.title.charAt(0) : "T";
              let remainingStartText = chapter.title ? chapter.title.substring(1) + " visually starts here. Turn the pages to explore more of this wonderful story written by a young author." : "he chapter visually starts here.";

              if (chapter.content) {
                 // Simple extraction for the drop cap logic if there is content
                 const tempDiv = document.createElement('div');
                 tempDiv.innerHTML = chapter.content;
                 rawText = tempDiv.textContent || tempDiv.innerText || "";
                 if (rawText.length > 0) {
                     dropCap = rawText.charAt(0);
                     remainingStartText = rawText.substring(1, Math.min(200, rawText.length)) + "...";
                 }
              }

              return [
                  <Page key={`ch-${idx}-1`} number={idx * 2 + 3} headerTitle={`CHAPTER ${idx + 1}`} isCover={false} showFlipButton={true} onFlipRequest={handleNextPage}>
                    <div className="h-full flex flex-col pt-6 relative z-30 overflow-hidden">
                        <div className="text-slate-700 font-serif text-[15px] leading-relaxed antialiased text-left space-y-5 flex-1">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 tracking-tight">{chapter.title}</h2>
                            
                            {chapter.content ? (
                                /* Render the actual editor HTML content */
                                <div 
                                  className="prose-editor chapter-content"
                                  dangerouslySetInnerHTML={{ __html: chapter.content }}
                                />
                            ) : (
                                /* Fallback display if no content */
                                <>
                                    <p className="relative">
                                        <span className="float-left mr-3 text-6xl font-black text-amber-500 font-serif leading-[0.8] mt-1 select-none uppercase">
                                            {dropCap}
                                        </span>
                                        {remainingStartText}
                                    </p>
                                    <p>
                                        Our protagonist stood at the edge of the forest, holding a map that promised treasure but guaranteed danger...
                                        (Go to the Chapter Manager and click 'Write' to add your actual story content here!)
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                  </Page>,
                  <Page key={`ch-${idx}-2`} number={idx * 2 + 4} headerTitle={`CHAPTER ${idx + 1}`} isCover={false} showFlipButton={true} onFlipRequest={handleNextPage}>
                    <div className="h-full flex flex-col pt-6 relative z-30">
                        <div className="text-slate-700 font-serif text-[15px] leading-relaxed antialiased text-left space-y-5 flex flex-col items-center justify-center h-full text-center opacity-40">
                            <BookIcon className="w-8 h-8 opacity-20 mb-2" />
                            <p className="italic text-sm">Next page of Chapter {idx + 1}...</p>
                            <p className="text-xs max-w-[80%]">(In a full production version, the rich text editor content would calculate layout constraints and automatically flow text across as many pages as needed using CSS columns or pagination algorithms.)</p>
                        </div>
                    </div>
                  </Page>
              ];
            })}

            {/* About the Author */}
            <Page number={chapters.length * 2 + 3} headerTitle="AUTHOR BIO" isCover={false} showFlipButton={true} onFlipRequest={handleNextPage}>
                <div className="h-full flex flex-col pt-6 items-center justify-center text-center relative z-30">
                    <div className="w-24 h-24 bg-indigo-100 rounded-full mb-6 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                        <BookIcon className="w-8 h-8 text-indigo-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-1">{currentInfo.author || "Young Writer"}</h2>
                    <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-6">Author</p>
                    <p className="text-slate-600 font-serif text-sm leading-relaxed px-4">
                        A talented young creator who believes in the power of imagination and storytelling. They hope you enjoyed reading this masterpiece as much as they enjoyed writing it!
                    </p>
                </div>
            </Page>
            
            {/* Back Cover */}
            <div className="page bg-indigo-950 flex flex-col items-center justify-center border-l border-indigo-900 shadow-inner relative" data-density="hard">
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50" />
              <div className="h-full flex flex-col items-center justify-center p-8 text-center text-white relative z-10 w-full border-l-[12px] border-indigo-900/40">
                <BookIcon className="w-8 h-8 text-indigo-400 mb-4 opacity-50 mx-auto" />
                <h3 className="text-xl font-black uppercase tracking-widest mb-1 text-white/90 leading-tight">{currentInfo.title || "The End"}</h3>
                <p className="text-[9px] text-indigo-200 font-bold uppercase tracking-[0.3em] mb-6">By {currentInfo.author || "Unknown"}</p>

                <div className="text-left bg-black/20 p-5 rounded-2xl border border-white/5 shadow-inner mb-8 w-full">
                    <p className="text-[11px] text-indigo-100 font-serif leading-relaxed italic line-clamp-[8]">
                        {currentInfo.synopsis || "A mysterious and exciting journey awaits within these pages. No synopsis provided yet—go to the Book Info panel to add a descriptive blurb about your amazing story!"}
                    </p>
                </div>

                <button
                    onClick={() => handleGoToPage(0)}
                    className="group mt-auto mb-10 relative px-6 py-2 bg-white/10 hover:bg-white text-white hover:text-indigo-900 font-bold rounded-full shadow-lg border border-white/20 hover:border-white overflow-hidden transition-all flex items-center gap-2 cursor-pointer z-50 pointer-events-auto"
                >
                    <span className="uppercase text-[10px] tracking-widest transition-colors relative z-10">Read Again</span>
                </button>

                <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="text-[8px] font-black tracking-[0.4em] opacity-30 uppercase">Gyan Sagar Public School</p>
                </div>
              </div>
            </div>
          </HTMLFlipBook>
        </div>
      </div>

      {/* Helper text */}
      <div className="text-center p-6 text-slate-500 text-sm flex gap-2 justify-center items-center relative z-10 font-medium">
        <Search className="w-4 h-4 text-indigo-400" /> Click the buttons, flip the corners, or drag to turn pages
      </div>
    </div>
  );
}
