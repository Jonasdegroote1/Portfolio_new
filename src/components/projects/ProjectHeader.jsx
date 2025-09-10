import "../../styles/components/ProjectHeader.css";

export default function ProjectHeader({ project }) {
  // Destructure met defaults
console.log(project);
  return (
    <div className="project-hero">
      <div className="project-content">

        <div className="project-categories">
          {project.categories?.map((cat) => (
            <span key={cat.id} className={`category category-${cat.name.toLowerCase()}`}>
              {cat.name}
            </span>
          ))}
            <span className={`category category-${project.finished ? "finished" : "in-progress"}`}>
                {project.finished ? "Finished" : "In Progress"}
              </span>
        </div>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.shortDescription}</p>

          <div className="project-details">
            <p>
              {project.client && <span><strong>Client:</strong> {project.client}</span>}
            </p>
            <p>
              {project.type && <span><strong>Type:</strong> {project.type}</span>}
            </p>
            <p>
              {project.year && <span><strong>Year:</strong> {project.year}</span>}
            </p>
            <p>
              {project.timeline && <span><strong>Timeline:</strong> {project.timeline}</span>}
            </p>
          </div>

      </div>
    </div>
  );
}
