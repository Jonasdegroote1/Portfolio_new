import "../../styles/components/MetaSection.css"

export default function MetaSection({ project }) {
  if (!project) return null;

  const { categories = [], technologies = [] } = project;

  return (
    <div className="meta-section">
      {/* Links: Technologieën */}
      <div className="meta-column meta-column-left">
        <h3 className="meta-title">Technologieën</h3>
        <div className="badges badges-tech">
          {technologies.map((tech, index) => (
            <span key={tech.id || index} className="badge badge-tech">
              {tech.name || tech}
            </span>
          ))}
        </div>
      </div>

      {/* Rechts: Categorieën */}
      <div className="meta-column meta-column-right">
        <h3 className="meta-title">Categorieën</h3>
        <div className="categories-vertical">
          {categories.map((cat, index) => (
            <span key={cat.id || index} className="badge badge-cat vertical">
              {cat.name || cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

