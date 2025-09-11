import "../../styles/components/ProjectLinks.css"


export default function ProjectLinks({ project }) {
  if (!project) return null;

  const { liveDemo, viewCode } = project;

  if (!liveDemo && !viewCode) return null;

  return (
    <div className="project-links">
      <h2>Project Links</h2>
      <p>Bekijk het live project of verken de broncode</p>
      <div className="link-buttons">
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary">
            Live Demo
          </a>
        )}
        {viewCode && (
          <a href={viewCode} target="_blank" rel="noreferrer" className="btn btn-secondary">
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
