import { hygraph } from '../lib/hygraph';
import { PROJECTS_QUERY } from '../lib/queries';
import Image from 'next/image';

export default async function Home() {
  const data = await hygraph.request(PROJECTS_QUERY);
  const projects = data.projects;

  return (
    <div>
      <h1>Mijn Portfolio</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description} </p>
          <div />
          {project.image && (
            <Image 
              src={project.image.url} 
              alt={project.title} 
              width={project.image.width} 
              height={project.image.height} 
            />
          )}
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Bekijk project</a>}
        </div>
      ))}
    </div>
  );
}
