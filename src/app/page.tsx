"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Clock,
  MapPin,
  ChevronRight,
  Star,
  Heart,
  Mail,
  Phone,
  CheckCircle2,
  Zap,
  ArrowRight,
  Facebook,
  Instagram,
} from "lucide-react";

// ===================== Images =====================
import sandwichImg from "../../public/images/sandwich.jpg";
import cakeImg from "../../public/images/cake.jpg";
import bakeryInteriorImg from "../../public/images/bakery-interior.jpg";
import deliveryImg from "../../public/images/delivery.jpg";

// ===================== Data =====================
const testimonials = [
  { name: "Sia K.", comment: "The meat pies remind me of home. Best in Monrovia!", rating: 5 },
  { name: "Mohammed B.", comment: "Super fast delivery to my office in Sinkor.", rating: 5 },
  { name: "Blessing J.", comment: "Their custom birthday cakes are literal works of art.", rating: 5 },
];

const features = [
  { title: "Baked at 4 AM", desc: "Our ovens never sleep so your bread is always warm.", icon: <Clock className="text-red-500" /> },
  { title: "Organic Flour", desc: "Sourced responsibly for the best texture and health.", icon: <CheckCircle2 className="text-green-500" /> },
  { title: "Local Love", desc: "Proudly serving the heart of Liberia since day one.", icon: <Heart className="text-pink-500" /> },
];

// ===================== Animation Variants =====================
const containerVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

// ===================== Main Component =====================
export default function LovenBakeryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [tickerIndex, setTickerIndex] = useState(0);

  // Live Ticker
  const tickerItems = [
    "Free delivery on orders over $50!",
    "New: Red Velvet Donuts available now!",
    "Open until 8 PM today!",
  ];

  useEffect(() => {
    const timer = setInterval(() => setTickerIndex((prev) => (prev + 1) % tickerItems.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-900 relative overflow-x-hidden selection:bg-red-100 selection:text-red-600">
      
      {/* ================= TOP ANNOUNCEMENT TICKER ================= */}
      <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={tickerIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="text-center text-sm font-bold tracking-wide uppercase"
          >
            <Zap className="inline-block mr-2 w-4 h-4 fill-current" />
            {tickerItems[tickerIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-black text-red-600 tracking-tighter cursor-pointer">
          L'OVEN<span className="text-yellow-500 italic underline decoration-4">.</span>
        </motion.div>

        <div className="hidden lg:flex gap-8 font-bold text-sm uppercase tracking-widest text-slate-500">
          {["Menu", "Catering", "Locations", "Deals"].map((link) => (
            <a key={link} href="#" className="hover:text-red-600 transition-colors relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button whileHover={{ scale: 1.1 }} className="relative p-2 bg-slate-100 rounded-full">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">2</span>
          </motion.button>
          <button className="bg-red-600 text-white px-7 py-2.5 rounded-full font-black text-sm hover:shadow-xl hover:shadow-red-200 transition-all active:scale-95">
            ORDER NOW
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative px-6 py-20 lg:py-32 flex flex-col items-center text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]" 
        />

        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-flex items-center gap-2"
        >
          <Star size={14} fill="currentColor" /> Premium Bakery & Grill
        </motion.span>

        <motion.h1 
          className="text-6xl md:text-[120px] font-black mb-8 leading-[0.85] tracking-tighter"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", damping: 12 }}
        >
          TASTE THE <br /> 
          <span className="text-red-600 italic relative">
            MAGIC 
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" /></svg>
          </span>
          OF FLOUR.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="max-w-xl text-lg text-slate-500 font-medium leading-relaxed mb-10"
        >
          From the first crunch of our meat pies to the soft melt of our glazed donuts, we bring artisanal perfection to the streets of Monrovia.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex gap-4">
          <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-red-600 transition-colors">
            EXPLORE MENU <ArrowRight />
          </button>
        </motion.div>

        {/* Hero Image */}
        <div className="w-full mt-12 max-w-7xl">
          <Image
            src={bakeryInteriorImg}
            alt="Bakery Interior"
            width={1200}
            height={600}
            className="rounded-3xl shadow-xl"
            loading="eager"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="flex items-start gap-4 p-4">
              <div className="bg-slate-50 p-4 rounded-2xl">{f.icon}</div>
              <div>
                <h4 className="font-black text-lg">{f.title}</h4>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MENU ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center">Our Delicious Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[sandwichImg, cakeImg, deliveryImg].map((img, i) => (
            <motion.div key={i} variants={itemVar} initial="hidden" animate="show" whileHover={{ scale: 1.05 }} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <Image 
                src={img} 
                alt={`Menu item ${i}`} 
                width={400} 
                height={300} 
                style={{ width: "100%", height: "auto" }} 
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-black text-lg mb-2">Item {i + 1}</h3>
                <p className="text-slate-500 text-sm mb-4">A delicious treat from our bakery.</p>
                <div className="flex justify-between items-center">
                  <span className="font-black text-red-600">$5.50</span>
                  <button className="bg-yellow-400 p-2 rounded-lg"><ShoppingCart /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-16">Word on the Street</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="italic text-lg text-slate-600 mb-6 font-medium">"{t.comment}"</p>
              <p className="font-black uppercase text-xs tracking-widest text-red-600">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="text-3xl font-black text-red-600 mb-6">L'OVEN.</div>
            <p className="max-w-xs text-slate-500 font-medium mb-6">
              Making Monrovia sweeter, one bite at a time. Visit our Sinkor flagship for the full experience.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-red-600 cursor-pointer transition"><Instagram size={20} /></div>
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-red-600 cursor-pointer transition"><Facebook size={20} /></div>
            </div>
          </div>
        </div>
        <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          © 2026 L'Oven Bakery Liberia. Handcrafted in Sinkor.
        </div>
      </footer>

    </div>
  );
}