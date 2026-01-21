import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const Production = () => (
  <section className="py-24 bg-black border-t border-zinc-900 text-white">
    <div className="container mx-auto px-4 md:px-10">
       <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-12">
             <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 leading-none">Качество <br/> <span className="text-cyan-500">в деталях</span></h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Layers size={24}/>, title: "Кабель-менеджмент", desc: "Идеальная укладка проводов.", color: "text-cyan-500" },
                  { icon: <Flame size={24}/>, title: "Тестирование", desc: "48 часов нагрузок.", color: "text-purple-500" },
                  { icon: <Hammer size={24}/>, title: "Упаковка", desc: "Деревянная обрешетка.", color: "text-green-500" },
                  { icon: <Wrench size={24}/>, title: "Поддержка", desc: "Пожизненный сервис.", color: "text-yellow-500" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className={`p-3 bg-zinc-900 rounded-xl h-fit ${item.color}`}>{item.icon}</div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="flex-1 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl rounded-3xl"></div>
             <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2670" alt="Production" className="relative rounded-3xl border border-white/10" />
          </div>
       </div>
    </div>
  </section>
);

export default Production;