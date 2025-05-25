'use client';

import Image from 'next/image';
import { MessageCircleMore, Download } from 'lucide-react';

export default function Hero() {
  const whatsappLink =
    'https://wa.me/5516982711425?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.';

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-16 px-4 md:py-0">
    
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 md:gap-16 animate-fadeInSlow">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left md:max-w-2xl px-4 md:px-0">
          <p className="text-fuchsia-400 text-base uppercase tracking-widest font-bold animate-fadeInUp delay-100">
            Olá, eu sou 👋
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight md:leading-none relative text-white mb-4 animate-fadeInUp delay-200">
            <span className="inline-block relative">
              Tábata
              <span className="absolute left-0 bottom-[-10px] w-full h-3 bg-gradient-to-r from-fuchsia-400 to-pink-500 opacity-50 mix-blend-screen origin-left scale-x-0 animate-underline delay-300"></span>
            </span>
            <br />
            <span className="inline-block relative">
              Macedo
              <span className="absolute left-0 bottom-[-10px] w-full h-3 bg-gradient-to-r from-fuchsia-400 to-pink-500 opacity-60 mix-blend-screen origin-left scale-x-0 animate-underline delay-400"></span>
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-200 font-normal max-w-lg mx-auto md:mx-0 mt-2 animate-fadeInUp delay-400">
            Desenvolvedora Fullstack <span className="text-pink-400">|</span>{' '}
            Educação
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed animate-fadeInUp delay-500">
            Transformo ideias em experiências digitais modernas, acessíveis e
            impactantes. Vamos construir algo incrível juntos?
          </p>

          {/* Botões ajustados */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start animate-fadeInUp delay-600">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base sm:px-6 sm:py-3 rounded-lg text-fuchsia-300 font-semibold transition-transform transition-colors duration-500 ease-in-out bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 shadow-lg transform hover:scale-105 hover:text-white will-change-transform will-change-color"
              style={{ transformOrigin: 'center' }}
            >
              <MessageCircleMore size={20} /> Fale Comigo
            </a>
            <a
              href="/curriculo_tabata_macedo.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base sm:px-6 sm:py-3 rounded-lg text-fuchsia-300 font-semibold border-2 border-fuchsia-500 hover:border-pink-500 transition-colors transition-transform duration-500 ease-in-out hover:text-white hover:bg-fuchsia-600/20 transform hover:scale-105 will-change-transform will-change-color"
              style={{ transformOrigin: 'center' }}
            >
              <Download size={20} /> Meu currículo
            </a>
          </div>
        </div>

        <div
          className="hidden md:block relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] flex-shrink-0 mt-12 md:mt-0 z-20 rounded-[25%_75%_70%_30%/_30%_30%_70%_70%] bg-gradient-to-tr from-fuchsia-600 to-pink-600 shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-slideInFade"
          style={{ overflow: 'hidden' }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <span
              className="text-white text-9xl font-bold opacity-10 select-none -rotate-12 translate-x-1/4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Criar
            </span>
          </div>

          <div className="absolute inset-0 z-20">
            <Image
              src="/img/perfil.webp"
              alt="Foto de Tábata Macedo - Desenvolvedora Fullstack"
              fill
              className="object-cover object-center rounded-[inherit]"
              priority
              sizes="(max-width: 767px) 0px, (min-width: 768px) 450px, (min-width: 1024px) 550px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
