
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", glowColor = "rgba(96, 165, 250, 0.2)" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
      className={`relative group rounded-2xl glass p-6 transition-all duration-300 ${className}`}
    >
      {/* Glossy Glow Effect on Hover */}
      <div 
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"
        style={{ background: `linear-gradient(45deg, ${glowColor}, rgba(139, 92, 246, 0.3), rgba(192, 132, 252, 0.1))` }}
      />
      
      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Gloss Overlay */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute top-[-100%] left-[-100%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 to-transparent rotate-45 group-hover:top-[-50%] group-hover:left-[-50%] transition-all duration-700" />
      </div>
    </motion.div>
  );
};

export default GlassCard;
