import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Monitor, Cpu, Zap, 
  Gamepad2, ShieldCheck, Instagram, Youtube, Facebook, 
  Percent, RefreshCcw, Gift, ArrowRight, Settings, Truck,
  MousePointer2, Keyboard, Headphones, Flame, Box, Search,
  Wrench, Layers, Hammer, Camera, ExternalLink, Check, Trash2, ShoppingBag, CheckCircle
} from 'lucide-react';


import ConfigModal from './HomePage/ConfigModal';
import OrderDone from './HomePage/OrderDone';
import CartDrawer from './HomePage/CartDrawer';
import SpecialDeals from './HomePage/SpecialDeals';
import Footer from './HomePage/Footer';
import Navbar from './HomePage/Navbar';
import Hero from './HomePage/Hero';
import Gallery from './HomePage/Gallery';
import Services from './HomePage/Services';
import Production from './HomePage/Production';
import Accessories from './HomePage/Accessories';
import BundleSection from './HomePage/BundleSection';
import PromoBanner from './HomePage/PromoBanner';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [configProduct, setConfigProduct] = useState(null);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (idx) => {
    setCartItems(prev => prev.filter((_, i) => i !== idx));
  };

  const handleCheckout = () => {
    setIsOrdered(true);
    setIsCartOpen(false);
    setCartItems([]);
  };

  return (
    <div className="bg-black selection:bg-cyan-500 selection:text-black antialiased">
      <Navbar cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <SpecialDeals />
        <Production />
        <Gallery onProductClick={setConfigProduct} />
        <Accessories />
        <BundleSection />
        <Services />
        <PromoBanner />
      </main>

      <Footer />
      
      {/* Модальное окно подтверждения заказа */}
      <OrderDone isOpen={isOrdered} onClose={() => setIsOrdered(false)} />
      
      {/* Шторка корзины */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} onRemove={removeFromCart} onCheckout={handleCheckout} />
      
      {/* Модальное окно конфигуратора */}
      <ConfigModal isOpen={!!configProduct} onClose={() => setConfigProduct(null)} product={configProduct} onAddToCart={addToCart} />
    </div>
  );
};

export default App;