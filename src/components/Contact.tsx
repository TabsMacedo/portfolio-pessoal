// components/Contact.tsx

'use client';

// Removemos o import de 'motion' do 'framer-motion'
// import { motion } from 'framer-motion';
import { MessageCircleMore } from 'lucide-react';
import React from 'react'; // Importe React se já não estiver importado implicitamente

export default function Contact() {
  const whatsappLink = "https://wa.me/5516982711425?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <section
      id="contact"
      // Removemos todas as props de animação do Framer Motion
      className="w-full max-w-3xl mx-auto py-24 px-4 md:py-32 text-center z-10 relative overflow-hidden mb-20"
    >

      {/* A esfera gradiente de fundo foi convertida para uma div normal sem animação */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-fuchsia-400/10 via-pink-400/10 to-transparent rounded-full mix-blend-screen opacity-[10%] filter blur-3xl z-0 pointer-events-none"
      />

      {/* Linhas de fundo: mantidas como estão, sem animação contínua */}
      <div className="absolute top-1/4 left-0 w-24 h-[1px] bg-fuchsia-400 opacity-50 rotate-45 z-0 hidden md:block" />
      <div className="absolute bottom-1/4 right-0 w-24 h-[1px] bg-pink-400 opacity-50 -rotate-45 z-0 hidden md:block" />

      {/* Os elementos de texto e o botão também foram convertidos para divs/elementos normais */}
      <div> {/* Era <motion.div variants={itemVariants}> */}
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-6 leading-tight py-4 relative z-10">
          Vamos conversar?
        </h2>
      </div>

      <div> {/* Era <motion.div variants={itemVariants}> */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10 md:text-xl relative z-10">
          Pronta para transformar sua ideia em realidade? Me envie uma mensagem direta no WhatsApp.
          Será um prazer discutir seu projeto e como posso ajudar a construir algo incrível.
        </p>
      </div>

      <div> {/* Era <motion.div variants={itemVariants}> */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out
                       bg-white/5 backdrop-blur-sm border border-fuchsia-500 hover:border-pink-500
                       text-fuchsia-300 hover:text-white hover:bg-fuchsia-600/20
                       shadow-lg transform hover:scale-105 hover:shadow-fuchsia-500/30 relative z-10"
        >
          <MessageCircleMore size={20} /> Conversar no WhatsApp
        </a>
      </div>

    </section>
  );
}