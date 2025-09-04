import { hygraph } from '../lib/hygraph';
import { PROJECTS_QUERY } from '../lib/queries';
import Cards from './Card';
import "../styles/components/project.css"
import "../styles/components/card.css"

export default async function Projects() {
  const data = await hygraph.request(PROJECTS_QUERY);
  const projects = data.projects;


  return (
    <div>
      <h2>Mijn Projecten</h2>
      <p>Een selectie van mijn recente werk, van e-commerce platforms tot 3D visualisaties en interactieve applicaties.</p>

      <div className="projects-grid">
        <h3>Uitgelichte Projecten</h3>

        <div className='cards-container'>
          {projects.map((project) => (
            <Cards key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  ) 
}