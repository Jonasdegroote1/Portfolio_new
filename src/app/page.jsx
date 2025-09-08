import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default async function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}
