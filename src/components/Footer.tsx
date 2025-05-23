// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

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
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.p
          className="text-fuchsia-400 hover:text-fuchsia-300 text-sm md:text-base"
          variants={footerVariants}
        >
          © {new Date().getFullYear()} Tabata Macedo. Todos os direitos reservados.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-6"
          variants={footerVariants}
        >
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
            href="https://linkedin.com/in/tabatamacedo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hello@tabatamacedo.com" 
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://instagram.com/seuinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
