import React, { useState, useEffect } from "react";
import { UploadCloud, CheckCircle, Save, FileText, DownloadCloud, Globe, Loader2, Sparkles, AlertCircle, ArrowRight, CheckSquare, Square } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublishPanel() {
  const [currentStep, setCurrentStep] = useState(0); 
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [downloading, setDownloading] = useState(null);

  // States for checklists
  const [draftingChecks, setDraftingChecks] = useState({ title: true, cover: false, content: false });
  const [reviewChecks, setReviewChecks] = useState({ spellCheck: false, formatting: false, guidelines: false });

  const isDraftingComplete = Object.values(draftingChecks).every(Boolean);
  const isReviewComplete = Object.values(reviewChecks).every(Boolean);

  const steps = ["Drafting", "Review", "Ready for Launch"];

  const handlePublish = () => {
    if (publishSuccess) return;
    setIsPublishing(true);
    // Simulate network request
    setTimeout(() => {
      setIsPublishing(false);
      setPublishSuccess(true);
    }, 2500);
  };

  const handleExport = (type) => {
    setDownloading(type);
    // Simulate generation time
    setTimeout(() => {
      setDownloading(null);
      alert(`Success! Your ${type} has been generated and is ready for download.`);
    }, 1500);
  };

  const toggleDraftingCheck = (key) => {
    setDraftingChecks(prev => ({...prev, [key]: !prev[key]}));
  };

  const toggleReviewCheck = (key) => {
    setReviewChecks(prev => ({...prev, [key]: !prev[key]}));
  };

  // Content for each step
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Drafting
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="flex flex-col min-h-full bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-inner relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-[80px] -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white rounded-xl shadow-sm text-indigo-500"><FileText className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl">Drafting Requirements</h3>
                <p className="text-slate-500 text-sm">Complete these steps before reviewing.</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <ChecklistItem 
                checked={draftingChecks.title} 
                onClick={() => toggleDraftingCheck('title')}
                title="Book Title & Author Info" 
                desc="Fill in the basic book details in the Book Info panel." 
              />
              <ChecklistItem 
                checked={draftingChecks.cover} 
                onClick={() => toggleDraftingCheck('cover')}
                title="Design Cover Art" 
                desc="Select or upload a cover image to represent your story." 
              />
              <ChecklistItem 
                checked={draftingChecks.content} 
                onClick={() => toggleDraftingCheck('content')}
                title="Write at least 3 Chapters" 
                desc="Your book needs a substantial amount of content before publishing." 
              />
            </div>

            <button 
              onClick={() => setCurrentStep(1)}
              disabled={!isDraftingComplete}
              className="mt-auto w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:active:scale-100 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Proceed to Review <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        );

      case 1: // Review
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="flex flex-col min-h-full bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-inner relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white rounded-xl shadow-sm text-amber-500"><AlertCircle className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl">Final Review</h3>
                <p className="text-slate-500 text-sm">Ensure your book meets our quality standards.</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <ChecklistItem 
                checked={reviewChecks.spellCheck} 
                onClick={() => toggleReviewCheck('spellCheck')}
                title="Run Spell & Grammar Check" 
                desc="Ensure your story is free from obvious typographical errors." 
                iconColor="text-amber-500"
              />
              <ChecklistItem 
                checked={reviewChecks.formatting} 
                onClick={() => toggleReviewCheck('formatting')}
                title="Check Layout & Formatting" 
                desc="Use Book Preview to ensure pages and images look correct." 
                iconColor="text-amber-500"
              />
              <ChecklistItem 
                checked={reviewChecks.guidelines} 
                onClick={() => toggleReviewCheck('guidelines')}
                title="Agree to Community Guidelines" 
                desc="Confirm your story is age-appropriate and original." 
                iconColor="text-amber-500"
              />
            </div>

            <button 
              onClick={() => setCurrentStep(2)}
              disabled={!isReviewComplete}
              className="mt-auto w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:active:scale-100 bg-amber-500 hover:bg-amber-600 text-white"
            >
              Prepare for Launch <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        );

      case 2: // Launch
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="min-h-full flex flex-col gap-6"
          >
            {/* Export Options */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
               <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <DownloadCloud className="w-5 h-5 text-indigo-500" /> Save Offline
               </h3>
               <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleExport("PDF")}
                    disabled={downloading !== null}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all group disabled:opacity-50"
                  >
                    {downloading === "PDF" ? <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-2" /> : <FileText className="w-8 h-8 text-slate-300 group-hover:text-indigo-500 mb-2 transition-colors" />}
                    <span className="font-bold text-slate-700 text-sm">Export PDF</span>
                  </button>
                  <button 
                    onClick={() => handleExport("eBook")}
                    disabled={downloading !== null}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all group disabled:opacity-50"
                  >
                   {downloading === "eBook" ? <Loader2 className="w-8 h-8 text-amber-500 animate-spin mb-2" /> : <Save className="w-8 h-8 text-slate-300 group-hover:text-amber-500 mb-2 transition-colors" />}
                   <span className="font-bold text-slate-700 text-sm">Export eBook</span>
                  </button>
               </div>
            </div>

            {/* Marketplace Publish */}
            <AnimatePresence mode="wait">
              {!publishSuccess ? (
                <motion.div 
                  key="publish-box"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                  className="bg-indigo-950 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center flex-1 shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/20 pointer-events-none" />
                  <div className="absolute -right-10 -top-10 text-white/5"><Globe className="w-48 h-48" /></div>
                  
                  <h3 className="text-2xl font-bold mb-2 relative z-10 flex items-center gap-3"><Globe className="w-8 h-8 text-indigo-300" /> Marketplace</h3>
                  <p className="text-indigo-200 text-sm mb-6 relative z-10 leading-relaxed pr-8">
                    Your book is ready! Publish it publicly to our library to reach thousands of young readers across the nation.
                  </p>
                  
                  <button 
                    onClick={handlePublish}
                    disabled={isPublishing}
                    className="mt-auto w-full bg-white text-indigo-900 font-bold py-4 rounded-xl shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:bg-indigo-50 hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 relative z-10 disabled:opacity-80 disabled:hover:scale-100"
                  >
                    {isPublishing ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Publishing to World...</>
                    ) : (
                      <><UploadCloud className="w-5 h-5" /> Publish to World</>
                    )}
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  className="bg-green-500 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center items-center text-center flex-1 shadow-2xl shadow-green-200"
                >
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}>
                    <CheckCircle className="w-16 h-16 text-white mb-4 drop-shadow-md" />
                  </motion.div>
                  <h3 className="text-3xl font-black mb-2 relative z-10 tracking-tight flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-300" /> Published!
                  </h3>
                  <p className="text-green-100 font-medium relative z-10 text-sm mb-6">
                    Your book is now live on the marketplace.
                  </p>
                  <button 
                    onClick={() => {
                        setPublishSuccess(false);
                    }}
                    className="mt-auto px-6 py-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-widest rounded-xl transition-colors relative z-10 shadow-inner"
                  >
                    Publish Updates
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col pt-8 pb-12 px-6">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Publish your Book</h2>
          <p className="text-slate-500 mt-1">Follow the steps to share your story with the world.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-slate-100 overflow-hidden flex-1 flex flex-col">
        <div className="p-8 md:px-16 md:pt-12 pb-6">
          {/* Status Tracker */}
          <div className="relative">
            {/* Background Lines */}
            <div className="absolute h-1.5 bg-slate-100 left-10 right-10 top-6 -z-10 rounded-full" />
            <motion.div 
              className="absolute h-1.5 bg-green-500 left-10 -z-10 rounded-full top-6"
              initial={{ width: "0%" }}
              animate={{ 
                width: currentStep === 0 ? "0%" : 
                       currentStep === 1 ? "50%" : 
                       "100%" 
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="flex items-center justify-between">
              {steps.map((step, idx) => {
                const isCompleted = currentStep > idx || publishSuccess;
                const isCurrent = currentStep === idx && !publishSuccess;
                const hitTarget = currentStep >= idx;
                
                // Determine if this step is clickable
                const isClickable = idx === 0 || 
                                   (idx === 1 && isDraftingComplete) || 
                                   (idx === 2 && isReviewComplete);

                return (
                  <div 
                    key={step} 
                    className={`flex flex-col items-center gap-3 group ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
                    onClick={() => {
                        if (!publishSuccess && isClickable) setCurrentStep(idx);
                    }}
                  >
                    <motion.div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl border-4 transition-all duration-300
                        ${isCompleted ? "bg-green-500 border-green-100 text-white shadow-lg shadow-green-200" : 
                          isCurrent ? "bg-indigo-600 border-indigo-100 text-white shadow-xl shadow-indigo-200" : 
                          "bg-white border-slate-100 text-slate-400"}
                      `}
                      whileHover={isClickable ? { scale: 1.1 } : {}}
                      whileTap={isClickable ? { scale: 0.95 } : {}}
                    >
                      {isCompleted ? <CheckCircle className="w-7 h-7" /> : (idx + 1)}
                    </motion.div>
                    <span className={`text-sm font-bold transition-colors ${hitTarget ? "text-slate-800" : "text-slate-400"}`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 p-6 md:p-8 lg:px-16 bg-white overflow-y-auto">
           <AnimatePresence mode="wait">
             {renderStepContent()}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Reusable Checklist Item Component
function ChecklistItem({ checked, onClick, title, desc, iconColor = "text-indigo-500" }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all group hover:bg-white
        ${checked ? "border-green-200 bg-green-50/30" : "border-slate-100 bg-white hover:border-slate-200"}
      `}
    >
      <div className={`mt-1 transition-transform group-hover:scale-110 ${checked ? "text-green-500" : "text-slate-300"}`}>
        {checked ? <CheckSquare className="w-6 h-6" /> : <Square className="w-6 h-6" />}
      </div>
      <div>
        <h4 className={`font-bold transition-colors ${checked ? "text-green-800" : "text-slate-700"}`}>{title}</h4>
        <p className="text-sm text-slate-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}
