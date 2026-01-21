import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const PromoBanner = () => (
  <section className="py-20 bg-zinc-950 border-t border-zinc-900 text-white">
    <div className="container mx-auto px-4 md:px-10">
      <div className="relative rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/5 p-10 md:p-24 group">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-30 pointer-events-none">
          <img src="banner.webp" alt="Promo BG" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a] to-[#0a0a0a]"></div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-6">СЕЗОННАЯ АКЦИЯ</div>
          <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] mb-8 tracking-tighter">Твой путь <br/><span className="text-cyan-500">к победе</span></h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">При покупке любого компьютера серии LUMEN или CYBER — профессиональная игровая гарнитура и коврик XL в подарок.</p>
          <button className="flex items-center gap-4 bg-white text-black font-black px-12 py-5 rounded-full uppercase tracking-widest text-xs hover:bg-cyan-400 transition-colors shadow-2xl">Узнать подробности <ArrowRight size={18} /></button>
        </div>
      </div>
    </div>
  </section>
);


export default PromoBanner;

