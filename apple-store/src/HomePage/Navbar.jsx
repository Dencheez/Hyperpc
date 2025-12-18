import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';

const Navbar = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Игровые ПК', href: '#gallery' },
    { title: 'Периферия', href: '#accessories' },
    { title: 'Услуги', href: '#services' },
    { title: 'Акции', href: '#deals' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black/95 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-7'}`}>
      <div className="container mx-auto px-4 md:px-10 flex justify-between items-center">
        {/* Логотип */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-3xl font-black tracking-tighter text-white italic cursor-pointer group uppercase"
        >
          HYPER<span className="text-cyan-500 group-hover:text-cyan-400 transition-colors">PC</span>
        </div>

        {/* Ссылки (Desktop) */}
        <div className="hidden lg:flex items-center space-x-12 text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
          {navLinks.map((item) => (
            <a key={item.title} href={item.href} className="hover:text-white transition-colors relative group">
              {item.title}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Иконки */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="p-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
            <Search size={20} />
          </div>
          <button className="flex items-center gap-2 px-8 py-3 bg-[#111] border border-zinc-800 hover:border-cyan-500/50 text-white font-bold text-[10px] uppercase tracking-widest rounded-sm transition-all">
            <Settings size={14} /> Конфигуратор
          </button>
          <div 
            className="relative cursor-pointer hover:text-cyan-500 transition-colors"
            onClick={onOpenCart}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-600 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(8,145,178,0.5)] animate-bounce">
                 {cartCount}
              </span>
            )}
            {cartCount === 0 && (
               <span className="absolute -top-2 -right-2 bg-cyan-600 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(8,145,178,0.5)]">0</span>
            )}
          </div>
        </div>

        {/* Кнопка Мобильного Меню */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Мобильное Меню Выпадающее */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl">
           {navLinks.map((item) => (
            <a 
                key={item.title} 
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white text-left"
                onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <div className="flex items-center gap-4 text-white" onClick={onOpenCart}>
             <ShoppingCart size={20} /> Корзина ({cartCount})
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;