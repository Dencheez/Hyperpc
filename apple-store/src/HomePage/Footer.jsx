import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const Footer = () => (

  <footer className="bg-black py-28 border-t border-zinc-900 text-gray-500 text-sm">
    <div className="container mx-auto px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-28">
        <div>
          <div className="text-3xl font-black text-white italic mb-10 tracking-tighter uppercase">HYPER<span className="text-cyan-500">PC</span></div>
          <p className="text-gray-600 text-sm leading-relaxed mb-12">Премиальные компьютеры для игр и творчества. Официальное представительство в Казахстане.</p>
          <div className="flex gap-8">
            <Instagram size={20} className="text-gray-700 hover:text-white cursor-pointer transition-colors" />
            <Youtube size={20} className="text-gray-700 hover:text-white cursor-pointer transition-colors" />
            <Facebook size={20} className="text-gray-700 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-12">КАТАЛОГ</h4>
          <ul className="space-y-5 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            {['Игровые компьютеры', 'Мощные ноутбуки', 'Конфигуратор'].map(i => <li key={i} className="hover:text-cyan-500 cursor-pointer transition-colors">{i}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-12">ИНФОРМАЦИЯ</h4>
          <ul className="space-y-5 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            {['О компании', 'Сервисный центр', 'Гарантия', 'Доставка и оплата'].map(i => <li key={i} className="hover:text-cyan-400 cursor-pointer transition-colors">{i}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-12">КОНТАКТЫ</h4>
          <div className="mb-8">
            <p className="text-white font-black text-3xl tracking-tighter italic mb-2">+7 (777) 123-45-67</p>
            <p className="text-[9px] text-gray-700 uppercase font-black tracking-widest">Звонок бесплатный</p>
          </div>
          <p className="text-gray-600 text-xs uppercase font-bold tracking-widest leading-loose">Алматы, пр. Аль-Фараби, 77/7 <br/> БЦ "Esentai Tower"</p>
        </div>
      </div>
      <div className="pt-16 border-t border-zinc-900 flex flex-col lg:flex-row justify-between items-center gap-10">
        <p className="text-[9px] text-gray-800 uppercase font-black tracking-[0.5em]">&copy; 2024 HYPERPC KAZAKHSTAN. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-12 text-[9px] text-gray-800 uppercase font-black tracking-widest">
          <span className="hover:text-gray-400 cursor-pointer transition-colors">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
          <span className="hover:text-gray-400 cursor-pointer transition-colors">ДОГОВОР ОФЕРТЫ</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;