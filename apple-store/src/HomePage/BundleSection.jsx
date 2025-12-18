import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const BundleSection = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-10">
        {/* Карточка-контейнер */}
        <div className="relative rounded-[3rem] overflow-hidden border border-zinc-800 isolate min-h-[600px] flex items-center">
          
          {/* 1. ВИДЕО ФОН (Абсолютное позиционирование на весь блок) */}
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/bundle-placeholder.jpg"
            >
              <source src="/1218.mp4" type="video/mp4" />
            </video>
            
            {/* 2. ГРАДИЕНТНОЕ ЗАТЕМНЕНИЕ */}
            {/* Сильное затемнение слева (from-black) для текста, плавный переход к прозрачному справа */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            {/* Дополнительное легкое затемнение снизу для контраста цены */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* 3. КОНТЕНТ (Поверх видео) */}
          <div className="relative z-10 p-8 md:p-20 w-full lg:w-2/3">
            <div className="inline-flex items-center gap-2 text-orange-500 font-bold mb-8 text-xs uppercase italic animate-pulse">
              <Flame size={16} /> Limited Edition Offer
            </div>
            
            <h3 className="text-5xl md:text-7xl font-black text-white italic mb-8 uppercase leading-[0.9] tracking-tighter drop-shadow-lg">
              HYPERPC <br/> 
              <span className="text-cyan-500">ULTIMATE SET</span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-12 max-w-lg">
              {[
                { icon: <Monitor size={20}/>, text: "Монитор 4K 144Hz" },
                { icon: <Keyboard size={20}/>, text: "Механика RGB" },
                { icon: <MousePointer2 size={20}/>, text: "Мышь Pro Wireless" },
                { icon: <Headphones size={20}/>, text: "Звук 7.1 Surround" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200 bg-black/60 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:bg-black/80 transition-colors">
                  <div className="text-cyan-500">{item.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-end gap-8 mb-10">
              <div>
                  <div className="text-gray-400 text-sm line-through uppercase tracking-widest font-bold mb-1 drop-shadow-md">2 150 000 ₸</div>
                  <div className="text-5xl font-black text-white italic tracking-tighter drop-shadow-xl">1 850 000 ₸</div>
              </div>
            </div>

            <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-cyan-500 transition-all flex items-center gap-4 group shadow-xl hover:shadow-cyan-500/20">
              Заказать комплект <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleSection;

