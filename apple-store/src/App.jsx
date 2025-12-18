import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink, Check, Trash2, ShoppingBag
} from 'lucide-react';

import Navbar from './HomePage/Navbar.jsx';
import CartDrawer from './HomePage/CartDrawer.jsx';
import ConfigModal from './HomePage/ConfigModal.jsx';
import Hero from './HomePage/Hero.jsx';
import SpecialDeals from './HomePage/SpecialDeals.jsx';
import Production from './HomePage/Production.jsx';
import Gallery from './HomePage/Gallery.jsx';
import Accessories from './HomePage/Accessories.jsx';
import BundleSection from './HomePage/BundleSection.jsx';
import Services from './HomePage/Services.jsx';
import PromoBanner from './HomePage/PromoBanner.jsx';
import Footer from './HomePage/Footer.jsx';





const App = () => {
  // Состояние корзины
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Состояние модального окна конфигуратора
  const [configProduct, setConfigProduct] = useState(null);

  // Добавление в корзину
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };

  // Удаление из корзины
  const removeFromCart = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-cyan-500 selection:text-black antialiased">
      {/* Навигация с передачей кол-ва товаров */}
      <Navbar cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />

      {/* Выезжающая корзина */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={removeFromCart} 
      />

      {/* Модальное окно конфигуратора (открывается при клике на галерею) */}
      <ConfigModal 
        isOpen={!!configProduct}
        onClose={() => setConfigProduct(null)}
        product={configProduct}
        onAddToCart={addToCart}
      />

      {/* Основные секции */}
      <Hero />
      <SpecialDeals />
      <Production />
      
      {/* В Галерею передаем функцию открытия модалки */}
      <Gallery onProductClick={setConfigProduct} />
      
      <Accessories />
      <BundleSection />
      <Services />
      <PromoBanner />
      <Footer />
    </div>
  );
};

export default App;