import { PROJECT_BY_SLUG_QUERY } from "@/lib/queries";

export default async function ProjectPage({ params }) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`, // als je private content hebt
    },
    body: JSON.stringify({
      query: PROJECT_BY_SLUG_QUERY,
      variables: { slug: params.slug },
    }),
    cache: "no-store", // altijd vers, zelfde als je Projects.jsx
  });

  const { data } = await res.json();
  const project = data.project;

  if (!project) {
    return <div>Project niet gevonden.</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      {project.heroImage?.url && (
        <img
          src={project.heroImage.url}
          alt={project.title}
          className="project-detail__image"
        />
      )}
      <p>{project.description}</p>

      <div className="project-detail__meta">
        <div className="categories">
          <strong>Categorieën: </strong>
          {project.categories.map((cat) => (
            <span key={cat.id}>{cat.name}</span>
          ))}
        </div>

        <div className="technologies">
          <strong>Technologieën: </strong>
          {project.technologies.map((tech) => (
            <span key={tech.id}>{tech.name}</span>
          ))}
        </div>
      </div>

      <div className="project-detail__actions">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Live Demo
          </a>
        )}
        {project.viewCode && (
          <a
            href={project.viewCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
