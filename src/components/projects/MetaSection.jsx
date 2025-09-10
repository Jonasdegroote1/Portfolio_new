export default function MetaSection({ categories, technologies }) {
  return (
    <div className="meta-section">
      <div>
        <h3>Categorieën</h3>
        <div className="badges">
          {categories.map((cat) => (
            <span key={cat.id} className="badge badge-gray">
              {cat.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3>Technologieën</h3>
        <div className="badges">
          {technologies.map((tech) => (
            <span key={tech.id} className="badge badge-blue">
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
