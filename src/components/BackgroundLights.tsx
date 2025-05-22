// components/BackgroundLights.tsx
'use client';

import { motion } from 'framer-motion';

export default function BackgroundLights() {
  return (
    <>
      {/* Luz 1: Canto superior esquerdo - Grande e sutil (5%) */}
      <motion.div
        className="absolute top-[8%] left-[8%] w-64 h-64 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[5%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 90, 0],
          y: [0, -45, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      />
      {/* Luz 2: Meio-superior direita - Grande e sutil (5%) */}
      <motion.div
        className="absolute top-[8%] left-[55%] w-80 h-80 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[5%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 300, 0],
          y: [0, -45, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      {/* Luz 3: Meio-direita - Grande e sutil (10%) */}
      <motion.div
        className="absolute top-[40%] right-[15%] -translate-y-1/2 w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -15, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3.0 }}
      />

      {/* Luz 4: Meio-esquerda - Grande e sutil (10%) */}
      <motion.div
        className="absolute top-[30%] left-[15%] w-80 h-80 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      />
      {/* Luz 5: Parte inferior esquerda - Grande e sutil (10%) */}
      <motion.div
        className="absolute top-[60%] left-[10%] w-80 h-80 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4.2 }}
      />

      {/* Luz 6: Parte inferior direita - Média e fúcsia (10%) */}
      <motion.div
        className="absolute top-[70%] right-[15%] w-60 h-60 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      {/* Luz 7: Parte superior central - Grande e mais evidente (15%) */}
      <motion.div
        className="absolute top-[4%] left-1/2 -translate-x-1/2 w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[15%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -15, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
      />

      {/* NOVA LUZ 8: Meio-inferior central - Grande e sutil (10%) */}
      <motion.div
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-88 h-88 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 25, 0],
          y: [0, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5.0 }}
      />

      {/* NOVA LUZ 9: Canto superior direito (mais para a borda) - Média e sutil (10%) */}
      <motion.div
        className="absolute top-[15%] right-[5%] w-60 h-60 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* NOVA LUZ 10: Meio-esquerda (mais para o centro) - Média e sutil (10%) */}
      <motion.div
        className="absolute top-[50%] left-[30%] w-52 h-52 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 0.98, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />

      {/* NOVA LUZ 11: Parte inferior direita (nova) - Grande e sutil (8%) */}
      <motion.div
        className="absolute bottom-[5%] right-[5%] w-72 h-72 bg-pink-400 rounded-full mix-blend-screen opacity-[8%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 1.07, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 6.0 }}
      />

      {/* NOVA LUZ 12: Meio-superior esquerda (nova) - Média e sutil (7%) */}
      <motion.div
        className="absolute top-[25%] left-[70%] w-56 h-56 bg-pink-400 rounded-full mix-blend-screen opacity-[7%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 35, 0],
          y: [0, -15, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4.8 }}
      />
    </>
  );
}
