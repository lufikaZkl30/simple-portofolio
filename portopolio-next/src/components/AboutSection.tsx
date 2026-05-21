"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <span className="font-pixel text-primary text-xl">✦</span>
          <h2 className="font-pixel text-xl md:text-2xl text-white">ABOUT PLAYER</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent ml-4"></div>
        </div>

        <div className="glass-panel pixel-border p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center">
          
          {/* Avatar Frame */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 bg-black pixel-border flex items-center justify-center p-2 relative z-10 group">
              <img 
                src="img/pp-me.png" 
                alt="Lufika Ayu Fatimah" 
                className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-500"
                onError={(e) => e.currentTarget.src = 'https://i.pinimg.com/736x/80/9f/1d/809f1d7f767e422406872cdd5642be86.jpg'}
              />
              
              {/* Corner decos */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary"></div>
            </div>
            {/* Background glow */}
            <div className="absolute inset-0 bg-primary/20 blur-xl z-0 scale-110"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4 font-mono text-sm md:text-base text-muted leading-relaxed">
              <p>
                I'm a UI/UX Designer and Front-End Developer who enjoys creating clean, functional, and visually engaging digital experiences.
              </p>
              <p>
                I focus on combining design thinking with modern web technologies to build products that are not only beautiful but also solve real problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              <Badge color="primary">UI/UX Design</Badge>
              <Badge color="secondary">Front-End</Badge>
              <Badge color="accent">AI Enthusiast</Badge>
              <Badge color="white">Creative Thinker</Badge>
              <Badge color="white">Problem Solver</Badge>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}

function Badge({ children, color }: { children: React.ReactNode, color: string }) {
  const colorStyles = {
    primary: "bg-primary/10 text-primary border-primary/30",
    secondary: "bg-secondary/10 text-secondary border-secondary/30",
    accent: "bg-accent/10 text-accent border-accent/30",
    white: "bg-white/5 text-white/70 border-white/10",
  };
  
  return (
    <span className={`font-mono text-xs px-3 py-1.5 pixel-border ${colorStyles[color as keyof typeof colorStyles]} hover:bg-${color}/20 transition-colors cursor-default`}>
      {children}
    </span>
  );
}
