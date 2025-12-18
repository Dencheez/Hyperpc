import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const Production = () => {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-10">
         <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-12">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6 leading-none">
                     Качество <br/> <span className="text-cyan-500">в деталях</span>
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                     Каждый компьютер HYPERPC собирается вручную сертифицированными инженерами. Мы уделяем внимание каждой мелочи.
                  </p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { icon: <Layers size={24}/>, title: "Кабель-менеджмент", desc: "Идеальная укладка проводов для лучшего охлаждения.", color: "text-cyan-500" },
                    { icon: <Flame size={24}/>, title: "Стресс-тестирование", desc: "48 часов экстремальных нагрузок перед отправкой.", color: "text-purple-500" },
                    { icon: <Hammer size={24}/>, title: "Надежная упаковка", desc: "Деревянная обрешетка и страховка на полную стоимость.", color: "text-green-500" },
                    { icon: <Wrench size={24}/>, title: "Поддержка", desc: "Пожизненная техническая поддержка для всех клиентов.", color: "text-yellow-500" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className={`p-3 bg-zinc-900 rounded-xl h-fit ${item.color}`}>{item.icon}</div>
                      <div>
                        <h4 className="text-white font-black uppercase text-sm mb-2">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="flex-1 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl rounded-3xl"></div>
               <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2670&auto=format&fit=crop" alt="Production" className="relative rounded-3xl border border-white/10 shadow-2xl" />
            </div>
         </div>
      </div>
    </section>
  );
};

export default Production;