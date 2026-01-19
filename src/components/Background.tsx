
import React from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main Solid Background */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[30%] left-[40%] w-[20%] h-[20%] rounded-full bg-violet-600/15 blur-[100px]"
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff1a 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} 
      />
      
      {/* Vignette Overlay using standard CSS to ensure compatibility */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          background: 'radial-gradient(circle at center, transparent 0%, rgba(2, 6, 23, 0.8) 100%)' 
        }} 
      />
    </div>
  );
};

export default InteractiveBackground;
