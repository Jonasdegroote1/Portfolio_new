export default function ProjectLinks({ liveDemo, viewCode }) {
  if (!liveDemo && !viewCode) return null;

  return (
    <div className="project-links">
      <h2>Project Links</h2>
      <div className="link-buttons">
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {viewCode && (
          <a href={viewCode} target="_blank" rel="noreferrer">
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
