export default function Cards({ project }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={project.thumbnail.url} alt={project.title} />
      </div>

      <div className="card-body">
        <div className="card-overlays">
          <h3 className="card-title">{project.title}</h3>

          <div className="card-categories">
            {project.categories?.length > 0 && (
              <span
                key={project.categories[0].id}
                className={`category category-${project.categories[0].name.toLowerCase()}`}
              >
                {project.categories[0].name}
              </span>
            )}
          </div>
        </div>

        <p className="card-description">{project.shortDescription}</p>

        <div className="card-technologies">
          {project.technologies.map((tech) => (
            <span key={tech.id} className="tech-badge">
              {tech.name}
            </span>
          ))}
        </div>

        <div className="card-actions">
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
          <a href={`/projects/${project.slug}`} className="btn btn-primary">
            Bekijk Details
          </a>
        </div>
      </div>
    </div>
  );
}
