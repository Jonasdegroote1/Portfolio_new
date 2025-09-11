import "../../styles/components/ProjectGallery.css"


export default function ProjectGallery({ project }) {
  if (!project.gallery?.length) return null;

  return (
    <section className="project-gallery">
      <h2>Project Gallery</h2>
      <div className="gallery-grid">
        {project.gallery.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.url} alt={project.title || "Project Image"} />
          </div>
        ))}
      </div>
    </section>
  );
}
