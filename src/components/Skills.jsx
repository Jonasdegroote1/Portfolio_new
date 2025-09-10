import {TECHNOLOGIES_QUERY} from '../lib/queries'
import "../styles/components/skills.css";
import SkillsCard from './SkillCard';

export default async function Skills() {

  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Voeg token toe als je privé endpoint hebt 
    },
    body: JSON.stringify({ query: TECHNOLOGIES_QUERY }),
    cache: "no-store", // geen caching, altijd verse data
  });

  const { data } = await res.json();
  const technologies = data.technologies;

  return (
    <div className="skills" id="skills">
      <h2>Mijn skills</h2>
      <p className="skills-sub-description" >Technologieën en tools waar ik dagelijks mee werk om geweldige digitale ervaringen te creëren.</p>
      <div className="skills-grid">
        {technologies.map((tech) => (
          <SkillsCard key={tech.id} tech={tech} />
        ))
        }
      </div>
    </div>
  )
}