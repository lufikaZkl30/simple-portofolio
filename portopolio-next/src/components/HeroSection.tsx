"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-32 flex flex-col md:flex-row items-center justify-between gap-12 relative">
      
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <p className="font-pixel text-xs text-accent mb-6 tracking-widest">
          UI/UX Designer • Front-End Developer • AI Engineer
        </p>
        
        <h1 className="font-pixel text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 drop-shadow-[4px_4px_0_theme('colors.primary')]">
          HI, I'M <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">LUFIKA</span>
        </h1>
        
        <div className="glass-panel p-4 inline-block mb-10 pixel-border border-primary/50">
          <p className="font-mono text-sm md:text-base text-muted">
            &lt; crafting immersive digital experiences &gt;<br/>
            &lt; with code &amp; creativity <span className="animate-pulse">_</span>/&gt;
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6">
          <a href="#projects" className="pixel-border-primary bg-primary/10 px-6 py-4 font-pixel text-[10px] md:text-xs text-white hover:bg-primary transition-colors neon-glow group flex items-center gap-3">
            <span className="group-hover:translate-x-1 transition-transform">▶</span> VIEW WORK
          </a>
          <a href="#contact" className="pixel-border px-6 py-4 font-pixel text-[10px] md:text-xs text-white hover:bg-white/10 transition-colors">
            CONTACT ME
          </a>
        </div>
      </motion.div>

      {/* Right Visual Environment */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 w-full relative h-[400px] flex items-center justify-center"
      >
        {/* Decorative Pixel Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-accent animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-secondary animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-2 h-2 bg-primary"></div>
        
        {/* Floating Island Concept */}
        <motion.div 
          className="relative z-10 flex flex-col items-center animate-float"
        >
          {/* Character Placeholder */}
          <div className="w-32 h-32 md:w-48 md:h-48 relative z-20 flex items-center justify-center">
            {/* Using standard img instead of next/image since we just have a url */}
            <img 
              src="https://i.pinimg.com/originals/80/9f/1d/809f1d7f767e422406872cdd5642be86.gif" 
              alt="Pixel Character" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
            {/* Fallback if image fails */}
            <div className="absolute inset-0 bg-primary/20 rounded-lg pixel-border -z-10 blur-sm"></div>
          </div>
          
          {/* Platform */}
          <div className="w-48 md:w-64 h-8 bg-gradient-to-b from-[#4ade80] to-[#15803d] border-b-4 border-r-4 border-[#064e3b] rounded-[50%] mt-[-10px] shadow-[0_20px_30px_rgba(0,0,0,0.8)]"></div>
        </motion.div>

        {/* Floating Stats Card RPG Style */}
        <motion.div 
          className="absolute top-0 right-0 glass-panel p-4 pixel-border animate-float-delayed z-20 w-48 hidden lg:block"
        >
          <div className="font-pixel text-[8px] text-primary mb-3 border-b border-primary/30 pb-2">✦ STATUS_</div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between font-mono text-[10px] text-muted mb-1">
                <span>UI/UX</span><span>88</span>
              </div>
              <div className="h-1.5 w-full bg-black/50 border border-white/10"><div className="h-full bg-accent w-[88%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[10px] text-muted mb-1">
                <span>React</span><span>82</span>
              </div>
              <div className="h-1.5 w-full bg-black/50 border border-white/10"><div className="h-full bg-secondary w-[82%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[10px] text-muted mb-1">
                <span>Logic</span><span>90</span>
              </div>
              <div className="h-1.5 w-full bg-black/50 border border-white/10"><div className="h-full bg-primary w-[90%]"></div></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
    </section>
  );
}
