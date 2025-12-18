import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const SpecialDeals = () => {
  const deals = [
    { title: "TRADE-IN", desc: "Обмен старого ПК на новый с выгодой до 200 000 ₸", icon: <RefreshCcw size={28}/> },
    { title: "РАССРОЧКА", desc: "0-0-24 через Kaspi и Halyk без переплат", icon: <Percent size={28}/> },
    { title: "ГАРАНТИЯ", desc: "3 года полной гарантии и выездной сервис", icon: <ShieldCheck size={28}/> },
  ];

  return (
    <section id="deals" className="py-16 bg-[#050505] border-b border-zinc-900 relative z-20 -mt-20 rounded-t-[3rem]">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, i) => (
            <div key={i} className="flex items-center gap-6 p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/50 hover:border-cyan-500/30 transition-all cursor-pointer group backdrop-blur-sm">
               <div className="p-4 bg-zinc-950 rounded-2xl text-cyan-500 group-hover:scale-110 transition-transform border border-zinc-800">
                 {deal.icon}
               </div>
               <div>
                 <h4 className="text-white font-black text-lg italic uppercase tracking-wider mb-1">{deal.title}</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">{deal.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SpecialDeals;