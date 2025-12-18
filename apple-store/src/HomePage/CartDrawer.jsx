import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink, ShoppingBag, Trash2
} from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-zinc-800 z-[95] shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="text-xl font-black italic uppercase">Корзина <span className="text-cyan-500">({items.length})</span></h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p className="text-sm font-bold uppercase tracking-widest">Корзина пуста</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 bg-zinc-900/50 p-3 rounded-xl border border-white/5 relative group">
                <div className="w-20 h-20 bg-black rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      {item.edition} 
                      {item.selectedColor && <span className="text-cyan-500 ml-1">• {item.selectedColor}</span>}
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-cyan-400 font-bold text-sm">{item.formattedPrice}</span>
                    <button onClick={() => onRemove(index)} className="text-gray-500 hover:text-red-500 transition-colors p-1"><Trash2 size={16} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-zinc-800 bg-[#0a0a0a]">
          <div className="flex justify-between items-end mb-6">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Итого:</span>
            <span className="text-2xl font-black text-white italic">{total.toLocaleString()} ₸</span>
          </div>
          <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] disabled:opacity-50 disabled:cursor-not-allowed" disabled={items.length === 0}>
            Оформить заказ
          </button>
        </div>
      </div>
    </>
  );
};
export default CartDrawer;