import { PROJECTS_QUERY } from "../lib/queries";
import Cards from "./Card";
import "../styles/components/project.css";
import "../styles/components/card.css";

export default async function Projects() {
  // Fetch data direct via fetch met POST
  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Voeg token toe als je privé endpoint hebt
      // Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query: PROJECTS_QUERY }),
    cache: "no-store", // geen caching, altijd verse data
  });

  const { data } = await res.json();
  const projects = data.projects;

  return (
    <div className="projects" id="projects">
      <h2>Mijn Projecten</h2>
      <p className="projects-sub-description">
        Een selectie van mijn recente werk, van e-commerce platforms tot 3D visualisaties en <br /> interactieve applicaties.
      </p>

      <div className="projects-grid">
        <h3 className="projects-grid__title">Uitgelichte Projecten</h3>

        <div className="cards-container">
          {projects.map((project) => (
            <Cards key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
