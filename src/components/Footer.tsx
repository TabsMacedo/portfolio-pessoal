// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail} from 'lucide-react';

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      className="w-full bg-black/20 backdrop-blur-sm border-t border-white/10 py-12 px-4 text-center z-10 relative"
      initial="hidden"
      animate="visible"  // anima só 1x ao montar
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-fuchsia-400 hover:text-fuchsia-300 text-sm md:text-base">
          © {new Date().getFullYear()} Tabata Macedo. Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/tabatamacedo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/t%C3%A1bata-macedo-2b7212243/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:tabata.macedo1897@gmail.com"
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
