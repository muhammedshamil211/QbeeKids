import React from 'react';
import { motion } from 'framer-motion';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Top Banner - H&M Style */}
      <div className="w-full bg-[#faf9f8] border-b border-zinc-200 py-2 px-4 text-center">
        <p className="text-[10px] md:text-xs font-medium tracking-wider uppercase text-zinc-600">
          Free shipping on orders over $50 • Free & Easy Returns
        </p>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-100">
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Main Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-800">
              <a href="#" className="hover:text-brand-accent transition-colors">Ladies</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Men</a>
              <a href="#" className="hover:text-brand-accent transition-colors font-black text-brand-primary">Kids</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Home</a>
              <a href="#" className="hover:text-brand-accent transition-colors text-red-600">Sale</a>
            </nav>

            {/* Logo - Centered for H&M Feel */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 italic">
                QBEE<span className="text-brand-accent">KIDS</span>
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 md:gap-4">
              <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors hidden sm:block">
                <Search size={20} className="text-zinc-700" />
              </button>
              <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors">
                <User size={20} className="text-zinc-700" />
              </button>
              <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors hidden sm:block">
                <Heart size={20} className="text-zinc-700" />
              </button>
              <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors relative">
                <ShoppingBag size={20} className="text-zinc-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-brand-accent rounded-full border-2 border-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Sub-navigation for Kids - Desktop */}
        <div className="hidden md:block w-full border-t border-zinc-50 py-3">
          <div className="w-full px-8">
            <div className="flex justify-center gap-10 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
              <a href="#" className="hover:text-zinc-900 transition-colors underline underline-offset-4">New Arrivals</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Clothing</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Accessories</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Customized Gifts</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">School Kits</a>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            className="fixed inset-0 top-[104px] z-50 bg-white md:hidden p-6"
          >
            <div className="flex flex-col gap-6 text-lg font-bold uppercase tracking-widest text-zinc-800">
              <a href="#">Ladies</a>
              <a href="#">Men</a>
              <a href="#" className="text-brand-accent">Kids</a>
              <a href="#">Home</a>
              <a href="#" className="text-red-600">Sale</a>
              <hr className="border-zinc-100" />
              <div className="flex flex-col gap-4 text-sm font-medium text-zinc-500">
                <a href="#">New Arrivals</a>
                <a href="#">Clothing</a>
                <a href="#">Accessories</a>
                <a href="#">Customized Gifts</a>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
