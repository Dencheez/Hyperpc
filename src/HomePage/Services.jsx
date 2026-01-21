import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const Services = () => {
   const services = [
      { title: "Апгрейд ПК", desc: "Обменяй старую видеокарту на новую с доплатой.", bg: "from-blue-900/40" },
      { title: "Моддинг", desc: "Кастомная покраска, винил и уникальный дизайн.", bg: "from-purple-900/40" },
      { title: "Обслуживание", desc: "Профессиональная чистка и замена термоинтерфейса.", bg: "from-green-900/40" },
   ];
   return (
      <section id="services" className="py-20 bg-black border-t border-zinc-900 text-white">
         <div className="container mx-auto px-4 md:px-10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-10">Услуги <span className="text-gray-600">Сервиса</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {services.map((s, i) => (
                  <div key={i} className={`p-8 rounded-[2rem] bg-gradient-to-br ${s.bg} to-zinc-900 border border-zinc-800 hover:border-white/20 transition-all cursor-pointer group`}>
                      <h3 className="text-2xl font-black italic uppercase mb-3">{s.title}</h3>
                      <p className="text-gray-400 text-sm mb-6">{s.desc}</p>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"><ArrowRight size={18} /></div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}


export default Services;