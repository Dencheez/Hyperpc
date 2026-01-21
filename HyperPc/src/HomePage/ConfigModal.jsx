import React, { useState, useEffect } from 'react';
// ОБЯЗАТЕЛЬНО: Добавляем Check в этот список
import { X, Layers, Check } from 'lucide-react';

const ConfigModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState('black');

  // Сброс цвета при открытии
  useEffect(() => {
    if (isOpen) setSelectedColor('black');
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  // ТОЛЬКО 2 ЦВЕТА (как в ТЗ)
  const colors = [
    { id: 'black', name: 'Black Phantom', value: '#111111' },
    { id: 'white', name: 'White Ghost', value: '#ffffff' },
  ];

  const handleAddToCart = () => {
    onAddToCart({ 
      ...product, 
      selectedColor: colors.find(c => c.id === selectedColor)?.name || 'Standard' 
    });
    onClose();
  };

  // Логика смены картинки:
  // 1. Если выбрана белая тема И у товара есть поле imgWhite -> берем его.
  // 2. Иначе оставляем обычную картинку product.img.
  const isWhite = selectedColor === 'white';
  const currentImg = (isWhite && product.imgWhite) ? product.imgWhite : product.img;
  
  // Убрал фильтры (осветление). Оставил только плавность перехода.
  const imgStyle = { transition: 'all 0.5s ease' };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-[#0a0a0a] border border-zinc-800 rounded-[2.5rem] w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full text-gray-400 hover:text-white flex items-center justify-center transition-colors hover:rotate-90 duration-300"
        >
          <X size={20} />
        </button>

        {/* Левая часть: Картинка на всю область без градиентов */}
        <div className="w-full md:w-1/2 relative bg-black">
           <img 
             src={currentImg} 
             alt={product.title} 
             style={imgStyle}
             className="w-full h-full object-cover absolute inset-0" 
           />
        </div>

        {/* Правая часть: Инфо */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col h-full overflow-y-auto bg-[#0a0a0a]">
           <div className="mb-8">
              <div className="inline-block px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-500">
                  {product.edition || "EDITION"}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
                {product.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4">
                {product.description}
              </p>
           </div>

           <div className="mb-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 flex items-center gap-2">
                <Layers size={14} /> Выберите корпус
              </h4>
              <div className="flex gap-4">
                {colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`group relative w-12 h-12 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 ${selectedColor === color.id ? 'border-cyan-500 scale-110' : 'border-zinc-800 hover:border-gray-600'}`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {/* ВОТ ЗДЕСЬ ИСПОЛЬЗУЕТСЯ Check */}
                    {selectedColor === color.id && (
                      <Check size={18} className={color.id === 'white' ? 'text-black' : 'text-white'} strokeWidth={3} />
                    )}
                  </button>
                ))}
              </div>
           </div>

           <div className="mt-auto pt-6 border-t border-zinc-800 flex items-center justify-between gap-6">
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Цена</div>
                <div className="text-3xl font-black text-white italic tracking-tight">{product.formattedPrice}</div>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-white hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95"
              >
                В корзину
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigModal;