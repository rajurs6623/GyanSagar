import React from "react";
import { ArrowLeft, BookOpen, Star } from "lucide-react";

// Categorized dummy stories based on user prompt
const CATEGORY_STORIES = {
  "Bedtime Stories": [
    {
      title: "The Moon Who Lost Its Light",
      author: "Aarav S.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/45/94/9b/45949b2eec645924608a369ba9074dcc.jpg",
    },
    {
      title: "The Sleepy Little Cloud",
      author: "Maya T.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/73/3f/10/733f106a13f07244e836ff24586cf4ea.jpg",
    },
    {
      title: "The Star That Couldn’t Blink",
      author: "Rohan D.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/1200x/d5/3b/92/d53b92a43626183dcd387c968b2e209c.jpg",
    },
    {
      title: "Whispering Night Winds",
      author: "Sia P.",
      rating: 4.6,
      cover:
        "https://i.pinimg.com/736x/88/1f/0f/881f0f9606e19ec3024363c0860cd60b.jpg",
    },
    {
      title: "The Dream Keeper",
      author: "Aaditya M.",
      rating: 5.0,
      cover:
        "https://i.pinimg.com/1200x/88/8a/97/888a979759112917f46c2facf9569444.jpg",
    },
    {
      title: "The Pillow Kingdom",
      author: "Kiara J.",
      rating: 4.5,
      cover:
        "https://i.pinimg.com/736x/cb/0d/0c/cb0d0ceb2d5c075a4cafc1829a0ea159.jpg",
    },
    {
      title: "The Night Garden Secret",
      author: "Arjun K.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/dd/2f/f1/dd2ff1572eb35bd086e8dc0b7b4f4540.jpg",
    },
    {
      title: "The Lantern in the Sky",
      author: "Isha V.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/7d/7a/2c/7d7a2c8a44ad9b8261d34f4b824d2d45.jpg",
    },
  ],
  Festival: [
    {
      title: "The Lamp That Shone Brightest",
      author: "Neha G.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/43/24/de/4324dead4e4f7c3526b38c594c9b14ef.jpg",
    },
    {
      title: "Diwali in Grandma’s Courtyard",
      author: "Kritika S.",
      rating: 5.0,
      cover:
        "https://i.pinimg.com/736x/35/ca/1d/35ca1de84867d1e54933150ed8da7012.jpg",
    },
    {
      title: "The Little Firecracker’s Wish",
      author: "Yuvraj P.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/736x/5c/47/90/5c47904126d555b9edfc5919183c5645.jpg",
    },
    {
      title: "Lights of Hope",
      author: "Ananya R.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/1200x/85/60/f2/8560f291d6d53d00121da406f73b8c05.jpg",
    },
    {
      title: "The Golden Rangoli",
      author: "Mira C.",
      rating: 4.6,
      cover:
        "https://i.pinimg.com/736x/28/0b/01/280b01084179a6c783dc4b246db34365.jpg",
    },
    {
      title: "The Festival of a Thousand Smiles",
      author: "Reyansh V.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/fe/0a/26/fe0a26570308d19adc1f59b7280eb320.jpg",
    },
    {
      title: "The Secret of the Diyas",
      author: "Tanya M.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/cf/b8/e9/cfb8e9c87130078942da3f6443390676.jpg",
    },
    {
      title: "When the Sky Sparkled",
      author: "Shaurya A.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/736x/f1/84/68/f18468d5b13e53166cb9bfb6cd2f702a.jpg",
    },
  ],
  "Pride&Nation": [
    {
      title: "The Flag in My Heart",
      author: "Aryan B.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/1200x/a9/cf/1f/a9cf1f204345ffa477ff6c94d3aa497f.jpg",
    },
    {
      title: "The Brave Child of Bharat",
      author: "Diya N.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/49/5b/ef/495bef27cb325631743e16a47cbfe3aa.jpg",
    },
    {
      title: "When India Smiled",
      author: "Rahul T.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/1200x/8a/c9/eb/8ac9ebee3c73f26983a174a6aea502e5.jpg",
    },
    {
      title: "The Tricolor Promise",
      author: "Shruti P.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/ee/0b/4c/ee0b4ca56aa4174878541fbad475f480.jpg",
    },
    {
      title: "The Young Freedom Dreamer",
      author: "Nikhil C.",
      rating: 5.0,
      cover:
        "https://i.pinimg.com/1200x/00/c0/65/00c065a02ffb6db5a907f878bf322857.jpg",
    },
    {
      title: "My India, My Pride",
      author: "Riya M.",
      rating: 4.6,
      cover:
        "https://i.pinimg.com/736x/7f/ee/b8/7feeb866c66505e2b18f0c243c14b946.jpg",
    },
    {
      title: "The March of Courage",
      author: "Samir K.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/b0/f6/3e/b0f63e31ff87503cf61cb630eff13d3e.jpg",
    },
    {
      title: "The Day We Stood Tall",
      author: "Vanya G.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/736x/b5/a6/74/b5a6742aa6db2284594829caadac89f6.jpg",
    },
  ],
  Nature: [
    {
      title: "The Talking Banyan Tree",
      author: "Leo D.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/84/65/79/846579ebeb037daf9cd05fa188a3cdfc.jpg",
    },
    {
      title: "The River That Sang",
      author: "Aanya S.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/1200x/34/da/f7/34daf76d8771647410b1aade7240b6e7.jpg",
    },
    {
      title: "Secrets of the Green Forest",
      author: "Ishaan P.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/736x/38/77/48/3877481ff2fe9d5f0af2ee98c588ad56.jpg",
    },
    {
      title: "The Butterfly’s Journey",
      author: "Tara K.",
      rating: 5.0,
      cover:
        "https://i.pinimg.com/1200x/3f/14/e1/3f14e166a2abe33d1a0921e871da20a9.jpg",
    },
    {
      title: "The Mountain’s Whisper",
      author: "Kabir M.",
      rating: 4.6,
      cover:
        "https://i.pinimg.com/736x/0e/fa/26/0efa26d2f15055881e56f91c07d9ec25.jpg",
    },
    {
      title: "The Rain Who Came Early",
      author: "Sonia R.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/1200x/d9/b5/d5/d9b5d5e0b28d561b74d016b7ef772fc9.jpg",
    },
    {
      title: "The Garden of Wonders",
      author: "Dev C.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/0d/21/53/0d2153eec55b8e0a42c4bff3d8e85b44.jpg",
    },
    {
      title: "The Forest of a Thousand Sounds",
      author: "Priya V.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/1200x/32/4e/32/324e3278322538a5230cbe4c786f717e.jpg",
    },
  ],
  Art: [
    {
      title: "The Magic Paintbrush",
      author: "Ridhi A.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/3d/2e/08/3d2e0857961742b8809bb6dcff045849.jpg",
    },
    {
      title: "Colors That Came Alive",
      author: "Vihaan L.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/48/60/a9/4860a981062217b84f09e00ae23c762a.jpg",
    },
    {
      title: "The Girl Who Painted Dreams",
      author: "Kavya S.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/736x/c1/d7/5c/c1d75c4bcda846a64a4b658fc002f953.jpg",
    },
    {
      title: "The Rainbow Canvas",
      author: "Neel K.",
      rating: 5.0,
      cover:
        "https://i.pinimg.com/1200x/79/04/40/7904403305ec687d967353adca0a7eaa.jpg",
    },
    {
      title: "The Boy Who Drew the Sky",
      author: "Anika M.",
      rating: 4.6,
      cover:
        "https://i.pinimg.com/736x/47/00/de/4700de8fff2b6dc48fcae06ed9df835d.jpg",
    },
    {
      title: "When Crayons Spoke",
      author: "Darsh P.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/8d/5c/d5/8d5cd578fb3752f082d8c3409fc3ff68.jpg",
    },
    {
      title: "The Secret Art Room",
      author: "Mira R.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/19/11/42/19114224c92007effa356b8d27ddbc30.jpg",
    },
    {
      title: "The Living Portrait",
      author: "Sahil G.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/1200x/e2/b0/47/e2b047d2e6d0584a757986386cc2614e.jpg",
    },
  ],
  "Moral Stories": [
    {
      title: "The Honest Little Sparrow",
      author: "Rishi T.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/1200x/81/2d/76/812d76b7f003bc1d212e207548a08ce0.jpg",
    },
    {
      title: "The Boy Who Learned to Share",
      author: "Jiya D.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/fe/e2/4a/fee24a1b0fb4f2ed70d13b56555a5f14.jpg",
    },
    {
      title: "The Lion and the Lesson",
      author: "Karan N.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/1200x/ab/04/e6/ab04e617ab428e6b2edb5aa29940531a.jpg",
    },
    {
      title: "The Value of a Promise",
      author: "Myra V.",
      rating: 5.0,
      cover:
        "https://i.pinimg.com/736x/62/3b/f3/623bf340c995a30533e8ec19dd2435e2.jpg",
    },
    {
      title: "The Gift of Kindness",
      author: "Aditya S.",
      rating: 4.6,
      cover: "https://i.pinimg.com/736x/ef/06/9f/ef069f05fff8135cdd2b983e2a68302b.jpg",
    },
    {
      title: "The Greedy Monkey’s Mistake",
      author: "Navya P.",
      rating: 4.9,
      cover:
        "https://i.pinimg.com/736x/81/75/b9/8175b9268b714d82a6d607e35500dd1b.jpg",
    },
    {
      title: "A Small Act of Courage",
      author: "Tejas L.",
      rating: 4.8,
      cover:
        "https://i.pinimg.com/736x/c0/5c/d1/c05cd1b09c0665f73bfdf75affc2241f.jpg",
    },
    {
      title: "The Power of Truth",
      author: "Anvi H.",
      rating: 4.7,
      cover:
        "https://i.pinimg.com/736x/2f/63/91/2f63917f73ae959bb91d8e6069182bdc.jpg",
    },
  ],
};

const StoryCategoryView = ({ isDark, category, onBack }) => {
  const stories = CATEGORY_STORIES[category] || [];

  return (
    <div className="w-full relative mt-12 mb-20">
      <div className="flex items-center gap-4 mb-10">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all ${isDark ? "bg-slate-800 hover:bg-slate-700 text-slate-300" : "bg-white hover:bg-slate-50 text-slate-700 shadow-md"}`}
        >
          <ArrowLeft size={18} />
          Back to Categories
        </button>
        <div
          className={`h-8 w-[2px] ${isDark ? "bg-slate-700" : "bg-slate-300"}`}
        ></div>
        <h2
          className={`text-2xl md:text-4xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
        >
          {category} <span className="text-emerald-500">Collection</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story, i) => (
          <div
            key={i}
            className={`group relative rounded-[2rem] p-4 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-2 ${isDark ? "bg-white/5 border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10" : "bg-white border-slate-200 hover:shadow-xl hover:shadow-slate-200"}`}
          >
            <div
              className={`relative aspect-[3/4] rounded-[1.5rem] bg-indigo-50 p-0 flex flex-col overflow-hidden`}
            >
              <img
                src={story.cover}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                <Star size={12} className="text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-white">
                  {story.rating}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1 drop-shadow-md">
                  {category}
                </div>
                <h4 className="text-xl font-bold leading-tight drop-shadow-lg">
                  {story.title}
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center px-2 pb-1">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">
                  Written By
                </span>
                <span
                  className={`text-sm font-bold ${isDark ? "text-slate-300" : "text-slate-700"}`}
                >
                  {story.author}
                </span>
              </div>
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? "bg-slate-800 text-emerald-400 hover:bg-emerald-500 hover:text-white" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white"}`}
              >
                <BookOpen size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryCategoryView;
