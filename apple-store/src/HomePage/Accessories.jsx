import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const Accessories = () => {
  const items = [
    { title: "КЛАВИАТУРЫ", img: "KEYBOARD.jpg", desc: "Механические переключатели" },
    { title: "МЫШИ", img: "MOUSE.jpg", desc: "Высокоточные сенсоры" },
    { title: "ГАРНИТУРЫ", img: "HEADPHONE.jpg", desc: "Объемный звук 7.1" },
  ];

  return (
    <section className="py-24 bg-[#080808] border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-12">
          Игровая <span className="text-cyan-500">Периферия</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer border border-zinc-900">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-black text-white italic uppercase mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">{item.desc}</p>
              </div>
              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;