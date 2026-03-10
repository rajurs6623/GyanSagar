import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  PenTool,
  Printer,
  ShoppingBag,
  Star,
  ArrowRight,
  LayoutTemplate,
  Edit3,
  GraduationCap,
} from "lucide-react";
import YoungAuthorsHero from "./YoungAuthorsHero";

const Home = () => {
  const steps = [
    {
      num: "1",
      title: "Learn Writing",
      desc: "Master the basics of storytelling and grammar.",
      icon: GraduationCap,
    },
    {
      num: "2",
      title: "Write Stories",
      desc: "Use our interactive pad to draft your ideas.",
      icon: Edit3,
    },
    {
      num: "3",
      title: "Create Book",
      desc: "Design pages, add illustrations, and format.",
      icon: LayoutTemplate,
    },
    {
      num: "4",
      title: "Publish Book",
      desc: "Get ISBN and publish globally.",
      icon: Printer,
    },
    {
      num: "5",
      title: "Sell Book",
      desc: "Earn commissions as a young author.",
      icon: ShoppingBag,
    },
  ];

  const tools = [
    {
      name: "Writing Pad",
      icon: Edit3,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      name: "Story Creator",
      icon: PenTool,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      name: "Book Builder",
      icon: LayoutTemplate,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      name: "Cover Designer",
      icon: BookOpen,
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
  ];

  const categories = [
    "Adventure",
    "Fantasy",
    "Mystery",
    "Science",
    "History",
    "Moral Stories",
    "Poetry",
    "Comics",
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
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
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
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
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
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
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
      cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const studentAuthors = [
    {
      name: "Aisha R.",
      bio: "12-year-old fantasy lover.",
      books: 3,
      rating: "4.9",
      photo:
        "https://i.pinimg.com/736x/08/9c/ce/089cce5e2c9767be9c27d8e6511d8936.jpg",
    },
    {
      name: "Rahul T.",
      bio: "Science Fiction enthusiast.",
      books: 2,
      rating: "4.8",
      photo:
        "https://i.pinimg.com/736x/f2/19/94/f2199421fba96a19a66384348b4a39d1.jpg",
    },
    {
      name: "Priya M.",
      bio: "Loves writing mystery novels.",
      books: 5,
      rating: "5.0",
      photo:
        "https://i.pinimg.com/736x/9b/86/ad/9b86adeaec5de7440d146c3fcf694f6e.jpg",
    },
    {
      name: "Sam S.",
      bio: "Comic book artist and writer.",
      books: 1,
      rating: "4.7",
      photo:
        "https://i.pinimg.com/736x/23/c5/35/23c5356c78b67b5cd2db8a7b43698a10.jpg",
    },
  ];

  return (
    <div className>
      {/* HERO SECTION */}
      <YoungAuthorsHero />

      {/* HOW PLATFORM WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-4">
              How the Platform Works
            </h2>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
              Follow this simple journey from learning basics to earning
              royalties from your own published book.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-100 relative group transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 text-2xl font-black mx-auto mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform group-hover:bg-indigo-600 group-hover:text-white">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center font-black text-sm border-2 border-white">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING TOOLS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-6">
                Powerful Writing Tools
              </h2>
              <p className="text-slate-500 font-medium text-lg mb-10">
                Everything you need to write, illustrate, and publish your
                masterpiece all in one place. No extra software required.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border border-slate-100"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.bg} ${tool.color}`}
                    >
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-slate-800">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-white rounded-3xl shadow-2xl border border-slate-100 p-4">
                <img
                  src="https://i.pinimg.com/1200x/62/64/cf/6264cf9fc4d0f1f4253eb48f6b703d2b.jpg"
                  alt="Writing Pad"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-2">
                Featured Books
              </h2>
              <p className="text-slate-500 font-medium">
                Bestsellers by our young authors
              </p>
            </div>
            <Link
              to="/marketplace"
              className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-2"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative aspect-[3/4.5] mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-lg">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">
                      {book.category}
                    </span>
                  </div>
                  <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${book.stock === 0 ? "bg-rose-500/90 border-rose-400 text-white" : "bg-emerald-500/90 border-emerald-400 text-white"
                    }`}>
                    {book.stock === 0 ? "Sold Out" : `Stock: ${book.stock}`}
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="text-xl font-black text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors italic">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-bold mb-4">
                    By {book.author}
                  </p>

                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Units Sold</span>
                      <span className="text-sm font-black text-slate-800">{book.sales}</span>
                    </div>
                    <div className="flex flex-col border-l border-slate-100 pl-4">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Rating</span>
                      <span className="text-sm font-black text-slate-800">{book.rating}/5.0</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-black text-indigo-600 text-2xl tracking-tighter italic">
                      {book.price}
                    </span>
                    <Link to={`/book/${book.id}`} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT AUTHORS */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-4">
              Student Authors
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Meet the amazing creative minds on our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentAuthors.map((author, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={author.photo}
                  alt={author.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-indigo-50"
                />
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {author.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4 h-10">{author.bio}</p>
                <div className="flex justify-center items-center gap-4 text-sm font-bold pt-4 border-t border-slate-100">
                  <div className="text-slate-600">
                    <span className="text-indigo-600">{author.books}</span>{" "}
                    Books
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-200" />
                  <div className="text-amber-500 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-500" /> {author.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK CATEGORIES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-4">
              Explore Categories
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to="/marketplace"
                className="px-8 py-4 bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-100 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors shadow-sm"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 bg-indigo-600 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-8">
            Start Your First Book Today
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-medium">
            Join the Nations Young Authors community and turn your imagination
            into reality.
          </p>
          <Link
            to="/writer-pad"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-xl hover:bg-slate-50 transition shadow-2xl hover:scale-105 active:scale-95"
          >
            Start Writing <Edit3 className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
