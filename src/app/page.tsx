// page.tsx
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import BackgroundLights from '@/components/BackgroundLights';

export default function Home() {
  return (
    <main className="relative">
      <BackgroundLights /> 
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
