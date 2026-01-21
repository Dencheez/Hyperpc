import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover opacity-60"
          autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2642&auto=format&fit=crop"
        >
            <source src="/1218(1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-cyan-500"></span>
            <span className="text-cyan-500 font-black tracking-[0.4em] text-[10px] uppercase">Elite Gaming Hardware</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.85] italic uppercase tracking-tighter">
            HYPERPC <br/>
            <span className="">LUMEN 2024</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed">
            Бескомпромиссная производительность в обновленном дизайне.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;