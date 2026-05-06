'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';

import { PremiumButton as SportButton } from '@/components/ui/SportButton';
import { SportCard, SportCardHeader, SportCardTitle, SportCardDescription } from '@/components/ui/SportCard';
import { SportInput } from '@/components/ui/SportInput';
import { PageContainer, SectionContainer, ContentWrapper } from '@/components/layout/Containers';
import { fadeIn, slideUp, staggerContainer } from '@/design-system/animations/presets';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <PageContainer className="pt-0">
      <Navbar />
      
      <main>
        {/* Full-Width Hero Section - H&M Style */}
        <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
          <Image 
            src="/premium_kids_fashion_hero.jpg"
            alt="Qbee Kids Collection"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/5" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-sm shadow-premium "
            >
              <motion.span variants={fadeIn} className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 block">
                Summer 2026 Collection
              </motion.span>
              <motion.h1 variants={slideUp} className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 mb-6 italic uppercase">
                The New <br /> Standard.
              </motion.h1>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <SportButton size="lg" variant="primary" className="rounded-sm px-10">
                  Shop Kids
                </SportButton>
                <SportButton size="lg" variant="outline" className="rounded-sm px-10">
                  Custom Gifts
                </SportButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid - Clean Minimalist */}
        <SectionContainer className="bg-[#faf9f8] border-b border-zinc-100">
          <ContentWrapper>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-8">
              {[
                { icon: Truck, text: "Fast Global Shipping" },
                { icon: RotateCcw, text: "30-Day Easy Returns" },
                { icon: ShieldCheck, text: "Secure Checkout" },
                { icon: Star, text: "Premium Quality" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <item.icon size={24} className="text-zinc-400" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">{item.text}</span>
                </div>
              ))}
            </div>
          </ContentWrapper>
        </SectionContainer>

        {/* Category Grid - H&M Editorial Style */}
        <SectionContainer>
          <ContentWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Feature Card */}
              <motion.div 
                whileHover={{ scale: 0.99 }}
                className="md:col-span-2 relative aspect-[16/10] overflow-hidden group cursor-pointer"
              >
                <Image 
                  src="/premium_kids_fashion_hero.png" 
                  alt="New Arrivals" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2">The Playful Edit</h3>
                  <p className="text-sm font-medium mb-6 opacity-90">Discover our most loved pieces.</p>
                  <SportButton variant="secondary" className="rounded-sm">Explore Now</SportButton>
                </div>
              </motion.div>

              {/* Smaller Category Cards */}
              <div className="flex flex-col gap-6">
                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className="relative flex-1 aspect-square md:aspect-auto overflow-hidden group cursor-pointer"
                >
                  <Image 
                    src="/premium_custom_gifts_hero.png" 
                    alt="Customized Gifts" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold italic uppercase tracking-tighter">Customized</h4>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className="relative flex-1 aspect-square md:aspect-auto overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-brand-accent flex flex-col items-center justify-center p-8 text-center">
                    <h4 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-2">School Kits</h4>
                    <p className="text-xs text-white/80 font-bold tracking-widest uppercase mb-6">Back to school</p>
                    <SportButton variant="secondary" size="sm" className="rounded-sm">Shop Kits</SportButton>
                  </div>
                </motion.div>
              </div>
            </div>
          </ContentWrapper>
        </SectionContainer>

        {/* Customization Promo Section */}
        <SectionContainer className="bg-white">
          <ContentWrapper>
            <div className="max-w-4xl mx-auto border-t border-b border-zinc-100 py-24 flex flex-col items-center text-center">
              <span className="text-brand-accent font-black tracking-[0.3em] uppercase text-xs mb-8">Personalization Service</span>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-zinc-900 mb-8">
                Uniquely Theirs.
              </h2>
              <p className="text-lg text-zinc-500 mb-12 max-w-2xl leading-relaxed">
                Add a personal touch to your favorite pieces. Our premium customization service is now available for all school kits and clothing items.
              </p>
              
              <div className="w-full max-w-md space-y-6">
                <SportInput 
                  placeholder="ENTER NAME" 
                  className="rounded-sm border-zinc-200 focus-visible:border-zinc-900"
                />
                <SportButton fullWidth variant="primary" className="rounded-sm">Start Customizing</SportButton>
              </div>
            </div>
          </ContentWrapper>
        </SectionContainer>
      </main>

      {/* Modern Minimal Footer */}
      <footer className="bg-white py-24 px-8 border-t border-zinc-100">
        <ContentWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
              <div className="text-2xl font-black italic uppercase tracking-tighter text-zinc-900 mb-6">
                QBEE<span className="text-brand-accent">KIDS</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Providing premium, customized clothing and essentials for the next generation.
              </p>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 mb-6">Shop</h5>
              <ul className="text-xs space-y-4 text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-zinc-900">New Arrivals</a></li>
                <li><a href="#" className="hover:text-zinc-900">Clothing</a></li>
                <li><a href="#" className="hover:text-zinc-900">Customized Gifts</a></li>
                <li><a href="#" className="hover:text-zinc-900">School Kits</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 mb-6">Corporate</h5>
              <ul className="text-xs space-y-4 text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-zinc-900">Sustainability</a></li>
                <li><a href="#" className="hover:text-zinc-900">About Us</a></li>
                <li><a href="#" className="hover:text-zinc-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 mb-6">Help</h5>
              <ul className="text-xs space-y-4 text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-zinc-900">Customer Service</a></li>
                <li><a href="#" className="hover:text-zinc-900">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-zinc-900">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">© 2026 Qbee Kids Collective. All Rights Reserved.</p>
            <div className="flex gap-8 text-[10px] font-bold text-zinc-900 uppercase tracking-widest">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </ContentWrapper>
      </footer>
    </PageContainer>
  );
}
