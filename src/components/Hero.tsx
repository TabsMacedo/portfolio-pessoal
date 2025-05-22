'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircleMore, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.6,
      },
    },
  };

  const profileImageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.8,
      },
    },
  };

  const whatsappLink = "https://wa.me/5511999998888?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-16 px-4 md:py-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-16 h-16 border-t-4 border-l-4 border-fuchsia-500 rounded-tl-xl opacity-60 z-0" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-pink-500 rounded-br-xl opacity-60 z-0" />
      <div className="absolute top-1/2 left-0 w-24 h-[1px] bg-fuchsia-400 opacity-50 rotate-45 z-0" />
      <div className="absolute bottom-1/2 right-0 w-24 h-[1px] bg-pink-400 opacity-50 -rotate-45 z-0" />

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 md:gap-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left md:max-w-2xl px-4 md:px-0">
          <motion.p
            className="text-fuchsia-400 text-base uppercase tracking-widest font-bold"
            variants={textItemVariants}
          >
            Olá, eu sou 👋
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight md:leading-none"
            variants={textItemVariants}
          >
            <span className="inline-block relative text-white mb-4">
              Tábata
              <motion.span
                className="absolute left-0 bottom-[-10px] w-full h-3 bg-gradient-to-r from-fuchsia-400 to-pink-500 opacity-50 mix-blend-screen"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
            <br />
            <span className="inline-block relative text-white">
              Macedo
              <motion.span
                className="absolute left-0 bottom-[-10px] w-full h-3 bg-gradient-to-r from-fuchsia-400 to-pink-500 opacity-60 mix-blend-screen"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-gray-200 font-normal max-w-lg mx-auto md:mx-0 mt-2"
            variants={textItemVariants}
          >
            Desenvolvedora Fullstack <span className="text-pink-400">|</span> Inovação e Pessoas
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed"
            variants={textItemVariants}
          >
            Transformo ideias em experiências digitais modernas, acessíveis e impactantes. Vamos construir algo incrível juntos?
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start"
            variants={textItemVariants}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-fuchsia-300 font-semibold transition-all duration-300 ease-in-out bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 shadow-lg transform hover:scale-105 hover:text-white" // Alterado text-white para text-fuchsia-300 e adicionado hover:text-white
            >
              <MessageCircleMore size={20} /> Fale Comigo
            </a>
            <a
              href="/curriculo_tabata_macedo.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-fuchsia-300 font-semibold border-2 border-fuchsia-500 hover:border-pink-500 transition-all duration-300 ease-in-out hover:text-white hover:bg-fuchsia-600/20 transform hover:scale-105"
            >
              <Download size={20} /> Meu Trabalho
            </a>
          </motion.div>
        </div>
        <motion.div
          className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] flex-shrink-0 mt-12 md:mt-0 z-20"
          variants={imageContainerVariants}
          style={{
            background: 'linear-gradient(to top right, fuchsia, pink)',
            borderRadius: '25% 75% 70% 30% / 30% 30% 70% 70%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            overflow: 'hidden',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <span
              className="text-white text-9xl font-bold opacity-10 select-none -rotate-12 translate-x-1/4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Criar
            </span>
          </div>
          <motion.div className="absolute inset-0 z-20" variants={profileImageVariants}>
            <Image
              src="/img/perfil.jpg"
              alt="Foto de Tábata Macedo - Desenvolvedora Fullstack"
              fill
              className="object-cover object-center"
              style={{
                borderRadius: 'inherit',
              }}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
