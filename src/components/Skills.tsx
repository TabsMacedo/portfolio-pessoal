'use client';

import { useSpring, animated, config, useTrail } from '@react-spring/web';
import { useInView } from '@react-spring/web';
import {
  Monitor,
  Server,
  Palette,
  GitBranch,
  Zap,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

const skillsData = [
  { id: 'skill-1', icon: Monitor, title: 'Desenvolvimento Frontend', description: 'Criação de interfaces responsivas com Bootstrap, React e Next.js, utilizando TypeScript.', color: 'fuchsia' },
  { id: 'skill-2', icon: Server, title: 'Desenvolvimento Backend', description: 'Desenvolvimento de APIs RESTful com Node.js para aplicações de alta performance.', color: 'pink' },
  { id: 'skill-4', icon: Palette, title: 'Design UI/UX', description: 'Prototipação e criação de experiências de usuário intuitivas e visualmente atraentes com Figma.', color: 'pink' },
  { id: 'skill-6', icon: GitBranch, title: 'Controle de Versão', description: 'Uso de Git e GitHub para colaboração eficiente e gestão de código-fonte.', color: 'pink' },
  { id: 'skill-7', icon: Zap, title: 'Acessibilidade e SEO', description: 'Foco em acessibilidade e SEO para garantir aplicações inclusivas, bem posicionadas nos mecanismos de busca e com excelente usabilidade para todos os usuários.', color: 'fuchsia' },
  { id: 'skill-8', icon: GraduationCap, title: 'Mentoria e Ensino', description: 'Paixão por compartilhar conhecimento e capacitar novos talentos na área de tecnologia.', color: 'pink' },
];

export default function Skills() {
  const [sectionRef, sectionInView] = useInView({ once: true, amount: 0.1 });
  const [hasSectionAnimated, setHasSectionAnimated] = useState(false);

  useEffect(() => {
    if (sectionInView && !hasSectionAnimated) {
      setHasSectionAnimated(true);
    }
  }, [sectionInView, hasSectionAnimated]);

  const sectionProps = useSpring({
    opacity: sectionInView ? 1 : 0,
    y: sectionInView ? 0 : 50,
    config: config.molasses,
    delay: 100,
  });

  const textItemProps = useSpring({
    opacity: sectionInView ? 1 : 0,
    y: sectionInView ? 0 : 20,
    config: config.gentle,
    delay: 150,
  });

  const trail = useTrail(skillsData.length, {
    opacity: hasSectionAnimated ? 1 : 0,
    scale: hasSectionAnimated ? 1 : 0.95,
    y: hasSectionAnimated ? 0 : 15,
    config: config.stiff,
    from: { opacity: 0, scale: 0.95, y: 15 },
  });

  const contactCardProps = useSpring({
    opacity: hasSectionAnimated ? 1 : 0,
    scale: hasSectionAnimated ? 1 : 0.95,
    y: hasSectionAnimated ? 0 : 15,
    config: config.stiff,
    delay: hasSectionAnimated ? 400 : 0,
    from: { opacity: 0, scale: 0.95, y: 15 },
  });

  return (
    <animated.section
      id="skills"
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto py-16 px-4 md:py-24 z-10"
      style={sectionProps}
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
        <div className="md:w-1/2">
          <animated.div style={textItemProps}>
            <p className="text-fuchsia-400 text-base uppercase tracking-widest font-bold mb-2">
              Serviços
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Minhas Especialidades
            </h2>
          </animated.div>
        </div>
        <animated.div
          className="md:w-1/2 text-gray-300 text-lg md:text-xl leading-relaxed mt-2"
          style={textItemProps}
        >
          <p>
            Transformo ideias complexas em soluções digitais elegantes e intuitivas, combinando proficiência técnica com um olhar apurado para a experiência do usuário.
          </p>
        </animated.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {trail.map((props, index) => {
          const skill = skillsData[index];
          return (
            <animated.div
              key={skill.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-start shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300 ease-in-out group"
              style={props}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-fuchsia-400/20 rounded-full mb-4">
                <skill.icon size={32} className={`text-${skill.color}-400 group-hover:text-${skill.color}-300 transition-colors duration-300`} />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">{skill.description}</p>
              <ArrowUpRight size={24} className="text-gray-400 group-hover:text-fuchsia-400 transition-colors duration-300 self-end" />
            </animated.div>
          );
        })}
      </div>

      <animated.div
        className="border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center mt-12 md:mt-16 shadow-lg hover:shadow-pink-500/20 transition-all duration-300 ease-in-out"
        style={contactCardProps}
      >
        <p className="text-gray-300 text-lg mb-6">Entre em contato</p>
        <a
          href="mailto:tabata.macedo1897@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out
                     bg-white/5 backdrop-blur-sm border border-fuchsia-500 hover:border-pink-500
                     text-fuchsia-300 hover:text-white hover:bg-fuchsia-600/20
                     shadow-lg transform hover:scale-105"
        >
          tabata.macedo1897@gmail.com
        </a>
      </animated.div>
    </animated.section>
  );
}
