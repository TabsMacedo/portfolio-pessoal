'use client'; 

import { motion } from 'framer-motion';
import { MessageCircleMore } from 'lucide-react';

export default function Contact() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const whatsappLink = "https://wa.me/5511999998888?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <motion.section
      id="contact"
      className="w-full max-w-3xl mx-auto py-24 px-4 md:py-32 text-center z-10 relative overflow-hidden mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-fuchsia-400/10 via-pink-400/10 to-transparent rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-300/10 rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[10%] left-0 w-32 h-[2px] bg-fuchsia-400 opacity-[10%] rotate-45 z-0" 
        initial={{ opacity: 0, scaleX: 0, x: -50 }}
        whileInView={{ opacity: 0.3, scaleX: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-32 h-[2px] bg-fuchsia-400 opacity-[20%] -rotate-45 z-0" 
        initial={{ opacity: 0, scaleX: 0, x: 50 }}
        whileInView={{ opacity: 0.4, scaleX: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.div
        className="absolute top-5 right-1/4 w-20 h-[1px] bg-fuchsia-300 opacity-[20%] rotate-12 z-0"
        initial={{ opacity: 0, scaleX: 0, x: 30 }}
        whileInView={{ opacity: 0.5, scaleX: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-5 left-1/4 w-20 h-[1px] bg-fuchsia-400 opacity-[15%] -rotate-12 z-0"
        initial={{ opacity: 0, scaleX: 0, x: -30 }}
        whileInView={{ opacity: 0.3, scaleX: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-6 leading-tight py-4 relative z-10"
        variants={itemVariants}
      >
        Vamos conversar?
      </motion.h2>

      <motion.p
        className="text-gray-300 text-lg leading-relaxed mb-10 md:text-xl relative z-10"
        variants={itemVariants}
      >
        Pronta para transformar sua ideia em realidade? Me envie uma mensagem direta no WhatsApp.
        Será um prazer discutir seu projeto e como posso ajudar a construir algo incrível.
      </motion.p>

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out
                   bg-white/5 backdrop-blur-sm border border-fuchsia-500 hover:border-pink-500
                   text-fuchsia-300 hover:text-white hover:bg-fuchsia-600/20
                   shadow-lg transform hover:scale-105 hover:shadow-fuchsia-500/30 relative z-10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        variants={itemVariants}
      >
        <MessageCircleMore size={20} /> Conversar no WhatsApp
      </motion.a>
    </motion.section>
  );
}
