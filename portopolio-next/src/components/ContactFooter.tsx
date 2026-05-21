"use client";

import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative mt-20 pt-20 border-t border-white/10 bg-[#03050a] overflow-hidden">
      
      {/* Decorative Footer background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* CTA Area */}
          <div className="lg:col-span-5 glass-panel pixel-border p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute -right-10 -bottom-10 text-8xl opacity-10 group-hover:scale-110 transition-transform duration-700">📦</div>
            
            <h2 className="font-pixel text-xl md:text-2xl text-white leading-loose mb-6">
              LET'S BUILD SOMETHING <br/>
              <span className="text-primary">AMAZING TOGETHER!</span>
            </h2>
            <p className="font-mono text-sm text-muted mb-8 max-w-sm">
              I'm open for freelance projects and exciting opportunities. Let's create memorable digital experiences.
            </p>
            
            <a href="mailto:lufikabgy337@gmail.com" className="inline-block pixel-border-primary bg-primary/10 px-6 py-4 font-pixel text-xs text-white hover:bg-primary transition-colors neon-glow">
              ▶ START PROJECT
            </a>
          </div>
          
          {/* Contact Links Area */}
          <div className="lg:col-span-4 glass-panel pixel-border p-8">
            <h3 className="font-pixel text-[10px] text-secondary mb-8 tracking-widest border-b border-white/10 pb-4">
              CONTACT_ME.EXE
            </h3>
            
            <ul className="space-y-6">
              <li>
                <a href="mailto:lufikabgy337@gmail.com" className="flex items-center gap-4 font-mono text-sm text-muted hover:text-white transition-colors group">
                  <span className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors text-lg">✉</span>
                  lufikabgy337@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/lufikaZkl30" target="_blank" className="flex items-center gap-4 font-mono text-sm text-muted hover:text-white transition-colors group">
                  <span className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-colors text-lg">🐙</span>
                  github.com/lufikaZkl30
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lufikaayu" target="_blank" className="flex items-center gap-4 font-mono text-sm text-muted hover:text-white transition-colors group">
                  <span className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/50 transition-colors text-lg">💼</span>
                  linkedin.com/in/lufikaayu
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Connect Area */}
          <div className="lg:col-span-3 glass-panel pixel-border p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-pixel text-[10px] text-accent mb-4 tracking-widest">
                THANKS FOR VISITING!
              </h3>
              <p className="font-mono text-xs text-muted">
                Press Start to Connect
              </p>
            </div>
            
            <div className="flex justify-between items-end mt-10">
              <a href="mailto:lufikabgy337@gmail.com" className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_theme('colors.accent')]">
                ▶
              </a>
              <div className="text-4xl animate-bounce">
                👾
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © 2026 LUFIKA AYU FATIMAH. All rights reserved.
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-pixel text-[8px] text-white/50 hover:text-white transition-colors px-4 py-2 border border-white/10 hover:border-white/30 bg-white/5"
          >
            ↑ TOP
          </button>
        </div>
      </div>
      
    </footer>
  );
}
