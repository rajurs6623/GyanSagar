import React from "react";

import {
  FileText,
  Type,
  Lightbulb,
  ShieldCheck,
  CheckCircle,
  Mail,
  Clock,
  CalendarDays,
  Award,
  Globe,
  Share2,
} from "lucide-react";

const StoryBookStructure = ({ onCreateStory }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1️⃣ Hero Section */}
      <section className="bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-100 text-black pt-24 pb-32 px-6 text-center relative rounded-b-[3rem] shadow-2xl mb-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-black tracking-widest uppercase text-center text-black">
            The Author’s Story{" "}
            <span className="text-green-500">Structure Guide</span>
          </h3>
          <p className="text-xl md:text-2xl font-light text-blue-900 max-w-2xl mx-auto leading-relaxed">
            A Professional Guide to Writing and Designing Story Books
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        {/* 2️⃣ Cover Page Section */}
        <section className="py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
                1. Cover Page
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                      Book Title
                    </h3>
                    <p className="text-indigo-700 font-medium">
                      Subtitle (Optional)
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 className="text-lg font-medium text-purple-900">
                      Author Name
                    </h3>
                    <p className="text-purple-700 mt-1 text-sm">
                      Illustrator Name (If any)
                    </p>
                  </div>
                </div>
                {/* Illustration Placeholder */}
                <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 h-80 flex flex-col items-center justify-center text-gray-400">
                  <svg
                    className="w-16 h-16 mb-4 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium tracking-wide">
                    Cover Illustration Placement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ Title Page Section */}
        <section className="py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 text-center hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              2. Title Page
            </h2>
            <div className="max-w-md mx-auto aspect-[3/4] bg-gray-50 border border-gray-200 rounded-xl flex flex-col justify-center items-center p-8 space-y-8 shadow-sm">
              <h3 className="text-4xl font-bold text-gray-800 uppercase tracking-widest font-serif">
                Book Title
              </h3>
              <p className="text-gray-500 italic text-lg">
                Subtitle of the Book
              </p>
              <div className="w-16 h-[2px] bg-indigo-200"></div>
              <p className="text-gray-600 font-medium text-xl">
                By Author Name
              </p>
              <div className="mt-8 pt-8 text-sm text-gray-400 uppercase tracking-widest">
                Publisher Name / Logo
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ Copyright & Dedication Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                3. Copyright Page
              </h2>
              <div className="space-y-4 text-sm text-gray-600 font-mono bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p>
                  © {new Date().getFullYear()} Author Name. All rights reserved.
                </p>
                <p className="leading-relaxed">
                  No part of this publication may be reproduced, distributed, or
                  transmitted in any form or by any means, including
                  photocopying, recording, or other electronic or mechanical
                  methods.
                </p>
                <p>First Edition</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                4. Dedication
              </h2>
              <div className="text-center italic text-xl md:text-2xl text-gray-700 py-8 px-4 font-serif leading-relaxed">
                "To my family, for their endless support, patience, and
                boundless imagination."
              </div>
            </div>
          </div>
        </section>

        {/* 5️⃣ Table of Contents Section */}
        <section className="py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-4">
              5. Table of Contents
            </h2>
            <ul className="max-w-3xl mx-auto space-y-4">
              {[
                { num: 1, title: "The Journey Begins", page: 1 },
                { num: 2, title: "Discovering the Secret", page: 12 },
                { num: 3, title: "A Challenge Appears", page: 24 },
                { num: 4, title: "The Darkest Hour", page: 36 },
                { num: 5, title: "Victory and Return", page: 48 },
              ].map((chapter) => (
                <li
                  key={chapter.num}
                  className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-6">
                    <span className="text-indigo-300 font-extrabold text-2xl group-hover:text-indigo-500 transition-colors">
                      0{chapter.num}
                    </span>
                    <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {chapter.title}
                    </span>
                  </div>
                  <div className="flex-grow mx-6 border-b-2 border-dotted border-gray-200 relative top-2"></div>
                  <span className="text-gray-500 font-mono font-medium text-lg">
                    {chapter.page}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6️⃣ Story Structure Section */}
        <section className="py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              6. Core Story Structure
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              The fundamental narrative arc of your story
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Beginning",
                subtitle: "Introduction",
                desc: "Introduce characters, setting, and the normal world before the inciting incident changes everything.",
                color:
                  "bg-blue-50 text-blue-900 border-blue-100 hover:border-blue-300",
              },
              {
                title: "Middle",
                subtitle: "Rising Action",
                desc: "The journey begins. Characters face obstacles, develop relationships, and tension builds.",
                color:
                  "bg-indigo-50 text-indigo-900 border-indigo-100 hover:border-indigo-300",
              },
              {
                title: "Climax",
                subtitle: "The Peak",
                desc: "The highest point of tension. The ultimate challenge the protagonist must face to succeed.",
                color:
                  "bg-purple-50 text-purple-900 border-purple-100 hover:border-purple-300",
              },
              {
                title: "Ending",
                subtitle: "Resolution",
                desc: "Conflict is resolved, falling action ensues, and characters return to a new normal.",
                color:
                  "bg-pink-50 text-pink-900 border-pink-100 hover:border-pink-300",
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${phase.color}`}
              >
                <p className="text-sm font-bold uppercase tracking-wider mb-1 opacity-70">
                  {phase.subtitle}
                </p>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="opacity-80 leading-relaxed text-sm md:text-base">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7️⃣ Chapter Layout Example Section */}
        <section className="py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-4">
              7. Chapter Layout Example
            </h2>
            <div className="bg-[#faf9f6] rounded-xl p-8 md:p-12 border border-gray-200 shadow-inner">
              <div className="text-center mb-10">
                <h3 className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">
                  Chapter One
                </h3>
                <h4 className="text-4xl font-bold text-gray-900 font-serif">
                  The Whispering Woods
                </h4>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-gray-800 leading-relaxed text-lg font-serif">
                  <p>
                    <span className="float-left text-6xl font-bold text-indigo-900 mr-3 mt-1 leading-none">
                      O
                    </span>
                    nce upon a time, nestled deep within the valley of shadows,
                    lay a forest untouched by sunlight. The trees were ancient,
                    their gnarled roots twisting into the earth like grasping
                    fingers.
                  </p>
                  <p>
                    Elara stood at the edge, her lantern flickering in the cool,
                    biting breeze. She had been warned time and time again not
                    to enter, but the whispers were calling her name, soft and
                    melodic, weaving through the branches...
                  </p>
                </div>
                <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 h-80 flex flex-col items-center justify-center text-gray-400 shadow-sm relative overflow-hidden group">
                  <svg
                    className="w-16 h-16 mb-4 text-gray-300 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium tracking-widest uppercase">
                    Illustration Area
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8️⃣ Image Placement Guide Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              8. Image Placement Guide
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Standard illustration formatting options for storytelling
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Full Page */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="bg-indigo-50 border-2 border-indigo-200 border-dashed rounded-xl h-56 mb-8 flex items-center justify-center">
                <span className="text-indigo-400 font-semibold tracking-wide uppercase text-sm">
                  Full Page Bleed
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full-Page Illustration
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                A complete image covering the entire page, perfect for
                impactful, atmospheric scenes without text overlay.
              </p>
            </div>

            {/* Half Page */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex flex-col h-56 mb-8 gap-3">
                <div className="bg-purple-50 border-2 border-purple-200 border-dashed rounded-xl flex-[1.5] flex items-center justify-center">
                  <span className="text-purple-400 font-semibold tracking-wide uppercase text-xs">
                    Half Page
                  </span>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-4 space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-4/6"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Half-Page Illustration
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Shares the page real estate with text. Balances visual
                engagement directly with narrative flow.
              </p>
            </div>

            {/* Spot/Intro */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-56 mb-8 bg-gray-50 rounded-xl border border-gray-100 p-6 relative flex flex-col gap-4">
                <div className="w-20 h-20 bg-pink-50 border-2 border-pink-200 border-dashed rounded-full flex items-center justify-center self-center mb-2">
                  <span className="text-pink-400 font-semibold tracking-wide uppercase text-[10px]">
                    Spot Area
                  </span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full w-3/4 mx-auto md:mx-0"></div>
                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Chapter Intro Illustration
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Small, decorative spot graphics typically used at the beginning
                or end of chapters to set the tone.
              </p>
            </div>
          </div>
        </section>

        {/* 9️⃣ Ending & Author Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-pink-50 text-pink-900 border-pink-100 hover:border-pink-300 rounded-2xl shadow-lg p-10 lg:p-12 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span className=" font-serif">9.</span> The Moral / Ending Note
              </h2>
              <div className=" rounded-xl p-8  relative">
                <div className="absolute -top-6 -left-2 text-7xl text-indigo-100 opacity-30 font-serif">
                  "
                </div>
                <p className="text-xl  font-light italic relative z-10 leading-relaxed">
                  Every great story leaves a lasting impression. Whether it's a
                  moral lesson, a thought-provoking question, or simply a warm
                  feeling, the ending should resonate with the reader long after
                  the book is closed.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-10 lg:p-12 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 bg-gray-50 rounded-full mb-6 border-4 border-white shadow-lg flex items-center justify-center text-gray-300 overflow-hidden relative">
                <svg
                  className="w-14 h-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                About the Author
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Include a short biography highlighting your background, story
                inspirations, and any previous works.
              </p>
              <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2 group">
                Read full bio
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* 🔟 Submission Guidelines Section */}
        <section className="py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              10. Submission Guidelines
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Ready to share your masterpiece with the world? Follow our simple
              guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <FileText size={32} className="text-purple-500" />,
                title: "Original Work",
                desc: "All submissions must be 100% original. Plagiarized or AI-generated content will not be accepted.",
              },
              {
                icon: <Type size={32} className="text-blue-500" />,
                title: "Word Limit",
                desc: "Stories should be between 500 and 2,500 words. Keep it concise, engaging, and impactful.",
              },
              {
                icon: <Lightbulb size={32} className="text-amber-500" />,
                title: "Creativity & Quality",
                desc: "We look for unique plots, strong character development, and good grammar and formatting.",
              },
              {
                icon: <ShieldCheck size={32} className="text-emerald-500" />,
                title: "Editorial Rights",
                desc: "We reserve the right to gently edit submissions for clarity, grammar, and platform standards.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-md border border-gray-100 flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                Ready to Submit?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Email your submissions directly to our editorial team at
                <a
                  href="mailto:submissions@youngauthors.edu"
                  className="text-indigo-600 font-bold ml-1 hover:underline"
                >
                  submissions@youngauthors.edu
                </a>
                .
              </p>
              <ul className="space-y-4">
                {[
                  "Attach as a Word Doc (.docx) or PDF.",
                  "Include a clear, descriptive subject line.",
                  "State your full name, age, and grade level.",
                  "Provide a short, 2-3 sentence author biography.",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-emerald-500 shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-gray-700 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3 w-full shrink-0">
              <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-2xl flex flex-col items-center text-center space-y-4 shadow-sm">
                <div className="p-4 bg-white rounded-full text-indigo-500 shadow-md">
                  <Mail size={40} />
                </div>
                <h4 className="text-xl font-bold text-indigo-900">
                  Email Format
                </h4>
                <p className="text-sm text-indigo-700 font-medium">
                  Subject: Submission - [Story Title] - [Author Name]
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center space-y-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <Clock size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Timeline</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our editorial team carefully reads every submission. You can
                expect to hear back from us regarding your story within{" "}
                <span className="font-bold text-blue-600">
                  2 to 4 working days
                </span>
                .
              </p>
            </div>
            <div className="p-10 bg-pink-50 rounded-3xl shadow-sm border border-pink-100 flex flex-col justify-center space-y-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-200 text-pink-700 rounded-xl">
                  <CalendarDays size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  14-Day Policy
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                If selected, your story will be featured on the main directory
                for{" "}
                <span className="font-black text-pink-600 bg-white px-2 py-1 rounded shadow-sm">
                  14 Days
                </span>
                , after which it will be archived in the permanent student
                library.
              </p>
            </div>
          </div>

          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Rewards for Authors
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Publishing with us brings a variety of exciting benefits to
              celebrate your hard work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award size={40} />,
                color: "bg-amber-100 text-amber-600",
                title: "Digital Certificate",
                desc: "Receive an official Certificate of Publication to showcase your achievement.",
              },
              {
                icon: <Globe size={40} />,
                color: "bg-blue-100 text-blue-600",
                title: "Website Spotlight",
                desc: "Your story featured on our main Discover page for global readers to enjoy.",
              },
              {
                icon: <Share2 size={40} />,
                color: "bg-pink-100 text-pink-600",
                title: "Social Media Feature",
                desc: "Outstanding works are shared across our network to maximize audience reach.",
              },
            ].map((reward, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center flex flex-col items-center space-y-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center ${reward.color}`}
                >
                  {reward.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {reward.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {reward.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 1️⃣1️⃣ Footer CTA Section */}
      <section className="bg-blue-50 text-blue-900 border-blue-100 hover:border-blue-300 py-24 px-6 text-center shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
            Start Writing Your Story Today
          </h2>
          <p className="text-xl text-blue-900 mb-12 font-light max-w-2xl mx-auto">
            Bring your imagination to life using our structured templates,
            premium layouts, and intuitive design platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onCreateStory}
              className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Young Writer’s Pad
            </button>
            <button className="px-10 py-4 bg-green-600 text-white font-semibold text-lg rounded-xl border border-blue-400/30 backdrop-blur-sm hover:bg-green-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              Explore Templates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryBookStructure;
