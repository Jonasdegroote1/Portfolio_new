import Hero from '@/components/Hero';
import { hygraph } from '../lib/hygraph';
import { PROJECTS_QUERY } from '../lib/queries';
import Image from 'next/image';
import About from '@/components/About';

export default async function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
