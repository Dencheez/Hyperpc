import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink
} from 'lucide-react';



const galleryData = [
  { 
    id: 1, 
    title: "LUMEN X", 
    img: "hyperpc-lumen-x-black-fit-0x450.jpg",
    imgWhite: "hyperpc-play-7-water-white-fit-0x450.jpg",
    price: 980000,
    formattedPrice: "980 000 ₸",
    edition: "GAMING SERIES",
    accent: "from-cyan-500 to-blue-600",
    description: "Идеальный баланс производительности и стиля. Создан для современных игр в разрешении 2K."
  },
  { 
    id: 2, 
    title: "PLAY 9", 
    img: "hyperpc-play-x-black-water-fit-0x800.jpg",
    imgWhite: "hyperpc-dynamic-evo-rgb-white-fit-0x450-imgWhite.jpg",
    price: 2100000,
    formattedPrice: "2 100 000 ₸",
    edition: "ULTIMATE",
    accent: "from-orange-500 to-red-600",
    description: "Абсолютная вершина технологий. Максимальные настройки в 4K и трассировка лучей."
  },
  { 
    id: 3, 
    title: "DYNAMIC", 
    img: "DYNAMIC.jpg",
    price: 1450000,
    formattedPrice: "1 450 000 ₸",
    edition: "PRO SERIES",
    accent: "from-purple-500 to-pink-600",
    description: "Профессиональное решение для стриминга и создания контента."
  },
  { 
    id: 4, 
    title: "VOLT", 
    img: "VOLT.png",
    price: 850000,
    formattedPrice: "850 000 ₸",
    edition: "START",
    accent: "from-green-500 to-emerald-600",
    description: "Твой входной билет в мир киберспорта. Стабильный FPS в любых шутерах."
  },
  { id: 5, title: "CONCEPT",
     img: "hyperpc-concept-7-x-black-fit-0x450.jpg",
     imgWhite: "hyperpc-concept-9-black-fit-0x450.jpg",
     price: 3000000, formattedPrice: "3 000 000 ₸",
     edition: "LIMITED", 
     accent: "from-gray-500 to-white",
     description: "Эксклюзивный концепт." },

  { id: 6, title: "NEON", img: "NEON.jpg", price: 1100000, formattedPrice: "1 100 000 ₸", edition: "RGB KING", accent: "from-pink-500 to-purple-600", description: "Максимум подсветки." },
  { id: 7, title: "TITAN", img: "TITAN.jpg", price: 4500000, formattedPrice: "4 500 000 ₸", edition: "WORKSTATION", accent: "from-yellow-500 to-orange-600", description: "Для 3D рендеринга." },
  { id: 8, title: "CORE", img: "hyperpc-play-5-black-water-fit-0x450.jpg",
    imgWhite: "hyperpc-play-5-white-water-fit-0x450.jpg",
    price: 750000,
    formattedPrice: "750 000 ₸",
    edition: "BASE",
    accent: "from-blue-500 to-indigo-600",
    description: "Базовая мощность." }
];

const Gallery = ({ onProductClick }) => {
  const galleryData = [
    { id: 1, title: "LUMEN X", img: "hyperpc-lumen-x-black-fit-0x450.jpg", imgWhite: "hyperpc-play-7-water-white-fit-0x450.jpg", price: 980000, formattedPrice: "980 000 ₸", edition: "GAMING SERIES", description: "Идеальный баланс производительности и стиля." },
    { id: 2, title: "PLAY 9", img: "hyperpc-play-x-black-water-fit-0x800.jpg", imgWhite: "hyperpc-dynamic-evo-rgb-white-fit-0x450-imgWhite.jpg", price: 2100000, formattedPrice: "2 100 000 ₸", edition: "ULTIMATE", description: "Абсолютная вершина технологий." },
    { id: 3, title: "DYNAMIC", img: "DYNAMIC.jpg", price: 1450000, formattedPrice: "1 450 000 ₸", edition: "PRO SERIES", description: "Профессиональное решение для стриминга." },
    { id: 4, title: "VOLT", img: "VOLT.png", price: 850000, formattedPrice: "850 000 ₸", edition: "START", description: "Твой входной билет в мир киберспорта." },
    { id: 5, title: "CONCEPT", img: "hyperpc-concept-7-x-black-fit-0x450.jpg", imgWhite: "hyperpc-concept-9-black-fit-0x450.jpg", price: 3000000, formattedPrice: "3 000 000 ₸", edition: "LIMITED", description: "Эксклюзивный концепт." },
    { id: 6, title: "NEON", img: "NEON.jpg", price: 1100000, formattedPrice: "1 100 000 ₸", edition: "RGB KING", description: "Максимум подсветки." },
    { id: 7, title: "TITAN", img: "TITAN.jpg", price: 4500000, formattedPrice: "4 500 000 ₸", edition: "WORKSTATION", description: "Для 3D рендеринга." },
    { id: 8, title: "CORE", img: "hyperpc-play-5-black-water-fit-0x450.jpg", imgWhite: "hyperpc-play-5-white-water-fit-0x450.jpg", price: 750000, formattedPrice: "750 000 ₸", edition: "BASE", description: "Базовая мощность." }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#080808] text-white">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-16">КАТАЛОГ <span className="text-cyan-500">СБОРОК</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryData.map((item) => (
            <div key={item.id} onClick={() => onProductClick(item)} className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer border border-zinc-900">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                 <h3 className="text-2xl font-black italic uppercase mb-2">{item.title}</h3>
                 <div className="flex items-center gap-2 text-cyan-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">Подробнее <ArrowRight size={16} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;