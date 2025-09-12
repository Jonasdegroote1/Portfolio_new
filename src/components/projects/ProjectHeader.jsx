import "../../styles/components/ProjectHeader.css";
import Project3DObject from "./Project3DObject";

export default function ProjectHeader({ project }) {
  if (!project) return null;

  const firstCategory =
    project.categories && project.categories.length > 0
      ? project.categories[0]
      : null;

  return (
    <div className="project-hero">
      <div className="project-content">
        {/* Categories + status */}
        <div className="project-categories">
          {firstCategory && (
            <span
              key={firstCategory.id}
              className={`category category-${firstCategory.name.toLowerCase()}`}
            >
              {firstCategory.name}
            </span>
          )}

          <span
            className={`category category-${
              project.finished ? "finished" : "in-progress"
            }`}
          >
            {project.finished ? "Finished" : "In Progress"}
          </span>
        </div>

        {/* Titel en subtitel */}
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.shortDescription}</p>

        {/* Details */}
        <div className="project-details">
          {project.client && (
            <p>
              <strong>Client:</strong> {project.client}
            </p>
          )}
          {project.type && (
            <p>
              <strong>Type:</strong> {project.type}
            </p>
          )}
          {project.year && (
            <p>
              <strong>Year:</strong> {project.year}
            </p>
          )}
          {project.timeline && (
            <p>
              <strong>Timeline:</strong> {project.timeline}
            </p>
          )}
        </div>
      </div>
      {/* 3D Object */}
      <Project3DObject objectType={project.object3d} />
    </div>
  );
}
