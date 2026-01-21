import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const Footer = () => (
  <footer className="bg-black py-28 border-t border-zinc-900 text-gray-500">
    <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-20 mb-20 text-white">
      <div>
        <div className="text-3xl font-black italic mb-10 tracking-tighter uppercase text-white">HYPER<span className="text-cyan-500">PC</span></div>
        <p className="text-gray-600 text-sm">Премиальные компьютеры для игр и творчества. Официальное представительство в Казахстане.</p>
        <div className="flex gap-8 mt-10">
          <Instagram size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Youtube size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Facebook size={20} className="hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      <div><h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-12">КАТАЛОГ</h4><ul className="space-y-5 text-[10px] font-bold uppercase tracking-[0.2em]">{['Игровые компьютеры', 'Мощные ноутбуки', 'Конфигуратор'].map(i => <li key={i} className="hover:text-cyan-500 cursor-pointer">{i}</li>)}</ul></div>
      <div><h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-12">ИНФОРМАЦИЯ</h4><ul className="space-y-5 text-[10px] font-bold uppercase tracking-[0.2em]">{['О компании', 'Сервисный центр', 'Гарантия', 'Доставка'].map(i => <li key={i} className="hover:text-cyan-400 cursor-pointer">{i}</li>)}</ul></div>
      <div>
        <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-12">КОНТАКТЫ</h4>
        <p className="text-white font-black text-3xl italic tracking-tighter">+7 (777) 123-45-67</p>
        <p className="text-gray-600 text-xs mt-5 leading-loose">Алматы, пр. Аль-Фараби, 77/7 <br/> БЦ "Esentai Tower"</p>
      </div>
    </div>
  </footer>
);

export default Footer;