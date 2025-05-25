'use client';

import Image from 'next/image';
import {
  Github,
  ExternalLink,
  CodeXml,
  LayoutDashboard,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Activity,
} from 'lucide-react';


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
    description: 'API robusta com autenticação e arquitetura escalável para gestão educacional.',
    githubLink: 'https://github.com/TabsMacedo/register-students',
    tags: ['Node.js', 'Express', 'JWT', 'MySQL', 'API REST'],
    icon: CodeXml,
    imageUrl: '/img/api.webp',
  },
  {
    id: 'corredores-voluntarios',
    title: 'Corredores Voluntários',
    description: 'Site institucional para eventos e comunicação de corredores voluntários.',
    githubLink: 'https://github.com/TabsMacedo/projeto-corvo',
    liveLink: 'https://corredoresvoluntarios.org.br/',
    tags: ['HTML', 'CSS', 'Javascript', 'UI/UX', 'Responsivo'],
    icon: BookOpen,
    imageUrl: '/img/corvo.webp',
  },
  {
    id: 'modern-portfolio',
    title: 'Portfólio Moderno',
    description: 'Este site! Com Next.js 14, Tailwind.',
    githubLink: 'https://github.com/TabsMacedo/portfolio',
    liveLink: '/',
    tags: ['Next.js 14', 'React', 'UI/UX', 'TypeScript', 'Tailwind CSS'],
    icon: LayoutDashboard,
    imageUrl: '/img/portfolio.webp',
  },
  {
    id: 'painel-coronavirus',
    title: 'Painel Coronavírus',
    description: 'Dashboard de dados sobre o Coronavírus com visualizações e filtros.',
    githubLink: 'https://github.com/TabsMacedo/projeto-kidopi',
    tags: ['PHP', 'MVC', 'PDO', 'Data Visualization', 'Dashboard'],
    icon: Activity,
    imageUrl: '/img/coronavirus.webp',
  },
];

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div
      className="glass-card text-left flex flex-col justify-between w-full max-w-[500px] h-[600px] sm:h-[650px] hover:border-fuchsia-500/50 group transition-transform duration-300 hover:scale-105 mx-auto"
    >
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          {project.icon && <project.icon size={32} className="text-fuchsia-400" />}
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
        <p className="text-white text-base leading-relaxed">{project.description}</p>
      </div>

      {project.imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden relative w-full h-48 sm:h-72">
          <Image
            src={project.imageUrl}
            alt={`Imagem do projeto ${project.title}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={project.id === 'modern-portfolio'}
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
          <Github size={18} /> Ver no GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold transition-colors group"
          >
            <ExternalLink size={18} /> Demo ao Vivo <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto py-16 px-4 md:py-24 text-center relative overflow-hidden"
    >
      <div className="mb-12"> {/* Removi a classe animate-fade-in-up para o título, caso você não queira nenhuma animação */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 text-transparent bg-clip-text leading-tight py-4">
          Meus Projetos
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          // **** ALTERAÇÕES CHAVE AQUI PARA MOBILE ****
          slidesPerView={'auto'} // 'auto' é melhor para mobile, permite que o Swiper calcule
          coverflowEffect={{
            rotate: 0,   // Reduz a rotação para mobile para evitar cortes
            stretch: 0,
            depth: 100,  // Ajusta a profundidade
            modifier: 1, // Torna o efeito menos agressivo para mobile
            slideShadows: false,
          }}
          // **** BREAKPOINTS AJUSTADOS ****
          breakpoints={{
            // Pequenas telas (mobile)
            320: {
              slidesPerView: 1, // Apenas um slide por vez em telas muito pequenas
              spaceBetween: 10, // Espaço entre os slides (opcional)
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              },
            },
            // Telas um pouco maiores (tablets pequenos)
            640: {
              slidesPerView: 2, // 2 slides em telas médias
              spaceBetween: 20,
              coverflowEffect: {
                rotate: 10,
                stretch: 0,
                depth: 150,
                modifier: 0.7,
                slideShadows: false,
              },
            },
            // Telas grandes (desktops)
            1024: {
              slidesPerView: 3, // 3 slides em telas maiores
              spaceBetween: 30,
              coverflowEffect: {
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 0.5,
                slideShadows: false,
              },
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          className="mySwiper pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-2 md:left-1 z-20 cursor-pointer p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white shadow-lg">
          <ChevronLeft size={28} />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-20 cursor-pointer p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white shadow-lg">
          <ChevronRight size={28} />
        </div>
        <div className="swiper-pagination-custom absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl flex justify-center gap-3 text-white text-sm" />
      </div>
    </section>
  );
}