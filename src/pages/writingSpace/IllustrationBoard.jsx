import React from "react";
import {
  ImagePlus,
  Users,
  Map,
  Palette,
  Box,
  Layers,
  UploadCloud,
} from "lucide-react";

const PromptCard = ({
  title,
  icon: Icon,
  description,
  bullets,
  placeholderMode,
}) => (
  <div
    className={`bg-white rounded-2xl p-6 shadow-sm border ${placeholderMode ? "border-dashed border-indigo-300 bg-indigo-50/50" : "border-slate-200"} hover:shadow-md hover:border-indigo-400 transition-all group`}
  >
    <div className="flex items-start gap-4 mb-4">
      <div
        className={`p-3 rounded-xl ${placeholderMode ? "bg-indigo-100" : "bg-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600"} transition-colors`}
      >
        <Icon
          className={`w-6 h-6 ${placeholderMode ? "text-indigo-600" : "text-slate-600 group-hover:text-indigo-600"}`}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        {placeholderMode && (
          <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
            Simple Placeholder Prompt
          </span>
        )}
      </div>
    </div>

    <p className="text-slate-600 font-medium mb-4 leading-relaxed whitespace-pre-line">
      {description}
    </p>

    {bullets && bullets.length > 0 && (
      <ul className="space-y-2 mt-4 border-t border-slate-100 pt-4">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 text-slate-600">
            <span className="text-indigo-500 font-bold mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    )}

    {placeholderMode && (
      <div className="mt-6">
        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm">
          <UploadCloud className="w-5 h-5" /> Start building your board
        </button>
      </div>
    )}
  </div>
);

const IllustrationBoard = () => {
  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen font-['Nunito']">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
          Illustration Board
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          Visualize your story world by collecting images, sketches, and
          inspiration.
        </p>
      </div>

      {/* Main Prompt (Hero Card) */}
      <div className="bg-gradient-to-br from-indigo-900 via-slate-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-white mb-12 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <ImagePlus className="w-8 h-8 text-indigo-300" />
            </div>
            <h2 className="text-3xl font-black text-white">
              Main Illustration Board Prompt
            </h2>
          </div>

          <h3 className="text-2xl font-bold text-indigo-200 mb-4">
            Build your visual story world.
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            Upload or collect images that represent your characters, scenes,
            objects, and moods.
            <br />
            Arrange them on the board to visualize how your story looks before
            you write or illustrate it.
          </p>
        </div>
      </div>

      {/* Sub Prompts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <PromptCard
          title="Character Illustration Prompt"
          icon={Users}
          description="Add your character design."
          bullets={[
            "What does your hero or villain look like?",
            "What clothes, expressions, or powers do they have?",
            "Upload sketches or reference images for your characters.",
          ]}
        />

        <PromptCard
          title="Scene Illustration Prompt"
          icon={Map}
          description="Create a visual for your story scene."
          bullets={[
            "Where does the scene happen?",
            "What is the environment like?",
            "Is it a forest, city, school, or magical kingdom?",
          ]}
        />

        <PromptCard
          title="Mood & Color Prompt"
          icon={Palette}
          description="Define the mood of your story."
          bullets={[
            "Add colors, images, and styles that represent the feeling of your story: Happy, magical, mysterious, adventurous, or emotional.",
          ]}
        />

        <PromptCard
          title="Story Object Prompt"
          icon={Box}
          description="Add important objects from your story."
          bullets={[
            "Magic items",
            "Treasure chests",
            "Ancient books",
            "Special tools or weapons",
          ]}
        />
      </div>

      {/* Simple Placeholder Prompt */}
      <div className="max-w-2xl mx-auto">
        <PromptCard
          title="Use this inside a textarea or board message:"
          icon={Layers}
          description="Start building your Illustration Board..."
          placeholderMode={true}
          bullets={[
            "Characters",
            "Story scenes",
            "Objects and props",
            "Color inspiration\n\nDrag and arrange them to visualize your story world.",
          ]}
        />
      </div>
    </div>
  );
};

export default IllustrationBoard;
