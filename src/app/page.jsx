import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default async function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
