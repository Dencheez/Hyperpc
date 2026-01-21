import React from "react";
import { CheckCircle } from "lucide-react";

const OrderDone = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Карточка модалки */}
      <div className="relative bg-[#121212] p-10 md:p-12 rounded-[2.5rem] shadow-2xl text-center max-w-md w-full border border-zinc-800 animate-in zoom-in duration-300">
        <CheckCircle size={80} className="text-cyan-500 mx-auto mb-8 animate-pulse" />
        <h1 className="text-4xl font-black italic mb-4 uppercase tracking-tighter text-white">Спасибо за заказ!</h1>
        <p className="text-gray-400 mb-10 text-sm leading-relaxed">
          Ваш заказ был успешно оформлен. Мы свяжемся с вами в ближайшее время для подтверждения деталей.
        </p>
        <button 
          onClick={onClose} 
          className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-cyan-500/50"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default OrderDone;