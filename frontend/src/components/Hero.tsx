import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 py-24 overflow-hidden bg-white dark:bg-black">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-50 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium border rounded-full glass border-primary/20 text-primary"
        >
          <Sparkles className="w-4 h-4" />
          <span>Discover the joy of learning</span>
        </motion.div>

        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl mb-8 leading-[1.1]">
          Where Every Child <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            Dreams Big.
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-muted-foreground mb-10 text-zinc-600 dark:text-zinc-400">
          Qbee Kids is a playful world designed to ignite curiosity and foster creativity. 
          We believe in learning through play and growing with joy.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center h-14 px-8 text-lg font-semibold text-white rounded-2xl bg-primary shadow-lg shadow-primary/30 transition-all hover:bg-primary/90"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center h-14 px-8 text-lg font-semibold border rounded-2xl glass border-zinc-200 dark:border-zinc-800 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
