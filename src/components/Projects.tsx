'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CodeXml, LayoutDashboard, BookOpen, ChevronLeft, ChevronRight, Activity } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  tags: string[];
  icon?: React.ElementType;
  imageUrl?: string;
}

const projects: ProjectProps[] = [
  {
    id: 'register-students',
    title: 'Register Students API',
    description: 'API robusta com autenticação e arquitetura escalável para gestão educacional. Foco em segurança e clareza para controle de alunos.',
    githubLink: 'https://github.com/tabatamacedo/register-students',
    tags: ['Node.js', 'Express', 'JWT', 'MySQL', 'API REST'],
    icon: CodeXml,
    imageUrl: '/img/api.png',
  },
  {
    id: 'corredores-voluntarios',
    title: 'Corredores Voluntários',
    description: 'Site institucional e plataforma para organização de eventos e comunicação para corredores voluntários, focado em acessibilidade e impacto social.',
    githubLink: 'https://github.com/corredoresvoluntarios/site',
    liveLink: 'https://corredoresvoluntarios.org.br/',
    tags: ['HTML', 'CSS', 'Javascript', 'UI/UX', 'Responsivo'],
    icon: BookOpen,
    imageUrl: '/img/corvo.png',
  },
  {
    id: 'modern-portfolio',
    title: 'Portfólio Moderno',
    description: 'Este site que você está navegando! Construído com Next.js 14, Tailwind CSS e Framer Motion para animações suaves, focado em clareza, responsividade e estilo profissional.',
    githubLink: 'https://github.com/tabatamacedo/portfolio',
    liveLink: '/',
    tags: ['Next.js 14', 'React', 'UI/UX', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icon: LayoutDashboard,
    imageUrl: '/img/portfolio.png',
  },
  {
    id: 'painel-coronavirus',
    title: 'Painel Informativo sobre o Coronavírus',
    description: 'Dashboard interativo para visualização de dados do Coronavírus, com gráficos e informações atualizadas em tempo real, desenvolvido para análise e acompanhamento.',
    githubLink: 'https://github.com/TabsMacedo/projeto-kidopi',
    tags: ['PHP', 'MVC', 'PDO', 'Data Visualization', 'Dashboard'],
    icon: Activity,
    imageUrl: '/img/coronavirus.png',
  }
];

function ProjectCard({ project }: { project: ProjectProps }) {
  const [imgSrc, setImgSrc] = useState(project.imageUrl ?? '');

  return (
    <motion.div
      className="glass-card text-left flex flex-col justify-between w-[500px] h-[650px] hover:border-fuchsia-500/50 group transition-transform duration-300 hover:scale-105 mx-auto"
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
    >
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          {project.icon && <project.icon size={32} className="text-fuchsia-400" />}
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
        <p className="text-white text-base leading-relaxed">{project.description}</p>
      </div>
      {imgSrc && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image
            src={imgSrc}
            alt={`Imagem do projeto ${project.title}`}
            width={400}
            height={300}
            className="w-full h-[300px] object-cover"
            onError={() =>
              setImgSrc('https://placehold.co/400x300/cccccc/000000?text=Imagem+Indisponível')
            }
          />
        </div>
      )}
      <div className="flex flex-wrap gap-2 mt-4 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-fuchsia-800/30 text-fuchsia-300 text-xs font-medium px-2.5 py-0.5 rounded-full border border-fuchsia-600/50"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-auto">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 font-semibold transition-colors group"
        >
          <Github size={18} /> Ver no GitHub{' '}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold transition-colors group"
          >
            <ExternalLink size={18} /> Demo ao Vivo{' '}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <motion.section
      id="projects"
      className="w-full max-w-6xl mx-auto py-16 px-4 md:py-24 text-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-12 leading-tight py-4"
        variants={titleVariants}
      >
        Meus Projetos
      </motion.h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 0.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
              coverflowEffect: {
                rotate: 15,
                depth: 150,
                modifier: 0.7,
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
              coverflowEffect: {
                rotate: 10,
                depth: 100,
                modifier: 0.5,
              },
            },
          }}
          className="mySwiper pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 z-20 cursor-pointer p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white shadow-lg">
          <ChevronLeft size={32} />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 z-20 cursor-pointer p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white shadow-lg">
          <ChevronRight size={32} />
        </div>
        <div className="swiper-pagination-custom absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl flex justify-center gap-3 text-white text-sm"></div>
      </div>
    </motion.section>
  );
}
