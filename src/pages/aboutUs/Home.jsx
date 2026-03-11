import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Edit3,
  GraduationCap,
  ArrowUpRight,
  Star,
} from "lucide-react";
import YoungAuthorsHero from "./YoungAuthorsHero";

// HOW IT WORKS IMAGES (Using generated images where available, else high-quality placeholders)
const stepImages = [
  "https://i.pinimg.com/736x/34/df/cb/34dfcbbf4c4a8d031e949dcc2ce596a7.jpg", // Learn Writing
  "https://i.pinimg.com/736x/f8/9a/04/f89a043bd9384d722d9668bd11e2046a.jpg", // Write Stories
  "https://i.pinimg.com/736x/3e/70/cf/3e70cfa391a86ce4e228b2b158c72932.jpg", // Create Book
  "https://i.pinimg.com/736x/ed/56/0d/ed560d41316311054872c896af0e82ad.jpg", // Publish Book
  "https://i.pinimg.com/736x/5a/f4/0e/5af40ef711e4f422c9e1bfc0a7f4cbe5.jpg", // Sell Book
];

// WRITING TOOLS IMAGES (Round circle images)
const toolImages = [
  "https://i.pinimg.com/736x/04/3b/9a/043b9a0af72a6011fcbe0dd6642596a8.jpg", // Writing Pad
  "https://i.pinimg.com/736x/f6/0e/13/f60e13cc66126ca1a1f3607b255e58e4.jpg", // Story Creator
  "https://i.pinimg.com/736x/d1/f2/a4/d1f2a4fe2b5f9e54ee05d6912a3a7bd2.jpg", // Book Builder
  "https://i.pinimg.com/736x/45/11/71/451171d37c2e8ebe3e1a417c3417e9d8.jpg", // Cover Designer
];

const Home = () => {
  const steps = [
    {
      num: "1",
      title: "Learn Writing",
      desc: "Master the basics of storytelling and grammar.",
      img: stepImages[0],
    },
    {
      num: "2",
      title: "Write Stories",
      desc: "Use our interactive pad to draft your ideas.",
      img: stepImages[1],
    },
    {
      num: "3",
      title: "Create Book",
      desc: "Design pages, add illustrations, and format.",
      img: stepImages[2],
    },
    {
      num: "4",
      title: "Publish Book",
      desc: "Get ISBN and publish globally.",
      img: stepImages[3],
    },
    {
      num: "5",
      title: "Sell Book",
      desc: "Earn commissions as a young author.",
      img: stepImages[4],
    },
  ];

  const tools = [
    { name: "Writing Pad", img: toolImages[0], bg: "bg-indigo-50/50", border: "group-hover:border-indigo-400" },
    { name: "Story Creator", img: toolImages[1], bg: "bg-blue-50/50", border: "group-hover:border-blue-400" },
    { name: "Book Builder", img: toolImages[2], bg: "bg-indigo-50/50", border: "group-hover:border-indigo-400" },
    { name: "Cover Designer", img: toolImages[3], bg: "bg-blue-50/50", border: "group-hover:border-blue-400" },
  ];

  const categories = [
    { name: "Adventure", img: "https://i.pinimg.com/1200x/12/e9/93/12e993b57d74621b837f964d269978b8.jpg" },
    { name: "Fantasy", img: "https://i.pinimg.com/736x/07/5f/61/075f61df4ebd4921751f6acb28e3030f.jpg" },
    { name: "Mystery", img: "https://i.pinimg.com/736x/35/71/3a/35713adb9a005c9e0bc28076276e4ed6.jpg" },
    { name: "Science", img: "https://i.pinimg.com/736x/56/a3/60/56a360577dcc4cb451af9044ac9182b1.jpg" },
    { name: "History", img: "https://i.pinimg.com/736x/5c/d2/fc/5cd2fc7e0ef57af13cb895115755fb4d.jpg" },
    { name: "Moral Stories", img: "https://i.pinimg.com/736x/4b/37/ba/4b37ba010bf2afe09b8d27a8e34ae855.jpg" },
    { name: "Poetry", img: "https://i.pinimg.com/736x/08/a9/57/08a95716695ac7bd4b0b97a092aee566.jpg" },
    { name: "Comics", img: "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?auto=format&fit=crop&q=80&w=400" },
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "The Hidden Magic",
      author: "Aisha Rahman",
      category: "Fantasy",
      price: "₹250",
      rating: "4.9",
      sales: 1240,
      stock: 45,
      cover: "https://i.pinimg.com/1200x/f0/8b/00/f08b00c29882fe33d87159222a33e31a.jpg",
    },
    {
      id: 2,
      title: "Space Explorers",
      author: "Rahul Tyagi",
      category: "Science",
      price: "₹200",
      rating: "4.8",
      sales: 850,
      stock: 12,
      cover: "https://i.pinimg.com/736x/9e/01/c7/9e01c78a4fbef612a36bc4a6c28bc530.jpg",
    },
    {
      id: 3,
      title: "Mystery of Old Clock",
      author: "Priya Mishra",
      category: "Mystery",
      price: "₹300",
      rating: "5.0",
      sales: 2100,
      stock: 0,
      cover: "https://i.pinimg.com/736x/83/96/5f/83965f420ca4def1a897f0723557eab6.jpg",
    },
    {
      id: 4,
      title: "The Talking Tree",
      author: "Sam Shive",
      category: "Adventure",
      price: "₹180",
      rating: "4.7",
      sales: 540,
      stock: 88,
      cover: "https://i.pinimg.com/736x/4b/42/66/4b426632aa6253b7875ae60eb5e8afa9.jpg",
    },
  ];

  const studentAuthors = [
    {
      name: "Aisha R.",
      bio: "12-year-old fantasy lover.",
      books: 3,
      rating: "4.9",
      photo: "https://i.pinimg.com/1200x/4e/ea/5b/4eea5bbe8398919177710c4daee22909.jpg",
    },
    {
      name: "Rahul T.",
      bio: "Science Fiction enthusiast.",
      books: 2,
      rating: "4.8",
      photo: "https://i.pinimg.com/736x/f2/19/94/f2199421fba96a19a66384348b4a39d1.jpg",
    },
    {
      name: "Priya M.",
      bio: "Loves writing mystery novels.",
      books: 5,
      rating: "5.0",
      photo: "https://i.pinimg.com/736x/fd/b1/ad/fdb1ad6b09f61bc7bfafa2c583c5f742.jpg",
    },
    {
      name: "Sam S.",
      bio: "Comic book artist and writer.",
      books: 1,
      rating: "4.7",
      photo: "https://i.pinimg.com/1200x/92/97/8d/92978dbc0f7be1b42f3106ec80af1522.jpg",
    },
    {
      name: "Zara K.",
      bio: "Historical fiction writer.",
      books: 4,
      rating: "4.9",
      photo: "https://i.pinimg.com/736x/9d/a0/a4/9da0a44ba9238ee07c14db531e1242db.jpg",
    },
    {
      name: "Arjun P.",
      bio: "Adventure story specialist.",
      books: 6,
      rating: "4.8",
      photo: "https://i.pinimg.com/1200x/ac/f1/f8/acf1f82d16b79ebc28f685142c043214.jpg",
    },
    {
      name: "Mira L.",
      bio: "Nature and poetry lover.",
      books: 2,
      rating: "5.0",
      photo: "https://i.pinimg.com/736x/5f/3f/00/5f3f00f3602fbfd2bb1a33dde6461856.jpg",
    },
  ];

  // For automatic scrolling, we'll double the authors array to create a seamless loop
  const famousAuthors = [
    // International Authors
    {
      name: "Enid Blyton",
      books: "Famous Five, Secret Seven",
      photo: "https://i.pinimg.com/736x/06/24/d0/0624d0d57a89825a0d63fa43b6591fab.jpg",
      bg: "bg-indigo-50/50",
      border: "group-hover:border-indigo-400"
    },
    {
      name: "Roald Dahl",
      books: "Matilda, Charlie and the Chocolate Factory",
      photo: "https://i.pinimg.com/736x/0c/6b/e0/0c6be09a326f3dfc51280c32893cc053.jpg",
      bg: "bg-blue-50/50",
      border: "group-hover:border-blue-400"
    },
    {
      name: "J.K. Rowling",
      books: "Harry Potter Series",
      photo: "https://i.pinimg.com/736x/b0/4d/98/b04d98db323f369a072b8b9d739dd3e2.jpg",
      bg: "bg-indigo-50/50",
      border: "group-hover:border-indigo-400"
    },
    {
      name: "Ruskin Bond",
      books: "The Blue Umbrella, Room on the Roof",
      photo: "https://i.pinimg.com/1200x/37/6c/98/376c98f2ba9ede5d8cb02817eaf1f683.jpg",
      bg: "bg-blue-50/50",
      border: "group-hover:border-blue-400"
    },

    // Indian Authors
    {
      name: "R.K. Narayan",
      books: "Malgudi Days, The Guide",
      photo: "https://litfind.bookscape.com/wp-content/uploads/2024/10/The-FT-Life-And-Legacy-Of-RK-Narayan_.jpg",
      bg: "bg-sky-50/50",
      border: "group-hover:border-sky-400"
    },



    // Telugu Authors
    {
      name: "Kavi Samrat Viswanatha Satyanarayana",
      books: "Veyipadagalu, Kinerasani Patalu",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJe-o539hR1isOf5Bh5ecJC2RhgvrHguTvHA&s",
      bg: "bg-indigo-50/50",
      border: "group-hover:border-indigo-400"
    },
    {
      name: "Sri Sri (Srirangam Srinivasa Rao)",
      books: "Maha Prasthanam, Prajavani Kavitalu",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6n8_Br5ErDL-uMsgZEDqqBl-hzccZI-zBA&s",
      bg: "bg-blue-50/50",
      border: "group-hover:border-blue-400"
    },
    {
      name: "Chalam (Gudipati Venkata Chalam)",
      books: "Maidanam, Jeevana Chaitra",
      photo: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1322420506i/13117833.jpg",
      bg: "bg-indigo-50/50",
      border: "group-hover:border-indigo-400"
    },

  ];
  const scrollingAuthors = [...studentAuthors, ...studentAuthors];

  return (
    <div>
      {/* HERO SECTION */}
      <YoungAuthorsHero />

      {/* HOW PLATFORM WORKS */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">

          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-2 md:mb-3 text-center">
              How the Platform Works
            </h2>
            <p className="text-slate-500 font-medium text-xs md:text-base max-w-2xl mx-auto">
              Follow this simple journey from learning basics to earning royalties from your own published book.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="relative aspect-[4/5] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all"
              >

                {/* Background */}
                <div className="absolute inset-0">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                </div>

                {/* Step Badge */}
                <div className="absolute top-3 left-3 w-7 h-7 md:w-10 md:h-10 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center font-black text-xs md:text-lg border border-white/30 z-20">
                  {step.num}
                </div>

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 z-20">
                  <h3 className="text-sm md:text-xl font-black text-white truncate">
                    {step.title}
                  </h3>

                  <p className="text-white/80 text-[10px] md:text-xs font-bold leading-snug opacity-70 md:opacity-100 line-clamp-1 md:line-clamp-none">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

     {/* PLATFORM DEMO VIDEO */}
<section className="py-8 md:py-10 bg-white">
  <div className="max-w-[850px] mx-auto px-4 md:px-6">

    {/* Header */}
    <div className="text-center mb-6 md:mb-8">
      <h2 className="text-lg md:text-2xl font-semibold text-slate-800 mb-2">
        See Our Platform in Action
      </h2>
      <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto">
        Learn how easy it is to start your journey as a young author.
      </p>
    </div>

    {/* Video / Image Container */}
    <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">

      <img
        src="youtube.png"
        alt="Platform Demo Illustration"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Optional Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

    </div>

  </div>
</section>

     {/* POWERFUL WRITING TOOLS */}
<section className="py-8 md:py-10 bg-white overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-4 md:px-6">

    <div className="text-center mb-10">
      <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-3 md:mb-4">
        Powerful Writing Tools
      </h2>
      <p className="text-slate-500 font-medium text-xs md:text-base max-w-2xl mx-auto">
        Everything you need to write, illustrate, and publish your masterpiece all in one place. No extra software required.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="order-2 lg:order-1 text-center lg:text-left">

        {/* TOOLS GRID */}
        <div className="grid grid-cols-2 gap-3 md:gap-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`${tool.bg} p-2 md:p-4 rounded-2xl md:rounded-[20px] shadow-sm hover:shadow-xl transition-all flex flex-col items-center gap-1 md:gap-3 border border-slate-100 group`}
            >

              <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border-2 md:border-4 border-indigo-50 shadow-inner ${tool.border}`}>
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-black text-slate-800 text-[10px] md:text-sm text-center truncate w-full">
                {tool.name}
              </span>

            </motion.div>
          ))}
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 lg:order-2 relative mb-6 lg:mb-0 flex justify-center">

        <div className="aspect-[4/2.8] max-w-[420px] bg-white rounded-2xl shadow-lg border border-slate-100 p-2">
          <img
            src="https://i.pinimg.com/1200x/62/64/cf/6264cf9fc4d0f1f4253eb48f6b703d2b.jpg"
            alt="Writing Pad"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-indigo-500/20 rounded-full blur-2xl -z-10" />

      </div>

    </div>

  </div>
</section>

    {/* FEATURED BOOKS */}
<section className="py-6 md:py-8 bg-white">
  <div className="max-w-[1400px] mx-auto px-4 md:px-6">

    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-lg md:text-2xl font-semibold text-slate-800 mb-1">
        Featured Books
      </h2>
      <p className="text-slate-500 text-[11px] md:text-sm">
        Bestsellers by our young authors
      </p>
    </div>

    {/* Books Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">

      {featuredBooks.map((book, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
          viewport={{ once: true }}
          className="group bg-blue-50 rounded-2xl p-3 border border-blue-100 hover:shadow-lg hover:bg-blue-100 transition-all cursor-pointer"
        >

          {/* Book Image */}
          <div className="relative aspect-[3/4] mb-3 overflow-hidden rounded-xl">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Category */}
            <div className="absolute top-2 left-2 bg-slate-900/80 px-2 py-[2px] rounded-md">
              <span className="text-[8px] text-white uppercase tracking-wider">
                {book.category}
              </span>
            </div>

            {/* Stock */}
            <div
              className={`absolute bottom-2 left-2 px-2 py-[2px] rounded-md text-[8px] uppercase tracking-wider border ${
                book.stock === 0
                  ? "bg-rose-500/90 border-rose-400 text-white"
                  : "bg-emerald-500/90 border-emerald-400 text-white"
              }`}
            >
              {book.stock === 0 ? "Sold Out" : `Stock ${book.stock}`}
            </div>
          </div>

          {/* Content */}
          <div>

            {/* Title */}
            <h3 className="text-sm md:text-base font-semibold text-slate-800 mb-[2px] group-hover:text-indigo-600 transition-colors line-clamp-1">
              {book.title}
            </h3>

            {/* Author */}
            <p className="text-[10px] md:text-xs text-slate-600 mb-2">
              By {book.author}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-3 mb-2 pb-2 border-b border-blue-100">

              <div className="flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase">
                  Sold
                </span>
                <span className="text-xs font-medium text-slate-700">
                  {book.sales}
                </span>
              </div>

              <div className="flex flex-col border-l border-blue-100 pl-3">
                <span className="text-[8px] text-slate-500 uppercase">
                  Rating
                </span>
                <span className="text-xs font-medium text-slate-700">
                  {book.rating}/5
                </span>
              </div>

            </div>

            {/* Price + Button */}
            <div className="flex justify-between items-center">
              <span className="font-semibold text-indigo-600 text-base">
                {book.price}
              </span>

              <Link
                to={`/book/${book.id}`}
                className="p-2 bg-white text-slate-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </motion.div>
      ))}

    </div>

    {/* View All */}
    <div className="mt-6 text-center">
      <Link
        to="/marketplace"
        className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center justify-center gap-1 text-xs md:text-sm"
      >
        View all <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

  </div>
</section>
     {/* STUDENT AUTHORS (Scrolling) */}
<section className="py-10 bg-white overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-6 mb-10">
    <div className="text-center">
      <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-3">
        Young Authors
      </h2>
      <p className="text-slate-500 font-medium text-xs md:text-base">
        Meet the amazing creative minds on our platform.
      </p>
    </div>
  </div>

  {/* Infinite Scroll Container */}
  <div className="relative">
    <motion.div
      className="flex gap-6 px-4"
      animate={{ x: [0, -2000] }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {scrollingAuthors.map((author, idx) => (
        <div
          key={idx}
          className="bg-[#f1f3ff] rounded-[28px] p-4 text-center border border-slate-100 shadow-sm min-w-[220px] md:min-w-[280px] group hover:bg-white hover:shadow-xl transition-all"
        >

          {/* Image */}
          <div className="w-full h-36 md:h-44 rounded-xl overflow-hidden mb-3 shadow-md bg-white flex items-center justify-center">
            <img
              src={author.photo}
              alt={author.name}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <h3 className="text-base md:text-xl font-black text-slate-800 mb-0.5 truncate">
            {author.name}
          </h3>

          <p className="text-[10px] text-slate-500 font-bold mb-2 h-3 truncate">
            {author.bio}
          </p>

          <div className="flex justify-center items-center gap-3 text-[9px] md:text-xs font-black pt-3 border-t border-slate-200">
            <div className="text-slate-600 flex flex-col items-center">
              <span className="text-indigo-600 text-sm md:text-lg leading-none mb-0.5">
                {author.books}
              </span>
              <span className="uppercase tracking-wider opacity-60">Books</span>
            </div>

            <div className="w-px h-5 bg-slate-200" />

            <div className="text-amber-500 flex flex-col items-center">
              <span className="flex items-center gap-1 text-sm md:text-lg leading-none mb-0.5">
                <Star className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 fill-amber-500" /> {author.rating}
              </span>
              <span className="uppercase tracking-wider opacity-60">Rating</span>
            </div>
          </div>

        </div>
      ))}
    </motion.div>
  </div>
</section>

     {/* FAMOUS AUTHORS SECTION */}
<section className="py-10 bg-white">
  <div className="max-w-[1400px] mx-auto px-4 md:px-6">

    <div className="text-center mb-10">
      <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-2">
        Our Inspirations
      </h2>
      <p className="text-slate-500 font-medium text-xs md:text-base">
        Famous authors who inspire our young writers
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      {famousAuthors.map((author, idx) => (
        <div
          key={idx}
          className={`${author.bg} p-3 rounded-[1.5rem] shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col items-center group`}
        >

          <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 md:border-4 border-indigo-50 mb-3 ${author.border}`}>
            <img
              src={author.photo}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xs md:text-base font-bold text-slate-800 mb-0.5 text-center">
            {author.name}
          </h3>

          <p className="text-[9px] md:text-xs text-slate-500 font-medium text-center line-clamp-2 px-1">
            {author.books}
          </p>

        </div>
      ))}
    </div>

    <div className="mt-8 text-center">
      <Link
        to="/famous-authors"
        className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center justify-center gap-1 text-xs md:text-base whitespace-nowrap"
      >
        Explore Famous Authors <ArrowRight className="w-3 md:w-5 h-3 md:h-5" />
      </Link>
    </div>

  </div>
</section>

     {/* EXPLORE CATEGORIES with Images */}
<section className="py-10 bg-white">
  <div className="max-w-[1400px] mx-auto px-4 md:px-6">

    <div className="text-center mb-12">
      <h2 className="text-xl md:text-3xl font-medium text-slate-800 tracking-tight mb-4">
        Explore Categories
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {categories.map((cat, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative h-28 md:h-48 rounded-[24px] overflow-hidden group cursor-pointer shadow-md"
        >

          <Link to="/marketplace" className="w-full h-full block">

            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="text-white font-black text-[12px] md:text-xl tracking-wide uppercase group-hover:scale-110 transition-transform inline-block">
                {cat.name}
              </span>
            </div>

          </Link>

        </motion.div>
      ))}
    </div>

  </div>
</section>
      {/* CALL TO ACTION */}
      <section className="py-10 md:py-12 bg-[#f1f3ff] relative overflow-hidden text-center px-4 md:px-6">

        {/* Soft Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 md:w-64 md:h-64 bg-indigo-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-purple-200/40 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">

          {/* Heading */}
          <h2 className="text-xl md:text-4xl lg:text-5xl font-medium text-slate-800 tracking-tight mb-4 md:mb-6 text-center">
            Start Your First Book Today
          </h2>

          {/* Text */}
          <p className="text-xs md:text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Join our community of young authors and turn your imagination into a published book.
          </p>

          {/* Button */}
          <Link
            to="/writer-pad"
            className="inline-block px-8 md:px-12 py-3 md:py-4 bg-indigo-100 text-indigo-700 rounded-xl md:rounded-2xl font-medium text-sm md:text-lg hover:bg-indigo-200 transition-all shadow-sm"
          >
            Start Writing
          </Link>

        </div>

      </section>

      {/* VISDOM WAVES IMAGE */}
     <section className="pb-10 bg-white overflow-hidden">
  <div className="max-w-[1200px] mx-auto px-6">

    <div className="bg-white p-3 md:p-4 rounded-[2.5rem] shadow-xl">
      <div className="relative group rounded-[2rem] overflow-hidden">

        <img
          src="/image.png"
          alt="VisdomWaves Illustration"
          className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-indigo-900/10 pointer-events-none" />

      </div>
    </div>

  </div>
</section>
</div>
  );
};

export default Home;